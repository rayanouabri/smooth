# Instructions pour créer le repository GitHub et pousser le code

## Étapes à suivre :

### 1. Créer un nouveau repository sur GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite, puis **"New repository"**
3. Configurez le nouveau repository :
   - **Repository name** : `franceprep-academy` (ou le nom que vous préférez)
   - **Description** : "Plateforme d'apprentissage pour étudiants internationaux en France - Version Supabase"
   - **Visibilité** : Public ou Private (selon vos préférences)
   - ⚠️ **NE COCHEZ PAS** "Add a README file", "Add .gitignore", ou "Choose a license" (car vous avez déjà ces fichiers)

4. Cliquez sur **"Create repository"**

### 2. Connecter le repository local au nouveau repository GitHub

Après avoir créé le repository, GitHub vous montrera les instructions. Exécutez ces commandes dans le terminal (dans le dossier `franceprep-academy-supabase`) :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/franceprep-academy.git
git branch -M main
git push -u origin main
```

Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub.

### 3. Vérification

Une fois poussé, vous devriez voir tous vos fichiers sur GitHub dans le nouveau repository.

## Ensuite, pour déployer sur Vercel :

1. Allez sur [Vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Cliquez sur **"New Project"**
4. Sélectionnez le nouveau repository `franceprep-academy`
5. Vercel détectera automatiquement que c'est un projet Vite
6. **Ajoutez les variables d'environnement** :
   - `VITE_SUPABASE_URL` = votre URL Supabase
   - `VITE_SUPABASE_ANON_KEY` = votre clé anonyme Supabase
7. Cliquez sur **"Deploy"**

Voilà ! Votre application sera déployée sur Vercel avec Supabase ! 🚀

