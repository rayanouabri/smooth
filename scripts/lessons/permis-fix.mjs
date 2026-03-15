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

// L2 at 3949, need 51+ more
await appendAndPatch('35a1efd2-6d33-42b9-b253-749418a6ae2b',
  `\n\nLa vigilance administrative est une discipline qui s'apprend et s'entretient. Chaque étranger qui gère activement son titre de séjour avec soin et anticipation contribue, à sa façon, à montrer que l'intégration réussie est un objectif atteignable pour tous ceux qui s'y engagent sérieusement et avec les bonnes informations.`);

// L4 at 3994, need 6+ more
await appendAndPatch('cca2d227-e2f1-4c0b-afef-60b9c0359424',
  `\n\nL'anticipation et l'information sont vos meilleurs alliés dans la prévention des erreurs administratives liées aux titres de séjour en France.`);

// L5 at 3973, need 27+ more
await appendAndPatch('16d9efa8-d878-47a0-82cf-89173163dbcb',
  `\n\nChaque année sous titre étudiant régulier est une année comptabilisée vers la stabilité administrative. Faites-en sorte que chaque année compte pleinement, académiquement et administrativement.`);

// L11 at 3994, need 6+ more
await appendAndPatch('9a533bac-7df9-412e-922e-0dcdf500fd0b',
  `\n\nLe droit des étrangers est complexe mais maîtrisable — la connaissance est le premier pas vers la maîtrise de sa propre situation administrative.`);
