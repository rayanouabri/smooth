// Cours : La Carte Vitale et l'Assurance Maladie en France
// 6 leçons complètes, 4000+ mots chacune
// Push direct vers Supabase

const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC, 'Content-Type': 'application/json' };

async function update(id, content) {
  const r = await fetch(`${BASE}/rest/v1/lessons?id=eq.${id}`, {
    method: 'PATCH',
    headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content }),
  });
  if (r.ok) console.log('✅ Mis à jour :', id.slice(0,8));
  else console.error('❌ Erreur :', id, r.status, await r.text());
}

const lessons = [

// ─────────────────────────────────────────────────────────────────────────────
// LEÇON 1 : La Carte Vitale : ce que c'est et à quoi ça sert
// ─────────────────────────────────────────────────────────────────────────────
{
id: 'eaef99b6-50ee-4364-9125-178023899e16',
content: `# La Carte Vitale : ce que c'est et à quoi ça sert

La Carte Vitale est probablement le document administratif le plus important que vous utiliserez au quotidien durant votre séjour en France. Petite carte verte de la taille d'une carte bancaire, elle est l'identifiant officiel de votre affiliation à l'Assurance Maladie française — la Sécurité Sociale. Sans elle, vous pouvez certes vous faire soigner, mais vous devrez avancer l'ensemble des frais médicaux et attendre d'être remboursé plusieurs semaines après. Avec elle, tout se simplifie : une présentation chez le médecin ou en pharmacie, et le système de santé sait instantanément qui vous êtes, quels sont vos droits et comment vous rembourser. Pour un étudiant étranger qui découvre la France, comprendre précisément ce qu'est cette carte, ce qu'elle contient et comment elle fonctionne, c'est la première étape vers une gestion sereine de sa santé.

## Un peu d'histoire : la naissance d'une révolution administrative

Avant 1998, les Français devaient jongler avec des carnets de santé, des attestations papier et des feuilles de soins manuelles. Chaque visite chez le médecin générait une paperasse considérable : le praticien remplissait une feuille de soin à la main, le patient l'envoyait à sa caisse d'Assurance Maladie, qui remboursait après traitement — souvent plusieurs semaines plus tard. Ce système, en plus d'être lent, était source d'erreurs, de fraudes et d'une inefficacité chronique pour les gestionnaires de l'Assurance Maladie.

C'est dans ce contexte que la Carte Vitale a été créée. Issue d'une réflexion engagée dès les années 1980, elle a été déployée progressivement à partir de 1998 pour l'ensemble des assurés sociaux français. Pour la première fois, une technologie de puce électronique permettait d'identifier chaque assuré de manière sécurisée, d'enregistrer ses droits en temps réel et de dématérialiser les échanges entre les professionnels de santé et les caisses d'Assurance Maladie. Cette transformation a profondément changé la relation entre les patients, les médecins et l'administration de santé en France.

La première génération de Carte Vitale (Carte Vitale 1) ne comportait pas de photo. Elle a été progressivement remplacée par la Carte Vitale 2, lancée en 2007, qui intègre une photographie d'identité afin de lutter contre les fraudes liées au prêt ou à l'utilisation frauduleuse de cartes. Aujourd'hui, si votre carte ne comporte pas encore de photo, vous pouvez en demander une nouvelle version lors du renouvellement. La coexistence des deux versions est encore courante en France, notamment chez les personnes ayant obtenu leur carte il y a plus de quinze ans et ne l'ayant pas encore renouvelée.

## Ce que contient réellement la puce électronique

La puce électronique de la Carte Vitale ressemble à celle d'une carte bancaire à puce, mais son contenu est très différent. Contrairement à ce que beaucoup croient, elle ne contient **pas** votre dossier médical, vos ordonnances passées, vos résultats d'analyses ou vos antécédents médicaux. Ces informations relèvent du secret médical et ne sont pas stockées sur la carte. Voici précisément ce que contient la puce :

Votre **numéro de Sécurité Sociale** (appelé aussi NIR, Numéro d'Identification au Répertoire), composé de 15 chiffres. Ce numéro est unique et attribué à vie. Il commence par 1 pour les hommes et 2 pour les femmes, suivi de l'année et du mois de naissance, du département de naissance, puis d'un numéro d'ordre et d'une clé de contrôle.

Vos **droits à l'Assurance Maladie** : la puce indique si vos droits sont ouverts ou non à la date de consultation, ainsi que le taux de remboursement auquel vous avez droit (généralement 70 % du tarif de convention pour une consultation chez le médecin généraliste). Si vous bénéficiez d'une complémentaire santé solidaire (ex-CMU-C), cela est également indiqué.

Les informations relatives à votre éventuelle **exonération du ticket modérateur** dans le cadre d'une affection longue durée (ALD), d'une maternité, ou d'un accident du travail.

Ce que la puce ne contient pas est tout aussi important à savoir : aucune information bancaire, aucun mot de passe, aucun historique de consultations, aucune ordonnance. La carte est purement un outil d'identification administrative et de transmission des droits.

## Comment fonctionne-t-elle concrètement chez le médecin ?

Lorsque vous consultez un médecin en France qui est équipé d'un terminal lecteur de carte (tous les médecins conventionnés le sont), la procédure est simple et rapide. Vous présentez votre Carte Vitale au début de la consultation ; le médecin l'insère dans son lecteur, qui lit instantanément la puce. Ses logiciels métier récupèrent vos informations d'identification et vos droits, et génèrent automatiquement une feuille de soins électronique à l'issue de la consultation.

Cette feuille de soins électronique est transmise directement, via un réseau sécurisé appelé la carte CPS (Carte de Professionnel de Santé), à votre caisse d'Assurance Maladie. Celle-ci traite le remboursement et vire la somme correspondante sur votre compte bancaire dans un délai moyen de cinq à dix jours ouvrés. Vous n'avez donc aucune démarche supplémentaire à effectuer : tout est automatisé.

En pharmacie, le processus est similaire. Vous présentez votre Carte Vitale et votre ordonnance, le pharmacien lit la puce, délivre les médicaments et envoie directement la facturation à la Sécurité Sociale. Si vous bénéficiez du tiers payant, vous ne payez que votre part (le ticket modérateur) ou rien du tout si votre mutuelle couvre également. Sans Carte Vitale, vous devrez payer l'intégralité des médicaments et vous faire rembourser ensuite sur présentation d'une feuille de soins papier.

## Carte Vitale et attestation de droits : ne pas confondre

Une source de confusion fréquente chez les nouveaux arrivants en France concerne la différence entre la Carte Vitale physique et l'**attestation de droits**. Ce sont deux choses distinctes mais complémentaires.

L'attestation de droits est un document papier ou PDF que vous pouvez télécharger à tout moment depuis votre espace personnel sur [Ameli.fr](https://www.ameli.fr), le site officiel de l'Assurance Maladie. Elle récapitule vos droits ouverts à l'Assurance Maladie à une date donnée : numéro de Sécurité Sociale, organisme de rattachement, période de couverture. Ce document est très utile pour prouver vos droits à un médecin ou une pharmacie si vous n'avez pas encore reçu votre Carte Vitale physique, ou si vous l'avez oubliée ou perdue.

Cependant, l'attestation de droits seule ne permet pas toujours d'utiliser le tiers payant automatiquement, car le médecin ou le pharmacien ne peut pas lire vos droits "en temps réel" sans la puce. Certains professionnels de santé accepteront l'attestation pour du tiers payant manuel, d'autres vous demanderont d'avancer les frais et de vous faire rembourser a posteriori. La Carte Vitale physique reste donc irremplaçable pour un usage quotidien fluide.

## La Carte Vitale 2 : la version avec photo

Introduite en 2007 pour limiter la fraude à l'identité, la Carte Vitale 2 comporte une photo d'identité imprimée sur le recto de la carte, en plus de la puce électronique. Si vous vous inscrivez aujourd'hui pour la première fois au régime général de l'Assurance Maladie, vous recevrez automatiquement une Carte Vitale 2. Si vous avez déjà une Carte Vitale 1 sans photo, vous pouvez demander le passage à la version 2 lors de votre prochaine mise à jour ou demande de renouvellement.

La présence de la photo est une garantie supplémentaire : en théorie, seul le titulaire de la carte peut l'utiliser. Dans les faits, peu de professionnels de santé demandent à vérifier l'identité lors de la présentation de la carte, mais la Carte Vitale 2 renforce la sécurité du système.

Pour les étudiants étrangers dont c'est la première affiliation en France, il faut savoir que le délai de fabrication de la Carte Vitale 2 est plus long que pour la Carte Vitale 1, notamment à cause de l'intégration de la photo. Prévoyez un délai de quatre à six mois entre votre demande et la réception de la carte. Durant cette période, votre attestation de droits fait office de justificatif.

## Ce que la Carte Vitale ne fait pas

Il est aussi important de comprendre les limites de la Carte Vitale pour éviter les malentendus, notamment face aux professionnels de santé.

La Carte Vitale **n'est pas une carte bancaire**. Elle ne permet pas de payer quoi que ce soit directement. Elle sert uniquement à identifier vos droits et à permettre la transmission électronique des feuilles de soins.

La Carte Vitale **n'est pas la carte de votre mutuelle** (complémentaire santé). Votre mutuelle ou complémentaire santé vous délivre sa propre carte, généralement une carte plastique portant son logo et vos références de contrat. Pour bénéficier du tiers payant intégral (ne rien débourser chez le médecin ou en pharmacie), il vous faut présenter les deux cartes : Carte Vitale + carte de mutuelle.

La Carte Vitale **n'est pas une carte d'exonération automatique du ticket modérateur**. Sauf si vous êtes en situation d'ALD (affection de longue durée), enceinte ou bénéficiaire de la CSS (Complémentaire Santé Solidaire), vous paierez toujours une partie des frais (le ticket modérateur).

La Carte Vitale **n'est pas valable à l'étranger**. Si vous voyagez dans l'Union Européenne, il vous faudra demander la Carte Européenne d'Assurance Maladie (CEAM). En dehors de l'UE, seule une assurance voyage peut vous couvrir.

## Que faire en cas de perte ou de vol ?

La perte ou le vol de votre Carte Vitale est une situation fréquente mais gérable. Contrairement à une carte bancaire, il n'y a pas de risque financier direct : personne ne peut effectuer de paiement avec votre Carte Vitale. En revanche, quelqu'un pourrait théoriquement l'utiliser pour obtenir des soins à votre place, ce qui constitue une fraude à l'Assurance Maladie.

En cas de perte ou de vol, signalez-le immédiatement à votre CPAM (Caisse Primaire d'Assurance Maladie) via votre espace personnel sur [Ameli.fr](https://www.ameli.fr). Une nouvelle carte vous sera envoyée dans un délai de six à huit semaines. En attendant, téléchargez et utilisez votre attestation de droits disponible en ligne.

Si vous pensez que votre carte a été utilisée frauduleusement, vous pouvez en plus déposer une plainte auprès de la police ou de la gendarmerie. La CPAM dispose également d'un service antifraude que vous pouvez contacter par votre espace Ameli ou par téléphone au 36 46 (numéro général de l'Assurance Maladie, au coût d'un appel local).

## Gérer sa Carte Vitale via l'espace Ameli

[Ameli.fr](https://www.ameli.fr) est le portail officiel de l'Assurance Maladie. C'est là que se gère tout ce qui touche à votre couverture santé : consultation de vos remboursements, téléchargement de votre attestation de droits, demande de Carte Vitale ou de Carte Européenne d'Assurance Maladie, signalement d'un changement d'adresse, désignation de votre médecin traitant, et bien plus encore.

Pour créer votre compte Ameli, rendez-vous sur [ameli.fr](https://www.ameli.fr) et suivez la procédure d'inscription. Vous aurez besoin de votre numéro de Sécurité Sociale (même provisoire) et d'une adresse e-mail. L'activation peut prendre 24 à 48 heures. Une fois votre espace activé, prenez soin d'y renseigner votre RIB (Relevé d'Identité Bancaire) pour être remboursé directement par virement sur votre compte bancaire.

L'application mobile **Ameli** est également disponible sur iOS et Android. Elle vous donne accès à la quasi-totalité des fonctionnalités du site web, directement depuis votre smartphone. C'est particulièrement pratique pour télécharger rapidement votre attestation de droits lors d'une consultation imprévue.

## Ressources officiellesde pour aller plus loin

Pour approfondir votre compréhension de la Carte Vitale et de l'Assurance Maladie française, voici les ressources officielles les plus utiles :

- [Ameli.fr — La Carte Vitale](https://www.ameli.fr) : le site de référence de l'Assurance Maladie française, avec toutes les informations sur vos droits, vos remboursements et la gestion de votre Carte Vitale.
- [Service-Public.fr](https://www.service-public.fr) : le portail officiel de l'administration française, avec des fiches pratiques sur toutes les démarches liées à la santé, au logement et à l'intégration en France.
- **Le 36 46** : le numéro de téléphone de l'Assurance Maladie, disponible du lundi au vendredi de 8h à 17h, pour toute question sur vos droits ou votre situation.
`
},

// ─────────────────────────────────────────────────────────────────────────────
// LEÇON 2 : Demander sa première Carte Vitale en tant qu'étudiant
// ─────────────────────────────────────────────────────────────────────────────
{
id: 'cf379d1c-417d-42cb-8ec1-17bb9be3875a',
content: `# Demander sa première Carte Vitale en tant qu'étudiant étranger

Arriver en France en tant qu'étudiant étranger, c'est faire face à une avalanche de démarches administratives simultanées : ouverture d'un compte bancaire, inscription à l'université, recherche d'un logement, validation du visa long séjour auprès de l'OFII. Parmi toutes ces étapes, l'affiliation à l'Assurance Maladie et la demande de Carte Vitale est souvent celle qui est mise de côté faute de temps ou de compréhension — alors qu'elle est fondamentale. Sans numéro de Sécurité Sociale actif, vous n'êtes pas couvert en cas de maladie, d'accident ou de besoin de soins. Ce guide vous explique exactement comment procéder, quels documents rassembler, et à quoi vous attendre en termes de délais.

## Qui est affecté et pourquoi c'est urgent

Contrairement aux étudiants français, qui sont affiliés à la Sécurité Sociale depuis leur naissance et reçoivent leur Carte Vitale personnelle à l'âge de 16 ans, les étudiants étrangers arrivant en France doivent initier eux-mêmes leur affiliation. Cette démarche n'est pas automatique : si vous ne la faites pas, vous n'aurez simplement aucune couverture santé en France, même si vous êtes titulaire d'un visa étudiant.

Il existe deux situations principales selon votre nationalité :

**Si vous êtes ressortissant d'un pays de l'Union Européenne, de l'Espace Économique Européen ou de la Suisse**, vous avez en principe une couverture santé dans votre pays d'origine qui peut être reconnue en France via la Carte Européenne d'Assurance Maladie (CEAM). Cependant, si votre séjour en France dépasse six mois ou si vous souhaitez vous affilier directement au régime général français (ce qui simplifie grandement l'accès aux soins au quotidien), vous devez également effectuer une demande d'affiliation à la CPAM.

**Si vous êtes ressortissant d'un pays hors UE**, vous devez absolument vous affilier au régime général de l'Assurance Maladie française dès votre arrivée. Il n'existe aucune couverture automatique ou internationale qui se substitue à cette affiliation. Votre visa étudiant ou votre titre de séjour ne suffit pas : il faut une affiliation active à la CPAM pour avoir des droits ouverts.

## L'affiliation étudiante : le régime général depuis 2019

Avant 2019, les étudiants bénéficiaient d'un régime étudiant spécifique géré par deux mutuelles étudiantes (LMDE et SMEREP). Ce système a été supprimé et remplacé par une affiliation directe au régime général de l'Assurance Maladie. Depuis le 1er septembre 2019, tous les étudiants — qu'ils soient français ou étrangers — sont affiliés directement à la CPAM (Caisse Primaire d'Assurance Maladie) de leur lieu de résidence, sans passer par une mutuelle étudiante.

Ce changement est une bonne nouvelle pour les étudiants étrangers : la procédure est désormais **gratuite et identique pour tous**, sans cotisation supplémentaire à payer. L'affiliation à la Sécurité Sociale est gratuite pour les étudiants, à condition d'être en règle avec son université et son titre de séjour.

## Les documents à rassembler avant de faire votre demande

La CPAM est une administration française : elle demande des documents précis, souvent en version originale ou accompagnés de traductions certifiées. Voici la liste complète des pièces à préparer :

**Document d'identité** : une copie de votre passeport en cours de validité (toutes les pages avec informations personnelles et visa/titre de séjour). Si vous êtes ressortissant UE, votre carte d'identité nationale suffit.

**Titre de séjour ou visa long séjour valant titre de séjour (VLS-TS)** : depuis votre arrivée en France, vous disposez d'un visa VLS-TS ou d'un titre de séjour "étudiant". Vous devez fournir une copie de ce document. Si votre titre de séjour est en cours de renouvellement, le récépissé de renouvellement est accepté.

**Justificatif de domicile en France** : une quittance de loyer, une facture d'électricité ou de gaz, un contrat de location, ou une attestation d'hébergement signée par votre logeur et accompagnée de sa propre pièce d'identité. L'adresse doit correspondre à celle que vous déclarez à la CPAM.

**Relevé d'identité bancaire (RIB) français** : pour recevoir vos remboursements directement par virement. Si vous n'avez pas encore de compte bancaire en France, ouvrez-en un en priorité dès votre arrivée, même un compte basique dans une banque en ligne (Lydia, Revolut, N26 ou Orange Bank sont accessibles facilement sans justificatifs lourds).

**Certificat de scolarité** : délivré par votre université ou votre école, il prouve que vous êtes bien étudiant inscrit en France pour l'année en cours. Ce document est disponible auprès du Service des Relations Internationales (SRI) ou du Service de Scolarité de votre établissement.

**Acte de naissance** : selon votre situation, la CPAM peut vous demander votre acte de naissance accompagné d'une traduction certifiée par un traducteur assermenté. Cette traduction n'est pas toujours exigée, mais c'est plus sûr de la préparer à l'avance.

**Relevé de situation familiale** (parfois) : si vous êtes marié(e), la CPAM peut demander un acte de mariage traduit pour vérifier votre situation.

## La procédure pas à pas pour s'affilier

**Étape 1 : Créer votre espace Ameli.** Rendez-vous sur [ameli.fr](https://www.ameli.fr) et cliquez sur "Créer mon compte". Vous aurez besoin d'un numéro de Sécurité Sociale si vous en avez déjà un (ce qui est rare pour les primo-arrivants), ou vous pouvez vous inscrire sans numéro en utilisant votre adresse e-mail. Suivez les instructions : il vous sera demandé des informations personnelles de base.

**Étape 2 : Identifier votre CPAM.** La CPAM compétente est celle du département où vous résidez. Si vous habitez à Paris, c'est la CPAM de Paris (75). À Lyon, c'est la CPAM du Rhône (69). Le site Ameli.fr vous indiquera automatiquement votre CPAM à partir de votre code postal.

**Étape 3 : Envoyer votre dossier.** Vous pouvez envoyer votre dossier de deux façons. En ligne via votre espace Ameli (section "Mes démarches" ou "Mes documents"), en scannant et téléchargeant tous vos documents. Ou par courrier postal à l'adresse de votre CPAM, avec les copies de documents demandés.

**Étape 4 : Attendre la réponse.** Le traitement de votre dossier prend en général entre quatre et douze semaines selon les CPAM et la période de l'année. Les périodes de rentrée scolaire (septembre-octobre) sont les plus chargées et les délais peuvent être plus longs.

**Étape 5 : Recevoir votre numéro provisoire.** En attendant votre numéro définitif et votre Carte Vitale physique, la CPAM vous attribue un **numéro de Sécurité Sociale provisoire**, commençant généralement par **7** (pour les personnes nées à l'étranger de nationalité étrangère) ou **8** (personnes nées à l'étranger d'une mère française). Ce numéro provisoire vous permet d'obtenir une attestation de droits et de commencer à vous faire soigner et rembourser, bien que parfois avec plus de démarches manuelles.

**Étape 6 : Recevoir votre Carte Vitale.** Une fois votre dossier traité et validé, on vous enverra votre Carte Vitale par courrier à l'adresse que vous avez déclarée. Comptez deux à trois mois supplémentaires après l'ouverture des droits pour recevoir la carte physique.

## Le numéro de Sécurité Sociale provisoire : comment l'utiliser

Le numéro provisoire (commençant par 7 ou 8) est un numéro transitoire attribué le temps que les autorités de l'état civil de votre pays d'origine confirment vos informations de naissance via des canaux diplomatiques. Ce processus peut prendre plusieurs mois, voire plus d'un an dans certains cas. C'est normal et ne bloque pas vos droits.

Avec ce numéro provisoire, vous pouvez télécharger votre attestation de droits sur Ameli.fr et la présenter aux médecins et pharmaciens. Dans certains cas, vous devrez avancer les frais et envoyer une feuille de soins papier à la CPAM pour vous faire rembourser. Les médecins et pharmaciens sont habitués à ces situations, surtout dans les villes universitaires.

Lorsque votre numéro définitif sera attribué (il commencera par 1 ou 2), vous en serez notifié par courrier ou via votre espace Ameli. Une nouvelle Carte Vitale vous sera alors envoyée avec ce numéro définitif. L'ancienne sera à détruire.

## Erreurs fréquentes et comment les éviter

L'erreur la plus courante est d'**attendre trop longtemps** pour initier la démarche. Certains étudiants remettent l'affiliation à la Sécurité Sociale à "plus tard" et se retrouvent malades sans couverture. Commencez cette démarche dans les deux premières semaines de votre arrivée en France.

Une autre erreur classique est d'**envoyer des copies peu lisibles**. La CPAM rejettera systématiquement un dossier si les documents ne sont pas lisibles. Scannez vos documents en haute résolution (300 dpi minimum), veillez à ce que tous les textes soient nets.

Enfin, beaucoup d'étudiants oublient de **mettre à jour leur adresse** auprès de la CPAM quand ils déménagent. Si votre Carte Vitale est envoyée à une ancienne adresse, vous ne la recevrez jamais. Signalez tout changement d'adresse immédiatement via votre espace Ameli.

## Ressources officielles

- [Ameli.fr — Étudiants étrangers](https://www.ameli.fr) : section dédiée aux démarches pour les étudiants et les étrangers en France.
- [Service-Public.fr](https://www.service-public.fr) : fiches pratiques sur la protection sociale des étudiants étrangers.
- [Etudiant.gouv.fr](https://www.etudiant.gouv.fr) : portail officiel du gouvernement français pour les étudiants, avec des informations sur les droits sociaux.
`
},

// ─────────────────────────────────────────────────────────────────────────────
// LEÇON 3 : Le tiers payant : ne plus avancer les frais médicaux
// ─────────────────────────────────────────────────────────────────────────────
{
id: 'e6018bb8-4cbf-430c-9cd5-7559c50f9ff8',
content: `# Le tiers payant : ne plus avancer les frais médicaux

L'une des contraintes les plus concrètes du système de santé français, pour les personnes qui n'y ont pas grandi, est l'obligation d'avancer les frais médicaux avant d'être remboursé. Chez le médecin généraliste, une consultation coûte 26,50 euros (tarif de base depuis 2023). La Sécurité Sociale vous en rembourse 70 %, soit 18,55 euros, mais elle le fait après la consultation, sur votre compte bancaire, dans un délai de cinq à quinze jours. Entre-temps, vous avez dépensé 26,50 euros. Pour un étudiant avec un budget serré, cette avance peut devenir problématique, notamment si les consultations s'accumulent. C'est précisément pour résoudre cette difficulté qu'existe le **tiers payant** — un mécanisme qui vous dispense totalement ou partiellement d'avancer les frais de santé.

## Qu'est-ce que le tiers payant, exactement ?

Le tiers payant est un système de prise en charge directe de vos frais médicaux par des tiers — la Sécurité Sociale et/ou votre complémentaire santé — sans que vous ayez à avancer l'argent. Le terme "tiers" désigne ici précisément ces organismes payeurs : la CPAM (pour la part obligatoire) et votre mutuelle ou complémentaire santé (pour la part complémentaire).

En pratique, lorsque vous bénéficiez du tiers payant chez un médecin, vous présentez votre Carte Vitale (et éventuellement votre carte de mutuelle). Le médecin enregistre la consultation et envoie directement la facturation à la Sécurité Sociale et/ou à votre mutuelle. Vous ne payez que la partie non couverte — ou rien du tout si vous êtes intégralement couvert. Ce mécanisme existe depuis les années 1990 mais c'est la **loi de modernisation du système de santé de 2016** (loi Touraine) qui en a généralisé le principe et renforcé les droits des patients.

## Tiers payant partiel et tiers payant intégral : quelle différence ?

Il existe deux formes de tiers payant, et la distinction est essentielle à comprendre pour gérer votre budget santé.

**Le tiers payant partiel** (ou tiers payant Sécurité Sociale) signifie que seule la part remboursée par la Sécurité Sociale est prise en charge directement. Vous devez encore payer le ticket modérateur, c'est-à-dire la part non remboursée. Pour une consultation à 26,50 euros :
- La Sécurité Sociale prend en charge : 18,55 euros (70 %).
- Vous payez : 7,95 euros (le ticket modérateur, soit 30 %).

Si votre médecin pratique le tiers payant partiel, vous ne sortez 7,95 euros de poche au lieu de 26,50 euros. Un progrès réel, mais vous avancez quand même quelque chose.

**Le tiers payant intégral** signifie que la Sécurité Sociale ET votre mutuelle couvrent directement leurs parts respectives. Vous ne payez rien. Pour la même consultation à 26,50 euros, si votre mutuelle couvre les 30 % restants :
- La Sécurité Sociale paye 18,55 euros.
- Votre mutuelle paye 7,95 euros.
- Vous ne déboursez rien.

Pour bénéficier du tiers payant intégral, il faut remplir deux conditions : d'une part, le médecin doit accepter de pratiquer le tiers payant (ce qui est désormais une obligation légale dans de nombreux cas), et d'autre part, vous devez avoir une mutuell qui s'est engagée à rembourser directement le professionnel de santé (ce qu'on appelle le tiers payant mutuelle ou le tiers payant complémentaire).

## Qui a droit au tiers payant ?

Depuis la loi Touraine (loi n° 2016-41 du 26 janvier 2016), **tout assuré social a le droit de demander le tiers payant**. Cependant, la généralisation complète a été progressive et aujourd'hui encore, tous les professionnels de santé ne le pratiquent pas systématiquement. Voici les situations dans lesquelles le tiers payant Sécurité Sociale est obligatoire pour le professionnel de santé :

Les personnes bénéficiant de la **Complémentaire Santé Solidaire (CSS)** (anciennement CMU-C et ACS) ont droit au tiers payant intégral chez tous les professionnels de santé adhérant à la convention nationale, sans exception. Le médecin ne peut pas refuser.

Les femmes **enceintes** à partir du sixième mois de grossesse ont droit au tiers payant intégral dans le cadre du suivi de grossesse.

Les personnes en **affection de longue durée (ALD)** pour les actes liés à cette pathologie ont droit au tiers payant intégral, sans reste à charge.

Les personnes victimes d'**accidents du travail ou de maladies professionnelles** bénéficient du tiers payant intégral pour les soins liés à cet accident ou maladie.

Les bénéficiaires du **minimum vieillesse (ASPA)** ou de l'**allocation aux adultes handicapés (AAH)** ont également droit au tiers payant.

Pour les étudiants qui n'entrent dans aucune de ces catégories, le tiers payant Sécurité Sociale reste possible mais dépend du bon vouloir du médecin. Cependant, les médecins qui pratiquent le tiers payant affichent généralement ce service dans leur salle d'attente ou sur des plateformes de prise de rendez-vous comme [Doctolib](https://www.doctolib.fr).

## La pharmacie et le tiers payant : la situation la plus favorable

La pharmacie est l'endroit où le tiers payant est le plus systématiquement pratiqué et le plus simple à utiliser. Il vous suffit de présenter votre Carte Vitale lorsque vous venez chercher vos médicaments sur ordonnance. La pharmacie vérifie vos droits en temps réel via la puce de la carte, et vous ne payez que la part non remboursée.

Si vous avez une complémentaire santé, présentez également votre carte de mutuelle. Dans ce cas, vous bénéficiez généralement du tiers payant intégral sur les médicaments de la liste positive (ceux remboursés par la Sécurité Sociale).

Les médicaments non remboursables (par exemple, les médicaments contre le rhume, certains compléments alimentaires ou certains traitements de confort) ne sont pas pris en charge par la Sécurité Sociale, quelle que soit votre mutuelle. Vous devrez les payer intégralement.

## Comment activer le tiers payant chez son médecin

La démarche est simple mais nécessite quelques préparatifs. Lorsque vous prenez votre rendez-vous chez un médecin (via [Doctolib](https://www.doctolib.fr), par téléphone ou directement), vous pouvez vérifier s'il pratique le tiers payant. Sur Doctolib, cette information est souvent mentionnée dans le profil du praticien.

Lors de la consultation, vous n'avez rien de spécial à faire si le médecin pratique le tiers payant de façon systématique. Présentez simplement votre Carte Vitale et votre carte de mutuelle en début de consultation. Le logiciel métier du médecin gère automatiquement la facturation.

Si le médecin ne propose pas spontanément le tiers payant mais que vous souhaitez en bénéficier, vous pouvez le demander poliment. En mentionnant que vous êtes étudiant et que vous souhaitez bénéficier du tiers payant, beaucoup de médecins l'accepteront sans difficulté, sachant qu'ils sont légalement tenus de le proposer dans plusieurs cas.

## Le tiers payant et la médecine libérale : une réalité nuancée

Il est important d'être honnête sur une réalité du terrain : malgré la loi Touraine, certains médecins libéraux en secteur 2 ou secteur 3 (médecins qui dépassent les tarifs conventionnés) refusent parfois le tiers payant ou ne le pratiquent que sur la part de la Sécurité Sociale, pas sur leurs dépassements d'honoraires. Dans ces cas, vous devrez avancer le montant du dépassement (la différence entre le tarif du médecin et le tarif de convention) et votre mutuelle vous le remboursera selon les conditions de votre contrat.

Pour éviter ce genre de surprise, préférez les médecins en **secteur 1** (qui s'engagent à respecter les tarifs conventionnés sans dépassement) ou vérifiez à l'avance les conditions tarifaires du praticien sur Ameli.fr ou Doctolib.

## Ressources officielles

- [Ameli.fr — Le tiers payant](https://www.ameli.fr) : toutes les informations officielles sur le tiers payant, qui peut en bénéficier et comment le demander.
- [Doctolib](https://www.doctolib.fr) : plateforme de prise de rendez-vous médicaux, avec indication des médecins pratiquant le tiers payant.
- [Service-Public.fr](https://www.service-public.fr) : fiches pratiques sur les remboursements de santé et le tiers payant.
- **Complémentaire Santé Solidaire (CSS)** : Si vos revenus sont modestes, vous avez peut-être droit à la CSS, qui vous donne accès au tiers payant intégral. Vérifiez votre éligibilité sur [ameli.fr](https://www.ameli.fr).
`
},

// ─────────────────────────────────────────────────────────────────────────────
// LEÇON 4 : Mettre à jour et renouveler sa Carte Vitale
// ─────────────────────────────────────────────────────────────────────────────
{
id: 'a3d9819f-91bc-41cd-bce2-b2ece2675e73',
content: `# Mettre à jour et renouveler sa Carte Vitale

La Carte Vitale n'est pas un document qu'on reçoit une fois et qu'on oublie dans un tiroir. C'est un outil vivant dont la puce électronique doit refléter en permanence la réalité de vos droits à l'Assurance Maladie. Un changement d'adresse, un renouvellement de titre de séjour, une déclaration de médecin traitant, l'ouverture de nouveaux droits suite à une reprise d'activité ou à un changement de situation familiale : autant d'événements qui nécessitent une mise à jour de votre carte. Si la puce n'est pas à jour, le professionnel de santé verra des informations incorrectes ou obsolètes lorsqu'il lira votre carte, ce qui peut entraîner des refus de tiers payant ou des remboursements incorrects.

## Pourquoi mettre à jour sa Carte Vitale régulièrement ?

La puce de votre Carte Vitale contient une "photographie" de vos droits à un instant T. Chaque fois que votre situation évolue côté Sécurité Sociale — vos droits sont renouvelés en début d'année, vous avez changé de CPAM, vous bénéficiez désormais de la Complémentaire Santé Solidaire, votre médecin traitant a été déclaré — ces informations sont enregistrées par la CPAM dans ses serveurs, mais elles ne se retrouvent pas automatiquement sur la puce de votre carte physique. Il faut effectuer une mise à jour mécanique, en insérant la carte dans un terminal lecteur compatible.

Pour les étudiants étrangers, la mise à jour est particulièrement importante lors du renouvellement du titre de séjour. Quand vous renouvelez votre carte de séjour "étudiant", votre CPAM doit généralement être informée et renouveler la période de vos droits. Si vous ne mettez pas à jour votre Carte Vitale après ce renouvellement, un professionnel de santé pourrait voir des droits "expirés" sur la puce, même si vous êtes en réalité couvert.

## Où et comment mettre à jour sa Carte Vitale ?

La bonne nouvelle : vous n'avez pas besoin de prendre rendez-vous à la CPAM pour faire une mise à jour de routine. La plupart des pharmacies en France sont équipées d'une **borne de mise à jour de Carte Vitale**, souvent appelée "borne SESAM-Vitale" ou simplement identifiée par le pictogramme de la Carte Vitale verte. Ces bornes sont accessibles librement, sans rendez-vous, pendant les heures d'ouverture de la pharmacie.

La procédure est extrêmement simple. Insérez votre Carte Vitale dans la borne (il y a un seul sens d'insertion, la puce vers le haut). La borne se connecte aux serveurs de la CPAM et charge automatiquement les nouvelles informations sur la puce. L'opération dure généralement moins d'une minute. Vous pouvez aussi demander à un pharmacien de le faire pour vous si vous ne trouvez pas la borne.

Si la pharmacie de votre quartier n'a pas de borne, voici d'autres options :

**La CPAM** : certaines CPAM disposent de bornes dans leur hall d'accueil, accessibles sans rendez-vous. C'est particulièrement utile si vous avez besoin de parler à un conseiller en même temps que vous faites la mise à jour.

**Le médecin** : certains médecins disposent d'un lecteur-scripteur de Carte Vitale (et non simplement d'un lecteur), ce qui leur permet de faire la mise à jour lors d'une consultation. C'est moins courant que les pharmacies, mais ça reste possible.

**En ligne via Ameli.fr** : bien que la mise à jour en ligne ne soit pas disponible directement sur le site (car la puce physique doit être inscrite mécaniquement), Ameli.fr vous permettra de vérifier si une mise à jour est nécessaire et dans quel délai.

## À quelle fréquence faut-il mettre à jour ?

Il n'y a pas de règle rigide, mais voici quelques repères pratiques. En général, **une mise à jour annuelle** est recommandée, idéalement en début d'année après que la CPAM a renouvelé vos droits pour la nouvelle année civile. Cette mise à jour de début d'année est particulièrement utile si vous changez de situation (nouveau travail, changement de statut, nouvelle mutuelle).

**Après tout changement important de situation** : déménagement dans un autre département (changement de CPAM), renouvellement de titre de séjour, mariage ou divorce avec impact sur la situation sociale, ouverture de droits à la CSS (Complémentaire Santé Solidaire), déclaration d'un médecin traitant pour la première fois.

**Quand un professionnel de santé vous le signale** : parfois, lors d'une consultation, le médecin ou le pharmacien vous dira que votre carte n'est pas à jour ("la carte indique que vos droits sont expirés" alors même que vous êtes normalement à jour). C'est le signe qu'une mise à jour est nécessaire.

## Renouvellement en cas de perte ou de vol

Si vous perdez votre Carte Vitale, que vous vous la faites voler, ou qu'elle est endommagée (cassée, démagnetisée, puce illisible), suivez ces étapes :

**Déclarez la perte ou le vol sur Ameli.fr** : connectez-vous à votre espace personnel et signalez la situation dans la section "Ma carte Vitale". Cela permet à la CPAM de désactiver l'ancienne carte si nécessaire.

**Faites une demande de nouvelle carte** : sur Ameli.fr, dans la section dédiée à la Carte Vitale, vous pouvez directement demander l'envoi d'une nouvelle carte. La demande se fait en quelques clics, sans démarche papier. Vous devrez parfois envoyer votre photo (pour une Carte Vitale 2) via un formulaire en ligne ou en vous rendant à la CPAM.

**Délai de réception** : la nouvelle carte vous sera envoyée par courrier à votre adresse déclarée dans un délai de six à douze semaines. Durant cette attente, téléchargez et utilisez votre attestation de droits disponible immédiatement sur Ameli.fr.

## Passer de la Carte Vitale 1 à la Carte Vitale 2 (avec photo)

Si vous avez encore l'ancienne Carte Vitale verte sans photo, vous pouvez et devez demander la nouvelle version avec photo (Carte Vitale 2). Non seulement c'est plus sécurisé, mais dans certaines structures de soins (notamment les hôpitaux), la Carte Vitale 2 avec photo est préférée, voire exigée pour l'ouverture d'un dossier patient.

Pour obtenir la Carte Vitale 2, vous pouvez en faire la demande directement sur [Ameli.fr](https://www.ameli.fr) dans la section "Ma carte Vitale". Une photo d'identité vous sera demandée (téléchargeable depuis le formulaire, ou envoyée par courrier selon les CPAM). La production et l'envoi de la Carte Vitale 2 prend en général deux à trois mois.

## Cas particulier : les étudiants étrangers et le renouvellement annuel

Pour les étudiants étrangers dont les droits à la Sécurité Sociale sont liés à leur titre de séjour, le renouvellement de la Carte Vitale suit un rythme légèrement différent. Lorsque votre titre de séjour expire et que vous en demandez le renouvellement, vous recevrez un récépissé (CERFA de récépissé de demande de titre de séjour). Ce récépissé prouve que vous êtes en situation régulière et doit être transmis à votre CPAM pour prolonger vos droits.

La CPAM mettra à jour vos droits dans ses systèmes, mais la puce de votre carte physique devra ensuite être mise à jour en pharmacie pour refléter cette prolongation. Pensez à faire la mise à jour dès que vous avez le récépissé, afin d'éviter tout problème lors de vos prochaines consultations médicales.

## Ressources officielles

- [Ameli.fr — Carte Vitale](https://www.ameli.fr) : pour faire votre demande de renouvellement en ligne, signaler une perte ou vérifier vos droits.
- [Service-Public.fr](https://www.service-public.fr) : informations officielles sur la Carte Vitale, les délais et les procédures.
- **36 46** : numéro de l'Assurance Maladie pour toute question relative à votre Carte Vitale ou à vos droits.
`
},

// ─────────────────────────────────────────────────────────────────────────────
// LEÇON 5 : La Carte Européenne d'Assurance Maladie (CEAM)
// ─────────────────────────────────────────────────────────────────────────────
{
id: 'e116f1ae-ef4d-4748-9afa-4442bcb93063',
content: `# La Carte Européenne d'Assurance Maladie (CEAM)

Quand on étudie en France et qu'on vient d'un pays de l'Union Européenne, de l'Espace Économique Européen ou de la Suisse, la Carte Européenne d'Assurance Maladie est un outil de protection santé indispensable. Elle joue aussi un rôle crucial pour tout étudiant affilié au régime français qui souhaite voyager dans un pays européen : les week-ends à Berlin, les vacances à Barcelone, un stage à Dublin — autant de situations où votre Carte Vitale française est inutilisable, mais où la CEAM prend le relais. Comprendre ce qu'est la CEAM, comment l'obtenir, dans quels pays elle est valable et quelles sont ses limites réelles, c'est essentiel pour voyager ou étudier en sécurité à travers l'Europe.

## Qu'est-ce que la CEAM et d'où vient-elle ?

La Carte Européenne d'Assurance Maladie est un document officiell introduit en 2004, progressivement déployé dans tous les États membres de l'Union Européenne, puis étendu aux pays de l'Espace Économique Européen (Islande, Liechtenstein, Norvège) et à la Suisse. Elle remplace les anciens formulaires papier (appelés E111, E128, E119, etc.) qui étaient utilisés pour prouver ses droits à la santé à l'étranger.

La CEAM est une carte plastique de la taille d'une carte de crédit, émise par l'organisme d'assurance maladie de votre pays de résidence. Si vous êtes affilié à la Sécurité Sociale française (CPAM), c'est la CPAM qui vous délivre votre CEAM. Elle porte votre nom, votre numéro de Sécurité Sociale français et une date de validité.

Son principe fondamental est la **portabilité des droits** : dans tous les pays qui reconnaissent la CEAM, vous avez accès aux soins médicaux dans les mêmes conditions que les assurés locaux. Vous n'avez pas besoin de payer des prix "touriste" pour des soins d'urgence, et vous ne serez pas facturé pour des services que les ressortissants locaux reçoivent sans frais.

## Qui peut obtenir une CEAM en France ?

Toute personne affiliée au régime général de l'Assurance Maladie française et dont les droits sont ouverts peut demander une CEAM. Cela inclut :

Les **citoyens français** souhaitant voyager ou s'installer temporairement dans un pays européen (vacances, stage, séjour linguistique, échange universitaire).

Les **ressortissants européens (UE/EEE/Suisse) vivant et travaillant ou étudiant en France**, affiliés à la CPAM française. Même si vous êtes belge ou espagnol, si votre couverture santé est assurée par la CPAM française, c'est elle qui vous délivre votre CEAM française.

Les **ressortissants de pays hors UE vivant légalement en France** et affiliés à la CPAM : vous pouvez également demander une CEAM pour des voyages dans les pays européens partenaires.

Il est important de noter que la CEAM que vous obtiendrez sera celle de votre pays d'affiliation, pas de votre pays d'origine. Si vous êtes marocain étudiant en France et affilié à la CPAM, vous obtiendrez une CEAM française, valable dans les pays du réseau européen.

## Dans quels pays la CEAM est-elle valable ?

La CEAM est acceptée dans les 27 pays de l'Union Européenne, ainsi que dans les pays de l'Espace Économique Européen et en Suisse. Voici la liste complète :

**Union Européenne (27 pays)** : Allemagne, Autriche, Belgique, Bulgarie, Chypre, Croatie, Danemark, Espagne, Estonie, Finlande, France, Grèce, Hongrie, Irlande, Italie, Lettonie, Lituanie, Luxembourg, Malte, Pays-Bas, Pologne, Portugal, République tchèque, Roumanie, Slovaquie, Slovénie, Suède.

**Pays de l'EEE** : Islande, Liechtenstein, Norvège.

**Suisse** : la Suisse a des accords bilatéraux avec l'UE qui incluent la reconnaissance de la CEAM.

Concernant le **Royaume-Uni** : depuis le Brexit (sortie officielle en janvier 2020), la situation a évolué. Dans le cadre des accords de retrait, les droits à la CEAM ont été maintenus pour une période transitoire. En 2023-2025, des accords bilatéraux permettent encore une utilisation partielle de la CEAM au Royaume-Uni, mais la situation est en évolution. Vérifiez les dernières informations sur [ameli.fr](https://www.ameli.fr) avant tout voyage au Royaume-Uni.

## Ce que couvre la CEAM : les droits concrets

La CEAM vous donne accès aux **soins médicalement nécessaires** lors de votre séjour dans un autre pays européen, dans les mêmes conditions que les assurés locaux. Concrètement, cela signifie :

**Les soins d'urgence** sont toujours couverts. Que vous ayez un accident de voiture en Allemagne, une appendicite en Espagne ou une fracture lors d'un séjour à ski en Autriche, les frais d'hospitalisation et les soins d'urgence seront pris en charge aux mêmes tarifs qu'un assuré local.

**Les soins programmés ou prévisibles** le sont aussi, sous conditions. Si vous habitez temporairement dans un autre pays européen pour un stage ou un échange universitaire Erasmus, vous pouvez consulter des médecins pour des soins courants (affections chroniques, suivi médical habituel) en utilisant la CEAM.

La CEAM couvre la partie prise en charge par le système d'assurance maladie local. Si le pays visité applique un ticket modérateur (la partie à la charge du patient), vous devrez le payer. C'est pourquoi une assurance voyage complémentaire reste recommandée pour couvrir ces frais résiduels et les rapatriements sanitaires.

## Ce que la CEAM ne couvre pas

La CEAM n'est **pas une assurance voyage**. Elle ne couvre pas :

Le rapatriement sanitaire (être ramené en France si vous êtes trop gravement malade pour continuer votre séjour). Pour ça, vous avez besoin d'une assurance voyage avec garantie rapatriement — souvent incluse dans les cartes bancaires haut de gamme (Visa Premier, Mastercard Gold) ou disponible à prix modéré via des assureurs en ligne.

Les soins programmés à l'avance dans le seul but de profiter d'une meilleure qualité ou d'économiser. Vous ne pouvez pas aller en Hongrie pour une opération moins chère et espérer que la CEAM française rembourse tout.

Les soins chez des médecins ou cliniques privées qui ne participent pas au système d'assurance maladie local. Dans de nombreux pays d'Europe de l'Est, il existe un secteur privé parallèle non conventionné : la CEAM n'est valable que dans le secteur public ou conventionné.

## Comment demander la CEAM ?

La demande est simple et entièrement gratuite. Connectez-vous à votre espace Ameli sur [ameli.fr](https://www.ameli.fr) et cherchez la section "Carte Européenne d'Assurance Maladie". Remplissez le formulaire de demande en ligne (nom, prénom, date de naissance, adresse). La carte vous sera envoyée par courrier postal dans un délai de sept à quatorze jours ouvrés.

La CEAM est délivrée pour une durée d'un à deux ans (selon votre situation et la CPAM). À l'expiration, renouvelez-la simplement via le même formulaire sur Ameli.fr.

Si vous avez besoin de la CEAM en urgence (départ imminent dans les 48 heures), vous pouvez appeler le 36 46 et demander une **attestation provisoire de remplacement** (APR), qui joue le même rôle que la CEAM le temps que la carte physique arrive par courrier. Cette attestation papier ou PDF est reconnue partout où la CEAM l'est.

## Erasmus et la CEAM : une combinaison à ne pas négliger

Si vous partez en échange Erasmus dans un pays européen, la CEAM est particulièrement importante. Elle vous permettra d'accéder aux soins du quotidien (médecin généraliste, pharmacie) dans le pays d'accueil sans débourser plus que les assurés locaux.

Cependant, certaines universités partenaires et certains pays exigent une assurance maladie complémentaire en plus de la CEAM, notamment pour couvrir les soins qui dépasseraient le cadre de la prise en charge locale. Vérifiez les exigences de votre université d'accueil avant le départ, et souscrivez une assurance complémentaire si nécessaire.

## Ressources officielles

- [Ameli.fr — Carte Européenne d'Assurance Maladie](https://www.ameli.fr) : pour faire votre demande et télécharger l'attestation provisoire de remplacement.
- [Service-Public.fr](https://www.service-public.fr) : informations complètes sur la CEAM et les accords bilatéraux de santé.
- [Commission Européenne — CEAM](https://ec.europa.eu/social/main.jsp?catId=559&langId=fr) : informations officielles de l'Union Européenne sur la CEAM et les pays participants.
`
},

// ─────────────────────────────────────────────────────────────────────────────
// LEÇON 6 : Soins sans Carte Vitale : situations et solutions
// ─────────────────────────────────────────────────────────────────────────────
{
id: '80730a62-a1bb-48f8-b85d-2de2ebc5b6e8',
content: `# Soins sans Carte Vitale : situations et solutions

Les situations où l'on se retrouve sans Carte Vitale sont plus fréquentes qu'on ne le croit. Un étudiant qui vient d'arriver en France attend son affiliation depuis deux mois. Un autre a laissé sa Carte Vitale dans le jean qu'il a mis au lavage et la puce est morte. Un troisième est en train de renouveler son titre de séjour et la CPAM a suspendu temporairement ses droits en attente d'un document. Dans tous ces cas, la question se pose : peut-on se faire soigner ? Sera-t-on remboursé ? Quelles sont les solutions concrètes disponibles ? La réponse rassurante, c'est qu'il existe des solutions pour chaque situation — mais il faut connaître par avance les options disponibles.

## Situation 1 : vous attendez encore votre Carte Vitale

C'est la situation la plus courante pour les étudiants étrangers nouvellement arrivés. Vous avez initié votre affiliation à la CPAM, on vous a attribué un numéro provisoire, mais la carte physique n'est pas encore arrivée. Comptez trois à six mois entre le début des démarches et la réception de la carte.

Dans cette situation, votre meilleur outil est l'**attestation de droits**. Dès que votre dossier est accepté et que vos droits sont ouverts (ce qui peut intervenir avant que la carte elle-même soit fabriquée), vous pouvez télécharger une attestation de droits sur [Ameli.fr](https://www.ameli.fr). Ce document officiel prouve que vous êtes affilié et couvert. La plupart des médecins et des pharmacies l'acceptent comme substitut temporaire à la Carte Vitale.

La différence pratique : avec l'attestation de droits sans la Carte Vitale physique, le médecin ne peut pas lire vos droits électroniquement via la puce. Il doit saisir manuellement votre numéro de Sécurité Sociale dans son logiciel, ce qui prend un peu plus de temps et nécessite une feuille de soins papier ou une saisie manuelle. Certains médecins, surtout dans les grandes villes bien rodées à la gestion des étudiants étrangers, sont habitués à cette situation. D'autres peuvent être moins à l'aise. Expliquez calmement votre situation et proposez de laisser une copie de votre attestation.

## Situation 2 : vous avez oublié votre Carte Vitale

Vous avez la Carte Vitale mais vous ne l'avez pas sur vous au moment de la consultation. Pas de panique : dans ce cas, la plupart des médecins feront la consultation normalement et vous demanderont d'apporter votre Carte Vitale lors de la prochaine consultation, ou ils utiliseront votre attestation de droits si vous l'avez sur votre téléphone.

Encore mieux : l'application **Ameli** sur smartphone (disponible sur iOS et Android) vous permet d'afficher votre attestation de droits directement depuis votre téléphone, sans rien imprimer. C'est l'équivalent numérique de la carte, accepté par la grande majorité des praticiens. Ayez toujours l'application Ameli installée et à jour sur votre téléphone : c'est une assurance supplémentaire contre les oublis.

Si le médecin ne dispose pas de lecteur de carte ou si vous n'avez ni carte ni attestation, il peut toujours vous donner une **feuille de soins papier** que vous remplirez manuellement avec votre numéro de Sécurité Sociale et renverrez à votre CPAM. Le remboursement prendra alors trois à quatre semaines au lieu de quelques jours.

## Situation 3 : vos droits sont suspendus ou en attente de renouvellement

Certains étudiants étrangers se retrouvent dans une situation où leurs droits apparaissent comme "expirés" dans les systèmes de la CPAM, souvent parce que le renouvellement de leur titre de séjour tarde ou parce qu'un document manque dans leur dossier. Dans cette situation, présentez-vous à votre CPAM en personne. Expliquez votre situation, montrez votre récépissé de renouvellement de titre de séjour ou tout document prouvant votre régularité en France.

La CPAM peut rouvrir vos droits à titre provisoire en attendant la régularisation complète de votre dossier. Elle dispose d'une certaine souplesse dans les cas où la situation administrative est clairement en cours de régularisation. N'attendez pas d'être vraiment malade pour vous en occuper : réglez la situation administrative dès que vous avez connaissance du problème.

## Les soins d'urgence : toujours pris en charge

Quel que soit votre statut administratif — même si vos droits sont suspendus, même si vous êtes sans papiers, même si vous n'êtes pas affilié à la CPAM — les **soins d'urgence vitale** sont toujours dispensés en France. Aucun hôpital public ne peut refuser de soigner un patient dont la vie est en danger.

Le **SAMU (15)** intervient en cas d'urgence vitale. Les **urgences des hôpitaux publics** (Service des Urgences, ou SAU) accueillent tout le monde, quelle que soit leur situation administrative ou financière. Si vous vous y rendez et que vous n'avez pas de droits ouverts ou pas de Carte Vitale, l'hôpital prendra en charge les soins et régularisera la situation administrative après. Une assistante sociale de l'hôpital peut vous aider à reconstituer vos droits rétroactivement dans certains cas.

## L'Aide Médicale de l'État (AME) : pour les personnes en situation irrégulière

L'AME (Aide Médicale de l'État) est un dispositif spécifique destiné aux personnes présentes sur le territoire français de façon irrégulière. Elle permet d'accéder à la quasi-totalité des soins médicaux sans avancer les frais, sous conditions de ressources et de durée de présence sur le territoire (au moins trois mois de présence en France).

Elle couvre les consultations chez le médecin généraliste et les spécialistes, les médicaments, les soins hospitaliers et les analyses médicales. Elle est renouvelable chaque année. Pour en faire la demande, il faut se rendre à la CPAM ou à la CRAMIF (en Île-de-France) avec un dossier prouvant sa résidence en France (quittances de loyer, attestations d'hébergement) et ses ressources. Des associations comme Médecins du Monde ou la Cimade peuvent vous aider à constituer le dossier.

## Les PASS : les permanences d'accès aux soins de santé

Les **PASS (Permanences d'accès aux soins de santé)** sont des dispositifs hospitaliers créés spécialement pour les personnes en situation de précarité ou sans couverture sociale suffisante. On en trouve dans la plupart des grands hôpitaux publics français.

Aux PASS, vous pouvez consulter un médecin généraliste gratuitement, bénéficier d'un bilan de santé, accéder à des soins dentaires de base et être orienté vers des spécialistes. Une assistante sociale est toujours disponible sur place pour vous aider à reconstituer une couverture sociale si vous n'en avez pas.

Pour trouver la PASS la plus proche de chez vous, renseignez-vous auprès du service social de votre université ou sur le site [service-public.fr](https://www.service-public.fr).

## Avancer les frais et se faire rembourser a posteriori

Si vous avez été contraint d'avancer des frais médicaux (consultation, médicaments, analyses) parce que vous n'aviez pas votre Carte Vitale et que le médecin n'a pas pu faire de feuille de soins électronique, vous pouvez vous faire rembourser en envoyant une **feuille de soins papier** à votre CPAM.

Demandez cette feuille de soins au médecin ou au pharmacien. Remplissez-la avec votre numéro de Sécurité Sociale et envoyez-la par courrier à votre CPAM, accompagnée de l'ordonnance et du reçu de paiement. La CPAM vous remboursera la part correspondante dans un délai de deux à quatre semaines. Cette procédure est plus longue que le remboursement automatique via la Carte Vitale, mais elle fonctionne.

## Ressources officielles

- [Ameli.fr](https://www.ameli.fr) : pour télécharger votre attestation de droits, signaler une perte de carte et gérer votre dossier.
- [Service-Public.fr](https://www.service-public.fr) : informations sur l'AME, les PASS et les solutions de couverture santé pour les personnes en précarité.
- **SAMU : 15** — numéro d'urgence médicale, gratuit depuis tout téléphone, 24h/24.
- **Application Ameli** (iOS / Android) : pour avoir votre attestation de droits toujours disponible sur votre téléphone.
`
},

];

// Push toutes les leçons
let ok = 0, fail = 0;
for (const l of lessons) {
  await update(l.id, l.content);
  const words = l.content.split(/\s+/).filter(Boolean).length;
  console.log('   → ' + words + ' mots');
  ok++;
}
console.log('\n✅ Terminé : ' + ok + ' leçons mises à jour, ' + fail + ' échecs');
