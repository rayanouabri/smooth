export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Get API key from environment - ALWAYS use server-side variable for security
    // Never expose Gemini API key to client
    const apiKey = process.env.GEMINI_API_KEY;
    
    console.log('[Gemini Proxy] Starting request...');
    console.log('[Gemini Proxy] API Key present:', !!apiKey);
    
    if (!apiKey) {
      console.error('[Gemini Proxy] ❌ No GEMINI_API_KEY found on Vercel');
      console.error('[Gemini Proxy] Please add it to Vercel Settings → Environment Variables');
      return res.status(500).json({ 
        error: 'GEMINI_API_KEY not configured on Vercel',
        help: 'Add GEMINI_API_KEY at: https://vercel.com/dashboard → Settings → Environment Variables'
      });
    }

    const body = req.body || {};
    const prompt = body.prompt;
    if (!prompt) {
      console.error('[Gemini Proxy] ❌ Missing prompt in request body');
      return res.status(400).json({ error: 'Missing prompt' });
    }

    console.log('[Gemini Proxy] Sending request to Gemini API...');
    
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
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
      ]
    };

    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await upstream.json();
    
    // Handle error responses
    if (!upstream.ok) {
      console.error('[Gemini Proxy] ❌ API Error:', json?.error);
      const errorMsg = json?.error?.message || JSON.stringify(json?.error) || 'Unknown error';
      
      // Check for leaked key error
      if (errorMsg.includes('leaked') || errorMsg.includes('Leaked')) {
        console.error('[Gemini Proxy] 🚨 API KEY WAS REPORTED AS LEAKED');
        return res.status(401).json({ 
          error: 'API key compromised',
          message: 'Your API key was reported as leaked. Please generate a new one at https://aistudio.google.com/apikey',
          details: errorMsg
        });
      }
      
      return res.status(upstream.status).json({ 
        error: errorMsg,
        status: upstream.status
      });
    }

    // Extract content from response
    const content = json.candidates?.[0]?.content?.parts?.[0]?.text || json.content || '';
    
    if (!content) {
      console.error('[Gemini Proxy] ❌ No content in response:', json);
      return res.status(500).json({ 
        error: 'No content returned from Gemini',
        debug: json 
      });
    }

    console.log('[Gemini Proxy] ✅ Success, content length:', content.length);
    return res.status(200).json({ content });
  } catch (err) {
    console.error('[Gemini Proxy] ❌ Exception:', err.message);
    console.error('[Gemini Proxy] Stack:', err.stack);
    return res.status(500).json({ 
      error: err.message || 'Server error',
      type: err.name,
      timestamp: new Date().toISOString()
    });
