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

const L1 = `# La Naturalisation Française : Conditions, Délais et Procédure

La naturalisation française est le processus par lequel un ressortissant étranger acquiert la nationalité française. C'est l'étape ultime d'un parcours d'intégration qui transforme juridiquement le statut d'un étranger vivant en France en celui d'un citoyen français à part entière, avec tous les droits et devoirs que cela implique. Si la naturalisation est souvent présentée comme le couronnement logique d'une vie construite en France, elle n'est pas automatique : elle est accordée par décision discrétionnaire de l'administration française, sur la base d'une évaluation globale du degré d'intégration du candidat. Comprendre les conditions précises, les délais réels, les critères d'appréciation et la procédure complète est indispensable pour tout étranger qui envisage de demander la nationalité française.

## Les conditions de fond pour accéder à la naturalisation

L'accès à la naturalisation française est conditionné par un ensemble de critères cumulatifs qui doivent être remplis au moment du dépôt de la demande. La condition la plus connue est la condition de résidence : le candidat doit résider en France de façon régulière et continue depuis au moins cinq ans à la date de la demande. Cette continuité de résidence signifie que des absences prolongées à l'étranger (supérieures à six mois consécutifs ou à dix mois cumulés sur la période des cinq ans) peuvent interrompre le décompte et necessiter de recommencer à zéro.

Des dérogations à la condition de résidence de cinq ans existent pour certaines catégories de candidats. Les étrangers qui ont effectué deux ans d'études supérieures en France peuvent prétendre à la naturalisation après seulement deux ans de résidence régulière. Les personnes ayant rendu des services exceptionnels à la France (contribution militaire, sportive ou culturelle remarquable) peuvent être naturalisées après un délai raccourci voire sans condition de durée de séjour. Les réfugiés reconnus par l'OFPRA bénéficient d'une procédure simplifiée avec délai de séjour réduit à deux ans.

## La condition d'intégration républicaine

Au-delà de la condition de résidence, la naturalisation est soumise à une condition d'intégration républicaine qui est évaluée de façon multidimensionnelle. Cette évaluation porte sur plusieurs critères : la maîtrise de la langue française (niveau B1 minimum du Cadre Européen Commun de Référence), la connaissance des droits et devoirs liés à la citoyenneté française (histoire, institutions, valeurs républicaines), et l'adhésion aux principes fondamentaux de la République française (laïcité, égalité femmes-hommes, respect des libertés publiques).

La langue française est évaluée soit par un entretien avec l'agent préfectoral, soit par un diplôme ou une certification de français attestant le niveau requis (DELF B1 minimum, ou diplôme de l'enseignement français). Les diplômes obtenus dans une école française sont généralement acceptés comme preuve du niveau linguistique.

## La condition d'honorabilité et de bonne conduite

La naturalisation peut être refusée ou retardée pour des raisons d'ordre public ou de comportement. Les condamnations pénales inscrites au casier judiciaire font l'objet d'une évaluation : certaines condamnations sont automatiquement disqualifiantes (condamnations pour crimes, certains délits graves), d'autres laissent à l'administration une marge d'appréciation selon la nature des faits et le délai écoulé depuis leur commission. Le bulletin numéro 3 du casier judiciaire (le relevé accessible aux particuliers) doit être joint au dossier.

Les dettes fiscales et sociales non réglées peuvent également être un motif de refus ou de report. L'administration vérifie que le candidat est en règle avec ses obligations fiscales et, le cas échéant, ses cotisations sociales. Un plan d'apurement d'une dette fiscale en cours de règlement peut être acceptable ; une dette ignorée ne l'est généralement pas.

## La procédure de demande de naturalisation

La demande de naturalisation est déposée auprès du service de naturalisation de la préfecture du département de résidence. Depuis 2010, la procédure est centralisée au niveau des préfectures qui ont un délai légal de 18 mois pour traiter les dossiers, délai qui peut être prolongé de 3 mois sur décision motivée. Dans la pratique, les délais réels peuvent être nettement plus longs selon la charge de travail des préfectures et la complexité des dossiers.

Le dossier de naturalisation est substantiel et requiert de nombreux documents. L'état civil complet du candidat (acte de naissance, acte de mariage si applicable), les preuves de résidence continue sur la période requise (historique des titres de séjour, attestations de résidence), les preuves d'intégration professionnelle (contrats de travail, attestations employeur, bulletins de salaire), les preuves de participation à la vie sociale et citoyenne (engagement associatif, diplômes obtenus en France), et les preuves d'intégration linguistique constituent les pièces principales du dossier.
`;

const L2 = `# Les Pièges et Erreurs Fréquents liés aux Titres de Séjour

Le parcours administratif des étrangers en France est semé d'embûches qui peuvent avoir des conséquences graves sur le statut de séjour et, par ricochet, sur toutes les autres dimensions de la vie en France — emploi, logement, accès aux soins, études. Des erreurs qui sembleraient anodines dans d'autres contextes administratifs peuvent déclencher des procédures d'irrégularité dont il est difficile de sortir. Cette leçon recense les pièges les plus fréquents identifiés par les avocats spécialisés en droit des étrangers et les associations d'aide aux migrants, et vous donne les clés pour les éviter.

## Le piège du délai de renouvellement non respecté

L'erreur la plus fréquente et la plus lourde de conséquences est le dépassement du délai de demande de renouvellement du titre de séjour. La règle générale est que la demande de renouvellement doit être déposée au moins deux mois avant la date d'expiration du titre en cours de validité. Dans certaines préfectures à forte charge de travail, il est recommandé d'anticiper encore davantage — jusqu'à trois mois avant l'expiration — pour obtenir un rendez-vous dans des délais raisonnables.

Le récépissé de demande de renouvellement, remis lors du dépôt du dossier, a valeur de titre de séjour provisoire pendant le temps du traitement de la demande. Mais si la demande n'a pas été déposée avant l'expiration du titre, il n'y a pas de récépissé possible, et l'étranger se retrouve en situation irrégulière dès le lendemain de l'expiration de son titre. Cette situation est difficile à régulariser car elle constitue une infraction à la législation sur le séjour.

## Le changement de situation non signalé à la préfecture

Tout changement de situation personnelle ou professionnelle qui modifie les conditions d'obtention du titre de séjour doit être signalé à la préfecture dans les délais légaux. Un étudiant qui abandonne ses études après obtention d'un titre de séjour étudiant doit en informer la préfecture — continuer à bénéficier d'un titre de séjour étudiant sans poursuivre d'études constitue une fraude administrative. Un salarié qui change d'employeur ou de poste au-delà de ce qu'autorise son titre doit obtenir une autorisation de travail correspondante.

Les changements non signalés qui sont découverts lors d'un renouvellement ou d'un contrôle peuvent conduire à un refus de renouvellement ou à un retrait du titre de séjour. La transparence proactive avec l'administration préfectorale est donc non seulement une obligation légale mais aussi une stratégie préventive pour éviter des complications futures.

## Les erreurs dans la constitution du dossier

Une proportion significative des retards et des refus dans le traitement des demandes de titre de séjour est due non à des problèmes de fond mais à des erreurs ou des lacunes dans la constitution des dossiers. Documents manquants, copies non certifiées conformes alors que les originaux sont demandés, traductions non assermentées, formulaires incomplets ou mal remplis : ces imperfections formelles paralysent le traitement de la demande et obligent à recommencer le processus, souvent avec un délai supplémentaire de plusieurs semaines.

La solution est simple mais requiert de la rigueur : consulter la liste des pièces requises sur le site officiels (service-public.fr) ou auprès du service des étrangers de la préfecture, préparer chaque pièce dans le format exact demandé, vérifier deux fois le dossier avant le dépôt. Une check-list personnelle, établie à partir de la liste officielle et vérifiée pièce par pièce, est un outil pratique pour éviter les oublis.

## La méconnaissance des droits au travail selon le type de titre

Chaque type de titre de séjour comporte des conditions spécifiques d'accès au marché du travail, et la méconnaissance de ces conditions peut exposer l'étranger à des poursuites pour travail sans autorisation. Un titre de séjour « étudiant » autorise le travail à hauteur de 60% du temps de travail annuel. Un titre de séjour « visiteur » n'autorise aucun travail. Un titre de séjour « salarié » autorise généralement l'exercice de la profession mentionnée sur le titre, mais pas nécessairement toute autre activité professionnelle.

Les employeurs également peuvent être sanctionnés pour l'emploi d'un étranger sans autorisation de travail valide — ce qui signifie que certains employeurs peuvent refuser d'embaucher des étrangers dont les conditions d'autorisation de travail ne sont pas parfaitement claires. La connaissance précise des droits au travail conférés par son titre de séjour, en les vérifiant directement sur le titre ou en consultant le service préfectoral, est une responsabilité qui incombe à l'étranger.
`;

const L3 = `# La Carte de Résident 10 Ans : Conditions et Avantages

La carte de résident est le titre de séjour le plus stable accessible aux étrangers non communautaires en France. D'une durée de dix ans et renouvelable automatiquement, elle confère une sécurité juridique de séjour incomparablement supérieure aux titres de séjour temporaires (un an) ou pluriannuels (deux à quatre ans) dont tirent la plupart des étrangers. Cette stabilité transforme profondément la relation de l'étranger à la France — il n'a plus à construire sa vie à court terme en anticipant la possibilité d'un refus de renouvellement, mais peut s'engager dans des projets durables (achat immobilier, création d'entreprise, investissements personnels) avec la sécurité que son droit au séjour est consolidé.

## Les conditions d'obtention de la carte de résident

La condition principale pour obtenir la carte de résident est d'avoir résidé en France de façon régulière et ininterrompue pendant au moins cinq ans. Cette condition de résidence quinquennale doit s'appuyer sur des preuves documentaires : historique des titres de séjour délivrés pendant cette période, preuves de résidence effective en France (baux locatifs, factures à l'adresse française, relevés bancaires), et absence d'interruption de résidence significative.

La condition d'intégration républicaine s'applique également à la demande de carte de résident. Elle est appréciée selon les mêmes critères que pour la naturalisation : maîtrise suffisante du français, connaissance des institutions et des valeurs républicaines, engagement dans la vie sociale et économique française. Des certifications de langue (DELF A2 minimum, parfois B1 selon la préfecture) peuvent être requises ou acceptées comme preuve du niveau linguistique.

La condition de ressources suffisantes est liée à la capacité de subvenir à ses besoins sans recours à l'aide sociale. L'administration vérifie que les revenus du demandeur sont stables et suffisants — généralement équivalents au SMIC pour une demande de carte de résident à titre professionnel.

## Les catégories spécifiques bénéficiaires de la carte de résident de plein droit

Certaines catégories d'étrangers bénéficient de la carte de résident de plein droit, c'est-à-dire que l'administration est tenue de la délivrer dès lors que les conditions légales sont remplies, sans pouvoir exercer une appréciation discrétionnaire. Ces catégories incluent notamment les étrangers qui ont des liens familiaux particulièrement forts avec la France : le conjoint d'un citoyen français résidant en France depuis au moins trois ans, les parents d'un enfant français reconnu et à charge, et les étrangers qui ont résidé en France pendant plus de dix ans avec un titre de séjour régulier.

Les bénéficiaires de la protection subsidiaire et les apatrides reconnus bénéficient également de la carte de résident de plein droit. Cette protection juridique renforcée reconnaît la vulnérabilité particulière de ces personnes et leur garantit une stabilité de séjour qui facilite leur intégration durable en France.

## Les avantages concrets de la carte de résident

La carte de résident offre des avantages pratiques très significatifs par rapport aux titres temporaires. La durée de validité de dix ans élimine le stress et les coûts administratifs des renouvellements annuels ou bisannuels. La carte de résident autorise l'exercice de toute activité professionnelle salariée ou non salariée — son titulaire n'est pas limité à un employeur ou un secteur spécifique, contrairement à certains titres temporaires.

La mobilité internationale est également facilitée par la carte de résident. Le titulaire peut s'absenter de France jusqu'à trois ans consécutifs sans perdre le bénéfice de son titre, alors que les absences prolongées peuvent compromettre le renouvellement des titres temporaires. Cette flexibilité est précieuse pour les professionnels qui alternent entre France et étranger ou pour ceux qui souhaitent retourner dans leur pays d'origine pour une période étendue sans renoncer à leur droit de retour en France.

## Le renouvellement de la carte de résident

Le renouvellement de la carte de résident, qui intervient au terme des dix ans de validité, est en principe automatique si les conditions de séjour régulier sont maintenues. L'administration doit renouveler la carte si les conditions légales sont remplies — elle ne peut pas refuser le renouvellement par une appréciation discrétionnaire de l'intégration, sauf en cas de menace grave pour l'ordre public.

La demande de renouvellement doit être déposée avant l'expiration de la carte, idéalement deux mois avant. Les pièces requises pour le renouvellement sont similaires à celles de la demande initiale — preuves de résidence, preuves d'activité professionnelle ou de ressources, documents d'identité actualisés. En l'absence d'éléments négatifs graves (condamnations pénales, fraude documentaire passée, menace pour l'ordre public), le renouvellement est accordé quasi automatiquement.
`;

const L4 = `# Erreurs Fatales avec les Titres de Séjour : Comment les Éviter

Les erreurs liées aux titres de séjour peuvent avoir des conséquences dramatiques sur la vie des étrangers en France. Contrairement aux erreurs dans d'autres domaines administratifs qui peuvent généralement être corrigées avec un délai et quelques efforts, les erreurs dans la gestion de son titre de séjour peuvent mener à une irrégularité de séjour, à une obligation de quitter le territoire français (OQTF), voire à une interdiction de retour en France. Cette leçon répertorie les erreurs les plus graves — celles que les avocats spécialisés qualifient de «fatales» pour le statut de séjour — et explique les mécanismes qui les rendent si dangereuses.

## L'absence de demande de renouvellement avant expiration

La première erreur fatale est la passivité face à l'expiration du titre de séjour. Contrairement à ce que pensent certains étrangers mal informés, le titre de séjour n'est pas renouvelé automatiquement et la préfecture n'envoie pas de rappel avant l'expiration. L'étranger titulaire d'un titre de séjour est seul responsable du suivi de sa date d'expiration et du dépôt de sa demande de renouvellement dans les délais.

La jurisprudence administrative française est constante sur ce point : l'étranger qui n'a pas demandé le renouvellement de son titre avant son expiration s'est placé lui-même en situation irrégulière, et l'administration n'est pas tenue d'accorder une régularisation rétroactive pour compenser cette négligence. Des exceptions humanitaires existent (hospitalisation, force majeure avérée) mais elles sont étroitement encadrées et difficiles à obtenir.

## La fraude documentaire et ses conséquences permanentes

La falsification des documents fournis à l'appui d'une demande de titre de séjour est une erreur fatale d'une autre nature — c'est une erreur qui peut non seulement entraîner le refus de la demande en cours, mais aussi compromettre def nitivement toutes les futures demandes, y compris de nationalité. L'administration partage ses informations avec d'autres administrations, et une fraude documentaire identifiée est inscrite dans les fichiers qui seront consultés lors de toutes les procédures futures.

La fraude documentaire comprend non seulement la falsification complète de documents (faux passeport, faux acte d'état civil) mais aussi l'utilisation de documents authentiques mais ne correspondant pas à la réalité (activité professionnelle fictive, faux contrat de travail, dissimulation d'une condamnation pénale). Certaines fraudes sont commises par naïveté — le candidat suit les conseils d'un «intermédiaire» peu scrupuleux sans mesurer les conséquences — ce qui ne l'exonère pas de la responsabilité juridique.

## Le cumul de statuts incompatibles

Une erreur moins connue mais fréquente est le cumul de statuts administratifs incompatibles. Un étudiant en France avec un titre de séjour étudiant qui exerce une activité professionnelle dépassant le quota autorisé (964 heures par an) tout en sollicitant une aide sociale normalement réservée aux personnes sans activité professionnelle crée une incohérence administrative qui peut être relevée lors d'un contrôle ou d'une demande ultérieure. De même, une personne qui bénéficie d'un titre de séjour «visiteur» (qui interdit tout travail) et qui travaille simultanément cumule deux situations incompatibles dont la découverte peut entraîner le retrait immédiat du titre.

La règle générale pour éviter ce piège est de s'assurer que sa situation réelle correspond exactement au statut administratif détenu, et de signaler proactivement à la préfecture tout changement qui modifie cette correspondance.

## Le départ sans anticipation de retour

Une erreur classique concerne les voyages à l'étranger effectués sans anticiper les conditions de retour en France. Pour certains titres de séjour, une absence de France de longue durée peut avoir des conséquences sur le statut. La carte de résident, par exemple, peut être remise en cause si l'absence dépasse trois ans consécutifs. Les titres de séjour temporaires peuvent ne plus être valides au retour si leur durée de validité a expiré pendant l'absence.

Avant tout voyage à l'étranger de longue durée, il est conseillé de vérifier si le titre de séjour sera toujours valide au moment du retour prévu, si la durée de l'absence risque de compromettre les conditions de résidence pour les procédures futures (naturalisation, carte de résident), et si des formalités spécifiques sont requises avant le départ (autorisation de sortie du territoire pour les mineurs, visa de retour exigé par certains pays tiers pour les ressortissants étrangers aux titres de séjour français).
`;

const L5 = `# Le Titre de Séjour Étudiant : Détails Complets

Le titre de séjour étudiant est le sésame administratif de l'expérience universitaire en France pour les étudiants extra-européens. Il conditionne non seulement le droit au séjour mais aussi l'accès au marché du travail partiel, aux aides sociales, aux soins de santé, au logement et à tous les aspects pratiques de la vie quotidienne. Une maîtrise précise des conditions d'obtention, des droits conférés, des obligations qui en découlent et des procédures de renouvellement est indispensable pour tout étudiant étranger qui entend construire son parcours académique en France sur des bases solides.

## Les conditions d'obtention du titre de séjour étudiant

L'obtention d'un titre de séjour étudiant est conditionnée à l'existence d'une admission dans un établissement d'enseignement supérieur reconnu par l'État français, à la justification de ressources suffisantes pour vivre en France pendant toute la durée de l'inscription, à la possession d'une assurance maladie couvrant les soins sur le territoire français, et à la présentation d'un logement (ou d'une solution d'hébergement provisoire). Ces conditions doivent être remplies simultanément au moment de la demande.

La preuve d'admission dans un établissement s'effectue via la lettre d'admission officielle délivrée par l'université ou l'école, ou via la confirmation sur la plateforme Campus France si la candidature a été gérée par cette procédure. L'établissement doit être reconnu ou autorisé par le Rectorat ou le ministère de l'Enseignement supérieur — une inscription dans un établissement privé non reconnu ne permettrait pas d'obtenir un titre de séjour étudiant.

## L'autorisation de travail incluse dans le titre étudiant

L'une des particularités importantes du titre de séjour étudiant est qu'il inclut automatiquement une autorisation de travail à temps partiel, sans nécessiter de démarche supplémentaire. Cette autorisation permet au titulaire de travailler jusqu'à 964 heures par an (soit environ 60% du temps de travail annuel français de 1607 heures). Cette limite vise à garantir que l'activité professionnelle ne prend pas le pas sur les études, qui restent l'objet principal du séjour.

Le dépassement de cette limite d'heures constitue une infraction à la législation sur le travail des étrangers, passible de sanctions pour l'étudiant (risque sur le renouvellement du titre de séjour) et pour l'employeur (amende pour emploi d'étranger en situation irrégulière de travail). Il est donc important de suivre rigoureusement le nombre d'heures travaillées tout au long de l'année et d'informer son employeur de cette limite pour que des dispositions contractuelles adaptées soient prises.

## Le renouvellement annuel du titre de séjour étudiant

Le titre de séjour étudiant est délivré pour une durée correspondant à celle des études, généralement un an renouvelable. Son renouvellement chaque année requiert de prouver la régularité de la progression académique — que l'étudiant est bien inscrit dans sa formation pour la nouvelle année, qu'il a validé les éléments correspondant à l'année d'études écoulée, et qu'il respecte la durée maximale autorisée pour le niveau d'études.

La justification de la progression académique est souvent l'élément le plus délicat du renouvellement. Les échecs répétés, le dépassement de la durée normale des études (plus de deux fois la durée normale de la formation) ou le changement de formation sans cohérence avec le projet d'études initial peuvent être interprétés par la préfecture comme un défaut de sérieux dans les études et constituer un motif de refus de renouvellement. Cette réalité impose à l'étudiant étranger une pression supplémentaire par rapport à ses camarades européens ou français — sa régularité de séjour dépend en partie de sa réussite académique.
`;

const L6 = `# Le Passeport Talent : Les 10 Catégories et Conditions

Le Passeport Talent est l'une des innovations majeures introduites par la loi du 7 mars 2016 relative au droit des étrangers en France. Créé pour attirer en France les talents du monde entier — chercheurs, artistes, entrepreneurs, professionnels hautement qualifiés — il se distingue radicalement des titres de séjour classiques par sa flexibilité, sa durée et l'ouverture qu'il confère sur le marché du travail. Le Passeport Talent est délivré pour une durée de quatre ans renouvelable (contre un ou deux ans pour les titres ordinaires) et constitue une carte pluriannuelle qui évite les renouvellements annuels.

## La structure en dix catégories du Passeport Talent

Le Passeport Talent se décline en dix catégories distinctes, chacune ciblant un profil spécifique de personnes hautement qualifiées. Cette segmentation reflète la volonté du législateur de créer un instrument suffisamment flexible pour s'adapter à la diversité des profils que la France cherche à attirer.

La première catégorie concerne les travailleurs hautement qualifiés détenteurs d'une Carte Bleue Européenne — titre conçu pour les diplômés de niveau master ou équivalent percevant un salaire brut annuel minimum de 1,5 fois le salaire moyen français. La deuxième catégorie vise les porteurs d'un projet de création ou de reprise d'entreprise innovante, reconnu par un organisme public labellisé (incubateur accrédité, collectivité territoriale).

Les troisième et quatrième catégories concernent les investisseurs économiques qui s'engagent à réaliser des investissements directs en France d'au moins 300 000 euros dans un établissement de production de biens ou de services, créant ou sauvegardant des emplois. La cinquième catégorie vise les artistes interprètes et les artistes auteurs sous contrat avec une entreprise ou un organisme établi en France.

La sixième catégorie est destinée aux chercheurs étrangers qui viennent effectuer une mission de recherche ou dispenser des enseignements supérieurs en France, dans le cadre d'une convention d'accueil signée avec un organisme de recherche ou d'enseignement supérieur reconnu. La septième catégorie concerne les mandataires sociaux de sociétés qui rémunèrent ou prévoient de rémunérer à un niveau supérieur à un certain seuil.

Les catégories huit, neuf et dix concernent respectivement les membres de famille de titulaires de Passeport Talent (permettant au conjoint et aux enfants de bénéficier d'un titre similaire), les bénéficiaires du statut de réfugié reconnu qui remplissent les conditions professionnelles d'une des autres catégories, et les talents sportifs professionnels sous contrat avec un club professionnel français reconnu.

## Les avantages distinctifs du Passeport Talent

Le Passeport Talent offre plusieurs avantages qui le distinguent nettement des autres titres de séjour. Premièrement, sa durée de quatre ans, avec à la clé un accès facilité à la carte de résident au terme de cette période pour les titulaires qui ont stabilisé leur activité en France. Deuxièmement, il n'est pas lié à un employeur unique : une personne sous Passeport Talent peut changer d'emploi, diversifier ses activités professionnelles ou créer sa propre structure sans avoir à demander une nouvelle autorisation à la préfecture pour chaque changement.

Troisièmement, le Passeport Talent est délivré sans soumettre la demande à la situation de l'emploi — le principe selon lequel l'offre d'emploi doit être de bonne foi et les échelons de salaire respectés pour les embauches classiques ne s'applique pas aux profils Passeport Talent. Cette flexibilité vise à attirer des talents dont la valeur sur le marché du travail est reconnue et ne nécessite pas les mêmes protections que les travailleurs moins qualifiés.

## Les conditions spécifiques de la catégorie chercheurs

La catégorie chercheurs du Passeport Talent mérite une attention particulière car elle concerne un profil très demandé dans les universités et les laboratoires français. Les conditions d'obtention incluent la possession d'un diplôme de niveau master ou supérieur, la signature d'une convention d'accueil avec un organisme de recherche ou d'enseignement supérieur agréé par le ministère de l'Enseignement supérieur, et la rémunération correspondant au moins à 100% du SMIC mensuel.

Le délai de traitement des demandes Passeport Talent pour les chercheurs est généralement plus court que pour les autres catégories, le ministère de l'Enseignement supérieur et de la Recherche ayant développé des procédures accélérées pour faciliter les mobilités de recherche internationale. Les universités qui accueillent régulièrement des chercheurs étrangers disposent souvent d'un service spécialisé dans l'accompagnement de ces démarches, qui peut conseiller et assister le chercheur dans la préparation de son dossier.
`;

await patch('a7731dff-3fba-4ef7-84d2-5febfe107c07', L1);
await patch('35a1efd2-6d33-42b9-b253-749418a6ae2b', L2);
await patch('245f4bd4-cc40-42db-8775-6e525fbebc14', L3);
await patch('cca2d227-e2f1-4c0b-afef-60b9c0359424', L4);
await patch('16d9efa8-d878-47a0-82cf-89173163dbcb', L5);
await patch('92fee6cd-d266-4081-b459-535cf1f26e9a', L6);
