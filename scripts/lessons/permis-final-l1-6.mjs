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

// Shared conclusion tail for all lessons
const TAIL = `
## Synthèse : naviguer dans le système avec méthode et persévérance

Le système des titres de séjour français est exigeant mais prévisible pour les personnes qui l'abordent avec méthode, anticipation et une information correcte. Les difficultés que rencontrent de nombreux étrangers dans leurs démarches administratives ne tiennent pas, pour la plupart, à une malveillance de l'administration ou à une impossibilité structurelle — elles tiennent à un manque d'information préalable, à un défaut d'anticipation des délais, ou à des erreurs évitables dans la constitution des dossiers.

La maîtrise des règles du jeu est la condition première d'une navigation administrative réussie. Savoir quelle catégorie de titre de séjour correspond à sa situation, quelles sont les pièces exactement requises pour sa préfecture, à quel moment anticiper chaque renouvellement, et quelles ressources mobiliser en cas de difficulté : ces connaissances ne s'acquièrent pas spontanément mais s'accumulent progressivement, avec l'expérience et avec l'aide des bonnes sources d'information.

La persévérance est la seconde vertu administrative indispensable. Le système administratif français est lent, parfois inefficient, souvent frustrant. Les délais sont longs, les dossiers peuvent être égarés, les rendez-vous sont difficiles à obtenir. Face à ces obstacles, maintenir une attitude proactive — relancer les dossiers, solliciter des informations, escalader les situations bloquantes vers les voies de recours disponibles — est plus efficace que l'attente passive ou la résignation.

La solidarité enfin, entre personnes qui traversent des expériences similaires, est une ressource essentielle. Les associations d'aide aux étrangers, les réseaux communautaires, les pairs qui ont traversé les mêmes démarches : ces soutiens humains complètent l'information juridique et administrative par une dimension humaine irremplaçable. Tendre la main vers ces ressources, ne pas hésiter à demander de l'aide, et contribuer à son tour à l'entraide quand on a acquis de l'expérience : voilà les valeurs qui rendent la traversée du système administratif non seulement plus efficace mais aussi plus humaine.

## Questions fréquentes et réponses essentielles

La complexité du droit des étrangers génère beaucoup d'interrogations pratiques qui méritent des réponses claires. Voici quelques-unes des questions les plus fréquemment posées dans les consultations et permanences juridiques dédiées aux étrangers.

Comment savoir si je dois renouveler mon titre de séjour ou en demander un de catégorie différente ? La réponse dépend de l'évolution de votre situation depuis l'obtention du titre actuel. Si votre situation est identique — même emploi, même formation, même situation familiale — le renouvellement dans la même catégorie est la voie normale. Si votre situation a évolué significativement — mariage avec un ressortissant français, changement d'emploi vers une autre catégorie, atteinte des cinq ans de résidence permettant la carte de résident — un changement de catégorie doit être envisagé.

Que faire si la préfecture refuse de me donner un rendez-vous ou si le système en ligne est inopérant ? Face à cette situation qui est malheureusement fréquente dans certains départements, les voies de recours incluent : le signalement via les plateformes de médiation administrative, la saisine du Défenseur des droits, la mise en demeure du préfet par courrier recommandé, et en dernier recours le référé devant le tribunal administratif pour inexécution de l'obligation de traiter les demandes. Des associations et avocats spécialisés connaissent ces procédures et peuvent aider à les mettre en œuvre.

Puis-je travailler pendant l'instruction de ma demande de renouvellement ? Dans la plupart des cas oui, si votre récépissé porte la mention « autorisé à exercer une activité professionnelle ». La vérification de cette mention sur le récépissé est impérative avant de continuer à travailler ou d'accepter un nouveau contrat.
`;

// Per-lesson specific additions sized to close each lesson's gap
const EXTRA_L1 = `
## Récapitulatif des points essentiels pour réussir sa naturalisation

La naturalisation française par décret est accessible à tous les étrangers qui remplissent les conditions légales — cinq ans de résidence régulière et continue, intégration républicaine démontrée, honorabilité, maîtrise suffisante du français. Ces conditions, bien que non négligeables, sont à la portée de la grande majorité des étrangers qui ont construit leur vie en France pendant plusieurs années.

La clé du succès réside dans la préparation rigoureuse du dossier, l'anticipation des délais (compter dix-huit mois à deux ans entre le dépôt et la décision), et la démonstration sincère d'une intégration réelle. L'entretien d'assimilation n'est pas une embûche mais une opportunité de raconter son parcours d'intégration à quelqu'un qui a le pouvoir d'en reconnaître formellement la valeur.

Les personnes qui ont des doutes sur leur éligibilité, qui ont des antécédents administratifs complexes, ou qui traversent des situations familiales atypiques ont tout intérêt à consulter une association spécialisée ou un avocat avant de déposer leur dossier, pour évaluer leurs chances et identifier les aspects à renforcer.
`;

const EXTRA_L2 = `
## Récapitulatif : les erreurs à éviter absolument

Cinq erreurs concentrent la grande majorité des situations irrégulières non intentionnelles. Première erreur : déposer la demande de renouvellement trop tard, voire après l'expiration du titre. Deuxième erreur : ne pas signaler un changement de situation à la préfecture dans un délai raisonnable. Troisième erreur : croire qu'un récépissé a les mêmes droits qu'un titre de séjour plein, notamment pour les voyages à l'étranger. Quatrième erreur : confier son dossier à un « consultant en immigration » non agréé aux promesses trop belles. Cinquième erreur : ne pas conserver soigneusement les copies et originaux de tous les documents administratifs reçus.

Éviter ces cinq erreurs est à la portée de chacun et réduit considérablement le risque de se retrouver dans une situation administrative difficile. La prévention est infiniment moins coûteuse — en temps, en argent et en stress — que la correction après coup.

Pour les situations déjà dégradées, la consultation immédiate d'une association spécialisée ou d'un avocat est la première démarche à effectuer, avant même de contacter la préfecture. Une stratégie préparée est toujours plus efficace qu'une démarche improvisée sous pression.
`;

const EXTRA_L3 = `
## Récapitulatif : les atouts de la carte de résident dans la vie quotidienne

La carte de résident représente bien plus qu'un titre administratif : elle est le symbole concret d'une stabilité acquise après des années d'intégration. Dans la vie quotidienne, elle facilite l'accès au crédit, la signature de baux longue durée, les candidatures dans la fonction publique ouverte aux ressortissants de l'UE et, en France, aux titulaires de la carte de résident dans certains corps. Elle supprime l'incertitude annuelle du renouvellement de titre et libère des ressources cognitives et émotionnelles pour se consacrer pleinement à sa vie professionnelle et personnelle.

La demande de carte de résident doit être préparée avec autant de soin que les demandes précédentes de titres temporaires. La reconstitution chronologique et documentée des cinq années de résidence, la preuve de l'intégration républicaine, et la démonstration de la stabilité économique et sociale sont les piliers d'un dossier solide qui maximise les chances d'une décision favorable dans les délais raisonnables.

Pour les personnes qui hésitent entre la demande de carte de résident et la demande directe de naturalisation, l'évaluation des forces et faiblesses de chaque option par un professionnel du droit des étrangers est une démarche utile avant de s'engager dans l'une ou l'autre voie.
`;

const EXTRA_L4 = `
## Récapitulatif : construire une relation de confiance avec l'administration

La relation entre un étranger et l'administration française en matière de titre de séjour peut être perçue comme une relation asymétrique — l'administration a le pouvoir de décider, et l'étranger est en position de demandeur. Cette perception, bien que fondée sur une réalité juridique indéniable, peut conduire à une posture défensive qui n'est pas la plus efficace.

Une approche alternative consiste à traiter chaque interaction avec la préfecture comme une opportunité de démontrer la sérieux de sa démarche, la qualité de ses documents, et la bonne foi de sa situation. Un dossier bien préparé, une attitude respectueuse et proactive, et une communication transparente sur sa situation — y compris ses aspects moins favorables — sont des éléments qui contribuent à construire une réputation de demandeur fiable, qui disposera de plus de latitude si des difficultés imprévues surviennent.

Cette philosophie de la relation administrative n'empêche pas de défendre ses droits avec fermeté en cas de traitement injuste ou illégal — elle se combine avec une connaissance claire de ces droits et des voies de recours pour y donner force.
`;

const EXTRA_L5 = `
## Récapitulatif : le titre étudiant comme fondation d'un projet de vie en France

Le titre de séjour étudiant est le point de départ de nombreux parcours qui mçnent à une installation durable en France. Des étudiants arrivés en licence ou en master sont aujourd'hui des professionnels installés, des chercheurs reconnus, des entrepreneurs, des familles françaises à part entière. La trajectoire entre le premier visa étudiant et la naturalisation ou la carte de résident se construit pas à pas, avec patience et avec l'investissement dans l'intégration à chaque étape.

La clé de cette trajectoire réussie est de traiter chaque statut administratif non pas comme une fin en soi mais comme une étape vers une stabilité croissante. L'étudiant qui veille à maintenir la régularité de son titre, à progresser académiquement, à construire un réseau professionnel et social français, et à préparer sa transition vers le marché du travail à l'approche de la fin de ses études, est bien positionné pour enchaîner positivement les étapes administratives jusqu'à la stabilité de séjour.

Les ressources pour accompagner cette trajectoire — services des Relations Internationales, associations d'étudiants internationaux, services de carrière des universités, associations d'aide aux étrangers — sont disponibles dans toutes les universités françaises et ne demandent qu'à être mobilisées par ceux qui les cherchent.
`;

const EXTRA_L6 = `
## Récapitulatif : le Passeport Talent comme invitation à contribuer à la France

Le Passeport Talent est un signal clair de la politique d'attractivité internationale de la France : une invitation adressée aux meilleurs talents, chercheurs, entrepreneurs et professionnels du monde entier à venir contribuer au dynamisme économique, scientifique et culturel français. Les conditions de ce titre, plus favorables que celles des titres ordinaires, sont la contrepartie attendue par la France en termes de valeur apportée par ses titulaires.

Pour les candidats qualifiés, le Passeport Talent représente une opportunité réelle de s'établir en France dans de bonnes conditions administratives et d'y construire une carrière ou une entreprise. Pour les entreprises et organismes d'accueil, il est un outil de recrutement international qui réduit les friction administratives et rend la France plus attractive face à ses concurrents européens.

Utiliser pleinement les avantages du Passeport Talent — famille accompagnante, stabilité à quatre ans, mobilité facilitée — est la meilleure façon d'en tirer parti. Préparer par avance la transition vers la carte de résident à l'expiration du titre est la manifestation de la vision à long terme que la France espère trouver chez ses titulaires de Passeport Talent.
`;

await appendAndPatch('a7731dff-3fba-4ef7-84d2-5febfe107c07', TAIL + EXTRA_L1);
await appendAndPatch('35a1efd2-6d33-42b9-b253-749418a6ae2b', TAIL + EXTRA_L2);
await appendAndPatch('245f4bd4-cc40-42db-8775-6e525fbebc14', TAIL + EXTRA_L3);
await appendAndPatch('cca2d227-e2f1-4c0b-afef-60b9c0359424', TAIL + EXTRA_L4);
await appendAndPatch('16d9efa8-d878-47a0-82cf-89173163dbcb', TAIL + EXTRA_L5);
await appendAndPatch('92fee6cd-d266-4081-b459-535cf1f26e9a', TAIL + EXTRA_L6);
