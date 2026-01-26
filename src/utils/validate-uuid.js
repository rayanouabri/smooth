/**
 * Fonction utilitaire pour valider les UUIDs et détecter les IDs mock/test
 */

/**
 * Vérifie si un ID est un UUID mock/test
 * @param {string} id - L'ID à vérifier
 * @returns {boolean} true si l'ID est un mock/test, false sinon
 */
export const isMockId = (id) => {
  if (!id || typeof id !== 'string') return true;
  
  // Liste des IDs mock/test connus
  const knownMockIds = [
    'ffffffff-ffff-4fff-8fff-fffffffffff0',
    'dddddddd-dddd-4ddd-8ddd-ddddddddddde',
  ];
  
  // Vérifier si l'ID correspond à un ID mock connu
  if (knownMockIds.includes(id.toLowerCase())) {
    return true;
  }
  
  // Vérifier si l'ID contient des caractères répétés (signe d'un ID mock)
  // Pattern: aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa
  const repeatedPattern = /^([0-9a-f])\1{7}-([0-9a-f])\2{3}-4([0-9a-f])\3{2}-8([0-9a-f])\4{2}-([0-9a-f])\5{11}$/i;
  if (repeatedPattern.test(id)) {
    return true;
  }
  
  // Vérifier si l'ID est un UUID valide
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidPattern.test(id)) {
    return true; // Si ce n'est pas un UUID valide, considérer comme mock
  }
  
  return false;
};

/**
 * Valide qu'un ID est un UUID valide et n'est pas un mock
 * @param {string} id - L'ID à valider
 * @returns {boolean} true si l'ID est valide, false sinon
 */
export const isValidId = (id) => {
  return !isMockId(id);
};
