-- =====================================================
-- EXÉCUTER CETTE REQUÊTE MAINTENANT DANS SUPABASE SQL EDITOR
-- =====================================================
-- Copiez-collez ce script dans Supabase SQL Editor
-- et cliquez sur "Run" pour mettre à jour toutes les images
-- =====================================================

UPDATE courses
SET thumbnail_url = CASE
  WHEN category = 'integration_administrative' THEN 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  WHEN category = 'preparation_academique' THEN 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  WHEN category = 'culture_codes_sociaux' THEN 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  WHEN category = 'insertion_professionnelle' THEN 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  WHEN category = 'formations_professionnelles' THEN 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
  ELSE 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
END
WHERE is_published = true;

-- Vérification
SELECT 
  category,
  COUNT(*) as total,
  COUNT(CASE WHEN thumbnail_url LIKE '%unsplash%' THEN 1 END) as avec_image
FROM courses
WHERE is_published = true
GROUP BY category;
