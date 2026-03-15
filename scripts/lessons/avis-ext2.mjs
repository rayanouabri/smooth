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

const EXT2_L1 = `
## La procédure de dégrèvement gracieux : quand la règle peut être assouplie

Au-delà de la réclamation contentieuse qui vise à corriger des erreurs juridiques ou de fait dans le calcul de l'impôt, il existe une autre catégorie de demande : la remise gracieuse. La remise gracieuse ne conteste pas la légalité de l'impôt calculé — elle reconnaît sa légalité mais sollicite de l'administration une réduction ou une annulation de tout ou partie de la dette fiscale pour des motifs d'équité ou de difficultés financières exceptionnelles.

La remise gracieuse est accordée par l'administration fiscale à titre discrétionnaire — elle n'est pas un droit du contribuable mais une faveur accordée par l'État dans les cas où l'application stricte de la loi conduirait à des résultats manifestement inéquitables. Les situations qui peuvent justifier une remise gracieuse incluent : une perte soudaine et involontaire de revenus (licenciement brutal, invalidité, décès du conjoint), une situation financière exceptionnellement difficile qui rendrait le paiement de l'impôt préjudiciable à la satisfaction des besoins de base, ou des erreurs administratives ayant conduit à un cumul de dettes fiscales.

La demande de remise gracieuse s'adresse au directeur départemental des finances publiques. Elle doit exposer la situation personnelle du demandeur, documenter les difficultés financières invoquées (relevés bancaires, situation d'endettement, avis de paiement impayés), et préciser le montant de la remise sollicitée. L'administration dispose d'un pouvoir d'appréciation total et sa décision n'est pas susceptible d'appel contentieux (contrairement à la décision sur une réclamation contentieuse) — bien qu'une demande de révision auprès du supérieur hiérarchique reste possible.

## Les sanctions pour non-paiement et les majorations

Ne pas payer son impôt dans les délais entraîne des majorations automatiques. La majoration de 10% s'applique automatiquement en cas de non-paiement dans le délai fixé par l'avis d'imposition. Des intérêts de retard de 0,20% par mois (2,4% par an) s'accumulent en plus de la majoration sur le montant non payé. Ces pénalités peuvent transformer une dette fiscale initialement supportable en une charge significative si elle n'est pas réglée rapidement.

Pour les contribuables qui anticipent une difficulté de paiement, la solution est de contacter le service des impôts avant la date d'échéance pour demander un délai de paiement. Ces délais sont accordés assez facilement pour les contribuables de bonne foi qui expriment une volonté de régulariser leur situation. Un plan de paiement échelonné négocié avec l'administration suspend l'application des majorations pour non-paiement pendant la durée du plan, à condition que chaque échéance soit honorée.

## Détecter les fraudes et arnaques liées aux remboursements fiscaux

Les fraudeurs qui utilisent des informations fiscales obtenues illégalement constituent une menace croissante. Une arnaque courante consiste à envoyer de faux emails ou SMS qui imitent les communications officielles de l'administration fiscale, promettant un remboursement d'impôt et demandant de cliquer sur un lien ou de fournir des coordonnées bancaires. Ces messages sont des tentatives de phishing qui visent à voler des données bancaires ou personnelles.

L'administration fiscale française ne demande jamais de coordonnées bancaires par email ou SMS. Elle ne contacte jamais les contribuables pour leur demander de mettre à jour leurs informations de paiement via un lien dans un message. L'unique canal officiel pour les remboursements est l'espace particulier d'impots.gouv.fr, où le contribuable peut vérifier en temps réel si un remboursement lui est dû et mettre à jour ses coordonnées bancaires dans un environnement sécurisé.

En cas de doute sur l'authenticité d'un message prétendument émis par l'administration fiscale, le réflexe est de se connecter directement à l'espace particulier sur impots.gouv.fr (sans cliquer sur le lien du message) et de vérifier si une communication officielle ou un remboursement est bien enregistré. En cas de message frauduleux confirmé, il peut être signalé sur la plateforme Pharos du gouvernement dédiée aux signalements de contenus illicites sur internet.
`;

const EXT2_L2 = `
## Les spécificités fiscales des revenus de capitaux mobiliers

Pour les étudiants qui ont des économies placées (livrets d'épargne, assurances vie, investissements), les revenus de capitaux mobiliers ont une place spécifique sur l'avis d'imposition. Ces revenus — intérêts, dividendes, plus-values — sont soumis depuis 2018 au prélèvement forfaitaire unique (PFU), également appelé "flat tax", au taux de 30% (12,8% d'impôt sur le revenu + 17,2% de prélèvements sociaux).

Cette flat tax s'applique à la plupart des revenus de l'épargne financière et est prélevée à la source par les établissements financiers. Elle apparaît sur l'avis d'imposition mais de façon distincte du barème progressif appliqué aux salaires. Il est possible d'opter pour l'imposition au barème progressif sur option lors de la déclaration de revenus — cette option est avantageuse uniquement pour les contribuables dont le taux marginal d'imposition est inférieur à 12,8%, c'est-à-dire les foyers peu imposés ou non imposables. Pour un étudiant avec des revenus modestes, cette option peut donc être favorable.

Les livrets réglementés (Livret A, LDDS, LEP) bénéficient d'une exonération totale d'impôt sur les intérêts — ils n'apparaissent pas sur l'avis d'imposition et leurs intérêts ne sont pas pris en compte dans le revenu fiscal de référence. Cette exonération est automatique et ne nécessite aucune démarche de la part du titulaire du livret. Pour les étudiants qui ont des économies, privilégier d'abord les livrets exonérés (dans leurs plafonds) avant les produits d'épargne non réglementés est une stratégie fiscalement optimale.

## Comprendre le quotient familial et son impact sur l'impôt

Le système du quotient familial est l'un des piliers originaux de la fiscalité française. Il vise à adapter le montant de l'impôt à la composition du foyer fiscal en divisant le revenu imposable par un nombre de parts (le quotient) avant d'appliquer le barème progressif. Plus le nombre de parts est élevé, plus l'impôt calculé avant application du barème est faible — ce mécanisme profite donc davantage aux familles nombreuses.

Une personne seule sans enfant bénéficie d'une part. Un couple marié ou pacsé bénéficie de deux parts. Chaque enfant à charge ajoute une demi-part pour les deux premiers enfants et une part entière à partir du troisième. Des demi-parts supplémentaires sont accordées dans certaines situations spécifiques : personne invalide, parent isolé avec enfants à charge, anciens combattants, etc.

L'avantage fiscal tiré du quotient familial est plafonné pour éviter qu'il ne bénéficie excessivement aux foyers à hauts revenus. Le plafond de l'avantage fiscal par demi-part supplémentaire est ajusté chaque année. Ce plafonnement signifie que pour les foyers à revenus élevés, l'avantage réel des demi-parts supplémentaires est limité à ce plafond, quelle que soit la différence d'impôt brute.

## L'avis d'imposition et le calcul des aides au logement

La réforme des aides au logement de 2021 a profondément modifié la façon dont la CAF calcule les APL. Désormais, le calcul est basé sur les revenus des douze derniers mois glissants, plutôt que sur les revenus N-2. Cette réforme a rapproché le montant des aides de la situation financière réelle du bénéficiaire — une personne dont les revenus ont brusquement chuté verra ses aides augmenter plus rapidement qu'avec l'ancien système.

Mais la CAF accède directement aux données fiscales via un échange automatisé avec l'administration fiscale — elle n'a pas besoin que l'allocataire lui fournisse physiquement son avis d'imposition. Ce système de partage automatique des données fiscales signifie que les APL sont calculées sur la base des revenus réels déclarés, ce qui incite fortement à déclarer ses revenus correctement. Des revenus non déclarés auraient pu bénéficier à l'allocataire à court terme en augmentant artificiellement son droit aux APL, mais exposent à un risque de réclamation et de remboursement a posteriori par la CAF si l'écart est découvert.
`;

const EXT2_L3 = `
## Les situations où un avis d'imposition ne suffit pas

Malgré son statut de document justificatif par excellence, l'avis d'imposition ne couvre pas tous les besoins de justification de revenus. Pour les demandes de prêt immobilier, les banques demandent généralement en complément à l'avis d'imposition les trois derniers bulletins de salaire pour confirmer les revenus courants — l'avis d'imposition reflète les revenus de l'année précédente et ne prédit pas les revenus actuels. Pour les autoentrepreneurs ou travailleurs indépendants, les bilans comptables et les justificatifs de chiffre d'affaires récent sont demandés en complément.

Pour les candidats à la location qui ont des revenus très récents (premier emploi commencé il y a moins d'un an), l'avis d'imposition peut manquer — il ne sera disponible pour les revenus actuels qu'à l'été suivant. Dans ces situations, d'autres justificatifs de revenus récents (bulletins de salaire, contrat de travail) peuvent se substituer à l'avis d'imposition, accompagnés d'une explication de la situation au propriétaire.

## La dématérialisation fiscale et ses avantages pratiques

La dématérialisation complète des procédures fiscales françaises depuis 2019 (obligation de déclaration en ligne pour tous les foyers ayant accès à internet) a profondément changé la relation entre le contribuable et l'administration fiscale. Les délais de traitement se sont réduits, les corrections sont plus rapides, et la visibilité sur l'état de son compte fiscal est quasi-instantanée.

L'espace particulier d'impots.gouv.fr est désormais le point d'entrée unique pour la grande majorité des interactions fiscales : déclaration des revenus, consultation des avis, réclamations, paiements, mise à jour des coordonnées bancaires, modulation du prélèvement à la source. Maîtriser cet espace particulier est une compétence pratique essentielle pour tout résident en France — y compris les étudiants dont la situation fiscale est simple.

Pour les personnes qui ont des difficultés pour utiliser l'espace numérique, les centres des finances publiques proposent des permanences et des services d'accompagnement numérique. Des associations comme emmaüs connect et des structures de médiation numérique offrent également une aide aux personnes peu à l'aise avec les outils numériques. Dans les grandes villes, des associations spécialisées dans l'accompagnement des étrangers proposent un soutien spécifique pour les démarches fiscales.

## Les documents fiscaux pour les démarches de naturalisation

La naturalisation française est l'une des procédures pour lesquelles le dossier fiscal complet est scruté avec le plus de soin. La préfecture vérifie non seulement que le demandeur a decläré ses revenus régulièrement depuis son arrivée en France, mais aussi que les impôts éventuellement dus ont été payés en intégralité. Un dossier de naturalisation avec des irrégularités fiscales — déclarations manquantes, impôts impayés, amendes fiscales non réglées — est systématiquement rejeté.

Pour les candidats à la naturalisation, la constitution du dossier fiscal commence idéalement dès la première année de résidence en France. Déclarer ses revenus chaque année, même si l'on n'est pas imposable, crée un historique fiscal propre qui facilite considérablement l'instruction du dossier de naturalisation de nombreuses années plus tard. La régularité des déclarations est aussi importante que l'absence d'impôts impayés — une déclaration tardive régularisée vaut mieux qu'une déclaration jamais déposée.

## Les avis pour les revenus en dehors du salariat

Outre les salaires et les revenus de capitaux mobiliers, plusieurs autres catégories de revenus doivent figurer dans la déclaration et apparaissent dans l'avis d'imposition. Les revenus fonciers (loyers perçus pour la location d'un bien immobilier) sont imposés selon deux régimes selon le montant : le régime micro-foncier avec abattement forfaitaire de 30% pour les revenus fonciers bruts inférieurs à 15 000 euros par an, ou le régime réel qui permet de déduire l'ensemble des charges effectives.

Les bénéfices non commerciaux (BNC) concernent les professions libérales non commerciales et les revenus d'activités intellectuelles — coaching, cours particuliers, consulting informatique. Pour les étudiants qui monétisent leurs compétences via des missions ponctuelles, ces revenus sont à déclarer en BNC. Le régime micro-BNC avec abattement forfaitaire de 34% sur le chiffre d'affaires simplifie la déclaration pour les petites activités. Ce régime est accessible aux revenus BNC inférieurs à 77 700 euros par an, ce qui couvre très largement les activités secondaires des étudiants.
`;

const EXT2_L4 = `
## Le traitement des bourses étrangères par les services fiscaux français

Une bourse accordée par un gouvernement étranger à un étudiant qui vient étudier en France pose des questions fiscales spécifiques. La qualification fiscale de cette bourse dépend de sa nature : s'agit-il d'une aide à la formation (bourse d'études proprement dite), d'une rémunération de recherche (bourse de thèse ou de post-doc), ou d'une subvention de vie courante (allocation de subsistance) ?

Les bourses d'études proprement dites — versées pour financer les frais d'inscription, de vie et de logement pendant les études — bénéficient généralement de l'exonération fiscale de l'article 81 du CGI, sous réserve des conditions prévues par cet article. Les bourses versées dans le cadre d'un contrat de travail déguisé (où l'étudiant effectue en réalité des missions de recherche sous contrat) peuvent en revanche être requalifiées en salaires imposables, avec les conséquences fiscales correspondantes.

La clarification de la nature juridique d'une bourse étrangère peut nécessiter une consultation avec l'administration fiscale ou un conseiller fiscal spécialisé. Cette démarche de qualification préalable, bien qu'elle demande un investissement initial, évite les mauvaises surprises lors de la déclaration de revenus ou d'un contrôle fiscal.

## Les aides des associations étudiantes et leur traitement fiscal

Les aides versées par des associations étudiantes ou des fondations privées à leurs membres bénéficiaires ont un traitement fiscal variable selon leur nature. Une aide versée pour financer des études ou pour faire face à une situation de précarité ponctuelle est généralement considérée comme un secours exonéré d'impôt. En revanche, une aide versée dans le cadre d'un contrat de travail ou d'une prestation de service — par exemple, une indemnité versée à un étudiant qui effectue des fonctions de responsable dans l'association — est un revenu imposable.

Pour les étudiants qui reçoivent des aides importantes de sources privées, une consultation fiscale préventive peut clarifier le traitement applicable. La règle de base est simple : si l'aide correspond à une contrepartie de travail ou de service, elle est imposable ; si elle est accordée sans contrepartie et vise à soutenir la formation ou à pallier une difficulté financière, elle est probablement exonérée.

## Les représentants fiscaux pour les non-résidents qui ont des revenus français

Les personnes qui quittent la France après leurs études mais ont encore des revenus de source française (par exemple, des revenus locatifs d'un appartement conservé en France, ou des intérêts d'un compte bancaire français non clôturé) doivent, au-delà d'un certain seuil, désigner un représentant fiscal en France. Ce représentant fiscal est une personne domiciliée en France qui accepte d'être le point de contact officiel de l'administration fiscale française pour le compte du non-résident.

La désignation d'un représentant fiscal est obligatoire pour les non-résidents qui perçoivent des revenus de source française soumis à l'impôt en France lorsque le montant dépasse les seuils applicables. Des sociétés spécialisées proposent ce service moyennant une rémunération annuelle — c'est une option à considérer pour les étudiants qui quittent la France en laissant des actifs ou des revenus derrière eux.

## La gestion des revenus dans deux pays simultanément

Un étudiant qui travaille à la fois en France et dans son pays d'origine (par exemple, via des missions de freelance ou du travail à distance pour un employeur dans son pays) se retrouve avec des revenus dans deux juridictions fiscales simultanément. La gestion de cette situation nécessite une compréhension précise de la convention fiscale bilatérale applicable.

En règle générale, les revenus d'emploi à distance au profit d'un employeur étranger sont imposables dans le pays de résidence du salarié si l'emploi est exercé depuis ce pays. Un étudiant résident fiscal en France qui travaille à distance pour un employeur américain est donc imposable en France sur ces revenus, même si l'employeur ne prélève aucun impôt français. La déclaration de ces revenus dans la déclaration française, même en l'absence de prélèvement à la source par l'employeur étranger, est obligatoire — avec les acomptes correspondants.
`;

const EXT2_L5 = `
## La protection des données fiscales dans les démarches numériques

La transmission de l'avis d'imposition par voie numérique soulève des questions de protection des données qui méritent une attention practique. Les plateformes de dossier locatif numériques (comme DossierFacile, le service public officiel) garantissent des standards de sécurité et de confidentialité élevés et sont préférables aux transmissions par simple email. DossierFacile vérifie les documents transmis et fournit un dossier numérique labellisé qui rassure les propriétaires sur l'authenticité des pièces.

L'envoi de l'avis d'imposition par email non chiffré à un inconnu présente des risques réels d'interception et d'usurpation d'identité. Un fraudeur qui dispose de votre avis d'imposition peut potentiellement l'utiliser pour construire un dossier de fraude à votre identité. La vigilance sur les canaux de transmission est donc une précaution concrète qui protège contre ces risques. Pour les transmissions inévitables par email, utiliser un service de partage sécurisé (avec lien protégé par mot de passe et expiration automatique) est préférable à une pièce jointe directe.

## Les abus de l'avis d'imposition comme justificatif

Il existe des situations où l'avis d'imposition est utilisé de manière abusive ou disproportionnée dans les démarches. Certains propriétaires demandent par exemple les avis d'imposition de plusieurs années alors que le droit ne leur permet de demander que les justificatifs nécessaires à l'évaluation de la solvabilité du candidat. Le cadre légal de la location — la loi ALUR — définit précisément les documents qu'un propriétaire peut demander et ceux qu'il ne peut pas exiger.

La liste des pièces autorisées pour une candidature locative est fixée par décret. Un propriétaire ne peut pas légalement refuser une candidature au seul motif que l'avis d'imposition présente un certain profil fiscal — il ne peut utiliser ce document que pour évaluer le niveau de ressources relatif au loyer demandé. Toute discrimination fondée sur l'origine nationale visible dans un avis d'imposition (nom, adresse étrangère antérieure) est illégale. En cas d'abus, la HALDE (Haute Autorité de Lutte contre les Discriminations et pour l'Égalité) — désormais intégrée au Défenseur des Droits — peut être saisie.

## L'avis d'imposition et les contrats d'assurance

Les assureurs peuvent utiliser l'avis d'imposition dans certains cas pour évaluer la situation financière de l'assuré ou pour calculer le montant des cotisations. La mutuelle complémentaire santé solidaire (CSS) utilise le revenu fiscal de référence pour déterminer l'éligibilité et la participation financière de l'assuré. Pour accéder au tarif réduit de certaines assurances proposées par les mutuelles à leurs membres en difficulté financière, l'avis d'imposition est le document de référence.

Pour les assurances habitation en résidence universitaire ou en location sociale, certains contrats proposent des tarifs modulés en fonction des revenus déclarés. L'avis d'imposition est le justificatif permettant de bénéficier de ces tarifs préférentiels. Il est important de mettre à jour ses documents fiscaux auprès de son assureur chaque année pour bénéficier du tarif correspondant à sa situation réelle — un changement de situation financière peut conduire soit à une réduction des cotisations, soit à une obligation de régularisation si la situation s'est améliorée.

## Anticiper le premier avis d'imposition après une arrivée en France

Pour les étudiants qui arrivent en France en début d'année académique (septembre), le premier avis d'imposition ne sera disponible qu'à l'été suivant (une fois la déclaration de revenus déposée au printemps et traitée en été). Pendant les premiers mois suivant l'arrivée, l'étudiant ne dispose donc pas encore d'avis d'imposition français à présenter dans ses démarches.

Cette période de carence est anticipée par la plupart des organismes qui demandent l'avis d'imposition. La CAF accepte par exemple d'autres justificatifs de ressources pour les nouveaux arrivants pendant la période où leur premier avis n'est pas encore disponible. Les préfectures acceptent des attestations de ressources provisoires pour les primo-demandeurs de titre de séjour. Il est cependant recommandé d'effectuer sa première déclaration de revenus dès que possible au printemps suivant l'arrivée, même si les revenus sont nuls ou très faibles, pour commencer à constituer son historique fiscal français.
`;

const EXT2_L6 = `
## Le prélèvement à la source pour les micro-entrepreneurs

Pour les étudiants qui développent une activité de micro-entrepreneur (autoentreprise) en parallèle de leurs études, le prélèvement à la source fonctionne différemment de celui applicable aux salariés. Les micro-entrepreneurs ne sont pas soumis au PAS mensuel via un employeur — ils paient leurs impôts et charges sociales via le versement libératoire optionnel ou via la déclaration annuelle classique.

Le versement libératoire permet aux micro-entrepreneurs dont les revenus ne dépassent pas un certain seuil de payer un pourcentage fixe de leur chiffre d'affaires chaque mois, qui couvre à la fois les charges sociales et l'impôt sur le revenu. Ce régime simplifié est fiscalement avantageux pour les activités avec des marges élevées mais peut être désavantageux si le taux applicable dépasse le taux marginal d'imposition réel du foyer fiscal.

Pour les micro-entrepreneurs qui n'ont pas opté pour le versement libératoire, les bénéfices de l'autoentreprise sont intégrés dans la déclaration de revenus annuelle et soumis au barème progressif. Le PAS appliqué en cours d'année est calculé sous forme d'acomptes trimestriels ou mensuels basés sur les bénéfices estimés de l'activité. L'acompte peut être modulé si les revenus de l'activité varient significativement d'un trimestre à l'autre.

## Le prélèvement à la source lors de la cessation d'activité salariée

Lorsqu'un salarié quitte son emploi — fin de contrat CDD, rupture conventionnelle, démission — les prélèvements à la source cessent immédiatement puisque l'employeur n'émet plus de feuille de paie. Si le salarié perçoit ensuite des allocations chômage versées par France Travail (ex-Pôle Emploi), le prélèvement à la source s'applique également à ces allocations.

Pour un étudiant en alternance qui termine son contrat d'apprentissage, la transition vers une période sans revenus (période de recherche d'emploi après le diplôme) peut conduire à un crédits d'impôt important lors de la régularisation annuelle si des prélèvements ont été effectués en début d'année sur les salaires d'alternance. Anticiper ce crédit d'impôt et en tenir compte dans la planification budgétaire post-diplôme est une pratique avisée.

## La déclaration des pourboires et revenus informels

Une question pratique pour les étudiants qui travaillent dans la restauration ou les services est le traitement fiscal des pourboires et autres revenus informels. En France, les pourboires perçus par les salariés dans le cadre de leur activité professionnelle sont théoriquement imposables en tant que revenus du travail. Dans la pratique, les pourboires en espèces rarement déclarés constituent néanmoins une zone grise fiscale.

La réforme de 2022 a instauré une exonération fiscale temporaire des pourboires versés par carte bancaire via les terminaux de paiement électronique. Cette exonération vise à inciter la déclaration des pourboires et à réduire le travail non déclaré dans le secteur des services. Pour les étudiants qui travaillent dans des établissements qui ont mis en place ce système, les pourboires numériques sont désormais exonérés d'impôt sur le revenu sous certaines conditions de plafond.

## Optimisation fiscale légale pour les étudiants

Sans entrer dans des stratégies d'optimisation complexes, plusieurs dispositions fiscales légales peuvent être utilisées par les étudiants pour réduire légalement leur charge fiscale. Les dons aux associations reconnues d'utilité publique ouvrent droit à un crédit d'impôt de 66% du montant du don (dans la limite de 20% du revenu imposable) — pour un étudiant qui fait des dons à des associations caritatives, signaler ces dons dans la déclaration de revenus est systématiquement avantageux.

L'emploi d'un salarié à domicile (cours particuliers à domicile, baby-sitting, aide ménagère) ouvre droit à un crédit d'impôt de 50% des dépenses engagées dans le cadre du service à domicile. Pour les étudiants qui paient des cours particuliers à un enseignant particulier déclaré, la moitié du coût est récupérable via ce crédit d'impôt. Cette disposition est souvent méconnue des étudiants qui pourraient en bénéficier.
`;

await appendAndPatch('9e2a16ea-0c1b-4df3-a8f6-fb3dac6f425b', EXT2_L1);
await appendAndPatch('19527171-0a94-4ba5-b58e-a15de77a8adc', EXT2_L2);
await appendAndPatch('a2da7151-913a-4f41-8285-7ee916b68cb9', EXT2_L3);
await appendAndPatch('646d10ae-5597-4b58-928c-f22fc29ce5fb', EXT2_L4);
await appendAndPatch('838acbd1-bcda-4d75-81e0-b822158a6439', EXT2_L5);
await appendAndPatch('a7eb44c9-883f-4305-9041-97be5222b583', EXT2_L6);
