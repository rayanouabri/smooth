# 🔧 Configuration de l'API Gemini sur Vercel

## Problème
Si le chatbot affiche une erreur "Unknown error" ou une erreur 500, c'est probablement que la clé API Gemini n'est pas configurée dans Vercel.

## Solution

### 1. Obtenir votre clé API Gemini

1. Allez sur [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Connectez-vous avec votre compte Google
3. Cliquez sur "Create API Key"
4. Copiez la clé (elle commence par `AIza...`)

### 2. Configurer la clé dans Vercel

1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet `franceprepacademy` (ou le nom de votre projet)
3. Allez dans **Settings** → **Environment Variables**
4. Cliquez sur **Add New**
5. Ajoutez :
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Votre clé API (ex: `AIza...`)
   - **Environment**: Sélectionnez **Production**, **Preview**, et **Development**
6. Cliquez sur **Save**

### 3. Redéployer l'application

Après avoir ajouté la variable d'environnement, vous devez redéployer :

1. Dans Vercel, allez dans **Deployments**
2. Cliquez sur les trois points (⋯) du dernier déploiement
3. Sélectionnez **Redeploy**

OU

Utilisez la commande Git :
```bash
git commit --allow-empty -m "Trigger redeploy for GEMINI_API_KEY"
git push
```

### 4. Vérifier que ça fonctionne

1. Attendez que le déploiement soit terminé
2. Ouvrez votre site
3. Ouvrez le chatbot (Sophie)
4. Posez une question
5. Si ça fonctionne, vous devriez recevoir une réponse de Sophie

## Dépannage

### Erreur "GEMINI_API_KEY not configured"
- Vérifiez que la variable est bien nommée `GEMINI_API_KEY` (exactement, en majuscules)
- Vérifiez que vous avez redéployé après avoir ajouté la variable
- Vérifiez que la variable est disponible pour l'environnement (Production/Preview/Development)

### Erreur 401/403 "Invalid API key"
- Vérifiez que votre clé API Gemini est valide
- Vérifiez que vous avez copié la clé complète (sans espaces)
- Essayez de créer une nouvelle clé API

### Erreur 429 "Rate limit exceeded"
- Vous avez dépassé le quota gratuit de Gemini
- Attendez quelques minutes avant de réessayer
- Ou passez à un plan payant sur Google AI Studio

## Alternative : Utiliser OpenAI

Si vous préférez utiliser OpenAI au lieu de Gemini :

1. Obtenez une clé API OpenAI sur [platform.openai.com](https://platform.openai.com/api-keys)
2. Ajoutez dans Vercel :
   - **Name**: `VITE_OPENAI_API_KEY`
   - **Value**: Votre clé OpenAI (commence par `sk-...`)
3. Le système utilisera automatiquement OpenAI en fallback si Gemini n'est pas configuré

## Support

Si le problème persiste, contactez : contact@franceprepacademy.fr

