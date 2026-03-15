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

// L2: 3924 → +80 words
await appendAndPatch('2c258539-3073-41f6-b0b7-d30fc935fff8', ` Un changement de banque bien orchestré est avant tout un changement bien préparé. La rigueur apportée à la liste des domiciliations, au calendrier des notifications, et à l'archivage des documents détermine la fluidité de toute la transition. Prenez le temps de préparer chaque étape — ce temps investi se traduit en semaines de transition sans incident, en frais évités, et en sérénité retrouvée dans la nouvelle relation bancaire.`);

// L3: 3959 → +50 words
await appendAndPatch('bae3513f-1fe0-40ef-a639-9e54c053bf60', ` La compétence financière se construit par l'action et la réflexion. Chaque procédure menée à bien, chaque droit exercé correctement, et chaque complication surmontée renforce la maîtrise de sa vie financière. La clôture réussie est une étape concrète de cette construction progressive vers l'autonomie financière complète.`);

// L4: 3924 → +80 words
await appendAndPatch('e9fa9b23-5d88-4067-a94f-7f988db9839f', ` Exercer activement sa liberté de choix bancaire, en comprenant les mécanismes du marché et les protections légales disponibles, est une compétence qui prend tout son sens dans un contexte de concurrence bancaire accrue. Les établissements qui offrent les meilleures conditions savent qu'ils doivent les mériter — et les consommateurs informés sont les mieux placés pour tirer parti de cette réalité économique en faveur de leur propre situation financière.`);

// L5: 3952 → +55 words
await appendAndPatch('9bf50448-7156-4821-872c-66d32e62a84f', ` Développer une relation bancaire active, choisie et régulièrement réévaluée est la marque du consommateur financièrement mature. La clôture maîtrisée est l'outil de cette liberté — la capacité à partir quand les conditions ne sont plus satisfaisantes, et à choisir mieux. Cette liberté s'exerce efficacement avec les bons outils et les bonnes connaissances.`);

// L6: 3952 → +55 words
await appendAndPatch('2b027cc3-557e-4ef3-914b-2356ad93c539', ` La maîtrise de la clôture bancaire est en définitive un signe de maturité financière et de confiance en ses propres capacités administratives. Elle ouvre la voie à une gestion bancaire plus libre, plus efficace, et plus adaptée aux besoins réels de chaque étape de la vie. Gérez votre relation bancaire avec la même rigueur que vous gérez vos autres engagements importants.`);
