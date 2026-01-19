-- =====================================================
-- METTRE 30% DES COURS EN PREMIUM
-- =====================================================
-- Ce script sélectionne 30% des cours de manière aléatoire
-- et leur attribue un prix réaliste selon leur catégorie
-- =====================================================

-- Fonction pour générer un prix réaliste selon la catégorie et la durée
CREATE OR REPLACE FUNCTION get_premium_price(course_category TEXT, course_title TEXT, duration_hours INTEGER)
RETURNS DECIMAL(10,2) AS $$
DECLARE
  base_price DECIMAL(10,2);
  variation DECIMAL(10,2);
  final_price DECIMAL(10,2);
BEGIN
  -- Prix de base selon la catégorie et la durée
  CASE 
    WHEN course_category = 'preparation_academique' OR course_title ILIKE '%DELF%' OR course_title ILIKE '%DALF%' THEN
      -- Préparations examens: 49-99€ selon la durée
      base_price := 49.00;
      variation := 50.00;
    
    WHEN course_category = 'francais' OR course_title ILIKE '%français%' THEN
      -- Cours de français: 39-79€
      base_price := 39.00;
      variation := 40.00;
    
    WHEN course_category = 'insertion_professionnelle' OR course_title ILIKE '%CV%' OR course_title ILIKE '%emploi%' THEN
      -- Insertion professionnelle: 29-69€
      base_price := 29.00;
      variation := 40.00;
    
    WHEN course_category = 'integration_administrative' THEN
      -- Démarches administratives: 19-49€
      base_price := 19.00;
      variation := 30.00;
    
    WHEN course_title ILIKE '%titre de séjour%' OR course_title ILIKE '%visa%' OR course_title ILIKE '%préfecture%' THEN
      -- Titres de séjour: 29-59€
      base_price := 29.00;
      variation := 30.00;
    
    WHEN course_category = 'culture_francaise' THEN
      -- Culture française: 19-39€
      base_price := 19.00;
      variation := 20.00;
    
    WHEN course_title ILIKE '%CAF%' OR course_title ILIKE '%sécurité sociale%' OR course_title ILIKE '%carte vitale%' THEN
      -- Démarches spécifiques: 19-39€
      base_price := 19.00;
      variation := 20.00;
    
    WHEN course_title ILIKE '%banque%' OR course_title ILIKE '%compte%' THEN
      -- Banque: 19-39€
      base_price := 19.00;
      variation := 20.00;
    
    WHEN course_category = 'logement' OR course_title ILIKE '%logement%' OR course_title ILIKE '%appartement%' THEN
      -- Logement: 19-39€
      base_price := 19.00;
      variation := 20.00;
    
    ELSE
      -- Par défaut: 19-49€
      base_price := 19.00;
      variation := 30.00;
  END CASE;
  
  -- Ajuster selon la durée (cours plus longs = plus chers)
  IF duration_hours > 20 THEN
    base_price := base_price + 10.00;
  ELSIF duration_hours > 10 THEN
    base_price := base_price + 5.00;
  END IF;
  
  -- Générer un prix final avec variation
  final_price := base_price + (RANDOM() * variation);
  
  -- Arrondir à .99 ou .49 pour un aspect plus professionnel
  IF RANDOM() < 0.5 THEN
    final_price := FLOOR(final_price) + 0.99;
  ELSE
    final_price := FLOOR(final_price) + 0.49;
  END IF;
  
  RETURN final_price;
END;
$$ LANGUAGE plpgsql;

-- Compter le nombre total de cours publiés
DO $$
DECLARE
  total_courses INTEGER;
  premium_count INTEGER;
  percentage DECIMAL;
BEGIN
  -- Compter les cours publiés
  SELECT COUNT(*) INTO total_courses
  FROM courses
  WHERE is_published = true;
  
  -- Calculer 30% (arrondi)
  premium_count := FLOOR(total_courses * 0.30);
  
  RAISE NOTICE 'Total de cours publiés: %', total_courses;
  RAISE NOTICE 'Nombre de cours à mettre en premium (30%%): %', premium_count;
  
  -- Mettre à jour 30% des cours avec un prix premium
  -- Utiliser RANDOM() pour sélectionner aléatoirement
  UPDATE courses
  SET 
    price = get_premium_price(category, title, duration_hours),
    updated_date = NOW()
  WHERE id IN (
    SELECT id
    FROM courses
    WHERE is_published = true
      AND price = 0  -- Seulement les cours gratuits
    ORDER BY RANDOM()
    LIMIT premium_count
  );
  
  -- Afficher le résultat
  SELECT 
    COUNT(*) FILTER (WHERE price > 0) INTO premium_count
  FROM courses
  WHERE is_published = true;
  
  percentage := (premium_count::DECIMAL / total_courses::DECIMAL * 100);
  
  RAISE NOTICE 'Cours premium après mise à jour: % (%.1f%%)', premium_count, percentage;
END $$;

-- Afficher un résumé des cours premium
SELECT 
  COUNT(*) FILTER (WHERE price = 0) as cours_gratuits,
  COUNT(*) FILTER (WHERE price > 0) as cours_premium,
  ROUND(COUNT(*) FILTER (WHERE price > 0)::DECIMAL / COUNT(*)::DECIMAL * 100, 1) as pourcentage_premium,
  ROUND(AVG(price) FILTER (WHERE price > 0)::numeric, 2) as prix_moyen_premium,
  MIN(price) FILTER (WHERE price > 0) as prix_min_premium,
  MAX(price) FILTER (WHERE price > 0) as prix_max_premium
FROM courses
WHERE is_published = true;

-- Afficher quelques exemples de cours premium
SELECT 
  title,
  category,
  duration_hours,
  price,
  rating,
  reviews_count
FROM courses
WHERE is_published = true
  AND price > 0
ORDER BY RANDOM()
LIMIT 10;

-- Nettoyer la fonction temporaire (optionnel)
-- DROP FUNCTION IF EXISTS get_premium_price(TEXT, TEXT, INTEGER);
