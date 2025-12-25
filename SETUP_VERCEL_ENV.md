# Configuration Vercel - Variables d'Environnement

## 🚨 CRITIQUE: GEMINI API KEY

L'IA Sophie (ChatBot) ne fonctionne **QUE SI** la variable `GEMINI_API_KEY` est configurée sur Vercel.

### Étapes pour configurer:

1. **Aller sur Vercel Dashboard** → https://vercel.com/dashboard
2. **Sélectionner votre projet** `smooth` (ou FrancePrepAcademy)
3. **Aller à Settings** → Environment Variables
4. **Ajouter une nouvelle variable:**
   - Name: `GEMINI_API_KEY`
   - Value: Votre clé API Google Gemini (voir ci-dessous)
   - Environments: Production, Preview, Development
   - **Sauvegarder**

5. **Redéployer** après ajout de la variable:
   - Aller dans Deployments
   - Cliquer sur le derniers déploiement
   - Cliquer "Redeploy"
   - OU faire un `git push` pour déclencher un nouveau build

### Comment obtenir la clé Gemini:

1. Aller à https://aistudio.google.com/apikey
2. Cliquer "Create API Key" → "Create API key in existing project" (si c'est la première)
3. Copier la clé générée
4. **JAMAIS** la committer dans Git
5. Coller dans Vercel → Settings → Environment Variables

---

## ✅ Vérifier que c'est bien configuré:

### Test 1: Console Browser
1. Aller sur la page Chatbot
2. Ouvrir la console (F12)
3. Chercher un log comme:
   ```
   🤖 InvokeLLM: Checking Gemini availability. Client key: NO. Using proxy endpoint /api/gemini
   ```
4. Si vous voyez ça, c'est bon ✅

### Test 2: Chatbot Response
1. Taper une question dans le ChatBot (ex: "Bonjour")
2. Si vous recevez une réponse, l'IA marche ✅
3. Si vous voyez erreur "IA n'est pas configurée", c'est que GEMINI_API_KEY n'est pas sur Vercel

---

## 📋 Checkpoints de Debug

### Si le ChatBot dit "IA n'est pas configurée":

**Ouvrez la console (F12)** et vérifiez:

1. **Erreur "Aucune clé API":**
   - ➜ GEMINI_API_KEY n'est pas sur Vercel
   - Solution: Ajouter dans Settings → Environment Variables

2. **Erreur "Unauthorized" ou "403":**
   - ➜ Clé API invalide ou expirée
   - Solution: Vérifier la clé dans aistudio.google.com/apikey

3. **Erreur "CORS" ou "fetch failed":**
   - ➜ Problème de proxy endpoint
   - Solution: Vérifier que le déploiement Vercel est à jour

---

## 🔄 Workflow complet:

1. **Ajouter GEMINI_API_KEY** dans Vercel Settings
2. **Redéployer** le projet (via Vercel ou git push)
3. **Attendre 30-60 secondes** pour que Vercel rebuild
4. **Hard-refresh** le site (Ctrl+Shift+R ou Cmd+Shift+R)
5. **Tester le ChatBot**
6. **Ouvrir console** (F12) pour vérifier les logs

---

## 📝 Variables d'Environnement Requises:

| Variable | Type | Requis? | Valeur |
|----------|------|---------|--------|
| GEMINI_API_KEY | String | ✅ OUI | Clé Google Gemini |
| VITE_GEMINI_API_KEY | String | ❌ NON (optionnel) | Clé Gemini client-side (NOT recommended) |
| VITE_OPENAI_API_KEY | String | ❌ NON (fallback) | Clé OpenAI si Gemini échoue |

**Important:** 
- `GEMINI_API_KEY` = côté serveur (Vercel) - **C'est celui qui marche**
- `VITE_GEMINI_API_KEY` = côté client - ❌ N'EXPOSEZ PAS votre vraie clé en client
- Ne mettre que `GEMINI_API_KEY` sur Vercel

---

## 🚀 Configuration Ultra-Simple:

### Pour les impatients:

```bash
# 1. Aller sur aistudio.google.com/apikey
# 2. Créer/copier votre clé

# 3. Aller sur https://vercel.com/projects/smooth/settings/environment-variables
# 4. Ajouter:
#    GEMINI_API_KEY = (votre clé)

# 5. Redéployer:
git push origin main
# ou cliquer "Redeploy" dans Vercel Dashboard

# 6. Attendre 1-2 minutes et tester ✅
```

---

## 🐛 Troubleshooting:

| Symptôme | Cause | Solution |
|----------|-------|----------|
| "IA n'est pas configurée" | GEMINI_API_KEY manquante | Ajouter dans Vercel Settings |
| "Unauthorized 401" | Clé invalide/expirée | Vérifier la clé sur aistudio.google.com |
| ChatBot ne répond pas | Vercel pas à jour | Redéployer via Vercel ou git push |
| Console montre "No proxy" | Endpoint manquant | Vérifier /api/gemini.js existe |
| Erreur "Content policy" | Sécurité Gemini | Normal, réessayer avec prompt différent |

---

## 📞 Questions Fréquentes:

**Q: Je vois "IA n'est pas configurée", j'ai ajouté GEMINI_API_KEY, pourquoi?**
- A: Attendez 2-3 minutes après Redeploy, puis hard-refresh le site (Ctrl+Shift+R)

**Q: Comment vérifier que la clé marche?**
- A: Ouvrez console (F12) → allez sur le ChatBot → taper "Bonjour" → regarder les logs

**Q: Puis-je utiliser OpenAI à la place?**
- A: Oui! Ajouter VITE_OPENAI_API_KEY en Vercel Settings (fallback automatique)

**Q: La clé Gemini est-elle sécurisée sur Vercel?**
- A: Oui! Elle est côté serveur, jamais exposée au client

---

**Dernière mise à jour:** 2024
**Auteur:** FrancePrepAcademy Team
