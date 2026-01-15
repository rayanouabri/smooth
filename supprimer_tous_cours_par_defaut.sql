-- =====================================================
-- SUPPRIMER TOUS LES COURS GÉNÉRÉS AUTOMATIQUEMENT
-- =====================================================
-- Ce script supprime tous les 80 cours qui ont été créés
-- à partir de seed-complete-data.sql
-- Pattern d'identification: description commence par "Apprenez tout sur"
-- =====================================================

-- IMPORTANT: Supprimer dans l'ordre pour respecter les contraintes de clés étrangères

-- 1. Supprimer d'abord tous les enrollments (inscriptions aux cours)
DELETE FROM enrollments 
WHERE course_id IN (
  SELECT id FROM courses 
  WHERE description LIKE 'Apprenez tout sur%en France. Guide complet avec démarches%'
);

-- 2. Ensuite, supprimer tous les lessons (leçons des cours)
DELETE FROM lessons 
WHERE course_id IN (
  SELECT id FROM courses 
  WHERE description LIKE 'Apprenez tout sur%en France. Guide complet avec démarches%'
);

-- 3. Enfin, supprimer tous les courses générés automatiquement
-- Ces cours sont identifiés par leur pattern de description caractéristique
DELETE FROM courses 
WHERE description LIKE 'Apprenez tout sur%en France. Guide complet avec démarches%';

-- 4. Vérification : Compter les cours restants
SELECT 
  COUNT(*) as total_cours_restants,
  COUNT(CASE WHEN is_published = true THEN 1 END) as cours_publies,
  COUNT(CASE WHEN description LIKE 'Apprenez tout sur%' THEN 1 END) as anciens_cours_restants
FROM courses;

