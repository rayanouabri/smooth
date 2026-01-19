/**
 * Fonction helper pour exécuter automatiquement un fichier SQL
 * Utilisé par l'IA pour exécuter les scripts SQL automatiquement
 * 
 * Usage: node scripts/auto-execute-sql.js <fichier.sql>
 */

import { execSync } from 'child_process';
import { resolve } from 'path';

const sqlFile = process.argv[2];

if (!sqlFile) {
  console.error('❌ Usage: node scripts/auto-execute-sql.js <fichier.sql>');
  process.exit(1);
}

const filePath = resolve(process.cwd(), sqlFile);

try {
  console.log(`🚀 Exécution automatique de: ${sqlFile}\n`);
  
  // Exécuter le script run-sql-cli.js
  execSync(`node scripts/run-sql-cli.js "${filePath}"`, {
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('\n✅ Script SQL exécuté avec succès !');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Erreur lors de l\'exécution:', error.message);
  process.exit(1);
}
