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

// === LE RIB ===
const RIB_L1 = `# Le RIB : présentation et utilité

Le RIB (Relevé d'Identité Bancaire) est un document fondamental de la vie bancaire en France. Comprendre ce qu'il contient, à quoi il sert, et comment l'utiliser correctement est une compétence de base pour tout titulaire d'un compte bancaire.

## Qu'est-ce que le RIB ?

Le RIB est un document officiel qui identifie un compte bancaire de façon unique. Il contient toutes les informations nécessaires pour effectuer des virements vers ou depuis ce compte. En France, le RIB est standardisé et comprend le nom du titulaire du compte, le code banque (5 chiffres), le code guichet (5 chiffres), le numéro de compte (11 caractères), et la clé RIB (2 chiffres de contrôle). Il contient aussi l'IBAN (International Bank Account Number) et le BIC/SWIFT (Bank Identifier Code), qui sont les formats internationaux de l'identifiant bancaire.

## L'IBAN : l'identifiant bancaire international

L'IBAN est le format standardisé européen pour identifier un compte bancaire, qui englobe les informations du RIB traditionnel. En France, l'IBAN commence par "FR" suivi de 2 chiffres de contrôle, puis du code banque, code guichet, numéro de compte et clé RIB — soit 27 caractères au total. Pour les virements européens et internationaux, c'est l'IBAN qui est utilisé, non le format traditionnel de RIB français.

## Le BIC/SWIFT : l'identifiant de la banque

Le BIC (Bank Identifier Code), aussi appelé code SWIFT, identifie non pas le compte mais la banque elle-même. Il est nécessaire pour les virements internationaux afin d'indiquer la banque de destination. Pour les virements SEPA (dans la zone euro et certains pays européens), le BIC seul peut suffire en complément de l'IBAN.

## Où trouver son RIB ?

Le RIB est disponible à plusieurs endroits : dans l'espace client de la banque en ligne (généralement sous "Mon espace" ou "Mes comptes"), en agence sur simple demande, sur les relevés de compte mensuels (souvent sur la première ou dernière page), et dans l'application mobile de la banque. Pour les comptes récemment ouverts, le RIB est généralement inclus dans le courrier de bienvenue de la banque.
`;

const RIB_L2 = `# Les utilisations du RIB dans la vie quotidienne

Le RIB est demandé dans de très nombreuses situations de la vie quotidienne et professionnelle. Connaître ces usages permet d'anticiper les besoins et d'avoir son RIB disponible au bon moment.

## Les prélèvements automatiques

Le mandat de prélèvement SEPA est l'autorisation signée par un titulaire de compte pour autoriser un créancier à prélever des sommes sur son compte. Pour mettre en place un prélèvement automatique (loyer, abonnement téléphonique, primes d'assurance, remboursement de crédit), le créancier demande un RIB et un mandat de prélèvement signé. Le RIB identifie le compte sur lequel les prélèvements seront opérés.

## Les virements entrants : salaire, bourse, aides sociales

Pour recevoir son salaire, sa bourse CROUS, ses allocations CAF ou tout autre virement d'un tiers, le RIB doit être communiqué à l'organisme payeur. L'employeur, le CROUS, et la CAF demandent tous un RIB lors de la mise en place d'un versement régulier. Ces organismes font généralement traverser des délais de traitement de quelques jours à quelques semaines avant le premier virement sur le nouveau compte.

## La domiciliation fiscale et sociale

L'administration fiscale (impots.gouv.fr) et les organismes de protection sociale (CPAM, CAF) ont besoin d'un RIB pour effectuer des remboursements et versements sur le compte du bénéficiaire. L'actualisation du RIB enregistré auprès de ces organismes lors d'un changement de compte bancaire est une démarche obligatoire pour ne pas manquer de remboursements.

## Le RIB dans les démarches de location

Dans le cadre d'une location, le bailleur demande souvent un RIB pour la mise en place du prélèvement mensuel du loyer ou pour enregistrer le mode de paiement dans la gestion locative. Pour les demandes de logement social, le RIB fait partie des documents à fournir au bailleur social lors de l'attribution du logement.

## Le RIB pour les achats en ligne

Pour les achats qui imposent une vérification d'identité bancaire (certains services de financement, abonnements avec vérification de compte) ou pour les paiements par prélèvement sur internet, le RIB peut être demandé comme alternative au paiement par carte bancaire. Cette méthode de paiement par prélèvement depuis un RIB est plus directe mais aussi moins protégée que le paiement par carte (pas de garantie de remboursement automatique en cas de fraude).
`;

const RIB_L3 = `# Sécuriser et partager son RIB en toute connaissance

La question de la sécurité autour du RIB génère souvent de la confusion. Contrairement aux informations de la carte bancaire (numéro, CVV), le RIB n'est pas un secret absolu, mais il doit néanmoins être partagé avec discernement.

## Le RIB est-il confidentiel ?

Contrairement au code PIN de la carte bancaire ou aux mots de passe bancaires, le RIB n'est pas strictement confidentiel. Sa communication est nécessaire pour recevoir des virements et autoriser des prélèvements. Cependant, la prudence s'impose dans sa diffusion : toute personne ou organisme qui dispose de votre IBAN peut techniquement mettre en place un prélèvement SEPA si vous signez un mandat de prélèvement correspondant.

## Les risques liés à la communication du RIB

La mise en place d'un prélèvement SEPA nécessite à la fois un IBAN et un mandat de prélèvement signé. Un IBAN seul, sans mandat signé, ne permet pas légalement d'effectuer un prélèvement. Cependant, des prélèvements frauduleux peuvent être tentés si un mandant est signé à l'insu du titulaire ou si la signature est falsifiée.

Si un prélèvement non autorisé apparaît sur le compte, le titulaire dispose de 8 semaines à partir de la date de débit pour demander l'annulation et le remboursement sans justification particulière. Ce délai de contestation de 8 semaines est une protection forte offerte par la réglementation SEPA.

## Les bonnes pratiques de partage du RIB

Le RIB doit être partagé uniquement avec des organismes légitimes et de confiance : employeur, CROUS, CAF, propriétaire identifié, créanciers reconnus. Ne jamais envoyer son RIB par SMS à un inconnu, ne pas l'afficher publiquement sur les réseaux sociaux, et vérifier l'identité d'un organisme qui demande un RIB avant de le communiquer sont des précautions raisonnables.

Pour les achats entre particuliers où un virement est demandé, il est prudent de vérifier l'identité de la personne qui recevra le virement avant de lui communiquer son propre RIB en retour. Dans ce contexte, l'application mobile de la banque qui génère des QR codes de paiement permet parfois d'effectuer des virements entrants sans communication explicite de l'IBAN.

## La mise à jour du RIB lors d'un changement de compte

Lors du changement de banque, la mise à jour du RIB auprès de tous les tiers qui en ont un en leur possession est une des étapes clés de la transition. Cette mise à jour doit couvrir les créanciers de prélèvements (le service de mobilité bancaire Agir aide à identifier et notifier ces créanciers), les organismes verseurs de revenus réguliers, et les administrations qui effectuent des versements ponctuels (remboursements fiscaux, remboursements de frais médicaux).
`;

const RIB_L4 = `# Les erreurs courantes avec le RIB et comment les éviter

Des erreurs dans la communication ou l'utilisation du RIB peuvent entraîner des retards de paiement, des prélèvements rejetés, ou des virements envoyés vers le mauvais compte.

## L'erreur de saisie d'un IBAN

Les IBAN sont des chaînes de 27 caractères (pour les comptes français) dont une erreur de frappe peut diriger un virement vers un compte inexistant ou un autre compte réel. La structure de l'IBAN inclut des chiffres de contrôle qui permettent de détecter certaines erreurs de saisie, mais pas toutes les erreurs sont détectables par ces checkings.

La pratique recommandée est de toujours copier-coller l'IBAN depuis le document officiel (RIB au format numérique, relevé de compte) plutôt que de le saisir manuellement. Si une saisie manuelle est inévitable, la relire deux fois après saisie en comparant caractère par caractère avec l'original est indispensable.

## Les virements émis sur un mauvais IBAN

Si un virement est envoyé sur le mauvais IBAN (erreur de saisie), les conséquences dépendent de si l'IBAN de destination est un compte existant ou non. Si l'IBAN est invalide (checksum incorrect), le virement sera rejeté automatiquement et le montant revient généralement dans les jours suivants. Si l'IBAN est valide mais appartient à un autre compte, le virement sera crédité sur ce compte — et la récupération des fonds est alors plus complexe, nécessitant une demande de rappel de virement auprès de la banque.

## La communication d'un RIB obsolète

Communiquer un RIB d'un compte clôturé (ancien compte suite à un changement de banque) entraîne le rejet des virements ou prélèvements présentés sur cet IBAN. Pour les organismes importants (employeur, CAF, CROUS), la mise à jour proactive du RIB avant la clôture de l'ancien compte est essentielle pour éviter des retards de versements pouvant perturber significativement le budget mensuel.

## La vérification de l'authenticité d'un RIB reçu

Dans le contexte professionnel ou de la location, il peut arriver de recevoir un RIB qui s'avère être frauduleux (RIB falsifié pour détourner un paiement vers un compte tiers). Cette fraude, dite "fraude au faux RIB" ou "fraude aux prélèvements", peut être évitée en vérifiant le RIB reçu par un canal de communication différent (appel téléphonique de confirmation, vérification auprès de l'organisme émetteur) avant de l'enregistrer dans ses systèmes de paiement.
`;

const RIB_L5 = `# Les documents bancaires associés au RIB : relevés et notifications

Le RIB fait partie d'un ensemble de documents bancaires que le titulaire du compte reçoit régulièrement. Comprendre ces documents est essentiel pour une bonne gestion de ses comptes.

## Le relevé de compte mensuel

Le relevé de compte mensuel est le document récapitulatif de toutes les opérations effectuées sur le compte au cours du mois. Il liste chronologiquement les débits (sorties d'argent) et crédits (entrées d'argent), avec les soldes intermédiaires. Ce document est un outil de vérification essentiel : confronter le relevé avec ses propres traces de dépenses (tickets, factures, talons de chèques) permet de détecter des opérations inconnues.

Le relevé de compte inclut généralement le RIB du compte en première ou dernière page, ce qui le rend facilement accessible lors de démarches qui en nécessitent un. Les relevés numériques disponibles dans l'espace client en ligne sont téléchargeables en PDF et archivables facilement.

## Les notifications d'opérations

Les banques proposent des notifications en temps réel (par SMS, email, ou notification push sur l'application mobile) pour les opérations sur le compte. Ces notifications permettent de surveiller l'activité du compte et de détecter rapidement les opérations non reconnaissables (fraude à la carte, prélèvement non autorisé).

Activer ces notifications, notamment pour les opérations supérieures à un certain seuil, est une bonne pratique de sécurité bancaire. La personnalisation des seuils de notification (n'être alerté que pour les opérations supérieures à 50 euros, par exemple) permet de recevoir des alertes pertinentes sans être submergé de notifications pour chaque petit achat.

## L'historique des opérations dans l'espace client

L'espace client bancaire conserve un historique des opérations de plusieurs mois à plusieurs années. Pour les étudiants qui ont besoin de retrouver une transaction spécifique (remboursement d'une caution, paiement d'une facture contestée, vérification d'un virement reçu), cet historique consultable et filtrable est un outil précieux.

La fonctionnalité de recherche par montant, date ou libellé disponible dans la plupart des espaces clients bancaires modernes permet de retrouver rapidement une transaction spécifique parmi des centaines d'opérations.

## L'avis d'opération et ses usages

Pour certaines opérations importantes (virement d'un montant élevé, remboursement d'impôt, versement de bourse), une confirmation d'opération est disponible dans l'espace client ou peut être demandée à la banque. Ces avis d'opération peuvent servir de justificatifs pour des démarches administratives nécessitant la preuve d'un paiement effectué ou reçu.
`;

const RIB_L6 = `# Les normes SEPA et les virements internationaux

Le système bancaire français s'inscrit dans un cadre européen et international. Comprendre les normes SEPA et les règles des virements internationaux est utile pour les étudiants avec des connexions financières transfrontalières.

## Le système SEPA et la zone euro

SEPA (Single Euro Payments Area — Espace Unique de Paiement en Euros) est une initiative de l'Union européenne qui harmonise les systèmes de paiement en euros dans 36 pays européens (Union Européenne, Espace Économique Européen, et quelques autres pays). Dans la zone SEPA, les virements en euros entre pays membres sont traités de la même façon que les virements domestiques — mêmes délais, mêmes règles de protection, sans frais supplémentaires.

Pour les étudiants étrangers résidents en France ou les étudiants français qui font des transferts avec leurs familles dans d'autres pays SEPA, cette harmonisation est très avantageuse : recevoir un virement de ses parents en Espagne, en Italie, ou en Allemagne est aussi simple et sans frais que recevoir un virement d'une banque française.

## Les virements hors zone SEPA

Pour les virements avec des pays hors zone SEPA (Maroc, Tunisie, États-Unis, pays asiatiques), les règles sont différentes. Ces virements internationaux ("swift transfers") peuvent générer des frais significatifs (frais fixes d'émission, frais de change si les devises sont différentes). Les délais sont également plus longs (2 à 5 jours ouvrés généralement).

Pour les étudiants qui reçoivent régulièrement de l'argent de leur famille à l'étranger, des services de transfert d'argent spécialisés (Wise, Revolut, Western Union) peuvent offrir de meilleures conditions que les virements bancaires traditionnels, notamment sur les frais de change et les taux de conversion.

## La protection des virements : irrévocabilité et sécurité

Un virement SEPA émis devient irrévocable dès son envoi vers le compte destinataire. Il n'est pas possible de rappeler un virement une fois crédité sur le compte du bénéficiaire sans son accord. Cette irrévocabilité est une caractéristique importante à commune lors d'un paiement par virement : vérifier l'IBAN destinataire avec la plus grande attention avant tout envoi.

Le virement SEPA instantané, disponible dans la plupart des banques françaises, offre un crédit en quelques secondes 24h/24. Ce service est particulièrement utile pour les paiements urgents et les transactions entre particuliers qui exigent une confirmation immédiate de réception des fonds.

## La réglementation anti-blanchiment et les virements

Pour les virements d'un certain montant ou de certaines provenances, les banques peuvent demander des justificatifs expliquant l'origine des fonds. Ces demandes s'inscrivent dans le cadre de la réglementation anti-blanchiment qui impose aux banques de "connaître leur client" et de surveiller les transactions inhabituelles.

Pour les étudiants, ces demandes sont peu fréquentes. Elles peuvent concerner des virements importants de l'étranger (aide financière parentale substantielle, héritage, vente d'un bien à l'étranger). Fournir des justificatifs clairs et transparents sur l'origine des fonds est la démarche appropriée — et préférable au fait d'en l'absence de justificatifs qui bloquerait les fonds.
`;

await patch('12ed960c-a8a7-4012-acbf-37c75411539f', RIB_L1);
await patch('26d79b92-eb06-4b5d-a9c8-67f86fe6cb5f', RIB_L2);
await patch('92c0b632-fb4a-4c5a-a87d-5263394a4a7f', RIB_L3);
await patch('d89c0c25-b88a-4677-b89f-cd04d8550591', RIB_L4);
await patch('9ec57602-96e0-4dc4-b174-c3b9e4050f94', RIB_L5);
await patch('7ff67354-b598-4499-bf70-a93453b673ee', RIB_L6);

// === OUVRIR UN COMPTE BANCAIRE ===
const OUV_L1 = `# Ouvrir un compte bancaire en France : prérequis et démarche générale

L'ouverture d'un compte bancaire est l'une des premières démarches administratives à effectuer lors d'une installation en France, que ce soit pour des études, un travail, ou un séjour prolongé. Comprendre les prérequis et la procédure permet de s'y préparer efficacement.

## Les documents nécessaires pour ouvrir un compte

Toute banque française exige certains documents pour ouvrir un compte courant. La pièce d'identité valide (carte d'identité, passeport, ou titre de séjour pour les étrangers) est universellement requise. Un justificatif de domicile en France (quittance de loyer, attestation d'hébergement, facture d'énergie récente) prouve l'adresse de résidence. Pour les étudiants étrangers, une attestation d'inscription dans un établissement d'enseignement supérieur français est souvent demandée en supplément.

Pour les mineurs de plus de 16 ans qui ouvrent un compte à leur nom, l'autorisation des parents (sous forme d'une lettre ou d'un formulaire bancaire) est généralement requise. Certaines banques proposent des comptes juniors accessibles dès 12 ans avec accompagnement parental.

## Les types de comptes disponibles

La variété des offres de comptes bancaires en France est large. Le compte courant (compte de dépôt) est le compte standard pour les opérations du quotidien — c'est celui que la plupart des étudiants ouvrent en premier. Des offres packagées (compte + carte + services) sont proposées avec différents niveaux de fonctionnalités et de prix. Pour les étudiants, de nombreuses banques proposent des offres spécifiques avec des tarifs réduits ou nuls sous condition d'âge ou de statut étudiant.

## Le droit au compte en France

En France, le droit au compte est garanti par la loi. Toute personne résidant légalement en France a droit à l'ouverture d'un compte bancaire offrant les services de base. Si une banque refuse d'ouvrir un compte, la personne peut saisir la Banque de France qui désignera d'office un établissement pour lui ouvrir un compte de base avec les services essentiels. Ce droit au compte protège les personnes en situation précaire ou les étrangers qui pourraient sinon se retrouver sans accès aux services bancaires.

## La durée de la procédure d'ouverture

La durée de la procédure d'ouverture de compte varie selon le type de banque. Les banques en ligne peuvent ouvrir un compte en quelques minutes (ouverture totalement dématérialisée avec vérification d'identité vidéo) et envoyer la carte sous quelques jours. Les banques traditionnelles nécessitent généralement un rendez-vous en agence et un délai de traitement de quelques jours à quelques semaines. Pour les étudiants qui ont besoin d'un compte rapidement (versement de la bourse, paiement du loyer), les banques en ligne sont souvent les plus rapides.
`;

const OUV_L2 = `# Choisir la bonne banque pour ses besoins étudiants

Le choix de la banque où ouvrir un compte a des conséquences sur les services disponibles, les frais à payer, et la qualité de l'expérience bancaire quotidienne. Une analyse structurée de ses besoins facilite ce choix.

## Les critères de choix d'une banque pour étudiant

Les critères principaux pour choisir une banque en tant qu'étudiant incluent les frais (tenue de compte, carte bancaire, virements), la qualité de l'application mobile et des services numériques, la disponibilité d'agences physiques si nécessaire, les conditions d'accès aux découverts autorisés, et la réputation du service clients. Pour les étudiants étrangers, la capacité de la banque à gérer des transferts internationaux importants est un critère supplémentaire.

La comparaison des offres sur un comparateur en ligne (Panorabanques, LesFurets) donne une première vue des différences tarifaires entre les banques. De nombreuses banques proposent des offres spéciales pour les étudiants avec des cartes bancaires gratuites, des découverts autorisés sans frais, et parfois des primes d'ouverture.

## Les offres étudiantes des banques traditionnelles

Les principales banques françaises à réseau d'agences (Crédit Agricole, BNP Paribas, Société Générale, LCL, Banque Populaire, Caisse d'Épargne, CIC) proposent toutes des offres spécifiques pour les étudiants. Ces offres incluent généralement une carte bancaire gratuite ou à tarif réduit, un découvert autorisé sans agios jusqu'à un certain seuil, et parfois des services complémentaires (assurance voyage, insurance smartphone).

Les banques traditionnelles ont l'avantage d'un réseau d'agences physiques — utile pour les démarches complexes, la gestion de produits d'épargne avancés, ou en cas de problème nécessitant un accompagnement personnel. En contrepartie, leurs tarifs standard (hors offres étudiantes) sont généralement plus élevés que les banques en ligne.

## Les banques en ligne et les néobanques

Les banques en ligne (Boursorama, Fortuneo, Hello Bank, BforBank) et les néobanques (Revolut, N26, Lydia) proposent des offres sans frais de tenue de compte avec des interfaces numériques modernes et réactives. Ces établissements attirent les étudiants avec leur simplicité d'utilisation, leur absence de frais, et leurs fonctionnalités de gestion des dépenses.

Pour les étudiants étrangers qui ont besoin de gérer des devises multiples, Revolut et Wise offrent des fonctionnalités de change compétitives. Pour les étudiants qui ont uniquement besoin d'un compte simple pour le quotidien, les néobanques et banques en ligne sont souvent les plus économiques et les plus pratiques.

## L'importance de la relation bancaire à long terme

La banque choisie pour les études n'est pas nécessairement celle que l'on gardera toute la vie — la mobilité bancaire est facilitée en France. Cependant, la relation bancaire initiale influence la facilité d'obtention de certains services (crédit, épargne structurée) dans les premières années de vie professionnelle. Choisir une banque avec laquelle on se sent à l'aise et qui répond à ses besoins actuels est le critère le plus important, en sachant que l'on peut changer si la situation évolue.
`;

const OUV_L3 = `# La procédure d'ouverture de compte en ligne

L'ouverture de compte en ligne est maintenant la méthode la plus rapide et la plus pratique pour la grande majorité des banques et néobanques. La dématérialisation complète de la procédure permet dans certains cas d'avoir un compte opérationnel en moins d'une heure.

## Les étapes de l'ouverture en ligne

La procédure standard d'ouverture de compte en ligne suit généralement les mêmes grandes étapes. La saisie des informations personnelles (état civil, adresse, situation professionnelle) constitue le dossier de candidature. La vérification d'identité peut se faire par upload de document (scan ou photo de la pièce d'identité) ou par vidéo (vérification d'identité en visio avec un conseiller ou via un algorithme d'intelligence artificielle). L'upload des pièces justificatives complémentaires (justificatif de domicile, attestation d'étudiant) complète le dossier. La signature électronique des conditions générales et du contrat bancaire finalise la démarche.

## La vérification d'identité à distance

La vérification d'identité à distance est une étape clé de l'ouverture de compte en ligne. Les banques disposent de deux méthodes principales. La vérification par document seul (upload d'une photo de la pièce d'identité des deux côtés) est la méthode la plus simple mais la plus facile à contourner frauduleusement. La vérification vidéo (selfie vidéo ou session vidéo avec reconnaissance faciale) offre une meilleure garantie d'identité.

Pour les étudiants étrangers, certaines banques peuvent avoir des exigences spécifiques sur la traduction ou l'apostille des documents d'identité étrangers. Vérifier à l'avance les documents acceptés par la banque choisie évite des allers-retours lors de la soumission du dossier.

## L'activation du compte et de la carte

Une fois le dossier validé par la banque, les étapes suivantes sont l'activation du compte (généralement automatique à la réception d'un email de confirmation) et l'activation de la carte bancaire (qui arrive sous quelques jours par courrier). L'activation de la carte nécessite souvent un premier retrait au distributeur ou une opération de validation spécifique dans l'application.

Le premier accès à l'espace client en ligne ou à l'application mobile nécessite la création d'un identifiant et d'un mot de passe. Ces identifiants sont la clé d'accès à toutes les opérations bancaires en ligne — les sécuriser et ne jamais les partager est une règle fondamentale.

## Le délai entre l'ouverture et la première utilisation

Pour les étudiants qui ont besoin d'un compte rapidement (versement de la bourse, premier loyer), il est utile de savoir combien de temps s'écoule entre l'ouverture et la première utilisation effective. Les banques en ligne et néobanques sont souvent les plus rapides — certaines permettent d'obtenir un IBAN virtuel immédiat pour recevoir des virements avant même la réception physique de la carte. Les banques traditionnelles peuvent prendre quelques semaines entre l'ouverture et la réception de la carte et du chéquier.
`;

const OUV_L4 = `# La gestion du compte après l'ouverture

Une fois le compte ouvert, il faut le gérer efficacement. Les premières semaines après l'ouverture sont importantes pour établir des bonnes pratiques qui faciliteront la gestion bancaire quotidienne.

## Les premières opérations à effectuer

Dès la réception de la carte bancaire, plusieurs opérations initiales sont recommandées. Activer la carte selon les instructions de la banque (retrait au distributeur ou validation dans l'application). Configurer les alertes et notifications pour surveiller les mouvements du compte en temps réel. Personnaliser le code PIN de la carte si la banque a attribué un code temporaire. Télécharger l'application mobile de la banque (si pas encore fait) et s'assurer qu'elle fonctionne correctement.

## La communiquer le RIB aux organismes pertinents

Une fois le compte ouvert et le RIB disponible, il doit être communiqué à tous les organismes qui effectueront des versements réguliers. L'employeur (pour le salaire), le CROUS (pour la bourse), la CAF (pour les aides sociales), et les organismes de versement de bourses autres doivent tous recevoir le RIB. Cette démarche doit être effectuée le plus tôt possible pour éviter des retards dans le versement des premières ressources.

## Le suivi régulier du compte

Une habitude à développer dès l'ouverture du compte est le suivi régulier des opérations. Vérifier son compte au moins une fois par semaine, comparer les opérations listées avec ses propres traces (tickets, factures), et signaler immédiatement toute opération inconnue à la banque sont des pratiques de base qui permettent de détecter rapidement les erreurs et les fraudes.

## Les produits complémentaires à envisager

Le compte courant est souvent le premier produit bancaire, mais d'autres produits complémentaires peuvent être utiles dès les études. Un livret d'épargne réglementé (Livret A, LDDS) pour les petites économies est généralement proposé en même temps que le compte courant. Ces livrets sont sans risque, liquides (accessible à tout moment), et bénéficient d'une rémunération modeste mais garantie en tant qu'étudiants aux revenus modestes.

La mise en place d'un virement automatique mensuel vers un livret d'épargne (même un petit montant) dès l'ouverture du compte établit une discipline d'épargne saine qui bénéficiera à long terme.
`;

const OUV_L5 = `# Les droits et obligations lors de l'ouverture d'un compte

L'ouverture d'un compte bancaire s'accompagne de droits que la banque doit respecter et d'obligations que le client accepte.

## Les droits avant et lors de l'ouverture

Avant d'ouvrir un compte, la banque est tenue de fournir au futur client une information précontractuelle complète sur les services proposés, les frais applicables, et les conditions générales. Ces documents doivent être remis de façon transparente, de sorte que le client puisse les lire et les comprendre avant de s'engager. Si ces informations ne sont pas fournies spontanément, le client a le droit de les demander.

Lors de l'ouverture, les conditions générales du compte (qui constituent le contrat entre la banque et le client) doivent être remises. Il est conseillé de lire au moins les sections relatives aux frais, aux conditions du découvert autorisé, et aux droits de résiliation afin de connaître ses engagements.

## Les obligations du client

En ouvrant un compte, le client s'engage à respecter certaines obligations. Maintenir l'exactitude des informations personnelles communiquées à la banque (adresse, situation, etc.) est une obligation légale liée à la réglementation anti-blanchiment. Informer la banque de tout changement de situation significatif (changement d'adresse, changement de statut résident pour les étrangers) est requis. Utiliser le compte de façon conforme à son objet (compte personnel et non professionnel si c'est un compte particulier) évite les risques de clôture par la banque.

## La protection des données personnelles

En ouvrant un compte, le client confie à la banque des informations personnelles sensibles. Ces données sont protégées par le RGPD (Règlement Général sur la Protection des Données). Le client a le droit d'accéder à ses données, de les rectifier, et dans certains cas de demander leur effacement. La banque doit informer le client de l'utilisation de ses données (marketing, partage avec des partenaires) et obtenir son consentement pour les utilisations au-delà des nécessités contractuelles.

## Le droit de rétractation

Lors de l'ouverture d'un compte en ligne, le client bénéficie d'un droit de rétractation de 14 jours à compter de la signature électronique du contrat. Durant cette période, il peut annuler l'ouverture sans frais ni justification. Ce droit de rétractation ne s'applique pas si des services ont déjà été utilisés (premier paiement effectué, premier retrait réalisé).
`;

const OUV_L6 = `# Ouvrir un compte bancaire en France en tant qu'étudiant étranger

Les étudiants étrangers font face à des défis spécifiques lors de l'ouverture d'un compte en France. Des solutions existent pour chaque obstacle typique de cette démarche.

## Les défis spécifiques des étudiants étrangers

Pour un étudiant étranger arrivant en France, plusieurs obstacles peuvent compliquer l'ouverture d'un compte. L'absence d'adresse fixe au moment de l'arrivée (logement non encore sécurisé), la pièce d'identité étrangère parfois non reconnue par les systèmes de vérification automatique, l'absence d'historique bancaire en France, et parfois la barrière de la langue sont des défis réels.

Anticiper ces obstacles et préparer un plan de contournement pour chacun permet d'ouvrir un compte dès les premiers jours en France sans frustration excessive.

## Les alternatives pour les étudiants sans adresse

Pour les étudiants qui n'ont pas encore d'adresse permanente à leur arrivée, plusieurs options existent pour le justificatif de domicile. La domiciliation chez un particulier (famille de l'étudiant, ami ayant une résidence en France) avec une attestation d'hébergement et une facture récente au nom de l'hébergeur est la solution la plus simple. Les résidences universitaires et les foyers étudiants peuvent fournir une attestation d'hébergement dès la réservation du logement. Le Service Civil Volontaire (SCV) ou certaines associations offrent des services de domiciliation postale.

## Les établissements les plus accessibles pour les étrangers

Certains établissements bancaires sont reconnus pour leur facilité d'accès aux étudiants étrangers. Les banques en ligne avec vérification d'identité automatique (Boursorama, N26) acceptent souvent les passeports étrangers via leur système de reconnaissance automatique. Les néobanques comme Revolut ou Wise ont des exigences de vérification d'identité moins strictes et des procédures entièrement dématérialisées adaptées aux documents internationaux.

Parmi les banques traditionnelles, certains établissements comme La Banque Postale ou certaines agences universitaires du Crédit Mutuel ont développé une expertise dans l'accueil des étudiants internationaux.

## Le compte de base et ses services

Si l'ouverture d'un compte standard se révèle difficile malgré les démarches, le droit au compte et le compte de base (service bancaire universel garanti par la loi) représentent le filet de sécurité. Le compte de base offre les services essentiels (dépôt et retrait d'espèces, virements, carte de paiement débit différé) à un tarif réglementé, sans conditions de revenus ni d'historique bancaire.

La saisine de la Banque de France pour demander la désignation d'office d'un établissement dans le cadre du droit au compte est la démarche ultime en cas de refus repeated d'ouverture. Cette procédure, gratuite et sans formalisme complexe, garantit que tout résident légal en France puisse accéder aux services bancaires de base.

## La comparaison des offres étudiantes internationales

Pour les étudiants étrangers qui veulent optimiser leur situation bancaire en France, la comparaison des offres spécifiquement conçues pour les étudiants internationaux est utile. Certaines banques proposent des offres conçues pour les étudiants provenant de pays spécifiques (ex : offre étudiants africains de certaines banques ayant des partenariats avec des établissements africains). Les associations d'étudiants étrangers dans chaque université sont souvent les meilleures sources de recommandations basées sur l'expérience réelle.

Le choix final d'un établissement bancaire pour un étudiant étranger doit prendre en compte non seulement les frais et les services, mais aussi la facilité des transferts internationaux, la disponibilité d'une assistance en anglais ou dans d'autres langues, et la capacité à traiter rapidement les situations spécifiques des étudiants étrangers.
`;

await patch('c0a24c5e-d904-4ccf-891e-35d02f629a5d', OUV_L1);
await patch('d3497335-11de-47cf-9e26-5af2ea9b5497', OUV_L2);
await patch('b69a0849-a11d-432b-9b27-f39bf5984d41', OUV_L3);
await patch('055f09d9-14f7-4661-a4f8-7102d005a066', OUV_L4);
await patch('ff4455d3-87ef-4376-a44b-2e3758bde6a4', OUV_L5);
await patch('cfab9887-d842-4334-a395-0fc13422308e', OUV_L6);
