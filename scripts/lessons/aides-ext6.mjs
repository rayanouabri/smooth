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

const ADD = `
## Développer des habitudes financières durables dès les études

Les études sont une période idéale pour développer des habitudes financières qui durent toute la vie. Budgéter régulièrement, épargner même de petites sommes, éviter les dettes non nécessaires, et s'informer continuellement sur les droits et les opportunités sont des comportements qui, une fois ancrés pendant la période étudiante, bénéficient à leur auteur pour les décennies suivantes. Ces habitudes ne demandent pas de ressources importantes pour être développées — elles demandent surtout de la discipline et de la régularité.

L'environnement estudiantin crée des opportunités spécifiques pour développer ces compétences. Les associations étudiantes de finance, les clubs d'investissement universitaires, et les événements de formation à l'entrepreneuriat offrent des environnements d'apprentissage pratique sur la gestion financière. Les cours d'économie et de gestion dispensés à l'université, même s'ils ne visent pas la finance personnelle, développent des bases analytiques utiles pour comprendre les marchés et prendre des décisions financières éclairées.

## L'importance du réseau social dans la gestion financière étudiante

Le réseau social d'un étudiant — ses camarades, les associations auxquelles il appartient, les enseignants et les professionnels qu'il rencontre — est une ressource financière indirecte souvent sous-estimée. Un réseau qui partage activement les bonnes pratiques financières, les informations sur les aides disponibles, les opportunités d'emplois étudiants, et les ressources gratuitement disponibles multiplie l'accès aux informations utiles.

Les étudiants qui s'isolent de leurs pairs tendent à moins bénéficier de cette circulation informelle d'information, et pueden passer à côté d'aides, d'opportunités d'emploi ou de ressources qu'ils auraient pu connaître via leur réseau. Participer activement à la vie associative étudiante, même à un niveau modeste, est un investissement social qui génère des retours pratiques en termes d'information et d'opportunités.
`;

// L1: 3549 → need +451
await appendAndPatch('d96c9d24-2b32-4fa0-9625-2217d74a7650', ADD);
// L2: 3640 → need +360
await appendAndPatch('01449051-1879-46c9-96a5-ce20931ac76d', ADD);
// L3: 3506 → need +494
await appendAndPatch('3c2044b9-79ea-470a-994a-94117071a70e', ADD + `
## L'accompagnement des pairs dans l'accès aux aides du CROUS

Les étudiants qui ont déjà navigué dans le système d'aides du CROUS peuvent être des relais précieux d'information et d'accompagnement pour les nouveaux arrivants. Les tuteurs pédagogiques, référents de préparation aux études supérieures (RPES), et bénévoles des associations d'entraide étudiante jouent ce rôle informel de guide dans les démarches administratives. Se connecter à ces ressources humaines dès l'arrivée dans un établissement d'enseignement supérieur est une démarche pratique qui complète utilement les informations officielles.
`);
// L4: 3596 → need +404
await appendAndPatch('0f811457-418d-4a18-b647-d5882e0b1a80', ADD);
// L5: 3623 → need +377
await appendAndPatch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', ADD);
// L6: 3845 → need +155
await appendAndPatch('2fab22b0-0b45-47b9-9322-fe943a74380e', `
## La continuité du suivi budgétaire au-delà des études

Les compétences de gestion budgétaire développées pendant les études s'avèrent précieuses tout au long de la vie professionnelle. Un premier salaire bien géré jette les bases d'une épargne régulière, d'un plan d'investissement progressif, et d'une sécurité financière durable. Les habitudes prises dès les études — suivre ses dépenses, évaluer les droits aux aides, anticiper les changements de situation — sont des réflexes qui s'appliquent naturellement à chaque nouvelle étape de la vie.

La gestion financière est une discipline qui s'apprend et s'améliore avec la pratique. Les difficultés financières traversées pendant les études, si elles sont surmontées avec méthode et en mobilisant les ressources disponibles, sont des expériences formatives qui renforcent la résilience et la compétence financière pour toujours. Chaque défi financier surmonté est une leçon apprise qui prépare mieux aux défis futurs.
`);
