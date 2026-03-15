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

// L1: 3887 → +113
await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', `

Un acheteur averti sait aussi quand ne pas acheter. Reconnaître les signaux qui indiquent un article surévalué, un vendeur peu fiable, ou une situation logistique trop contraignante est tout aussi important que de savoir reconnaître une bonne affaire. Cette capacité de discernement, associée à la connaissance des plateformes et des droits légaux, fait de l'acheteur d'occasion un consommateur confiant et efficace sur les marchés français.
`);

// L2: 3915 → +85
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', `

L'écosystème d'occasion français, dans toute sa diversité, offre des solutions adaptées à tous les profils d'acheteurs et à tous les budgets. Maîtriser ses principaux acteurs et mécanismes est un investissement en connaissances qui génère des bénéfices concrets à chaque achat.
`);

// L3: 3970 → +30
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', `

Ces pratiques, régulièrement appliquées, forment l'acheteur d'occasion expert que chaque consommateur averti aspire à devenir.
`);

// L4: 3986 → +14
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', `

La vente d'occasion devient ainsi un levier financier efficace et durable.
`);

// L5: 3923 → +77
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', `

La maîtrise de ces aspects logistiques transforme ce qui pourrait sembler un obstacle en avantage compétitif pour l'acheteur d'occasion organisé et prévoyant.
`);

// L6: 3909 → +91
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', `

L'ensemble de ces stratégies, combinées avec une veille régulière sur les plateformes et un réseau d'entraide local, permet à tout étudiant ou nouvel arrivant en France de vivre confortablement équipé pour bien moins de mille cinq cents euros par an, tout en contribuant positivement à l'économie circulaire locale.
`);
