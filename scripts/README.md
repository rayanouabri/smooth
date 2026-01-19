# 🛠️ Scripts d'Automatisation Supabase

Ces scripts permettent d'exécuter automatiquement des fichiers SQL sur Supabase.

## 📋 Scripts Disponibles

### 1. `run-sql-cli.js` (Recommandé)
Exécute un fichier SQL via Supabase CLI.

**Prérequis:**
- Supabase CLI installé: `npm install -g supabase`
- Connecté: `supabase login`
- Projet lié: `supabase link --project-ref <ref>`

**Usage:**
```bash
node scripts/run-sql-cli.js create_ai_messages_table.sql
```

**Avantages:**
- ✅ Crée automatiquement une migration versionnée
- ✅ Applique la migration directement
- ✅ Gère les erreurs proprement
- ✅ Sauvegarde le fichier de migration

### 2. `supabase-runner.js`
Tentative d'exécution via API REST (limité).

**Limitation:** Supabase ne permet pas d'exécuter du SQL arbitraire via l'API REST.

### 3. `supabase-migrate.js`
Affiche les instructions pour utiliser Supabase CLI.

## 🚀 Configuration Rapide

### Étape 1: Installer Supabase CLI
```bash
npm install -g supabase
```

### Étape 2: Se connecter
```bash
supabase login
```

### Étape 3: Lier votre projet
```bash
# Trouvez votre project-ref dans: Supabase Dashboard → Settings → General
supabase link --project-ref xkecqmsgvjjtujvlotpm
```

### Étape 4: Exécuter un script SQL
```bash
node scripts/run-sql-cli.js create_ai_messages_table.sql
```

## 📝 Workflow Recommandé

1. **Je crée le fichier SQL** (ex: `create_ai_messages_table.sql`)
2. **Vous exécutez:** `node scripts/run-sql-cli.js create_ai_messages_table.sql`
3. **Le script:**
   - Crée une migration dans `supabase/migrations/`
   - Applique la migration sur votre base de données
   - Sauvegarde le fichier pour versioning

## 🔒 Sécurité

- Les migrations sont versionnées dans Git
- Utilisez toujours Supabase CLI en local (pas de credentials dans le code)
- Ne commitez jamais `.env.local` ou les Service Role Keys

## ❓ Problèmes Courants

### "Supabase CLI n'est pas installé"
```bash
npm install -g supabase
```

### "Projet non lié"
```bash
supabase login
supabase link --project-ref <votre-project-ref>
```

### "Erreur de permission"
Vérifiez que vous êtes bien connecté avec `supabase login`.

## 📚 Documentation

- [Supabase CLI Docs](https://supabase.com/docs/reference/cli)
- [Supabase Migrations](https://supabase.com/docs/guides/cli/local-development#database-migrations)
