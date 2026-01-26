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
    '44444444-4444-4444-8444-444444444445',
    'c9d0e1f2-a3b4-4567-c890-def012345678', // Pattern séquentiel suspect
    'a7b8c9d0-e1f2-4345-a678-9abcdef01234', // Pattern séquentiel alphabétique
  ];
  
  // Vérifier si l'ID correspond à un ID mock connu
  if (knownMockIds.includes(lowerId)) {
    return true;
  }
  
  // Vérifier si l'ID contient des caractères répétés (signe d'un ID mock)
  // Pattern 1: aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa (caractère unique répété)
  const repeatedPattern1 = /^([0-9a-f])\1{7}-([0-9a-f])\2{3}-4([0-9a-f])\3{2}-8([0-9a-f])\4{2}-([0-9a-f])\5{11}$/i;
  if (repeatedPattern1.test(lowerId)) {
    return true;
  }
  
  // Pattern 2: 44444444-4444-4444-8444-444444444445 (caractère répété dans chaque segment)
  const repeatedPattern2 = /^([0-9a-f])\1{7}-([0-9a-f])\2{3}-([0-9a-f])\3{3}-8([0-9a-f])\4{2}-([0-9a-f])\5{11}$/i;
  if (repeatedPattern2.test(lowerId)) {
    return true;
  }
  
  // Pattern 3: Détecter si plus de 50% des caractères sont identiques (signe d'un mock)
  const chars = lowerId.replace(/-/g, '');
  const charCounts = {};
  for (const char of chars) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  const maxCount = Math.max(...Object.values(charCounts));
  if (maxCount > chars.length * 0.5) {
    return true; // Plus de 50% des caractères sont identiques
  }
  
  // Vérifier les patterns séquentiels suspects
  // Pattern séquentiel numérique: 01234567-89ab-cdef-0123-456789abcdef
  const sequentialNumeric = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (sequentialNumeric.test(lowerId)) {
    // Vérifier si c'est vraiment séquentiel (abc, 123, etc.)
    const segments = lowerId.split('-');
    const allChars = segments.join('');
    // Vérifier si les caractères sont dans l'ordre séquentiel
    let isSequential = true;
    for (let i = 1; i < allChars.length; i++) {
      const prev = parseInt(allChars[i - 1], 16);
      const curr = parseInt(allChars[i], 16);
      // Si la différence est toujours 1 ou -1, c'est suspect
      if (Math.abs(curr - prev) > 2 && Math.abs(curr - prev) !== 15) {
        isSequential = false;
        break;
      }
    }
    // Si c'est trop séquentiel, c'est suspect
    if (isSequential && allChars.length > 20) {
      return true;
    }
  }
  
  // Vérifier les patterns séquentiels alphabétiques (a7b8c9d0-e1f2-4345-a678-9abcdef01234)
  const sequentialAlphaPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-[0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
  if (sequentialAlphaPattern.test(lowerId)) {
    // Vérifier si le pattern contient des séquences alphabétiques suspectes
    const hasSequentialAlpha = /abcdef|bcdef|01234|12345|23456|34567|45678|56789|6789a|789ab|89abc|9abcd/i.test(lowerId);
    if (hasSequentialAlpha && lowerId.includes('4345')) {
      return true; // Pattern très suspect
    }
  }
  
  // Vérifier les patterns connus suspects
  const suspiciousPatterns = [
    /^[0-9a-f]{8}-a3b4-4567-[0-9a-f]{4}-def012345678$/i, // Pattern partiel connu
    /^[0-9a-f]{8}-e1f2-4345-[0-9a-f]{4}-9abcdef01234$/i, // Pattern séquentiel alphabétique
  ];
  if (suspiciousPatterns.some(pattern => pattern.test(lowerId))) {
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
