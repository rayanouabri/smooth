-- =====================================================
-- MISE À JOUR DES IMAGES POUR TOUS LES COURS
-- =====================================================
-- Ce script assigne une image appropriée à chaque cours
-- selon sa catégorie, si l'image manque ou n'est pas valide
-- =====================================================

UPDATE courses 
SET thumbnail_url = CASE
  -- Integration Administrative
  WHEN category = 'integration_administrative' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%') THEN 
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60'
  
  -- Culture & Codes Sociaux
  WHEN category = 'culture_codes_sociaux' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%') THEN 
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60'
  
  -- Insertion Professionnelle
  WHEN category = 'insertion_professionnelle' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%') THEN 
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=60'
  
  -- Preparation Academique
  WHEN category = 'preparation_academique' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%') THEN 
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60'
  
  -- Par défaut
  WHEN (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%') THEN 
    'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60'
  
  ELSE thumbnail_url
END
WHERE is_published = true;

-- Statistiques après mise à jour
SELECT 
  category,
  COUNT(*) as total_cours,
  COUNT(CASE WHEN thumbnail_url LIKE '%unsplash%' THEN 1 END) as avec_image_unsplash,
  COUNT(CASE WHEN thumbnail_url IS NULL OR thumbnail_url = '' THEN 1 END) as sans_image
FROM courses
WHERE is_published = true
GROUP BY category
ORDER BY category;


