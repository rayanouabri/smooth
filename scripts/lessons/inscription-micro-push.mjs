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

// Short targeted additions per lesson: 400-900 words each
const M_L1 = `
## Les cas d'usage de l'attestation ENIC-NARIC dans la vie professionnelle

L'attestation ENIC-NARIC n'est pas seulement utile pour les démarches universitaires. Dans la vie professionnelle française, ce document peut être requis dans de nombreuses situations : candidature à un concours de la fonction publique, demande de reconnaissance professionnelle dans une profession réglementée, négociation d'une classification salariale basée sur le niveau de diplôme, ou validation d'un parcours de formation continue. Conserver précieusement son attestation originale et en faire réaliser plusieurs copies certifiées conformes dès sa délivrance permet d'en disposer rapidement dans tous ces contextes sans avoir à relancer une procédure longue. L'attestation n'a pas de date d'expiration formelle, mais certains employeurs peuvent demander sa mise à jour si elle date de plusieurs années. Dans ces cas, une demande de révision auprès du service ENIC-NARIC est possible, en fournissant les mêmes documents qu'à l'origine pour une procédure accélérée.
`;

const M_L2 = `
## Les implications du statut d'étudiant étranger sur les droits sociaux

Le statut d'étudiant étranger titulaire d'un titre de séjour valide en France ouvre l'accès à un ensemble de droits sociaux qui se complètent et forment un filet de protection significatif. La couverture maladie via la Sécurité sociale est automatiquement rattachée à l'inscription universitaire pour les étudiants moins de 28 ans. Le droit aux APL de la CAF est conditionné au statut de résident régulier en France. Les transports publics subventionnés par les collectivités locales s'appliquent à tous les résidents réguliers. Connaître l'étendue de ces droits et les exercer pleinement permet de réduire significativement le coût réel des études par rapport au coût facial des frais d'inscription et de vie. Un étudiant étranger informé et actif dans ses démarches de droits sociaux peut réduire ses charges effectives de 200 à 500 euros mensuels par rapport à un étudiant qui n'accède à aucune aide faute de les connaître ou de les solliciter.
`;

const M_L3 = `
## Les économies intelligentes sans sacrifier la qualité de vie

L'optimisation budgétaire des études en France ne doit pas se faire au détriment de la qualité de vie et de la santé mentale. Des études menées sur les conditions de vie étudiantes montrent régulièrement qu'une précarité financière excessive est l'un des principaux facteurs de décrochage académique — non pas parce que les étudiants pauvres sont moins capables intellectuellement, mais parce que le stress financier chronique consomme une énergie cognitive et émotionnelle qui n'est plus disponible pour les études. Les économies intelligentes sont celles qui réduisent les dépenses secondaires sans compromettre les conditions nécessaires à la réussite académique. Réduire le budget vêtements (achat en friperies, troc entre étudiants), diminuer les abonnements numériques superflus (une ou deux plateformes de streaming plutôt que cinq), limiter les sorties en soirée aux événements gratuits ou peu coûteux : ces économies marginales cumulées libèrent du budget pour les dépenses qui comptent vraiment — alimentation de qualité, matériel académique nécessaire, activités culturelles enrichissantes.
`;

const M_L4 = `
## Les diplômes étrangers dans le contexte de la mondialisation académique

La mondialisation des études supérieures a profondément transformé le contexte dans lequel s'effectuent les reconnaissances de diplômes étrangers. Là où il fallait auparavant une démarche exceptionnelle pour étudier à l'étranger, la mobilité étudiante internationale est aujourd'hui considérée comme un élément normal et souhaitable d'un parcours de formation. Cette normalisation de la mobilité a poussé les systèmes de reconnaissance à s'améliorer et à s'accélérer, même si des marges de progrès subsistent. Les plateformes numériques d'évaluation des diplômes, les bases de données des systèmes universitaires mondiaux et les accords multilatéraux de reconnaissance facilitent désormais l'évaluation de diplômes de pays et d'établissements qui auraient représenté des zones d'ombre documentaire trop importantes pour être reconnues facilement il y a vingt ans. Pour l'étudiant étranger d'aujourd'hui, ces évolutions se traduisent par des procédures globalement plus rapides et plus prévisibles que celles vécues par les générations précédentes — même si la patience reste nécessaire et les délais parfois inattendus dans certains cas spécifiques.
`;

const M_L5 = `
## L'université française et l'écologie de l'apprentissage

Le concept d'écologie de l'apprentissage désigne l'ensemble des conditions environnementales, sociales et institutionnelles qui facilitent ou entravent l'apprentissage. Dans une université française bien structurée, cette écologie est particulièrement riche : des enseignants qui allient compétence académique et engagement pédagogique, des bibliothèques qui offrent les ressources documentaires nécessaires, des associations qui créent des espaces de socialisation intellectuelle, des services de soutien qui interviennent en cas de difficulté. L'étudiant qui tire pleinement parti de cette écologie n'est pas celui qui se contente d'être présent aux cours et de passer les examens, mais celui qui investit activement dans tous les espaces d'apprentissage disponibles — formels et informels, académiques et associatifs, individuels et collectifs. Cette participation active transforme une simple inscription universitaire en une expérience de formation complète qui prépare à la fois à l'exercice professionnel et à la vie citoyenne.
`;

const M_L6 = `
## Les droits numériques des étudiants et la protection des données

Dans le contexte de la transformation numérique des universités, les étudiants génèrent et transmettent d'importantes quantités de données personnelles — informations administratives, travaux académiques, comportements sur les plateformes pédagogiques. Le RGPD (Règlement Général sur la Protection des Données) européen garantit des droits précis sur ces données : droit d'accès, droit de rectification, droit à l'effacement dans certaines conditions. Les universités françaises sont soumises au RGPD et doivent disposer d'un Délégué à la Protection des Données (DPD) joignable pour traiter les demandes des étudiants concerned par l'utilisation de leurs données. En pratique, les enjeux les plus immédiats pour les étudiants concernent les données stockées dans les plateformes pédagogiques et les résultats académiques — s'assurer que ces données sont correctes et complètes est une démarche de vérification importante à effectuer régulièrement, particulièrement avant la délivrance des diplômes.
`;

const M_L7 = `
## Les opportunités spécifiques pour profils internationaux dans les grandes écoles

Les grandes écoles françaises reconnaissent de plus en plus la valeur des profils internationaux dans leurs promotions. La diversité des origines et des perspectives enrichit la dynamique pédagogique et prépare mieux les diplômés à exercer dans des environnements professionnels mondialisés. Cette reconnaissance se traduit concrètement par des programmes de bourses spécifiques pour les étudiants internationaux, des politiques de recrutement international actif dans les salons éducatifs des pays cibles, et des adaptations pédagogiques pour faciliter l'intégration des étudiants non francophones de naissance. Pour les candidats étrangers qui visent l'intégration dans une grande école française, valoriser explicitement dans leur dossier la dimension internationale de leur profil — expériences dans d'autres pays, maîtrise de plusieurs langues, compréhension interculturelle développée — est une stratégie pertinente qui répond à de vraies attentes des recruteurs de ces établissements.
`;

const M_L8 = `
## L'utilisation des données Parcoursup pour construire une stratégie de candidature optimale

L'analyse des données historiques disponibles sur Parcoursup permet de construire une stratégie de candidature fondée sur des faits plutôt que sur des impressions. Pour chaque formation, la comparaison entre son propre profil (résultats scolaires, type de baccalauréat, lycée d'origine) et le profil médian des admis des années précédentes donne une estimation réaliste des chances d'admission. Cette analyse permet de construire une liste de vœux équilibrée entre formations très accessibles (assurance contre un résultat nul), formations raisonnablement accessibles (probabilité élevée d'admission) et formations très sélectives (objectifs ambitieux à poursuite d'effort maximal). Cette logique de portefeuille, importée du conseil en carrière, maximise l'espérance d'une bonne orientation tout en minimisant le risque de se retrouver sans aucune proposition acceptable.
`;

const M_L9 = `
## Les documents complémentaires demandés après l'admission

Après l'admission sur Parcoursup ou Mon Master, et avant l'inscription administrative définitive, les établissements peuvent demander des documents complémentaires non requis lors de la candidature initiale. Ces demandes de compléments, transmises généralement par email à l'adresse indiquée dans le dossier de candidature, doivent être traitées rapidement — un retard dans la fourniture de documents complémentaires peut conduire à l'annulation de l'admission. Il est donc essentiel de consulter régulièrement l'email de contact utilisé dans le dossier de candidature pendant toute la période d'admission, et de répondre aux demandes dans les délais indiqués. Préparer à l'avance un dossier numérique complet avec tous les documents susceptibles d'être demandés — scans de haute qualité du passeport, des diplômes et relevés, des justificatifs de domicile — permet de répondre à ces demandes en quelques heures plutôt qu'en plusieurs jours.
`;

const M_L10 = `
## Les salles de sport et le bien-être physique sur le campus

Au-delà des bibliothèques et des associations, le campus universitaire propose des équipements sportifs accessibles à tous les étudiants inscrits. Les salles de sport, piscines, terrains de tennis et de basket, parcours de santé font partie des équipements courants dans les grandes universités françaises. L'accès à ces équipements est inclus dans la cotisation au SUAPS (Service Universitaire des Activités Physiques et Sportives), modeste (15-40 euros par semestre en général). La pratique sportive régulière sur le campus est non seulement bénéfique pour la santé physique et mentale, mais elle est aussi un vecteur d'intégration sociale parmi les plus naturels et les plus efficaces. Les étudiants qui participent régulièrement aux activités sportives du SUAPS construisent progressivement des relations avec leurs camarades basées sur un intérêt et une pratique partagés, qui peuvent évoluer en amitiés durables.

## Les jardins et espaces verts du campus comme ressource de bien-être

Les espaces extérieurs du campus — jardins, parcs, espaces verts — constituent des ressources de bien-être sous-exploitées par de nombreux étudiants. La littérature scientifique sur l'impact de l'exposition à la nature sur la santé mentale et les capacités cognitives est convergente : des séjours réguliers dans des espaces verts réduisent le stress, améliorent la concentration et favorisent la créativité. Sur un campus qui dispose d'espaces verts soignés, s'y installer pour lire, réfléchir ou simplement se déconnecter entre deux cours est une pratique de bien-être accessible à coût nul qui contribue à maintenir l'énergie mentale nécessaire pour traverser une année académique exigeante.
`;

const M_L11 = `
## Les certifications professionnelles complémentaires dans le cadre du LMD

En parallèle de leur diplôme universitaire principal, de nombreux étudiants du système LMD acquièrent des certifications professionnelles complémentaires qui renforcent leur employabilité. Les certifications en informatique (bases de données, développement web, administration système), en langues (TOEFL, IELTS, DELF/DALF, HSK), en gestion de projet (PMP, PRINCE2), en comptabilité (DCG, DSCG) sont autant de qualifications valorisables sur le marché du travail qui s'ajoutent au diplôme universitaire. Ces certifications peuvent être préparées pendant les études universitaires, en dehors des cours, comme investissement complémentaire dans l'employabilité. Certaines universités intègrent la préparation à ces certifications dans leur offre de formation continue ou dans leurs centres de ressources en langues, accessibles à tarif étudiant réduit ou gratuitement. La valeur de ces certifications complémentaires est particulièrement significative pour les étudiants étrangers qui souhaitent s'insérer dans le marché du travail français après leurs études — elles signalent une proactivité et une ambition professionnelle qui complètent utilement le diplôme universitaire.
`;

const M_L12 = `
## L'accompagnement psychologique face aux pressions du processus d'admission

Le processus d'admission en enseignement supérieur est une période de forte pression psychologique pour de nombreux candidats. Les enjeux perçus sont importants (l'orientation de plusieurs années d'études), l'incertitude est élevée (les résultats des candidatures sont imprévisibles), et la comparaison sociale est amplifiée par les réseaux sociaux où des candidats partagent leurs admissions en temps réel. Ces facteurs combinés peuvent générer une anxiété significative qui interfère avec le processus de candidature lui-même — un candidat trop anxieux fait des erreurs, prend des décisions précipitées et présente un profil moins authentique que sa valeur réelle. Reconnaître cette pression comme normale et proportionnée aux enjeux — sans la laisser devenir paralysante — est la clé d'une participation sereine au processus. Les ressources de soutien psychologique disponibles dans les lycées et les universités (psychologues scolaires, infirmiers, assistants sociaux) sont précisément là pour accompagner les candidats qui en ont besoin pendant cette période.
`;

await appendAndPatch('8b527cad-23d4-4e1c-8f92-3f7bcf297de0', M_L1);
await appendAndPatch('c0029686-e225-452b-982f-a1cd524ed753', M_L2);
await appendAndPatch('ee522c1c-cd2c-4de5-b984-fc77338212a7', M_L3);
await appendAndPatch('92a088d5-fe7d-4026-b228-a6fc57ce5d2d', M_L4);
await appendAndPatch('28169f27-de81-47cb-995b-b1f89aa9b9c3', M_L5);
await appendAndPatch('aaa8ee5c-c7c9-4264-a061-29eea0adc297', M_L6);
await appendAndPatch('c7d769eb-22d9-4d69-bc52-4261b428b47a', M_L7);
await appendAndPatch('c97fea4d-3d2d-4b1d-a5b7-3d4bde406dfa', M_L8);
await appendAndPatch('0447d045-e377-4184-aa2c-8682c6502843', M_L9);
await appendAndPatch('21a6d3ee-294f-4217-9756-32f874a332f4', M_L10);
await appendAndPatch('c5439dd3-ee75-49a4-b7ab-c11c4dfc1435', M_L11);
await appendAndPatch('b04e269f-0b07-40a2-a16a-fa43d5462e88', M_L12);
