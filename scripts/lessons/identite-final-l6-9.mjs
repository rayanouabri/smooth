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
## Synthèse et points clés à retenir

La gestion des documents d'identité en France constitue une compétence administrative fondamentale pour toute personne résidant sur le territoire, qu'elle soit française ou étrangère. Les règles qui encadrent ces documents — leur délivrance, leur validité, leur utilisation et leur remplacement — sont précises et doivent être connues pour éviter les complications pratiques qui peuvent survenir à des moments inopportuns.

La première leçon transversale est celle de l'anticipation : ne jamais attendre le dernier moment pour renouveler un document proche de son expiration, car les délais administratifs sont toujours plus longs que prévu, et les situations d'urgence documentaire sont stressantes et coûteuses en temps comme en argent. La deuxième leçon est celle de l'organisation : maintenir un dossier personnel ordonné de toutes ses pièces d'identité et des copies numérisées sécurisées de ces documents est un investissement en temps minimal qui peut éviter des heures de démarches en cas de perte ou de vol. La troisième leçon est celle de la proactivité : signaler rapidement tout changement de situation aux administrations concernées évite les incohérences dans les systèmes qui peuvent créer des blocages lors de démarches ultérieures.

Maîtriser ces fondamentaux de l'identité administrative en France est le socle sur lequel repose l'ensemble des autres droits et démarches — l'accès aux soins, aux prestations sociales, à l'emploi légal, au logement, et à terme à la vie civique française. Ces connaissances, une fois intégrées, deviennent des réflexes administratifs qui simplifient durablement la gestion de sa vie en France.
`;

const EXTRA_L6 = `
## Questions pratiques sur les pièces d'identité au quotidien

Une confusion fréquente concerne les copies certifiées conformes versus les copies simples. En France, la certification conforme d'une copie à l'original — autrefois réalisée par les mairies — a été largement supprimée par la loi ASAP de 2020, qui a dématérialisé de nombreuses formalités. Désormais, la plupart des administrations ne demandent plus de copies certifiées conformes mais acceptent des photocopies simples accompagnées de la présentation de l'original. Lorsqu'une administration demande encore une copie certifiée, vérifier si cette exigence est réellement obligatoire ou si une photocopie simple suffit peut éviter un déplacement en mairie inutile.

Pour les documents étrangers dont une traduction est nécessaire — acte de naissance étranger, diplôme universitaire étranger — la traduction doit être effectuée par un traducteur assermenté auprès d'un tribunal judiciaire français. La liste des traducteurs assermentés est disponible sur le site de chaque cour d'appel. Une traduction non effectuée par un traducteur assermenté n'a pas de valeur officielle en France, même si elle est réalisée par une personne parfaitement bilingue. Cette exigence formelle est une protection contre les erreurs de traduction dans des documents aux conséquences juridiques importantes.
`;

const EXTRA_L7 = `
## Récapitulatif des réflexes à adopter face à une perte ou un vol de documents

Face à la perte ou au vol de documents d'identité, la séquence d'actions optimale est la suivante. Premièrement, sécuriser les accès numériques si des données permettant d'y accéder étaient dans les documents volés — changer les mots de passe des services en ligne sensibles si un mot de passe était noté dans le portefeuille volé. Deuxièmement, déposer une déclaration de vol ou de perte auprès de la police ou de la gendarmerie dans les 24 à 48 heures suivant la découverte de la perte, et demander plusieurs exemplaires du récépissé. Troisièmement, informer sa banque si des cartes bancaires étaient dans le portefeuille — les procédures de blocage card étant indépendantes des procédures de signalement des documents d'identité. Quatrièmement, engager les démarches de remplacement auprès des autorités compétentes selon le type de document. Cinquièmement, vérifier sur ameli.fr et les services en ligne dans les semaines suivantes qu'aucune démarche frauduleuse n'a été effectuée avec les documents perdus ou volés.

Cette séquence, réalisée rapidement, minimise les conséquences et les risques liés à la perte ou au vol de documents. La gestion efficace d'une telle situation passe par l'anticipation — avoir au préalable numérisé ses documents et noté les numéros importants dans un endroit sécurisé facilite considérablement la rapidité des démarches.
`;

const EXTRA_L8 = `
## Récapitulatif : gérer son passeport étranger depuis la France

La gestion efficace du passeport étranger depuis la France repose sur trois principes. Premièrement, surveiller activement la date d'expiration et anticiper le renouvellement au moins six mois à l'avance — voire plus tôt pour les passeports de pays à forte affluence consulaire. Prendre date dans un agenda ou créer une alerte numérique dès la réception d'un nouveau passeport pour ne pas oublier d'anticiper le prochain renouvellement.

Deuxièmement, maintenir une communication active avec le consulat ou l'ambassade de son pays en France — s'inscrire dans les registres consulaires si cela est proposé, mettre à jour son adresse en France auprès du consulat lors de chaque déménagement, et vérifier périodiquement si des changements dans les procédures consulaires (nouveaux documents requis, nouveaux tarifs, nouvelles modalités de prise de rendez-vous) sont intervenus. Troisièmement, coordonner les renouvellements du passeport et du titre de séjour pour éviter des périodes de simultanéité des deux procédures, en maintenant si possible un décalage de quelques mois entre les dates d'expiration des deux documents.
`;

const EXTRA_L9 = `
## Récapitulatif : maîtriser sa carte Vitale et ses droits à l'Assurance Maladie

La carte Vitale est un outil puissant qui simplifie considérablement l'accès aux soins en France, mais qui nécessite une gestion active pour fonctionner correctement. Les actions régulières à maintenir sont les suivantes : mettre à jour la carte Vitale au moins une fois par an en borne de pharmacie ou en agence CPAM ; vérifier trimestriellement sur ameli.fr que les remboursements effectués correspondent aux soins reçus ; déclarer un médecin traitant si ce n'est pas encore fait pour bénéficier du taux de remboursement optimal ; et informer la CPAM de tout changement de situation (adresse, situation professionnelle, ayants droit).

En cas de difficulté avec les remboursements — soins non remboursés, délais anormalement longs, informations contradictoires entre ameli.fr et les relevés bancaires — la CPAM est joignable par téléphone (3646), par courrier, ou en agence. Le délégué de l'Assurance Maladie, un agent spécialisé disponible sur rendez-vous, peut aider à dénouer les situations complexes et à accélérer le traitement des dossiers bloqués. Ces recours existent và sont efficaces lorsqu'ils sont mobilisés.
`;

await appendAndPatch('a7a6e229-2b37-48a5-80d2-ab3914db026d', TAIL + EXTRA_L6);
await appendAndPatch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', TAIL + EXTRA_L7);
await appendAndPatch('edd463f6-1f57-4bda-b174-96754d0a67c6', TAIL + EXTRA_L8);
await appendAndPatch('0a9a5b53-ae1f-442b-bd5f-a6538622e740', TAIL + EXTRA_L9);
