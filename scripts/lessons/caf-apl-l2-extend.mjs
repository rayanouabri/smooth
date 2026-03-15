const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

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

// Extension L2 : ~400 mots supplémentaires sur la renovation energetique et les logements etudiants
const extAPL2 = `

## La performance énergétique des logements et les nouvelles restrictions à la location

Depuis 2023, une nouvelle dimension a émergé dans la qualification des logements éligibles aux aides au logement : la performance énergétique. La loi Climat et Résilience de 2021 a introduit un calendrier progressif d'interdiction à la location des logements les plus énergivores, communément appelés «passoires thermiques». Cette évolution réglementaire affecte directement le marché locatif étudiant, en particulier dans les grandes villes où de nombreux studios et petits appartements anciens présentent des performances énergétiques médiocres.

Le Diagnostic de Performance Énergétique (DPE) classe les logements de A (très économe) à G (très énergivore). Depuis le 1er janvier 2023, les logements classés G+ (les 1 % les plus énergivores de la classe G, consommant plus de 450 kWh d'énergie finale par m² par an) ne peuvent plus faire l'objet de nouveaux contrats de location. Cette interdiction est étendue à l'ensemble de la classe G à partir de janvier 2025, à la classe F à partir de 2028, et à la classe E à partir de 2034. Ces échéances progressives forcent les propriétaires à rénover leurs biens ou à les retirer du marché locatif.

Pour les étudiants qui cherchent un logement dans le parc privé ancien, vérifier la classe DPE du logement visité est devenu une étape importante. Un logement classé F ou G que vous souhaitez louer en 2025 sera en infraction si le propriétaire signe un nouveau bail. Non seulement votre propriétaire s'expose à des sanctions, mais le logement pourrait ne pas être éligible aux aides CAF si la CAF commence à prendre en compte ce critère d'éligibilité (ce qui est envisagé dans les réformes futures). La classe DPE doit obligatoirement figurer sur toutes les annonces de location depuis 2022.

Au-delà de l'aspect légal, un logement mal isolé avec une mauvaise performance énergétique génère des charges de chauffage très élevées en hiver qui ne sont pas couvertes par l'aide au logement. Un logement moins cher au mètre carré mais avec une classe F ou G peut s'avérer plus coûteux au total qu'un logement légèrement plus cher mais mieux isolé. Intégrez toujours la performance énergétique dans votre comparaison de logements.
`;

await appendAndPatch('3c19d39d-1a36-498f-9d8a-1c4ae1a5d9d1', extAPL2);
