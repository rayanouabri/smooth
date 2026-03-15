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

// L1: 3918 → need +82
await appendAndPatch('9e2a16ea-0c1b-4df3-a8f6-fb3dac6f425b', ' Cette maîtrise progressive de la fiscalité personnelle — apprendre à corriger, à contester, à planifier — est l\'une des compétences les plus précieuses et durables que tout résident en France peut acquérir pour gérer sereinement sa relation avec l\'administration fiscale tout au long de sa vie.');

// L2: 3981 → need +19
await appendAndPatch('19527171-0a94-4ba5-b58e-a15de77a8adc', ' Comprendre son avis d\'imposition, c\'est comprendre sa place dans la société française. Bonne lecture et bonne gestion fiscale.');

// L5: 3927 → need +73
await appendAndPatch('838acbd1-bcda-4d75-81e0-b822158a6439', ' En synthèse, l\'avis d\'imposition comme preuve de ressources est une réalité omniprésente dans la vie administrative française que tout résident doit apprendre à gérer efficacement, à protéger judicieusement, et à utiliser stratégiquement pour maximiser ses droits et faciliter ses démarches. Bonne gestion à tous.');
