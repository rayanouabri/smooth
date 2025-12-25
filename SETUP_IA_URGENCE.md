# 🚨 CONFIGURATION REQUISE - IA Sophie

## ⚠️ Votre IA ne fonctionne pas car elle n'est pas configurée !

### 🔧 Solution en 3 étapes (5 minutes)

#### 1️⃣ Obtenez une clé API Gemini (GRATUIT)

1. **Allez sur** : https://aistudio.google.com/app/apikey
2. **Connectez-vous** avec votre compte Google
3. **Cliquez** sur "Create API Key" (ou "Get API Key")
4. **Copiez** votre clé (format: `AIzaSy...`)

> ✅ **C'est 100% GRATUIT** (60 requêtes/minute, 1500/jour)

#### 2️⃣ Configurez la clé dans votre projet

Ouvrez le fichier `.env.local` et remplacez `VOTRE_CLE_ICI` par votre vraie clé :

```bash
# .env.local
VITE_GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

#### 3️⃣ Redémarrez le serveur

```bash
# Dans le terminal, arrêtez le serveur (Ctrl+C)
# Puis relancez :
npm run dev
```

---

## ✅ Tester que ça fonctionne

### Test rapide avec Node.js

Remplacez `VOTRE_CLE` par votre vraie clé et exécutez :

```bash
node test-ia.js
```

Si vous voyez un message de bienvenue en français, **c'est bon !** 🎉

### Test dans l'application

1. Ouvrez votre navigateur
2. Cliquez sur l'icône de chat (en bas à droite) 💬
3. Envoyez : "Bonjour Sophie !"
4. Vous devriez recevoir une réponse amicale

---

## 📊 Ce qui a été corrigé

✅ **Fichier `.env.local` créé** avec les configurations nécessaires  
✅ **Code mis à jour** pour utiliser Gemini 1.5 Flash (le plus rapide)  
✅ **Gestion d'erreurs améliorée** avec messages clairs  
✅ **Logs de débogage** ajoutés (ouvrez la console navigateur F12)  
✅ **Configuration safety settings** pour éviter les blocages  
✅ **Augmentation des tokens** (4096 au lieu de 2048)

---

## 🐛 Problèmes fréquents

### "Configuration IA manquante"
➜ Vous n'avez pas mis votre clé API ou le serveur n'a pas été redémarré

### "API key not valid"
➜ Votre clé est invalide. Vérifiez que vous l'avez bien copiée depuis Google AI Studio

### "quota exceeded"
➜ Limite gratuite atteinte (60/minute). Attendez 1 minute et réessayez

### "Failed to fetch" ou erreur réseau
➜ Problème de connexion internet ou firewall qui bloque Google APIs

---

## 🚀 Pour le déploiement sur Vercel

**N'oubliez pas** d'ajouter votre clé dans Vercel :

1. Allez dans votre projet Vercel
2. **Settings** → **Environment Variables**
3. Ajoutez :
   - **Name** : `VITE_GEMINI_API_KEY`
   - **Value** : `votre_clé_api`
4. **Redéployez** votre site

---

## 💡 Alternative : OpenAI GPT-4 (Payant)

Si vous préférez utiliser ChatGPT (GPT-4) :

```bash
# .env.local
VITE_OPENAI_API_KEY=sk-...
```

**Coût** : ~$0.03 par 1000 tokens (environ 750 mots)

Le code détectera automatiquement quelle API utiliser.

---

## 📞 Support

- **Email** : contact@franceprepacademy.fr
- **Documentation** : [CONFIGURATION_IA.md](./CONFIGURATION_IA.md)

---

## 🎯 Capacités de Sophie (l'IA)

Une fois configurée, Sophie peut vous aider avec :

- 📋 **Démarches administratives** (CAF, CPAM, carte Vitale, titre de séjour...)
- 🎓 **Cours et formations** disponibles sur la plateforme
- 🇫🇷 **Culture française** et codes sociaux
- 💼 **Insertion professionnelle** (CV, entretiens, recherche d'emploi)
- 🏠 **Vie quotidienne** (logement, banque, santé, transports)

---

**Dernière mise à jour** : 25 décembre 2024  
**Version** : 1.0
