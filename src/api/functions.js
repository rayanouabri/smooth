import { supabase } from './supabaseClient';

/**
 * Service pour les fonctions Supabase Edge Functions
 * Remplace base44.functions
 */

/**
 * Créer une session de checkout Stripe
 */
export const createCheckout = async ({ priceId, userId, userEmail, successUrl, cancelUrl }) => {
  // Si vous avez une Edge Function Supabase configurée
  try {
    const { data, error } = await supabase.functions.invoke('create-checkout-session', {
      body: {
        priceId,
        userId,
        userEmail,
        successUrl,
        cancelUrl,
      },
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Edge Function non disponible:', error);
    throw new Error('Veuillez configurer la Edge Function create-checkout-session sur Supabase. Consultez CONFIGURATION_STRIPE.md');
  }
};

/**
 * Vérifier le statut d'une session Stripe
 */
export const checkStripeSession = async (sessionId) => {
  try {
    const { data, error } = await supabase.functions.invoke('check-stripe-session', {
      body: { sessionId },
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la vérification de la session:', error);
    throw error;
  }
};

/**
 * Webhook Stripe
 */
export const stripeWebhook = async (event, signature) => {
  const { data, error } = await supabase.functions.invoke('stripe-webhook', {
    body: {
      event,
      signature,
    },
  });

  if (error) throw error;
  return data;
};
