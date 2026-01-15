-- =====================================================
-- SCRIPT DE MISE À JOUR DES ANCIENS COURS
-- =====================================================
-- Ce script complète les anciens cours au lieu de les supprimer
-- Il met à jour les champs manquants ou incomplets
-- =====================================================

-- 1. Mettre à jour les cours CAF avec des données complètes
UPDATE courses
SET 
  description = 'Ce cours est un guide exhaustif pour tous les étudiants internationaux en France qui doivent comprendre et utiliser le système CAF (Caisse d''Allocations Familiales). La CAF est essentielle pour obtenir des aides au logement (APL), des allocations familiales, et d''autres prestations sociales. Nous vous accompagnerons pas à pas dans la création de votre compte, la constitution de votre dossier, et le suivi de vos demandes. Maîtriser la CAF est absolument crucial pour optimiser vos droits sociaux, réduire vos charges de logement, et vivre sereinement votre vie étudiante en France.',
  short_description = 'Guide complet CAF : créer son compte, faire sa demande APL, suivre son dossier. Optimisez vos droits sociaux !',
  category = 'integration_administrative',
  level = COALESCE(NULLIF(level, ''), 'debutant'),
  thumbnail_url = COALESCE(NULLIF(thumbnail_url, ''), 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60'),
  objectives = '["Comprendre le rôle de la CAF en France", "Créer son compte sur caf.fr", "Faire sa demande APL (Aide Personnalisée au Logement)", "Suivre son dossier et comprendre ses droits"]'::jsonb,
  prerequisites = COALESCE(prerequisites, '[]'::jsonb),
  duration_hours = COALESCE(duration_hours, 3),
  rating = COALESCE(rating, 4.8),
  reviews_count = COALESCE(reviews_count, 0),
  enrolled_count = COALESCE(enrolled_count, 0),
  is_published = COALESCE(is_published, true)
WHERE slug IN ('caf---guide-complet', 'guide-complet-caf')
   OR title LIKE '%CAF%Guide%';

-- 2. Mettre à jour les cours CPAM avec des données complètes
UPDATE courses
SET 
  description = 'Ce cours est essentiel pour tous les étudiants internationaux en France afin de comprendre et utiliser le système de Sécurité Sociale français via la CPAM (Caisse Primaire d''Assurance Maladie). La CPAM est votre porte d''entrée vers les remboursements de santé, la Carte Vitale, et l''affiliation à la Sécurité Sociale. Nous vous guiderons pas à pas dans l''inscription, l''obtention de votre numéro de Sécurité Sociale, et l''utilisation de votre espace ameli.fr. Maîtriser la CPAM est absolument crucial pour accéder aux soins, être remboursé(e) de vos frais médicaux, et vivre en toute sécurité sanitaire en France.',
  short_description = 'Guide complet CPAM : inscription, numéro de Sécu, Carte Vitale, remboursements. Accédez aux soins en France !',
  category = 'integration_administrative',
  level = COALESCE(NULLIF(level, ''), 'debutant'),
  thumbnail_url = COALESCE(NULLIF(thumbnail_url, ''), 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60'),
  objectives = '["Comprendre le rôle de la CPAM et de la Sécurité Sociale", "S''inscrire à la Sécurité Sociale française", "Obtenir son numéro de Sécurité Sociale et sa Carte Vitale", "Utiliser ameli.fr pour suivre ses remboursements"]'::jsonb,
  prerequisites = COALESCE(prerequisites, '[]'::jsonb),
  duration_hours = COALESCE(duration_hours, 4),
  rating = COALESCE(rating, 4.8),
  reviews_count = COALESCE(reviews_count, 0),
  enrolled_count = COALESCE(enrolled_count, 0),
  is_published = COALESCE(is_published, true)
WHERE slug = 'cpam---guide-complet'
   OR title LIKE '%CPAM%Guide%';

-- 3. Mettre à jour les autres anciens cours identifiés
UPDATE courses
SET 
  category = COALESCE(NULLIF(category, ''), 'integration_administrative'),
  level = COALESCE(NULLIF(level, ''), 'debutant'),
  thumbnail_url = COALESCE(
    NULLIF(thumbnail_url, ''),
    CASE 
      WHEN category = 'integration_administrative' THEN 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60'
      WHEN category = 'culture_codes_sociaux' THEN 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60'
      WHEN category = 'insertion_professionnelle' THEN 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=60'
      ELSE 'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60'
    END
  ),
  objectives = COALESCE(objectives, '[]'::jsonb),
  prerequisites = COALESCE(prerequisites, '[]'::jsonb),
  duration_hours = COALESCE(duration_hours, 3),
  rating = COALESCE(rating, 4.5),
  is_published = COALESCE(is_published, true)
WHERE (slug LIKE '%-guide-complet' AND slug NOT LIKE '%procedure%')
   OR slug IN ('francais-debutant-a1', 'recherche-logement-france')
   OR (title LIKE '%Guide Complet%' AND title NOT LIKE '%procedure%');

-- 4. Vérifier les cours mis à jour
SELECT 
  id,
  title,
  slug,
  category,
  level,
  thumbnail_url,
  is_published,
  (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) as nombre_lecons
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


