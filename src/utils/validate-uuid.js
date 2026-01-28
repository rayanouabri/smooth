/**
 * Fonction utilitaire pour valider les UUIDs et detecter les IDs mock/test
 */

/**
 * Verifie si un ID est un UUID mock/test
 * @param {string} id - L'ID a verifier
 * @returns {boolean} true si l'ID est un mock/test, false sinon
 */
export const isMockId = (id) => {
  // SIMPLIFIE: Cette fonction ne filtre AUCUN ID qui a un format UUID valide
  // Tous les IDs dans forum_posts sont des donnees reelles
  
  // Rejeter seulement si l'ID est null, undefined, ou n'est pas une string
  if (!id || typeof id !== 'string') return true;
  
  // Verifier que l'ID a un format UUID basique (8-4-4-4-12 caracteres hexadecimaux)
  // On accepte TOUS les formats UUID, pas seulement v4
  const uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  
  // Si ce n'est pas un format UUID valide, c'est peut-etre un mock
  if (!uuidFormat.test(id)) {
    return true;
  }
  
  // Tous les UUIDs valides sont acceptes - pas de filtrage supplementaire
  return false;
};

/**
 * Valide qu'un ID est un UUID valide et n'est pas un mock
 * @param {string} id - L'ID a valider
 * @returns {boolean} true si l'ID est valide, false sinon
 */
export const isValidId = (id) => {
  return !isMockId(id);
};
