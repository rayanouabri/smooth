# 📖 GUIDE ULTRA SIMPLE - Créer et Pousser sur GitHub

## 🎯 Objectif : Mettre votre code sur GitHub en 3 étapes

---

## ÉTAPE 1 : Créer le repository sur GitHub (FACILE !)

### Ce que vous devez faire :

1. **Ouvrez ce lien dans votre navigateur** : 
   👉 **https://github.com/new**

2. **Dans la page qui s'ouvre, remplissez** :
   ```
   Repository name: franceprep-academy
   Description: Plateforme d'apprentissage pour étudiants internationaux
   Visibilité: Public ou Private (choisissez ce que vous voulez)
   ```

3. **IMPORTANT** : Regardez en bas de la page, vous verrez 3 cases :
   - ☐ Add a README file
   - ☐ Add .gitignore  
   - ☐ Choose a license
   
   **NE COCHEZ AUCUNE DE CES CASES ! Laissez-les toutes vides !**

4. **Cliquez sur le gros bouton vert "Create repository"**

5. **✅ FÉLICITATIONS !** Votre repository est créé !

---

## ÉTAPE 2 : Trouver votre nom d'utilisateur GitHub

1. En haut à droite de GitHub, cliquez sur votre photo de profil
2. Votre nom d'utilisateur est écrit juste en dessous
3. **Notez-le quelque part** (ex: `rayan123` ou `mon-nom`)

---

## ÉTAPE 3 : Pousser le code (COPIER-COLLER !)

### Ouvrez PowerShell dans ce dossier

1. Dans l'Explorateur Windows, allez dans : 
   `C:\Users\rayan\OneDrive\Documents\franceprep-academy-supabase`

2. Dans la barre d'adresse, tapez `powershell` et appuyez sur Entrée
   (Ou faites clic droit → "Ouvrir PowerShell ici")

3. **Copiez-collez ces commandes UNE PAR UNE** (remplacez `VOTRE_USERNAME` par votre vrai username) :

```powershell
git remote add origin https://github.com/VOTRE_USERNAME/franceprep-academy.git
```

**Appuyez sur Entrée**

Puis :

```powershell
git push -u origin main
```

**Appuyez sur Entrée**

---

## ✅ C'EST FINI !

Allez voir votre code sur :
`https://github.com/VOTRE_USERNAME/franceprep-academy`

---

## 🆘 Si ça ne marche pas...

### Erreur : "remote origin already exists"
**Solution** : Exécutez d'abord :
```powershell
git remote remove origin
```
Puis recommencez l'ÉTAPE 3.

### Git vous demande un mot de passe
**Solution** : Utilisez un token GitHub :
1. Allez sur https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Donnez un nom, cochez `repo`, cliquez "Generate"
4. **Copiez le token** (longue chaîne de caractères)
5. Quand Git demande le mot de passe, collez le token

### Autre erreur ?
Envoyez-moi le message d'erreur complet et je vous aiderai ! 😊

