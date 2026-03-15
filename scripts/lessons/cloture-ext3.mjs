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

const EXT3_L1 = `
## La portabilité du numéro de compte et l'avenir de la mobilité bancaire

La mobilité bancaire en France, bien que facilitée par le service Agir depuis 2017, reste moins fluide que dans certains pays voisins. En Suède et au Danemark, des initiatives de portabilité de l'identifiant bancaire personnel (similaire au numéro de téléphone portable) ont été expérimentées, permettant à un client de conserver le même identifiant bancaire même en changeant d'établissement. En France, l'IBAN change à chaque changement de banque, ce qui est la principale source de friction dans le processus de mobilité.

La Commission Européenne explore des pistes pour améliorer la mobilité bancaire à l'échelle européenne, notamment dans le cadre du projet d'Union des marchés de capitaux. Des propositions d'IBAN portable ou d'un système de redirection automatique des virements (similaire à la redirection de courrier postal) sont à l'étude. À terme, ces évolutions réglementaires pourraient rendre la clôture de compte et le changement de banque aussi simples que le changement d'opérateur téléphonique aujourd'hui.

## Les banques en ligne et leur réputation sur les délais de clôture

Les banques en ligne ont globalement une réputation variable sur les délais de clôture. Certaines néobanques, qui avaient misé sur la fluidité d'ouverture de compte, ont parfois été critiquées pour complexifier la clôture — une pratique commerciale compréhensible mais peu fair-play qui a été signalée dans les forums de consommateurs. À l'inverse, certaines banques en ligne sont reconnues pour la fluidité de leur processus de clôture, traitant les demandes en quelques jours avec une confirmation numérique immédiate.

La recherche d'avis en ligne sur la procédure de clôture d'une banque spécifique, avant même d'y ouvrir un compte, est une démarche de précaution que peu de futurs clients pratiquent mais qui peut s'avérer précieuse. Une banque facile à quitter est aussi une banque qui respecte réellement la liberté de ses clients — ce qui est paradoxalement un signal positif sur sa confiance dans la qualité de ses services.

## La protection des données personnelles après la clôture

Après la clôture du compte, la banque conserve les données personnelles du client pendant le délai légal, puis doit les effacer conformément au RGPD. Le client peut demander un état de ses données conservées via le droit d'accès RGPD, et peut demander la suppression de certaines données non soumises à une obligation légale de conservation. Cette démarche est rarement entreprise par les clients, mais elle existe et peut être pertinente pour les personnes très préoccupées par leur vie privée numérique.

La banque ne peut pas utiliser les données post-clôture à des fins marketing sans le consentement du client. Si un client commence à recevoir des communications marketing d'une banque dont il a clôturé le compte, il peut exercer son droit d'opposition directement auprès du DPO (Délégué à la Protection des Données) de la banque, ou saisir la CNIL (Commission Nationale de l'Informatique et des Libertés) si ses demandes ne sont pas respectées.

## Les erreurs de timing dans la clôture de compte

Le timing de la clôture de compte peut avoir des conséquences pratiques significatives. Clôturer un compte juste avant une période de forte activité bancaire (début du mois académique avec paiement des loyers et des frais universitaires, période des fêtes avec de nombreuses dépenses) est une mauvaise idée même si la migration des domiciliations est en cours. Quelques incidents liés à une domiciliation non encore migrée dans une période de forte sollicitation du compte peuvent générer des frais en cascade.

La période idéale pour clôturer un compte est une période calme du calendrier financier personnel : milieu de mois, hors vacances, à une époque où peu de prélèvements exceptionnels sont attendus. Cette fenêtre permet de traiter sereinement les dernières opérations sur l'ancien compte et de vérifier que tout est bien migré vers le nouveau avant la fermeture définitive.
`;

const EXT3_L2 = `
## Le traitement des remboursements en attente lors de la clôture

Au moment d'une demande de clôture, des remboursements peuvent être en attente d'arriver sur le compte : remboursement d'une mutuelle pour des soins récents, remboursement de frais professionnels par l'employeur, régularisation de trop-payé par un commerçant. Ces remboursements, une fois l'ancien compte clôturé, seront retournés à l'émetteur — et leur récupération peut nécessiter des démarches supplémentaires.

Pour éviter cette situation, informer les entités dont un remboursement est attendu du changement de RIB avant la clôture est une démarche préventive. Si des remboursements d'assurance maladie (CPAM) sont en cours de traitement, mettre à jour le RIB sur le compte Ameli avant la clôture de l'ancien compte garantit que ces remboursements arrivent directement sur le nouveau compte. Une vérification sur les principaux espaces en ligne (Ameli.fr, CAF.fr, impots.gouv.fr) de l'IBAN enregistré évite les retours de fonds.

## La clôture des cartes associées : physiques et virtuelles

La clôture du compte entraîne automatiquement la désactivation de toutes les cartes qui y sont rattachées — carte principale, carte secondaire si autorisée, et cartes virtuelles. La banque informe généralement le client de la désactivation dans le courrier de confirmation de clôture. Physiquement, les cartes doivent être restituées à la banque ou détruite selon les instructions reçues.

Pour les cartes virtuelles utilisées pour des abonnements récurrents en ligne, la désactivation entraîne le rejet des prochains prélèvements sur ces numéros virtuels. Si ces abonnements n'ont pas été mis à jour avec les nouvelles coordonnées de paiement avant la clôture, les services correspondants seront interrompus dès la prochaine tentative de prélèvement. De même, les cartes ajoutées dans les wallets numériques (Apple Pay, Google Pay) de l'ancien compte seront automatiquement désactivées — elles devront être remplacées par les cartes du nouveau compte dans ces wallets.

## La gestion de la liasse documentaire bancaire

La liasse documentaire bancaire accumulée pendant toute une relation bancaire peut être considérable : contrats d'ouverture, avenants tarifaires, notices d'assurance, correspondances officielles. Avant la clôture, un tri de ces documents permet de ne conserver que l'essentiel. Les documents à garder définitivement : l'accusé de réception de la demande de clôture, la confirmation écrite de clôture avec le solde final versé, les relevés fiscaux annuels des 5 dernières années, et tout document relatif à un litige ou une réclamation passée.

Les documents qui peuvent être détruits après la clôture et le règlement de toutes les situations pendantes : les notices commerciales et promotionnelles, les relevés de compte de plus de 10 ans, et les documents liés à des produits clôturés depuis longtemps. Un archivage numérique propre (dossier avec les relevés par année, documents contractuels importants, correspondances) est bien plus pratique qu'une pile de papiers désorganisés.

## La relation avec la banque après la clôture : rester client de manière résiduelle

Même après la clôture du compte courant, un client peut rester en relation résiduelle avec une banque via des produits non encore clôturés. Un PEL non clôturé, un crédit immobilier en cours, ou une assurance-vie active maintiennent la relation bancaire de façon partielle. Dans ce contexte particulier, le client conserve accès à son espace en ligne pour ces produits spécifiques mais ne peut plus effectuer d'opérations sur le compte courant clôturé.

Cette relation résiduelle peut durer plusieurs années si certains produits sont maintenus dans l'ancienne banque pour des raisons fiscales ou contractuelles. Il est important de maintenir une communication active avec la banque pour ce qui concerne ces produits résiduels, même si la relation principale est désormais dans un autre établissement.
`;

const EXT3_L3 = `
## Les outils numériques pour faciliter la transition bancaire

Des outils numériques spécialisés peuvent simplifier la gestion de la transition bancaire lors d'un changement de compte. Les applications de gestion financière personnelle (YNAB, Budgea, Bankin) permettent de visualiser en parallèle les transactions des deux comptes pendant la période de chevauchement, facilitant la vérification que tout a bien migré. Des applications de scan et d'archivage de documents (Adobe Scan, CamScanner) permettent de numériser rapidement les relevés papier et les courriers bancaires.

Les feuilles de calcul (Google Sheets, Excel) sont utiles pour dresser et suivre la liste des domiciliations à transférer — avec des colonnes pour l'émetteur, le montant, la fréquence, le statut de la notification, et la date de la mise à jour. Cette liste de suivi transforme une tâche potentiellement chaotique en une démarche organisée dont la progression est visible et traçable.

## La détection des abonnements oubliés via les alertes bancaires

Une technique pratique pour s'assurer de n'oublier aucun abonnement avant la clôture est d'activer les alertes de transaction pour n'importe quel montant sur l'ancien compte pendant la période de chevauchement. Chaque prélèvement qui se présente sur l'ancien compte génère une notification push — ce qui permet d'identifier immédiatement les prélèvements non encore migrés et de les traiter avant la clôture définitive.

Cette utilisation proactive des alertes bancaires, normalement utilisées pour détecter les fraudes, se transforme ici en outil de migration bancaire. La liste de toutes les notifications reçues pendant 2 mois de chevauchement constitue une liste quasi-exhaustive des domiciliations actives sur le compte. Les notifications peuvent être archivées (screenshot) pour constituer une preuve des migrants identifiés et de la date de leur migration.

## L'importance de comprendre les termes du contrat bancaire avant de le signer

La clôture d'un compte, et toutes les complications que l'on peut rencontrer, peuvent souvent être anticipées en lisant attentivement le contrat bancaire lors de l'ouverture. Les conditions générales de compte détaillent la procédure de clôture, les frais applicables, les délais de traitement, et les obligations des deux parties. Ces informations, disponibles dans la documentation contractuelle remise à l'ouverture du compte, sont la référence légale en cas de litige.

Prendre 30 minutes pour lire la section "clôture du compte" dans les conditions générales lors de l'ouverture, ou avant toute demande de clôture, est le meilleur investissement préventif. Cette lecture permet d'identifier les éventuels engagements de durée, les frais prévus, et les procédures spécifiques de la banque choisie. En France, les conditions générales de banque sont standardisées dans une large mesure — mais les détails varient et c'est dans ces détails que se cachent les surprises.

## Les associations de consommateurs et leur rôle dans les litiges bancaires

Les associations de consommateurs jouent un rôle de soutien important dans les litiges avec les banques. UFC-Que Choisir, la CLCV (Consommation, Logement et Cadre de Vie), et LACODEF sont des associations actives dans le domaine bancaire qui publient des guides pratiques, accompagnent leurs adhérents dans les démarches de réclamation, et exercent une pression collective sur les pratiques abusives des banques.

Pour les étudiants qui font face à une situation difficile lors d'une clôture de compte, contacter une de ces associations pour un conseil gratuit ou une assistance dans la démarche peut être très utile. Beaucoup de ces associations offrent une consultation individuelle gratuite pour leurs adhérents, et leur connaissance des procédures et de la jurisprudence bancaire peut faire la différence dans une situation de litige.
`;

const EXT3_L4 = `
## La clôture de compte dans la gestion successorale

La clôture d'un compte bancaire lors d'une succession est une procédure déléguée au notaire chargé de la succession. Le notaire se charge de notifier la banque du décès et de coordonner le déblocage et la répartition des avoirs. Ce processus, encadré par la loi, prend en compte les dispositions testamentaires et les règles légales de la succession. La banque est tenue de coopérer avec le notaire et de fournir tous les documents nécessaires à l'instruction de la succession.

Pour les petites successions (patrimoine net inférieur à un certain seuil), une procédure simplifiée sans notaire est possible. Les héritiers peuvent directement demander à la banque le déblocage des avoirs sur présentation d'une attestation sur l'honneur de qualité d'héritier, d'un certificat de décès, et d'une déclaration de la liste des héritiers. Cette procédure simplifiée a des conditions strictes et son application varie selon les banques.

## Les néobanques et leur agilité dans la gestion des comptes

Les néobanques ont révolutionné la facilité d'ouverture de compte, mais leur gestion de la clôture est restée dans l'ombre de cet avantage marketing. En pratique, certaines néobanques ont conçu leurs parcours de clôture avec la même fluidité numérique que leurs parcours d'ouverture : quelques clics dans l'application, confirmation par email, et solde virement dans les 24 heures. D'autres ont mis en place des parcours délibérément complexes — nécessitant des appels téléphoniques, des formulaires papier, ou des délais injustifiés.

La différence entre ces approches reflète la philosophie commerciale de chaque établissement. Une néobanque qui facilite la clôture fait confiance à la qualité de son service pour retenir ses clients sans les piéger. Une néobanque qui complexifie la clôture révèle une forme d'insécurité sur sa valeur ajoutée réelle. Pour les étudiants qui choisissent une néobanque, vérifier la réputation de la clôture avant d'ouvrir un compte est une due diligence pertinente.

## La gestion post-divorce ou post-séparation des comptes communs

La séparation d'un couple qui avait des finances communes (compte joint, prêts en commun, assurances communes) est l'une des situations les plus complexes en matière de clôture bancaire. La clôture d'un compte joint nécessite l'accord des deux cotitulaires ou une décision judiciaire. Si les deux parties s'accordent, la procédure est standard. Si l'un des cotitulaires refuse de signer ou est injoignable, la procédure peut s'étirer sur des mois.

Dans un cadre de séparation conflictuelle, il est recommandé de demander à la banque un blocage unilatéral des opérations débitrices dès que la décision de séparation est prise — cette mesure de protection empêche l'un des cotitulaires de vider seul le compte, mais nécessite que les deux parties acceptent la désactivation réciproque des droits à opérer. Le juge aux affaires familiales peut ordonner des mesures conservatoires si nécessaire, y compris concernant les comptes bancaires communs.
`;

const EXT3_L5 = `
## Les assurances liées aux crédits et leur traitement lors de la clôture

Si un crédit à la consommation ou un crédit immobilier est rattaché au compte en cours de clôture, l'assurance emprunteur qui couvre ce crédit doit être soigneusement gérée lors de la transition. L'assurance emprunteur ne disparaît pas avec la clôture du compte courant — elle est liée au contrat de crédit, non au compte. Cependant, si le prélèvement de la prime d'assurance était débité sur le compte clôturé, il faut mettre à jour les coordonnées de prélèvement pour éviter un rejet.

La loi Lemoine de 2022 a introduit le droit de résiliation de l'assurance emprunteur à tout moment et sans frais après la première année de souscription. Ce droit peut être utilisé lors d'un changement de banque pour simplifier la situation : résilier l'ancienne assurance emprunteur et en souscrire une nouvelle auprès d'un assureur indépendant, souvent moins chère, tout en maintenant une couverture équivalente conforme aux exigences du prêteur.

## La portée internationale de la clôture d'un compte français

Pour les ressortissants étrangers qui clôturent leur compte bancaire français lors d'un départ définitif de France, des obligations déclaratives spécifiques peuvent s'appliquer. Si le compte était lié à des revenus imposables en France (salaires d'alternance, revenus locatifs), la fermeture du compte ne décharge pas des obligations fiscales résiduelles en France. L'imposition des revenus de source française peut continuer à s'appliquer même après le départ, et des acomptes d'impôt peuvent être prélevés si non déclarés en bonne et due forme.

La Convention fiscale entre la France et le pays d'origine ou de destination détermine les règles d'imposition applicables. En cas de doute, une consultation avec un conseiller fiscal spécialisé dans la fiscalité internationale des expatriés est recommandée avant de clôturer définitivement les comptes et de quitter la France.

## Les conseils pratiques pour les étudiants qui changent de banque pour la première fois

Pour un étudiant qui vit son premier changement de banque, voici les conseils pratiques les plus utiles. Commencer par créer un document de suivi simple listant toutes les étapes à accomplir et les dates clés (date d'ouverture du nouveau compte, date d'envoi de la demande de clôture, date prévue de clôture, date de vérification finale). Partager ce calendrier avec un proche de confiance qui peut aider à suivre les étapes et rappeler les démarches en retard.

Ne pas hésiter à appeler le service client de la nouvelle banque pour vérifier que le service Agir est bien déclenché et en cours de traitement. La proactivité dans le suivi diminue le risque de voir une domiciliation oubliée. Et enfin, une fois la clôture confirmée, prendre 5 minutes pour noter les leçons apprises de cette expérience — les prochains changements de banque s'en trouveront simplifiés.
`;

const EXT3_L6 = `
## La gestion des incidents de paiement passés lors de la clôture

Si des incidents de paiement ont eu lieu sur le compte dans le passé — prélèvements rejetés, chèques sans provision, dépassements répétés de découvert autorisé — ces incidents peuvent être inscrits dans les fichiers de la Banque de France (FCC ou FICP). La clôture du compte ne fait pas automatiquement disparaître ces inscriptions, qui ont leur propre durée légale de conservation.

Pour une personne inscrite au FCC ou au FICP qui souhaite clôturer son compte, la procédure est similaire à la clôture normale mais avec une attention particulière à la résolution de tous les incidents passés. La levée de l'inscription au FCC intervient quand tous les chèques sans provision ont été régularisés. La levée de l'inscription au FICP intervient quand le crédit irrégulier est arrivé à son terme ou est remboursé intégralement. Ces levées peuvent être demandées directement à la Banque de France via le formulaire FICOBA/fiche de renseignement.

## L'accompagnement par les services sociaux universitaires

Pour les étudiants qui rencontrent des difficultés dans leur relation bancaire — situation de surendettement, litiges bancaires complexes, incompréhension des procédures administratives en raison de la barrière linguistique — les services sociaux des universités (CROUS, SUMPS, assistante sociale universitaire) peuvent offrir un accompagnement pratique. Ces professionnels connaissent les procédures locales et les ressources disponibles. Ils pueden orienter vers les bons organismes, faciliter les démarches en cas de difficulté, et offrir un soutien moral dans des situations parfois stressantes.

Se tourner sans honte vers ces ressources institutionnelles est un acte de pragmatisme, non une faiblesse. Ces services existent précisément pour accompagner les étudiants dans les complexités de la vie administrative française, y compris dans ses dimensions financières et bancaires.

## Les questions fréquentes sur la clôture de compte bancaire

La clôture d'un compte génère souvent des interrogations pratiques. Faut-il être présent physiquement en agence pour clôturer un compte ? Non, une lettre recommandée ou une démarche en ligne suffit dans la grande majorité des cas. Combien de temps après la demande le compte sera-t-il effectivement clôturé ? Entre 1 et 30 jours selon la banque et la complexité des opérations en cours. Peut-on clôturer un compte pendant les vacances ou le week-end ? La demande peut être envoyée à tout moment, mais le traitement se fait en jours ouvrés. Y a-t-il des frais à payer pour clôturer son compte ? En principe non pour un compte courant, mais des frais spécifiques peuvent s'appliquer dans certains cas contractuels. Ces réponses constituent la base de connaissance nécessaire pour aborder la clôture avec confiance et sérénité.
`;

await appendAndPatch('993f2c6f-3af0-472b-b7eb-e828b1aa09e9', EXT3_L1);
await appendAndPatch('2c258539-3073-41f6-b0b7-d30fc935fff8', EXT3_L2);
await appendAndPatch('bae3513f-1fe0-40ef-a639-9e54c053bf60', EXT3_L3);
await appendAndPatch('e9fa9b23-5d88-4067-a94f-7f988db9839f', EXT3_L4);
await appendAndPatch('9bf50448-7156-4821-872c-66d32e62a84f', EXT3_L5);
await appendAndPatch('2b027cc3-557e-4ef3-914b-2356ad93c539', EXT3_L6);
