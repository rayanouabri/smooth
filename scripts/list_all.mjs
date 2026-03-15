import { readFileSync } from 'fs';
const lessons = JSON.parse(readFileSync('scripts/all_lessons.json','utf8'));
const courses = JSON.parse(readFileSync('scripts/all_courses.json','utf8'));
const courseMap = {};
courses.forEach(c => courseMap[c.id] = c.title);
// Group lessons by course
const grouped = {};
lessons.forEach(l => {
  const cname = courseMap[l.course_id] || l.course_id;
  if (!grouped[cname]) grouped[cname] = [];
  grouped[cname].push({ id: l.id, title: l.title });
});
// Print all courses and their lessons
Object.keys(grouped).sort().forEach(cname => {
  console.log(`\n=== ${cname} (${grouped[cname].length} lessons) ===`);
  grouped[cname].forEach(l => console.log(`  ${l.id} | ${l.title}`));
});
