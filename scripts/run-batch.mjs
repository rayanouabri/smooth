/**
 * RUNNER — Injecte un fichier de leçons dans Supabase
 * Usage: node scripts/run-batch.mjs <filename_sans_extension>
 * Ex:    node scripts/run-batch.mjs batch-01
 *        node scripts/run-batch.mjs c001
 *        node scripts/run-batch.mjs all   (injecte tous les fichiers du dossier lessons/)
 */
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));

const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' };

async function insertLesson(lesson) {
  const r = await fetch(`${BASE}/rest/v1/lessons`, {
    method: 'POST', headers: H, body: JSON.stringify(lesson)
  });
  if (!r.ok) {
    const t = await r.text();
    throw new Error(`${t.slice(0,300)}`);
  }
}

async function runFile(filename) {
  // Accepte avec ou sans extension
  const name = filename.replace(/\.mjs$/, '');
  const filePath = join(__dir, 'lessons', `${name}.mjs`);
  const fileUrl = new URL(`file:///${filePath.replace(/\\/g, '/')}`);
  let mod;
  try {
    mod = await import(fileUrl);
  } catch(e) {
    console.error(`❌ Impossible de charger ${filePath}:`, e.message);
    return { ok: 0, err: 0 };
  }

  const lessons = mod.default || mod.LESSONS || [];
  if (!lessons.length) { console.warn(`⚠️  Fichier ${name} vide`); return { ok: 0, err: 0 }; }

  // Supprimer les leçons existantes de ces cours
  const courseIds = [...new Set(lessons.map(l => l.course_id))];
  for (const id of courseIds) {
    await fetch(`${BASE}/rest/v1/lessons?course_id=eq.${id}`, { method: 'DELETE', headers: H });
  }

  console.log(`\n📦 ${name} — ${lessons.length} leçons pour ${courseIds.length} cours`);
  let ok = 0, err = 0;
  for (const [i, lesson] of lessons.entries()) {
    try {
      await insertLesson(lesson);
      ok++;
      process.stdout.write(`  ✅ ${ok}/${lessons.length}  \r`);
    } catch(e) {
      err++;
      console.error(`\n  ❌ "${lesson.title}": ${e.message.slice(0,120)}`);
    }
    if (i % 10 === 9) await new Promise(r => setTimeout(r, 150));
  }
  process.stdout.write('\n');
  console.log(`  → ${ok} OK, ${err} erreurs`);
  return { ok, err };
}

async function countLessons() {
  const r = await fetch(`${BASE}/rest/v1/lessons?select=id`, {
    headers: { ...H, 'Prefer': 'count=exact' }
  });
  return r.headers.get('content-range') || '?';
}

// ── Main ─────────────────────────────────────────────────────────────────────
const arg = process.argv[2];
if (!arg) {
  console.log('Usage: node scripts/run-batch.mjs <filename | all>');
  process.exit(1);
}

let files = [];
if (arg === 'all') {
  files = readdirSync(join(__dir, 'lessons'))
    .filter(f => f.endsWith('.mjs'))
    .map(f => f.replace('.mjs', ''))
    .sort();
} else {
  files = [arg];
}

let totalOk = 0, totalErr = 0;
for (const f of files) {
  const { ok, err } = await runFile(f);
  totalOk += ok; totalErr += err;
}

const count = await countLessons();
console.log('\n' + '═'.repeat(50));
console.log(`✅ Total injecté : ${totalOk} leçons | ${totalErr} erreurs`);
console.log(`📊 Supabase total : ${count} leçons`);
