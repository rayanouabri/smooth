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

const ADD_L4 = `
## Conclusion : la validation OFII comme fondation administrative

La validation de votre VLS-TS auprès de l'OFII n'est pas une simple formalité parmi d'autres — c'est l'acte fondateur de votre statut légal en France. En accomplissant cette démarche dans les trois premiers mois de votre arrivée, vous posez la pierre angulaire de toutes vos démarches administratives futures : ouverture de droits sociaux, affiliation à l'assurance maladie, accès au logement social, et renouvellement de titre de séjour. L'étudiant qui anticipe, prépare ses documents à l'avance et comprend les mécanismes techniques de la plateforme ANEF transforme une démarche potentiellement stressante en une étape maîtrisée et sereine de son installation en France. Cette maîtrise administrative précoce libère du temps et de l'énergie pour ce qui compte vraiment : vos études, votre intégration et la construction de votre vie en France.
`;

await appendAndPatch('091720f8-2caa-4c7f-8ae9-02e55406872a', ADD_L4);
