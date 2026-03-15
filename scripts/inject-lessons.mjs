/**
 * Script d'injection massive des leçons dans Supabase
 * Utilise la service_role key pour bypasser les politiques RLS
 *
 * Usage: node scripts/inject-lessons.mjs
 */

import { LESSONS_BATCH_1 } from './lessons-batch-1.mjs';
import { LESSONS_BATCH_2 } from './lessons-batch-2.mjs';
import { LESSONS_BATCH_3 } from './lessons-batch-3.mjs';

const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' };

const ALL_LESSONS = [...LESSONS_BATCH_1, ...LESSONS_BATCH_2, ...LESSONS_BATCH_3];

async function deleteExistingLessons() {
  console.log('🗑️  Suppression des leçons existantes...');
  const r = await fetch(`${BASE}/rest/v1/lessons?id=neq.00000000-0000-0000-0000-000000000000`, {
    method: 'DELETE', headers: H
  });
  if (!r.ok) {
    const t = await r.text();
    console.warn('  Avertissement suppression:', t.slice(0, 200));
  } else {
    console.log('  ✅ Leçons existantes supprimées');
  }
}

async function insertBatch(lessons, batchNum) {
  const CHUNK = 20; // Supabase limite les insertions massives
  let inserted = 0;
  let errors = 0;

  for (let i = 0; i < lessons.length; i += CHUNK) {
    const chunk = lessons.slice(i, i + CHUNK);
    const r = await fetch(`${BASE}/rest/v1/lessons`, {
      method: 'POST',
      headers: H,
      body: JSON.stringify(chunk)
    });

    if (r.ok) {
      inserted += chunk.length;
      process.stdout.write(`\r  Batch ${batchNum}: ${inserted}/${lessons.length} leçons insérées...`);
    } else {
      const text = await r.text();
      console.error(`\n  ❌ Erreur chunk ${i}-${i+CHUNK}:`, text.slice(0, 300));
      // Fallback : insérer une par une
      for (const lesson of chunk) {
        const r2 = await fetch(`${BASE}/rest/v1/lessons`, {
          method: 'POST',
          headers: H,
          body: JSON.stringify(lesson)
        });
        if (r2.ok) {
          inserted++;
        } else {
          errors++;
          const t2 = await r2.text();
          console.error(`\n  ❌ Leçon "${lesson.title}" (course ${lesson.course_id.slice(0,8)}...): ${t2.slice(0,150)}`);
        }
      }
    }

    // Petite pause pour éviter le rate limiting
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`\n  ✅ Batch ${batchNum}: ${inserted} insérées, ${errors} erreurs`);
  return { inserted, errors };
}

async function main() {
  console.log('🚀 FrancePrepAcademy — Injection massive des leçons');
  console.log(`📚 Total: ${ALL_LESSONS.length} leçons à injecter pour ${new Set(ALL_LESSONS.map(l => l.course_id)).size} cours\n`);

  // Validation
  const invalid = ALL_LESSONS.filter(l => !l.course_id || !l.title || !l.content);
  if (invalid.length > 0) {
    console.error(`❌ ${invalid.length} leçons invalides (manque course_id, title ou content)`);
    console.error('Exemples:', invalid.slice(0, 3).map(l => l.title || 'sans titre'));
    process.exit(1);
  }

  // Supprimer les anciennes leçons
  await deleteExistingLessons();

  // Injecter par batch
  const b1 = ALL_LESSONS.filter(l => LESSONS_BATCH_1.includes(l));
  const b2 = ALL_LESSONS.filter(l => LESSONS_BATCH_2.includes(l));
  const b3 = ALL_LESSONS.filter(l => LESSONS_BATCH_3.includes(l));

  console.log(`\n📦 Batch 1 (logement + finances): ${LESSONS_BATCH_1.length} leçons`);
  const r1 = await insertBatch(LESSONS_BATCH_1, 1);

  console.log(`\n📦 Batch 2 (culture + insertion pro): ${LESSONS_BATCH_2.length} leçons`);
  const r2 = await insertBatch(LESSONS_BATCH_2, 2);

  console.log(`\n📦 Batch 3 (santé + transport + admin + académique + travail): ${LESSONS_BATCH_3.length} leçons`);
  const r3 = await insertBatch(LESSONS_BATCH_3, 3);

  const totalInserted = r1.inserted + r2.inserted + r3.inserted;
  const totalErrors   = r1.errors + r2.errors + r3.errors;

  console.log('\n' + '='.repeat(60));
  console.log(`✅ TERMINÉ — ${totalInserted} leçons injectées | ${totalErrors} erreurs`);

  // Vérification finale
  const verif = await fetch(`${BASE}/rest/v1/lessons?select=count`, { headers: { ...H, 'Prefer': 'count=exact' } });
  const count = verif.headers.get('content-range');
  console.log(`📊 Vérification Supabase: ${count} leçons dans la base`);
}

main().catch(err => {
  console.error('\n💥 Erreur fatale:', err.message);
  process.exit(1);
});
