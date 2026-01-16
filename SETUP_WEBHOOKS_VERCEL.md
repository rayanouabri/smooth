# 🚀 Configuration : Webhooks Vercel pour Automatisation

## 📋 Objectif

Configurer des webhooks Vercel pour automatiser des tâches après chaque déploiement ou sur un calendrier.

---

## 🔧 Méthode 1 : Webhook Après Déploiement

### 1.1 Créer un Webhook dans Vercel

1. Allez sur **Vercel Dashboard** → Votre projet
2. Allez dans **Settings** → **Webhooks**
3. Cliquez sur **"Create Webhook"**

### 1.2 Configurer le Webhook

1. **Name** : `Update Course Images`
2. **Events** : Sélectionnez **"Deployment Created"**
3. **URL** : L'URL de votre Supabase Edge Function :
   ```
   https://[VOTRE_PROJECT_REF].supabase.co/functions/v1/update-course-images
   ```
   Remplacez `[VOTRE_PROJECT_REF]` par votre référence de projet Supabase

4. **Secret** (optionnel) : Un secret pour sécuriser le webhook
5. Cliquez sur **"Create Webhook"**

---

## 🔧 Méthode 2 : Cron Jobs Vercel (Automatisation Programmable)

### 2.1 Créer un fichier `api/cron/update-images.js`

Créez un nouveau fichier dans votre projet :

```javascript
// api/cron/update-images.js
export default async function handler(req, res) {
  // Vérifier que c'est bien un appel cron (optionnel - sécurité)
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Appeler la Supabase Edge Function
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase credentials');
    }

    const response = await fetch(`${supabaseUrl}/functions/v1/update-course-images`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to update images');
    }

    return res.status(200).json({
      success: true,
      message: 'Course images updated successfully',
      data: data
    });
  } catch (error) {
    console.error('Cron job error:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
```

### 2.2 Configurer le Cron dans `vercel.json`

Ajoutez cette section dans votre `vercel.json` :

```json
{
  "crons": [
    {
      "path": "/api/cron/update-images",
      "schedule": "0 2 * * *"
    }
  ]
}
```

**Explication du schedule** :
- `0 2 * * *` = Tous les jours à 2h du matin
- `0 */6 * * *` = Toutes les 6 heures
- `0 0 * * 0` = Tous les dimanches à minuit

### 2.3 Ajouter la variable d'environnement

1. **Vercel Dashboard** → Votre projet → **Settings** → **Environment Variables**
2. Ajoutez :
   - **Name** : `CRON_SECRET`
   - **Value** : Une chaîne secrète (ex: `votre-secret-super-securise`)
   - **Environments** : Production (et Preview si besoin)

---

## 🔧 Méthode 3 : Webhook Externe (Zapier, n8n, etc.)

### 3.1 Créer un Endpoint Public

Créez `api/webhook/update-images.js` :

```javascript
// api/webhook/update-images.js
export default async function handler(req, res) {
  // Vérifier le secret (sécurité)
  const secret = req.headers['x-webhook-secret'];
  if (secret !== process.env.WEBHOOK_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

    const response = await fetch(`${supabaseUrl}/functions/v1/update-course-images`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return res.status(200).json({
      success: true,
      message: 'Images updated successfully',
      data: data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
```

### 3.2 Utiliser avec Zapier/n8n

1. Dans Zapier/n8n, créez un nouveau workflow
2. Déclencheur : Schedule (tous les jours, toutes les semaines, etc.)
3. Action : HTTP Request
   - **URL** : `https://votre-domaine.vercel.app/api/webhook/update-images`
   - **Method** : POST
   - **Headers** : 
     - `x-webhook-secret: votre-secret`
   - **Body** : (vide ou JSON)

---

## 📝 Mise à Jour de `vercel.json`

Voici un exemple complet de `vercel.json` avec les crons :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "functions": {
    "api/**/*.js": {
      "maxDuration": 30,
      "memory": 512
    }
  },
  "crons": [
    {
      "path": "/api/cron/update-images",
      "schedule": "0 2 * * *"
    }
  ],
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ]
}
```

---

## ✅ Vérification

### Tester le Cron Job

1. Attendez l'heure programmée, OU
2. Déclenchez manuellement :
   ```bash
   curl -X POST https://votre-domaine.vercel.app/api/cron/update-images \
     -H "Authorization: Bearer votre-cron-secret"
   ```

### Vérifier les Logs

1. **Vercel Dashboard** → **Deployments**
2. Cliquez sur le dernier déploiement
3. Allez dans **Functions** ou **Logs**
4. Recherchez les logs du cron job

---

## 🔒 Sécurité

⚠️ **IMPORTANT** : Utilisez toujours un secret pour protéger vos webhooks/crons :

1. Ne commitez jamais les secrets dans Git
2. Utilisez les **Environment Variables** de Vercel
3. Vérifiez toujours le secret dans votre code

---

## 🆘 Dépannage

### Le cron ne s'exécute pas
- Vérifiez la syntaxe du schedule (format cron)
- Vérifiez que le fichier est bien dans `api/cron/`
- Vérifiez les logs dans Vercel

### Erreur 401 Unauthorized
- Vérifiez que `CRON_SECRET` est bien configuré dans Vercel
- Vérifiez que le header `Authorization` est correct

### La fonction Supabase n'est pas appelée
- Vérifiez l'URL de la Supabase Edge Function
- Vérifiez que la fonction est bien déployée dans Supabase
