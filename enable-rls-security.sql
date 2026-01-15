-- =====================================================
-- ACTIVATION ROW LEVEL SECURITY (RLS)
-- Exécutez ce script APRÈS avoir créé les tables
-- =====================================================

-- Activer RLS sur toutes les tables publiques
ALTER TABLE IF EXISTS courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS resumes ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS testimonials ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- POLITIQUES RLS
-- =====================================================

-- Supprimer les anciennes politiques si elles existent (pour éviter les erreurs)
DROP POLICY IF EXISTS "Courses are viewable by everyone" ON courses;
DROP POLICY IF EXISTS "Lessons are viewable by everyone for published courses" ON lessons;
DROP POLICY IF EXISTS "Forum posts are viewable by everyone" ON forum_posts;
DROP POLICY IF EXISTS "Anyone can create forum posts" ON forum_posts;
DROP POLICY IF EXISTS "Users can update their own forum posts" ON forum_posts;
DROP POLICY IF EXISTS "Forum replies are viewable by everyone" ON forum_replies;
DROP POLICY IF EXISTS "Anyone can create forum replies" ON forum_replies;
DROP POLICY IF EXISTS "Users can view their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can view their own enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can create their own enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can update their own enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can view their own progress" ON progress;
DROP POLICY IF EXISTS "Users can create their own progress" ON progress;
DROP POLICY IF EXISTS "Users can view their own assessments" ON assessments;
DROP POLICY IF EXISTS "Users can create their own assessments" ON assessments;
DROP POLICY IF EXISTS "Users can update their own assessments" ON assessments;
DROP POLICY IF EXISTS "Users can view their own certificates" ON certificates;
DROP POLICY IF EXISTS "Users can create their own certificates" ON certificates;

-- Politiques pour les cours (lecture publique des cours publiés)
CREATE POLICY "Courses are viewable by everyone"
ON courses FOR SELECT
TO public
USING (is_published = true);

-- Politiques pour les leçons (lecture publique si cours publié)
CREATE POLICY "Lessons are viewable by everyone for published courses"
ON lessons FOR SELECT
TO public
USING (
  EXISTS (
    SELECT 1 FROM courses 
    WHERE courses.id = lessons.course_id 
    AND courses.is_published = true
  )
);

-- Politiques pour les posts forum (lecture/écriture publique)
CREATE POLICY "Forum posts are viewable by everyone"
ON forum_posts FOR SELECT
TO public
USING (true);

CREATE POLICY "Anyone can create forum posts"
ON forum_posts FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Users can update their own forum posts"
ON forum_posts FOR UPDATE
TO public
USING (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = forum_posts.author_email
  )
);

-- Politiques pour les réponses forum
CREATE POLICY "Forum replies are viewable by everyone"
ON forum_replies FOR SELECT
TO public
USING (true);

CREATE POLICY "Anyone can create forum replies"
ON forum_replies FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Users can update their own forum replies"
ON forum_replies FOR UPDATE
TO public
USING (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = forum_replies.author_email
  )
);

-- Politiques pour les profils utilisateurs
CREATE POLICY "Users can view their own profile"
ON user_profiles FOR SELECT
TO public
USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own profile"
ON user_profiles FOR UPDATE
TO public
USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own profile"
ON user_profiles FOR INSERT
TO public
WITH CHECK (auth.uid()::text = user_id::text);

-- Politiques pour les inscriptions
CREATE POLICY "Users can view their own enrollments"
ON enrollments FOR SELECT
TO public
USING (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = enrollments.user_email
  )
);

CREATE POLICY "Users can create their own enrollments"
ON enrollments FOR INSERT
TO public
WITH CHECK (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = enrollments.user_email
  )
);

CREATE POLICY "Users can update their own enrollments"
ON enrollments FOR UPDATE
TO public
USING (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = enrollments.user_email
  )
);

-- Politiques pour les progressions
CREATE POLICY "Users can view their own progress"
ON progress FOR SELECT
TO public
USING (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = progress.user_email
  )
);

CREATE POLICY "Users can create their own progress"
ON progress FOR INSERT
TO public
WITH CHECK (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = progress.user_email
  )
);

-- Politiques pour les témoignages (lecture publique)
CREATE POLICY "Testimonials are viewable by everyone"
ON testimonials FOR SELECT
TO public
USING (true);

-- Politiques pour les profils enseignants (lecture publique)
CREATE POLICY "Teacher profiles are viewable by everyone"
ON teacher_profiles FOR SELECT
TO public
USING (true);

-- Politiques pour les évaluations (assessments)
CREATE POLICY "Users can view their own assessments"
ON assessments FOR SELECT
TO public
USING (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = assessments.user_email
  )
);

CREATE POLICY "Users can create their own assessments"
ON assessments FOR INSERT
TO public
WITH CHECK (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = assessments.user_email
  )
);

CREATE POLICY "Users can update their own assessments"
ON assessments FOR UPDATE
TO public
USING (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = assessments.user_email
  )
);

-- Politiques pour les certificats (certificates)
CREATE POLICY "Users can view their own certificates"
ON certificates FOR SELECT
TO public
USING (
  auth.uid()::text = (
    SELECT user_id::text FROM user_profiles 
    WHERE user_email = certificates.user_email
  )
);

        CREATE POLICY "Users can create their own certificates"
        ON certificates FOR INSERT
        TO public
        WITH CHECK (
          auth.uid()::text = (
            SELECT user_id::text FROM user_profiles 
            WHERE user_email = certificates.user_email
          )
        );

        -- Politiques pour contact_requests (si la table existe)
        -- Note: Ces politiques seront créées automatiquement par create_contact_requests_table.sql
        -- On les ajoute ici pour référence
        ALTER TABLE IF EXISTS contact_requests ENABLE ROW LEVEL SECURITY;

        DROP POLICY IF EXISTS "Users can view their own contact requests" ON contact_requests;
        DROP POLICY IF EXISTS "Users can insert their own contact requests" ON contact_requests;
        DROP POLICY IF EXISTS "Admins can view all contact requests" ON contact_requests;
        DROP POLICY IF EXISTS "Admins can update contact requests" ON contact_requests;

        CREATE POLICY "Users can view their own contact requests"
        ON contact_requests FOR SELECT
        TO public
        USING (
          auth.uid()::text = (
            SELECT user_id::text FROM user_profiles 
            WHERE user_email = contact_requests.email
          )
        );

        CREATE POLICY "Users can insert their own contact requests"
        ON contact_requests FOR INSERT
        TO public
        WITH CHECK (
          auth.uid()::text = (
            SELECT user_id::text FROM user_profiles 
            WHERE user_email = contact_requests.email
          )
        );

        CREATE POLICY "Admins can view all contact requests"
        ON contact_requests FOR SELECT
        TO public
        USING (
          EXISTS (
            SELECT 1 FROM auth.users 
            WHERE id = auth.uid() 
            AND email = 'contact@franceprepacademy.fr'
          )
          OR
          EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE user_id = auth.uid() 
            AND user_email LIKE '%@franceprepacademy.fr'
          )
        );

        CREATE POLICY "Admins can update contact requests"
        ON contact_requests FOR UPDATE
        TO public
        USING (
          EXISTS (
            SELECT 1 FROM auth.users 
            WHERE id = auth.uid() 
            AND email = 'contact@franceprepacademy.fr'
          )
          OR
          EXISTS (
            SELECT 1 FROM user_profiles 
            WHERE user_id = auth.uid() 
            AND user_email LIKE '%@franceprepacademy.fr'
          )
        );

