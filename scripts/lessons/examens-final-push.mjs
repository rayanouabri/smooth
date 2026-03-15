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

const TAIL = `

## Questions fréquentes des étudiants internationaux

La plupart des questions que se posent les étudiants étrangers à propos des examens universitaires français tournent autour de quelques thèmes récurrents. Voici les réponses aux interrogations les plus fréquentes pour compléter le guide présenté dans cette leçon.

Comment savoir si mon niveau de français est suffisant pour les examens ? La meilleure façon d'évaluer son niveau est de pratiquer régulièrement la production écrite en français académique, en demandant des retours à des enseignants ou à des tuteurs. Si vous pouvez rédiger un paragraphe d'argument structuré de 150 mots sans fautes grammaticales majeures et avec un vocabulaire précis sur un sujet de votre discipline, vous disposez d'une base fonctionnelle sur laquelle travailler. Les centres de langue des universités proposent des tests de positionnement et des formations ciblées sur les lacunes identifiées.

Puis-je demander un correcteur différent si je pense avoir été mal noté ? Dans les examens anonymes, vous ne pouvez pas demander un correcteur particulier. En revanche, vous pouvez demander une double correction de votre copie auprès du directeur de formation si vous estimez que la notation présente une anomalie manifeste. Cette procédure n'est pas automatiquement accordée et doit être sollicitée dans les délais de réclamation avec une justification précise.

Les notes de TD et de CC sont-elles définitives ? Oui, en règle générale, les notes de contrôle continu (devoirs maison, exposés, QCM en TD) sont définitives une fois publiées. Elles ne peuvent pas être rattrapées par la session 2 — celle-ci ne concerne que les épreuves terminales sur table. Quelques exceptions existent dans certains établissements pour des situations de force majeure documentées, mais elles sont rares.

Existe-t-il des examens en anglais ou dans d'autres langues dans les universités françaises ? Dans les formations internationales en langue anglaise (masters anglophone, formations dispensées en anglais dans le cadre d'accords Erasmus Mundus), les examens peuvent se dérouler en anglais. Dans les formations ordinaires dispensées en français, les examens se déroulent en français — à l'exception des cours de langue étrangère, bien évidemment. Certains établissements autorisent des réponses en anglais pour les étudiants non francophones dans des UE non linguistiques, mais cela reste une exception qui doit être accordée explicitement et à l'avance.
`;

// Apply same tail to all 12 lessons
const ids = [
  '60206990-344f-4a69-8aa7-830f51598227',
  '64771279-ba7e-4cb4-a525-214585a259a6',
  '483aa914-73d9-4253-8f78-96569a49b8d9',
  'f3af208d-e414-4e9f-a538-19279d6ca4c3',
  '24c0f17e-d65c-454f-89cd-43757ff78407',
  'fc3dae13-7dd7-4761-bca4-00b6508b8cc5',
  '4f448018-2528-4570-9038-1abcbe1be9b6',
  '201a89fd-1685-4864-b756-6524941dadc8',
  '7f3d3ec0-4d6d-44d8-b1b7-581645697126',
  '8f0bbec0-b172-491a-8af8-1380a47d0497',
  'e26cf05b-0668-4734-9b08-4ebb4b4742fa',
  '0bd01774-41f3-49c8-8d69-d325de793f99',
];

for (const id of ids) {
  await appendAndPatch(id, TAIL);
}
