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

// L1: 3568 → ~+600 words
const EXT6_L1 = `
## Le rôle du conseiller bancaire dans la procédure de clôture

Bien que la clôture de compte soit un droit que le client peut exercer de façon autonome et sans justification, le conseiller bancaire reste un interlocuteur utile pendant ce processus. Il peut clarifier les conditions spécifiques de la convention de compte, indiquer les délais pratiques de traitement dans l'établissement, et aider à résoudre d'éventuelles complications qui surviennent en cours de procédure.

Il est important de distinguer deux rôles différents que peut jouer le conseiller : celui d'informateur neutre sur les procédures, et celui de représentant commercial dont l'intérêt est de retenir le client. Lors d'un entretien de clôture, le conseiller peut proposer des offres de rétention — réduction des frais, amélioration des conditions, nouveaux produits. Ces propositions peuvent être de valeur réelle si elles répondent aux raisons qui motivaient la clôture, ou des concessions superficielles destinées à maintenir la relation commerciale. Evaluer objectivement ces propositions, en les comparant aux conditions offertes par la nouvelle banque choisie, permet de prendre une décision éclairée.

## L'archivage organisé des documents de clôture

La confirmation de clôture reçue de la banque est un document important à conserver soigneusement. Ce document officialise la date de clôture, confirme le montant du solde résiduel versé, et libère le titulaire de toute obligation financière future envers cet établissement. En cas de litige ultérieur — réclamation d'un créancier qui aurait présenté un prélèvement après la clôture, contestation d'un frais — cette confirmation est la pièce maîtresse.

Un système d'archivage des documents bancaires peut être aussi simple qu'un dossier numérique bien nommé (par exemple "BanqueNom-Clôture-AnnéeMois") contenant la lettre de clôture envoyée, l'accusé de réception du courrier recommandé, les derniers relevés mensuels, la confirmation officielle de clôture, et la preuve du virement du solde résiduel. Ce dossier peut être stocké dans un service de cloud sécurisé pour garantir son accessibilité même en cas de perte d'un appareil.

## Les implications pour la notation de crédit française

La France ne dispose pas d'un système de crédit scoring centralisé comparable au FICO américain ou au credit score britannique. Le principal fichier de notation négative est le FICP (Fichier des Incidents de Crédit aux Particuliers), alimenté par la Banque de France, qui recense les incidents de paiement sur les crédits (impayés, dossiers de surendettement). La clôture normale d'un compte courant, même suite à un mécontentement, n'affecte pas ce fichier.

Le FCC (Fichier Central des Chèques) recense les incidents de paiement par chèque (chèques sans provision) et les interdictions bancaires. Une clôture de compte avec des chèques en cours d'encaissement qui ne peuvent être honorés peut conduire à une inscription au FCC — raison supplémentaire de s'assurer que tous les chèques émis ont été encaissés avant de clôturer. Une inscription au FCC ou au FICP peut compliquer l'ouverture d'un nouveau compte et l'accès au crédit pendant la durée de l'inscription (5 ans maximum selon les cas).

## La communication proactive avec les nouveaux tiers

Après la clôture et la migration vers la nouvelle banque, une communication proactive avec les principaux tiers commerciaux facilite la transition. Même si le service Agir a notifié les créanciers de prélèvements, envoyer un email ou courrier direct au fournisseur principal (propriétaire, opérateur téléphonique, assureur) avec le nouveau RIB en pièce jointe réduit le risque d'un prélèvement rejeté sur l'ancien IBAN.

Cette double notification — automatique via Agir et manuelle pour les partenaires clés — est redondante mais efficace. Le coût de cette redondance (quelques emails) est minimal comparé au coût d'un prélèvement rejeté (frais de rejet, pénalités créancier, délai de régularisation). Pour les étudiants dont la situation financière est serrée, éviter ces frais imprévus est une priorité pratique.
`;

// L2: 3157 → ~+950 words
const EXT6_L2 = `
## La coordination entre l'ouverture et la clôture lors d'un changement de banque

La coordination temporelle entre l'ouverture du nouveau compte et la clôture de l'ancien est l'un des aspects les plus importants d'un changement de banque réussi. Un calendrier bien pensé évite les ruptures de service (impossibilité de payer pendant quelques jours) et les doubles frais (maintien de deux comptes actifs trop longtemps).

Le calendrier optimal commence par l'ouverture complète du nouveau compte et la réception de la carte bancaire associée — avant même d'initier la procédure de clôture. Dès que la nouvelle carte est active et que les premiers tests de paiement ont réussi, la migration des domiciliations peut commencer via Agir. La période de chevauchement — deux comptes actifs simultanément — dure idéalement 2 à 3 mois, pendant lesquels l'ancien compte reste actif pour capturer les dernières transactions qui arrivent encore sur l'ancien IBAN.

## Les erreurs courantes dans la notification des créanciers

Les erreurs dans la notification des créanciers lors d'un changement de banque sont parmi les principales sources de complications. Les plus fréquentes incluent : oublier de mettre à jour les paiements récurrents par carte enregistrés sur des sites de commerce en ligne (ces paiements ne sont pas des prélèvements SEPA et ne sont pas couverts par Agir), oublier les prélèvements très faibles (moins de 5 euros par mois) peu visibles sur les relevés, et ne pas notifier les créanciers qui ont deux RIBs enregistrés pour le même client.

Pour les étudiants qui utilisent des plateformes d'abonnement numérique (hébergement web, licences logicielles annuelles, stockage cloud), ces abonnements annuels dont le renouvellement n'est pas imminent peuvent être oubliés lors de la migration. Établir la liste NOT seulement des prélèvements récents mais aussi de tous les abonnements annuels en cherchant dans l'historique de 12 mois complet évite ces oublis coûteux.

## Le traitement des remboursements en attente lors de la clôture

Certains remboursements peuvent prendre plusieurs semaines ou mois : remboursements de notes de frais professionnels, remboursements de soins médicaux par la CPAM ou la mutuelle, cautions en attente de retour, remboursements de trop-perçus de factures d'énergie. Ces remboursements en attente sont directement adressés à l'IBAN enregistré chez l'émetteur.

Avant la clôture, identifier tous les remboursements en attente et mettre à jour l'IBAN enregistré auprès des émetteurs concernés évite que ces remboursements soient envoyés sur le compte clôturé. Une fois le compte clôturé, un virement vers un IBAN clôturé sera retourné à l'expéditeur. Bien que la somme soit récupérable, la procédure de récupération prend du temps et peut nécessiter des démarches administratives.

## La gestion des cartes cadeaux et avoirs liés au compte

Certains produits financiers sont directement liés au compte bancaire : les cartes cadeaux prépayées émises par la banque, les avoirs et cashbacks accumulés dans les programmes de fidélité bancaires, et les points de récompense non utilisés. Avant la clôture, vérifier le solde de ces éléments et les utiliser est une étape souvent oubliée.

Les cartes cadeaux prépayées émises par la banque peuvent perdre leur validité ou leur utilité après la clôture si elles sont liées au compte. Les programmes de cashback (remboursements sur achats) peuvent avoir des soldes accumulés non versés qui seront perdus si la clôture intervient avant le versement prévu. Une vérification minutieuse de l'espace client bancaire avant la clôture permet de récupérer ces valeurs.

## La transition des applications tierces connectées

De nombreux services numériques utilisés quotidiennement sont connectés au compte bancaire via Open Banking ou simplement via les données de carte enregistrées. Avant la clôture, déconnecter les applications tierces de l'ancien compte et les reconnecter au nouveau compte est une étape numérique importante.

Les applications de gestion de finances personnelles (Bankin, Budget Insight, Linxo), les wallets mobiles (Apple Pay, Google Pay, Samsung Pay), les plateformes de commerce en ligne avec carte enregistrée (Amazon, Paypal, boutiques en ligne), et les services d'abonnement numérique utilisent tous les données bancaires en leur possession. Un audit de ces connexions numériques, similaire à l'audit des prélèvements physiques, est indispensable pour une migration bancaire complète dans un contexte d'usage numérique intensif.
`;

// L3: 3270 → ~+850 words
const EXT6_L3 = `
## La gestion de la clôture à distance pour les étudiants mobiles

Les étudiants qui déménagent fréquemment — pour des stages, des semestres à l'étranger, ou des changements d'université — se retrouvent souvent dans une situation où le compte à clôturer est dans une ville ou un pays différent de leur lieu actuel. La procédure à distance est possible mais requiert une organisation spécifique.

Pour les clôtures à distance en France, la lettre recommandée avec accusé de réception envoyée par voie postale reste la méthode la plus fiable. Les coordonnées postales de la direction de la banque concernée (pas nécessairement l'agence locale mais le siège de gestion des comptes) doivent être vérifiées sur le site officiel. Pour les banques avec une forte présence numérique, le message sécurisé via l'espace client en ligne peut remplacer le courrier recommandé avec une traçabilité équivalente.

Pour un étudiant international qui clôture son compte français depuis l'étranger, la procédure peut nécessiter des copies de documents d'identité certifiées par l'ambassade française ou un notaire local. Contacter le service clients de la banque avant d'initier la procédure pour confirmer les exigences spécifiques à la clôture depuis l'étranger évite les allers-retours administratifs.

## Les implications de la clôture sur les garanties de loyer

Pour les étudiants qui ont fourni leur IBAN pour la mise en place d'une garantie de loyer (garantie Visale, cautionnement bancaire, ou garant particulier avec virement régulier), la clôture du compte doit être gérée en coordination avec ces garanties. Un IBAN de référence pour la garantie Visale qui devient invalide après clôture n'empêche pas la garantie de fonctionner, mais doit être mis à jour dans l'espace Visale pour les futures régularisations éventuelles.

Pour les cautionnements bancaires où la banque est elle-même garante, la clôture du compte peut interférer avec le mécanisme de garantie. Vérifier avec le propriétaire et la banque les implications exactes sur la garantie avant de clôturer est impératif pour ne pas se retrouver en situation de manquement contractuel envers le propriétaire.

## Les traces que laisse une clôture bien menée

Une clôture de compte bien documentée laisse des traces positives dans l'historique financier du client. La lettre de confirmation de clôture, les derniers relevés couvrant la période de transition, et les preuves de notifications aux créanciers constituent un dossier qui peut être utile plusieurs années après la clôture.

Ce dossier peut servir comme justificatif de domiciliation passée dans des procédures administratives, comme preuve d'antécédents bancaires positifs pour l'ouverture d'un compte dans un nouvel établissement, et comme protection en cas de réclamation tardive d'un tiers qui soutiendrait qu'un prélèvement aurait dû être traité sur l'ancien compte. La qualité de ce dossier de clôture est directement proportionnelle au soin apporté à la préparation de la procédure.

## Synthèse des bonnes pratiques de clôture

La clôture réussie d'un compte bancaire repose sur quatre piliers : la préparation (liste des domiciliations, solde des découverts, archivage des relevés), la communication (notification des créanciers, information des organismes émetteurs de virements, mise à jour des documents officiels), la temporisation (chevauchement de deux mois minimum entre les deux comptes, délai pour la confirmation officielle de clôture), et la documentation (conservation de tous les documents liés à la procédure pendant au moins 5 ans).

Ces quatre piliers s'articulent dans une séquence chronologique claire : préparation d'abord, communication ensuite, chevauchement pendant la transition, documentation à conserver. Les complications les plus fréquentes surgissent quand l'une de ces étapes est négligée ou mal exécutée. L'investissement de temps nécessaire pour une clôture bien préparée — quelques heures sur plusieurs semaines — est minime comparé aux complications qui peuvent résulter d'une clôture précipitée ou mal documentée.
`;

// L4: 3074 → ~+1050 words
const EXT6_L4 = `
## Le calendrier de notification lors d'un changement de banque

Établir un calendrier précis des notifications à effectuer lors d'un changement de banque est un outil de gestion pratique qui réduit le risque d'oubli. Ce calendrier peut être organisé en trois phases : phase préparatoire (avant l'envoi de la lettre de clôture), phase de transition (durant le chevauchement des deux comptes), et phase de finalisation (après la réception de la confirmation de clôture).

La phase préparatoire couvre l'identification de tous les prélèvements et virements sur l'ancien compte, l'ouverture et l'activation du nouveau compte, et l'initiation du service Agir. La phase de transition surveille la migration effective des domiciliations, notifie manuellement les créanciers qui n'ont pas été atteints par Agir, et vérifie les premiers mois de relevés du nouveau compte. La phase de finalisation demande la confirmation écrite de clôture, archive les documents, et met à jour les derniers documents officiels encore référencés avec l'ancien IBAN.

## La valeur de la mobilité bancaire pour les jeunes adultes

Le changement de banque est une faculté que peu de Français exercent, malgré les outils comme le service Agir qui le facilitent. Les enquêtes montrent que la majorité des adultes gardent leur banque principale pendant des décennies, souvent par inertie plutôt que par satisfaction. Cette inertie a un coût réel : des frais annuels plus élevés que la concurrence, des taux d'intérêt moins compétitifs sur les produits d'épargne, et un service qui n'évolue pas faute de signal marché.

Pour les jeunes adultes et particulièrement les étudiants, la capacité à exercer sa mobilité bancaire est une compétence à valeur croissante. Le marché bancaire français offre des offres très compétitives pour les étudiants et les jeunes actifs — offres que seuls ceux qui cherchent et qui n'hésitent pas à changer peuvent réellement capturer. Comprendre la procédure de clôture, comme celle présentée dans ce cours, est la condition préalable à cette liberté de choix.

## Les aspects psychologiques du changement de banque

Le changement de banque peut sembler intimidant, en particulier pour un premier changement. La complexité apparente de la procédure, la crainte de faire une erreur qui bloquerait des paiements importants, et l'incertitude sur les délais sont des freins psychologiques courants. La bonne nouvelle est que la procédure est standardisée et que les erreurs, quand elles surviennent, sont généralement corrigeables.

Reconnaître ces freins psychologiques et les aborder frontalement — en se documentant, en posant des questions au service clients de la nouvelle banque, et en suivant une checklist précise — transforme une procédure qui semblait complexe en une série d'étapes gérables. Une fois le premier changement de banque effectué avec succès, les changements suivants seront perçus comme beaucoup moins intimidants, grâce à la confiance acquise lors du premier.

## L'impact du numérique sur la relation bancaire de long terme

La relation bancaire a été profondément transformée par le numérique. Les banques en ligne et les néobanques ont imposé des standards de service numérique — disponibilité 24/7, notifications instantanées, interfaces intuitives — qui sont maintenant attendus des banques traditionnelles. Cette transformation numérique bénéficie aux clients mobiles car elle facilite la gestion bancaire à distance, réduit les coûts de friction des transactions quotidiennes, et améliore la transparence sur les frais et les mouvements.

Pour les jeunes adultes qui ont grandi avec le numérique, évaluer la qualité de l'expérience numérique d'une banque est aussi important que comparer les frais. Une banque avec une application mobile fonctionnelle, des notifications en temps réel, et une interface claire permet une gestion bancaire quotidienne beaucoup plus efficace qu'une banque aux frais légèrement inférieurs mais à l'interface frustrante. Cet aspect qualitatif du choix bancaire est souvent sous-estimé dans les comparatifs qui se concentrent uniquement sur les tarifs.

## Les recours européens en matière de services bancaires

Le cadre juridique bancaire français s'inscrit dans un cadre européen plus large. La directive européenne sur les services de paiement (PSD2) a renforcé les droits des consommateurs bancaires dans toute l'Union européenne : droit à l'accès aux services de paiement, obligations de transparence tarifaire, et encadrement des frais de clôture. Ces protections européennes s'appliquent à tout ressortissant opérant dans l'espace bancaire européen.

Pour les étudiants européens non-français qui ont un compte en France, ces protections communes facilitent la portabilité de leurs droits lors d'un retour dans leur pays d'origine. La compréhension du cadre commun européen est utile pour qui envisage une mobilité entre plusieurs pays de l'UE dans les prochaines années — une réalité croissante pour les jeunes adultes actifs dans l'espace européen.
`;

// L5: 3123 → ~+1000 words
const EXT6_L5 = `
## La planification de la clôture dans le contexte de l'alternance et des stages

Les étudiants en alternance ou en stage long ont une relation bancaire plus complexe que les étudiants à temps plein. Les salaires d'alternance, les indemnités de stage, les remboursements de frais professionnels, et les avantages en nature (titre-restaurant, participation) transitent par le compte bancaire et créent un tissu de domiciliations plus dense qui doit être démêlé soigneusement avant toute clôture.

Pour les alternants qui s'apprêtent à terminer leur contrat et à changer de situation (emploi permanent, reprise d'études à temps plein, départ à l'étranger), anticiper la clôture du compte dès la fin du contrat d'alternance évite une accumulation de domiciliations liées à l'employeur qui devront toutes être mises à jour. Informer le service RH de l'entreprise le plus tôt possible du changement de RIB est recommandé, car les délais de traitement des mises à jour de RIB dans les entreprises peuvent être significatifs.

## Les particularités fiscales des produits d'épargne liés au compte

La clôture d'un compte courant peut s'accompagner de la clôture ou du transfert de produits d'épargne associés. Chaque type de produit a des implications fiscales spécifiques que le titulaire doit anticiper. Les livrets réglementés (Livret A, LDDS, LEP) ne génèrent pas d'imposition lors de leur clôture — les intérêts accumulés sont exonérés d'impôt. Les comptes à terme et les livrets de banque ordinaires généreront un prélèvement forfaitaire unique (PFU) de 30% sur les intérêts lors de leur clôture si ces intérêts n'ont pas déjà été soumis à l'acompte lors de leur versement.

Pour les étudiants qui ont ouvert des produits d'épargne lors de l'ouverture de leur premier compte (parfois encouragés par le conseiller bancaire lors de l'ouverture), vérifier les conditions fiscales de chaque produit avant de prendre une décision de clôture ou de transfert est une étape prudente. L'administration fiscale publie des guides accessibles expliquant le régime fiscal de chaque type de produit d'épargne.

## L'accompagnement des associations et services d'aide pour les situations précaires

Les étudiants en situation financière précaire qui font face à des difficultés lors de la clôture d'un compte — découvert important, frais impayés, impossibilité d'ouvrir un autre compte — peuvent bénéficier de l'accompagnement de structures d'aide. Les Points Conseil Budget (PCB), disponibles dans de nombreuses villes françaises, offrent un accompagnement gratuit sur les questions de gestion bancaire et de difficultés financières. Les services sociaux des CROUS accompagnent également les étudiants dans les démarches administratives liées aux difficultés financières.

Ces ressources sont méconnues mais accessibles. Un étudiant qui se retrouve dans une spirale de frais bancaires croissants, avec un découvert qui augmente et une impossibilité de se sortir de la situation seul, a tout intérêt à contacter ces services plutôt que d'attendre que la situation empire. L'intervention précoce est toujours plus efficace que la gestion de crise.

## L'optimisation fiscale annuelle en lien avec la relation bancaire

La relation bancaire génère des opportunités d'optimisation fiscale annuelle qui dépassent le simple fait de déclarer les intérêts perçus. Les dons effectués via des fonctionnalités bancaires (arrondi solidaire, virements vers des associations déclarées), les micro-dons automatiques sur les paiements par carte, et les cotisations à des mutuelles prélevées directement sur le compte peuvent générer des déductions fiscales.

Avant de clôturer un compte, vérifier si des montants déductibles ont été prélevés au cours de l'année fiscale en cours est une étape de diligence. Ces montants doivent être inclus dans la déclaration de revenus de l'année en cours, même si le compte correspondant est clôturé au moment de la déclaration. Les justificatifs (attestations de dons, reçus de cotisations) doivent être archivés avec les relevés bancaires de l'année concernée.

## Vers une relation bancaire active et choisie

La maîtrise de la clôture d'un compte bancaire est l'envers de la maîtrise de l'ouverture : les deux compétences ensemble constituent une autonomie bancaire complète. Savoir choisir une banque, ouvrir un compte efficacement, gérer ses domiciliations, et clôturer proprement quand le moment est venu — ce cycle complet de la relation bancaire est le fondement d'une vie financière sereine et maîtrisée.

Pour les étudiants et jeunes adultes qui construisent leur autonomie financière, ces compétences bancaires ont une valeur qui s'étendra bien au-delà des années d'études. Les situations financières changent — emplois, logements, pays de résidence, situations familiales — et chaque changement appelle une adaptation de la relation bancaire. Ceux qui savent naviguer ce cycle avec compétence et sans appréhension ont un avantage significatif dans la gestion de leur vie quotidienne et de leur patrimoine à long terme.
`;

// L6: 3083 → ~+1050 words
const EXT6_L6 = `
## Les bases légales de la protection du consommateur bancaire en France

La relation bancaire en France est encadrée par un corpus législatif développé qui protège les consommateurs à chaque étape de la relation : ouverture, gestion, et clôture. Le Code monétaire et financier, la loi sur la protection du consommateur, et les ordonnances de transposition des directives européennes forment ce cadre. Les principales protections applicables lors de la clôture incluent le droit à la clôture sans frais indue, le droit à la transparence sur les conditions de clôture, et le droit à un recours effectif en cas de litige.

L'Autorité de Contrôle Prudentiel et de Résolution (ACPR), rattachée à la Banque de France, veille au respect de ces obligations par les établissements bancaires. Les signalements pour pratiques abusives lors d'une clôture peuvent être effectués auprès de l'ACPR via son portail dédié. Ces signalements contribuent à améliorer les pratiques du secteur même si l'ACPR ne traite pas les litiges individuels — ceux-ci relèvent du médiateur bancaire ou des juridictions.

## La diversification bancaire comme stratégie de gestion du risque

Maintenir des relations avec plusieurs établissements bancaires simultanément est une stratégie de gestion du risque que certains consommateurs avisés adoptent. Deux comptes dans deux banques différentes — un compte principal pour les opérations quotidiennes et un compte secondaire pour l'épargne ou les opérations spécifiques — offrent une protection contre les défaillances techniques d'un établissement, les fraudes qui bloquent un compte le temps de la résolution, et les décisions unilatérales de la banque qui pourraient affecter le compte principal.

Pour les étudiants, une carte prépayée ou un compte néobanque comme second compte est une option peu coûteuse qui offre cette protection. En cas de blocage inattendu du compte principal — perte de carte, fraude détectée, problème technique — le compte secondaire assure la continuité des paiements essentiels pendant la résolution. Cette diversification est particulièrement utile lors des périodes de clôture et de transition, où le risque de rupture de service est plus élevé.

## Les notifications légales obligatoires de la banque lors de la clôture

La banque a des obligations légales de notification vers le client lors de la clôture d'un compte. Elle doit informer le client de la date effective de clôture, du montant du solde résiduel versé, des frais prélevés lors de la clôture, et de la procédure pour les documents archivés. Ces notifications doivent être effectuées par écrit dans un format durable (email ou courrier).

Si ces notifications ne sont pas reçues dans un délai raisonnable après l'envoi de la demande de clôture, relancer la banque par écrit en demandant une confirmation de l'état de traitement de la demande est la démarche appropriée. La banque qui tarde à confirmer une clôture ou qui ne fournit pas les informations requises peut faire l'objet d'une réclamation formelle ou d'une saisine du médiateur bancaire.

## Le rôle de la transparence dans la relation bancaire

La confiance entre un client et sa banque repose sur la transparence réciproque. Le client qui est transparent sur sa situation financière, ses projets, et ses intentions obtient généralement un meilleur service de sa banque. La banque transparente sur ses frais, ses procédures, et ses délais permet au client de prendre des décisions éclairées.

Cette transparence est particulièrement importante lors de la clôture. Un client qui informe sa banque de son intention de clôturer dans les prochains mois, de ses raisons, et de ses attentes sur le processus crée les conditions d'une clôture coopérative. À l'inverse, une clôture surprise, sans communication préalable, peut conduire à des délais plus longs et moins de coopération de la part de l'établissement.

## Synthèse : la clôture comme exercice de compétence financière

Maîtriser la procédure complète de clôture d'un compte bancaire — des conditions préalables aux recours disponibles en passant par les étapes pratiques, les implications financières, et les situations particulières — est un exercice de compétence financière à part entière. Cette compétence se construit progressivement, en commençant par comprendre les concepts, puis en appliquant les bonnes pratiques lors des premières expériences, et enfin en les perfectionnant avec le recul de l'expérience.

Pour les étudiants et jeunes adultes qui se trouvent au début de leur vie financière autonome, investir dans le développement de ces compétences bancaires est un choix rentable à long terme. Les économies réalisées en évitant les frais inutiles, en négociant de meilleures conditions, et en changeant de banque quand c'est dans son intérêt peuvent représenter des centaines ou des milliers d'euros sur une vie entière. La clôture bien gérée est l'une des briques de cet édifice de compétence financière personnelle dont la valeur croît avec les années et les expériences.
`;

await appendAndPatch('993f2c6f-3af0-472b-b7eb-e828b1aa09e9', EXT6_L1);
await appendAndPatch('2c258539-3073-41f6-b0b7-d30fc935fff8', EXT6_L2);
await appendAndPatch('bae3513f-1fe0-40ef-a639-9e54c053bf60', EXT6_L3);
await appendAndPatch('e9fa9b23-5d88-4067-a94f-7f988db9839f', EXT6_L4);
await appendAndPatch('9bf50448-7156-4821-872c-66d32e62a84f', EXT6_L5);
await appendAndPatch('2b027cc3-557e-4ef3-914b-2356ad93c539', EXT6_L6);
