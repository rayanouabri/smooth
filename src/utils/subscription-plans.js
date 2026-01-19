/**
 * Utilitaire pour vérifier les plans d'abonnement
 * Cette fonction centralise la logique de vérification des plans
 * pour garantir la cohérence dans toute l'application
 */

// Price IDs Stripe - Correspondance avec les plans
export const STRIPE_PRICE_IDS = {
  premium: {
    monthly: 'price_1ShgKyEKmsqeO7fH3eOB1TV5',
    annual: 'price_1SiEWLEKmsqeO7fH2UqWhy0L',
  },
  ultimate: {
    monthly: 'price_1SieSjEKmsqeO7fHFiHhd2g6',
    annual: 'price_1SieV1EKmsqeO7fHo3wLXwo7',
  },
};

/**
 * Détermine le plan à partir d'un Price ID Stripe
 * @param {string} priceId - Le Price ID Stripe
 * @returns {string|null} - Le plan ('premium', 'ultimate', null)
 */
export const getPlanFromPriceId = (priceId) => {
  if (!priceId) return null;
  
  // Vérifier si c'est un Price ID Premium
  if (Object.values(STRIPE_PRICE_IDS.premium).includes(priceId)) {
    return 'premium';
  }
  
  // Vérifier si c'est un Price ID Ultimate VIP
  if (Object.values(STRIPE_PRICE_IDS.ultimate).includes(priceId)) {
    return 'ultimate';
  }
  
  return null;
};

/**
 * Détermine le plan à partir d'un Subscription ID Stripe
 * Note: On peut aussi utiliser metadata sur la subscription
 * @param {string} subscriptionId - Le Subscription ID Stripe
 * @param {Object} userProfile - Le profil utilisateur (pour vérifier subscription_plan)
 * @returns {string|null} - Le plan ('premium', 'ultimate', null)
 */
export const getPlanFromSubscriptionId = (subscriptionId, userProfile) => {
  if (!subscriptionId) return null;
  
  // Si le profil a déjà subscription_plan, l'utiliser
  if (userProfile?.subscription_plan) {
    return userProfile.subscription_plan;
  }
  
  // Fallback: Vérifier si le subscription ID contient "ultimate" (fragile mais utile)
  if (subscriptionId.includes('ultimate') || subscriptionId.toLowerCase().includes('vip')) {
    return 'ultimate';
  }
  
  return 'premium'; // Par défaut, si subscription active, c'est Premium
};

/**
 * Vérifie si un utilisateur a un plan spécifique
 * @param {Object} userProfile - Le profil utilisateur (peut être null)
 * @param {string} planName - Le nom du plan ('premium', 'ultimate', 'gratuit')
 * @returns {boolean} - true si l'utilisateur a ce plan
 */
export const hasPlan = (userProfile, planName) => {
  if (!userProfile) {
    return planName === 'gratuit';
  }
  
  // Vérifier subscription_plan d'abord
  const userPlan = userProfile.subscription_plan || 'gratuit';
  
  if (planName === 'gratuit') {
    return userPlan === 'gratuit' || !userProfile.is_premium;
  }
  
  if (planName === 'premium') {
    // Premium = is_premium true OU subscription_plan 'premium'
    return userProfile.is_premium === true || userProfile.subscription_status === 'active' || userPlan === 'premium';
  }
  
  if (planName === 'ultimate') {
    // Ultimate VIP = subscription_plan 'ultimate' OU (is_premium + subscription_id contient ultimate)
    return userPlan === 'ultimate' || 
           (userProfile.is_premium === true && 
            (userProfile.stripe_subscription_id?.includes('ultimate') || 
             userProfile.stripe_subscription_id?.toLowerCase().includes('vip')));
  }
  
  return false;
};

/**
 * Vérifie si un utilisateur est Ultimate VIP
 * @param {Object} userProfile - Le profil utilisateur
 * @returns {boolean} - true si l'utilisateur est Ultimate VIP
 */
export const isUltimateVIP = (userProfile) => {
  return hasPlan(userProfile, 'ultimate');
};

/**
 * Vérifie si un utilisateur est Premium (inclut Ultimate VIP car Ultimate inclut Premium)
 * @param {Object} userProfile - Le profil utilisateur
 * @returns {boolean} - true si l'utilisateur est Premium ou Ultimate VIP
 */
export const isPremiumOrHigher = (userProfile) => {
  return hasPlan(userProfile, 'premium') || hasPlan(userProfile, 'ultimate');
};

/**
 * Obtient le plan actuel de l'utilisateur
 * @param {Object} userProfile - Le profil utilisateur
 * @returns {string} - Le plan ('gratuit', 'premium', 'ultimate')
 */
export const getCurrentPlan = (userProfile) => {
  if (!userProfile || !userProfile.is_premium) {
    return 'gratuit';
  }
  
  if (hasPlan(userProfile, 'ultimate')) {
    return 'ultimate';
  }
  
  if (hasPlan(userProfile, 'premium')) {
    return 'premium';
  }
  
  return 'gratuit';
};
