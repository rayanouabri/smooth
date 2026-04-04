export default async function handler(req, res) {
  // CORS - restrict to allowed origins only
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

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.authorization;
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'Authentification requise' });
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
      const { createClient } = await import('@supabase/supabase-js');
      const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey);
      const { data: { user }, error: authError } = await supabaseAuth.auth.getUser(token);
      if (authError || !user) {
        return res.status(401).json({ error: 'Token invalide ou expiré' });
      }
    }

    const { customerId, returnUrl } = req.body;

    if (!customerId) {
      return res.status(400).json({ error: 'Missing customerId' });
    }

    // Try multiple possible env var names
    const stripeKey = process.env.STRIPE_SECRET_KEY || 
                      process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ||
                      process.env.VITE_STRIPE_SECRET_KEY;

    if (!stripeKey) {
      console.error('STRIPE_SECRET_KEY not found in any env vars');
      return res.status(500).json({ 
        error: 'STRIPE_SECRET_KEY not configured in Vercel',
        debug: 'Configure it in Vercel Dashboard → Settings → Environment Variables'
      });
    }

    console.log('Creating billing portal session for customer:', customerId);

    // Build Stripe billing portal session
    const body = new URLSearchParams({
      customer: customerId,
      return_url: returnUrl || 'https://www.franceprepacademy.fr/profile?tab=subscription',
    });

    const response = await fetch('https://api.stripe.com/v1/billing_portal/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error('Non-JSON response:', text);
      return res.status(500).json({ error: 'Invalid response from Stripe' });
    }

    if (!response.ok) {
      console.error('Stripe error:', data);
      return res.status(response.status).json({ 
        error: data.error?.message || 'Failed to create billing portal session' 
      });
    }

    console.log('Billing portal session created:', data.id);

    return res.status(200).json({ 
      url: data.url 
    });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error' 
    });
  }
}

