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

const L5 = `# Vie Universitaire : Intégration, Associations et Réussite

L'université française ne se résume pas à des cours et des examens. Elle est aussi un espace de vie sociale, culturelle et associative intense qui offre à chaque étudiant des opportunités d'épanouissement personnel, de développement de compétences transversales et de construction d'un réseau relationnel durable. Pour les étudiants internationaux qui arrivent avec la double mission de réussir leurs études et de s'intégrer dans une culture nouvelle, investir dans la vie universitaire est non seulement enrichissant mais aussi académiquement bénéfique. Cette leçon vous présente les différentes dimensions de la vie universitaire française et vous donne les clés pour vous y intégrer de façon active et stratégique.

## La première semaine : les journées d'accueil et d'intégration

La première semaine de cours est consacrée, dans la plupart des universités françaises, à des journées d'accueil et d'intégration destinées aux nouveaux étudiants. Ces journées organisent des présentations des services universitaires (secrétariat pédagogique, bibliothèque, service de santé, service de logement, bureau des relations internationales), des visites du campus, des rencontres avec les équipes pédagogiques et les associations étudiantes, et des activités de socialisation entre les nouveaux arrivants.

Pour les étudiants étrangers, des sessions d'accueil spécifiques sont souvent organisées par le bureau des relations internationales ou le service des étudiants étrangers, qui fournissent des informations pratiques supplémentaires sur la vie administrative (OFII, CAF, CPAM), le logement, les transports et les ressources spécifiques à leur situation. Ne manquez pas ces sessions : elles sont une mine d'information et une occasion de rencontrer d'autres étudiants internationaux qui traversent les mêmes défis d'installation.

## Le tissu associatif universitaire : richesse et diversité

Les universités françaises abritent un tissu associatif étudiant remarquablement riche et diversifié. Des associations sportives, culturelles, humanitaires, professionnelles, politiques et communautaires existent dans pratiquement tous les établissements. Ce tissu associatif est l'un des vecteurs les plus efficaces d'intégration dans la vie universitaire, d'acquisition de compétences pratiques et de construction d'un réseau.

Les associations sportives proposent des pratiques collectives et individuelles dans de nombreuses disciplines : foot, basket, tennis, natation, arts martiaux, danse, yoga, course à pied et bien d'autres. L'adhésion est généralement très abordable (10 à 30 euros par semestre) et les horaires sont adaptés aux emplois du temps étudiants. La pratique sportive collective est d'ailleurs fortement recommandée pour les raisons de bien-être physique et mental développées dans les leçons précédentes.

Les associations culturelles organisent des soirées cinéma, des expositions d'art, des ateliers théâtre ou musique, des concerts et des événements interculturels. Elles favorisent une programmation culturelle accessible et souvent gratuite pour les étudiants. Pour un étudiant étranger en quête de découverte de la culture française contemporaine, participer aux événements organisés par ces associations est une immersion culturelle vivante et conviviale.

Les associations professionnelles (associations d'étudiants en droit, en médecine, en commerce, en informatique) organisent des conférences avec des professionnels, des visites d'entreprises, des simulations de procès (moot courts en droit), des hackathons (en informatique) et des forums de recrutement. Rejoindre ces associations dès la première année est un investissement professionnel intelligent qui construit un réseau et des expériences concrètes bien avant la fin des études.

## Les bureaux des élèves (BDE) et la vie festive

Les Bureaux des Élèves (BDE) sont les associations étudiantes représentatives des promotions dans les grandes écoles et, de façon équivalente, les associations de promotion dans les universités. Ils organisent la vie festive du campus — soirées de rentrée, événements thématiques, week-ends d'intégration, galas de fin d'année — ainsi que des services pratiques pour les étudiants (ventes de fournitures à tarif réduit, partenariats avec des commerçants locaux pour des remises étudiantes).

La vie festive est un aspect de l'expérience universitaire que les étudiants internationaux peuvent appréhender avec des sentiments mélangés selon leur culture d'origine. Elle représente une dimension sociale importante du campus français — un contexte convivial de rencontres, de détente et de cohésion entre promotions. Y participer de façon modérée est une manière naturelle de créer des liens avec des camarades français et de partager une expérience commune.

## Le mentorat et les réseaux d'accompagnement entre pairs

Dans de nombreuses universités, des dispositifs de mentorat entre pairs permettent aux étudiants déjà installés d'accompagner les nouveaux arrivants dans leur intégration. Ces mentors — souvent des étudiants de deuxième ou troisième année ayant eux-mêmes traversé la phase d'adaptation — peuvent offrir des conseils personnalisés sur la vie quotidienne, l'administration universitaire, les meilleures stratégies de révision pour chaque matière et les ressources méconnues du campus.

Pour les étudiants internationaux, chercher un mentor français ou un étudiant étranger d'une année avancée est une démarche proactive qui accélère l'adaptation et réduit la sensation d'isolement des premières semaines. Le bureau des relations internationales ou les associations étudiantes peuvent faciliter ces mises en relation.

## Les commissions pédagogiques et la participation à la vie institutionnelle

Au-delà de la vie associative, les étudiants français ont la possibilité de participer à la vie institutionnelle de l'université en siégeant dans les instances de gouvernance — Conseil d'Administration, Conseil Académique, Conseil de la Vie Universitaire. Ces instances comprennent des représentants élus des étudiants qui participent aux décisions sur les politiques d'enseignement, les règlements des études, les budgets et l'organisation générale de l'établissement.

Se présenter aux élections étudiantes ou voter pour des représentants engagés est une façon concrète d'influencer les conditions d'études et de défendre les intérêts des étudiants, y compris internationaux, auprès de l'administration. Cette participation civique universitaire est aussi une expérience formatrice pour comprendre le fonctionnement des institutions françaises et développer des compétences de leadership et de négociation collective.

## L'intégration culturelle progressive : accepter le temps nécessaire

L'intégration dans la culture universitaire française, comme dans toute culture étrangère, est un processus graduel qui demande du temps et de la tolérance envers soi-même. Les premières semaines sont souvent marquées par un sentiment d'euphorie de la découverte, suivis parfois d'une phase plus difficile de confrontation aux différences et aux incompréhensions. Cette «courbe d'adaptation culturelle» (ou courbe en U des chocs culturels) est un phénomène bien documenté qui affecte la plupart des migrants, y compris les étudiants internationaux.

Reconnaître que vous traversez une phase normale d'adaptation, chercher le soutien de la communauté estudiantine internationale, maintenir des liens réguliers avec vos proches dans votre pays d'origine, et vous permettre de prendre du recul dans les moments de découragement sont des stratégies efficaces pour traverser cette période et émerger de l'autre côté avec une riche expérience interculturelle intégrée.
`;

const L6 = `# L'Inscription Administrative : Documents et Services Universitaires

L'inscription administrative à l'université française est le processus formel par lequel un étudiant est officiellement enregistré comme membre de la communauté universitaire pour une année académique donnée. Cette inscription est distincte de l'inscription pédagogique (choix des cours et des unités d'enseignement) et constitue la première démarche à accomplir après l'admission dans une formation. Sans inscription administrative valide, aucun étudiant ne peut passer d'examens, accéder aux services universitaires ni être pris en charge par la Sécurité sociale étudiante. Cette leçon vous explique en détail la procédure d'inscription administrative, les documents requis, les services accessibles après inscription et les erreurs à éviter.

## La procédure d'inscription administrative : étapes et calendrier

L'inscription administrative se déroule selon un calendrier annuel précis, publié sur le site de chaque université. Pour les étudiants pour lesquels une décision d'admission a été rendue (via Parcoursup, Mon Master, ou une procédure spécifique), la période d'inscription administrative est généralement ouverte entre juin et septembre pour les formations de rentrée de septembre.

La procédure se déroule le plus souvent en deux phases distinctes. La première phase est l'inscription via le portail en ligne de l'université, où l'étudiant crée son compte, saisit ses informations personnelles, sélectionne sa formation et télécharge les pièces justificatives demandées. Cette étape génère en général un récapitulatif d'inscription et des instructions pour la seconde phase.

La seconde phase est la finalisation en présentiel (ou parfois entièrement en ligne dans les universités les plus numérisées), lors de laquelle l'étudiant présente ses documents originaux, paye les droits d'inscription, fournit l'attestation de paiement ou d'exonération de la CVEC et reçoit sa carte étudiant et son certificat de scolarité.

## La liste exhaustive des documents requis

La liste précise des documents requis varie selon les universités et les niveaux de formation, mais comprend généralement les éléments suivants pour un étudiant étranger.

Le diplôme ouvrant droit à l'inscription dans la formation demandée : baccalauréat (ou équivalent étranger reconnu) pour une licence, licence (ou équivalent étranger) pour un master. Ce diplôme doit être présenté en original, accompagné si nécessaire d'une traduction assermentée.

Les relevés de notes des années d'études pertinentes (lycée ou études supérieures selon le cas), également en original avec traduction si nécessaire.

La pièce d'identité en cours de validité : passeport pour les étudiants étrangers. Une photocopie de la page d'identité est conservée par l'université.

Pour les étudiants extra-européens déjà en France : le titre de séjour «étudiant» en cours de validité. Pour les étudiants effectuant leur première inscription en France depuis l'étranger : le visa long séjour valant titre de séjour (VLS-TS) accompagné de l'attestation de pré-inscription.

L'attestation de paiement ou d'exonération de la CVEC (Contribution Vie Étudiante et de Campus), disponible sur le site messervices.etudiant.gouv.fr.

Un justificatif de domicile récent en France (quittance de loyer, facture EDF ou attestation d'hébergement) ou, si l'étudiant n'est pas encore installé, une déclaration sur l'honneur avec l'adresse de résidence.

Des photos d'identité conformes aux normes officielles.

## La carte étudiant : son rôle et ses avantages

La carte étudiant est le document officiel remis à l'étudiant lors de l'inscription administrative. Elle porte le nom, la photo, le numéro étudiant et la formation suivie, et constitue le sésame d'accès à une multitude de services et d'avantages.

La carte étudiant donne accès aux restaurants universitaires du CROUS au tarif étudiant, aux bibliothèques universitaires (en permettant le prêt de documents), aux salles informatiques et aux équipements du campus. Elle permet l'accès aux résidences universitaires selon les cas, et sert de pièce d'entrée pour les examens (présentée aux surveillants à l'entrée des salles d'examen).

Au-delà de l'université, la carte étudiant est une carte de réduction présentée dans de nombreux contextes : musées et monuments nationaux (tarifs réduits ou entrée gratuite pour les moins de 26 ans), cinémas (tarif réduit), SNCF (carte Jeune, réductions sur les billets de train), compagnies de transport régional, et de nombreux commerces qui appliquent des tarifs étudiants. Des applications dédiées (carte.student.fr, Unidays) agrègent des centaines de réductions accessibles avec votre statut étudiant.

## Le certificat de scolarité et ses usages administratifs

Le certificat de scolarité est un document officiel produit par le secrétariat pédagogique qui atteste l'inscription régulière d'un étudiant dans une formation pour l'année académique en cours. Il précise le nom de l'étudiant, son numéro d'étudiant, la formation suivie, l'établissement et l'année académique.

Ce document est requis dans une multitude de démarches administratives : ouverture d'un compte bancaire, demande d'aide au logement à la CAF, dossier CROUS pour une demande de logement ou de bourse, demande de carte de transport à tarif réduit, affiliation à la Sécurité sociale étudiante. Obtenez plusieurs exemplaires de votre certificat de scolarité dès le début de l'année, ou vérifiez si votre université le met à disposition en téléchargement depuis l'ENT (formulaire auto-généré avec signature électronique).

## La réinscription annuelle

L'inscription administrative n'est pas permanente : elle doit être renouvelée chaque année universitaire. La procédure de réinscription suit globalement le même calendrier et les mêmes étapes que l'inscription initiale. La principale différence est que certains documents déjà fournis précédemment (diplôme d'accès à la formation) ne sont pas à refournir, tandis que d'autres doivent être actualisés (titre de séjour en cours de validité, pièce d'identité, justificatif de domicile).

Pour les étudiants étrangers, la réinscription annuelle est l'occasion de vérifier que le titre de séjour est bien renouvelé et valide pour la nouvelle année académique. Un étudiant dont le titre de séjour est expiré au moment de la réinscription se retrouve dans une situation administrative délicate : l'inscription peut être bloquée jusqu'à régularisation de la situation. Anticipez le renouvellement de votre titre de séjour suffisamment en avance — idéalement deux mois avant son expiration — pour éviter ce type de blocage.

## Les services universitaires accessibles après inscription

L'inscription administrative ouvre l'accès à un écosystème complet de services universitaires dont une bonne utilisation peut significativement améliorer la qualité de l'expérience étudiante.

Le Service de Santé Universitaire (SSU) ou le Service Universitaire de Médecine Préventive et de Promotion de la Santé (SUMPPS) offre des consultations médicales et psychologiques gratuites aux étudiants inscrits, des vaccinations, des dépistages et des informations de santé sexuelle. Ce service est souvent méconnu et sous-utilisé, alors qu'il représente une ressource médicale précieuse pour les étudiants éloignés de leur réseau de santé habituel.

Le Service Commun Universitaire d'Information, d'Orientation et d'Insertion Professionnelle (SCUIO-IP) propose des entretiens individuels d'orientation, des ateliers de préparation à l'emploi, des bilans de compétences et des informations sur les débouchés professionnels des différentes formations. Ce service est particulièrement utile en fin de cursus, pour construire un projet professionnel cohérent avec ses compétences et ses aspirations.

`;

const L7 = `# Le Système Universitaire Français : LMD, Grandes Écoles, IUT et BTS

Comprendre l'architecture globale du système d'enseignement supérieur français est un préalable indispensable à tout choix de formation éclairé. Ce système, à première vue complexe et fragmenté, obéit à une logique cohérente qui distingue plusieurs voies d'accès et types de formations selon les objectifs académiques et professionnels des étudiants. Cette leçon vous en présente les grandes composantes : le système LMD des universités, les grandes écoles et les classes préparatoires, les Instituts Universitaires de Technologie (IUT) avec les BTSS (BTS) et les BUT, et les formations courtes professionnalisantes.

## Le système LMD : la structure académique principale

Le système LMD (Licence-Master-Doctorat), adopté par la France dans le cadre du processus de Bologne à partir des années 2000, organise les études supérieures en trois grades académiques harmonisés à l'échelle européenne.

La Licence (Bac+3) représente le premier grade universitaire. Elle est dispensée dans les universités publiques sur trois ans (six semestres) et comprend 180 crédits ECTS. Elle offre une formation disciplinaire large dans le domaine choisi (droit, lettres, sciences, langues, économie, etc.) avec une progressivité pédagogique : les deux premières années construisent les fondamentaux, la troisième année amorce une spécialisation. La licence peut être aussi bien une finalité professionnelle (pour les étudiants qui entrent directement sur le marché du travail) qu'une étape vers le master. Les licences professionnelles (Bac+3 avec insertion professionnelle directe) sont une variante spécifiquement conçue pour l'insertion rapide dans un secteur professionnel.

Le Master (Bac+5) est le second grade universitaire, correspondant à deux années supplémentaires après la licence, soit 120 crédits ECTS. Il existe deux types de master : le master recherche (préparant à la carrière académique et au doctorat) et le master professionnel (préparant à l'exercice d'un métier spécialisé). La sélection pour l'entrée en master est de plus en plus compétitive, particulièrement dans les universités de grande réputation et les disciplines à fort débouché professionnel. La plateforme Mon Master centralise les candidatures aux masters sélectifs depuis 2023.

Le Doctorat (Bac+8 en moyenne) est le troisième grade universitaire, correspondant à la réalisation et à la soutenance d'une thèse de recherche originale sous la direction d'un directeur de thèse. Il dure généralement trois ans (avec financement via un contrat doctoral) ou plus, selon la discipline et la complexité de la recherche. Le doctorat ouvre les portes de la carrière académique et de la recherche publique ou privée de haut niveau.

## Les grandes écoles : excellence sélective et culture de l'élite

Les grandes écoles constituent une spécificité française dans le paysage mondial de l'enseignement supérieur. Ce sont des établissements d'enseignement supérieur de taille modeste, hautement sélectifs, qui recrutent via des concours d'entrée difficiles et dispensent des formations d'excellence reconnues pour leur efficacité à former des cadres dirigeants dans les secteurs public et privé.

Les grandes écoles d'ingénieurs (Polytechnique, Centrale Paris, les Arts et Métiers, INSA, UTC) forment des ingénieurs de haut niveau pour l'industrie, la défense et la recherche. Les grandes écoles de commerce (HEC Paris, ESCP, ESSEC, emlyon, Audencia) forment des managers et des entrepreneurs pour le monde économique. Les grandes écoles d'administration publique (Sciences Po Paris et ses antennes régionales, l'INSP anciennement ENA, les IEP de Province) forment les élites politiques, administratives et diplomatiques. Les grandes écoles normales (ENS Paris, ENS Lyon) forment les futurs enseignants-chercheurs et intellectuels.

L'accès aux grandes écoles se fait généralement après deux années de classes préparatoires aux grandes écoles (CPGE), suivies de concours d'entrée nationaux très sélectifs. Ce parcours est conçu pour des étudiants français issus du système secondaire français, et l'accès direct de l'étranger est limité — certaines grandes écoles proposent cependant des «passerelles» d'admission internationale sur dossier pour des candidats étrangers de niveau exceptionnel, généralement pour l'entrée en deuxième ou troisième année.

## Les IUT et les BUT : technologie et professionnalisation

Les Instituts Universitaires de Technologie (IUT) font partie des universités françaises mais proposent des formations technologiques professionnalisantes spécifiques. Depuis la réforme de 2021, les formations de trois ans dans les IUT sont sanctionnées par le Bachelor Universitaire de Technologie (BUT), remplaçant les anciens DUT (Diplôme Universitaire de Technologie) de deux ans.

Le BUT est une formation de 180 crédits ECTS (Bac+3) qui combine des enseignements théoriques, des travaux pratiques et des projets professionnels, avec un parcours d'alternance possible. Il prépare à des métiers techniques et professionnels précis dans des domaines variés : Génie Civil, Réseaux et Télécommunications, Techniques de Commercialisation, Carrières Juridiques, Informatique, Chimie, Mesures Physiques, et bien d'autres.

Les BUT sont accessibles via Parcoursup, comme les licences universitaires, mais via une sélection qui prend en compte les résultats scolaires et la motivation pour la formation. Le taux d'insertion professionnelle des titulaires de BUT est généralement très élevé, ce qui en fait une voie d'accès rapide et efficace à l'emploi qualifié.

## Les BTS : une formation en deux ans dans les lycées

Le Brevet de Technicien Supérieur (BTS) est une qualification professionnelle de niveau Bac+2 (120 crédits ECTS), dispensée dans les lycées professionnels et technologiques ayant une section de technicien supérieur. Contrairement aux BUT et aux licences, les BTS sont très directement professionnalisants — chaque BTS est associé à un métier ou un secteur professionnel précis — et privilégient une pédagogie par projets et mises en situation professionnelle.

Le BTS n'est pas équivalent à une licence — son niveau est inférieur (Bac+2 contre Bac+3) — mais son taux d'insertion professionnelle immédiate est souvent supérieur, notamment dans les secteurs du commerce, de la logistique, de l'informatique de gestion, de la communication visuelle et de nombreux secteurs de services.

Pour les étudiants internationaux, le BTS est une voie d'accès rapide à une qualification professionnelle française reconnue, potentiellement moins exigeante linguistiquement dans sa première phase que certains cursus universitaires, et qui permet ensuite une poursuite d'études en licence professionnelle ou en BUT pour atteindre le niveau Bac+3.

## Les spécificités des formations en santé

Les formations de santé (médecine, pharmacie, odontologie, maïeutique) occupent une place à part dans l'architecture du système universitaire français. Elles sont dispensées dans les UFR (Unités de Formation et de Recherche) de santé des universités possédant une faculté de médecine et sont soumises à des règles d'accès spécifiques.

Depuis la réforme PASS-LAS de 2020, l'accès aux études de médecine, pharmacie, odontologie et maïeutique ne passe plus par une PACES (Première Année Commune aux Études de Santé) unique et éliminatoire, mais par deux voies complémentaires. Le PASS (Parcours Accès Spécifique Santé) est une première année à option santé dans la filière souhaitée, avec une mineure dans une autre discipline. La LAS (Licence avec Accès Santé) est une licence classique (droit, sciences, langues) avec une option santé permettant de candidater aux études de santé après la L1, la L2 ou la L3. Ces deux voies donnent accès à un nombre de places limité en deuxième année de médecine (DFGSM2) après vérification du niveau et sélection, remplaçant le numerus clausus par un numerus apertus modulable en fonction des besoins de santé régionaux.
`;

const L8 = `# Parcoursup et MonMaster : Comment Candidater Étape par Étape

Les plateformes Parcoursup et Mon Master constituent les deux portes d'entrée officielles de l'enseignement supérieur français pour les formations les plus demandées. Parcoursup, lancé en 2018, gère les candidatures en première année de licence, de BTS, de BUT, de CPGE et d'autres formations post-bac. Mon Master, lancé en 2023, centralise les candidatures aux masters sélectifs. Comprendre le fonctionnement de ces plateformes, leurs calendriers et leurs exigences est une condition préalable à toute candidature réussie en France.

## Parcoursup : la plateforme des formations post-bac

Parcoursup est un service national de pré-inscription dans les formations du premier cycle de l'enseignement supérieur public et privé sous contrat. Toutes les formations publiques accessibles après le baccalauréat y sont référencées, à l'exception de quelques formations très spécifiques qui conservent leurs propres procédures d'accès.

Le calendrier annuel de Parcoursup suit une progression en plusieurs phases. La phase d'information s'ouvre généralement en décembre-janvier, permettant aux futurs candidats de consulter les formations disponibles, leurs critères d'admission et les taux de sélectivité de l'année précédente. La phase de formulation des vœux ouvre en janvier et se ferme en mars — pendant cette période, les candidats saisissent leurs vœux de formation (jusqu'à 10 vœux) et leurs vœux d'établissements secondaires (jusqu'à 10 vœux de groupes). La phase d'admission (réponses des établissements) s'ouvre en juin et se déroule en plusieurs vagues successives jusqu'à septembre, en fonction des places disponibles et de l'ordre de préférence des établissements.

Pour les étudiants étrangers résidant en France (ayant un numéro INE, l'identifiant national étudiant attribué au lycée) ou souhaitant intégrer une licence depuis l'étranger dans le cadre d'un parcours déjà commencé en France, Parcoursup est la voie normale. Pour les étudiants étrangers résidant à l'étranger et souhaitant commencer des études en France, la procédure Études en France via Campus France est la voie complémentaire obligatoire pour les ressortissants de certains pays.

## Construire un dossier Parcoursup convaincant

Chaque vœu sur Parcoursup s'accompagne d'un dossier comprenant les bulletins scolaires des classes de première et terminale, les appréciations des professeurs et un projet de formation motivé (PFM). Le PFM est l'élément le plus personnalisé du dossier : c'est un texte court (1 500 caractères maximum) dans lequel le candidat explique pourquoi il souhaite rejoindre cette formation précise, quels sont ses motivations et ses projets, et en quoi son profil correspond aux attendus de la formation.

Rédiger un PFM convaincant pour chaque formation demandée est un travail de personnalisation qui ne peut pas être copié-collé d'une formation à l'autre — les commissions de lecture remarquent immédiatement les textes génériques et les valorisent peu. Un PFM efficace identifie les spécificités de la formation visée (un enseignant reconnu dans un domaine, un projet pédagogique innovant, une approche professionnalisante spécifique), explique en quoi ces spécificités correspondent au projet concret du candidat, et démontre une connaissance réelle de la formation au-delà de ce qui est visible en surface.

## Mon Master : la plateforme des masters sélectifs

Mon Master est la plateforme nationale créée en 2023 pour centraliser les candidatures aux formations de master sélectives. Avant sa création, chaque université gérait ses propres calendriers et procédures de candidature, conduisant à une fragmentation qui pénalisait les candidats — notamment les étudiants internationaux moins familiers avec le paysage des masters français.

La plateforme Mon Master recense les masters sélectifs de toutes les universités publiques françaises (et de nombreux établissements privés sous contrat). Les formations y sont accessibles par domaine et sous-domaine disciplinaire, avec des informations sur les contenus, les débouchés, les taux de sélection et les modalités de candidature spécifiques à chaque programme.

Le calendrier de candidature sur Mon Master suit deux grandes phases. La première phase s'ouvre généralement en février-mars pour les masters de rentrée de septembre, avec une période de candidature de quatre à six semaines. Les résultats de la première phase sont communiqués en avril-mai. Une seconde phase de régularisation permet aux candidats non admis en première phase de postuler à des places restantes en juin-juillet.

## Les critères de sélection des masters

Contrairement à Parcoursup pour les licences, où la sélection repose principalement sur le dossier scolaire et le projet de formation, la sélection en master prend en compte une diversité de critères qui reflètent le niveau académique et professionnel attendu à l'entrée d'une formation de deuxième cycle.

Les principaux critères utilisés par les masters sélectifs sont la performance académique en licence (mentions, notes dans les matières du domaine, progression), la cohérence du parcours avec les attendus du master (notamment pour les masters professionnels très spécialisés), les expériences extra-académiques pertinentes (stages, projets collaboratifs, publications, engagement associatif en lien avec le domaine), les lettres de recommandation d'enseignants ou de professionnels, et la qualité du projet de formation et de recherche exprimé dans la lettre de motivation.

Pour les étudiants étrangers, un critère supplémentaire est souvent la maîtrise de la langue d'enseignement (généralement le français, sauf pour les masters en anglais). Une attestation de niveau B2-C1 en français (DALF, TCF) peut être requise ou fortement recommandée.

## Les entretiens de sélection en master

Certains masters très sélectifs complètent l'examen du dossier écrit par des entretiens individuels ou collectifs avec des candidats présélectionnés. Ces entretiens évaluent la cohérence du projet professionnel, la personnalité du candidat, sa capacité à argumenter ses choix et à répondre à des questions sur le domaine disciplinaire ou professionnel visé.

La préparation à ces entretiens nécessite une connaissance approfondie de la formation visée (programme, équipe pédagogique, débouchés, recherches en cours dans le laboratoire associé), une formulation claire et convaincante du projet professionnel personnel, et la capacité à répondre à des questions potentiellement pointues sur le domaine disciplinaire. Des questions classiques comme «Pourquoi ce master et pas un autre ?», «Comment votre parcours vous ayant conduit à cette candidature ?» ou «Où vous voyez-vous dans cinq ans ?» méritent une réflexion préalable sérieuse.

## Les recours en cas de refus

Si votre candidature est refusée en première et en deuxième phase de Mon Master, vous disposez d'un dispositif de recours. En 2023, la loi a établi que tout candidat ayant obtenu une licence et n'ayant pas été admis dans un master de son choix peut déposer un recours auprès du recteur d'académie, qui dispose d'un pouvoir d'injonction pour forcer l'admission dans une formation adaptée au profil du candidat. Ce recours est un filet de sécurité qui garantit que tout diplômé de licence peut accéder à une formation de master — même si ce n'est pas nécessairement le master de premier choix.

Ce droit au recours est particulièrement important pour les étudiants étrangers qui ont besoin de justifier d'une inscription dans une formation pour le renouvellement de leur titre de séjour. Il garantit qu'un étudiant motivé et qualifié ne se retrouve pas sans solution de formation après sa licence.
`;

await patch('28169f27-de81-47cb-995b-b1f89aa9b9c3', L5);
await patch('aaa8ee5c-c7c9-4264-a061-29eea0adc297', L6);
await patch('c7d769eb-22d9-4d69-bc52-4261b428b47a', L7);
await patch('c97fea4d-3d2d-4b1d-a5b7-3d4bde406dfa', L8);
