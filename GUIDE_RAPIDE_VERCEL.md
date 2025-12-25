# 🚀 Guide Rapide - Déploiement Vercel (15 min)

## ÉTAPE 1: Vérifier la Clé Gemini sur Vercel ⏱️ 2 min

### Ouvrir Vercel Dashboard
1. Aller à https://vercel.com/dashboard
2. Cliquer sur votre projet `smooth`
3. Aller à **Settings** → **Environment Variables**

### Chercher `GEMINI_API_KEY`
- ✅ Si elle existe → Passer à l'étape 2
- ❌ Si elle n'existe pas → L'ajouter :
  ```
  Name: GEMINI_API_KEY
  Value: AIzaSyAFd0cdgHdSHxeSz7XjX3aEhO4SDJEnZiw
  Environments: Production, Preview, Development
  ```

---

## ÉTAPE 2: Configurer Stripe Secret Key ⏱️ 3 min

### Récupérer votre clé Stripe
1. Aller à https://dashboard.stripe.com/
2. Aller à **Settings** → **API Keys**
3. Copier la **Secret Key** (sk-live-... ou sk-test-...)

### Ajouter sur Vercel
1. Retourner sur Vercel Dashboard
2. Settings → Environment Variables
3. Ajouter nouvelle variable :
   ```
   Name: STRIPE_SECRET_KEY
   Value: sk-live-xxxxx (ou sk-test-xxxxx)
   Environments: Production, Preview, Development
   ```

---

## ÉTAPE 3: Redéployer ⏱️ 2 min

### Option A: Redéploiement Auto (Préféré)
1. Aller à https://github.com/rayanouabri/smooth
2. Faire un `git push` n'importe où
   ```bash
   git commit --allow-empty -m "trigger vercel redeploy"
   git push origin main
   ```

### Option B: Redéploiement Manuel
1. Sur Vercel Dashboard
2. Aller à **Deployments**
3. Cliquer sur le dernier déploiement
4. Cliquer **Redeploy**

⏳ **Attendre 2-3 minutes** pour que le build se termine.

---

## ÉTAPE 4: Vérifier le Déploiement ⏱️ 3 min

### Vérifier le Build
1. Sur Vercel Dashboard → Deployments
2. Le statut devrait être ✅ **Ready**
3. Si ❌ **Error** → Vérifier les logs (cliquer sur le déploiement)

### Vérifier que Gemini marche
1. Aller sur votre site en production
2. Naviguer vers la page **Chatbot**
3. Taper une question : "Bonjour comment ça va?"
4. Si vous recevez une réponse → ✅ C'est bon!
5. Si erreur "IA not configured" → Vérifier les logs (F12)

### Vérifier que Supabase marche
1. Aller sur la page **Home**
2. Cliquer sur "Découvrir les cours"
3. Vérifier que les cours s'affichent
4. Cliquer sur un cours → Vérifier les leçons

---

## ÉTAPE 5: Tester un Paiement Stripe ⏱️ 5 min

### Mode TEST (Recommandé d'abord)
1. Assurez-vous d'avoir `STRIPE_SECRET_KEY = sk-test-...`
2. Aller sur la page **Pricing**
3. Cliquer sur **Abonnement Premium** (bouton)
4. **Données de test Stripe** :
   - Email : testuser@example.com
   - Carte : `4242 4242 4242 4242`
   - Exp : `12/25`
   - CVC : `123`
5. Cliquer **Payer**
6. Vérifier que ça redirige vers **PaymentSuccess**

### Mode LIVE (Après test)
1. Remplacer `STRIPE_SECRET_KEY` par votre clé LIVE
2. Redéployer
3. Tester avec une vraie carte

---

## ✅ Checklist Final

- [ ] Gemini API Key ajoutée sur Vercel
- [ ] Stripe Secret Key ajoutée sur Vercel
- [ ] Redéploiement lancé et terminé (statut ✅ Ready)
- [ ] Chatbot testé en production (répond correctement)
- [ ] Courses affichées (Courses page)
- [ ] Test paiement Stripe (Mode TEST d'abord)
- [ ] Pas d'erreurs dans la console (F12)

---

## 🆘 Troubleshooting

### Erreur: "Gemini API not configured"
**Cause** : `GEMINI_API_KEY` non trouvée sur Vercel
**Solution** :
1. Vérifier Vercel → Settings → Environment Variables
2. Vérifier l'orthographe exacte : `GEMINI_API_KEY`
3. Redéployer
4. Hard refresh : Ctrl+Shift+R

### Erreur: "Stripe Secret Key not configured"
**Cause** : `STRIPE_SECRET_KEY` non trouvée sur Vercel
**Solution** :
1. Récupérer depuis Stripe Dashboard
2. Ajouter sur Vercel
3. Redéployer
4. Tester à nouveau

### Erreur: "Build failed"
**Cause** : Problème lors du build
**Solution** :
1. Vérifier les logs Vercel (cliquer sur Deployments → Build Logs)
2. Vérifier que le code compile localement : `npm run build`
3. Vérifier qu'il n'y a pas de git conflict
4. Faire un commit et push clean

### Courses n'affichent rien
**Cause** : Supabase database non synchronisée
**Solution** :
1. Vérifier que vous avez exécuté le SQL : `supabase-schema-with-courses.sql`
2. Vérifier sur Supabase Dashboard → SQL Editor que les tables existent
3. Vérifier que les clés Supabase sont correctes dans `.env`

### Paiement redirige vers blank page
**Cause** : Session ID non transmis correctement
**Solution** :
1. Vérifier les logs dans Stripe Dashboard
2. Vérifier que `session_id` est dans l'URL après paiement
3. Vérifier la variable `STRIPE_SECRET_KEY` sur Vercel

---

## 📞 Support

### Vérifier les Logs en Production
```bash
vercel logs --limit=50
```

### Logs en Temps Réel
```bash
vercel logs --follow
```

### Tester le Build Localement
```bash
npm run build
npm run preview  # Lance sur http://localhost:4173
```

---

## 🎉 Félicitations!

Si vous êtes arrivé jusqu'ici, votre site est **EN PRODUCTION** 🚀

Vous avez :
- ✅ Site deployé sur Vercel
- ✅ Base de données sur Supabase
- ✅ API Gemini configurée (ChatBot)
- ✅ Paiements Stripe intégrés
- ✅ Authentification en place

**Temps total** : ~20 minutes

---

*Créé le : 25 décembre 2024*
*Version : 1.0*
