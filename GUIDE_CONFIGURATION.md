# 📋 Guide de Configuration

## 1. ⚙️ Ajouter la clé Gemini dans .env (Local)

### Étapes :
1. Dans votre projet local, créez ou ouvrez le fichier `.env` à la racine du projet
2. Ajoutez cette ligne :
   ```
   VITE_GEMINI_API_KEY=AIzaSyAaGBXX1LHCMeiFSkfmtCJO_p3LQCSYh9o
   ```
3. Vérifiez que votre `.env` contient aussi :
   ```
   VITE_SUPABASE_URL=votre_url_supabase
   VITE_SUPABASE_ANON_KEY=votre_cle_anon_supabase
   VITE_GEMINI_API_KEY=AIzaSyAaGBXX1LHCMeiFSkfmtCJO_p3LQCSYh9o
   ```
4. Redémarrez votre serveur de développement (`npm run dev`)

## 2. 🌐 Ajouter la clé Gemini sur Vercel

### Étapes :
1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Sélectionnez votre projet `smooth` (ou le nom de votre projet)
3. Allez dans **Settings** (Paramètres)
4. Cliquez sur **Environment Variables** (Variables d'environnement)
5. Cliquez sur **Add New** (Ajouter)
6. Remplissez :
   - **Name** : `VITE_GEMINI_API_KEY`
   - **Value** : `AIzaSyAaGBXX1LHCMeiFSkfmtCJO_p3LQCSYh9o`
   - **Environments** : Cochez Production, Preview, et Development
7. Cliquez sur **Save** (Enregistrer)
8. **Important** : Redéployez votre application pour que les variables soient prises en compte
   - Allez dans l'onglet **Deployments**
   - Cliquez sur les trois points (...) du dernier déploiement
   - Cliquez sur **Redeploy**

## 3. 💾 Exécuter seed-complete-data.sql dans Supabase

### Étapes :
1. Allez sur [supabase.com](https://supabase.com) et connectez-vous
2. Sélectionnez votre projet
3. Dans le menu de gauche, cliquez sur **SQL Editor** (Éditeur SQL)
4. Cliquez sur **New Query** (Nouvelle requête)
5. **Option A - Copier-coller** :
   - Ouvrez le fichier `seed-complete-data.sql` depuis votre projet
   - Copiez tout le contenu (Ctrl+A puis Ctrl+C)
   - Collez-le dans l'éditeur SQL de Supabase (Ctrl+V)
6. **Option B - Upload** :
   - Cliquez sur l'icône de fichier ou "Upload"
   - Sélectionnez `seed-complete-data.sql`
7. Vérifiez que vous êtes dans le bon projet
8. Cliquez sur **Run** (Exécuter) ou appuyez sur Ctrl+Enter
9. Attendez que l'exécution se termine (peut prendre 1-2 minutes)
10. Vérifiez les résultats :
    - Vous devriez voir "Success. No rows returned" ou "Success"
    - Vérifiez dans **Table Editor** que les tables `courses`, `lessons`, `forum_posts`, `forum_replies` contiennent des données

### ⚠️ Attention :
- Si vous avez déjà des données, vous pouvez avoir des erreurs de clés dupliquées
- Dans ce cas, vous pouvez :
  - Soit vider les tables d'abord (DELETE FROM courses; DELETE FROM lessons; etc.)
  - Soit utiliser `INSERT ... ON CONFLICT DO NOTHING` (mais ce n'est pas dans le script actuel)

## 4. 🧪 Tester les fonctionnalités

### Tester le ChatBot :
1. Lancez votre application (`npm run dev`)
2. Sur n'importe quelle page, cliquez sur l'icône de chat en bas à droite
3. Posez une question, par exemple : "Comment faire ma demande CAF ?"
4. Vérifiez que la réponse vient de Gemini (réponse cohérente et pertinente)

### Tester les traductions :
1. Dans le menu en haut à droite, cliquez sur le drapeau
2. Sélectionnez une langue (ex: English 🇬🇧)
3. Vérifiez que le menu se traduit
4. Naviguez sur les différentes pages et vérifiez les traductions

### Tester l'affichage Premium :
1. Allez sur la page **Cours** (`/courses`)
2. Cherchez un cours avec le badge **⭐ PREMIUM**
3. Cliquez sur ce cours
4. Vérifiez que sur la page de détail, il affiche "⭐ PREMIUM - Abonnement Premium requis" au lieu d'un prix

## ✅ Vérification finale

### Checklist :
- [ ] Clé Gemini ajoutée dans `.env` local
- [ ] Clé Gemini ajoutée dans Vercel et redéployé
- [ ] SQL exécuté dans Supabase avec succès
- [ ] ChatBot répond correctement
- [ ] Traductions fonctionnent dans le menu
- [ ] Affichage Premium/Gratuit correct
- [ ] Les cours affichent le bon nombre de leçons (8-12)

## 🆘 En cas de problème

### ChatBot ne répond pas :
- Vérifiez la console du navigateur (F12) pour les erreurs
- Vérifiez que la clé Gemini est correcte dans `.env` et Vercel
- Vérifiez que vous avez redémarré le serveur après l'ajout dans `.env`

### Traductions ne fonctionnent pas :
- Vérifiez que `LanguageProvider` est bien dans `App.jsx`
- Vérifiez la console pour les erreurs
- Vérifiez que `src/utils/i18n.js` existe

### SQL ne s'exécute pas :
- Vérifiez que vous êtes dans le bon projet Supabase
- Vérifiez les erreurs dans l'éditeur SQL
- Essayez d'exécuter par petits morceaux si le fichier est trop gros

