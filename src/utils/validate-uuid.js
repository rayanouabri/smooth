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
  
  const lowerId = id.toLowerCase();
  
  // Liste des IDs mock/test connus
  const knownMockIds = [
    'ffffffff-ffff-4fff-8fff-fffffffffff0',
    'dddddddd-dddd-4ddd-8ddd-ddddddddddde',
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbc',
    'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeef',
    'c9d0e1f2-a3b4-4567-c890-def012345678', // Pattern séquentiel suspect
  ];
  
  // Vérifier si l'ID correspond à un ID mock connu
  if (knownMockIds.includes(lowerId)) {
    return true;
  }
  
  // Vérifier si l'ID contient des caractères répétés (signe d'un ID mock)
  // Pattern: aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa
  const repeatedPattern = /^([0-9a-f])\1{7}-([0-9a-f])\2{3}-4([0-9a-f])\3{2}-8([0-9a-f])\4{2}-([0-9a-f])\5{11}$/i;
  if (repeatedPattern.test(lowerId)) {
    return true;
  }
  
  // Vérifier les patterns séquentiels suspects (comme c9d0e1f2-a3b4-4567-c890-def012345678)
  // Ces patterns ressemblent à des UUIDs valides mais sont souvent des placeholders
  const sequentialPatterns = [
    /^c9d0e1f2-a3b4-4567-c890-def012345678$/i, // Pattern exact
    /^[0-9a-f]{8}-a3b4-4567-[0-9a-f]{4}-def012345678$/i, // Pattern partiel
  ];
  if (sequentialPatterns.some(pattern => pattern.test(lowerId))) {
    return true;
  }
  
  // Vérifier si l'ID est un UUID valide
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidPattern.test(lowerId)) {
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
