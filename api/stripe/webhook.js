/**
 * Webhook Stripe pour Vercel Serverless Functions
 * Reçoit les événements Stripe et met à jour is_premium dans user_profiles
 * 
 * Configuration requise dans Vercel :
 * - STRIPE_SECRET_KEY (clé secrète Stripe)
 * - STRIPE_WEBHOOK_SECRET (secret du webhook depuis Stripe Dashboard)
 * - SUPABASE_URL (URL de votre projet Supabase)
 * - SUPABASE_SERVICE_ROLE_KEY (clé service role pour bypass RLS)
 */

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Stripe-Signature');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Vérifier les variables d'environnement
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!stripeSecretKey) {
      console.error('STRIPE_SECRET_KEY not configured');
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY not configured' });
    }

    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET not configured');
      return res.status(500).json({ error: 'STRIPE_WEBHOOK_SECRET not configured' });
    }

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase credentials not configured');
      return res.status(500).json({ error: 'Supabase credentials not configured' });
    }

    // Récupérer le body brut pour la vérification de signature
    // IMPORTANT: Pour Vercel, le body doit être en string raw
    const sig = req.headers['stripe-signature'];
    
    if (!sig) {
      return res.status(400).json({ error: 'Missing Stripe signature' });
    }

    // Vercel parse automatiquement le JSON, mais on a besoin du raw body
    // Solution: utiliser req.body directement si c'est une string, sinon reconstruire
    let rawBody;
    if (typeof req.body === 'string') {
      rawBody = req.body;
    } else {
      // Si Vercel a déjà parsé le JSON, on doit le re-stringify
      // Note: Ce n'est pas idéal pour la vérification de signature, mais fonctionne
      rawBody = JSON.stringify(req.body);
    }

    // Vérifier la signature du webhook avec Stripe SDK
    let event;
    try {
      const stripe = (await import('stripe')).default(stripeSecretKey);
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      // En développement, on peut accepter sans vérification pour tester
      if (process.env.NODE_ENV === 'development' && !webhookSecret) {
        console.warn('⚠️ Development mode: accepting webhook without signature verification');
        event = req.body;
      } else {
        return res.status(400).json({ error: `Webhook signature verification failed: ${err.message}` });
      }
    }

    // Importer Supabase client
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Price IDs Stripe (doivent correspondre à ceux dans Pricing.jsx)
    const STRIPE_PRICE_IDS = {
      premium: {
        monthly: 'price_1ShgKyEKmsqeO7fH3eOB1TV5',
        annual: 'price_1SiEWLEKmsqeO7fH2UqWhy0L',
      },
      ultimate: {
        monthly: 'price_1SieSjEKmsqeO7fHFiHhd2g6',
        annual: 'price_1SieV1EKmsqeO7fHo3wLXwo7',
      },
    };

    // Fonction pour détecter le plan depuis un Price ID
    const detectPlan = (priceId) => {
      if (!priceId) return 'premium'; // Par défaut
      
      if (Object.values(STRIPE_PRICE_IDS.ultimate).includes(priceId)) {
        return 'ultimate';
      } else if (Object.values(STRIPE_PRICE_IDS.premium).includes(priceId)) {
        return 'premium';
      }
      return 'premium'; // Par défaut
    };

    // Fonction pour mettre à jour le profil utilisateur
    const updateUserToPremium = async (email, customerId, subscriptionId, sessionId, plan = 'premium') => {
      const premiumData = {
        is_premium: true,
        subscription_status: 'active',
        subscription_plan: plan,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscriptionId,
        stripe_session_id: sessionId,
        premium_since: new Date().toISOString(),
      };

      // STRATÉGIE 1: Chercher et mettre à jour par email
      let updated = false;
      let profileId = null;

      const { data: profileByEmail } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_email', email)
        .maybeSingle();

      if (profileByEmail) {
        profileId = profileByEmail.id;
        
        const { error: updateError } = await supabase
          .from('user_profiles')
          .update(premiumData)
          .eq('id', profileId);

        if (!updateError) {
          updated = true;
          console.log('✅ Profile updated by ID:', profileId, 'Plan:', plan);
        } else {
          console.error('❌ Update by ID failed:', updateError);
        }
      }

      // STRATÉGIE 2: Si customer ID existe, chercher aussi par customer ID
      if (customerId && !updated) {
        const { data: profileByCustomer } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('stripe_customer_id', customerId)
          .maybeSingle();

        if (profileByCustomer) {
          const { error: updateError } = await supabase
            .from('user_profiles')
            .update(premiumData)
            .eq('stripe_customer_id', customerId);

          if (!updateError) {
            updated = true;
            console.log('✅ Profile updated by customer ID:', customerId, 'Plan:', plan);
          } else {
            console.error('❌ Update by customer ID failed:', updateError);
          }
        }
      }

      // STRATÉGIE 3: Créer le profil s'il n'existe pas (avec l'email)
      if (!updated && email) {
        try {
          // Récupérer l'ID utilisateur depuis auth.users via l'API admin
          const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
          
          if (listError) {
            console.error('❌ Error listing users:', listError);
          } else {
            const authUser = users?.find(u => u.email === email);

            if (authUser) {
              const { error: insertError } = await supabase
                .from('user_profiles')
                .insert({
                  id: authUser.id,
                  user_email: email,
                  full_name: authUser.user_metadata?.full_name || email.split('@')[0],
                  ...premiumData,
                });

              if (!insertError) {
                updated = true;
                console.log('✅ Profile created for new user:', email, 'Plan:', plan);
              } else {
                // Si l'insertion échoue (contrainte), essayer upsert
                if (insertError.code === '23505' || insertError.message?.includes('duplicate')) {
                  console.log('ℹ️ Profile exists, trying upsert...');
                  const { error: upsertError } = await supabase
                    .from('user_profiles')
                    .upsert({
                      id: authUser.id,
                      user_email: email,
                      ...premiumData,
                    }, { onConflict: 'id' });
                  
                  if (!upsertError) {
                    updated = true;
                    console.log('✅ Profile upserted successfully');
                  } else {
                    console.error('❌ Upsert failed:', upsertError);
                  }
                } else {
                  console.error('❌ Insert failed:', insertError);
                }
              }
            } else {
              console.warn('⚠️ Auth user not found for email:', email);
            }
          }
        } catch (err) {
          console.error('❌ Error in STRATÉGIE 3:', err);
        }
      }

      return updated;
    };

    // Traiter les différents types d'événements Stripe
    console.log('📥 Webhook event received:', event.type);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        console.log('✅ Checkout session completed:', session.id);

        const customerEmail = session.customer_email || session.customer_details?.email;
        const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id;
        const subscriptionId = session.subscription;

        if (!customerEmail) {
          console.error('❌ No customer email in session');
          return res.status(400).json({ error: 'No customer email in session' });
        }

        // Récupérer le Price ID depuis la subscription (plus fiable)
        let priceId = session.metadata?.price_id;
        let plan = 'premium'; // Par défaut

        if (subscriptionId) {
          try {
            const stripe = (await import('stripe')).default(stripeSecretKey);
            const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
              expand: ['items.data.price']
            });
            priceId = subscription.items?.data?.[0]?.price?.id;
            plan = detectPlan(priceId);
            console.log('📦 Detected plan from subscription:', plan, 'Price ID:', priceId);
          } catch (err) {
            console.warn('⚠️ Could not retrieve subscription, using default plan:', err.message);
          }
        } else if (priceId) {
          plan = detectPlan(priceId);
          console.log('📦 Detected plan from metadata:', plan, 'Price ID:', priceId);
        }

        // Mettre à jour le profil
        const updated = await updateUserToPremium(
          customerEmail,
          customerId,
          subscriptionId,
          session.id,
          plan
        );

        if (updated) {
          console.log('✅ User marked as premium:', customerEmail, 'Plan:', plan);
        } else {
          console.error('❌ Failed to update user to premium:', customerEmail);
        }

        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        console.log('📝 Subscription event:', event.type, subscription.id);

        const customerId = typeof subscription.customer === 'string' 
          ? subscription.customer 
          : subscription.customer?.id;
        const priceId = subscription.items?.data?.[0]?.price?.id;
        const status = subscription.status;

        if (!customerId) {
          console.error('❌ No customer ID in subscription');
          break;
        }

        // Détecter le plan
        const plan = detectPlan(priceId);
        console.log('📦 Detected plan:', plan, 'Status:', status);

        // Récupérer l'email du customer depuis Stripe
        const stripe = (await import('stripe')).default(stripeSecretKey);
        const customer = await stripe.customers.retrieve(customerId);
        const customerEmail = customer.email;

        if (customerEmail) {
          const premiumData = {
            is_premium: status === 'active' || status === 'trialing',
            subscription_status: status,
            subscription_plan: plan,
            stripe_customer_id: customerId,
            stripe_subscription_id: subscription.id,
          };

          // Mettre à jour par customer ID
          const { error: updateError } = await supabase
            .from('user_profiles')
            .update(premiumData)
            .eq('stripe_customer_id', customerId);

          if (updateError) {
            console.error('❌ Error updating subscription:', updateError);
          } else {
            console.log('✅ Subscription updated:', customerEmail, 'Status:', status, 'Plan:', plan);
          }
        }

        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        console.log('🗑️ Subscription deleted:', subscription.id);

        const customerId = typeof subscription.customer === 'string' 
          ? subscription.customer 
          : subscription.customer?.id;

        if (customerId) {
          const { error: updateError } = await supabase
            .from('user_profiles')
            .update({
              is_premium: false,
              subscription_status: 'canceled',
              subscription_plan: null,
            })
            .eq('stripe_customer_id', customerId);

          if (updateError) {
            console.error('❌ Error canceling subscription:', updateError);
          } else {
            console.log('✅ Subscription canceled for customer:', customerId);
          }
        }

        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        console.log('💳 Payment succeeded - Invoice ID:', invoice.id);

        const customerId = typeof invoice.customer === 'string' 
          ? invoice.customer 
          : invoice.customer?.id;
        const subscriptionId = typeof invoice.subscription === 'string' 
          ? invoice.subscription 
          : invoice.subscription?.id;
        const priceId = invoice.lines?.data?.[0]?.price?.id;

        if (customerId && subscriptionId) {
          const plan = detectPlan(priceId);
          
          const { error: updateError } = await supabase
            .from('user_profiles')
            .update({
              is_premium: true,
              subscription_status: 'active',
              subscription_plan: plan,
            })
            .eq('stripe_customer_id', customerId);

          if (updateError) {
            console.error('❌ Error updating after successful payment:', updateError);
          } else {
            console.log('✅ User confirmed premium after successful payment, Plan:', plan);
          }
        }

        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        console.log('⚠️ Payment failed - Invoice ID:', invoice.id);

        const customerId = typeof invoice.customer === 'string' 
          ? invoice.customer 
          : invoice.customer?.id;

        if (customerId) {
          // Ne pas désactiver immédiatement, Stripe réessaiera
          // Mais on peut logger pour monitoring
          console.log('⚠️ Payment failed for customer:', customerId);
        }

        break;
      }

      default:
        console.log('ℹ️ Unhandled event type:', event.type);
    }

    // Toujours retourner 200 pour confirmer la réception
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
