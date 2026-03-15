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

// L1: 3723 → need +277
await appendAndPatch('9e2a16ea-0c1b-4df3-a8f6-fb3dac6f425b', `
## Le bilan fiscal annuel : une habitude qui paie

Le bilan fiscal annuel est une pratique qui consiste à examiner, une fois par an à réception de l'avis d'imposition, l'ensemble de sa situation fiscale : montant d'impôt payé, évolution par rapport à l'année précédente, identification des leviers d'optimisation légale non encore utilisés, et anticipation des changements de situation qui pourraient affecter la déclaration suivante. Cette revue annuelle, bien que modeste en termes de temps investi, produit des effets bénéfiques cumulés sur la gestion financière globale.

Pour un étudiant ou un jeune actif, ce bilan peut simplement consister à vérifier que l'avis est cohérent avec les revenus de l'année, à noter l'évolution du revenu fiscal de référence pour anticiper les droits aux aides conditionnées à ce critère, et à identifier si des crédits d'impôt auxquels on est éligible ont bien été appliqués. La mise en évidence d'un crédit d'impôt manquant peut justifier une demande de correction et un remboursement de l'impôt indûment payé — ce qui transforme ce temps de revue en économies concrètes. La maîtrise de l'avis d'imposition est, en définitive, l'une des compétences administratives françaises les plus directement liées au bien-être financier quotidien.`);

// L2: 3940 → need +60
await appendAndPatch('19527171-0a94-4ba5-b58e-a15de77a8adc', ' La maîtrise de l\'avis d\'imposition, document central de la fiscalité personnelle française, est ainsi un investissement durable dans l\'autonomie administrative et financière de tout résident en France, quelle que soit la durée de son séjour ou la complexité de sa situation.');

// L5: 3832 → need +168
await appendAndPatch('838acbd1-bcda-4d75-81e0-b822158a6439', `
## Perspectives finales sur l'avis d'imposition comme preuve de ressources

L'avis d'imposition restera encore longtemps la principale preuve de ressources dans les démarches administratives françaises, même si des évolutions technologiques comme le partage automatisé des données fiscales entre administrations réduisent progressivement la nécessité de le fournir physiquement. Pour tout résident en France, en comprendre la structure, savoir l'obtenir rapidement, et connaître ses utilisations possibles constitue une compétence administrative fondamentale qui facilite durablement la vie quotidienne dans ce pays. La montée en compétences fiscales personnelles est un investissement à faible coût et à fort rendement pratique.`);
