# 🚨 URGENT: Remplacer la Clé Gemini Compromise

## Le Problème

Votre clé Gemini actuelle a été **reportée comme compromise** par Google:
- Clé: `AIzaSyAFd0cdgHdSHxeSz7XjX3aEhO4SDJEnZiw`
- Status: ❌ LEAKED
- Résultat: ChatBot retourne 500 Error "Your API key was reported as leaked"

## Solution: Générer une Nouvelle Clé (5 min)

### Étape 1: Créer la Nouvelle Clé
1. Allez à: **https://aistudio.google.com/apikey**
2. Connectez-vous avec votre compte Google
3. Cliquez **"Create API Key"**
4. Sélectionnez le projet approprié (ou créez-en un)
5. Copiez la **NOUVELLE clé** qui s'affiche

### Étape 2: Mettre à Jour Localement
1. Ouvrez `.env` dans ce dossier
2. Remplacez `YOUR_NEW_GEMINI_API_KEY_HERE` par votre nouvelle clé:
   ```
   GEMINI_API_KEY=AIzaSy...
   ```
3. Sauvegardez le fichier

### Étape 3: Mettre à Jour sur Vercel (Très Important!)
1. Allez à: **https://vercel.com/dashboard**
2. Sélectionnez le projet **"smooth"**
3. Allez à **Settings → Environment Variables**
4. Trouvez `GEMINI_API_KEY`
5. Cliquez "Edit" (icône crayon)
6. Remplacez par votre NOUVELLE clé
7. Cliquez **Save** (sauvegarde automatique)
8. Vercel redéploiera automatiquement

### Étape 4: Tester sur Vercel
1. Attendez que Vercel finisse le déploiement (~2-3 min)
2. Allez à: **https://www.franceprepacademy.fr**
3. Ouvrez le ChatBot (Sophie en bas à droite)
4. Envoyez un test: `Bonjour, comment ça marche?`
5. Attendez la réponse ✅

## Vérifier que ça Marche

### En Local (npm run dev)
```bash
npm run dev
# Allez à http://localhost:5173
# Testez le ChatBot
```

### Sur Vercel
```bash
# Après mise à jour:
https://www.franceprepacademy.fr → ChatBot → Test message
```

## Logs pour Diagnostiquer

Si ça ne marche pas:

**En Local:**
```bash
npm run dev
# Ouvrez DevTools (F12) → Console
# Envoyez un message au ChatBot
# Cherchez les logs qui commencent par [InvokeLLM] ou [Gemini Proxy]
```

**Sur Vercel:**
```bash
# Allez à Vercel → Deployments → Logs
# Cherchez les erreurs concernant GEMINI_API_KEY
```

## Points Importants

✅ **DO:**
- Générer une nouvelle clé à chaque fois que l'ancienne est compromise
- Ajouter la clé sur Vercel (Settings → Environment Variables)
- Attendre le redéploiement de Vercel
- Tester sur la production après le déploiement

❌ **DON'T:**
- Ne mettez PAS `VITE_GEMINI_API_KEY` (expose la clé en client)
- Ne commitez PAS `.env` sur GitHub (protégé par .gitignore)
- Ne partagez PAS votre clé dans les repos GitHub
- Ne mettez PAS la clé directement dans le code

## Besoin d'Aide?

Si ça ne marche pas:
1. Vérifiez que Vercel a fini le déploiement
2. Vérifiez la clé dans Vercel Settings
3. Faites Ctrl+Shift+R pour forcer le rechargement
4. Vérifiez les logs dans la Console (F12)

---

**Status Actuel:**
- ✅ Code corrigé (api/gemini.js, integrations.js)
- ✅ .env et .gitignore sécurisés
- ⏳ En attente: Nouvelle clé Gemini
- ⏳ En attente: Mise à jour Vercel
