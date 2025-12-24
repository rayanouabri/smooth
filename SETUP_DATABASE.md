# 🗄️ Configuration de la Base de Données Supabase

## 📋 Instructions rapides

### Étape 1 : Exécuter le schéma SQL

1. **Allez dans Supabase Dashboard** → Votre projet → **SQL Editor**
2. **Copiez-collez le contenu de `supabase-schema.sql`**
3. **Cliquez sur "Run"** pour exécuter

Cela créera :
- ✅ Toutes les tables nécessaires
- ✅ Les index pour les performances
- ✅ Les triggers pour la création automatique de profils
- ✅ Des données de démo (6 cours + 3 témoignages)

### Étape 2 : Vérifier que les tables sont créées

Allez dans **Table Editor** et vérifiez que vous voyez :
- `courses`
- `lessons`
- `user_profiles`
- `enrollments`
- `progress`
- `assessments`
- `certificates`
- `resumes`
- `forum_posts`
- `forum_replies`
- `teacher_profiles`
- `testimonials`

### Étape 3 : Vérifier les données de démo

Dans **Table Editor** → `courses`, vous devriez voir **6 cours** :
1. Guide Complet CAF
2. Français pour Débutants A1
3. Recherche de Logement en France
4. CV à la Française
5. Culture et Codes Sociaux
6. Sécurité Sociale et Mutuelle

## 🔧 Si vous voulez désactiver l'authentification (Mode Guest)

Pour tester sans authentification, le code a été modifié pour :
- ✅ Gérer gracieusement l'absence d'utilisateur
- ✅ Rediriger vers Home si l'utilisateur n'est pas connecté sur Dashboard
- ✅ Afficher les cours même sans authentification

**Note** : Les données de démo sont publiques, donc vous verrez les cours même sans vous connecter.

## 🚨 Dépannage

### Problème : Les cours ne s'affichent pas

**Solution** :
1. Vérifiez que `is_published = true` dans la table `courses`
2. Vérifiez que les variables d'environnement Vercel sont correctes :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Problème : Dashboard charge indéfiniment

**Solution** : Le code a été corrigé pour rediriger automatiquement vers `/Home` si l'utilisateur n'est pas connecté.

### Problème : Erreur "relation does not exist"

**Solution** : Exécutez le fichier `supabase-schema.sql` dans l'éditeur SQL de Supabase.

## ✅ Checklist

- [ ] Fichier `supabase-schema.sql` exécuté dans Supabase
- [ ] Tables créées et visibles dans Table Editor
- [ ] 6 cours de démo visibles dans la table `courses`
- [ ] Variables d'environnement configurées dans Vercel
- [ ] Site Vercel redéployé après avoir exécuté le SQL

Une fois cela fait, vous devriez voir les cours sur votre site ! 🎉

