# 🔧 Troubleshooting Webhook Stripe - Erreur 404

## ❌ Problème : Erreur 404 sur le webhook

Si vous voyez une erreur 404 en accédant au webhook, voici comment résoudre le problème.

## 🔍 Diagnostic

### 1. Vérifier l'URL utilisée

**❌ URL INCORRECTE** :
```
vercel.com/rayanouabris-projects/api/stripe/webhook
```

Cette URL n'existe pas. Vercel n'expose pas les fonctions serverless via `vercel.com/username-projects/...`.

**✅ URL CORRECTE** :
```
https://votre-projet.vercel.app/api/stripe/webhook
```

ou si vous avez un domaine personnalisé :
```
https://www.franceprepacademy.fr/api/stripe/webhook
```

### 2. Comment trouver votre URL Vercel

1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Regardez l'onglet **Settings** → **Domains**
4. Vous verrez :
   - Le domaine Vercel par défaut : `votre-projet.vercel.app`
   - Votre domaine personnalisé (si configuré) : `www.franceprepacademy.fr`

### 3. Vérifier que le fichier est déployé

1. Allez sur Vercel Dashboard → Votre projet → **Deployments**
2. Cliquez sur le dernier déploiement
3. Allez dans l'onglet **Functions**
4. Vous devriez voir `api/stripe/webhook` dans la liste
5. Si ce n'est pas le cas, le fichier n'a pas été déployé

### 4. Vérifier la structure des fichiers

Le fichier doit être à :
```
api/stripe/webhook.js
```

**❌ Ne doit PAS être** :
- `supabase/functions/stripe-webhook/` (ce sont des Edge Functions Supabase, pas Vercel)
- À la racine du projet

### 5. Tester l'endpoint

Une fois que vous avez la bonne URL, testez-la :

```bash
# Test avec curl
curl -X POST https://votre-projet.vercel.app/api/stripe/webhook \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

Vous devriez recevoir une réponse (même si c'est une erreur de signature, c'est normal - cela signifie que l'endpoint existe).

### 6. Vérifier les logs Vercel

1. Allez sur Vercel Dashboard → Votre projet → **Deployments**
2. Cliquez sur le dernier déploiement
3. Allez dans **Functions** → `api/stripe/webhook`
4. Cliquez sur **View Function Logs**
5. Vérifiez s'il y a des erreurs

## ✅ Solution rapide

1. **Trouvez votre URL Vercel** :
   - Vercel Dashboard → Votre projet → Settings → Domains
   - Notez l'URL : `https://votre-projet.vercel.app`

2. **Utilisez cette URL dans Stripe** :
   ```
   https://votre-projet.vercel.app/api/stripe/webhook
   ```

3. **Vérifiez que le fichier existe** :
   - Le fichier `api/stripe/webhook.js` doit exister dans votre projet
   - Il doit être commité et poussé sur GitHub

4. **Redéployez si nécessaire** :
   ```bash
   git add api/stripe/webhook.js
   git commit -m "Add Stripe webhook"
   git push origin main
   ```

5. **Attendez le déploiement** :
   - Vercel déploiera automatiquement
   - Vérifiez dans Vercel Dashboard → Deployments

## 🎯 Exemple concret

Si votre projet Vercel s'appelle `franceprep-academy`, l'URL sera :
```
https://franceprep-academy.vercel.app/api/stripe/webhook
```

Si vous avez un domaine personnalisé `www.franceprepacademy.fr`, l'URL sera :
```
https://www.franceprepacademy.fr/api/stripe/webhook
```

## 📝 Checklist

- [ ] J'ai trouvé mon URL Vercel dans le Dashboard
- [ ] Le fichier `api/stripe/webhook.js` existe dans mon projet
- [ ] Le fichier est commité et poussé sur GitHub
- [ ] Le déploiement Vercel est terminé
- [ ] J'utilise la bonne URL dans Stripe Dashboard
- [ ] J'ai testé l'endpoint avec curl ou Postman

## 🆘 Si ça ne marche toujours pas

1. Vérifiez que vous êtes sur le bon projet Vercel
2. Vérifiez que le dernier déploiement inclut `api/stripe/webhook.js`
3. Vérifiez les logs Vercel pour voir les erreurs
4. Assurez-vous que `vercel.json` est correctement configuré
