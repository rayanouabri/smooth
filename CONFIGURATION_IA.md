# 🤖 Configuration de l'IA Sophie

## Problème résolu ✅

L'assistant IA ne fonctionnait pas car **aucune clé API n'était configurée**.

## Solution rapide

### 1. Obtenez une clé API Gemini (GRATUIT)

1. Allez sur : **https://makersuite.google.com/app/apikey**
2. Connectez-vous avec votre compte Google
3. Cliquez sur "Create API Key"
4. Copiez votre clé (format: `AIzaSy...`)

### 2. Configurez la clé API

Le fichier `.env.local` a été créé avec une clé de démonstration. **Remplacez-la par la vôtre** :

```bash
# .env.local
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Google Gemini API (Gratuit - 60 requêtes/minute)
VITE_GEMINI_API_KEY=VOTRE_CLE_ICI
```

### 3. Redémarrez le serveur

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez :
npm run dev
```

## Vérification

1. Ouvrez votre application
2. Cliquez sur le bouton de chat (en bas à droite)
3. Envoyez un message de test : "Bonjour Sophie !"
4. Si ça marche, vous verrez une réponse 🎉

## Si ça ne marche toujours pas

### Vérifiez dans la console du navigateur (F12)

Vous devriez voir :
- ✅ `🤖 Appel à Gemini API...`
- ✅ `✅ Réponse Gemini reçue`

Si vous voyez des erreurs :

#### Erreur "API key not valid"
➜ Votre clé est invalide. Vérifiez que vous avez copié la clé complète depuis Google AI Studio.

#### Erreur "quota exceeded"
➜ Vous avez dépassé la limite gratuite (60 requêtes/minute). Attendez 1 minute.

#### Erreur "Configuration IA manquante"
➜ Le fichier `.env.local` n'est pas bien configuré ou le serveur n'a pas été redémarré.

## Caractéristiques de l'IA

- **Modèle** : Gemini 1.5 Flash (gratuit, rapide, intelligent)
- **Limite gratuite** : 60 requêtes/minute, 1500 requêtes/jour
- **Capacités** : 
  - Conseils sur les démarches administratives françaises
  - Aide sur les cours et formations
  - Questions sur la culture française
  - Assistance professionnelle (CV, entretiens)

## Alternative : OpenAI (Payant)

Si vous préférez utiliser GPT-4 :

```bash
# .env.local
VITE_OPENAI_API_KEY=sk-...
```

**Coût** : ~$0.03 par 1000 tokens (environ 750 mots)

## Déploiement sur Vercel

N'oubliez pas d'ajouter votre clé API dans les variables d'environnement Vercel :

1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez : `VITE_GEMINI_API_KEY` = `votre_clé`
4. Redéployez

## Améliorations apportées

✅ Utilisation de Gemini 1.5 Flash (plus rapide et gratuit)
✅ Meilleure gestion des erreurs avec messages clairs
✅ Logs de débogage dans la console
✅ Messages d'erreur personnalisés dans le chat
✅ Configuration des safety settings pour éviter les blocages
✅ Augmentation des tokens (4096 au lieu de 2048)

## Support

En cas de problème, contactez : **contact@franceprepacademy.fr**
