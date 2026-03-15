const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function patch(id, content) {
  const w = content.split(/\s+/).filter(Boolean).length;
  const p = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  console.log(p.ok ? '✅' : '❌ '+p.status, id.slice(0,8), w+' mots');
}

const L1 = `# La première déclaration d'impôts : situations spécifiques aux étudiants étrangers

Pour un étudiant étranger arrivant en France, la déclaration d'impôts est souvent une démarche inconnue qui suscite de nombreuses questions. Le système fiscal français est différent de nombreux systèmes étrangers, et il est important de comprendre dès la première année les règles qui s'appliquent.

## Le statut de résident fiscal en France

Pour être soumis à l'impôt sur le revenu en France, une personne doit être considérée comme résidente fiscale française. Les critères de résidence fiscale sont définis par l'article 4B du Code général des impôts : avoir son foyer ou lieu de séjour principal en France (plus de 183 jours par an), exercer une activité professionnelle principale en France, ou avoir le centre de ses intérêts économiques en France. La plupart des étudiants étrangers qui passent leur année universitaire en France remplissent le critère des 183 jours et doivent donc déclarer leurs revenus mondiaux en France.

## Les conventions fiscales bilatérales

La France a signé des conventions fiscales bilatérales avec plus de 130 pays pour éviter la double imposition. Ces conventions déterminent quel pays a le droit d'imposer quels revenus. Pour un étudiant étranger, cela signifie que ses revenus d'origine étrangère (bourse de son pays, salaire d'un emploi à distance) peuvent être exonérés d'impôt en France selon la convention applicable. Il est crucial de vérifier la convention entre la France et son pays d'origine avant de remplir sa déclaration.

## Les démarches administratives à l'arrivée

Lorsqu'un étudiant étranger arrive en France, il doit s'inscrire auprès du centre des finances publiques de son lieu de résidence. Cette inscription est nécessaire pour obtenir un numéro fiscal, indispensable pour toutes les démarches fiscales. Le numéro fiscal est différent du numéro de sécurité sociale et est attribué par l'administration fiscale lors de la première déclaration ou sur demande.

## Les documents nécessaires pour la première déclaration

La première déclaration nécessite de rassembler plusieurs documents : les justificatifs de revenus perçus en France (bulletins de salaire, attestation de bourse), les relevés de comptes étrangers si des revenus ont été perçus à l'étranger, la convention fiscale applicable avec le pays d'origine, et une pièce d'identité. Pour les bourses étrangères, vérifier si elles sont imposables en France selon la convention applicable est une étape préalable importante.
`;

const L2 = `# Déclarer ses impôts en France : les bases pour un étudiant

La déclaration de revenus est une obligation annuelle pour la majorité des résidents fiscaux français. Pour les étudiants, comprendre les bases du système fiscal permet d'éviter des erreurs coûteuses et de bénéficier des avantages fiscaux disponibles.

## Le calendrier fiscal annuel

En France, la déclaration de revenus se fait une fois par an, généralement au printemps (avril-juin) pour les revenus de l'année précédente. Les dates limites varient selon le mode de déclaration (papier ou en ligne) et selon le département de résidence. La déclaration en ligne via le site impots.gouv.fr est obligatoire si le foyer fiscal dispose d'un accès à internet, sauf exceptions légales. Le non-respect des délais entraîne des pénalités de retard.

## Le foyer fiscal et la déclaration séparée

En France, les impôts sont déclarés par foyer fiscal. Un étudiant qui vit indépendamment de ses parents peut constituer son propre foyer fiscal et déclarer ses revenus séparément. Cette déclaration séparée peut être avantageuse si l'étudiant a des revenus propres, car elle permet de bénéficier d'une part de quotient familial et d'une décote pour les faibles revenus. Les étudiants rattachés au foyer fiscal de leurs parents ne déclarent pas leurs revenus séparément mais leurs parents peuvent les déduire comme enfants à charge.

## Les revenus à déclarer pour un étudiant

Les revenus à déclarer incluent les salaires des jobs étudiants, les revenus d'apprentissage et de stage au-delà d'un certain seuil, les bourses imposables, les revenus de placements financiers (intérêts, dividendes), et les revenus locatifs éventuels. Les allocations familiales, les APL, et la plupart des aides sociales ne sont pas imposables. Il existe des exonérations spécifiques pour certains revenus étudiants qui seront détaillées dans les leçons suivantes.

## L'impôt sur le revenu : barème et calcul

L'impôt sur le revenu en France est progressif, avec un barème par tranches. Pour 2024 (revenus 2023), les tranches vont de 0% (jusqu'à 11 294 euros) à 45% (au-delà de 177 106 euros, pour les très hauts revenus). La grande majorité des étudiants se situe dans la tranche à 0% ou 11%, ce qui signifie que leur impôt est nul ou très faible. La compréhension de ce barème progressif est fondamentale pour anticiper correctement ses obligations fiscales.
`;

const L3 = `# Remplir sa déclaration de revenus en ligne : guide étape par étape

Le site impots.gouv.fr est la plateforme officielle pour déclarer ses revenus en France. Malgré son apparence parfois complexe, la procédure est guidée et accessible une fois qu'on comprend chaque étape.

## Créer son espace particulier sur impots.gouv.fr

La première étape est de créer son espace particulier sur le site des impôts. Pour les nouveaux contribuables, il faut se munir de son numéro fiscal (disponible sur un avis d'imposition ou sur demande au centre des finances publiques), d'une adresse email valide, et d'une pièce d'identité. Les informations de création de compte sont vérifiées et validées par l'administration. Une fois le compte créé, l'espace particulier donne accès à toutes les démarches fiscales en ligne.

## La déclaration pré-remplie

Pour la majorité des contribuables qui ont déjà déclaré au moins une fois, l'administration fiscale propose une déclaration pré-remplie. Cette déclaration contient les informations transmises directement par les employeurs (salaires), les organismes de protection sociale, et les établissements financiers (intérêts bancaires). Il est important de vérifier soigneusement ces informations pré-remplies et de les corriger si nécessaire — des erreurs de montant ou des revenus manquants peuvent se produire.

## Les cases à remplir pour un étudiant

Pour un étudiant avec des revenus simples, les cases principales à remplir sont la case 1AJ pour les salaires (après déduction des 10% automatique des frais professionnels ou des frais réels si plus avantageux), la case relative aux bourses imposables, et les cases relatives aux revenus de placements. Les étudiants sans revenu ou avec des revenus très faibles peuvent tout de même avoir à déclarer pour mettre à jour leur situation fiscale et obtenir un avis de non-imposition utile pour diverses démarches administratives.

## La validation et l'envoi de la déclaration

Une fois toutes les informations vérifiées et complétées, la déclaration est soumise électroniquement. Un accusé de réception numérique est généré et disponible dans l'espace particulier. En cas d'erreur après envoi, une déclaration rectificative peut être soumise avant la date limite, ou une réclamation peut être effectuée après réception de l'avis d'imposition. La déclaration validée génère l'avis d'imposition ou de non-imposition — document officiel utile pour de nombreuses démarches administratives.
`;

const L4 = `# Les exonérations et avantages fiscaux pour les étudiants

Le système fiscal français prévoit plusieurs exonérations et avantages fiscaux spécifiquement conçus pour les étudiants et les jeunes actifs. Les connaître permet de réduire légalement son imposition.

## L'exonération des salaires des jobs étudiants

Les revenus tirés d'un job étudiant bénéficient d'une exonération spécifique. Pour les moins de 26 ans, les salaires perçus pendant les périodes scolaires ou universitaires (ainsi que pendant les congés payés associés) sont exonérés d'impôt sur le revenu dans la limite de trois fois le montant mensuel du SMIC. Cette exonération s'applique aux revenus d'activité (salaires) mais pas aux revenus de remplacement. Elle doit être déclarée spécifiquement dans la case appropriée de la déclaration de revenus.

## L'exonération des gratifications de stage

Les gratifications de stage obligatoire ou de stage long sont exonérées d'impôt sur le revenu dans la limite du montant annuel de l'exonération des heures supplémentaires (variable selon les années). Pour les stages dont la gratification dépasse ce plafond, seule la partie excédentaire est imposable. Cette exonération est particulièrement utile pour les étudiants en école de commerce, d'ingénieurs, ou dans des filières avec des stages rémunérés significatifs.

## La déductibilité des frais de scolarité

Dans certains cas, les frais de scolarité peuvent être déduits des revenus imposables. Pour les alternants, les frais restants à charge après la prise en charge de l'OPCO peuvent être déduits comme frais réels. Pour les étudiants salariés qui financent eux-mêmes une formation en lien avec leur activité professionnelle, la déduction des frais réels peut inclure les frais de scolarité. Cette déductibilité nécessite de justifier le lien entre la formation et l'activité professionnelle exercée.

## La réduction d'impôt pour dons aux associations

Les étudiants qui font des dons à des associations d'intérêt général bénéficient d'une réduction d'impôt de 66% du montant versé (dans la limite de 20% du revenu imposable). Pour les organisations reconnues d'utilité publique, ce taux monte à 75% pour les dons aux organismes d'aide aux personnes en difficulté. Même avec des revenus modestes, si l'impôt est supérieur à zéro, cette réduction peut effacer une partie de l'imposition due.
`;

const L5 = `# Les erreurs à éviter dans la déclaration de revenus

La déclaration de revenus est une procédure administrative qui nécessite attention et rigueur. Les erreurs, même involontaires, peuvent entraîner des redressements fiscaux, des pénalités, et des complications administratives.

## Oublier de déclarer des revenus

L'erreur la plus fréquente est l'omission de revenus. Tous les revenus perçus pendant l'année — y compris les revenus de parents étrangers, les bourses imposables, les petits jobs déclarés, et les revenus de placements — doivent être inclus dans la déclaration. L'administration fiscale reçoit des informations de nombreuses sources et peut détecter des omissions lors d'un contrôle. Même si un revenu semble négligeable, il vaut mieux l'inclure et bénéficier de l'exonération appropriée plutôt que de l'omettre.

## Confondre l'année de perception et l'année d'imposition

La déclaration de revenus porte sur les revenus perçus durant l'année civile précédente. Une erreur courante est de déclarer des revenus de la mauvaise année, notamment pour les étudiants dont les revenus sont irréguliers. Les bulletins de salaire, les attestations d'employeur, et les relevés annuels fournis par les employeurs et organismes payeurs indiquent clairement les montants de l'année concernée.

## Ne pas signaler un changement de situation

Les changements de situation personnelle (mariage, PACS, divorce, naissance d'un enfant, déménagement) doivent être signalés à l'administration fiscale car ils modifient la composition du foyer fiscal et peuvent changer le montant de l'impôt. Pour les étudiants, le passage d'une situation de rattachement au foyer parental à une déclaration indépendante est un changement important à signaler correctement.

## Rater les délais de déclaration

Les déclarations hors délai entraînent des majorations automatiques sur l'impôt dû : 10% si la déclaration est produite dans les 30 jours suivant la mise en demeure, 40% au-delà. Pour les contribuables sans impôt à payer, le retard peut sembler sans conséquence immédiate mais compromet la production de l'avis de non-imposition nécessaire pour diverses démarches. Marquer les dates limites dans son agenda dès le début de l'année est une bonne pratique préventive.
`;

const L6 = `# La fiscalité de l'apprentissage, des stages longs et des jobs étudiants

Les différentes formes de travail des étudiants — contrats d'apprentissage, stages, jobs à temps partiel — ont des régimes fiscaux distincts. Comprendre ces différences permet d'optimiser sa situation fiscale légalement.

## La fiscalité du contrat d'apprentissage

Les revenus perçus dans le cadre d'un contrat d'apprentissage sont exonérés d'impôt sur le revenu dans la limite du montant annuel du SMIC. Pour l'année 2024, cette limite est d'environ 20 815 euros. La grande majorité des apprentis se situe en dessous de ce seuil, rendant leurs revenus d'apprentissage totalement exonérés. Au-delà de ce seuil, seule la partie excédentaire est imposable. L'apprenti doit tout de même déclarer ses revenus d'apprentissage et mentionner l'exonération applicable dans sa déclaration.

## La fiscalité des stages en entreprise

Les gratifications de stage sont exonérées dans la limite du montant correspondant au produit du nombre d'heures de stage par le taux de la franchise de cotisations sociales. Pour les stages longs (plus de 2 mois), les gratifications peuvent parfois dépasser ce seuil et générer une imposition partielle. Les stagiaires étrangers doivent également vérifier si leur convention fiscale bilatérale prévoit une exonération spécifique pour les revenus de stage.

## Les particularités des emplois saisonniers et occasionnels

Les étudiants qui travaillent pendant les vacances scolaires, dans la restauration, le tourisme ou d'autres secteurs saisonniers, bénéficient des mêmes règles d'exonération que les autres jobs étudiants (moins de 26 ans, plafond de 3 SMIC mensuels). Ces emplois saisonniers doivent être déclarés même s'ils sont exonérés. Les employeurs transmettent automatiquement les informations à l'administration fiscale via la déclaration sociale nominative (DSN), mais vérifier la cohérence avec sa propre déclaration est une bonne pratique.

## La gestion des revenus mixtes : salaires et bourses

De nombreux étudiants ont des revenus mixtes — salaires de jobs étudiants ET bourses académiques. La gestion fiscale de ces revenus mixtes requiert d'identifier clairement quels revenus sont imposables et dans quelles limites. Les bourses sur critères sociaux du CROUS sont généralement exonérées, tandis que certaines bourses d'excellence ou de recherche peuvent être partiellement imposables selon leur nature et leur origine. Documenter chaque source de revenu et son régime fiscal est la base d'une déclaration correcte.
`;

await patch('55c0efdd-5e48-46e0-bdd1-f6223e3ba8e2', L1);
await patch('449fb117-48e3-45da-89af-7a75c6212c80', L2);
await patch('0242d07b-a407-4d13-9a58-3abfb2aa6728', L3);
await patch('a824e932-2924-4061-9a58-af1834373a0f', L4);
await patch('22b05575-9363-4fd1-bdef-96e12749c592', L5);
await patch('3defd352-b13a-4f5d-97cc-2d4f35e289f6', L6);
