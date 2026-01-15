-- =====================================================
-- LISTE TOUS LES COURS EXISTANTS
-- =====================================================

SELECT 
  id,
  title,
  slug,
  category,
  level,
  thumbnail_url,
  is_published,
  created_date
FROM courses
ORDER BY created_date ASC, title ASC;


