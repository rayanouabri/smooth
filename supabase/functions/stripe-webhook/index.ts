import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Vérifier la signature Stripe
async function verifyStripeSignature(body: string, signature: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder()
  const secretBytes = encoder.encode(secret)
  
  const [timestamp, signatureValue] = signature.split(',')[0].split('=')[1] + ',' + signature.split(',')[1].split('=')[1]
  const signedContent = `${signature.split(',')[0].split('=')[1]}.${body}`
  
  // Utiliser Web Crypto API
  const key = await crypto.subtle.importKey(
    'raw',
    secretBytes,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  
  const computedSignature = await crypto.subtle.sign('HMAC', key, encoder.encode(signedContent))
  const computedHex = Array.from(new Uint8Array(computedSignature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
  
  return computedHex === signature.split('=')[2]
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const signature = req.headers.get('stripe-signature')
    const body = await req.text()
    
    if (!signature) {
      throw new Error('No Stripe signature found')
    }

    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
    if (!webhookSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET not configured')
    }

    // Parse Stripe signature
    const parts = signature.split(',')
    let timestamp = ''
    let signatureValue = ''
    
    for (const part of parts) {
      const [key, value] = part.split('=')
      if (key === 't') timestamp = value
      if (key === 'v1') signatureValue = value
    }

    // Recalculate signature
    const encoder = new TextEncoder()
    const secretKey = encoder.encode(webhookSecret)
    const signedContent = encoder.encode(`${timestamp}.${body}`)
    
    const key = await crypto.subtle.importKey(
      'raw',
      secretKey,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    )
    
    const computedSignature = await crypto.subtle.sign('HMAC', key, signedContent)
    const computedHex = Array.from(new Uint8Array(computedSignature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    
    if (computedHex !== signatureValue) {
      throw new Error('Invalid signature')
    }

    // Parse event
    const event = JSON.parse(body)
    console.log('Webhook event:', event.type)

    // Handle events
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        console.log('Checkout completed:', session.id)

        if (session.metadata?.userId) {
          const { error } = await supabase
            .from('user_profiles')
            .update({ 
              is_premium: true,
              subscription_status: 'active',
              stripe_customer_id: session.customer,
              stripe_subscription_id: session.subscription,
              premium_since: new Date().toISOString(),
            })
            .eq('user_email', session.customer_email)

          if (error) {
            console.error('Error updating user profile:', error)
          } else {
            console.log('User upgraded to Premium:', session.customer_email)
          }
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object
        console.log('Subscription updated:', subscription.id)

        const { error } = await supabase
          .from('user_profiles')
          .update({ 
            subscription_status: subscription.status,
            is_premium: subscription.status === 'active',
          })
          .eq('stripe_subscription_id', subscription.id)

        if (error) {
          console.error('Error updating subscription status:', error)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        console.log('Subscription cancelled:', subscription.id)

        const { error } = await supabase
          .from('user_profiles')
          .update({ 
            is_premium: false,
            subscription_status: 'cancelled',
          })
          .eq('stripe_subscription_id', subscription.id)

        if (error) {
          console.error('Error cancelling subscription:', error)
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        console.log('Payment failed for invoice:', invoice.id)

        const { error } = await supabase
          .from('user_profiles')
          .update({ 
            subscription_status: 'past_due',
          })
          .eq('stripe_customer_id', invoice.customer)

        if (error) {
          console.error('Error updating payment status:', error)
        }
        break
      }

      default:
        console.log('Unhandled event type:', event.type)
    }

    return new Response(
      JSON.stringify({ received: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Webhook error:', error.message)
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
