-- =====================================================
-- CORRIGER TOUS LES COURS PRÉPARATION ACADÉMIQUE
-- =====================================================
-- Ce script force la mise à jour de TOUS les cours
-- "preparation_academique" - sans condition
-- =====================================================

-- FORCER la mise à jour de TOUS les cours preparation_academique
UPDATE courses
SET thumbnail_url = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
WHERE category = 'preparation_academique' 
  AND is_published = true;

-- Vérification : Afficher tous les cours preparation_academique
SELECT 
  id,
  title,
  category,
  thumbnail_url,
  CASE 
    WHEN thumbnail_url LIKE '%1523050854058%' THEN '✅ Image correcte'
    WHEN thumbnail_url LIKE '%unsplash%' THEN '⚠️ Autre image Unsplash'
    WHEN thumbnail_url IS NULL OR thumbnail_url = '' THEN '❌ Pas d''image'
    ELSE '⚠️ Image personnalisée'
  END as statut
FROM courses
WHERE category = 'preparation_academique' 
  AND is_published = true
ORDER BY title;
