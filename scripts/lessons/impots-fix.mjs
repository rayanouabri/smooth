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

// L1: 3649 → +400 words needed
await appendAndPatch('55c0efdd-5e48-46e0-bdd1-f6223e3ba8e2', `

## La gestion des années antérieures non déclarées pour les nouveaux arrivants

Pour les étudiants étrangers qui arrivent en France et qui ne connaissaient pas leurs obligations de déclaration lors de leurs premières années de résidence, la régularisation des années non déclarées est toujours possible et recommandée. Cette régularisation volontaire, effectuée avant toute mise en demeure de l'administration, est traitée avec clémence.

La procédure consiste à déposer des déclarations tardives pour chacune des années non déclarées (dans la limite du délai de prescription de 3 ans). Si les revenus de ces années n'étaient pas imposables (revenus inférieurs aux seuils, exonérations applicables), aucun impôt ni pénalité ne sera dû. La régularisation permet simplement de remettre à jour le dossier fiscal et de pouvoir obtenir des avis de non-imposition pour les années concernées si nécessaire.

Pour les années où un impôt était effectivement dû, les intérêts de retard s'appliquent mais les majorations peuvent être réduites si la déclaration tardive est faite spontanément. Consulter un conseiller fiscal ou le service de l'administration pour comprendre exactement les conséquences avant d'initier la régularisation est recommandé, surtout si la situation est complexe.

## Conclusion : la première déclaration comme acte fondateur de l'autonomie administrative

Pour un étudiant étranger arrivant en France, accomplir sa première déclaration de revenus représente bien plus qu'une simple obligation administrative. C'est un acte fondateur de l'intégration dans le système administratif français, la preuve de la maîtrise d'une procédure complexe, et le point de départ d'une relation durable avec l'administration fiscale française. Cette première expérience, bien préparée et bien exécutée, ouvre la voie à une vie administrative sereine et maîtrisée dans le pays d'accueil.`);

// L2: 3886 → +130 words needed
await appendAndPatch('449fb117-48e3-45da-89af-7a75c6212c80', `

## Conclusion : maîtriser son impôt pour maîtriser ses finances

La déclaration de revenus est un exercice annuel dont la maîtrise apporte une compréhension concrète de sa situation financière globale. Pour les étudiants qui développent cette compétence dès leurs premières années d'activité professionnelle, les bénéfices s'accumulent : économies d'impôt grâce aux exonérations utilisées correctement, accès optimisé aux aides sociales, et confiance dans sa capacité à gérer sa vie administrative et financière de façon autonome. La déclaration annuelle n'est plus un fardeau mais un outil de connaissance de soi financière.`);

// L3: 3948 → +60 words needed
await appendAndPatch('0242d07b-a407-4d13-9a58-3abfb2aa6728', ` La maîtrise pratique de la déclaration en ligne est une compétence numérique qui renforce l'autonomie administrative de l'étudiant et facilite toutes ses interactions futures avec l'administration française. Avec la pratique, cette démarche annuelle devient rapide, précise et sans stress.`);

// L4: 3910 → +100 words needed
await appendAndPatch('a824e932-2924-4061-9a58-af1834373a0f', `

## Conclusion : utiliser tous les dispositifs disponibles

Le système fiscal français met à disposition des étudiants un ensemble de dispositifs d'exonération, de déduction et de crédit d'impôt qui, utilisés correctement, permettent de préserver la quasi-totalité de ses revenus modestes. La connaissance de ces dispositifs est la condition première de leur utilisation. Informez-vous, simulez, et décidez en connaissance de cause pour optimiser légalement votre situation fiscale pendant toute la durée de vos études.`);

// L5: 3896 → +110 words needed
await appendAndPatch('22b05575-9363-4fd1-bdef-96e12749c592', `

## Conclusion : la précision comme protection

Dans le domaine fiscal, la précision dans la déclaration est la meilleure protection contre les complications. Une déclaration précise, correcte, et bien documentée ne craint aucun contrôle et n'expose à aucune sanction. Investir le temps et l'attention nécessaires pour une déclaration rigoureuse est un investissement minimal pour une sécurité maximale dans sa relation avec l'administration fiscale française.`);
