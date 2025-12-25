# 🚨 URGENT: Votre clé Gemini est compromise!

## ⚠️ Problème Détecté

Google a signalé que votre clé API Gemini a été **compromise/leaked**. 

Erreur reçue:
```
"Your API key was reported as Leaked. Please use another API key."
```

## ✅ Solution: Générer une nouvelle clé en 2 minutes

### Étape 1️⃣  - Aller sur Google AI Studio

Ouvrez: https://aistudio.google.com/apikey

### Étape 2️⃣  - Créer une nouvelle clé

1. Cliquez sur **"Create API Key"**
2. Si demandé, sélectionnez votre projet Google Cloud
3. Copiez la **nouvelle clé générée**

⚠️ **IMPORTANT**: Cette clé sera visible UNE SEULE FOIS. Copiez-la maintenant!

### Étape 3️⃣  - Ajouter sur Vercel

1. Allez à: https://vercel.com/dashboard
2. Sélectionnez votre projet `smooth`
3. Settings → Environment Variables
4. Cherchez: `GEMINI_API_KEY`
5. **Remplacez la valeur** par votre nouvelle clé
6. Cliquez: **Save**

### Étape 4️⃣  - Redéployer

Vercel va automatiquement redéployer avec la nouvelle clé.

**Attendez 2-3 minutes** puis testez le ChatBot!

---

## 🔍 Vérifier que c'est bon

1. **Hard-refresh**: Ctrl+Shift+R (Windows/Linux) ou Cmd+Shift+R (Mac)
2. **Ouvrez F12** (Console)
3. **Allez sur**: `/chatbot`
4. **Tapez**: "Bonjour"
5. **Regardez les logs**: Cherchez ✅ success ou ❌ error

### Logs à chercher

✅ **BON**:
```
[Gemini Proxy] ✅ Success, content length: 250
✅ [InvokeLLM] Got content, length: 250
```

❌ **MAUVAIS**:
```
API key compromised
GEMINI_API_KEY not configured
```

---

## 🔐 Sécurité

### Ne JAMAIS:
- ❌ Commiter la clé dans Git
- ❌ La partager publiquement
- ❌ La mettre dans les fichiers `.env` du repo

### À FAIRE:
- ✅ La mettre uniquement sur Vercel (Settings → Environment Variables)
- ✅ La garder secrète
- ✅ La renouveler régulièrement

---

## 📞 Si ça marche toujours pas

Vérifiez dans F12 Console:

### Erreur: "GEMINI_API_KEY not configured"
→ Variable pas encore ajoutée sur Vercel, ou Vercel pas redéployé

**Solution**: 
1. Vérifier Vercel Settings → Environment Variables
2. Cliquer "Redeploy" sur le dernier déploiement

### Erreur: "API key compromised"
→ La nouvelle clé n'a pas été sauvegardée correctement

**Solution**:
1. Générer une nouvelle clé (étape 1-2)
2. Bien remplacer l'ancienne sur Vercel
3. Cliquer "Save"
4. Redéployer

### Erreur: "Forbidden 403"
→ Problème réseau ou CORS

**Solution**:
1. Vérifier la console (F12)
2. Hard-refresh: Ctrl+Shift+R
3. Attendre quelques minutes
4. Tester à nouveau

---

## 🎉 Résultat Final

Une fois la nouvelle clé ajoutée et le redéploiement fait:

- ✅ ChatBot (Sophie) fonctionne
- ✅ Gemini API répond correctement  
- ✅ Pas d'erreurs d'authentification

**Temps estimé**: 5-10 minutes

---

*Créé le 25 décembre 2025*
*Mis à jour automatiquement après analyse de codes d'erreur*
