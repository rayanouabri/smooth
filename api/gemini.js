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
    // Parser le body si nécessaire
    // Vercel peut déjà parser le body, donc on vérifie d'abord
    let body = req.body;
    
    // Si le body est une string, le parser
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        console.error('[Gemini] Body parse error:', e.message, 'Body:', body.substring(0, 100));
        return res.status(400).json({ error: 'Invalid JSON in request body' });
      }
    }
    
    // Si body est undefined ou null, essayer de le lire depuis req
    if (!body || (typeof body === 'object' && Object.keys(body).length === 0)) {
      console.warn('[Gemini] Empty or undefined body, checking req.body directly');
      body = req.body || {};
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('[Gemini] GEMINI_API_KEY not configured in Vercel environment variables');
      return res.status(500).json({ 
        error: 'GEMINI_API_KEY not configured on server',
        message: 'Please configure GEMINI_API_KEY in Vercel project settings → Environment Variables'
      });
    }

    const prompt = body.prompt;
    if (!prompt) {
      console.error('[Gemini] Missing prompt in request');
      return res.status(400).json({ error: 'Missing prompt' });
    }

    // Utiliser gemini-2.5-flash (modèle 2.5 flash - accès exclusif)
    // Format: https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent
    const models = [
      { name: 'gemini-2.5-flash', version: 'v1beta' },
      { name: 'gemini-2.5-flash-exp', version: 'v1beta' },
      { name: 'gemini-2.5-flash-latest', version: 'v1beta' },
    ];
    
    // Utiliser directement gemini-2.5-flash
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

    console.log('[Gemini] Making request to Gemini API, prompt length:', prompt.length);
    console.log('[Gemini] Using model: gemini-2.5-flash (v1beta)');
    
    let upstream;
    let lastError;
    let triedModels = [];
    
    // Essayer chaque modèle jusqu'à ce qu'un fonctionne
    for (const model of models) {
      const modelUrl = `https://generativelanguage.googleapis.com/${model.version}/models/${model.name}:generateContent?key=${apiKey}`;
      triedModels.push(`${model.version}/${model.name}`);
      
      try {
        console.log(`[Gemini] Trying ${model.version}/${model.name}...`);
        upstream = await fetch(modelUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        
        // Si ça fonctionne (status < 400), on sort de la boucle
        if (upstream.status < 400) {
          console.log(`[Gemini] Success with ${model.version}/${model.name}`);
          break;
        }
        
        // Si 404, essayer le modèle suivant
        if (upstream.status === 404) {
          console.log(`[Gemini] ${model.version}/${model.name} returned 404, trying next model...`);
          const errorText = await upstream.text();
          let errorJson;
          try {
            errorJson = JSON.parse(errorText);
          } catch (e) {
            errorJson = { error: { message: errorText } };
          }
          lastError = new Error(errorJson.error?.message || `Model ${model.name} not found`);
          continue; // Essayer le modèle suivant
        }
        
        // Autre erreur, on sort
        break;
      } catch (fetchError) {
        console.error(`[Gemini] Error with ${model.version}/${model.name}:`, fetchError.message);
        lastError = fetchError;
        continue; // Essayer le modèle suivant
      }
    }
    
    if (!upstream || upstream.status >= 400) {
      const errorMsg = lastError?.message || `All models failed. Tried: ${triedModels.join(', ')}`;
      console.error('[Gemini] All models failed:', errorMsg);
      return res.status(500).json({ 
        error: 'No available Gemini model',
        message: errorMsg
      });
    }

    const rawText = await upstream.text();
    let json;
    try {
      json = JSON.parse(rawText);
    } catch (parseErr) {
      console.error('[Gemini] JSON parse error. Status:', upstream.status, 'Raw:', rawText.substring(0, 500));
      return res.status(500).json({ error: 'Invalid JSON from Gemini', status: upstream.status, detail: rawText.substring(0, 200) });
    }

    if (!upstream.ok) {
      console.error('[Gemini] API error:', upstream.status, JSON.stringify(json).substring(0, 500));
      const errorMessage = json.error?.message || json.error || 'Gemini API error';
      
      // Messages d'erreur plus spécifiques
      if (upstream.status === 401 || upstream.status === 403) {
        return res.status(500).json({ 
          error: 'Invalid API key',
          message: 'Please check your GEMINI_API_KEY in Vercel environment variables'
        });
      }
      if (upstream.status === 429) {
        return res.status(500).json({ 
          error: 'Rate limit exceeded',
          message: 'Gemini API quota exceeded. Please try again later.'
        });
      }
      
      return res.status(500).json({ 
        error: errorMessage,
        status: upstream.status
      });
    }

    const content = json.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!content) {
      console.error('[Gemini] No content in response:', JSON.stringify(json).substring(0, 300));
      return res.status(500).json({ error: 'No content generated by Gemini' });
    }
    
    return res.status(200).json({ content });
  } catch (err) {
    console.error('[Gemini] Server error:', err.message);
    console.error('[Gemini] Stack:', err.stack);
    // Retourner un message d'erreur plus détaillé
    const errorMessage = err.message || 'Unknown server error';
    return res.status(500).json({ 
      error: errorMessage,
      message: 'An error occurred while processing your request. Please check the server logs for more details.'
    });
  }
};
