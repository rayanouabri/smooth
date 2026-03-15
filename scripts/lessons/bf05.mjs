export default [
  {
    course_id: "9b739ac1-db20-4dd8-a950-30c533839ad2",
    title: "Le RIB : votre identifiant bancaire, comment le lire et l'utiliser",
    lesson_order: 1, order: 1, duration_minutes: 40,
    video_url: "https://www.youtube.com/watch?v=9SzQ7TkZ8qM",
    resources: JSON.stringify([
      {"title":"Banque de France – IBAN et BIC expliqués","url":"https://www.banque-france.fr/fr/particuliers/gerer-son-compte/iban-bic","type":"link"},
      {"title":"Service-Public – Relevé d'identité bancaire","url":"https://www.service-public.fr/particuliers/vosdroits/F18","type":"link"},
      {"title":"Vérificateur IBAN officiel – IBAN.fr","url":"https://www.iban.fr","type":"link"},
      {"title":"CAF – Renseigner son RIB","url":"https://www.caf.fr","type":"link"},
      {"title":"Ameli – Modifier coordonnées bancaires","url":"https://www.ameli.fr","type":"link"},
      {"title":"Impots.gouv.fr – Saisir IBAN","url":"https://www.impots.gouv.fr","type":"link"},
      {"title":"CROUS – Domiciliation bourse","url":"https://www.crous.fr","type":"link"},
      {"title":"Etudiant.gouv.fr – Mes services bancaires","url":"https://www.etudiant.gouv.fr","type":"link"}
    ]),
    content: `# Le RIB : votre identifiant bancaire en France, comment le lire et l'utiliser

Le Relevé d'Identité Bancaire, connu sous l'acronyme RIB, est le document bancaire que vous fournirez le plus souvent pendant toute votre vie en France. Payer votre loyer ? Donner votre RIB. Recevoir votre bourse CROUS ? RIB. Vous inscrire à la sécurité sociale étudiante ? RIB. Avoir un forfait téléphone avec prélèvement mensuel ? RIB. Recevoir votre salaire ? RIB. Vous remboursez auprès d'une assurance ? RIB.

Ce document de quelques lignes concentre l'information nécessaire pour que n'importe quel système bancaire en Europe puisse vous envoyer ou débiter de l'argent. Il est équivalent à votre "adresse postale" dans le monde financier.

## Anatomie complète d'un RIB français

Un RIB français contient les informations suivantes, que vous devez savoir identifier :

Le numéro de compte national (format français historique) : il se compose de trois parties :
- Code établissement : 5 chiffres qui identifient la banque (ex: 30004 pour BNP Paribas, 30003 pour Société Générale)
- Code guichet : 5 chiffres qui identifient l'agence ou l'établissement dans la banque
- Numéro de compte : 11 caractères alphanumériques (chiffres et lettres) qui sont votre identifiant unique dans cet établissement
- Clé RIB : 2 chiffres de contrôle mathématique pour vérifier l'intégrité du numéro complet

Exemple de numéro de compte français : 30004 02840 00012345678 50

L'IBAN (International Bank Account Number) : c'est la version internationale et standardisée de votre compte. En France, il commence toujours par "FR" suivi de 2 chiffres de contrôle et de 23 caractères fixes correspondant à votre numéro de compte national. Format complet : FR76 3000 4028 4000 0123 4567 850.

L'IBAN français compte exactement 27 caractères. Il est écrit par groupes de 4 caractères pour la lisibilité humaine mais c'est une seule chaîne continue pour les systèmes informatiques.

Le BIC (Bank Identifier Code) : aussi appelé code SWIFT, le BIC est le code international qui identifie votre banque (pas votre compte, juste la banque). Il fait 8 ou 11 caractères. Exemples : BNPAFRPPXXX pour BNP Paribas, SOGEFRPP pour Société Générale, AGRIFRPP pour Crédit Agricole. Le BIC est nécessaire pour les virements internationaux (hors zone SEPA généralement).

Le nom du titulaire : votre prénom et nom tels qu'enregistrés dans le système bancaire. Attention si votre nom comporte des caractères spéciaux (accents, tirets, apostrophes) : certains systèmes les transforment ou les suppriment. Vérifiez que votre nom est correctement reproduit.

La domiciliation bancaire : nom et adresse de votre banque/agence.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/9SzQ7TkZ8qM" title="Comprendre le RIB et l'IBAN en France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Où trouver votre RIB

Votre RIB est disponible de plusieurs façons :

Dans votre application bancaire : c'est le moyen le plus rapide. Ouvrez votre app, cherchez "Mon compte", "RIB" ou l'icône IBAN. Vous pouvez le télécharger en PDF, l'envoyer par email ou l'afficher en QR code scannablele.

Dans votre espace client en ligne : sur le site web de votre banque, section "Mes comptes" ou "Mon profil", généralement un onglet "Télécharger mon RIB".

Sur vos relevés de compte : votre IBAN apparaît en bas de chaque relevé de compte mensuel.

En agence : votre conseiller peut vous l'imprimer.

Via courrier postal : pour les banques traditionnelles, un RIB peut être envoyé par courrier si vous en faites la demande. Délai : 5 à 10 jours.

## Ce que vous devez faire immédiatement avec votre RIB

Dès réception de votre premier RIB, effectuez ces actions dans les 48 heures :

Action 1 : sauvegardez-le en PDF sur votre email. Envoyez-vous le fichier PDF par email avec pour objet "MON RIB - [Date]". Cela vous permet de le retrouver en cherchant dans votre boîte mail depuis n'importe quel appareil.

Action 2 : transmettez-le à la CAF. Connectez-vous sur caf.fr, section "Mes coordonnées" puis "Mes coordonnées bancaires". Saisissez votre IBAN manuellement ou photographiez le document pour l'uploader. La CAF met 3 à 7 jours pour vérifier et valider le RIB. Sans RIB validé, vous ne recevez pas votre APL.

Action 3 : transmettez-le au CROUS. Via messervices.etudiant.gouv.fr, section "Ma bourse". Le CROUS verse votre bourse sur cet IBAN.

Action 4 : transmettez-le à votre propriétaire ou gestionnaire de résidence. Pour les paiements de loyer par virement permanent. Le propriétaire a besoin de votre IBAN pour émettre les quittances et configurer les virements.

Action 5 : transmettez-le à votre Caisse Primaire d'Assurance Maladie (CPAM) sur ameli.fr pour les remboursements santé.

## Les usages courants du RIB

Prélèvement automatique : vous donnez votre IBAN à une société (Orange, EDF, Netflix) et signez un mandat de prélèvement. Elle prélève automatiquement le montant mensuel sur votre compte. Vous ne faites rien de plus.

Virement reçu : votre employeur, la CAF, le CROUS envoient de l'argent directement. Aucune action de votre part est nécessaire une fois l'IBAN communiqué.

Virement émis : vous envoyez de l'argent à quelqu'un. Vous avez besoin de l'IBAN du destinataire (pas du vôtre).`
  },
  {
    course_id: "9b739ac1-db20-4dd8-a950-30c533839ad2",
    title: "Les virements bancaires en France : SEPA, instantané et international",
    lesson_order: 2, order: 2, duration_minutes: 45,
    video_url: "https://www.youtube.com/watch?v=7pQvT3kRl4E",
    resources: JSON.stringify([
      {"title":"Banque de France – Virements SEPA","url":"https://www.banque-france.fr/fr/particuliers","type":"link"},
      {"title":"EBA – European Payments Council SEPA","url":"https://www.europeanpaymentscouncil.eu","type":"link"},
      {"title":"Wise – Virement international économique","url":"https://wise.com/fr","type":"link"},
      {"title":"MoneyGram – Envoi international","url":"https://www.moneygram.com/fr","type":"link"},
      {"title":"Western Union France – Transfert","url":"https://www.westernunion.com/fr/fr","type":"link"},
      {"title":"Banque de France – Paiement instantané","url":"https://www.banque-france.fr","type":"link"},
      {"title":"Service-Public – Virement SEPA","url":"https://www.service-public.fr/particuliers/vosdroits/F18","type":"link"},
      {"title":"Revolut – Virement international","url":"https://www.revolut.com/fr-FR","type":"link"}
    ]),
    content: `# Les virements bancaires en France : SEPA, instantané et international

Comprendre les virements bancaires en France vous permet d'envoyer et recevoir de l'argent efficacement, sans frais superflus et sans retards inutiles. En 2025, la France fait partie de l'espace SEPA ce qui simplifie énormément les paiements européens, mais les virements vers l'extérieur de l'Europe restent coûteux via les canaux bancaires standard.

## Le virement SEPA : le standard européen

Le SEPA (Single Euro Payments Area) est un espace unifié de paiement en euros créé par l'Union Européenne. Il couvre 36 pays : les 27 membres de l'UE plus la Suisse, la Norvège, l'Islande, le Liechtenstein, Monaco, San Marin et d'autres petits territoires.

Au sein de la zone SEPA, un virement de la France vers l'Allemagne, l'Espagne, l'Italie ou l'Autriche fonctionne exactement comme un virement interne français : même vitesse, même coût (généralement nul), mêmes procédures.

Types de virements SEPA :

Virement SEPA standard : délai d'exécution de 1 jour ouvré. Si vous faites un virement un lundi, le destinataire reçoit l'argent le mardi. Si vous faites le virement un vendredi après 17h, réception le mardi suivant (la banque ne traite pas le week-end). Coût : gratuit dans pratiquement toutes les banques françaises.

Virement SEPA Instantané (Instant Payment) : disponible depuis 2018 en France, généralisé en 2023. L'argent arrive en moins de 10 secondes, 24h/24 et 7j/7 y compris week-ends et jours fériés. La grande révolution du paiement bancaire moderne. Coût : certaines banques le facturent 0,50 à 1 euro par virement instantané, d'autres l'offrent gratuitement (Hello Bank!, Revolut entre utilisateurs Revolut, certaines néo-banques). Plafond : en France, 100 000 euros par virement instantané.

Virement SEPA permanent : c'est un ordre de virement automatique mensuel que vous programmez. Exemple : virement de 400 euros le 1er de chaque mois à votre propriétaire. Vous le configurez une fois, la banque l'exécute automatiquement. À ne pas confondre avec le prélèvement automatique (qui est initié par le bénéficiaire, pas par vous).

## Comment faire un virement en pratique

Via l'application mobile ou le site web de votre banque :

Étape 1 : connectez-vous à votre espace client.
Étape 2 : allez dans "Virements" ou "Paiements", puis "Nouveau virement" ou "Nouveau bénéficiaire".
Étape 3 : entrez l'IBAN du destinataire. Le système valide automatiquement l'IBAN : si le format est incorrect, c'est refusé immédiatement.
Étape 4 : entrez le montant, la date (immédiat ou différé), et un libellé (texte qui apparaîtra sur le relevé du destinataire). Le libellé est important : mettez "Loyer Novembre 2025" plutôt que rien, pour que votre propriétaire identifie le paiement.
Étape 5 : validez avec votre authentification forte : code SMS (OTP), ou confirmation biométrique dans votre app. C'est obligatoire pour les virements selon la directive DSP2 européenne.

Premier virement vers un nouveau bénéficiaire : votre banque peut vous demander une vérification supplémentaire (appel téléphonique ou code SMS spécial) pour le premier virement vers un nouvel IBAN. C'est une mesure anti-fraude. Acceptez-la.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/7pQvT3kRl4E" title="Faire un virement bancaire en France guide 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les virements internationaux : vers votre pays d'origine

Pour envoyer de l'argent hors zone SEPA (Maroc, Sénégal, Tunisie, Algérie, Inde, Chine, etc.) depuis votre banque française, les frais sont significatifs et variables. Voici les options classées par coût :

Option 1 : Wise (anciennement TransferWise). Wise est la solution la moins chère et la plus transparente. Elle utilise le taux de change interbancaire (le taux "réel" des marchés financiers) sans majoration cachée. Ses seuls frais sont une commission fixe + un pourcentage variable selon le pays de destination et la devise.

Exemple : envoyer 500 euros au Maroc (MAD) via Wise. Frais indicatifs : 3 à 5 euros de commission fixe + 0,7% de commission variable = environ 7 à 9 euros au total. Avec une banque traditionnelle : frais fixe 15 à 30 euros + 2 à 3% de commission de change = 25 à 45 euros. L'économie avec Wise : 15 à 35 euros sur une seule opération.

Option 2 : Revolut. Pour les envois vers les pays couverts par Revolut (liste sur leur site), vous pouvez envoyer de l'argent au taux de change interbancaire jusqu'à 1000 euros/mois (plan Standard). Au-delà, un frais de 0,5% s'applique. Revolut est gratuit entre utilisateurs Revolut (virement immédiat).

Option 3 : Western Union et MoneyGram. Solutions physiques avec des points de retrait dans le monde entier. Adaptées pour envoyer de l'argent à des membres de la famille dans des zones sans accès facile à la banque. Les frais sont plus élevés que Wise (2 à 5% du montant) mais la disponibilité immédiate en espèces est un avantage unique. Présence dans les bureaux de poste et certains supermarchés en France.

Option 4 : virement bancaire SWIFT classique. Via votre banque traditionnelle. Coût : 15 à 35 euros de frais fixes + 1,5 à 3% de marge de change. Délai : 3 à 5 jours ouvrés. C'est l'option la plus chère mais elle offre la traçabilité la plus forte et est exigée par certaines administrations (par exemple pour des transferts liés à des dossiers immobiliers ou successoraux).

## Sécurité et vérification des virements

Avant d'exécuter tout virement, vérifiez l'IBAN du destinataire caractère par caractère. Une erreur dans un IBAN peut envoyer vos fonds sur un compte inconnu. Les erreurs de virement sont récupérables mais la procédure est longue (plusieurs semaines).

Validation par checksum : l'IBAN contient une clé de contrôle intégrée. Le site iban.fr permet de vérifier si un IBAN est valide avant d'envoyer. Utilisez-le pour les montants importants.

Arnaques au faux RIB : des escrocs envoient des emails en se faisant passer pour votre propriétaire, votre université ou votre employeur pour changer l'IBAN de virement. Ils interceptent la communication et remplacent le RIB légitime par le leur. Si vous recevez un email vous demandant de changer l'IBAN d'un bénéficiaire existant, appelez TOUJOURS la personne par téléphone pour vérifier. Ne basez jamais un changement d'IBAN uniquement sur un email.`
  },
  {
    course_id: "9b739ac1-db20-4dd8-a950-30c533839ad2",
    title: "Les prélèvements automatiques SEPA : autoriser, gérer et contester",
    lesson_order: 3, order: 3, duration_minutes: 40,
    video_url: "https://www.youtube.com/watch?v=2mRp9KkQtVE",
    resources: JSON.stringify([
      {"title":"Service-Public – Prélèvement automatique SEPA","url":"https://www.service-public.fr/particuliers/vosdroits/F245","type":"link"},
      {"title":"EPC – Règlement SEPA Direct Debit","url":"https://www.europeanpaymentscouncil.eu","type":"link"},
      {"title":"Banque de France – Mandate SEPA","url":"https://www.banque-france.fr","type":"link"},
      {"title":"AFUB – Droits prélèvements contestés","url":"https://www.afub.org","type":"link"},
      {"title":"CAF – Mettre à jour ses informations","url":"https://www.caf.fr","type":"link"},
      {"title":"EDF – Prélèvement mensuel énergie","url":"https://monespace.edf.fr","type":"link"},
      {"title":"Service-Public – Contestation prélèvement","url":"https://www.service-public.fr/particuliers/vosdroits/F2909","type":"link"},
      {"title":"FCC – Fichier central des chèques","url":"https://www.banque-france.fr","type":"link"}
    ]),
    content: `# Les prélèvements automatiques SEPA : tout comprendre pour vous protéger

Le prélèvement automatique SEPA est la méthode standard pour payer des dépenses récurrentes en France : loyer, électricité, gaz, abonnement téléphone, internet, assurances, abonnements de streaming, frais de scolarité, mutuelles. Vous autorisez une société à prélever automatiquement sur votre compte chaque mois. C'est pratique mais il faut comprendre les règles du jeu pour ne pas se retrouver avec des prélèvements non désirés ou des frais de rejet coûteux.

## Qu'est-ce qu'un mandat de prélèvement SEPA

Un mandat de prélèvement SEPA (aussi appelé SDD – SEPA Direct Debit) est un document par lequel vous autorisez une société à débiter votre compte. Ce mandat est obligatoire : sans votre autorisation écrite (ou électronique avec signature), aucune société ne peut légalement prélever votre compte.

Le mandat contient : votre IBAN, votre nom, le nom du créancier (la société), l'identifiant du créancier (ICS), le numéro de mandat, et la date. Il est soit signé sur papier, soit accepté électroniquement via un formulaire en ligne.

Exemple concret : quand vous souscrivez un forfait Orange, on vous demande votre IBAN puis vous cochez ou signez un formulaire "j'autorise Orange à prélever X euros par mois". C'est votre mandat de prélèvement SEPA. Orange conserve ce mandat et l'utilise chaque mois pour déclencher le prélèvement.

Deux types de mandat : récurrent (prélèvement mensuel comme un loyer ou un abonnement) ou ponctuel (prélèvement unique pour un règlement occasionnel).

## Vos droits en tant que débiteur

Vous êtes informé à l'avance : le créancier vous notifie du montant et de la date de prélèvement au moins 14 jours à l'avance. Cette notification se fait généralement par email ou dans votre espace client. Si le montant change (augmentation tarifaire), la notification est obligatoire.

Vous pouvez contester tout prélèvement dans les 8 semaines. Si vous autorisez un prélèvement mais que le montant prélevé est différent de ce qui était convenu, ou si vous estimez que le prélèvement n'est pas justifié, vous avez 8 semaines après le débit pour demander à votre banque le remboursement intégral. Ce remboursement est immédiat et inconditionnel : la banque est obligée de rembourser. C'est ensuite à elle de récupérer l'argent auprès du créancier.

Délai étendu pour mandats invalides : si vous prouvez que vous n'avez jamais signé le mandat (fraude), vous avez 13 mois pour contester.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/2mRp9KkQtVE" title="Prélèvements automatiques SEPA droits et recours" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Comment gérer efficacement vos prélèvements

Créez un tableau de suivi mensuel. C'est l'outil le plus efficace pour anticiper vos dépenses. Voici ce que votre tableau doit contenir : nom du créancier, montant mensuel, date de prélèvement, et si c'est un montant fixe ou variable.

Exemple de tableau type pour étudiant :

Orange : 14,99 euros, le 5 du mois, montant fixe.
EDF : 45 euros environ, le 15 du mois, variable.
Netflix : 13,99 euros, le 3 du mois, fixe.
Assurance habitation : 12 euros, le 1er du mois, fixe.
Loyer : 450 euros, le 1er du mois, fixe (virement permanent, pas prélèvement).
Total mensuel approximatif hors loyer : 86 euros en prélèvements.

Astuce de provisionnement : maintenez toujours sur votre compte principal un solde égal à au moins la somme de tous vos prélèvements du mois suivant + 50 euros de marge. Si vos prélèvements totalisent 500 euros par mois (loyer inclus en virement), gardez au moins 550 euros sur votre compte avant le 1er de chaque mois.

## Que faire en cas de rejet de prélèvement

Si votre compte n'a pas assez d'argent et qu'un prélèvement est rejeté, deux choses se produisent :

La banque vous facture des frais de rejet : généralement 15 à 20 euros. Pour les offres sans frais de rejet (certaines néo-banques), la carte est simplement refusée mais il n'y a pas de frais additionnels.

Le créancier peut vous facturer des pénalités de retard : selon le contrat, une pénalité de 5 à 25 euros peut être appliquée.

Comment réagir après un rejet :

Régularisez immédiatement : transférez des fonds sur votre compte et contactez le créancier pour reprogrammer le prélèvement ou effectuer un paiement ponctuel.

Veillez à ce que cette situation ne se répète pas : le marquage "incidents de paiement" dans les fichiers bancaires (FCC et FICP de la Banque de France) peut affecter votre capacité à obtenir un crédit à l'avenir.

Négociez les frais : si c'est votre premier rejet, contactez votre banque et expliquez la situation. Certaines banques acceptent de rembourser les frais de rejet pour un premier incident.

## Révoquer un mandat de prélèvement

Vous pouvez annuler un mandat de prélèvement à tout moment. Deux façons :

Option A (recommandée) : résilier l'abonnement ou le contrat avec le créancier. La résiliation entraîne automatiquement l'arrêt des prélèvements. C'est la voie normale.

Option B : demander à votre banque de bloquer les prélèvements d'un créancier spécifique. Dans votre application bancaire, certaines banques permettent de bloquer un ICS (identifiant créancier). Cela empêche tout prélèvement futur. Attention : cette action ne résilie pas votre contrat avec le créancier. Si vous leur devez toujours de l'argent, ils peuvent toujours vous poursuivre ou envoyer des relances.

Important : ne révoquzez jamais un mandat pour votre loyer sans avoir prévenu votre propriétaire et réglé votre dossier. Le non-paiement de loyer a des conséquences légales bien plus graves que les frais bancaires.`
  },
  {
    course_id: "9b739ac1-db20-4dd8-a950-30c533839ad2",
    title: "La carte bancaire et son RIB virtuel : paiements en ligne et sécurité",
    lesson_order: 4, order: 4, duration_minutes: 40,
    video_url: "https://www.youtube.com/watch?v=DtKmUfznRi0",
    resources: JSON.stringify([
      {"title":"Banque de France – Sécurité des paiements","url":"https://www.banque-france.fr/fr/particuliers","type":"link"},
      {"title":"Service-Public – Carte bancaire perdue ou volée","url":"https://www.service-public.fr/particuliers/vosdroits/F19",  "type":"link"},
      {"title":"Interbank – Numéro opposition carte","url":"https://www.cbanque.com/numeros-opposition-cartes-bancaires.php","type":"link"},
      {"title":"DSP2 – Authentification forte paiements","url":"https://www.banque-france.fr/fr/particuliers/moyens-de-paiement","type":"link"},
      {"title":"CNIL – Sécurité données paiement","url":"https://www.cnil.fr","type":"link"},
      {"title":"Signal-Spam – Signaler phishing","url":"https://www.signal-spam.fr","type":"link"},
      {"title":"Cybermalveillance.gouv.fr – Fraude bancaire","url":"https://www.cybermalveillance.gouv.fr","type":"link"},
      {"title":"Carte virtuelle – Boursorama Virtuo","url":"https://www.boursorama.com","type":"link"}
    ]),
    content: `# La carte bancaire et son usage sécurisé en France : règles et protections

Votre carte bancaire est liée directement à votre compte et à votre RIB. Elle n'est pas votre IBAN mais constitue un autre moyen d'accéder à votre argent. Savoir comment l'utiliser en sécurité, comment elle fonctionne en ligne, et que faire en cas de vol est essentiel pour protéger votre argent en France.

## Les types de cartes bancaires en France

Carte à débit immédiat : chaque paiement est débité directement sur votre compte dans les 2 à 5 jours ouvrés (souvent plus vite). C'est l'option standard pour les étudiants. Vous voyez le solde exact disponible à tout moment.

Carte à débit différé : les paiements s'accumulent pendant le mois et sont débités en une seule fois à la fin du mois (généralement le 1er du mois suivant). Elle nécessite une meilleure gestion budgétaire : votre solde affiché ne reflète pas les paiements en attente. Proposée par certaines banques pour les profils avec des revenus réguliers.

Carte Visa vs Mastercard : les deux sont acceptées dans la quasi-totalité des commerces français et mondiaux. Les différences pratiques sont minimes au quotidien. Certaines offres de cashback ou d'assurance varient selon le réseau.

Niveaux de carte : Classic (la plus courante, incluse dans les offres étudiantes), Gold (avantages supplémentaires : plafonds plus élevés, assurances voyage, accès lounge aéroport), Platinum/Infinite (haut de gamme, assurances étendues, assistance mondiale, réservée aux hauts revenus).

## Les plafonds de votre carte

Votre carte a deux types de plafonds importants à connaître :

Plafond de paiement : montant maximum que vous pouvez payer par carte en 7 jours. Standard pour une carta Classic étudiant : 1000 à 2000 euros. Si vous achetez un ordinateur à 1500 euros et que votre plafond est de 1200, le paiement sera refusé ou partiel.

Plafond de retrait : montant maximum que vous pouvez retirer aux distributeurs automatiques en 7 jours. Standard : 500 à 1000 euros.

Comment augmenter temporairement vos plafonds : pour un achat exceptionnel (billet d'avion, ordinateur portable), connectez-vous à votre application bancaire et demandez une augmentation temporaire des plafonds. La plupart des banques permettent de doubler le plafond pendant 7 jours via l'app, instantanément.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/DtKmUfznRi0" title="Sécurité carte bancaire France 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## La sécurité des paiements en ligne : le 3D Secure

Pour les paiements en ligne, la directive européenne DSP2 impose une authentification forte. En pratique : après avoir entré les coordonnées de votre carte (numéro, date d'expiration, CVV), une étape supplémentaire s'impose.

Authentification par SMS : vous recevez un code OTP (One Time Password) par SMS sur votre numéro de téléphone français. Vous saisissez ce code sur le site. Durée de validité du code : usuellement 5 à 10 minutes. Sans accès à votre numéro de téléphone français, vous ne pouvez pas valider les achats en ligne. C'est pourquoi avoir un numéro français actif dès votre arrivée est critique.

Authentification par application : de plus en plus de banques (Boursorama, Hello Bank!, N26, Revolut) passent à une confirmation via notification push dans leur application bancaire. Vous recevez une notification "Confirmez votre paiement de X euros", vous appuyez "Confirmer", et c'est tout. Plus pratique que le SMS.

Carte virtuelle pour les achats en ligne : certaines banques proposent des numéros de carte virtuels uniques pour chaque achat. Revolut, N26 et Boursorama (Virtuo) offrent cette fonctionnalité. Avantage : si ce numéro virtuel est compromis, le pirate ne peut pas l'utiliser une deuxième fois.

## Que faire si votre carte est perdue ou volée

Étape 1 : faire opposition immédiatement. Deux méthodes :
Via votre application bancaire : cherchez "Bloquer ma carte" ou "Opposition". L'opposition est instantanée, 24h/24.
Par téléphone : numéro d'urgence interbancaire +33 892 705 705, disponible 24h/24, 7j/7, depuis n'importe quel pays.

Étape 2 : portez plainte. Rendez-vous au commissariat ou à la gendarmerie avec votre pièce d'identité. Le procès-verbal est important pour prouver la fraude à votre banque.

Étape 3 : demandez un remboursement des opérations frauduleuses. Après opposition, vous n'êtes pas responsable des opérations effectuées avec votre carte volée. Contactez votre banque avec les relevés montrant les opérations frauduleuses et le numéro de votre plainte.

Franchise : avant la mise en opposition, vous pouvez être tenu responsable des opérations frauduleuses jusqu'à 50 euros maximum (franchise légale en France). Au-delà, la banque assume la responsabilité (sauf si la fraude résulte de votre négligence grave : code PIN communiqué, etc.).

## Phishing et fraude à la carte en France

Le phishing bancaire (hameçonnage) est fréquent en France. Des emails ou SMS imitant votre banque vous demandent de "confirmer vos coordonnées bancaires" ou de "valider une opération suspecte". Ils copient les logos et le design de BNP, Société Générale, CAF, Ameli.

Comment reconnaître un phishing : l'adresse email de l'expéditeur est suspecte (ex: support@bnp-paribas-securite.net au lieu de @bnpparibas.fr). Il y a des fautes d'orthographe ou une formulation inhabituelle. On vous demande votre code PIN, vos codes de connexion ou votre numéro complet de carte.

Règle absolue : votre banque ne vous demandera JAMAIS votre code PIN par email, SMS ou téléphone. Si quelqu'un vous le demande, c'est une arnaque à 100%.

Que faire si vous avez cliqué sur un lien suspect : changez immédiatement votre mot de passe via un appareil différent et en tapant directement l'URL de votre banque dans votre navigateur. Appelez votre banque pour signaler l'incident. Signalez sur cybermalveillance.gouv.fr.`
  },
  {
    course_id: "9b739ac1-db20-4dd8-a950-30c533839ad2",
    title: "Communiquer son RIB aux administrations françaises : CAF, CROUS, Sécu",
    lesson_order: 5, order: 5, duration_minutes: 45,
    video_url: "https://www.youtube.com/watch?v=9SzQ7TkZ8qM",
    resources: JSON.stringify([
      {"title":"CAF – Mettre à jour coordonnées bancaires","url":"https://www.caf.fr","type":"link"},
      {"title":"CROUS – MON ESPACE CROUS bourse","url":"https://www.messervices.etudiant.gouv.fr","type":"link"},
      {"title":"Ameli – CPAM modifier RIB","url":"https://www.ameli.fr","type":"link"},
      {"title":"Impots.gouv.fr – Compte bancaire remboursement","url":"https://www.impots.gouv.fr","type":"link"},
      {"title":"Pôle Emploi – Coordonnées bancaires","url":"https://www.pole-emploi.fr","type":"link"},
      {"title":"URSSAF – Auto-entrepreneur coordonnées","url":"https://www.urssaf.fr","type":"link"},
      {"title":"Service-Public – APL domiciliation","url":"https://www.service-public.fr/particuliers/vosdroits/F12006","type":"link"},
      {"title":"FranceConnect – Accès services administratifs","url":"https://franceconnect.gouv.fr","type":"link"}
    ]),
    content: `# Communiquer votre RIB aux administrations françaises : guide pratique complet

Avoir un compte bancaire avec IBAN français est une condition nécessaire mais pas suffisante. Vous devez également communiquer cet IBAN aux bonnes administrations au bon moment. Des milliers d'étudiants étrangers en France perdent des centaines d'euros chaque année simplement parce qu'ils ont communiqué leur IBAN trop tard ou au mauvais endroit.

## CAF : enregistrer son RIB pour recevoir l'APL

La CAF (Caisse d'Allocations Familiales) verse les allocations logement (APL, ALS) uniquement sur un IBAN enregistré dans votre espace personnel. Voici la procédure exacte :

Accédez à votre espace sur caf.fr : si vous n'avez pas encore de compte CAF, créez-en un lors de votre première demande d'APL. Utilisez FranceConnect (votre compte CROUS ou impots.gouv.fr) pour accélérer la création.

Enregistrez votre RIB : dans votre espace personnel CAF, section "Mes informations", puis "Mes coordonnées bancaires". Saisissez manuellement votre IBAN (27 caractères pour un IBAN français) ou uploadez votre RIB en PDF. La CAF vérifie votre IBAN auprès de la banque : délai de vérification de 3 à 7 jours ouvrés. Une fois validé, les paiements APL sont programmés.

Quand communiquer votre RIB à la CAF : le plus tôt possible après l'ouverture de votre compte. Idéalement dans les 3 premiers jours suivant la réception de votre IBAN. Chaque semaine de retard = un versement APL décalé.

Que faire si vous changez de compte bancaire : dans votre espace CAF, mettez à jour les coordonnées bancaires dès l'ouverture du nouveau compte. La CAF a besoin de 5 à 10 jours pour effectuer le changement. Pendant cette période, le versement peut être en attente.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/9SzQ7TkZ8qM" title="Communiquer RIB aux administrations françaises" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## CROUS : enregistrer son RIB pour la bourse

Le CROUS verse les bourses sur campus sur l'IBAN que vous avez renseigné dans votre dossier. En pratique, vous communiquez votre IBAN lors du dépôt de votre dossier de bourse sur messervices.etudiant.gouv.fr.

Si vous n'avez pas encore d'IBAN au moment du dépôt de dossier (le dossier est à déposer avant le 31 mai et vous arrivez en France en septembre) : vous pouvez compléter ou mettre à jour votre IBAN sur messervices.etudiant.gouv.fr après votre arrivée. La section "Ma bourse" permet de saisir ou modifier les coordonnées bancaires.

Délai de mise à jour : 5 à 15 jours ouvrés entre la saisie d'un nouveau RIB et le premier versement de bourse, selon les périodes de charge administrative du CROUS.

Important : le CROUS n'accepte que les IBAN français (FR...). Un IBAN N26 (DE) ou Revolut (LT) sera rejeté ou mettra en attente le versement de la bourse.

## Ameli (CPAM) : enregistrer son RIB pour les remboursements santé

La CPAM (Caisse Primaire d'Assurance Maladie) rembourse vos frais de santé directement sur votre compte bancaire. Sans IBAN enregistré, vous recevez des chèques... ce qui est moins pratique.

Procédure : connectez-vous sur ameli.fr avec vos identifiants AMELI ou via FranceConnect. Section "Mes paiements" ou "Mes coordonnées", puis "Modifier mes coordonnées bancaires". Saisissez votre IBAN. La mise à jour prend 5 à 10 jours.

Si vous n'êtes pas encore inscrit à la CPAM : lors de votre inscription à la sécurité sociale étudiante (sur ameli.fr ou via votre université), le formulaire d'inscription inclut un champ IBAN.

## Impôts : enregistrer son RIB pour les remboursements fiscaux

Sur impots.gouv.fr, votre espace personnel "Particulier" comprend une section dédiée aux coordonnées bancaires pour les remboursements d'impôts. Si vous êtes étudiant boursier ou avec peu de revenus, vous pouvez être en situation de remboursement de TVA ou d'excédent de prélèvements.

La mise à jour du RIB sur impots.gouv.fr ne nécessite pas de justificatif : saisissez simplement votre IBAN.

## Autres organismes clés

Pôle Emploi (maintenant France Travail) : si vous travaillez puis perdez votre emploi, your indemnités chômage sont versées sur l'IBAN enregistré avec France Travail. Communiquez votre RIB lors de votre inscription.

URSSAF : si vous avez le statut d'auto-entrepreneur pour du travail indépendant (cours particuliers, petits jobs), l'URSSAF peut vous contacter pour des régularisations. Votre IBAN dans votre espace URSSAF permet de gérer les prélèvements de cotisations.

## La matrice des délais de traitement par organisme

CAF : 3 à 7 jours pour validation RIB, 5 à 15 jours pour premier versement après validation.
CROUS : 5 à 15 jours pour mise à jour, versement au prochain cycle (mensuel).
CPAM : 5 à 10 jours pour prise en compte, remboursements suivants sur le nouveau compte.
Impôts : immédiat pour la mise à jour, remboursements selon calendrier fiscal.
France Travail : 3 à 5 jours, indemnités au prochain versement.

## Erreurs fréquentes à éviter

Erreur n°1 : oublier de mettre à jour le RIB après changement de banque. Si vous changez de banque mais oubliez de mettre à jour la CAF, vos APL continuent à être virées sur votre ancien compte. Si l'ancien compte est fermé, les virements échouent et les APL sont mises en attente, parfois perdues pour la période.

Erreur n°2 : entrer un IBAN avec des espaces ou des tirets. Sur certains formulaires, les espaces interrompent la validation. Entrez l'IBAN comme une chaîne continue : FR7630004028400001234567850, pas FR76 3000 4028 4000 0123 4567 850.

Erreur n°3 : entrer le BIC à la place de l'IBAN. Ces deux informations sont différentes. L'IBAN identifie votre compte. Le BIC identifie votre banque. Assurez-vous de saisir le bon numéro dans le bon champ.`
  },
  {
    course_id: "9b739ac1-db20-4dd8-a950-30c533839ad2",
    title: "Chèques, espèces et autres moyens de paiement en France",
    lesson_order: 6, order: 6, duration_minutes: 40,
    video_url: "https://www.youtube.com/watch?v=KnX7RFwhGXo",
    resources: JSON.stringify([
      {"title":"Banque de France – Chèques et espèces","url":"https://www.banque-france.fr/fr/particuliers","type":"link"},
      {"title":"Service-Public – Chèque bancaire","url":"https://www.service-public.fr/particuliers/vosdroits/F2376","type":"link"},
      {"title":"Banque de France – Fichier FCC","url":"https://www.banque-france.fr/fr/particuliers","type":"link"},
      {"title":"Lydia / Sumeria – Paiement entre amis","url":"https://www.sumeria.eu","type":"link"},
      {"title":"PayPal France – Protection acheteur","url":"https://www.paypal.com/fr","type":"link"},
      {"title":"Apple Pay – Paiement mobile","url":"https://www.apple.com/fr/apple-pay","type":"link"},
      {"title":"Google Pay – Portefeuille numérique","url":"https://pay.google.com","type":"link"},
      {"title":"CB (Carte Bleue) – Réseau France","url":"https://www.cartes-bancaires.com","type":"link"}
    ]),
    content: `# Chèques, espèces et paiements mobiles en France : le guide complet

La France utilise encore plusieurs moyens de paiement en parallèle de la carte bancaire. Le chèque est toujours légal et utilisé dans certaines situations. Les espèces sont acceptées partout jusqu'à une certaine limite. Les paiements mobiles (Apple Pay, Google Pay) se généralisent. Comprendre chaque moyen vous permet de ne jamais être pris au dépourvu.

## Le chèque en France : encore vivant mais en déclin

La France était jusqu'à récemment le pays européen qui utilisait le plus les chèques. Malgré leur déclin, ils restent utilisés dans plusieurs situations pratiques : paiement de loyer chez les propriétaires qui le préfèrent, caution de location de voiture ou d'équipement, paiement d'un artisan ou d'un médecin.

Comment fonctionne un chèque : un chéquier est un carnet de formules pré-imprimées avec vos coordonnées bancaires (IBAN, BIC, nom). Quand vous écrivez un chèque, vous ordonnez à votre banque de payer le montant indiqué au bénéficiaire mentionné.

Pour remplir un chèque correctement : mettez la date du jour en haut à droite. Écrivez le montant en chiffres dans la petite case (ex : 450,00). Écrivez le montant en lettres sur la ligne centrale (ex : quatre cent cinquante euros). Inscrivez le nom du bénéficiaire précédé de "à l'ordre de" (ex : à l'ordre de Pierre Martin). Signez en bas à droite avec votre signature habituelle.

Délai de traitement d'un chèque : le bénéficiaire dépose le chèque dans sa banque, qui contacte votre banque. Le débit sur votre compte prend 2 à 5 jours ouvrés.

Provision du chèque : vous devez avoir les fonds disponibles sur votre compte au moment où le bénéficiaire dépose le chèque. Un chèque sans provision (chèque non approvisionné) est une fraude en France. La Banque de France vous inscrit au Fichier Central des Chèques (FCC) et vous interdit d'émettre des chèques pendant 5 ans. C'est une situation très problématique à éviter absolument.

Chéquier pour les locataires : certains propriétaires exigent un chèque de caution (dépôt de garantie) à la signature du bail. Votre banque vous envoie un chéquier sur simple demande, gratuitement. Délai : 5 à 10 jours.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/KnX7RFwhGXo" title="Chèques espèces paiements mobiles France 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les espèces en France : règles et limitations

Les espèces sont acceptées dans tous les commerces français mais des limites légales s'appliquent.

Plafond pour les paiements en espèces entre particuliers : pas de plafond légal entre personnes physiques en France. Vous pouvez théoriquement payer un appartement en espèces. Cependant, les banques sont obligées de signaler les espèces en grande quantité aux autorités anti-blanchiment (TRACFIN). En pratique, le plafond raisonnable est de 1000 euros.

Plafond pour les paiements en espèces vers un professionnel : 1000 euros maximum si vous êtes résident fiscal français ou si le professionnel est établi en France. Si vous êtes non-résident : 15 000 euros. Au-delà, le professionnel est légalement obligé de refuser les espèces.

Retrait d'espèces : la plupart des cartes bancaires étudiantes autorisent des retraits dans les distributeurs automatiques. Dans le réseau de votre banque, les retraits sont généralement gratuits. En dehors du réseau, des frais de 0 à 1 euro par retrait peuvent s'appliquer. Avec Revolut Standard : 5 retraits gratuits ou 200 euros par mois, ensuite frais de 2%.

Où retirer des espèces en France : distributeurs automatiques (DAB) de toutes les banques, bureaux de poste, Nickel dans les tabacs.

## Paiements mobiles : Apple Pay et Google Pay

Les paiements sans contact via smartphone sont de plus en plus utilisés en France. La plupart des banques françaises sont compatibles avec Apple Pay (iPhone) et Google Pay (Android).

Configuration : ouvrez votre application bancaire, cherchez "Ajouter à Apple Pay/Google Pay". Votre carte est liée à votre portefeuille numérique. Pour payer, approchez votre téléphone du terminal sans contact et confirmez par Face ID, Touch ID ou code.

Avantages : plus sécurisé qu'une carte physique (tokenisation : le vrai numéro de carte n'est jamais transmis au commerçant). Pratique si vous avez oublié votre portefeuille. Fonctionne même avec plusieurs cartes chargées.

Limites : le plafond de paiement mobile sans contact en France est de 150 euros (en 2025). Au-delà, authentification forte obligatoire.

## Virement entre amis : Lydia/Sumeria, Revolut, PayPal

Pour se rembourser entre amis (partager une note de restaurant, rembourser un billet de concert), plusieurs applications existent :

Sumeria (ex-Lydia) : très populaire en France. L'application permet des virements instantanés entre utilisateurs Sumeria. IBAN français pour les virements vers des non-utilisateurs. Gratuit pour les envois entre particuliers.

Revolut : virements instantanés entre utilisateurs Revolut, gratuits. Vers l'extérieur : virement SEPA standard.

PayPal : universel et accepté partout, mais frais de 3,4% + 0,35 euro pour les paiements "biens et services". Entre amis via "Famille et amis" : gratuit mais sans protection acheteur.

Amazon Pay, Google Pay, Apple Pay Cash : solutions intégrées dans les écosystèmes correspondants, moins universelles.

La recommandation pour les étudiants en France : installez Sumeria pour les remboursements entre amis (c'est la norme en France), et Revolut si vous avez des amis internationaux. Pour les montants importants, le virement bancaire classique reste le plus traçable.`
  }
]
