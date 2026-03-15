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

const SHARED = `
## Les dispositifs d'accompagnement à l'insertion professionnelle et leur lien avec les aides

Les aides financières aux étudiants ne s'arrêtent pas à la fin des études — des dispositifs d'accompagnement à l'insertion professionnelle peuvent continuer de soutenir les jeunes diplômés pendant les premiers mois de leur vie professionnelle. La Garantie Jeunes (désormais Contrat d'Engagement Jeune) est une aide de 530 euros par mois versée aux jeunes de 16 à 25 ans NEETs (ni en emploi, ni en études, ni en formation) qui s'engagent dans un parcours d'insertion professionnelle intense. Ce dispositif, accessible aux anciens étudiants qui peinent à trouver leur premier emploi, constitue un filet de sécurité pendant la période de transition entre les études et la vie active.

L'Allocation de Retour à l'Emploi (ARE, communément appelée "chômage") peut être perçue par les jeunes diplômés qui ont travaillé pendant leurs études et cotisé suffisamment à l'Assurance Chômage. Pour y avoir droit, il faut avoir travaillé au moins 130 jours ou 910 heures dans les 24 mois précédant la fin du contrat de travail. Ce droit peut être ouvert même pour un étudiant qui n'a travaillé qu'à mi-temps pendant ses études — vérifier ses droits dès la sortie des études est important pour ne pas passer à côté de cette aide.

## La coordination entre les différents organismes d'aide

L'une des complexités du système d'aide aux étudiants en France est la multiplicité des organismes impliqués — CROUS, CAF, Pôle Emploi (France Travail), CPAM, régions, villes — chacun avec ses propres règles, ses propres formulaires et ses propres délais. Cette fragmentation peut créer des situations où l'étudiant en difficulté ne sait pas à qui s'adresser en premier, ou où des aides se bloquent mutuellement par des règles de non-cumul complexes.

Le Point d'Information Jeunesse (PIJ) ou la Maison de la Jeunesse présente dans beaucoup de villes può jouer un rôle d'orientation utile — ces structures généralistes connaissent l'ensemble des ressources locales disponibles pour les jeunes et peuvent orienter efficacement vers le bon interlocuteur selon la situation. Le service social du CROUS et les services de la vie étudiante des universités jouent également ce rôle d'orientation, mais uniquement pour les étudiants inscrits dans l'enseignement supérieur.
`;

const E3_L1 = SHARED + `
## Le rôle des pairs dans la détection et la prévention des arnaques

Les communautés étudiantes — associations, promotions de cours, groupes de résidence — jouent un rôle important dans la diffusion de l'information sur les arnaques en circulation. Quand un étudiant découvre une nouvelle arnaque qui cible sa communauté, partager immédiatement l'information dans les groupes de messagerie de la communauté permet d'alerter les membres qui pourraient être ciblés. Ces alertes informelles, transmises rapidement via les canaux de communication étudiants, peuvent prévenir des dizaines de victimes pour chaque alerte diffusée.

De même, les services de vie étudiante et les associations étudiantes qui reçoivent des signalements d'arnaques peuvent alerter les autres étudiants via les canaux officiels de l'université. Certaines universités publient des alertes de sécurité sur leurs sites web ou dans leurs newsletters internes quand de nouvelles arnaques ciblant leurs étudiants sont identifiées. Abonner aux communications officielles de son université est donc utile non seulement pour les informations académiques, mais aussi pour la sécurité.
`;

const E3_L2 = SHARED + `
## Le calcul du coût d'opportunité du prêt étudiant

Le coût d'opportunité est le concept économique qui évalue ce qu'on aurait pu faire avec l'argent utilisé d'une certaine façon. Pour le prêt étudiant, le calcul du coût d'opportunité compare le coût total du crédit (intérêts payés) avec ce que l'on aurait pu réaliser avec cet argent s'il avait été épargné ou investi. Sur un prêt de 15 000 euros remboursé en sept ans à 2% d'intérêt, le coût total des intérêts est d'environ 1 100 euros — soit environ 13 euros par mois sur sept ans. Comparé au bénéfice des études financées (salaire plus élevé, opportunités professionnelles élargies), ce coût est clairement justifié.

Ce calcul devient moins favorable si les études financées par le prêt ne débouchent pas sur une amélioration significative des perspectives professionnelles et salariales, ou si le montant emprunté dépasse largement ce qui était nécessaire. La discipline dans le calibrage du montant emprunté — n'emprunter que ce dont on a réellement besoin après avoir optimisé toutes les aides disponibles — est essentielle pour que le bilan économique du prêt reste positif.
`;

const E3_L3 = SHARED + `
## L'accès prioritaire aux logements CROUS pour les étudiants en difficulté

Les CROUS disposent d'un contingent de logements en résidence universitaire réservés aux étudiants en situation de grande précarité, attribués en dehors des procédures normales d'attribution. Ces logements d'urgence peuvent être mobilisés rapidement — parfois en quelques jours — pour des étudiants qui se retrouvent sans logement suite à une expulsion, une rupture familiale, ou une catastrophe. L'accès à ce contingent se fait uniquement sur signalement d'un service social (assistante sociale CROUS, CCAS, service étudiant de l'université).

Pour les étudiants qui anticipent une difficulté de logement — fin de bail non renouvelé, rupture avec la famille d'accueil, fin d'hébergement chez un ami — contacter l'assistante sociale CROUS bien avant l'échéance critique (idéalement un mois à l'avance) est crucial pour maximiser les chances d'une solution rapide. Les CROUS qui savent qu'un étudiant sera sans logement dans un mois peuvent rechercher des disponibilités ; ceux qui sont saisis le jour même d'une mise à la rue ont beaucoup moins de marge de manœuvre.
`;

const E3_L4 = SHARED + `
## Les aides aux étudiants demandeurs d'asile ou réfugiés

Les étudiants en situation de demande d'asile ou bénéficiaires de la protection internationale ont accès à des ressources spécifiques complémentaires aux aides génériques. L'Allocation pour Demandeur d'Asile (ADA) est versée pendant la procédure de demande d'asile par l'OFPRA, mais son montant (environ 6 euros par jour) est insuffisant pour financer des études. Des associations spécialisées — comme France Terre d'Asile, le CIMADE, ou Welcome to France — peuvent orienter les étudiants réfugiés vers des bourses spécifiques pour cette catégorie de bénéficiaires.

Certaines universités ont développé des programmes spécifiques d'accueil des étudiants réfugiés — comme le programme PAUSE (Programme National d'Aide à l'Accueil en Urgence des Scientifiques en Exil) pour les chercheurs exilés, ou les programmes universitaires d'accueil des réfugiés de plusieurs universités parisiennes. Ces programmes offrent non seulement un financement des études, mais aussi un accompagnement social et administratif complet pour faciliter l'intégration.
`;

const E3_L5 = SHARED + `
## La sous-location et ses implications pour les aides CAF

La sous-location — louer une partie de son logement à une tierce personne — est une pratique qui peut aider à réduire le coût du logement mais qui a des implications sur les aides CAF et sur les relations avec le propriétaire. En premier lieu, la sous-location est soumise à l'accord du propriétaire dans la grande majorité des baux — la pratiquer sans autorisation expose au risque de résiliation du bail. En second lieu, les revenus perçus de la sous-location doivent être déclarés à la CAF, qui peut réviser à la baisse les aides au logement en conséquence.

Des plateformes comme Lodgis ou Roomlala facilitent la sous-location de chambres dans les appartements pour des durées courtes à moyennes. Des précautions contractuelles (convention écrite de sous-location) et déclaratives (déclaration des revenus à la CAF et aux impôts) sont indispensables pour pratiquer la sous-location en conformité avec les obligations légales. Le site légifrance.gouv.fr publie les textes de loi sur la sous-location pour comprendre exactement ses droits et obligations.
`;

const E3_L6 = SHARED + `
## Utiliser les budgets prévisionnels pour améliorer les conditions d'emprunt

La présentation d'un budget prévisionnel détaillé et réaliste à une banque lors d'une demande de prêt étudiant peut améliorer les conditions obtenues — notamment pour les montants ou les durées à la limite des critères habituels. Un étudiant qui présente un budget montrant clairement comment le prêt demandé sera utilisé (ventilation entre loyer, alimentation, transport, frais académiques), quels revenus compensent quelles dépenses, et quelle sera sa situation financière probable dans cinq ans est perçu comme plus fiable qu'un demandeur qui se présente sans préparation.

Les simulateurs de budget disponibles sur les sites des banques (simulation de prêt, simulation de remboursement) peuvent être utilisés pour tester différent scénarios et préparer une présentation convaincante. Les conseillers bancaires spécialisés dans le marché étudiant, disponibles dans les agences des grandes villes universitaires, sont souvent plus à même d'apprécier un dossier bien préparé et de proposer des conditions adaptées à la situation spécifique d'un étudiant.
`;

await appendAndPatch('d96c9d24-2b32-4fa0-9625-2217d74a7650', E3_L1);
await appendAndPatch('01449051-1879-46c9-96a5-ce20931ac76d', E3_L2);
await appendAndPatch('3c2044b9-79ea-470a-994a-94117071a70e', E3_L3);
await appendAndPatch('0f811457-418d-4a18-b647-d5882e0b1a80', E3_L4);
await appendAndPatch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', E3_L5);
await appendAndPatch('2fab22b0-0b45-47b9-9322-fe943a74380e', E3_L6);
