import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Fonction pour mettre à jour le profil Premium de manière robuste
async function updateUserToPremium(
  email: string,
  customerId: string | null,
  subscriptionId: string | null,
  sessionId: string | null
) {
  const premiumData = {
    is_premium: true,
    subscription_status: 'active',
    stripe_customer_id: customerId,
    stripe_subscription_id: subscriptionId,
    stripe_session_id: sessionId,
    premium_since: new Date().toISOString(),
  }

  // STRATÉGIE 1: Chercher et mettre à jour par email
  let updated = false
  let profileId: string | null = null

  // Chercher le profil par email
  const { data: profileByEmail } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_email', email)
    .maybeSingle()

  if (profileByEmail) {
    profileId = profileByEmail.id
    
    // Mettre à jour par ID (plus fiable)
    const { error: updateError } = await supabase
      .from('user_profiles')
      .update(premiumData)
      .eq('id', profileId)
    
    if (!updateError) {
      updated = true
      console.log('✅ Profile updated by ID:', profileId)
    } else {
      console.error('❌ Update by ID failed:', updateError)
    }
  }

  // STRATÉGIE 2: Si customer ID existe, chercher aussi par customer ID
  if (customerId && !updated) {
    const { data: profileByCustomer } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('stripe_customer_id', customerId)
      .maybeSingle()
    
    if (profileByCustomer) {
      const { error: updateError } = await supabase
        .from('user_profiles')
        .update(premiumData)
        .eq('id', profileByCustomer.id)
      
      if (!updateError) {
        updated = true
        profileId = profileByCustomer.id
        console.log('✅ Profile updated by customer ID:', customerId)
      }
    }
  }

  // STRATÉGIE 3: Chercher l'utilisateur auth par email et créer/mettre à jour le profil
  if (!updated) {
    const { data: authUsers } = await supabase.auth.admin.listUsers()
    const authUser = authUsers?.users?.find(u => u.email === email)
    
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
          profileId = authUser.id
          console.log('✅ Profile updated by auth ID:', authUser.id)
        }
      } else {
        // Créer un nouveau profil avec l'ID auth
        const { error: insertError } = await supabase
          .from('user_profiles')
          .insert({
            id: authUser.id,
            user_email: email,
            full_name: authUser.user_metadata?.full_name || email.split('@')[0],
            ...premiumData,
          })
        
        if (!insertError) {
          updated = true
          profileId = authUser.id
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
        user_email: email,
        full_name: email.split('@')[0],
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
  if (updated && email) {
    const { error: bulkUpdateError } = await supabase
      .from('user_profiles')
      .update(premiumData)
      .eq('user_email', email)
    
    if (bulkUpdateError) {
      console.error('⚠️ Bulk update warning:', bulkUpdateError)
    } else {
      console.log('✅ Bulk update successful for all profiles with email:', email)
    }
  }

  return updated
}

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
    console.log('🔔 Webhook received')

    const event = JSON.parse(body)
    console.log('📋 Event type:', event.type)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        console.log('💳 Checkout completed - Session ID:', session.id)
        console.log('📧 Customer email:', session.customer_email)
        console.log('👤 Customer ID:', session.customer)
        console.log('📝 Subscription ID:', session.subscription)

        const success = await updateUserToPremium(
          session.customer_email,
          session.customer,
          session.subscription,
          session.id
        )

        if (success) {
          console.log('✅ User upgraded to Premium successfully')
        } else {
          console.error('❌ Failed to upgrade user to Premium')
        }

        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object
        console.log('🔄 Subscription updated - ID:', subscription.id)
        console.log('📊 Status:', subscription.status)

        const isActive = subscription.status === 'active'

        // Mettre à jour par subscription ID
        const { error: updateError } = await supabase
          .from('user_profiles')
          .update({
            subscription_status: subscription.status,
            is_premium: isActive,
          })
          .eq('stripe_subscription_id', subscription.id)

        if (updateError) {
          console.error('❌ Error updating subscription:', updateError)
        } else {
          console.log('✅ Subscription status updated')
        }

        // Aussi mettre à jour par customer ID (au cas où)
        if (subscription.customer) {
          const { error: customerUpdateError } = await supabase
            .from('user_profiles')
            .update({
              subscription_status: subscription.status,
              is_premium: isActive,
            })
            .eq('stripe_customer_id', subscription.customer)
          
          if (customerUpdateError) {
            console.error('⚠️ Customer ID update warning:', customerUpdateError)
          }
        }

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        console.log('❌ Subscription cancelled - ID:', subscription.id)

        const { error: updateError } = await supabase
          .from('user_profiles')
          .update({
            is_premium: false,
            subscription_status: 'cancelled',
          })
          .eq('stripe_subscription_id', subscription.id)

        if (updateError) {
          console.error('❌ Error cancelling subscription:', updateError)
        } else {
          console.log('✅ Subscription cancelled')
        }

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        console.log('💸 Payment failed - Invoice ID:', invoice.id)

        const { error: updateError } = await supabase
          .from('user_profiles')
          .update({
            subscription_status: 'past_due',
            // Ne pas mettre is_premium à false immédiatement (grace period)
          })
          .eq('stripe_customer_id', invoice.customer)

        if (updateError) {
          console.error('❌ Error updating payment status:', updateError)
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
        console.log('ℹ️ Unhandled event type:', event.type)
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('❌ Webhook error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
