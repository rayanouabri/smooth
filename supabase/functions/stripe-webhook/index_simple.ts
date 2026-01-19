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
        console.log('💳 Checkout completed - Session ID:', session.id)
        console.log('📧 Customer email:', session.customer_email)
        console.log('👤 Customer ID:', session.customer)
        console.log('📝 Subscription ID:', session.subscription)

        const premiumData = {
          is_premium: true,
          subscription_status: 'active',
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          stripe_session_id: session.id,
          premium_since: new Date().toISOString(),
        }

        let updated = false

        // STRATÉGIE 1: Chercher et mettre à jour par email
        const { data: profileByEmail } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_email', session.customer_email)
          .maybeSingle()

        if (profileByEmail) {
          const { error: updateError } = await supabase
            .from('user_profiles')
            .update(premiumData)
            .eq('id', profileByEmail.id)
          
          if (!updateError) {
            updated = true
            console.log('✅ Profile updated by email/ID:', profileByEmail.id)
          } else {
            console.error('❌ Update by email/ID failed:', updateError)
          }
        }

        // STRATÉGIE 2: Si customer ID existe, chercher aussi par customer ID
        if (session.customer && !updated) {
          const { data: profileByCustomer } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('stripe_customer_id', session.customer)
            .maybeSingle()
          
          if (profileByCustomer) {
            const { error: updateError } = await supabase
              .from('user_profiles')
              .update(premiumData)
              .eq('id', profileByCustomer.id)
            
            if (!updateError) {
              updated = true
              console.log('✅ Profile updated by customer ID:', session.customer)
            }
          }
        }

        // STRATÉGIE 3: Chercher l'utilisateur auth par email
        if (!updated) {
          const { data: authUsers } = await supabase.auth.admin.listUsers()
          const authUser = authUsers?.users?.find(u => u.email === session.customer_email)
          
          if (authUser) {
            // Vérifier si le profil existe par auth ID
            const { data: profileByAuthId } = await supabase
              .from('user_profiles')
              .select('*')
              .eq('id', authUser.id)
              .maybeSingle()
            
            if (profileByAuthId) {
              // Mettre à jour le profil existant
              const { error: updateError } = await supabase
                .from('user_profiles')
                .update(premiumData)
                .eq('id', authUser.id)
              
              if (!updateError) {
                updated = true
                console.log('✅ Profile updated by auth ID:', authUser.id)
              }
            } else {
              // Créer un nouveau profil avec l'ID auth
              const { error: insertError } = await supabase
                .from('user_profiles')
                .insert({
                  id: authUser.id,
                  user_email: session.customer_email,
                  full_name: authUser.user_metadata?.full_name || session.customer_email.split('@')[0],
                  ...premiumData,
                })
              
              if (!insertError) {
                updated = true
                console.log('✅ Profile created with auth ID:', authUser.id)
              } else {
                console.error('❌ Insert with auth ID failed:', insertError)
              }
            }
          }
        }

        // STRATÉGIE 4: Dernier recours - créer un profil sans ID auth
        if (!updated) {
          const { error: insertError } = await supabase
            .from('user_profiles')
            .insert({
              user_email: session.customer_email,
              full_name: session.customer_email.split('@')[0],
              ...premiumData,
            })
          
          if (!insertError) {
            updated = true
            console.log('✅ Profile created without auth ID')
          } else {
            console.error('❌ Final insert failed:', insertError)
          }
        }

        // STRATÉGIE 5: Mettre à jour TOUS les profils avec cet email (au cas où il y en aurait plusieurs)
        if (updated && session.customer_email) {
          const { error: bulkUpdateError } = await supabase
            .from('user_profiles')
            .update(premiumData)
            .eq('user_email', session.customer_email)
          
          if (bulkUpdateError) {
            console.error('⚠️ Bulk update warning:', bulkUpdateError)
          } else {
            console.log('✅ Bulk update successful for all profiles with email')
          }
        }

        if (updated) {
          console.log('✅ User upgraded to Premium:', session.customer_email)
        } else {
          console.error('❌ Failed to upgrade user to Premium after all strategies')
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
        console.log('💸 Payment failed - Invoice ID:', invoice.id)

        const { error } = await supabase
          .from('user_profiles')
          .update({
            subscription_status: 'past_due',
            // Ne pas mettre is_premium à false immédiatement (grace period)
          })
          .eq('stripe_customer_id', invoice.customer)

        if (error) {
          console.error('❌ Error updating payment status:', error)
        } else {
          console.log('✅ Payment status updated to past_due')
        }
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object
        console.log('✅ Payment succeeded - Invoice ID:', invoice.id)

        // S'assurer que l'utilisateur est Premium si le paiement réussit
        if (invoice.customer && invoice.subscription) {
          const { error: updateError } = await supabase
            .from('user_profiles')
            .update({
              is_premium: true,
              subscription_status: 'active',
            })
            .eq('stripe_customer_id', invoice.customer)

          if (updateError) {
            console.error('❌ Error updating after successful payment:', updateError)
          } else {
            console.log('✅ User confirmed Premium after successful payment')
          }
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
