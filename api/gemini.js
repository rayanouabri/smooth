// Simple in-memory rate limiting (resets on cold start)
const RATE_LIMITS = {};
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 15; // 15 requests per minute per IP

function checkRateLimit(ip) {
  const now = Date.now();
  if (!RATE_LIMITS[ip] || now > RATE_LIMITS[ip].reset) {
    RATE_LIMITS[ip] = { count: 1, reset: now + RATE_LIMIT_WINDOW };
    return true;
  }
  RATE_LIMITS[ip].count++;
  return RATE_LIMITS[ip].count <= RATE_LIMIT_MAX;
}

export default async function handler(req, res) {
  // CORS - restrict to allowed origins only
  const allowedOrigins = [
    'https://www.franceprepacademy.fr',
    'https://franceprepacademy.fr',
    'http://localhost:5173',
    'http://localhost:3000',
  ];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON' });
      }
    }
    
    if (!body || (typeof body === 'object' && Object.keys(body).length === 0)) {
      body = req.body || {};
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'GEMINI_API_KEY not configured',
        message: 'Configure GEMINI_API_KEY in Vercel environment variables'
      });
    }

    // Rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ error: 'Trop de requêtes. Réessayez dans une minute.' });
    }

    const prompt = body.prompt;
    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    // Limit prompt size to prevent abuse
    if (prompt.length > 5000) {
      return res.status(400).json({ error: 'Le message est trop long (max 5000 caractères)' });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
      ]
    };
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    let json;
    
    try {
      json = JSON.parse(responseText);
    } catch (parseErr) {
      console.error('[Gemini] Parse error:', response.status);
      return res.status(500).json({ 
        error: 'Invalid response from Gemini',
        status: response.status
      });
    }

    if (!response.ok) {
      const errorMsg = json.error?.message || 'Gemini API error';
      
      if (errorMsg.toLowerCase().includes('expired')) {
        return res.status(500).json({ 
          error: 'API key expired',
          message: 'Renew Gemini API key in Vercel environment variables'
        });
      }
      
      if (response.status === 401 || response.status === 403) {
        return res.status(500).json({ 
          error: 'Invalid API key',
          message: 'Check GEMINI_API_KEY in Vercel environment variables'
        });
      }
      
      if (response.status === 429) {
        return res.status(500).json({ 
          error: 'Rate limit exceeded',
          message: 'Try again later'
        });
      }
      
      return res.status(500).json({ error: errorMsg });
    }

    const content = json.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!content) {
      return res.status(500).json({ error: 'No content from Gemini' });
    }
    
    return res.status(200).json({ content });
    
  } catch (err) {
    console.error('[Gemini] Error:', err.message);
    return res.status(500).json({ error: 'Server error' });
  }
}