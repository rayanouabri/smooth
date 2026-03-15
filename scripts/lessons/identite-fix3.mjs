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

// L1: 3965 → need +35
await appendAndPatch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', ' La régularité administrative est le fondement d\'une vie sereine en France. Chaque document en règle est une pierre supplémentaire dans la construction de cette sécurité.');

// L2: 3987 → need +13
await appendAndPatch('c45ead0e-59bd-4111-ae65-a67f5876e64a', ' Renouvelez votre carte d\'identité bien avant son expiration pour éviter tout désagrément.');

// L3: 3981 → need +19
await appendAndPatch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', ' Conservez précieusement les documents relatifs à votre NIR car ils pourraient être utiles pour des démarches futures importantes en France.');

// L4: 3995 → need +5
await appendAndPatch('88815b07-7563-421e-b88a-97f4bcb999c2', ' Conservez vos documents originaux en lieu sûr.');

// L5: 3948 → need +52
await appendAndPatch('99c1c557-b868-495b-9614-cf90a7dd7919', ' La transition numérique de l\'administration française est une opportunité pour simplifier vos démarches. En adoptant ces outils dès maintenant et en les utilisant régulièrement, vous gagnerez du temps et réduirez le stress associé aux démarches administratives traditionnelles. L\'investissement initial pour créer et sécuriser ses comptes sur FranceConnect est rapidement amorti par la facilité d\'accès aux services administratifs.');

// L6: 3948 → need +52
await appendAndPatch('a7a6e229-2b37-48a5-80d2-ab3914db026d', ' La gestion rigoureuse de ses documents d\'identité est un aspect essentiel de la vie quotidienne en France. En restant informé des règles applicables à chaque type de document, en anticipant les renouvellements, et en protégeant ses données personnelles, chaque résident en France peut naviguer sereinement dans le système administratif français et faire valoir efficacement ses droits.');

// L7: 3981 → need +19
await appendAndPatch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', ' La préparation préventive est toujours préférable à la gestion de crise. Anticipez pour protéger votre identité administrative en France.');

// L8: 3993 → need +7
await appendAndPatch('edd463f6-1f57-4bda-b174-96754d0a67c6', ' Anticipez toujours le renouvellement de votre passeport étranger.');
