# 📤 Instructions pour Pousser sur GitHub

## Option 1 : Utiliser le script automatique (RECOMMANDÉ)

1. **Créez d'abord le repository sur GitHub** :
   - Allez sur https://github.com/new
   - Nom : `franceprep-academy` (ou autre)
   - ⚠️ **NE COCHEZ RIEN** (pas de README, .gitignore, license)
   - Cliquez sur "Create repository"

2. **Exécutez le script** :
   ```powershell
   .\push-to-github.ps1
   ```
   
   Le script vous demandera :
   - Votre nom d'utilisateur GitHub
   - Le nom du repository (ou Entrée pour le nom par défaut)

## Option 2 : Commandes manuelles

Si vous préférez faire manuellement :

1. **Créez le repository sur GitHub** (même chose que l'option 1)

2. **Dans PowerShell, dans le dossier du projet, exécutez** :

```powershell
# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/franceprep-academy.git
git push -u origin main
```

**Exemple** :
Si votre username est `rayan`, les commandes sont :
```powershell
git remote add origin https://github.com/rayan/franceprep-academy.git
git push -u origin main
```

## 🔐 Authentification GitHub

Si vous êtes demandé de vous authentifier :

### Option A : Token d'accès personnel (recommandé)

1. Allez sur https://github.com/settings/tokens
2. Cliquez sur "Generate new token" → "Generate new token (classic)"
3. Donnez un nom (ex: "franceprep-academy")
4. Cochez `repo` (tous les droits sur les repositories)
5. Cliquez sur "Generate token"
6. **Copiez le token** (vous ne le reverrez plus !)
7. Quand Git vous demande le mot de passe, utilisez le token au lieu du mot de passe

### Option B : GitHub CLI

Installez GitHub CLI et authentifiez-vous :
```powershell
winget install GitHub.cli
gh auth login
```

## ✅ Vérification

Une fois le push réussi, allez sur :
`https://github.com/VOTRE_USERNAME/franceprep-academy`

Vous devriez voir tous vos fichiers !

