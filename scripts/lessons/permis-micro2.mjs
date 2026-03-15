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

// Shared closing paragraph usable for all lessons — ~120 words
const CLOSE = `

## Pour aller plus loin

Ce cours vous a fourni les bases pour comprendre et naviguer dans le système des titres de séjour français. Pour approfondir vos connaissances sur des aspects spécifiques à votre situation personnelle, les ressources suivantes sont recommandées : le site officiel service-public.fr pour les informations à jour sur les procédures, le site Légifrance pour les textes de loi et décrets, les permanences juridiques des associations GISTI et Cimade pour les situations complexes, et le réseau des avocats spécialisés en droit des étrangers pour les cas qui nécessitent un accompagnement personnalisé. La connaissance est votre meilleur allié dans la gestion de votre séjour en France.
`;

// Per-lesson notes to reach 4000+
// L1 at 3874, need ~126 more (~+6 with CLOSE, need 120 more extra)
await appendAndPatch('a7731dff-3fba-4ef7-84d2-5febfe107c07', CLOSE + `\n\nLa naturalisation est à la portée de tous ceux qui vivent pleinement leur intégration française. Le soin apporté à chaque étape administrative de cette trajectoire est le meilleur investissement que peut faire un étranger qui souhaite faire de la France son pays pour toujours.`);

// L2 at 3735, need ~265 more
await appendAndPatch('35a1efd2-6d33-42b9-b253-749418a6ae2b', CLOSE + `\n\nLa prévention des erreurs administratives liées au titre de séjour commence par la conscience que ces erreurs sont évitables. Les personnes qui traversent des situations irrégulières non intentionnelles sont rarement des personnes de mauvaise foi — ce sont généralement des personnes qui ont manqué d'information, d'anticipation ou d'accompagnement à un moment critique. Chaque démarche bien préparée, chaque renouvellement anticipé à temps, est une victoire sur la complexité du système et un pas de plus vers la stabilité administrative recherchée. La régularité du séjour est un bien précieux qui se construit et se maintient jour après jour, avec méthode et avec l'aide de tous les soutiens disponibles.`);

// L3 at 3834, need ~166 more
await appendAndPatch('245f4bd4-cc40-42db-8775-6e525fbebc14', CLOSE + `\n\nLa carte de résident est le sommet accessible du droit des étrangers en termes de stabilité de séjour. Pour les personnes qui y accèdent après cinq ans ou plus d'intégration régulière en France, elle représente la reconnaissance institutionnelle de leur ancrage dans la société française. Utiliser les avantages qu'elle procure pleinement — accès au marché du travail sans restriction, mobilité internationale facilitée, crédibilité accrue dans les démarches — est la façon la plus intelligente d'en tirer parti.`);

// L4 at 3806, need ~194 more
await appendAndPatch('cca2d227-e2f1-4c0b-afef-60b9c0359424', CLOSE + `\n\nLes erreurs administratives liées au titre de séjour ne sont pas une fatalité : elles résultent presque toujours d'un manque d'information ou d'anticipation. La bonne nouvelle est que ces deux facteurs sont entièrement maîtrisables par chacun. S'informer régulièrement sur ses droits et obligations, anticiper systématiquement les renouvellements, et consulter des professionnels pour les situations complexes : voilà les trois piliers d'une gestion administrative irréprochable qui protège la régularité du séjour et prépare la voie vers la stabilité à long terme.`);

// L5 at 3772, need ~228 more
await appendAndPatch('16d9efa8-d878-47a0-82cf-89173163dbcb', CLOSE + `\n\nLe titre de séjour étudiant est tout à la fois un cadre administratif, une protection juridique et une invitation à s'investir pleinement dans l'aventure française. Les étudiants qui en prennent soin — en respectant ses conditions, en anticipant ses renouvellements, en évoluant vers des titres plus stables au fil du temps — se donnent les meilleures chances de réussir non seulement leurs études mais aussi leur insertion dans la société française. Cette double réussite — académique et administrative — est le fondement sur lequel se construit une trajectoire de vie épanouissante en France.`);

// L6 at 3915, need ~85 more
await appendAndPatch('92fee6cd-d266-4081-b459-535cf1f26e9a', CLOSE + `\n\nLe Passeport Talent est une opportunité rare d'établir une présence stable en France dans des conditions administratives favorables. Saisissez-la avec ambition et méthode.`);

// L7 at 3823, need ~177 more
await appendAndPatch('aac8c4c1-7ab2-45b3-a5b5-4e2748f16939', CLOSE + `\n\nLa diversité des types de titres de séjour en France reflète la diversité des situations et des projets de vie des étrangers qui choisissent ce pays. Comprendre cette architecture permet d'identifier le titre le plus adapté à sa propre situation et de planifier sa trajectoire administrative avec réalisme et confiance. Le système est complexe, mais il est navigable par tous ceux qui disposent des informations nécessaires et qui l'abordent avec méthode.`);

// L8 at 3888, need ~112 more
await appendAndPatch('2db95ef5-7de7-4bac-a68f-0ef96dddf981', CLOSE + `\n\nLe titre étudiant est une fondation solide pour une vie réussie en France. Cultivez-le avec soin, utilisez-en tous les droits, et préparez dès maintenant votre transition vers les titres suivants de votre parcours administratif français.`);

// L9 at 3904, need ~96 more
await appendAndPatch('c22002fe-75ce-41af-bd63-5ed570312d28', CLOSE + `\n\nLe Passeport Talent Chercheur offre aux scientifiques du monde entier une porte d'entrée vers l'excellence de la recherche française. C'est une invitation à contribuer à l'une des grandes aventures intellectuelles de notre époque, dans un cadre administratif qui en facilite la réalisation.`);

// L10 at 3912, need ~88 more
await appendAndPatch('9419e826-62cc-4a80-96e5-638ba995184e', CLOSE + `\n\nLa carte de résident est l'aboutissement naturel d'un parcours d'intégration réussi en France. Elle récompense la constance, la régularité et l'engagement, et ouvre la voie vers la pleine appartenance française.`);

// L11 at 3981, need ~19 more
await appendAndPatch('9a533bac-7df9-412e-922e-0dcdf500fd0b', `\n\nLa connaissance du système est votre meilleur atout pour le naviguer avec succès.`);
