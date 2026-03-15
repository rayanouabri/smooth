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

const E1_L1 = `
## Les arnaques liées aux plateformes de microtravail

La prolifération des plateformes de microtravail (Mechanical Turk, Clickworker, Fiverr) a créé un nouveau vecteur d'arnaques pour les étudiants qui cherchent à compléter leurs revenus. Des offres présentées comme du «microtravail bien rémunéré» exigent souvent un paiement initial pour accéder aux «meilleures missions» ou pour rejoindre une «plateforme premium». Ces plateformes frauduleuses n'offrent aucun travail réel — elles encaissent les frais d'inscription et disparaissent, ou proposent des tâches si mal rémunérées qu'elles constituent une perte de temps caractérisée.

Les vraies plateformes de microtravail légitimes — 5euros.com (française), Malt, Upwork — ne demandent jamais de paiement pour s'inscrire ou pour accéder à des missions. Elles prélèvent une commission sur les revenus générés si la mission est complétée, mais n'exigent aucun paiement préalable. Toute offre de travail ou de gain en ligne qui demande un paiement initial est à traiter avec la plus grande méfiance.

## La protection des données personnelles dans les demandes d'aide

La soumission de demandes d'aide financière implique le partage de données personnelles sensibles — revenus, numéro de sécurité sociale, coordonnées bancaires. Ces informations, si elles tombent entre de mauvaises mains, peuvent être utilisées pour ouvrir des crédits frauduleux, usurper l'identité de la victime, ou pratiquer des fraudes fiscales. La protection de ces données est donc aussi importante que la recherche des aides elles-mêmes.

Ne jamais saisir ses coordonnées bancaires sur un site qui n'est pas celui de l'organisme officiel est une règle absolue. Les sites officiels de la CAF, du CROUS, de la Sécurité Sociale, et des banques utilisent tous le protocole HTTPS (cadenas dans la barre d'adresse) et des domaines en .gouv.fr ou les domaines officiels des organismes. En cas de doute sur l'authenticité d'un site, appeler directement l'organisme concerné au numéro de téléphone officiel trouvé sur service-public.fr — jamais sur un numéro trouvé dans un email non sollicité.

## Les arnaques aux logements étudiants et leur lien avec les aides

Une arnaque particulièrement répandue parmi les étudiants étrangers est la location de faux logements accompagnée de promesses d'aides financières. Le schéma classique est le suivant : un annonce de logement à loyer attractif est publiée sur Leboncoin ou Facebook par un prétendu propriétaire absent qui demande que le loyer soit payé à distance avant la visite, en promettant que l'APL couvrira la majorité du coût. Une fois le premier loyer versé, le "propriétaire" disparaît et le logement n'existe pas.

Pour éviter cette arnaque, ne jamais payer un loyer ou une caution avant d'avoir visité physiquement le logement et signé un bail en présence du propriétaire. Si la visite en personne est impossible (étudiant qui arrive de l'étranger), utiliser les services de visites vidéo ou mandater un proche de confiance sur place pour effectuer la visite. Les agences immobilières officielles sont préférables aux particuliers pour les premières locations à distance.

## Les droits des victimes d'arnaques aux aides étudiantes

En droit français, les victimes d'arnaques aux aides bénéficient de plusieurs protections légales qui leur permettent de poursuivre les auteurs et, dans certains cas, d'obtenir réparation. L'arnaque (escroquerie) est définie par l'article 313-1 du Code Pénal et punit ses auteurs de cinq ans d'emprisonnement et 375 000 euros d'amende. Les victimes peuvent se constituer partie civile dans les procédures pénales pour obtenir réparation des préjudices subis — non seulement les sommes versées, mais aussi les préjudices moraux et les frais engendrés par les démarches.

L'association de consommateurs UFC-Que Choisir et les associations d'aide aux victimes (INAVEM, France Victimes) proposent des accompagnements gratuits pour les victimes d'arnaques qui souhaitent porter plainte ou engager des procédures civiles. Ces associations disposent de juristes bénévoles et d'orientations pratiques pour maximiser les chances de récupération des sommes perdues.
`;

const E1_L2 = `
## La différence entre prêt étudiant et crédit à la consommation

Comprendre la distinction entre un prêt étudiant dédié et un crédit à la consommation classique est fondamental pour faire des choix financiers éclairés. Alors que le prêt étudiant garanti par l'État bénéficie de conditions spécifiques favorables — différé de remboursement, taux d'intérêt modéré, garantie d'État— un crédit à la consommation classique applique des taux d'intérêt beaucoup plus élevés (souvent 8 à 20% annuels), sans différé de remboursement. Pour un étudiant, recourir à un crédit revolving ou à facilités de paiement pour financer ses dépenses courantes est une pratique à éviter absolument, car elle risque de créer une spirale d'endettement aux taux très onéreux.

Si les ressources sont insuffisantes pour couvrir les besoins immédiats, explorer d'abord toutes les aides disponibles (CROUS, CAF, régions, associations) avant de recourir au crédit est la démarche la plus sage financièrement. Le crédit étudiant, s'il est contracté, doit l'être dans le cadre du dispositif garanti par l'État avec des montants et des durées réfléchis — pas comme une solution de facilité pour financer des dépenses non essentielles.

## Le remboursement anticipé du prêt étudiant

Le contrat de prêt étudiant garanti par l'État inclut généralement des dispositions sur le remboursement anticipé. En France, le Code de la Consommation permet aux emprunteurs de rembourser par anticipation tout ou partie de leur crédit, mais les banques peuvent appliquer des indemnités de remboursement anticipé (IRA) plafonnées par la loi. Pour les étudiants qui obtiennent un bon emploi après leurs études et disposent d'un excédent de trésorerie, le remboursement anticipé du prêt étudiant peut présenter un intérêt financier — il faut calculer si les intérêts économisés dépassent les indemnités éventuellement exigibles.

La négociation avec la banque sur les conditions de remboursement anticipé est toujours possible — les banques préfèrent souvent un accord flexible sur le remboursement global à un contentieux avec un client qui ne peut plus honorer ses échéances. En cas de difficulté financière en phase de remboursement, contacter proactivement la banque pour renégocier les conditions (allongement de la durée, réduction temporaire des mensualités) est préférable à une situation de défaut de paiement.

## L'impact du prêt étudiant sur le dossier de crédit futur

Le prêt étudiant bien géré — remboursements à l'heure, sans incident — est un élément positif dans l'historique de crédit qui facilite l'accès à de futurs crédits immobiliers ou professionnels. En France, les banques consultent le Fichier National des Incidents de Remboursement des Crédits aux Particuliers (FICP) avant d'accorder de nouveaux crédits. Un incident de remboursement sur le prêt étudiant (retard significatif, défaut de paiement) se traduit par une inscription au FICP qui peut compliquer l'accès à un crédit immobilier pendant plusieurs années après la régularisation.

La gestion rigoureuse du remboursement du prêt étudiant est donc non seulement une obligation contractuelle, mais aussi un investissement dans sa crédibilité financière future. Les anciens étudiants qui ont remboursé leur prêt étudiant sans incident bénéficient d'une meilleure image auprès des banques lors de leurs futures demandes de financement.

## Les aides des mutuelles étudiantes pour couvrir le prêt

Certaines mutuelles étudiantes et organisations de protection sociale proposent des aides ou des garanties complémentaires qui peuvent intervenir en cas de défaillance du remboursement du prêt, notamment en cas d'incapacité temporaire de travail suite à une maladie ou un accident. Ces garanties, si elles sont incluses dans le contrat de prêt ou souscrites séparément, protègent l'emprunteur contre les situations où la perte de revenus rend le remboursement difficile hors de sa volonté.

La LMDE (La Mutuelle des Étudiants) et la MGEL (Mutuelle Générale Étudiante de Lorraine) sont deux exemples de mutuelles qui proposent des services d'accompagnement financier et parfois des partenariats avec des établissements bancaires pour des conditions de prêt améliorées. Renseignez-vous auprès de la mutuelle à laquelle vous appartenez sur les aides et services financiers disponibles pour les membres.
`;

const E1_L3 = `
## Les épiceries solidaires universitaires : fonctionnement et accès

Les épiceries solidaires universitaires ont connu un développement important en France depuis 2015, avec aujourd'hui plus de 150 épiceries présentes dans les campus français. Ces structures, gérées par des associations étudiantes ou des fondations universitaires, proposent des produits alimentaires et d'hygiène à des prix réduits de 70 à 90% par rapport aux prix du marché. L'accès est conditionné à une vérification de ressources simple — généralement inférieure à 1,2 fois le montant du seuil de pauvreté — et à une inscription préalable.

Le fonctionnement concret varie selon les épiceries mais suit généralement le même schéma. L'étudiant s'inscrit en présentant un justificatif d'inscription universitaire et un justificatif de ressources. Il reçoit une carte d'accès qui lui permet de faire ses courses dans l'épicerie selon un budget mensuel prédéfini (souvent entre 50 et 100 euros par mois). Les produits disponibles comprennent des produits secs, des conserves, des produits d'hygiène, parfois des produits frais et des plats préparés. Certaines épiceries organisent également des ateliers cuisine ou nutrition pour les membres.

## Les aides alimentaires complémentaires : CPAM et aides nationales

Au-delà des dispositifs CROUS, d'autres organismes proposent des aides alimentaires aux étudiants en difficulté. La CPAM (Caisse Primaire d'Assurance Maladie) dispose de fonds d'action sociale qui peuvent financer des aides alimentaires d'urgence pour les personnes assurées qui traversent des difficultés financières. Ces aides, peu connues, sont accessibles sur dossier présenté à l'assistante sociale de la CPAM.

Le Secours Populaire Français et la Croix-Rouge française disposent de programmes d'aide alimentaire pour les étudiants en situation de précarité. Ces associations fonctionnent sur inscription et vérification de la situation sociale — elles ne sont pas réservées aux personnes sans emploi ou en situation de grande exclusion, mais peuvent aider les étudiants boursiers ou sans ressources qui ne mangent pas suffisamment. Ces ressources, souvent stigmatisées à tort, sont là pour aider toute personne qui en a besoin, sans jugement.

## Anticiper les difficultés financières plutôt que les subir

La clé pour éviter les crises financières aiguës est l'anticipation. Dès le début de l'année académique, identifier toutes les aides auxquelles on a droit, soumettre les dossiers le plus tôt possible, et configurer un système de suivi budgétaire créent un filet de sécurité proactif. Les difficultés financières sont souvent amplifiées par l'inaction — attendre d'être en crise pour demander des aides signifie que les délais de traitement des dossiers s'ajoutent à la détresse financière.

Constituer une petite réserve d'urgence — même modeste, comme un ou deux mois de dépenses minimales — est le meilleur assurance contre les imprévus. Pour les étudiants qui travaillent à temps partiel, mettre de côté 10% de chaque salaire dans un compte épargne séparé crée progressivement cette réserve sans effort apparent. Même 20 euros épargnés chaque semaine représentent plus de 1 000 euros de réserve après un an — une somme qui peut couvrir la grande majorité des urgences financières courantes.

## Les ressources des universités et grandes écoles pour les étudiants en difficulté

De nombreuses universités et grandes écoles françaises disposent de leurs propres ressources pour soutenir les étudiants en difficulté financière, au-delà des dispositifs CROUS. Les services de la vie étudiante, les fondations universitaires, et les associations de préparation à l'insertion professionnelle proposent des aides ponctuelles, des bourses de mérite, des prêts d'honneur, et des accès à des équipements (ordinateurs, livres) à titre gratuit ou prêté.

Les universités membres de la Conférence des Présidents d'Université (CPU) ont adopté depuis 2019 une charte de l'étudiant précaire qui engage les établissements à proposer au moins une gamme minimale de services : accès à une aide alimentaire d'urgence, accès à un ordinateur prêté, accès à des soins de santé de premier recours. Vérifier si votre établissement est signataire de cette charte et connaître les services disponibles est une démarche prioritaire à l'inscription.
`;

const E1_L4 = `
## Les allocations familiales : un soutien possible au-delà de la majorité

En France, les allocations familiales versées par la CAF aux parents peuvent continuer d'être perçues pour un enfant jusqu'à l'âge de 20 ans s'il est encore à charge du foyer et que ses revenus propres n'excèdent pas un plafond. Pour un étudiant qui reste dans le foyer fiscal de ses parents ou qui remplit les conditions de charge, ces allocations — perçues par les parents — peuvent être une ressource indirecte. Si les parents transmettent ces allocations à l'étudiant, cela constitue un soutien financier basé sur un droit légal.

Cette information est utile lors des discussions familiales sur le financement des études — les parents peuvent ignorer que les allocations qu'ils perçoivent encore pour leur enfant étudiant peuvent légalement se poursuivre jusqu'à ses 20 ans. La CAF calcule automatiquement les droits jusqu'au 20e anniversaire si la situation reste inchangée, mais certains foyers oublient de vérifier que les déclarations sont à jour.

## Les aides spécifiques aux étudiants en situation de handicap

Les étudiants en situation de handicap en France bénéficient d'un dispositif d'aides spécifiques qui complète les dispositifs standard. L'Allocation Adulte Handicapé (AAH), versée par la CAF sous conditions de ressources, peut être perçue en parallèle des études si le taux d'incapacité est reconnu par la MDPH (Maison Départementale des Personnes Handicapées). Le montant de l'AAH en 2024 est d'environ 971 euros par mois — une ressource significative qui peut permettre de financer des études sans emploi à temps partiel.

Les CROUS disposent également d'un contingent de bourses spécifiques pour les étudiants en situation de handicap, accessibles en parallèle des bourses ordinaires. Les universités disposent de services d'accompagnement des étudiants handicapés (SUAP ou services similaires) qui peuvent orienter vers les aides disponibles. Ces services sont souvent méconnus — un étudiant qui vient d'arriver avec une reconnaissance de handicap doit les contacter dès l'inscription.

## Les aides des régions pour la mobilité internationale

Pour les étudiants qui souhaitent effectuer une partie de leurs études à l'étranger (semestre Erasmus, stage international, échange universitaire), les régions françaises proposent des aides à la mobilité complémentaires aux bourses Erasmus+ de l'Union Européenne. Ces aides régionales, qui s'ajoutent aux bourses Erasmus et parfois aux bourses du CROUS, peuvent représenter plusieurs centaines d'euros supplémentaires pour couvrir les frais de voyage et d'installation à l'étranger.

La démarche pour obtenir ces aides régionales varie selon les régions — certaines exigent une demande préalable au départ, d'autres fonctionnent en remboursement de frais sur justificatifs après le retour. Il est donc important de se renseigner auprès du bureau des relations internationales de son université et du conseil régional avant le départ pour identifier toutes les sources d'aide disponibles et respecter les délais de candidature.

## La complémentaire santé solidaire pour les étudiants précaires

La Complémentaire Santé Solidaire (CSS, anciennement CMU-C) est une mutuelle gratuite ou à faible coût réservée aux personnes dont les revenus ne dépassent pas certains plafonds. Pour les étudiants aux ressources très faibles — sans bourse ou avec une bourse de premier échelon — la CSS peut être accessible et représente une couverture santé complémentaire très avantageuse qui rembourse le ticket modérateur et les dépassements d'honoraires dans certaines limites.

La demande de CSS se fait auprès de la CPAM via le formulaire disponible sur ameli.fr. Les étudiants qui n'ont pas de couverture complémentaire du tout — parce qu'ils n'ont pas encore souscrit une mutuelle étudiante ou que leur mutuelle ne couvre pas suffisamment — doivent impérativement vérifier leur éligibilité à la CSS, car le coût des soins de santé sans couverture complémentaire peut rapidement atteindre des montants difficiles à gérer sur un budget étudiant.
`;

const E1_L5 = `
## Les conditions d'éligibilité à l'APL pour les étudiants selon leur nationalité

L'accès aux aides au logement de la CAF est soumis à des conditions de régularité de présence en France qui varient selon la nationalité. Les ressortissants français bénéficient de l'APL sans condition de durée de présence. Les ressortissants de l'UE peuvent y accéder s'ils justifient d'un droit au séjour régulier (document attestant de leur inscription ou de leur activité en France). Les ressortissants hors-UE doivent disposer d'un titre de séjour valide — une carte de séjour étudiant ou équivalent.

Pour les étudiants qui arrivent en France pour la première fois et n'ont pas encore de titre de séjour définitif, la période de traitement du dossier préfectoral peut créer un délai avant l'éligibilité aux aides CAF. Pendant cette période, les aides d'urgence du CROUS et les fonds sociaux universitaires peuvent pallier temporairement l'absence de ressources CAF. Dès l'obtention du titre de séjour, la demande d'APL doit être déposée immédiatement pour commencer à percevoir les aides le plus tôt possible.

## La révision périodique des aides et les déclarations trimestrielles

La CAF recalcule les aides au logement chaque trimestre en fonction des revenus déclarés par l'allocataire lors du trimestre précédent. Ce mécanisme, appelé "APL en temps réel", signifie que les revenus perçus pendant un trimestre influencent les aides reçues lors des trimestres suivants. Pour un étudiant qui effectue un job d'été intensif en juillet-août et perçoit des revenus élevés sur ces deux mois, les aides d'automne pourront être réduites — même si les revenus d'été ne correspondent pas à une situation durable.

Cette mécanique nécessite une vigilance sur les revenus perçus et les déclarations à effectuer. Si des revenus exceptionnels risquent de faire baisser les aides de façon significative, discuter avec un conseiller CAF de la façon de les déclarer correctement et de savoir à quelle aide s'attendre peut éviter des surprises désagréables. Les assistantes sociales CROUS et les Points Info Étudiants de certaines villes peuvent également aider à comprendre ces mécanismes.

## L'accès au logement étudiant via Action Logement

Action Logement est un organisme paritaire qui gère un dispositif d'aide à l'accès au logement principal pour les salariés, mais aussi pour certaines catégories d'étudiants dont les parents sont salariés d'une entreprise cotisant au 1% logement. Si l'un des parents travaille dans une entreprise de plus de 10 salariés, l'étudiant peut potentiellement bénéficier d'une garantie locative gratuite (Visale) ou d'une avance sur caution (dans certains cas) via Action Logement.

La garantie Visale est particulièrement intéressante pour les étudiants sans garant familial disponible — c'est une garantie locative gratuite pour les locataires de moins de 30 ans, qui sécurise le bailleur contre les impayés et facilite l'accès au logement. Les propriétaires privés qui acceptent Visale s'engagent à ne pas demander de garant personne physique en sus, ce qui lève souvent le principal obstacle à la location pour les étudiants étrangers.

## L'allocation de rentrée scolaire pour les étudiants boursiers

L'Allocation de Rentrée Scolaire (ARS) est une aide versée par la CAF en août à certaines familles pour couvrir les frais de rentrée des enfants en âge scolaire jusqu'à 18 ans. Pour les étudiants boursiers qui sont encore considérés à charge de leurs parents (bourse sur critères sociaux calculée à partir des revenus parentaux), il peut exister des dispositifs complémentaires de la région ou du département pour financer les frais de rentrée dans l'enseignement supérieur — achat d'ordinateur, de manuels, de matériel professionnel.

Ces aides, distinctes de l'ARS au sens strict (réservée aux moins de 18 ans), sont accessibles via le CROUS ou les services étudiants des régions. Pour certaines filières nécessitant un équipement coûteux (arts, informatique, sciences appliquées), ces aides peuvent significativement réduire le coût de la rentrée.
`;

const E1_L6 = `
## Les erreurs de calcul les plus communes dans les budgets étudiants

Les erreurs de calcul dans les budgets étudiants conduisent souvent à des situations de déficit non anticipées. La première erreur est de ne pas intégrer les charges locatives dans le budget logement — certains étudiants calculent leur budget en incluant uniquement le loyer "nu" et oublient les provisions pour charges (eau chaude, chauffage collectif, ordures ménagères) et l'assurance habitation. Ces frais supplémentaires peuvent représenter 50 à 150 euros par mois en plus du loyer.

La deuxième erreur est d'oublier les dépenses annuelles qui pèsent sur certains mois spécifiques. La cotisation mutuelle étudiante (si elle n'est pas mensualisée), les frais d'inscription universitaire, le renouvellement du titre de séjour pour les étrangers, et les dépenses de rentrée (manuels, matériel) créent des pics de dépenses en septembre-octobre que le budget mensuel habituel ne couvre pas. La technique pour gérer ces dépenses annuelles est de les répartir sur 12 mois dans le budget mensuel — comme une "épargne forcée" dédiée à ces dépenses prévues — pour ne pas être pris de court.

## Les outils de comparaison des simulateurs d'aides

Plusieurs portails officiels permettent de simuler l'ensemble des aides auxquelles on peut prétendre en une seule démarche, sans avoir à remplir des formulaires sur chaque organisme séparément. Le portail mes-aides.gouv.fr (récemment renommé 1jeune1solution) propose un simulateur qui identifie toutes les aides nationales, régionales et locales accessibles selon sa situation. Cette approche globale est plus efficace que de chercher individuellement sur chaque site d'organisme.

La simulation sur mes-aides.gouv.fr dure environ dix à quinze minutes et demande des informations sur la situation géographique, les ressources, la situation familiale et le type de logement. En sortie, elle produit une liste des aides éligibles avec les montants estimés et les liens vers les formulaires de demande. Ce point d'entrée unique est particulièrement utile pour les nouveaux arrivants en France qui ne connaissent pas encore le système d'aides.

## La gestion des ressources irrégulières : jobs étudiants saisonniers

Beaucoup d'étudiants financent une partie de leurs études grâce à des emplois saisonniers (été, vacances de Noël) qui génèrent des revenus concentrés sur quelques mois. La gestion budgétaire de ces revenus irréguliers demande une discipline spécifique — il est tentant de dépenser librement pendant les périodes de revenus élevés, sans anticiper les mois où il n'y a pas de revenus d'emploi.

La stratégie recommandée pour les revenus d'emplois saisonniers est de calculer le revenu annuel total et de le diviser par douze pour obtenir un "salaire mensuel moyen" virtuel. C'est ce montant mensuel moyen qui doit guider le niveau de dépenses mensuel, pas le revenu mensuel réel — en épargnant les excédents des mois riches pour financer les mois sans revenus. Cette approche de lissage des revenus irréguliers est la clé d'une situation financière stable sur l'ensemble de l'année académique.

## Les ressources complémentaires pour les étudiants boursiers

Les étudiants boursiers du CROUS bénéficient d'avantages complémentaires qui s'ajoutent à la bourse mensuelle et qui sont souvent méconnus. L'exonération des droits d'inscription universitaires pour les boursiers d'échelon 6 et 7, l'accès aux repas à tarif réduit dans les restaurants universitaires (1 euro pour les boursiers, 3,30 euros pour les non-boursiers), et les priorités d'accès aux logements en résidence CROUS sont des avantages significatifs qui réduisent le coût réel des études.

Certains établissements d'enseignement supérieur proposent également des avantages spécifiques aux boursiers : prêts d'équipement informatique, accès gratuit à des logiciels professionnels, exonérations de certains frais pédagogiques. Consulter le règlement des aides de son établissement et les services de la vie étudiante au début de chaque année académique permet de s'assurer qu'on bénéficie de tous les avantages auxquels on a droit.

## La constitution d'un plan financier pour la durée des études

Un plan financier global sur la durée complète estimée des études — deux ans pour un BTS, trois ans pour une licence, cinq ans pour un master, huit à dix ans pour une médecine — est un exercice de projection qui aide à prendre des décisions rationnelles sur le financement. Ce plan intègre les aides prévues, les revenus d'emploi envisagés, l'évolution prévisible des dépenses (logement plus cher en troisième année, frais de master supérieurs à la licence), et les emprunts éventuellement nécessaires.

Cette vision long terme permet d'identifier les années critiques en termes de ressources — souvent la première année (installation coûteuse) et la dernière (fin de bourse, stage non rémunéré) — et d'y préparer des solutions en avance. Un étudiant qui sait qu'il aura des ressources insuffisantes en cinquième année peut commencer à épargner dès la deuxième année pour constituer une réserve, ou planifier un emploi à temps partiel plus important ces années-là.
`;

await appendAndPatch('d96c9d24-2b32-4fa0-9625-2217d74a7650', E1_L1);
await appendAndPatch('01449051-1879-46c9-96a5-ce20931ac76d', E1_L2);
await appendAndPatch('3c2044b9-79ea-470a-994a-94117071a70e', E1_L3);
await appendAndPatch('0f811457-418d-4a18-b647-d5882e0b1a80', E1_L4);
await appendAndPatch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', E1_L5);
await appendAndPatch('2fab22b0-0b45-47b9-9322-fe943a74380e', E1_L6);
