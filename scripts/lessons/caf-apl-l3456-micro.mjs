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

// L3 needs ~20 words
const M_L3 = `\n\nRetenir les points clés de cette leçon vous permet d'aborder votre dossier CAF avec sérénité, de réagir efficacement en cas de suspension et de comprendre vos droits en matière de contestation et de remboursement des indus.`;

// L4 needs ~70 words
const M_L4 = `\n\nQuelle que soit votre nationalité, la France vous accueille dans son système de protection sociale dès lors que votre séjour est régulier et votre logement éligible. Préparez votre dossier avec soin, anticipez les délais d'instruction parfois longs aux périodes de rentrée, et n'hésitez pas à solliciter les structures d'accompagnement disponibles dans votre université ou votre ville. L'APL est un droit accessible, et le système est conçu pour fonctionner en votre faveur dès lors que vous respectez les règles et fournissez les justificatifs requis.`;

// L5 needs ~130 words
const M_L5 = `\n\n## Ce que cette leçon vous apporte dans la durée

Comprendre finement l'impact de vos revenus sur l'APL n'est pas une connaissance utile une seule fois mais un référentiel permanent pour toute la durée de vos études. Chaque fois que votre situation professionnelle change — nouveau stage, prise ou fin d'emploi, augmentation de salaire, changement de régime de cotisation — vous pouvez anticiper l'impact sur votre aide au logement et ajuster votre budget en conséquence. Cette capacité d'anticipation financière est une compétence précieuse qui dépasse largement le cadre de l'APL et vous prépare à gérer votre rapport aux aides sociales tout au long de votre vie professionnelle. Maîtriser les règles du jeu vous place en position de force vis-à-vis d'un système qui, paradoxalement, favorise ceux qui le connaissent le mieux.`;

// L6 needs ~40 words
const M_L6 = `\n\nActivez systématiquement chaque aide à laquelle vous avez droit, combinez-les intelligemment, et faites-en le socle financier sur lequel vous construisez une vie étudiante riche et sereine, en France et pour la durée de vos études.`;

await appendAndPatch('486ce28a-10ab-4c88-80c8-e4e44122713f', M_L3);
await appendAndPatch('da7e82e3-0993-4675-9aaa-e0ea3ba7138a', M_L4);
await appendAndPatch('1393b8f5-c0bc-4218-aa6d-248325c219d1', M_L5);
await appendAndPatch('3d1ec51d-e234-40b3-9678-15c8385e866a', M_L6);
