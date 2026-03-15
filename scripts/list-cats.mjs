const SVC = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const H = { apikey: SVC, Authorization: 'Bearer '+SVC };

const r = await fetch(BASE+'/rest/v1/courses?select=id,title,category&order=category,title&limit=200', {headers:H});
const d = await r.json();
const cats = {};
d.forEach(c => { if(!cats[c.category]) cats[c.category]=[]; cats[c.category].push({id:c.id, title:c.title}); });
for(const [cat, courses] of Object.entries(cats)) {
  console.log(`\n=== ${cat} (${courses.length} cours) ===`);
  courses.forEach(c => console.log(`  ${c.id} | ${c.title}`));
}
