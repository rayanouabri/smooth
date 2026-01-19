-- =====================================================
-- SCHÉMA COMPLET AVEC COURS DE DÉMO
-- Exécutez ce SQL dans l'éditeur SQL de Supabase
-- =====================================================

-- 1. Table: courses
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  description TEXT,
  short_description TEXT,
  category TEXT,
  level TEXT,
  language TEXT DEFAULT 'fr',
  duration_hours INTEGER DEFAULT 0,
  price DECIMAL(10,2) DEFAULT 0,
  thumbnail_url TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  enrolled_count INTEGER DEFAULT 0,
  objectives JSONB DEFAULT '[]',
  prerequisites JSONB DEFAULT '[]',
  is_published BOOLEAN DEFAULT false,
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Table: lessons
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  "order" INTEGER DEFAULT 0,
  duration_minutes INTEGER DEFAULT 0,
  video_url TEXT,
  resources JSONB DEFAULT '[]',
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Table: user_profiles
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  full_name TEXT,
  photo_url TEXT,
  country_origin TEXT,
  city_destination TEXT,
  arrival_date DATE,
  study_field TEXT,
  french_level TEXT DEFAULT 'A1',
  goals JSONB DEFAULT '[]',
  bio TEXT,
  phone TEXT,
  subscription_plan TEXT DEFAULT 'gratuit',
  ai_messages_used INTEGER DEFAULT 0,
  ai_messages_month DATE DEFAULT (DATE_TRUNC('month', NOW())::date),
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id),
  UNIQUE(user_email)
);

-- 4. Table: enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  progress_percentage DECIMAL(5,2) DEFAULT 0,
  completed_lessons JSONB DEFAULT '[]',
  last_accessed TIMESTAMPTZ DEFAULT NOW(),
  time_spent_minutes INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  certificate_issued BOOLEAN DEFAULT false,
  created_date TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_email, course_id)
);

-- 5. Table: progress
CREATE TABLE IF NOT EXISTS progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  score DECIMAL(5,2),
  time_spent_minutes INTEGER DEFAULT 0,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Table: assessments
CREATE TABLE IF NOT EXISTS assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  assessment_type TEXT,
  score DECIMAL(5,2),
  max_score DECIMAL(5,2) DEFAULT 100,
  results JSONB,
  time_taken INTEGER,
  feedback TEXT,
  areas_to_improve JSONB DEFAULT '[]',
  completed_date TIMESTAMPTZ DEFAULT NOW(),
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Table: certificates
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  certificate_url TEXT,
  issued_date TIMESTAMPTZ DEFAULT NOW(),
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Table: resumes
CREATE TABLE IF NOT EXISTS resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  resume_data JSONB,
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Table: forum_posts
CREATE TABLE IF NOT EXISTS forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  author_email TEXT NOT NULL,
  author_name TEXT,
  replies_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT false,
  is_solved BOOLEAN DEFAULT false,
  tags JSONB DEFAULT '[]',
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Table: forum_replies
CREATE TABLE IF NOT EXISTS forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_email TEXT NOT NULL,
  author_name TEXT,
  is_solution BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Table: teacher_profiles
CREATE TABLE IF NOT EXISTS teacher_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  name TEXT,
  specialty TEXT,
  bio TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW()
);

-- 12. Table: testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  student_photo TEXT,
  country_origin TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  is_featured BOOLEAN DEFAULT false,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- INDEXES
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_courses_is_published ON courses(is_published);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_lessons_course_id ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_order ON lessons(course_id, "order");
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_email ON user_profiles(user_email);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_email ON enrollments(user_email);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_course ON enrollments(user_email, course_id);
CREATE INDEX IF NOT EXISTS idx_progress_user_email ON progress(user_email);
CREATE INDEX IF NOT EXISTS idx_progress_course_id ON progress(course_id);
CREATE INDEX IF NOT EXISTS idx_assessments_user_email ON assessments(user_email);
CREATE INDEX IF NOT EXISTS idx_assessments_type ON assessments(assessment_type);
CREATE INDEX IF NOT EXISTS idx_forum_posts_category ON forum_posts(category);
CREATE INDEX IF NOT EXISTS idx_forum_posts_author_email ON forum_posts(author_email);
CREATE INDEX IF NOT EXISTS idx_forum_replies_post_id ON forum_replies(post_id);

-- =====================================================
-- TRIGGERS
-- =====================================================

-- Fonction pour créer un profil utilisateur automatiquement
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (user_id, user_email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  )
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Fonction pour mettre à jour updated_date
CREATE OR REPLACE FUNCTION update_updated_date_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_date = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_courses_updated_date ON courses;
CREATE TRIGGER update_courses_updated_date BEFORE UPDATE ON courses FOR EACH ROW EXECUTE FUNCTION update_updated_date_column();

DROP TRIGGER IF EXISTS update_user_profiles_updated_date ON user_profiles;
CREATE TRIGGER update_user_profiles_updated_date BEFORE UPDATE ON user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_date_column();

-- =====================================================
-- COURS DE DÉMO COMPLETS
-- =====================================================

-- COURS 1: Guide Complet CAF
INSERT INTO courses (id, title, slug, description, short_description, category, level, price, is_published, rating, reviews_count, objectives, prerequisites) VALUES
(
  gen_random_uuid(),
  'Guide Complet CAF - Allocation Familiales',
  'guide-complet-caf',
  'Apprenez comment faire votre demande CAF, comprendre les allocations, et optimiser vos droits sociaux en France. Ce cours complet vous guide pas à pas dans toutes les démarches CAF.',
  'Guide pas à pas pour votre demande CAF',
  'integration_administrative',
  'debutant',
  0,
  true,
  4.8,
  150,
  '["Comprendre le système CAF","Faire sa demande APL","Optimiser ses allocations","Gérer son dossier en ligne"]'::jsonb,
  '[]'::jsonb
) ON CONFLICT (slug) DO NOTHING RETURNING id INTO TEMP ca_course_id;

-- Leçons pour CAF
DO $$
DECLARE
  ca_id UUID;
BEGIN
  SELECT id INTO ca_id FROM courses WHERE slug = 'guide-complet-caf';
  
  IF ca_id IS NOT NULL THEN
    INSERT INTO lessons (course_id, title, content, "order", duration_minutes) VALUES
    (ca_id, 'Introduction à la CAF', '# Qu''est-ce que la CAF ?

La Caisse d''Allocations Familiales (CAF) est un organisme qui verse des aides sociales aux familles et aux personnes ayant des revenus modestes.

## Les principales aides

- **APL** : Aide Personnalisée au Logement
- **ALS** : Allocation de Logement Social  
- **RSA** : Revenu de Solidarité Active
- **Prime d''activité**

## Pour qui ?

- Étudiants en logement
- Familles avec enfants
- Personnes en situation de précarité
', 1, 15),
    (ca_id, 'Documents nécessaires pour votre demande', '# Documents à préparer

## Pièces obligatoires

1. **Pièce d''identité** : Passeport ou titre de séjour
2. **Justificatif de domicile** : Bail, quittance de loyer
3. **RIB** : Relevé d''identité bancaire français
4. **Attestation d''inscription** : Universitaire ou autre
5. **Justificatif de ressources** : Fiches de paie, bourses

## Conseils

- Tous les documents doivent être récents (moins de 3 mois)
- Photos nettes et lisibles
- Format PDF recommandé
', 2, 20),
    (ca_id, 'Créer votre compte CAF en ligne', '# Créer votre compte

1. Allez sur **caf.fr**
2. Cliquez sur "Créer un compte"
3. Remplissez le formulaire avec vos informations
4. Confirmez votre email
5. Connectez-vous à votre espace

## Avantages du compte en ligne

- Suivi en temps réel
- Notification des paiements
- Simulation des aides
- Téléchargement des attestations
', 3, 25),
    (ca_id, 'Simuler votre aide APL', '# Simulateur CAF

Utilisez le simulateur officiel pour estimer votre aide :

1. Connectez-vous à votre compte
2. Allez dans "Mes démarches"
3. Cliquez sur "Simuler mes droits"
4. Remplissez les informations
5. Consultez le montant estimé

## Facteurs pris en compte

- Montant du loyer
- Vos ressources
- Composition du foyer
- Zone géographique
', 4, 18);
  END IF;
END $$;

-- COURS 2: Français Débutant A1
INSERT INTO courses (id, title, slug, description, short_description, category, level, price, is_published, rating, reviews_count, objectives, prerequisites) VALUES
(
  gen_random_uuid(),
  'Français pour Débutants - Niveau A1',
  'francais-debutant-a1',
  'Cours complet de français pour débutants. Apprenez les bases de la langue française avec des exercices pratiques, dialogues audio et préparation DELF A1.',
  'Commencez votre apprentissage du français',
  'preparation_academique',
  'debutant',
  0,
  true,
  4.9,
  200,
  '["Parler français au quotidien","Comprendre les conversations simples","Lire et écrire en français","Préparer le DELF A1"]'::jsonb,
  '[]'::jsonb
) ON CONFLICT (slug) DO NOTHING RETURNING id INTO TEMP fr_course_id;

-- Leçons pour Français A1
DO $$
DECLARE
  fr_id UUID;
BEGIN
  SELECT id INTO fr_id FROM courses WHERE slug = 'francais-debutant-a1';
  
  IF fr_id IS NOT NULL THEN
    INSERT INTO lessons (course_id, title, content, "order", duration_minutes) VALUES
    (fr_id, 'Alphabet et prononciation', '# L''alphabet français

A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z

## Prononciation spéciale

- **é** : comme dans "café"
- **è** : comme dans "père"  
- **ê** : comme dans "fête"
- **ç** : comme "s" (français)

## Exercice

Répétez après l''audio : Bonjour, je m''appelle...
', 1, 20),
    (fr_id, 'Salutations et présentations', '# Dire bonjour

- **Bonjour** : le jour (formel)
- **Salut** : familier
- **Bonsoir** : le soir
- **Bonne nuit** : avant de dormir

## Se présenter

- Je m''appelle... (I am called...)
- Je suis... (I am...)
- Enchanté(e) (Nice to meet you)

## Dialogue

- A: Bonjour, je m''appelle Marie.
- B: Bonjour Marie, je suis Pierre. Enchanté !
- A: Enchantée aussi !
', 2, 25),
    (fr_id, 'Les nombres de 0 à 100', '# Les nombres

0 zéro, 1 un, 2 deux, 3 trois, 4 quatre, 5 cinq, 6 six, 7 sept, 8 huit, 9 neuf, 10 dix

11 onze, 12 douze, 13 treize, 14 quatorze, 15 quinze, 16 seize, 17 dix-sept, 18 dix-huit, 19 dix-neuf, 20 vingt

## Exercices

- Compter de 1 à 20
- Donner votre numéro de téléphone
- Dire votre âge
', 3, 30),
    (fr_id, 'Articles définis et indéfinis', '# Les articles

## Définis (the)

- **le** : masculin singulier (le livre)
- **la** : féminin singulier (la table)
- **les** : pluriel (les livres, les tables)
- **l''** : devant voyelle (l''ami, l''école)

## Indéfinis (a/an)

- **un** : masculin (un livre)
- **une** : féminin (une table)
- **des** : pluriel (des livres)

## Exercices

Complétez avec le bon article : ... chat, ... maison, ... étudiants
', 4, 35);
  END IF;
END $$;

-- COURS 3: Recherche de Logement
INSERT INTO courses (id, title, slug, description, short_description, category, level, price, is_published, rating, reviews_count, objectives, prerequisites) VALUES
(
  gen_random_uuid(),
  'Recherche de Logement en France',
  'recherche-logement-france',
  'Tout ce que vous devez savoir pour trouver un logement en France : garant, dossier locatif, visites, contrats, assurance.',
  'Trouvez votre logement idéal en France',
  'integration_administrative',
  'intermediaire',
  29,
  true,
  4.7,
  180,
  '["Trouver un logement","Comprendre les baux","Constituer un dossier","Éviter les arnaques"]'::jsonb,
  '[]'::jsonb
) ON CONFLICT (slug) DO NOTHING RETURNING id INTO TEMP log_course_id;

-- Leçons pour Logement
DO $$
DECLARE
  log_id UUID;
BEGIN
  SELECT id INTO log_id FROM courses WHERE slug = 'recherche-logement-france';
  
  IF log_id IS NOT NULL THEN
    INSERT INTO lessons (course_id, title, content, "order", duration_minutes) VALUES
    (log_id, 'Où chercher un logement ?', '# Sites et plateformes

## Sites principaux

- **Leboncoin** : annonces particulières
- **SeLoger** : agences immobilières
- **PAP** : Particulier à Particulier
- **CROUS** : logements étudiants
- Groupes Facebook locaux

## Types de logements

- Studio (T1)
- Appartement (T2, T3, T4+)
- Colocation
- Résidence étudiante

## Budget

En moyenne à Paris : 600-1200€/mois
En province : 400-800€/mois
', 1, 20),
    (log_id, 'Le dossier locatif parfait', '# Documents requis

## Pièces essentielles

1. **Garant** : garant français ou VISALE
2. **Revenus** : 3 dernières fiches de paie
3. **RIB** : relevé bancaire
4. **Attestation employeur** : ou certificat de scolarité
5. **Anciens propriétaires** : références

## Conseils

- Dossier complet dès le premier contact
- Présentation soignée
- Réactivité = avantage compétitif
', 2, 25),
    (log_id, 'La visite et la négociation', '# Visiter un logement

## Checklist visite

- État général
- Problèmes (fuites, chauffage, isolation)
- Transport en commun
- Commerces à proximité
- Sécurité du quartier

## Négocier

- Proposer une caution plus élevée
- Payer plusieurs mois d''avance
- Garantie solide
- Références excellentes

## Signer le bail

- Lire TOUT le contrat
- Vérifier l''état des lieux
- Comprendre les charges
- Assurance habitation OBLIGATOIRE
', 3, 30);
  END IF;
END $$;

-- Ajouter 10 autres cours rapidement
INSERT INTO courses (title, slug, description, short_description, category, level, price, is_published, rating, reviews_count, objectives, prerequisites) VALUES
('CV à la Française et Entretien', 'cv-francais-entretien', 'Rédigez un CV français percutant et réussissez vos entretiens d''embauche', 'Préparez votre insertion professionnelle', 'insertion_professionnelle', 'intermediaire', 39, true, 4.8, 220, '["Créer un CV français","Rédiger une lettre de motivation","Réussir les entretiens"]'::jsonb, '[]'::jsonb),
('Sécurité Sociale et Mutuelle', 'securite-sociale-mutuelle', 'Comprenez le système de santé français et choisissez votre mutuelle', 'Protégez votre santé en France', 'integration_administrative', 'debutant', 0, true, 4.7, 160, '["S''affilier à la CPAM","Obtenir la carte Vitale","Choisir une mutuelle"]'::jsonb, '[]'::jsonb),
('Codes Sociaux Français', 'codes-sociaux-francais', 'Décryptez les codes sociaux et évitez les impairs culturels', 'Intégrez-vous socialement', 'culture_codes_sociaux', 'intermediaire', 0, true, 4.6, 140, '["Comprendre la politesse française","Maîtriser tutoiement/vouvoiement","Éviter les faux-pas"]'::jsonb, '[]'::jsonb),
('Titre de Séjour Étudiant', 'titre-sejour-etudiant', 'Guide complet pour obtenir et renouveler votre titre de séjour', 'Maîtrisez les démarches administratives', 'integration_administrative', 'intermediaire', 0, true, 4.8, 190, '["Préparer votre dossier","Prendre RDV en préfecture","Renouveler votre titre"]'::jsonb, '[]'::jsonb),
('Ouvrir un Compte Bancaire', 'compte-bancaire-france', 'Choisissez et ouvrez le bon compte bancaire en France', 'Gérez vos finances', 'integration_administrative', 'debutant', 0, true, 4.6, 120, '["Comparer les banques","Ouvrir un compte","Utiliser les services bancaires"]'::jsonb, '[]'::jsonb),
('Système Éducatif Français', 'systeme-educatif-francais', 'Comprenez tout le système d''éducation français', 'Orientez-vous dans vos études', 'preparation_academique', 'intermediaire', 0, true, 4.7, 150, '["Comprendre LMD","Connaître les équivalences","Choisir son cursus"]'::jsonb, '[]'::jsonb),
('Budget Étudiant', 'budget-etudiant', 'Gérez votre budget mensuel et économisez intelligemment', 'Prenez le contrôle de vos finances', 'integration_administrative', 'debutant', 0, true, 4.5, 110, '["Établir un budget","Économiser efficacement","Éviter les pièges"]'::jsonb, '[]'::jsonb),
('Transport en Commun Paris', 'transports-paris', 'Maîtrisez les transports parisiens et la carte Navigo', 'Déplacez-vous comme un Parisien', 'culture_codes_sociaux', 'debutant', 0, true, 4.4, 95, '["Utiliser métro et RER","Acheter un pass Navigo","Planifier ses trajets"]'::jsonb, '[]'::jsonb),
('Préparation DELF B2', 'preparation-delf-b2', 'Préparez-vous efficacement pour réussir le DELF B2', 'Obtenez votre certification', 'preparation_academique', 'avance', 0, true, 4.9, 180, '["Maîtriser le format","S''entraîner aux épreuves","Gérer le temps"]'::jsonb, '["Niveau B1 minimum"]'::jsonb),
('Culture Française', 'culture-francaise', 'Plongez dans la richesse culturelle et historique française', 'Comprenez la France', 'culture_codes_sociaux', 'intermediaire', 0, true, 4.7, 130, '["Comprendre l''histoire","Connaître les valeurs","Apprécier la culture"]'::jsonb, '[]'::jsonb)
ON CONFLICT (slug) DO NOTHING;

-- Témoignages
INSERT INTO testimonials (student_name, country_origin, content, rating, is_featured) VALUES
('Maria Silva', 'Brésil', 'FrancePrep Academy m''a vraiment aidée ! Grâce aux cours, j''ai pu faire ma demande CAF sans problème et trouver un logement rapidement.', 5, true),
('Ahmed Benali', 'Maroc', 'Les cours de français sont excellents. J''ai obtenu mon DELF B2 du premier coup grâce à cette plateforme !', 5, true),
('Priya Sharma', 'Inde', 'L''assistant IA répond toujours à mes questions rapidement. C''est comme avoir un conseiller disponible 24/7.', 5, true)
ON CONFLICT DO NOTHING;

