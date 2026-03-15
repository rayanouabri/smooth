// Supprime les cours et leurs leçons
const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC, 'Content-Type': 'application/json' };

const IDS_TO_DELETE = [
  'ecba90be-e91e-4d6f-8ff2-b1623a37d419', // La notation sur 20
  'e7f8a9b0-c1d2-4012-e3f4-a5b6c7d8e9f0', // CVEC
];

for (const id of IDS_TO_DELETE) {
  // Supprimer les leçons d'abord
  const rLessons = await fetch(`${BASE}/rest/v1/lessons?course_id=eq.${id}`, {
    method: 'DELETE', headers: H
  });
  console.log(`  Lessons supprimées pour ${id}: ${rLessons.status}`);

  // Supprimer le cours
  const rCourse = await fetch(`${BASE}/rest/v1/courses?id=eq.${id}`, {
    method: 'DELETE', headers: H
  });
  console.log(`  Cours supprimé ${id}: ${rCourse.status}`);
}

// Vérification totaux
const r = await fetch(`${BASE}/rest/v1/lessons?select=course_id`, { headers: H });
const lessons = await r.json();
console.log(`\nTotal leçons restantes: ${lessons.length}`);

const rc = await fetch(`${BASE}/rest/v1/courses?select=id`, { headers: H });
const courses = await rc.json();
console.log(`Total cours restants: ${courses.length}`);

process.exit(0);
