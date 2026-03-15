const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function patch(id, content) {
  const w = content.split(/\s+/).filter(Boolean).length;
  const p = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  console.log(p.ok ? '✅' : '❌ '+p.status, id.slice(0,8), w+' mots');
}

const L1 = `# La procédure de clôture d'un compte bancaire en France

Clôturer un compte bancaire est un droit fondamental du client : en France, toute personne peut demander la fermeture de son compte à tout moment, sans avoir à justifier sa décision. La procédure est encadrée par la loi et la banque est tenue de traiter la demande dans des délais précis. Comprendre cette procédure permet d'éviter les erreurs, les frais imprévus, et les situations bloquantes qui peuvent survenir quand la clôture est mal préparée.

## Le droit de clôturer son compte à tout moment

Le droit à la clôture de compte est absolu : aucune banque ne peut s'y opposer si la demande est régulière. Seule condition préalable : le compte doit être en solde positive ou nul au moment de la clôture, et toutes les opérations en cours doivent être soldées. Un compte avec un découvert ne peut pas être clos avant que la dette envers la banque soit remboursée. La banque peut refuser la clôture d'un compte qui présente encore un solde débiteur, des prélèvements automatiques programmés non traités, ou des chèques en cours d'encaissement.

## Les voies possibles pour demander la clôture

La demande de clôture peut être effectuée par plusieurs canaux selon la banque. La lettre recommandée avec accusé de réception est la méthode la plus formelle et la plus sécurisée — elle crée une preuve incontestable de la date de la demande. Cette méthode est recommandée pour éviter tout litige sur les délais. Certaines banques acceptent également une demande par email sécurisé via l'espace bancaire en ligne, ce qui offre une traçabilité similaire. La demande en agence, en présence d'un conseiller, est toujours possible mais moins recommandée seule car elle ne laisse pas toujours de trace formelle — il convient dans ce cas de demander un accusé de réception écrit.

## Le contenu de la lettre de clôture

La lettre de demande de clôture doit être simple mais précise. Elle doit mentionner : les coordonnées complètes du titulaire (nom, prénom, adresse, date de naissance), le numéro du compte à clôturer, la demande explicite de clôture du compte, et les instructions pour le solde résiduel (virement sur un autre compte dont on fournit le RIB). La lettre doit être datée et signée. Pour les comptes joints, la signature des deux cotitulaires est généralement requise sauf si la convention de compte prévoit une possibilité de clôture unilatérale.

## Les délais légaux et contractuels

La banque dispose d'un délai de traitement défini dans les conditions générales du contrat bancaire pour traiter la demande de clôture — délai généralement compris entre 1 et 30 jours selon les établissements. La loi n'impose pas de délai maximal uniforme pour la clôture, mais la jurisprudence et les recommandations du médiateur bancaire considèrent qu'un délai supérieur à 30 jours est excessif sauf justification particulière. Si la clôture tarde sans raison apparente, relancer la banque par courrier recommandé mentionnant les dispositions légales applicables est la démarche appropriée.
`;

const L2 = `# Les conditions préalables à la clôture d'un compte bancaire

Fermer un compte bancaire ne s'improvise pas. Plusieurs conditions doivent être remplies avant que la clôture puisse être effective. Préparer ces conditions à l'avance évite des délais imprévus et des complications administratives.

## Solder le découvert et les crédits associés

Un compte en débit (solde négatif) ne peut pas être clôturé. La première étape est donc de s'assurer que le compte est créditeur ou nul. Si le compte présente un découvert autorisé utilisé, il faut le rembourser avant la clôture. Si des crédits sont directement associés au compte (crédit à la consommation, crédit immobilier), leur clôture ne suit pas automatiquement celle du compte courant — ces contrats sont distincts et doivent faire l'objet de démarches séparées.

## Transférer ou annuler les prélèvements automatiques

Les prélèvements automatiques (abonnements, loyer, mutuelle, assurances, remboursements de crédit) doivent être transférés vers un nouveau compte ou annulés avant la clôture du compte. Si le prélèvement continue à être présenté sur un compte clôturé, il sera rejeté — ce qui peut entraîner des pénalités auprès des créanciers et des frais de rejet chez la nouvelle banque. Établir la liste complète de tous les prélèvements actifs est une étape préliminaire indispensable.

## Transférer les virements récurrents entrants

Les virements entrants récurrents (salaire, bourse, aides sociales, virements familiaux) doivent être redirigés vers le nouveau compte avant la clôture. Notifier l'employeur, la CAF, la CPAM, et toute entité qui effectue des virements réguliers est une démarche à anticiper avec suffisamment de délai. Le service de mobilité bancaire Agir peut prendre en charge une partie de ces notifications automatiquement si un changement de banque est à l'origine de la clôture.

## Rapatrier les produits d'épargne liés au compte

Si des livrets d'épargne, des plans d'épargne ou des assurances-vie sont rattachés au compte à clôturer, leur sort doit être décidé avant ou simultanément à la clôture du compte courant. Certains produits peuvent être transférés vers un autre établissement (transfer de PEA, mobilité de l'assurance-vie dans certains cas), d'autres doivent être clôturés séparément avec les implications fiscales correspondantes.
`;

const L3 = `# Les étapes pratiques après la clôture du compte

La clôture du compte n'est pas la fin de la démarche — plusieurs actions post-clôture sont nécessaires pour éviter des complications dans les semaines et mois qui suivent. Une checklist organisée facilite cette transition.

## La récupération du solde résiduel

Lors de la clôture, le solde résiduel du compte est remis au titulaire, soit par virement vers le compte indiqué dans la demande de clôture, soit par chèque de banque à retirer en agence. Le virement est la méthode la plus pratique et la plus rapide. Il est important de ne pas retirer soi-même tout le solde avant la clôture — laisser un petit montant pour payer les éventuels frais de clôture facturés par certaines banques évite une situation de solde négatif qui bloquerait la clôture.

## La restitution des moyens de paiement

La carte bancaire et le carnet de chèques associés au compte clôturé doivent être restitués à la banque ou détruits selon les instructions de celle-ci. La banque informe généralement le client de la procédure dans le courrier de confirmation de clôture. Ne pas restituer les moyens de paiement ne bloque pas techniquement la clôture, mais peut entraîner des complications si ces moyens sont utilisés après la clôture — le titulaire reste responsable des utilisations frauduleuses éventuelles jusqu'à la restitution formelle.

## La conservation des relevés et documents bancaires

Avant la clôture, il est impératif de télécharger et d'archiver tous les relevés de compte disponibles pour les années passées. Une fois le compte clôturé, l'accès à l'historique des transactions peut être limité ou interdit. Ces relevés ont une valeur justificative pour les déclarations fiscales, les procédures administratives, et les litiges éventuels. La conservation minimale recommandée est de 5 ans, mais 10 ans est préférable pour les transactions importantes.

## La mise à jour des documents administratifs

L'IBAN du compte clôturé figurait peut-être sur des documents officiels — avis d'imposition, dossiers de location, contrats de travail. Après la clôture, mettre à jour ces documents avec les nouvelles coordonnées bancaires évite des complications lors d'interactions ultérieures avec ces organismes. Une mise à jour proactive auprès des principaux organismes (administration fiscale, CAF, préfecture, employeur) est préférable à une correction réactive suite à un problème.
`;

const L4 = `# La clôture de compte dans le cadre d'un changement de banque

La majorité des clôtures de compte font suite à un changement de banque. La mobilité bancaire est facilitée en France par le service Agir, mais la clôture de l'ancien compte reste une démarche distincte qui doit être coordonnée avec l'ouverture du nouveau compte.

## Le service de mobilité bancaire Agir

Le service Agir, mis en place par la loi Macron de 2015, facilite le changement de banque en automatisant le transfert des prélèvements et virements. La nouvelle banque coordonne le processus : elle contacte l'ancienne banque pour obtenir la liste des domiciliations actives, puis notifie les entreprises concernées du nouvel IBAN. Ce service est gratuit pour le client et doit être traité dans un délai de 22 jours ouvrés.

## Les limites du service Agir

Malgré son utilité, Agir ne couvre pas toutes les étapes d'un changement de banque. La clôture de l'ancien compte n'est pas automatique — Agir transfère les domiciliations mais ne ferme pas l'ancien compte. La demande de clôture doit être effectuée séparément par le titulaire. De plus, certaines domiciliations peuvent passer au travers du processus de migration automatique, notamment les paiements récurrents par carte (qui ne sont pas des prélèvements SEPA stricto sensu) et les entreprises qui n'ont pas encore mis à jour leurs systèmes.

## La période de chevauchement des deux comptes

Pendant la transition, maintenir les deux comptes actifs en parallèle pendant 2 à 3 mois est fortement recommandé. Ce chevauchement capture les dernières transactions qui arrivent encore sur l'ancien compte, les remboursements en retard (mutuelles, assurances), et les virements récurrents dont l'émetteur n'a pas encore mis à jour ses fichiers. Ensuite, une fois que toutes les transactions ont migré vers le nouveau compte, la clôture de l'ancien peut être demandée sereinement.

## La clôture dans un contexte de mécontentement

Quand la clôture est motivée par un mécontentement envers la banque (service client défaillant, frais excessifs, litige non résolu), la tentation de partir rapidement peut conduire à une clôture précipitée. Il est préférable de finaliser tous les litiges en cours avant de clôturer — une fois le compte fermé, le rapport de force avec la banque est moins favorable pour le client qui essaie de récupérer des frais contestés ou de faire valoir un droit.
`;

const L5 = `# Les frais et implications financières liés à la clôture d'un compte

Clôturer un compte peut entraîner des frais et des implications financières qu'il est prudent d'anticiper. La transparence sur ces coûts potentiels permet de planifier la clôture sans mauvaises surprises.

## Les frais de clôture : ce que dit la loi

La loi française encadre les frais de clôture de compte. En principe, la clôture d'un compte courant est gratuite pour le client. Cependant, la banque peut facturer des frais si des services spécifiques sont activés lors de la clôture, comme un chèque de banque pour le solde résiduel ou des frais de traitement de dossier dans certains cas particuliers. Les frais de résiliation anticipée peuvent s'appliquer si le client a souscrit à un package bancaire avec engagement de durée — certaines offres incluant des avantages préférentiels sont assorties d'une durée minimale de souscription.

## Le remboursement des produits d'assurance liés au compte

Les assurances souscrites via la banque (assurance habitation, assurance auto, prévoyance) ne sont pas automatiquement résiliées lors de la clôture du compte. Ces contrats d'assurance sont distincts du contrat de compte bancaire et doivent être résiliés séparément selon les procédures propres à chaque contrat. La loi Hamon permet la résiliation d'une assurance auto ou habitation à tout moment après la première année, ce qui facilite la résiliation si nécessaire.

## Les implications fiscales de la clôture des produits d'épargne

La clôture de certains produits d'épargne peut avoir des implications fiscales. Le rachat partiel ou total d'une assurance-vie avant 8 ans d'ancienneté est soumis au prélèvement forfaitaire unique de 30%. La clôture d'un Plan Épargne Logement (PEL) avant 4 ans perd les droits à prêt acquis et peut réduire les intérêts versés. La clôture d'un Plan d'Épargne en Actions (PEA) avant 5 ans entraîne la perte des avantages fiscaux et clôture automatiquement le plan. Ces conséquences doivent être évaluées en amont pour décider si la clôture de ces produits est vraiment dans l'intérêt du titulaire.

## La gestion du solde résiduel et des frais de fin de contrat

Dans les semaines qui suivent la demande de clôture, diverses opérations peuvent encore être débitées sur le compte : les frais annuels de carte au prorata de la période, les derniers frais de tenue de compte, et les opérations en cours. Conserver un petit solde de précaution (50 à 100 euros) jusqu'à la confirmation écrite de clôture évite un découvert non autorisé sur ces transactions residuelles.
`;

const L6 = `# Les situations particulières et les recours lors d'une clôture difficile

Certaines situations de clôture de compte sont plus complexes que la normale. Connaître les recours disponibles et les procédures spéciales permet de gérer ces situations sans perdre ses droits.

## La clôture d'un compte inactif

Un compte bancaire est considéré "inactif" au sens légal après 12 mois sans opération initiée par le titulaire et sans manifestation du titulaire auprès de la banque. Après 10 ans d'inactivité (3 ans en cas de décès présumé du titulaire), les avoirs sont transférés à la Caisse des Dépôts et Consignations (CDC). Pour récupérer ces fonds, il faut faire une demande sur le site Ciclade.fr géré par la CDC. Cette procédure de récupération des comptes inactifs est méconnue mais simple — il suffit de fournir une pièce d'identité et les informations sur l'ancien compte.

## La clôture de compte suite à un décès

Lors du décès d'un titulaire, le compte est bloqué dès notification du décès à la banque. Les héritiers ne peuvent pas effectuer d'opérations sur le compte pendant la procédure de succession. Les prélèvements automatiques sont arrêtés, mais les virements entrants (retraites, loyers) peuvent continuer à être reçus jusqu'à la clôture officielle. La clôture définitive intervient après le règlement complet de la succession et le partage des fonds entre les ayants droit selon les dispositions légales et testamentaires.

## Les recours en cas de refus ou de blocage de la clôture

Si une banque refuse ou bloque injustement la clôture d'un compte, plusieurs recours sont disponibles. La première étape est d'envoyer une mise en demeure formelle à la direction de la banque par courrier recommandé, en citant explicitement le droit à la clôture. Si ce courrier reste sans réponse satisfaisante dans un délai de 8 semaines, le médiateur bancaire peut être saisi gratuitement. Le médiateur instruit la plainte et rend un avis dans un délai maximum de 90 jours. En dernier recours, le tribunal judiciaire ou le tribunal de proximité pour les litiges inférieurs à 10 000 euros est compétent.

## La clôture des comptes joint en cas de séparation

La clôture d'un compte joint lors d'une séparation (divorce, fin de PACS, rupture de concubinage) est une procédure qui requiert l'accord des deux cotitulaires ou une décision judiciaire. Si les deux parties s'accordent, la clôture se fait de façon standard avec signature des deux cotitulaires. En cas de désaccord, le compte joint peut être "dénoncé" par l'un des titulaires — la banque est notifiée et peut bloquer les opérations unilatérales. En cas de conflit persistant, le juge aux affaires familiales peut ordonner la clôture du compte et la répartition du solde.
`;

await patch('993f2c6f-3af0-472b-b7eb-e828b1aa09e9', L1);
await patch('2c258539-3073-41f6-b0b7-d30fc935fff8', L2);
await patch('bae3513f-1fe0-40ef-a639-9e54c053bf60', L3);
await patch('e9fa9b23-5d88-4067-a94f-7f988db9839f', L4);
await patch('9bf50448-7156-4821-872c-66d32e62a84f', L5);
await patch('2b027cc3-557e-4ef3-914b-2356ad93c539', L6);
