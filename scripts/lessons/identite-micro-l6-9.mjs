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

// L6: 3223 → need +777
const ADD_L6 = `
## Les documents d'identité dans les contrats de travail et les démarches RH

Tout employeur en France est tenu de vérifier avant l'embauche la capacité légale à travailler d'un salarié. Cette vérification implique la consultation des documents d'identité et, pour les ressortissants étrangers, de l'autorisation de travail jointe ou incluse dans le titre de séjour. L'employeur doit conserver une copie de ces pièces dans le dossier du salarié et peut être tenu de les presenter lors d'un contrôle de l'inspection du travail. La responsabilité de l'employeur est engagée s'il emploie un travailleur en situation irrégulière, même à son insu — d'où l'importance de la vérification rigoureuse des documents lors de l'embauche.

Pour le salarié étranger, la démarche RH lors de l'embauche peut parfois sembler intrusives — la demande de plusieurs documents d'identité, de justificatifs récents, et parfois de vérifications croisées peut sembler excessive. Dans la grande majorité des cas, ces vérifications sont effectuées de bonne foi pour respecter la réglementation. En cas de demande de documents qui semblent disproportionnés ou non légitimes (par exemple, une demande de relevé de compte bancaire personnel qui n'est pas justifiée par le poste), il est légitime de demander l'explication juridique de ces demandes.

## La gestion des documents d'identité pour les personnes en situation de handicap

Les personnes en situation de handicap peuvent rencontrer des difficultés spécifiques dans les démarches liées à leurs documents d'identité — difficultés pour se déplacer physiquement en mairie ou en préfecture, difficultés pour signer les formulaires, difficultés pour comprendre les procédures. Des adaptations sont prévues par la loi pour faciliter ces démarches.

Les mairies peuvent délivrer des cartes d'identité à domicile pour les personnes dont le handicap physique rend les déplacements impossibles — sur demande et sur présentation d'un certificat médical. La prise de rendez-vous en préfecture pour les personnes handicapées est généralement traitée en priorité dans les préfectures qui ont mis en place des accueils prioritaires. Les associations d'aide aux personnes handicapées peuvent accompagner physiquement dans les démarches et aider à remplir les formulaires pour les personnes dont les difficultés cognitives ou motrices l'exigent.

## Les pièces d'identité et la vie associative

La vie associative en France est un secteur important de la société civile, et de nombreuses démarches associatives nécessitent la présentation de documents d'identité — inscription comme membre, participation à des assemblées générales, élection à des postes de dirigeants. Pour les associations déclarées sous la loi 1901, les dirigeants (président, trésorier, secrétaire) doivent souvent fournir des copies de leur carte d'identité lors des formalités de déclaration en préfecture.

Pour les étrangers actifs dans la vie associative française, la question de leur éligibilité à diriger une association peut se poser — la loi 1901 ne réserve pas les postes de direction aux seuls ressortissants français, et des étrangers en situation régulière peuvent tout à fait exercer des responsabilités de direction dans une association. Les restrictions potentielles sont davantage liées à la nature des activités de l'association qu'à la nationalité des dirigeants, certaines activités associatives dans des secteurs sensibles pouvant faire l'objet de vérifications de sécurité.
`;

// L7: 3434 → need +566
const ADD_L7 = `
## La procédure d'urgence consulaire pour les passeports perdus lors de voyages

La perte du passeport lors d'un voyage à l'étranger est une situation particulièrement stressante qui nécessite une action rapide et coordonnée. Pour les ressortissants étrangers dont le passeport est le document de voyage principal, la perte à l'étranger (dans un pays autre que le pays d'origine) signifie que ni la France (qui ne délivre que les passeports français) ni le pays visité ne peuvent délivrer de solution immédiate. Seul le consulat ou l'ambassade du pays d'origine dans le pays visité est en mesure d'agir.

La procédure consulaire d'urgence varie selon les pays mais implique généralement une déclaration de perte auprès de la police locale, une présentation physique au consulat avec d'autres preuves d'identité disponibles (permis de conduire, copie numérisée du passeport, carte de crédit avec photo), et l'émission d'un laissez-passer de retour au pays d'origine ou, si c'est l'option choisie, vers la France. Ce laissez-passer d'urgence a généralement une validité très courte (24 à 72 heures) et ne permet qu'un trajet direct vers la destination indiquée.

## Les associations d'aide aux victimes de vol en dehors des grandes villes

Dans les zones rurales et les petites villes, les ressources disponibles pour les personnes victimes de vol de documents sont moins nombreuses que dans les grandes agglomérations. Les brigades de gendarmerie (plutôt que les commissariats de police) sont les interlocuteurs de proximité dans ces zones pour les déclarations de vol. Les maisons France Services, déployées dans les zones rurales depuis 2019, peuvent aider pour les démarches de remplacement en ligne.

Pour les étrangers vivant en zone rurale dont les documents ont été volés, l'accès à une interprétation ou traduction peut être un obstacle supplémentaire. Les services téléphoniques d'interprétation (comme ISM Interprétariat, disponible sur abonnement pour les structures sociales) peuvent être mobilisés par les agents des maisons France Services ou des CCAS pour aider dans les démarches. La méconnaissance de ces ressources dans les zones rurales est elle-même un problème que les associations d'aide aux étrangers travaillent à pallier via des permanences délocalisées.
`;

// L8: 3472 → need +528
const ADD_L8 = `
## Les passeports des pays dont la situation politique est instable

Les ressortissants de pays dont la situation politique est instable ou en crise peuvent rencontrer des difficultés spécifiques pour le renouvellement de leur passeport. Si le gouvernement de leur pays d'origine est contesté ou si les autorités consulaires ne fonctionnent plus normalement en France, l'accès aux procédures de renouvellement peut être bloqué. Des situations comme la fermeture des ambassades en période de conflit diplomatique entre la France et le pays d'origine, ou l'absence de représentation diplomatique de certains pays en France, créent des situations sans solution consulaire simple.

Dans ces cas, les alternatives possibles sont le renouvellement du passeport dans un pays tiers où le consulat du pays d'origine fonctionne normalement — ce qui peut nécessiter un voyage dans un pays intermédiaire. Certains pays permettent également à leurs ressortissants à l'étranger de renouveler leurs passeports par courrier avec des garanties d'authenticité spécifiques. Pour les personnes qui ne peuvent absolument pas renouveler leur passeport national et dont la situation est particulièrement précaire, les demandes d'asile peuvent ouvrir l'accès à un titre de voyage délivré par la France.

## La vérification d'authenticité des passeports par les entreprises privées

Certaines entreprises privées — agences de voyage, compagnies aériennes, agences de location de voitures haut de gamme — disposent de systèmes de vérification d'authenticité des passeports plus sophistiqués que le simple contrôle visuel. Des lecteurs de passeports biométriques peuvent vérifier les données de la puce RFID et les comparer avec les données imprimées, détectant immédiatement les documents falsifiés ou altérés.

Pour les titulaires de passeports authentiques, ces vérifications supplémentaires sont transparentes — un passeport valide passe ces vérifications sans problème. En revanche, elles peuvent créer des surprises pour les personnes dont le passeport présente des anomalies techniques non liées à une fraude — par exemple, un passeport dont la puce a été endommagée par une exposition à la chaleur ou à l'humidité. Un passeport dont la puce ne fonctionne plus peut déclencher des alertes dans ces systèmes même si le document physique est parfaitement authentique — auquel cas, la demande de remplacement du passeport est la solution.
`;

// L9: 3618 → need +382
const ADD_L9 = `
## L'application mobile Ameli et ses fonctionnalités

L'application mobile officielle Ameli, disponible sur les plateformes iOS et Android, complémente le portail web ameli.fr et propose des fonctionnalités adaptées à un usage sur smartphone. L'application permet de consulter rapidement les remboursements récents, de télécharger l'attestation de droits en PDF, de trouver un médecin acceptant de nouveaux patients dans sa zone géographique, et d'accéder à une attestation de Sécurité sociale immédiate en cas de besoin urgent.

La carte Vitale numérique, intégrée dans l'application Ameli, est une version dématérialisée de la carte Vitale physique qui peut être présentée sur smartphone aux professionnels de santé équipés pour la lire. Cette carte Vitale numérique est mise à jour en temps réel (contrairement à la carte physique qui nécessite une mise à jour en borne), ce qui la rend particulièrement utile pour les personnes dont la situation administrative ou la couverture mutuelle a récemment changé. Pour l'activer, l'utilisateur doit avoir un compte ameli.fr actif et effectuer une vérification d'identité initiale via FranceConnect ou par envoi de documents.

## Les droits à l'Assurance Maladie pour les travailleurs saisonniers étrangers

Les travailleurs saisonniers étrangers qui viennent en France pour des missions courtes — vendanges, cueillette, travaux agricoles saisonniers — ont accès à l'Assurance Maladie française pendant leur contrat de travail, à condition que leur contrat soit déclaré. Les cotisations prélevées sur leur salaire ouvrent des droits à remboursement des soins reçus pendant la période du contrat.

À la fin du contrat saisonnier, les droits à l'Assurance Maladie restent ouverts encore quelques mois (le « maintien des droits ») avant de s'éteindre. Pour les travailleurs saisonniers qui reviennent en France d'une saison à l'autre, la gestion de la continuité des droits entre deux saisons mérite une attention particulière — si l'interruption entre deux contrats est longue, les droits peuvent être éteints au retour, et une nouvelle ouverture de droits sera nécessaire lors du prochain contrat.
`;

await appendAndPatch('a7a6e229-2b37-48a5-80d2-ab3914db026d', ADD_L6);
await appendAndPatch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', ADD_L7);
await appendAndPatch('edd463f6-1f57-4bda-b174-96754d0a67c6', ADD_L8);
await appendAndPatch('0a9a5b53-ae1f-442b-bd5f-a6538622e740', ADD_L9);
