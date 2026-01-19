# ⚠️ IMPORTANT: Application manuelle du trigger SQL

Le trigger SQL `create_user_profiles_trigger.sql` doit être appliqué manuellement dans Supabase.

## Étapes pour appliquer le trigger :

1. **Ouvrir Supabase Dashboard**
   - Aller sur https://supabase.com/dashboard
   - Sélectionner votre projet

2. **Ouvrir SQL Editor**
   - Cliquer sur "SQL Editor" dans le menu de gauche

3. **Copier et exécuter le contenu du fichier `create_user_profiles_trigger.sql`**
   - Copier tout le contenu du fichier
   - Coller dans l'éditeur SQL
   - Cliquer sur "Run" ou appuyer sur Ctrl+Enter

4. **Vérifier que le trigger a été créé**
   - Le message devrait indiquer que la fonction et le trigger ont été créés
   - Pour vérifier, exécuter : `SELECT * FROM pg_trigger WHERE tgname = 'on_auth_user_created';`

## Ce que fait ce trigger :

- **S'exécute automatiquement** lorsque qu'un utilisateur est créé dans `auth.users`
- **Crée automatiquement** un profil correspondant dans `user_profiles`
- **Fonctionne pour TOUTES les méthodes d'inscription** :
  - Email/Password
  - OAuth (Google, etc.)
  - Magic Link
  - Toute autre méthode d'authentification Supabase

## Pourquoi c'est la bonne solution :

✅ **Côté serveur** : Le trigger s'exécute dans la base de données, garanti à chaque création d'utilisateur
✅ **Pas de dépendance client** : Fonctionne même si le code client a un bug
✅ **Recommandé par Supabase** : C'est la méthode officielle pour synchroniser `auth.users` avec `user_profiles`
✅ **Robuste** : ON CONFLICT DO NOTHING évite les erreurs si le profil existe déjà

## Alternative (si vous préférez) :

Vous pouvez aussi utiliser Supabase CLI :
```bash
supabase db push
```

Mais cela nécessite que les migrations locales soient synchronisées avec la base distante.
