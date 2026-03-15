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

const TAIL = `
## Synthèse : naviguer dans le système avec méthode et persévérance

Le système des titres de séjour français est exigeant mais prévisible pour les personnes qui l'abordent avec méthode, anticipation et une information correcte. Les difficultés que rencontrent de nombreux étrangers dans leurs démarches administratives ne tiennent pas, pour la plupart, à une malveillance de l'administration ou à une impossibilité structurelle — elles tiennent à un manque d'information préalable, à un défaut d'anticipation des délais, ou à des erreurs évitables dans la constitution des dossiers.

La maîtrise des règles du jeu est la condition première d'une navigation administrative réussie. Savoir quelle catégorie de titre de séjour correspond à sa situation, quelles sont les pièces exactement requises pour sa préfecture, à quel moment anticiper chaque renouvellement, et quelles ressources mobiliser en cas de difficulté : ces connaissances ne s'acquièrent pas spontanément mais s'accumulent progressivement, avec l'expérience et avec l'aide des bonnes sources d'information.

La persévérance est la seconde vertu administrative indispensable. Le système administratif français est lent, parfois inefficient, souvent frustrant. Les délais sont longs, les dossiers peuvent être égarés, les rendez-vous sont difficiles à obtenir. Face à ces obstacles, maintenir une attitude proactive — relancer les dossiers, solliciter des informations, escalader les situations bloquantes vers les voies de recours disponibles — est plus efficace que l'attente passive ou la résignation.

La solidarité enfin, entre personnes qui traversent des expériences similaires, est une ressource essentielle. Les associations d'aide aux étrangers, les réseaux communautaires, les pairs qui ont traversé les mêmes démarches : ces soutiens humains complètent l'information juridique et administrative par une dimension humaine irremplaçable. Tendre la main vers ces ressources, ne pas hésiter à demander de l'aide, et contribuer à son tour à l'entraide quand on a acquis de l'expérience : voilà les valeurs qui rendent la traversée du système administratif non seulement plus efficace mais aussi plus humaine.

## Questions fréquentes et réponses essentielles

La complexité du droit des étrangers génère beaucoup d'interrogations pratiques qui méritent des réponses claires. Comment savoir si je dois renouveler mon titre de séjour ou en demander un de catégorie différente ? La réponse dépend de l'évolution de votre situation depuis l'obtention du titre actuel. Si votre situation est identique — même emploi, même formation, même situation familiale — le renouvellement dans la même catégorie est la voie normale. Si votre situation a évolué significativement — mariage avec un ressortissant français, changement d'emploi vers une autre catégorie, atteinte des cinq ans de résidence permettant la carte de résident — un changement de catégorie doit être envisagé.

Que faire si la préfecture refuse de me donner un rendez-vous ou si le système en ligne est inopérant ? Face à cette situation malheureusement fréquente dans certains départements, les voies de recours incluent le signalement via les plateformes de médiation administrative, la saisine du Défenseur des droits, la mise en demeure du préfet par courrier recommandé, et en dernier recours le référé devant le tribunal administratif. Des associations et avocats spécialisés connaissent ces procédures et peuvent aider à les mettre en œuvre.

Puis-je travailler pendant l'instruction de ma demande de renouvellement ? Dans la plupart des cas oui, si votre récépissé porte la mention « autorisé à exercer une activité professionnelle ». La vérification de cette mention sur le récépissé est impérative avant de continuer à travailler ou d'accepter un nouveau contrat.
`;

const EXTRA_L7 = `
## Les types de titres et les profils types : synthèse pratique

La diversité des types de titres de séjour reflète la diversité des situations des étrangers en France. La carte temporaire est le titre des débuts — celui des étudiants qui découvrent la France, des travailleurs fraîchement recrutés, des conjoints de Français nouvellement arrivés. La carte pluriannuelle est le titre de la progression — elle récompense une première phase d'ancrage et allège les contraintes administratives. La carte de résident est le titre de la stabilité — accessible après cinq ans, elle marque l'aboutissement de l'intégration durable.

Ces trois niveaux ne sont pas étanches : les situations individuelles évoluent et les transitions d'un niveau à l'autre sont la trajectoire naturelle de ceux qui s'installent durablement en France. Comprendre où l'on se situe dans cette trajectoire et anticiper les étapes suivantes est la forme la plus efficace de planification administrative pour un étranger en France.

Les ressources d'information pour naviguer dans ce système sont nombreuses et gratuites — service-public.fr, sites des préfectures, associations spécialisées, permanences juridiques. L'investissement dans cette information préalable est toujours rentable par rapport au coût des erreurs non évitées.
`;

const EXTRA_L8 = `
## Le titre étudiant et l'accès à la naturalisation : la trajectoire complète

Pour les étudiants qui souhaitent rester définitivement en France après leurs études, le titre étudiant est le premier maillon d'une chaîne administrative qui peut mener jusqu'à la naturalisation. La trajectoire type inclut : titre étudiant annuel, puis pluriannuel, puis titre de travail ou de vie privée après les études, puis carte de résident après cinq ans de résidence, et enfin naturalisation si souhaitée.

Chaque maillon de cette chaîne requiert de la vigilance, de l'anticipation et une intégration académique et sociale active. Les étudiants qui réussissent cette trajectoire complète sont ceux qui ont, dès le début, compris que leur titre de séjour était autre chose qu'une simple formalité administrative — c'était la confirmation légale de leur présence et de leur intégration dans la société française, qui mérite d'être cultivée avec soin.

Les ressources d'accompagnement disponibles — services des RI, associations d'étudiants, conseillers en orientation post-bac — sont là pour soutenir cette trajectoire à chaque étape. Les utiliser activement est le signe d'une démarche mature et déterminée.
`;

const EXTRA_L9 = `
## Le Passeport Talent Chercheur : une porte vers l'excellence scientifique française

La France est l'une des grandes puissances scientifiques mondiales, avec des organismes de recherche parmi les meilleurs du monde dans de nombreuses disciplines. Pour les chercheurs étrangers qui souhaitent contribuer à cette excellence, le Passeport Talent Chercheur est un titre précieux qui facilite leur installation et leur ancrage dans l'écosystème scientifique français.

La préparation d'une candidature à un poste de chercheur en France est une démarche ambitieuse qui requiert non seulement les qualifications académiques appropriées mais aussi une connaissance de l'organisation de la recherche française et des modalités de financement des postes. Les bourses Marie Skłodowska-Curie, les appels à projets ANR, les chaires d'excellence et les programmes de recrutement des grandes institutions (CNRS, INRAE, Inria, Inserm, CEA) sont autant de voies d'accès à un poste de recherche en France qui peut servir de base à une demande de Passeport Talent Chercheur.

La transparence dans les démarches, la rigueur dans la constitution du dossier de convention d'accueil, et la proactivité dans la gestion administrative sont les qualités qui permettront au chercheur étranger de vivre son séjour en France dans les meilleures conditions possibles.
`;

const EXTRA_L10 = `
## La carte de résident : un investissement dans une stabilité durable

Obtenir la carte de résident demande des années de régularité administrative, d'intégration active et de patience. Mais le bénéfice qu'elle apporte — une stabilité de dix ans renouvelable, un accès complet aux droits sociaux, une liberté de mouvement international accrue, et une crédibilité administrative considérablement renforcée — justifie amplement cet investissement.

Pour les personnes qui se projettent en France sur le long terme, la carte de résident n'est pas une option parmi d'autres mais une étape naturelle et souhaitable dans leur trajectoire administrative. Elle permet d'aborder les grandes décisions de vie — achat immobilier, projet entrepreneurial, évolution de carrière dans le secteur public — avec une assise administrative que les titres temporaires ne peuvent pas offrir.

La préparation de cette demande doit être initiée dès que les cinq ans de résidence régulière sont en vue, et le dossier doit être constitué avec le même soin que les dossiers précédents — car c'est un dossier qui, s'il est accordé, n'aura généralement besoin d'être refait que dans dix ans.
`;

const EXTRA_L11 = `
## Les titres de séjour en France : un système en constante évolution

Le paysage des titres de séjour français évolue continuellement, avec des réformes régulières qui ajoutent de nouvelles catégories, modifient les conditions d'accès existantes, ou changent les procédures de dépôt. Se tenir informé de ces évolutions est une responsabilité qui incombe à chaque titulaire de titre de séjour, car une règle valide il y a deux ans peut ne plus l'être aujourd'hui.

Les sources officielles — Légifrance pour les textes législatifs, les sites des préfectures pour les procédures locales, service-public.fr pour les guides pratiques — sont les fondements d'une information fiable. Elles doivent être complétées par la veille associative (GISTI, Cimade, FASTI) pour les aspects interprétatifs et les pratiques administratives locales qui ne sont pas toujours reflétées dans les textes officiels.

Considérer son titre de séjour comme un sujet vivant — à surveiller, à comprendre dans ses évolutions, à gérer activement — plutôt que comme un document administratif statique à renouveler mécaniquement, est la posture intellectuelle qui distingue les personnes qui naviguent avec succès dans ce système de celles qui le subissent.
`;

const EXTRA_L12 = `
## La naturalisation comme réalisation personnelle et collective

La naturalisation française est un moment qui appartient à la fois à la personne concernée — avec son histoire propre, ses sacrifices, ses accomplissements, son amour de la France — et à la société française dans son ensemble, qui s'enrichit de chaque nouvelle citoyenne et de chaque nouveau citoyen qui choisit de lui appartenir définitivement.

Cette double dimension — personnelle et collective — fait de la naturalisation bien plus qu'une procédure administrative : c'est un acte fondateur, une décision de vie et une affirmation d'identité. La France a besoin des talents, des perspectives, des cultures et des énergies de ceux qu'elle accueille et naturalise. Et ceux qui se naturalisent français trouvent dans cette appartenance nouvelle non pas la renonciation à leur histoire et à leurs origines, mais l'addition d'une dimension française à une identité qui ne cesse de s'enrichir.

La procédure est longue, exigeante et parfois décourageante. Mais l'engagement qu'elle demande est proportionnel à ce qu'elle représente : l'appartenance pleine et entière à l'une des grandes nations du monde, avec tous les droits et toutes les responsabilités qui en découlent.
`;

await appendAndPatch('aac8c4c1-7ab2-45b3-a5b5-4e2748f16939', TAIL + EXTRA_L7);
await appendAndPatch('2db95ef5-7de7-4bac-a68f-0ef96dddf981', TAIL + EXTRA_L8);
await appendAndPatch('c22002fe-75ce-41af-bd63-5ed570312d28', TAIL + EXTRA_L9);
await appendAndPatch('9419e826-62cc-4a80-96e5-638ba995184e', TAIL + EXTRA_L10);
await appendAndPatch('9a533bac-7df9-412e-922e-0dcdf500fd0b', TAIL + EXTRA_L11);
await appendAndPatch('42981160-abc6-46a3-a324-505dfc7ea75e', TAIL + EXTRA_L12);
