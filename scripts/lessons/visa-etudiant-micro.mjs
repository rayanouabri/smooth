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

const ADD_L2 = `
## La solidarité entre étudiants étrangers dans la démarche Campus France

Une ressource précieuse et souvent sous-estimée est le réseau informel des étudiants qui ont déjà traversé la procédure Campus France depuis votre pays. Ces anciens candidats, souvent actifs sur des groupes Facebook, des forums en ligne ou des associations d'étudiants, peuvent partager des informations actualisées et pratiques sur les délais réels, les documents spécifiquement demandés dans votre bureau Campus France local, et les retours d'expérience sur les entretiens. Ces informations contextuelles et locales sont souvent plus utiles que les guides officiels pour des situations concrètes spécifiques à votre pays ou votre ville. Rejoindre ces communautés dès le début de votre démarche vous donne accès à une base de savoir collectif très riche et vous permet de poser des questions précises à des personnes qui ont vécu exactement la même procédure quelques mois ou quelques années avant vous. Cette solidarité entre étudiants est l'une des dynamiques les plus positives de la mobilité étudiante internationale.
`;

const ADD_L3 = `
## Anticiper les frais accessoires au visa : un budget souvent oublié

En plus de la preuve de ressources pour vivre en France, la procédure visa génère ses propres frais souvent oubliés dans la planification budgétaire. Les frais de visa consulaire varient de 0 à 99 euros selon les pays et les accords bilatéraux. Les frais de traduction assermentée de documents officiels (acte de naissance, diplômes en langue locale) peuvent s'élever à 50 à 150 euros par document selon la ville et le traducteur. Les frais de légalisation ou d'apostille de certains documents peuvent ajouter de 20 à 60 euros supplémentaires par document. Les frais de photos d'identité aux normes consulaires représentent quelques euros. Si vous utilisez un prestataire externe pour la prise de rendez-vous consulaire (VFS Global, TLS Contact dans certains pays), des frais de service additionnels de 20 à 50 euros s'appliquent. En anticipant ces frais accessoires dans votre budget de démarche visa, vous évitez les mauvaises surprises liées à des coûts imprévus au moment le moins opportun de la procédure.
`;

const ADD_L4 = `
## Suivi et gestion numérique de votre dossier OFII

L'ère numérique apporte des outils de gestion de votre dossier administratif que les générations précédentes n'avaient pas. Adoptez dès votre arrivée une organisation numérique rigoureuse de vos documents officiels en France. Créez un dossier numérique sécurisé (Google Drive, OneDrive, Dropbox ou solution équivalente) dans lequel vous stockez les copies numériques de tous vos documents officiels : passeport, VLS-TS, confirmation de validation OFII, vignette OFII (photo après réception), relevés de compte, attestations universitaires, courriers CAF et CPAM. Ce dossier numérique, accessible depuis n'importe quel appareil connecté, sera votre archive personnelle pendant toute la durée de votre séjour et vous permettra de retrouver instantanément tout document dont vous aurez besoin pour une formalité administrative.

La plateforme ANEF (administration numérique pour les étrangers en France) centralise également une grande partie de votre dossier administratif — votre compte ANEF est votre espace de gestion de vos titres de séjour, des demandes de renouvellement, et des échanges avec les services préfectoraux. Créez votre compte ANEF dès votre arrivée, même si vous n'en avez pas encore besoin activement, pour ne pas avoir à le faire dans l'urgence au moment du renouvellement.

Gardez également un agenda numérique avec une alerte pour chacune de vos échéances administratives importantes : date limite de validation OFII (3 mois après arrivée), date d'expiration du VLS-TS, date de début de la fenêtre de renouvellement (2 mois avant expiration), date de renouvellement de votre passeport si nécessaire. Ces alertes préventives, configurées dès votre installation, vous éviteront les pénibles situations de dernière minute qui génèrent un stress inutile au milieu de vos études.
`;

const ADD_L5 = `
## Les obligations linguistiques : une réalité pratique

Bien que la France n'impose pas formellement d'obligation linguistique aux étrangers résidant légalement sur son territoire (contrairement à certains programmes d'intégration qui exigent une formation linguistique), la maîtrise du français est une condition pratique incontournable de la réussite de votre séjour. Votre faculté à mener vos études, à communiquer avec les administrations, à interagir avec les services de santé, à défendre vos droits si nécessaire, et à vous intégrer socialement dépend directement de votre niveau de français.

Si votre niveau à l'arrivée est encore fragile, l'université française propose généralement des cours de français langue étrangère (FLE) à des tarifs préférentiels pour les étudiants internationaux. Certains CROUS proposent également des séances de conversation en français entre étudiants natifs et internationaux, qui sont un excellent complément aux cours formels. L'investissement dans l'amélioration de votre français est l'un des retours sur investissement les plus élevés que vous puissiez faire pendant vos premières semaines en France.
`;

await appendAndPatch('383d067a-e559-4c49-a8f0-043999c4feb4', ADD_L2);
await appendAndPatch('f9d81291-5c86-4364-8ed7-b3dab5a311e4', ADD_L3);
await appendAndPatch('091720f8-2caa-4c7f-8ae9-02e55406872a', ADD_L4);
await appendAndPatch('90444a49-53bc-4a34-b454-a2897fa20591', ADD_L5);
