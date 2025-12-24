# 📋 Guide d'Exécution du SQL - FrancePrep Academy

## ⚠️ Important : Ne copiez PAS de code JavaScript dans l'éditeur SQL

L'éditeur SQL de Supabase attend **uniquement du SQL**, pas du JavaScript !

Si vous voyez des erreurs comme :
```
ERROR: 42601: syntax error at or near "{" LINE 1: import { supabase } from './supabaseClient';
```

C'est que vous avez copié du code JavaScript au lieu de SQL.

## ✅ Étapes Correctes

### Étape 1 : Créer les Tables (si pas déjà fait)

1. Allez dans **Supabase Dashboard** → **SQL Editor**
2. Exécutez d'abord `supabase-schema-with-courses.sql` (celui qui crée les tables)
3. Ou vérifiez que vos tables existent déjà

### Étape 2 : Exécuter le Script de Données

1. **Nouveau Query** dans SQL Editor
2. Copiez-collez le contenu de `seed-complete-data.sql`
3. Cliquez sur **Run** (ou CTRL+Enter)
4. Attendez quelques secondes/minutes selon la taille

### Étape 3 : Activer Row Level Security (RLS)

Le Security Advisor vous signale que RLS n'est pas activé. Voici comment l'activer :

```sql
-- Activer RLS sur toutes les tables publiques
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
```

### Étape 4 : Créer les Politiques RLS

Pour que les utilisateurs puissent lire les cours et écrire dans le forum :

```sql
-- Politiques pour les cours (lecture publique)
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
USING (auth.uid()::text = (SELECT user_id::text FROM user_profiles WHERE user_email = forum_posts.author_email));

-- Politiques pour les réponses forum
CREATE POLICY "Forum replies are viewable by everyone"
ON forum_replies FOR SELECT
TO public
USING (true);

CREATE POLICY "Anyone can create forum replies"
ON forum_replies FOR INSERT
TO public
WITH CHECK (true);

-- Politiques pour les profils utilisateurs
CREATE POLICY "Users can view their own profile"
ON user_profiles FOR SELECT
TO public
USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own profile"
ON user_profiles FOR UPDATE
TO public
USING (auth.uid()::text = user_id::text);

-- Politiques pour les inscriptions
CREATE POLICY "Users can view their own enrollments"
ON enrollments FOR SELECT
TO public
USING (
  auth.uid()::text = (SELECT user_id::text FROM user_profiles WHERE user_email = enrollments.user_email)
);

CREATE POLICY "Users can create their own enrollments"
ON enrollments FOR INSERT
TO public
WITH CHECK (
  auth.uid()::text = (SELECT user_id::text FROM user_profiles WHERE user_email = enrollments.user_email)
);
```

## 🔍 Vérification

Après exécution, vérifiez que :

1. **Les cours sont là** :
```sql
SELECT COUNT(*) FROM courses WHERE is_published = true;
-- Devrait retourner environ 80
```

2. **Les leçons sont là** :
```sql
SELECT COUNT(*) FROM lessons;
-- Devrait retourner environ 321
```

3. **Les posts forum sont là** :
```sql
SELECT COUNT(*) FROM forum_posts;
-- Devrait retourner 25
```

4. **Les commentaires sont là** :
```sql
SELECT COUNT(*) FROM forum_replies;
-- Devrait retourner environ 74
```

## 🎉 Résultat Attendu

- ✅ 80 cours complets répartis en 5 catégories
- ✅ 321 leçons détaillées (3-5 par cours)
- ✅ 25 posts de forum avec 74 commentaires
- ✅ RLS activé pour la sécurité
- ✅ Site fonctionnel avec contenu complet

## 📝 Notes

- Le script utilise `ON CONFLICT DO NOTHING` pour éviter les doublons
- Vous pouvez l'exécuter plusieurs fois sans problème
- Les IDs sont générés de manière déterministe (toujours les mêmes)

