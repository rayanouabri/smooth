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

// L3: 3977 → +25
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', ' Payez en sécurité, vivez sereinement.');

// L4: 3969 → +35
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', ' Une bonne maîtrise de ses plafonds de carte est un indicateur de maturité financière qui bénéficie au quotidien.');

// L5: 3972 → +30
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', ' Optimisez vos frais bancaires chaque année pour maximiser la valeur de votre relation bancaire.');

// L6: 3992 → +12
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', ' Bonne gestion bancaire.');
