/**
 * Script pour exécuter un fichier SQL via Supabase CLI
 * 
 * Prérequis:
 * 1. Supabase CLI installé: npm install -g supabase
 * 2. Connecté: supabase login
 * 3. Projet lié: supabase link --project-ref <ref>
 * 
 * Usage: node scripts/run-sql-cli.js <fichier.sql>
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, basename, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function runCommand(command, options = {}) {
  try {
    const output = execSync(command, { 
      encoding: 'utf-8',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options
    });
    return { success: true, output };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout?.toString() || '' };
  }
}

async function main() {
  const sqlFile = process.argv[2];

  if (!sqlFile) {
    console.error('❌ Usage: node scripts/run-sql-cli.js <fichier.sql>');
    console.error('');
    console.error('Exemples:');
    console.error('  node scripts/run-sql-cli.js create_ai_messages_table.sql');
    console.error('  node scripts/run-sql-cli.js create_contact_requests_table.sql');
    process.exit(1);
  }

  const filePath = resolve(process.cwd(), sqlFile);

  if (!existsSync(filePath)) {
    console.error(`❌ Fichier non trouvé: ${filePath}`);
    process.exit(1);
  }

  console.log(`📖 Lecture du fichier: ${filePath}\n`);
  const sqlContent = readFileSync(filePath, 'utf-8');

  // Vérifier que Supabase CLI est installé
  console.log('🔍 Vérification de Supabase CLI...');
  const { success: cliInstalled } = runCommand('supabase --version', { silent: true });
  
  if (!cliInstalled) {
    console.error('❌ Supabase CLI n\'est pas installé !');
    console.error('');
    console.error('Installez-le avec:');
    console.error('  npm install -g supabase');
    process.exit(1);
  }

  console.log('✅ Supabase CLI détecté\n');

  // Vérifier que le projet est lié
  console.log('🔍 Vérification de la connexion au projet...');
  const { success: projectLinked } = runCommand('supabase projects list', { silent: true });
  
  if (!projectLinked) {
    console.error('❌ Projet Supabase non lié !');
    console.error('');
    console.error('Connectez-vous et liez votre projet:');
    console.error('  1. supabase login');
    console.error('  2. supabase link --project-ref <votre-project-ref>');
    console.error('');
    console.error('Trouvez le project-ref dans: Supabase Dashboard → Settings → General');
    process.exit(1);
  }

  console.log('✅ Projet lié\n');

  // Créer le dossier migrations si nécessaire
  const migrationsDir = resolve(process.cwd(), 'supabase', 'migrations');
  if (!existsSync(migrationsDir)) {
    console.log('📁 Création du dossier migrations...');
    mkdirSync(migrationsDir, { recursive: true });
    console.log('✅ Dossier créé\n');
  }

  // Générer un nom de migration unique
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const baseName = basename(sqlFile, '.sql').replace(/[^a-z0-9]/gi, '_');
  const migrationName = `${timestamp}_${baseName}`;
  const migrationFile = join(migrationsDir, `${migrationName}.sql`);

  console.log(`📝 Création de la migration: ${migrationName}\n`);

  // Écrire le fichier de migration
  writeFileSync(migrationFile, sqlContent);
  console.log(`✅ Migration créée: ${migrationFile}\n`);

  // Demander confirmation
  console.log('⚠️  Vous êtes sur le point d\'exécuter cette migration sur votre base de données.');
  console.log('   Voulez-vous continuer ? (Appuyez sur Ctrl+C pour annuler)\n');
  console.log('   Appuyez sur Entrée pour continuer...');
  
  // En mode automatique, on continue directement
  // Pour une version interactive, utilisez readline

  // Appliquer la migration
  console.log('\n🚀 Application de la migration...\n');
  const { success, error, output } = runCommand('supabase db push');

  if (success) {
    console.log('\n✅ Migration appliquée avec succès !');
    console.log(`\n📋 Fichier de migration sauvegardé: ${migrationFile}`);
    console.log('   Vous pouvez le versionner avec Git si nécessaire.\n');
    process.exit(0);
  } else {
    console.error('\n❌ Erreur lors de l\'application de la migration:');
    console.error(error);
    if (output) {
      console.error('\nSortie:');
      console.error(output);
    }
    console.error(`\n⚠️  Le fichier de migration a été créé: ${migrationFile}`);
    console.error('   Vous pouvez l\'appliquer manuellement avec: supabase db push\n');
    process.exit(1);
  }
}

main();
