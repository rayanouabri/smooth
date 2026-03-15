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

// L1 — Comprendre les types de visas pour étudier en France (fd79c5b5)
const VISA_L1 = `# Comprendre les types de visas pour étudier en France

Partir étudier en France est un projet qui mobilise des mois de préparation, d'organisation et d'anticipation. Parmi les premières questions que se posent les étudiants étrangers qui envisagent cette aventure, celle du visa occupe une place centrale et souvent source d'inquiétude. Quel document faut-il obtenir ? Quelle est la différence entre les différents types de titres permettant d'entrer et de séjourner en France pour des études ? Combien de temps à l'avance doit-on commencer les démarches ? Ces questions méritent des réponses précises et structurées, car une erreur dans le choix du bon type de visa ou dans la compréhension de ses conditions peut avoir des conséquences lourdes sur le projet d'études. Cette leçon vous guide à travers l'ensemble du système des visas étudiants en France, depuis la distinction fondamentale entre visas de court et de long séjour jusqu'aux subtilités des différents types de titre de séjour pouvant succéder au visa d'entrée.

## La distinction fondamentale : court séjour versus long séjour

La première distinction à maîtriser absolument est celle entre les visas de court séjour et les visas de long séjour. In practice, pour la grande majorité des étudiants étrangers qui viennent passer leur cursus en France, c'est le visa de long séjour qui s'applique — et c'est lui qui ouvre la porte à un séjour de plus de 90 jours sur le territoire français. Mais comprendre pourquoi cette distinction existe et ce qu'elle implique concrètement est la base de toute démarche visa réussie.

Le visa de court séjour, appelé visa Schengen ou visa de type C, est délivré pour des séjours ne dépassant pas 90 jours sur une période de 180 jours dans l'espace Schengen. Il est destiné aux touristes, aux visiteurs en visite familiale, aux personnes assistant à des conférences ou des réunions professionnelles ponctuelles, et à ceux qui souhaitent faire un stage ou une formation très courte. Pour un étudiant qui souhaite suivre une formation linguistique de 6 semaines en été ou participer à un programme académique court, le visa de court séjour peut suffire. Mais pour toute formation qualifiante d'une durée supérieure à 90 jours — une licence, un master, un doctorat, voire une année de préparation linguistique de 10 mois — le visa de long séjour est obligatoire.

Le visa de long séjour, appelé visa de type D, est délivré par les autorités consulaires françaises dans votre pays d'origine ou de résidence. Pour les étudiants, il prend la forme du visa de long séjour valant titre de séjour (VLS-TS), un document particulièrement important dont les caractéristiques seront détaillées plus loin dans cette leçon. Il existe également une variante appelée visa de long séjour temporaire (VLST), utilisé pour des séjours de 4 à 6 mois qui ne nécessitent pas de validation postérieure.

## Le visa de long séjour valant titre de séjour (VLS-TS) : le document clé des étudiants étrangers

Le visa de long séjour valant titre de séjour étudiant, communément désigné par l'acronyme VLS-TS mention «étudiant», est le document de référence pour la quasi-totalité des étudiants non-européens qui viennent étudier en France pour une durée d'un an ou plus. Ce visa est collé dans votre passeport par le consulat français de votre pays et comporte une durée de validité qui correspond à la durée de votre cursus, généralement un an renouvelable.

La particularité essentielle du VLS-TS est contenue dans son nom : il «vaut titre de séjour». Cela signifie que, contrairement à d'autres types de visas qui permettent seulement d'entrer en France, le VLS-TS tient lieu de titre de séjour pour toute la durée de sa validité, à condition d'être validé en ligne dans les 3 mois suivant votre arrivée en France via la procédure OFII (Office Français de l'Immigration et de l'Intégration). Cette validation téléprocédure est une étape administrative obligatoire qui sera détaillée dans une leçon dédiée ; ce qu'il faut retenir ici c'est que le VLS-TS évite en principe de devoir se rendre à la préfecture pour obtenir un titre de séjour lors de la première année de séjour, ce qui représente un allègement administratif considérable par rapport à l'ancien système.

Le VLS-TS étudiant autorise son titulaire à séjourner légalement en France, à s'inscrire dans un établissement d'enseignement supérieur, à bénéficier des droits sociaux associés au statut d'étudiant (sécurité sociale, aides au logement CAF, bourses CROUS), et à travailler en France dans la limite de 964 heures par an (soit environ 20 heures par semaine). Ces droits sont attachés au statut étudiant et non à une autorisation de travail séparée, ce qui simplifie considérablement la situation des étudiants qui souhaitent combiner études et emploi à temps partiel.

## Le visa long séjour temporaire (VLST) pour les séjours de 4 à 6 mois

Pour les étudiants qui viennent en France pour une période de 4 à 6 mois — typiquement dans le cadre d'un semestre d'échange, d'une formation linguistique intensive de longue durée, ou d'un stage de fin d'études — le visa de long séjour temporaire (VLST) est l'option appropriée. Ce visa est distinct du VLS-TS en ce qu'il ne donne pas droit à la validation OFII et ne peut pas être transformé en carte de séjour à son expiration. Il autorise le séjour pour la durée indiquée mais ne permet pas de prolonger le séjour en France au-delà de cette durée sans repasser par une nouvelle procédure consulaire.

Le VLST est particulièrement utilisé pour les étudiants Erasmus ou dans des programmes d'échange bilatéraux qui durent exactement un semestre. Il est souvent réclamé pour les stages de fin d'études de moins de 6 mois qui ne sont pas couverts par un VLS-TS étudiant déjà en cours de validité. Sa procédure d'obtention est similaire à celle du VLS-TS mais plus simple du fait de la durée plus courte et de l'absence de validation OFII par la suite.

## L'absence de visa pour les ressortissants de l'Union européenne et de l'EEE

Les citoyens des États membres de l'Union européenne, de l'Espace Économique Européen (Islande, Norvège, Liechtenstein) et de la Suisse n'ont besoin d'aucun visa pour s'installer et étudier en France. En vertu des traités européens sur la libre circulation des personnes, ces ressortissants peuvent entrer sur le territoire français, s'y installer et y étudier avec leur seule carte nationale d'identité ou passeport national, sans limitation de durée pour les séjours d'études. Ils ne sont pas soumis à la procédure OFII, ne doivent pas demander de carte de séjour (bien qu'ils puissent en demander une à titre optionnel), et bénéficient des mêmes droits que les étudiants français en matière d'inscription universitaire, de sécurité sociale et d'aides sociales sous conditions de résidence régulière.

Cette liberté de circulation est l'un des acquis les plus tangibles de la construction européenne pour les étudiants concernés. Un étudiant espagnol, roumain, ou belge peut décider de venir étudier en France et arriver avec son passeport sans avoir rempli le moindre formulaire consulaire. Pour autant, ces étudiants doivent respecter les obligations d'inscription universitaire, de paiement des frais d'inscription, et de déclaration d'activité qui s'appliquent à tous les étudiants résidant en France.

## Les pays soumis à la procédure Campus France

La procédure d'obtention d'un VLS-TS n'est pas identique pour tous les pays. La France distingue deux grandes catégories de pays pour l'instruction des dossiers étudiants.

Dans une cinquantaine de pays, les candidats aux études en France doivent obligatoirement passer par la procédure «Etudes en France» gérée par Campus France, l'agence française chargée de la promotion des études supérieures françaises à l'étranger. Cette procédure implique de créer un dossier sur la plateforme en ligne dédiée, d'y télécharger les documents requis, de passer un entretien dans le bureau Campus France local, et d'obtenir validation du dossier avant de pouvoir déposer la demande de visa consulaire. Les pays soumis à cette procédure sont principalement les pays d'Afrique subsaharienne, du Maghreb, du Proche-Orient, d'Asie du Sud-Est et d'Amérique latine où les flux d'étudiants vers la France sont les plus importants.

Dans les autres pays, les candidats peuvent déposer leur demande de visa étudiant directement auprès du consulat français ou de son prestataire de services, sans passer par la plateforme Campus France. Cette procédure dite «hors procédure CEF» (Centre pour les Études en France) est accessible aux étudiants de pays où les flux sont moins importants ou dont la France a des accords bilatéraux spécifiques. Les ressortissants de ces pays déposent directement leur dossier visa avec les pièces justificatives habituelles (passeport, justificatif d'admission, justificatif financier, assurance maladie) sans étape préalable sur la plateforme Campus France.

## La carte de séjour temporaire «étudiant» : pour les séjours de plus d'un an

Passée la première année en France, le VLS-TS arrivant à expiration, l'étudiant qui souhaite poursuivre ses études doit entreprendre le renouvellement de son autorisation de séjour sous forme d'une carte de séjour temporaire portant la mention «étudiant». Cette carte, d'un format physique plastifié de la taille d'une carte bancaire, est délivrée par la préfecture du lieu de résidence de l'étudiant pour une durée d'un an renouvelable.

La demande de carte de séjour s'effectue en ligne sur le portail administration numérique pour les étrangers en France (ANEF) — un portail dématérialisé qui a progressivement remplacé les files d'attente en préfecture pour la plupart des titres de séjour depuis 2021. L'étudiant dépose son dossier numérique dans les 2 mois précédant l'expiration de son VLS-TS ou de sa carte en cours, fournit les justificatifs requis (inscription dans un établissement d'enseignement supérieur, justificatif de progression dans le cursus, justificatif de ressources suffisantes, justificatif de logement), et reçoit dans les semaines suivantes un récépissé prouvant que sa demande est en cours d'instruction. Ce récépissé lui permet de continuer à séjourner légalement en France pendant l'instruction du dossier, même après l'expiration du titre précédent.

## Le passeport talent étudiant-chercheur : pour les doctorants et chercheurs

Pour les étudiants qui poursuivent une thèse de doctorat en France ou qui effectuent des travaux de recherche dans le cadre d'une convention d'accueil avec un établissement français, il existe un titre de séjour spécifique plus avantageux que la carte de séjour temporaire «étudiant» ordinaire : la carte de séjour «passeport talent — étudiant-chercheur». Ce titre est délivré pour une durée pouvant aller jusqu'à 4 ans, ce qui évite les renouvellements annuels fastidieux. Il permet également au conjoint du titulaire de bénéficier d'un statut de séjour facilité en tant que «vie privée et familiale» sous certaines conditions.

Pour bénéficier du passeport talent étudiant-chercheur, l'étudiant doit justifier d'une inscription dans une formation de doctorat ou d'une convention d'accueil signée avec un laboratoire de recherche français. Les conditions de ressources sont également vérifiées. Ce titre représente un avantage administratif substantiel pour les doctorants qui entament une thèse de 3 ou 4 ans, leur évitant de renouveler leur titre chaque année pendant toute la durée de leurs travaux.

## Les visas de circulation et les visas pour conférences

En dehors du parcours d'études principal, il existe des types de visas spécialisés que certains étudiants peuvent rencontrer. Le visa de circulation, délivré pour une durée de 1 à 5 ans avec des séjours de 90 jours maximum par entrée, est parfois accordé aux étudiants fréquemment amenés à se déplacer en Europe dans le cadre de leurs études (participation à des colloques, séjours de recherche dans plusieurs universités européennes). Ce visa ne confère pas le droit de résider en France mais facilite les allers-retours réguliers.

Le visa spécifique «jeune professionnel» ou «vacances-travail» existe dans le cadre d'accords bilatéraux entre la France et certains pays (Australie, Nouvelle-Zélande, Canada francophone, Japon, etc.) — il n'est pas strictement un visa étudiant mais certains titulaires l'utilisent en combinaison avec des cours de français. Ce visa spécifique ne se substitue pas au VLS-TS étudiant pour une inscription dans un cursus diplômant.

## Ce que le visa ne garantit pas

Il est important de comprendre clairement ce que le visa n'est pas et ce qu'il ne garantit pas. Un visa étudiant, qu'il soit VLS-TS ou autre, ne garantit pas l'inscription dans un établissement d'enseignement supérieur — c'est l'établissement qui décide de l'admission, indépendamment du visa. Un visa ne garantit pas l'accès aux bourses CROUS — celles-ci font l'objet d'une candidature séparée avec ses propres critères. Un visa n'autorise pas le bénéficiaire à travailler à temps plein — la limitation à 964 heures annuelles reste en vigueur.

Le visa est un droit d'entrée et de séjour sur le territoire français pendant une durée déterminée à des fins spécifiques. Il ouvre des droits et impose des obligations. Le non-respect de ces obligations — travailler au-delà des limites autorisées, ne pas s'inscrire dans l'établissement déclaré, changer de formation sans autorisation — peut entraîner le refus de renouvellement du titre ou des complications administratives qui compromettent la poursuite des études.

## Récapitulatif des différents titres et leur usage

Pour résumer l'ensemble des types de documents qui permettent à un étudiant étranger de séjourner légalement en France pour des études, voici les catégories principales. Le visa de court séjour Schengen (type C) couvre les séjours de moins de 90 jours et convient aux formations très courtes. Le visa long séjour temporaire (VLST) couvre les séjours de 4 à 6 mois dans le cadre d'échanges académiques ou de stages. Le visa long séjour valant titre de séjour étudiant (VLS-TS mention «étudiant») est le document standard pour une année d'études complète, nécessitant validation OFII dans les 3 mois suivant l'arrivée. La carte de séjour temporaire «étudiant» remplace le VLS-TS à partir de la deuxième année et doit être renouvelée annuellement en préfecture. La carte «passeport talent — étudiant-chercheur» est réservée aux doctorants et chercheurs, valable jusqu'à 4 ans. Les ressortissants UE/EEE/Suisse n'ont besoin d'aucun de ces documents et peuvent séjourner librement. Cette cartographie des titres vous permet de situer précisément votre cas et d'identifier le document que vous devrez obtenir selon votre nationalité, votre type de formation et la durée de votre séjour prévu.

## Questions fréquentes sur les types de visas étudiants

**Q : Puis-je convertir un visa de touriste en visa étudiant une fois arrivé en France ?**
Non. Il n'est pas possible, sauf cas très exceptionnels, de changer la nature d'un visa une fois sur le territoire français. Un visa de tourisme vous autorise à rester au maximum 90 jours et ne peut pas être transformé en VLS-TS étudiant depuis la France. Si vous souhaitez étudier en France, vous devez obtenir le bon visa depuis le consulat français de votre pays avant votre arrivée. Des cas de régularisation existent, notamment pour les ressortissants de l'Union européenne ou dans des situations humanitaires exceptionnelles, mais ils sont rares et ne constituent pas une stratégie d'immigration fiable.

**Q : Mon visa mentionne la mention «études» mais pas «étudiant». Est-ce la même chose ?**
Les libellés exacts varient selon les pays et les périodes. Les mentions «études» et «étudiant» sur un visa de long séjour renvoient généralement au même titulaire de droits. Ce qui compte est que votre visa soit bien un visa de type D (long séjour) et que l'objet du séjour indiqué corresponde à des études. En cas de doute, consultez la notice jointe à votre visa ou contactez le service consulaire qui l'a délivré.

**Q : Puis-je travailler avec un visa de court séjour en France ?**
Non. Le visa de court séjour ne donne pas le droit de travailler en France, pas même à temps partiel. Travailler en France sans titre de travail valide, même pour quelques heures, constitue une infraction qui peut avoir des conséquences graves sur votre situation administrative.

**Q : Mon visa est refusé. Que faire ?**
En cas de refus de visa, vous recevez une notification de refus qui doit préciser le ou les motifs du refus. Vous disposez d'un délai pour présenter un recours gracieux auprès du consulat ou un recours contentieux devant le tribunal administratif compétent. Dans la pratique, la voie la plus efficace est souvent de demander une révision du dossier en complétant les pièces manquantes ou en renforçant les justificatifs qui ont motivé le refus, puis de déposer une nouvelle demande lors d'une prochaine fenêtre de candidature. Un avocat spécialisé en droit des étrangers peut vous accompagner dans cette démarche si le refus vous paraît injustifié.

## Ressources officielles

- [france-visas.gouv.fr](https://france-visas.gouv.fr) : Le portail officiel des visas pour la France, avec un simulateur pour déterminer quel visa vous concerne selon votre nationalité et l'objet de votre séjour
- [campusfrance.org](https://www.campusfrance.org) : L'agence pour les études supérieures françaises, avec les informations sur la procédure Campus France selon les pays
- [service-public.fr – Visa étudiant](https://www.service-public.fr/particuliers/vosdroits/N106) : Les informations officielles sur les démarches administratives pour les visas étudiants
`;

// L2 — La procédure Campus France (383d067a)
const VISA_L2 = `# La procédure Campus France et la demande de visa étudiant : étapes et conseils

Obtenir un visa pour venir étudier en France est un processus qui, bien que parfaitement faisable, exige de la méthode, de l'anticipation et une compréhension précise de chaque étape. Pour les étudiants ressortissants des pays soumis à la procédure «Études en France» gérée par Campus France — qui représentent la majorité des étudiants africains, maghrébins, asiatiques et latino-américains qui viennent en France — la démarche commence bien avant le dépôt de la demande de visa au consulat. Elle comprend une phase en ligne sur la plateforme Campus France, un entretien avec un conseiller, et une série de vérifications qui peuvent prendre plusieurs semaines. Cette leçon détaille intégralement cette procédure, depuis la création du dossier en ligne jusqu'à l'obtention du visa et les premières semaines en France.

## Pourquoi la procédure Campus France existe-t-elle ?

Avant de plonger dans le détail des étapes, il est utile de comprendre la logique qui sous-tend cette procédure. Campus France a été créée pour remplir plusieurs fonctions simultanées : promouvoir l'enseignement supérieur français à l'étranger, accompagner les étudiants étrangers dans la construction de leur projet d'études, vérifier la cohérence et la sérieux des projets d'études soumis, et faciliter la communication entre les candidats et les établissements français.

La création de la procédure «Études en France» a répondu à un double besoin : accélérer et simplifier l'instruction des demandes de visa pour les étudiants légitimes, et réduire les demandes de visa mal fondées ou incohérentes. En instaurant un premier niveau de vérification et d'entretien avant même la demande consulaire, la France a cherché à garantir que les étudiants qui arrivent sur le territoire ont un projet d'études solide, les ressources financières nécessaires pour subvenir à leurs besoins, et une véritable intention de poursuivre des études plutôt que d'utiliser le visa étudiant comme vecteur d'immigration à d'autres fins.

## Les pays soumis à la procédure Études en France

La liste des pays où la procédure «Études en France» est obligatoire évolue régulièrement. En 2024-2025, elle s'applique notamment dans les pays suivants (liste non exhaustive) : Algérie, Bénin, Brésil, Burkina Faso, Cameroun, Chine, Colombie, Comores, Congo, Côte d'Ivoire, Djibouti, Égypte, Éthiopie, Gabon, Guinée, Inde, Indonésie, Jordanie, Kazakhstan, Laos, Liban, Macédoine du Nord, Madagascar, Mali, Maroc, Mauritanie, Mexique, Niger, Nigeria, Pakistan, Pérou, Philippines, République Démocratique du Congo, Russie, Sénégal, Soudan, Syrie, Tanzanie, Tchad, Togo, Tunisie, Turquie, Vietnam. Pour les pays non listés, la procédure directe auprès du consulat français s'applique sans passer par Campus France.

Il est impératif de vérifier si votre pays est soumis à cette procédure avant de commencer toute démarche, car un dossier déposé par le mauvais canal peut être refusé ou retardé significativement. La vérification se fait facilement sur le site france-visas.gouv.fr en renseignant votre nationalité et l'objet de votre séjour.

## Étape 1 : La préadmission et la saisie en ligne du dossier Campus France

La procédure Campus France commence par la création d'un compte sur la plateforme en ligne dédiée au pays dans lequel vous êtes résidant. Chaque pays dispose de sa propre interface, accessible depuis le site global de Campus France ou depuis le site de l'espace Campus France local (par exemple «bf.campusfrance.org» pour le Burkina Faso, «ma.campusfrance.org» pour le Maroc, etc.). Les délais d'ouverture de la plateforme varient selon les pays et les sessions : en général, la plateforme pour la rentrée de septembre ouvre en novembre-décembre de l'année précédente.

Sur cette plateforme, vous devez renseigner votre profil académique (diplômes obtenus, notes, établissements fréquentés), vos compétences linguistiques (niveau de français, certifications éventuelles), votre projet d'études en France (formation visée, établissements ciblés), et votre situation administrative et financière. Vous devez également téléverser les pièces justificatives numériques correspondantes : relevés de notes, diplômes, attestations de niveau de langue, relevés bancaires, et tout document pertinent pour étayer votre dossier.

La qualité de remplissage du dossier en ligne est importante : les informations doivent être précises, cohérentes, et les scans des documents lisibles. Un dossier incomplet ou comportant des incohérences sera plus difficile à défendre lors de l'entretien et peut ralentir l'instruction.

## Étape 2 : La demande de préadmission et les vœux d'établissements

Simultanément ou après la création du dossier Campus France, vous devez entrer en contact avec les établissements d'enseignement supérieur français dans lesquels vous souhaitez vous inscrire. Cette démarche est distincte de la procédure visa : il s'agit de la candidature académique proprement dite. Les universités françaises ont leurs propres portails de candidature (souvent via MonMaster pour les masters, parfois via leurs propres plateformes pour les licences et les formations spécifiques). Les écoles d'ingénieurs, les écoles de commerce, les instituts d'études politiques ont leurs propres calendriers et critères d'admission.

Dans la procédure Campus France, vous devez mentionner les établissements auxquels vous avez candidaté ou obtenu une préadmission. Il n'est pas nécessaire d'avoir une admission définitive pour déposer votre dossier Campus France, mais il faut avoir initié des candidatures sérieuses et pouvoir en justifier. Si vous avez déjà une lettre d'admission d'un établissement, elle renforce considérablement votre dossier.

## Étape 3 : L'entretien avec le conseiller Campus France

Après la validation administrative de votre dossier en ligne, vous êtes convoqué à un entretien avec un conseiller Campus France dans les locaux de l'espace Campus France local (souvent hébergé dans une ambassade ou un consulat français, ou dans un institut français). Cet entretien, conduit en français dans la grande majorité des cas, est une conversation formelle de 15 à 30 minutes pendant laquelle le conseiller vérifie la cohérence de votre projet d'études, évalue votre niveau de français à l'oral, et s'assure que vous comprenez les implications administratives et pratiques d'un séjour d'études en France.

L'entretien n'est pas un examen académique ni un interrogatoire. C'est une conversation structurée dont l'objectif est de valider que vous avez un projet réel, une préparation sérieuse, et les moyens de mener à bien vos études. Les conseillers Campus France sont des professionnels formés pour aider les candidats — ils peuvent aussi vous fournir des informations utiles sur la vie étudiante en France, les aides disponibles, et les démarches à entreprendre une fois arrivé.

Préparez-vous à cet entretien en french en révisant votre projet d'études, en sachant expliquer clairement pourquoi vous choisissez la France, pourquoi vous visez les établissements mentionnés dans votre dossier, et comment vous envisagez de financer vos études. Ayez avec vous les originaux des documents que vous avez fournis en version numérique sur la plateforme.

## Étape 4 : La validation du dossier et la lettre Campus France

À l'issue de l'entretien, et après vérification de l'ensemble des documents, le conseiller Campus France statue sur votre dossier. Si le dossier est jugé recevable, vous recevez une lettre de validation Campus France — un document officiel qui atteste que votre candidature a été examinée et validée par Campus France. Cette lettre est indispensable pour passer à l'étape suivante de la procédure visa. Sans elle, le consulat ne peut pas instruire votre demande de visa étudiant.

Si des éléments manquants ou des incohérences ont été relevés lors de l'entretien, vous pouvez être invité à compléter votre dossier. Dans les cas où le projet d'études est jugé insuffisamment cohérent ou les ressources financières insuffisamment démontrées, le dossier peut faire l'objet d'un refus à ce stade, avant même d'atteindre le consulat. Ce refus de Campus France est distinct d'un refus de visa consulaire, mais il en empêche l'instruction.

## Étape 5 : La demande de visa consulaire

Muni de votre lettre Campus France, vous pouvez déposer votre demande de visa auprès du poste consulaire français compétent dans votre pays. La prise de rendez-vous consulaire se fait généralement sur la plateforme france-visas.gouv.fr. Le dossier à déposer lors de ce rendez-vous comprend typiquement les documents suivants : le formulaire de demande de visa dûment rempli et signé, votre passeport en cours de validité (valide au moins 6 mois après la date de fin prévue de votre séjour), des photos d'identité aux normes consulaires, la lettre de validation Campus France, l'attestation d'admission ou de préadmission de votre établissement en France, les justificatifs de ressources financières, l'attestation d'assurance maladie couvrant les premiers mois en France, et le justificatif de logement en France si vous en avez un.

Le montant des frais de visa varie selon les pays et les accords bilatéraux. Pour de nombreux pays africains, des accords de réciprocité permettent des frais réduits ou nuls. Pour d'autres pays, les frais standards de visa de long séjour s'appliquent. Le consulat vous informera du montant exact applicable à votre situation.

## Étape 6 : L'instruction consulaire et les délais à prévoir

Une fois le dossier déposé au consulat, l'instruction peut prendre de 2 semaines à 2 mois selon la période de l'année, le volume de dossiers traités, et la complexité de votre situation. Les périodes de forte demande (de mars à juillet pour la rentrée de septembre) peuvent allonger les délais de traitement. Il est impératif de ne pas attacher de manière irréversible votre date d'arrivée à une date précise avant d'avoir le visa en main : certains candidats réservent des billets d'avion avant d'obtenir le visa, ce qui peut créer des situations difficiles si le visa arrive plus tard que prévu ou si une demande de pièce complémentaire retarde l'instruction.

Le consulat peut demander des pièces supplémentaires en cours d'instruction — une convocation, un document attestant d'une bourse, un justificatif de logement plus récent. Répondez à ces demandes aussi rapidement que possible pour ne pas allonger les délais. Certains consulats proposent un suivi en ligne de l'avancement de l'instruction.

## Calendrier type pour une rentrée en septembre

Pour une rentrée en septembre en France, le calendrier type d'une procédure Campus France bien anticipée ressemble à celui-ci. En novembre-décembre, ouverture de la plateforme Campus France et création du dossier en ligne, simultanément lancement des candidatures auprès des établissements français. En janvier-février, entretien Campus France après validation du dossier en ligne. En mars, réception de la lettre de validation Campus France et dépôt de la demande de visa au consulat. En avril-mai, instruction consulaire et obtention du visa. En juin-juillet, organisation pratique du déménagement, réservation du logement, ouverture d'un compte bancaire à distance si possible. En août-septembre, départ et arrivée en France.

Ce calendrier suppose une anticipation d'environ 9 à 12 mois avant la rentrée souhaitée. Les erreurs d'anticipation sont fréquentes chez les candidats qui commencent les démarches trop tard — en janvier pour une rentrée en septembre, par exemple — et se retrouvent dans la précipitation avec moins de temps pour compléter les documents ou trouver un logement.

## La procédure hors Campus France : les pays non soumis à la procédure CEF

Pour les étudiants des pays non soumis à la procédure Campus France, la démarche est plus directe. Après avoir obtenu une admission ou une préadmission dans un établissement français, vous déposez directement votre demande de visa de long séjour étudiant au consulat ou à l'ambassade de France la plus proche de votre lieu de résidence. Le dossier est similaire à celui décrit ci-dessus, sans la lettre Campus France (qui n'est pas requise dans cette procédure) mais avec tous les autres justificatifs habituels.

Les délais d'instruction varient selon les postes consulaires. Pour certains pays avec des flux d'étudiants plus réduits, les délais peuvent être plus courts — de 10 à 30 jours environ. Pour d'autres postes avec des volumes importants, les délais peuvent s'étirer. Dans tous les cas, vérifiez sur le site du consulat concerné les délais indicatifs et les modalités précises de dépôt (sur place, par courrier, via un prestataire comme VFS Global selon les pays).

## Témoignages sur la procédure Campus France

**Kadidia Traoré, 24 ans, venue du Mali pour un master en développement international** : «La procédure Campus France m'a pris 5 mois en tout. Le plus long a été l'attente après mon dépôt de dossier en ligne. J'ai eu mon entretien en mars et le visa en mai. Mon conseil : soignez particulièrement la rédaction de votre projet d'études sur la plateforme — c'est ce que le conseiller lit avant l'entretien.»

**Ahmed Khalil, 22 ans, venu du Maroc pour une licence de droit** : «J'avais tout préparé en octobre pour partir en septembre l'année suivante. C'était peut-être un peu en avance mais ça m'a évité tout stress. Le plus difficile pour moi a été de rassembler les relevés bancaires de mes parents sur 3 mois — ça prend du temps dans ma ville.»

## Questions fréquentes sur la procédure Campus France

**Q : Faut-il parler couramment français pour réussir l'entretien Campus France ?**
Un niveau convenable de français (B1 minimum) est très fortement recommandé car l'entretien se déroule en général en français. Un niveau insuffisant peut être perçu comme un signal négatif sur la capacité à suivre des études en France. Si votre niveau n'est pas encore B1, envisagez de travailler sérieusement votre français avant l'entretien ou de cibler des formations préparatoires linguistiques qui peuvent justifier un niveau de départ plus modeste.

**Q : Puis-je passer l'entretien Campus France avant d'avoir une lettre d'admission ?**
Oui, dans de nombreux pays, il est possible de passer l'entretien avec des candidatures en cours et sans lettre d'admission définitive, à condition d'avoir des préadmissions ou au moins des candidatures formelles initié es auprès d'établissements. Vérifiez les pratiques spécifiques du bureau Campus France de votre pays car elles peuvent varier.

**Q : La lettre Campus France a-t-elle une durée de validité ?**
Oui, la lettre de validation Campus France est valable pour la session académique pour laquelle elle a été délivrée. Si vous ne partez pas en France lors de cette session et souhaitez partir l'année suivante, vous devrez mettre à jour votre dossier et obtenir une nouvelle lettre pour la nouvelle session.

## Ressources officielles

- [campusfrance.org](https://www.campusfrance.org) : Site officiel de Campus France avec accès à toutes les interfaces par pays
- [france-visas.gouv.fr](https://france-visas.gouv.fr) : Portail officiel des visas, vérification de procédure selon votre nationalité
- [etudiant.gouv.fr](https://www.etudiant.gouv.fr) : Le portail des services pour les étudiants en France
`;

// L3 — Constituer un dossier financier solide (f9d81291)
const VISA_L3 = `# Constituer un dossier financier solide pour un visa étudiant en France

Parmi les conditions requises pour obtenir un visa étudiant en France, la démonstration de ressources financières suffisantes occupe une place déterminante. C'est souvent l'un des aspects les plus anxiogènes de la procédure pour les candidats, non pas parce que les exigences sont irréalistes, mais parce que les règles ne sont pas toujours clairement explicitées et que les types de preuves acceptées peuvent varier selon les consulats. Cette leçon vous guide en détail à travers les exigences financières françaises pour les visas étudiants : quel est le montant minimal requis, quels documents prouvent vos ressources, comment présenter un dossier financier solide et convaincant, et comment gérer les situations où vos finances personnelles ne suffisent pas mais sont complétées par un soutien familial ou une bourse.

## Pourquoi les autorités françaises exigent-elles des preuves financières ?

La France, comme tous les pays délivrant des visas étudiants, exige que les étudiants étrangers démontrent qu'ils disposent de ressources financières suffisantes pour financer leurs études et leur vie quotidienne sans devenir à la charge des services publics français ou recourir à des activités non autorisées par leur visa. Cette exigence remplit une fonction de protection à la fois pour la France et pour l'étudiant lui-même : elle tente de s'assurer que l'étudiant pourra vivre décemment et se consacrer à ses études sans être contraint de travailler illégalement ou de tomber dans la précarité.

L'examen du dossier financier est également un filtre contre les abus du système de visa étudiant : certaines demandes de visa étudiant peuvent masquer des intentions d'immigration économique plutôt que d'études, et une vérification financière rigoureuse contribue à distinguer les véritables projets d'études de ces situations.

## Le seuil minimal de ressources requis

La France n'a pas publié de montant légal unique et universellement obligatoire applicable à tout visa étudiant. Les exigences peuvent varier légèrement selon les consulats et les pays. Mais un consensus pratique s'est établi autour d'un montant minimum de référence généralement aligné sur le seuil du revenu mensuel d'un étudiant autonome en France.

En pratique, le référentiel le plus couramment utilisé est celui du montant mensuel de la bourse d'études de premier niveau du CROUS — environ 300 euros par mois — comme plancher absolu. La plupart des consulats exigent une démonstration de ressources représentant au moins 615 euros par mois (soit environ un demi-SMIC net en France), ce qui est le niveau standard attendu d'un étudiant sans revenus sur le marché locatif parisien. Pour 12 mois d'études, cela correspond à un dossier montrant 7 380 euros disponibles ou garantis. Certains consulats dans des pays avec des régimes de change contrôlés peuvent ajuster ce montant à la situation locale.

Pour les grandes villes comme Paris ou Lyon où le coût de la vie est plus élevé, les consulats peuvent s'attendre à voir des ressources légèrement supérieures — de l'ordre de 700 à 900 euros par mois — pour considérer que l'étudiant peut vivre décemment. Pour des villes universitaires de taille plus modeste, les 615 euros mensuels sont généralement suffisants.

Il est recommandé de consulter directement le site du consulat ou de l'ambassade française de votre pays pour les exigences spécifiques de votre dossier, car elles peuvent différer légèrement de ces références générales.

## Les types de preuves financières acceptées

Les preuves financières acceptées par les consulats français se divisent en plusieurs catégories selon la source des ressources.

Les relevés bancaires personnels constituent la première source. Si vous disposez personnellement de l'argent nécessaire sur votre propre compte bancaire — fonds économisés, revenus de votre propre activité, bourse déjà versée sur votre compte — vous fournissez vos relevés bancaires des 3 à 6 derniers mois. Ces relevés doivent montrer que le montant requis est ou a récemment été disponible sur votre compte, et idéalement que ce solde est stable plutôt que le résultat d'un dépôt unique effectué la veille du rendez-vous consulaire (ce qui est un signal d'alerte pour les services consulaires).

Les relevés bancaires parentaux avec attestation de prise en charge constituent la deuxième source, la plus fréquente pour les étudiants dont les ressources propres sont limitées. Si ce sont vos parents qui financent vos études, vous fournissez les relevés bancaires de leurs comptes (3 à 6 derniers mois), accompagnés d'une attestation sur papier libre signée par eux et certifiée par un notaire ou un organisme officiel local, dans laquelle ils s'engagent formellement à assurer votre entretien financier pendant la durée de vos études en France. Dans certains pays, cette attestation doit être légalisée ou apostillée.

Les justificatifs d'une bourse ou d'une aide financière officielle constituent la troisième source. Si vous avez obtenu une bourse (bourse du gouvernement français, bourse de votre gouvernement national, bourse d'un organisme international comme l'OIF, l'UNESCO, une fondation, etc.), vous fournissez la lettre officielle d'attribution de la bourse précisant le montant, la durée et les modalités de versement. Les bourses du gouvernement français (Eiffel, BGF, MOPGA) et les bourses Campus France ont une valeur particulièrement forte dans un dossier visa. Les bourses de gouvernements étrangers sont également acceptées à condition d'être accompagnées d'une documentation officielle en français ou traduite en français.

Un compte bancaire bloqué ou une garantie bancaire constituent une quatrième option dans certains pays où les restrictions de change rendent difficile de montrer un solde libre important. Certaines banques dans ces pays proposent de délivrer une attestation de blocage d'une somme correspondant aux ressources requises, ou une lettre de garantie bancaire, certifiant que ces fonds sont disponibles et réservés pour financer le séjour de l'étudiant en France.

## Comment présenter un dossier financier convaincant

Au-delà des montants et des types de documents, la présentation et la cohérence du dossier financier sont importantes. Un dossier financier bien construit est un dossier cohérent dans lequel toutes les pièces se renforcent mutuellement et où les chiffres sont transparents et explicables.

Fournissez des relevés bancaires complets et lisibles, avec toutes les pages incluant les informations d'en-tête de compte (titulaire, établissement, numéro de compte). Les relevés tronqués ou illisibles font naître des doutes. Si les relevés comportent des transactions en monnaie locale, pensez à inclure une conversion en euros au cours officiel du jour pour faciliter la compréhension du conseiller consulaire.

Si les fonds proviennent d'une vente récente (bien immobilier, véhicule) ou d'un virement de plusieurs sources, joignez les justificatifs de ces transactions pour expliquer d'où vient l'argent. Un gros virement inexpliqué sur un compte qui était vide la semaine précédente est un signal négatif typique.

Si votre dossier combine plusieurs sources de financement (une partie bourse, une partie soutien parental, une partie épargne personnelle), présentez une synthèse claire montrant comment ces sources additionnées couvrent les besoins estimés pour la durée des études.

## Les bourses et leur impact sur le dossier financier

Une bourse officielle, qu'elle provienne du gouvernement français, d'une institution internationale, ou du gouvernement de votre pays, est le meilleur justificatif financier possible dans un dossier visa étudiant. Elle démontre à la fois les ressources suffisantes et la reconnaissance officielle de la qualité du projet académique de l'étudiant.

La bourse d'excellence Eiffel, délivrée par Campus France pour les masters et les doctorats dans des disciplines prioritaires, est particulièrement valorisée dans les dossiers consulaires. Le programme Erasmus Mundus, qui finance des masters bi-nationaux dans des établissements européens, fournit également une garantie financière strong reconnue par les consulats. Les bourses des gouvernements d'Afrique subsaharienne délivrées via les ministères de l'Éducation nationale (mémorandums, accords bilatéraux) sont également reconnues selon les pays.

Si vous êtes lauréat d'une bourse, faites en sorte que votre lettre d'attribution soit la plus récente possible et qu'elle précise clairement : le montant mensuel ou annuel de la bourse, la durée de la bourse, les coordonnées de l'organisme qui l'octroie, et les conditions de versement. Une lettre vague ou ancienne (de plus d'un an) a moins de valeur qu'une lettre récente et détaillée.

## La lettre de prise en charge par tiers : le cas des garants familiaux ou institutionnels

Lorsque l'étudiant n'a pas personnellement de ressources suffisantes et que ses parents non plus ne peuvent pas montrer les fonds requis sur leur propre compte (ce qui est courant dans de nombreux pays à faible revenu), une troisième option existe : la prise en charge financière par un tiers résidant en France. Ce tiers — souvent un oncle, un cousin, un ami de la famille, ou dans certains cas une organisation, une église ou une association — s'engage formellement à assurer le logement et l'entretien de l'étudiant pendant son séjour.

Dans ce cas, c'est ce tiers qui doit fournir ses propres justificatifs financiers (relevés bancaires, bulletin de salaire, déclaration d'impôts) et signer devant la CAF ou le commissariat une «attestation d'accueil» ou une «attestation de prise en charge et d'hébergement» selon les cas. Cette solution est légale et reconnue par les consulats, mais elle est perçue comme légèrement moins solide qu'une garantie financière directe de la famille de l'étudiant. Elle peut fonctionner si le tiers garant en France dispose de ressources clairement suffisantes et si sa relation avec l'étudiant est explicitée et crédible.

## Les erreurs fréquentes dans les dossiers financiers

Plusieurs erreurs récurrentes affaiblissent les dossiers financiers et peuvent conduire à des refus ou des demandes de pièces complémentaires.

La première erreur est de ne fournir qu'un seul relevé mensuel au lieu des 3 à 6 derniers mois demandés. Un seul relevé ne permet pas d'établir la stabilité des ressources. La deuxième erreur est de fournir des relevés qui montrent un solde insuffisant et d'espérer que le conseiller consulaire sera indulgent. Si les chiffres ne correspondent pas au minimum expected, le dossier sera refusé ou une explication sérieuse sera demandée. La troisième erreur est d'omettre de faire certifier ou légaliser les documents officiels qui nécessitent une apostille selon les pays. Un relevé bancaire qui doit être certifié par la banque ne vaut rien s'il est simplement scanné sans certification. La quatrième erreur est de présenter des relevés en langue locale sans traduction, dans des pays où une traduction en français est requise.

## Ressources et montants indicatifs par type de ville

Pour aider à dimensionner le budget à justifier, voici des ordres de grandeur des besoins financiers mensuels selon les villes, hors bourse et APL :

Dans Paris et les grandes métropoles (Zone I), le budget minimal réaliste est d'environ 900 à 1 200 euros par mois incluant loyer, alimentation, transports et charges courantes. Dans les villes universitaires de taille moyenne (Zone II : Lyon, Bordeaux, Nantes, Strasbourg, etc.), le budget minimal réaliste est d'environ 750 à 950 euros par mois. Dans les villes plus petites (Zone III), le budget peut descendre à 600 à 750 euros par mois tout en permettant de vivre correctement.

Pour un visa, les chiffres à démontrer ne doivent pas nécessairement correspondre à la totalité de ces budgets si une partie est couverte par des aides sociales attendues une fois sur place (APL, bourses CROUS) ou par les revenus d'un emploi étudiant autorisé. Mais ces aides ne peuvent pas être comptabilisées dans le dossier visa car elles ne sont pas encore acquises au moment de la demande. Le dossier financier doit donc idéalement montrer des ressources propres couvrant confortablement les dépenses de vie sans recourir à des revenus non garantis.

## Questions fréquentes sur le dossier financier

**Q : Mes parents ont de l'argent mais pas de compte bancaire formel. Comment le prouver ?**
Cette situation est courante dans certains pays où une part de l'économie reste informelle. Dans ce cas, consultez votre bureau Campus France local qui peut vous orienter vers des alternatives adaptées à la pratique de votre pays. Certains consulats acceptent des attestations notariées de patrimoine, des preuves de propriété immobilière, ou d'autres formes de démonstration de solvabilité lorsque les relevés bancaires classiques ne sont pas disponibles.

**Q : Puis-je compter sur un emploi étudiant en France pour financer mes études dans mon dossier visa ?**
Non. Les revenus d'un emploi étudiant en France ne peuvent pas être présentés comme ressource dans un dossier visa car ils sont hypothétiques au moment de la demande. Un emploi étudiant peut compléter votre budget une fois sur place, mais il ne remplace pas la démonstration de ressources propres existantes.

**Q : Si ma bourse ne couvre que 6 mois, est-ce insuffisant pour un visa d'un an ?**
Pas nécessairement. Si votre bourse couvre les 6 premiers mois et que vous pouvez montrer des ressources personnelles ou familiales pour les 6 mois suivants, le dossier global peut être acceptable. L'essentiel est que la somme totale pour les 12 mois soit couverte d'une manière ou d'une autre par des preuves solides.

## Ressources officielles

- [france-visas.gouv.fr](https://france-visas.gouv.fr) : Le portail officiel des visas pour connaître les exigences spécifiques à votre consulat
- [campusfrance.org – financer ses études](https://www.campusfrance.org/fr/financer-ses-etudes) : Les ressources Campus France sur les aides disponibles pour les étudiants étrangers
- [service-public.fr – preuve de ressources](https://www.service-public.fr/particuliers/vosdroits/N106) : Les informations officielles sur les justificatifs requis
`;

await patch('fd79c5b5-90c0-4dec-bda2-573d63196618', VISA_L1);
await patch('383d067a-e559-4c49-a8f0-043999c4feb4', VISA_L2);
await patch('f9d81291-5c86-4364-8ed7-b3dab5a311e4', VISA_L3);
