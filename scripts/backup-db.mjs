import { writeFileSync } from 'fs';

const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC };

console.log('📦 Backup en cours...');

// Courses
const rCourses = await fetch(`${BASE}/rest/v1/courses?select=*&limit=1000`, { headers: H });
const courses = await rCourses.json();
console.log(`  ${courses.length} cours récupérés`);

// Lessons (par batch de 1000 pour être sûr)
let allLessons = [];
let offset = 0;
while (true) {
  const rL = await fetch(`${BASE}/rest/v1/lessons?select=*&limit=1000&offset=${offset}`, { headers: H });
  const batch = await rL.json();
  if (!batch.length) break;
  allLessons = allLessons.concat(batch);
  offset += 1000;
  if (batch.length < 1000) break;
}
console.log(`  ${allLessons.length} leçons récupérées`);

const backup = {
  exported_at: new Date().toISOString(),
  courses_count: courses.length,
  lessons_count: allLessons.length,
  courses,
  lessons: allLessons,
};

const filename = `backup-${new Date().toISOString().slice(0,10)}.json`;
writeFileSync(filename, JSON.stringify(backup, null, 2));
console.log(`\n✅ Backup sauvegardé : ${filename}`);
console.log(`   ${(JSON.stringify(backup).length / 1024 / 1024).toFixed(1)} MB`);

process.exit(0);
