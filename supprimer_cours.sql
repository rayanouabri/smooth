-- =====================================================
-- SUPPRIMER UN COURS AVEC GESTION DES CONTRAINTES
-- =====================================================
-- Ce script supprime un cours et tous ses enregistrements liés
-- en respectant les contraintes de clés étrangères
-- =====================================================

-- INSTRUCTIONS D'UTILISATION :
-- 1. Remplacez 'VOTRE_COURSE_ID_ICI' par l'ID (UUID) du cours à supprimer
-- 2. Pour supprimer plusieurs cours, ajoutez plusieurs lignes séparées par des virgules
-- 3. Exécutez le script dans Supabase SQL Editor

-- =====================================================
-- ÉTAPE 1 : DÉFINIR LES IDs DES COURS À SUPPRIMER
-- =====================================================
WITH courses_to_delete AS (
  SELECT id FROM courses 
  WHERE id IN (
    -- ⬇️ AJOUTEZ LES IDs DES COURS À SUPPRIMER ICI ⬇️
    '3496137e-cd83-5814-91f9-197b223acad3',  -- Exemple : LMD - Guide Complet
    -- 'autre-uuid-ici',                      -- Décommentez et ajoutez d'autres IDs si besoin
    -- 'encore-un-autre-uuid-ici'
  )
)
-- =====================================================
-- ÉTAPE 2 : AFFICHER LES COURS QUI SERONT SUPPRIMÉS
-- =====================================================
SELECT 
  id,
  title,
  category,
  (SELECT COUNT(*) FROM enrollments WHERE course_id = courses.id) as nb_inscriptions,
  (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) as nb_lecons,
  (SELECT COUNT(*) FROM progress WHERE course_id = courses.id) as nb_progressions,
  (SELECT COUNT(*) FROM assessments WHERE course_id = courses.id) as nb_evaluations,
  (SELECT COUNT(*) FROM certificates WHERE course_id = courses.id) as nb_certificats
FROM courses
WHERE id IN (SELECT id FROM courses_to_delete);

-- ⚠️ VÉRIFIEZ LES RÉSULTATS CI-DESSUS AVANT DE CONTINUER ⚠️

-- =====================================================
-- ÉTAPE 3 : SUPPRESSION EN CASCADE (décommentez pour exécuter)
-- =====================================================

/*
WITH courses_to_delete AS (
  SELECT id FROM courses 
  WHERE id IN (
    -- ⬇️ LES MÊMES IDs QU'AU-DESSUS ⬇️
    '3496137e-cd83-5814-91f9-197b223acad3',
    -- 'autre-uuid-ici',
    -- 'encore-un-autre-uuid-ici'
  )
)
-- 3.1. Supprimer les inscriptions (enrollments)
DELETE FROM enrollments
WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 3.2. Supprimer les progressions (progress)
DELETE FROM progress
WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 3.3. Supprimer les évaluations liées (assessments) - si elles référencent le cours
-- Note: assessments ne référence pas directement course_id dans le schéma standard,
-- mais si vous avez ajouté cette relation, décommentez cette ligne
-- DELETE FROM assessments WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 3.4. Supprimer les certificats (certificates)
DELETE FROM certificates
WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 3.5. Supprimer les leçons (lessons) - CASCADE devrait le faire automatiquement,
-- mais on le fait explicitement pour être sûr
DELETE FROM lessons
WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 3.6. Supprimer les cours eux-mêmes
DELETE FROM courses
WHERE id IN (SELECT id FROM courses_to_delete);

-- Afficher le résultat
SELECT 
  'Cours supprimés avec succès' as resultat,
  (SELECT COUNT(*) FROM courses_to_delete) as nombre_cours_supprimes;
*/

-- =====================================================
-- VERSION SIMPLE : SUPPRIMER PAR TITRE OU SLUG
-- =====================================================
-- Si vous préférez supprimer par titre ou slug au lieu d'UUID

/*
-- Supprimer par titre (partiel)
WITH courses_to_delete AS (
  SELECT id FROM courses 
  WHERE title LIKE '%LMD%'  -- ⬅️ Modifiez le titre ici
)
SELECT * FROM courses WHERE id IN (SELECT id FROM courses_to_delete);
-- Puis utilisez les IDs trouvés dans la section ci-dessus
*/

/*
-- Supprimer par slug
WITH courses_to_delete AS (
  SELECT id FROM courses 
  WHERE slug = 'lmd---guide-complet'  -- ⬅️ Modifiez le slug ici
)
SELECT * FROM courses WHERE id IN (SELECT id FROM courses_to_delete);
-- Puis utilisez les IDs trouvés dans la section ci-dessus
*/

-- =====================================================
-- VERSION PAR LOTS : SUPPRIMER PLUSIEURS COURS
-- =====================================================
-- Pour supprimer plusieurs cours en une fois

/*
WITH courses_to_delete AS (
  SELECT id FROM courses 
  WHERE id IN (
    '3496137e-cd83-5814-91f9-197b223acad3',
    'autre-uuid-1',
    'autre-uuid-2',
    'autre-uuid-3'
  )
  -- OU par pattern :
  -- WHERE title LIKE '%Guide Complet%'
  -- WHERE slug LIKE '%-guide-complet'
  -- WHERE category = 'preparation_academique' AND title LIKE '%ancien%'
)
-- Supprimer dans l'ordre des dépendances
DELETE FROM enrollments WHERE course_id IN (SELECT id FROM courses_to_delete);
DELETE FROM progress WHERE course_id IN (SELECT id FROM courses_to_delete);
DELETE FROM certificates WHERE course_id IN (SELECT id FROM courses_to_delete);
DELETE FROM lessons WHERE course_id IN (SELECT id FROM courses_to_delete);
DELETE FROM courses WHERE id IN (SELECT id FROM courses_to_delete);

SELECT 'Suppression terminée' as resultat;
*/


