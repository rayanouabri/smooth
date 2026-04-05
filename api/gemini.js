/**
 * Proxy LLM — utilise Gemini API directement (gemini-2.0-flash-lite pour économiser les crédits)
 * La clé est stockée dans la variable d'environnement GEMINI_API_KEY
 */

const RATE_LIMITS = {};
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_MAX = 20;

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
  const allowedOrigins = [
    'https://www.franceprepacademy.fr',
    'https://franceprepacademy.fr',
    ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:5173', 'http://localhost:3000'] : []),
  ];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
    }

    const prompt = body?.prompt;
    if (!prompt) return res.status(400).json({ error: 'Missing prompt' });
    if (prompt.length > 8000) return res.status(400).json({ error: 'Prompt trop long (max 8000 caractères)' });

    // Rate limiting
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.headers['x-real-ip'] || 'unknown';
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ error: 'Trop de requêtes. Réessayez dans une minute.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY non configurée' });
    }

    // Choisir le modèle selon la longueur du prompt pour optimiser les coûts
    // - gemini-2.0-flash-lite : ultra rapide, très économique → pour chatbot, résumés courts
    // - gemini-2.0-flash : rapide, équilibré → pour quiz, assistant IA
    const useHeavyModel = prompt.length > 2000 || prompt.includes('génère') || prompt.includes('analyse');
    const model = useHeavyModel ? 'gemini-2.0-flash' : 'gemini-2.0-flash-lite';

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
      ],
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    let json;
    try { json = JSON.parse(responseText); } catch {
      console.error('[Gemini] Parse error, status:', response.status, responseText.slice(0, 200));
      return res.status(500).json({ error: 'Réponse invalide de Gemini API' });
    }

    if (!response.ok) {
      const errorMsg = json.error?.message || `Gemini API error ${response.status}`;
      console.error('[Gemini] API error:', response.status, errorMsg);
      return res.status(500).json({ error: errorMsg });
    }

    const content = json.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!content) {
      return res.status(500).json({ error: 'Réponse vide de Gemini' });
    }

    return res.status(200).json({ content });

  } catch (err) {
    console.error('[Gemini] Error:', err.message);
    return res.status(500).json({ error: 'Erreur serveur: ' + err.message });
  }
}
