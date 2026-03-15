import { readFileSync } from 'fs';
const lessons = JSON.parse(readFileSync('scripts/all_lessons.json','utf8'));
const courses = JSON.parse(readFileSync('scripts/all_courses.json','utf8'));
const courseMap = {};
courses.forEach(c => courseMap[c.id] = c.title);
const grouped = {};
lessons.forEach(l => {
  if (!grouped[l.course_id]) grouped[l.course_id] = { title: courseMap[l.course_id], lessons: [] };
  grouped[l.course_id].lessons.push({ id: l.id, title: l.title });
});
// Output as JSON for use in the update script
const output = {};
Object.entries(grouped).forEach(([cid, data]) => {
  output[cid] = { title: data.title, lessons: data.lessons };
});
import { writeFileSync } from 'fs';
writeFileSync('scripts/course_lessons_map.json', JSON.stringify(output, null, 2));
console.log('Saved course_lessons_map.json with', Object.keys(output).length, 'courses');
