-- =====================================================
-- IDENTIFIER LES ANCIENS COURS PAR DÉFAUT
-- =====================================================

-- Liste les cours qui semblent être des cours par défaut (anciens)
SELECT 
  id,
  title,
  slug,
  category,
  level,
  thumbnail_url,
  is_published,
  created_date,
  (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) as nombre_lecons,
  (SELECT COUNT(*) FROM enrollments WHERE course_id = courses.id) as nombre_inscriptions
FROM courses
WHERE slug IN (
  'caf---guide-complet',
  'cpam---guide-complet',
  'guide-complet-caf',
  'francais-debutant-a1',
  'recherche-logement-france'
)
OR (title LIKE '%Guide Complet CAF%' OR title LIKE '%Guide Complet CPAM%')
OR (slug LIKE '%-guide-complet' AND slug NOT LIKE '%procedure%')
ORDER BY title;


