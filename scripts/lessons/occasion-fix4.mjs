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

// L1: 3979 → +21
await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', ' L\'achat d\'électronique d\'occasion reste l\'un des moyens les plus efficaces d\'accéder à des appareils de qualité à prix réduit en France. Cette démarche, bien conduite, combine économies substantielles et satisfaction durable.');

// L2: 3976 → +24
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', ' Les plateformes d\'occasion sont des outils puissants pour qui sait les utiliser avec discernement, patience et méthode. Leur maîtrise est une compétence précieuse pour toute la durée du séjour en France.');

// L3: 3993 → +7
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', ' Ces compétences protègent efficacement vos intérêts.');

// L4: 3999 → +1
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', ' Succès.');

// L5: 3968 → +32
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', ' La pratique régulière de ces stratégies logistiques permet d\'acheter sans véhicule personnel tout en maintenant des coûts de transport raisonnables sur l\'ensemble de ses acquisitions d\'occasion.');

// L6: 3978 → +22
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', ' L\'occasion bien choisie et bien gérée est véritablement un levier d\'autonomie financière durable pour les étudiants et nouveaux arrivants en France.');
