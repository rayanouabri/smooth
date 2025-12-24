# 📥 Guide d'Import des Données CSV depuis Base44

## 📋 Prérequis

1. **Installer les dépendances** :
   ```bash
   npm install csv-parser --save-dev
   ```

2. **Configurer les variables d'environnement** :
   Créez un fichier `.env.local` avec :
   ```
   VITE_SUPABASE_URL=https://votre-projet.supabase.co
   VITE_SUPABASE_ANON_KEY=votre-anon-key
   ```

## 🚀 Import des Données

### Option 1 : Script Node.js (Recommandé)

1. **Copiez vos fichiers CSV** dans le dossier `Downloads` :
   - `Course_export.csv`
   - `Lesson_export.csv`
   - `Testimonial_export.csv`
   - `ForumPost_export.csv`
   - `ForumReply_export.csv`
   - `Enrollment_export.csv`
   - `TeacherProfile_export.csv`

2. **Exécutez le script d'import** :
   ```bash
   npm run import:csv
   ```

   Ou directement :
   ```bash
   node import-csv-to-supabase.js
   ```

### Option 2 : Import via l'interface Supabase

1. Allez dans **Supabase Dashboard** → **Table Editor**
2. Sélectionnez la table (ex: `courses`)
3. Cliquez sur **Insert** → **Import data from CSV**
4. Uploadez votre fichier CSV
5. Mappez les colonnes CSV vers les colonnes de la table
6. Cliquez sur **Import**

## 📝 Notes Importantes

### Colonnes à mapper

**Courses** :
- `id` → `id` (UUID)
- `title` → `title`
- `slug` → `slug`
- `description` → `description`
- `objectives` → `objectives` (JSONB)
- `prerequisites` → `prerequisites` (JSONB)
- `is_published` → `is_published` (boolean)
- etc.

**Lessons** :
- `course_id` → `course_id` (UUID, référence vers courses.id)
- `order` ou `lesson_number` → `order`
- `content_text` → `content`
- `content_url` → `video_url`
- etc.

**Enrollments** :
- `user_email` → `user_email`
- `course_id` → `course_id` (UUID)
- `completed_lessons` → `completed_lessons` (JSONB array)
- etc.

### Vérifications après import

1. **Vérifiez le nombre de lignes** :
   ```sql
   SELECT COUNT(*) FROM courses;
   SELECT COUNT(*) FROM lessons;
   SELECT COUNT(*) FROM enrollments;
   ```

2. **Vérifiez les relations** :
   ```sql
   -- Vérifier que tous les lessons ont un course_id valide
   SELECT l.* FROM lessons l 
   LEFT JOIN courses c ON l.course_id = c.id 
   WHERE c.id IS NULL;
   
   -- Vérifier que tous les enrollments ont un course_id valide
   SELECT e.* FROM enrollments e
   LEFT JOIN courses c ON e.course_id = c.id
   WHERE c.id IS NULL;
   ```

3. **Vérifiez les cours publiés** :
   ```sql
   SELECT COUNT(*) FROM courses WHERE is_published = true;
   ```

## ⚠️ Erreurs Communes

### Erreur : "relation does not exist"
**Solution** : Exécutez d'abord `supabase-schema.sql` pour créer les tables.

### Erreur : "duplicate key value violates unique constraint"
**Solution** : C'est normal, le script utilise `upsert` donc les données existantes seront mises à jour.

### Erreur : "invalid input syntax for type uuid"
**Solution** : Vérifiez que les colonnes `id` dans vos CSV sont des UUID valides.

## ✅ Checklist

- [ ] Tables créées (supabase-schema.sql exécuté)
- [ ] Fichiers CSV copiés dans Downloads/
- [ ] Variables d'environnement configurées
- [ ] Script d'import exécuté
- [ ] Nombre de lignes vérifié dans Supabase
- [ ] Relations vérifiées (lessons → courses, enrollments → courses)
- [ ] Cours publiés visibles sur le site

Une fois l'import terminé, vos cours réels devraient apparaître sur votre site ! 🎉

