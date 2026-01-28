# 🔍 Comment vérifier les logs du webhook Stripe

## Étape 1 : Filtrer les logs pour le webhook

Dans la page Logs de Vercel que vous avez ouverte :

1. **Dans la barre de recherche "Search logs..."** en haut, tapez : `webhook`
2. Ou dans le filtre **"Route"** à gauche, cherchez `/api/stripe/webhook`
3. Vous devriez voir des entrées POST vers `/api/stripe/webhook`

## Étape 2 : Vérifier dans Stripe Dashboard

1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com)
2. **Developers** → **Webhooks**
3. Cliquez sur votre endpoint webhook
4. Vérifiez les **Recent events** :
   - Cherchez un événement `checkout.session.completed` avec le session ID : `cs_test_b1LhewkI9AAdAg8Edrt7ArNIm6hkRVRO7FYB8s5m4nFViLmlpUBl3vuwRK`
   - Vérifiez le **statut** :
     - ✅ `200` = Le webhook a réussi
     - ❌ `400` = Erreur de vérification de signature
     - ❌ `500` = Erreur dans le code
     - ❌ `404` = Le webhook n'est pas déployé

## Étape 3 : Si le webhook n'apparaît pas dans les logs Vercel

Cela signifie que Stripe n'appelle pas le webhook. Vérifiez :

1. **L'URL du webhook dans Stripe** :
   - Doit être : `https://www.franceprepacademy.fr/api/stripe/webhook`
   - Pas : `https://franceprepacademy.fr/api/stripe/webhook` (sans www)
   - Pas : `https://votre-projet.vercel.app/api/stripe/webhook`

2. **Les événements sélectionnés** :
   - `checkout.session.completed` doit être coché
   - Vérifiez dans Stripe Dashboard → Webhooks → Votre endpoint → "Events to send"

3. **Le mode Stripe** :
   - Si vous testez avec `sk_test_...`, le webhook doit être en mode **Test**
   - Si vous testez avec `sk_live_...`, le webhook doit être en mode **Live**

## Étape 4 : Si le webhook apparaît mais échoue

Si vous voyez des logs du webhook dans Vercel mais avec des erreurs :

1. **Cliquez sur l'entrée du webhook** dans les logs
2. **Regardez les détails** dans le panneau de droite
3. **Cherchez les messages d'erreur** qui commencent par `❌`

Erreurs communes :
- `❌ Webhook signature verification failed` → Vérifiez `STRIPE_WEBHOOK_SECRET`
- `❌ Supabase credentials not configured` → Vérifiez `SUPABASE_SERVICE_ROLE_KEY`
- `❌ Error updating profile` → Problème avec la base de données

## 🎯 Action Immédiate

Pour votre session `cs_test_b1LhewkI9AAdAg8Edrt7ArNIm6hkRVRO7FYB8s5m4nFViLmlpUBl3vuwRK` :

1. **Allez sur Stripe Dashboard** → **Developers** → **Webhooks**
2. **Cliquez sur votre endpoint**
3. **Cherchez un événement** avec ce session ID
4. **Cliquez sur l'événement** pour voir les détails
5. **Regardez le statut** et le **Response**

Si le statut est `200`, le webhook a été appelé avec succès. Si c'est `400` ou `500`, il y a une erreur.

## 📊 Timeline Attendue

1. **17:44:32** - Checkout créé (ce que vous voyez)
2. **17:44:33-35** - Utilisateur paie sur Stripe
3. **17:44:35-40** - Stripe appelle le webhook
4. **17:44:40** - Webhook met à jour `is_premium` dans Supabase

Si vous ne voyez pas de log webhook entre 17:44:35 et 17:44:45, le webhook n'a probablement pas été appelé.
