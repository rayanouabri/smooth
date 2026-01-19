-- =====================================================
-- CORRECTION DU BUSINESS MODEL : COURS PREMIUM
-- =====================================================
-- Les cours premium n'ont PAS de prix individuel
-- L'accès se fait via l'abonnement Premium/Ultimate VIP
-- =====================================================

-- 1. Ajouter la colonne is_premium si elle n'existe pas
ALTER TABLE courses 
ADD COLUMN IF NOT EXISTS is_premium BOOLEAN DEFAULT FALSE;

-- 2. Marquer les cours premium actuels (ceux avec price > 0)
UPDATE courses
SET is_premium = TRUE
WHERE price > 0 AND is_published = true;

-- 3. Mettre tous les cours premium à price = 0
-- (car l'accès se fait via l'abonnement, pas via un prix individuel)
UPDATE courses
SET price = 0
WHERE is_premium = TRUE;

-- 4. Réduire les durées des leçons pour qu'elles soient plus réalistes
-- Actuellement trop élevées, on les réduit à des durées raisonnables
UPDATE lessons
SET duration_minutes = CASE
  -- Leçons courtes (introduction, conclusion) : 5-10 min
  WHEN title ILIKE '%introduction%' OR title ILIKE '%conclusion%' OR title ILIKE '%résumé%' THEN
    5 + FLOOR(RANDOM() * 5)::INTEGER
  
  -- Leçons normales : 10-20 min (au lieu de potentiellement beaucoup plus)
  WHEN duration_minutes > 20 THEN
    10 + FLOOR(RANDOM() * 10)::INTEGER
  
  -- Leçons déjà courtes : garder entre 5-15 min
  WHEN duration_minutes > 0 AND duration_minutes <= 20 THEN
    GREATEST(5, duration_minutes - FLOOR(RANDOM() * 5)::INTEGER)
  
  -- Leçons sans durée : 10-15 min par défaut
  ELSE
    10 + FLOOR(RANDOM() * 5)::INTEGER
END
WHERE duration_minutes IS NULL OR duration_minutes > 0;

-- 5. Recalculer duration_hours des cours basé sur les leçons
UPDATE courses
SET duration_hours = (
  SELECT CEIL(SUM(COALESCE(l.duration_minutes, 10)) / 60.0)
  FROM lessons l
  WHERE l.course_id = courses.id
)
WHERE EXISTS (
  SELECT 1 FROM lessons l WHERE l.course_id = courses.id
);

-- Afficher un résumé
SELECT 
  COUNT(*) FILTER (WHERE is_premium = FALSE) as cours_gratuits,
  COUNT(*) FILTER (WHERE is_premium = TRUE) as cours_premium,
  ROUND(COUNT(*) FILTER (WHERE is_premium = TRUE)::DECIMAL / COUNT(*)::DECIMAL * 100, 1) as pourcentage_premium,
  ROUND(AVG(duration_hours)::numeric, 1) as duree_moyenne_heures,
  ROUND(AVG((SELECT AVG(duration_minutes) FROM lessons WHERE course_id = courses.id))::numeric, 1) as duree_moyenne_lecon_minutes
FROM courses
WHERE is_published = true;

-- Créer un index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_courses_is_premium ON courses(is_premium);
