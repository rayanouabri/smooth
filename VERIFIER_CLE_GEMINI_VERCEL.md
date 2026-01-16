# ✅ Vérifier et Redéployer la Clé Gemini sur Vercel

## 🔍 Problème : "API key expired"

Si vous voyez cette erreur après avoir ajouté la clé Gemini dans Vercel, c'est probablement parce que **l'application n'a pas été redéployée** après l'ajout de la variable d'environnement.

## 📋 Checklist de Vérification

### 1. ✅ Vérifier que la clé est bien ajoutée dans Vercel

1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Environment Variables**
4. Vérifiez que `GEMINI_API_KEY` est bien présent
5. Vérifiez que toutes les environnements sont cochés (Production, Preview, Development)

### 2. 🚀 REDÉPLOYER l'application (OBLIGATOIRE)

**⚠️ IMPORTANT :** Après avoir ajouté/modifié une variable d'environnement, vous DEVEZ redéployer !

**Méthode 1 : Via le Dashboard Vercel**
1. Allez dans **Deployments**
2. Trouvez le dernier déploiement
3. Cliquez sur les **3 points (...)** à droite
4. Sélectionnez **Redeploy**
5. Confirmez le redéploiement

**Méthode 2 : Via Git (Automatique)**
1. Faites un petit changement dans votre code (ou créez un commit vide)
2. Poussez sur GitHub : `git push`
3. Vercel redéploiera automatiquement avec les nouvelles variables

**Méthode 3 : Via la ligne de commande**
```bash
vercel --prod
```

### 3. ⏱️ Attendre le redéploiement

- Le redéploiement prend généralement 1-3 minutes
- Vérifiez le statut dans l'onglet **Deployments** de Vercel
- Attendez que le statut soit **Ready** (vert)

### 4. 🧪 Tester le chatbot

1. Rafraîchissez votre site web (Ctrl+F5 ou Cmd+Shift+R pour forcer le refresh)
2. Testez le chatbot
3. Si l'erreur persiste, continuez ci-dessous

---

## 🔧 Dépannage Avancé

### Vérifier que la clé est correcte

1. Vérifiez que votre clé Gemini :
   - Commence par `AIzaSy...`
   - N'a pas d'espaces avant/après
   - Est bien copiée en entier

2. Testez la clé directement avec curl :
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=VOTRE_CLE_ICI" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}'
```

### Vérifier les logs Vercel

1. Dans Vercel Dashboard → **Deployments**
2. Cliquez sur le dernier déploiement
3. Allez dans l'onglet **Functions** ou **Logs**
4. Recherchez les erreurs liées à `GEMINI_API_KEY`

### Vérifier que la clé n'a pas expiré

1. Allez sur [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Vérifiez que votre clé est active
3. Si elle a expiré, créez-en une nouvelle et remplacez-la dans Vercel

---

## 🎯 Résumé Rapide

1. ✅ Clé ajoutée dans Vercel Environment Variables
2. ✅ **REDÉPLOYER** l'application (c'est la partie souvent oubliée !)
3. ✅ Attendre que le déploiement soit terminé
4. ✅ Tester le chatbot avec un refresh forcé

---

## 💡 Astuce

Pour éviter d'oublier de redéployer à l'avenir, après avoir ajouté/modifié une variable d'environnement dans Vercel, créez un petit commit et poussez-le sur GitHub. Cela déclenchera automatiquement un redéploiement :

```bash
git commit --allow-empty -m "Trigger redeploy for new env vars"
git push
```
