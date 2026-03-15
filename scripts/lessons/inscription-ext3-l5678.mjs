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

const ADD3_L5 = `
## Les événements interculturels : opportunités de découverte mutuelle

Les universités françaises organisent régulièrement des événements à dimension interculturelle qui constituent des occasions privilégiées de rencontres et de découverte mutuelles entre étudiants français et internationaux. Les semaines culturelles thématiques (semaine de l'Afrique, semaine de l'Asie, semaine latino-américaine), les festivals de cinéma international, les concours de gastronomie mondiale, les salons des langues et cultures : ces manifestations, souvent co-organisées par des associations étudiantes et le service des Relations Internationales, créent des espaces de valorisation de la diversité culturelle dans lesquels les étudiants étrangers peuvent partager leur patrimoine culturel plutôt que de le dissimuler.

Ces événements ont une double fonction. Pour les étudiants étrangers, ils offrent un espace de visibilité et de fierté culturelle dans un contexte où l'intégration exige souvent beaucoup d'adaptation et de mise en retrait de sa propre culture. Pour les étudiants français, ils sont une fenêtre ouverte sur des cultures, des gastronomies, des musiques et des arts qu'ils n'auraient pas eu l'occasion de découvrir autrement. Cette fertilisation culturelle mutuelle est l'un des bénéfices les plus précieux et les moins quantifiables de la diversité internationale dans les campus universitaires.

## Le réseau alumni international et ses implications pour la carrière

Au-delà des associations d'anciens élèves nationales, les réseaux internationaux d'alumni représentent des ressources précieuses pour les étudiants étrangers qui envisagent de retourner dans leur pays d'origine après leurs études françaises. Les anciens élèves d'universités françaises installés dans votre pays d'origine constituent un réseau de personnes qui partagent votre référence culturelle franco-académique et qui peuvent faciliter votre insertion professionnelle dans le pays.

Les associations d'anciens élèves françaises à l'étranger (la plupart des grandes universités et grandes écoles ont des associations alumni dans les principaux pays) organisent des événements réseau et des rencontres entre diplômés. Rejoindre ces associations avant même de terminer vos études en France est une démarche proactive qui facilite la construction de ponts entre votre formation française et votre marché professionnel de destination.

## L'accueil des étudiants internationaux et le rôle du bureau RI

Le bureau des Relations Internationales (RI) est l'interlocuteur institutionnel central pour tous les aspects de la vie universitaire spécifiques aux étudiants étrangers. Au-delà de la gestion des procédures d'admission et des échanges Erasmus, ce service organise les dispositifs d'accueil et d'intégration des nouveaux arrivants : journées d'orientation spécifiques aux étudiants étrangers, attribution de tuteurs ou de parrains étudiants, organisation de visites pratiques des services du campus, mise en relation avec des associations d'étudiants compatriotes.

Le bureau RI est également votre premier interlocuteur pour les problèmes liés au séjour : questions sur le renouvellement du titre de séjour, aide pour compléter les dossiers administratifs, intervention auprès des services préfectoraux en cas de difficultés. Certains bureaux RI disposent de conseillers spécialisés sur les questions d'immigration étudiante qui peuvent faire gagner un temps précieux dans les démarches.

## L'intégration professionnelle par les stages et l'alternance

L'intégration professionnelle en France commence bien avant la fin des études, via les stages et les contrats d'alternance. Pour les étudiants étrangers qui souhaitent rester travailler en France après leurs études, chaque stage représente une opportunité de démontrer ses compétences à des employeurs potentiels, de construire un réseau professionnel local et d'acquérir la culture d'entreprise française de l'intérieur.

Les stages obligatoires dans les cursus universitaires (généralement de deux à six mois selon la formation) sont encadrés par des conventions de stage tripartites entre l'étudiant, l'entreprise d'accueil et l'université. Ces conventions protègent l'étudiant et lui garantissent une indemnité légale minimale (généralement 3,90 euros par heure de stage en 2024). Les stages sont une composante pédagogique à prendre au sérieux pour le double bénéfice académique (validation d'UE, rédaction d'un rapport qui est évalué) et professionnel qu'ils apportent.
`;

const ADD3_L6 = `
## Les droits, obligations et responsabilités de l'étudiant inscrit

L'inscription administrative confère des droits mais aussi des obligations et des responsabilités à l'étudiant. Sur le plan des droits : le droit de suivre les cours de la formation, le droit de passer les examens aux sessions prévues, le droit d'accéder aux services et ressources de l'université, le droit à l'information sur les résultats et sur les modalités d'évaluation. Sur le plan des obligations : l'obligation d'assister aux cours lorsque la présence est obligatoire, l'obligation de respecter le règlement intérieur de l'établissement, l'obligation d'informer le secrétariat en cas d'absence pour maladie lors d'un examen.

Les responsabilités incluent le respect de la propriété intellectuelle dans les productions académiques (citation correcte des sources, absence de plagiat), le respect de l'intégrité des examens (pas de fraude), et le respect de l'environnement communautaire du campus (comportement respectueux envers les personnels et les camarades). Ces droits et obligations constituent le contrat implicite qui régit la relation entre l'étudiant et l'institution universitaire.

## La charte des examens et les règlements des études

Chaque université publie une charte des examens et un règlement des études qui précisent les règles applicables aux évaluations — les conditions d'organisation des examens, les modalités de consultation des copies, les règles de compensation entre unités d'enseignement, les procédures en cas d'absences justifiées ou injustifiées, les sanctions en cas de fraude. Ces documents sont généralement accessibles sur le site web de l'université et/ou via l'ENT.

La lecture attentive de la charte des examens et du règlement des études de son université est une démarche que peu d'étudiants font au début de leurs études mais que tous devraient effectuer. Ces documents contiennent des informations cruciales dont la méconnaissance peut avoir des conséquences académiques — ignorer qu'une UE non compensable impose un rattrapage, ne pas savoir que les examens médicaux pour absence justifiée ont une procédure spécifique, ou meconnaître les règles de gestion des téléphones portables pendant les examens.

## Les services sociaux étudiants et les situations de précarité

Les services sociaux des universités (assistantes sociales étudiantes) jouent un rôle discret mais précieux auprès des étudiants qui traversent des difficultés financières, personnelles ou de santé. Ces professionnels du travail social spécialisés dans le milieu étudiant peuvent mobiliser des aides d'urgence, orienter vers des dispositifs de soutien, faciliter les démarches administratives en cas de situation complexe (changement de situation familiale, problème de logement, difficultés de santé impactant les études).

Pour les étudiants étrangers qui peuvent se trouver dans des situations de vulnérabilité particulière (loin de leur famille, sans réseau de soutien local, avec des ressources financières limitées), le service social universitaire est un point d'appui institutionnel dont la valeur ne doit pas être sous-estimée. Prendre contact de façon préventive avec ce service en début d'année permet de créer une relation de confiance avant qu'une situation d'urgence ne survienne.

## La réalité quotidienne de la vie universitaire : entre exigences et ressources

La vie universitaire française combine des exigences académiques réelles — charge de travail substantielle, compétition entre pairs, standards d'évaluation élevés — et un environnement de ressources exceptionnel — bibliothèques riches, enseignants-chercheurs de haut niveau, cadre de pensée intellectuellement stimulant, réseau d'anciens cultivé sur des décennies. Cette combinaison, qui peut d'abord paraître écrasante aux étudiants qui la découvrent, finit par révéler sa richesse à ceux qui s'y investissent avec persévérance et curiosité.

L'inscription administrative est le premier pas dans ce voyage académique. Elle ouvre l'accès à un système qui a été conçu, malgré ses imperfections et sa lenteur administrative parfois décourageante, pour donner à chaque étudiant inscrit les outils de sa propre formation. L'utilisation active et consciente de ces outils — bibliothèques, associations, services de santé, conseillers en orientation, tuteurs pédagogiques — transforme une inscription en un véritable parcours de développement personnel et intellectuel.
`;

const ADD3_L7 = `
## Les nouvelles formations en émergence dans le système universitaire français

Le paysage universitaire français n'est pas figé — de nouvelles formations émergent régulièrement en réponse aux transformations économiques, technologiques et sociales. Les formations en intelligence artificielle et en science des données sont parmi les plus développées de ces dernières années, avec des licences, masters et formations d'ingénieurs entièrement dédiés à ces domaines. Les formations en transition écologique, en économie circulaire et en développement durable se multiplient, reflétant une prise de conscience institutionnelle des enjeux environnementaux. Les formations hybrides associant humanités et numérique (humanités numériques, digital humanities) représentent une réponse aux besoins d'un marché du travail qui requiert des profils capables de conjuguer pensée critique et compétences techniques.

Ces nouvelles formations présentent souvent l'avantage d'être plus récentes et donc plus directement alignées avec les besoins actuels du marché du travail, mais aussi l'inconvénient d'avoir un historique de placement et un réseau d'alumni moins développé que les formations traditionnelles. Pour les étudiants qui s'y inscrivent, la participation active à la construction de ce réseau — en rejoignant les premières promotions d'associations alumni, en participant à des événements fondateurs — est un investissement dont les bénéfices collectifs seront perçus avec le temps.

## L'université inclusive et les dispositifs de soutien à la diversité

Le système universitaire français déploie des efforts croissants pour garantir l'égalité des chances réelle entre des étudiants aux origines et aux situations très diverses. Les programmes d'accès aux grandes écoles pour les lycéens de milieux populaires (Sciences Po, programme Codes, initiatives similaires dans d'autres institutions) cherchent à corriger les inégalités de départ qui font que les grandes écoles recrutent majoritairement dans les lycées les plus favorisés.

Les dispositifs de soutien aux étudiants en situation de handicap (service handicap des universités, aménagements d'examens, accessibilité physique des campus) visent à garantir que les difficultés physiques ou cognitives ne constituent pas un obstacle supplémentaire à la réussite académique. Les programmes de mentorat entre paires — étudiants de niveaux supérieurs accompagnant les premiers niveaux — cherchent à combler les inégalités d'information et de réseau entre étudiants d'origines sociales différentes.

## Les perspectives internationales du diplôme français

La valeur internationale d'un diplôme universitaire français s'est consolidée ces dernières décennies. Le renforcement de la recherche universitaire, la montée en puissance des universités françaises dans les classements internationaux, et la reconnaissance croissante des formations françaises dans les milieux professionnels mondiaux ouvrent des perspectives professionnelles à l'international substantielles pour les diplômés des meilleures formations françaises.

Pour un étudiant étranger qui vient en France avec un projet de retour dans son pays d'origine, un diplôme français représente généralement un avantage comparatif significatif sur le marché local — la réputation internationale du système d'enseignement supérieur français, la maîtrise du français comme langue professionnelle internationale, et l'exposition à une culture académique de qualité constituent des atouts reconnus dans de nombreux contextes professionnels.
`;

const ADD3_L8 = `
## La réforme du baccalauréat et son impact sur Parcoursup

La réforme du baccalauréat général et technologique de 2019 a introduit des changements significatifs dans les données disponibles sur Parcoursup. Désormais, les profils des candidats sont définis non plus par des filières uniques (S, ES, L) mais par des combinaisons de spécialités choisies individuellement — mathématiques, physique-chimie, sciences économiques, histoire-géographie, humanités, etc. Cette diversification des profils a rendu plus complexe l'analyse des adéquations entre les profils des candidats et les attentes des formations.

Sur Parcoursup, les formations peuvent désormais afficher leurs « attendus » en termes de spécialités — par exemple, une licence de mathématiques peut indiquer que les candidats ayant choisi la spécialité « mathématiques » en terminale sont prioritaires. Ces indications d'attendus ne sont pas des conditions d'accès formelles mais des signaux d'adéquation que les commissions d'admission prennent en compte dans le classement des dossiers.

## La détresse psychologique et les ressources d'aide sur Parcoursup

L'attente des résultats sur Parcoursup est une période de stress intense pour de nombreux lycéens, et ce stress peut avoir des répercussions sur la santé mentale. Parcoursup et les établissements d'enseignement supérieur ont déployé des ressources spécifiques pour accompagner les candidats dans cette période. Numéros d'écoute, accès à des psychologues dans les lycées, messageries d'information : ces dispositifs sont là pour ceux qui en ont besoin.

Pour les conseillers pédagogiques des lycées qui accompagnent des candidats en difficulté sur Parcoursup, la compréhension des mécanismes psychologiques de l'attente et de la comparaison sociale — amplifiés par les réseaux sociaux où des lycéens partagent leurs admissions — est une compétence croissante dans la profession. L'orientation post-Parcoursup ne s'arrête pas à la gestion des candidatures : elle inclut l'accompagnement humain des candidats face aux incertitudes et aux déceptions inévitables d'un système sélectif.

## Mon Master : les attentes spécifiques des jurys en sciences humaines et sociales

Dans les disciplines des sciences humaines et sociales — sociologie, anthropologie, histoire, philosophie, lettres, langues — les critères de sélection des masters valorisent particulièrement la qualité de la réflexion exprimée dans la lettre de motivation et le projet de recherche. Un candidat qui identifie des problématiques actuelles de la discipline, qui cite des chercheurs contemporains dont les travaux l'intéressent, et qui articule un projet de mémoire ou de recherche cohérent avec les spécialités de l'équipe pédagogique du master, se distingue immédiatement d'un candidat dont la lettre reste générique.

La connaissance de l'équipe pédagogique d'un master est donc un investissement précieux dans la préparation de la candidature. Lire les publications récentes des enseignants du master visé, identifier les axes de recherche du laboratoire associé, comprendre les débats actuels dans le champ disciplinaire : ces démarches de préparation intellectuelle signalent un intérêt authentique pour la formation qui est perçu très positivement par les jurys.

## Les outils d'aide à l'orientation et à la préparation des candidatures

L'écosystème d'outils pour préparer ses candidatures Parcoursup et Mon Master s'est diversifié depuis le lancement de ces plateformes. Au-delà des ressources officielles (guides Parcoursup, sites des universités), des outils tiers ont émergé : simulateurs de profil qui estiment les chances d'admission dans une formation donnée à partir du profil du candidat, plateformes de coaching pour la rédaction du projet de formation motivé, groupes de préparation aux concours de grandes écoles, et services de relecture de dossiers par des anciens élèves des formations visées.

Ces ressources complémentaires, lorsqu'elles sont utilisées de façon éthique — pour améliorer la qualité de l'expression du projet, pas pour inventer un projet qui n'existe pas — peuvent contribuer à un dossier plus convaincant. La vigilance s'impose cependant face aux services qui promettent des résultats garantis moyennant des honoraires élevés : aucun prestataire ne peut garantir une admission, et les dossiers préparés de façon entièrement externalisée sont souvent perçus comme manquant d'authenticité par les jurys expérimentés.
`;

await appendAndPatch('28169f27-de81-47cb-995b-b1f89aa9b9c3', ADD3_L5);
await appendAndPatch('aaa8ee5c-c7c9-4264-a061-29eea0adc297', ADD3_L6);
await appendAndPatch('c7d769eb-22d9-4d69-bc52-4261b428b47a', ADD3_L7);
await appendAndPatch('c97fea4d-3d2d-4b1d-a5b7-3d4bde406dfa', ADD3_L8);
