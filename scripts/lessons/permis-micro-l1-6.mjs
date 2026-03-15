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

// L1 at 3791 — need ~209+
const M_L1 = `
## Note finale sur l'engagement civique post-naturalisation

La naturalisation ouvre des portes mais elle appelle aussi à l'engagement. Les citoyens fraîchement naturalisés qui participent à la vie civique française — s'inscrivent sur les listes électorales, votent, s'engagent dans des associations, se présentent aux élections locales — contribuent directement à la vitalité de la démocratie française. Cet engagement citoyen actif est la démonstration la plus convaincante de ce que la naturalisation a permis : l'appartenance pleine à une communauté politique qui se construit collectivement.
`;

// L2 at 3544 — need ~456+
const M_L2 = `
## Note de vigilance permanente sur l'évolution de sa situation

La gestion d'un titre de séjour est un exercice continu, non pas une démarche ponctuelle. Chaque évolution de situation — professionnelle, familiale, géographique — mérite d'être évaluée à l'aune de ses implications administratives. Développer le réflexe de se poser la question « est-ce que ce changement affecte mon titre de séjour ? » chaque fois qu'un changement significatif intervient dans sa vie est une habitude qui, une fois ancrée, prévient la grande majorité des erreurs administratives non intentionnelles.

Un réseau informel de pairs ayant traversé des situations similaires, combiné à une association juridique de référence consultée pour les situations complexes, constitue l'infrastructure d'information minimale que chaque titulaire de titre de séjour en France devrait se constituer progressivement. Ce réseau ne remplace pas le conseil juridique professionnel dans les situations sérieuses, mais il permet de détecter rapidement les situations qui méritent une consultation.

La conscience administrative — l'attention régulière portée à sa situation administrative et à ses évolutions — est en définitive la compétence la plus précieuse que puisse développer un étranger qui gère son séjour en France sur le long terme.
`;

// L3 at 3680 — need ~320+
const M_L3 = `
## Conseils pratiques pour consolider son dossier avant la demande

Quelques semaines avant de déposer sa demande de carte de résident, il est utile d'effectuer un audit personnel de son dossier pour s'assurer qu'il est complet et solide. Cet audit inclut la vérification chronologique que tous les titres de séjour successifs sont documentés sans lacune, la revue des preuves de résidence (baux, avis d'imposition, relevés bancaires) pour s'assurer qu'elles couvrent l'intégralité de la période de cinq ans, et la vérification que les preuves d'intégration récentes (emploi actuel, vie associative, fiscalité à jour) sont à jour et convaincantes.

Si des lacunes documentaires sont identifiées, mieux vaut les traiter avant le dépôt — en contactant les administrations pour des duplicatas, en reconstituant les preuves manquantes, en préparant des explications pour les périodes qui ne peuvent pas être documentées — que de les découvrir lors de l'instruction du dossier, au risque d'un délai supplémentaire ou d'un refus.
`;

// L4 at 3626 — need ~374+
const M_L4 = `
## Le rôle de l'entourage dans la prévention des erreurs

L'entourage d'une personne titulaire d'un titre de séjour joue parfois un rôle indirect mais important dans la prévention des erreurs administratives. Un conjoint, un ami proche, un collègue qui connaît les règles de base du titre de séjour peut rappeler utilement une date d'expiration approchante, signaler qu'un changement de situation devrait être notifié, ou alerter sur une information problématique circulant dans le réseau communautaire.

Partager les informations de base sur sa situation administrative avec les personnes de confiance dans son entourage proche — sans nécessairement dévoiler tous les détails sensibles — crée un filet de sécurité humain contre les oublis isolés. Cette mise en commun de l'information dans la sphère de confiance est une pratique que les familles migrantes pratiquent naturellement depuis des générations et qui a fait ses preuves comme facteur de résilience administrative dans les situations difficiles.

L'essentiel reste néanmoins la responsabilité personnelle : c'est à chaque titulaire de gérer activement son dossier, et l'entourage ne peut jouer qu'un rôle de soutien et de rappel, non de substitution.
`;

// L5 at 3594 — need ~406+
const M_L5 = `
## L'intégration académique et culturelle comme investissement global

Le titre de séjour étudiant est le cadre administratif de l'expérience française, mais l'expérience elle-même se construit dans les amphithéâtres, les bibliothèques, les quartiers, les associations et les relations humaines que l'étudiant forge au fil des mois et des années. Les étudiants qui profitent pleinement de leur séjour en France ne sont pas ceux qui se limitent à assister aux cours et à maintenir leur titre de séjour en règle — ce sont ceux qui s'investissent dans la vie universitaire et sociale française avec curiosité et ouverture.

Cet investissement global dans l'expérience française — académique, culturelle, sociale et linguistique — est non seulement la source des souvenirs et des amitiés les plus durables, mais aussi, de façon plus pragmatique, la fondation de l'intégration documentée qui facilitera les demandes futures de titre de séjour et, à terme, la naturalisation. Chaque engagement associatif, chaque relation professionnelle construite, chaque participation à la vie civique locale est à la fois un enrichissement personnel immédiat et un investissement dans une trajectoire administrative à long terme.
`;

// L6 at 3786 — need ~214+
const M_L6 = `
## Note finale sur l'utilisation stratégique du Passeport Talent

Le Passeport Talent n'est pas seulement un titre de séjour pratique — c'est un signal que la France envoie à ses titulaires sur la valeur qu'elle leur attribue. Cette reconnaissance institutionnelle mérite d'être utilisée stratégiquement : pour construire des partenariats dans l'écosystème professionnel français, pour développer des réseaux qui transcendent les frontières entre la France et les pays d'origine, et pour contribuer activement aux domaines qui ont justifié l'attribution du titre.

Les titulaires de Passeport Talent qui font le choix de s'engager profondément dans la société française trouvent généralement, au bout de quelques années, que leur valeur perçue s'est consolidée et que leur trajectoire vers la carte de résident puis, éventuellement, vers la naturalisation se déroule dans de bonnes conditions.
`;

await appendAndPatch('a7731dff-3fba-4ef7-84d2-5febfe107c07', M_L1);
await appendAndPatch('35a1efd2-6d33-42b9-b253-749418a6ae2b', M_L2);
await appendAndPatch('245f4bd4-cc40-42db-8775-6e525fbebc14', M_L3);
await appendAndPatch('cca2d227-e2f1-4c0b-afef-60b9c0359424', M_L4);
await appendAndPatch('16d9efa8-d878-47a0-82cf-89173163dbcb', M_L5);
await appendAndPatch('92fee6cd-d266-4081-b459-535cf1f26e9a', M_L6);
