-- =====================================================
-- SCRIPT DE NETTOYAGE DES ANCIENS COURS PAR DÉFAUT
-- =====================================================
-- Ce script supprime les cours générés automatiquement
-- qui ne font pas partie des nouveaux lots (batches_fixed)
-- =====================================================

-- 1. Identifier et supprimer les cours par défaut
-- Ces cours sont identifiés par leurs slugs génériques ou par le fait
-- qu'ils ont été créés avant l'import des nouveaux lots

-- D'abord, supprimer les leçons associées
DELETE FROM lessons 
WHERE course_id IN (
  SELECT id FROM courses 
  WHERE slug IN (
    'caf---guide-complet',
    'cpam---guide-complet',
    'guide-complet-caf'
  )
  OR (slug LIKE '%-guide-complet' AND slug NOT LIKE '%procedure%')
  OR (title LIKE 'CAF%Guide%' OR title LIKE 'CPAM%Guide%')
);

-- Ensuite, supprimer les cours
DELETE FROM courses 
WHERE slug IN (
  'caf---guide-complet',
  'cpam---guide-complet',
  'guide-complet-caf'
)
OR (slug LIKE '%-guide-complet' AND slug NOT LIKE '%procedure%')
OR (title LIKE 'CAF%Guide%' OR title LIKE 'CPAM%Guide%');

-- 2. Vérifier les catégories restantes
SELECT DISTINCT category, COUNT(*) as count
FROM courses
WHERE is_published = true
GROUP BY category
ORDER BY category;


