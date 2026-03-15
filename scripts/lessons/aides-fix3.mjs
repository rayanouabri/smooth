const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function appendAndPatch(id, addition) {
  const r = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id+'&select=content', { headers: H });
  const [row] = await r.json();
  const newContent = row.content + addition;
  const w = newContent.split(/\s+/).filter(Boolean).length;
  const p = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content: newContent })
  });
  console.log(p.ok ? '✅' : '❌ '+p.status, id.slice(0,8), w+' mots');
}

// L1: 3959 → +41
await appendAndPatch('d96c9d24-2b32-4fa0-9625-2217d74a7650', ' Rester informé et vigilant est la meilleure défense contre les tentatives de fraude qui ciblent les étudiants en France.');

// L3: 3995 → +5
await appendAndPatch('3c2044b9-79ea-470a-994a-94117071a70e', ' Bonne chance.');

// L5: 3998 → +2
await appendAndPatch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', ' Merci.');

// L6: 3998 → +2
await appendAndPatch('2fab22b0-0b45-47b9-9322-fe943a74380e', ' Bravo.');
