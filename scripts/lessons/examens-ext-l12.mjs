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

const EXT_L1 = `
## Les examens écrits anonymes : une garantie d'équité

L'anonymat des copies est une règle fondamentale de l'examen universitaire français. Avant d'entrer dans la salle, chaque étudiant reçoit un numéro d'anonymat qui remplace son identité sur la copie. Ce numéro est reporté sur le document rendu, et l'enveloppe contenant la correspondance numéro-identité n'est ouverte qu'après la correction et la notation de l'ensemble des copies d'une promotion. Ce dispositif vise à neutraliser les biais conscients ou inconscients que la connaissance du nom de l'étudiant pourrait introduire dans la notation — notamment les effets de réputation (favoriser un étudiant connu pour être brillant) ou de discrimination (pénaliser un prénom perçu comme étranger).

Pour les étudiants internationaux, l'anonymat des copies est une protection concrète contre certaines formes de discrimination que d'autres systèmes ne prévoient pas. La qualité du contenu académique de votre copie est ce qui compte, pas votre nom ni vos origines. Cette réalité doit être source de confiance : dans l'épreuve sur table, vous êtes jugé sur vos idées et votre maîtrise des contenus, à égalité formelle avec vos camarades français.

Des exceptions à l'anonymat existent dans les formats d'évaluation où l'identité est nécessairement visible : les exposés oraux, les rendus de dossier identifiés, les soutenances de mémoire. Dans ces formats, les enseignants sont conscients du risque de biais et les mieux formés s'appuient sur des grilles d'évaluation critériées pour objectiver au maximum leur notation.

## La reconnaissance des différences culturelles dans les examens

Les universités françaises, particulièrement celles accueillant un grand nombre d'étudiants internationaux (universités de Paris, Aix-Marseille, Bordeaux, Lyon), développent progressivement une sensibilité aux difficultés spécifiques des apprenants en langue étrangère. Si cette sensibilité ne se traduit pas encore systématiquement en procédures formelles d'aménagement, elle influence néanmoins la façon dont certains enseignants lisent les copies — avec une attention à la substance et à la rigueur de la pensée plutôt qu'à la seule qualité linguistique de surface.

Les étudiants internationaux peuvent aussi s'appuyer sur les services de soutien linguistique de l'université — centres de ressources en français langue étrangère, ateliers de rédaction académique — pour continuer à améliorer leur production écrite en français au fil du semestre. Ces services sont gratuits et s'adressent spécifiquement aux étudiants allophones.

## Stratégie globale de préparation aux différents formats d'examen

Une stratégie globale de préparation efficace reconnaît la diversité des formats d'évaluation et alloue du temps et des ressources différenciées à chacun. Pour les examens terminaux sur table (dissertation, cas pratique), la priorité est la maîtrise des contenus disciplinaires et la fluidité dans l'exercice de production écrite structurée. Pour les oraux, la pratique de l'expression orale en français académique — à travers des entraînements avec des camarades ou des enregistrements audio à se récouter — est indispensable. Pour les dossiers et les devoirs maison, la rigueur documentaire et la maîtrise des normes de citation sont les compétences centrales.

Construire un calendrier qui intègre les différentes dimensions de préparation pour chaque type d'épreuve, semaine после semaine, transforme la période d'examens d'un événement subi en un processus maîtrisé. Les étudiants qui réussissent le mieux à l'université française sont souvent non pas les plus intelligents mais les mieux organisés et les plus constants dans leur effort de préparation différenciée.

## L'utilisation des annales pour anticiper les sujets

Les annales — sujets d'examens des années précédentes — sont des ressources précieuses pour préparer les examens avec précision. Elles donnent une indication fiable des types de sujets régulièrement proposés, du niveau de complexité attendu, des thèmes récurrents et des formats de question utilisés par chaque enseignant. En droit, les cas pratiques des annales reflètent les problèmes juridiques que l'enseignant considère comme paradigmatiques dans le cours. En philosophie, les sujets de dissertation révèlent les problèmes centraux du programme. En économie, les exercices des annales signalent les types de modèles et de raisonnements mobilisés.

La pratique des annales ne doit pas se limiter à les lire : elle doit comprendre la résolution de sujets complets en conditions réelles, avec chronomètre. Cette confrontation régulière aux sujets passés est, avec la récupération active et la répétition espacée, l'une des méthodes de préparation les plus efficacement documentées sur le plan empirique.

## L'entretien de précision avec l'enseignant avant l'examen

Contrairement à ce que de nombreux étudiants croient, solliciter une rencontre avec l'enseignant avant l'examen pour clarifier des doutes sur le programme n'est ni une faiblesse ni une impertinence. Les enseignants universitaires français tiennent généralement des permanences (horaires affichés ou sur rendez-vous) spécifiquement destinées aux étudiants qui souhaitent poser des questions de compréhension.

Ces entretiens permettent de vérifier sa compréhension des notions clés, d'obtenir des précisions sur les contours du programme à maîtriser pour l'examen, et parfois même d'avoir un retour informel sur une dissertation d'entraînement. La démarche active de l'étudiant qui consulte son enseignant laisse aussi une impression positive qui peut influencer favorablement les décisions de jury en cas de note limite lors de la délibération.

La barrière psychologique à franchir est souvent plus grande pour les étudiants étrangers, qui peuvent avoir l'habitude de systèmes où la relation enseignant-étudiant est plus hiérarchique et distante. En France, particulièrement à l'université, l'enseignant est globalement accessible pour les questions académiques légitimes et apprécie généralement les étudiants qui manifestent une curiosité intellectuelle active vis-à-vis de sa discipline.
`;

const EXT_L2 = `
## Le rôle du travail en amont : travailler le cours semaine après semaine

La préparation aux examens la plus efficace commence dès le début du semestre, pas uniquement dans les semaines précédant les épreuves. Un étudiant qui relit ses notes de cours dans les 24 heures suivant chaque séance, complète les définitions manquantes, identifie les notions incomprises et les clarifie avant le cours suivant construisit une base solide et progressive. À l'inverse, un étudiant qui laisse s'accumuler les semaines sans revenir sur ses cours se retrouve face à un volume ingérable de matière à assimiler en quelques jours avant l'examen.

Cette accumulation tardive génère deux problèmes distincts. D'abord, la qualité de l'apprentissage est médiocre : la révision intensive de dernière minute produit une mémorisation superficielle et à court terme, qui s'évapore souvent dans les jours suivant l'examen. Ensuite, le stress est amplifié : se retrouver avec 150 pages de cours à maîtriser en 4 jours est objectivement angoissant, indépendamment des capacités réelles de l'étudiant.

Le contraste entre deux profils d'étudiants est saisissant : l'étudiant qui travaille 1 heure par jour tout au long du semestre arrive en période d'examens avec une maîtrise solide de la majorité du programme et n'a besoin que de consolider et d'organiser ses connaissances. L'étudiant qui n'a pas travaillé régulièrement arrive en période d'examens avec l'intégralité du programme à absorber et peu de temps pour le faire. Le résultat académique est presque inévitablement favorable au premier et défavorable au second, indépendamment du niveau d'intelligence de chacun.

## La prise de notes efficace en cours magistral

Le cours magistral est le format d'enseignement dominant dans les universités françaises, particulièrement en première et deuxième année de licence. Prendre des notes efficaces pendant un cours magistral dense est une compétence spécifique qui s'acquiert par la pratique.

Prendre des notes ne signifie pas transcrire intégralement ce que dit l'enseignant — c'est d'ailleurs impossible sous dictée normale, et inutile puisque les enregistrements ou les polycopiés couvrent souvent les contenus. La prise de notes efficace consiste à capturer les idées clés, les relations entre les concepts, les exemples importants et les définitions précises dans un format personnel organisé qui facilite la révision ultérieure.

Des techniques comme la méthode Cornell (page divisée en deux colonnes : notes brutes à droite, mots-clés et questions à gauche, résumé en bas de page) ou la carte mentale en temps réel (pour les esprits qui pensent visuellement) peuvent significativement améliorer la qualité de la prise de notes. L'important est de trouver un format personnel cohérent et de l'appliquer de façon équivalente dans tous les cours.

Pour les étudiants dont le français n'est pas la langue maternelle, la prise de notes en cours magistral pose le défi supplémentaire de la compréhension en temps réel d'un discours académique dense. Des stratégies pratiques : se placer dans les premières rangs (meilleure acoustique et visibilité des supports projetés), utiliser des abréviations personnelles dans la langue la plus confortable, enregistrer les cours avec l'accord de l'enseignant pour pouvoir réécouter les passages incompris, et systématiquement vérifier la compréhension des termes techniques inconnus après chaque séance.

## La bibliographie comme guide d'approfondissement

Chaque cours universitaire est accompagné d'une bibliographie — liste de références recommandées par l'enseignant pour approfondir les contenus du cours. Cette bibliographie est une boussole précieuse pour les étudiants qui souhaitent aller au-delà du polycopié et consolider leur compréhension des notions difficiles.

Dans la pratique, peu d'étudiants consultent la bibliographie recommandée de façon systématique. Ceux qui le font bénéficient d'un avantage compétitif : une compréhension plus nuancée et plus riche des notions, une capacité à citer des auteurs et des ouvrages de référence dans leurs productions écrites, et une culture disciplinaire plus développée que leurs camarades. En dissertation de niveau avancé (master), la référence précise aux travaux académiques de référence est souvent un critère distinctif entre les copies dans la fourchette 12-14 et celles dans la fourchette 15-17.

La bibliothèque universitaire met à disposition les ouvrages listés dans les bibliographies des cours, souvent en plusieurs exemplaires. La consultation sur place, même d'un seul chapitre ciblé sur une notion difficile, peut clarifier des confusions qui persistent après le cours et le polycopié.

## Gérer les matières les moins appréciées

Dans tout parcours universitaire, il existe des matières qui n'inspirent pas l'enthousiasme — soit parce qu'elles semblent éloignées du projet professionnel, soit parce que l'approche pédagogique de l'enseignant ne convient pas, soit parce que la discipline est intrinsèquement difficile à appréhender. La tentation est de négliger ces matières au profit de celles qui motivent davantage.

Cette stratégie est risquée pour deux raisons. D'abord, une mauvaise note dans une matière de coefficient élevé peut fortement abaisser la moyenne générale malgré d'excellents résultats dans d'autres UE. Ensuite, certaines matières auxiliaires — statistiques en sciences sociales, méthodologie de la recherche en lettres, droit constitutionnel en sciences politiques — constituent le socle de compétences transversales indispensables pour les niveaux supérieurs de la formation.

Face à une matière difficile ou peu motivante, quelques stratégies s'avèrent efficaces. Identifier les travaux travaux pratiques de la matière qui ont le plus d'impact sur la note finale et y consacrer un effort proportionnel. Chercher des ressources pédagogiques alternatives (podcasts, vidéos, manuels différents) qui traitent les mêmes contenus sous un angle plus accessible. Proposer ou rejoindre un groupe de révision collectif pour ces matières spécifiques.

## Les soutiens institutionnels méconnus

De nombreux étudiants arrivent à la fin d'un semestre sans avoir utilisé les ressources de soutien disponibles dans leur université, faute d'en avoir eu connaissance ou par autocensure. Ces ressources incluent les tutorats pairs (étudiants avancés qui accompagnent les nouveaux entrants sur les méthodes de travail et les contenus difficiles), les permanences d'enseignants-tuteurs, les ateliers méthodologiques organisés par les services de pédagogie universitaire, et les espaces de travail collaboratifs de la bibliothèque.

Pour les étudiants internationaux, les services dédiés (bureaux des relations internationales, associations d'étudiants étrangers, centres culturels) peuvent également orienter vers des ressources d'accompagnement académique spécifiques. Ces ressources sont gratuites, accessibles sur simple demande, et leur utilisation est le signe d'une maturité académique appréciée des institutions, pas d'une faiblesse à dissimuler.
`;

await appendAndPatch('60206990-344f-4a69-8aa7-830f51598227', EXT_L1);
await appendAndPatch('64771279-ba7e-4cb4-a525-214585a259a6', EXT_L2);
