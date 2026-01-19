# 🚀 Configuration Supabase CLI pour Automatisation

Ce guide vous permet de configurer Supabase CLI pour que je puisse exécuter des scripts SQL automatiquement.

## 📋 Étape 1: Installer Supabase CLI

```bash
# Windows (PowerShell)
npm install -g supabase

# Vérifier l'installation
supabase --version
```

## 🔐 Étape 2: Se connecter à Supabase

```bash
supabase login
```

Cela ouvrira votre navigateur pour vous authentifier.

## 🔗 Étape 3: Lier votre projet

1. **Trouvez votre Project Reference ID:**
   - Allez dans Supabase Dashboard
   - Settings → General
   - Copiez le **Reference ID** (ex: `xkecqmsgvjjtujvlotpm`)

2. **Liez le projet:**
```bash
supabase link --project-ref xkecqmsgvjjtujvlotpm
```

## 📁 Étape 4: Initialiser les migrations (si pas déjà fait)

```bash
supabase init
```

Cela crée un dossier `supabase/migrations/` si il n'existe pas.

## 🎯 Étape 5: Créer et exécuter une migration

### Méthode 1: Via CLI (Recommandé)

```bash
# Créer une nouvelle migration
supabase migration new create_ai_messages_table

# Éditer le fichier créé dans supabase/migrations/
# Copier le contenu de votre fichier SQL

# Appliquer la migration
supabase db push
```

### Méthode 2: Script automatique

J'ai créé `scripts/run-sql-cli.js` qui automatise ce processus.

## ✅ Vérification

Après chaque migration, vérifiez dans Supabase Dashboard → Table Editor que les tables sont créées.

## 🔄 Workflow Recommandé

1. Je crée le fichier SQL (ex: `create_ai_messages_table.sql`)
2. Vous exécutez: `node scripts/run-sql-cli.js create_ai_messages_table.sql`
3. Le script crée automatiquement la migration et l'applique

## 📝 Variables d'environnement

Créez un fichier `.env.local` avec:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key
```

**⚠️ Important:** Ne commitez jamais le `.env.local` !
