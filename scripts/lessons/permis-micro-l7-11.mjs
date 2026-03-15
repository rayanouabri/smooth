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

// L7 at 3631 — need ~369+
const M_L7 = `
## L'accompagnement administratif comme compétence transversale

La capacité à gérer ses démarches administratives liées au titre de séjour est une compétence transversale qui, une fois acquise, déborde sur de nombreux autres aspects de la vie administrative française. Un étranger qui a appris à constituer des dossiers solides, à anticiper les délais, à communiquer efficacement avec les administrations et à connaître ses droits et ses voies de recours dans le domaine des titres de séjour a développé des aptitudes qui lui seront utiles dans ses relations avec d'autres administrations — la CAF, les impôts, la santé, l'éducation nationale.

Cette compétence administrative transversale est l'un des bénéfices non formels mais réels du parcours d'intégration administrative en France. Elle transforme des administrés passifs en acteurs informés de leur relation à l'État français — une transformation qui bénéficie non seulement aux individus eux-mêmes, mais aussi à la qualité générale de la relation entre les étrangers et les administrations françaises.

Investir dans cette compétence — en lisant, en posant des questions, en partageant les informations — est l'un des meilleurs investissements qu'un étranger en France puisse faire pour son propre bénéfice et pour celui de sa communauté.
`;

// L8 at 3710 — need ~290+
const M_L8 = `
## Conclusion : le titre étudiant, point de départ d'une trajectoire ambitieuse

Le titre de séjour étudiant est bien plus qu'une autorisation administrative de séjourner en France pour des études. C'est le fondement légal d'une période de vie intense — intellectuellement, culturellement, humainement — qui peut transformer durablement la trajectoire d'une personne et ouvrir des portes insoupçonnées.

Pour les étudiants étrangers qui abordent cette période avec sérieux et ouverture, les années passées sous titre étudiant en France sont généralement parmi les plus formatrices de leur vie. La maîtrise du français comme langue de pensée et de communication professionnelle, la connaissance approfondie de la culture et de la société française, le réseau professionnel et amical construit sur les bancs des universités et dans les couloirs des entreprises lors des stages : autant d'actifs durables qui surviveront bien au-delà de l'expiration du dernier titre de séjour étudiant.

Gérer son titre de séjour étudiant avec vigilance et anticipation est donc non pas une contrainte mais une responsabilité envers soi-même — la protection du cadre légal qui rend possible cette expérience formatrice.
`;

// L9 at 3775 — need ~225+
const M_L9 = `
## Le Passeport Talent Chercheur dans l'écosystème international de la recherche

La recherche est inheremment internationale — les grandes avancées scientifiques naissent de la collaboration entre chercheurs de différents pays et traditions académiques. Le Passeport Talent Chercheur est la réponse de la France à la nécessité de rester ouverte à cette mobilité internationale pour maintenir son rang dans la compétition scientifique mondiale.

Pour les chercheurs qui choisissent la France comme terrain de leurs travaux, ce titre est le garant d'une stabilité administrative qui leur permet de se concentrer sur l'essentiel : la recherche herself. La qualité d'un séjour scientifique en France dépend bien sûr des conditions de travail matérielles et intellectuelles, mais aussi de la tranquillité administrative — une préoccupation que le Passeport Talent Chercheur contribue à alléger significativement.
`;

// L10 at 3377 — need ~623+
const M_L10 = `
## La carte de résident et le sentiment d'appartenance

La possession d'une carte de résident transforme subtilement la rapport psychologique à la France. Là où les titres temporaires entretenaient une incertitude annuelle sur la pérennité du séjour — incertitude qui pouvait limiter les investissements personnels et professionnels à long terme —, la carte de résident permet de se projeter avec confiance dans l'avenir français.

Cette confiance dans la pérennité du séjour libère des ressources émotionnelles et décisionnelles précieuses : la liberté d'acheter un bien immobilier sans craindre de ne pas pouvoir le conserver en cas de refus de renouvellement, la liberté de postuler à des emplois publics sans avoir à mentionner que son titre expire dans six mois, la liberté de planifier des vacances à l'étranger sans se soucier de la validité du titre de séjour au retour.

Ce sentiment d'appartenance sécurisée — d'être chez soi en France, sans conditions annuelles à remplir — est peut-être la dimension la plus profonde et la moins quantifiable de la valeur de la carte de résident. Elle transforme le rapport affectif à la France : de résidence conditionnelle, elle devient un chez-soi durable.

## Les indicateurs d'intégration valorisés dans les demandes de carte de résident

Les services préfectoraux évaluent l'intégration républicaine d'un demandeur de carte de résident à travers un faisceau d'indicateurs qui dépasse le simple niveau de langue. La participation à la vie économique française — stabilité de l'emploi, régularité des déclarations fiscales, absence de dettes fiscales ou sociales — est une preuve d'intégration concrète qui compte dans l'appréciation du dossier.

La participation à la vie sociale et associative — inscription dans des associations, bénévolat, participation à des événements locaux — est un autre indicateur valorisé. La vie familiale enracinée en France — enfants scolarisés, conjoint stable, logement de longue durée — témoigne d'un ancrage qui dépasse les seules obligations professionnelles. La connaissance de la langue française démontrée dans les échanges avec les administrations, dans les lettres accompagnant le dossier, dans la clarté et la précision avec lesquelles la situation est présentée : autant d'éléments que l'instructeur perçoit indirectement à travers la qualité du dossier lui-même.

Présenter un dossier de carte de résident soigné, clairement organisé, accompagné d'une lettre de présentation bien rédigée qui synthétise le parcours d'intégration, est en soi une démonstration d'intégration qui reflète les compétences administratives et linguistiques acquises au fil du séjour.

## La préparation psychologique à la longue durée de traitement

L'un des aspects les moins documentés de la demande de carte de résident est la dimension psychologique de l'attente prolongée entre le dépôt du dossier et la décision. Dans certaines préfectures, cette attente peut aller jusqu'à douze à dix-huit mois. Pendant toute cette période, le demandeur est dans une incertitude administrative qui peut générer un stress significant.

Préparer psychologiquement cette attente — en acceptant qu'elle est structurelle et non un signe négatif, en maintenant une vie active et épanouissante malgré l'incertitude administrative, en évitant de développer une anxiété paralysante face à une décision sur laquelle on n'a plus de prise une fois le dossier déposé — est une compétence émotionnelle utile. Les associations et les pairs qui ont traversé ce processus peuvent apporter un soutien moral précieux pendant cette période d'attente.
`;

// L11 at 3791 — need ~209+
const M_L11 = `
## L'information comme clé de voûte de la régularité administrative

L'information est la ressource la plus précieuse pour quiconque doit gérer un titre de séjour en France. Une information correcte, à jour et adaptée à sa situation personnelle permet d'anticiper les démarches, d'éviter les erreurs, de connaître ses droits et de formuler des demandes qui ont les meilleures chances de succès.

Trop souvent, les étrangers font l'économie de cette information — par manque de temps, par confiance dans des conseils informels, ou par méconnaissance des ressources disponibles. Investir régulièrement quelques heures par an dans la mise à jour de ses connaissances sur le droit des étrangers — en visitant les sites officiels, en assistant aux permanences des associations, en consultant un professionnel pour les situations complexes — est un investissement dont le rendement administratif est élevé.

Ce cours sur les titres de séjour vous a fourni une base d'information solide. La maintenir à jour, la compléter avec les informations spécifiques à votre préfecture et à votre situation, et la partager avec les personnes de votre entourage qui en ont besoin : voilà le meilleur usage que vous puissiez en faire.
`;

await appendAndPatch('aac8c4c1-7ab2-45b3-a5b5-4e2748f16939', M_L7);
await appendAndPatch('2db95ef5-7de7-4bac-a68f-0ef96dddf981', M_L8);
await appendAndPatch('c22002fe-75ce-41af-bd63-5ed570312d28', M_L9);
await appendAndPatch('9419e826-62cc-4a80-96e5-638ba995184e', M_L10);
await appendAndPatch('9a533bac-7df9-412e-922e-0dcdf500fd0b', M_L11);
