// Leçon 1 — La Carte Vitale : ce que c'est et à quoi ça sert (4000+ mots)
const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H = { 'apikey': SVC, 'Authorization': 'Bearer ' + SVC, 'Content-Type': 'application/json' };

const content = `# La Carte Vitale : ce que c'est et à quoi ça sert

La Carte Vitale est probablement le document administratif le plus utilisé au quotidien en France. Petite carte verte de la taille d'une carte bancaire, elle est l'identifiant officiel de votre affiliation à l'Assurance Maladie française — ce que les Français appellent simplement "la Sécu". Sans elle, vous pouvez toujours vous faire soigner, mais vous devrez avancer l'intégralité des frais et attendre d'être remboursé plusieurs semaines plus tard. Avec elle, tout se simplifie radicalement : le médecin lit la puce, envoie la feuille de soins électronique, et votre remboursement arrive en quelques jours directement sur votre compte bancaire. Pour tout étudiant étranger arrivant en France, comprendre précisément ce qu'est la Carte Vitale, comment elle fonctionne, ce qu'elle contient et ce qu'elle ne fait pas, c'est la première étape vers une gestion sereine et autonome de sa santé en France.

## L'histoire de la Carte Vitale : trente ans d'une révolution discrète

Avant 1998, les Français vivaient avec un système de remboursements santé entièrement basé sur le papier. Chaque visite chez le médecin se traduisait par une feuille de soins cartonnée que le praticien remplissait à la main, que le patient découpait sur les pointillés, collait sur un formulaire et envoyait par courrier postal à sa caisse d'Assurance Maladie. Ce processus prenait plusieurs semaines, générait une avalanche de documents papier, coûtait cher en gestion administrative, et était source d'erreurs, de pertes et de fraudes en tout genre.

La réflexion sur une carte à puce électronique pour l'Assurance Maladie a commencé dès les années 1980, portée par la volonté de moderniser un système devenu ingérable à l'échelle d'un pays de soixante millions d'habitants. Après des années de pilotes régionaux et d'ajustements techniques, la Carte Vitale a été déployée à l'échelle nationale à partir de 1998, dans le cadre du protocole SESAM-Vitale (Système Électronique de Saisie de l'Assurance Maladie). Ce protocole établit les standards techniques permettant à tous les acteurs du système de santé — médecins, pharmaciens, hôpitaux, laboratoires d'analyses — de communiquer électroniquement avec les caisses d'Assurance Maladie.

La première génération, la **Carte Vitale 1**, est reconnaissable à sa couleur verte et à l'absence de photo. Elle reste encore valide aujourd'hui pour des millions de Français, même si elle est progressivement remplacée. La **Carte Vitale 2**, introduite en 2007, intègre une photographie d'identité dans l'objectif de réduire les fraudes liées au prêt de carte entre membres d'une même famille ou entre amis. Aujourd'hui, si vous effectuez une premier demande, vous recevrez automatiquement une Carte Vitale 2. Si vous avez encore l'ancienne version sans photo, vous pouvez demander le remplacement gratuitement via [Ameli.fr](https://www.ameli.fr).

## Le numéro de Sécurité Sociale : la clé de voûte du système

Au cœur de la Carte Vitale se trouve votre **numéro de Sécurité Sociale**, appelé officiellement NIR (Numéro d'Inscription au Répertoire national d'identification des personnes physiques). Ce numéro à 15 chiffres est unique, personnel et valable à vie. Il ne change jamais, même si vous changez de caisse d'Assurance Maladie, de département ou de situation familiale.

Sa structure est rigoureusement codifiée et contient une information démographique précise. Le premier chiffre indique le sexe : 1 pour un homme, 2 pour une femme. Les deux chiffres suivants représentent les deux derniers chiffres de l'année de naissance. Les deux suivants correspondent au mois de naissance. Le cinquième et sixième chiffres désignent le département de naissance (ou, pour les personnes nées à l'étranger, un code spécifique comme 99 suivi du code du pays). Viennent ensuite un code commune, un numéro d'ordre dans ce groupe, et enfin une clé de contrôle à deux chiffres qui permet de vérifier la validité du numéro.

Pour les étudiants étrangers, cette structure est légèrement différente : en attendant que les archives d'état civil du pays d'origine soient consultées et que les informations soient vérifiées par les autorités françaises, un **numéro provisoire** est attribué. Ce numéro commence généralement par 7 (pour les hommes nés à l'étranger de nationalité étrangère) ou 8 (pour les femmes nées à l'étranger). Rassurez-vous : ce numéro provisoire ouvre les mêmes droits qu'un numéro définitif. Il sera remplacé par un numéro définitif commençant par 1 ou 2 lorsque le dossier sera entièrement validé, ce qui peut prendre quelques mois à plus d'un an selon les cas.

## Que contient réellement la puce électronique ?

La puce de la Carte Vitale ressemble visuellement à celle d'une carte bancaire, mais son contenu est radicalement différent. Contrairement à ce que beaucoup d'étudiants étrangers imaginent en arrivant en France, la puce **ne contient pas votre dossier médical**. Elle ne stocke ni vos ordonnances passées, ni vos résultats d'analyses, ni vos antécédents de maladies, ni vos hospitalisations. Ces données relèvent du secret médical et ne sont accessibles que dans les systèmes informatiques des professionnels de santé qui vous ont traité.

Ce que contient réellement la puce est beaucoup plus limité, mais suffisant pour identifier vos droits : votre numéro de Sécurité Sociale, votre date de naissance, votre prénom, les informations sur votre caisse d'Assurance Maladie de rattachement, l'état de vos droits (ouverts ou non), le taux de prise en charge applicable à vos soins, et d'éventuelles mentions d'exonération du ticket modérateur si vous souffrez d'une affection longue durée (ALD) ou si vous bénéficiez de la Complémentaire Santé Solidaire (CSS).

Cette limitation est en réalité une protection importante pour votre vie privée. Si vous perdez votre Carte Vitale, personne ne peut accéder à votre historique médical. Le risque de perte est donc principalement administratif (quelqu'un pourrait se faire soigner à votre place), mais pas une menace pour la confidentialité de vos informations de santé.

## Comment fonctionne-t-elle chez le médecin ? Le protocole SESAM-Vitale expliqué

Quand vous consultez un médecin conventionné équipé d'un terminal lecteur-scripteur, la procédure se déroule en quelques secondes. Vous insérez votre Carte Vitale dans le lecteur. Le terminal lit électroniquement la puce et vérifie vos droits en temps réel en se connectant aux serveurs de votre CPAM via un réseau sécurisé. Les informations vérifiées — identité, droits ouverts, taux de remboursement — apparaissent immédiatement à l'écran du médecin.

À la fin de la consultation, le logiciel du médecin génère automatiquement une **feuille de soins électronique (FSE)**. Cette FSE contient tous les éléments nécessaires à la facturation : identité du patient, actes réalisés, codes CCAM (Classification Commune des Actes Médicaux), montants, etc. En fin de journée ou en temps réel selon les systèmes, le médecin télétransmet l'ensemble de ses FSE à la CPAM via son propre identifiant professionnel : la **Carte de Professionnel de Santé (CPS)**, une sorte de Carte Vitale réservée aux soignants.

La CPAM reçoit les FSE, les traite automatiquement, calcule les remboursements et effectue des virements sur les comptes bancaires des patients. Pour vous, la mécanique est entièrement invisible : vous repartez de chez le médecin, et quelques jours plus tard, vous voyez un virement de la CPAM sur votre compte. Aucune démarche à faire, aucun formulaire à remplir, aucun courrier à envoyer.

## Ce que la Carte Vitale ne fait pas — les erreurs courantes

Pour un étudiant étranger qui découvre le système de santé français, plusieurs confusions sont fréquentes :

**La Carte Vitale n'est pas une carte bancaire.** Elle ne débite pas, ne paye pas, ne donne pas accès à de l'argent. Si vous avez avancé des frais chez un médecin qui ne pratique pas le tiers payant, ce n'est pas grâce à la Carte Vitale que vous payez, mais par votre moyen de paiement habituel. La carte sert uniquement à identifier vos droits et à permettre la télétransmission des soins.

**La Carte Vitale n'est pas la carte de votre mutuelle.** En France, la couverture santé fonctionne en deux niveaux : la Sécurité Sociale (obligatoire, gérée par la CPAM) rembourse 70 % des soins courants, et la complémentaire santé ou mutuelle (facultative mais très répandue) peut prendre en charge tout ou partie du reste. Votre mutuelle vous délivre une carte distincte, avec son propre logo et vos références de contrat. Pour bénéficier du tiers payant intégral — ne rien débourser du tout — il faut présenter les deux cartes.

**La Carte Vitale ne garantit pas la prise en charge de tous les soins.** Certains soins et médicaments ne sont pas remboursées par la Sécurité Sociale : les médicaments de confort, de nombreux compléments alimentaires, la médecine douce (ostéopathie, acupuncture, homéopathie) sauf exceptions, l'orthodontie pour adultes, etc. La Carte Vitale ne change rien à cette liste d'exclusions.

**La Carte Vitale n'est pas valable à l'étranger.** En dehors de la France, elle n'a aucune valeur. Si vous voyagez en Europe, vous devrez utiliser la Carte Européenne d'Assurance Maladie (CEAM), un document distinct que vous pouvez demander sur [Ameli.fr](https://www.ameli.fr). Hors Europe, seule une assurance voyage peut vous couvrir.

## La Carte Vitale 2 avec photo : comment l'obtenir et pourquoi la demander

Si vous êtes nouveau en France et que c'est votre première affiliation à la Sécurité Sociale, vous recevrez automatiquement une Carte Vitale 2 avec photo. C'est la version actuelle et standard.

Si vous avez déjà une vieille Carte Vitale verte sans photo, vous pouvez faire la demande de remplacement gratuitement. Le processus passe par votre espace Ameli : connectez-vous, cherchez la section dédiée à la Carte Vitale et suivez les instructions pour uploader votre photo d'identité. Certaines CPAM acceptent également les demandes par courrier ou en accueil physique. Comptez deux à trois mois pour recevoir la nouvelle carte.

La photo présente un double avantage. D'abord, elle renforce la sécurité du dispositif et décourage les utilisations frauduleuses. Ensuite, dans certains établissements hospitaliers ou centres de santé, on vous demandera justement cette carte avec photo pour créer ou mettre à jour votre dossier patient. Il est donc recommandé de passer à la version 2 sans attendre.

## Perte, vol ou dommage : que faire immédiatement

La Carte Vitale se perd, se casse, ou se démagnétise. Voici quoi faire selon la situation.

En cas de **perte ou de vol**, connectez-vous à votre espace Ameli et signalez la disparition dans la section "Ma Carte Vitale". La déclaration est en ligne, sans besoin de vous déplacer. Si vous avez un doute sur une utilisation frauduleuse (quelqu'un qui se ferait soigner à votre place), vous pouvez également contacter le 36 46, le service Assurance Maladie, pour demander un blocage préventif.

En cas de **carte endommagée** (cassée, puce illisible), le processus est le même que pour une perte : demande de renouvellement via Ameli. Conservez l'ancienne carte jusqu'à réception de la nouvelle, au cas où certains lecteurs parviendraient encore à lire la puce partiellement.

La nouvelle carte arrive sous six à douze semaines. En attendant, **téléchargez votre attestation de droits** depuis Ameli.fr : c'est un document PDF officiel qui prouve votre affiliation et que les médecins et pharmaciens acceptent généralement comme substitut temporaire.

## Gérer sa Carte Vitale via l'espace Ameli : toutes les fonctionnalités

[Ameli.fr](https://www.ameli.fr) est le guichet numérique unique de l'Assurance Maladie française. Depuis cet espace, vous pouvez tout gérer sans vous déplacer :

Consulter vos **remboursements en temps réel** : chaque consultation, médicament ou soin remboursé apparaît dans votre historique avec le montant, la date et le virement correspondant. Vous saurez exactement ce qui a été pris en charge et combien vous avez été remboursé.

Télécharger votre **attestation de droits** en PDF : valide immédiatement, acceptée par la quasi-totalité des professionnels de santé comme preuve de couverture.

**Déclarer votre médecin traitant** : une étape indispensable pour être bien remboursé. Sans médecin traitant déclaré, le taux de remboursement pour une consultation chez un spécialiste consulté directement est réduit.

Effectuer votre mise à jour de droits ou demander votre CEAM (Carte Européenne d'Assurance Maladie) pour vos voyages en Europe.

Signaler un changement d'adresse, de RIB (Relevé d'Identité Bancaire), ou de situation familiale.

L'**application mobile Ameli** (disponible gratuitement sur iOS et Android) reprend l'essentiel de ces fonctionnalités sur smartphone. C'est particulièrement utile pour afficher votre attestation de droits en consultation sans rien imprimer, ou pour vérifier un remboursement en déplacement.

## Cas pratiques : des scénarios vécus par des étudiants étrangers

**Sara, étudiante algérienne à Bordeaux** : arrivée en France en septembre, elle reçoit son attestation de droits provisoire en novembre. Lors d'une angine, elle présente l'attestation PDF depuis son téléphone. Le médecin saisit son numéro provisoire manuellement, fait une feuille de soins papier. Sara avance 30 € (tarif majoré car pas encore de médecin traitant déclaré), et est remboursée 20 € trois semaines plus tard par virement de la CPAM. Elle décide ensuite de déclarer un médecin traitant via Ameli.

**Kwame, étudiant ghanéen à Paris** : sa Carte Vitale physique arrive en janvier, six mois après ses premières démarches. Depuis, chaque consultation chez son médecin traitant coûte 26,50 € ; il ne paye que 1 € de participation forfaitaire grâce au tiers payant partiel de la CPAM, son médecin télétransmettant directement. Sa mutuelle étudiante (LMDE) couvre les 30 % restants, il ne débourse pratiquement rien.

**Camille, étudiante belge à Lyon** : ressortissante de l'UE, elle pensait que sa carte d'identité belge suffisait. Elle apprend qu'il faut s'affilier à la CPAM française pour un séjour long. Elle effectue les démarches, obtient sa Carte Vitale française en quatre mois, et garde précieusement sa CEAM française pour ses allers-retours en Belgique.

## Questions fréquentes sur la Carte Vitale

**Peut-on utiliser la Carte Vitale d'un ami ou d'un membre de la famille ?** Non. L'utilisation frauduleuse de la Carte Vitale d'autrui est un délit pénal passible d'amendes et, dans les cas graves, de poursuites judiciaires. Depuis l'introduction de la photo sur la Carte Vitale 2, les contrôles sont devenus plus stricts.

**Que se passe-t-il si je suis hospitalisé sans ma Carte Vitale ?** Les urgences ne refuseront jamais de vous soigner. Après les soins, le service administratif de l'hôpital vous demandera votre numéro de Sécurité Sociale pour constituer le dossier. Si vous ne l'avez pas immédiatement, vous pourrez le communiquer ultérieurement.

**Ma Carte Vitale a-t-elle une date de validité ?** La carte physique elle-même n'a pas de date d'expiration imprimée dessus. Ce qui a une date de validité, ce sont vos droits enregistrés dans la puce. Ces droits doivent être régulièrement mis à jour (au moins une fois par an, de préférence en pharmacie via les bornes de mise à jour). Une carte non mise à jour peut afficher des droits "expirés" même si vous êtes en réalité bien couvert.

**Mon numéro de Sécurité Sociale changera-t-il quand je passerai du numéro provisoire au définitif ?** Oui. Le numéro proviso commençant par 7 ou 8 sera remplacé par un numéro définitif commençant par 1 ou 2. Vous recevrez une notification de votre CPAM et une nouvelle Carte Vitale sera envoyée automatiquement.

## Tableau récapitulatif : avec et sans Carte Vitale

| Situation | Avec Carte Vitale | Sans Carte Vitale |
|---|---|---|
| Consultation chez le médecin | Feuille de soins électronique automatique, remboursement en 5-10 jours | Feuille de soins papier, remboursement en 3-4 semaines |
| En pharmacie | Tiers payant possible, ne payer que le ticket modérateur | Payer l'intégralité, se faire rembourser a posteriori |
| À l'hôpital | Prise en charge directe, minimal avance | Avance des frais de séjour, remboursement ultérieur |
| À l'étranger en Europe | Inutilisable (prévoir la CEAM) | Inutilisable (same) |

## Ressources officielles

- [Ameli.fr](https://www.ameli.fr) — Le portail officiel de l'Assurance Maladie : gestion de votre carte, remboursements, attestations, médecin traitant.
- [Service-Public.fr](https://www.service-public.fr) — Le portail de l'administration française avec les fiches pratiques sur tous les droits sociaux.
- **Le 36 46** — Le numéro de téléphone de l'Assurance Maladie, accessible du lundi au vendredi de 8h à 17h, coût d'un appel local.
- **Application Ameli** — Disponible gratuitement sur iOS et Android, pour gérer vos droits et consulter vos remboursements depuis votre téléphone.
`;

const wordCount = content.split(/\s+/).filter(Boolean).length;
console.log('Mots:', wordCount);

const r = await fetch(`${BASE}/rest/v1/lessons?id=eq.eaef99b6-50ee-4364-9125-178023899e16`, {
  method: 'PATCH',
  headers: { ...H, 'Prefer': 'return=minimal' },
  body: JSON.stringify({ content }),
});
console.log(r.ok ? '✅ Leçon 1 mise à jour' : '❌ Erreur: ' + r.status);
