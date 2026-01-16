export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse body
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

    const prompt = body.prompt;
    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    // UTILISER UNIQUEMENT gemini-2.5-flash
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

    console.log('[Gemini] Calling gemini-2.5-flash, prompt length:', prompt.length);
    
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
      console.error('[Gemini] Parse error. Status:', response.status);
      return res.status(500).json({ 
        error: 'Invalid response from Gemini',
        status: response.status,
        detail: responseText.substring(0, 200)
      });
    }

    if (!response.ok) {
      const errorMsg = json.error?.message || json.error?.message || json.error || 'Gemini API error';
      const errorStatus = json.error?.status || response.status;
      console.error('[Gemini] API error:', errorStatus, errorMsg);
      
      // Détection spécifique de l'erreur "API key expired"
      if (errorMsg.toLowerCase().includes('api key expired') || 
          errorMsg.toLowerCase().includes('key expired') ||
          errorMsg.toLowerCase().includes('expired')) {
        return res.status(500).json({ 
          error: 'API key expired',
          message: 'Votre clé Gemini a expiré. Veuillez la renouveler dans Vercel Environment Variables et redéployer l\'application.'
        });
      }
      
      if (response.status === 401 || response.status === 403 || errorStatus === 401 || errorStatus === 403) {
        return res.status(500).json({ 
          error: 'Invalid API key',
          message: 'Clé API invalide. Vérifiez GEMINI_API_KEY dans Vercel Environment Variables et redéployez l\'application.'
        });
      }
      if (response.status === 429) {
        return res.status(500).json({ 
          error: 'Rate limit exceeded',
          message: 'Try again later'
        });
      }
      if (response.status === 404) {
        return res.status(500).json({ 
          error: 'Model gemini-2.5-flash not found',
          message: `Error: ${errorMsg}. Verify model name and API access.`
        });
      }
      
      return res.status(500).json({ 
        error: errorMsg,
        status: response.status
      });
    }

    const content = json.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!content) {
      console.error('[Gemini] No content:', JSON.stringify(json).substring(0, 300));
      return res.status(500).json({ error: 'No content from Gemini' });
    }
    
    console.log('[Gemini] Success! Content length:', content.length);
    return res.status(200).json({ content });
    
  } catch (err) {
    console.error('[Gemini] Error:', err.message);
    return res.status(500).json({ 
      error: err.message || 'Server error',
      message: 'Check server logs for details'
    });
  }
}
