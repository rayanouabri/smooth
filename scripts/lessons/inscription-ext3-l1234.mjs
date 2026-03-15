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

const ADD3_L1 = `
## L'accompagnement institutionnel dans les démarches de reconnaissance

Les institutions françaises ont progressivement mis en place des dispositifs d'accompagnement pour les personnes qui traversent des démarches de reconnaissance de diplômes étrangers, conscientes que ces procédures sont intimidantes et exigeantes pour des personnes qui arrivent dans un pays dont elles ne maîtrisent pas encore toutes les subtilités administratives. Ces dispositifs vont de l'information générale à l'accompagnement personnalisé individualisé.

France Éducation International, qui héberge le centre ENIC-NARIC français, publie sur son site internet des guides pratiques détaillés pour les candidats qui demandent une attestation de comparabilité. Ces guides expliquent pas à pas la procédure, les documents requis selon le pays d'origine et le type de diplôme, et les délais habituels de traitement. Ils sont disponibles en français et souvent dans d'autres langues.

Les services d'information et d'orientation des universités (SAIO, SCUIO-IP) proposent des consultations individuelles avec des conseillers en orientation qui peuvent aider à évaluer la valeur probable du diplôme étranger dans le contexte français, à identifier les formations adaptées au profil et au projet, et à préparer les démarches administratives. Ces consultations sont gratuites pour les personnes désireuses de s'inscrire dans l'université ou dans les universités de l'académie.

## Questions fréquentes sur l'équivalence de diplômes

Plusieurs questions reviennent régulièrement dans les consultations sur l'équivalence de diplômes étrangers. La première est la suivante : « Mon diplôme de 4 ans est-il équivalent à une licence (3 ans) ou à un master (5 ans) ? » La réponse dépend non pas uniquement de la durée de la formation mais aussi de son contenu et de son niveau académique. Un Bachelor de 4 ans d'une université américaine est généralement reconnu comme équivalent d'une licence française. Un Bachelor Engineering de 4 ans d'un IIT indien (institution d'excellence mondiale) peut être reconnu à un niveau supérieur.

La deuxième question est : « Ma formation dans une école privée non accréditée par l'État de mon pays est-elle reconnue ? » La réponse est généralement non, ou avec des difficultés significatives. La reconnaissance des diplômes s'appuie sur la comparaison avec les systèmes universitaires publics ou reconnus par l'État. Un diplôme d'un établissement privé non accrédité ou d'une « université en ligne » sans accréditation officielle dans son pays d'origine ne bénéficiera pas d'une reconnaissance équivalente.

La troisième question est : « Puis-je me présenter au concours de l'enseignement (CAPES, agrégation) avec un diplôme étranger reconnu au niveau master ? » La réponse est oui, sous réserve de vérification des conditions spécifiques de chaque concours auprès du ministère de l'Éducation nationale, qui précisent les niveaux de qualification requis.

## La dimension temporelle : planifier sur 12 à 18 mois

La réalité des délais des différentes procédures liées à la reconnaissance de diplômes impose une planification sur le long terme qui peut surprendre des candidats habitués à des systèmes administratifs plus réactifs. Si l'on additionne les délais de la demande d'attestation ENIC-NARIC (2 à 6 mois), les délais de la procédure de candidature dans les universités (3 à 6 mois pour les procédures Campus France), les délais du visa étudiant (2 à 3 mois) et les délais d'installation pratique en France, la période entre la décision de venir étudier en France et le premier jour effectif de cours peut facilement atteindre 12 à 18 mois.

Cette réalité temporelle n'est pas un obstacle insurmontable, mais elle impose de prendre les décisions suffisamment tôt. L'idéal est de commencer les démarches d'équivalence et de candidature dès que la décision de venir étudier en France est prise, sans attendre d'avoir résolu tous les obstacles pratiques locaux avant d'initier les procédures françaises.
`;

const ADD3_L2 = `
## Les bourses sectorielles et fondations privées

Au-delà des bourses gouvernementales et des aides institutionnelles, un réseau de fondations privées, d'entreprises et d'organisations sectorielles finance des études supérieures d'étudiants étrangers en France. Ces sources de financement sont moins connues mais souvent moins compétitives que les bourses gouvernementales, pour peu qu'on sache où les chercher.

Certaines fondations d'entreprises (Fondation L'Oréal, Fondation TotalEnergies, Fondation BNP Paribas) financent des bourses pour des étudiants en sciences, en environnement ou en économie. Des fondations familiales et des associations humanitaires soutiennent des étudiants issus de pays spécifiques ou de milieux défavorisés. Les associations d'anciens élèves des grandes écoles financent des parcours d'excellence pour des étudiants africains ou d'autres pays en développement voulant intégrer les formations post-bac les plus sélectives.

La recherche de ces financements privés requiert une démarche active : consulter les sites des fondations, écrire des emails de candidature spontanée avec un dossier soigné, entrer en contact avec des réseaux d'anciens. Ce travail de prospection peut sembler fastidieux mais il est potentiellement très rentable — une bourse de fondation de 5 000 à 15 000 euros par an change radicalement les conditions d'une année d'études.

## Les implications financières de l'alternance

L'alternance — la formation sous contrat d'apprentissage ou de professionnalisation — change fondamentalement l'équation financière des études supérieures. En tant qu'apprenti, l'étudiant est salarié de l'entreprise d'accueil et perçoit une rémunération calculée comme pourcentage du SMIC selon son âge et son niveau d'études (entre 27% et 100% du SMIC selon les cas). Cette rémunération, que l'État complète par des exonérations de charges pour l'entreprise, permet à l'apprenti de financer ses études et sa vie quotidienne sans endettement.

Les frais de formation en alternance sont entièrement pris en charge par l'opérateur de compétences (OPCO) de la branche professionnelle de l'entreprise d'accueil — l'apprenti ne paye pas ses droits d'inscription. Pour les étudiants étrangers, l'accès à l'alternance est possible sous réserve d'être titulaire d'une autorisation de travail valide (incluse dans le visa étudiant pour un volume horaire limité, ou dans le titre de séjour « passeport talent » pour l'alternance à plein temps).

## Les aides au transport et à la mobilité

La mobilité entre le domicile et le campus représente un coût récurrent qui peut avoir un impact significatif sur le budget étudiant, particulièrement dans les grandes agglomérations où les distances sont importantes. Les employeurs des apprentis sont légalement tenus de rembourser 50% des frais d'abonnement aux transports en commun de leurs apprentis — un avantage financier à ne pas négliger dans le calcul de l'attractivité d'une offre d'alternance.

Pour les étudiants non salariés, de nombreuses collectivités locales proposent des aides spécifiques aux étudiants pour les transports : tarifs très réduits ou gratuits sur les réseaux de bus et tramway locaux, abonnements vélo à prix symbolique. Ces aides varient beaucoup selon les villes et évoluent régulièrement — vérifiez auprès de votre mairie ou du service social étudiant de l'université les dispositifs en vigueur dans votre ville.

## La gestion des dettes et les prêts étudiants

La culture de l'endettement pour les études est moins développée en France que dans les pays anglo-saxons, mais les prêts étudiants existent et peuvent constituer une solution de financement pour les étudiants qui n'ont pas accès aux aides gouvernementales. Les banques proposent des prêts étudiants à taux réduit, généralement remboursables après la fin des études selon des modalités adaptées aux revenus de départ. Des garanties publiques via Bpifrance sont disponibles pour les étudiants qui ne peuvent pas fournir de caution parentale.

Pour les étudiants étrangers, l'accès aux prêts étudiants dans les banques françaises est possible mais plus difficile — les établissements sont prudents avec des emprunteurs qui ne disposent pas encore de racines financières en France (revenus stables, patrimoine, historique bancaire). Les prêts garantis par Bpifrance ou soutenus par des cautions personnelles de résidents français sont les voies les plus accessibles pour les étudiants étrangers souhaitant recourir à ce mode de financement.
`;

const ADD3_L3 = `
## Les dépenses imprévues et le fonds d'urgence

Un budget étudiant réaliste doit inclure une provision pour les dépenses imprévues qui surviennent inévitablement au cours d'une année universitaire. La visite médicale urgente non remboursée intégralement par la Sécurité sociale, le remplacement d'un ordinateur portable tombé en panne en plein milieu de la période d'examens, le billet de transport d'urgence pour rentrer dans son pays en cas d'événement familial : ces dépenses non planifiées peuvent rapidement dépasser 500 à 1 000 euros et déstabiliser un budget étudiant serré.

Constituer un fonds d'urgence de 500 à 1 000 euros, gardé sur un compte épargne séparé du compte courant, est une pratique de gestion budgétaire saine que tout étudiant est encouragé à adopter. Ce fonds n'est pas une épargne de long terme mais un coussin de sécurité qui absorbe les chocs financiers imprévus sans recours à l'endettement ou à une aide d'urgence. Le fonds d'urgence du CROUS (aide financière exceptionnelle accordée en cas de difficultés imprévues) est également une ressource à connaître et à solliciter rapidement en cas de situation financière difficile.

## L'alimentation et la santé budgétaire

L'alimentation est souvent le poste budgétaire le plus élastique dans le budget étudiant — c'est là que beaucoup d'étudiants font des économies lorsque les finances sont serrées, parfois au détriment de leur santé. Une alimentation désequilibrée et insuffisante en protéines, vitamines et minéraux affecte directement les capacités cognitives, la résistance à la fatigue et le système immunitaire — toutes des fonctions critiques pour la réussite académique.

Les épiceries solidaires des universités (restos du cœur étudiants, épiceries sociales associatives) permettent aux étudiants en difficulté financière de s'approvisionner en denrées alimentaires à prix très réduit ou gratuitement. L'accès à ces services n'est pas réservé aux situations d'extrême précarité — des étudiants dont les ressources sont stables mais modestes peuvent en bénéficier. Se renseigner auprès du service social étudiant de l'université sur les dispositifs disponibles est une démarche sans honte et potentiellement très aidante.

## Le logement hors des grandes villes : les villes universitaires de taille moyenne

Pour les étudiants dont la formation n'impose pas une localisation dans une grande métropole, les villes universitaires de taille moyenne représentent une alternative économiquement attractive. Des villes comme Limoges, Brest, Perpignan, Gap, Metz, Besançon ou Pau offrent des formations universitaires de qualité dans de nombreuses disciplines (particulièrement en droit, lettres, sciences et formations professionnelles) pour un coût de vie significativement inférieur aux grandes métropoles.

Cette option est moins pratiquée par les étudiants étrangers, qui ont tendance à se concentrer dans les grandes villes pour leur offre culturelle et communautaire plus développée. Pourtant, pour les étudiants dont l'objectif est d'optimiser la réussite académique avec des ressources financières limitées, une ville de taille moyenne peut offrir un cadre de vie moins stressant et plus propice à la concentration académique, avec un accès plus facile aux enseignants (effectifs plus réduits) et à un réseau local plus soudé.

## La planification du retour ou de la carrière en France

Le budget des études intègre également, pour certains étudiants, la planification du projet post-études : retour dans le pays d'origine avec un diplôme français, insertion professionnelle en France, poursuite d'études. Ces différents scénarios ont des implications budgétaires distinctes. L'insertion professionnelle en France après les études implique des dépenses initiales liées à la recherche d'emploi (tenues professionnelles, transports pour les entretiens, éventuels logements transitoires) que le budget des études doit anticiper.

Le retour dans le pays d'origine avec un diplôme français implique des frais de transport et de réinstallation. Pour les étudiants qui envisagent de rester en France, les frais de renouvellement du titre de séjour en mention « salarié qualifié » ou « talent » après les études doivent également être anticipés. Ces projections financières post-études, même approximatives, permettent de s'assurer que le projet global d'études en France est financièrement viable de bout en bout.
`;

const ADD3_L4 = `
## Le dossier ENIC-NARIC en pratique : témoignages et conseils concrets

Les témoignages de personnes ayant traversé la procédure ENIC-NARIC donnent des indications précieuses sur les réalités pratiques de cette démarche. Un point récurrent dans ces témoignages est l'importance de la qualité de la traduction assermentée. Plusieurs candidats rapportent que des traductions de mauvaise qualité — comprenant des approximations ou des termes mal traduits pour les intitulés de cours ou de diplômes — ont conduit à des délais supplémentaires de plusieurs semaines voire des mois, le service ENIC-NARIC ayant demandé des rectifications ou des compléments.

Un autre point récurrent est la nécessité d'un dossier organisé et légendé de façon claire. Un dossier dans lequel les documents sont identifiés, numérotés et accompagnés d'une table des matières est traité plus rapidement qu'un dossier dans lequel les documents sont envoyés en vrac sans organisation. Ce soin formel, anodin en apparence, révèle une compréhension de la démarche administrative française et facilite le travail du traitant.

## Les reconnaissances par des établissements à l'international

La question de la reconnaissance des diplômes ne concerne pas uniquement l'entrée dans le système universitaire français. Pour les étudiants qui envisagent, après leur diplôme français, de poursuivre leurs études ou de travailler dans d'autres pays, la portabilité internationale de leurs diplômes français est un facteur important à considérer.

Les diplômes français sont particulièrement bien reconnus dans les pays francophones du Maghreb et d'Afrique subsaharienne, où le système universitaire est historiquement aligné sur le modèle français et où les diplômés français sont activement recherchés. Dans les pays lusophones (Portugal, Brésil), les accords bilatéraux facilitent la reconnaissance. Dans les pays anglosaxons, les diplômes des grandes écoles françaises (HEC, Polytechnique, Sciences Po Paris) sont reconnus dans les milieux professionnels internationaux, tandis que les diplômes des universités moins connues peuvent nécessiter une explication contextuelle.

## La valeur différenciée des diplômes selon les employeurs

Dans le marché du travail français, la valeur perçue d'un diplôme étranger dépend significativement du type d'employeur. Les grandes entreprises internationales et les cabinets de conseil sont généralement familiers avec les diplômes étrangers des pays d'où ils recrutent habituellement et évaluent les candidats plus sur leurs compétences démontrées que sur le prestige formel de leur établissement. Les administrations publiques françaises, en revanche, appliquent des grilles salariales et des classifications de postes basées sur des niveaux de diplômes précis (bac+3, bac+5) qui requièrent une attestation ENIC-NARIC pour les diplômes étrangers.

Les PME françaises, qui représentent la majorité des employeurs, ont des pratiques variables : certaines sont ouvertes aux profils internationaux et évaluent les compétences de façon pragmatique, d'autres sont moins familières avec les diplômes étrangers et peuvent sur-pondérer l'écart de notoriété entre un diplôme d'une université africaine et un équivalent français. Comprendre ces différences de pratiques selon le type d'employeur aide à cibler ses candidatures et à préparer une argumentation adaptée à chaque contexte.

## Synthèse et recommandations finales sur la reconnaissance de diplômes

En synthèse, la reconnaissance des diplômes étrangers en France est un processus qui peut être maîtrisé si on l'aborde avec méthode, anticipation et réalisme. La méthode implique de s'informer précisément sur les procédures applicables à sa situation spécifique avant de commencer les démarches, plutôt que de procéder par tâtonnement. L'anticipation implique d'initier les démarches bien plus tôt qu'on ne le pense nécessaire, compte tenu des délais réels des procédures administratives. Le réalisme implique d'accepter que certains diplômes ne seront pas reconnus au niveau espéré et de considérer les alternatives (formations complémentaires, VAE, reconversion dans une discipline connexe) avec ouverture.

Le diplôme reconnu est la clé d'accès au système universitaire et professionnel français, mais ce n'est pas le seul facteur de réussite dans ce système. Les compétences acquises, la capacité d'adaptation, la qualité des relations construites et la clarté du projet professionnel jouent un rôle tout aussi important dans la trajectoire d'un professionnel ou d'un étudiant étranger en France.
`;

await appendAndPatch('8b527cad-23d4-4e1c-8f92-3f7bcf297de0', ADD3_L1);
await appendAndPatch('c0029686-e225-452b-982f-a1cd524ed753', ADD3_L2);
await appendAndPatch('ee522c1c-cd2c-4de5-b984-fc77338212a7', ADD3_L3);
await appendAndPatch('92a088d5-fe7d-4026-b228-a6fc57ce5d2d', ADD3_L4);
