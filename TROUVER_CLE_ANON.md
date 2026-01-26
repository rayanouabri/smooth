# 🔑 Comment trouver votre clé ANON dans Supabase

## 📍 Où trouver la clé ANON

1. **Allez dans votre projet Supabase**
   - Dashboard : [https://app.supabase.com](https://app.supabase.com)
   - Sélectionnez votre projet

2. **Allez dans Settings → API**
   - Dans le menu de gauche, cliquez sur **Settings** (⚙️)
   - Cliquez sur **API**

3. **Trouvez la section "Project API keys"**
   - Vous verrez plusieurs clés :
     - **`anon` `public`** ← **C'EST CELLE-CI QU'IL FAUT UTILISER** ✅
     - **`service_role` `secret`** ← Ne pas utiliser (trop sensible)

4. **Copiez la clé `anon` `public`**
   - Elle commence par `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - C'est une longue chaîne de caractères (JWT token)

## 📝 Exemple visuel

Dans Supabase Dashboard → Settings → API, vous verrez :

```
Project API keys

┌─────────────────────────────────────────────────────────┐
│ anon        public                                      │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBh... │ ← COPIEZ CECI
│ [Reveal] [Copy]                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ service_role    secret                                   │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBh... │ ← NE PAS UTILISER
│ [Reveal] [Copy]                                         │
└─────────────────────────────────────────────────────────┘
```

## ✅ Utilisation dans le script SQL

Une fois que vous avez copié la clé `anon`, remplacez dans le fichier SQL :

```sql
-- AVANT (ligne 69)
supabase_anon_key := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.YOUR_ANON_KEY_HERE';

-- APRÈS (remplacez par votre vraie clé)
supabase_anon_key := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMjY0MDAsImV4cCI6MjA1MDYwMjQwMH0.VOTRE_CLE_COMPLETE_ICI';
```

## ⚠️ Important

- ✅ **Utilisez la clé `anon` `public`** - C'est la bonne clé pour appeler les Edge Functions
- ❌ **Ne partagez JAMAIS la clé `service_role`** - Elle donne un accès complet à votre base de données
- 🔒 La clé `anon` est publique et peut être utilisée côté client, c'est normal

## 🎯 Résumé

1. Supabase Dashboard → Settings → API
2. Trouvez la clé **`anon` `public`**
3. Cliquez sur **[Copy]**
4. Collez-la dans le script SQL à la place de `YOUR_ANON_KEY_HERE`

C'est tout ! 🎉
