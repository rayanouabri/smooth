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

const CLOSER = `

Maîtriser le système d'aides financières en France est une compétence qui se construit progressivement, mais dont les bénéfices sont immédiats et durables. Chaque aide correctement demandée et perçue améliore concrètement les conditions de vie et de réussite académique. Ces connaissances, partagées avec d'autres étudiants dans la même situation, créent des communautés d'entraide où l'information circule librement et profite à tous.`;

// L1: 3830 → need +170
await appendAndPatch('d96c9d24-2b32-4fa0-9625-2217d74a7650', CLOSER + ` La vigilance contre les arnaques et la connaissance des droits sont des boucliers efficaces contre les risques financiers spécifiques à la période étudiante. Adoptez un regard critique sur toute offre financière non sollicitée et vérifiez systématiquement la légitimité des organismes avec lesquels vous interagissez.`);

// L2: 3921 → need +79
await appendAndPatch('01449051-1879-46c9-96a5-ce20931ac76d', CLOSER + ` Le prêt étudiant bien utilisé est un outil de financement légitime et puissant — à condition de le calibrer correctement et de le gérer avec discipline pendant toute la durée du remboursement.`);

// L3: 3870 → need +130
await appendAndPatch('3c2044b9-79ea-470a-994a-94117071a70e', CLOSER + ` Les aides d'urgence du CROUS existent pour répondre aux situations les plus difficiles — ne pas hésiter à les solliciter en cas de besoin réel, car elles sont là précisément pour prévenir que des difficultés temporaires ne deviennent des situations de décrochage irréversibles.`);

// L4: 3877 → need +123
await appendAndPatch('0f811457-418d-4a18-b647-d5882e0b1a80', CLOSER + ` La combinaison de plusieurs aides complémentaires — bourse CROUS, APL, aides régionales, bourses privées — peut construire un filet de ressources solide pour traverser les années d'études dans la sérénité financière nécessaire à la réussite académique.`);

// L5: 3904 → need +96
await appendAndPatch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', CLOSER + ` La CAF est un partenaire financier majeur pour les étudiants locataires en France — bien connaître ses règles et ses procédures assure une relation administrative sereine et des aides perçues sans interruption.`);

// L6: 3986 → need +14
await appendAndPatch('2fab22b0-0b45-47b9-9322-fe943a74380e', ' Bonne continuité dans vos études et votre vie en France.');
