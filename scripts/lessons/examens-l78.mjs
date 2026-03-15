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

const L7 = `# Aménagements pour Étudiants Internationaux et en Situation de Handicap

L'université française s'est progressivement dotée, au cours des dernières décennies, d'un cadre réglementaire et de services institutionnels destinés à garantir l'égalité des chances entre tous les étudiants lors des évaluations académiques. Deux catégories d'étudiants bénéficient de dispositifs d'aménagement particulièrement développés : les étudiants en situation de handicap — qu'il soit physique, sensoriel, moteur, psychique ou cognitif — et, dans une moindre mesure formelle mais non moins réelle, les étudiants internationaux qui font face à des barrières linguistiques, culturelles et pédagogiques spécifiques. Cette leçon vous guide à travers les dispositifs disponibles, les procédures pour y accéder, et les stratégies pour en tirer le meilleur parti.

## Les aménagements pour les étudiants en situation de handicap

La loi du 11 février 2005 pour l'égalité des droits et des chances des personnes handicapées a profondément transformé le paysage de l'accessibilité dans l'enseignement supérieur français. Elle établit le principe d'une compensation individuelle des désavantages liés au handicap, appliqué à tous les aspects de la vie universitaire : accessibilité physique des locaux, accès aux supports pédagogiques, et adaptation des conditions d'évaluation.

Le tiers-temps supplémentaire est l'aménagement le plus courant accordé aux étudiants en situation de handicap. Il consiste à majorer d'un tiers la durée de l'épreuve : un examen de deux heures devient trois heures pour l'étudiant bénéficiaire. Pour certains handicaps plus sévères, la majoration peut être plus importante (mi-temps supplémentaire, voire durée doubléé). Ce temps additionnel vise à compenser les difficultés de traitement de l'information, de motricité fine lors de l'écriture, de concentration ou de gestion du stress liées à la situation de handicap.

Au-delà du tiers-temps, les aménagements peuvent inclure l'accès à une salle d'examen séparée ou à très faible effectif pour les étudiants qui ont besoin d'une stimulation réduite (trouble du spectre autistique, troubles anxieux sévères), l'utilisation d'un ordinateur pour la rédaction (pour les étudiants souffrant de troubles de l'écriture ou de troubles moteurs), l'agrandissement des documents d'examen (pour les déficiences visuelles), une aide humaine (secrétaire lecteur-scripteur pour les étudiants qui ne peuvent physiquement ni lire ni écrire), ou l'accès à des matériaux spécifiques (clavier adapté, synthèse vocale, loupe électronique).

Les diagnostics médicaux qui ouvrent le plus fréquemment droit à ces aménagements dans l'enseignement supérieur sont les troubles DYS (dyslexie, dysorthographie, dyspraxie, dyscalculie), les troubles du spectre autistique (TSA), les troubles déficitaires de l'attention avec ou sans hyperactivité (TDAH), les troubles anxieux et dépressifs reconnus, les handicaps moteurs, les déficiences visuelles et auditives, et les maladies chroniques invalidantes (épilepsie, diabète de type 1 instable, maladies auto-immunes).

Pour bénéficier de ces aménagements, l'étudiant doit déposer une demande auprès du service dédié de son université — généralement appelé SUEH (Service Universitaire des Étudiants en situation de Handicap), SUMPPS (Service Universitaire de Médecine Préventive et de Promotion de la Santé) ou département Handicap selon les établissements. La demande doit être accompagnée d'une documentation médicale établissant le diagnostic et les limitations fonctionnelles. Le médecin désigné par l'université (et non votre médecin traitant, dans de nombreux cas) évalue le dossier et formule les recommandations d'aménagement qui sont ensuite transmises aux services d'examen. Ce processus prend du temps : il est impératif de déposer votre dossier en début d'année académique, idéalement avant la fin du mois d'octobre pour les examens du premier semestre.

## Les aménagements pour les étudiants internationaux

Contrairement aux aménagements pour le handicap, qui sont codifiés dans un cadre légal national, les dispositifs d'aide aux étudiants internationaux lors des examens sont moins formalisés et varient davantage selon les établissements et les composantes. Il n'existe pas de «droit au tiers-temps pour les non-francophones», mais certains établissements proposent des mesures d'accompagnement spécifiques.

Dans un nombre croissant d'universités, les étudiants non francophones (dont le français n'est pas la langue maternelle et qui sont nouvellement arrivés en France) peuvent être autorisés à utiliser un dictionnaire bilingue (langue maternelle-français) lors de certaines épreuves écrites, sous réserve de l'accord exprès de l'enseignant et du règlement de la composante. Cette mesure vise à évaluer la maîtrise des contenus académiques plutôt que la seule compétence en français, et à éviter qu'un étudiant parfaitement compétent sur le fond soit pénalisé uniquement par une barrière lexicale.

Des sessions de familiarisation avec les formats d'examens utilisés en France (dissertation, commentaire de texte, cas pratique) sont proposées par certains services de soutien linguistique ou par les centres d'aide à la réussite. Ces sessions sont particulièrement précieuses pour les étudiants qui arrivent d'un système éducatif privilégiant d'autres formes d'évaluation (QCM, dissertation à l'américaine, exposés oraux dominants). Certains établissements proposent également des cours de «méthodologie universitaire en français» spécifiquement conçus pour les étudiants allophones de master.

## La procédure de demande d'aménagement : étapes et calendrier

La demande d'aménagement, qu'elle concerne un handicap ou une situation particulière, suit un processus en plusieurs étapes dont la chronologie est critique.

La première étape est la prise de contact avec le service compétent de l'université, idéalement lors des journées d'accueil ou dans les premières semaines du semestre. Ce contact permet d'identifier les documents à fournir, les délais de la procédure et les interlocuteurs à mobiliser.

La deuxième étape est la constitution du dossier : formulaire de demande, pièce d'identité, documentation médicale ou justificatifs de la situation particulière. Pour les situations de handicap, le certificat médical doit souvent être établi par un médecin spécialisé (neuropsychologue pour les troubles DYS, psychiatre pour les troubles psychiques, médecin de l'université).

La troisième étape est l'instruction du dossier par le service concerné et la notification officielle des aménagements accordés. Cette notification est un document officiel que vous devez conserver et présenter aux surveillants d'examen. Sans cette notification officielle, aucun surveillant n'est en mesure de vous accorder des aménagements non standards, même si vous justifiez verbalement de votre situation.

La quatrième étape, souvent oubliée, est la transmission de la notification aux secrétariats pédagogiques des composantes où vous suivez des cours. En effet, la logistique des aménagements (convocation dans une salle spécifique, matériel spécial) doit être organisée à l'avance par les services d'examen, qui ont besoin d'un délai minimum — souvent deux semaines avant l'épreuve.

## Ce que les aménagements ne couvrent pas

Si les aménagements d'examens visent à créer des conditions équitables, ils ne modifient ni les contenus évalués ni les critères de notation. Un étudiant bénéficiant du tiers-temps ne reçoit pas un sujet allégé : il a simplement plus de temps pour traiter le même sujet que ses camarades. Les exigences académiques fondamentales — maîtrise des contenus, capacité d'argumentation, qualité de la production écrite ou orale — restent identiques pour tous les étudiants.

Il est donc important de ne pas considérer les aménagements comme un substitut à la préparation académique. Le tiers-temps aide un étudiant dyslexique à avoir suffisamment de temps pour produire un texte correctement relu et organisé — mais il ne remplace pas la maîtrise du cours et la capacité à construire un argument. La préparation reste l'investissement le plus déterminant dans la réussite académique, avec ou sans aménagement.

## Ressources d'accompagnement complémentaires

Au-delà des services institutionnels, un écosystème de ressources d'accompagnement complémentaires existe pour les étudiants en situation de handicap et les étudiants internationaux. Les associations étudiantes de handicap proposent des groupes de pairs, des partages de pratiques et parfois des ressources documentaires adaptées. Les centres de ressources pour l'intégration des personnes handicapées (CRIP) dans certaines régions offrent des formations spécifiques aux outils d'aide technologique à la lecture et à l'écriture. Pour les étudiants internationaux, les associations culturelles et les communautés d'étudiants de mêmes origines constituent souvent un réseau de soutien informel précieux, où s'échangent des conseils pratiques sur la navigation du système universitaire français.

Les tuteurs pairs et les plans d'aide à la réussite, en complément des aménagements officiels, constituent des leviers d'amélioration académique que tout étudiant qui se sait en difficulté devrait solliciter sans hésitation.
`;

const L8 = `# Stress, Gestion du Temps et Santé Mentale pendant les Examens

La période des examens dans les universités françaises génère une pression psychologique intense que beaucoup d'étudiants sous-estiment dans leurs préparations. Cette pression a des causes multiples et souvent cumulatives : l'enjeu académique des UE à valider, la compétition implicite entre pairs, les attentes personnelles et familiales, l'isolement potentiel des étudiants étrangers loin de leur réseau affectif habituel, et la simultaneité de plusieurs examens dans un calendrier resserré. Savoir gérer ce stress, organiser son temps de façon efficace et prendre soin de sa santé mentale ne sont pas des luxes mais des compétences académiques à part entière, aussi importantes que la maîtrise des contenus de cours.

## Comprendre le stress d'examen : mécanismes et manifestations

Le stress d'examen est une réponse psychophysiologique normale face à une situation à enjeu perçu comme élevé. À des niveaux modérés, il est fonctionnel : il maintient la vigilance, favorise la concentration et mobilise les ressources cognitives et physiques nécessaires à une performance optimale. Au-delà d'un certain seuil, il devient contre-productif : il altère la mémoire de rappel, perturbe la pensée systématique, génère de l'hésitation et de l'impulsivité, et peut produire des crises d'angoisse qui rendent impossible la passation sereine de l'épreuve.

Les manifestations physiologiques du stress d'examen sont bien documentées. L'accélération du rythme cardiaque, la transpiration, les tremblements, les nausées, les maux de tête et les troubles du sommeil sont des signes courants d'un niveau de stress élevé. Pour les étudiants étrangers qui affrontent en plus le stress linguistique de l'examen en langue seconde, ces manifestations peuvent être amplifiées. Reconnaître ces signaux comme des réponses normales à une situation de stress — et non comme des signes d'incompétence ou d'incapacité — est la première étape d'une gestion efficace.

## Les causes spécifiques du stress chez les étudiants internationaux

Les étudiants étrangers font face à des sources de stress supplémentaires spécifiques à leur situation qui méritent d'être nommées explicitement pour être mieux gérées.

La barrière linguistique génère un stress cognitif permanent : répondre à une question de cours en langue étrangère mobilise simultanément la mémoire des contenus et la construction syntaxique, ce qui divise l'attention et ralentit le traitements. Lors d'un examen chronométré, ce double effort peut se traduire par un sentiment de lenteur frustrante malgré une excellente maîtrise du cours.

L'éloignement du réseau de soutien habituel (famille, amis proches) prive l'étudiant étranger des tampons affectifs qui absorbent naturellement le stress dans la vie quotidienne. La solitude du samedi soir avant un examen du lundi matin est une réalité pour beaucoup d'étudiants internationaux qui ne savent pas encore qui appeler pour parler de leur anxiété.

Le poids des attentes familiales et nationales est souvent plus présent chez les étudiants étrangers, dont les familles ont souvent consenti à d'importants sacrifices financiers pour financer les études en France. La peur de décevoir peut générer un perfectionnisme paralysant où l'étudiant préfère ne pas commencer à rédiger plutôt que de risquer de produire quelque chose d'imparfait.

## La gestion du temps de révision : construire un calendrier de préparation

Organiser efficacement son temps de révision est la mesure pratique la plus déterminante pour réduire le stress d'examen. Un étudiant qui commence à réviser très tardivement (la semaine précédant les examens) se retrouve dans une situation de surcharge impossible à gérer sereinement. Un étudiant qui planifie ses révisions sur les trois à cinq semaines précédant la session peut aborder les examens avec une préparation solide et un stress gérable.

Construire un calendrier de révision commence par trois actions : lister toutes les UE à réviser avec leur date d'examen respective, estimer le volume de travail nécessaire pour chacune (selon la densité du cours, votre niveau actuel de maîtrise et les exigences spécifiques du format d'examen), et distribuer ce volume de travail dans les semaines disponibles en commençant par les matières les plus éloignées ou les plus difficiles.

Un principe fondamental de la psychologie de l'apprentissage est la répartition de la pratique dans le temps (distributed practice). Il est bien plus efficace de réviser une matière en cinq sessions d'une heure réparties sur cinq jours que d'y consacrer cinq heures d'une seule traite. La répétition espacée consolide les traces mémorielles de façon beaucoup plus durable que la révision intensive de dernière minute (le «bûchage»), qui produit une mémoire à court terme rapidement oubliée après l'examen.

Les sessions de travail efficaces durent généralement entre 45 minutes et une heure trente avant qu'une pause soit nécessaire. La technique Pomodoro (25 minutes de travail concentré / 5 minutes de pause) est une approche structurée qui convient bien à certains esprits. Après quelques sessions, une pause plus longue (20-30 minutes) est recommandée. Travaillez dans un environnement facilitant la concentration : calme ou bruit de fond neutre (musique instrumentale sans paroles), sans téléphone accessible, avec le matériel nécessaire à portée.

## Les stratégies de révision efficaces

Recopier ses notes est l'une des méthodes de révision les moins efficaces selon les recherches en sciences cognitives, même si elle procure un sentiment subjectif de travail accompli. Les méthodes qui génèrent un apprentissage durable sont celles qui impliquent une récupération active de l'information et une elaboration (connexions entre les idées, reformulation, application).

La récupération active consiste à chercher à rappeler l'information de mémoire sans regarder ses notes : se poser des questions, rédiger un résumé de chapitre sans support, expliquer un concept à voix haute comme si vous l'enseigniez à quelqu'un. Chaque fois que vous récupérez une information de mémoire, vous renforcez la trace mémorielle de façon plus efficace que si vous la relisiez passivement.

Les schémas conceptuels (mind maps) et les tableaux de synthèse sont des outils de mise en ordre des connaissances qui facilitent la visualization des liens entre les concepts et aident à construire une vision d'ensemble cohérente — essentielle pour les examens de dissertation où l'on doit mobiliser rapidement des connaissances structurées autour d'une problématique.

La réalisation de sujets d'entraînement dans les conditions réelles (durée chronométrée, sans support) est la méthode de préparation la plus proche de la réalité de l'examen. Pour les examens terminaux, essayez de faire au moins un sujet complet en conditions réelles dans les deux semaines précédant l'examen. Cet exercice vous permet d'identifier vos lacunes réelles, d'évaluer votre gestion du temps et de vous entraîner à la production sous contrainte.

## Prendre soin de sa santé physique et mentale pendant les examens

La santé physique est directement corrective des capacités cognitives. Le sommeil est le facteur le plus critique : une nuit de sommeil insuffisant (moins de 7 heures) réduit significativement les capacités de mémoire, de concentration et de raisonnement le lendemain. La stratégie de réviser toute la nuit avant un examen est contre-productive dans la grande majorité des cas : le gain marginal de quelques heures de révision supplémentaires ne compense pas la perte de performance cognitive liée à la privation de sommeil.

L'alimentation pendant les périodes d'examen a également un impact concret sur les performances cognitives. Un petit-déjeuner ou un repas équilibré avant une épreuve stabilise la glycémie et évite les baisses d'énergie en milieu d'épreuve. Évitez la caféine en excès, qui amplifie le stress et perturbe le sommeil.

L'activité physique régulière — même 30 minutes de marche rapide ou de sport léger par jour — réduit significativement les niveaux d'anxiété et améliore la qualité du sommeil. Dans l'urgence des examens, beaucoup d'étudiants abandonnent toute activité physique pour «gagner du temps». C'est souvent une erreur : le temps investi dans un exercice physique quotidien est récupéré plusieurs fois sous forme de meilleure concentration et de moins de temps perdu à se battre contre l'anxiété paralysante.

Les ressources de soutien psychologique des universités (service de santé universitaire, psychologues, infirmiers) sont accessibles à tous les étudiants, gratuitement et de façon confidentielle. Si vous ressentez une détresse psychologique significative pendant la période des examens, n'attendez pas que la situation se détériore avant de consulter.

## Le jour de l'examen : gestion pratique et mentale

La veille de l'examen, préparez votre matériel (stylos, pièce d'identité, matériaux autorisés), vérifiez l'heure et le lieu de l'examen, et allez vous coucher à une heure raisonnable. Faire une dernière lecture légère (pas une révision intensive) pour consolider les grandes lignes du cours est acceptable; réviser en profondeur jusqu'à minuit est contre-productif.

Le matin de l'examen, arrivez au moins 15 à 20 minutes à l'avance pour vous installer calmement, sans la précipitation qui amplifie le stress. Si vous avez tendance à l'anxiété situationnelle, emportez une petite bouteille d'eau fraîche et prenez quelques respirations profondes (inspiration sur 4 temps, rétention sur 2, expiration lente sur 6 temps) pour activer le système nerveux parasympathique avant l'entrée en salle.

Pendant l'épreuve, si vous vous sentez bloqué sur une question, passez à la suivante plutôt que de rester immobile. Revenir sur une question difficile après avoir traité les autres donne souvent de nouvelles perspectives et libère l'anxiété liée au blocage. La gestion active du temps pendant l'épreuve — surveiller régulièrement la durée restante et ajuster votre rythme en conséquence — est une habitude à cultiver dès les premiers examens de votre cursus universitaire.
`;

await patch('4f448018-2528-4570-9038-1abcbe1be9b6', L7);
await patch('201a89fd-1685-4864-b756-6524941dadc8', L8);
