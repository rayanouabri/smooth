import { writeFileSync } from 'fs';

const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC };

async function fetchAll(path) {
  let all = [], offset = 0;
  while (true) {
    const r = await fetch(`${BASE}/rest/v1/${path}&limit=200&offset=${offset}`, { headers: H });
    const rows = await r.json();
    if (!Array.isArray(rows)) { console.error('Error:', rows); break; }
    all = all.concat(rows);
    if (rows.length < 200) break;
    offset += 200;
  }
  return all;
}

const courses = await fetchAll('courses?select=id,title,category&order=category,title');
const lessons = await fetchAll('lessons?select=id,course_id,title,video_url,content&order=course_id');

console.log(`Courses: ${courses.length}, Lessons: ${lessons.length}`);

const byCourse = {};
for (const l of lessons) {
  if (!byCourse[l.course_id]) byCourse[l.course_id] = [];
  byCourse[l.course_id].push(l);
}

const out = courses.map(c => ({
  id: c.id,
  title: c.title,
  category: c.category,
  lessons: (byCourse[c.id] || []).map(l => ({
    id: l.id,
    title: l.title,
    video_url: l.video_url,
    words: l.content ? l.content.split(/\s+/).filter(Boolean).length : 0
  }))
}));

writeFileSync('./scripts/structure.json', JSON.stringify(out, null, 2));
console.log('Written structure.json');

// Summary
const cats = {};
for (const c of out) {
  if (!cats[c.category]) cats[c.category] = { courses: 0, lessons: 0, under3k: 0 };
  cats[c.category].courses++;
  for (const l of c.lessons) {
    cats[c.category].lessons++;
    if (l.words < 3000) cats[c.category].under3k++;
  }
}
console.log('\nBy category:');
for (const [cat, s] of Object.entries(cats)) {
  console.log(`  ${cat}: ${s.courses} cours, ${s.lessons} leçons (${s.under3k} < 3000 mots)`);
}
