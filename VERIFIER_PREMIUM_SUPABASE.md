# 🔍 Comment vérifier que is_premium est à true dans Supabase

## Méthode 1 : Via Supabase Dashboard (Interface Graphique)

### Étape 1 : Accéder à Supabase Dashboard
1. Allez sur [Supabase Dashboard](https://app.supabase.com)
2. Connectez-vous avec votre compte
3. Sélectionnez votre projet

### Étape 2 : Accéder à la table user_profiles
1. Dans le menu de gauche, cliquez sur **Table Editor** (ou **SQL Editor**)
2. Dans la liste des tables, trouvez et cliquez sur **`user_profiles`**
3. Vous verrez toutes les lignes de la table avec leurs colonnes

### Étape 3 : Vérifier is_premium
1. Cherchez la ligne correspondant à votre utilisateur (par email ou ID)
2. Regardez la colonne **`is_premium`** :
   - ✅ Si c'est `true` ou `t` → L'utilisateur est Premium
   - ❌ Si c'est `false` ou `f` → L'utilisateur n'est pas Premium
3. Vérifiez aussi :
   - **`subscription_status`** : doit être `'active'`
   - **`subscription_plan`** : doit être `'premium'` ou `'ultimate'`
   - **`stripe_customer_id`** : doit contenir un ID Stripe (commence par `cus_...`)
   - **`stripe_session_id`** : doit contenir un ID de session (commence par `cs_...`)

### Étape 4 : Filtrer par email (optionnel)
1. Cliquez sur le bouton **Filter** (filtre) en haut de la table
2. Sélectionnez **`user_email`** comme colonne
3. Entrez l'email de l'utilisateur à vérifier
4. Cliquez sur **Apply**
5. Vous verrez uniquement les lignes correspondant à cet email

## Méthode 2 : Via SQL Editor (Plus Rapide)

### Étape 1 : Ouvrir SQL Editor
1. Dans Supabase Dashboard, cliquez sur **SQL Editor** dans le menu de gauche
2. Cliquez sur **New query**

### Étape 2 : Exécuter une requête SQL
Copiez et collez cette requête SQL :

```sql
-- Vérifier un utilisateur spécifique par email
SELECT 
  id,
  user_email,
  full_name,
  is_premium,
  subscription_status,
  subscription_plan,
  stripe_customer_id,
  stripe_session_id,
  premium_since,
  created_at,
  updated_at
FROM user_profiles
WHERE user_email = 'votre-email@example.com';
```

**Remplacez `'votre-email@example.com'` par l'email de l'utilisateur à vérifier.**

### Étape 3 : Voir tous les utilisateurs Premium
Pour voir tous les utilisateurs Premium :

```sql
-- Voir tous les utilisateurs Premium
SELECT 
  id,
  user_email,
  full_name,
  is_premium,
  subscription_status,
  subscription_plan,
  stripe_customer_id,
  premium_since
FROM user_profiles
WHERE is_premium = true
ORDER BY premium_since DESC;
```

### Étape 4 : Voir les utilisateurs récemment mis à jour
Pour voir les utilisateurs récemment mis à jour (utile pour vérifier après un paiement) :

```sql
-- Voir les utilisateurs récemment mis à jour
SELECT 
  id,
  user_email,
  full_name,
  is_premium,
  subscription_status,
  subscription_plan,
  stripe_customer_id,
  stripe_session_id,
  premium_since,
  updated_at
FROM user_profiles
WHERE updated_at > NOW() - INTERVAL '1 hour'
ORDER BY updated_at DESC;
```

## Méthode 3 : Vérifier via l'Application (Frontend)

### Dans le Dashboard de l'application
1. Connectez-vous à votre application
2. Allez sur `/dashboard` ou `/profile`
3. Vérifiez si vous voyez des badges "Premium" ou des fonctionnalités Premium débloquées

### Via la Console du Navigateur
1. Ouvrez les **Outils de développement** (F12)
2. Allez dans l'onglet **Console**
3. Tapez cette commande (si vous êtes connecté) :

```javascript
// Vérifier le statut Premium de l'utilisateur actuel
const { data: { user } } = await supabase.auth.getUser();
const { data: profile } = await supabase
  .from('user_profiles')
  .select('is_premium, subscription_status, subscription_plan')
  .eq('id', user.id)
  .single();

console.log('Premium Status:', profile);
```

## ✅ Checklist de Vérification

Après un paiement, vérifiez que :

- [ ] **`is_premium`** = `true` (ou `t`)
- [ ] **`subscription_status`** = `'active'`
- [ ] **`subscription_plan`** = `'premium'` ou `'ultimate'`
- [ ] **`stripe_customer_id`** existe (commence par `cus_...`)
- [ ] **`stripe_session_id`** existe (commence par `cs_...`)
- [ ] **`premium_since`** contient une date récente
- [ ] **`updated_at`** est récent (dans la dernière heure)

## 🔧 Si is_premium n'est pas à true

### Vérifier les logs Vercel
1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans **Deployments** → Dernier déploiement
4. Cliquez sur **Functions** → `api/stripe/webhook`
5. Vérifiez les logs pour voir les erreurs

### Vérifier les logs Stripe
1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com)
2. Allez dans **Developers** → **Webhooks**
3. Cliquez sur votre endpoint webhook
4. Vérifiez les **Recent events**
5. Cliquez sur un événement `checkout.session.completed`
6. Vérifiez le **Response** (doit être `200`)

### Vérifier les variables d'environnement
Dans Vercel Dashboard → Settings → Environment Variables, vérifiez que :
- `STRIPE_WEBHOOK_SECRET` est défini
- `SUPABASE_SERVICE_ROLE_KEY` est défini
- `SUPABASE_URL` est défini

## 📝 Exemple de Requête SQL Complète

```sql
-- Requête complète pour diagnostiquer un problème Premium
SELECT 
  id,
  user_email,
  full_name,
  is_premium,
  subscription_status,
  subscription_plan,
  stripe_customer_id,
  stripe_subscription_id,
  stripe_session_id,
  premium_since,
  created_at,
  updated_at,
  -- Calculer si l'utilisateur devrait être Premium
  CASE 
    WHEN is_premium = true THEN '✅ Premium'
    WHEN subscription_status = 'active' THEN '⚠️ Active mais is_premium = false'
    ELSE '❌ Non Premium'
  END as status_check
FROM user_profiles
WHERE user_email = 'votre-email@example.com'
ORDER BY updated_at DESC;
```

## 🎯 Test Rapide

Pour tester rapidement si le webhook fonctionne :

1. **Faire un paiement test** sur votre site
2. **Attendre 30 secondes** (le webhook peut prendre du temps)
3. **Exécuter cette requête SQL** dans Supabase :

```sql
SELECT 
  user_email,
  is_premium,
  subscription_status,
  updated_at
FROM user_profiles
WHERE updated_at > NOW() - INTERVAL '5 minutes'
ORDER BY updated_at DESC;
```

Cela vous montrera tous les utilisateurs mis à jour dans les 5 dernières minutes.
