import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import Stripe from 'https://esm.sh/stripe@14.5.0?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

    // Vérifier la signature du webhook
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)

    console.log('Webhook event:', event.type)

    // Gérer les différents types d'événements
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        console.log('Checkout completed:', session.id)

        // Mettre à jour le profil utilisateur pour marquer comme Premium
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

        // Mettre à jour le statut de l'abonnement
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

        // Désactiver le Premium
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

        // Marquer l'utilisateur avec paiement en échec
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
    console.error('Webhook error:', error)
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
