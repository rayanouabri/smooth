# 🔑 Comment Trouver la SUPABASE_SERVICE_ROLE_KEY

## 📍 Où la Trouver

### Dans Supabase Dashboard :

1. **Allez dans votre projet Supabase**
   - Dashboard → Votre projet (FrancePrep Academy)

2. **Allez dans Settings → API**
   - Menu de gauche → **Settings** (⚙️)
   - Cliquez sur **API**

3. **Trouvez la section "Project API keys"**
   - Vous verrez plusieurs clés :
     - **`anon` `public`** : Clé publique (déjà utilisée dans le trigger)
     - **`service_role` `secret`** : ⚠️ **C'EST CELLE-CI QU'IL FAUT !**

4. **Copiez la clé `service_role`**
   - Cliquez sur l'icône 👁️ pour révéler la clé
   - **⚠️ ATTENTION** : Cette clé est SECRÈTE, ne la partagez JAMAIS publiquement !

## 🔒 Pourquoi Cette Clé ?

L'Edge Function `send-email-notification` a besoin de cette clé pour :
- Insérer des enregistrements dans la table `contact_notifications`
- Bypasser les règles RLS (Row Level Security) si nécessaire
- Accéder à toutes les tables avec des privilèges administrateur

## ⚠️ Sécurité

- **NE JAMAIS** exposer cette clé dans le code client
- **NE JAMAIS** la commiter dans Git
- **UNIQUEMENT** dans les secrets de l'Edge Function (Supabase Dashboard)

## 📝 Configuration dans l'Edge Function

Une fois que vous avez la clé :

1. **Supabase Dashboard** → **Edge Functions** → **send-email-notification**
2. **Settings** → **Secrets**
3. Ajoutez :
   ```
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.VOTRE_CLE_SERVICE_ROLE
   ```

## 🎯 Résumé

- **Clé `anon`** : Publique, utilisée dans le trigger PostgreSQL
- **Clé `service_role`** : Secrète, utilisée dans l'Edge Function pour les opérations admin

Les deux sont nécessaires pour que le système fonctionne complètement !
