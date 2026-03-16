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

// Disable Vercel body parsing to get raw body for signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to read raw body from request stream
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  // Ce endpoint est server-to-server (Stripe → Vercel), pas de CORS nécessaire

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
      console.error('❌ STRIPE_SECRET_KEY not configured');
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY not configured' });
    }

    if (!webhookSecret) {
      console.error('❌ STRIPE_WEBHOOK_SECRET not configured');
      return res.status(500).json({ error: 'STRIPE_WEBHOOK_SECRET not configured' });
    }

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('❌ Supabase credentials not configured');
      return res.status(500).json({ error: 'Supabase credentials not configured' });
    }

    // Récupérer le body brut pour la vérification de signature
    const sig = req.headers['stripe-signature'];
    
    if (!sig) {
      console.error('❌ Missing Stripe signature header');
      return res.status(400).json({ error: 'Missing Stripe signature' });
    }

    // Read raw body for proper signature verification (body parsing disabled via config)
    let rawBody;
    if (typeof req.body === 'string') {
      rawBody = req.body;
    } else if (Buffer.isBuffer(req.body)) {
      rawBody = req.body.toString('utf8');
    } else if (req.body && typeof req.body === 'object') {
      // Fallback if body was already parsed (shouldn't happen with config above)
      rawBody = JSON.stringify(req.body);
    } else {
      // Read from stream
      rawBody = (await getRawBody(req)).toString('utf8');
    }

    // Vérifier la signature du webhook avec Stripe SDK
    let event;
    try {
      const stripe = (await import('stripe')).default(stripeSecretKey);
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
      console.log('✅ Webhook signature verified');
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err.message);
      return res.status(400).json({ error: `Webhook signature verification failed: ${err.message}` });
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

    // Fonction améliorée pour mettre à jour le profil utilisateur
    const updateUserToPremium = async (email, customerId, subscriptionId, sessionId, plan = 'premium') => {
      console.log('🔄 updateUserToPremium called:', { email, customerId, subscriptionId, sessionId, plan });
      
      const premiumData = {
        is_premium: true,
        subscription_status: 'active',
        subscription_plan: plan,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscriptionId,
        stripe_session_id: sessionId,
        premium_since: new Date().toISOString(),
      };

      let updated = false;
      let userId = null;

      // STRATÉGIE 1: Chercher l'utilisateur dans auth.users par email pour obtenir l'ID
      if (email) {
        try {
          const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
          
          if (!listError && users) {
            const authUser = users.find(u => u.email?.toLowerCase() === email.toLowerCase());
            if (authUser) {
              userId = authUser.id;
              console.log('✅ Found user in auth.users:', userId);
            }
          }
        } catch (err) {
          console.warn('⚠️ Could not list users from auth:', err.message);
        }
      }

      // STRATÉGIE 2: Chercher le profil par email dans user_profiles
      if (!userId && email) {
        const { data: profileByEmail, error: emailError } = await supabase
          .from('user_profiles')
          .select('id, user_email')
          .eq('user_email', email)
          .maybeSingle();

        if (profileByEmail && !emailError) {
          userId = profileByEmail.id;
          console.log('✅ Found profile by email:', userId);
        } else if (emailError) {
          console.error('❌ Error searching by email:', emailError);
        }
      }

      // STRATÉGIE 3: Chercher le profil par customer ID
      if (!userId && customerId) {
        const { data: profileByCustomer, error: customerError } = await supabase
          .from('user_profiles')
          .select('id, stripe_customer_id')
          .eq('stripe_customer_id', customerId)
          .maybeSingle();

        if (profileByCustomer && !customerError) {
          userId = profileByCustomer.id;
          console.log('✅ Found profile by customer ID:', userId);
        } else if (customerError) {
          console.error('❌ Error searching by customer ID:', customerError);
        }
      }

      // STRATÉGIE 4: Chercher le profil par session ID
      if (!userId && sessionId) {
        const { data: profileBySession, error: sessionError } = await supabase
          .from('user_profiles')
          .select('id, stripe_session_id')
          .eq('stripe_session_id', sessionId)
          .maybeSingle();

        if (profileBySession && !sessionError) {
          userId = profileBySession.id;
          console.log('✅ Found profile by session ID:', userId);
        } else if (sessionError) {
          console.error('❌ Error searching by session ID:', sessionError);
        }
      }

      // Si on a trouvé un userId, mettre à jour le profil
      if (userId) {
        console.log('🔄 Attempting to update profile for userId:', userId);
        
        // STRATÉGIE A: Essayer update d'abord (plus rapide si le profil existe)
        const { data: existingProfile, error: selectError } = await supabase
          .from('user_profiles')
          .select('id, is_premium, subscription_status')
          .eq('id', userId)
          .maybeSingle();

        if (selectError) {
          console.error('❌ Error selecting profile:', selectError);
        } else if (existingProfile) {
          console.log('📋 Existing profile found:', existingProfile);
        }

        // Essayer update d'abord
        const { data: updateData, error: updateError } = await supabase
          .from('user_profiles')
          .update(premiumData)
          .eq('id', userId)
          .select();

        if (!updateError && updateData && updateData.length > 0) {
          updated = true;
          console.log('✅ Profile updated successfully:', userId, 'Plan:', plan);
          console.log('📊 Updated data:', updateData[0]);
        } else {
          console.warn('⚠️ Update failed, trying upsert:', updateError);
          
          // STRATÉGIE B: Essayer upsert si update échoue
          const { data: upsertData, error: upsertError } = await supabase
            .from('user_profiles')
            .upsert({
              id: userId,
              user_email: email,
              ...premiumData,
            }, { onConflict: 'id' })
            .select();

          if (!upsertError && upsertData && upsertData.length > 0) {
            updated = true;
            console.log('✅ Profile upserted successfully:', userId, 'Plan:', plan);
            console.log('📊 Upserted data:', upsertData[0]);
          } else {
            console.error('❌ Upsert also failed:', upsertError);
            
            // STRATÉGIE C: Essayer update par email comme dernier recours
            if (email) {
              const { data: emailUpdateData, error: emailUpdateError } = await supabase
                .from('user_profiles')
                .update(premiumData)
                .eq('user_email', email)
                .select();

              if (!emailUpdateError && emailUpdateData && emailUpdateData.length > 0) {
                updated = true;
                console.log('✅ Profile updated by email (last resort):', email);
                console.log('📊 Updated data:', emailUpdateData[0]);
              } else {
                console.error('❌ All update strategies failed. Last error:', emailUpdateError);
              }
            }
          }
        }
      } else {
        // Si aucun userId trouvé, essayer de créer le profil avec l'email
        // Mais on a besoin d'un ID utilisateur, donc on va chercher dans auth.users
        if (email) {
          try {
            const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
            
            if (!listError && users) {
              const authUser = users.find(u => u.email?.toLowerCase() === email.toLowerCase());
              
              if (authUser) {
                // Utiliser upsert pour créer le profil
                const { error: upsertError } = await supabase
                  .from('user_profiles')
                  .upsert({
                    id: authUser.id,
                    user_email: email,
                    full_name: authUser.user_metadata?.full_name || email.split('@')[0],
                    ...premiumData,
                  }, { onConflict: 'id' });

                if (!upsertError) {
                  updated = true;
                  console.log('✅ Profile created/updated for new user:', authUser.id, 'Plan:', plan);
                } else {
                  console.error('❌ Failed to create profile:', upsertError);
                }
              } else {
                console.warn('⚠️ User not found in auth.users for email:', email);
              }
            }
          } catch (err) {
            console.error('❌ Error creating profile:', err);
          }
        }
      }

      // Vérifier que la mise à jour a bien fonctionné
      if (updated && userId) {
        // Attendre un peu pour que la base de données se synchronise
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const { data: verifyProfile, error: verifyError } = await supabase
          .from('user_profiles')
          .select('is_premium, subscription_status, subscription_plan, stripe_customer_id')
          .eq('id', userId)
          .maybeSingle();

        if (!verifyError && verifyProfile) {
          const isActuallyPremium = verifyProfile.is_premium === true || verifyProfile.subscription_status === 'active';
          console.log('✅ Verification result:', {
            is_premium: verifyProfile.is_premium,
            subscription_status: verifyProfile.subscription_status,
            subscription_plan: verifyProfile.subscription_plan,
            stripe_customer_id: verifyProfile.stripe_customer_id,
            actually_premium: isActuallyPremium
          });
          
          if (!isActuallyPremium) {
            console.error('❌ CRITICAL: Update reported success but is_premium is still false!');
            // Essayer une dernière fois avec une méthode plus directe
            const { error: forceUpdateError } = await supabase
              .from('user_profiles')
              .update({ 
                is_premium: true,
                subscription_status: 'active'
              })
              .eq('id', userId);
            
            if (forceUpdateError) {
              console.error('❌ Force update also failed:', forceUpdateError);
            } else {
              console.log('✅ Force update succeeded');
              updated = true;
            }
          }
        } else {
          console.warn('⚠️ Verification failed:', verifyError);
        }
      } else if (!updated) {
        console.error('❌ CRITICAL: updateUserToPremium returned false. No update was performed.');
      }

      return updated;
    };

    // Traiter les différents types d'événements Stripe
    console.log('📥 Webhook event received:', event.type);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        console.log('✅ Checkout session completed:', session.id);
        console.log('📧 Customer email:', session.customer_email || session.customer_details?.email);
        console.log('👤 Customer ID:', session.customer);
        console.log('📝 Subscription ID:', session.subscription);

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
        try {
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
              
              // Fallback: essayer par email
              const { error: emailUpdateError } = await supabase
                .from('user_profiles')
                .update(premiumData)
                .eq('user_email', customerEmail);

              if (emailUpdateError) {
                console.error('❌ Error updating by email:', emailUpdateError);
              } else {
                console.log('✅ Subscription updated by email:', customerEmail);
              }
            } else {
              console.log('✅ Subscription updated:', customerEmail, 'Status:', status, 'Plan:', plan);
            }
          }
        } catch (err) {
          console.error('❌ Error retrieving customer from Stripe:', err);
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
    return res.status(200).json({ received: true, event_type: event.type });
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
