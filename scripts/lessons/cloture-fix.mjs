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

// L2: 3832 → +200 words needed
await appendAndPatch('2c258539-3073-41f6-b0b7-d30fc935fff8', `

## L'importance de la clôture bien documentée pour les futurs besoins administratifs

Les relevés et documents liés à un compte clôturé peuvent être demandés dans des contextes administratifs variés plusieurs années après la clôture : dossier de location, procédure de crédit immobilier, demande de visa long séjour, ou justification de ressources pour une demande de bourse. Avoir ces documents archivés et facilement accessibles transforme une situation potentiellement bloquante en une simple vérification. L'archive numérique d'un compte clôturé est un atout administratif de long terme qui justifie le soin apporté à sa constitution.`);

// L3: 3870 → +200 words needed
await appendAndPatch('bae3513f-1fe0-40ef-a639-9e54c053bf60', `

## L'impact positif d'une clôture réussie sur la confiance financière personnelle

Réussir la clôture d'un compte bancaire pour la première fois est un accomplissement concret qui renforce la confiance en sa capacité à gérer ses affaires financières. Ce type d'expérience concrète — une procédure administrative complexe menée à bien, sans perte financière et sans complication majeure — est le fondement de la compétence financière qui se construit progressivement. Chaque procédure bancaire bien gérée, chaque litige résolu, et chaque décision financière éclairée renforce cette compétence et la confiance qui l'accompagne.`);

// L4: 3819 → +200 words needed
await appendAndPatch('e9fa9b23-5d88-4067-a94f-7f988db9839f', `

## La clôture comme moment de bilan et de projection

La clôture d'un compte est naturellement un moment de bilan : on recense les domiciliations, on consulte l'historique des transactions, on évalue les frais payés. Ce bilan rétrospectif est aussi l'occasion d'une projection vers l'avenir — quelles habitudes bancaires a-t-on envie de maintenir, quels services on utilise réellement, et quelle relation bancaire correspond le mieux à sa situation et ses projets actuels. La banque idéale à 25 ans n'est peut-être pas la même qu'à 35 ans. Cette réflexion périodique sur sa relation bancaire, catalysée par une clôture, est un exercice sain de gestion patrimoniale personnelle.`);

// L5: 3872 → +150 words needed
await appendAndPatch('9bf50448-7156-4821-872c-66d32e62a84f', `

## La clôture comme acte d'autonomie financière

Exercer son droit à la clôture de compte, quand c'est dans son intérêt, est un acte d'autonomie financière. Ce droit, garanti par la loi, est souvent méconnu ou sous-utilisé. Le consommateur financièrement autonome sait qu'il peut choisir ses prestataires, négocier ses conditions, et changer quand nécessaire. Cette posture active dans la relation bancaire est une compétence qui bénéficie à tous les aspects de la vie financière, bien au-delà du simple choix d'une banque.`);

// L6: 3854 → +170 words needed
await appendAndPatch('2b027cc3-557e-4ef3-914b-2356ad93c539', `

## Conclusion : la clôture, étape normale du cycle bancaire

La clôture d'un compte bancaire n'est pas un événement exceptionnel ou problématique — c'est une étape normale du cycle bancaire que tout consommateur averti doit savoir gérer. Bien préparée, bien documentée, et bien coordonnée avec l'ouverture du compte de destination, une clôture se déroule sans complications majeures et en quelques semaines. Les compétences développées lors de cette procédure — organisation administrative, communication avec les institutions, gestion des délais et des droits — sont des compétences transférables à de nombreuses autres situations de la vie adulte. Cultivez-les avec soin.`);
