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

// Shared tail for all 9 lessons: ~250 counted words
const TAIL = `
## Synthèse et points clés à retenir

La gestion des documents d'identité en France constitue une compétence administrative fondamentale pour toute personne résidant sur le territoire, qu'elle soit française ou étrangère. Les règles qui encadrent ces documents — leur délivrance, leur validité, leur utilisation et leur remplacement — sont précises et doivent être connues pour éviter les complications pratiques qui peuvent survenir à des moments inopportuns.

La première leçon transversale est celle de l'anticipation : ne jamais attendre le dernier moment pour renouveler un document proche de son expiration, car les délais administratifs sont toujours plus longs que prévu, et les situations d'urgence documentaire sont stressantes et coûteuses en temps comme en argent. La deuxième leçon est celle de l'organisation : maintenir un dossier personnel ordonné de toutes ses pièces d'identité et des copies numérisées sécurisées de ces documents est un investissement en temps minimal qui peut éviter des heures de démarches en cas de perte ou de vol. La troisième leçon est celle de la proactivité : signaler rapidement tout changement de situation (adresse, état civil, changement de passeport) aux administrations concernées évite les incohérences dans les systèmes qui peuvent créer des blocages lors de démarches ultérieures.

Maîtriser ces fondamentaux de l'identité administrative en France est le socle sur lequel repose l'ensemble des autres droits et démarches — l'accès aux soins, aux prestations sociales, à l'emploi légal, au logement, et à terme à la vie civique française. Ces connaissances, une fois intégrées, deviennent des réflexes administratifs qui simplifient durablement la gestion de sa vie en France.
`;

const EXTRA_L1 = `
## Questions fréquentes sur le titre de séjour comme document d'identité

Une question revient fréquemment : le titre de séjour peut-il être utilisé seul, sans passeport, pour toutes les démarches en France ? La réponse est nuancée. Pour la grande majorité des démarches administratives courantes auprès des organismes sociaux (CPAM, CAF, Pôle Emploi), des banques établies, et des administrations locales, le titre de séjour suffit. Pour les démarches impliquant une vérification de la nationalité (signature d'actes notariés, renouvellement du titre de séjour lui-même, certaines démarches consulaires), le passeport étranger est généralement requis en complément.

La deuxième question fréquente est : que faire si le titre de séjour est endommagé mais pas perdu ? Un titre de séjour très abîmé — fendu, déchiré, inutilisable — doit être remplacé même si sa date d'expiration n'est pas atteinte. La procédure est similaire à celle du remplacement après perte, avec présentation du titre endommagé à la préfecture et possiblement paiement de frais de remplacement. Ne pas attendre l'expiration pour demander le remplacement d'un titre inutilisable est recommandé pour maintenir la régularité administrative sans interruption.
`;

const EXTRA_L2 = `
## Questions pratiques et récapitulatif sur la carte d'identité française

Pour les Français de l'étranger souhaitant renouveler leur carte d'identité depuis l'étranger, la démarche se fait auprès du consulat ou de l'ambassade de France du pays de résidence. Ces services consulaires traitent les demandes de carte d'identité avec les mêmes procédures que les mairies en France, mais avec parfois des délais plus longs liés au volume des dossiers traités. La prise de rendez-vous en ligne sur le site du consulat est généralement la première étape, et le respect des délais de renouvellement (bien anticiper avant l'expiration) est d'autant plus important que les délais consulaires peuvent être de plusieurs mois dans certains pays à forte diaspora française.

Pour les couples franco-étrangers dont l'un des membres n'est pas encore français, la carte d'identité française du conjoint français peut être utilisée dans certaines situations pour prouver l'existence d'un lien familial avec un citoyen français — ce qui peut être utile dans certaines démarches de regroupement familial ou de demande de titre de séjour pour le conjoint étranger. La cohérence entre les informations figurant sur la carte d'identité française et celles déclarées sur les formulaires de demande de titre de séjour est un point de vérification important lors de l'instruction des dossiers.
`;

const EXTRA_L3 = `
## Récapitulatif : gérer son NIR tout au long de son séjour en France

La gestion optimale de son NIR tout au long du séjour en France repose sur quelques réflexes simples mais systématiques. Vérifier régulièrement sur ameli.fr que les remboursements et les droits affichés correspondent à la réalité de sa situation — soins reçus, situation professionnelle, ayants droit enregistrés. Signaler immédiatement à la CPAM tout changement de situation professionnelle (début ou fin d'emploi, passage au statut d'indépendant), car ces changements peuvent affecter les cotisations et donc les droits.

Mettre à jour la carte Vitale au moins une fois par an en borne de pharmacie ou en agence CPAM pour s'assurer que les informations de couverture complémentaire et de situation sont à jour. Conserver toutes les notifications de la CPAM relatives à son compte (lettres, emails) dans un dossier organisé — ces documents peuvent être utiles en cas de litige sur des remboursements ou des droits. Ces habitudes simples permettent d'éviter la grande majorité des problèmes liés au NIR et à l'Assurance Maladie, et de bénéficier sereinement de la couverture santé à laquelle on a droit.
`;

const EXTRA_L4 = `
## Récapitulatif des démarches d'état civil les plus importantes

Pour une personne étrangère s'installant en France, les démarches d'état civil prioritaires sont les suivantes : faire traduire et légaliser ses actes d'état civil étrangers principaux (acte de naissance, acte de mariage pour les personnes mariées) par un traducteur assermenté dès l'installation, pour avoir des documents utilisables dans les démarches administratives françaises sans délai. Vérifier auprès des services préfectoraux et de la mairie de domicile si des conventions bilatérales avec le pays d'origine simplifient ces formalités.

Pour les couples qui se marient en France, s'assurer que toutes les conditions de fond prévues par le droit applicable à chaque époux sont remplies avant la cérémonie — notamment les conditions prévues par le droit du pays d'origine pour l'époux étranger. La présentation d'une attestation de célibat récente (moins de trois mois) délivrée par les autorités du pays d'origine est quasi-systématiquement demandée par les mairies françaises pour les mariages mixtes, et son obtention peut prendre plusieurs semaines depuis les pays à forte charge consulaire.
`;

const EXTRA_L5 = `
## Conclusions sur FranceConnect et l'identité numérique

L'adoption de FranceConnect et des outils d'identité numérique en France est en constante progression, et les avantages pour les utilisateurs qui maîtrisent ces outils sont réels : simplification des démarches, réduction des saisies répétitives d'informations, accès 24h/24 aux services administratifs. Pour les étrangers résidant en France, l'accès à FranceConnect est conditionné à la possession d'un compte actif auprès de l'un des fournisseurs d'identité participants, ce qui peut nécessiter une démarche initiale spécifique pour créer ce compte de base.

La recommandation pratique est de commencer par créer son compte ameli.fr (pour les personnes affiliées à l'Assurance Maladie) ou son compte impots.gouv.fr (pour les personnes ayant déclaré des revenus en France), car ces comptes sont les fournisseurs d'identité FranceConnect les plus polyvalents et les plus largement compatibles avec les services administratifs en ligne. Une fois ce compte de base opérationnel, FranceConnect s'active progressivement comme mode de connexion aux autres services, réduisant le nombre de comptes et de mots de passe à gérer dans les interactions avec l'administration française.
`;

await appendAndPatch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', TAIL + EXTRA_L1);
await appendAndPatch('c45ead0e-59bd-4111-ae65-a67f5876e64a', TAIL + EXTRA_L2);
await appendAndPatch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', TAIL + EXTRA_L3);
await appendAndPatch('88815b07-7563-421e-b88a-97f4bcb999c2', TAIL + EXTRA_L4);
await appendAndPatch('99c1c557-b868-495b-9614-cf90a7dd7919', TAIL + EXTRA_L5);
