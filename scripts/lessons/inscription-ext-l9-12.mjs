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

const ADD_L9 = `
## Les spécificités documentaires selon le niveau d'inscription

La liste des documents requis varie significativement selon le niveau d'inscription et la situation antérieure de l'étudiant. Un étudiant qui s'inscrit pour la première fois en master après une licence obtenue dans une université française est dans la situation la plus simple : ses diplômes sont déjà dans le système français, ses documents d'identité sont probablement déjà connus de l'université (s'il y a fait sa licence), et les seuls nouveaux documents à fournir sont son relevé de notes de licence et son attestation d'admission en master.

Pour un étudiant qui change d'établissement entre la licence et le master — ce qui est fréquent puisque le master sélectif est souvent dans une université différente de celle de la licence — le dossier complet doit être reconstitué dans le nouvel établissement : diplôme de licence en original, relevé de notes de licence, documents d'identité et de séjour actualisés, CVEC. Les universités ont généralement des procédures de dématérialisation qui permettent la transmission électronique des documents officiels entre établissements, mais l'étudiant doit souvent s'assurer lui-même que ces transmissions ont bien lieu et dans les délais.

## La légalisation et l'apostille des documents étrangers

Les documents officiels étrangers (diplômes, relevés de notes, actes d'état civil) destinés à être utilisés en France doivent généralement être soit légalisés, soit accompagnés d'une apostille selon les conventions internationales. La légalisation est la procédure traditionnelle par laquelle un document officiel d'un pays est authentifié par les autorités de ce pays, puis par l'ambassade ou le consulat français, pour être reconnu officiellement en France. Cette procédure est longue et implique plusieurs étapes administratives.

L'apostille, instaurée par la Convention de La Haye de 1961, est une procédure simplifiée qui s'applique aux documents émanant des pays signataires de la Convention (environ 120 pays). Un document apostillé est reconnu automatiquement dans tous les pays membres sans légalisation consulaire supplémentaire. Pour les pays non signataires, la légalisation complète reste nécessaire. Il est important de vérifier, pour chaque document et chaque pays d'origine, quelle procédure s'applique, car une erreur de procédure peut conduire au rejet du document.

## La traduction assermentée : quand et comment l'obtenir

Les documents dans une langue autre que le français doivent être accompagnés d'une traduction assement par un traducteur officiel (« traducteur assermenté » ou « expert traducteur »). Ces traducteurs sont inscrits sur les listes officielles des cours d'appel et leur traduction a valeur légale. Il ne s'agit pas d'une traduction ordinaire que l'on peut faire soi-même ou confier à un ami : la pièce soumise à l'université doit être la traduction assermentée signée et tamponnée, accompagnée une copie certifiée conforme du document original.

Les tarifs des traductions assermentées varient selon la langue, le volume et le type de document : de 50 à 200 euros pour un diplôme ou un relevé de notes standard selon la langue (les langues rares sont plus chères que les langues courantes). Ces frais peuvent représenter un poste de dépense non négligeable si plusieurs documents doivent être traduits, particulièrement pour les étudiants venant de pays aux alphabets non latins. La planification des traductions doit être anticipée, car les délais peuvent atteindre deux à trois semaines pour les langues rares.

## Le dossier numérique vs le dossier physique : tendances et précautions

La digitalisation progressive des procédures d'inscription a conduit de nombreuses universités à accepter le dépôt de documents en version numérisée via leur portail en ligne. Cette évolution est commode mais appelle quelques précautions. La numérisation doit être de qualité suffisante pour que tous les éléments du document soient lisibles — une photo floue prise avec un smartphone ne remplace pas une numérisation propre à haute résolution. Les fichiers PDF sont généralement préférés aux JPEG ou PNG car ils permettent une meilleure conservation de la qualité de l'image.

Même lorsque le dépôt numérique est accepté en premier lieu, les universités se réservent généralement le droit de demander la présentation des originaux lors de la finalisation en présentiel. Conserver précieusement tous vos originaux dans un classeur ou une pochette dédiée, ainsi qu'une copie numérique de haute qualité sur un support de sauvegarde externe, est une précaution élémentaire qui vous évitera des délais en cas de perte ou de détérioration.

## Les délais et le calendrier des inscriptions

La compréhension du calendrier des inscriptions est aussi importante que la constitution du dossier documentaire. Les universités publient chaque année le calendrier des inscriptions administratives, généralement disponible sur leur site web dès juin pour les rentrées de septembre. Ces calendriers doivent être consultés très tôt pour identifier les dates limites à absolument respecter.

Pour les étudiants qui arrivent de l'étranger, la coordination entre le calendrier d'inscription universitaire et les délais des procédures administratives liées au séjour (visa, validation VLS-TS à l'OFII) est un exercice de planification qui requiert méthode et anticipation. Un visa étudiant obtenu la semaine précédant la rentrée ne laisse aucune marge pour les imprévus — un vol retardé, un délai dans la validation OFII, une pièce manquante dans le dossier d'inscription — qui peuvent repousser l'inscription effective de plusieurs semaines dans les cas extrêmes.
`;

const ADD_L10 = `
## Les applications numériques complémentaires à l'ENT

Au-delà de l'ENT officiel de l'université, les étudiants utilisent généralement un écosystème d'applications numériques complémentaires pour optimiser leur vie universitaire. Les applications de gestion de planning (Google Calendar, Notion, Todoist) permettent de visualiser les emplois du temps, les dates de rendu des travaux et les échéances d'examens sur un calendrier unifié, combinant les données de l'ENT avec les informations personnelles.

Les outils collaboratifs (Google Drive, Microsoft Teams, Notion partagé) facilitent le travail en groupe pour les projets collectifs — une modalité pédagogique de plus en plus présente dans les cursus universitaires français. La capacité à travailler efficacement en groupe sur des documents partagés, à distance et en asynchrone, est une compétence devenue aussi importante que les compétences académiques traditionnelles.

Les applications de gestion de références bibliographiques (Zotero, Mendeley) sont particulièrement utiles pour les étudiants qui produisent des travaux de recherche — mémoires, thèses, articles. Elles permettent de collecter, organiser et citer automatiquement les sources bibliographiques dans les formats académiques standards (APA, Chicago, Vancouver), et s'intègrent avec les traitements de texte pour générer automatiquement les bibliographies. Apprendre à utiliser Zotero dès la licence est un investissement de quelques heures qui fera économiser des dizaines d'heures de mise en forme bibliographique sur l'ensemble du cursus.

## Les ressources numériques de la bibliothèque en détail

Les ressources numériques accessibles via la bibliothèque universitaire méritent d'être détaillées, car leur richesse est souvent méconnue des étudiants. Les bases de données bibliographiques multidisciplinaires (JSTOR, Web of Science, Scopus) donnent accès à des millions d'articles de revues scientifiques à comité de lecture dans toutes les disciplines — des ressources qui coûteraient plusieurs milliers d'euros par an à titre individuel. Les bases de données spécialisées par discipline (Cairn InfoPour les sciences humaines et sociales françaises, LexisNexis pour le droit, Elsevier pour les sciences et la médecine) permettent des recherches ciblées dans des corpus documentaires immenses.

Les bouquets de presse nationale et internationale (Europresse, Factiva) donnent accès aux archives des grands quotidiens et hebdomadaires, précieux pour les recherches sur l'actualité, les études médiatiques ou l'analyse d'opinion. Les encyclopédies spécialisées en ligne (Encyclopaedia Universalis, Encyclopædia Britannica) offrent des synthèses fiables et actualisées sur tous les sujets imaginables. Pour les étudiants qui doivent produire des recherches documentaires, l'exploration systématique des ressources de leur bibliothèque universitaire est un préalable indispensable qui va bien au-delà de ce que Google Scholar peut offrir.

## L'espace numérique et la sécurité des données personnelles

L'utilisation intensive des outils numériques universitaires implique le stockage et le traitement de nombreuses données personnelles — résultats scolaires, communications personnelles, travaux académiques, informations administratives. La sensibilisation à la sécurité informatique et à la protection des données personnelles est une compétence de plus en plus nécessaire dans l'environnement universitaire numérique.

Quelques bonnes pratiques de base : utiliser des mots de passe robustes et différents pour chaque service (un gestionnaire de mots de passe comme Bitwarden ou 1Password facilite cette pratique) ; activer l'authentification à deux facteurs sur les services qui la proposent, notamment la messagerie universitaire officielle ; ne pas connecter ses identifiants universitaires sur des ordinateurs publics sans s'être déconnecté complètement après usage ; être vigilant face aux tentatives de phishing (emails frauduleux qui imitent des communications officielles pour dérober des identifiants).

## Les services de santé numériques et le bien-être

De nombreuses universités proposent désormais des applications ou des plateformes numériques d'accès aux services de santé mentale. Ces outils, développés en réponse à la crise de santé mentale étudiante documentée depuis la pandémie de 2020, permettent de prendre rendez-vous avec un psychologue universitaire, d'accéder à des ressources d'auto-soin (méditation, gestion du stress, techniques cognitivo-comportementales), ou de bénéficier d'une écoute en ligne en cas de détresse passagère.

L'utilisation de ces ressources numériques de santé ne doit pas être perçue comme un signe de faiblesse ou un aveu de difficultés : elles sont conçues pour tous les étudiants, dans une logique préventive aussi bien que curative. Une consultation régulière du psychologue universitaire, en dehors de toute crise, peut contribuer à construire des outils de résilience qui seront précieux face aux défis académiques et personnels inévitables du parcours universitaire.
`;

const ADD_L11 = `
## Les spécificités disciplinaires du système LMD

Le système LMD ne fonctionne pas de façon identique dans toutes les disciplines. Les sciences dures (mathématiques, physique, chimie, biologie) ont des cursus très structurés avec des prérequis clairement définis : on ne peut pas s'inscrire en deuxième année sans maîtriser les contenus de première année, ce qui crée une logique de progression linéaire. Les sciences humaines et sociales (sociologie, histoire, philosophie, lettres) offrent généralement plus de flexibilité dans la construction des parcours, avec des possibilités de spécialisation progressive selon les intérêts de l'étudiant.

Les formations professionnalisantes (droit, gestion, commerce) combinent logique académique et logique professionnelle, avec des stages obligatoires intégrés dans le cursus dès la licence. Ces stages, qui durent typiquement de deux à six mois selon le niveau et la formation, sont une composante pédagogique essentielle qui permet aux étudiants d'articuler les enseignements théoriques avec les réalités du monde professionnel. Pour les étudiants étrangers souhaitant s'insérer dans le marché du travail français après leurs études, ce sont également des opportunités précieuses de construire un réseau et d'acquérir une expérience valorisable sur le CV.

## La semestrialisation et les modalités de contrôle des connaissances

L'organisation des études en semestres de 30 crédits ECTS chacun a des implications pratiques importantes pour la vie universitaire quotidienne. Chaque semestre dure généralement quatre à cinq mois et se conclut par une session d'examens de deux à trois semaines. La régularité des évaluations tout au long du semestre (contrôle continu) varie selon les disciplines et les enseignants — certains cours ne s'évaluent qu'à l'examen final, d'autres par des rendus réguliers (dissertations intermédiaires, exposés, projets de groupe) sans examen final.

Cette diversité des modalités d'évaluation doit être intégrée dans la planification du travail académique dès le début du semestre. L'agenda universitaire d'un étudiant qui gère bien son temps tient compte simultanément des créneaux de révision pour les examens et des dates de rendu des travaux continus — faute de quoi des conflits de planning peuvent conduire à des situations de surcharge dans les dernières semaines du semestre.

## Le cadre européen des certifications (CEC) et la lisibilité internationale des diplômes

Le Cadre Européen des Certifications (CEC) est un système de référence à huit niveaux qui permet de mettre en correspondance les systèmes de certification nationaux des pays membres et de faciliter la compréhension mutuelle des niveaux de qualification. Dans ce cadre, la licence française correspond au niveau 6 du CEC, le master au niveau 7 et le doctorat au niveau 8. Cette correspondance est automatiquement reconnue par tous les pays membres de l'Union européenne, ce qui signifie qu'un master français est reconnu au niveau 7 CEC en Allemagne, au Portugal ou en Suède sans procédure d'équivalence spécifique.

Au niveau mondial, le format du supplément au diplôme (document annexe au diplôme qui décrit en détail le contenu de la formation, les compétences acquises et le niveau dans le CEC) facilite la compréhension des diplômes français par des employeurs ou des établissements étrangers non familiers avec le système LMD. Ce document, remis gratuitement à tout diplômé universitaire qui en fait la demande, est un outil précieux pour les étudiants qui envisagent de poursuivre leur carrière ou leurs études à l'étranger après leur diplôme français.

## Les parcours personnalisés et les doubles cursus

Les universités françaises offrent de plus en plus de possibilités de personnalisation des parcours académiques, permettant aux étudiants d'associer des compétences de plusieurs domaines disciplinaires. Les doubles licences (un étudiant inscrit simultanément dans deux licences de disciplines différentes) existent dans plusieurs universités et permettent d'obtenir deux diplômes en quatre à cinq ans au lieu des trois ans de chaque licence séparément. Ces doubles cursus sont exigeants en charge de travail mais ouvrent des perspectives professionnelles et académiques plus larges pour les étudiants qui réussissent à les mener à terme.

Les mineurs et majeures — inspirés du système universitaire américain — sont une autre forme de personnalisation qui se développe dans les universités françaises. Un étudiant peut choisir une majeure (sa discipline principale) et une mineure (une discipline complémentaire dans laquelle il suit une proportion plus limitée de cours), construisant ainsi un profil pluridisciplinaire qui répond à des besoins professionnels de plus en plus transversaux.
`;

const ADD_L12 = `
## Les statistiques Parcoursup et leur interprétation

Parcoursup publie chaque année des données statistiques détaillées sur chaque formation, couvrant le nombre de vœux reçus, le nombre de candidats admis en phase principale et en phase complémentaire, et la répartition des admis selon le type de baccalauréat (général, technologique, professionnel) et selon le lycée d'origine. Ces données, accessibles librement sur le site, sont une mine d'informations pour la préparation d'une candidature stratégique.

L'indicateur le plus important à analyser est le taux d'accès, défini comme la proportion de candidats qui ont reçu une proposition d'admission. Un taux d'accès de 100% signifie que tous les candidats qui ont formulé ce vœu ont reçu une proposition — la formation n'est pas sélective. Un taux de 5% signifie que seulement 5% des candidats ont été admis — la formation est extrêmement sélective. Ces taux doivent être interprétés en tenant compte du profil habituel des candidats admis (mention au baccalauréat, type de lycée), pour évaluer de façon réaliste ses propres chances d'admission.

La carte interactive des lycées des admis est un outil particulièrement utile pour un candidat qui veut comprendre le profil géographique et scolaire des étudiants habituellement sélectionnés. Elle révèle si une formation attire principalement des candidats locaux ou si elle recrute au niveau national, et si les admis viennent essentiellement de lycées d'élite ou si la formation accueille des profils plus divers.

## La procédure de phase complémentaire Parcoursup

La phase complémentaire Parcoursup, ouverte généralement à partir de la mi-juin pour les candidats n'ayant reçu aucune proposition satisfaisante en phase principale, représente une deuxième chance pour les candidats qui n'ont pas obtenu de résultats positifs dans leurs premiers vœux. Pendant la phase complémentaire, les candidats peuvent formuler jusqu'à dix nouveaux vœux dans des formations ayant des places disponibles. La liste des formations avec places disponibles est mise à jour quotidiennement.

La phase complémentaire est une étape que de nombreux candidats négligent par découragement après les déceptions de la phase principale. C'est une erreur : les places disponibles en phase complémentaire sont réelles et les admissions se font dans des délais très courts, parfois en quelques jours. Une préparation des dossiers de phase complémentaire — en identifiant à l'avance les formations potentiellement intéressantes qui pourraient avoir des places — permet de réagir rapidement dès l'ouverture de cette phase.

## Les spécificités de Mon Master pour les candidats en réorientation

La plateforme Mon Master est utilisée non seulement par les candidats en fin de licence qui souhaitent poursuivre en master, mais aussi par des professionnels en activité qui souhaitent reprendre des études en formation initiale, des étudiants qui ont interrompu leur parcours et souhaitent le reprendre, et des candidats étrangers dont le niveau de licence est reconnu et qui souhaitent poursuivre en master en France. Ces profils atypiques méritent une attention particulière dans la constitution des dossiers.

Pour un candidat en réorientation professionnelle, le dossier Mon Master doit convaincre la commission que la décision de reprendre des études est mûrement réfléchie et s'appuie sur une analyse cohérente du parcours passé et du projet futur. La lettre de motivation doit expliquer clairement pourquoi le master visé est nécessaire pour l'aboutissement du projet professionnel, en quoi l'expérience professionnelle acquise enrichit le profil du candidat par rapport aux étudiants en parcours direct, et quels sont les apports attendus de la formation par rapport à des alternatives (formation continue, autoformation).

## L'impact du classement des formations sur les stratégies de candidature

En France, il n'existe pas de classement officiel unique des universités comparable au classement de Shanghai ou au QS World University Rankings qui seraient utilisés comme critère de sélection des candidats. Néanmoins, des hiérarchies informelles existent dans certaines disciplines et influencent les stratégies de candidature. En droit, certaines facultés parisiennes (Paris I Panthéon-Sorbonne, Paris II Panthéon-Assas) ont une réputation historique d'excellence qui les rend très demandées. En gestion, les masters des grandes business schools (HEC, ESSEC, ESCP) sont perçus comme donnant accès à des réseaux professionnels et des niveaux de rémunération supérieurs.

Pour un candidat étranger qui construit sa stratégie de candidature, la notoriété internationale de l'établissement peut être un critère important si le projet est de retourner travailler dans un contexte international après les études françaises. Dans ce cas, des établissements au rayonnement international reconnu (Sciences Po Paris, HEC, certains masters de l'INSEAD) peuvent avoir une valeur signalétique sur un CV international supérieure à celle de formations plus solides académiquement mais moins connues à l'étranger. Cette dimension ne doit pas primer sur la qualité académique et l'adéquation du contenu de la formation au projet, mais elle mérite d'être intégrée dans la réflexion.
`;

await appendAndPatch('0447d045-e377-4184-aa2c-8682c6502843', ADD_L9);
await appendAndPatch('21a6d3ee-294f-4217-9756-32f874a332f4', ADD_L10);
await appendAndPatch('c5439dd3-ee75-49a4-b7ab-c11c4dfc1435', ADD_L11);
await appendAndPatch('b04e269f-0b07-40a2-a16a-fa43d5462e88', ADD_L12);
