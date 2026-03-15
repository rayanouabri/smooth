const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function patch(id, content) {
  const r = await fetch(`${BASE}/rest/v1/lessons?id=eq.${id}`, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  const w = content.split(/\s+/).filter(Boolean).length;
  console.log(r.ok ? '✅' : '❌ '+r.status, id.slice(0,8), w+' mots');
}

// CAF L2 : Logements éligibles et non éligibles à l'APL
const APL2 = `# Logements éligibles et non éligibles à l'APL : ce qu'il faut absolument savoir avant de signer un bail

L'une des erreurs les plus fréquentes et les plus coûteuses que commettent les étudiants en recherche de logement est de supposer que tous les logements locatifs ouvrent automatiquement droit à l'Aide Personnalisée au Logement (APL). Cette supposition, répandue et compréhensible, peut mener à de mauvaises surprises : vous avez signé un bail pour un appartement que vous pensiez éligible à l'APL, vous faites votre demande auprès de la CAF, et elle vous répond que votre logement n'est pas conventionné et que vous n'avez pas droit à l'APL mais peut-être à l'ALS (Allocation de Logement à Caractère Social). Ou pire, que votre logement ne remplit pas les critères minimaux de décence et qu'aucune aide n'est possible dans l'immédiat. Cette leçon vous donne les clés pour vérifier l'éligibilité d'un logement avant même de le visiter, comprendre la distinction entre logements conventionnés et non conventionnés, et éviter les situations de logement précaire qui priveraient d'aides légales.

## La distinction fondamentale : logements conventionnés et non conventionnés

L'APL proprement dite (Aide Personnalisée au Logement) est liée à une notion centrale : la convention. Un logement conventionné est un logement dont le bailleur (propriétaire) a signé une convention avec l'État. Cette convention fixe les loyers maximas applicables à ce logement, les conditions d'entretien et de mise aux normes que le propriétaire s'engage à respecter, et en contrepartie, elle ouvre droit à l'APL pour les occupants remplissant les critères de ressources.

Cette convention est principalement signée par les bailleurs sociaux (organismes HLM, offices publics de l'habitat) et par certains bailleurs privés bénéficiant d'aides à la construction ou à la rénovation dans le cadre de programmes nationaux (comme les logements ANAH conventionnés ou les logements PLS, PLI, PLUS). Dans les faits, la plupart des logements sociaux (HLM) sont conventionnés APL, ainsi que les logements des résidences universitaires gérées par les CROUS (Centres Régionaux des Œuvres Universitaires et Scolaires).

Pour les logements du parc privé non conventionné (un appartement loué par un propriétaire privé qui n'a pas signé de convention avec l'État), l'APL ne s'applique pas. Mais cela ne signifie pas l'absence totale d'aide : dans ce cas, c'est l'Allocation de Logement à Caractère Social (ALS) qui peut prendre le relais, avec des critères et des montants très similaires à ceux de l'APL. La CAF détermine automatiquement, lors du traitement de votre demande, si c'est l'APL ou l'ALS qui s'applique à votre situation. Du côté du locataire, la distinction est administrative mais n'a pas d'impact sur le montant final ni sur la procédure de demande.

## Les résidences CROUS : le logement APL par excellence pour les étudiants

Les résidences universitaires gérées par les CROUS (et leurs équivalents régionaux, les CROUS des différentes académies) constituent la principale forme de logement conventionné APL spécifiquement destinée aux étudiants en France. Ces résidences proposent des chambres meublées de différentes tailles (du studio de 9 m² traditionnel au T1 de 18 m² ou au T1bis de 22 m²), avec des loyers subventionnés.

En résidence CROUS, l'APL est systématiquement applicable et généralement versée en tiers payant directement à la résidence. Cela signifie que le loyer affiché sur votre contrat de location ou dans les relevés mensuels du CROUS est déjà le loyer «brut» (avant APL), et que la résidence déduit votre APL de l'appel mensuel de loyer. Vous payez donc simplement la différence entre le loyer brut et votre APL, sans avoir à gérer les flux financiers de l'aide.

Pour illustrer concrètement : une chambre CROUS à Paris affichée à 380 euros par mois ouvre droit à une APL de l'ordre de 100 à 130 euros. Vous payez à la résidence la différence, soit environ 250 à 280 euros. Ce reste à charge, parmi les plus bas du marché parisien pour un logement individuel, explique l'attractivité jamais démentie des résidences CROUS malgré leurs standards de confort parfois modestes.

L'accès aux logements CROUS se fait via le système en ligne Trousse@crous (résidences) et la demande de logement sociale estudiantine (DSE – Dossier Social Étudiant). La priorité est donnée selon des critères sociaux (revenus des parents, situation familiale, distance du domicile parental) et la disponibilité dans la résidence choisie. En pratique, les listes d'attente sont longues pour les résidences les mieux situées dans les grandes villes.

## Les résidences étudiantes privées et leur éligibilité

En dehors du CROUS, il existe un important parc de résidences étudiantes gérées par des entreprises privées : Nexity-Studéa, Fac-Habitat, Arpège, Kley, Résidence Louise de Bettignies, et de nombreux autres opérateurs. Ces résidences proposent des studios meublés de standing souvent supérieur aux résidences CROUS, avec des services inclus (Internet haut débit, laverie, salle commune, espace de travail) mais à des loyers généralement plus élevés.

L'éligibilité à l'APL ou à l'ALS dans ces résidences privées dépend de leur statut de conventionnement. Les résidences qui ont signé une convention avec l'État (notamment dans le cadre des dispositifs d'aide à l'investissement locatif) sont conventionnées APL. Les autres ne le sont pas mais donnent généralement droit à l'ALS, qui fonctionne de manière identique pour le locataire.

Avant de signer un bail dans une résidence privée, vérifiez explicitement auprès du gestionnaire si le logement est éligible à l'APL ou à l'ALS. La plupart des grandes résidences étudiantes privées ont cette information affichée clairement dans leur documentation commerciale et sur leurs sites internet. Méfiez-vous des logements qui ne mentionnent aucune aide au logement : cela peut signifier soit qu'ils ne sont pas éligibles, soit que le gestionnaire n'a pas pensé à communiquer sur ce point.

## Les locations du parc privé individuel : ALS plutôt qu'APL

La grande majorité des étudiants qui cherchent un logement en dehors des résidences spécialisées se tournent vers le marché locatif privé traditionnel : des appartements loués par des propriétaires individuels, via des agences immobilières, des plateformes comme SeLoger, Leboncoin ou PAP. Ce parc immobilier est généralement non conventionné APL mais éligible à l'ALS.

Pour les studios, T1 et T2 du marché privé traditionnel, le schéma est le suivant : vous signez votre bail, vous faites votre demande d'aide au logement sur caf.fr, et la CAF détermine que vous avez droit à l'ALS (et non à l'APL). Le montant de l'ALS est calculé selon une formule très proche de celle de l'APL, avec les mêmes paramètres de zone, de composition de foyer et de ressources. Du point de vue financier de l'étudiant, la différence entre APL et ALS est donc négligeable.

Les conditions du logement du parc privé doivent respecter les critères légaux de décence. Un logement décent, selon le décret n°2002-120 du 30 janvier 2002, doit : avoir une surface minimale de 9 m² avec une hauteur sous plafond d'au moins 2,20 m, être muni d'une installation permettant d'assurer le chauffage, avoir des installations sanitaires en bon état de fonctionnement (toilettes, douche ou baignoire), disposer d'eau courante chaude et froide, et ne présenter ni infiltration d'eau, ni infestation de nuisibles, ni risque de chute. Un logement qui ne respecte pas ces critères peut se voir refuser par la CAF d'être éligible aux aides au logement.

## Les logements exclus des aides au logement

Certaines catégories de logements sont explicitement exclues du champ des aides au logement de la CAF, qu'il s'agisse de l'APL ou de l'ALS.

**L'hébergement chez les parents ou un proche sans contrat de location** : si vous résidez dans le logement de vos parents, d'un ami ou d'un membre de votre famille sans payer de loyer formalisé par un contrat, vous ne pouvez pas percevoir d'aide au logement. Même si vous contribuez informellement aux charges, l'absence de contrat de location empêche toute aide.

**La sous-location non autorisée** : si votre propriétaire principal a sous-loué son logement à des tiers sans y être autorisé dans le bail initial ou sans accord du propriétaire, et si la sous-location vous concerne en tant que sous-louataire, vous ne pouvez en principe pas bénéficier d'aides au logement. La régularité juridique du contrat de location est vérifiée par la CAF.

**Les meublés de tourisme et locations saisonnières** : un logement loué via des plateformes comme Airbnb en mode résidence principale («location meublée de tourisme») ne donne pas droit aux aides au logement car il ne constitue pas une location résidentielle à titre ordinaire. La distinction est parfois subtile et mérite une vérification si vous êtes dans une situation atypique.

**Les logements de fonction** : si vous êtes hébergé dans le cadre d'un contrat de travail (logement de fonction lié à un contrat de travail), les aides au logement CAF ne s'appliquent pas à ce logement.

**Les logements manifestement insalubres** : si une procédure d'insalubrité a été engagée par l'autorité administrative contre votre logement, la CAF peut refuser d'instruire votre demande d'aide au logement jusqu'à la résolution du problème.

## Vérifier l'éligibilité d'un logement avant de signer le bail

Avant de signer un bail, voici les démarches pratiques pour vérifier l'éligibilité à une aide au logement et estimer le montant potentiel.

**Simulation sur le site caf.fr** : le simulateur d'aides au logement de la CAF, accessible sur caf.fr sans créer de compte, permet d'estimer votre APL ou ALS potentielle en renseignant les informations du logement. Utilisez ce simulateur lors de votre recherche de logement pour comparer les aides potentielles entre différents logements. Un logement plus cher peut parfois revenir moins cher «net d'APL» qu'un logement moins cher si le premier ouvre droit à une aide plus élevée en zone I.

**Demander au propriétaire ou à l'agence** : lors de la visite, demandez directement si le logement est éligible aux aides CAF. La plupart des propriétaires le savent et peuvent vous indiquer si le logement a déjà été occupé par des étudiants qui percevaient une aide. Si le propriétaire ne sait pas, l'indication peut figurer sur la convention d'aide à l'amélioration de l'habitat (ANAH) ou sur les caractéristiques de financement du logement.

**Vérification du contrat de location** : le bail standardisé (contrat de location d'habitation principale) contient généralement une rubrique sur les aides au logement applicables ou une déclaration du bailleur sur le statut de conventionnement du logement.

## La colocation et les aides au logement

La colocation est une pratique très répandue parmi les étudiants, car elle permet de partager le coût d'un logement plus grand et de ne payer qu'une fraction du loyer total. La question des aides au logement en colocation mérite une attention particulière car les règles sont spécifiques.

**Bail unique avec plusieurs locataires** : si vous êtes plusieurs colocataires sur un même bail, chacun peut faire une demande d'aide au logement distincte. Chaque demandeur déclare sa part effective du loyer (généralement le loyer total divisé par le nombre de colocataires) et la CAF calcule l'aide sur cette base. Deux colocataires dans un T2 à 900 euros de loyer total déclarent chacun 450 euros, et reçoivent chacun une aide calculée sur 450 euros.

**Baux individuels dans une colocation** : dans certaines colocations, chaque colocataire a son propre bail individuel avec le propriétaire (système dit de «baux individuels»). Dans ce cas, chacun déclare son loyer individuel à la CAF, qui calcule l'aide normalement.

**Colocataires en couple** : si vous êtes en couple avec un colocataire et que vous partagez le même logement, la CAF considère votre couple comme un foyer unique. Vos revenus combinés sont pris en compte dans le calcul de l'aide, ce qui peut réduire le montant par rapport à une demande individuelle.

## Témoignages sur la recherche de logements éligibles

**Yuki Tanaka, 21 ans, en échange universitaire Erasmus, venue du Japon** : «Avant de signer mon bail pour un studio dans le 5e arrondissement de Paris, j'ai utilisé le simulateur CAF pour vérifier que j'aurais droit à l'aide. La simulation donnait 140 euros par mois d'ALS sur un loyer de 750 euros. C'était moins que ce que j'espérais mais cela représentait tout de même 18 % de mon loyer couvert. J'ai signé en sachant exactement ce que j'allais recevoir.»

**Mohamed Benali, 24 ans, en master d'urbanisme, venu du Maroc** : «J'ai failli louer un appartement sous-loué illégalement — la CAF a refusé mon dossier en expliquant que le contrat n'était pas conforme. J'ai dû déménager rapidement et trouver un logement avec un bail régulier. Depuis, je vérifie systématiquement la régularité du bail avant de signer.»

## Questions fréquentes sur l'éligibilité des logements

**Q : Puis-je toucher une aide au logement si je loue en meublé ?**
Oui. Les logements meublés sont éligibles aux aides au logement au même titre que les logements vides (non meublés), à condition de respecter toutes les autres conditions d'éligibilité (contrat de location, logement décent, résidence principale). Pour les meublés, le contrat doit être un bail de location meublée conforme aux dispositions de la loi ALUR (contrat d'un an renouvelable ou de 9 mois non renouvelable pour les étudiants).

**Q : Mon logement doit-il avoir une surface minimale pour être éligible à l'APL/ALS ?**
La surface minimum légale pour un logement considéré comme décent est de 9 m² avec une hauteur sous plafond d'au moins 2,20 m. En dessous de cette surface, le logement est considéré comme indécent et ne peut pas ouvrir droit aux aides au logement. Des logements de moins de 9 m² existent encore dans certaines villes (Paris notamment), mais ne sont pas éligibles aux aides CAF.

**Q : Est-ce que le logement étudiant dans un appartement partagé avec le propriétaire (chambre chez l'habitant) ouvre droit à l'APL ?**
Cela dépend de la nature du contrat. Si vous avez un contrat de location en bonne et due forme pour votre chambre, avec un loyer et une surface dédiée, vous pouvez potentiellement bénéficier d'une aide au logement. En revanche, si vous êtes «hébergé» dans le cadre d'un arrangement informel (pas de bail écrit), aucune aide n'est possible.

**Q : Je viens de trouver un logement mais le propriétaire ne veut pas que je touche l'APL (il refuse le tiers payant). C'est légal ?**
Un propriétaire ne peut pas légalement refuser que son locataire fasse une demande d'aide au logement si le logement est éligible. Il peut en revanche refuser le «tiers payant» (le versement direct de l'aide à lui-même par la CAF), mais il ne peut pas vous interdire de percevoir l'aide sur votre propre compte bancaire. Si un propriétaire tente de vous imposer de ne pas demander l'APL comme condition de location, c'est une discrimination illégale que vous pouvez signaler à l'ADIL (Agence Départementale d'Information sur le Logement).

**Q : Est-il possible de cumuler APL et ALS en cas de colocation entre plusieurs personnes ayant des statuts différents ?**
Non. APL et ALS ne peuvent pas se cumuler pour le même logement. Mais dans une colocation, chaque colocataire peut faire sa demande individuellement, et il est possible que certains reçoivent l'APL (si leur partie du bail porte sur un logement conventionné) et d'autres l'ALS. C'est rare en pratique car la convention s'applique au logement entier et non à des portions.

## Ressources officielles

- [caf.fr – Simulateur d'aide au logement](https://wwwd.caf.fr/wps/portal/caffr/simulateuralgapl) : Vérifiez l'éligibilité et estimez le montant de votre aide
- [service-public.fr – Décence du logement](https://www.service-public.fr/particuliers/vosdroits/F10798) : Les critères légaux de décence d'un logement locatif
- [adil.org – Annuaire des ADIL](https://www.anil.org/lanil-et-les-adil/votre-adil) : Trouvez votre agence locale d'information sur le logement pour un conseil personnalisé gratuit
`;

await patch('3c19d39d-1a36-498f-9d8a-1c4ae1a5d9d1', APL2);
