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

const EXT_L9 = `
## L'importance de la régularité sur la durée du semestre

La préparation aux examens ne peut pas être efficacement dissociée de la qualité du travail académique ordinaire réalisé tout au long du semestre. Un étudiant qui assiste régulièrement aux cours, réalise les exercices de TD avec soin, relit ses notes dans les jours suivant chaque séance et soumet des devoirs maison réfléchis dispose, au moment de la période de révision, d'une base de connaissances solide et structurée. L'effort de révision finale consiste alors à consolider, organiser et mettre en forme ce qui est déjà largement maîtrisé — une tâche bien différente de devoir tout apprendre from scratch en quelques jours.

À l'inverse, l'absentéisme, la passivité en TD et l'accumulation de retards transforment la période de révision en une course contre la montre impossible à gagner sereinement. Les étudiants qui passent leurs examens avec le moins de stress ne sont pas ceux qui révisent le plus intensément dans la dernière semaine — ce sont ceux qui ont travaillé le plus régulièrement tout au long du semestre.

Cette régularité est d'autant plus importante pour les étudiants internationaux qui doivent simultanément assimiler des contenus disciplinaires exigeants et consolider leur maîtrise du français académique. Une charge de travail répartie équitablement sur seize semaines est bien plus gérable qu'une surcharge concentrée sur deux semaines.

## La cartographie du programme : identifier les notions cardinales

Tous les contenus d'un cours n'ont pas le même poids dans les examens. Les enseignants, consciemment ou non, ont des notions cardinales qu'ils considèrent comme le cœur de la discipline et qui reviennent systématiquement dans les sujets d'examen, quelle que soit la formulation spécifique du sujet. Identifier ces notions cardinales est une forme d'intelligence académique précieuse.

Comment les identifier ? Les premières séances du cours donnent souvent des indices : l'enseignant insiste sur certaines notions avec une emphase particulière, revient y faire référence dans plusieurs cours distincts, les utilise comme exemples paradigmatiques. La lecture du plan du cours révèle quels chapitres sont les plus développés (ils correspondent généralement aux notions que l'enseignant considère comme centrales). Les annales montrent quels types de sujets reviennent avec une fréquence supérieure à d'autres.

Une fois ces notions cardinales identifiées, consacrer-leur un effort de maîtrise approfondi est un investissement avec un retour garanti : quelle que soit la formulation exacte du sujet de l'examen, vous aurez des choses solides et précises à dire sur ces notions fondamentales.

## La diversification des méthodes de révision selon les matières

Il n'existe pas une méthode universelle de révision equally efficace dans toutes les disciplines. Les besoins cognitifs diffèrent selon les matières, et les méthodes de révision les plus efficaces doivent être adaptées en conséquence.

En mathématiques et en sciences exactes, la pratique d'exercices est la méthode de révision irremplaçable. Comprendre un raisonnement en le lisant est une condition nécessaire mais pas suffisante pour être capable de le reproduire face à un exercice inédit. La résolution de problèmes variés, à des niveaux de difficulté progressifs, est la seule méthode qui développe la flexibilité cognitive nécessaire pour traiter les exercices de l'examen.

En droit, la mémorisation des textes et de la jurisprudence est fondamentale, mais insuffisante sans la capacité à appliquer ces règles à des cas pratiques. La construction de fiches de jurisprudence détaillées et la résolution de cas pratiques d'entraînement sont les meilleures préparations.

En sciences sociales, la maîtrise des théories de référence et des données empiriques importantes doit être combinée avec la pratique de la dissertation sur des sujets de niveau comparable à ceux de l'examen. Les arguments doivent être mobilisables rapidement et de façon structurée, pas seulement «su» de façon diffuse.

En langues étrangères, seule la pratique active (production orale et écrite en langue cible) prépare réellement aux épreuves d'expression. Relire des textes en langue étrangère aide à consolider le vocabulaire passif mais ne développe pas la compétence de production active.

## L'écriture régulière comme entraînement

Pour les disciplines dont les examens impliquent une production écrite significative (dissertation, commentaire, note de synthèse), l'écriture régulière tout au long du semestre est un entraînement indispensable qui ne peut pas être remplacé par des révisions passives. Écrire est une compétence qui s'améliore par la pratique — et uniquement par la pratique.

Des exercices d'écriture réguliers, même courts et informels, contribuent au développement de cette compétence. Rédiger chaque semaine un paragraphe d'argument structuré (affirmer une thèse, illustrer avec un exemple précis, analyser le lien entre l'exemple et la thèse), rédiger des introductions d'entraînement sur des sujets variés, ou produire des petites synthèses de lecture en quelques paragraphes — toutes ces pratiques développent la fluidité d'expression et la capacité à structurer la pensée sous contrainte temporelle.

Pour les étudiants dont le français est une langue étrangère, l'écriture régulière en français est d'autant plus précieuse : elle permet d'intégrer progressivement les formules, les connecteurs logiques et le registre académique dans le répertoire linguistique actif, transformant ce qui était un effort conscient en automatisme fluide.

## Construire un environnement de travail favorable

L'environnement physique et mental dans lequel vous travaillez influence directement la qualité et l'efficacité de votre travail de révision. Un espace de travail organisé, sans désordre distrayant, avec une bonne luminosité, une température confortable et le matériel nécessaire à portée de main favorise la concentration et réduit la friction cognitive qui retarde le démarrage et les interruptions.

La gestion des distractions numériques est l'un des défis majeurs de la révision contemporaine. Les notifications de réseaux sociaux, les messages instantanés et les flux d'actualité constituent une sollicitation compétitive permanente qui fragmente l'attention et réduit la qualité de la concentration profonde (deep work) nécessaire à l'apprentissage académique exigeant. Des outils comme Forest (app anti-distraction), Cold Turkey ou simplement le mode «ne pas déranger» et le téléphone dans une pièce différente permettent de créer des plages de concentration protégées.

La qualité du sommeil est directement corrélée à la qualité de la consolidation mémorielle. Le sommeil joue un rôle biologique dans le transfert des informations de la mémoire à court terme vers la mémoire à long terme — un processus appelé consolidation mnésique. Sacrifier le sommeil pour réviser davantage est donc doublement contre-productif : on perd en qualité mémorielle ce qu'on croit gagner en heures de révision.
`;

const EXT_L10 = `
## L'adaptation linguistique accélérée : immersion académique

Pour les étudiants internationaux qui arrivent avec un niveau de français satisfaisant mais pas encore pleinement adapté aux registres académiques universitaires, une stratégie d'immersion active et ciblée accélère considérablement la progression. Cette immersion ne consiste pas simplement à regarder des films ou à parler avec des locuteurs natifs (même si ces pratiques sont précieuses pour la langue orale quotidienne), mais à s'exposer intensivement aux textes académiques de la discipline dans laquelle on se spécialise.

Lire activement des articles scientifiques, des chapitres de manuels de référence et des copies de dissertation corrigées avec commentaires dans sa discipline permet d'absorber les structures syntaxiques, le vocabulaire technique et les conventions argumentatives spécifiques au champ académique concerné. Cette lecture active — avec un carnet dans lequel on note les expressions idiomatiques, les connecteurs logiques, les formulations de nuance et les tournures récurrentes — est un investissement linguistique à haut rendement.

La fréquentation régulière des séminaires, conférences et tables rondes organisés dans l'université (souvent ouverts à tous les étudiants, pas seulement aux doctorants) expose à un usage vivant et sophistiqué du français académique oral, complétant l'exposition écrite par les lectures.

## Les codes non écrits de l'évaluation académique française

Chaque discipline universitaire française a des codes non écrits sur ce qui est valorisé et ce qui est pénalisé dans les évaluations, codes que les étudiants qui ont été socialisés dans le système depuis le lycée connaissent implicitement mais que les étudiants internationaux doivent apprendre explicitement.

En philosophie, utiliser le jargon philosophique de façon précise est valorisé, mais ce même jargon utilisé sans maîtrise réelle (pour faire savant) est facilement identifiable et pénalisé. L'enseignant de philosophie cherche à voir si vous comprenez vraiment les concepts que vous utilisez, et non si vous savez les réciter.

En droit, la précision terminologique est absolue : une confusion entre «nullité relative» et «nullité absolue», entre «rescission» et «résolution», entre «ordonnance» et «décret» dans une copie de droit civil est une faute grave qui trahit une méconnaissance des fondamentaux juridiques. La rigueur terminologique est en droit non pas un luxe formel mais la substance même de la discipline.

En économie, la modélisation formelle (graphiques, équations) est attendue et valorisée même dans les épreuves écrites — un développement en économie sans le moindre modèle formel paraît insuffisamment rigoureux dans la plupart des universités françaises. Mais ce formalisme doit toujours être accompagné d'une interprétation économique en langage clair, sans quoi il reste creux.

## Les spécificités méthodologiques des grandes disciplines

La méthodologie du travail universitaire dans les grandes disciplines françaises présente des particularités que les étudiants étrangers gagnent à comprendre rapidement.

En sciences humaines et sociales (sociologie, anthropologie, sciences politiques, histoire), la confrontation des sources multiples et la perspective critique sont les valeurs académiques centrales. Un devoir académique dans ces disciplines qui présente une seule perspective n'est pas considéré satisfaisant : l'étudiant est attendu sur sa capacité à mettre en tension des approches théoriques contradictoires et à prendre position de façon argumentée dans ce débat.

En lettres modernes et comparées, la précision textuelle est la règle d'or. Un commentaire de texte qui paraphrase sans citer le texte au niveau de la phrase ou du syntagme ne satisfait pas les attentes du niveau universitaire. La citation précise, avec la référence exacte (page, acte et scène pour le théâtre, chant pour la poésie épique), est la base sur laquelle s'appuie toute interprétation.

En sciences de gestion et en économie appliquée, les études de cas réels et les données chiffrées récentes sont fortement valorisées. Un devoir qui mobilise des exemples d'actualité documentés d'entreprises ou de politiques économiques réelles est toujours mieux perçu qu'un devoir qui reste à un niveau purement théorique et abstrait.

## La maîtrise des consignes : lire et relire le sujet

Une erreur récurrente dans les examens, même chez des étudiants bien préparés, est le hors-sujet — traiter un sujet différent de celui qui a été posé. Cette erreur est souvent liée à une lecture insuffisante des consignes : l'étudiant reconnaît les mots-clés du sujet, les associe à des connaissances préparées, et traite ces connaissances sans vérifier que le sujet posé correspond exactement à la problématique pour laquelle ces connaissances ont été préparées.

La règle des trois lectures est une pratique recommandée par de nombreux conseillers pédagogiques. Première lecture : lire le sujet en entier, sans rien noter, pour avoir une première impression globale. Deuxième lecture : lire mot par mot, en soulignant les termes clés, les verbes de consigne («analysez», «discutez», «montrez», «comparez»), les délimitations thématiques et temporelles. Troisième lecture : reformuler mentalement le sujet dans ses propres mots pour vérifier que vous avez bien compris ce qui est demandé, avant de commencer le brouillon du plan.

Cette procédure prend cinq minutes mais peut éviter l'erreur de hors-sujet qui coûte des points précieux même dans une copie par ailleurs bien rédigée.

## Anticiper et se préparer aux questions inattendues

Une partie de la difficulté des examens universitaires tient au fait qu'on ne sait pas exactement quel sujet tombera. Cette incertitude génère une forme de stress anticipatoire diffuse qui peut inhiber certains étudiants. La réponse la plus efficace à cette incertitude est l'élargissement du champ de préparation : ne pas réviser uniquement les thèmes les plus probables mais viser une maîtrise large et flexible du programme, capable de répondre à des sujets sur n'importe quel angle du cours.

Cette préparation flexible est distincte de la préparation superficielle qui «survole» tout sans rien approfondir. Il s'agit de comprendre les notions fondamentales du programme avec suffisamment de profondeur pour les mobiliser dans des configurations argumentatives variées, pas de mémoriser des résumés couvrant toutes les parties du cours de façon équivalente.

Cette intelligence de la préparation — travailler les fondamentaux en profondeur plutôt que l'ensemble de surface — est l'une des compétences académiques les plus valorisantes à long terme, car elle développe une forme de maîtrise disciplinaire qui transcende les épreuves individuelles et construit une identité académique solide.
`;

await appendAndPatch('7f3d3ec0-4d6d-44d8-b1b7-581645697126', EXT_L9);
await appendAndPatch('8f0bbec0-b172-491a-8af8-1380a47d0497', EXT_L10);
