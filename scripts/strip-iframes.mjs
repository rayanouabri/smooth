const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC, 'Content-Type': 'application/json' };

async function getAll() {
  let all = [], offset = 0;
  while (true) {
    const r = await fetch(`${BASE}/rest/v1/lessons?select=id,content&order=id&limit=200&offset=${offset}`, { headers: H });
    const rows = await r.json();
    if (!rows.length) break;
    all = all.concat(rows);
    offset += 200;
    if (rows.length < 200) break;
  }
  return all;
}

function stripFakeIframes(content) {
  if (!content) return content;
  return content
    .replace(/<div[^>]*>\s*<iframe[^>]*youtube\.com\/embed\/[^>]*><\/iframe>\s*<\/div>/gi, '')
    .replace(/<iframe[^>]*youtube\.com\/embed\/[^>]*><\/iframe>/gi, '')
    .replace(/<iframe[^>]*youtube\.com\/embed\/[^>]*\/>/gi, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const lessons = await getAll();
console.log('Fetched ' + lessons.length + ' lessons');

let updated = 0, unchanged = 0;
const batchSize = 20;

for (let i = 0; i < lessons.length; i += batchSize) {
  const batch = lessons.slice(i, i + batchSize);
  await Promise.all(batch.map(async (l) => {
    const cleaned = stripFakeIframes(l.content);
    if (cleaned === l.content) { unchanged++; return; }

    const r = await fetch(`${BASE}/rest/v1/lessons?id=eq.${l.id}`, {
      method: 'PATCH',
      headers: { ...H, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ content: cleaned })
    });
    if (r.ok) updated++;
    else console.error('Failed:', l.id, r.status);
  }));

  const done = Math.min(i + batchSize, lessons.length);
  if (done % 100 === 0 || done >= lessons.length) {
    console.log('Progress: ' + done + '/' + lessons.length + ' | Updated: ' + updated);
  }
}

console.log('\nDone! ' + updated + ' lessons cleaned, ' + unchanged + ' unchanged');
