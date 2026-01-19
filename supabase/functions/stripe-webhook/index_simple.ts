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

        // DÉTECTION DU PLAN: Récupérer la subscription pour obtenir le Price ID
        let subscriptionPlan = 'premium' // Par défaut
        let priceId = null
        
        if (session.subscription) {
          try {
            // Récupérer la subscription depuis Stripe API pour obtenir le Price ID
            const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')
            if (stripeKey) {
              const subscriptionResponse = await fetch(
                `https://api.stripe.com/v1/subscriptions/${session.subscription}`,
                {
                  headers: {
                    'Authorization': `Bearer ${stripeKey}`,
                  },
                }
              )
              
              if (subscriptionResponse.ok) {
                const subscriptionData = await subscriptionResponse.json()
                priceId = subscriptionData?.items?.data?.[0]?.price?.id
                
                // Déterminer le plan depuis le Price ID
                const STRIPE_PRICE_IDS = {
                  premium: {
                    monthly: 'price_1ShgKyEKmsqeO7fH3eOB1TV5',
                    annual: 'price_1SiEWLEKmsqeO7fH2UqWhy0L',
                  },
                  ultimate: {
                    monthly: 'price_1SieSjEKmsqeO7fHFiHhd2g6',
                    annual: 'price_1SieV1EKmsqeO7fHo3wLXwo7',
                  },
                }
                
                if (Object.values(STRIPE_PRICE_IDS.ultimate).includes(priceId)) {
                  subscriptionPlan = 'ultimate'
                  console.log('👑 Plan détecté: Ultimate VIP')
                } else if (Object.values(STRIPE_PRICE_IDS.premium).includes(priceId)) {
                  subscriptionPlan = 'premium'
                  console.log('⚡ Plan détecté: Premium')
                } else {
                  console.log('⚠️ Plan non reconnu, utilisation Premium par défaut. Price ID:', priceId)
                }
              } else {
                console.warn('⚠️ Impossible de récupérer la subscription depuis Stripe')
              }
            } else {
              console.warn('⚠️ STRIPE_SECRET_KEY non configuré, utilisation Premium par défaut')
            }
          } catch (err) {
            console.error('❌ Erreur lors de la récupération de la subscription:', err)
            // Continuer avec Premium par défaut
          }
        }

        const premiumData = {
          is_premium: true,
          subscription_status: 'active',
          subscription_plan: subscriptionPlan, // Ajouter le plan détecté
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
        console.log('🔄 Subscription updated - ID:', subscription.id)
        console.log('📊 Status:', subscription.status)

        // Détecter le plan depuis le Price ID de la subscription
        let subscriptionPlan = 'premium' // Par défaut
        const priceId = subscription?.items?.data?.[0]?.price?.id
        
        if (priceId) {
          const STRIPE_PRICE_IDS = {
            premium: {
              monthly: 'price_1ShgKyEKmsqeO7fH3eOB1TV5',
              annual: 'price_1SiEWLEKmsqeO7fH2UqWhy0L',
            },
            ultimate: {
              monthly: 'price_1SieSjEKmsqeO7fHFiHhd2g6',
              annual: 'price_1SieV1EKmsqeO7fHo3wLXwo7',
            },
          }
          
          if (Object.values(STRIPE_PRICE_IDS.ultimate).includes(priceId)) {
            subscriptionPlan = 'ultimate'
            console.log('👑 Plan détecté: Ultimate VIP')
          } else if (Object.values(STRIPE_PRICE_IDS.premium).includes(priceId)) {
            subscriptionPlan = 'premium'
            console.log('⚡ Plan détecté: Premium')
          }
        }

        const isActive = subscription.status === 'active'

        const { error } = await supabase
          .from('user_profiles')
          .update({
            subscription_status: subscription.status,
            subscription_plan: subscriptionPlan, // Mettre à jour le plan
            is_premium: isActive,
          })
          .eq('stripe_subscription_id', subscription.id)

        if (error) {
          console.error('❌ Error updating subscription:', error)
        } else {
          console.log('✅ Subscription updated successfully')
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        console.log('❌ Subscription cancelled - ID:', subscription.id)

        const { error } = await supabase
          .from('user_profiles')
          .update({
            is_premium: false,
            subscription_status: 'cancelled',
            subscription_plan: null, // Réinitialiser le plan
          })
          .eq('stripe_subscription_id', subscription.id)

        if (error) {
          console.error('❌ Error cancelling subscription:', error)
        } else {
          console.log('✅ Subscription cancelled successfully')
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

        // Détecter le plan depuis le Price ID de l'invoice
        let subscriptionPlan = 'premium' // Par défaut
        const priceId = invoice?.lines?.data?.[0]?.price?.id
        
        if (priceId) {
          const STRIPE_PRICE_IDS = {
            premium: {
              monthly: 'price_1ShgKyEKmsqeO7fH3eOB1TV5',
              annual: 'price_1SiEWLEKmsqeO7fH2UqWhy0L',
            },
            ultimate: {
              monthly: 'price_1SieSjEKmsqeO7fHFiHhd2g6',
              annual: 'price_1SieV1EKmsqeO7fHo3wLXwo7',
            },
          }
          
          if (Object.values(STRIPE_PRICE_IDS.ultimate).includes(priceId)) {
            subscriptionPlan = 'ultimate'
            console.log('👑 Plan détecté: Ultimate VIP')
          } else if (Object.values(STRIPE_PRICE_IDS.premium).includes(priceId)) {
            subscriptionPlan = 'premium'
            console.log('⚡ Plan détecté: Premium')
          }
        }

        // S'assurer que l'utilisateur est Premium si le paiement réussit
        if (invoice.customer && invoice.subscription) {
          const { error: updateError } = await supabase
            .from('user_profiles')
            .update({
              is_premium: true,
              subscription_status: 'active',
              subscription_plan: subscriptionPlan, // Mettre à jour le plan
            })
            .eq('stripe_customer_id', invoice.customer)

          if (updateError) {
            console.error('❌ Error updating after successful payment:', updateError)
          } else {
            console.log(`✅ User confirmed ${subscriptionPlan} after successful payment`)
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
