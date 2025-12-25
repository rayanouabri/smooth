module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Try multiple env var names for the API key
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    
    console.log('Gemini proxy - checking for API key...');
    console.log('Available env vars:', Object.keys(process.env).filter(k => k.includes('GEMINI') || k.includes('GOOGLE')).slice(0, 5));
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY not found in:', { GEMINI_API_KEY: !!process.env.GEMINI_API_KEY, VITE_GEMINI_API_KEY: !!process.env.VITE_GEMINI_API_KEY, GOOGLE_API_KEY: !!process.env.GOOGLE_API_KEY });
      return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server' });
    }

    const body = req.body || {};
    const prompt = body.prompt;
    if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

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

    console.log('Gemini proxy - calling API with key:', apiKey.substring(0, 10) + '...');
    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await upstream.json();
    if (!upstream.ok) {
      console.error('Gemini upstream error:', json);
      return res.status(upstream.status).json({ error: json.error?.message || 'Gemini API error' });
    }

    const content = json.candidates?.[0]?.content?.parts?.[0]?.text || '';
    console.log('Gemini proxy - success');
    return res.status(200).json({ content, raw: json });
  } catch (err) {
    console.error('Gemini proxy error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
};
