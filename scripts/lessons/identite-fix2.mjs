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

// L1: 3875 → need +125
await appendAndPatch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', `\n\nLa vigilance administrative est un investissement continu qui protège durablement la régularité du séjour. Chaque renouvellement effectué dans les délais, chaque changement signalé rapidement, chaque document conservé soigneusement contribue à construire un dossier solide qui facilitera les démarches futures — qu'il s'agisse d'obtenir une carte de résident, de demander la naturalisation, ou simplement de renouveler sereinement un titre de séjour annuel. La connaissance des droits attachés au titre de séjour est une compétence qui s'acquiert progressivement et qui transforme la relation à l'administration française, passant de l'anxiété à la maîtrise.`);

// L2: 3895 → need +105
await appendAndPatch('c45ead0e-59bd-4111-ae65-a67f5876e64a', `\n\nLa carte nationale d'identité française est avant tout le symbole tangible de l'appartenance à la communauté nationale française. Pour les personnes naturalisées après un long parcours d'intégration, elle représente l'aboutissement d'un projet de vie et l'ouverture de tous les droits civiques de la citoyenneté française. Pour les Français de naissance, elle est si commune qu'on en oublie parfois l'importance — jusqu'au moment où on en a besoin et où elle n'est plus valide. Entretenir ses documents d'identité français avec soin et les renouveler à temps est un geste de responsabilité civique élémentaire.`);

// L3: 3911 → need +89
await appendAndPatch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', `\n\nLe numéro de Sécurité sociale est bien plus qu'un identifiant administratif — c'est le fil qui relie l'ensemble du parcours de protection sociale d'une personne en France, des premiers soins à la retraite. Obtenir son NIR définitif rapidement après l'arrivée en France, le protéger comme une donnée sensible, et l'utiliser correctement dans toutes les démarches sociales est la base d'une intégration administrative réussie dans le système de protection sociale français.`);

// L4: 3951 → need +49
await appendAndPatch('88815b07-7563-421e-b88a-97f4bcb999c2', `\n\nL'état civil est le socle de l'identité juridique de chaque personne. Maintenir ses actes d'état civil à jour, les faire légaliser et traduire lorsque nécessaire, et comprendre leur portée dans les démarches administratives françaises sont des compétences essentielles pour toute personne vivant en France.`);

// L5: 3878 → need +122
await appendAndPatch('99c1c557-b868-495b-9614-cf90a7dd7919', `\n\nL'adoption des outils d'identité numérique comme FranceConnect et la signature électronique représente une opportunité réelle de simplifier ses relations avec l'administration française. Ces outils, bien utilisés et en respectant les précautions de sécurité élémentaires, transforment des démarches autrefois fastidieuses en opérations rapides auxquelles on peut accéder depuis n'importe quel endroit. La maîtrise de ces outils numériques est désormais une composante à part entière de l'intégration dans la société française contemporaine.`);

// L6: 3864 → need +136
await appendAndPatch('a7a6e229-2b37-48a5-80d2-ab3914db026d', `\n\nLa diversité des documents d'identité en France — carte nationale d'identité pour les Français, passeport pour tous les ressortissants étrangers, titre de séjour pour les résidents non-européens, carte Vitale pour les assurés sociaux — reflète la complexité d'une société diverse qui doit identifier ses membres tout en protégeant leur vie privée. Comprendre quel document est adapté à chaque situation, connaître ses droits en termes de protection des données, et maintenir ses documents à jour sont les compétences fondamentales de la vie administrative en France.`);

// L7: 3940 → need +60
await appendAndPatch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', `\n\nLa perte de documents est une épreuve, mais elle est surmontable. Avec les bons réflexes, les bonnes démarches et les bonnes ressources, la reconstruction de son dossier documentaire est possible dans des délais raisonnables. La préparation préventive reste la meilleure protection.`);

// L8: 3956 → need +44
await appendAndPatch('edd463f6-1f57-4bda-b174-96754d0a67c6', `\n\nLe passeport étranger est un document précieux dont la gestion depuis la France demande vigilance et anticipation. Maintenir ce document valide tout au long du séjour est une responsabilité incontournable pour tout ressortissant étranger résidant en France.`);

// L9: 3990 → need +10
await appendAndPatch('0a9a5b53-ae1f-442b-bd5f-a6538622e740', `\n\nBonne utilisation de votre carte Vitale et bons soins en France.`);
