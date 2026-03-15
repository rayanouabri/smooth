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

const EXTRA = `

## Conclusion générale : s'approprier les règles pour mieux réussir

La maîtrise des règles qui régissent l'évaluation universitaire française est un levier fondamental de réussite académique. Ces règles — compensation entre UE, sessions de rattrapage, délibérations de jury, droits à l'information et au recours — forment un cadre institutionnel conçu pour donner à chaque étudiant les meilleures chances de valider son parcours de façon équitable. Les ignorer revient à naviguer dans un territoire inconnu sans carte. Les connaître permet de se positionner comme un acteur informé et stratégique de sa propre formation, capable de prendre les bonnes décisions au bon moment et de demander les bonnes aides aux bons interlocuteurs. L'université française, dans toute sa complexité et sa richesse culturelle, est une institution qui récompense l'engagement, la rigueur et la curiosité intellectuelle — autant de qualités que les étudiants internationaux, par leur parcours même, cultivent à un degré souvent remarquable.
`;

await appendAndPatch('f3af208d-e414-4e9f-a538-19279d6ca4c3', EXTRA); // L4: 3965
await appendAndPatch('4f448018-2528-4570-9038-1abcbe1be9b6', EXTRA); // L7: 3867
await appendAndPatch('e26cf05b-0668-4734-9b08-4ebb4b4742fa', EXTRA); // L11: 3920
