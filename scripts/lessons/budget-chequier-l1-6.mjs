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

// === GÉRER SON BUDGET ÉTUDIANT ===
const BUDGET_L1 = `# Établir son premier budget étudiant

La gestion d'un budget personnel est une compétence fondamentale de l'autonomie financière. Pour un étudiant qui quitte le foyer familial ou prend en main ses finances pour la première fois, construire un budget réaliste est la première étape vers une vie financière sereine.

## Comprendre le principe du budget

Un budget est un tableau de bord financier qui met en regard les revenus (entrées d'argent) et les dépenses (sorties d'argent) sur une période donnée, généralement un mois. L'objectif d'un budget est simple : s'assurer que les dépenses ne dépassent pas les revenus, et idéalement qu'il reste un surplus pour l'épargne ou les imprévus.

La première étape pour établir un budget est de connaître précisément ses revenus mensuels. Pour un étudiant, les revenus peuvent inclure la bourse CROUS, les aides des parents (si régulières), les allocations logement (APL), les revenus d'un job étudiant, et éventuellement d'autres sources. Établir un total mensuel réaliste de ces revenus est le point de départ de tout budget.

## Les postes de dépenses d'un étudiant type

Les dépenses d'un étudiant se répartissent en plusieurs catégories. Le logement est généralement le poste le plus important (loyer, charges, assurance habitation). La nourriture (courses alimentaires, restaurants, cantines scolaires) est le second poste le plus significatif. Les transports (abonnement mensuel, carburant si voiture, vélo) constituent un troisième poste important. Les études (livres, fournitures, frais pédagogiques) sont souvent sous-estimés lors de la construction du budget initial.

## La distinction besoins et envies

Une distinction fondamentale dans la gestion d'un budget est celle entre les besoins (dépenses nécessaires à la vie quotidienne) et les envies (dépenses de plaisir et de confort). Le loyer, la nourriture de base, les transports pour aller en cours sont des besoins. Les sorties, les vêtements non essentiels, les loisirs payants sont des envies. Cette distinction n'implique pas de supprimer toutes les envies — les plaisirs ont leur place dans un budget équilibré — mais de les quantifier consciemment pour s'assurer qu'elles s'inscrivent dans les limites des revenus disponibles.

## Les outils pour suivre son budget

Plusieurs outils facilitent le suivi du budget. Une feuille de calcul simple (Excel, Google Sheets) peut suffire pour enregistrer revenus et dépenses. Des applications mobiles dédiées (Lydia, Budget Ease, YNAB) offrent des fonctionnalités de suivi automatique des dépenses par synchronisation avec le compte bancaire. La méthode des enveloppes physiques ou virtuelles reserve une somme fixe à chaque catégorie de dépenses et discipline visuellement la gestion du budget.
`;

const BUDGET_L2 = `# Les revenus et aides financières pour les étudiants

Les étudiants en France bénéficient d'un système d'aides financières substantiel qui, bien utilisé, permet à beaucoup de financer leurs études sans s'endetter excessivement.

## Les bourses CROUS sur critères sociaux

Les bourses du CROUS sont les principales aides financières accordées aux étudiants. Elles sont attribuées sur la base de critères sociaux (revenus des parents selon leur déclaration fiscale) et académiques (progression dans les études). Le montant annuel varie selon l'échelon (de 0 à 7) et peut aller de quelques centaines d'euros à plus de 5 000 euros par an pour les échelons les plus élevés.

Pour bénéficier d'une bourse CROUS, la demande doit être effectuée chaque année via le Dossier Social Étudiant (DSE) sur the portail messervices.etudiant.gouv.fr. La date limite de dépôt est generally mi-mai pour l'année universitaire suivante. Les démarches de renouvellement ne sont pas automatiques — l'oubli du renouvellement est une erreur fréquente qui prive certains étudiants de leurs bourses.

## Les allocations logement de la CAF

Les APL (Aides Personnalisées au Logement), les ALS (Allocation de Logement à caractère Social) et les ALF (Allocation de Logement à caractère Familial) sont versées par la CAF et permettent de réduire significativement le coût du logement. Le montant dépend du loyer, de la localisation du logement, de la composition du foyer, et des revenus.

Pour les étudiants qui louent un logement entrant dans une de ces catégories, la demande d'aide au logement se fait directement sur le site de la CAF. Elle peut représenter plusieurs centaines d'euros par mois dans des grandes villes où les loyers sont élevés.

## Les jobs étudiants : avantages et limites

Travailler pendant les études est une source de revenus complémentaires qui permet aussi d'acquérir une expérience professionnelle valorisable. Cependant, une activité salariale trop importante peut nuire aux études — les études montrent qu'un travail dépassant 16 à 20 heures par semaine affecte négativement les résultats académiques.

Les étudiants qui cherchent un job doivent évaluer soigneusement l'impact sur leur parcours académique. Certains types de travail sont plus compatibles avec les études que d'autres : le tutorat, les jobs administratifs en télétravail, ou le travail sur les week-ends et vacances scolaires permettent de cumuler revenus et études sans trop de conflits d'agenda.

## Les aides familiales et leur déclaration

Pour les étudiants qui reçoivent une aide mensuelle de leurs parents, cette aide est souvent informelle (virement mensuel "argent de poche") mais peut aussi être formalisée comme une pension alimentaire, qui est déductible des revenus des parents dans certaines conditions fiscales. Cette distinction a des implications sur les droits aux aides sociales : un étudiant qui déclare ses ressources à la CAF inclut-il les aides familiales informelles dans ses revenus ?
`;

const BUDGET_L3 = `# Gérer ses dépenses et éviter les pièges financiers

La gestion active des dépenses implique une surveillance régulière des sorties d'argent et la mise en place de stratégies pour éviter les erreurs fréquentes qui peuvent déséquilibrer le budget étudiant.

## Le suivi hebdomadaire des dépenses

Une des pratiques les plus efficaces pour rester dans son budget est le suivi hebdomadaire des dépenses. Consacrer 15 minutes chaque semaine à consulter les mouvements sur son compte bancaire, les catégoriser, et comparer avec le budget prévu permet de détecter les dépassements rapidement et d'ajuster les dépenses des semaines suivantes avant que le mois ne se termine dans le rouge.

Cette discipline hebdomadaire est moins contraignante qu'une surveillance quotidienne et plus efficace qu'une revue mensuelle tardive qui intervient souvent trop tard pour corriger les excès. Les applications mobiles bancaires avec leurs notifications en temps réel facilitent ce suivi continu.

## Les pièges des abonnements non utilisés

Les abonnements numériques sont un piège fréquent dans les budgets des jeunes adultes. Streaming vidéo, streaming musical, abonnements aux jeux vidéo, applications premium, newsletters payantes — les petits montants mensuels s'accumulent discrètement et peuvent représenter plusieurs dizaines d'euros par mois non planifiés.

Un audit semestriel de tous les abonnements actifs, pour vérifier lesquels sont réellement utilisés et lesquels peuvent être résiliés, est une bonne pratique d'hygiène budgétaire. Pour les abonnements détenus en commun avec des amis (partage de compte de streaming dans les règles de l'abonnement), vérifier que les contributions de chacun sont bien collectées régulièrement évite de financer seul des services partagés.

## La gestion des dépenses alimentaires

L'alimentation est souvent un poste de budget où des économies significatives sont réalisables sans sacrifier la qualité nutritionnelle. La planification des repas de la semaine avant de faire les courses, l'établissement d'une liste et son strict respect, la préférence pour les marques distributeurs sur les références non essentielles, et l'utilisation des applications anti-gaspi (Too Good To Go, yaS!) permettent de réduire sensiblement le budget alimentaire.

La cuisine maison, même basique, est systématiquement moins chère que les repas pris à l'extérieur ou les plats préparés. Pour les étudiants qui n'ont pas l'habitude de cuisiner, apprendre quelques recettes simples et économiques est un investissement en compétences qui bénéficiera toute la vie.

## Les achats réfléchis et la différence entre impulsion et planification

Les achats impulsifs — décidés sur le moment, non planifiés, sous l'influence d'une promotion ou d'une envie passagère — sont souvent les moins utiles et les plus dommageables pour un budget. La règle du délai de réflexion (attendre 24 ou 48 heures avant tout achat non alimentaire non planifié) permet de distinguer les envies passagères des besoins réels et réduit significativement les dépenses impulsives.
`;

const BUDGET_L4 = `# Épargner et prévoir les imprévus avec un budget étudiant

Même avec des revenus modestes, épargner régulièrement est possible et précieux. La constitution d'une épargne de sécurité est une priorité financière, même pour les étudiants.

## L'importance d'un fonds d'urgence

Un fonds d'urgence est une réserve d'argent facilement accessible destinée à faire face aux dépenses imprévues sans avoir à s'endetter ou à perturber son budget mensuel. Une panne d'ordinateur, une dépense médicale non couverte, ou une avance sur loyer inattendue sont des exemples typiques de dépenses d'urgence.

Pour un étudiant, un fonds d'urgence de l'équivalent d'un à deux mois de dépenses (loyer inclus) représente une cible réaliste. Constituer ce fonds progressivement, en mettant de côté même quelques dizaines d'euros par mois, est plus important que d'attendre d'avoir une grosse somme disponible d'un coup.

Ce fonds d'urgence doit être placé sur un compte accessible immédiatement (livret A, livret bancaire ordinaire) et non sur un placement à terme ou difficile à liquider rapidement. La liquidité est plus importante que le rendement pour ce type d'épargne.

## La méthode pay yourself first (se payer en premier)

La méthode "pay yourself first" consiste à effectuer le virement d'épargne en début de mois, avant même de payer les dépenses variables, de sorte que l'épargne soit traitée comme une charge obligatoire et non comme un reliquat s'il en reste à la fin du mois. Cette méthode est psychologiquement efficace car elle inverse la logique habituelle : au lieu d'épargner ce qui reste, elle assure que l'épargne est effectuée en priorité.

Pour un étudiant, le montant mensuel à mettre de côté peut être modeste — 20, 30 ou 50 euros par mois — mais l'accumulation sur plusieurs mois ou années crée un matelas financier non négligeable.

## La planification des dépenses prévisibles importantes

Certaines dépenses importantes sont prévisibles à long terme : achat de matériel informatique en début d'année universitaire, voyage de vacances, renouvellement de permis de conduire, formation ou certification complémentaire. Planifier ces dépenses à l'avance et épargner progressivement pour les financer permet d'éviter de constituer une dette ou de déséquilibrer fortement le budget lors de leur occurrence.

Cette épargne de projet peut être maintenue dans un compte séparé du compte courant et du fonds d'urgence pour éviter la confusion entre les différents objectifs d'épargne. Cette séparation physique des fonds renforce la discipline et la clarté sur l'état réel de chaque objectif.

## La gestion budgétaire lors des périodes de revenus irréguliers

Les revenus d'un étudiant sont souvent irréguliers : jobs saisonniers concentrés sur les vacances, bourse versée en début de semestre, aides familiales qui varient selon les mois. Cette irrégularité des revenus rend la gestion budgétaire plus complexe mais aussi plus importante.

La solution est de budgéter sur la base des revenus minimaux garantis (bourse, APL) et de traiter les revenus variables (jobs ponctuels) comme des suppléments affectés à l'épargne ou aux dépenses exceptionnelles. Cette approche conservatrice évite de planifier des dépenses sur la base de revenus aléatoires qui pourraient ne pas se matérialiser comme prévu.
`;

const BUDGET_L5 = `# Les stratégies d'économies pour les étudiants

Les économies ne se font pas uniquement sur les grosses dépenses — des ajustements sur de nombreux petits postes peuvent représenter des économies cumulées significatives sur un budget annuel étudiant.

## Les tarifs étudiants et les réductions

Le statut d'étudiant ouvre droit à de nombreuses réductions tarifaires qui, bien utilisées, peuvent alléger considérablement le budget. Les transports (SNCF réduit, abonnements de transport en commun étudiants), les loisirs et la culture (musées et monuments gratuits ou réduits, cinémas avec tarif étudiant, salle de sport universitaire), les logiciels et applications (Microsoft Office à prix réduit, abonnements streaming étudiants), et les services professionnels (banque en ligne sans frais pour étudiants) bénéficient tous de tarifs réduits qu'il serait dommage de ne pas exploiter.

Connaître et utiliser systématiquement les avantages liés à sa carte étudiante ou à son inscription universitaire est une pratique à moindre effort avec un impact budgétaire direct. Les Nuit taire étudiantes, les événements gratuits organisés par l'université, et les services de l'administration universitaire (service médical, aide psychologique, aide sociale) sont autant de ressources à mobiliser.

## L'achat d'occasion et la mutualisation

L'achat de manuels scolaires, de matériel informatique, ou de mobilier d'occasion est une pratique qui peut générer des économies substantielles. Les marchés étudiants de revente de livres, les groupes Facebook de l'université, et les plateformes de revente (LeBonCoin, Vinted, Back Market pour l'électronique reconditionné) sont des sources d'achats moins onéreux que le neuf.

La mutualisation de certaines dépenses avec des colocataires ou des amis est également une stratégie d'économies pertinente : abonnements partagés (dans les limites autorisées), achat en commun de denrées alimentaires en grande quantité, covoiturage régulier, ou partage d'outils et d'équipements occasionnels.

## Les aides d'urgence du CROUS et des universités

Pour les étudiants qui se trouvent dans une situation financière difficile de façon ponctuelle (accident de vie, problème familial, situation administrative compliquée), des aides d'urgence existent. Le CROUS propose des aides d'urgence (aides annuelles ou mensuelles selon la situation) pour les étudiants en difficulté financière soudaine. Les universités ont souvent leurs propres fonds d'aide aux étudiants, gérés par les assistantes sociales.

Ces aides sont méconnues mais accessibles en prenant contact avec le service social du CROUS ou de l'université concernée. Elles ne nécessitent pas forcément une situation de grande précarité — une difficulté financière temporaire documentée peut suffire pour accéder à une aide ponctuelle.

## La gestion des remboursements entre amis

Les remboursements entre amis (restaurants, sorties, vacances partagées) sont une source de tension sociale et de déséquilibre budgétaire si mal gérés. Des applications dédiées (Tricount, Splitwise, Lydia entre amis) facilitent la gestion de ces remboursements en gardant un compte de qui doit quoi à qui et en générant des suggestions de remboursements optimisées pour minimiser le nombre de transactions.

Utiliser ces outils dès le début d'une colocation ou d'un groupe d'amis qui partagent des dépenses établit une transparence financière et prévient les malentendus. La rigueur dans les remboursements réciproques est un signe de respect financier entre amis et cohabitants.
`;

const BUDGET_L6 = `# Financer ses études sans s'endetter excessivement

Le financement des études supérieures représente souvent un défi financier significatif. Comprendre les options de financement disponibles et leurs implications permet de faire des choix éclairés.

## Les prêts étudiants : avantages et risques

Le prêt étudiant garanti par l'État permet à tout étudiant de moins de 28 ans inscrit dans un établissement d'enseignement supérieur d'emprunter jusqu'à 20 000 euros, sans justificatif de revenus et sans caution parentale. Le remboursement du capital commence seulement 2 à 10 ans après la fin des études (selon le choix de l'emprunteur), ce qui allège la pression financière pendant les études.

Si le prêt étudiant est un outil utile pour financer ses études sans dépendre exclusivement des aides familiales, c'est néanmoins une dette qui devra être remboursée. Avant de contracter un prêt étudiant, évaluer les alternatives (bourses, jobs, réduction des dépenses) et ne contracter que ce qui est vraiment nécessaire est une démarche prudente.

## Les bourses au mérite et les financements alternatifs

Au-delà des bourses CROUS sur critères sociaux, d'autres bourses existent pour les étudiants méritants. Les bourses sur critères d'excellence académique (certaines grandes écoles, fondations privées), les bourses sectorielles (fondations professionnelles qui financent des étudiants dans leur domaine), et les aides municipales ou régionales constituent des sources de financement complémentaires souvent méconnues.

La recherche active de ces financements alternatifs demande du temps et d'anticipation, mais peut représenter des milliers d'euros de finances non remboursables. Les services d'orientation de l'université et les sites spécialisés (bourse-etudiant.net, parcoursup) référencent de nombreuses bourses et aides disponibles selon le profil et la filière.

## L'alternance comme financement des études

Le contrat d'apprentissage et le contrat de professionnalisation permettent de financer sa formation tout en acquérant une expérience professionnelle rémunérée. Pour les filières où l'alternance est disponible (écoles de commerce, d'ingénieurs, certains masters universitaires), cette voie permet de couvrir une grande partie ou la totalité des frais de formation via la rémunération d'apprentissage, tout en construisant un réseau professionnel et en améliorant l'employabilité.

L'alternance n'est pas adaptée à toutes les filières ni à toutes les personnalités. Le rythme d'alternance (une semaine en cours, une semaine en entreprise, ou des périodes semestres) peut être exigeant et ne laisse pas toujours autant de temps pour les activités extracurriculaires ou la vie sociale que les études à temps plein. C'est un choix qui mérite une réflexion sur ses objectifs à long terme.

## La construction d'une relation saine à l'argent pendant les études

Les années d'études sont une période formatrice pour la relation à l'argent. Les habitudes de gestion budgétaire, les comportements face à l'endettement, et les réflexes d'épargne qui se développent à cette période tendent à persister dans la vie adulte. Investir dans le développement d'une relation saine à l'argent pendant les études — discipline budgétaire, épargne régulière, consommation réfléchie — est un investissement dans la qualité de vie financière de toute une vie professionnelle et personnelle.
`;

await patch('f83c5c57-740a-4672-9329-0e06ceb02c12', BUDGET_L1);
await patch('55ddca44-7c78-419f-ad01-911c8a3bfef3', BUDGET_L2);
await patch('ecf842b8-57a2-424e-b8af-f047e5d5ef3b', BUDGET_L3);
await patch('0c5eba87-795e-4d0e-8bbd-23d9f153c047', BUDGET_L4);
await patch('41f7319d-223b-4dcf-a4ae-4e3739a93d41', BUDGET_L5);
await patch('b53253d7-41be-444c-addd-dd0c7fba2141', BUDGET_L6);

// === LE CHÉQUIER ===
const CHEC_L1 = `# Le chéquier : utilisation et fonctionnement en France

Le chéquier (ou carnet de chèques) est un moyen de paiement traditionnel qui reste utilisé en France bien que son usage décline avec la généralisation des paiements électroniques. Comprendre son fonctionnement est utile pour l'utiliser correctement et éviter les incidents.

## Comment un chèque fonctionne

Un chèque est un ordre de paiement écrit donné par le titulaire d'un compte (le tireur) à sa banque (le tiré) de payer une somme déterminée à une personne ou une entreprise (le bénéficiaire). Contrairement au paiement par carte qui est immédiat, le règlement d'un chèque prend quelques jours — le temps que la banque du bénéficiaire présente le chèque à la banque du tireur pour encaissement.

Ce délai d'encaissement (généralement 1 à 3 jours ouvrés) peut donner une fausse impression de disponibilité de fonds. Un chèque émis ne doit pas être comptabilisé comme "pas encore sorti" — la somme doit être disponible sur le compte dès l'émission du chèque car il peut être présenté à l'encaissement à tout moment.

## Comment remplir un chèque correctement

Le remplissage d'un chèque doit être précis et sans ratures pour être valide. Les informations à indiquer sont : le montant en chiffres (dans la petite case prévue à cet effet), le montant en lettres (sur la ligne centrale du chèque), le nom du bénéficiaire (sur la ligne "à l'ordre de"), la date (généralement la date du jour), le lieu d'émission, et la signature du tireur. La cohérence entre le montant en chiffres et en lettres est obligatoire — en cas de discordance, c'est le montant en lettres qui prévaut légalement.

## La durée de validité d'un chèque

En France, un chèque a une durée de validité de 1 an et 8 jours à partir de la date d'émission. Au-delà de cette durée, la banque peut refuser de l'encaisser. Cette règle est importante à connaître pour les chèques qui sont émis mais dont l'encaissement est tardif (loyer prépayé, garantie ou caution).

## La sécurisation des chèques

Les chèques doivent être conservés en lieu sûr et traités comme des valeurs financières. En cas de perte ou de vol du chéquier, la banque doit être informée immédiatement pour procéder à une opposition sur les chèques concernés. Cette opposition empêche l'encaissement des chèques perdus ou volés et protège le titulaire contre leur utilisation frauduleuse.
`;

const CHEC_L2 = `# Les règles d'utilisation des chèques et les incidents

L'utilisation des chèques est encadrée par des règles légales précises. Les infractions à ces règles peuvent avoir des conséquences financières et juridiques sérieuses.

## L'interdiction bancaire après un chèque sans provision

Émettre un chèque alors que le compte ne dispose pas des fonds nécessaires est appelé "émettre un chèque sans provision". Cet incident bancaire génère un rejet du chèque par la banque, des frais de rejet, et une inscription au Fichier Central des Chèques (FCC) de la Banque de France. L'inscription au FCC entraîne une interdiction d'émettre des chèques jusqu'à régularisation de la situation (remboursement du chèque rejeté + frais).

Pour régulariser la situation, le titulaire doit payer le montant du chèque rejeté directement au bénéficiaire ou déposer la somme sur son compte pour permettre à la banque de représenter le chèque. Une fois la régularisation effectuée, la banque peut lever l'interdiction et restituer les capacités d'émission de chèques.

## Les chèques certifiés et de banque

Lorsqu'un créancier exige une garantie de paiement, il peut demander un chèque certifié ou un chèque de banque. Le chèque certifié est un chèque ordinaire sur lequel la banque certifie que les fonds sont réservés pendant 8 jours. Le chèque de banque est émis directement par la banque — c'est la banque elle-même qui tire le chèque sur ses propres fonds, garantissant ainsi le paiement au bénéficiaire.

Les chèques de banque sont souvent demandés pour les transactions importantes (achat d'un véhicule, caution de location, achats entre particuliers de valeur élevée). Leur obtention auprès de la banque est généralement payante.

## La gestion des talons de chéquier

Le talon (aussi appelé souche) de chèque est la partie du carnet qui reste en possession du tireur après l'émission d'un chèque. Il récapitule la date, le bénéficiaire, et le montant du chèque émis. Remplir soigneusement chaque talon lors de l'émission d'un chèque permet de maintenir un suivi précis des chèques en circulation et du solde théorique disponible sur le compte.

Ce suivi est particulièrement important pour éviter les incidents de solde insuffisant : si plusieurs chèques ont été émis et ne sont pas encore encaissés, le solde apparent du compte peut être supérieur au solde réel disponible après encaissement de tous les chèques en circulation.

## Les alternatives modernes aux chèques

Avec l'essor des paiements numériques, les chèques sont progressivement remplacés dans de nombreux usages. Les virements bancaires (notamment les virements instantanés qui arrivent en quelques secondes), les paiements par carte, et les applications de paiement entre particuliers (PayPal, Lydia, Virement SEPA direct) offrent des alternatives plus rapides, traçables, et sécurisées pour la plupart des situations où les chèques étaient traditionnellement utilisés.
`;

const CHEC_L3 = `# Les droits et obligations liés aux chèques

Le cadre juridique des chèques en France offre des protections aux bénéficiaires et impose des obligations aux émetteurs. Comprendre ce cadre est indispensable pour utiliser les chèques en pleine connaissance de ses droits.

## Le droit de provision et la responsabilité du tireur

Le droit de provision signifie que le tireur d'un chèque a l'obligation légale de s'assurer que son compte dispose des fonds suffisants pour couvrir le montant du chèque à la date d'émission ET au moment de la présentation à l'encaissement. L'obligation de provision est une règle légale dont la violation expose à des sanctions financières et juridiques.

Contrairement à une idée reçue, antidater un chèque (indiquer une date passée alors que les fonds ne sont pas disponibles à la date réelle d'émission) n'exonère pas le tireur de sa responsabilité — si le chèque est présenté et rejeté, les conséquences sont identiques.

## Le recours du bénéficiaire en cas de rejet

Lorsqu'un chèque est rejeté pour insuffisance de provision, le bénéficiaire dispose de recours légaux pour obtenir paiement. Il peut représenter le chèque à l'encaissement (dans le délai de validité de 1 an et 8 jours), envoyer une mise en demeure au tireur, ou saisir le tribunal pour obtenir un titre exécutoire permettant de procéder à une saisie sur les comptes ou les biens du tireur.

Pour les bénéficiaires d'un chèque rejeté, conserver tous les documents liés à l'incident (avis de rejet de la banque, correspondances avec le tireur) est essentiel pour documenter le recours.

## La prescription des chèques

La prescription d'un chèque impayé est de 6 mois à compter de la date de présentation non honorée pour les actions du bénéficiaire contre le tireur. Au-delà de ce délai, le bénéficiaire ne peut plus exercer les actions cambiaires spécifiques aux chèques mais peut encore poursuivre sur la base du droit commun (action en paiement dans le délai général de prescription).

## La opposition sur chèque : cas légaux et illégaux

L'opposition sur un chèque (ordre donné à la banque de ne pas payer un chèque déjà émis) n'est légalement autorisée que dans des cas précis : perte, vol ou utilisation frauduleuse du chèque, ou redressement/liquidation judiciaire du bénéficiaire. Faire opposition sur un chèque pour empêcher le paiement d'une dette légitime est illégal et constitue une infraction pénale passible de sanctions.
`;

const CHEC_L4 = `# Le chèque comme outil de gestion financière et ses usages actuels

Malgré la multiplication des alternatives de paiement numériques, le chèque conserve des usages spécifiques en France où il reste l'outil le plus pratique ou le plus adapté.

## Les usages courants du chèque en France

Les chèques restent couramment utilisés pour certains paiements spécifiques en France. Les loyers (certains propriétaires refusent toujours les virements et exigent des chèques), les paiements aux professionnels de santé non conventionnés, les donsaux associations et fondations (pour lesquels un reçu fiscal est émis sur la base du chèque reçu), et les achats entre particuliers pour des montants significatifs sont des cas où le chèque est encore fréquemment demandé.

Pour les étudiants, les usages les plus probables du chèquier sont le paiement du loyer à un propriétaire qui l'exige ainsi, ou le paiement de frais à certaines administrations ou associations qui n'acceptent pas les paiements par carte.

## L'obtention d'un chéquier

Tous les titulaires d'un compte courant ne reçoivent pas automatiquement un chéquier. La banque peut refuser ou conditionner la délivrance d'un chéquier à certains critères (antécédents de chèques sans provision, statut d'interdit bancaire). Pour les nouveaux clients, le chéquier est généralement délivré après quelques mois de fonctionnement satisfaisant du compte.

La demande d'un nouveau carnet de chèques se fait via l'application bancaire, l'espace client en ligne, ou en agence. Le délai de réception est de quelques jours à deux semaines. Il est conseillé de commander un nouveau carnet avant l'épuisement du précédent pour ne pas se retrouver sans chèques dans une situation qui en nécessite un.

## La conservation et la destruction des chèques

Les talons de chèques émis doivent être conservés pendant au moins 5 ans — la durée de prescription de certaines actions liées aux chèques. En cas de litige sur un paiement par chèque, le talon constitue la preuve de l'émission. Après l'expiration du délai de conservation, les chèques et talons doivent être détruits de façon sécurisée (déchiqueteuse) pour éviter leur utilisation frauduleuse.

Les feuilles de chèques vierges non utilisées dans un carnet expiré ou d'un compte clôturé doivent être restituées à la banque ou détruites — les conserver sans les utiliser crée un risque de vol ou d'utilisation non autorisée.

## Le chèque dans les relations locatives

Pour les étudiants qui louent un logement, le chèque peut être demandé pour le versement du dépôt de garantie, du premier loyer, et parfois des loyers mensuels. Certains propriétaires préfèrent les chèques pour leur facilité d'encaissement et la traçabilité du talon.

Si un bailleur demande un chèque de caution (chèque de garantie non encaissé mais conservé en cas d'impayé), cette pratique est légalement contestable — la loi française ne reconnaît pas le chèque de caution remis mais non encaissé comme une garantie valide dans toutes les circonstances. Les garanties légalement reconnues pour la location sont le dépôt de garantie (somme versée et encaissée), la garantie Visale (garantie de l'État), ou le cautionnement d'un tiers par acte écrit.
`;

const CHEC_L5 = `# La prévention des fraudes au chèque

Les fraudes au chèque sont une réalité que tout titulaire de chéquier doit connaître pour se prémunir.

## Les principales formes de fraude au chèque

La fraude au chèque prend plusieurs formes. La contrefaçon consiste à fabriquer un faux chèque imitant le chèque d'une victime. La falsification consiste à modifier un chèque authentique (montant, bénéficiaire, date). Le vol de chèquier permet à un fraudeur d'émettre des chèques au nom du titulaire légitime. La fraude aux chèques perdus implique l'utilisation de chèques trouvés ou récupérés dans les déchets.

Ces techniques de fraude ont des conséquences financières sérieuses pour les victimes qui peuvent perdre des sommes importantes avant de détecter l'anomalie sur leurs relevés de compte.

## Les bonnes pratiques de sécurité pour les chéquiers

La protection du chéquier est la première ligne de défense contre la fraude. Stocker le chéquier en lieu sûr (pas dans un sac accessible à des tiers, pas dans une voiture), ne jamais laisser de chèques pré-signés en blanc, et détruire les chèques périmés de façon sécurisée sont des pratiques de base qui réduisent significativement les risques.

Lors de l'émission d'un chèque, remplir toutes les lignes soigneusement (notamment en rayant les espaces vides qui pourraient être complétés frauduleusement) et utiliser un stylo indélébile à pointe fine rendent la falsification plus difficile.

## La détermination et le signalement d'une fraude

Si des chèques frauduleux apparaissent sur un relevé de compte, la banque doit être contactée immédiatement pour faire opposition et bloquer les chèques concernés. Une déclaration de vol ou de perte doit être effectuée auprès de la police ou de la gendarmerie pour documenter l'incident et permettre la mise en cause des fraudeurs si ceux-ci sont identifiés.

La banque est généralement tenue de rembourser les sommes prélevées frauduleusement si le client peut démontrer que les chèques ont été produits ou utilisés sans son consentement. Les délais de signalement sont importants — plus la détection est rapide, plus le remboursement est probable.

## La médiation en cas de chèque impayé

Si un chèque reçu est rejeté et que les tentatives de recouvrement directes ne sont pas concluantes, le médiateur du crédit ou les services de médiation bancaire peuvent intervenir pour faciliter la résolution du litige. Les associations de protection des consommateurs peuvent aussi accompagner les démarches de recouvrement en cas de chèque impayé significatif.
`;

const CHEC_L6 = `# L'avenir du chèque en France et son remplacement progressif

Le chèque papier est un outil en déclin en France, progressivement remplacé par des moyens de paiement numériques plus rapides et plus sécurisés. Comprendre cette transition et ses alternatives est utile pour les étudiants qui entrent dans la vie adulte.

## Le déclin progressif du chèque en France

La France est, de tous les pays européens, l'un des derniers à utiliser encore massivement les chèques. D'autres pays comme le Royaume-Uni ou l'Allemagne ont largement abandonné le chèque au profit des virements et des paiements électroniques. En France aussi, le volume de chèques émis diminue chaque année, sous l'effet de la généralisation des paiements sans contact, des virements instantanés, et des applications de paiement entre particuliers.

Malgré ce déclin, le chèque reste un moyen de paiement légalement reconnu que les commerçants et créanciers ne peuvent pas tous refuser en France. La transition vers un monde sans chèque prendra encore plusieurs années.

## Les alternatives au chèque pour chaque usage

Pour chacun des usages traditionnels du chèque, des alternatives numériques efficaces existent. Pour le paiement du loyer, le virement bancaire permanent est plus sûr et plus pratique que le chèque mensuel. Pour les dons aux associations, le paiement par carte sur le site de l'association est souvent possible et génère aussi un reçu fiscal. Pour les paiements entre particuliers, les applications de paiement instantané (Lydia, Virement SEPA sur mobile) permettent des paiements sécurisés en quelques secondes.

Pour les deposits et garanties, le service de caution Visale (qui se substitue au dépôt de garantie pour les logements étudiants) ou l'utilisation des garanties reconnues légalement permettent d'éviter les chèques de caution dont le statut juridique est ambigu.

## Les virements en temps réel : la révolution des paiements

Les virements SEPA instantanés, disponibles dans la plupart des banques françaises, permettent des transferts d'argent en quelques secondes entre comptes bancaires, 24h/24 et 7j/7. Ce service révolutionne les paiements entre particuliers et entre professionnels en offrant la certitude du paiement (comme pour les espèces ou les chèques de banque) avec la commodité du virement.

Pour les transactions importantes entre particuliers (achat de véhicule, paiement d'artisan), le virement instantané est souvent préférable au chèque de banque car il est immédiat et irréversible, offrant la même garantie de paiement sans les frais d'émission d'un chèque de banque.

## La compétence chèque comme patrimoine culturel financier

Même si le chèque est en déclin, comprendre son fonctionnement reste une connaissance utile pour un jeune adulte français. Des situations où un chèque sera demandé ou reçu risquent de se présenter encore pendant plusieurs années. La gestion d'un chéquier, la prévention des incidents, et les recours en cas de problème sont des connaissances qui font partie du patrimoine de compétences financières d'un adulte autonome dans la société française contemporaine.
`;

await patch('5c83d644-3207-48d1-823d-c5379d250265', CHEC_L1);
await patch('1a405cac-fdd1-4b67-b3f9-4ddd4d4f1e7e', CHEC_L2);
await patch('e15f97ec-3a77-488d-88b7-a2e21a558d0b', CHEC_L3);
await patch('abd40c09-ba46-43cb-b47f-d941752f263d', CHEC_L4);
await patch('8e0424ca-c5f3-40da-b020-235b12b9232a', CHEC_L5);
await patch('67ac1851-3169-4100-8fef-9fc67617c0e5', CHEC_L6);
