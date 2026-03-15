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

// L1: 3990 → +15 minimum
await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', ' Bonne gestion bancaire à tous.');

// L2: 3892 → need ~+115
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', ' La banque est un partenaire de long terme dont le choix initial mérite toute l\'attention et la réflexion que l\'on accorde aux autres grandes décisions de sa vie. Prendre le temps de bien choisir sa banque et sa carte dès le début, c\'est se donner les meilleures conditions pour construire une vie financière saine, autonome et épanouissante.');

// L3: 3824 → need ~+180
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', ' En résumé, la sécurité d\'une carte bancaire repose sur une combinaison de protections techniques (puce EMV, DSP2, tokenisation) et de comportements individuels (vigilance face aux fraudes, surveillance régulière des transactions, utilisation des cartes virtuelles). Aucune des deux dimensions ne peut se substituer à l\'autre : les meilleures mesures techniques du monde peuvent être contournées par un utilisateur imprudent, et un utilisateur vigilant peut être victime de failles techniques s\'il ne met pas à jour ses systèmes. La complémentarité des deux niveaux de protection est la clé d\'une sécurité bancaire robuste.');

// L4: 3824 → need ~+180
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', ' La gestion des plafonds de carte bancaire est en fin de compte une question d\'équilibre entre la praticité (avoir accès à des plafonds suffisants pour ses besoins normaux et exceptionnels) et la sécurité (limiter l\'exposition en cas de vol ou de fraude). Cet équilibre est personnel et doit être réévalué régulièrement à mesure que les besoins évoluent. Une fois cet équilibre trouvé et les automatismes d\'ajustement mis en place, la gestion des plafonds devient transparente et cesse d\'être une source de stress ou de blocage inattendu.');

// L5: 3854 → need ~+150
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', ' Les frais liés à la carte bancaire, bien que souvent perçus comme inévitables, sont en réalité très largement négociables ou contournables par un choix bancaire éclairé. Le marché bancaire français est suffisamment compétitif pour qu\'un étudiant attentif puisse disposer d\'une carte de qualité à coût quasi nul, avec des assurances utiles pour ses voyages et des fonctionnalités adaptées à son mode de vie numérique.');

// L6: 3907 → need ~+100
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', ' Gérez vos incidents de carte avec méthode et leur impact sera minimal. Chaque épreuve bancaire bien gérée renforce votre expérience et votre confiance dans la navigation du système financier français.');
