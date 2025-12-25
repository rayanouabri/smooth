# 🔍 Diagnostic API Gemini

## ✅ Corrections appliquées

1. **Modèle changé** : `gemini-1.5-flash` (plus disponible)
2. **Système de fallback** : Essaie v1 d'abord, puis v1beta si 404
3. **Meilleure gestion d'erreur** : Logs détaillés pour debug

## 🧪 Test rapide

### 1. Vérifier la clé API dans Vercel

1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Settings → Environment Variables
4. Vérifiez que `GEMINI_API_KEY` existe et est correcte

### 2. Tester l'API directement

Ouvrez la console du navigateur (F12) et testez :

```javascript
fetch('https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=VOTRE_CLE', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: "Bonjour" }] }]
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

### 3. Vérifier les logs Vercel

1. Allez sur Vercel Dashboard
2. Votre projet → Functions → `/api/gemini`
3. Regardez les logs pour voir quelle erreur exacte se produit

## 🔧 Solutions possibles

### Si l'erreur persiste : "model not found"

**Option 1 : Utiliser gemini-1.5-pro-latest**
```javascript
// Dans api/gemini.js, ligne 53
const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`;
```

**Option 2 : Utiliser l'API REST directement (sans proxy)**
Modifier `src/api/integrations.js` pour appeler directement Gemini au lieu du proxy.

**Option 3 : Vérifier que l'API Generative Language est activée**
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. APIs & Services → Library
3. Cherchez "Generative Language API"
4. Assurez-vous qu'elle est activée

## 📋 Checklist

- [ ] Clé API configurée dans Vercel (`GEMINI_API_KEY`)
- [ ] Clé API valide (format: `AIzaSy...`)
- [ ] API Generative Language activée dans Google Cloud
- [ ] Quota API non dépassé
- [ ] Redéploiement Vercel effectué après modification

## 🐛 Erreurs courantes

### "Invalid API key"
➜ Vérifiez que la clé est correcte dans Vercel et redéployez

### "Quota exceeded"
➜ Attendez quelques minutes ou augmentez le quota dans Google Cloud

### "Model not found"
➜ Le modèle n'est pas disponible pour votre région/clé. Essayez un autre modèle.

### "404 Not Found"
➜ L'URL de l'API est incorrecte. Vérifiez la version (v1 vs v1beta).

## 📞 Support

Si rien ne fonctionne, vérifiez :
1. Les logs Vercel (Functions → Logs)
2. La console du navigateur (F12)
3. Les variables d'environnement Vercel

