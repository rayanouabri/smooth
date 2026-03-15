export default [
  {
    course_id: "2d6489be-6503-4936-80cd-c5fbcb4ad0c2",
    title: "Les virements internationaux en France : les bases",
    lesson_order: 1, order: 1, duration_minutes: 25,
    video_url: "https://www.youtube.com/watch?v=nkEP3SWXHRU",
    resources: JSON.stringify([
      {"title":"Banque de France – Virements SWIFT","url":"https://www.banque-france.fr","type":"link"},
      {"title":"Wise – Transferts internationaux","url":"https://wise.com/fr","type":"link"},
      {"title":"BCE – Virements SEPA zone euro","url":"https://www.ecb.europa.eu/fr","type":"link"},
      {"title":"FBF – Frais virements internationaux","url":"https://www.fbf.fr","type":"link"},
      {"title":"Service-Public – Virement étranger","url":"https://www.service-public.fr","type":"link"},
      {"title":"Western Union France","url":"https://www.westernunion.com/fr","type":"link"},
      {"title":"Moneygram France","url":"https://www.moneygram.com/fr","type":"link"},
      {"title":"Banque France – IBAN BIC expliqués","url":"https://www.banque-france.fr","type":"link"}
    ]),
    content: `# Les virements internationaux en France : comprendre le système

Pour les étudiants étrangers en France, les virements d'argent entre la France et leur pays d'origine sont une réalité quotidienne. Comprendre les systèmes disponibles vous permettra d'économiser significativement sur les frais et de gérer ces transferts efficacement.

## Les deux grands systèmes de virement international

**Le virement SEPA (Single Euro Payments Area)** : système de paiement unifié pour l'Europe (36 pays, dont les 27 de l'UE + UK, Norvège, Suisse, Islande, Liechtenstein). Un virement SEPA entre deux pays de la zone SEPA est traité comme un virement national : même rapidité (1 jour ouvré ou instantané), même coût (généralement gratuit ou très faible). Vous avez besoin de l'IBAN et du BIC du destinataire.

**Le virement SWIFT** : système mondial de transfert bancaire entre banques de différents pays, notamment hors zone SEPA. Plus lent (2 à 5 jours ouvrés), plus cher (frais de la banque émettrice + frais de la banque réceptrice + frais de change), mais universel — fonctionne vers n'importe quel pays ayant des banques connectées au réseau SWIFT.

## L'IBAN et le BIC/SWIFT : les codes essentiels

**L'IBAN (International Bank Account Number)** : le numéro international de votre compte bancaire. Format : code pays (2 lettres) + chiffres de contrôle + numéro de compte formaté. En France, l'IBAN commence par "FR" suivi de 25 caractères. Exemple : FR76 3000 6000 0112 3456 7890 189.

**Le BIC/SWIFT** : code identifiant votre banque (Bank Identifier Code). Composé de 8 ou 11 caractères. Nécessaire pour les virements internationaux, notamment SWIFT. Exemple : BNPAFRPPXXX (BNP Paribas Paris).

Trouvez votre IBAN et BIC : sur votre relevé de compte, dans votre application bancaire dans la section "Mon compte" ou "RIB" (Relevé d'Identité Bancaire).

<iframe width="100%" height="480" src="https://www.youtube.com/embed/nkEP3SWXHRU" title="Virements internationaux France bases IBAN BIC SWIFT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les frais d'un virement international classique

Un virement SWIFT depuis une banque française traditionnelle vers un pays hors zone SEPA (Maroc, Sénégal, Algérie, pays d'Asie, Amérique du Sud...) coûte généralement :
- **Frais d'émission (banque française)** : 10 à 25 euros
- **Commission de change** : 1 à 3% du montant
- **Frais de réception (banque destinataire)** : 5 à 15 euros supplémentaires déduits à la réception

Un virement de 500 euros peut donc coûter 30 à 60 euros en frais totaux. C'est excessif pour des transferts réguliers.

## Les alternatives moins chères aux virements bancaires classiques

La solution phare pour les étudiant étrangers est **Wise** (anciennement TransferWise). Wise applique le taux de change de marché réel (sans marge cachée) et des frais transparents bas (environ 0,5 à 2% selon la devise). Pour un envoi de vos parents de 500 euros depuis le Maroc vers votre compte français, Wise peut coûter 2 à 5 euros de frais au lieu de 30 à 60 euros avec un virement bancaire classique.`,
  },
  {
    course_id: "2d6489be-6503-4936-80cd-c5fbcb4ad0c2",
    title: "Les meilleures solutions pour envoyer et recevoir de l'argent de l'étranger",
    lesson_order: 2, order: 2, duration_minutes: 27,
    video_url: "https://www.youtube.com/watch?v=_1mPx4FZTMA",
    resources: JSON.stringify([
      {"title":"Wise – Transferts moins chers","url":"https://wise.com/fr","type":"link"},
      {"title":"Revolut – Compte multi-devises","url":"https://www.revolut.com/fr","type":"link"},
      {"title":"Western Union – Envoi espèces","url":"https://www.westernunion.com/fr","type":"link"},
      {"title":"Remitly – Transferts Afrique Asie","url":"https://www.remitly.com/fr","type":"link"},
      {"title":"WorldRemit – Transferts internationaux","url":"https://www.worldremit.com/fr","type":"link"},
      {"title":"PaySend – Transferts Europe","url":"https://paysend.com/fr","type":"link"},
      {"title":"Comparisoon – Comparateur transferts","url":"https://www.monito.com/fr","type":"link"},
      {"title":"Monito – Comparateur frais transfert","url":"https://www.monito.com/fr","type":"link"}
    ]),
    content: `# Les meilleures solutions pour envoyer et recevoir de l'argent de l'étranger

Le marché des transferts d'argent internationaux a été révolutionné par les fintech ces dix dernières années. Ce cours compare les principales options pour les étudiants étrangers en France.

## Wise (anciennement TransferWise) : le référence

Wise est la solution la plus transparente et souvent la moins chère pour les transferts internationaux. Fondé en 2011, il opère dans plus de 80 pays et 50 devises.

**Fonctionnement** : Wise utilise un système de jumelage des transferts (pas de vrai virement international, mais compensation interne) pour proposer le taux de change de marché réel (appelé "taux millieu de marché") sans marge cachée.

**Frais** : très bas et transparents. Affichés clairement avant confirmation. Varient selon la devise et le montant (environ 0,5 à 2%).

**Délai** : souvent immédiat ou en 1-2 jours ouvrés selon la devise.

**Praticité** : vos parents ou votre famille à l'étranger créent un compte Wise dans leur pays et vous envoient de l'argent vers votre IBAN français (ou vers votre compte Wise avec IBAN européen).

<iframe width="100%" height="480" src="https://www.youtube.com/embed/_1mPx4FZTMA" title="Meilleures solutions envoyer recevoir argent étranger France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Revolut : compte multi-devises pratique

Revolut propose un compte multi-devises que vous gérez depuis votre smartphone. Vous pouvez détenir des euros, dollars, livres, dirhams, et des dizaines d'autres devises.

**Les avantages pour les étudiants étrangers** :
- Pas de frais de change sur les dépenses en devises étrangères dans la limite mensuelle gratuite
- Conversion de devises à taux de marché (dans les limites mensuelles gratuites)
- Virement vers votre famille à l'étranger en devise locale depuis l'app

**Limites** : l'IBAN Revolut est un IBAN lituanien (LT). Certains propriétaires ou organismes français refusent les virements depuis des IBAN non-français. Pour cette raison, Revolut est un complement à un vrai compte bancaire français, rarement un substitut complet.

## Remitly, WorldRemit : spécialisés pour les corridors Afrique/Asie

Ces plateformes sont très utilisées pour les envois vers l'Afrique subsaharienne, l'Asie du Sud-Est, et l'Amérique latine — des destinations où Wise est parfois moins compétitif.

**Remitly** : très bon pour les envois vers le Maroc, le Sénégal, le Cameroun, l'Inde, les Philippines. Souvent compétitif sur ces corridors.

**WorldRemit** : similaire, avec une bonne couverture mondiale et des frais clairs.

## Western Union et MoneyGram : le cash, toujours utile

Pour les envois qui doivent être retirés **en espèces dans une agence** (quand le destinataire n'a pas de compte bancaire), Western Union et MoneyGram restent les leaders.

**Praticité** : envoi depuis l'app ou en agence, retrait en espèces par le destinataire dans une agence partenaire dans le monde entier. Instantané.

**Coût** : généralement plus élevé que les solutions en ligne, mais justifié par la praticité du retrait cash.

## Le comparateur : Monito

Pour chaque transfert international, comparez les options sur **Monito.com** — un comparateur de transferts d'argent qui liste en temps réel les meilleures offres selon le montant envoyé, la devise et le pays destinataire. C'est l'outil de référence pour ne jamais payer trop cher.`,
  },
  {
    course_id: "2d6489be-6503-4936-80cd-c5fbcb4ad0c2",
    title: "Recevoir de l'argent de sa famille : cas pratiques par région",
    lesson_order: 3, order: 3, duration_minutes: 25,
    video_url: "https://www.youtube.com/watch?v=H3xSmEDaBKw",
    resources: JSON.stringify([
      {"title":"Wise – Maroc vers France","url":"https://wise.com/fr","type":"link"},
      {"title":"Remitly – Sénégal France","url":"https://www.remitly.com/fr","type":"link"},
      {"title":"Wise – Inde vers Europe","url":"https://wise.com/fr","type":"link"},
      {"title":"CiCi – Transfert Chine Europe","url":"https://wise.com/fr","type":"link"},
      {"title":"Currency Fair – Euro zone","url":"https://www.currencyfair.com","type":"link"},
      {"title":"WorldRemit – Afrique francophone","url":"https://www.worldremit.com/fr","type":"link"},
      {"title":"Bank Al-Maghrib – Réglementation transferts Maroc","url":"https://www.bkam.ma","type":"link"},
      {"title":"BCEAO – Zone franc transferts","url":"https://www.bceao.int","type":"link"}
    ]),
    content: `# Recevoir de l'argent de sa famille : cas pratiques par région

Les conditions de transfert d'argent varient selon le pays d'origine. Ce cours détaille les situations pour les principales régions d'origine des étudiants étrangers en France.

## Depuis le Maghreb (Maroc, Tunisie, Algérie)

**Maroc** : le Maroc a un contrôle des changes. Les transferts d'argent depuis le Maroc vers l'étranger sont régulés — les résidents marocains peuvent envoyer de l'argent à l'étranger via les circuits officiels (banques agréées, offices de change autorisés).

Wise fonctionne bien pour la paire MAD-EUR. Remitly également. Les banques marocaines ont des accords avec les banques françaises pour les virements SWIFT — coûteux mais fiables.

**Tunisie** : réglementation similaire sur le contrôle des changes. Les transferts via les banques tunisiennes ou via Western Union sont courants.

**Algérie** : la réglementation des changes en Algérie est stricte. Les transferts officiels sont limités. Beaucoup d'étudiants algériens en France reçoivent de l'argent via des intermédiaires informels (réseaux de confiance) — attention aux risques légaux de ces systèmes informels.

## Depuis l'Afrique subsaharienne

**Zone CFA (Sénégal, Côte d'Ivoire, Cameroun, Mali...)** : les transferts depuis la zone CFA vers la France peuvent passer par Wise, Remitly, WorldRemit ou les envois Western Union/MoneyGram.

Le virement bancaire direct (SWIFT) depuis les banques de la zone CFA est possible mais coûteux. Les néobanques comme Wave (populaire au Sénégal) permettent des envois facilités vers l'Europe.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/H3xSmEDaBKw" title="Recevoir argent famille France cas pratiques région" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Depuis l'Asie (Inde, Chine, Vietnam, Corée)

**Inde** : les transferts INR-EUR sont bien servis par Wise, Remitly, et les banques indiennes habituées à gérer les transferts pour la diaspora. Délai : 1 à 2 jours.

**Chine** : la Chine a un contrôle des changes strict. Les ressortissants chinois peuvent envoyer jusqu'à 50 000 USD équivalent par an via des voies officielles. Au-delà, des procédures supplémentaires sont nécessaires. WeChat Pay et Alipay ont des fonctionnalités de virement international mais leur disponibilité vers la France varie.

**Vietnam** : Western Union et Wise sont utilisés. Les banques vietnamiennes font des virements SWIFT mais avec des frais.

## Depuis l'Amérique latine

Les plateformes Wise, Remitly et Western Union couvrent bien les corridors depuis le Mexique, le Brésil, la Colombie, le Pérou vers la France.

Les frais varient selon la devise — les devises plus volatiles (peso mexicain, real brésilien) ont souvent des spreads de change plus importants.

## La solution pratique : le compte Wise multi-devises pour vous

La solution la plus pratique pour gérer des transferts depuis plusieurs pays différents : **ouvrir un compte Wise en tant qu'étudiant en France**. Vous obtenez un IBAN européen (belge) et des "comptes" dans de nombreuses devises. Vos parents peuvent vous envoyer de l'argent en devise locale sur votre "compte" Wise dans cette devise, qui est ensuite converti en euros et disponible immédiatement.

Cette solution est particulièrement utile si vous avez de la famille dans plusieurs pays ou si les virements sont fréquents (mensuel).`,
  },
  {
    course_id: "2d6489be-6503-4936-80cd-c5fbcb4ad0c2",
    title: "La réglementation des transferts d'argent en France",
    lesson_order: 4, order: 4, duration_minutes: 22,
    video_url: "https://www.youtube.com/watch?v=OkEQJ-xPHFI",
    resources: JSON.stringify([
      {"title":"Banque de France – Réglementation transferts","url":"https://www.banque-france.fr","type":"link"},
      {"title":"TRACFIN – Lutte blanchiment","url":"https://www.economie.gouv.fr/tracfin","type":"link"},
      {"title":"Douanes – Déclaration espèces","url":"https://www.douane.gouv.fr","type":"link"},
      {"title":"AMF – Autorisation prestataires paiement","url":"https://www.amf-france.org","type":"link"},
      {"title":"Service-Public – Déclaration devises frontière","url":"https://www.service-public.fr","type":"link"},
      {"title":"Légifrance – Blanchiment financement terrorisme","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"ACPR – Établissements paiement agréés","url":"https://www.acpr.banque-france.fr","type":"link"},
      {"title":"DGFiP – Avoirs étrangers déclaration","url":"https://www.impots.gouv.fr","type":"link"}
    ]),
    content: `# La réglementation des transferts d'argent en France

La France, comme tous les pays de l'UE, a une réglementation stricte sur les transferts d'argent visant à lutter contre le blanchiment et le financement du terrorisme. Ce cours vous explique ce que vous devez savoir pour rester en conformité.

## La déclaration des espèces aux frontières

Si vous entrez ou sortez de France (ou de tout pays de l'UE) avec **10 000 euros ou plus en espèces**, vous devez le déclarer aux douanes. Cette obligation s'applique à tous les voyageurs.

**Où déclarer** : aux douanes françaises à votre arrivée ou départ. Des formulaires de déclaration sont disponibles aux points d'entrée et sur le site des douanes.

**Sanction en cas de non-déclaration** : confiscation des sommes et amende pouvant aller jusqu'au montant non déclaré.

Cette règle s'applique aussi aux chèques, bons au porteur et instruments équivalents.

## Les établissements de paiement agréés

En France, pour proposer des services de transfert d'argent, une entreprise doit être agréée par l'ACPR (Autorité de Contrôle Prudentiel et de Résolution) ou l'AMF selon leur activité.

Wise, Revolut, Western Union, MoneyGram sont tous des établissements agréés. Les transactions via ces plateformes sont légales et sécurisées réglementairement.

**Attention aux services informels** : les transferts via des réseaux informels non agréés (personnes transportant de l'argent physiquement, systèmes de compensation hors-système bancaire) peuvent exposer à des poursuites pour blanchiment ou non-déclaration — même si les sommes sont légitimes.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/OkEQJ-xPHFI" title="Réglementation transferts argent France conformité" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les seuils et contrôles sur les virements bancaires

Les banques françaises ont l'obligation légale de surveiller les transactions :

**Signalement de transactions suspectes** : les banques signalent à TRACFIN (Traitement du renseignement et action contre les circuits financiers clandestins) toute transaction semblant anormale ou inexpliquée.

**Demande de justification** : pour des virements inhabituels (montant, destination), votre banque peut vous demander de justifier l'origine des fonds ou la nature de la transaction. C'est une obligation légale pour la banque, pas une accusation envers vous. La coopération et la transparence sont la bonne attitude.

## La déclaration des comptes bancaires étrangers

Si vous avez des **comptes bancaires à l'étranger** (dans votre pays d'origine, par exemple), vous devez les déclarer chaque année dans votre déclaration de revenus en France (si vous êtes résident fiscal français). Il y a un formulaire annexe (formulaire 3916) à joindre à votre déclaration.

Cette obligation existe même si ces comptes ne génèrent aucun revenu (compte soldé, compte de dépôt sans intérêts).

**Sanction en cas d'omission** : amende de 1 500 euros par compte non déclaré (et 10 000 euros si le compte est dans un pays avec lequel la France n'a pas de convention d'échange d'informations).

Beaucoup d'étudiants étrangers ignorent cette obligation. Si vous conservez un compte dans votre pays d'origine (ce qui est commun), pensez à le déclarer avec votre déclaration de revenus.`,
  },
  {
    course_id: "2d6489be-6503-4936-80cd-c5fbcb4ad0c2",
    title: "Envoyer de l'argent de France vers son pays d'origine",
    lesson_order: 5, order: 5, duration_minutes: 22,
    video_url: "https://www.youtube.com/watch?v=r2ZbQU3YPAY",
    resources: JSON.stringify([
      {"title":"Wise – Envoyer argent depuis France","url":"https://wise.com/fr","type":"link"},
      {"title":"Western Union – Envoi depuis France","url":"https://www.westernunion.com/fr","type":"link"},
      {"title":"PaySend – France vers monde","url":"https://paysend.com/fr","type":"link"},
      {"title":"Revolut – Transfert international","url":"https://www.revolut.com/fr","type":"link"},
      {"title":"Société Générale – Virement international","url":"https://www.societegenerale.fr","type":"link"},
      {"title":"BNP – Virement étranger","url":"https://www.bnpparibas.fr","type":"link"},
      {"title":"Monito – Comparer transferts","url":"https://www.monito.com/fr","type":"link"},
      {"title":"LCL – Transfert international","url":"https://www.lcl.fr","type":"link"}
    ]),
    content: `# Envoyer de l'argent de France vers son pays d'origine

Vous pouvez avoir besoin d'envoyer de l'argent depuis la France vers votre famille ou vos proches dans votre pays d'origine — pour aider financièrement, payer des dépenses là-bas, ou constituer une épargne locale. Ce cours couvre les aspects pratiques.

## Quand envoyer de l'argent depuis la France

Les situations courantes :
- Aide financière régulière à votre famille
- Paiement de loyers ou de charges pour votre logement resté vide dans votre pays
- Constitution d'une épargne dans votre banque locale
- Remboursement d'un prêt familial

## Les meilleures options pour envoyer depuis la France

**Wise** : entrez le montant en euros et sélectionnez la devise cible. Wise affiche immédiatement combien votre famille recevra, avec le taux de change réel et les frais détaillés. L'envoi se fait depuis votre compte bancaire français (virement vers Wise) ou par carte.

**Western Union** : pratique si votre famille n'a pas de compte bancaire et a besoin de retirer en espèces. Envoi depuis l'application, retrait en agence dans le monde entier. Les frais sont plus élevés que Wise mais la option cash-pickup est unique.

**Depuis votre banque française** : possible via un virement SWIFT, mais les frais sont souvent élevés (15 à 25 euros + commission de change). Réservé si vous n'avez pas d'alternative ou pour des montants importants ponctuels.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/r2ZbQU3YPAY" title="Envoyer argent France pays origine pratique frais" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Comment effectuer un virement international depuis votre banque en ligne

Si vous utilisez une banque en ligne française (Boursorama, Hello bank!) pour un virement SWIFT :

1. Dans votre application → "Virements" → "Virement international"
2. Renseignez : IBAN du destinataire (ou numéro de compte dans le format local), BIC/SWIFT de la banque destinataire, montant et devise
3. Confirmez les frais affichés avant de valider
4. Un code de confirmation peut être demandé (authentification forte)

Délai : 2 à 4 jours ouvrés pour un SWIFT standard. Certaines banques proposent des virements express plus rapides (contre des frais supplémentaires).

## Les transferts récurrents : la domiciliation

Si vous envoyez régulièrement (mensuellement), configurez un **virement permanent** depuis votre application bancaire ou depuis Wise. Cela automatise l'envoi sans avoir à le refaire manuellement chaque mois.

Wise permet de configurer des "subscriptions" de transfert — très pratique pour les envois de soutien familial mensuel.

## Optimiser le timing pour le taux de change

Les taux de change fluctuent quotidiennement. Pour les gros transferts, certaines personnes attendent un taux favorable avant de transférer. Wise et Revolut proposent des alertes de taux — vous êtes notifié quand le taux atteint un niveau cible.

Pour les petits montants réguliers (moins de 300 euros), les fluctuations de change ont peu d'impact significatif et il est plus simple de transférer sans attendre.`,
  },
  {
    course_id: "2d6489be-6503-4936-80cd-c5fbcb4ad0c2",
    title: "Gérer une situation d'urgence financière : argent perdu, blocage, fraude",
    lesson_order: 6, order: 6, duration_minutes: 22,
    video_url: "https://www.youtube.com/watch?v=M2fSSSdI2Cg",
    resources: JSON.stringify([
      {"title":"Western Union – Suivi virement","url":"https://www.westernunion.com/fr","type":"link"},
      {"title":"Wise – Support client","url":"https://wise.com/fr","type":"link"},
      {"title":"ACPR – Signaler ESC arnaque","url":"https://www.acpr.banque-france.fr","type":"link"},
      {"title":"Cybermalveillance – Fraude paiement","url":"https://www.cybermalveillance.gouv.fr","type":"link"},
      {"title":"Banque de France – Opposition carte","url":"https://www.banque-france.fr","type":"link"},
      {"title":"Direction Générale Concurrence – Escroqueries","url":"https://www.dgccrf.bercy.gouv.fr","type":"link"},
      {"title":"Signal.conso – Signaler fraude","url":"https://signal.conso.gouv.fr","type":"link"},
      {"title":"CDNR – Aide non-résidents urgence","url":"https://www.impots.gouv.fr","type":"link"}
    ]),
    content: `# Gérer une urgence financière internationale : virement bloqué, fraude, perte d'argent

Des situations inattendues peuvent survenir avec les transferts internationaux. Ce cours vous prépare aux urgences financières les plus courantes.

## Le virement qui n'arrive pas

Si vous attendez un virement et qu'il n'est pas arrivé après le délai normal (3 à 5 jours pour SWIFT, 1 à 2 jours pour Wise) :

**Étape 1** : vérifiez avec l'expéditeur que le virement a bien été initié et demandez le **numéro de référence** (numéro de transaction ou "référence SWIFT / ID de transaction").

**Étape 2** : contactez votre banque française avec ce numéro de référence pour "tracer" le virement. La banque peut rechercher où le transfert est bloqué.

**Les raisons courantes de blocage** :
- IBAN ou BIC erroné (vérifiez les coordonnées fournies)
- Demande de justification par votre banque (un email peut être en attente dans votre messagerie)
- Délai bancaire normal en particulier entre pays avec peu de relations bancaires directes
- Fête bancaire dans un ou plusieurs pays intermédiaires

**Chez Wise** : l'application montre en temps réel le statut de chaque transfert. En cas de problème, le support Wise est joignable en ligne.

## La fraude et l'arnaque aux transferts

Les arnaques aux transferts d'argent ciblant les étudiants existent :

**L'arnaque au faux logement** : un propriétaire fictif demande un virement de caution avant la visite ou avant la signature d'un bail. Règle absolue : **never pay before signing a real lease and physically viewing the property**.

**L'arnaque à l'urgence familiale** : vous recevez un message de quelqu'un prétendant être un proche en urgence qui a besoin d'argent immédiatement. Vérifiez toujours directement par appel vidéo avant tout envoi.

**Les plateformes de transfert non agréées** : si on vous propose d'utiliser une plateforme inconnue avec des taux trop bons pour être vrais, vérifiez son agrément sur le site de l'ACPR avant d'envoyer quoi que ce soit.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/M2fSSSdI2Cg" title="Urgence financière virement bloqué fraude argent France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Que faire si vous avez été victime d'une fraude

**Immédiatement** : contactez votre banque ou la plateforme de transfert pour tenter de bloquer le virement. Plus tôt vous signalez, plus il y a de chances d'interception.

**Portez plainte** : rendez-vous au commissariat de police (ou en ligne via la plateforme Thésée pour les arnaques internet).

**Signalez sur signal.conso.gouv.fr** : la plateforme officielle de signalement des arnaques.

Un virement SWIFT complété est généralement irrécupérable (les fonds ont quitté le système bancaire vers un compte à l'étranger). Les chances de récupération sont faibles mais déposer une plainte est nécessaire pour documentaire la fraude.

## L'urgence financière personnelle : vous n'avez plus d'argent

Si vous vous retrouvez sans ressource en France suite à une perte (vol, fraude) ou un accident :

**Le CROUS** : aide d'urgence possible (cf. cours sur le budget étudiant).

**Votre ambassade ou consulat** : en cas d'urgence absolue (vol de tous vos documents ET de votre argent), votre ambassade peut vous orienter vers des aides d'urgence consulaires ou vous faciliter un transfert d'argent d'urgence de votre famille.

**Votre assurance voyageur** : si vous avez une assurance voyage ou une couverture internationale via votre carte bancaire, des garanties d'assistance rapatriement ou d'avance de fonds d'urgence peuvent exister. Vérifiez votre contrat.`,
  },
]
