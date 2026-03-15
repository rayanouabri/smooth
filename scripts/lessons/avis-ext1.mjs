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

const EXT1_L1 = `
## Les délais légaux à respecter absolument

La maîtrise des délais est l'élément le plus critique dans toute procédure de réclamation fiscale. Le délai général de réclamation est fixé par l'article R*196-1 du Livre des Procédures Fiscales (LPF) à deux ans à compter de la mise en recouvrement de l'impôt contesté. Cette date de mise en recouvrement figure explicitement sur l'avis d'imposition, dans la section dédiée au paiement. Il est fortement recommandé de noter cette date dès réception de l'avis et de calculer immédiatement la date limite de réclamation pour éviter toute prescription.

Il existe des délais spéciaux qui peuvent être plus favorables au contribuable. Pour les revenus qui n'ont pas été déclarés (omission involontaire), le délai peut être porté à trois ans. Pour les erreurs découvertes à la suite d'une décision de justice ou d'une instruction administrative nouvelle, un délai spécial court à compter de la publication de cette décision. Ces délais spéciaux ne se substituent pas au délai général mais s'y ajoutent dans certains cas — raison pour laquelle il vaut toujours la peine de vérifier avec un conseiller fiscal avant de conclure qu'une réclamation est prescrite.

La réclamation elle-même doit contenir plusieurs éléments obligatoires pour être recevable : l'identification du réclamant (nom, prénom, adresse, numéro fiscal), l'identification précise de l'impôt contesté (nature de l'impôt, année d'imposition, montant contesté), l'exposé des motifs de la réclamation avec les fondements juridiques invoqués si possible, et la signature du contribuable ou de son mandataire. Une réclamation incomplète peut être déclarée irrecevable, ce qui entraîne la perte du droit de recours pour ce motif — il vaut mieux prendre le temps de la bien formuler.

## Construire un dossier de réclamation solide

La qualité des pièces justificatives jointes à la réclamation est déterminante pour son succès. Pour une erreur portant sur un montant de revenu, les justificatifs à fournir incluent les bulletins de salaire correspondant à la période contestée, l'attestation de l'employeur confirmant le montant exact du salaire annuel, et si disponible l'attestation fiscale remise par l'employeur en début d'année. Pour une erreur portant sur une déduction omise, les justificatifs de la dépense déductible (factures, contrats, attestations) doivent être fournis avec une référence aux textes fiscaux autorisant la déduction.

La clarté de l'exposé des motifs est aussi importante que les pièces jointes. Un réclamant qui explique précisément quelle ligne de l'avis d'imposition est erronée, quel est le montant correct selon ses calculs, et quelle est la différence d'impôt qui en résulte, donne à l'agent des impôts en charge du dossier tous les éléments pour instruire rapidement la réclamation. Une réclamation vague qui se contente de mentionner un « désaccord avec le montant de l'impôt » sans préciser sa nature sera traitée plus lentement et avec moins de chances de succès.

## Les voies de recours amiables avant le contentieux

Avant d'engager une procédure contentieuse formelle, plusieurs voies de règlement amiable méritent d'être explorées. La première est simplement de contacter directement son service des impôts par téléphone ou en prenant un rendez-vous en agence. Dans de nombreux cas, les erreurs simples — un montant mal reporté, une déduction oubliée — peuvent être corrigées rapidement lors d'un entretien avec un agent qui a accès au dossier fiscal complet. Cette approche informelle est souvent plus rapide que la procédure de réclamation formelle.

La deuxième voie amiable est le service de médiation fiscale. Chaque Direction Régionale des Finances Publiques dispose d'un médiateur départemental accessible aux contribuables en désaccord avec l'administration. Ce médiateur peut intervenir après une première réclamation infructueuse et avant la saisine du tribunal administratif. Son rôle est de faciliter le dialogue entre le contribuable et l'administration, de proposer des interprétations équilibrées des textes fiscaux, et de rechercher des solutions négociées lorsque le litige repose sur des interprétations divergentes de règles complexes.
`;

const EXT1_L2 = `
## Le calendrier fiscal français et ses implications

Comprendre le calendrier fiscal annuel permet de savoir quand s'attendre à recevoir son avis d'imposition et comment planifier les démarches associées. La campagne de déclaration des revenus se déroule entre avril et juin de chaque année pour les revenus de l'année précédente. Les dates exactes varient selon les départements et selon que la déclaration est faite en ligne ou sur papier — la déclaration en ligne bénéficie toujours d'un délai supplémentaire de deux à trois semaines.

Les avis d'imposition sont émis en plusieurs vagues entre juillet et octobre selon les foyers. Les premiers avis — généralement pour les foyers sans revenus complexes — sont envoyés dès juillet. Les foyers avec des revenus multiples ou des situations fiscales complexes reçoivent leur avis plus tard dans l'été. L'avis est disponible en ligne sur l'espace particulier d'impots.gouv.fr dès son émission, souvent avant l'arrivée du courrier papier — ce qui permet d'antiiciper les démarches qui en dépendent.

Le prélèvement à la source, introduit en 2019, a modifié la dynamique temporelle de l'impôt sans supprimer l'avis d'imposition. L'avis d'imposition annuel sert désormais à régulariser l'impôt : si les prélèvements mensuels ont été excessifs, un remboursement est effectué en juillet-août ; si ils ont été insuffisants, un complément est prélevé en septembre. Pour les foyers qui bénéficient de nombreux crédits d'impôt, le remboursement de juillet-août peut représenter une somme significative à planifier dans la gestion financière annuelle.

## Comment l'avis d'imposition interagit avec d'autres documents fiscaux

L'avis d'imposition n'est pas un document isolé — il s'inscrit dans un ensemble de documents fiscaux produits par l'administration tout au long de l'année. La déclaration préremplie, disponible en avril, est le point de départ : elle reprend les revenus connus de l'administration (salaires, allocations, pensions). L'avis d'imposition est le document final qui confirme le résultat de cette déclaration après traitement.

Entre ces deux documents, l'administration peut émettre des demandes de renseignements supplémentaires si certaines informations sont manquantes ou incohérentes. Ces demandes, envoyées par courrier en été, doivent recevoir une réponse dans les délais indiqués (généralement trente jours). Ne pas répondre à une demande de renseignements peut conduire à un redressement fiscal de la part de l'administration, qui applique alors sa propre évaluation des revenus manquants.

Pour les contribuables qui ont des revenus fonciers, des bénéfices industriels et commerciaux, ou d'autres revenus complexes, l'avis d'imposition final peut différer significativement de ce qu'ils attendaient. Comprendre l'articulation entre les déclarations annexes (formulaires 2044 pour les revenus fonciers, 2042C pour les revenus complémentaires) et l'avis final est essentiel pour vérifier l'exactitude du document.

## Les mentions légales et informations de référence sur l'avis

L'avis d'imposition contient plusieurs mentions légales et références qui sont utiles à connaître pour les démarches administratives. Le numéro fiscal du foyer (à 13 chiffres) est l'identifiant unique du foyer fiscal auprès de l'administration. Le numéro de rôle (ou référence de l'avis) identifie précisément le document et est nécessaire pour toute correspondance avec l'administration fiscale concernant cet avis.

La date de mise en recouvrement est la date à partir de laquelle le délai de réclamation court — c'est elle qui détermine la date limite pour contester l'avis. La date d'établissement de l'avis est différente de la date de mise en recouvrement et ne doit pas être confondue avec elle. Pour un avis émis en juillet pour les revenus de l'année précédente, la mise en recouvrement est généralement fixée en septembre ou octobre de la même année.
`;

const EXT1_L3 = `
## Gérer ses documents fiscaux : organisation pratique

La bonne organisation de ses documents fiscaux est une habitude qui paie sur le long terme. Les avis d'imposition doivent idéalement être conservés au minimum cinq ans — le délai de prescription fiscale de droit commun. En pratique, conserver ses avis indéfiniment ne coûte rien en version numérique et peut s'avérer précieux des années plus tard pour des démarches imprévues (retraite, successions, démarches administratives complexes). Un dossier numérique organisé par année, avec les noms de fichiers normalisés (par exemple : avis-imposition-2023.pdf), permet de retrouver facilement les documents nécessaires.

Pour les personnes qui gèrent plusieurs situations fiscales complexes — travail indépendant, revenus fonciers, situations familiales changeantes — tenir un tableau de suivi des déclarations et des avis correspondants peut aider à identifier rapidement les années pour lesquelles des vérifications sont nécessaires. Ce tableau, aussi simple qu'une feuille de calcul avec le revenu déclaré, l'impôt calculé et l'impôt payé pour chaque année, constitue un historique fiscal personnel utile.

## Le service en ligne impots.gouv.fr : fonctionnalités méconnues

L'espace particulier sur impots.gouv.fr offre bien plus que la simple consultation et le téléchargement de l'avis d'imposition. La messagerie sécurisée permet d'envoyer des messages à l'administration fiscale en conservant des traces écrites de tous les échanges. Cette messagerie est préférable au téléphone pour toute communication importante car elle crée un historique daté qui peut être utilisé en cas de litige.

La fonction de simulation d'impôt permet d'estimer son impôt futur à partir de revenus prévisionnels — utile pour anticiper l'impact fiscal d'un changement de situation (augmentation de salaire, début d'une activité indépendante, achat immobilier). Cette simulation n'a pas de valeur officielle mais permet de préparer son budget en intégrant la charge fiscale à venir.

Le service de correction de la déclaration (télécorrection), disponible de mai à décembre, est l'une des fonctionnalités les plus utiles mais les moins connues. Il permet de corriger une déclaration déjà soumise sans passer par une procédure formelle de réclamation. Une simple correction en ligne entraîne automatiquement l'émission d'un avis d'imposition corrigé. Cette voie doit toujours être tentée en premier lieu lorsque l'erreur est dans la déclaration initiale et que la période de télécorrection est ouverte.

## Comprendre la notion de foyer fiscal et ses implications

Le foyer fiscal est l'unité de base de la fiscalité française — il regroupe le contribuable, son conjoint (marié ou pacsé), et leurs enfants à charge. La situation familiale du foyer fiscal détermine le nombre de parts fiscales, qui est le diviseur utilisé dans le calcul du quotient familial. Ce quotient familial est l'un des mécanismes les plus importants de la fiscalité française car il modère l'imposition des familles avec enfants.

Pour les étudiants, la question de l'appartenance fiscale peut se poser : sont-ils dans le foyer fiscal de leurs parents ou ont-ils leur propre foyer fiscal ? Un étudiant rattaché au foyer fiscal parentel permet à ses parents de bénéficier d'une demi-part supplémentaire, ce qui réduit leur impôt. En contrepartie, l'étudiant ne peut pas prétendre à sa propre déclaration et doit déclarer ses revenus dans celle de ses parents.

Un étudiant qui se détache du foyer parental devient contribuable autonome et reçoit son propre avis d'imposition. Cette option est fiscalement avantageuse si l'étudiant a des revenus suffisants pour bénéficier de la réduction pour frais de scolarité ou d'autres avantages personnels, mais défavorable si ses revenus sont si faibles qu'il n'est pas imposable — dans ce cas, le rattachement parental est généralement plus avantageux pour la famille.
`;

const EXT1_L4 = `
## Identifier sa résidence fiscale en pratique

Pour un étudiant étranger, l'identification concrète de sa résidence fiscale nécessite d'analyser sa situation personnelle au regard de chacun des critères légaux. Le critère du domicile principal (foyer habituel) s'apprécie en fonction de l'endroit où l'étudiant vit avec sa famille ou, s'il est célibataire, de son logement principal. Si un étudiant loue un appartement en France pour toute la durée de ses études et n'a plus de résidence permanente dans son pays d'origine, son domicile principal est en France.

Le critère du lieu d'exercice de l'activité principale est particulièrement pertinent pour les étudiants : les études sont considérées comme une activité principale au sens fiscal. Un étudiant qui suit un programme de formation en France à temps plein remplit généralement ce critère. Ce critère peut s'appliquer même si l'étudiant ne travaille pas — les études à temps plein constituent une activité principale.

Le critère des 183 jours de séjour est un critère de dernier ressort qui s'applique quand les deux premiers critères ne permettent pas de trancher clairement. Compter les jours de présence physique en France dans l'année civile (du 1er janvier au 31 décembre) permet de déterminer si ce seuil est atteint. Pour un étudiant qui arrive en France en septembre et repart chez ses parents pour les vacances, le comptage peut être serré — mais pour un étudiant qui reste en France toute l'année académique plus une partie de l'été, le seuil est généralement atteint.

## Les obligations déclaratives pratiques pour les étudiants étrangers

Un étudiant étranger résident fiscal en France doit effectuer sa première déclaration de revenus au printemps suivant son installation. Si l'étudiant est arrivé en France en septembre 2023, sa première déclaration sera déposée en avril-mai 2024 pour les revenus perçus entre son arrivée et le 31 décembre 2023. Les revenus à déclarer incluent tous les revenus de source française perçus depuis l'arrivée en France, plus les revenus de source étrangère si l'étudiant est résident fiscal français (avec application des conventions fiscales le cas échéant).

La première déclaration est souvent la plus complexe car elle nécessite de déterminer la résidence fiscale, d'identifier les revenus des deux pays, et d'appliquer les conventions bilatérales. Il est recommandé pour cette première déclaration de consulter le service des impôts des non-résidents (SIPNR) qui dispose d'agents spécialisés dans les situations internationales, ou de faire appel à un conseiller fiscal familier avec la fiscalité internationale.

## Les conventions fiscales : exemples pratiques

La convention fiscale bilatérale entre la France et un pays donné peut exonérer certains revenus de l'étudiant de la taxation française même s'il est résident fiscal en France. Les exemples les plus courants concernent les bourses gouvernementales : si le gouvernement du pays d'origine verse une bourse à l'étudiant pour financer ses études en France, cette bourse peut être exonérée en France selon les termes de la convention. La vérification précise nécessite de consulter le texte de la convention bilatérale applicable, disponible sur le site du Ministère des Finances ou sur le portail des conventions fiscales de l'OCDE.

Les revenus d'emploi à temps partiel en France sont généralement imposables en France, même si l'étudiant est aussi résident fiscal de son pays d'origine. Les conventions évitent la double imposition en permettant d'imputer l'impôt payé en France sur l'impôt dû dans le pays d'origine (méthode du crédit d'impôt). La déclaration dans le pays d'origine des revenus français, accompagnée de la preuve du paiement de l'impôt en France, est nécessaire pour activer ce mécanisme de crédit.
`;

const EXT1_L5 = `
## Le rôle de l'avis d'imposition dans les demandes de visa et titres de séjour

Parmi les usages moins connus de l'avis d'imposition, son rôle dans les demandes de renouvellement de titre de séjour mérite une attention particulière. La préfecture, lors des demandes de renouvellement du titre de séjour étudiant ou salarié, peut demander les avis d'imposition des dernières années pour s'assurer que l'étranger résidant en France est bien en règle avec ses obligations fiscales françaises. L'absence d'avis d'imposition (parce que le résident n'a jamais déclaré ses revenus) peut compliquer considérablement le renouvellement.

Pour les étudiants en alternance ou en contrat professionnel qui souhaitent obtenir un titre de séjour mention « salarié » après leurs études, les avis d'imposition des années d'études montrant la déclaration régulière de leurs revenus de contrat d'apprentissage constituent un historique fiscal franc qui facilite l'instruction du dossier. L'administration préfectorale fait confiance aux données fiscales en raison de leur traçabilité et de leur vérifiabilité directe avec l'administration fiscale.

## L'avis d'imposition et les aides des associations et fondations

Au-delà des organismes publics, de nombreuses associations et fondations privées qui accordent des aides aux étudiants en difficulté utilisent également l'avis d'imposition comme base d'évaluation des ressources. Les fonds de solidarité des grandes écoles et universités, les associations d'anciens élèves qui octroient des bourses aux étudiants en difficulté financière, et les fondations caritatives qui soutiennent les étudiants étrangers demandent systématiquement ce document.

L'avis d'imposition est préféré à d'autres justificatifs de revenus (fiches de paie, relevés bancaires) pour ces usages car il offre une vision consolidée des ressources annuelles, est produit par une autorité officielle sans possibilité de falsification simple, et permet de calculer facilement le revenu mensuel moyen. Pour les étudiants qui sollicitent ce type d'aide, avoir son avis d'imposition (et celui de ses parents si applicable) à portée de main lors de la constitution du dossier est une nécessité pratique.

## La vérification de l'authenticité d'un avis d'imposition

La vérification de l'authenticité d'un avis d'imposition est possible via le service en ligne disponible sur impots.gouv.fr. Ce service, accessible à toute personne qui dispose du numéro fiscal et du numéro de référence de l'avis, permet de confirmer en temps réel que le document présenté correspond aux données officielles. Les propriétaires immobiliers, les employeurs et les organismes de crédit peuvent utiliser ce service pour s'assurer de l'authenticité d'un avis d'imposition qui leur est présenté.

Pour les étudiants qui constituent des dossiers importants (candidature locative, demande de prêt), informer le destinataire de la disponibilité de ce service de vérification peut augmenter la crédibilité du dossier. La présentation d'un document dont l'authenticité est vérifiable immédiatement démontre la transparence du candidat et simplifie le travail de vérification du propriétaire ou de l'organisme prêteur.

## Gérer le cas particulier des revenus d'alternance

Les revenus de contrat d'apprentissage constituent un cas particulier dans la fiscalité française. Jusqu'à un certain seuil (fixé chaque année et correspondant généralement au SMIC annuel), les salaires perçus dans le cadre d'un contrat d'apprentissage sont exonérés d'impôt sur le revenu. Cette exonération s'applique automatiquement lors du traitement de la déclaration de revenus. L'avis d'imposition d'un étudiant en alternance montrera donc généralement un impôt nul ou très faible, même si les revenus déclarés sont significatifs.

Pour les étudiants en master ou en école d'ingénieurs qui effectuent une alternance rémunérée substantiellement, connaître cette exonération permet d'éviter de sous-déclarer ses revenus par crainte d'une taxation. La sous-déclaration est une infraction qui peut entraîner des pénalités ; la bonne pratique est de déclarer le revenu exact et de laisser l'administration appliquer l'exonération automatique lors du calcul de l'impôt.
`;

const EXT1_L6 = `
## L'impact du prélèvement à la source sur les travailleurs saisonniers et occasionnels

Pour les étudiants qui travaillent de façon occasionnelle ou saisonnière — jobs d'été, missions d'interim, extras dans la restauration — le prélèvement à la source fonctionne selon des règles spécifiques. Chaque employeur applique le taux de PAS transmis par l'administration fiscale pour chaque salarié. Si l'étudiant n'a pas encore de taux personnalisé (première embauche en France), l'employeur applique le taux neutre correspondant au niveau de revenu mensuel versé.

Le taux neutre est calculé sur la base d'un revenu mensuel isolé, sans tenir compte des revenus des autres mois de l'année. Pour un étudiant qui travaille deux mois en été avec un salaire équivalent à temps plein, le taux neutre appliqué est celui correspondant à ce salaire mensuel — mais l'impôt annuel réel, calculé sur la base des revenus totaux de l'année (faibles ou nuls les autres mois), sera généralement nul ou très faible. Le remboursement des prélèvements à la source effectués pendant les mois de travail sera donc restitué lors de la régularisation estivale de l'année suivante.

## Optimiser son taux de prélèvement à la source lors des changements de situation

Le changement du taux de prélèvement à la source n'est pas automatique lors de tous les changements de situation. Il est transmis annuellement par l'administration fiscale à l'employeur sur la base de la dernière déclaration traitée. Mais des changements significatifs de revenus ou de situation familiale en cours d'année peuvent justifier une modulation du taux.

La modulation du PAS peut être effectuée en ligne sur l'espace particulier d'impots.gouv.fr, dans la section dédiée au prélèvement à la source. Cette modulation permet d'adapter le taux mensuel prélevé à la situation fiscale réelle attendue pour l'année en cours. Si un étudiant commence une alternance en septembre avec un salaire substantiel alors que son taux de PAS était calculé sur une base de revenus nuls, il peut demander une modulation pour que le taux correctement refléte ses nouveaux revenus attendus.

## La déclaration des revenus étrangers dans le cadre du PAS

Le prélèvement à la source ne couvre pas tous les revenus — en particulier, les revenus étrangers ne font pas l'objet d'un prélèvement à la source par les employeurs ou organismes payeurs étrangers (qui sont hors du système fiscal français). Pour les étudiants qui perçoivent des revenus de source étrangère tout en étant résidents fiscaux français (bourse d'un gouvernement étranger, revenus de travail à distance pour un employeur étranger), ces revenus doivent être déclarés dans la déclaration annuelle.

L'impôt correspondant à ces revenus étrangers non soumis au PAS est prélevé sous forme d'un acompte annuel versé en septembre et en décembre (deux acomptes de 50% chacun). Ces acomptes sont calculés automatiquement par l'administration sur la base des revenus étrangers déclarés l'année précédente. Si les revenus étrangers varient significativement d'une année sur l'autre, il est possible de moduler ces acomptes via l'espace particulier pour éviter de payer un acompte basé sur des revenus passés qui ne reflètent plus la situation actuelle.

## La régularisation de fin d'année : comprendre le solde

La régularisation intervient après le traitement de la déclaration de revenus annuelle, généralement entre juillet et septembre. L'administration compare le montant total des prélèvements à la source effectués pendant l'année (incluant les prélèvements mensuels sur salaire et les acomptes sur revenus non salariaux) avec l'impôt théoriquement dû calculé lors du traitement de la déclaration.

Si le solde est positif (l'impôt dû dépasse les prélèvements effectués), un solde à payer est mis en recouvrement en septembre. Ce solde peut être prélevé en une seule fois si son montant est inférieur à 300 euros, ou en plusieurs fois s'il est plus élevé. Si le solde est négatif (les prélèvements dépassent l'impôt dû), un remboursement est effectué par virement bancaire sur le compte bancaire enregistré dans l'espace particulier. La mise à jour des coordonnées bancaires dans l'espace particulier est donc une étape administrative importante pour s'assurer que les remboursements sont bien reçus.
`;

await appendAndPatch('9e2a16ea-0c1b-4df3-a8f6-fb3dac6f425b', EXT1_L1);
await appendAndPatch('19527171-0a94-4ba5-b58e-a15de77a8adc', EXT1_L2);
await appendAndPatch('a2da7151-913a-4f41-8285-7ee916b68cb9', EXT1_L3);
await appendAndPatch('646d10ae-5597-4b58-928c-f22fc29ce5fb', EXT1_L4);
await appendAndPatch('838acbd1-bcda-4d75-81e0-b822158a6439', EXT1_L5);
await appendAndPatch('a7eb44c9-883f-4305-9041-97be5222b583', EXT1_L6);
