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

const EXT4_L1 = `
## La préparation psychologique au changement de banque

Au-delà des aspects pratiques et administratifs, le changement de banque peut susciter une résistance psychologique. La relation avec sa banque, même quand elle est insatisfaisante, crée une forme d'habitude et de confort dans la connaissance des procédures, de l'interface, et des interlocuteurs. Surmonter cette inertie requiert une décision consciente et une organisation rigoureuse. Pour les étudiants, la flexibilité et l'adaptabilité récurrentes dans leur vie (déménagements, changements d'universités, mobilité internationale) sont paradoxalement des atouts pour aborder le changement de banque avec moins d'appréhension que des personnes plus sédentaires.

La récompense du changement est souvent immédiate : une interface bancaire plus moderne, des frais réduits, des fonctionnalités inédites, et un sentiment de reprendre le contrôle de sa relation bancaire plutôt que de la subir passivement. Ces bénéfices tangibles, souvent ressentis dès les premières semaines dans la nouvelle banque, confirment que la démarche valait l'effort.

## Les indicateurs qui signalent qu'il est temps de changer de banque

Plusieurs indicateurs objectifs signalent qu'il est temps de considérer un changement de banque. Des frais annuels de carte et de tenue de compte qui dépassent les bénéfices réellement utilisés est le premier signal. Un service client systématiquement difficile à joindre ou sans réponse satisfaisante aux problèmes rencontrés est le deuxième. Une interface numérique obsolète qui ne propose pas les fonctionnalités disponibles ailleurs (paiement instantané, cartes virtuelles, gestion des plafonds en temps réel) est le troisième. Un manque de produits adaptés aux évolutions de la situation (pas de compte d'épargne avec de bons taux, conditions de crédit moins avantageuses que la concurrence) est le quatrième.

Si deux ou plus de ces indicateurs sont présents simultanément, une réflexion sérieuse sur le changement de banque est justifiée. Le comparatif prend quelques heures mais peut générer plusieurs centaines d'euros d'économies annuelles et une expérience bancaire significativement améliorée.

## La gestion des bénéficiaires de virements lors de la transition

L'historique des bénéficiaires de virements enregistrés dans l'ancienne banque — parents, propriétaire, amis, fournisseurs réguliers — doit être recréé dans la nouvelle banque. Cette liste, parfois longue pour des utilisateurs fréquents de virements, disparaît avec la clôture de l'ancien compte. Exporter ou photographier la liste des bénéficiaires enregistrés avant la clôture évite de devoir les re-saisir un par un depuis des sources diverses.

Certaines banques permettent d'exporter la liste des bénéficiaires en format structuré, mais cette fonctionnalité n'est pas universelle. La méthode la plus simple reste de faire une capture d'écran de tous les bénéficiaires enregistrés depuis l'application de l'ancienne banque, en s'assurant que tous les IBAN et noms sont lisibles, avant de procéder à la clôture.

## La procédure d'opposition en cas de vol de carte pendant la transition

Pendant la période de transition bancaire, où deux cartes de deux banques différentes sont en circulation, la gestion d'une opposition en cas de vol ou de perte est légèrement plus complexe. Il convient de savoir rapidement quelle carte a été volée pour appeler le bon service d'opposition. Conserver les numéros d'opposition des deux banques dans un endroit accessible à l'avance (pas uniquement dans le téléphone, qui pourrait lui aussi être volé) est une précaution utile pendant cette période.

Si les deux cartes sont volées simultanément (scénario du portefeuille entier volé), les deux oppositions doivent être effectuées en parallèle ou consécutivement immédiatement. Le numéro interbancaire d'opposition 0 892 705 705, disponible 24h/24, peut gérer les deux cartes consécutivement dans un seul appel en précisant les deux banques concernées.

## L'impact du changement de banque sur les prélèvements CAF et aides sociales

Les aides sociales — CAF, bourse CROUS, AAH, RSA — ont des procédures de mise à jour de IBAN plus ou moins rapides selon les organismes. La CAF est réputée pour des délais de mise à jour allant jusqu'à 6 semaines. La CPAM (pour les remboursements de santé) met à jour le RIB sur Ameli.fr généralement en 5 à 10 jours ouvrés. Le CROUS (pour les bourses) nécessite une mise à jour via l'espace étudiant, avec traitement qui varie selon les universités.

Pour chacun de ces organismes, la mise à jour doit être notifiée le plus tôt possible dans le processus de transition — idéalement dès l'ouverture du nouveau compte, et non au moment de la demande de clôture de l'ancien. Cette anticipation maximale de 6 à 8 semaines garantit que les versements suivants arrivent directement sur le nouveau compte sans nécessiter de période de chevauchement prolongée des deux comptes.
`;

const EXT4_L2 = `
## Quand est-il possible de clôturer un compte sans l'accord de la banque ?

La question peut sembler paradoxale mais elle se pose : est-il possible de "forcer" la clôture d'un compte si la banque tarde à traiter la demande ? En théorie non — la clôture doit être actée par la banque pour être effective. Mais la résistance de la banque à une demande de clôture légitime constitue un abus qui peut être sanctionné.

En pratique, la résolution passe par le médiateur bancaire dont l'intervention est généralement suffisante pour débloquer une situation. Dans le cas extrêmement rare où la banque ne coopère pas avec le médiateur, la voie judiciaire (injonction de faire) est la solution ultime. Cette situation est très exceptionnelle en France où les banques respectent généralement les recommandations du médiateur.

## La clôture d'un compte lié à un prêt étudiant

Les prêts étudiants contractés avec la banque — prêts à taux zéro de certaines banques, prêts étudiants conventionnés — ne sont pas automatiquement résiliés lors de la clôture du compte courant dans la même banque. Ces prêts sont des contrats distincts avec une durée et des conditions propres. Pour clôturer le compte courant tout en conservant le prêt, il faut mettre à jour le compte de remboursement du prêt avec les nouvelles coordonnées bancaires (nouveau IBAN).

La banque prêteuse peut-elle exiger que le remboursement continue sur un compte chez elle, même après la clôture du compte courant ? Certains contrats de prêt incluent une clause de domiciliation des remboursements sur un compte chez le prêteur. Dans ce cas, soit le compte courant ne peut pas être entièrement clôturé tant que le prêt est en cours, soit il faut ouvrir un compte "de passage" minimal chez le prêteur pour y domicilier uniquement les remboursements du prêt, en gérant le reste de ses finances dans la nouvelle banque.

## Les conséquences d'une clôture précipitée

Une clôture précipitée, effectuée sans respecter la checklist préparatoire et sans période de chevauchement suffisante, peut générer une série de complications en cascade. Des prélèvements rejetés entraînent des pénalités auprès des créanciers et des frais de rejet bancaires. Des virements de salaire retournés créent un délai dans la réception des revenus. Des remboursements d'aides sociales bloqués peuvent perturber le budget mensuel. Ces complications, bien qu'en général résolubles, requièrent du temps et de l'énergie à gérer dans un moment où le futur client de la nouvelle banque s'attendait à une transition sereine.

La prévention est infiniment moins coûteuse que la correction : une banque qui reçoit un prélèvement rejeté peut facturer des frais de rejet de 15 à 25 euros par incident. Un mois de chevauchement supplémentaire des deux comptes coûte au maximum quelques euros de frais de tenue sur l'ancien compte — un investissement largement rentabilisé par la prévention d'un seul incident.

## Les délais de clôture dans différents types d'établissements

Les délais de traitement de la clôture varient selon le type d'établissement. Les grandes banques traditionnelles (BNP Paribas, Société Générale, Crédit Agricole, LCL, Caisse d'Épargne) ont des processus standardisés et traitent généralement les demandes en 5 à 15 jours ouvrés. Les banques mutualistes et coopératives (Crédit Mutuel, Banque Populaire) ont des délais similaires. Les banques en ligne (Boursorama, Fortuneo, Hello bank!) sont généralement plus rapides, souvent en 2 à 7 jours ouvrés, grâce à leurs processus entièrement numériques. Les néobanques (N26, Revolut, Wise) ont des délais très variables selon les situations — leur rapidité d'ouverture n'est pas toujours reflétée dans la gestion des clôtures.
`;

const EXT4_L3 = `
## La migration des applications de gestion financière lors du changement de banque

Les applications de gestion budgétaire liées au compte courant (catégorisation automatique des transactions, alertes personnalisées, graphiques de suivi) sont aussi liées à un compte spécifique. Lors d'un changement de banque, la migration vers le nouveau compte dans ces applications est généralement simple — il suffit de connecter le nouvel IBAN via le protocole Open Banking. Cependant, l'historique des transactions de l'ancien compte ne sera plus visible dans l'application si cette fonctionnalité n'est pas spécifiquement supportée.

Pour conserver un historique continu de ses dépenses dans une application de gestion financière, la solution est de synchroniser les deux comptes simultanément pendant la période de chevauchement, puis de déconnecter l'ancien compte après sa clôture confirmée. Ce chevauchement dans l'application reflète la période de transition réelle et permet une comparaison des dépenses sur les deux mois adjacents avec une continuité de l'analyse.

## La mise à jour des informations auprès des organismes d'aide au logement

Pour les étudiants qui bénéficient d'APL ou d'aides complémentaires au logement versées par la CAF sur leur compte bancaire, la mise à jour du RIB est une démarche prioritaire lors d'un changement de banque. La procédure se fait via le compte CAF en ligne (caf.fr), dans la section "Mes paiements" où figure le RIB enregistré. La mise à jour est relativement simple mais un délai de 3 à 6 semaines est possible avant que le nouveau RIB soit pris en compte pour les versements.

Pendant ce délai, l'ancien compte doit rester ouvert et avec un solde positif (ou au moins nul) pour permettre la réception des versements encore envoyés sur l'ancien IBAN. Un versement de CAF retourné suite à un compte clôturé peut prendre 2 à 4 semaines supplémentaires pour être re-émis sur le nouvel IBAN — une période pendant laquelle l'étudiant est privé de ces aides pourtant précieuses pour son budget mensuel.

## L'organisation d'une réunion de "départ" avec son ancien conseiller

Pour les clients qui ont une relation de longue date avec un conseiller bancaire personnel dans une banque traditionnelle, demander un entretien de "départ" avant de soumettre la lettre de clôture peut être utile à plusieurs égards. Cet entretien est l'occasion d'expliquer les raisons du changement (frais, fonctionnalités manquantes, service insuffisant) — ce feedback peut motiver la banque à proposer des améliorations qui pourraient changer la décision. Si les améliorations proposées ne sont pas satisfaisantes, l'entretien permet de procéder à la clôture avec une relation respectueuse terminée proprement.

Cet entretien est aussi l'occasion de vérifier avec le conseiller qu'aucun produit résiduel ne sera oublié dans la transition : "Est-ce qu'il reste des produits attachés à mon compte courant dont nous n'avons pas encore parlé ?" Cette question simple peut révéler un livret ouvert depuis longtemps et oublié, ou une assurance souscrite et non résiliée, qui seraient devenus des comptes dormants sans cette conversation.

## Les bonnes pratiques pour les comptes bancaires d'étudiants Erasmus

Les étudiants Erasmus qui ouvrent un compte bancaire dans leur pays d'accueil pour la durée du séjour doivent aussi anticiper la clôture de ce compte au retour. La procédure de clôture d'un compte dans un pays de l'Union Européenne est généralement similaire à la procédure française — même si les délais et les canaux varient. Les banques des zones Erasmus populaires (Allemagne, Espagne, Italie, Pays-Bas) ont généralement des procédures bien documentées en anglais pour les étudiants internationaux.

Il est recommandé de clôturer le compte d'accueil avant de quitter le pays — la gestion à distance d'un compte étranger est plus complexe et peut engendrer des complications si des transactions se poursuivent après le départ. Quelques semaines avant le retour, contacter la banque d'accueil pour initier la procédure de clôture et demander le virement du solde vers le compte français est la démarche optimale.
`;

const EXT4_L4 = `
## La clôture de compte et les garanties locatives

Pour les étudiants qui ont fourni leur RIB dans le cadre d'une garantie locative (VISALE, garant personne physique, garantie bancaire), la clôture du compte lié à cette garantie doit être traitée avec précaution. La garantie VISALE est une garantie de l'État qui ne requiert pas de maintien d'un compte bancaire spécifique — elle est attachée à la personne du garant, non à son compte. En revanche, si une caution bancaire de votre banque a été fournie au propriétaire, la clôture du compte dans cette banque peut affecter cette garantie.

Il convient de lire attentivement le contrat de cautionnement bancaire pour comprendre si la garantie est liée à la fois au compte et à la banque ou uniquement à la banque en tant qu'institution. Dans le doute, une confirmation écrite de la banque que la garantie reste valide après la clôture du compte courant — ou les conditions de sa résiliation — est indispensable avant de procéder à la clôture.

## Le traitement fiscal des intérêts versés l'année de la clôture

L'année de clôture d'un compte, la banque fournira une attestation fiscale récapitulant tous les produits imposables générés par les comptes et produits associés pendant l'année. Cette attestation, généralement disponible en début d'année suivante dans l'espace en ligne ou envoyée par courrier, est indispensable pour la déclaration de revenus.

Même si le compte est clôturé en cours d'année, les intérêts versés sur les livrets non réglementés, les gains d'assurance-vie distribués, ou les dividendes de PEA perçus avant la clôture sont imposables au titre de l'année. La banque doit fournir cette documentation même pour les comptes clôturés en cours d'année — si elle ne l'envoie pas spontanément, il faut la demander explicitement avant de perdre tout contact.

## Les ressources pour les nouveaux arrivants en France qui doivent ouvrir puis potentiellement clôturer leur compte

Pour les personnes qui arrivent en France et doivent ouvrir un compte rapidement pour leurs démarches administratives (titre de séjour, inscription universitaire), puis qui envisagent un changement de banque une fois la situation stabilisée, la stratégie optimale est de commencer avec une banque facile d'accès (néobanque en ligne, La Banque Postale) puis de migrer vers une banque plus adaptée à ses besoins permanents une fois tous les justificatifs obtenus.

Ce parcours à deux étapes — banque de départ accessible puis banque d'installation durable — est un choix délibéré que beaucoup de nouveaux arrivants font intuitivement. Il n'y a aucun inconvénient légal ou financier majeur à ce parcours en deux temps, sous réserve de gérer proprement la transition avec la checklist décrite dans ces leçons.

## Les questions à poser à sa banque avant de signer un contrat d'ouverture

Une façon proactive d'anticiper la clôture future est de poser les bonnes questions à sa banque lors de l'ouverture du compte. Questions importantes : quels sont les frais de clôture du compte si je le ferme la première année ? Y a-t-il un délai d'engagement associé à cette offre ? La clôture peut-elle être initiée intégralement en ligne ou nécessite-t-elle un contact avec une agence physique ? Quel est le délai habituel de traitement des demandes de clôture ? Ces informations, obtenues avant la signature du contrat, évitent les surprises révélées seulement au moment de vouloir partir.

Cette approche preventive — envisager la sortie avant même l'entrée — est caractéristique d'un consommateur bancaire mature qui traite sa relation bancaire comme toute autre relation contractuelle : avec les yeux ouverts sur les conditions d'entrée et de sortie.
`;

const EXT4_L5 = `
## Les alternatives au découvert lors des fins de mois difficiles

Pour les étudiants dont les fins de mois sont régulièrement difficiles — un phénomène courant avec les revenus irréguliers des bourses et jobs étudiants — alternatives au découvert bancaire méritent d'être connues. Le Fonds d'Aide d'Urgence (FAU) géré par les CROUS octroie des aides ponctuelles pour les étudiants en situation de difficulté financière avérée. Les assistantes sociales des universités peuvent orienter vers des aides d'urgence ou des avances sur bourse en cas de retard.

Des solutions de micro-crédit social existent également, notamment via des associations agréées qui proposent des prêts de faible montant à des taux très inférieurs aux agios bancaires, remboursables sur des durées adaptées à la situation de l'emprunteur. Ces solutions permettent de passer une période difficile sans générer d'incidents bancaires qui pourraient laisser des traces dans les fichiers de la Banque de France.

## La comparaison des coûts de clôture entre banques

Bien que la clôture soit en principe gratuite, une comparaison des frais potentiels dans différentes banques est instructive. Les banques qui pratiquent des frais de résiliation dans certains cas (fin d'engagement anticipée) sont à identifier. Les banques qui envoient des chèques de banque plutôt que des virements pour le solde résiduel peuvent facturer ce service. Certaines banques facturent la deuxième demande de clôture si la première n'a pas pu aboutir en raison d'opérations en cours.

Ces frais, bien que potentiellement faibles à l'unité, peuvent s'accumuler si la clôture s't étire sur plusieurs semaines avec plusieurs contacts avec la banque. La transparence tarifaire — consulter la grille tarifaire complète de la banque disponible sur son site internet — permet d'identifier ces frais potentiels avant qu'ils se produisent.

## La gestion psychologique d'une relation bancaire qui s'est mal terminée

Quand la clôture d'un compte fait suite à un litige non résolu ou à une expérience très négative avec la banque, la gestion émotionnelle de la situation peut influencer la qualité de la procédure de clôture. La rancœur ou la précipitation peuvent conduire à des décisions hâtives — clôturer avant que tout soit prêt, omettre des étapes importantes, ou rater des remboursements auxquels on a droit.

La recommandation professionnelle est de traiter la clôture comme une démarche administrative froide et méthodique, indépendamment des émotions liées à la mauvaise expérience avec la banque. Les droits du client restent intacts que la relation se soit bien ou mal passée — et une clôture propre protège mieux ces droits qu'une clôture précipitée guidée par l'agacement.

## Les fintechs qui proposent des outils de bilan financier lors de la clôture

Quelques startups fintech proposent des services qui s'appuient sur les données bancaires (via Open Banking) pour générer un bilan financier lors d'un changement de banque. Ce bilan récapitule les habitudes de dépenses sur la période analysée, les économies potentielles identifiées sur certains abonnements, et les recommandations de produits bancaires adaptés au profil d'utilisation observé. Ces outils, bien que marketing dans leur positionnement, fournissent des informations objectivement utiles pour choisir la banque de destination la plus adaptée.

Utiliser un tel outil lors d'un changement de banque transforme la transition d'une démarche purement administrative en une opportunité d'optimisation financière. Le moment du changement de banque est idéal pour reconsidérer l'ensemble de sa situation financière et s'assurer que la nouvelle banque est vraiment la mieux adaptée à ses besoins spécifiques.
`;

const EXT4_L6 = `
## Le droit à l'oubli bancaire et la fin de la relation commerciale

Le droit à l'oubli bancaire (dans le cadre du RGPD) permet à un client de demander, sous certaines conditions, la suppression de ses données personnelles après la fin de la relation commerciale. Si les données n'ont plus de finalité légitime (obligation légale de conservation, nécessité contractuelle), elles doivent être effacées. La demande se fait auprès du responsable du traitement des données (généralement le DPO de la banque).

En pratique, les banques conservent une grande partie des données pour respecter leurs obligations légales (lutte contre le blanchiment, obligations fiscales). Mais les données purement commerciales — préférences marketing, données de profilage comportemental — peuvent faire l'objet d'une demande de suppression légitime. Exercer ce droit lors de la clôture du compte est une démarche simple qui contribue à réduire son empreinte numérique.

## La fin du cycle de vie d'un compte étudiant

Le compte étudiant a un cycle de vie naturel qui se termine avec la fin des études. Beaucoup de banques transforment automatiquement le compte étudiant en compte jeune actif à la fin des études, parfois sans que le titulaire en soit clairement informé. Cette transformation peut s'accompagner d'une modification des conditions tarifaires — la gratuité liée au statut étudiant disparaît et des frais commencent à être facturés.

Il est important de noter la date de fin de validité du statut étudiant auprès de sa banque et de vérifier les nouvelles conditions qui s'appliquent dès la fin des études. Si les nouvelles conditions ne sont pas satisfaisantes, le changement de banque peut être envisagé à ce moment-là — une fenêtre naturelle de réévaluation de la relation bancaire coïncidant avec une transition de vie. Ce moment de transition entre étudiant et jeune actif est aussi une opportunité d'établir une relation bancaire durable avec un établissement qui proposera les produits adaptés aux nouveaux besoins : prime gestion de patrimoine, crédit immobilier, assurances professionnelles.

## Conclusion : clôturer avec méthode pour mieux rebondir

La clôture d'un compte bancaire, bien que parfois perçue comme une démarche complexe et stressante, est en réalité un processus parfaitement gérable avec la bonne préparation. Les droits du consommateur bancaire en France sont solides, les recours sont accessibles, et la procédure est encadrée. Le temps investi dans une préparation méthodique — checklist complète, notification anticipée des organismes, période de chevauchement suffisante — est largement amplement compensé par la fluidité de la transition et l'absence d'incidents post-clôture.

La maîtrise de cette procédure est une compétence financière durable. Les étudiants et arrivants en France qui la développent dès leur premier compte bancaire seront mieux équipés pour gérer les nombreux changements qui jalonnent une vie personnelle et professionnelle active. La banque est un prestataire de services dont on peut changer sans honte ni regret — et le faire avec compétence est un signe de maturité financière qui bénéficiera aux titulaires tout au long de leur vie.
`;

await appendAndPatch('993f2c6f-3af0-472b-b7eb-e828b1aa09e9', EXT4_L1);
await appendAndPatch('2c258539-3073-41f6-b0b7-d30fc935fff8', EXT4_L2);
await appendAndPatch('bae3513f-1fe0-40ef-a639-9e54c053bf60', EXT4_L3);
await appendAndPatch('e9fa9b23-5d88-4067-a94f-7f988db9839f', EXT4_L4);
await appendAndPatch('9bf50448-7156-4821-872c-66d32e62a84f', EXT4_L5);
await appendAndPatch('2b027cc3-557e-4ef3-914b-2356ad93c539', EXT4_L6);
