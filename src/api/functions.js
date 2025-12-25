import { supabase } from './supabaseClient';

/**
 * Service pour les fonctions Supabase Edge Functions
 * Remplace base44.functions
 */

/**
 * Créer une session de checkout Stripe
 */
export const createCheckout = async ({ priceId, userId, userEmail, successUrl, cancelUrl }) => {
  // Validation basique du Price ID
  if (!priceId || typeof priceId !== 'string' || !priceId.startsWith('price_')) {
    throw new Error('Price ID invalide. Utilisez un identifiant Stripe commençant par "price_".');
  }

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

    if (error) {
      // Remonter l'erreur détaillée de la fonction Edge
      const message = error?.message || error?.error || 'Erreur inconnue côté Edge Function';
      throw new Error(message);
    }
    return data;
  } catch (error) {
    console.error('Erreur createCheckout:', error);
    // Si la fonction n'existe pas ou n'est pas déployée
    if (String(error?.message || '').toLowerCase().includes('not found')) {
      throw new Error('Edge Function "create-checkout-session" introuvable. Déployez-la dans Supabase.');
    }
    // Propager le vrai message d'erreur si disponible
    throw new Error(error?.message || 'Erreur lors de la création de la session Stripe');
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
