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
  
  // Vérifier si l'ID est un UUID valide d'abord
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidPattern.test(lowerId)) {
    return true; // Si ce n'est pas un UUID valide, considérer comme mock
  }
  
  // Liste STRICTE des IDs mock/test connus (uniquement les IDs vraiment mock/test)
  // Ne JAMAIS inclure d'IDs qui existent réellement dans la base de données
  // Cette liste est la SEULE source de vérité pour les IDs mock
  const knownMockIds = [
    'ffffffff-ffff-4fff-8fff-fffffffffff0',
    'dddddddd-dddd-4ddd-8ddd-ddddddddddde',
    'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbc',
    'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeef',
    '44444444-4444-4444-8444-444444444445',
    '33333333-3333-4333-8333-333333333334',
    'cccccccc-cccc-4ccc-8ccc-cccccccccccd',
    'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaab',
    '11111111-1111-4111-8111-111111111112',
    '22222222-2222-4222-8222-222222222223',
    '80808080-8080-4080-8080-808080808080',
    '90909090-9090-4090-8090-909090909090',
    '60606060-6060-4060-8060-606060606060',
    '50505050-5050-4050-8050-505050505050',
    '70707070-7070-4070-8070-707070707070',
  ];
  
  // Vérifier si l'ID correspond à un ID mock connu (liste stricte uniquement)
  // C'EST LA SEULE VÉRIFICATION - pas de patterns, pas de détection automatique
  return knownMockIds.includes(lowerId);
};

/**
 * Valide qu'un ID est un UUID valide et n'est pas un mock
 * @param {string} id - L'ID à valider
 * @returns {boolean} true si l'ID est valide, false sinon
 */
export const isValidId = (id) => {
  return !isMockId(id);
};
