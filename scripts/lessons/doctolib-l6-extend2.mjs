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

const extL6b = `

## Conseils pratiques pour tirer le meilleur de Doctolib au quotidien

Pour résumer les bonnes pratiques qui feront de Doctolib un vrai allié dans votre parcours de santé en France : configurez votre profil complètement dès votre arrivée et activez les rappels SMS et e-mail, installez l'application mobile, activez les notifications push pour les listes d'attente. Stockez systématiquement chaque ordonnance et résultat dans votre dossier numérique pour bâtir progressivement un dossier médical personnel complet. Utilisez la messagerie sécurisée avec votre médecin traitant pour les questions non urgentes plutôt que d'appeler le cabinet. Explorez les fonctionnalités avancées (questionnaires pré-consultation, partage de documents, modules de suivi) qui existent souvent chez vos praticiens sans que vous les ayez activées. Enfin, gardez un regard critique sur la plateforme : elle est un outil au service de votre santé, pas un substitut à une relation médicale humaine de qualité.

**Q : Peut-on rédiger des avis sur les praticiens en anglais ou dans une autre langue ?**
Les avis sur Doctolib peuvent être rédigés dans la langue de votre choix, bien que la modération soit plus efficace pour les avis en français. Un avis en anglais ou en espagnol sera tout de même publié s'il ne viole pas les conditions d'utilisation. Cela permet aux étudiants internationaux de partager leur expérience avec des praticiens qui parlent leur langue, ce qui est utile pour les autres étudiants cherchant un médecin anglophone ou arabophone recommandé par leur communauté.
`;

await appendAndPatch('255220ab-cd87-4c1c-99d0-b7e92b245b89', extL6b);
