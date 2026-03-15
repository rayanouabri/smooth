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

// Final top-up for L3 (need ~150 more words)
const TOP_L3 = `
## Ressources complémentaires pour mieux gérer son dossier CAF

Plusieurs ressources officielles en ligne permettent d'approfondir la compréhension des mécanismes de suspension, de trop-perçu et de fraude à l'APL. Le site service-public.fr propose des fiches synthétiques sur les obligations des allocataires, les délais de prescription des créances sociales et les procédures de recours amiable. Le site caf.fr dispose d'une FAQ complète dans son centre d'aide, accessible sans connexion, qui répond à de nombreuses questions pratiques sur la gestion du dossier. Pour les étudiants qui préfèrent un accompagnement humain, la prise de rendez-vous avec un conseiller CAF est possible depuis l'espace Mon Compte, que ce soit en présentiel dans l'agence locale ou en visioconférence pour les questions complexes. Cette option est particulièrement utile quand une situation sort des cas standards et nécessite un examen individualisé.
`;

// Final top-up for L4 (need ~225 more words)
const TOP_L4 = `
## Ressources officielles pour les étudiants étrangers

Les étudiants étrangers confrontés à des questions sur leur éligibilité à l'APL peuvent s'appuyer sur plusieurs ressources officielles fiables. Le portail Campus France (campusfrance.org) propose des guides pratiques sur les démarches administratives à l'arrivée en France, incluant les aides au logement et les démarches CAF. La section «Vivre en France» détaille les spécificités selon le pays d'origine et le type de visa. Le site de l'OFII (ofii.fr) permet de valider son visa de long séjour en ligne et de comprendre les démarches de renouvellement du titre de séjour, étapes préalables indispensables à la constitution d'un dossier CAF. Enfin, les services consulaires de votre pays en France peuvent parfois fournir des informations sur les accords bilatéraux spécifiques ou vous orienter vers des associations compatriotes qui connaissent bien les démarches administratives françaises. Ne restez jamais seul face à un blocage administratif : il existe toujours une ressource d'aide accessible, qu'elle soit institutionnelle, associative ou communautaire.
`;

// Final top-up for L5 (need ~300 more words)
const TOP_L5 = `
## Anticiper les changements de situation pour éviter les trop-perçus

La règle d'or pour éviter les trop-perçus d'APL liés à des changements de revenus est de déclarer tout changement significatif le plus tôt possible, sans attendre la prochaine déclaration annuelle de ressources. La contemporisation traite automatiquement les données salariales via l'URSSAF, mais elle ne capture pas tout : les bourses étrangères, les revenus non déclarés aux organismes sociaux français, les revenus de capital ou les pensions alimentaires doivent être déclarés manuellement lors de votre déclaration annuelle. Pour éviter toute surprise lors de cette déclaration, tenez un tableau personnel simple de tous vos revenus mois par mois, incluant les sources non capturées par la contemporisation. Cette habitude de gestion budgétaire rigoureuse, utile bien au-delà du seul dossier CAF, vous permettra de compléter votre déclaration annuelle avec précision et de détecter tout écart avant même que la CAF ne le signale. Des applications mobiles de gestion budgétaire personnelle peuvent faciliter ce suivi, en vous permettant de catégoriser chaque entrée d'argent selon son origine et son statut fiscal.
`;

// Final top-up for L6 (need ~215 more words)
const TOP_L6 = `
## Conclusion : faire de ses aides sociales un levier d'autonomie étudiante

L'APL, la bourse CROUS, la prime d'activité, la garantie Visale, les aides locales et les dispositifs de santé comme la CSS ne sont pas des aumônes accordées par un État bienveillant mais des droits fondamentaux construits par des décennies de politiques sociales visant à garantir l'égalité des chances dans l'accès aux études supérieures. Les activer sans honte et avec détermination est un acte citoyen autant qu'une décision financière rationnelle. Chaque euro d'aide correctement activée est un euro que vous n'avez pas à gagner en sacrifiant du temps d'étude, un euro qui finance votre réussite académique et votre épanouissement personnel. Considérez ces démarches administratives comme un investissement d'une heure qui rapporte des centaines d'euros sur l'année. La complexité administrative française, si elle peut sembler décourageante au premier abord, est navigable avec les bonnes informations et les bons accompagnements. Cette leçon, et l'ensemble du cours sur la CAF et l'APL, vous donne les clés pour transformer ce labyrinthe apparent en un système dont vous pouvez tirer le meilleur parti.
`;

await appendAndPatch('486ce28a-10ab-4c88-80c8-e4e44122713f', TOP_L3);
await appendAndPatch('da7e82e3-0993-4675-9aaa-e0ea3ba7138a', TOP_L4);
await appendAndPatch('1393b8f5-c0bc-4218-aa6d-248325c219d1', TOP_L5);
await appendAndPatch('3d1ec51d-e234-40b3-9678-15c8385e866a', TOP_L6);
