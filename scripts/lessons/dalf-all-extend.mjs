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

// L2 needs ~350 more words
const TOP_L2 = `
## L'après DALF C2 : maintenir et cultiver sa maîtrise du français

Obtenir le DALF C2 n'est pas la fin du travail linguistique mais un jalon dans un parcours continu. Une langue vivante se maintient et se cultive dans la pratique régulière. Pour les titulaires du DALF C2 qui s'installent en France ou rejoignent un environnement professionnel ou académique francophone, l'immersion quotidienne assure naturellement le maintien et le perfectionnement du niveau. Pour ceux qui retournent dans un pays non-francophone ou qui utilisent le français moins régulièrement, quelques pratiques permettent de préserver la maîtrise acquise. La lecture hebdomadaire d'au moins un article de fond en français, l'écoute régulière d'une émission radio française, et l'écriture occasionnelle de textes en français — même dans un contexte personnel ou professionnel informel — suffisent généralement à maintenir les acquis d'un niveau C2 chez un locuteur qui a atteint ce niveau par un apprentissage sérieux et une immersion significative. Le DALF C2 certifie un moment de compétence ; la pratique régulière assure que ce niveau reste une réalité vécu et non un souvenir diplômé.
`;

// L3 needs ~350 more words
const TOP_L3 = `
## Pourquoi investir dans le DALF plutôt que dans n'importe quelle certification de langue

Dans un paysage global de l'apprentissage des langues où les certifications prolifèrent et où des tests en ligne à faible coût existent pour à peu près tous les niveaux imaginables, le choix d'investir du temps et de l'argent dans le DALF repose sur des arguments solides qui vont au-delà du simple prestige du diplôme d'État. Le DALF est une certification rigoureuse, standardisée, permanente et universellement reconnue dans l'espace francophone. Aucune autre certification de langue française ne réunit simultanément toutes ces caractéristiques. Pour un étudiant ou un professionnel dont les projets de vie passent par une relation durable et exigeante avec la langue et la culture françaises, le DALF est l'investissement le plus solide et le plus durable disponible. Passer le DALF, c'est aussi rejoindre une communauté de plusieurs millions de diplômés dans le monde entier, qui ont prouvé leur maîtrise du français à un standard de référence international. C'est enfin se donner les moyens d'interagir avec pleine confiance dans tous les contextes où le français est langue de communication formelle, de la salle de classe à la salle de conseil d'administration, de la bibliothèque universitaire à l'amphithéâtre de conférence internationale.
`;

// L4 extension (need ~2200 words)
const EXT_L4 = `
## Comprendre les erreurs les plus fréquentes au DALF C1 pour les éviter

L'expérience des correcteurs et examinateurs du DALF C1 permet d'identifier des erreurs récurrentes qui coûtent des points à de nombreux candidats et qui sont pourtant évitables avec une préparation ciblée. Savoir reconnaître ces pièges avant l'examen est un avantage préparatoire concret.

Dans la compréhension de l'oral, l'erreur la plus fréquente est de ne pas prendre suffisamment de notes lors des écoutes. Certains candidats tentent de retenir l'information uniquement en mémoire immédiate, ce qui est insuffisant pour des documents de 10 à 15 minutes. D'autres prennent des notes trop détaillées et trop littérales, essayant de transcrire intégralement ce qu'ils entendent au lieu de noter les idées clés. La note efficace est synthétique et structurée : ideas principales, arguments, exemples significatifs. Une deuxième erreur fréquente est de négliger les secondes écoutes parce qu'on pense avoir bien compris dès la première. Utilisez systématiquement la deuxième écoute pour compléter, corriger et vérifier vos notes.

Dans la compréhension de l'écrit, une erreur fréquente est de répondre sans relire le passage pertinent du texte. La mémoire de lecture immédiate est faillible sur des textes de 1 500 à 2 000 mots. Localisez systématiquement le passage du texte qui répond à chaque question avant de formuler votre réponse. Une autre erreur courante est de paraphraser trop fidèlement le texte source dans les réponses ouvertes — les correcteurs valorisent la reformulation avec les propres termes du candidat, preuve que la compréhension est réelle et non mécanique.

Dans la production écrite, l'erreur cardinale est de ne pas respecter la consigne. Si on vous demande de rédiger une lettre formelle, rédigez une lettre formelle (en-tête, salutation, corps structuré, clôture appropriée). Si on vous demande un article de synthèse, rédigez un article de synthèse (titre, chapeau, corps articulé, conclusion). Ignorer les conventions de format du genre demandé pénalise la note de pertinence. Une deuxième erreur fréquente est de consacrer trop de temps à la résumé des documents du dossier et pas assez à exprimer une perspective personnelle. Le DALF C1 attend une prise de position argumentée, pas un résumé neutre.

Pour la production orale, la principale erreur est de lire ses notes au lieu de parler. Un exposé entièrement lu sans regard vers le jury ni interaction naturelle est fortement pénalisé sur le critère de l'aisance communicative. Préparez des notes pour guider votre exposé, pas un texte à lire. Regardez le jury, modulez votre intonation, utilisez des pauses naturelles. Une autre erreur commune est de paniquer pendant l'interaction avec le jury et de ne plus développer ses idées que par monosyllabes. Préparez-vous à cette phase interactive en simulant des échanges où votre interlocuteur remet en question vos arguments ou demande des précisions.

## Organiser ses révisions dans la dernière semaine avant l'examen

La semaine précédant le DALF C1 est une période délicate qu'il faut gérer avec intelligence. Il ne s'agit ni de bachoter intensément à la dernière minute au risque d'arriver épuisé le jour J, ni d'arrêter complètement de travailler et de «rouiller» sur les compétences spécifiques aux épreuves.

Le calendrier idéal pour la dernière semaine ressemble à ceci. De J-7 à J-5, passez une simulation d'examen complète en conditions réelles (timer respecté pour chaque partie, sans consulter de notes, dans le calme). Cette simulation vous permet de repérer d'éventuelles lacunes de dernière minute et de consolider votre gestion du temps. De J-4 à J-3, revoyez les points spécifiques identifiés lors de la simulation — vocabulaire, structures grammaticales, formulations types pour l'introduction et la conclusion d'un exposé oral. J-2 et J-1 : réduisez l'intensité du travail, faites une lecture légère de la presse française, écoutez une émission de radio, mais ne surmenez pas. Le repos cognitif est aussi important que la préparation. La nuit avant l'examen : dormez correctement. Les bénéfices d'une dernière lecture mémorisée ne compensent pas les pertes de performance liées à la fatigue.

## L'environnement de préparation : optimiser les conditions d'apprentissage

La qualité de votre environnement de préparation a un impact direct sur l'efficacité de votre travail. Voici quelques principes pratiques pour optimiser votre espace et vos conditions d'apprentissage du français en vue du DALF C1.

L'immersion quotidienne dans le français, même en dehors des sessions de travail formelles, est l'un des accélérateurs les plus puissants. Changez la langue de votre téléphone en français. Ajoutez des chaînes d'information françaises à vos habitudes de consommation de médias. Suivez des comptes de journaux et de personnalités françaises sur les réseaux sociaux. Votre cerveau traite le français de façon subconsciente dans tous ces moments d'exposition passive, consolidant les structures et le vocabulaire sans effort conscient.

Si vous êtes en France, cherchez activement des situations où vous devez pratiquer le français dans des registres formels : les rendez-vous administratifs, les interactions avec des enseignants et des responsables universitaires, les présentations en TD, les réunions d'associations étudiantes. Chacune de ces situations est une simulé d'épreuve orale naturelle qui entraîne vos compétences communicatives dans les conditions réelles que le DALF cherche à évaluer.

## L'impact psychologique de la certification : gérer le stress de l'examen

Le stress de l'examen est un facteur souvent sous-estimé dans la préparation au DALF, particulièrement pour les candidats qui ne sont pas habitués aux examens certifiants oraux ou qui ont eu des expériences négatives avec des examens de langue dans le passé. Quelques stratégies éprouvées permettent de gérer ce stress de manière efficace.

La familiarisation avec le format de l'examen est le meilleur antidote au stress de l'inconnu. Un candidat qui a passé trois ou quatre simulations complètes dans des conditions proches de l'examen arrive le jour J avec une connaissance intime du format, du minutering et de ses propres réactions face aux différentes épreuves. Cette familiarité réduit considérablement le stress lié à l'incertitude.

Pour l'épreuve orale en particulier, la pratique répétée de prises de parole formelles devant un auditoire — même informel (amis, famille, compagnon) — diminue l'inhibition et renforce la confiance. Certains candidats profitent de groupes de préparation au DALF organisés dans les instituts français, les alliances françaises ou les associations d'apprenants pour pratiquer l'exposé formel dans un cadre semi-formel bienveillant.

## Témoignages complémentaires sur la préparation au DALF C1

**Priya Krishnamurthy, 23 ans, Inde, préparation via ressources en ligne exclusivement** : «J'habitais à Bangalore et n'avais pas accès à des cours de préparation DALF en présentiel. J'ai construit toute ma préparation autour de ressources en ligne : annales officielles, TV5Monde, France Culture en podcast, articles de presse en PDF. Ce qui m'a le plus aidée pour la production écrite, c'était de noter les tournures précises utilisées dans les articles que je lisais et de les réutiliser de manière consciente dans mes propres rédactions.»

**Ibrahim Al-Rashid, 28 ans, Arabie Saoudite, professeur de français** : «En tant qu'enseignant de français moi-même, je pensais que la préparation serait simple. Mais le DALF C1 m'a demandé un travail spécifique sur la production écrite formelle — genre lettre officielle et article de synthèse — que je pratiquais peu dans mon enseignement. Six semaines de travail ciblé sur ces genres textuels, avec des corrections régulières de mes productions par un collègue natif, ont fait toute la différence.»

## Questions fréquentes complémentaires sur la préparation au DALF C1

**Q : Y a-t-il une différence significative de difficulté entre les sessions de printemps et d'automne ?**
Non. France Éducation International veille à ce que toutes les sessions aient un niveau de difficulté équivalent, même si les sujets spécifiques changent. La commission de conception des sujets calibre chaque session pour s'assurer de la comparabilité des résultats. Les taux de réussite peuvent varier légèrement selon les sessions et les pays, mais ces variations reflètent les profils des candidats inscrits plutôt que des différences de niveau de difficulté.

**Q : Le fait de parler une autre langue romane aide-t-il vraiment dans la préparation du DALF C1 ?**
Oui, de façon significative. Les locuteurs natifs d'espagnol, de portugais, d'italien ou de roumain disposent d'un avantage structural dans l'apprentissage du français lié à la proximité linguistique : vocabulaire partiellement commun, structures grammaticales similaires, phonologie partiellement transférable. Cet avantage accélère la progression jusqu'au niveau B2 mais diminue progressivement au-delà, car les niveaux C1 et C2 valorisent des compétences rhétoriques et stylistiques qui requièrent un apprentissage spécifique indépendant de la langue maternelle.

**Q : Puis-je préparer le DALF C1 gratuitement ?**
La majeure partie de la préparation peut s'effectuer avec des ressources gratuites. Les annales officielles sont disponibles gratuitement sur le site de France Éducation International. Les ressources de TV5Monde, de RFI Savoirs et de France Culture sont gratuites en accès libre. Les journaux français proposent des articles gratuits. Les coûts incontournables sont les frais d'inscription à l'examen et, si vous le souhaitez, des sessions de tutorat payant pour la correction de vos productions.
`;

// L5 extension (need ~2260 words)
const EXT_L5 = `
## L'approche des correcteurs : ce qu'ils cherchent et ce qu'ils pénalisent

Comprendre la perspective des correcteurs est un avantage préparatoire que peu de candidats exploitent pleinement. Les correcteurs du DALF C1 sont des professeurs de FLE certifiés et formés spécifiquement par France Éducation International sur les grilles d'évaluation officielles. Leur objectif n'est pas de «piéger» les candidats mais d'évaluer de manière équitable et standardisée les compétences communicatives à un niveau avancé.

Pour la production écrite, les correcteurs utilisent une grille d'évaluation en cinq grandes catégories : la pertinence et la cohérence du contenu, la capacité à organiser et structurer son texte, la richesse et la précision du lexique, la grammaticalité et la variété des structures syntaxiques, et le respect des conventions de genre pour le texte demandé. Chaque catégorie est notée sur un sous-total, et la note finale résulte de la pondération de ces différents critères. Un correcteur ne note pas de manière holistic (une impression générale) mais analytiquement, critère par critère.

Ce qui fait monter la note en production écrite, c'est la démonstration active d'une compétence avancée : utiliser des structures syntaxiques complexes et variées plutôt que des structures simples sûres, mobiliser un vocabulaire précis et nuancé plutôt que des termes génériques, articuler les transitions logiques entre les idées avec des connecteurs variés et appropriés, et exprimer une perspective personnelle cohérente et argumentée plutôt que de se limiter à une présentation neutre des points de vue des sources.

Ce qui fait baisser la note, c'est inversement la timidité linguistique — rester dans des constructions simples pour éviter les erreurs prive la copie de la richesse attendue à ce niveau — mais aussi les fautes systématiques (accord du participe passé, conjugaison des subjonctifs, accords en genre et nombre sur des éléments éloignés dans la phrase) qui signalent une maîtrise incomplète des mécanismes fondamentaux. Une production impeccable syntaxiquement mais pauvre lexicalement et peu argumentée ne sera pas mieux notée qu'une production lexicalement riche et bien argumentée avec quelques erreurs grammaticales non systématiques.

## Le format détaillé de la grille d'évaluation de la production orale

La production orale est notée selon des critères précis répartis en deux phases : l'exposé et l'interaction. La notation distingue les dimensions de la compétence phonologique et prosodique (prononciation, rythme, intonation, fluidité), de la cohérence discursive (structure de l'exposé, articulation logique, progression argumentative), de la richesse et de la précision lexicale et grammaticale, et de la capacité interactive (spontanéité des réponses aux questions, reformulation, nuancement sous la pression du questionnement).

Pour l'exposé de 8 à 10 minutes, les examinateurs écoutent et notent la qualité de la prise de parole dans sa globalité. Un bon exposé présente une introduction qui contextualise clairement le document source et annonce la problématique traitée, un développement qui analyse le document de manière critique et personnelle (pas seulement un résumé), et une conclusion qui synthétise les points essentiels et ouvre sur une perspective ou une question. La longueur de l'exposé importe : un exposé de seulement 3 minutes sur un document d'une page sera perçu comme insuffisant dans son développement.

Pour l'interaction de 10 minutes, les examinateurs testent la capacité du candidat à soutenir une conversation formelle sur un sujet intellectuellement exigeant. Ils peuvent demander au candidat de préciser une idée, de répondre à une objection, d'élargir son analyse à un contexte plus général, ou de réagir à un fait nouveau lié au thème traité. Les réponses attendues ne sont pas des réponses longues et mémorisées mais des réponses spontanées, naturelles et argumentées. Un candidat qui répond aux questions du jury par des phrases courtes sans développement sera pénalisé ; un candidat qui développe ses réponses avec des exemples pertinents et une logique claire sera valorisé.

## Gestion du temps lors de l'examen : stratégies par épreuve

Un des facteurs les plus importants dans la performance au DALF C1 est la gestion du temps, notamment lors des épreuves longues de compréhension collective et lors de la production écrite. Une mauvaise gestion du temps — passer trop long sur les premières questions et finir à la hâte, ou au contraire laisser des blancs par peur de manquer de temps — coûte des points facilement récupérables avec une organisation préalable.

Pour la compréhension de l'écrit (50 minutes environ pour un texte de 1 500 à 2 000 mots et 8 à 12 questions), une répartition raisonnée du temps serait : 5 minutes de lecture rapide du texte entier pour saisir le sujet, 5 minutes de lecture des questions avant de relire le texte, 30 minutes pour lire le texte en détail en localisent les réponses aux questions, 10 minutes pour rédiger les réponses. Ce minutering laisse une marge de sécurité de 5 à 10 minutes pour n'ayant pas réussi une ou deux questions.

Pour la production écrite (2h30 pour un texte de 400 à 600 mots), la répartition recommandée est : 20 à 25 minutes pour lire soigneusement le dossier documentaire, 15 minutes pour planifier la structure et les arguments de votre texte (un plan détaillé sur brouillon vous évite de bloquer devant la page blanche), 80 à 90 minutes pour rédiger, 15 minutes pour relire et corriger. Ne commencez pas à rédiger sans avoir un plan clair : un texte rédigé sans plan structuré perd souvent en cohérence et in progressivité ce qu'il gagne en rapidité d'exécution.

## La prise de notes efficace pour la compréhension de l'oral

La prise de notes lors de l'épreuve de compréhension de l'oral est une compétence spécifique qui s'apprend et se perfectionne. Plusieurs systèmes de notation efficaces peuvent être adoptés selon les habitudes et les préférences personnelles.

Le système de notation schématique utilise des abréviations personnelles standard : «→» pour une conséquence ou une implication, «≠» pour une opposition, «=» pour une équivalence ou une définition, «↑» pour une tendance à la hausse, «↓» pour une tendance à la baisse. Ces abréviations permettent de noter rapidement les relations entre les idées sans écrire des phrases complètes. Le système de notation en carte mentale (mind map) organise les informations autour d'un nœud central (le thème principal du document) avec des branches correspondant aux sous-thèmes et aux arguments. Cette organisation visuelle facilite la reconstruction de la structure du discours pour répondre aux questions.

Quelle que soit la méthode choisie, entraînez-la régulièrement pendant votre préparation sur les mêmes types de documents que ceux présentés au DALF C1, jusqu'à ce qu'elle devienne automatique. Le jour de l'examen, vous aurez besoin de capturer l'information le plus efficacement possible, et la technique de prise de notes doit être routinisée pour ne pas mobiliser d'énergie cognitive supplémentaire.

## Les thèmes récurrents au DALF C1 : se préparer culturellement

Si les sujets exacts varient d'une session à l'autre, les grandes thématiques qui reviennent au DALF C1 – et plus largement dans les certifications de français de niveau avancé – reflètent les préoccupations contemporaines de la société française et du monde francophone. S'y sensibiliser dans le cadre de la préparation enrichit à la fois la compréhension des documents et la capacité à répondre avec aisance aux épreuves de production.

La question de l'éducation (enjeux de l'éducation dans la société numérique, rôle de l'école dans la réduction des inégalités, apprentissage tout au long de la vie) est l'un des thèmes les plus fréquents. L'environnement et le développement durable (transition énergétique, changement climatique, biodiversité, alimentation durable) est un thème incontournable depuis plusieurs années. Les transformations du travail (automatisation, télétravail, uberisation de l'économie, droit à la déconnexion) sont régulièrement présentes. La santé (médecine personnalisée, désert médical, santé mentale, médecines alternatives) constitue un autre thème récurrent.

La culture et l'identité (patrimoine culturel, francophone et plurilinguisme, immigration et intégration, diversité culturelle) et les questions politiques et démocratiques (participation citoyenne, fake news et médias, mondialisation et souveraineté nationale) complètent le panorama thématique typique du DALF C1. En lisant régulièrement la presse française et en vous documentant sur ces thèmes, vous arriverez à l'examen avec un «fond» culturel et lexical qui facilitera la compréhension des documents et enrichira vos productions.

## Questions fréquentes complémentaires sur la structure de l'examen

**Q : Les documents de la compréhension de l'oral sont-ils toujours en français standard métropolitain ou peut-il y avoir des accents régionaux ou étrangers ?**
Les documents du DALF C1 sont en français, et peuvent inclure des locuteurs avec des accents variés reflétant la diversité du monde francophone : accents régionaux français, accents belges, suisses, canadiens, africains. Cette diversité est intentionnelle car elle teste la capacité du candidat à comprendre le français dans ses différentes réalisations phonologiques. Une préparation qui inclut l'écoute de locuteurs francophones issus de différentes régions et pays est donc recommandée.

**Q : Peut-on utiliser un correcteur orthographique pendant l'épreuve de production écrite ?**
Non. Aucun outil numérique n'est autorisé lors des épreuves. La production écrite est entièrement manuscrite sur une feuille d'examen fournie par le centre. La maîtrise de l'orthographe et de la grammaire sans assistance est donc une compétence à travailler spécifiquement pendant la préparation.

**Q : L'épreuve de production orale se déroule-t-elle toujours le même jour que les autres épreuves ?**
Pas nécessairement. Selon les centres et le nombre de candidats inscrits, la production orale peut se dérouler le même jour que les épreuves collectives ou à une date distincte. Le centre vous communiquera votre créneau horaire de production orale lors de la gestion des inscriptions ou au moment de la convocation. Bien noter et respecter ce créneau est important.

## Ressources supplémentaires pour les candidats avancés

Certains candidats au DALF C1 qui ont déjà un niveau solide peuvent trouver que les manuels classiques de préparation sont trop basiques. Voici des ressources plus avancées particulièrement adaptées à des candidats de niveau C1 entrant ou sortant.

Les ouvrages de rhétorique et d'argumentation en français — notamment «La Dissertation» de Michel Voirol (éditions CFU Pratique), les guides de rédaction académique publiés par diverses universités, et les manuels d'argumentation juridique ou philosophique — fournissent un cadre théorique et des outils pratiques pour perfectionner la construction argumentative de vos écrits et exposés. Le magazine Sciences Humaines, disponible en ligne et en kiosque, propose des dossiers thématiques très documentés sur des questions de société, rédigés dans un registre intermédiaire entre le journalisme grand public et l'article académique, idéal pour la préparation DALF C1.
`;

// L6 extension (need ~2150 words)
const EXT_L6 = `
## Les frais d'inscription et les aides financières disponibles

Le coût de l'inscription au DALF C1 ou C2 varie selon les pays et les centres, mais représente un investissement non négligeable pour certains candidats, notamment ceux dont les ressources financières sont limitées. Comprendre quelles aides peuvent réduire ou compenser ce coût est utile pour planifier l'inscription.

En France, les frais d'inscription au DALF C1 sont généralement compris entre 90 et 130 euros par session. La plupart des centres agréés acceptent le paiement par chèque, par virement ou par carte bancaire. Pour les candidats en difficulté financière qui étudient dans un établissement d'enseignement supérieur, certains services de vie étudiante ou associations étudiantes peuvent accorder une aide exceptionnelle pour couvrir tout ou partie des frais d'inscription. Renseignez-vous auprès du bureau des aides étudiantes ou du service social de votre université.

Dans certains pays où les instituts français sont financés partiellement par des fonds publics français, des tarifs réduits peuvent être accordés à des catégories de candidats prioritaires (étudiants boursiers, professeurs de français, demandeurs d'emploi). Ces réductions ne sont pas systématiques et varient selon les politiques locales de chaque institut. N'hésitez pas à contacter directement l'institut français ou l'alliance française du centre sélectionné pour vous renseigner sur d'éventuels dispositifs d'aide.

Pour les étudiants internationaux déjà en France, les frais d'inscription au DALF peuvent être inclus dans certains contrats de formation linguistique proposés par les universités ou les grandes écoles, qui financent la certification pour leurs étudiants dans le cadre du soutien linguistique. Vérifiez si votre établissement propose ce type de financement via son service des langues.

## Préparer son dossier d'admission avec le DALF : conseils pratiques

Une fois votre DALF C1 ou C2 obtenu, l'intégration de ce diplôme dans votre dossier d'admission doit se faire de façon claire et professionnelle pour maximiser son impact. Quelques conseils pratiques permettent d'optimiser la présentation de votre certification linguistique dans votre candidature.

Scannez votre diplôme DALF original en haute qualité (résolution minimale de 300 dpi, format PDF ou JPG) et conservez ce fichier en lieu sûr avec plusieurs copies de sauvegarde. Ce scan sera utilisé dans tous vos dossiers numériques d'admission. Pour les dossiers papier qui l'exigent, ayez plusieurs photocopies certifiées conformes de l'original disponibles — la certification est obtenue auprès d'une mairie, d'un notaire ou du centre d'examen selon les exigences de chaque établissement.

Dans votre lettre de motivation, mentionnez votre DALF C1 ou C2 non seulement comme une case à cocher mais comme un élément de votre profil qui témoigne de votre engagement dans la langue et la culture françaises. Un candidat qui mentionne les circonstances de sa préparation au DALF (autodidacte pendant 6 mois, cours intensif en immersion, préparation intégrée à ses études) donne une image plus vivante et crédible de sa maîtrise linguistique qu'un simple «DALF C1 obtenu en 2024».

Dans votre CV, créez une section «Langues» claire qui indique : Français — DALF C1 (ou C2), mois et année d'obtention. Cette présentation standardisée est immédiatement lisible par tout recruteur ou responsable des admissions familiarisé avec les certifications CECRL.

## Cas particuliers et situations spéciales d'inscription

Certaines situations méritent une attention particulière lors de l'inscription au DALF. Les candidats en situation de handicap permanent ou temporaire (mobilité réduite, troubles visuels, auditifs, dyslexie) peuvent demander des aménagements officiels de l'examen. Ces aménagements — temps supplémentaire, documents agrandis, salle séparée, présence d'un secrétaire — sont accordés sur présentation d'un justificatif médical ou d'une attestation de la MDPH (Maison Départementale des Personnes Handicapées) pour les candidats en France, ou d'un équivalent dans les pays de passage du centre.

La demande d'aménagement doit être soumise impérativement lors de l'inscription, avant la session, et non le jour de l'examen. Les délais varient selon les centres : certains demandent le justificatif médical au plus tard un mois avant la session, d'autres au moment de l'inscription. Ne découvrez pas à la dernière minute que vous avez besoin d'un aménagement : renseignez-vous dès le début du processus d'inscription si vous êtes dans une situation qui peut justifier un aménagement.

Pour les candidats en situation de grossesse avancée proche de la date d'examen, des adaptations de la salle (accès facilité, fauteuil adapté) peuvent généralement être accordées sans formalité médicale lourde sur simple demande au centre. Si votre date d'accouchement prévue est dans les semaines entourant la session à laquelle vous êtes inscrit, informez le centre au plus tôt pour anticiper les dispositions nécessaires.

## Reconnaître les faux centres et les arnaques liées à la certification DALF

L'engouement pour les certifications de langue française a malheureusement généré des tentatives d'arnaque que tout candidat doit connaître pour les éviter. Des sites internet prétendent proposer des certifications DALF sans passer par le réseau officiel de France Éducation International, à des prix souvent très inférieurs aux tarifs officiels. Ces certifications frauduleuses n'ont aucune valeur et ne seront pas reconnues par les établissements d'enseignement supérieur ou les administrations.

Pour vérifier qu'un centre est légitime, consultez uniquement le moteur de recherche officiel de France Éducation International (france-education-international.fr) qui liste tous les centres agréés. Un centre agréé affiche son agrément officiel, propose des tarifs dans les fourchettes reconnues, et suit les procédures standardisées (sujets identiques mondialement, grilles de notation certifiées). En cas de doute sur la légitimité d'un centre, contactez directement France Éducation International.

Des arnaques plus sophistiquées proposent de «vendre» des résultats DALF favorables contre paiement d'une somme importante. Ces offres sont frauduleuses et pénalement répréhensibles : les diplômes produits ne sont pas authentiques et ne résistent pas à la vérification par les institutions académiques. Ne donnez suite à aucune offre de ce type, quelque promettante qu'elle puisse paraître.

## Le suivi administratif post-examen : délais et contacts utiles

Après la session d'examen, le calendrier administratif qui mène à la réception du diplôme officiel suit plusieurs étapes dont la durée est variable selon les centres et les pays. Voici les délais typiques et les contacts à mobiliser à chaque étape.

La correction des épreuves écrites est effectuée par des correcteurs formés dans les semaines suivant la session. La notation de la production orale est réalisée par les examinateurs lors de l'épreuve elle-même, avec une révision de la notation par un second examinateur ou un superviseur selon les procédures du centre. La délibération finale, qui valide les notes et détermine les admis et les non-admis, intervient 4 à 6 semaines après la session.

La notification des résultats est effectuée par le centre : présentation d'une liste de résultats au centre (votre présence peut être requise), envoi de résultats par courrier électronique, ou accès à un espace en ligne selon les pratiques du centre. Si vous n'avez pas reçu de notification six semaines après la session, contactez le centre par e-mail ou par téléphone pour vous renseigner sur l'état des délibérations.

La production et l'envoi du diplôme officiel par France Éducation International vers le centre prend généralement quatre à huit semaines supplémentaires après la délibération. Le diplôme est ensuite remis ou expédié par le centre selon ses procédures. Comptez donc un délai total de trois à cinq mois entre la date de la session et la réception du diplôme officiel plastifié. Si votre dossier d'admission nécessite la présentation du diplôme original avant cette date, sollicitez au plus tôt une attestation de réussite provisoire auprès du centre.

## Témoignages complémentaires sur l'expérience de l'inscription et de l'examen

**Ngozi Adeyemi, 27 ans, Nigeria, passage à l'Institut Français d'Abuja** : «J'avais peur que la procédure d'inscription soit compliquée mais le site de l'Institut Français d'Abuja était très clair avec les dates, les tarifs et le formulaire en ligne. J'ai envoyé mes documents par e-mail, payé par virement, et reçu ma convocation deux semaines avant. Le jour de l'examen, l'organisation était impeccable et les examinateurs de l'oral étaient ponctuels et professionnels.»

**Danila Petrov, 29 ans, Russie, passage à Paris après avoir déménagé en France** : «J'ai dû choisir entre plusieurs centres à Paris pour ma session de DALF C1. J'ai finalement opté pour le centre de l'Alliance Française Paris Île-de-France car son calendrier correspondait mieux à mes disponibilités. L'inscription en ligne était simple. Pour l'oral, j'ai eu un créneau en fin d'après-midi, ce qui était pratique. Le résultat est arrivé sept semaines après l'examen par e-mail, avant le diplôme papier reçu deux mois plus tard.»

## Questions fréquentes supplémentaires sur l'inscription

**Q : Peut-on reporter son inscription au DALF à une session ultérieure après avoir payé les frais ?**
Les politiques de report varient selon les centres. Certains centres permettent un report de la candidature à la session suivante en cas de motif valable (maladie certificée, circonstances exceptionnelles), en conservant tout ou partie des frais payés. D'autres centres n'accordent pas de report et considèrent les frais acquis dès l'inscription confirmée. Vérifiez la politique du centre avant de vous inscrire si vous avez des incertitudes sur votre disponibilité à la date de la session.

**Q : Comment obtenir une double certification DALF C1 ET C2 le même jour ?**
Il n'est pas possible de passer les deux niveaux lors de la même session ou le même jour. C1 et C2 sont deux examens distincts qui se déroulent lors de sessions séparées. Si vous souhaitez obtenir les deux niveaux, vous devrez vous inscrire à deux sessions distinctes. La majorité des candidats qui vise le C2 choisit de passer directement le C2 s'ils estiment en avoir le niveau, sans «tester» le C1 préalablement.

**Q : Un DALF obtenu dans un pays étranger est-il valable pour une admission universitaire en France ?**
Oui, absolument. Un DALF C1 ou C2 obtenu dans n'importe quel centre agréé dans le monde entier a la même valeur et la même reconnaissance qu'un DALF obtenu en France. Le diplôme est émis par France Éducation International, quelle que soit la localisation du centre d'examen.

## Ressources officielles complémentaires

- [france-education-international.fr](https://www.france-education-international.fr) : Site officiel complet avec moteur de recherche de centres, calendriers et procédures
- [IF.fr – Instituts français](https://www.institutfrancais.com) : Réseau mondial des instituts français avec recherche de centres DALF
- [alliancefrancaise.net](https://www.alliancefrancaise.net) : Réseau mondial des alliances françaises, deuxième réseau d'organisation des sessions DALF
`;

await appendAndPatch('32d3fae1-2380-423c-bd33-6cfc98cc4693', TOP_L2);
await appendAndPatch('2ba85f3d-a957-4d2d-a409-9d476b648272', TOP_L3);
await appendAndPatch('43552b36-dbd4-45a5-90dc-57a50489795c', EXT_L4);
await appendAndPatch('aabc2950-a557-42fd-aa56-2d90aa214883', EXT_L5);
await appendAndPatch('ab646234-1557-47bc-be86-e73840dc02c8', EXT_L6);
