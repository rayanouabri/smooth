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
## La notification aux tiers lors de la clôture

Lors de la clôture d'un compte bancaire, un aspect souvent négligé est la communication de ce changement aux différents organismes et personnes qui interagissent régulièrement avec le compte. Cette notification proactive est indispensable pour éviter les incidents financiers post-clôture. Les organismes à notifier en priorité incluent l'employeur pour le versement du salaire, les organismes sociaux (CAF, CPAM, Pôle Emploi si applicable), le propriétaire pour les loyers, et les créanciers pour les remboursements de dettes.

Pour les abonnements et services récurrents, une liste exhaustive doit être dressée. Les abonnements numériques (streaming, logiciels, presse en ligne), les assurances (habitation, voiture, santé complémentaire), les abonnements de transport (Navigo, abonnement SNCF), et les services de téléphonie font partie des dépenses récurrentes à transférer vers le nouveau compte. Un oubli dans cette liste peut conduire à un rejet de prélèvement, des pénalités de retard, et potentiellement une interruption de service au moment le moins opportun.

## Comment dresser une liste complète des domiciliations

La méthode la plus fiable pour dresser une liste complète des domiciliations est d'analyser les douze derniers mois de relevés bancaires. Cette analyse révèle tous les prélèvements SEPA récurrents qui ont été débités sur le compte. Certains services ont des fréquences moins évidentes : une assurance annuelle prélevée en janvier peut avoir été oubliée si on lance la procédure de clôture en octobre. Le scan sur 12 mois complets garantit que tous les prélèvements annuels, semestriels, et mensuels sont identifiés.

La catégorisation de cette liste facilite le traitement : distinguer les prélèvements indispensables à transférer (loyer, énergie, mutuelle), les abonnements optionnels à décider au cas par cas (les conserver ou les résilier en même temps que le changement de compte), et les services qui peuvent attendre (abonnements peu utilisés dont la résiliation serait l'occasion de faire des économies). Ce tri simultané à la clôture du compte est une opportunité de rationeer ses dépenses récurrentes dont on ne peut pas se rater.

## La coordination avec la nouvelle banque

Quand la clôture fait suite à un changement de banque, la coordination entre l'ancienne et la nouvelle banque est centrale. Le service de mobilité bancaire Agir, accessible via la nouvelle banque, gère automatiquement le transfert des domiciliations bancaires — mais sa portée est limitée aux domiciliations SEPA identifiées par la banque entrante. Il est recommandé de fournir à la nouvelle banque la liste complète des domiciliations identifiée lors de l'analyse des relevés, pour s'assurer que l'ensemble est bien traité dans la migration Agir.

La nouvelle banque transmet les nouvelles coordonnées bancaires (nouveau RIB) aux émetteurs de prélèvements et organismes payeurs mentionnés. Ces organismes ont un délai de mise à jour de leurs systèmes qui peut atteindre plusieurs semaines. Pendant cette période transitoire, maintenir l'ancien compte actif avec un solde suffisant pour couvrir les derniers prélèvements qui pourraient encore arriver sur ce compte est une précaution indispensable.

## Les délais de transition recommandés

La durée de la période de transition entre l'ouverture du nouveau compte et la clôture définitive de l'ancien dépend de la complexité des domiciliations à migrer. Pour un étudiant avec peu de domiciliations récurrentes, deux mois suffisent généralement. Pour une personne avec de nombreux abonnements, un crédit immobilier, et plusieurs assurances, trois à quatre mois sont plus prudents. Plus le temps de chevauchement est long, moins il y a de risque d'incidents liés aux domiciliations non migrées.

Le choix de la date de clôture doit aussi tenir compte du calendrier des prélèvements. Clôturer un compte juste avant le 5 du mois, date courante de débit des loyers et de nombreux abonnements, sans avoir vérifié que tous ces prélèvements sont bien migrés, est une erreur fréquente qui peut générer des rejets en cascade. Préférer une date de clôture en milieu de mois, après la grande vague de prélèvements mensuals, réduit ce risque.
`;

const EXT1_L2 = `
## Les documents nécessaires pour la clôture

La demande de clôture de compte doit être accompagnée de certains documents pour être traitée par la banque. Les pièces habituellement requises sont : la pièce d'identité valide du titulaire ou des cotitulaires pour un compte joint, le RIB du compte sur lequel le solde résiduel doit être viré, et le formulaire de clôture de la banque si elle en dispose d'un. Certaines banques en ligne proposent un formulaire de clôture entièrement numérique accessible depuis l'espace client, ce qui simplifie considérablement la procédure.

Pour les procurations — quand une personne souhaite clôturer un compte au nom d'une autre — une procuration écrite et légalisée peut être requise, accompagnée des pièces d'identité du mandant et du mandataire. Cette situation se rencontre notamment quand le titulaire est hors de France et ne peut pas effectuer la démarche personnellement, ou quand le titulaire est dans l'incapacité physique de se déplacer.

## Le traitement des chèques en cours lors de la clôture

Un aspect souvent sous-estimé est le traitement des chèques émis mais non encore encaissés au moment de la demande de clôture. Un chèque remis à un tiers n'est pas immédiatement encaissé — il peut prendre plusieurs jours avant d'être présenté à la banque du bénéficiaire. Si le compte est clôturé avant que ce chèque soit encaissé, la présentation du chèque générera un rejet et une pénalité pour chèque sans provision.

La bonne pratique est d'informer la banque de tout chèque émis récemment et non encore encaissé lors de la demande de clôture. La banque peut maintenir le compte techniquement actif jusqu'à l'encaissement de ces chèques pendants, ou réserver le montant correspondant. Si cela n'est pas possible, contacter les bénéficiaires des chèques pour leur demander de les encaisser rapidement avant la clôture, ou de les restituer pour être remplacés par un virement depuis le nouveau compte, est la solution alternative.

## La confirmation écrite de clôture et son importance

La réception d'une confirmation écrite de clôture de la banque est un document à conserver précieusement. Cette confirmation atteste que le compte a bien été clôturé et à quelle date, ce qui est important pour délimiter la responsabilité du titulaire en cas d'incident ultérieur. Elle inclut généralement le solde final versé et les derniers frais facturés. En cas de litiges ou d'incompréhensions avec la banque après la clôture, cette confirmation est la pièce justificative centrale.

Si la banque ne fournit pas spontanément de confirmation écrite, la demander explicitement dans la lettre de clôture ou lors du contact avec le service client est recommandé. Certaines banques en ligne envoient automatiquement cette confirmation par email à la date effective de clôture. Pour les banques traditionnelles, un courrier de confirmation est généralement envoyé mais peut prendre quelques jours à arriver après la date effective de clôture.
`;

const EXT1_L3 = `
## La récupération de l'historique bancaire avant la clôture

Avant de clôturer définitivement un compte, il faut impérativement récupérer l'intégralité de l'historique des transactions accessible en ligne. La durée de conservation des données par les banques varie, mais l'accès en ligne est généralement désactivé peu de temps après la clôture du compte. Cette fenêtre de récupération est souvent très courte.

Les relevés doivent être téléchargés mois par mois ou par période dans le format disponible (généralement PDF). Certaines banques offrent un export des données en format CSV ou Excel qui facilite l'analyse ultérieure. L'archivage doit être organisé de façon logique — une arborescence de dossiers par année et par mois facilite la recherche d'une transaction spécifique ultérieurement. Le stockage dans un service cloud sécurisé offre une protection contre la perte de ces données en cas de panne d'ordinateur.

## La mise à jour des organismes administratifs

Plusieurs organismes administratifs français utilisent l'IBAN du compte courant pour effectuer des versements ou des prélèvements. La liste comprend notamment : la Direction Générale des Finances Publiques pour les remboursements d'impôts et les mensualités de paiement d'impôts, la CAF pour le versement des aides au logement et autres allocations, la CPAM pour les remboursements de soins, le CROUS pour les bourses étudiantes, et Pôle Emploi si applicable. Chacun de ces organismes doit être notifié du changement de coordonnées bancaires, soit via leur espace en ligne, soit par courrier recommandé.

La mise à jour des coordonnées bancaires auprès de ces organismes prend généralement 1 à 3 semaines. Pendant cette période, conserver l'ancien compte actif est indispensable pour ne pas rater les versements attendus. Un versement de CAF ou de bourse envoyé sur un compte clôturé sera retourné à l'émetteur — ce qui génère un délai de régularisation pouvant aller de quelques jours à plusieurs semaines selon l'organisme.

## La continuité des services bancaires annexes

Certains services bancaires annexes peuvent être rattachés au compte courant sans que le client en ait toujours conscience. Le coffre-fort numérique de documents, les alertes SMS liées au compte, les accès à des applications partenaires basées sur les données du compte : tous ces services doivent être vérifiés avant la clôture. Certains peuvent offrir des fonctionnalités que le client retrouvera avec sa nouvelle banque, d'autres peuvent nécessiter une migration ou une réouverture dans le nouveau contexte bancaire.

## L'impact de la clôture sur le score bancaire informel

Bien que la France n'ait pas de score de crédit centralisé comme les pays anglosaxons, la durée de la relation bancaire avec un établissement constitue un actif informel. Un client qui a géré un compte impeccable pendant 10 ans dans une banque dispose d'un historique positif qui peut être utile pour des demandes futures de crédit. La clôture met fin à cet historique auprès de l'établissement quitté — ce qui n'est pas un problème en soi, mais rappelle l'importance de bien gérer son compte dans la nouvelle banque dès le premier jour, pour commencer à construire ce même type d'historique positif.
`;

const EXT1_L4 = `
## Les situations où le service Agir est particulièrement précieux

Le service de mobilité bancaire Agir s'avère particulièrement utile dans certaines situations spécifiques. Pour les étudiants qui ont de nombreuses domiciliations établies sur plusieurs années, retrouver et contacter manuellement chaque créancier serait une tâche fastidieuse. Agir automatise la grande majorité de ces notifications. Pour les personnes qui ne lisent pas couramment le français, le fait que ce service soit géré directement entre les banques réduit la charge de communication administrative.

La nouvelle banque qui initie la procédure Agir envoie à l'ancienne banque une demande d'extraction de la liste des domiciliations. L'ancienne banque, si elle est domiciliataire des opérations, transmet cette liste. La nouvelle banque contacte ensuite chaque créancier pour leur communiquer le nouveau RIB. Ce processus prend 22 jours ouvrés maximum selon la réglementation. Pendant toute cette période, les deux comptes restent actifs pour garantir la continuité des opérations.

## La clôture dans le cadre d'un départ définitif de France

Pour les étudiants étrangers qui retournent dans leur pays d'origine après la fin de leurs études en France, la clôture du compte bancaire français fait partie du checklist de départ. La procédure est identique à celle d'un changement de banque, avec quelques spécificités. Le virement du solde résiduel peut nécessiter un virement international vers un compte étranger — ce qui peut engendrer des frais supplémentaires selon la banque et le pays de destination.

Pour les étudiants qui prévoient de revenir en France pour travailler après leurs études, conserver un compte français dormant avec un solde minimal peut être une stratégie utile : cela maintient l'historique bancaire en France et évite d'avoir à réouvrir un compte depuis zéro au retour. Certaines banques permettent le maintien d'un compte avec une domiciliation dans un pays étranger, sous réserve de ne pas être résident fiscal en France — les condition varient selon les établissements.

## Les délais de conservation des données par la banque après clôture

Après la clôture d'un compte, la banque est légalement tenue de conserver les données bancaires pendant un certain délai. Ce délai, fixé par la réglementation française, est généralement de 5 ans pour les données de compte standard. Pendant cette période, le client peut en théorie demander l'accès à ces données s'il en a besoin pour justifier une transaction passée. Après l'expiration de ce délai légal, les données sont définitivement effacées.

Cette conservation post-clôture est rassurante pour les clients qui auraient oublié de télécharger certains relevés avant la fermeture du compte. Il est cependant préférable de ne pas se reposer sur cette possibilité et de télécharger tout l'historique nécessaire avant la clôture — la procédure de demande d'accès aux données après clôture est plus complexe et chronophage que le téléchargement simple depuis l'espace en ligne actif.
`;

const EXT1_L5 = `
## La résiliation des assurances bancaires lors de la clôture

Lorsqu'un client a souscrit des assurances via sa banque (assurance habitation, prévoyance, assurance emprunteur), ces contrats d'assurance ne sont pas automatiquement résiliés lors de la clôture du compte. Ils constituent des contrats distincts, liants indépendamment du compte courant. La résiliation de chaque assurance doit être demandée séparément, selon les procédures spécifiques à chaque contrat.

La loi Hamon (2014) puis la loi Lemoine (2022) ont facilité la résiliation des assurances en France. L'assurance habitation et l'assurance auto peuvent être résiliées à tout moment après la première année de souscription, sans frais ni justification. L'assurance emprunteur (liée à un crédit immobilier) peut maintenant être changée à tout moment depuis la loi Lemoine, ce qui permet de trouver une assurance équivalente moins chère auprès d'un assureur tiers lors du changement de banque.

## La gestion des cartes de fidélité liées au compte

Certaines cartes de fidélité (comme des cartes de paiement dans des enseignes commerciales) sont liées au compte bancaire pour le prélèvement mensuel ou les crédits de points. Lors de la clôture du compte, il faut vérifier si ces cartes de fidélité continuent de fonctionner ou si elles nécessitent une mise à jour des coordonnées bancaires de débit. Un débit mensuel d'abonnement de carte de fidélité présenté sur un compte clôturé sera rejeté et peut entraîner la suspension des avantages de la carte.

## Les recours si la banque facture des frais indus lors de la clôture

Si la banque facture des frais de clôture non prévus dans les conditions générales, ou si des frais sont débités après la date de clôture officielle, le client dispose de recours. La première étape est de contester formellement ces frais auprès du service client de la banque, puis du service réclamations, en citant les conditions générales applicables. Si la banque maintient sa facturation malgré la contestation, le médiateur bancaire peut être saisi. Le médiateur examine si les frais sont conformes au contrat et rend un avis contraignant pour la banque s'il est accepté.

Les frais de clôture indus, particulièrement si ils empêchent le client de clôturer son compte (solde négatif créé par des frais injustifiés), constituent un abus caractérisé qui peut faire l'objet d'une plainte auprès de l'ACPR (Autorité de Contrôle Prudentiel et de Résolution), le régulateur bancaire français.
`;

const EXT1_L6 = `
## Le cas des comptes bloqués par mesure conservatoire

Des comptes bancaires peuvent être bloqués par des mesures conservatoires ordonnées par la justice — une saisie-attribution sur le compte suite à une dette impayée, par exemple. Dans ce cas, la clôture du compte n'est pas possible tant que la mesure conservatoire est en vigueur. La résolution de la situation passe par le paiement de la dette ou la contestation de la saisie devant le juge compétent. La banque ne peut ni ne doit lever elle-même ce type de blocage sans ordonnance judiciaire.

Pour les étudiants qui se retrouveraient dans cette situation (unlikely mais pas impossible si des loyers ou des crédits ont été impayés), l'assistance d'un avocat ou d'une association d'aide juridictionnelle est précieuse. Des organismes comme les services juridiques des universités ou les permanences juridiques des mairies peuvent offrir une première orientation gratuite.

## La clôture des comptes d'épargne réglementés lors d'un changement de banque

La clôture d'un Livret A ou d'un LDDS entraîne la perte des données d'ancienneté de ce produit. Ces livrets réglementés ne peuvent pas être transférés d'un établissement à l'autre comme certains produits d'épargne. La seule façon de conserver son Livret A et son LDDS lors d'un changement de banque est de les fermer à l'ancienne banque et d'en réouvrir à la nouvelle banque. L'impact pratique est minime — les conditions (taux, plafond) sont identiques dans toutes les banques pour ces produits réglementés.

Une exception notable : le Plan Épargne Logement (PEL). La clôture d'un PEL est définitive et fait perdre les droits à prêt acquis ainsi que les intérêts en cours de période de blocage. Avant de clôturer un PEL lors d'un changement de banque, il faut vérifier si des droits à prêt ont été constitués et s'ils sont applicables à un projet immobilier en cours ou planifié. Pour certains PEL anciens avec des taux d'intérêt garantis élevés, la clôture peut représenter une perte financière significative.

## Synthèse : les 10 étapes clés d'une clôture réussie

Pour synthétiser la procédure optimale de clôture d'un compte bancaire en France, voici les étapes à suivre dans l'ordre : premièrement, ouvrir le nouveau compte si un changement de banque est prévu ; deuxièmement, analyser les 12 derniers mois de relevés pour lister toutes les domiciliations ; troisièmement, initier le service de mobilité Agir si applicable ; quatrièmement, notifier manuellement les organismes non couverts par Agir ; cinquièmement, télécharger et archiver tous les relevés nécessaires ; sixièmement, résoudre le solde négatif éventuel ; septièmement, envoyer la lettre de clôture en recommandé avec AR ; huitièmement, conserver les deux comptes en parallèle pendant 2 à 3 mois ; neuvièmement, vérifier que tous les prélèvements ont bien migré ; dixièmement, confirmer la clôture et archiver la confirmation écrite. Cette séquence, appliquée méthodiquement, garantit une clôture sans incident et sans risque financier.
`;

await appendAndPatch('993f2c6f-3af0-472b-b7eb-e828b1aa09e9', EXT1_L1);
await appendAndPatch('2c258539-3073-41f6-b0b7-d30fc935fff8', EXT1_L2);
await appendAndPatch('bae3513f-1fe0-40ef-a639-9e54c053bf60', EXT1_L3);
await appendAndPatch('e9fa9b23-5d88-4067-a94f-7f988db9839f', EXT1_L4);
await appendAndPatch('9bf50448-7156-4821-872c-66d32e62a84f', EXT1_L5);
await appendAndPatch('2b027cc3-557e-4ef3-914b-2356ad93c539', EXT1_L6);
