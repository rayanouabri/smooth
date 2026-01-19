/**
 * Script pour exécuter des fichiers SQL sur Supabase
 * Utilise la Service Role Key pour bypasser RLS
 * 
 * Usage: node scripts/supabase-runner.js <fichier.sql>
 * 
 * Exemple: node scripts/supabase-runner.js create_ai_messages_table.sql
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Charger les variables d'environnement
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('❌ Variables d\'environnement manquantes !');
  console.error('');
  console.error('Créez un fichier .env.local avec :');
  console.error('VITE_SUPABASE_URL=https://xxxxx.supabase.co');
  console.error('SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key');
  console.error('');
  console.error('⚠️  IMPORTANT: Utilisez la SERVICE ROLE KEY (pas l\'anon key)');
  console.error('   Trouvez-la dans: Supabase Dashboard → Settings → API → service_role (secret)');
  process.exit(1);
}

// Créer le client Supabase avec Service Role Key (bypass RLS)
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function executeSQL(sqlContent) {
  console.log('🔄 Exécution du script SQL...\n');
  
  // Diviser le script en commandes individuelles
  const commands = sqlContent
    .split(';')
    .map(cmd => cmd.trim())
    .filter(cmd => cmd.length > 0 && !cmd.startsWith('--') && !cmd.startsWith('/*'));

  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (const command of commands) {
    // Ignorer les commentaires et les commandes vides
    if (!command || command.startsWith('--') || command.startsWith('/*')) {
      continue;
    }

    try {
      // Utiliser rpc pour exécuter du SQL brut
      // Note: Supabase ne permet pas directement d'exécuter du SQL arbitraire
      // On doit utiliser des fonctions PostgreSQL ou l'API REST
      
      // Pour les CREATE TABLE, ALTER TABLE, etc., on doit utiliser l'API REST
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': serviceRoleKey,
          'Authorization': `Bearer ${serviceRoleKey}`
        },
        body: JSON.stringify({ sql: command })
      });

      if (!response.ok) {
        // Si la fonction RPC n'existe pas, on essaie une autre méthode
        // On va utiliser directement l'API PostgREST pour les opérations simples
        throw new Error(`HTTP ${response.status}`);
      }

      successCount++;
      console.log(`✅ Commande exécutée: ${command.substring(0, 50)}...`);
    } catch (error) {
      errorCount++;
      const errorMsg = `❌ Erreur: ${error.message}\n   Commande: ${command.substring(0, 100)}...`;
      errors.push(errorMsg);
      console.error(errorMsg);
    }
  }

  console.log('\n📊 Résumé:');
  console.log(`   ✅ Succès: ${successCount}`);
  console.log(`   ❌ Erreurs: ${errorCount}`);

  if (errors.length > 0) {
    console.log('\n⚠️  Erreurs détaillées:');
    errors.forEach(err => console.error(err));
  }

  return { successCount, errorCount, errors };
}

async function main() {
  const sqlFile = process.argv[2];

  if (!sqlFile) {
    console.error('❌ Usage: node scripts/supabase-runner.js <fichier.sql>');
    console.error('');
    console.error('Exemples:');
    console.error('  node scripts/supabase-runner.js create_ai_messages_table.sql');
    console.error('  node scripts/supabase-runner.js create_contact_requests_table.sql');
    process.exit(1);
  }

  const filePath = resolve(process.cwd(), sqlFile);

  try {
    console.log(`📖 Lecture du fichier: ${filePath}\n`);
    const sqlContent = readFileSync(filePath, 'utf-8');
    
    console.log(`📝 Contenu du script (${sqlContent.length} caractères)\n`);
    console.log('─'.repeat(60));
    console.log(sqlContent.substring(0, 500) + (sqlContent.length > 500 ? '...' : ''));
    console.log('─'.repeat(60));
    console.log('');

    const result = await executeSQL(sqlContent);

    if (result.errorCount === 0) {
      console.log('\n✅ Script exécuté avec succès !');
      process.exit(0);
    } else {
      console.log('\n⚠️  Script exécuté avec des erreurs.');
      process.exit(1);
    }
  } catch (error) {
    console.error(`\n❌ Erreur: ${error.message}`);
    process.exit(1);
  }
}

main();
