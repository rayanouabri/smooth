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

// L1: 3995 → +10
await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', ' Choisissez avec soin, gérez avec rigueur.');

// L2: 3949 → +60
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', ' Ouvrir son premier compte bancaire en France est une étape importante pour tout étudiant ou arrivant. Bien préparé, ce processus est simple et rapide. Les documents en ordre, la banque bien choisie, et la carte bien activée — vous êtes prêt à naviguer le système bancaire français en toute confiance et autonomie.');

// L3: 3914 → +95
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', ' Adopter une attitude proactive face à la sécurité de sa carte — vérifier régulièrement, agir rapidement en cas d\'anomalie, et se tenir informé des nouvelles menaces — est un investissement de temps minime pour une protection maximale. Les fraudeurs cherchent les victimes les moins vigilantes ; la vigilance régulière vous place automatiquement dans la catégorie des cibles difficiles qui ne valent pas l\'effort.');

// L4: 3910 → +100
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', ' Maîtriser les plafonds de sa carte, connaître ses droits en cas de dépassement ou de fraude, et comprendre le fonctionnement des différents modes de paiement sont des compétences qui transforment chaque titulaire de carte en acteur autonome et averti de son propre parcours bancaire. Ces connaissances, acquises progressivement, ont une valeur durable qui s\'étendra bien au-delà des années d\'études.');

// L5: 3918 → +90
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', ' Comprendre les frais réels de sa carte bancaire et prendre le temps de les optimiser est un investissement dont les retours sont concrets et mesurables. Quelques heures consacrées à cet audit annuel peuvent générer des économies significatives et améliorer la qualité des services bancaires disponibles — un rapport coût-bénéfice excellent pour tout consommateur averti.');

// L6: 3937 → +75
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', ' La carte bancaire est avant tout un outil au service de ses utilisateurs. En comprenant ses mécanismes, ses protections, et ses procédures, chaque titulaire peut en faire un allié efficace dans sa vie quotidienne plutôt qu\'un objet passif dont le fonctionnement reste mystérieux. Cette maîtrise active est au cœur d\'une gestion financière sereine et autonome.');
