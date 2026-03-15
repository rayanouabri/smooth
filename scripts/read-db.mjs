const SUPABASE_URL = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODQyMTUsImV4cCI6MjA4MjE2MDIxNX0.7hfBylzDlSXcbVvIXkhN1S1hVhLVBERjoBz1xKNLk74';
const H = { 'apikey': KEY, 'Authorization': 'Bearer ' + KEY, 'Content-Type': 'application/json' };

async function get(table, query = '') {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}&limit=500`, { headers: H });
  if (!r.ok) { const t = await r.text(); console.error(table, 'ERROR:', t); return []; }
  return r.json();
}

// Read courses with all fields
const courses = await get('courses', 'select=*&limit=100');
console.log(`=== ${courses.length} COURS ===`);
if (courses.length > 0) {
  console.log('Colonnes courses:', Object.keys(courses[0]).join(', '));
}
for (const c of courses) {
  console.log(`\n[${c.id}]\nTitre: ${c.title}\nCatégorie: ${c.category} | Niveau: ${c.level} | Publié: ${c.is_published} | Premium: ${c.is_premium}`);
  console.log(`Short desc: ${(c.short_description || '').slice(0, 100)}`);
}

const lessons = await get('lessons', 'select=*&limit=500');
console.log(`\n=== ${lessons.length} LEÇONS ===`);
if (lessons.length > 0) {
  console.log('Colonnes lessons:', Object.keys(lessons[0]).join(', '));
}
for (const l of lessons) {
  const course = courses.find(c => c.id === l.course_id);
  console.log(`\n[${l.id}]\nCours: "${course?.title || l.course_id}" | ${l.title}`);
  console.log(`Contenu: ${(l.content || '').length} chars | Aperçu: ${(l.content || '').slice(0, 150)}`);
}
