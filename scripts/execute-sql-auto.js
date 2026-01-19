/**
 * Fonction helper pour exécuter automatiquement un fichier SQL
 * Cette fonction est appelée automatiquement par l'IA quand elle crée un fichier SQL
 * 
 * Usage interne: node scripts/execute-sql-auto.js <fichier.sql>
 */

import { execSync } from 'child_process';
import { resolve } from 'path';

const sqlFile = process.argv[2];

if (!sqlFile) {
  process.exit(1);
}

const filePath = resolve(process.cwd(), sqlFile);

try {
  // Exécuter automatiquement via run-sql-cli.js
  execSync(`node scripts/run-sql-cli.js "${filePath}"`, {
    stdio: 'inherit',
    cwd: process.cwd()
  });
  process.exit(0);
} catch (error) {
  console.error(`❌ Erreur lors de l'exécution de ${sqlFile}:`, error.message);
  process.exit(1);
}
