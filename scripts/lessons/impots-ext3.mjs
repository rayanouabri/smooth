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

// L1: 1576 → ~+800 words
const EXT3_L1 = `
## La question de la domiciliation fiscale pour les étudiants en mobilité

Les étudiants qui changent fréquemment d'adresse (logement étudiant, résidence principale des parents, logement de stage dans une autre ville) peuvent avoir une situation de domiciliation fiscale complexe. La domiciliation fiscale est distincte de la résidence habituelle au sens courant — c'est le lieu où le contribuable est inscrit auprès de l'administration fiscale et où il reçoit ses correspondances officielles.

Pour les étudiants qui alternent entre la résidence parentale et un logement étudiant, il est possible de choisir la résidence parentale comme adresse fiscale si c'est bien là que les courriers administratifs officiels seront reçus de façon fiable. Cette cohérence entre l'adresse fiscale déclarée et l'adresse de réception effective des courriers est importante pour ne pas manquer des notifications de l'administration.

Lors d'un déménagement définitif (fin des études, changement de ville), mettre à jour son adresse dans l'espace particulier sur impots.gouv.fr doit figurer sur la liste des démarches administratives à effectuer. Cette mise à jour déclenche le transfert du dossier fiscal vers le centre des finances publiques du nouveau lieu de résidence.

## Les sanctions pour non-déclaration et les procédures de mise en demeure

L'administration fiscale peut engager des procédures de mise en demeure envers les contribuables qui n'ont pas déposé leur déclaration dans les délais. Une mise en demeure est une lettre officielle invitant le contribuable à régulariser sa situation dans un délai de 30 jours. Si le contribuable ne satisfait pas à la mise en demeure, l'administration peut procéder à une taxation d'office — elle reconstitue le revenu imposable sur la base des informations dont elle dispose et applique des majorations de 40% sur l'impôt calculé.

Pour un étudiant étranger qui serait en situation de mise en demeure parce qu'il ne connaissait pas ses obligations de déclaration en France, la régularisation volontaire et rapide dès que la mise en demeure est reçue permet d'éviter la taxation d'office et de limiter les pénalités. Ne jamais ignorer une correspondance de l'administration fiscale est la règle fondamentale.

## Les droits du contribuable face à l'administration fiscale

Le rapport entre le contribuable et l'administration fiscale est encadré juridiquement. Le contribuable de bonne foi bénéficie de protections importantes. Il a le droit d'être informé des règles applicables à sa situation, de poser des questions et d'obtenir des réponses claires, de corriger ses erreurs sans pénalité lors de la première déclaration rectificative volontaire, et d'être traité avec respect et équité.

La Charte du contribuable vérifié, disponible sur impots.gouv.fr, détaille les droits du contribuable en cas de contrôle fiscal. Ces droits incluent le droit à l'assistance d'un conseil lors des entretiens avec le vérificateur, le droit à la saisine du supérieur hiérarchique du vérificateur en cas de désaccord, et le droit de saisir le médiateur national ou local des finances publiques en cas de conflit persistant.

## L'impact d'une déclaration correcte sur l'accès aux aides sociales

Une déclaration de revenus à jour et correcte est la condition préalable à l'accès à de nombreuses aides sociales en France. La CAF calcule les droits aux APL et aux aides familiales sur la base des revenus déclarés aux impôts. Le CROUS calcule les bourses sur critères sociaux en partie sur la base du revenu fiscal de référence. Pôle Emploi prend en compte les revenus déclarés pour calculer les droits à l'allocation chômage.

Une déclaration inaccurate — soit par omission de revenus qui sous-estime les ressources, soit par erreur d'adresse ou de situation familiale — peut entraîner soit une surestimation des droits aux aides (qui devra être remboursée ultérieurement), soit une sous-estimation (qui prive le bénéficiaire d'aides auxquelles il avait droit). La cohérence entre la situation réelle et les déclarations officielles est dans l'intérêt direct du contribuable.
`;

// L2: 1703 → ~+800 words
const EXT3_L2 = `
## Les formulaires annexes de la déclaration de revenus

La déclaration de revenus standard (formulaire 2042) est complétée par de nombreux formulaires annexes pour des situations particulières. Pour les étudiants, les plus fréquemment utilisés sont le formulaire 2042C (pour les cases spécifiques comme les revenus d'apprentissage exonérés, les salaires des jobs étudiants exonérés, et certains revenus spéciaux), le formulaire 2047 (pour les revenus encaissés à l'étranger), et le formulaire 3916 (pour la déclaration des comptes bancaires étrangers).

Ces formulaires sont accessibles dans l'espace particulier sur impots.gouv.fr lors de la déclaration en ligne. L'interface de déclaration guide vers les formulaires appropriés selon les réponses aux questions initiales sur la situation du déclarant. Si une situation particulière n'est pas proposée automatiquement, le contribuable peut accéder manuellement aux formulaires via la navigation avancée.

## La notion de revenu fiscal de référence (RFR)

Le revenu fiscal de référence (RFR) est un indicateur clé qui figure sur l'avis d'imposition et qui est utilisé pour calculer de nombreux droits et aides. Il représente approximativement le revenu imposable après certains abattements mais avant application du barème d'imposition. Le RFR est utilisé pour calculer l'éligibilité à de nombreuses aides : APL (CAF), bourses CROUS, tarifs réduits dans les services publics (transports, cantines), et certains avantages fiscaux comme le LEP.

Pour les étudiants, comprendre ce que représente leur RFR aide à anticiper leurs droits aux aides sociales. Un RFR élevé (même si l'impôt calculé est nul grâce aux exonérations) peut réduire ou exclure l'accès à certaines aides. Cette situation peut se produire pour les alternants très bien rémunérés ou les étudiants avec des revenus de placements significatifs malgré des exonérations.

## Les erreurs communes dans la déclaration de l'impôt sur le revenu des étudiants en pratique

Parmi les erreurs les plus fréquemment observées chez les étudiants primo-déclarants, on trouve : déclarer le salaire net à payer (après prélèvement à la source) au lieu du salaire brut (la correction de -10% forfaitaire se calcule sur le salaire brut), ne pas inclure les revenus d'un CDD ponctuel effectué en parallèle d'un stage ou d'une alternance, ou oublier de déclarer des revenus de plateformes numériques (Deliveroo, Uber Eats, Vinted, Airbnb) qui constituent des revenus imposables au-delà de certains seuils.

Pour les plateformes numériques, les revenus tirés de la vente de biens personnels d'occasion via Vinted ou LeBonCoin sont généralement exonérés de TVA et non imposables s'il s'agit de la vente de biens personnels (non achetés pour revendre). En revanche, l'activité régulière de revente ou l'activité de livraison pour Deliveroo ou Uber Eats constitue un revenu professionnel à déclarer — souvent comme auto-entrepreneur.

## La transition vers l'autonomie fiscale : la première déclaration indépendante

Pour les étudiants qui étaient rattachés au foyer fiscal de leurs parents et qui effectuent pour la première fois une déclaration en leur propre nom, certaines démarches spécifiques sont nécessaires. La première étape est de s'assurer que les parents ont bien cessé de rattacher l'enfant à leur foyer fiscal pour l'année en cours — une double déclaration (parents + enfant) pour les mêmes revenus serait une erreur à corriger.

Ensuite, le primo-déclarant doit créer son espace particulier sur impots.gouv.fr avec son numéro fiscal personnel. Si aucun numéro fiscal n'a encore été attribué, une demande auprès du centre des finances publiques compétent est nécessaire. La transition vers l'autonomie fiscale s'accompagne généralement d'une prise de responsabilité plus large sur l'ensemble de ses démarches administratives — une étape de maturité importante dans la vie d'un jeune adulte.

## Les ressources officielles et les aides à la déclaration en ligne

L'administration fiscale française met à disposition une gamme importante de ressources pour aider les contribuables à remplir correctement leur déclaration. Sur impots.gouv.fr, la section "Aide à la déclaration" propose des tutoriels vidéo, des FAQ détaillées par situation, et un moteur de recherche des règles fiscales. Ces ressources sont particulièrement bien conçues pour les situations standard des salariés et des étudiants.

Pour des questions spécifiques, le service téléphonique d'informations fiscales (numéro vert disponible sur impots.gouv.fr) est accessible pendant les heures de bureau. Les agents de ce service ne sont pas des conseillers fiscaux personnels mais peuvent répondre à des questions factuelles sur les règles fiscales applicables. Pour une consultation plus approfondie, les rencontres en présentiel dans les centres des finances publiques sont possibles sur rendez-vous.
`;

// L3: 1585 → ~+800 words
const EXT3_L3 = `
## L'espace particulier impots.gouv.fr : fonctionnalités avancées

Au-delà de la déclaration de revenus annuelle, l'espace particulier sur impots.gouv.fr offre de nombreuses fonctionnalités utiles pour les contribuables tout au long de l'année. L'accès à l'historique des avis d'imposition des années précédentes permet de retrouver facilement un document fiscal nécessaire pour une démarche administrative. La gestion du taux de prélèvement à la source permet de moduler en temps réel le pourcentage prélevé sur les salaires si la situation personnelle change en cours d'année.

La messagerie sécurisée permet de communiquer avec l'administration fiscale pour toute question ou démarche, avec une traçabilité garantie. Les demandes de remboursement de crédit d'impôt, les rectifications de situation, et les demandes de délais de paiement peuvent être effectuées directement depuis cet espace. Cette centralisation des démarches fiscales dans un seul espace numérique est une évolution positive de l'administration française qui simplifie considérablement les démarches.

## La modulation du taux de prélèvement à la source

Le prélèvement à la source (PAS) est calculé sur la base de la dernière déclaration connue. Pour les étudiants dont la situation change (début d'un job étudiant, fin d'un apprentissage, changement de salaire), le taux de PAS appliqué peut ne pas refléter la situation actuelle. L'administration permet la modulation de ce taux via l'espace particulier.

Deux types de modulation sont possibles : la modulation à la baisse (si les revenus actuels sont inférieurs à ceux de l'année de référence) et la modulation à la hausse (si les revenus ont augmenté et que le contribuable souhaite éviter un solde d'impôt important lors de la régularisation annuelle). La modulation à la baisse est encadrée : elle n'est autorisée que si la différence entre le taux demandé et le taux calculé dépasse 10%, pour éviter une sous-provision d'impôt trop importante.

## La gestion des erreurs après la validation de la déclaration

Si une erreur est détectée après la validation de la déclaration et avant la date limite de déclaration, une déclaration rectificative peut être soumise via l'espace particulier en accédant à la déclaration et en sélectionnant "Corriger ma déclaration". Cette correction remplace intégralement la déclaration initiale. Il est important de vérifier que la correction est complète — une déclaration rectificative qui ne reprend que les éléments modifiés et omet les éléments inchangés génèrerait une déclaration incomplète.

Après la date limite de déclaration, les corrections se font via une réclamation contentieuse dans l'espace particulier. Le délai de réclamation est généralement de 2 ans après la mise en recouvrement de l'impôt (date de l'avis d'imposition). Au-delà de ce délai, les erreurs en défaveur du contribuable ne peuvent plus être corrigées. En revanche, l'administration dispose de son propre délai de reprise pour corriger les erreurs en défaveur du Trésor (3 ans dans les cas standards).

## Les outils de simulation fiscale pour une meilleure planification

Avant de faire des choix qui ont des conséquences fiscales (décision de rattachement, option pour le barème des capitaux mobiliers, déduction de frais réels), utiliser les outils de simulation fiscale disponibles sur le site des impôts est toujours sage. Ces simulateurs permettent de tester différentes hypothèses sans engagement et de quantifier l'impact de chaque option.

Pour les situations plus complexes ou pour les étudiants qui veulent planifier leur situation fiscale sur plusieurs années (par exemple, calculer quand il devient intéressant de quitter le foyer parental pour constituer un foyer séparé), des tableurs personnalisés ou des logiciels de simulation fiscale spécialisés peuvent être utiles. La planification fiscale pluriannuelle est généralement moins critique pour les étudiants que pour les contribuables à revenus élevés, mais prendre l'habitude de cette réflexion tôt dans la vie adulte est formateur.

## La clôture de l'exercice fiscal et les documents à conserver

La fin de la période de déclaration et la réception des avis d'imposition marquent la clôture de l'exercice fiscal de l'année précédente. C'est un bon moment pour organiser et archiver tous les documents fiscaux de l'année : bulletins de salaire, attestations de revenus, justificatifs de charges déductibles, et l'avis d'imposition lui-même.

Un système simple d'archivage par année fiscale, avec un dossier physique ou numérique contenant tous les documents de l'année, facilite les démarches administratives ultérieures et les contrôles éventuels. Les documents fiscaux doivent être conservés pendant au moins 3 ans (délai de prescription fiscale standard), mais il est recommandé de conserver les avis d'imposition indéfiniment car ils peuvent être utiles pour des démarches retraite ou des justificatifs de revenus sur le long terme.
`;

// L4: 1697 → ~+800 words
const EXT3_L4 = `
## Les mécanismes de soutien aux étudiants en difficulté financière

Le système fiscal français, combiné aux aides sociales, forme un filet de sécurité pour les étudiants en difficulté financière. L'interaction entre la déclaration de revenus (qui détermine le revenu fiscal de référence) et les aides sociales (APL, bourses, aides d'urgence du CROUS) crée un système où la déclaration correcte des revenus est la clé d'accès à ces soutiens.

Pour les étudiants dont les revenus ont chuté de façon significative par rapport à l'année précédente (perte d'un job, fin d'un contrat d'apprentissage, situation familiale difficile), il est possible de demander à la CAF et au CROUS une révision de droits basée sur les revenus actuels plutôt que sur les revenus déclarés deux ans auparavant (qui servent de base de calcul habituelle). Cette procédure de "revenus actualisés" est méconnue mais peut apporter un soutien rapide dans les situations de difficulté temporaire.

## L'intégration des données fiscales dans les calculs d'allocations logement

Les allocations logement (APL pour les logements conventionnés, ALS sinon) sont calculées chaque année sur la base des revenus déclarés deux ans auparavant. Ce décalage de deux ans entre les revenus déclarés et les droits calculés peut avantager ou désavantager les étudiants selon leur trajectoire de revenus.

Un étudiant qui a eu des revenus significatifs pendant ses années d'alternance et qui reprend des études à temps plein sans revenus verra ses droits APL calculés sur ses revenus élevés d'alternance pendant deux ans, ce qui réduira ses allocations pendant cette période. À l'inverse, un étudiant qui obtient un premier emploi bien rémunéré mais dont les droits sont encore calculés sur ses revenus modestes d'étudiant bénéficiera d'APL élevées pendant les deux premières années de travail.

## Les avantages fiscaux liés à la mobilité étudiante internationale

Les étudiants qui effectuent une période d'études à l'étranger dans le cadre de leur formation bénéficient parfois d'avantages fiscaux spécifiques. Les bourses de mobilité internationale accordées dans ce cadre (Erasmus, bourses bilatérales gouvernementales) sont généralement exonérées d'impôt en France. Les frais engagés pour une mobilité internationale liée à la formation peuvent parfois être déduits comme frais réels s'ils sont professionnellement justifiés.

Pour les étudiants qui effectuent une période de stage à l'étranger, la convention fiscale entre la France et le pays du stage détermine quel pays impose la gratification de stage. Dans la plupart des cas, la France reste le pays de résidence fiscale et impose les revenus mondiaux, avec un crédit d'impôt pour les retenues à la source étrangères.

## Le rôle du stage dans la construction du dossier fiscal

Les stages constituent souvent la première expérience de revenus professionnels pour les étudiants. À ce titre, ils représentent le premier contact avec le système fiscal et sa complexité. Bien gérer fiscalement ses premiers stages — déclarer correctement les gratifications, bénéficier des exonérations applicables, conserver les justificatifs — construit de bonnes habitudes qui faciliteront la gestion fiscale tout au long de la carrière professionnelle.

Les attestations d'employeur pour les stages constituent des justificatifs importants à conserver. Ces attestations accompagnent les bulletins de paiement des gratifications et confirment la nature du contrat (stage conventionné, obligatoire, lié à la formation). Cette documentation est utile en cas de question de l'administration sur la qualification fiscale de la rémunération.

## Les dispositifs d'aide à la déclaration pour les étudiants handicapés ou en situation particulière

Les étudiants en situation de handicap bénéficient d'une demi-part supplémentaire dans le calcul du quotient familial s'ils sont titulaires d'une carte d'invalidité ou d'une allocation adulte handicapé (AAH). Cette demi-part réduit l'impôt calculé et peut donc augmenter ou créer un remboursement de crédit d'impôt. Pour les étudiants handicapés, la déclaration fiscale doit donc inclure la mention de ce statut pour bénéficier de l'avantage fiscal correspondant.

Les étudiants qui reçoivent l'AAH doivent noter que cette allocation est exclue du revenu imposable mais doit être mentionnée dans le formulaire 2042 à des fins de calcul du revenu fiscal de référence, qui lui influence les droits à d'autres aides. La logique administrative peut sembler complexe, mais son but est d'assurer que les différents organismes qui calculent les aides disposent d'une image complète de la situation financière du bénéficiaire.
`;

// L5: 1697 → ~+800 words
const EXT3_L5 = `
## Les conséquences pratiques des erreurs les plus courantes

Pour bien comprendre l'importance d'éviter les erreurs de déclaration, il est utile d'illustrer par des exemples concrets ce qui peut se passer. Premier cas : un étudiant alternant qui déclare sa rémunération d'apprentissage dans la case "salaires de droit commun" plutôt que dans la case "rémunérations d'apprentissage exonérées". Résultat : son impôt calculé sera significativement supérieur au montant réellement dû. Cette erreur génère un avis d'imposition avec un montant à payer injustifié, que l'étudiant devra contester par une déclaration rectificative ou une réclamation.

Deuxième cas : un étudiant en colocation qui reçoit son salaire de petit boulot sur un compte bancaire partagé avec ses colocataires pour simplifier les dépenses communes. L'administration fiscale peut interpréter ces mouvements de compte de façon incorrecte en cas de contrôle. Il est toujours préférable de recevoir ses revenus sur son propre compte bancaire personnel pour maintenir une traçabilité claire et éviter toute confusion lors d'un contrôle.

## La déclaration des pourboires et des cadeaux professionnels

Pour les étudiants qui travaillent dans des secteurs où les pourboires sont courants (restauration, hôtellerie, livraison), la question de la déclaration des pourboires est pertinente. En France, les pourboires sont en principe imposables s'ils peuvent être évalués. Les employeurs qui collectent et redistribuent les pourboires les incluent dans les bulletins de salaire. Les pourboires directement remis au salarié par le client sont fiscalement déclarables mais rarement contrôlés pour de petits montants.

Pour les cadeaux professionnels reçus de clients ou d'employeurs (chèques cadeaux, bons d'achat), ils sont imposables s'ils dépassent un certain seuil annuel (169 euros en 2024). En dessous de ce seuil par événement (Noël, anniversaire professionnel), ils sont exonérés de cotisations sociales et d'impôt. Les chèques cadeaux dépassant ce seuil sont assimilés à des avantages en nature imposables.

## Les revenus de l'économie numérique et leur déclaration

L'essor de l'économie numérique a créé de nouvelles sources de revenus pour les étudiants : vente sur les marketplaces, livraison de repas, mise en location de biens via des plateformes, création de contenu rémunéré. Ces revenus sont imposables selon des règles qui dépendent de l'activité exercée et de sa régularité.

La vente de biens personnels d'occasion sur Vinted ou LeBonCoin est exonérée d'impôt si elle porte sur des biens personnels (pas achetés pour revendre). En revanche, les plateformes numériques ont l'obligation légale de transmettre un récapitulatif annuel des transactions de leurs utilisateurs à l'administration fiscale française à partir d'un certain seuil (20 transactions ou 2 000 euros de ventes dans l'année). Ce récapitulatif permet à l'administration de croiser les données avec les déclarations des contribuables.

## Les délais de prescription et la sécurité juridique fiscale

La prescription fiscale est le délai au-delà duquel l'administration ne peut plus remettre en question une déclaration. Pour les impôts sur le revenu, le délai de prescription ordinaire est de 3 ans à compter de l'année d'imposition (par exemple, la déclaration des revenus 2022 est prescrite fin 2025). Pour les omissions ou insuffisances qui relèvent de la fraude, le délai peut aller jusqu'à 10 ou 14 ans selon les circonstances.

La connaissance des délais de prescription est utile pour savoir combien de temps garder les justificatifs fiscaux. La règle pratique est de conserver tous les justificatifs relatifs à une déclaration jusqu'à la fin du délai de prescription correspondant, soit au minimum 4 ans (l'année de déclaration plus les 3 années de délai de prescription). Pour les documents qui peuvent servir de justificatifs sur le long terme (preuves de non-imposition pour des démarches administratives futures), il est recommandé de les conserver indéfiniment dans un archive numérique sécurisée.

## L'apprentissage continu de la fiscalité personnelle

La fiscalité personnelle est un domaine qui évolue chaque année avec les lois de finances. Les taux, les plafonds d'exonération, et les règles applicables ne sont pas figés. Rester informé des changements qui affectent sa situation est une responsabilité du contribuable. Les ressources disponibles pour se tenir informé incluent les lettres d'information du service des impôts (disponibles sur inscription), les applications de veille fiscale, et les publications spécialisées accessibles gratuitement en ligne.

Pour les étudiants qui débutent leur vie fiscale, l'effort initial d'apprentissage du système est le plus important. Une fois les bases comprises et la première déclaration effectuée avec succès, les années suivantes sont beaucoup plus simples car on sait où chercher les informations et comment naviguer dans l'interface. Investir du temps dans cet apprentissage initial est clairement rentable sur le long terme.
`;

// L6: 1716 → ~+800 words
const EXT3_L6 = `
## Les conséquences fiscales de la fin d'un contrat d'apprentissage

La fin d'un contrat d'apprentissage peut coïncider avec l'obtention du diplôme et le début d'une activité professionnelle permanente, ou avec une période d'inactivité et de recherche d'emploi. Ces différentes transitions ont des implications fiscales distinctes.

Si l'apprenti commence un emploi permanent dans la même entreprise ou dans une autre suite à son apprentissage, ses revenus de la nouvelle année seront soumis aux règles standard (sans exonération d'apprentissage) et potentiellement à un taux de PAS plus élevé si son salaire a augmenté. Il est utile de vérifier et si nécessaire de moduler son taux de PAS lors de cette transition pour éviter une retenue insuffisante.

Si l'apprenti se retrouve sans emploi après la fin de son contrat, il peut s'inscrire comme demandeur d'emploi et percevoir des allocations chômage si les conditions d'affiliation (durée du contrat d'apprentissage) sont remplies. Les allocations chômage sont imposables et doivent être déclarées dans la déclaration de revenus de l'année de perception.

## La gestion des contrats courts et des périodes d'inactivité

Les étudiants ont souvent des parcours professionnels fractionnés avec des CDD courts, des périodes de stage, des périodes d'études sans revenus, et des jobs saisonniers. Cette multiplicité d'employeurs et de statuts au cours d'une même année peut compliquer la composition des revenus annuels à déclarer.

Pour s'y retrouver, il est utile de tenir un journal des revenus perçus au cours de l'année : employer, période, montant brut, type de contrat. Ce journal facilite la réconciliation avec les informations pré-remplies par l'administration et permet de détecter rapidement les oublis ou les erreurs. Les relevés annuels de salaire (certificats de revenus) émis par chaque employeur pour les salariés permettent également de vérifier les montants.

## La déclaration des revenus de contenu numérique (influenceurs, créateurs)

Un nombre croissant d'étudiants génèrent des revenus via la création de contenu numérique — chaînes YouTube monétisées, comptes Instagram partenariaux, Twitch streamers qui reçoivent des dons ou des abonnements. Ces revenus sont imposables et doivent être déclarés, généralement sous le régime des bénéfices non commerciaux (BNC) pour les créateurs indépendants.

Pour les revenus de contenu numérique, une inscription comme auto-entrepreneur ou comme déclarant BNC est recommandée dès que les revenus deviennent réguliers. Les plateformes numériques (YouTube, Instagram, Twitch) transmettent des informations sur les paiements effectués à leurs créateurs à l'administration fiscale selon les obligations réglementaires. Ne pas déclarer ces revenus en pensant qu'ils passent inaperçus est une erreur fréquente qui peut mener à un redressement.

## Les obligations de facturation pour les micro-entrepreneurs étudiants

Un étudiant-micro-entrepreneur qui fournit des prestations de services à des professionnels ou des particuliers a l'obligation d'émettre des factures pour chaque prestation. Ces factures doivent mentionner le numéro SIRET du micro-entrepreneur, le montant HT (puisque les micro-entrepreneurs en franchise de TVA facturent HT), et la mention "TVA non applicable – article 293 B du CGI".

La conservation des factures émises et des preuves de paiement est essentielle pour la comptabilité de la micro-entreprise et pour justifier le chiffre d'affaires déclaré à l'URSSAF et aux impôts. Un simple tableur Excel ou une application dédiée (comme Freebe, Shine, ou Indy) peut suffire pour tenir une comptabilité complète et conforme pour une micro-entreprise étudiante.

## Bilan : construire sa culture fiscale dès les études

La fiscalité est un domaine qui peut sembler rébarbatif mais qui a une importance pratique considérable dans la vie quotidienne. Les connaissances fiscales acquises pendant les études — comprendre les exonérations disponibles, savoir comment remplir sa déclaration, connaître ses droits et ses obligations — constituent un socle qui s'enrichira avec les expériences professionnelles et personnelles futures.

Cette culture fiscale personnelle est un investissement rentable à long terme. Elle permet de ne pas payer plus d'impôts que nécessaire grâce à une utilisation correcte des exonérations et déductions disponibles, d'éviter les erreurs coûteuses, et de prendre des décisions financières (investissements, choix de statut professionnel, structuration des revenus) avec une conscience claire de leurs implications fiscales. Commencer à construire cette culture fiscale dès les études est la façon la plus naturelle et la moins coûteuse de développer cette compétence essentielle.
`;

await appendAndPatch('55c0efdd-5e48-46e0-bdd1-f6223e3ba8e2', EXT3_L1);
await appendAndPatch('449fb117-48e3-45da-89af-7a75c6212c80', EXT3_L2);
await appendAndPatch('0242d07b-a407-4d13-9a58-3abfb2aa6728', EXT3_L3);
await appendAndPatch('a824e932-2924-4061-9a58-af1834373a0f', EXT3_L4);
await appendAndPatch('22b05575-9363-4fd1-bdef-96e12749c592', EXT3_L5);
await appendAndPatch('3defd352-b13a-4f5d-97cc-2d4f35e289f6', EXT3_L6);
