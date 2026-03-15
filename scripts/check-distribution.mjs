const SUPABASE_URL = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SK = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H = { 'apikey': SK, 'Authorization': `Bearer ${SK}`, 'Content-Type': 'application/json' };

async function fetchAll() {
  let all = [], offset = 0;
  while (true) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/lessons?select=id,title,content,course_id&limit=100&offset=${offset}`, { headers: H });
    const data = await res.json();
    if (!data.length) break;
    all = all.concat(data);
    offset += 100;
  }
  return all;
}

const lessons = await fetchAll();
const counts = lessons.map(l => l.content ? l.content.split(' ').length : 0);
const buckets = { '0-1000': 0, '1000-2000': 0, '2000-3000': 0, '3000-4000': 0, '4000-5000': 0, '5000-7500': 0, '7500-10000': 0, '10000+': 0 };
counts.forEach(c => {
  if (c < 1000) buckets['0-1000']++;
  else if (c < 2000) buckets['1000-2000']++;
  else if (c < 2000) buckets['2000-3000']++;
  else if (c < 3000) buckets['2000-3000']++;
  else if (c < 4000) buckets['3000-4000']++;
  else if (c < 5000) buckets['4000-5000']++;
  else if (c < 7500) buckets['5000-7500']++;
  else if (c < 10000) buckets['7500-10000']++;
  else buckets['10000+']++;
});
console.log('\n=== Word Count Distribution ===');
Object.entries(buckets).forEach(([k,v]) => console.log(`${k}: ${v} lessons`));
console.log(`\nTotal: ${lessons.length}`);
console.log(`Above 4000: ${counts.filter(c => c >= 4000).length}`);
console.log(`Below 4000: ${counts.filter(c => c < 4000).length}`);
console.log(`Below 3000: ${counts.filter(c => c < 3000).length}`);
console.log(`Min: ${Math.min(...counts)} | Max: ${Math.max(...counts)} | Avg: ${Math.round(counts.reduce((a,b)=>a+b,0)/counts.length)}`);
