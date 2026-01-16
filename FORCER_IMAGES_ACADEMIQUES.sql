-- =====================================================
-- FORCER LA MISE À JOUR DES IMAGES - PRÉPARATION ACADÉMIQUE
-- =====================================================
-- Ce script FORCE la mise à jour de TOUS les cours
-- "preparation_academique" sans condition
-- =====================================================

-- Mettre à jour TOUS les cours préparation_academique
UPDATE courses
SET thumbnail_url = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
WHERE category = 'preparation_academique' 
  AND is_published = true;

-- Vérification immédiate
SELECT 
  id,
  title,
  category,
  thumbnail_url,
  CASE 
    WHEN thumbnail_url LIKE '%1523050854058%' THEN '✅ Image OK'
    WHEN thumbnail_url LIKE '%unsplash%' THEN '⚠️ Autre image Unsplash'
    WHEN thumbnail_url IS NULL OR thumbnail_url = '' THEN '❌ Pas d''image'
    ELSE '⚠️ Image personnalisée'
  END as statut
FROM courses
WHERE category = 'preparation_academique' 
  AND is_published = true
ORDER BY title;
