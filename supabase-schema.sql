-- =====================================================
-- SCHÉMA COMPLET POUR FRANCEPREP ACADEMY
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
  order INTEGER DEFAULT 0,
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
-- INDEXES pour améliorer les performances
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_courses_is_published ON courses(is_published);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_lessons_course_id ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_order ON lessons(course_id, order);

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

-- Trigger qui s'exécute après l'insertion d'un nouvel utilisateur
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Fonction pour mettre à jour updated_date automatiquement
CREATE OR REPLACE FUNCTION update_updated_date_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_date = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour updated_date
DROP TRIGGER IF EXISTS update_courses_updated_date ON courses;
CREATE TRIGGER update_courses_updated_date BEFORE UPDATE ON courses FOR EACH ROW EXECUTE FUNCTION update_updated_date_column();

DROP TRIGGER IF EXISTS update_user_profiles_updated_date ON user_profiles;
CREATE TRIGGER update_user_profiles_updated_date BEFORE UPDATE ON user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_date_column();

-- =====================================================
-- DONNÉES DE DÉMO (Optionnel - pour tester)
-- =====================================================

-- Insertion de quelques cours de démo
INSERT INTO courses (title, slug, description, short_description, category, level, price, is_published, rating, reviews_count, enrolled_count)
VALUES 
  (
    'Guide Complet CAF - Allocation Familiales',
    'guide-complet-caf',
    'Apprenez comment faire votre demande CAF, comprendre les allocations, et optimiser vos droits sociaux en France.',
    'Guide pas à pas pour votre demande CAF',
    'integration_administrative',
    'debutant',
    0,
    true,
    4.8,
    150,
    1200
  ),
  (
    'Français pour Débutants - Niveau A1',
    'francais-debutant-a1',
    'Cours complet de français pour débutants. Apprenez les bases de la langue française avec des exercices pratiques.',
    'Commencez votre apprentissage du français',
    'preparation_academique',
    'debutant',
    0,
    true,
    4.9,
    200,
    2500
  ),
  (
    'Recherche de Logement en France',
    'recherche-logement-france',
    'Tout ce que vous devez savoir pour trouver un logement en France : garant, dossier locatif, visites, contrats.',
    'Trouvez votre logement idéal en France',
    'integration_administrative',
    'intermediaire',
    29,
    true,
    4.7,
    180,
    980
  ),
  (
    'CV à la Française et Entretien d''embauche',
    'cv-francais-entretien',
    'Apprenez à rédiger un CV français, rédiger une lettre de motivation, et réussir vos entretiens d''embauche.',
    'Préparez votre insertion professionnelle',
    'insertion_professionnelle',
    'intermediaire',
    39,
    true,
    4.8,
    220,
    1500
  ),
  (
    'Culture et Codes Sociaux Français',
    'culture-codes-sociaux',
    'Comprenez les codes sociaux français, les règles de politesse, et intégrez-vous facilement dans la société française.',
    'Maîtrisez les codes sociaux français',
    'culture_codes_sociaux',
    'debutant',
    0,
    true,
    4.6,
    140,
    1100
  ),
  (
    'Sécurité Sociale et Mutuelle en France',
    'securite-sociale-mutuelle',
    'Comprenez le système de santé français, comment vous inscrire à la sécurité sociale et choisir une mutuelle.',
    'Protégez votre santé en France',
    'integration_administrative',
    'debutant',
    0,
    true,
    4.7,
    160,
    1300
  )
ON CONFLICT (slug) DO NOTHING;

-- Insertion de quelques témoignages
INSERT INTO testimonials (student_name, country_origin, content, rating, is_featured)
VALUES 
  (
    'Maria Silva',
    'Brésil',
    'FrancePrep Academy m''a vraiment aidée à comprendre le système français. Grâce à leurs cours, j''ai pu faire ma demande CAF sans problème !',
    5,
    true
  ),
  (
    'Ahmed Benali',
    'Maroc',
    'Les cours de français sont excellents et très bien structurés. Je recommande vivement !',
    5,
    true
  ),
  (
    'Priya Sharma',
    'Inde',
    'L''assistant IA Sophie répond toujours à mes questions rapidement. C''est comme avoir un conseiller disponible 24/7.',
    5,
    true
  )
ON CONFLICT DO NOTHING;

-- =====================================================
-- ROW LEVEL SECURITY (RLS) - Optionnel mais recommandé
-- =====================================================

-- Vous pouvez activer RLS si vous voulez sécuriser les données
-- Décommentez les lignes ci-dessous si vous voulez activer RLS

/*
-- Activer RLS sur toutes les tables
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;

-- Politiques pour courses (lecture publique)
CREATE POLICY "Courses are viewable by everyone" ON courses FOR SELECT USING (true);

-- Politiques pour user_profiles
CREATE POLICY "Users can read own profile" ON user_profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Politiques pour enrollments
CREATE POLICY "Users can read own enrollments" ON enrollments FOR SELECT USING (auth.uid()::text = (SELECT user_id::text FROM user_profiles WHERE user_email = enrollments.user_email));
CREATE POLICY "Users can create own enrollments" ON enrollments FOR INSERT WITH CHECK (auth.uid()::text = (SELECT user_id::text FROM user_profiles WHERE user_email = enrollments.user_email));
CREATE POLICY "Users can update own enrollments" ON enrollments FOR UPDATE USING (auth.uid()::text = (SELECT user_id::text FROM user_profiles WHERE user_email = enrollments.user_email));
*/

-- =====================================================
-- FIN DU SCHÉMA
-- =====================================================

