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

const EXT2_L1 = `
## Les pièges les plus fréquents lors d'une clôture de compte

Plusieurs erreurs récurrentes compliquent inutilement la clôture d'un compte bancaire. La première est de procéder à la clôture sans avoir ouvert et testé le nouveau compte — se retrouver sans compte bancaire fonctionnel ne serait-ce que quelques jours est une situation très inconfortable dans un monde où les paiements dématérialisés sont omniprésents. La deuxième erreur est de retirer intégralement le solde avant d'avoir envoyé la demande de clôture, ce qui crée un compte à solde zéro qui risque de passer en découvert lors du traitement des dernières opérations et frais.

La troisième erreur fréquente est de ne pas envoyer la demande de clôture en recommandé avec accusé de réception. Un email ou une demande verbale peut être contesté quant à la date de réception — le recommandé assure une preuve de la date qui est incontestable. La quatrième erreur est de considérer que la clôture prend effet immédiatement dès la demande — en réalité, il faut le délai de traitement de la banque plus la migration des domiciliations, ce qui peut prendre plusieurs semaines.

## La clôture et la ponctualité des versements de CAF

Pour les étudiants qui perçoivent des aides de la CAF (APL, bourses sur critères sociaux transitant par la CAF), la continuité des versements lors d'un changement de compte est particulièrement importante. La CAF peut accuser des délais de mise à jour de jusqu'à 4 à 6 semaines après notification du changement de RIB. Pendant cette période, les versements peuvent être temporairement bloqués ou retournés.

Pour éviter tout impact sur le budget mensuel, il faut notifier la CAF du changement de RIB au moins 6 semaines à l'avance si possible, vérifier la prise en compte via l'espace Mon Compte CAF, et maintenir l'ancien compte actif pendant 2 mois après la notification pour capturer les éventuels versements tardifs encore envoyés sur l'ancien IBAN.

## La continuité de l'assurance habitation lors du changement de banque

De nombreux étudiants ont souscrit leur assurance habitation via leur banque — une offre souvent proposée à la souscription du compte étudiant. Lors de la clôture du compte bancaire, l'assurance habitation souscrite via ce même établissement peut faire l'objet d'une résiliation automatique ou d'une demande de réaffiliation à un autre établissement. Il convient de vérifier précisément ce point dans le contrat d'assurance avant de clôturer le compte.

Si l'assurance habitation est résiliée en même temps que le compte, le logement se retrouve temporairement sans assurance obligatoire — une situation illégale pour les locataires qui risquent une résiliation de bail par le propriétaire. Anticiper ce point en souscrivant une nouvelle assurance habitation auprès d'un autre assureur avant de clôturer l'ancien compte est donc indispensable. Les offres d'assurance habitation étudiante de certains assureurs en ligne (Luko, Lovys, Ornikar Assurance) permettent une souscription en quelques minutes et une prise d'effet immédiate.

## L'impact fiscal d'une clôture de compte en cours d'année

La clôture d'un compte en cours d'année fiscale n'a pas d'impact fiscal direct sur la déclaration de revenus. Les intérêts perçus sur les livrets d'épargne rattachés au compte sont déclarés normalement au titre de l'année de perception, indépendamment de la clôture du compte. La banque fournit un récapitulatif des intérêts versés dans l'année, soit dans le document de clôture, soit via un relevé fiscal de fin d'année.

En revanche, si des actifs sous-jacents sont clôturés en même temps que le compte courant (assurance-vie, PEA), les plus-values réalisées lors de ces clôtures sont imposables selon les règles propres à chaque produit. Ces implications fiscales peuvent influencer le choix du timing de la clôture — attendre le 1er janvier pour clôturer une assurance-vie avec une plus-value peut permettre de bénéficier de l'abattement fiscal annuel de la nouvelle année.
`;

const EXT2_L2 = `
## Le traitement des découverts lors de la demande de clôture

Si le compte présente un découvert autorisé en cours d'utilisation au moment de la demande de clôture, la procédure s'établit en deux temps. Première étape : rembourser le montant du découvert pour remettre le compte en solde positif. Deuxième étape : soumettre la demande de clôture avec un solde non négatif. Il n'est pas possible de clôturer un compte avec un solde négatif — la banque est en droit d'exiger le remboursement préalable.

Si le compte est en découvert non autorisé (dépassement du plafond du découvert autorisé), la situation est plus délicate. La banque peut refuser la clôture jusqu'au remboursement complet et imputer des frais d'incidents en attendant. Dans des cas extrêmes, si le découvert non autorisé est significatif et que le client ne peut pas le rembourser rapidement, la banque peut signaler la situation à la Banque de France et inscrire le client au Fichier Central des Chèques (FCC). Un conseil juridique ou l'assistance d'un médiateur bancaire peut aider à négocier une solution amiable.

## La clôture d'un compte à l'initiative de la banque

Si un client peut clôturer son compte à tout moment, la banque aussi peut de son côté décider de fermer un compte. Cette situation, bien que moins fréquente, survient dans certains cas : suspicion de fraude ou de blanchiment d'argent, non-conformité du dossier KYC (Know Your Customer), longue inactivité du compte, ou changement de politique commerciale de la banque qui l'amène à ne plus servir certains profils de clients.

Quand la banque initie la clôture, elle doit en informer le client avec un préavis raisonnable — généralement deux mois pour les comptes courants, selon les conditions générales. Le client reçoit une notification écrite expliquant la décision. Il est libre de contester cette décision en saisissant le médiateur bancaire, mais en pratique la banque est en droit de mettre fin à la relation commerciale sous réserve du respect du préavis contractuel.

## La liste de vérification avant de soumettre la demande

Avant d'envoyer sa lettre de clôture, une vérification finale de quelques points est recommandée. Vérifier que le nouveau compte est bien ouvert et fonctionnel (carte reçue et activée, premier virement test effectué). Vérifier que la liste des domiciliations à transférer est complète et que les notifications ont été envoyées aux principales entités créancières. Vérifier que les produits d'épargne rattachés ont été pris en compte dans le plan de clôture. Vérifier que les chèques récents ont été encaissés ou que les bénéficiaires ont été prévenus. Vérifier que les relevés des 5 dernières années ont été téléchargés et archivés. Cette vérification préliminaire prend quelques minutes mais peut épargner de nombreuses heures de résolution de problèmes post-clôture.
`;

const EXT2_L3 = `
## La vérification post-clôture des comptes d'épargne

Après la clôture du compte courant, il est fréquent que certains produits d'épargne rattachés ne soient pas automatiquement fermés. Un livret d'épargne, même sans compte courant actif chez la même banque, peut rester ouvert techniquement. Cela crée une situation où le client est encore client de la banque via ce produit résiduel, même après avoir cru avoir tout clôturé. Vérifier explicitement l'état de tous les produits (livrets, PEL, assurance-vie) auprès de la banque au moment de la clôture du compte courant évite ces situations de comptes dormants non-souhaitées.

Un compte d'épargne inactif peut générer des frais de tenue dans certains établissements ou au moins occuper inutilement le "plafond" réglementaire de dépôt (le Livret A ne peut être détenu que dans un seul établissement à la fois — si l'ancien livret n'est pas formellement clôturé, il bloque l'ouverture d'un nouveau Livret A dans la nouvelle banque). La clarification de l'état de tous les produits est donc une démarche nécessaire pour une sortie propre de la relation bancaire.

## L'impact sur le score de crédit informel

Les établissements bancaires en France ne consultent pas de score de crédit centralisé comme aux États-Unis ou au Royaume-Uni pour les demandes de crédit. Cependant, ils consultent deux fichiers gérés par la Banque de France : le FCC (Fichier Central des Chèques, pour les incidents sur chèques et cartes) et le FICP (Fichier National des Incidents de Remboursement des Crédits aux Particuliers, pour les incidents de remboursement de crédits). La clôture d'un compte sans incident n'a aucun impact sur ces fichiers.

En revanche, une clôture forcée suite à des incidents de paiement répétés peut laisser une trace dans ces fichiers. Un client inscrit au FICP a des difficultés à obtenir des crédits bancaires pendant la durée de l'inscription (5 ans maximum, ou jusqu'au remboursement de la dette si elle intervient avant). Gérer proprement la clôture de son compte, en s'assurant qu'aucun incident n'est laissé non résolu, est donc une précaution importante pour sa santé bancaire à long terme.

## La communication de la clôture aux ayants droit en cas de situation particulière

Pour des raisons de sécurité et d'organisation familiale, il peut être utile d'informer un proche de confiance (conjoint, parent) de la clôture d'un compte et des nouvelles coordonnées bancaires du nouveau compte. Cette communication préventive est particulièrement pertinente en cas de décès : si personne dans l'entourage ne connaît l'existence ou les coordonnées de la nouvelle banque, les fonds peuvent devenir des actifs non localisables qui finissent par être versés à la Caisse des Dépôts comme compte inactif après 10 ans.

Garder un document récapitulatif de ses comptes bancaires actuels (banque, type de compte, IBAN, présence de produits d'épargne) dans un endroit accessible à ses proches de confiance est une pratique de gestion patrimoniale prudente. Ce document doit être mis à jour à chaque ouverture ou clôture de compte.
`;

const EXT2_L4 = `
## Les alternatives à la clôture totale du compte

Dans certains cas, la clôture totale du compte n'est pas nécessaire. Si le changement de banque est motivé par des frais excessifs, il peut être utile de négocier d'abord avec la banque actuelle avant de prendre la décision irréversible de clôturer. Les banques préfèrent généralement retenir un client en lui offrant des conditions améliorées plutôt que de le perdre définitivement — notamment si le client a plusieurs années d'ancienneté et une relation globale (épargne, assurances, crédit) avec l'établissement.

Une autre alternative est le compte "en veille" : certains étudiants qui partent à l'étranger préfèrent laisser leur compte ouvert avec un solde minimal plutôt que de le clôturer, pour éviter d'avoir à en rouvrir un à leur retour. Cette stratégie a un coût (frais de tenue de compte potentiels), mais peut être économiquement justifiée si le retour en France est prévu dans un délai raisonnable et si les frais de tenue sont faibles.

## Les recours si la demande de clôture est ignorée

Si la banque ignore la demande de clôture sans réponse ni traitement dans un délai de 30 jours, les recours progressifs sont les suivants. D'abord, une relance par courrier recommandé avec accusé de réception mentionnant explicitement la première demande, la date de réception de l'accusé de réception de la première lettre, et une mise en demeure de traiter la demande dans un délai de 15 jours. Ensuite, si la mise en demeure reste sans effet, la saisine du médiateur bancaire avec copie de tous les courriers échangés. Le médiateur peut contraindre la banque à traiter la demande.

Dans des cas extrêmes de refus injustifié et persistant, la plainte à l'ACPR (Autorité de Contrôle Prudentiel et de Résolution) peut être envisagée. L'ACPR ne règle pas les litiges individuels directement mais peut enquêter sur les pratiques d'un établissement si de nombreuses plaintes similaires sont reçues. Pour les litiges de montant limité, le tribunal de proximité reste accessible sans avocat obligatoire.

## L'expérience d'autres clients comme source d'information

Avant de choisir entre différentes banques pour un changement, ou pour comprendre les spécificités de la procédure de clôture d'une banque spécifique, les témoignages d'autres clients sont une source d'information précieuse. Les forums de finance personnelle (reddit r/vosfinances, forums de partage d'expériences bancaires), les groupes Facebook d'étudiants étrangers en France, et les avis clients sur les plateformes comme Trustpilot contiennent souvent des témoignages détaillés sur les expériences de clôture dans différents établissements.

Ces retours d'expérience permettent d'identifier les banques réputées pour traiter rapidement et sans friction les demandes de clôture, et celles qui sont connues pour complexifier le processus. Cette information est difficile à trouver dans la documentation officielle des banques mais est très précieuse pour anticiper les démarches et éviter les surprises.
`;

const EXT2_L5 = `
## Les frais de résiliation anticipée : quand s'appliquent-ils ?

Les frais de résiliation anticipée peuvent s'appliquer dans certaines conditions spécifiques liées à la souscription d'offres bancaires avec engagement de durée. Certaines offres packagées (compte + carte + assurance + épargne) proposées à des tarifs préférentiels sont assorties d'un engagement de 12 ou 24 mois. Une clôture avant l'échéance de cet engagement peut entraîner des pénalités prévues au contrat.

Ces frais de résiliation anticipée sont encadrés — ils ne peuvent pas être excessifs au regard du bénéfice préférentiel accordé pendant la période d'engagement. La consultation du contrat de souscription, notamment les mentions sur la durée d'engagement et les pénalités de résiliation anticipée, doit être effectuée avant de prendre la décision de clôture. Si ces frais sont présents et significatifs, il peut être économiquement rationnel d'attendre la fin de l'engagement avant de procéder à la clôture.

## Les implications pour les cautions de logement liées au compte

Pour certains logements, l'IBAN du compte bancaire est utilisé comme coordonnées pour une garantie ou une caution. La Garantie VISALE par exemple est associée à des coordonnées bancaires pour les éventuels remboursements. Le garant bancaire ou la garantie institutionnelle peuvent avoir des conditions spécifiques concernant la stabilité des coordonnées bancaires pendant la durée de la location.

Il est important de vérifier, avant de clôturer son compte, si ce compte est mentionné dans un contrat de bail ou une convention de garantie, et quelles sont les obligations de notification au propriétaire ou à l'organisme garant en cas de changement de coordonnées bancaires. Ne pas notifier le propriétaire d'un changement de RIB pour le virement du loyer peut générer des incidents de paiement non voulus.

## La clôture dans le cas de faillite personnelle

Bien que la faillite personnelle (surendettement déclaré auprès de la Banque de France) soit une situation rare pour les étudiants, il est utile de savoir que dans ce contexte, la procédure de clôture des comptes bancaires est gérée dans le cadre de la procédure de surendettement elle-même. La commission de surendettement peut être amenée à organiser le traitement des dettes, y compris celles envers la banque, avant toute clôture. Dans ce cas, l'accompagnement d'un conseiller en gestion budgétaire ou d'un avocat est indispensable.

Pour prévenir de telles situations, il est recommandé d'agir rapidement et de contacter un organisme d'aide dès les premiers signes de difficultés financières sérieuses, sans attendre que la situation devienne critique. Les points Conseil Budget (PCB) mis en place par l'État offrent un accompagnement gratuit et confidentiel pour les personnes en difficulté financière.
`;

const EXT2_L6 = `
## Le rôle de l'huissier dans les situations de litige grave

Dans les situations de litige grave avec une banque — refus abusif de clôture, rétention injustifiée de fonds, ou incidents bancaires graves — l'intervention d'un huissier de justice peut être nécessaire pour formaliser les actes en droit. Un huissier peut constater officiellement la réception d'une demande, signifier un acte juridique à la banque, ou constater des preuves de préjudice. Ces démarches ont un coût mais créent des preuves légales solides qui renforcent la position du client dans un litige.

Pour les étudiants en situation de litige bancaire sérieux, l'aide juridictionnelle peut couvrir tout ou partie des frais d'huissier si les conditions de revenus sont remplies. La demande d'aide juridictionnelle se fait auprès du Tribunal de Grande Instance (TGI) du domicile du demandeur.

## La gestion des dettes résiduelles après clôture

Si une dette subsiste envers la banque après la clôture du compte — des frais facturés après la date de clôture officielle, par exemple — la banque dispose des voies de recouvrement habituelles pour récupérer ces montants. Dans un premier temps, une mise en demeure par courrier est envoyée au client. Si elle reste sans effet, la banque peut engager une procédure de recouvrement amiable via un cabinet spécialisé, puis judiciaire. Ces procédures de recouvrement ont un impact sur le dossier bancaire du client et peuvent mener à une inscription au FICP si elles concernent un crédit non remboursé.

Pour éviter ces situations, il convient de régler toutes les sommes dues à la banque avant la clôture, et de contester immédiatement et par écrit tout frais qui semble injustifié après la clôture. Garder un fond de roulement de quelques dizaines d'euros sur le compte jusqu'à ce que la confirmation de clôture avec solde final soit reçue garantit qu'aucune somme résiduelle n'est laissée en suspens.

## Conclusion : la clôture comme acte financier responsable

Clôturer un compte bancaire est un acte de gestion financière responsable qui peut être réalisé sereinement avec une bonne préparation. La procédure en France est encadrée et protectrice pour les consommateurs — le droit à la clôture est absolu, les délais sont réglementés, et des recours existent si la procédure est mal traitée. Pour les étudiants et les personnes en mobilité qui changent fréquemment de situation, maîtriser cette procédure fait partie des compétences administratives essentielles pour une vie financière fluide et organisée en France.
`;

await appendAndPatch('993f2c6f-3af0-472b-b7eb-e828b1aa09e9', EXT2_L1);
await appendAndPatch('2c258539-3073-41f6-b0b7-d30fc935fff8', EXT2_L2);
await appendAndPatch('bae3513f-1fe0-40ef-a639-9e54c053bf60', EXT2_L3);
await appendAndPatch('e9fa9b23-5d88-4067-a94f-7f988db9839f', EXT2_L4);
await appendAndPatch('9bf50448-7156-4821-872c-66d32e62a84f', EXT2_L5);
await appendAndPatch('2b027cc3-557e-4ef3-914b-2356ad93c539', EXT2_L6);
