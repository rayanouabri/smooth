# 📊 Comment accéder aux logs du webhook dans Vercel

## Méthode 1 : Via la page Deployments (Recommandée)

### Étape 1 : Accéder à la page Deployments
1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet **"smooth"**
3. Cliquez sur l'onglet **"Deployments"** dans le menu de navigation

### Étape 2 : Ouvrir un déploiement spécifique
1. Dans la liste des déploiements, cliquez sur le **dernier déploiement** (celui avec le statut "Ready" le plus récent)
   - Vous devriez voir quelque chose comme `4p3TajvzX` ou un autre ID
   - Le commit message devrait être "Fix webhook: add multiple fallback strategies..."

### Étape 3 : Accéder aux Functions
1. Une fois dans la page du déploiement, vous verrez plusieurs onglets :
   - **Deployment** (vue d'ensemble)
   - **Logs** ← **CLIQUEZ ICI**
   - **Resources** (liste des fonctions)
   - **Source**
   - **Open Graph**

2. Cliquez sur l'onglet **"Logs"**

### Étape 4 : Filtrer les logs pour le webhook
1. Dans la page Logs, vous verrez un filtre en haut
2. Cliquez sur le filtre ou dans la barre de recherche
3. Tapez : `api/stripe/webhook`
4. Ou sélectionnez la fonction dans la liste déroulante

Vous verrez maintenant tous les logs du webhook !

## Méthode 2 : Via la page Resources

### Étape 1 : Accéder à Resources
1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet **"smooth"**
3. Cliquez sur l'onglet **"Deployments"**
4. Cliquez sur le **dernier déploiement**
5. Cliquez sur l'onglet **"Resources"**

### Étape 2 : Ouvrir la fonction webhook
1. Dans la section **"Functions"**, vous verrez la liste des fonctions :
   - `/api/gemini`
   - `/api/stripe/billing-portal`
   - `/api/stripe/checkout`
   - **`/api/stripe/webhook`** ← **CLIQUEZ ICI**

2. Cliquez sur **`/api/stripe/webhook`**

### Étape 3 : Voir les logs
1. Une nouvelle page s'ouvrira avec les détails de la fonction
2. Cliquez sur l'onglet **"Logs"** ou **"Function Logs"**
3. Vous verrez tous les logs du webhook

## Méthode 3 : Via l'onglet Logs global (Tous les logs)

### Étape 1 : Accéder aux logs globaux
1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet **"smooth"**
3. Cliquez sur l'onglet **"Logs"** dans le menu de navigation principal (pas dans un déploiement)

### Étape 2 : Filtrer par fonction
1. Dans la page Logs, vous verrez un filtre en haut
2. Sélectionnez **"Function"** dans les filtres
3. Choisissez **`api/stripe/webhook`** dans la liste
4. Vous pouvez aussi filtrer par date/heure

## 🎯 Chemin Rapide (Le Plus Simple)

1. **Vercel Dashboard** → Votre projet **"smooth"**
2. **Deployments** (onglet)
3. Cliquez sur le **dernier déploiement** (celui en haut de la liste)
4. **Logs** (onglet dans la page du déploiement)
5. Dans le filtre, tapez : **`webhook`** ou sélectionnez **`api/stripe/webhook`**

## 📝 Ce que vous devriez voir dans les logs

Une fois que vous avez accès aux logs, vous devriez voir des messages comme :

```
📥 Webhook event received: checkout.session.completed
✅ Checkout session completed: cs_test_...
📧 Customer email: votre-email@example.com
🔄 updateUserToPremium called: { email: '...', customerId: '...', ... }
✅ Found user in auth.users: abc123...
✅ Profile updated successfully: abc123... Plan: premium
✅ Verification successful: { is_premium: true, ... }
```

Si vous voyez des erreurs, elles commenceront par `❌` :

```
❌ Error: ...
❌ Upsert failed: ...
❌ Update failed: ...
```

## 🔍 Si vous ne voyez pas les logs

### Vérification 1 : Le webhook est-il appelé ?
1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com)
2. **Developers** → **Webhooks**
3. Cliquez sur votre endpoint
4. Vérifiez les **Recent events**
5. Si vous voyez des événements avec un statut `200`, le webhook est appelé
6. Si vous voyez `404`, le webhook n'est pas déployé
7. Si vous voyez `400` ou `500`, il y a une erreur (les logs Vercel vous diront quoi)

### Vérification 2 : Le déploiement est-il récent ?
- Assurez-vous de regarder le **dernier déploiement** (celui avec "Fix webhook: add multiple fallback strategies...")
- Les logs n'apparaissent que pour les déploiements actifs

### Vérification 3 : Avez-vous fait un paiement récent ?
- Les logs n'apparaissent que lorsque le webhook est **appelé**
- Faites un nouveau paiement test pour générer des logs

## 💡 Astuce : Utiliser la recherche

Dans la page Logs, utilisez la barre de recherche pour chercher :
- `webhook` - Tous les logs du webhook
- `checkout.session.completed` - Les événements de checkout
- `updateUserToPremium` - Les tentatives de mise à jour
- `Error` ou `❌` - Toutes les erreurs
- Votre email - Les logs liés à votre compte

## 🆘 Si vous ne trouvez toujours pas

1. **Vérifiez que vous êtes sur le bon projet** : "smooth" dans "rayanouabri's projects"
2. **Vérifiez que le webhook est déployé** : Dans Resources, vous devriez voir `/api/stripe/webhook` avec une taille de ~460 kB
3. **Essayez un autre navigateur** ou **effacez le cache**
4. **Contactez le support Vercel** si l'interface semble différente
