const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC };

const coursesRes = await fetch(`${BASE}/rest/v1/courses?select=id,title,category&order=category.asc`, { headers: H });
const courses = await coursesRes.json();

const lessonsRes = await fetch(`${BASE}/rest/v1/lessons?select=course_id`, { headers: H });
const lessons = await lessonsRes.json();

const lessonCounts = {};
for (const l of lessons) {
  lessonCounts[l.course_id] = (lessonCounts[l.course_id] || 0) + 1;
}

console.log('Courses with no lessons:');
for (const c of courses) {
  const count = lessonCounts[c.id] || 0;
  if (count === 0) {
    console.log(`  [${c.category}] ${c.title} | ${c.id}`);
  }
}

console.log('\nAll courses with lesson counts:');
for (const c of courses) {
  const count = lessonCounts[c.id] || 0;
  console.log(`  ${count} | [${c.category}] ${c.title}`);
}

process.exit(0);
