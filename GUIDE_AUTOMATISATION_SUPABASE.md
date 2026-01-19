# 🚀 Guide Complet: Automatisation Supabase

Ce guide explique comment configurer le système pour que je puisse exécuter automatiquement des scripts SQL sur Supabase.

## 🎯 Objectif

Permettre l'exécution automatique de scripts SQL (comme `create_ai_messages_table.sql`) sans avoir à copier-coller manuellement dans Supabase Dashboard.

## 📋 Solution Recommandée: Supabase CLI

### Étape 1: Installer Supabase CLI

```bash
# Windows (PowerShell)
npm install -g supabase

# Vérifier l'installation
supabase --version
```

### Étape 2: Se connecter à Supabase

```bash
supabase login
```

Cela ouvrira votre navigateur pour vous authentifier avec votre compte Supabase.

### Étape 3: Lier votre projet

1. **Trouvez votre Project Reference ID:**
   - Allez dans [Supabase Dashboard](https://app.supabase.com)
   - Sélectionnez votre projet
   - Allez dans **Settings** → **General**
   - Copiez le **Reference ID** (ex: `xkecqmsgvjjtujvlotpm`)

2. **Liez le projet:**
```bash
supabase link --project-ref xkecqmsgvjjtujvlotpm
```

Remplacez `xkecqmsgvjjtujvlotpm` par votre propre Reference ID.

### Étape 4: Initialiser les migrations (si nécessaire)

```bash
# Créer le dossier supabase/migrations/ si il n'existe pas
mkdir -p supabase/migrations
```

## 🎯 Utilisation

Une fois configuré, pour exécuter un script SQL:

```bash
node scripts/run-sql-cli.js create_ai_messages_table.sql
```

Le script va:
1. ✅ Lire le fichier SQL
2. ✅ Créer une migration versionnée dans `supabase/migrations/`
3. ✅ Appliquer la migration sur votre base de données
4. ✅ Afficher le résultat

## 📝 Exemple Complet

```bash
# 1. Je crée le fichier SQL
# create_ai_messages_table.sql

# 2. Vous exécutez:
node scripts/run-sql-cli.js create_ai_messages_table.sql

# 3. Le script affiche:
# 📖 Lecture du fichier: create_ai_messages_table.sql
# ✅ Supabase CLI détecté
# ✅ Projet lié
# 📝 Création de la migration: 2024-01-15T10-30-00_create_ai_messages_table
# 🚀 Application de la migration...
# ✅ Migration appliquée avec succès !
```

## 🔄 Workflow Recommandé

1. **Je crée le fichier SQL** (ex: `create_ai_messages_table.sql`)
2. **Vous exécutez:** `node scripts/run-sql-cli.js create_ai_messages_table.sql`
3. **Le script:**
   - Crée une migration dans `supabase/migrations/`
   - Applique la migration sur votre base de données
   - Sauvegarde le fichier pour versioning Git

## ⚠️ Limitations

### Pourquoi pas directement via API?

Supabase ne permet **pas** d'exécuter du SQL arbitraire via l'API REST pour des raisons de sécurité. Les options sont:

1. ✅ **Supabase CLI** (recommandé) - Exécute les migrations localement
2. ✅ **Supabase Dashboard** - SQL Editor manuel
3. ❌ **API REST** - Non supporté pour SQL arbitraire

### Alternative: Fonction PostgreSQL

Si vous voulez vraiment exécuter via API, vous pouvez créer une fonction PostgreSQL:

```sql
CREATE OR REPLACE FUNCTION exec_sql(sql_text TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  EXECUTE sql_text;
  RETURN 'Success';
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'Error: ' || SQLERRM;
END;
$$;
```

Puis appeler cette fonction via l'API. **⚠️ Attention:** C'est moins sécurisé et non recommandé.

## 🔒 Sécurité

- ✅ Les migrations sont versionnées dans Git
- ✅ Utilisez toujours Supabase CLI en local (pas de credentials dans le code)
- ❌ Ne commitez jamais `.env.local` ou les Service Role Keys
- ✅ Les migrations sont tracées dans `supabase/migrations/`

## ❓ Problèmes Courants

### "Supabase CLI n'est pas installé"
```bash
npm install -g supabase
```

### "Projet non lié"
```bash
# Vérifiez que vous êtes connecté
supabase login

# Liez votre projet
supabase link --project-ref <votre-project-ref>
```

### "Erreur: project not found"
Vérifiez que le Reference ID est correct dans Supabase Dashboard → Settings → General.

### "Permission denied"
Assurez-vous d'être connecté avec un compte qui a accès au projet.

## 📚 Fichiers Créés

- `scripts/run-sql-cli.js` - Script principal pour exécuter les migrations
- `scripts/supabase-runner.js` - Alternative via API (limité)
- `scripts/setup-supabase-cli.md` - Guide de configuration détaillé
- `scripts/README.md` - Documentation des scripts

## 🎉 Résultat

Une fois configuré, vous pouvez simplement dire:

> "Exécute le script create_ai_messages_table.sql"

Et je pourrai vous donner la commande exacte à exécuter, ou si vous avez configuré Supabase CLI, vous pouvez l'exécuter directement avec:

```bash
node scripts/run-sql-cli.js create_ai_messages_table.sql
```

## 📞 Support

Si vous rencontrez des problèmes:
1. Vérifiez que Supabase CLI est installé: `supabase --version`
2. Vérifiez que vous êtes connecté: `supabase projects list`
3. Vérifiez que le projet est lié: `supabase status`
