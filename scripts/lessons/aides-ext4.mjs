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

const BIG_BLOCK = `
## Les droits des étudiants étrangers aux mêmes aides que les étudiants français

Un principe fondamental du droit européen et des conventions internationales ratifiées par la France est l'égalité de traitement dans l'accès aux aides sociales pour les ressortissants étrangers en situation régulière. Les étudiants ressortissants de l'Espace Économique Européen (UE + Norvège, Islande, Liechtenstein) et de la Suisse ont en principe droit aux mêmes aides que les étudiants français, sous réserve de satisfaire aux conditions générales d'éligibilité. Pour les étudiants hors-UE en situation régulière, l'accès aux aides varie selon les conventions bilatérales entre la France et leur pays d'origine.

Les étudiants étrangers qui se voient refuser des aides avec pour motif leur nationalité ou leur pays d'origine ont le droit de contester cette décision. Le Défenseur des Droits (defenseurdesdroits.fr) peut être saisi gratuitement pour instruire des plaintes pour discrimination dans l'accès aux aides sociales. Ces situations, bien que rares, méritent d'être contestées pour que les droits soient effectivement appliqués.

## Les points d'entrée uniques dans le système d'aide : CAF, CROUS, mairie

Le système d'aide aux étudiants comporte de nombreux interlocuteurs différents, ce qui peut rendre la navigation difficile pour un étudiant qui ne connaît pas encore bien le système. Identifier les points d'entrée uniques qui peuvent orienter vers l'ensemble des ressources disponibles simplifie considérablement la démarche.

La mairie du lieu de résidence est souvent un bon point de départ car les CCAS (Centres Communaux d'Action Sociale) ont une vue globale sur toutes les aides disponibles localement, y compris municipales, départementales et nationales. Un rendez-vous au CCAS avec un dossier résumant sa situation (revenus, logement, situation académique) permet de cartographier en une seule réunion toutes les aides potentiellement accessibles et les démarches à effectuer pour y accéder.

## La résilience financière comme objectif à long terme

Au-delà de la gestion des difficultés immédiates, cultiver la résilience financière — la capacité à absorber des chocs économiques sans être déstabilisé — est un objectif à construire progressivement pendant les études. La résilience financière repose sur trois piliers : la diversification des sources de revenus (aides, emplois, bourses), la constitution d'une réserve d'urgence, et la maîtrise des dépenses.

Un étudiant qui dispose de plusieurs sources de revenus — bourse du CROUS, aide CAF, petit emploi ponctuel — est plus résilient qu'un étudiant dépendant d'une seule source qui peut s'interrompre brutalement. Cette diversification des revenus distribue le risque et crée un filet de sécurité naturel. La construction progressive de cette résilience financière pendant les études prépare aux aléas de la vie professionnelle future, où les périodes de chômage ou de difficultés économiques seront gérées avec plus de sérénité par ceux qui ont appris tôt à gérer leurs finances en situation contrainte.
`;

await appendAndPatch('d96c9d24-2b32-4fa0-9625-2217d74a7650', BIG_BLOCK + `
## La veille sur les nouvelles arnaques : rester informé

Les arnaques évoluent constamment pour contourner les défenses que les victimes potentielles ont développées. De nouvelles forms apparaissent régulièrement — les arnaques aux crypto-monnaies qui promettent de multiplier les aides reçues, les faux portails de simulation d'aides qui collectent des données personnelles, les arnaques téléphoniques utilisant des numéros qui imitent ceux des organismes officiels (spoofing). Rester informé de ces évolutions est une protection continue.

L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) et la plateforme Cybermalveillance.gouv.fr publient régulièrement des alertes sur les nouvelles formes d'arnaques numériques. S'abonner aux alertes de cybermalveillance.gouv.fr est une démarche simple qui peut éviter de tomber dans des pièges qui n'existaient pas encore au moment de la rédaction de ce cours.
`);

await appendAndPatch('01449051-1879-46c9-96a5-ce20931ac76d', BIG_BLOCK + `
## Le rôle des associations d'anciens élèves dans le financement des études

De nombreuses associations d'anciens élèves (alumni) des grandes écoles et des universités disposent de fonds de solidarité ou de prêts d'honneur destinés aux étudiants actuels en difficulté financière. Ces ressources, souvent méconnues des étudiants actuels, sont alimentées par les dons des anciens et gérées par les associations alumni. Pour en bénéficier, il suffit généralement de contacter l'association alumni de son établissement et d'exposer sa situation.

La culture de solidarité intergénérationnelle entre alumni est particulièrement développée dans les grandes écoles (HEC, Polytechnique, Sciences Po, Audencia, etc.) mais existe aussi dans de nombreuses universités. Ces aides, données de préférence à des étudiants de la même institution, bénéficient d'un traitement parfois plus souple et plus rapide que les aides institutionnelles, et peuvent représenter des sommes significatives selon la richesse du réseau alumni.
`);

await appendAndPatch('3c2044b9-79ea-470a-994a-94117071a70e', BIG_BLOCK + `
## Les aides alimentaires des mutuelles étudiantes

Au-delà des aides du CROUS et des structures municipales, les mutuelles étudiantes — notamment la LMDE (La Mutuelle des Étudiants) et les mutuelles régionales — peuvent proposer des aides sociales complémentaires à leurs adhérents en difficulté. Ces aides, qui prennent souvent la forme de secours exceptionnels pour les frais de santé ou alimentaires, sont peu connues car elles ne font l'objet d'aucune publicité proactive. Contacter le service social de sa mutuelle étudiante pour s'informer des aides disponibles est une démarche rapide qui peut révéler des ressources insoupçonnées.

Les aides des mutuelles étudiantes sont généralement conditionnées à l'adhésion à la mutuelle et à une situation de précarité documentée. Les montants sont modestes mais peuvent couvrir des besoins urgents spécifiques — ordonnance médicale, consultation spécialisée, ou aide alimentaire d'urgence — qui complètent les autres dispositifs d'aide.
`);

await appendAndPatch('0f811457-418d-4a18-b647-d5882e0b1a80', BIG_BLOCK + `
## L'impact des aides sur le calcul de l'impôt sur le revenu

Les aides perçues par les étudiants ont des traitements fiscaux différents selon leur nature. Les bourses sur critères sociaux du CROUS sont exonérées d'impôt sur le revenu. Les aides au logement de la CAF (APL, ALS, ALF) sont également exonérées. La Prime d'Activité est exonérée d'impôt. En revanche, les revenus d'emploi (jobs étudiants, stages rémunérés au-delà du seuil légal d'exonération) sont potentiellement imposables au-delà des plafonds d'exonération.

Pour les étudiants qui perçoivent à la fois des aides et des revenus d'emploi, l'optimisation fiscale légale passe par une déclaration de revenus correctement remplie qui distingue les revenus imposables des revenus exonérés. Le site impots.gouv.fr propose un guide spécifique pour les étudiants sur les déclarations fiscales, avec des exemples pratiques et des simulateurs qui permettent de vérifier si une déclaration est nécessaire et quel montant d'impôt est éventuellement dû.
`);

await appendAndPatch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', BIG_BLOCK + `
## Le droit au maintien des aides en cas de redoublement ou de changement d'orientation

Un sujet fréquemment source d'inquiétude pour les étudiants est le maintien des aides en cas de redoublement ou de changement de filière. Les bourses du CROUS sont maintenues en cas de redoublement une seule fois, sous certaines conditions — l'étudiant doit avoir obtenu un certain nombre de crédits ECTS dans l'année précédente et le redoublement ne doit pas être le résultat d'une insuffisance manifeste de travail selon l'établissement. En cas de changement d'orientation, les bourses peuvent être maintenues si le changement est justifié par des raisons valables (erreur d'orientation reconnue, problème de santé, etc.).

L'aide au logement de la CAF est en général maintenue indépendamment de la situation académique, tant que le logement et la situation financière restent dans les critères d'éligibilité. La Prime d'Activité dépend uniquement des revenus d'emploi et est indépendante de la situation académique. Se renseigner auprès du CROUS avant de redoubler ou de changer d'orientation sur les conséquences pour les aides est une précaution importante pour éviter une interruption surprise des ressources.
`);

await appendAndPatch('2fab22b0-0b45-47b9-9322-fe943a74380e', BIG_BLOCK + `
## Les pièges des premiers emplois post-études et leur impact sur les aides

La période de transition entre la fin des études et le premier emploi est une période financièrement fragile pendant laquelle de nombreuses aides étudiantes s'arrêtent alors que les revenus professionnels réguliers ne sont pas encore établis. La bourse du CROUS s'arrête à la fin du cursus ; l'aide au logement CAF peut se poursuivre mais sera recalculée ; la Prime d'Activité peut continuer si un emploi à temps partiel est exercé pendant les études.

Anticiper cette transition financière en constituant une réserve progressive pendant les derniers mois des études est la meilleure protection. Les premières semaines d'un emploi peuvent ne pas être immédiatement rémunérées (délai de paiement du premier salaire en fin du premier mois de travail), et les charges du logement continuent d'être dues pendant cette période. Avoir un mois de dépenses en réserve au moment de la transition études-emploi est un filet de sécurité minimal précieux pour traverser cette période sans stress financier.
`);
