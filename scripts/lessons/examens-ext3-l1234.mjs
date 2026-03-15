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

// L1 3641 needs ~400 more
const ADD_L1 = `
## Synthèse : choisir la stratégie d'évaluation adaptée à chaque cours

La diversité des formats d'évaluation universitaires français n'est pas un obstacle à surmonter mais un dispositif pédagogique qui permet de mesurer différentes dimensions de la compétence académique. Savoir anticiper quel format s'applique à chaque UE, calibrer sa méthode de préparation en conséquence et construire une vision séquentielle du semestre sont les compétences organisationnelles qui transforment un bon étudiant en un excellent étudiant. Les étudiants internationaux qui investissent le temps nécessaire pour comprendre ce système dans ses détails — en lisant les règlements des études, en consultant les secrétariats pédagogiques et en utilisant les annales disponibles — se donnent les meilleures chances d'une adaptation réussie et rapide au système universitaire français. Le système, dans sa complexité, est fondamentalement juste : il évalue sur la base de productions anonymes, offre une seconde chance en session 2, et dispose de mécanismes de compensation qui protègent contre les coups de malchance isolés. Comprendre cette architecture globale, c'est se positionner comme acteur stratégique de sa propre réussite académique.
`;

// L2 3432 needs ~600 more
const ADD_L2 = `
## La lecture active comme méthode de préparation fondamentale

La lecture active — lire un texte avec un objectif précis, en annotant, en questionnant et en reformulant — est une méthode de préparation fondamentale souvent négligée au profit d'une révision passive. Pour préparer efficacement les examens, pratiquer la lecture active des textes du programme implique de se munir d'un crayon ou d'un outil de surlignage numérique et de marquer les passages clés, de noter dans les marges des questions ou des réactions, de formuler à voix basse ou par écrit l'idée principale de chaque paragraphe. Cette pratique transforme la lecture d'une expérience passive en un engagement actif avec le texte qui consolide la compréhension et la mémorisation de façon bien plus efficace.

Après une session de lecture active, une récapitulation immédiate — noter de mémoire les trois à cinq idées principales du passage lu, sans consulter le texte — double l'efficacité mémorielle de la session. Ce protocole simple (lecture active + récapitulation sans support) peut être systématisé pour n'importe quel corpus de cours et constitue l'un des investissements les plus rentables en termes de temps de préparation.

Pour les étudiants qui rédigent des commentaires de texte ou des dissertations mobilisant des textes au programme, la lecture active est aussi une préparation directe à l'examen : les annotations et reformulations réalisées pendant la lecture deviennent des matériaux argumentatifs mobilisables dans la production écrite.

## L'organisation du temps libre pendant les examens

La gestion du temps libre pendant la période d'examens mérite une attention spécifique. Si le travail intensif est nécessaire, les périodes de récupération et de détente sont tout aussi indispensables pour maintenir la performance cognitive sur la durée. Des loisirs réguliers — sport léger, sorties culturelles courtes, conversations sociales — ne sont pas du temps perdu : ils permettent à l'esprit de se reposer et de favoriser la consolidation mémorielle du travail effectué.
`;

// L3 3190 needs ~850 more
const ADD_L3 = `
## Les procédures d'aménagement pour les étudiants en situation de handicap psychique

Les handicaps psychiques — troubles anxieux sévères, troubles de la personnalité, troubles bipolaires, schizophrénie — sont des situations de handicap dont la visibilité est moins immédiate que les handicaps physiques ou sensoriels, mais dont l'impact sur les capacités académiques peut être tout aussi significatif. Les universités françaises ont progressivement développé des procédures spécifiques pour accompagner ces étudiants, notamment depuis la prise de conscience des enjeux de santé mentale étudiante accélérée par la période COVID-19.

La reconnaissance d'un handicap psychique pour l'obtention d'aménagements d'examens nécessite un certificat médical établi par un médecin spécialisé (psychiatre, psychologue clinicien avec protocole de diagnostic formalisé), précisant la nature des limitations fonctionnelles et les recommandations d'aménagement. Ce certificat est transmis au service handicap de l'université en toute confidentialité — les enseignants ne sont pas informés du diagnostic, seulement des aménagements accordés.

Les aménagements les plus courants pour les handicaps psychiques incluent le tiers-temps (pour gérer les fluctuations de concentration), la salle séparée (pour réduire l'anxiété sociale liée au grand groupe), les pauses autorisées pendant l'épreuve (pour gérer les crises d'angoisse ou les décompensations passagères), et la présence d'un référent médical joignable par téléphone pendant l'épreuve.

## Le contrat pédagogique personnalisé

Dans certaines formations, les étudiants en grande difficulté peuvent bénéficier d'un contrat pédagogique personnalisé (CPP) — un document co-construit entre l'étudiant, un tuteur académique et le responsable de formation, qui définit des objectifs académiques adaptés, un calendrier de progression personnalisé et des modalités d'évaluation potentiellement aménagées. Ce dispositif, présent dans les universités qui ont développé une politique forte d'aide à la réussite, permet un suivi individualisé plus proche des besoins réels de l'étudiant que les dispositifs standardisés.

Le CPP n'est pas un raccourci vers le diplôme — les exigences académiques fondamentales ne sont pas allégées. C'est un cadre d'accompagnement qui reconnaît que certains étudiants ont besoin d'un parcours non standard pour atteindre les mêmes objectifs que leurs camarades, et qui formalise les engagements mutuels de l'étudiant et de l'équipe pédagogique dans ce processus.

## Les associations de défense des droits étudiants en France

La connaissance de ses droits académiques serait incomplète sans la connaissance des acteurs collectifs qui défendent et font évoluer ces droits. En France, plusieurs structures jouent ce rôle. La FAGE (Fédération des Associations Générales Étudiantes) est le premier syndicat étudiant en nombre d'adhérents. L'UNEF (Union Nationale des Étudiants de France) est historiquement la plus ancienne organisation étudiante française. La Conférence des Présidents d'Université (CPU), maintenant France Universités, représente les établissements mais intervient également dans les débats sur les droits des étudiants à l'échelle nationale. Ces organisations publient régulièrement des guides de droits des étudiants, organisent des permanences juridiques et militent pour l'amélioration des conditions d'études et d'évaluation — recursos à mobiliser sans hésitation en cas de difficulté.
`;

// L4 3236 needs ~800 more
const ADD_L4 = `
## Les décisions de jury en cas de résultats borderline

Les situations borderline — étudiants avec une moyenne très proche du seuil de 10/20 après application de la compensation — sont les cas qui mobilisent le plus le pouvoir discrétionnaire des jurys de délibération. Dans ces situations, les jurys examinent des éléments contextuels qui vont au-delà des seules notes : la progression de l'étudiant au cours du semestre (des notes qui s'améliorent après un mauvais démarrage sont une information positive), son assiduité et sa participation (un étudiant présent et engagé, même avec des résultats insuffisants, peut bénéficier d'une lecture plus favorable), et les circonstances particulières documentées (problème de santé, difficultés d'adaptation).

Pour maximiser les chances d'un traitement favorable en jury, il faut avoir communiqué ces circonstances particulières en temps réel pendant le semestre — informer le secrétariat pédagogique d'une maladie, demander un rendez-vous avec le responsable de formation pour expliquer des difficultés persistantes — et non après coup. Un jury qui découvre des circonstances atténuantes seulement lors de la délibération finale, sans trace écrite préalable, ne peut pas les prendre en compte de façon aussi solide que s'ils faisaient partie d'un dossier documenté.

## La transparence des corrections : pourquoi elle importe

La transparence dans le processus de correction — la possibilité pour les étudiants de connaître les critères d'évaluation, de consulter leurs copies et d'en discuter avec leur enseignant — est un principe pédagogique et institutionnel dont les effets bénéfiques dépassent la simple justice individuelle. Elle produit des effets d'apprentissage : la rétroaction détaillée sur une copie est l'une des interventions pédagogiques les plus efficaces pour améliorer les performances futures. Elle crée la confiance institutionnelle : des étudiants qui comprennent comment leurs copies sont évaluées font davantage confiance à la légitimité du système. Et elle améliore la qualité des enseignements : les corrections systématiquement trop basses ou trop hautes, ou avec des critères incohérents, sont détectées et discutées lors des consultations de copies.

Pour les étudiants, exercer ce droit à la transparence — consulter systématiquement ses copies après chaque examen, même quand la note est satisfaisante — est une pratique académique intelligente qui accélère la progression sur la durée du cursus.
`;

await appendAndPatch('60206990-344f-4a69-8aa7-830f51598227', ADD_L1);
await appendAndPatch('64771279-ba7e-4cb4-a525-214585a259a6', ADD_L2);
await appendAndPatch('483aa914-73d9-4253-8f78-96569a49b8d9', ADD_L3);
await appendAndPatch('f3af208d-e414-4e9f-a538-19279d6ca4c3', ADD_L4);
