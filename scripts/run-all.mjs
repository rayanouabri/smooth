/**
 * MASTER RUNNER — Injecte TOUS les fichiers lessons/ dans Supabase
 * Usage: node scripts/run-all.mjs
 * Options: node scripts/run-all.mjs --from bf03   (reprend depuis un fichier)
 *          node scripts/run-all.mjs --dry-run      (liste sans injecter)
 */
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));

const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = {
  'apikey': SVC,
  'Authorization': 'Bearer ' + SVC,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal'
};

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const fromIdx = args.indexOf('--from');
const FROM_FILE = fromIdx !== -1 ? args[fromIdx + 1] : null;

async function insertLesson(lesson) {
  const r = await fetch(`${BASE}/rest/v1/lessons`, {
    method: 'POST', headers: H, body: JSON.stringify(lesson)
  });
  if (!r.ok) throw new Error((await r.text()).slice(0, 300));
}

async function runFile(name) {
  const filePath = join(__dir, 'lessons', `${name}.mjs`);
  const fileUrl = new URL(`file:///${filePath.replace(/\\/g, '/')}`);
  let mod;
  try { mod = await import(fileUrl); }
  catch (e) { console.error(`❌ ${name}: ${e.message.slice(0,80)}`); return { ok:0, err:0 }; }

  const lessons = mod.default || mod.LESSONS || [];
  if (!lessons.length) { console.warn(`⚠️  ${name} vide`); return { ok:0, err:0 }; }

  const courseIds = [...new Set(lessons.map(l => l.course_id))];

  if (DRY_RUN) {
    console.log(`  [DRY] ${name} — ${lessons.length} leçons, ${courseIds.length} cours`);
    return { ok: lessons.length, err: 0 };
  }

  // Supprime les leçons existantes pour ces cours
  for (const id of courseIds) {
    await fetch(`${BASE}/rest/v1/lessons?course_id=eq.${id}`, { method: 'DELETE', headers: H });
  }

  let ok = 0, err = 0;
  for (const [i, lesson] of lessons.entries()) {
    try {
      await insertLesson(lesson);
      ok++;
      process.stdout.write(`  ✅ ${ok}/${lessons.length} \r`);
    } catch(e) {
      err++;
      console.error(`\n  ❌ "${lesson.title}": ${e.message.slice(0,100)}`);
    }
    if (i % 10 === 9) await new Promise(r => setTimeout(r, 150));
  }
  process.stdout.write('\n');
  return { ok, err };
}

async function countLessons() {
  const r = await fetch(`${BASE}/rest/v1/lessons?select=id`, {
    headers: { ...H, 'Prefer': 'count=exact' }
  });
  return r.headers.get('content-range') || '?';
}

// ─── Main ────────────────────────────────────────────────────────────────────
const lessonsDir = join(__dir, 'lessons');
let allFiles = readdirSync(lessonsDir)
  .filter(f => f.endsWith('.mjs'))
  .map(f => f.replace('.mjs', ''))
  .sort();

if (FROM_FILE) {
  const idx = allFiles.indexOf(FROM_FILE);
  if (idx === -1) { console.error(`Fichier "${FROM_FILE}" introuvable.`); process.exit(1); }
  allFiles = allFiles.slice(idx);
}

console.log(`\n${'═'.repeat(60)}`);
console.log(`🚀 FrancePrepAcademy — Injection de ${allFiles.length} fichiers`);
if (DRY_RUN) console.log('   Mode DRY-RUN (aucune écriture en DB)');
if (FROM_FILE) console.log(`   Reprise depuis: ${FROM_FILE}`);
console.log(`${'═'.repeat(60)}\n`);

let totalOk = 0, totalErr = 0, filesDone = 0;
for (const name of allFiles) {
  process.stdout.write(`📦 [${++filesDone}/${allFiles.length}] ${name}... `);
  const { ok, err } = await runFile(name);
  totalOk += ok; totalErr += err;
  if (!DRY_RUN) console.log(`   → ${ok} OK | ${err} err`);
  // Petite pause anti-rate-limit entre fichiers
  await new Promise(r => setTimeout(r, 300));
}

const count = await countLessons();
console.log(`\n${'═'.repeat(60)}`);
console.log(`✅ TERMINÉ — ${totalOk} leçons injectées | ${totalErr} erreurs`);
console.log(`📊 Total Supabase : ${count} leçons`);
console.log(`${'═'.repeat(60)}\n`);
