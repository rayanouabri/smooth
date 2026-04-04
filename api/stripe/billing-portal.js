// Rate limiting (in-memory)
const RATE_LIMITS = {};
function checkRateLimit(ip, max = 10, windowMs = 3600000) {
  const now = Date.now();
  if (!RATE_LIMITS[ip] || now > RATE_LIMITS[ip].reset) {
    RATE_LIMITS[ip] = { count: 1, reset: now + windowMs };
    return true;
  }
  RATE_LIMITS[ip].count++;
  return RATE_LIMITS[ip].count <= max;
}

// Validate Stripe customer ID format
function isValidCustomerId(id) {
  return typeof id === 'string' && /^cus_[a-zA-Z0-9]{14,}$/.test(id);
}

export default async function handler(req, res) {
  // CORS — production only
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
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limiting: 10 portal accesses per IP per hour
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(ip, 10, 3600000)) {
    return res.status(429).json({ error: 'Trop de requêtes. Réessayez dans une heure.' });
  }

  try {
    // Auth check — JWT required
    const authHeader = req.headers.authorization;
    const token = authHeader?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Authentification requise' });
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return res.status(500).json({ error: 'Configuration serveur incomplète' });
    }

    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey);
    const { data: { user }, error: authError } = await supabaseAuth.auth.getUser(token);
    if (authError || !user) {
      return res.status(401).json({ error: 'Token invalide ou expiré' });
    }

    // Input validation
    const { customerId } = req.body || {};
    if (!customerId) {
      return res.status(400).json({ error: 'customerId est requis' });
    }
    if (!isValidCustomerId(customerId)) {
      return res.status(400).json({ error: 'Format de customerId invalide' });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY non configuré' });
    }

    const body = new URLSearchParams({
      customer: customerId,
      return_url: 'https://www.franceprepacademy.fr/profile?tab=subscription',
    });

    const response = await fetch('https://api.stripe.com/v1/billing_portal/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Erreur Stripe' });
    }

    return res.status(200).json({ url: data.url });
  } catch (error) {
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
