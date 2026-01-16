-- =====================================================
-- MISE À JOUR DES IMAGES DES COURS PAR CATÉGORIE
-- =====================================================
-- Ce script assigne automatiquement des images pertinentes
-- à tous les cours selon leur catégorie
-- =====================================================

-- Images par catégorie (Unsplash - haute qualité)
UPDATE courses
SET thumbnail_url = CASE
  -- INTEGRATION ADMINISTRATIVE : Documents, administration, bureaux
  WHEN category = 'integration_administrative' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%' OR thumbnail_url LIKE '%default%') THEN
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- PREPARATION ACADEMIQUE : Éducation, université, livres
  WHEN category = 'preparation_academique' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%' OR thumbnail_url LIKE '%default%') THEN
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- CULTURE CODES SOCIAUX : Vie française, culture, société
  WHEN category = 'culture_codes_sociaux' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%' OR thumbnail_url LIKE '%default%') THEN
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- INSERTION PROFESSIONNELLE : Carrière, travail, entreprise
  WHEN category = 'insertion_professionnelle' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%' OR thumbnail_url LIKE '%default%') THEN
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- FORMATIONS PROFESSIONNELLES : Compétences, formation continue
  WHEN category = 'formations_professionnelles' AND (thumbnail_url IS NULL OR thumbnail_url = '' OR thumbnail_url NOT LIKE '%unsplash%' OR thumbnail_url LIKE '%default%') THEN
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  -- Par défaut si aucune catégorie ne correspond
  WHEN thumbnail_url IS NULL OR thumbnail_url = '' THEN
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  
  ELSE thumbnail_url
END
WHERE is_published = true;

-- Statistiques par catégorie
SELECT 
  category,
  COUNT(*) as total_cours,
  COUNT(CASE WHEN thumbnail_url LIKE '%unsplash%' THEN 1 END) as avec_image_unsplash,
  COUNT(CASE WHEN thumbnail_url IS NULL OR thumbnail_url = '' THEN 1 END) as sans_image
FROM courses
WHERE is_published = true
GROUP BY category
ORDER BY category;

-- Vérification : Lister quelques cours par catégorie avec leurs images
SELECT 
  category,
  title,
  thumbnail_url,
  CASE 
    WHEN thumbnail_url LIKE '%unsplash%' THEN 'OK - Image assignee'
    WHEN thumbnail_url IS NULL OR thumbnail_url = '' THEN 'ERREUR - Pas d''image'
    ELSE 'ATTENTION - Image personnalisee'
  END as statut_image
FROM courses
WHERE is_published = true
ORDER BY category, title
LIMIT 30;
