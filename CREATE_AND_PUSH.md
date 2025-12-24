# 🚀 Instructions SIMPLES - Étape par Étape

## ⚠️ IMPORTANT : Faites ces étapes dans l'ordre !

### ÉTAPE 1 : Créer le repository sur GitHub (2 minutes)

1. **Ouvrez votre navigateur** et allez sur : **https://github.com/new**

2. **Remplissez le formulaire** :
   - **Repository name** : `franceprep-academy`
   - **Description** : "Plateforme d'apprentissage pour étudiants internationaux en France"
   - **Public** ou **Private** (choisissez ce que vous voulez)
   
3. **⚠️ TRÈS IMPORTANT** : 
   - ❌ **NE COCHEZ PAS** "Add a README file"
   - ❌ **NE COCHEZ PAS** "Add .gitignore"
   - ❌ **NE COCHEZ PAS** "Choose a license"
   
4. **Cliquez sur le bouton vert "Create repository"**

5. **Copiez l'URL du repository** qui s'affiche (ex: `https://github.com/votre-username/franceprep-academy.git`)

---

### ÉTAPE 2 : Connecter et pousser le code (1 minute)

**Ouvrez PowerShell dans le dossier du projet** et exécutez ces commandes (remplacez `VOTRE_USERNAME` par votre vrai username GitHub) :

```powershell
cd C:\Users\rayan\OneDrive\Documents\franceprep-academy-supabase

git remote add origin https://github.com/VOTRE_USERNAME/franceprep-academy.git

git push -u origin main
```

**Exemple concret** :
Si votre username GitHub est `rayan123`, les commandes sont :
```powershell
git remote add origin https://github.com/rayan123/franceprep-academy.git
git push -u origin main
```

---

### Si Git vous demande de vous connecter :

**Option A** (la plus simple) : Utilisez GitHub Desktop ou GitHub CLI

**Option B** : Créez un token d'accès :
1. Allez sur https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Nom : `franceprep-academy`
4. Cochez la case `repo`
5. Cliquez "Generate token"
6. **Copiez le token** (vous ne le reverrez plus !)
7. Quand Git demande le mot de passe, collez le token

---

### ✅ Vérification

Une fois terminé, allez sur : `https://github.com/VOTRE_USERNAME/franceprep-academy`

Vous devriez voir tous vos fichiers ! 🎉

---

## Besoin d'aide ?

Si vous rencontrez une erreur, envoyez-moi le message d'erreur exact et je vous aiderai !

