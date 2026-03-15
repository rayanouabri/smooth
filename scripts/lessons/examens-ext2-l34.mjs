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

// L3: 2506 -> need ~1600 more
const ADD_L3 = `
## Le cadre institutionnel des droits étudiants : le Conseil d'État et les juridictions académiques

La protection des droits des étudiants lors des examens s'inscrit dans un cadre juridictionnel précis. Le Conseil d'État, en tant que juridiction administrative suprême, a rendu de nombreuses décisions importantes en matière de droits des étudiants. Il a notamment posé le principe que les décisions des jurys d'examen — même souveraines — doivent respecter les règles de procédure prévues par les textes réglementaires, sous peine d'annulation pour vice de forme. Les recours en excès de pouvoir devant les tribunaux administratifs ont ainsi permis à des étudiants de faire annuler des sessions d'examens conduites de façon irrégulière et d'obtenir des sessions de remplacement.

Ces précédents jurisprudentiels sont importants pour les étudiants qui vivent une situation d'irrégularité grave. Même sans aller jusqu'au tribunal administratif, la simple connaissance de ces fondements juridiques permet d'argumenter plus efficacement lors des recours amiables avec l'administration universitaire.

Les sections disciplinaires des universités constituent une autre juridiction importante dans le paysage institutionnel des droits étudiants. Elles sont composées d'enseignants et d'étudiants élus, et statuent sur les affaires de fraude, de plagiat et de comportements contraires à la réglementation universitaire. Leurs décisions sont susceptibles de recours devant le Conseil national de l'enseignement supérieur et de la recherche (CNESER), puis devant le Conseil d'État.

## Les droits des étudiants en mobilité internationale

Les étudiants qui effectuent une période de mobilité internationale dans le cadre Erasmus ou d'un accord bilatéral bénéficient d'un statut particulier vis-à-vis des examens : ils sont soumis à la réglementation de l'université d'accueil pendant leur séjour, mais leurs droits aux examens et aux aménagements dans l'université d'origine sont préservés pendant leur absence.

Au retour de mobilité, la validation des crédits ECTS obtenus à l'étranger doit se faire dans les délais prévus par le contrat pédagogique établi avant le départ. Si des divergences apparaissent entre les UE prévues dans le Learning Agreement initial et les UE effectivement suivies (changements de programme imposés par l'université d'accueil, modification des disponibilités de cours), l'étudiant doit en informer rapidement son coordinateur Erasmus pour modifier le contrat pédagogique de façon officielle. Un contrat modifié et signé protège l'étudiant en cas de litige sur la reconnaissance des crédits au retour.

## La déontologie académique appliquée aux examens

La déontologie académique est l'ensemble des règles éthiques qui encadrent les comportements des membres de la communauté universitaire — enseignants et étudiants — dans la production et l'évaluation du travail intellectuel. Pour les étudiants, les principes de déontologie académique les plus pertinents dans le contexte des examens concernent l'intégrité des productions (rendre un travail authentiquement personnel, citer correctement ses sources), le respect des règles de passation (ne pas communiquer avec d'autres candidats, ne pas utiliser de supports non autorisés) et la loyauté dans les relations avec les évaluateurs (ne pas tromper l'enseignant sur l'origine ou la nature de son travail).

Ces règles ne sont pas arbitraires : elles garantissent la valeur des diplômes délivrés (un diplôme obtenu par fraude ne certifie rien d'honnête), l'équité entre tous les étudiants (ceux qui respectent les règles ne doivent pas être désavantagés par rapport à ceux qui trichent) et la crédibilité du système académique dans son ensemble. Les comprendre dans leur finalité, et pas seulement comme des contraintes imposées, aide à les respecter de façon authentique et non simplement par peur des sanctions.

## Les droits collectifs des étudiants : représentation et consultation

Les étudiants français disposent d'instances de représentation collectives dans les universités : les Conseils d'Administration (CA), les Conseils Académiques (CAC) et les Conseils de la Vie Universitaire (CVU) incluent des représentants élus des étudiants qui participent aux décisions institutionnelles, notamment sur les politiques d'évaluation et les règlements des études. Participer à ces élections ou se présenter comme représentant étudiant est un moyen d'influencer collectivement les conditions d'évaluation.

Les syndicats étudiants (UNEF, Fédération des Associations Générales Étudiantes, Confédération Étudiante, SOLIDAIRES Étudiant-e-s) organisent des permanences juridiques et des conseils individuels pour les étudiants qui rencontrent des difficultés avec l'administration universitaire en matière d'examens. Même sans adhérer à un syndicat, vous pouvez bénéficier de leurs services d'aide et de conseil.
`;

// L4: 2377 -> need ~1700 more
const ADD_L4 = `
## Les délibérations de jury en master et en doctorat

Dans les formations de niveau master et doctorat, les délibérations de jury présentent des spécificités importantes par rapport au niveau licence. En master, les jurys de soutenance de mémoire sont composés d'enseignants-chercheurs et peuvent comprendre des professionnels extérieurs à l'université. La décision du jury sur le mémoire est souveraine et ne peut être contestée que sur la base d'irrégularités procédurales. La mention attribuée au mémoire («Passable», «Assez Bien», «Bien», «Très Bien», «Très Honorable avec félicitations du jury») influence directement la suite du parcours académique : une mention «Très Honorable avec félicitations» ouvre les portes d'une candidature en doctorat avec une crédibilité académique maximum.

En doctorat, la soutenance de thèse est l'épreuve académique ultime du cursus universitaire français. Elle se déroule en public devant un jury d'au moins quatre membres dont deux «rapporteurs» extérieurs à l'université (qui ont préalablement remis un rapport écrit sur la thèse). La soutenance dure généralement deux à trois heures : une présentation du candidat de 30 à 45 minutes, suivie d'un examen approfondi par chaque membre du jury. La délibération est distincte de la soutenance et se déroule à huis clos. Les mentions de doctorat, bien que supprimées formellement depuis 2016, restent présentes dans certains contextes sous des formulations alternatives.

## Les règles de confidentialité des délibérations

Les délibérations de jury se déroulent en dehors de la présence des étudiants et sont couvertes par une obligation de confidentialité. Les membres du jury ne peuvent pas dévoiler les discussions internes de la délibération, les votes individuels ou les positions défendues par chaque membre avant qu'un accord collectif soit atteint. Les étudiants ont le droit de connaître la décision finale du jury (validation, ajournement, note attribuée), mais pas les détails des discussions internes.

Cette confidentialité est un principe de protection mutuelle : elle protège les étudiants contre une divulgation de jugements incomplets ou mal contextualisés sur leurs performances, et protège les enseignants contre des pressions indues si leurs positions individuelles devenaient publiques. Elle ne constitue pas un mécanisme d'opacité destiné à empêcher les étudiants de comprendre les fondements de la décision — un entretien après délibération avec le directeur de formation peut clarifier les raisons d'une décision de jury dans les limites de cette confidentialité.

## L'harmonisation nationale des pratiques d'évaluation

La France dispose d'un système universitaire décentralisé dans lequel chaque université jouit d'une large autonomie dans la définition de ses rules d'évaluation, dans les limites posées par les arrêtés nationaux (arrêté Licence, arrêté Master). Cette autonomie produit une hétérogénéité des pratiques qui peut être source de confusion pour les étudiants qui changent d'établissement au cours de leur parcours.

Des efforts d'harmonisation nationale sont en cours via le cadre national des formations (CNF), qui définit des référentiels de compétences communs pour les licences et les masters d'une même famille disciplinaire. Ces référentiels ne standardisent pas les modalités précises d'évaluation, mais établissent les compétences attendues à la sortie de chaque niveau de formation — ce qui crée une base commune pour évaluer l'équivalence des diplômes de même niveau et de même discipline délivrés par différentes universités.

## Les outils de calcul de moyenne et de simulation de résultats

Un étudiant bien équipé utilise des outils de calcul pour simuler ses résultats potentiels et planifier sa stratégie de session 2. Des feuilles de calcul simples (Google Sheets, Excel) permettent de modéliser différents scénarios : «Si j'obtiens 8/20 en session 2 de telle matière et 14/20 dans une autre, ma moyenne compensera-t-elle ?», «À partir de quelle note en session 2 puis-je valider mon année ?». Ces simulations transforment des incertitudes abstraites en données concrètes qui guident les décisions de préparation.

Plusieurs applications mobiles et sites web dédiés aux étudiants français permettent de calculer automatiquement les moyennes pondérées, de vérifier les règles de compensation et de simuler les scénarios de session 2. La mise en données de sa situation académique — noter ses coefficients, identifier les UE à risque, calculer la note minimale nécessaire à la session 2 pour compenser — est une forme d'intelligence académique opérationnelle qui réduit l'anxiété face à l'incertitude et oriente les efforts de préparation de façon rationnelle.

## Lever les malentendus culturels autour de la validité des résultats

Dans certaines cultures académiques, notamment d'Afrique subsaharienne et certaines régions d'Asie du Sud-Est, la contestation des résultats d'un enseignant est perçue comme un acte d'impertinence ou d'irrespec vis-à-vis d'une figure d'autorité. Cette norme culturelle peut amener des étudiants internationaux à ne pas exercer des droits pourtant clairement établis dans le système universitaire français, par crainte de froisser leur enseignant ou de se retrouver dans une relation conflictuelle préjudiciable à leurs futures évaluations.

Il est important de comprendre que dans la culture académique française, la consultation d'une copie et la demande d'explication sur une note sont des actes considérés comme légitimes et même souhaitables. Les enseignants français sont généralement satisfaits que leurs étudiants manifestent un intérêt pour comprendre leurs évaluations — cela témoigne d'une motivation et d'un engagement académique appréciés. La frontière à ne pas franchir est le ton : la demande d'explication doit être formulée avec courtoisie et curiosité intellectuelle, pas sur un mode agressif ou accusatoire.
`;

await appendAndPatch('483aa914-73d9-4253-8f78-96569a49b8d9', ADD_L3);
await appendAndPatch('f3af208d-e414-4e9f-a538-19279d6ca4c3', ADD_L4);
