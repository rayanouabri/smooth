// inject-videos.mjs — Recherche YouTube avec filtre CC (sous-titres activés)
// sp=EgIQAQ%3D%3D = filtre YouTube "Sous-titres/CC"

const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC, 'Content-Type': 'application/json' };

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const CATEGORY_HINTS = {
  logement: 'logement étudiant France',
  budget_finances: 'finances étudiant France',
  sante: 'santé étudiant France',
  culture_codes_sociaux: 'vie quotidienne France',
  insertion_professionnelle: 'emploi étudiant France',
  integration_administrative: 'démarches administratives France',
  administration: 'administration française',
  transport: 'transports France',
  travail: 'travail France',
  preparation_academique: 'études supérieures France',
  formations_professionnelles: 'formation professionnelle France',
};

async function searchBest(query, category) {
  const hint = CATEGORY_HINTS[category] || 'France';
  const fullQuery = `${query} ${hint}`;

  async function trySearch(url) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': UA, 'Accept-Language': 'fr-FR,fr;q=0.9' },
        signal: AbortSignal.timeout(10000),
      });
      const html = await res.text();
      const matches = html.match(/"videoId":"([a-zA-Z0-9_-]{11})"/g) || [];
      return [...new Set(matches.map(m => m.slice(11, -1)))].slice(0, 6);
    } catch { return []; }
  }

  async function verifyId(id) {
    try {
      const r = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`, {
        signal: AbortSignal.timeout(5000),
      });
      return r.ok;
    } catch { return false; }
  }

  // 1. Recherche avec filtre CC (sous-titres)
  const ccUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(fullQuery)}&sp=EgIQAQ%3D%3D&hl=fr&gl=FR`;
  const ccIds = await trySearch(ccUrl);
  for (const id of ccIds) {
    if (await verifyId(id)) return `https://www.youtube.com/watch?v=${id}`;
  }

  // 2. Fallback sans filtre CC
  const plainUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(fullQuery)}&hl=fr&gl=FR`;
  const plainIds = await trySearch(plainUrl);
  for (const id of plainIds) {
    if (await verifyId(id)) return `https://www.youtube.com/watch?v=${id}`;
  }

  return null;
}

async function fetchAll() {
  let all = [], offset = 0;
  while (true) {
    const r = await fetch(`${BASE}/rest/v1/lessons?select=id,title,course_id&order=id&limit=200&offset=${offset}`, { headers: H });
    const rows = await r.json();
    if (!Array.isArray(rows) || !rows.length) break;
    all = all.concat(rows);
    if (rows.length < 200) break;
    offset += 200;
  }
  return all;
}

async function fetchCourses() {
  const r = await fetch(`${BASE}/rest/v1/courses?select=id,category`, { headers: H });
  const rows = await r.json();
  const map = {};
  for (const c of rows) map[c.id] = (c.category || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  return map;
}

const [lessons, courseCategories] = await Promise.all([fetchAll(), fetchCourses()]);
console.log(`${lessons.length} leçons à traiter...`);

let updated = 0, failed = 0;
const BATCH = 3;
const DELAY = 2200;

for (let i = 0; i < lessons.length; i += BATCH) {
  const batch = lessons.slice(i, i + BATCH);
  await Promise.all(batch.map(async (l) => {
    const cat = courseCategories[l.course_id] || '';
    const videoUrl = await searchBest(l.title, cat);
    if (!videoUrl) { failed++; return; }

    const r = await fetch(`${BASE}/rest/v1/lessons?id=eq.${l.id}`, {
      method: 'PATCH',
      headers: { ...H, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ video_url: videoUrl }),
    });
    if (r.ok) updated++;
    else { failed++; console.error('PATCH fail:', l.id, r.status); }
  }));

  const done = Math.min(i + BATCH, lessons.length);
  if (done % 30 === 0 || done >= lessons.length) {
    console.log(`${done}/${lessons.length} | ✅ ${updated} | ❌ ${failed}`);
  }
  if (i + BATCH < lessons.length) await new Promise(r => setTimeout(r, DELAY));
}

console.log(`\nTerminé : ${updated} mises à jour, ${failed} échecs`);
