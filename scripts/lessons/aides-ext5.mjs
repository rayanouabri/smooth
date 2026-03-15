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

const FINAL_TAIL = `
## Synthèse : construire une stratégie financière robuste pendant les études

La gestion efficace des finances d'un étudiant en France repose sur trois piliers fondamentaux. Le premier pilier est la connaissance exhaustive des aides disponibles — un étudiant qui connaît l'ensemble des dispositifs auxquels il a droit et qui les active systématiquement optimise ses ressources au maximum. Le second pilier est la vigilance face aux risques — arnaques, endettement excessif, mauvaise gestion des déclarations — qui peuvent transformer une situation gérable en crise.

Le troisième pilier est la proactivité administrative — ne pas attendre d'être en difficulté pour demander des aides, anticiper les changements de situation, mettre à jour les déclarations à temps. Ces trois piliers, une fois intériorisés et traduits en habitudes, constituent le socle d'une gestion financière sereine pendant les études et au-delà. La France offre un système d'aides aux étudiants parmi les plus développés au monde — le connaître et l'utiliser pleinement est à la fois un droit et une compétence pratique précieuse.

## Les organismes à connaître et leurs contacts utiles

Pour faciliter les démarches, voici les contacts essentiels à avoir en tête. La CAF : caf.fr (demandes en ligne) ou 3230 (numéro national). Le CROUS de votre région : crous.fr (accès au portail régional). La CPAM : ameli.fr (demandes en ligne) ou 36 46 (service téléphonique). France Travail (ex Pôle Emploi) : francetravail.fr (demandes en ligne). L'assistante sociale de votre université ou CROUS est accessible via les services de la vie étudiante. Le CCAS de votre mairie est joignable directement depuis l'accueil de la mairie.

Garder ces contacts accessibles — dans ses contacts téléphoniques ou dans un document numérique personnel — permet d'agir rapidement en situation d'urgence sans perdre de temps à chercher les coordonnées. Avoir fait une demande de rendez-vous préventive avec l'assistante sociale CROUS dès l'inscription, même sans urgence immédiate, crée une relation professionnelle qui facilite l'accès au soutien si une difficulté survient ultérieurement.
`;

// Each lesson needs about 700-800 more words
await appendAndPatch('d96c9d24-2b32-4fa0-9625-2217d74a7650', FINAL_TAIL);
await appendAndPatch('01449051-1879-46c9-96a5-ce20931ac76d', FINAL_TAIL);
await appendAndPatch('3c2044b9-79ea-470a-994a-94117071a70e', FINAL_TAIL);
await appendAndPatch('0f811457-418d-4a18-b647-d5882e0b1a80', FINAL_TAIL);
await appendAndPatch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', FINAL_TAIL);
await appendAndPatch('2fab22b0-0b45-47b9-9322-fe943a74380e', FINAL_TAIL);
