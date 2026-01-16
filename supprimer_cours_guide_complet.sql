-- =====================================================
-- SUPPRIMER LES COURS "Guide Complet" 
-- =====================================================
-- Ce script supprime tous les cours dont le titre contient "Guide Complet"
-- en gérant correctement les contraintes de clés étrangères
-- =====================================================

-- ÉTAPE 1 : VÉRIFIER QUELS COURS SERONT SUPPRIMÉS
-- =====================================================
-- Exécutez d'abord cette requête pour voir ce qui sera supprimé

WITH courses_to_delete AS (
  SELECT id FROM courses 
  WHERE title LIKE '%Guide Complet%'
)
SELECT 
  c.id,
  c.title,
  c.slug,
  c.category,
  (SELECT COUNT(*) FROM enrollments WHERE course_id = c.id) as nb_inscriptions,
  (SELECT COUNT(*) FROM lessons WHERE course_id = c.id) as nb_lecons,
  (SELECT COUNT(*) FROM progress WHERE course_id = c.id) as nb_progressions,
  (SELECT COUNT(*) FROM certificates WHERE course_id = c.id) as nb_certificats
FROM courses c
WHERE c.id IN (SELECT id FROM courses_to_delete)
ORDER BY c.title;

-- ⚠️ VÉRIFIEZ LES RÉSULTATS CI-DESSUS AVANT DE CONTINUER ⚠️
-- Si le résultat correspond à ce que vous voulez supprimer, continuez ci-dessous

-- =====================================================
-- ÉTAPE 2 : SUPPRESSION EN CASCADE
-- =====================================================
-- DÉCOMMENTEZ LES LIGNES CI-DESSOUS POUR EXÉCUTER LA SUPPRESSION

/*
WITH courses_to_delete AS (
  SELECT id FROM courses 
  WHERE title LIKE '%Guide Complet%'
)
-- 1. Supprimer les inscriptions (enrollments)
DELETE FROM enrollments
WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 2. Supprimer les progressions (progress)
DELETE FROM progress
WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 3. Supprimer les certificats (certificates)
DELETE FROM certificates
WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 4. Supprimer les leçons (lessons)
DELETE FROM lessons
WHERE course_id IN (SELECT id FROM courses_to_delete);

-- 5. Supprimer les cours eux-mêmes
DELETE FROM courses
WHERE id IN (SELECT id FROM courses_to_delete);

-- 6. Vérification finale
SELECT 
  'Cours "Guide Complet" supprimés avec succès' as resultat,
  (SELECT COUNT(*) FROM courses WHERE title LIKE '%Guide Complet%') as cours_restants;
*/

-- =====================================================
-- VERSION ALTERNATIVE : Supprimer par IDs spécifiques
-- =====================================================
-- Si vous voulez supprimer seulement certains cours précis

/*
WITH courses_to_delete AS (
  SELECT id FROM courses 
  WHERE id IN (
    '550e8400-e29b-41d4-a716-446655440001',  -- Remplacez par l'ID du cours
    -- Ajoutez d'autres IDs ici si besoin
  )
)
-- Même processus de suppression...
DELETE FROM enrollments WHERE course_id IN (SELECT id FROM courses_to_delete);
DELETE FROM progress WHERE course_id IN (SELECT id FROM courses_to_delete);
DELETE FROM certificates WHERE course_id IN (SELECT id FROM courses_to_delete);
DELETE FROM lessons WHERE course_id IN (SELECT id FROM courses_to_delete);
DELETE FROM courses WHERE id IN (SELECT id FROM courses_to_delete);
*/
