# 🔑 Guide : Ajouter la clé Gemini API

## 📍 Où ajouter la clé Gemini

### ✅ Option 1 : Vercel (OBLIGATOIRE - pour l'instant)

La clé Gemini est actuellement utilisée par l'endpoint Vercel `/api/gemini.js`.

**Étapes :**

1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet **smooth-1** (ou le nom de votre projet)
3. Allez dans **Settings** → **Environment Variables**
4. Cliquez sur **Add New**
5. Remplissez :
   - **Name** : `GEMINI_API_KEY`
   - **Value** : Votre nouvelle clé Gemini (commence par `AIzaSy...`)
   - **Environments** : Cochez toutes les cases (Production, Preview, Development)
6. Cliquez sur **Save**
7. **IMPORTANT** : Redéployez l'application (Settings → Deployments → ... → Redeploy)

**Note** : Après l'ajout, vous devez redéployer pour que la nouvelle clé soit active.

---

### 🔮 Option 2 : Supabase Secrets (Optionnel - pour usage futur)

Si vous prévoyez d'utiliser Gemini dans une Edge Function Supabase plus tard, vous pouvez aussi l'ajouter ici.

**Étapes :**

1. Dans le dashboard Supabase, allez dans **Edge Functions** → **Secrets**
2. Cliquez sur **Add New Secret**
3. Remplissez :
   - **Name** : `GEMINI_API_KEY`
   - **Value** : Votre nouvelle clé Gemini
4. Cliquez sur **Save**

**Note** : Pour utiliser cette clé dans une Edge Function, vous devrez accéder à `Deno.env.get('GEMINI_API_KEY')`.

---

## ✅ Vérification

Pour vérifier que la clé fonctionne :

1. Testez le chatbot sur votre site
2. Si vous voyez une erreur "GEMINI_API_KEY not configured", vérifiez :
   - Que la clé est bien ajoutée dans Vercel
   - Que vous avez redéployé l'application après l'ajout

---

## 🔒 Sécurité

⚠️ **IMPORTANT** :
- ❌ Ne jamais commiter la clé dans le code
- ❌ Ne jamais partager la clé publiquement
- ✅ Utiliser uniquement les variables d'environnement
- ✅ La clé commence par `AIzaSy...`

---

## 📝 Fichiers concernés

- `api/gemini.js` - Utilise `process.env.GEMINI_API_KEY` (Vercel)
- `src/api/integrations.js` - Appelle `/api/gemini` (proxy Vercel)
