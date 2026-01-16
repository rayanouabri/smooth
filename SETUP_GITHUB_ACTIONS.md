# 🚀 Configuration : GitHub Actions pour Automatisation

## 📋 Objectif

Configurer GitHub Actions pour automatiser des tâches (mise à jour d'images, tests, déploiements, etc.) à chaque push ou selon un calendrier.

---

## 🔧 Étape 1 : Créer le Dossier `.github/workflows`

Dans la racine de votre projet, créez :
```
.github/
  workflows/
    update-images.yml
```

---

## 📝 Étape 2 : Créer le Workflow `update-images.yml`

Créez le fichier `.github/workflows/update-images.yml` :

```yaml
name: Update Course Images

on:
  # Déclencher manuellement depuis GitHub
  workflow_dispatch:
  
  # Déclencher automatiquement tous les jours à 3h du matin UTC
  schedule:
    - cron: '0 3 * * *'
  
  # Déclencher après chaque push sur main (optionnel)
  push:
    branches:
      - main
    paths:
      - 'src/pages/Courses.jsx'
      - 'assign_category_images.sql'
      - '.github/workflows/update-images.yml'

jobs:
  update-images:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Update course images via Supabase Edge Function
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
        run: |
          echo "Calling Supabase Edge Function to update course images..."
          
          response=$(curl -X POST \
            "$SUPABASE_URL/functions/v1/update-course-images" \
            -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
            -H "Content-Type: application/json")
          
          echo "Response: $response"
          
          # Vérifier si la réponse contient "success"
          if echo "$response" | grep -q "success"; then
            echo "✅ Course images updated successfully"
            exit 0
          else
            echo "❌ Failed to update course images"
            echo "$response"
            exit 1
          fi

      - name: Notify on success
        if: success()
        run: |
          echo "✅ Course images updated successfully!"
          # Vous pouvez ajouter une notification Slack, Discord, Email, etc.

      - name: Notify on failure
        if: failure()
        run: |
          echo "❌ Failed to update course images"
          # Vous pouvez ajouter une notification d'erreur
```

---

## 🔐 Étape 3 : Configurer les Secrets GitHub

### 3.1 Accéder aux Secrets

1. Allez sur votre **repository GitHub**
2. Cliquez sur **Settings** (en haut)
3. Dans le menu de gauche, allez dans **Secrets and variables** → **Actions**

### 3.2 Ajouter les Secrets

Cliquez sur **"New repository secret"** et ajoutez :

1. **Name** : `SUPABASE_URL`
   - **Value** : Votre URL Supabase (ex: `https://xxxxx.supabase.co`)

2. **Name** : `SUPABASE_ANON_KEY`
   - **Value** : Votre clé anonyme Supabase (trouvable dans Supabase Dashboard → Settings → API)

3. (Optionnel) **Name** : `SUPABASE_SERVICE_ROLE_KEY`
   - **Value** : Votre service role key (pour plus de permissions)

---

## 🔧 Étape 4 : Workflow Complet avec Tests (Optionnel)

Voici un workflow plus complet qui inclut des tests :

```yaml
name: Update Course Images & Deploy

on:
  workflow_dispatch:
  schedule:
    - cron: '0 3 * * *'
  push:
    branches:
      - main

jobs:
  update-images:
    runs-on: ubuntu-latest
    name: Update Course Images
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Update course images
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
        run: |
          curl -X POST \
            "$SUPABASE_URL/functions/v1/update-course-images" \
            -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
            -H "Content-Type: application/json"

  test:
    runs-on: ubuntu-latest
    name: Run Tests
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint || true  # Continue même si le linter échoue

      # Ajoutez vos tests ici si vous en avez
      # - name: Run tests
      #   run: npm test

  deploy:
    needs: [update-images, test]
    runs-on: ubuntu-latest
    name: Deploy to Vercel (automatic)
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      # Vercel se déploie automatiquement via GitHub integration
      # Cette étape est optionnelle si vous avez déjà configuré Vercel
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🧪 Étape 5 : Tester le Workflow

### 5.1 Test Manuel

1. Allez sur votre repository GitHub
2. Cliquez sur l'onglet **Actions**
3. Cliquez sur **"Update Course Images"** (ou le nom de votre workflow)
4. Cliquez sur **"Run workflow"** → **"Run workflow"**
5. Attendez l'exécution et vérifiez les logs

### 5.2 Test Automatique

1. Faites un commit et push sur `main` :
   ```bash
   git add .
   git commit -m "Test GitHub Actions"
   git push origin main
   ```
2. Allez dans **Actions** sur GitHub pour voir le workflow s'exécuter

---

## 📅 Exemples de Schedules Cron

```yaml
schedule:
  # Tous les jours à 3h UTC
  - cron: '0 3 * * *'
  
  # Toutes les 6 heures
  - cron: '0 */6 * * *'
  
  # Tous les lundis à 9h UTC
  - cron: '0 9 * * 1'
  
  # Le 1er de chaque mois à minuit
  - cron: '0 0 1 * *'
```

**Note** : Les heures sont en UTC (temps universel)

---

## 🔔 Étape 6 : Notifications (Optionnel)

### Ajouter des notifications Slack

```yaml
- name: Notify Slack
  if: always()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: 'Course images update completed'
    webhook_url: ${{ secrets.SLACK_WEBHOOK_URL }}
```

### Ajouter des notifications Email

Utilisez un service comme SendGrid, Mailgun, ou simplement un webhook vers votre API.

---

## ✅ Checklist de Configuration

- [ ] Dossier `.github/workflows/` créé
- [ ] Fichier `update-images.yml` créé
- [ ] Secrets GitHub configurés (`SUPABASE_URL`, `SUPABASE_ANON_KEY`)
- [ ] Edge Function Supabase créée et déployée
- [ ] Workflow testé manuellement depuis GitHub
- [ ] Schedule configuré (si besoin)

---

## 🆘 Dépannage

### Le workflow ne s'exécute pas
- Vérifiez la syntaxe YAML (indentation importante)
- Vérifiez que le fichier est dans `.github/workflows/`
- Vérifiez les logs dans l'onglet **Actions**

### Erreur : "Secret not found"
- Vérifiez que les secrets sont bien configurés dans **Settings** → **Secrets and variables** → **Actions**
- Vérifiez l'orthographe des noms de secrets

### La fonction Supabase n'est pas appelée
- Vérifiez que `SUPABASE_URL` et `SUPABASE_ANON_KEY` sont corrects
- Vérifiez que l'Edge Function est bien déployée dans Supabase

---

## 📚 Ressources

- [Documentation GitHub Actions](https://docs.github.com/en/actions)
- [Syntaxe Cron](https://crontab.guru/)
- [Actions Marketplace](https://github.com/marketplace?type=actions)
