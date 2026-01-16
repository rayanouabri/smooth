-- =====================================================
-- SUPPRIMER CERTAINS COURS "Guide Complet" - VERSION EXÉCUTABLE
-- =====================================================
-- Ce script supprime UNIQUEMENT les cours spécifiques listés ci-dessous
-- en gérant correctement les contraintes de clés étrangères
-- =====================================================
-- ⚠️ ATTENTION : Ce script va supprimer définitivement les cours !
-- =====================================================

-- ÉTAPE 1 : Vérifier quels cours seront supprimés
SELECT 
  id,
  title,
  category,
  (SELECT COUNT(*) FROM enrollments WHERE course_id = courses.id) as nb_inscriptions,
  (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) as nb_lecons
FROM courses
WHERE title IN (
  'Naturalisation - Guide Complet',
  'Renouvellement - Guide Complet',
  'Permis de Séjour - Guide Complet',
  'Urssaf - Guide Complet',
  'RSI - Guide Complet',
  'Carte Vitale - Guide Complet',
  'Visa - Guide Complet',
  'Démarches Préfecture - Guide Complet',
  'Impôts - Guide Complet',
  'LMD - Guide Complet',
  'Passeport - Guide Complet',
  'Mutuelle - Guide Complet',
  'Sécurité Sociale - Guide Complet',
  'CAF - Guide Complet',
  'Assurance - Guide Complet',
  'Banque - Guide Complet',
  'Apprentissage - Guide Complet',
  'Prise de Notes - Guide Complet',
  'Méthodologie - Guide Complet',
  'Bibliographie - Guide Complet',
  'Recherche - Guide Complet',
  'Thèse - Guide Complet',
  'Mémoire - Guide Complet',
  'Équivalences - Guide Complet',
  'Bourses - Guide Complet',
  'Système Éducatif - Guide Complet',
  'Guide Complet CAF - Allocation Familiales'
)
ORDER BY title;

-- ⚠️ VÉRIFIEZ LES RÉSULTATS CI-DESSUS AVANT DE CONTINUER ⚠️
-- Si tout est correct, décommentez la section de suppression ci-dessous

-- =====================================================
-- ÉTAPE 2 : SUPPRESSION EN CASCADE (décommentez pour exécuter)
-- =====================================================

/*
-- 1. Supprimer les inscriptions (enrollments)
DELETE FROM enrollments
WHERE course_id IN (
  SELECT id FROM courses WHERE title IN (
    'Naturalisation - Guide Complet',
    'Renouvellement - Guide Complet',
    'Permis de Séjour - Guide Complet',
    'Urssaf - Guide Complet',
    'RSI - Guide Complet',
    'Carte Vitale - Guide Complet',
    'Visa - Guide Complet',
    'Démarches Préfecture - Guide Complet',
    'Impôts - Guide Complet',
    'LMD - Guide Complet',
    'Passeport - Guide Complet',
    'Mutuelle - Guide Complet',
    'Sécurité Sociale - Guide Complet',
    'CAF - Guide Complet',
    'Assurance - Guide Complet',
    'Banque - Guide Complet',
    'Apprentissage - Guide Complet',
    'Prise de Notes - Guide Complet',
    'Méthodologie - Guide Complet',
    'Bibliographie - Guide Complet',
    'Recherche - Guide Complet',
    'Thèse - Guide Complet',
    'Mémoire - Guide Complet',
    'Équivalences - Guide Complet',
    'Bourses - Guide Complet',
    'Système Éducatif - Guide Complet',
    'Guide Complet CAF - Allocation Familiales'
  )
);

-- 2. Supprimer les progressions (progress)
DELETE FROM progress
WHERE course_id IN (
  SELECT id FROM courses WHERE title IN (
    'Naturalisation - Guide Complet',
    'Renouvellement - Guide Complet',
    'Permis de Séjour - Guide Complet',
    'Urssaf - Guide Complet',
    'RSI - Guide Complet',
    'Carte Vitale - Guide Complet',
    'Visa - Guide Complet',
    'Démarches Préfecture - Guide Complet',
    'Impôts - Guide Complet',
    'LMD - Guide Complet',
    'Passeport - Guide Complet',
    'Mutuelle - Guide Complet',
    'Sécurité Sociale - Guide Complet',
    'CAF - Guide Complet',
    'Assurance - Guide Complet',
    'Banque - Guide Complet',
    'Apprentissage - Guide Complet',
    'Prise de Notes - Guide Complet',
    'Méthodologie - Guide Complet',
    'Bibliographie - Guide Complet',
    'Recherche - Guide Complet',
    'Thèse - Guide Complet',
    'Mémoire - Guide Complet',
    'Équivalences - Guide Complet',
    'Bourses - Guide Complet',
    'Système Éducatif - Guide Complet',
    'Guide Complet CAF - Allocation Familiales'
  )
);

-- 3. Supprimer les certificats (certificates)
DELETE FROM certificates
WHERE course_id IN (
  SELECT id FROM courses WHERE title IN (
    'Naturalisation - Guide Complet',
    'Renouvellement - Guide Complet',
    'Permis de Séjour - Guide Complet',
    'Urssaf - Guide Complet',
    'RSI - Guide Complet',
    'Carte Vitale - Guide Complet',
    'Visa - Guide Complet',
    'Démarches Préfecture - Guide Complet',
    'Impôts - Guide Complet',
    'LMD - Guide Complet',
    'Passeport - Guide Complet',
    'Mutuelle - Guide Complet',
    'Sécurité Sociale - Guide Complet',
    'CAF - Guide Complet',
    'Assurance - Guide Complet',
    'Banque - Guide Complet',
    'Apprentissage - Guide Complet',
    'Prise de Notes - Guide Complet',
    'Méthodologie - Guide Complet',
    'Bibliographie - Guide Complet',
    'Recherche - Guide Complet',
    'Thèse - Guide Complet',
    'Mémoire - Guide Complet',
    'Équivalences - Guide Complet',
    'Bourses - Guide Complet',
    'Système Éducatif - Guide Complet',
    'Guide Complet CAF - Allocation Familiales'
  )
);

-- 4. Supprimer les leçons (lessons)
DELETE FROM lessons
WHERE course_id IN (
  SELECT id FROM courses WHERE title IN (
    'Naturalisation - Guide Complet',
    'Renouvellement - Guide Complet',
    'Permis de Séjour - Guide Complet',
    'Urssaf - Guide Complet',
    'RSI - Guide Complet',
    'Carte Vitale - Guide Complet',
    'Visa - Guide Complet',
    'Démarches Préfecture - Guide Complet',
    'Impôts - Guide Complet',
    'LMD - Guide Complet',
    'Passeport - Guide Complet',
    'Mutuelle - Guide Complet',
    'Sécurité Sociale - Guide Complet',
    'CAF - Guide Complet',
    'Assurance - Guide Complet',
    'Banque - Guide Complet',
    'Apprentissage - Guide Complet',
    'Prise de Notes - Guide Complet',
    'Méthodologie - Guide Complet',
    'Bibliographie - Guide Complet',
    'Recherche - Guide Complet',
    'Thèse - Guide Complet',
    'Mémoire - Guide Complet',
    'Équivalences - Guide Complet',
    'Bourses - Guide Complet',
    'Système Éducatif - Guide Complet',
    'Guide Complet CAF - Allocation Familiales'
  )
);

-- 5. Supprimer les cours eux-mêmes
DELETE FROM courses
WHERE title IN (
  'Naturalisation - Guide Complet',
  'Renouvellement - Guide Complet',
  'Permis de Séjour - Guide Complet',
  'Urssaf - Guide Complet',
  'RSI - Guide Complet',
  'Carte Vitale - Guide Complet',
  'Visa - Guide Complet',
  'Démarches Préfecture - Guide Complet',
  'Impôts - Guide Complet',
  'LMD - Guide Complet',
  'Passeport - Guide Complet',
  'Mutuelle - Guide Complet',
  'Sécurité Sociale - Guide Complet',
  'CAF - Guide Complet',
  'Assurance - Guide Complet',
  'Banque - Guide Complet',
  'Apprentissage - Guide Complet',
  'Prise de Notes - Guide Complet',
  'Méthodologie - Guide Complet',
  'Bibliographie - Guide Complet',
  'Recherche - Guide Complet',
  'Thèse - Guide Complet',
  'Mémoire - Guide Complet',
  'Équivalences - Guide Complet',
  'Bourses - Guide Complet',
  'Système Éducatif - Guide Complet',
  'Guide Complet CAF - Allocation Familiales'
);

-- 6. Vérification finale
SELECT 
  'Cours spécifiques supprimés avec succès' as resultat,
  (SELECT COUNT(*) FROM courses WHERE title IN (
    'Naturalisation - Guide Complet',
    'Renouvellement - Guide Complet',
    'Permis de Séjour - Guide Complet',
    'Urssaf - Guide Complet',
    'RSI - Guide Complet',
    'Carte Vitale - Guide Complet',
    'Visa - Guide Complet',
    'Démarches Préfecture - Guide Complet',
    'Impôts - Guide Complet',
    'LMD - Guide Complet',
    'Passeport - Guide Complet',
    'Mutuelle - Guide Complet',
    'Sécurité Sociale - Guide Complet',
    'CAF - Guide Complet',
    'Assurance - Guide Complet',
    'Banque - Guide Complet',
    'Apprentissage - Guide Complet',
    'Prise de Notes - Guide Complet',
    'Méthodologie - Guide Complet',
    'Bibliographie - Guide Complet',
    'Recherche - Guide Complet',
    'Thèse - Guide Complet',
    'Mémoire - Guide Complet',
    'Équivalences - Guide Complet',
    'Bourses - Guide Complet',
    'Système Éducatif - Guide Complet',
    'Guide Complet CAF - Allocation Familiales'
  )) as cours_restants,
  (SELECT COUNT(*) FROM courses WHERE title LIKE '%Guide Complet%') as total_guides_complet_restants;
*/
