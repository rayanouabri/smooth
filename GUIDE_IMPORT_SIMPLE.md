# 🚀 Guide Simple d'Import des Données Base44

## 📋 Étape 1 : Créer les Tables (si pas déjà fait)

1. Allez dans **Supabase Dashboard** → **SQL Editor**
2. Ouvrez le fichier `supabase-schema.sql`
3. Copiez-collez tout le contenu
4. Cliquez sur **Run**

✅ Les tables sont maintenant créées (sans données de démo).

## 📋 Étape 2 : Configurer les Variables d'Environnement

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez vos clés Supabase :

```
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-anon-key
```

**Où trouver ces clés ?**
- Supabase Dashboard → **Settings** → **API**
- Copiez **Project URL** → `VITE_SUPABASE_URL`
- Copiez **anon public** key → `VITE_SUPABASE_ANON_KEY`

## 📋 Étape 3 : Importer les Données CSV

### Option A : Via le Script (Recommandé)

1. **Placez vos fichiers CSV** dans le dossier `Downloads` de votre ordinateur :
   - `Course_export.csv`
   - `Lesson_export.csv`
   - `Testimonial_export.csv`
   - `ForumPost_export.csv`
   - `ForumReply_export.csv`
   - `Enrollment_export.csv`
   - `TeacherProfile_export.csv`

2. **Ouvrez un terminal** dans le dossier du projet

3. **Exécutez le script** :
   ```bash
   npm run import:csv
   ```

4. Le script va :
   - Chercher les fichiers CSV dans Downloads/
   - Les lire et importer dans Supabase
   - Afficher le progrès et les erreurs éventuelles

### Option B : Via l'Interface Supabase

Pour chaque table :

1. Allez dans **Supabase Dashboard** → **Table Editor**
2. Sélectionnez la table (ex: `courses`)
3. Cliquez sur **Insert** → **Import data from CSV**
4. Uploadez votre fichier CSV
5. Mappez les colonnes
6. Cliquez sur **Import**

## ✅ Vérification

Après l'import, vérifiez que les données sont bien là :

1. **Dans Supabase** :
   - Allez dans **Table Editor** → `courses`
   - Vous devriez voir tous vos cours

2. **Sur votre site** :
   - Allez sur `/Courses`
   - Les cours devraient s'afficher
   - Allez sur `/Dashboard` (en étant connecté)
   - Vos cours inscrits devraient apparaître

## 🔧 Le Dashboard Utilisateur

Le Dashboard affiche :
- ✅ Les cours auxquels l'utilisateur est inscrit (enrollments)
- ✅ Le progrès dans chaque cours
- ✅ Les cours en cours vs terminés
- ✅ Les statistiques (temps passé, nombre de cours, etc.)

Tout est automatique une fois que les données sont importées !

## ⚠️ Problèmes Courants

### "Course CSV not found"
**Solution** : Vérifiez que les fichiers CSV sont bien dans `C:\Users\VotreNom\Downloads\`

### "Error: relation does not exist"
**Solution** : Exécutez d'abord `supabase-schema.sql` pour créer les tables

### Les cours ne s'affichent pas
**Solution** : Vérifiez que `is_published = true` dans la table `courses`

### Le Dashboard est vide
**Solution** : Vérifiez que vous êtes connecté et que vous avez des enrollments dans la table `enrollments`

## 🎉 C'est tout !

Une fois l'import terminé, votre site devrait fonctionner exactement comme avant avec Base44, mais maintenant avec Supabase ! 🚀

