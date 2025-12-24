import { supabase } from './supabaseClient';

/**
 * Service pour les fonctions Supabase Edge Functions
 * Remplace base44.functions
 */

/**
 * Créer une session de checkout Stripe
 */
export const createCheckout = async ({ courseId, userId, redirectUrl }) => {
  const { data, error } = await supabase.functions.invoke('create-checkout', {
    body: {
      courseId,
      userId,
      redirectUrl,
    },
  });

  if (error) throw error;
  return data;
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
