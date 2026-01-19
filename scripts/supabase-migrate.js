/**
 * Migration Supabase via API REST
 * Exécute des scripts SQL en utilisant l'API Supabase Management
 * 
 * ⚠️  LIMITATION: Supabase ne permet pas d'exécuter du SQL arbitraire via l'API
 * Cette solution utilise des fonctions PostgreSQL pré-créées
 * 
 * Pour exécuter du SQL directement, utilisez:
 * 1. Supabase Dashboard → SQL Editor (manuel)
 * 2. Supabase CLI (recommandé)
 * 3. Créer une fonction PostgreSQL qui exécute le SQL
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('❌ Variables d\'environnement manquantes !');
  console.error('Créez .env.local avec VITE_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

/**
 * Créer une fonction PostgreSQL qui exécute du SQL dynamique
 * Cette fonction doit être créée une fois dans Supabase
 */
async function createExecSQLFunction() {
  const createFunctionSQL = `
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
  `;

  console.log('📝 Création de la fonction exec_sql...');
  console.log('⚠️  Cette fonction doit être créée manuellement dans Supabase SQL Editor');
  console.log('\nSQL à exécuter:');
  console.log('─'.repeat(60));
  console.log(createFunctionSQL);
  console.log('─'.repeat(60));
}

/**
 * Alternative: Exécuter via Supabase CLI
 */
async function showCLIInstructions(sqlFile) {
  console.log('\n📋 INSTRUCTIONS SUPABASE CLI:\n');
  console.log('1. Installer Supabase CLI:');
  console.log('   npm install -g supabase');
  console.log('');
  console.log('2. Se connecter:');
  console.log('   supabase login');
  console.log('');
  console.log('3. Lier votre projet:');
  console.log('   supabase link --project-ref votre-project-ref');
  console.log('   (Trouvez le project-ref dans Supabase Dashboard → Settings → General)');
  console.log('');
  console.log('4. Créer une migration:');
  console.log(`   supabase migration new ${sqlFile.replace('.sql', '')}`);
  console.log('');
  console.log('5. Copier le contenu de votre fichier SQL dans la migration');
  console.log('');
  console.log('6. Appliquer la migration:');
  console.log('   supabase db push');
}

async function main() {
  const sqlFile = process.argv[2];

  if (!sqlFile) {
    console.error('❌ Usage: node scripts/supabase-migrate.js <fichier.sql>');
    process.exit(1);
  }

  console.log('⚠️  LIMITATION IMPORTANTE:');
  console.log('Supabase ne permet pas d\'exécuter du SQL arbitraire via l\'API REST.');
  console.log('Vous devez utiliser une des méthodes suivantes:\n');

  await showCLIInstructions(sqlFile);
  await createExecSQLFunction();
}

main();
