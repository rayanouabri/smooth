# ✅ Instructions Complètes : Automatisation Complète

## 📋 Résumé

J'ai créé tous les fichiers nécessaires pour automatiser la mise à jour des images des cours. Voici ce qui a été fait et ce qu'il reste à configurer.

---

## ✅ Fichiers Créés

1. ✅ **`supabase/functions/update-course-images/index.ts`** - Edge Function Supabase
2. ✅ **`api/cron/update-images.js`** - Endpoint Cron pour Vercel
3. ✅ **`.github/workflows/update-images.yml`** - GitHub Actions
4. ✅ **`vercel.json`** - Mis à jour avec les crons

---

## 🚀 ÉTAPE 1 : Déployer la Supabase Edge Function

### 1.1 Via Supabase Dashboard (Recommandé)

1. **Ouvrez Supabase Dashboard** → **Edge Functions**
2. Cliquez sur **"Create a new function"**
3. **Nom** : `update-course-images`
4. Copiez le contenu de `supabase/functions/update-course-images/index.ts`
5. Collez dans l'éditeur
6. Cliquez sur **"Deploy"**

### 1.2 Via CLI (Alternative)

```bash
# Installer Supabase CLI
npm install -g supabase

# Se connecter
supabase login

# Lier votre projet
supabase link --project-ref votre-project-ref

# Déployer la fonction
supabase functions deploy update-course-images
```

---

## 🚀 ÉTAPE 2 : Configurer les Secrets GitHub

1. Allez sur votre **repository GitHub**
2. **Settings** → **Secrets and variables** → **Actions**
3. Ajoutez :
   - **`SUPABASE_URL`** : Votre URL (ex: `https://xxxxx.supabase.co`)
   - **`SUPABASE_ANON_KEY`** : Votre clé anonyme (Supabase Dashboard → Settings → API)

### Où trouver ces valeurs ?

1. **Supabase Dashboard** → **Settings** → **API**
2. **Project URL** → C'est votre `SUPABASE_URL`
3. **anon public** key → C'est votre `SUPABASE_ANON_KEY`

---

## 🚀 ÉTAPE 3 : Configurer Vercel Cron (Optionnel)

### 3.1 Ajouter la variable d'environnement

1. **Vercel Dashboard** → Votre projet → **Settings** → **Environment Variables**
2. Ajoutez :
   - **Name** : `CRON_SECRET`
   - **Value** : Un secret de votre choix (ex: `mon-secret-123`)
   - **Environments** : Production (et Preview si besoin)

### 3.2 Redéployer

Le fichier `vercel.json` a été mis à jour avec la configuration cron. Vercel devrait automatiquement créer le cron job.

**Pour vérifier** :
1. **Vercel Dashboard** → Votre projet → **Settings** → **Cron Jobs**
2. Vous devriez voir : `update-images` - Tous les jours à 2h UTC

---

## 🚀 ÉTAPE 4 : Tester

### Test 1 : Supabase Edge Function

1. **Supabase Dashboard** → **Edge Functions** → `update-course-images`
2. Cliquez sur **"Invoke"**
3. Cliquez sur **"Invoke function"**
4. Vérifiez le résultat

### Test 2 : GitHub Actions

1. **GitHub** → Votre repo → **Actions**
2. Cliquez sur **"Update Course Images"**
3. Cliquez sur **"Run workflow"** → **"Run workflow"**
4. Attendez et vérifiez les logs

### Test 3 : Vercel Cron

1. Attendez l'heure programmée (2h UTC), OU
2. Testez manuellement :
   ```bash
   curl -X POST https://votre-domaine.vercel.app/api/cron/update-images \
     -H "Authorization: Bearer votre-cron-secret"
   ```

---

## 📅 Calendrier des Mises à Jour

Une fois configuré, les images seront mises à jour automatiquement :

- **GitHub Actions** : Tous les jours à **3h UTC** (5h heure de Paris)
- **Vercel Cron** : Tous les jours à **2h UTC** (4h heure de Paris)

⚠️ **Note** : Vous avez deux systèmes qui font la même chose. Vous pouvez :
- Garder les deux (redondance)
- Ou désactiver l'un des deux

---

## 🔧 Désactiver un Système

### Désactiver GitHub Actions

Commentez le `schedule` dans `.github/workflows/update-images.yml` :

```yaml
on:
  workflow_dispatch:
  # schedule:
  #   - cron: '0 3 * * *'
```

### Désactiver Vercel Cron

Supprimez la section `crons` de `vercel.json` ou commentez-la.

---

## ✅ Checklist Finale

- [ ] Edge Function Supabase déployée
- [ ] Secrets GitHub configurés (`SUPABASE_URL`, `SUPABASE_ANON_KEY`)
- [ ] Variable `CRON_SECRET` ajoutée dans Vercel (si vous utilisez Vercel Cron)
- [ ] Edge Function testée depuis Supabase Dashboard
- [ ] GitHub Actions testée manuellement
- [ ] Vérification que les images sont bien mises à jour dans la table `courses`

---

## 🆘 Problèmes Courants

### "Missing Supabase credentials"
- Vérifiez que les secrets sont bien configurés dans GitHub
- Vérifiez l'orthographe : `SUPABASE_URL` et `SUPABASE_ANON_KEY`

### "Edge Function not found"
- Vérifiez que la fonction est bien déployée dans Supabase
- Vérifiez que le nom est exactement `update-course-images`

### "Unauthorized" dans Vercel Cron
- Vérifiez que `CRON_SECRET` est bien configuré dans Vercel
- Vérifiez que le header `Authorization: Bearer ...` est correct

---

## 📚 Documentation

- **Edge Function** : Voir `SETUP_EDGE_FUNCTION_IMAGES.md`
- **Vercel Webhooks** : Voir `SETUP_WEBHOOKS_VERCEL.md`
- **GitHub Actions** : Voir `SETUP_GITHUB_ACTIONS.md`

---

## 🎯 Résultat Final

Une fois tout configuré, les images des cours seront mises à jour automatiquement **tous les jours**, sans intervention manuelle ! 🎉
