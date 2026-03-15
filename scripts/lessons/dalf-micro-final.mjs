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

// L4 needs ~200 more words
const ADD_L4 = `
## Construire un réseau de soutien pendant la préparation

La préparation au DALF C1 est souvent une expérience solitaire, surtout pour les candidats qui se préparent de manière autonome sans cours organisés. Construire un petit réseau de soutien — même informel — peut faire une différence significative sur la durée et la qualité de la préparation. Ce réseau peut inclure d'autres candidats qui passent le même examen à la même session, des amis francophones prêts à vous aider à corriger des productions ou à pratiquer la conversation formelle, et des professeurs ou tuteurs disponibles ponctuellement pour des questions spécifiques. Les forums en ligne dédiés aux apprenants de français avancé et aux candidats au DALF (sur Reddit, des groupes Facebook ou des plateformes de langues comme Duolingo ou italki) offrent également des espaces de partage d'expérience et de ressources entre candidats. Partager ses difficultés et ses succès avec d'autres personnes qui vivent la même expérience de préparation renforce la motivation et fournit des perspectives extérieures utiles sur ses propres progrès.
`;

// L5 needs ~100 more words
const ADD_L5 = `
## Derniers conseils pour l'épreuve de compréhension de l'oral

À l'approche de l'examen, quelques rappels pratiques pour l'épreuve de compréhension de l'oral s'imposent. Avant les écoutes, lisez toujours les questions en entier pour orienter efficacement votre attention pendant l'écoute. Pendant la première écoute, notez les informations principales et la structure générale du discours. Pendant la deuxième écoute, complétez, précisez et vérifiez. Après les écoutes, relisez vos notes et rédigez des réponses claires et complètes, en reformulant les informations avec vos propres mots plutôt qu'en copiant des phrases entières du document audio. La reformulation personnelle est valorisée par les correcteurs comme preuve d'une compréhension active et non mécanique. Gérez votre temps avec précision entre les questions pour ne pas laisser de réponses en blanc par manque de temps en fin d'épreuve.
`;

// L6 needs ~100 more words
const ADD_L6 = `
## Un mot final sur la valeur du DALF dans un parcours de vie

S'inscrire au DALF C1 ou C2, c'est décider d'investir dans une certification reconnue qui témoigne de la sérieux de son engagement envers la langue et la culture françaises. Au-delà des bénéfices pratiques immédiats — dispense de test de langue à l'université, avantage dans un dossier de candidature, condition d'obtention d'un visa ou d'un titre de séjour salarié — le DALF est une déclaration personnelle de maîtrise linguistique qui reflète des mois ou des années de travail assidu. Les candidats qui le préparent avec sérieux et l'obtiennent en ressortent systématiquement enrichis, avec une compétence francophone durable et une confiance dans leur capacité à opérer dans des contextes linguistiques exigeants. Ce double bénéfice — pratique et personnel — est ce qui fait du DALF une étape marquante dans le parcours de tout locuteur engagé dans une relation profonde avec la langue française.
`;

await appendAndPatch('43552b36-dbd4-45a5-90dc-57a50489795c', ADD_L4);
await appendAndPatch('aabc2950-a557-42fd-aa56-2d90aa214883', ADD_L5);
await appendAndPatch('ab646234-1557-47bc-be86-e73840dc02c8', ADD_L6);
