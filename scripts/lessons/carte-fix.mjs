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

// L1: 3972 → need +30
await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', ' Une gestion éclairée de sa carte bancaire est la fondation d\'une vie financière solide et autonome en France.');

// L2: 3776 → need +230
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', `

## Le suivi des modifications des offres bancaires

Les offres bancaires évoluent régulièrement — nouvelles promotions, modifications tarifaires, nouvelles fonctionnalités. Suivre ces évolutions permet de s'assurer que sa banque reste competitive et bien adaptée à sa situation. S'abonner aux actualités de sa banque, consulter périodiquement les comparatifs en ligne, et participer à des communautés d'utilisateurs qui partagent les bons plans bancaires sont des habitudes qui permettent de rester informé sans y consacrer beaucoup de temps. L'objectif n'est pas de changer de banque à chaque nouvelle offre, mais de conserver une conscience active du marché bancaire pour agir si une opportunité vraiment avantageuse se présente ou si sa banque se détériore significativement en qualité ou en prix.`);

// L3: 3688 → need +320
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', `

## Les bonnes habitudes de sécurité à cultiver dès le premier jour

La sécurité de sa carte bancaire est une discipline qui se construit par des habitudes régulières plutôt que par des actions ponctuelles. Vérifier ses transactions bancaires au moins deux fois par semaine, maintenir les plafonds aux niveaux nécessaires sans les maximiser par défaut, utiliser des mots de passe forts et uniques pour l'application bancaire, et activer l'authentification biométrique si disponible sont des pratiques simples qui, appliquées consistently, constituent un bouclier efficace contre la grande majorité des fraudes bancaires. La discipline de la sécurité, comme celle de la gestion budgétaire, se construit progressivement et devient naturelle avec le temps. Les étudiants qui adoptent ces bonnes habitudes dès leur première carte bancaire ont un avantage durable sur ceux qui les découvrent après avoir subi une fraude.`);

// L4: 3696 → need +310
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', `

## L'importance de comprendre les plafonds avant les occasions importantes

Les occasions qui nécessitent des dépenses exceptionnelles — début de l'année universitaire avec achat de matériel, voyage en groupe, opération de déménagement — doivent être anticipées du point de vue des plafonds de carte. Un plafond hebdomadaire de 1 000 euros peut être insuffisant si on doit payer un dépôt de garantie de 800 euros et acheter des meubles chez IKEA pour 600 euros la même semaine. Anticiper ces moments et augmenter les plafonds temporairement via l'application quelques jours avant l'occasion est une démarche qui évite les blocages frustrants au moment le plus inopportun. Après la période de dépenses exceptionnelles, réduire les plafonds à leur niveau habituel restaure la protection optimale contre l'utilisation frauduleuse en cas de vol.`);

// L5: 3738 → need +270
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', `

## La carte comme premier pas vers l'autonomie financière

Pour les jeunes adultes qui reçoivent leur première carte bancaire, cet objet symbolise la transition vers l'autonomie financière. Gérer un compte bancaire, maîtriser ses dépenses, et construire progressivement une épargne sont des compétences qui se développent par la pratique. Les erreurs de gestion initiales — un découvert imprévu, une dépense excessive dans un moment d'enthousiasme — font partie de l'apprentissage. L'important est d'en tirer des leçons concrètes et de mettre en place des dispositifs qui évitent leur répétition. La maîtrise progressive de sa carte bancaire est un microcosme de la maîtrise globale de sa vie financière : une compétence qui s'améliore continuellement avec l'expérience et la réflexion.`);

// L6: 3804 → need +200
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', `

## Vers une gestion bancaire mature et autonome

La maîtrise progressive de sa carte bancaire et de ses produits associés est une compétence d'adulte qui se construit dans le temps. Les étudiants qui investissent dans leur éducation financière dès leurs premières années d'études — en comprenant les mécanismes de leur carte, en pratiquant activement la comparaison des offres, et en adoptant systématiquement les bonnes pratiques de sécurité — se donnent une base solide pour toutes les grandes décisions financières à venir. Cette compétence, rarement enseignée à l'école, fait toute la différence entre une vie financière subie et une vie financière choisie et maîtrisée.`);
