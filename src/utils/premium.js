/**
 * Utilitaire pour vérifier le statut Premium d'un utilisateur
 * Cette fonction centralise la logique de vérification Premium
 * pour garantir la cohérence dans toute l'application
 */

/**
 * Vérifie si un utilisateur est Premium
 * @param {Object} userProfile - Le profil utilisateur (peut être null)
 * @returns {boolean} - true si l'utilisateur est Premium, false sinon
 */
export const isPremium = (userProfile) => {
  if (!userProfile) return false;
  
  // L'utilisateur est Premium si :
  // 1. is_premium est explicitement true
  // 2. subscription_status est 'active'
  const hasPremiumFlag = userProfile.is_premium === true || userProfile.is_premium === 'true';
  const hasActiveSubscription = userProfile.subscription_status === 'active';
  
  return hasPremiumFlag || hasActiveSubscription;
};

/**
 * Vérifie si un utilisateur (objet user de auth.js) est Premium
 * @param {Object} user - L'objet utilisateur retourné par me()
 * @returns {boolean} - true si l'utilisateur est Premium, false sinon
 */
export const isUserPremium = (user) => {
  if (!user) return false;
  
  // Vérifier directement sur l'objet user (qui contient déjà les données du profil)
  return isPremium(user);
};

/**
 * Vérifie l'accès à une ressource Premium
 * @param {Object} resource - La ressource (cours, etc.)
 * @param {Object} userProfile - Le profil utilisateur
 * @returns {boolean} - true si l'utilisateur peut accéder à la ressource
 */
export const canAccessPremiumResource = (resource, userProfile) => {
  // Si la ressource n'est pas Premium, elle est accessible à tous
  if (!resource?.is_premium) return true;
  
  // Si la ressource est Premium, vérifier que l'utilisateur est Premium
  return isPremium(userProfile);
};

/**
 * Obtient le message d'erreur si l'utilisateur n'a pas accès à une ressource Premium
 * @param {Object} resource - La ressource (cours, etc.)
 * @param {Object} userProfile - Le profil utilisateur
 * @returns {string|null} - Le message d'erreur ou null si l'accès est autorisé
 */
export const getPremiumAccessError = (resource, userProfile) => {
  if (!canAccessPremiumResource(resource, userProfile)) {
    return 'Cette ressource nécessite un abonnement Premium. Veuillez souscrire pour y accéder.';
  }
  return null;
};
