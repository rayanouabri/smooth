const SUPABASE_URL = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODQyMTUsImV4cCI6MjA4MjE2MDIxNX0.7hfBylzDlSXcbVvIXkhN1S1hVhLVBERjoBz1xKNLk74';
const H = { 'apikey': KEY, 'Authorization': 'Bearer ' + KEY };

const spec = await fetch(`${SUPABASE_URL}/rest/v1/`, { headers: H }).then(r => r.json());
const lessonDef = spec.definitions?.lessons;
const courseDef = spec.definitions?.courses;

console.log('=== LESSONS SCHEMA ===');
console.log(JSON.stringify(lessonDef, null, 2));

console.log('\n=== COURSES SCHEMA (champs) ===');
if (courseDef) {
  Object.entries(courseDef.properties || {}).forEach(([k, v]) => {
    console.log(`  ${k}: ${v.type || v.format || JSON.stringify(v)}`);
  });
}
