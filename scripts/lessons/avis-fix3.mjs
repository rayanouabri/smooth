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

// L1: 3964 → +36
await appendAndPatch('9e2a16ea-0c1b-4df3-a8f6-fb3dac6f425b', ' Chaque étape maîtrisée — de la lecture de l\'avis à la réclamation en passant par la compréhension des délais légaux — renforce l\'autonomie fiscale du contribuable et sa capacité à défendre ses droits efficacement face à l\'administration.');

// L2: 3999 → +1
await appendAndPatch('19527171-0a94-4ba5-b58e-a15de77a8adc', ' Succès.');

// L5: 3971 → +29
await appendAndPatch('838acbd1-bcda-4d75-81e0-b822158a6439', ' Maîtriser l\'utilisation de l\'avis d\'imposition comme preuve de ressources est ainsi un atout administratif durable qui facilite concrètement la vie en France à chaque étape.');
