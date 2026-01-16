-- =====================================================
-- SUPPRESSION AUTOMATIQUE - 27 COURS SPÉCIFIQUES
-- =====================================================
-- Ce script supprime UNIQUEMENT les 27 cours spécifiques listés
-- Pas tous les "Guide Complet", juste ceux de votre liste
-- =====================================================
-- ⚠️ ATTENTION : Ce script va supprimer définitivement les cours !
-- =====================================================
-- ✅ PRÊT À EXÉCUTER - Copiez-collez dans Supabase SQL Editor et cliquez "Run"
-- =====================================================

-- ÉTAPE 1 : Afficher les cours qui seront supprimés (vérification)
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

-- =====================================================
-- ÉTAPE 2 : SUPPRESSION EN CASCADE (AUTOMATIQUE)
-- =====================================================

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
  '✅ Cours spécifiques supprimés avec succès !' as resultat,
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
  )) as cours_restants_de_la_liste,
  (SELECT COUNT(*) FROM courses WHERE title LIKE '%Guide Complet%') as total_autres_guides_complet_restants;
