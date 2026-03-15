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

// L1: 3692 → need +308
const FIX_L1 = `

## Les nouveaux formats de titre de séjour et leur reconnaissance progressive

Les formats des titres de séjour français ont évolué au fil des années et des réformes administratives. La transition vers des titres plastifiés au format carte bancaire, plus sécurisés et plus durables que les anciens formats cartonnés ou plastifiés de grande taille, est presque achevée pour les nouvelles délivrances. Cependant, des titulaires peuvent encore détenir d'anciens formats de titre de séjour valides qui sont moins couramment reconnus par les opérateurs privés peu familiers de l'évolution des formats. Dans ces cas, présenter simultanément le passeport permet généralement de lever les incertitudes. La connaissance de l'évolution des formats de titre de séjour est également utile pour les agents qui vérifient les documents — une maîtrise insuffisante de ces formats peut conduire à des refus injustifiés que la personne concernée doit être en mesure de contester. En cas de contestation injustifiée de la validité de son titre de séjour, noter le nom et la fonction de l'agent qui a refusé le document et contacter ensuite la préfecture pour signaler l'incident est la démarche appropriée.
`;

// L2: 3741 → need +259
const FIX_L2 = `

## La carte d'identité française et les droits consulaires à l'étranger

Pour un citoyen français à l'étranger, la carte nationale d'identité française est bien plus qu'une simple preuve d'identité — c'est le document qui lui permet d'accéder à la protection et aux services consulaires de la France dans le monde entier. Le réseau diplomatique et consulaire français, l'un des plus étendus au monde avec plus de 300 ambassades, consulats généraux et consulats, offre une gamme de services aux Français de l'étranger : renouvellement des documents officiels, état civil, aide aux ressortissants en difficulté, assistance en cas d'arrestation ou de détention. La carte d'identité française présentée à l'ambassade ou au consulat français est le sésame qui déclenche l'accès à ces services réservés aux ressortissants français. Pour les personnes naturalisées françaises qui ont la carte d'identité depuis peu, cette dimension protestatrice de la citoyenneté française peut être une découverte réconfortante lors de situations difficiles à l'étranger.
`;

// L3: 3750 → need +250
const FIX_L3 = `

## Le NIR provisoire et ses usages légaux en attendant le définitif

Le numéro de Sécurité sociale provisoire attribué par la CPAM en attendant le NIR définitif de l'INSEE est un numéro fonctionnel qui commence par le chiffre 7 ou 8 (selon le sexe et selon que la naissance est à l'étranger). Ce numéro provisoire permet d'accéder à l'ensemble des prestations de l'Assurance Maladie — remboursements de soins, carte Vitale provisoire — et peut être utilisé dans les déclarations de revenus et les relations avec l'employeur. Certains organismes (notamment certaines banques et certains services en ligne) peuvent signaler qu'ils ne reconnaissent pas le format du numéro provisoire — dans ces cas, présenter une attestation de la CPAM expliquant le statut du numéro provisoire suffit généralement à débloquer la situation. L'essentiel est de ne laisser personne vous dire que vous n'avez pas de droits parce que votre numéro est provisoire : juridiquement, le numéro provisoire ouvre les mêmes droits que le définitif.
`;

// L4: 3820 → need +180
const FIX_L4 = `

## Les actes d'état civil et les démarches de retraite internationale

Pour les personnes qui ont travaillé dans plusieurs pays et qui souhaitent faire valoir des droits à la retraite dans chacun de ces pays, les actes d'état civil jouent un rôle central dans la coordination des systèmes de retraite. Chaque caisse de retraite nationale demande une copie de l'acte de naissance pour ouvrir un dossier de pension — ce document est la preuve fondamentale de l'identité et de la date de naissance qui détermine l'âge de départ en retraite. Pour les personnes nées à l'étranger, maintenir un stock de copies légalisées et traduites de l'acte de naissance dans les langues des différents pays où l'on a travaillé est une précaution utile qui facilite les démarches lors du départ en retraite.
`;

// L5: 3728 → need +272
const FIX_L5 = `

## FranceConnect et les démarches fiscales : déclaration de revenus et avis d'imposition

La déclaration de revenus annuelle en France est l'une des démarches administratives les plus importantes de l'année pour toute personne assujettie à l'impôt sur le revenu dans ce pays. FranceConnect permet d'accéder rapidement au service de déclaration en ligne impots.gouv.fr, où la déclaration est souvent préremplie avec les informations transmises par les employeurs et les caisses de retraite. Pour les étrangers qui déclarent leurs revenus français pour la première fois, FranceConnect simplifie l'accès à ce service en évitant la création d'un compte séparé dès lors qu'un des fournisseurs d'identité participants est déjà actif. L'avis d'imposition généré après chaque déclaration est un document officiel fréquemment demandé dans les démarches administratives françaises — location de logement, demande de crédit, demande d'aide sociale — et son téléchargement via impots.gouv.fr connecté via FranceConnect est la méthode la plus rapide pour l'obtenir.
`;

// L6: 3731 → need +269
const FIX_L6 = `

## Les documents d'identité dans les situations de médiation et de litiges

Dans les situations de litige avec un organisme — contestation d'une décision administrative, médiation avec un bailleur, recours contre une décision de rejet — les documents d'identité jouent un rôle de preuve dans l'établissement du dossier. La cohérence entre l'identité déclarée dans le recours et l'identité figurant sur les documents présentés est vérifiée par les médiateurs et les tribunaux. Les erreurs d'identité dans les actes de procédure peuvent conduire à des complications ou des retards dans le traitement des dossiers. Pour les personnes dont le nom peut s'écrire de différentes façons selon les documents (translittérations différentes, prénoms composés abrégés), une note explicative jointe aux dossiers de recours qui récapitule les différentes graphies utilisées dans les différents documents peut prévenir les confusions.
`;

// L7: 3777 → need +223
const FIX_L7 = `

## La reconstruction progressive de l'identité administrative après une perte totale de documents

Dans les cas les plus graves — perte simultanée de tous les documents lors d'un incendie, d'une inondation, ou d'un vol intégral — la reconstruction de l'identité administrative est un processus de plusieurs mois qui doit être abordé avec méthode. La priorité est d'obtenir d'abord les documents qui servent de base pour obtenir les autres : l'acte de naissance est généralement le premier document à reconstituer (depuis l'état civil du lieu de naissance), car il fonde la délivrance de tous les autres documents d'identité. Pour les étrangers, le consulat de leur pays est le premier interlocuteur pour les actes de naissance étrangers. Une fois l'acte de naissance obtenu, la demande de titre de séjour peut être engagée, et les autres documents suivent progressivement. La patience et la persévérance sont les qualités essentielles dans ce processus — aucun raccourci n'existe, mais les délais sont prévisibles et gérables avec une bonne organisation.
`;

// L8: 3826 → need +174
const FIX_L8 = `

## Les passeports et les programmes de visa facilité pour les résidents longue durée

Certains pays accordent des facilités de visa ou des exemptions de visa aux résidents de longue durée d'autres pays, indépendamment de leur nationalité. Ainsi, un ressortissant brésilien titulaire d'une carte de résident française peut bénéficier d'une exemption de visa pour certains pays qui accordent cette facilité aux résidents de l'UE sans l'étendre aux deux nationaux brésiliens. Ces facilités, variables selon les pays signataires d'accords de réciprocité avec l'UE, méritent d'être vérifiées avant chaque voyage — la situation peut avoir changé depuis le dernier voyage dans le pays concerné. La consultation du site du ministère français des Affaires étrangères (France.fr/conseilsvoyageurs) donne les informations actualisées sur les régimes de visa applicables aux ressortissants étrangers résidant légalement en France.
`;

// L9: 3934 → need +66
const FIX_L9 = `

La maîtrise des droits à l'Assurance Maladie et l'utilisation efficace de la carte Vitale sont des compétences qui s'acquièrent progressivement et qui améliorent significativement la qualité de l'accès aux soins en France. Investir le temps nécessaire pour comprendre ces mécanismes au début de son installation est un investissement qui se paie tout au long du séjour.
`;

await appendAndPatch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', FIX_L1);
await appendAndPatch('c45ead0e-59bd-4111-ae65-a67f5876e64a', FIX_L2);
await appendAndPatch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', FIX_L3);
await appendAndPatch('88815b07-7563-421e-b88a-97f4bcb999c2', FIX_L4);
await appendAndPatch('99c1c557-b868-495b-9614-cf90a7dd7919', FIX_L5);
await appendAndPatch('a7a6e229-2b37-48a5-80d2-ab3914db026d', FIX_L6);
await appendAndPatch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', FIX_L7);
await appendAndPatch('edd463f6-1f57-4bda-b174-96754d0a67c6', FIX_L8);
await appendAndPatch('0a9a5b53-ae1f-442b-bd5f-a6538622e740', FIX_L9);
