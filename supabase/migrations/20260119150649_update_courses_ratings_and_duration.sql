-- =====================================================
-- MISE À JOUR DES ÉVALUATIONS ET DURÉES DES COURS
-- =====================================================
-- Ce script met à jour les ratings et duration_hours
-- pour qu'ils soient variés et réalistes
-- =====================================================

-- Fonction pour générer un rating aléatoire réaliste
-- Distribution: 70% entre 4.0-4.8, 20% entre 3.5-4.0, 10% entre 4.8-5.0
CREATE OR REPLACE FUNCTION get_realistic_rating()
RETURNS DECIMAL(3,2) AS $$
DECLARE
  rand_val DECIMAL;
BEGIN
  rand_val := RANDOM();
  
  IF rand_val < 0.7 THEN
    -- 70% des cours: entre 4.0 et 4.8 (excellents)
    RETURN 4.0 + (RANDOM() * 0.8);
  ELSIF rand_val < 0.9 THEN
    -- 20% des cours: entre 3.5 et 4.0 (bons)
    RETURN 3.5 + (RANDOM() * 0.5);
  ELSE
    -- 10% des cours: entre 4.8 et 5.0 (exceptionnels)
    RETURN 4.8 + (RANDOM() * 0.2);
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour générer un nombre d'avis réaliste
-- Distribution variée selon la popularité
CREATE OR REPLACE FUNCTION get_realistic_reviews_count()
RETURNS INTEGER AS $$
DECLARE
  rand_val DECIMAL;
BEGIN
  rand_val := RANDOM();
  
  IF rand_val < 0.3 THEN
    -- 30% des cours: 5-50 avis (nouveaux/popularité moyenne)
    RETURN 5 + FLOOR(RANDOM() * 45)::INTEGER;
  ELSIF rand_val < 0.7 THEN
    -- 40% des cours: 50-200 avis (populaires)
    RETURN 50 + FLOOR(RANDOM() * 150)::INTEGER;
  ELSIF rand_val < 0.9 THEN
    -- 20% des cours: 200-350 avis (très populaires)
    RETURN 200 + FLOOR(RANDOM() * 150)::INTEGER;
  ELSE
    -- 10% des cours: 350-500 avis (best-sellers)
    RETURN 350 + FLOOR(RANDOM() * 150)::INTEGER;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour générer une durée réaliste selon la catégorie
CREATE OR REPLACE FUNCTION get_realistic_duration(course_category TEXT, course_title TEXT)
RETURNS INTEGER AS $$
DECLARE
  base_duration INTEGER;
  variation INTEGER;
BEGIN
  -- Durée de base selon la catégorie
  CASE 
    WHEN course_category = 'preparation_academique' OR course_title ILIKE '%DELF%' OR course_title ILIKE '%DALF%' THEN
      -- Préparations examens: 15-40h
      base_duration := 15;
      variation := 25;
    
    WHEN course_category = 'integration_administrative' THEN
      -- Démarches administratives: 3-8h
      base_duration := 3;
      variation := 5;
    
    WHEN course_category = 'francais' OR course_title ILIKE '%français%' THEN
      -- Cours de français: 10-25h
      base_duration := 10;
      variation := 15;
    
    WHEN course_category = 'culture_francaise' THEN
      -- Culture française: 4-12h
      base_duration := 4;
      variation := 8;
    
    WHEN course_category = 'insertion_professionnelle' OR course_title ILIKE '%CV%' OR course_title ILIKE '%emploi%' THEN
      -- Insertion professionnelle: 5-15h
      base_duration := 5;
      variation := 10;
    
    WHEN course_category = 'logement' OR course_title ILIKE '%logement%' OR course_title ILIKE '%appartement%' THEN
      -- Logement: 2-6h
      base_duration := 2;
      variation := 4;
    
    WHEN course_title ILIKE '%CAF%' OR course_title ILIKE '%sécurité sociale%' OR course_title ILIKE '%carte vitale%' THEN
      -- Démarches spécifiques: 2-5h
      base_duration := 2;
      variation := 3;
    
    WHEN course_title ILIKE '%banque%' OR course_title ILIKE '%compte%' THEN
      -- Banque: 2-4h
      base_duration := 2;
      variation := 2;
    
    WHEN course_title ILIKE '%titre de séjour%' OR course_title ILIKE '%visa%' OR course_title ILIKE '%préfecture%' THEN
      -- Titres de séjour: 3-8h
      base_duration := 3;
      variation := 5;
    
    ELSE
      -- Par défaut: 3-10h
      base_duration := 3;
      variation := 7;
  END CASE;
  
  RETURN base_duration + FLOOR(RANDOM() * variation)::INTEGER;
END;
$$ LANGUAGE plpgsql;

-- Mettre à jour tous les cours publiés
UPDATE courses
SET 
  rating = get_realistic_rating(),
  reviews_count = get_realistic_reviews_count(),
  duration_hours = get_realistic_duration(category, title),
  updated_date = NOW()
WHERE is_published = true;

-- Afficher un résumé des mises à jour
SELECT 
  COUNT(*) as total_courses_updated,
  ROUND(AVG(rating)::numeric, 2) as avg_rating,
  MIN(rating) as min_rating,
  MAX(rating) as max_rating,
  ROUND(AVG(reviews_count)::numeric, 0) as avg_reviews,
  MIN(reviews_count) as min_reviews,
  MAX(reviews_count) as max_reviews,
  ROUND(AVG(duration_hours)::numeric, 1) as avg_duration_hours,
  MIN(duration_hours) as min_duration_hours,
  MAX(duration_hours) as max_duration_hours
FROM courses
WHERE is_published = true;

-- Nettoyer les fonctions temporaires (optionnel)
-- DROP FUNCTION IF EXISTS get_realistic_rating();
-- DROP FUNCTION IF EXISTS get_realistic_reviews_count();
-- DROP FUNCTION IF EXISTS get_realistic_duration(TEXT, TEXT);
