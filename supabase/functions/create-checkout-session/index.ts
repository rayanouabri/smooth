import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')

serve(async (req) => {
  // CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  try {
    const { priceId, userId, userEmail, successUrl, cancelUrl } = await req.json()

    if (!stripeKey) {
      console.error('STRIPE_SECRET_KEY not found')
      return new Response(
        JSON.stringify({ error: 'STRIPE_SECRET_KEY is not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    console.log('Creating checkout for:', { priceId, userEmail })

    // Call Stripe API directly
    const body = new URLSearchParams()
    body.append('payment_method_types[]', 'card')
    body.append('mode', 'subscription')
    body.append('customer_email', userEmail)
    body.append('line_items[0][price]', priceId)
    body.append('line_items[0][quantity]', '1')
    body.append('success_url', successUrl || `https://www.franceprepacademy.fr/payment-success?session_id={CHECKOUT_SESSION_ID}`)
    body.append('cancel_url', cancelUrl || 'https://www.franceprepacademy.fr/pricing')
    body.append('allow_promotion_codes', 'true')
    body.append('billing_address_collection', 'auto')

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Stripe error:', data)
      return new Response(
        JSON.stringify({ error: data.error?.message || 'Stripe error' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ url: data.url, sessionId: data.id }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
