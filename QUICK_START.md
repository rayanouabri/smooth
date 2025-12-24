# 🚀 Démarrage Rapide

## Étape 1 : Créer le repository GitHub

1. Allez sur https://github.com/new
2. Nom du repository : `franceprep-academy` (ou un autre nom de votre choix)
3. Description : "Plateforme d'apprentissage pour étudiants internationaux en France"
4. Visibilité : Public ou Private
5. ⚠️ **IMPORTANT** : Ne cochez AUCUNE option (pas de README, pas de .gitignore, pas de license)
6. Cliquez sur "Create repository"

## Étape 2 : Connecter et pousser le code

Après avoir créé le repository, GitHub vous montrera les commandes. Exécutez-les dans ce dossier :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/franceprep-academy.git
git push -u origin main
```

(Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub)

## Étape 3 : Déployer sur Vercel

1. Allez sur https://vercel.com
2. Connectez-vous avec GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez le repository `franceprep-academy`
5. **Configurez les variables d'environnement** :
   - `VITE_SUPABASE_URL` = votre URL Supabase
   - `VITE_SUPABASE_ANON_KEY` = votre clé anonyme Supabase
6. Cliquez sur "Deploy"

C'est tout ! 🎉

## ⚙️ Configuration Supabase nécessaire

Avant de déployer, n'oubliez pas de :
1. Créer un projet Supabase sur https://supabase.com
2. Créer les tables (voir `MIGRATION_GUIDE.md` pour le SQL)
3. Configurer l'authentification

Consultez `MIGRATION_GUIDE.md` pour tous les détails.

