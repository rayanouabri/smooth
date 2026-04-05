/**
 * Proxy LLM — utilise Vertex AI (Gemini via Google Cloud) avec service account OAuth2
 * La clé privée est stockée dans les variables d'environnement Vercel (VERTEX_PRIVATE_KEY, etc.)
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

// Crée un JWT signé avec la clé privée RSA du service account
async function createJWT(clientEmail, privateKeyPem) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/cloud-platform',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const enc = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const signingInput = `${enc(header)}.${enc(payload)}`;

  // Importe la clé privée PEM
  const pemBody = privateKeyPem
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s+/g, '');
  const keyBuffer = Buffer.from(pemBody, 'base64');

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    keyBuffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    Buffer.from(signingInput)
  );

  const sig = Buffer.from(signature).toString('base64url');
  return `${signingInput}.${sig}`;
}

// Obtient un access token OAuth2 via le service account
async function getAccessToken(clientEmail, privateKeyPem) {
  const jwt = await createJWT(clientEmail, privateKeyPem);
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OAuth2 error: ${response.status} ${text}`);
  }
  const data = await response.json();
  return data.access_token;
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

    // Récupère les credentials depuis les variables d'environnement
    const clientEmail = process.env.VERTEX_CLIENT_EMAIL;
    const privateKey = process.env.VERTEX_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const projectId = process.env.VERTEX_PROJECT_ID || 'gen-lang-client-0331965398';

    if (!clientEmail || !privateKey) {
      return res.status(500).json({ error: 'Vertex AI credentials non configurés (VERTEX_CLIENT_EMAIL / VERTEX_PRIVATE_KEY)' });
    }

    // Obtenir le token OAuth2
    const accessToken = await getAccessToken(clientEmail, privateKey);

    // Appeler Vertex AI — gemini-2.0-flash (rapide et économique)
    const model = 'gemini-2.0-flash';
    const location = 'us-central1';
    const url = `https://${location}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${location}/publishers/google/models/${model}:generateContent`;

    const payload = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    let json;
    try { json = JSON.parse(responseText); } catch {
      console.error('[Vertex] Parse error, status:', response.status);
      return res.status(500).json({ error: 'Réponse invalide de Vertex AI' });
    }

    if (!response.ok) {
      const errorMsg = json.error?.message || `Vertex AI error ${response.status}`;
      console.error('[Vertex] API error:', response.status, errorMsg);
      return res.status(500).json({ error: errorMsg });
    }

    const content = json.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!content) {
      return res.status(500).json({ error: 'Réponse vide de Vertex AI' });
    }

    return res.status(200).json({ content });

  } catch (err) {
    console.error('[Vertex] Error:', err.message);
    return res.status(500).json({ error: 'Erreur serveur: ' + err.message });
  }
}
