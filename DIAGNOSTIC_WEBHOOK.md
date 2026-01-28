# 🔍 Diagnostic du Webhook Stripe - Guide Complet

## Problème identifié

Le webhook ne met pas à jour `is_premium` à `true` dans la base de données, même si le paiement réussit.

## ✅ Corrections apportées

1. **Stratégies de fallback multiples** : Le webhook essaie maintenant 3 méthodes différentes pour mettre à jour
2. **Vérification post-update** : Le webhook vérifie que la mise à jour a bien fonctionné
3. **Amélioration de PaymentSuccess.jsx** : Force la mise à jour si le webhook échoue
4. **Logging détaillé** : Tous les logs sont maintenant visibles dans Vercel

## 🔍 Comment diagnostiquer le problème

### Étape 1 : Vérifier que le webhook est appelé

1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com)
2. Naviguez vers **Developers** → **Webhooks**
3. Cliquez sur votre endpoint webhook
4. Vérifiez les **Recent events** :
   - Vous devriez voir `checkout.session.completed` avec un statut `200` (succès) ou `400/500` (erreur)
   - Si vous voyez `404`, le webhook n'est pas déployé
   - Si vous voyez `400`, la vérification de signature échoue
   - Si vous voyez `500`, il y a une erreur dans le code

### Étape 2 : Vérifier les logs Vercel

1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans **Deployments** → Dernier déploiement
4. Cliquez sur **Functions** → `api/stripe/webhook`
5. Cliquez sur **View Function Logs**

**Logs à chercher :**
- `📥 Webhook event received: checkout.session.completed` → Le webhook a reçu l'événement
- `✅ Checkout session completed:` → La session est bien traitée
- `🔄 updateUserToPremium called:` → La fonction de mise à jour est appelée
- `✅ Found user in auth.users:` → L'utilisateur est trouvé
- `✅ Profile updated successfully:` → La mise à jour a réussi
- `❌ Error:` → Il y a une erreur (notez le message)

### Étape 3 : Vérifier les erreurs spécifiques

#### Erreur "Webhook signature verification failed"
**Cause** : La signature Stripe ne correspond pas
**Solution** :
1. Vérifiez que `STRIPE_WEBHOOK_SECRET` est correct dans Vercel
2. Assurez-vous que le secret correspond à l'endpoint (test vs live)
3. Redéployez après avoir corrigé la variable

#### Erreur "Supabase credentials not configured"
**Cause** : Les variables d'environnement Supabase manquent
**Solution** :
1. Vérifiez que `SUPABASE_URL` est défini dans Vercel
2. Vérifiez que `SUPABASE_SERVICE_ROLE_KEY` est défini dans Vercel
3. Redéployez après avoir ajouté les variables

#### Erreur "Error updating profile" ou "Upsert failed"
**Cause** : Problème avec la base de données (RLS, permissions, etc.)
**Solution** :
1. Vérifiez que `SUPABASE_SERVICE_ROLE_KEY` est correct (doit bypasser RLS)
2. Vérifiez les logs Supabase pour voir les erreurs SQL
3. Vérifiez que la table `user_profiles` existe et a les bonnes colonnes

#### Erreur "User not found in auth.users"
**Cause** : L'utilisateur n'existe pas dans `auth.users`
**Solution** :
1. Vérifiez que l'utilisateur s'est bien inscrit avant de payer
2. Vérifiez que l'email dans Stripe correspond à l'email dans Supabase
3. Le webhook essaiera de créer le profil automatiquement

### Étape 4 : Vérifier manuellement dans Supabase

1. Allez sur [Supabase Dashboard](https://app.supabase.com)
2. Ouvrez **SQL Editor**
3. Exécutez cette requête :

```sql
-- Vérifier un utilisateur spécifique
SELECT 
  id,
  user_email,
  is_premium,
  subscription_status,
  subscription_plan,
  stripe_customer_id,
  stripe_session_id,
  updated_at
FROM user_profiles
WHERE user_email = 'votre-email@example.com';
```

**Vérifiez :**
- `is_premium` est-il à `true` ?
- `subscription_status` est-il à `'active'` ?
- `stripe_customer_id` existe-t-il ?
- `updated_at` est-il récent (après le paiement) ?

### Étape 5 : Tester le webhook manuellement

Si le webhook ne fonctionne toujours pas, testez-le manuellement :

1. **Récupérer un événement test depuis Stripe** :
   - Stripe Dashboard → Webhooks → Votre endpoint
   - Cliquez sur un événement `checkout.session.completed`
   - Copiez le **Request body** (JSON)

2. **Envoyer une requête test** :
   ```bash
   curl -X POST https://franceprepacademy.fr/api/stripe/webhook \
     -H "Content-Type: application/json" \
     -H "Stripe-Signature: t=timestamp,v1=signature" \
     -d '{"type":"checkout.session.completed","data":{"object":{"id":"cs_test_...","customer_email":"test@example.com"}}}'
   ```

   **Note** : Cette requête échouera probablement à cause de la signature, mais vous verrez les logs dans Vercel.

## 🛠️ Solutions selon le problème

### Problème : Le webhook n'est jamais appelé

**Vérifications :**
1. L'URL du webhook dans Stripe Dashboard est correcte
2. Le webhook est bien déployé sur Vercel (vérifiez dans Functions)
3. Les événements sont bien sélectionnés dans Stripe (checkout.session.completed)

**Solution :**
- Vérifiez que l'URL est `https://franceprepacademy.fr/api/stripe/webhook`
- Redéployez le webhook sur Vercel

### Problème : Le webhook est appelé mais échoue

**Vérifications :**
1. Les logs Vercel montrent une erreur spécifique
2. Les variables d'environnement sont correctes
3. La clé service role Supabase est valide

**Solution :**
- Corrigez l'erreur spécifique dans les logs
- Vérifiez que `SUPABASE_SERVICE_ROLE_KEY` peut bien bypasser RLS

### Problème : Le webhook réussit mais is_premium reste false

**Vérifications :**
1. Les logs montrent "✅ Profile updated successfully"
2. Mais `is_premium` est toujours `false` dans Supabase

**Solution :**
- Le webhook a maintenant une vérification post-update qui force la mise à jour si nécessaire
- Vérifiez les logs pour voir si la vérification détecte le problème

## 📊 Checklist de Diagnostic

- [ ] Le webhook est bien configuré dans Stripe Dashboard
- [ ] L'URL du webhook est correcte (`https://franceprepacademy.fr/api/stripe/webhook`)
- [ ] Les événements sont bien sélectionnés (`checkout.session.completed`)
- [ ] Le webhook apparaît dans Vercel Functions
- [ ] Les variables d'environnement sont définies dans Vercel :
  - [ ] `STRIPE_SECRET_KEY`
  - [ ] `STRIPE_WEBHOOK_SECRET`
  - [ ] `SUPABASE_URL`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Les logs Vercel montrent que le webhook est appelé
- [ ] Les logs Vercel ne montrent pas d'erreurs
- [ ] `is_premium` est à `true` dans Supabase après un paiement

## 🎯 Test Complet

Pour tester complètement le système :

1. **Faire un paiement test** sur votre site
2. **Attendre 30 secondes** (le webhook peut prendre du temps)
3. **Vérifier dans Stripe Dashboard** que l'événement est envoyé (statut 200)
4. **Vérifier dans Vercel Logs** que le webhook a bien traité l'événement
5. **Vérifier dans Supabase** que `is_premium` est à `true`

Si une de ces étapes échoue, suivez le guide ci-dessus pour diagnostiquer le problème spécifique.
