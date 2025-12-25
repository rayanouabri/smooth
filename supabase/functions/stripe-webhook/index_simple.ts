import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  try {
    const body = await req.text()
    console.log('Webhook received')

    const event = JSON.parse(body)
    console.log('Event type:', event.type)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        console.log('Checkout completed:', session.id, 'Email:', session.customer_email)

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
          console.error('Error updating user:', error)
        } else {
          console.log('User upgraded to Premium:', session.customer_email)
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
          console.error('Error updating subscription:', error)
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
          console.error('Error cancelling:', error)
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        console.log('Payment failed:', invoice.id)

        const { error } = await supabase
          .from('user_profiles')
          .update({
            subscription_status: 'past_due',
          })
          .eq('stripe_customer_id', invoice.customer)

        if (error) {
          console.error('Error updating status:', error)
        }
        break
      }

      default:
        console.log('Unhandled event:', event.type)
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('Webhook error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
