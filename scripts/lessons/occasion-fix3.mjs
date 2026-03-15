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

// L1: 3952 → +48 needed
await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', ' Chaque bonne transaction renforce la confiance et les compétences pour les achats à venir. Le marché de l\'occasion en France récompense les acheteurs informés, patients et organisés.');

// L2: 3955 → +45 needed
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', ' Naviguer avec méthode dans cet écosystème riche et diversifié est une compétence qui profite à tout acheteur sur le long terme.');

// L3: 3985 → +15 needed
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', ' Bonne continuation dans vos achats d\'occasion en France.');

// L4: 3997 → +3 needed
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', ' Bonne vente.');

// L5: 3945 → +55 needed
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', ' La logistique bien préparée transforme chaque achat volumineux d\'occasion en succès, tout en limitant les coûts annexes qui pourraient réduire les économies réalisées.');

// L6: 3957 → +43 needed
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', ' Ce budget maîtrisé offre une sérénité financière précieuse et libère des ressources pour les expériences et les projets qui comptent vraiment.');
