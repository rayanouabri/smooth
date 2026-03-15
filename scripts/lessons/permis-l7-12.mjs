const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function patch(id, content) {
  const r = await fetch(`${BASE}/rest/v1/lessons?id=eq.${id}`, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  const w = content.split(/\s+/).filter(Boolean).length;
  console.log(r.ok ? '✅' : '❌ '+r.status, id.slice(0,8), w+' mots');
}

const L7 = `# Les Différents Types de Titres de Séjour en France : Carte Temporaire, Pluriannuelle, Résidence

Le système des titres de séjour français est organisé en une architecture à trois niveaux qui correspond à trois étapes progressives d'ancrage dans le pays. La carte de séjour temporaire, valable pour une durée d'un an, constitue le premier niveau — le point d'entrée dans le système pour la majorité des étrangers extra-communautaires nouvellement arrivés. La carte de séjour pluriannuelle, valable de deux à quatre ans, représente le deuxième niveau — accessible après une première période de résidence régulière, elle récompense l'intégration progressive et soulage des vicissitudes des renouvellements annuels. La carte de résident, valable dix ans et renouvelable, constitue le niveau culminant — la stabilité de séjour la plus proche de la permanence accessible aux non-citoyens.

## La carte de séjour temporaire : la porte d'entrée dans le système

La carte de séjour temporaire est délivrée pour une durée maximale d'un an renouvelable. Elle est le premier titre de séjour accordé à la grande majorité des étrangers extra-communautaires qui souhaitent s'installer en France pour plus de trois mois, quel que soit leur motif de séjour (travail, études, vie familiale, visiteur). Chaque carte de séjour temporaire porte une mention qui précise le motif du séjour et conditionne les droits liés au titre — notamment les droits au travail.

Les mentions les plus courantes de carte de séjour temporaire sont : « étudiant » (pour les personnes en formation dans un établissement reconnu), « salarié » (pour un salarié lié à un employeur précis avec autorisation de travail correspondante), « entrepreneur / profession libérale » (pour les travailleurs indépendants), « vie privée et familiale » (pour les personnes dont les liens familiaux leur ouvrent droit au séjour sans exigence d'activité professionnelle particulière), et « visiteur » (pour les personnes qui séjournent en France sans travailler, justifiant de ressources suffisantes).

La gestion d'une carte de séjour temporaire impose une vigilance administrative constante : suivi de la date d'expiration, dépôt de la demande de renouvellement dans les délais, vérification que les conditions qui ont justifié la délivrance initiale sont toujours remplies. Cette vigilance administrative est une compétence qui s'acquiert progressivement mais qui est indispensable pour éviter les risques d'irrégularité.

## La carte pluriannuelle : la stabilité intermédiaire

La carte de séjour pluriannuelle a été créée par la loi du 7 mars 2016 pour remplacer les renouvellements annuels répétés des titres temporaires par des titres d'une plus longue durée, dans une logique de simplification administrative et de reconnaissance de l'intégration. Elle est délivrée pour une durée de deux à quatre ans selon la catégorie et la situation du titulaire, et représente une évolution positive dans la trajectoire administrative d'un étranger en France.

L'accès à la carte pluriannuelle est conditionné à une première période de résidence régulière en France avec une carte temporaire. La durée de la carte pluriannuelle varie selon le type de titre : deux ans pour les étudiants en fin de cycle court, quatre ans pour la carte Passeport Talent, quatre ans pour le titre «travailleur saisonnier renouvelable». Cette variété de durées reflète les différences de situations et de projets qui correspondent à chaque catégorie.

## Les titres de séjour spécifiques aux ressortissants de l'Union Européenne

Les ressortissants de l'Union Européenne, de l'Espace Économique Européen (Islande, Liechtenstein, Norvège) et de la Suisse ne sont pas soumis aux mêmes obligations de titre de séjour que les ressortissants de pays tiers. En vertu du droit à la libre circulation au sein de l'UE, ils peuvent s'installer en France librement pour une durée de trois mois sans aucune formalité. Au-delà de trois mois, ils doivent justifier d'une activité professionnelle, de ressources suffisantes ou d'une inscription dans un établissement d'études, mais ils ne font pas l'objet d'une procédure d'administration préfectorale aussi formelle que les ressortissants de pays tiers.

Depuis la fin de la période de transition du Brexit (1er janvier 2021), les ressortissants britanniques sont traités comme des ressortissants de pays tiers pour les nouvelles installations en France — ils sont soumis aux mêmes obligations d'obtention d'un titre de séjour que les autres non-Européens. Les Britanniques déjà présents en France avant cette date ont bénéficié de l'accord de retrait qui leur garantit des droits comparables à ceux des citoyens européens, sous réserve de justification de leur présence antérieure au Brexit.

## La gestion des transitions entre types de titre

La progression d'un type de titre à un autre n'est pas automatique et doit être gérée de façon proactive. Le passage d'un titre temporaire à un titre pluriannuel requiert généralement de prouver qu'on remplit les nouvelles conditions. Le passage d'un titre pluriannuel à la carte de résident requiert cinq ans de résidence régulière et continue, avec la preuve de l'intégration.

Chaque transition est une opportunité de réévaluer sa situation administrative et de s'assurer qu'on est sur la bonne trajectoire vers la stabilité. Un conseiller juridique spécialisé (avocat en droit des étrangers, association d'aide aux migrants) peut aider à identifier la meilleure stratégie pour progresser dans le système des titres de séjour selon sa situation personnelle, son projet de vie en France et les délais qui lui correspondent.
`;

const L8 = `# Le Titre de Séjour « Étudiant » : Conditions, Droits et Obligations

Le titre de séjour étudiant est la pierre angulaire de l'expérience administrative de tout étudiant extra-européen en France. Ce titre, délivré pour la durée de la formation (généralement un an, renouvelable), détermine le cadre juridique dans lequel s'inscrit l'ensemble de la vie de l'étudiant en France — son droit de séjourner, de travailler partiellement, d'accéder aux aides sociales et de se déplacer librement. La maîtrise de ses conditions d'obtention, de ses droits et de ses obligations est une compétence administrative fondamentale pour tout étudiant étranger.

## La procédure d'obtention selon la nationalité et la situation

La procédure d'obtention du titre de séjour étudiant varie selon que l'étudiant arrive directement de son pays d'origine ou est déjà présent en France avec un autre statut. Pour les étudiants qui arrivent de l'étranger (procédure Campus France), le visa long séjour valant titre de séjour (VLS-TS) délivré par le consulat français vaut titre de séjour pour les premiers mois et doit être validé auprès de l'OFII (Office Français de l'Immigration et de l'Intégration) dans les trois mois suivant l'entrée en France. Cette validation OFII est une formalité indispensable — l'omettre expose à des difficultés lors du premier renouvellement.

Pour les étudiants déjà présents en France sous un autre statut (salarié, visiteur, regroupement familial) qui souhaitent entamer des études, un changement de statut peut être demandé auprès de la préfecture. Ce changement de statut est généralement accordé si les conditions du titre étudiant sont remplies, mais il implique une instruction du dossier qui peut prendre plusieurs semaines.

## Le visa étudiant et sa validation OFII

Le visa long séjour valant titre de séjour (VLS-TS mention «étudiant») est délivré par les consulats français pour les étudiants qui ont été admis dans une formation française via Campus France. D'une validité initiale de un an, il permet d'entrer en France et de commencer les études immédiatement. Sa validation auprès de l'OFII, qui se fait en ligne sur le site de l'OFII dans les trois mois suivant l'entrée sur le territoire, est la condition sine qua non pour que le VLS-TS serve de titre de séjour valide et pour pouvoir demander son renouvellement l'année suivante.

La visite médicale obligatoire — historiquement organisée par l'OFII lors de la validation — a été supprimée pour les étudiants dans le cadre de la simplification administrative des années 2020. La validation se déroule désormais entièrement en ligne, en quelques étapes : création d'un compte sur le site OFII, saisie du numéro de visa, téléchargement des documents justificatifs (photo d'identité, preuve d'entrée sur le territoire). La vignette de validation est ensuite envoyée par courrier à l'adresse déclarée.

## La carte de séjour pluriannuelle pour les étudiants

Après un premier titre de séjour étudiant annuel, les étudiants inscrits dans des formations d'une durée supérieure à un an peuvent accéder à une carte de séjour pluriannuelle générale (CSPG) d'une durée de deux ans. Cette carte, délivrée lors du premier renouvellement si les conditions de progression dans les études sont justifiées, réduit de moitié les contraintes administratives en portant le délai de renouvellement à deux ans au lieu d'un.

Pour bénéficier de la carte pluriannuelle, l'étudiant doit prouver sa progression dans les études — ce qui implique généralement la présentation d'une attestation de validation des semestres ou des années écoulées. Pour les étudiants en licence qui ont validé leurs deux premières années et s'inscrivent en troisième année, ou pour les étudiants en master inscrit pour deux ans, la pluriannuelle est généralement accordée sans difficulté.

## Droits et obligations liés au titre de séjour étudiant

Le titre de séjour étudiant confère des droits spécifiques et impose des obligations précises. Sur le plan des droits : autorisation de travailler jusqu'à 964 heures par an, accès à la Sécurité sociale étudiante, accès aux aides sociales pour lesquelles le statut d'étudiant est une condition (APL, bourses), liberté de circulation dans l'espace Schengen sans visa de retour pour des voyages de courte durée.

Sur le plan des obligations : maintien de l'inscription dans la formation pour laquelle le titre a été obtenu, progression académique suffisante pour justifier le renouvellement, signalement de tout changement d'adresse à la préfecture dans les délais prévus, respect des conditions d'autorisation de travail (ne pas dépasser 964 heures par an).

## Les situations complexes : redoublement, changement de formation, interruption

Plusieurs situations complexes méritent une attention particulière. Le redoublement n'est pas automatiquement un motif de refus de renouvellement — un échec ponctuel peut être expliqué et contextualisé (difficultés de santé, problèmes personnels documentés, adaptation difficile). Les redoublements répétés sans justification peuvent en revanche alerter la préfecture sur la réalité du projet d'études.

Le changement de formation doit être signalé à la préfecture et peut nécessiter une modification du titre de séjour si la formation change de niveau ou de type. Un passage d'une licence à un master est généralement bien perçu comme une progression normale. Un passage d'un master à une licence est plus problématique car il constitue une régression de niveau difficile à justifier.
`;

const L9 = `# Le Passeport Talent : Pour les Profils Exceptionnels et Chercheurs

Le Passeport Talent dans sa catégorie «chercheurs» représente l'un des instruments les plus efficaces dont dispose la France pour attirer les meilleurs esprits scientifiques du monde. Dans un contexte de compétition internationale intense pour les talents académiques et scientifiques, ce visa offre une combinaison de flexibilité, de durée et d'avantages pratiques qui le rend particulièrement attractif pour les chercheurs déjà établis et pour les jeunes chercheurs post-doctoraux qui commencent leur carrière internationale.

## Le profil cible du Passeport Talent Chercheur

Le Passeport Talent Chercheur s'adresse aux professionnels de la recherche et de l'enseignement supérieur qui viennent exercer une mission en France dans le cadre d'une convention d'accueil signée avec un organisme reconnu. Ce profil inclut les professeurs invités des universités françaises, les chercheurs post-doctoraux en contrat avec des laboratoires publics (CNRS, INSERM, CEA, INRAE), les enseignants-chercheurs recrutés par des établissements d'enseignement supérieur, et les chercheurs en mobilité internationale dans le cadre de programmes européens (Marie Skłodowska-Curie Actions, notamment).

La qualité de l'organisme d'accueil est un critère déterminant. L'organisme doit être un établissement public de recherche reconnu ou un établissement d'enseignement supérieur accrédité. Les laboratoires privés ne constituent pas des organismes d'accueil valides pour le Passeport Talent Chercheur — seul le Passeport Talent Salarié qualifié ou la Carte Bleue Européenne couvre les chercheurs en entreprise privée.

## La convention d'accueil : la pièce maîtresse du dossier

La convention d'accueil est le document clé du Passeport Talent Chercheur. Signée entre le chercheur étranger et l'organisme d'accueil français (université, laboratoire, agence de recherche), elle précise les conditions de la mission : durée, nature des travaux de recherche ou d'enseignement, ressources mises à disposition par l'organisme, rémunération, et conditions d'hébergement ou d'aide à l'installation.

Cette convention doit être soumise au service des étrangers de la préfecture du lieu de l'organisme d'accueil pour validation. La préfecture vérifie que l'organisme est bien agréé, que la rémunération est conforme aux minimums légaux (au moins 100% du SMIC mensuel brut) et que la convention couvre l'ensemble de la durée du séjour pour lequel le titre est demandé. Un délai de plusieurs semaines est à prévoir entre le dépôt de la convention et la délivrance du titre.

## Les avantages spécifiques pour les chercheurs

Les chercheurs titulaires du Passeport Talent bénéficient d'un régime particulièrement avantageux sur plusieurs points. La mobilité internationale est facilitée : le titre de séjour Passeport Talent permet des allers-retours fréquents entre la France et d'autres pays sans perte du bénéfice du titre, ce qui correspond aux pratiques habituelles des chercheurs actifs dans des collaborations internationales. La durée de quatre ans couvre généralement l'intégralité d'un contrat post-doctoral long ou d'une première affectation en maître de conférences.

La mobilité entre organismes d'accueil est également plus simple que pour les titres classiques. Un chercheur qui change de laboratoire ou d'université en France peut demander une modification de sa convention d'accueil sans avoir à changer complètement de titre de séjour — une procédure administrative moins lourde que le renouvellement complet d'un titre ordinaire.

## Le régime fiscal des impatriés pour les chercheurs étrangers

Les chercheurs étrangers qui prennent leur résidence fiscale en France dans le cadre d'un Passeport Talent peuvent bénéficier du régime fiscal des impatriés, prévu par l'article 155B du Code général des impôts. Ce régime fiscal favorable permet d'exonérer partiellement de l'impôt sur le revenu français une partie des rémunérations perçues — notamment les « primes d'impatriation » versées par l'organisme d'accueil pour compenser les surcoûts liés à la mobilité internationale. Ce régime s'applique pendant cinq ans à compter de la prise de fonctions en France. Son éligibilité doit être vérifiée avec un conseiller fiscal, car ses conditions techniques sont précises.

## Les dispositifs d'accueil institutionnels pour les chercheurs

Dans les grandes universités et les organismes de recherche français, des services spécialisés dans l'accueil des chercheurs étrangers (Welcome Desk) facilitent toutes les démarches administratives liées à l'arrivée : assistance pour la convention d'accueil, aide pour trouver un logement, orientation vers les services préfectoraux, information sur les droits sociaux, et soutien pour les formalités d'inscription à la Sécurité sociale. Ces services sont une ressource précieuse qui distingue favorablement les organismes qui les proposent de ceux qui laissent les chercheurs étrangers naviguer seuls dans le dédale administratif français.
`;

const L10 = `# La Carte de Résident (10 Ans) : Conditions et Chemin vers la Résidence Permanente

La carte de résident à durée de validité de dix ans est le titre de séjour qui marque l'aboutissement d'un processus d'intégration durable en France. Elle transforme la relation de l'étranger à son pays d'adoption : là où les titres temporaires et pluriannuels entretenaient une incertitude structurelle sur la pérennité du droit au séjour, la carte de résident offre une stabilité qui permet de construire des projets de vie à long terme. Elle est, avec la naturalisation, l'expression la plus forte de l'ancrage durable d'un étranger dans la société française.

## Les cinq ans de résidence : exigences et preuves

La condition de résidence régulière et continue de cinq ans est la clé de voûte du droit à la carte de résident pour la majorité des demandeurs. Cette période de cinq ans commence à compter du premier titre de séjour régulier en France et doit être ininterrompue au sens where des absences prolongées ne seraient pas venues rompre la continuité.

La preuve de résidence continue nécessite généralement de présenter l'historique complet des titres de séjour successifs sur les cinq ans, sans lacune. Chaque nouveau titre délivré doit couvrir la période entre l'expiration du précédent et sa propre délivrance — les récépissés de demande de renouvellement constituent des preuves de la continuité administrative pendant les périodes d'attente. Des preuves complémentaires de vie en France (baux de logement, factures, relevés bancaires, attestations d'employeur ou d'études) viennent confirmer la réalité effective du séjour au-delà de la simple détention administrative des titres.

## L'intégration républicaine : au-delà des critères formels

La condition d'intégration républicaine pour la carte de résident est évaluée de façon plus exigeante que pour les titres temporaires. Outre la maîtrise suffisante de la langue française (niveau A2 minimum requis formellement, mais un niveau plus élevé est apprécié), l'administration évalue la participation active à la vie sociale, économique et civique française. Les preuves typiques de cette intégration incluent : ancienneté dans l'emploi ou activité professionnelle stable, participation à des associations ou des organisations locales, fiscalité française régulière, absence de condamnations pénales et absence de menace pour l'ordre public.

L'adhésion aux valeurs de la République française est une condition explicitement mentionnée dans la loi. Sans entrer dans une appréciation des convictions personnelles — domaine protégé par la liberté de conscience — l'administration peut refuser la carte de résident à une personne dont le comportement public est contraire à ces valeurs (promotion de la discrimination, refus de l'égalité entre hommes et femmes, comportements incompatibles avec les principes fondamentaux de la démocratie libérale).

## Les catégories bénéficiaires de la carte de résident de plein droit

La loi prévoit plusieurs catégories d'étrangers qui bénéficient de la carte de résident de plein droit, c'est-à-dire sans que l'administration puisse exercer un pouvoir d'appréciation discrétionnaire sur la demande dès lors que les conditions légales sont remplies. Ces catégories protégées incluent le conjoint étranger d'un citoyen français résidant en France depuis au moins trois ans ; le parent étranger d'un enfant français reconnu et dont il assure effectivement la garde ; l'étranger retraité qui a résidé en France pendant au moins quinze ans et perçoit une pension de retraite française ; et l'étranger ayant travaillé en France pendant au moins dix ans et ne pouvant pas bénéficier d'une pension de retraite à taux plein à l'étranger.

Ces catégories de plein droit représentent une protection juridique forte contre les refus arbitraires et constituent des trajectoires relativement sécurisées vers la stabilité de séjour pour les personnes qui y entrent.

## La carte de résident comme transition vers la naturalisation

La possession d'une carte de résident facilite considérablement la transition vers la naturalisation. D'une part, elle prouve en elle-même que les conditions d'intégration ont été évaluées positivement par l'administration lors de sa délivrance, ce qui rend la demande de naturalisation a priori plus solide. D'autre part, le délai de résidence requis pour la naturalisation (cinq ans en règle générale) est généralement déjà rempli au moment de l'obtention de la carte de résident — l'étudiant ou le travailleur qui obtient sa carte de résident peut souvent déposer sa demande de naturalisation simultanément ou peu après.

La naturalisation confère tous les droits de la citoyenneté française — droit de vote, droit d'être élu, accès à tous les emplois publics, protection consulaire française à l'étranger — et constitue l'achèvement juridique du parcours d'intégration commencé lors de la première arrivée en France.
`;

const L11 = `# Les Différents Types de Titres de Séjour en France

Les titres de séjour en France constituent un système complexe et hiérarchisé qui reflète la diversité des situations des étrangers présents sur le territoire français. Comprendre l'ensemble du paysage des titres de séjour — leurs niveaux, leurs conditions, leurs durées de validité et leurs droits associés — est une base indispensable pour naviguer de façon éclairée dans le système administratif français et anticiper les étapes de sa trajectoire de séjour.

## L'architecture globale du système des titres de séjour

Le système des titres de séjour français s'articule autour de trois niveaux principaux, correspondant à trois degrés d'ancrage dans le pays. Les titres temporaires (jusqu'à un an) constituent le premier niveau, accessible à la plupart des étrangers extra-communautaires lors de leur première installation. Les titres pluriannuels (deux à quatre ans), créés par la réforme de 2016, constituent le deuxième niveau qui récompense l'intégration progressive et simplifie la vie administrative. La carte de résident (dix ans), enfin, constitue le troisième niveau, accordé aux étrangers ayant prouvé leur intégration durable.

Au-delà de cette architecture générale, plusieurs titres spéciaux complètent le paysage : le Passeport Talent (quatre ans), créé pour attirer les profils exceptionnels ; la carte de séjour «retraité» pour les étrangers retraités ayant des liens forts avec la France ; les titres spécifiques aux ressortissants algériens, régis par l'accord bilatéral franco-algérien de 1968 qui crée un régime particulier distinct du droit commun.

## Les conditions communes à tous les titres de séjour

Indépendamment du type de titre demandé, certaines conditions générales s'appliquent à toutes les demandes. Le demandeur doit être entré régulièrement sur le territoire français — soit avec un visa, soit dans le cadre de la libre circulation si applicable —, ne pas représenter de menace pour l'ordre public, et ne pas être frappé d'une interdiction administrative du territoire. Ces conditions préalables sont vérifiées par les services préfectoraux pour chaque demande.

La régularité de l'entrée sur le territoire est une condition souvent négligée par les candidats qui entrent en France sans visa (en utilisant la règle des 90 jours dans l'espace Schengen) avant de déposer une demande de titre de séjour. Cette pratique, bien que courante, n'est pas nécessairement acceptée par toutes les préfectures pour tous les types de titres — certains titres requièrent formellement une entrée avec un visa long séjour pour être accessibles.

## Les mentionsspécifiques et leurs droits associés

Chaque titre de séjour porte une mention qui indique le motif du séjour et conditionne les droits qui y sont attachés. La mention «salarié» autorise l'exercice de l'activité salariée notifiée sur le titre, mais pas de toute autre activité rémunérée. La mention «commerçant» autorise l'exercice d'une activité commerciale indépendante. La mention «vie privée et familiale» n'autorise pas automatiquement toute activité professionnelle — il convient de vérifier les droits au travail spécifiques de cette mention selon sa sous-catégorie (conjoint de Français, parent d'enfant français, etc.).

La méconnaissance des droits exacts conférés par la mention portée sur son titre de séjour est une source fréquente d'erreurs — un étranger qui exerce une activité non couverte par la mention de son titre est en situation irrégulière de travail même si son séjour est régulier. La consultation du site service-public.fr ou d'une association d'aide aux étrangers permet de vérifier précisément les droits attachés à chaque type de titre.

## Les régimes spéciaux : accord franco-algérien, accords bilatéraux

La France a signé des accords bilatéraux avec plusieurs pays qui créent des régimes spéciaux de séjour dérogeant en partie ou en totalité au droit commun des étrangers. L'accord le plus important et le plus complexe est l'accord franco-algérien du 27 décembre 1968 et ses avenants successifs, qui régit l'ensemble de la situation administrative des ressortissants algériens en France. Cet accord crée pour les Algériens des «certificats de résidence» (et non des cartes de séjour) avec des appellation et durées spécifiques. Les ressortissants algériens ne relèvent pas du régime commun du CESEDA (Code de l'Entrée et du Séjour des Étrangers et du Droit d'Asile) sur de nombreux points, et les services préfectoraux appliquent des règles différentes à leurs demandes.

La méconnaissance de cet accord bilatéral expose les ressortissants algériens à des erreurs dans leurs démarches — en suivant des conseils généraux valables pour d'autres nationalités mais inapplicables à leur situation. La consultation d'un conseiller juridique familier avec l'accord franco-algérien est vivement recommandée pour toute démarche complexe (renouvellement difficile, demande de changement de statut, recours contre un refus).

## Les délais de traitement et les recours en cas de refus

Les délais de traitement des demandes de titre de séjour varient considérablement selon les préfectures, la catégorie de titre demandé et la charge de travail administrative. Certaines préfectures à forte population étrangère (Paris, Seine-Saint-Denis, Val-de-Marne) ont des délais particulièrement longs — plusieurs mois pour obtenir un rendez-vous de dépôt de dossier, plusieurs mois supplémentaires pour le traitement. Ces délais peuvent avoir des conséquences pratiques importantes sur le séjour.

En cas de refus de titre de séjour, plusieurs recours sont possibles. Le recours gracieux adressé au préfet demande le réexamen de la décision par l'autorité qui l'a prise. Le recours hiérarchique adressé au ministre de l'Intérieur est plus rare et généralement moins efficace. Le recours contentieux devant le tribunal administratif est la voie judiciaire permettant de faire annuler une décision illégale — il doit être formulé dans un délai précis après la notification du refus et nécessite généralement l'assistance d'un avocat. Des associations spécialisées (GISTI, CIMADE, France Terre d'Asile) peuvent aider à évaluer les chances de succès d'un recours et à le préparer.
`;

const L12 = `# La Naturalisation Française : Accéder à la Nationalité

La naturalisation française représente l'aboutissement d'un chemin d'intégration — le moment où un étranger qui a construit sa vie en France, qui y a travaillé, élevé des enfants, contribué à la société, voit cette appartenance de fait reconnue juridiquement et transformée en appartenance de droit. C'est un acte symbolique et pratique qui transforme simultaneously la relation administrative à l'État français et le sentiment d'identité de la personne qui en bénéficie. Cette leçon examine en profondeur les modalités de la naturalisation — en les distinguant des autres modes d'acquisition de la nationalité française et en s'attardant sur les aspects pratiques qui déterminent le succès ou l'échec d'une demande.

## Les différents modes d'acquisition de la nationalité française

La naturalisation par décret est le mode d'acquisition de la nationalité française qui concerne les étrangers adultes qui ne peuvent pas revendiquer la nationalité française par un autre mécanisme. Elle est la modalité qui s'applique à la grande majorité des demandeurs et c'est sur elle que porte l'essentiel de cette leçon. Mais il existe d'autres modes d'acquisition, aux conditions et aux effets différents.

La nationalité française par filiation s'acquiert automatiquement à la naissance pour les enfants d'un parent français, sans aucune démarche. La nationalité française par mariage avec un citoyen français peut être acquise après un mariage d'une durée minimale de quatre ans, sous réserve de résidence commune et d'intégration. La nationalité française par déclaration est accessible aux personnes qui ont un lien particulier avec la France sans y avoir toujours résidé — notamment certaines catégories de personnes nées dans les anciens territoires français.

## Le dossier de naturalisation en pratique

Le dossier de naturalisation est l'un des dossiers administratifs les plus volumineux et les plus exigeants que l'on puisse préparer en France. Sa constitution requiert plusieurs mois de collecte de documents, dont certains nécessitent des démarches auprès des autorités du pays d'origine que est difficile de réaliser rapidement.

Les documents relatifs à l'état civil — acte de naissance, acte de mariage si applicable, actes de naissance des enfants à charge — sont des pièces fondamentales qui doivent être présentées en version originale avec traduction assermentée. Pour certains pays dont l'état civil est peu fiable ou difficile à consulter, l'obtention de ces documents peut prendre plusieurs mois et nécessiter le recours à des intermédiaires dans le pays d'origine.

Les preuves de résidence continue sur la période requise comprennent généralement les titres de séjour successifs (ou copies), les baux de logement, les avis d'imposition, les relevés de compte bancaire, les factures de services établis à son nom. La cohérence de ces preuves — montrant que la même personne a bien vécu à des adresses successives en France pendant toute la période — est ce que le service de naturalisation de la préfecture vérifie en priorité.

## L'entretien d'assimilation

L'entretien d'assimilation, conduit par un agent du service de naturalisation de la préfecture, est un moment important de la procédure. Il dure généralement 30 à 60 minutes et porte sur plusieurs dimensions : vérification de la maîtrise du français par une conversation directe, évaluation de la connaissance des institutions françaises et des droits et obligations civiques, appréciation du degré d'engagement dans la vie française (professionnelle, sociale, associative), et vérification de la cohérence des informations du dossier.

La préparation à cet entretien est essentielle pour mettre en valeur les nombreuses années d'intégration qui ont précédé la demande. Connaître les institutions

 clés de la République française (Président de la République, Premier ministre, Assemblée nationale, Sénat), comprendre les principes fondamentaux de la laïcité et de l'égalité, et pouvoir narrer son parcours d'intégration de façon claire et convaincante en français sont les compétences minimales à maîtriser pour aborder cet entretien sereinement.

## La décision administrative et ses voies de recours

La décision sur la demande de naturalisation est prise par le ministre en charge de la naturalisation (délégation au Préfet depuis la déconcentration de 2010) après instruction du dossier. Elle peut prendre la forme d'une décision favorable (décret de naturalisation) publiée au Journal Officiel de la République Française, d'une décision d'irrecevabilité (dossier incomplet ou conditions de fond non remplies), ou d'un ajournement (la demande est rejetée pour l'instant mais peut être redéposée ultérieurement).

En cas d'ajournement ou de refus, un recours gracieux peut être déposé devant le Préfet dans les deux mois suivant la notification. Un recours contentieux est possible devant le tribunal administratif. Ces recours juridictionnels sont complexes et nécessitent généralement l'assistance d'un avocat spécialisé. Les associations de défense des droits des étrangers peuvent évaluer gratuitement les chances de succès d'un recours et orienter vers des avocats compétents.
`;

await patch('aac8c4c1-7ab2-45b3-a5b5-4e2748f16939', L7);
await patch('2db95ef5-7de7-4bac-a68f-0ef96dddf981', L8);
await patch('c22002fe-75ce-41af-bd63-5ed570312d28', L9);
await patch('9419e826-62cc-4a80-96e5-638ba995184e', L10);
await patch('9a533bac-7df9-412e-922e-0dcdf500fd0b', L11);
await patch('42981160-abc6-46a3-a324-505dfc7ea75e', L12);
