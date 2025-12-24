# Guide de Migration Base44 → Supabase

Ce guide explique comment finaliser la migration de Base44 vers Supabase pour déployer l'application sur Vercel.

## 🎯 Résumé de la Migration

L'application a été migrée de Base44 vers Supabase. Tous les appels à Base44 ont été remplacés par des équivalents Supabase.

## ✅ Ce qui a été fait

1. **Configuration Supabase**
   - `src/api/supabaseClient.js` - Client Supabase configuré
   - `src/api/auth.js` - Service d'authentification Supabase
   - `src/api/database.js` - Service de base de données avec méthodes filter, create, update, delete
   - `src/api/integrations.js` - Services d'intégration (LLM, Email, Storage, etc.)
   - `src/api/functions.js` - Services pour Edge Functions (Stripe, etc.)

2. **Mise à jour des dépendances**
   - Retiré: `@base44/sdk`
   - Ajouté: `@supabase/supabase-js` et `@tanstack/react-query`

3. **Mise à jour de tous les fichiers**
   - Tous les imports `base44` ont été remplacés
   - Toutes les méthodes `base44.auth.*` → `auth.*`
   - Toutes les méthodes `base44.entities.*` → Services de database.js
   - Toutes les méthodes `base44.integrations.*` → Services de integrations.js

4. **Configuration Vercel**
   - `vercel.json` créé pour le déploiement

## 📋 Prochaines Étapes

### 1. Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Notez votre URL et votre clé anonyme (anon key)

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` (et configurez-les dans Vercel) :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-anon-key
```

### 3. Créer les tables dans Supabase

Exécutez ces SQL dans l'éditeur SQL de Supabase :

```sql
-- Table: courses
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  description TEXT,
  short_description TEXT,
  category TEXT,
  level TEXT,
  language TEXT,
  duration_hours INTEGER,
  price DECIMAL,
  thumbnail_url TEXT,
  rating DECIMAL,
  reviews_count INTEGER,
  enrolled_count INTEGER,
  objectives JSONB,
  prerequisites JSONB,
  is_published BOOLEAN DEFAULT false,
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: lessons
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id),
  title TEXT NOT NULL,
  content TEXT,
  order INTEGER,
  duration_minutes INTEGER,
  video_url TEXT,
  resources JSONB,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: enrollments
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  course_id UUID REFERENCES courses(id),
  progress_percentage DECIMAL DEFAULT 0,
  completed_lessons JSONB DEFAULT '[]',
  last_accessed TIMESTAMPTZ DEFAULT NOW(),
  time_spent_minutes INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  certificate_issued BOOLEAN DEFAULT false,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: user_profiles
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  user_email TEXT NOT NULL,
  full_name TEXT,
  photo_url TEXT,
  country_origin TEXT,
  city_destination TEXT,
  arrival_date DATE,
  study_field TEXT,
  french_level TEXT,
  goals JSONB DEFAULT '[]',
  bio TEXT,
  phone TEXT,
  subscription_plan TEXT DEFAULT 'gratuit',
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: progress
CREATE TABLE progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  course_id UUID REFERENCES courses(id),
  lesson_id UUID REFERENCES lessons(id),
  completed BOOLEAN DEFAULT false,
  score DECIMAL,
  time_spent_minutes INTEGER,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: assessments
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  assessment_type TEXT,
  score DECIMAL,
  results JSONB,
  completed_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: certificates
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  course_id UUID REFERENCES courses(id),
  certificate_url TEXT,
  issued_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: resumes
CREATE TABLE resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  resume_data JSONB,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: forum_posts
CREATE TABLE forum_posts (
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
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: forum_replies
CREATE TABLE forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES forum_posts(id),
  content TEXT NOT NULL,
  author_email TEXT NOT NULL,
  author_name TEXT,
  is_solution BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: teacher_profiles
CREATE TABLE teacher_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  name TEXT,
  specialty TEXT,
  bio TEXT,
  rating DECIMAL,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Table: testimonials
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  student_photo TEXT,
  country_origin TEXT,
  content TEXT NOT NULL,
  rating INTEGER,
  is_featured BOOLEAN DEFAULT false,
  created_date TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes pour améliorer les performances
CREATE INDEX idx_enrollments_user_email ON enrollments(user_email);
CREATE INDEX idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX idx_user_profiles_user_email ON user_profiles(user_email);
CREATE INDEX idx_lessons_course_id ON lessons(course_id);
CREATE INDEX idx_forum_posts_category ON forum_posts(category);
CREATE INDEX idx_forum_replies_post_id ON forum_replies(post_id);

-- Row Level Security (RLS) - Activez selon vos besoins
-- ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
-- etc.
```

### 4. Configurer l'authentification Supabase

1. Allez dans Authentication > Providers dans Supabase
2. Configurez les providers que vous souhaitez (Email, Google, etc.)
3. Configurez les URLs de redirection

### 5. Configurer les Edge Functions (optionnel)

Si vous utilisez `InvokeLLM` ou `SendEmail`, créez des Edge Functions :

```bash
supabase functions deploy invoke-llm
supabase functions deploy send-email
```

Ou configurez directement une clé API OpenAI dans `.env.local` :

```env
VITE_OPENAI_API_KEY=sk-...
```

### 6. Configurer Supabase Storage (optionnel)

Si vous utilisez le stockage de fichiers :

1. Allez dans Storage dans Supabase
2. Créez des buckets : `public` et `private`
3. Configurez les politiques d'accès

### 7. Déployer sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Ajoutez les variables d'environnement dans Vercel :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - (optionnel) `VITE_OPENAI_API_KEY`
3. Déployez !

## 🔧 Ajustements nécessaires

### Authentication

L'authentification Supabase fonctionne différemment de Base44. Vous devrez peut-être créer des pages de connexion/inscription. Vous pouvez utiliser :
- Les composants UI d'authentification de Supabase
- Ou créer vos propres pages dans `src/pages/Login.jsx` et `src/pages/Signup.jsx`

### Row Level Security (RLS)

Par défaut, les tables sont accessibles à tous. Activez RLS et créez des politiques selon vos besoins de sécurité.

### Stripe Integration

La fonction `createCheckout` nécessite une configuration Stripe. Vous devrez :
1. Créer une Edge Function Supabase pour gérer Stripe
2. Ou utiliser directement l'API Stripe depuis le frontend

## 📝 Notes importantes

- Les noms de colonnes dans Supabase doivent correspondre exactement à ceux utilisés dans le code
- Certaines méthodes comme `.list()` ont été remplacées par `.all()` dans notre implémentation
- Les filtres fonctionnent de manière similaire, mais avec la syntaxe Supabase sous le capot

## 🐛 Dépannage

Si vous rencontrez des erreurs :
1. Vérifiez que les variables d'environnement sont correctement configurées
2. Vérifiez que les tables existent dans Supabase
3. Vérifiez les permissions RLS si activées
4. Consultez la console du navigateur pour les erreurs détaillées

