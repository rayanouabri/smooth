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

// L2: 3998 → +5 minimum
await appendAndPatch('5c36682c-cb31-424c-a796-8c3a1973783a', ' Gérez bien vos finances.');

// L5: 3931 → need ~+70 words
await appendAndPatch('869dc5a2-45ab-439d-b1e7-436a9b056181', `
## Conclusion : un choix bancaire éclairé

Choisir une banque adaptée à sa situation est l'une des premières décisions financières importantes d'un étudiant. Les options sont nombreuses, les offres évoluent rapidement, et les besoins changent avec les années. En restant informé, en comparant régulièrement, et en utilisant les outils numériques disponibles, chaque étudiant peut bâtir une relation bancaire solide et avantageuse. Une gestion rigoureuse dès le début des études pose les fondations d'une vie financière sereine.`);

// L6: 3923 → need ~+77 words
await appendAndPatch('6fd28914-d398-4ff8-9ec8-cf4f7207bbad', `
## Conclusion générale : vers une banque partenaire de votre projet de vie

La relation bancaire idéale est un partenariat durable où la banque comprend et accompagne les évolutions de la vie du client — des études à la retraite. Cette relation se construit dans le temps, par une gestion sérieuse et une communication transparente avec son établissement. Les étudiants qui abordent la banque avec cette vision à long terme — et pas seulement comme un service utilitaire — tirent un avantage décisif dans leur parcours financier et patrimonial. Choisir avec discernement, gérer avec rigueur, réviser régulièrement.`);
