-- =====================================================
-- FORCER LA MISE À JOUR DE TOUTES LES IMAGES DES COURS
-- =====================================================
-- Ce script force la mise à jour de TOUS les cours publiés
-- en remplaçant toutes les images par celles de la catégorie
-- =====================================================

-- ÉTAPE 1 : Mettre à jour TOUTES les images selon la catégorie
UPDATE courses
SET thumbnail_url = CASE
  -- INTEGRATION ADMINISTRATIVE
  WHEN category = 'integration_administrative' THEN
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- PREPARATION ACADEMIQUE
  WHEN category = 'preparation_academique' THEN
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- CULTURE CODES SOCIAUX
  WHEN category = 'culture_codes_sociaux' THEN
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- INSERTION PROFESSIONNELLE
  WHEN category = 'insertion_professionnelle' THEN
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- FORMATIONS PROFESSIONNELLES
  WHEN category = 'formations_professionnelles' THEN
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- Par défaut si aucune catégorie
  ELSE
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
END
WHERE is_published = true;

-- ÉTAPE 2 : Vérifier les résultats
SELECT 
  category,
  COUNT(*) as total_cours,
  COUNT(CASE WHEN thumbnail_url LIKE '%unsplash%' THEN 1 END) as avec_image_unsplash,
  COUNT(CASE WHEN thumbnail_url IS NULL OR thumbnail_url = '' THEN 1 END) as sans_image
FROM courses
WHERE is_published = true
GROUP BY category
ORDER BY category;

-- ÉTAPE 3 : Afficher quelques exemples
SELECT 
  id,
  title,
  category,
  thumbnail_url,
  CASE 
    WHEN thumbnail_url LIKE '%unsplash%' THEN '✅ Image OK'
    WHEN thumbnail_url IS NULL OR thumbnail_url = '' THEN '❌ Pas d''image'
    ELSE '⚠️ Image personnalisée'
  END as statut
FROM courses
WHERE is_published = true
ORDER BY category, title
LIMIT 30;
