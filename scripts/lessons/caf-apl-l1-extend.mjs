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

// Extension L1 APL (~600 mots supplémentaires)
const extAPL1 = `

## Comprendre la contemporisation des revenus et ses conséquences pratiques

La réforme de la contemporisation, entrée en vigueur en 2021, a profondément modifié le fonctionnement de l'APL pour tous les bénéficiaires, y compris les étudiants. Avant cette réforme, les ressources prises en compte pour le calcul de l'APL étaient celles de l'année N-2 (deux ans avant la demande). Ce système conduisait à des situations absurdes : un étudiant qui commençait un emploi bien rémunéré continuait de toucher son APL calculée sur ses faibles revenus de deux ans auparavant pendant encore deux ans, tandis qu'un étudiant dont les revenus avaient baissé attendait deux ans avant de voir son aide augmenter. La contemporisation a mis fin à cette logique en alignant les calculs sur les revenus réels des 12 derniers mois glissants.

Pour les étudiants, la contemporisation a des implications concrètes. Si vous travaillez pendant le semestre via un emploi étudiant, les revenus de cet emploi sont pris en compte dans le calcul de l'APL avec un délai de quelques mois. Une augmentation significative de revenus peut donc entraîner une révision à la baisse de votre APL, et inversement. La CAF reçoit automatiquement les données de vos revenus depuis l'URSSAF (pour les salaires) et peut recalculer vos droits sans vous en informer préalablement de manière systématique, ce qui peut créer des variations de montant que vous n'avez pas anticipées.

Il est donc important de surveiller régulièrement votre espace Mon Compte sur caf.fr pour vérifier que votre APL est bien calculée sur les bonnes données. En cas de baisse inexpliquée, vérifiez d'abord vos données déclarées sur votre compte CAF et, si nécessaire, contactez votre CAF pour demander une explication du recalcul.

## L'impact des bourses CROUS sur l'APL

La bourse sur critères sociaux du CROUS, perçue par les étudiants boursiers en France, n'est pas prise en compte dans le calcul de l'APL ou de l'ALS. C'est une bonne nouvelle pour les boursiers : toucher une bourse CROUS ne réduit pas votre aide au logement. Ces deux aides sont donc pleinement cumulables et ciblées sur des besoins différents (ressources générales pour la bourse, logement spécifiquement pour l'aide CAF).

Cette règle de non-prise en compte des bourses CROUS dans le calcul des aides CAF est ancienne et bien établie. Elle reflète la volonté politique d'assurer que les aides sociales destinées aux étudiants ne s'annulent pas entre elles mais se complètent. Pour un étudiant boursier de l'échelon 6 ou 7 (les plus élevés) qui touche jusqu'à 6 000 euros par an de bourse, le cumul avec une APL de 200 euros par mois peut constituer un revenu social annuel approximatif de 8 400 euros (bourse + APL), ce qui représente une base de survie économique non négligeable selon les villes.

## La déclaration obligatoire des changements de situation

L'une des obligations les moins bien connues des bénéficiaires de l'APL est la déclaration rapide des changements de situation à la CAF. Tout changement qui affecte votre droit ou le montant de l'aide doit être déclaré dans les **deux mois** suivant le changement. Les principaux changements concernés sont les suivants.

Un **déménagement** : si vous quittez votre logement actuel pour un autre, vous devez déclarer à la fois la fin de la situation précédente et la nouvelle situation (bail, loyer, adresse). Si vous déménagez dans le même département, votre CAF reste la même. Si vous déménagez dans un autre département, vous devrez initialiser une demande auprès de la CAF du nouveau département.

Une **modification du loyer** : si votre propriétaire augmente votre loyer (dans les limites légales), vous devez le déclarer à la CAF. L'augmentation du loyer peut entraîner une légère augmentation de l'APL si votre loyer restait sous le plafond applicable. A contrario, si vous négociez une baisse de loyer, votre APL sera recalculée en conséquence.

La **fin du bail** ou la résiliation du contrat de location entraîne l'arrêt automatique du versement de l'APL à la date de fin du contrat. Si vous quittez votre logement en cours de bail (par exemple en résiliation anticipée contractuellement prévue), vous devez en informer la CAF. Continuer à percevoir l'APL après avoir quitté le logement constituerait un trop-perçu qui devra être remboursé.

Un **changement de situation familiale** (mise en couple, séparation, naissance d'un enfant, mariage, divorce, pacs) modifie la composition du foyer et impacte le calcul de l'APL. Ces changements doivent être déclarés rapidement.

**Q : L'APL peut-elle être annulée rétroactivement si la CAF découvre que je n'y avais pas droit ?**
Oui, dans les cas où un trop-perçu est constaté — si vous avez perçu une APL à laquelle vous n'aviez pas droit ou dont le montant était surévalué — la CAF peut demander le remboursement des sommes versées à tort. Ce remboursement peut être étalé dans le temps selon votre situation financière, mais il est obligatoire. Les situations les plus fréquentes de trop-perçu sont les changements de situation non déclarés à temps (augmentation de revenus, déménagement, mise en couple) ou les erreurs de déclaration initiale. Pour éviter cette situation, déclarez tout changement rapidement et vérifiez régulièrement que vos informations sur caf.fr sont à jour.
`;

await appendAndPatch('76d8e8e6-da6a-4382-a970-e0dec7a6578d', extAPL1);
