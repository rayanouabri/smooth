export default async function handler(req, res) {
  // Enable CORS for all origins (can be restricted later)
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
    const { priceId, userEmail, successUrl, cancelUrl } = req.body;

    // Log request (sans données sensibles)
    console.log('Stripe checkout request received');

    if (!priceId || !userEmail) {
      return res.status(400).json({ error: 'Missing priceId or userEmail' });
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

    // Clé Stripe configurée

    // Build Stripe checkout session avec metadata
    // Note: URLSearchParams ne supporte pas les objets, donc on utilise la syntaxe metadata[key]
    const body = new URLSearchParams({
      'payment_method_types[]': 'card',
      mode: 'subscription',
      customer_email: userEmail,
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      success_url: (successUrl || 'https://www.franceprepacademy.fr/PaymentSuccess') + '?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: cancelUrl || 'https://www.franceprepacademy.fr/pricing',
      'metadata[price_id]': priceId, // Ajouter le Price ID dans les metadata pour le webhook
      allow_promotion_codes: 'true',
      billing_address_collection: 'auto',
    });

    console.log('Calling Stripe API...');

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
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
        error: data.error?.message || 'Failed to create Stripe session' 
      });
    }

    console.log('Stripe session created:', data.id);

    return res.status(200).json({ 
      url: data.url, 
      sessionId: data.id 
    });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error' 
    });
  }
}
