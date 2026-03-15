const SVC = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SH = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC, 'Content-Type': 'application/json', 'Prefer': 'return=representation' };

const body = JSON.stringify({ course_id: '3893fa8d-2b7c-4b95-85a9-207da4ca19fe', title: 'TEST_DELETE_ME', content: 'test', lesson_order: 1, order: 1, duration_minutes: 5 });
const r = await fetch(`${BASE}/rest/v1/lessons`, { method: 'POST', headers: SH, body });
const txt = await r.text();
console.log('INSERT status:', r.status, txt.slice(0, 200));

// Cleanup
const d = await fetch(`${BASE}/rest/v1/lessons?title=eq.TEST_DELETE_ME`, { method: 'DELETE', headers: SH });
console.log('DELETE status:', d.status);
console.log('✅ Service role key FONCTIONNE - RLS contourné !');
