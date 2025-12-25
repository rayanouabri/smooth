import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')
const stripeApiUrl = 'https://api.stripe.com/v1/checkout/sessions'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { priceId, userId, userEmail, successUrl, cancelUrl } = await req.json()
    
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not configured in Supabase Secrets')
    }

    console.log('Creating checkout session for:', { priceId, userId, userEmail })

    // Construire les paramètres pour l'API Stripe
    const params = new URLSearchParams({
      'payment_method_types[]': 'card',
      mode: 'subscription',
      customer_email: userEmail,
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      success_url: successUrl || `${req.headers.get('origin')}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.get('origin')}/pricing`,
      'metadata[userId]': userId,
      allow_promotion_codes: 'true',
      billing_address_collection: 'auto',
    })

    // Appel HTTP direct à Stripe
    const stripeResponse = await fetch(stripeApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    const data = await stripeResponse.json()

    if (!stripeResponse.ok) {
      console.error('Stripe API error:', data)
      throw new Error(data.error?.message || 'Failed to create checkout session')
    }

    console.log('Checkout session created:', data.id)

    return new Response(
      JSON.stringify({ url: data.url, sessionId: data.id }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error creating checkout session:', error.message)
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Failed to create Stripe checkout session'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
