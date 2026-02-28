import { supabase } from './supabaseClient';

/**
 * Créer une session de checkout Stripe via API endpoint
 */
export const createCheckout = async ({ priceId, userId, userEmail, successUrl, cancelUrl }) => {
  if (!priceId || typeof priceId !== 'string' || !priceId.startsWith('price_')) {
    throw new Error('Price ID invalide. Utilisez un identifiant Stripe commençant par "price_".');
  }

  try {
    // Récupérer le token JWT de la session en cours
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.access_token) {
      throw new Error('Authentification requise pour accéder au paiement.');
    }

    // Appel à l'API Vercel avec le token d'authentification
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        priceId,
        userId,
        userEmail,
        successUrl,
        cancelUrl,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API error:', data);
      throw new Error(data.error || 'Failed to create checkout session');
    }

    // Rediriger vers Stripe Checkout
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error('No checkout URL returned');
    }

    return data;
  } catch (error) {
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
 * Créer une session de billing portal Stripe pour gérer l'abonnement
 */
export const createBillingPortal = async ({ customerId, returnUrl }) => {
  if (!customerId || typeof customerId !== 'string') {
    throw new Error('Customer ID invalide. Un identifiant Stripe customer est requis.');
  }

  try {

    const response = await fetch('/api/stripe/billing-portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId,
        returnUrl: returnUrl || window.location.origin + '/profile?tab=subscription',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API error:', data);
      throw new Error(data.error || 'Failed to create billing portal session');
    }

    // Rediriger vers le billing portal Stripe
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error('No billing portal URL returned');
    }

    return data;
  } catch (error) {
    console.error('Erreur createBillingPortal:', error);
    throw new Error(error?.message || 'Erreur lors de la création de la session de gestion d\'abonnement');
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
