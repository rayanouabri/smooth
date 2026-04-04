// Rate limiting (in-memory, resets on cold start)
const RATE_LIMITS = {};
function checkRateLimit(ip, max = 20, windowMs = 3600000) {
  const now = Date.now();
  if (!RATE_LIMITS[ip] || now > RATE_LIMITS[ip].reset) {
    RATE_LIMITS[ip] = { count: 1, reset: now + windowMs };
    return true;
  }
  RATE_LIMITS[ip].count++;
  return RATE_LIMITS[ip].count <= max;
}

// Validate Stripe price ID format
function isValidPriceId(id) {
  return typeof id === 'string' && /^price_[a-zA-Z0-9]{16,}$/.test(id);
}

// Validate email format
function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export default async function handler(req, res) {
  // CORS — production only, dev in local env
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

  // Rate limiting: 20 checkout attempts per IP per hour
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(ip, 20, 3600000)) {
    return res.status(429).json({ error: 'Trop de requêtes. Réessayez dans une heure.' });
  }

  try {
    // Auth check — JWT required
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentification requise' });
    }
    const token = authHeader.split(' ')[1];

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
    const { priceId, userEmail, successUrl, cancelUrl } = req.body || {};

    if (!priceId || !userEmail) {
      return res.status(400).json({ error: 'priceId et userEmail sont requis' });
    }
    if (!isValidPriceId(priceId)) {
      return res.status(400).json({ error: 'Format de priceId invalide' });
    }
    if (!isValidEmail(userEmail)) {
      return res.status(400).json({ error: 'Adresse email invalide' });
    }
    // Ensure user can only create checkout for their own email
    if (user.email && userEmail.toLowerCase() !== user.email.toLowerCase()) {
      return res.status(403).json({ error: 'Email ne correspond pas au compte connecté' });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY non configuré' });
    }

    const body = new URLSearchParams({
      'payment_method_types[]': 'card',
      mode: 'subscription',
      customer_email: userEmail,
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      success_url: 'https://www.franceprepacademy.fr/paymentsuccess?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://www.franceprepacademy.fr/pricing',
      'metadata[price_id]': priceId,
      'metadata[user_id]': user.id,
      allow_promotion_codes: 'true',
      billing_address_collection: 'auto',
    });

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Idempotency-Key': `checkout-${user.id}-${priceId}-${Math.floor(Date.now() / 60000)}`,
      },
      body: body.toString(),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Erreur Stripe' });
    }

    return res.status(200).json({ url: data.url, sessionId: data.id });
  } catch (error) {
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
