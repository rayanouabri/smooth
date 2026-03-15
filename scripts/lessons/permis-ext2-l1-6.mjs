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
## Le rôle de l'avocat dans une demande de naturalisation

La demande de naturalisation est une démarche administrative qu'un candidat bien organisé peut en théorie mener seul, sans assistance juridique. Cependant, le recours à un avocat spécialisé en droit des étrangers apporte une valeur ajoutée significative dans plusieurs types de situations. Pour les dossiers complexes — ceux qui impliquent des antécédents pénaux, des périodes d'irrégularité passée, des situations familiales atypiques ou des doutes sur la complétude des cinq ans de résidence — l'expertise juridique permet d'identifier les points de fragilité avant le dépôt et d'anticiper les éventuelles objections de l'administration.

Pour les dossiers a priori solides, l'avocat peut également apporter une valeur ajoutée en termes de présentation et de stratégie argumentative : comment mettre en valeur les éléments forts d'un parcours d'intégration, comment répondre à des questions potentiellement délicates lors de l'entretien d'assimilation, comment formuler les pièces du dossier pour maximiser l'impact auprès des services instructeurs. Le coût d'une consultation ou d'un accompagnement par un avocat spécialisé doit être mis en balance avec l'enjeu du dossier — une naturalisation représente un tournant administratif et identitaire majeur qui mérite d'être préparé avec le sérieux qu'il requiert.

Les associations d'aide aux étrangers (GISTI, Cimade, France Terre d'Asile) proposent par ailleurs des permanences juridiques gratuites ou à tarif modique pour les personnes qui n'ont pas les moyens de financer un accompagnement par un avocat. Ces permanences sont animées par des bénévoles juridiquement formés ou par des professionnels du droit qui exercent bénévolement une partie de leur activité dans ces structures.

## La question des antécédents judiciaires et leur impact

L'honorabilité est une condition de fond de la naturalisation qui exige l'absence de condamnation pénale sérieuse à l'encontre du demandeur. Cette condition est vérifiée systématiquement par les services instructeurs via la consultation du bulletin n°2 du casier judiciaire — le bulletin qui mentionne les condamnations à des peines d'emprisonnement, les condamnations pour crimes, délits graves, infractions à la législation sur les étrangers, et certaines infractions spécifiques.

La question est : quelles condamnations sont réellement incompatibles avec la naturalisation ? La réponse est nuancée. Les condamnations pour crimes ou pour délits graves (vols avec violence, trafics de stupéfiants, fraudes importantes, violences conjugales) sont en principe incompatibles avec la naturalisation. Les condamnations pour des délits mineurs anciens, uniquement si elles ont donné lieu à une peine légère et ne se sont pas répétées, peuvent ne pas constituer un obstacle insurmontable si l'intégration du demandeur est par ailleurs solide et si la condamnation est suffisamment ancienne.

Les infractions à la législation sur les étrangers — notamment le séjour irrégulier ou le travail irrégulier qui ont fait l'objet d'une condamnation pénale — sont des antécédents spécifiquement regardés de près dans les dossiers de naturalisation. Une condamnation ancienne pour séjour irrégulier, si elle date de plus de dix ans et n'a pas été suivie de nouvelles infractions, peut dans certains cas être considérée comme ne faisant pas obstacle à la naturalisation, mais elle fragilise le dossier.

## Préparer l'entretien d'assimilation : contenu et méthode

La préparation concrète à l'entretien d'assimilation est un investissement qui peut faire la différence dans l'issue de la demande de naturalisation. Cet entretien n'est pas un examen au sens académique du terme — il n'y a pas de liste officielle de questions à mémoriser — mais il requiert une préparation sur plusieurs dimensions simultanées.

La dimension linguistique est la plus directement évaluable : l'agent de la préfecture évalue votre niveau oral de français dès les premières minutes de l'entretien. Un niveau B2 minimum est généralement suffisant pour que la maîtrise du français ne soit pas soulevée comme un obstacle. Un niveau C1 est perçu positivement comme témoignant d'une intégration linguistique solide. La préparation à cet aspect peut passer par des cours de français oral, des simulations d'entretien avec un professeur ou un ami francophone, et la pratique régulière du français dans des contextes variés.

La dimension civique requiert une connaissance solide des institutions de la République française : les trois pouvoirs (exécutif, législatif, judiciaire), les institutions centrales (Président de la République, Premier ministre, Assemblée nationale, Sénat, Conseil constitutionnel, Conseil d'État), le fonctionnement des élections (présidentielles, législatives, municipales), les droits et libertés fondamentaux garantis par la Constitution, et les principes de la laïcité et de la séparation des Églises et de l'État. Des ressources de préparation à l'entretien de naturalisation sont disponibles en ligne et dans les associations d'aide aux étrangers.

La dimension du récit personnel est peut-être la plus négligée par les candidats qui se concentrent sur les aspects civiques. L'agent qui conduit l'entretien cherche à comprendre votre parcours d'intégration : comment êtes-vous arrivé en France, comment la France a-t-elle transformé votre vie, quels sont vos projets ici, quels liens avez-vous tissés avec la société française ? Préparer un récit cohérent et sincère de son parcours, en français, est un exercice utile à faire avant l'entretien.
`;

const EXT2_L2 = `
## Les pièges spécifiques aux étudiants étrangers en situation de transition

La période de transition entre le statut d'étudiant et le statut de travailleur est l'une des périodes les plus risquées pour la régularité du séjour des jeunes étrangers diplômés. À la fin de leurs études, les étudiants disposent généralement d'une autorisation provisoire de séjour (APS) d'une durée d'un an pour chercher un emploi ou créer une entreprise. Mais cette APS n'est pas délivrée automatiquement — elle doit être demandée auprès de la préfecture avant l'expiration du titre de séjour étudiant.

Le piège typique est le suivant : un étudiant qui vient de terminer ses études ne réalise pas immédiatement la nécessité de demander l'APS et laisse passer plusieurs semaines voire des mois sans entreprendre cette démarche. Entre l'expiration de son titre étudiant et le dépôt de sa demande d'APS, il se retrouve en situation irrégulière. Si cette période est courte et peut être justifiée, la régularisation reste possible. Si elle s'étend sur plusieurs mois, les préfectures peuvent être moins accommodantes.

Un autre piège à cette période de vie est la confusion entre permis de travail et titre de séjour. Un employeur qui embauche un étudiant étranger diplômé doit potentiellement obtenir une autorisation de travail — et l'employeur qui ne le fait pas expose son employé étranger à une irrégularité de travail qui peut affecter le renouvellement de ses titres de séjour futurs. La responsabilité de vérifier les conditions d'emploi d'un étranger incombe formellement à l'employeur, mais dans la pratique, c'est l'étranger qui supporte les conséquences d'une irrégularité non voulue avec son titre de séjour.

## La rupture de continuité du séjour et ses conséquences

La rupture de continuité du séjour est un concept clé dans le droit des étrangers qui a des implications directes sur les délais d'éligibilité aux titres les plus protecteurs. Lorsqu'une personne quitte volontairement le territoire français pour plus de trois ans consécutifs, la continuité de sa résidence est considérée comme rompue pour les besoins du calcul du délai de cinq ans requis pour la carte de résident ou du délai requis pour la naturalisation. Les cinq ans recommencent en quelque sorte à zéro à son retour.

Cette règle, qui vise à s'assurer que la carte de résident ou la nationalité française ne récompensent pas une résidence ancienne mais sans lien réel actuel avec la France, peut avoir des conséquences sévères pour des personnes dont des circonstances de vie — soins médicaux dans le pays d'origine, soutien à un parent âgé, projet économique temporaire — les ont conduites à des absences prolongées. La jurisprudence administrative a précisé que certaines absences forcées (expulsion illégalement prononcée et ensuite annulée, hospitalisation longue durée à l'étranger) ne rompent pas la continuité, mais chaque cas est apprécié individuellement.

## Les erreurs dans la gestion de la situation des enfants mineurs

Les enfants mineurs accompagnant leurs parents titulaires d'un titre de séjour ont eux-mêmes un statut administratif qui doit être géré avec attention. Un enfant mineur venu en France dans le cadre du regroupement familial ou né en France est inscrit sur le titre de séjour de ses parents jusqu'à ses dix-huit ans. À la majorité, il doit obtenir son propre titre de séjour s'il n'acquiert pas la nationalité française entre-temps.

La transition de la minorité à la majorité est un moment à fort risque d'irrégularité si les parents et l'enfant lui-même ne l'anticipent pas. Un jeune de dix-huit ans qui ne fait pas de demande de titre de séjour personnel dans les mois qui suivent sa majorité se retrouvera en situation irrégulière sans l'avoir voulu. Les préfectures ont généralement des procédures spécifiques pour les jeunes qui ont grandi en France et qui demandent pour la première fois un titre de séjour personnel — mais ces procédures doivent être connues et activées en temps voulu.
`;

const EXT2_L3 = `
## La comparaison entre carte de résident et naturalisation : deux objectifs différents

La carte de résident et la naturalisation constituent deux aboutissements distincts du parcours d'un étranger en France, et il est important de comprendre en quoi ils diffèrent pour choisir la trajectoire administrative la plus adaptée à sa situation et à ses projets.

La carte de résident donne une stabilité de séjour à long terme (dix ans renouvelables) mais ne confère pas la nationalité française. Son titulaire reste étranger, ne peut pas voter aux élections nationales ou européennes (bien qu'il ait le droit de vote aux élections municipales et européennes s'il remplit d'autres conditions), et n'a pas accès aux emplois réservés aux nationaux. En revanche, la carte de résident est accessible plus tôt — après cinq ans de résidence régulière — et n'implique pas de renoncer formellement à sa nationalité d'origine ou à ses liens avec son pays d'origine.

La naturalisation, obtenu généralement quelques années après la carte de résident, confer la nationalité française avec tous ses droits civiques et politiques. Elle est irréversible (sauf dans de rares cas de déchéance de nationalité) et représente le lien juridique le plus fort avec la France. Pour les personnes dont le projet de vie est clairement en France à long terme, dont les enfants sont nés et scolarisés en France, et qui ont construit l'ensemble de leurs liens sociaux et professionnels en France, la naturalisation représente la consécration logique d'une intégration accomplie.

Les deux démarches ne sont pas mutuellement exclusives — on peut très bien obtenir la carte de résident et attendre plusieurs années avant de demander la naturalisation, ou ne jamais demander la naturalisation si l'on préfère conserver sa nationalité étrangère tout en bénéficiant de la stabilité de séjour qu'offre la carte de résident.

## Le cas des parents étrangers d'enfants français

Les parents étrangers d'enfants français constituent une catégorie particulière dans le droit du séjour français. Un étranger qui est parent d'un enfant français — né en France et qui a acquis la nationalité française ou de nationalité française depuis sa naissance par filiation d'un parent français — peut accéder au titre de séjour « vie privée et familiale » et, après trois ans de résidence régulière à ce titre, à la carte de résident.

Cette filière de régularisation par la parentalité d'un enfant français est encadrée par plusieurs conditions. Il ne suffit pas d'être biologiquement parent d'un enfant français — encore faut-il assurer effectivement et habituellement la charge ou l'entretien de cet enfant. Un parent qui ne vit pas avec son enfant ou qui ne contribue pas à son entretien ne peut pas se prévaloir de ce lien de parentalité pour obtenir ou renouveler son titre de séjour.

## Le service militaire et la naturalisation

Jusqu'à la suppression du service militaire obligatoire en France en 1997, les naturalisés français pouvaient être appelés à accomplir leurs obligations militaires. Depuis la professionnalisation de l'armée française, ce risque n'existe plus en France. En revanche, la naturalisation peut créer des obligations militaires dans d'autres pays qui pratiquent le service militaire obligatoire et qui reconnaissent le double-nationalité — certains pays peuvent appeler au service militaire leurs ressortissants naturalisés dans un autre pays si ces personnes reviennent séjourner sur leur territoire. Cette question doit être vérifiée auprès des autorités du pays d'origine avant de finaliser une demande de naturalisation.

## Le rôle du maire dans la procédure de naturalisation

La procédure de naturalisation implique une dimension locale souvent méconnue. La demande de naturalisation est déposée à la préfecture ou sous-préfecture du lieu de résidence du demandeur, mais une enquête est menée au niveau local pour vérifier les éléments du dossier — notamment la réalité et la continuité de la résidence dans la commune déclarée. Cette enquête locale inclut une vérification auprès des services de police et de gendarmerie locaux, et peut impliquer une consultation des mairies pour vérifier les inscriptions sur les listes électorales (pour les étrangers européens qui pouvaient voter aux élections municipales), les liens associatifs, ou la participation à la vie locale.

Cette dimension locale de la procédure signifie que l'intégration dans sa commune de résidence — inscriptions associatives, relations avec les services municipaux, participation à des événements locaux — peut indirectement contribuer à un dossier de naturalisation favorable en alimentant positivement cette enquête discrète.
`;

const EXT2_L4 = `
## Les démarches administratives préventives : un investissement pour l'avenir

La meilleure protection contre les erreurs administratives dans la gestion d'un titre de séjour est d'adopter des pratiques préventives dès la première obtention du titre. Ces pratiques, qui demandent peu d'effort initial, créent une infrastructure documentaire et organisationnelle qui rend la gestion des renouvellements beaucoup plus fluide et prévisible.

La première pratique préventive est la tenue d'un dossier administratif personnel organisé et à jour. Ce dossier doit contenir des copies de l'ensemble des documents ayant servi à l'obtention et au renouvellement de chaque titre de séjour, dans l'ordre chronologique. Les récépissés de chaque dépôt de dossier doivent y figurer, ainsi que les courriers de la préfecture (convocations, notifications de décision). Ce dossier est le fondement de la preuve de la continuité du séjour régulier — et il peut être précieux en cas de litige ou de demande de justificatifs lors d'une future demande de carte de résident ou de naturalisation.

La deuxième pratique préventive est le calendrier administratif personnalisé. À chaque obtention d'un nouveau titre de séjour, noter immédiatement sa date d'expiration et la date limite de dépôt du dossier de renouvellement (deux mois avant l'expiration, voire plus si la préfecture concernée est particulièrement engorgée) dans un agenda ou un outil de rappel numérique. Cette simple habitude évite la grande majorité des oublis de renouvellement tardif.

La troisième pratique préventive est de maintenir un réseau d'information actif sur l'évolution de la législation du droit des étrangers. La législation sur les titres de séjour évolue régulièrement — nouvelles lois, nouvelles circulaires d'application, nouvelles jurisprudences. Des associations comme le GISTI, des blogs juridiques spécialisés, ou des groupes d'entraide communautaires peuvent alerter sur ces évolutions et permettre d'anticiper leurs impacts sur sa propre situation.

## La prévention de l'exploitation dans les situations de vulnérabilité

Les personnes en situation précaire vis-à-vis de leur titre de séjour — qui ont besoin d'un renouvellement urgent, qui cherchent à régulariser une situation irrégulière, ou qui craignent de perdre leur droit au séjour — sont particulièrement vulnérables à l'exploitation et aux arnaques. Ce risque prend plusieurs formes qu'il importe de connaître pour s'en prémunir.

La première forme est l'arnaque à la régularisation : des individus se présentent comme des « experts en immigration » capables d'obtenir des titres de séjour difficiles à obtenir, moyennant des honoraires élevés. Ces individus n'ont aucun statut juridique officiel pour exercer ce conseil, et leurs promesses de régularisation miraculaire sont rarement tenues. Les seuls professionnels habilités à représenter un étranger dans ses démarches et à donner des conseils juridiques sont les avocats inscrits au barreau.

La deuxième forme est la dépendance administrative créée par un employeur qui conditionne la régularisation du séjour à l'acceptation de conditions de travail illégales. Cette pratique, illicite mais malheureusement documentée, cible des travailleurs étrangers dont le titre de séjour est lié à leur emploi et qui craignent de le perdre si leur employeur retire son soutien. Les voies de recours existent — signalement à l'inspection du travail, à la préfecture, aux associations —, mais elles nécessitent souvent du courage et un accompagnement.

## La solidarité communautaire et ses limites

Les réseaux communautaires jouent un rôle informel mais important dans l'information et l'entraide entre étrangers dans leurs démarches administratives. Ces réseaux permettent de partager les expériences, de se mettre en garde contre les pièges courants dans un contexte local donné, et d'identifier les ressources disponibles. Ils constituent une forme de capital social précieux pour les personnes nouvellement arrivées qui naviguent pour la première fois dans un système administratif inconnu.

Cependant, les informations circulant dans ces réseaux doivent être prises avec précaution. Les situations administratives sont hautement individualisées — ce qui a fonctionné pour une personne dans une préfecture donnée à un moment donné ne s'applique pas nécessairement à une autre personne dans une autre préfecture ou à un autre moment. La législation change, les pratiques préfectorales varient d'un département à l'autre, et les conseils donnés de bonne foi par des personnes sans formation juridique peuvent être erronés voire préjudiciables. Croiser les informations communautaires avec les sources officielles (service-public.fr, sites des préfectures, associations juridiques reconnues) est une bonne pratique.
`;

const EXT2_L5 = `
## Les droits des étudiants au chômage ou en fin de contrat

Les étudiants titulaires d'un titre de séjour « étudiant » qui ont travaillé pendant leurs études se trouvent parfois dans une situation complexe lorsque leur contrat de travail prend fin. Le titre de séjour étudiant autorise le travail dans la limite des 964 heures annuelles, mais n'ouvre pas automatiquement les droits au chômage (allocations chômage du régime d'assurance chômage) lorsque le contrat de travail est rompu. Les droits à l'assurance chômage naissent de cotisations à l'assurance chômage, que l'étudiant a effectuées si ses contrats de travail ont été déclarés.

La complexité vient de l'articulation entre le statut étudiant et le statut de chômeur. Un étudiant étranger qui perçoit des allocations chômage tout en restant étudiant est dans une situation atypique qui peut soulever des questions lors du renouvellement de son titre de séjour — la préfecture peut s'interroger sur la cohérence d'un titre étudiant avec la perception d'allocations de chômage liées à une activité salariée. Cette situation n'est pas interdite mais elle doit être expliquée clairement dans le dossier de renouvellement pour éviter toute confusion.

## L'accès à la santé et à la Sécurité sociale pour les étudiants étrangers

L'accès à la Sécurité sociale française est l'un des droits les plus précieux dont bénéficient les étudiants étrangers régulièrement inscrits dans un établissement français. Depuis la réforme de la sécurité sociale étudiante de 2019, tous les étudiants — français et étrangers — sont affiliés au régime général de la Sécurité sociale et non plus à un régime étudiant spécifique. Cette harmonisation a simplifié l'affiliation et amélioré la couverture.

L'affiliation à la Sécurité sociale se fait automatiquement lors de l'inscription universitaire pour les étudiants qui paient la CVEC — la Cotisation à la Vie Étudiante et de Campus. La carte Vitale, document d'accès aux soins remboursés, est ensuite demandée à la CPAM (Caisse Primaire d'Assurance Maladie) du lieu de résidence. Des documents sont requis pour cette demande : pièce d'identité, titre de séjour, justificatif de domicile et attestation d'inscription.

La couverture de la Sécurité sociale couvre les consultations médicales, les médicaments, les hospitalisations et les actes médicaux selon les barèmes officiels — entre 60 et 100% selon les actes. Une mutuelle complémentaire est recommandée pour couvrir les tickets modérateurs restant à la charge du patient. La Complémentaire Santé Solidaire (ancienne CMU-C) est accessible aux étudiants dont les ressources sont inférieures à un certain seuil et offre une couverture complète sans reste à charge.

## Le cas des doctorants : entre statut étudiant et statut salarié

Les doctorants occupent une position administrative particulière dans le système français. Ceux qui sont financés par un contrat doctoral — le mode de financement standard pour les thèses en sciences exactes et de plus en plus en sciences humaines — ont un statut de salarié de l'établissement public d'enseignement supérieur ou de recherche. Ce statut salarié les différencie des autres étudiants sur le plan administratif.

Pour les doctorants étrangers, l'articulation entre leur statut d'étudiant inscrit en doctorat et leur statut de salarié titulaire d'un contrat doctoral peut créer des incertitudes sur le titre de séjour le plus approprié. En principe, un titre « étudiant » est suffisant pour effectuer une thèse en France, y compris dans le cadre d'un contrat doctoral. Mais certains doctorants bénéficient d'un titre « chercheur » (via la convention d'accueil du Passeport Talent Chercheur) qui peut offrir des avantages pratiques supplémentaires, notamment en termes de durée (quatre ans contre un an renouvelable chaque année pour le titre étudiant) et de mobilité internationale facilitée.

La consultation du service des Relations Internationales ou du Welcome Desk de l'établissement d'accueil permet d'identifier le titre de séjour le mieux adapté à la situation spécifique de chaque doctorant étranger, en tenant compte de la nature et de la durée du financement, des éventuelles mobilités prévues à l'international, et des projets post-doctoraux.
`;

const EXT2_L6 = `
## La procédure de demande de Passeport Talent en préfecture

La demande de Passeport Talent suit une procédure similaire aux autres titres de séjour mais avec quelques spécificités importantes. Pour les personnes arrivant de l'étranger, le visa long séjour mention « Passeport Talent » est demandé au consulat français du pays de résidence habituelle. Ce visa, s'il est accordé, vaut titre de séjour pour les premiers mois et devra être transformé en carte de séjour pluriannuelle Passeport Talent dans les trois mois suivant l'entrée en France.

Pour les personnes déjà présentes en France sous un autre titre de séjour, le changement de statut vers le Passeport Talent est possible si les conditions de la nouvelle catégorie sont remplies. Ce changement de statut est demandé à la préfecture du lieu de résidence. Compte tenu des avantages significatifs du Passeport Talent par rapport aux titres temporaires ordinaires, ce changement de statut est souvent souhaitable mais doit être préparé avec soin — un dossier incomplet ou non conforme peut conduire à un refus et à une période de titre de séjour ordinaire.

Les pièces constitutives d'un dossier de Passeport Talent varient selon la catégorie. Pour la catégorie « salarié qualifié », elles incluent le contrat de travail avec le salaire, la fiche de poste, les diplômes, et parfois des éléments sur l'entreprise employeuse (KBIS, bilan). Pour la catégorie « chercheur », la convention d'accueil validée par l'organisme et acceptée par la préfecture est la pièce centrale. Pour la catégorie « créateur d'entreprise », le business plan, les statuts de la société en cours de création, et éventuellement une lettre de soutien d'un incubateur ou d'un investisseur sont des éléments déterminants.

## Le renouvellement du Passeport Talent quatre ans plus tard

Le renouvellement du Passeport Talent à l'expiration des quatre ans est soumis à la même logique de vérification des conditions que l'obtention initiale. Quatre ans après la première délivrance, la préfecture vérifie que les conditions qui ont justifié l'attribution initiale sont toujours remplies. Pour un salarié qualifié, cela signifie vérifier que la rémunération est toujours supérieure au seuil et que l'activité professionnelle continue. Pour un chercheur, cela signifie vérifier que la convention d'accueil ou un nouveau document équivalent atteste d'une mission de recherche active.

Le renouvellement peut poser des difficultés si la situation du titulaire a évolué depuis la première demande. Un chercheur dont le contrat post-doctoral s'est terminé et qui a rejoint l'industrie privée ne peut plus prétendre au Passeport Talent catégorie « chercheur » et devra soit demander un title dans une autre catégorie (Passeport Talent salarié qualifié si son salaire y est éligible, carte de résident si les cinq ans de résidence sont atteints), soit revenir à un titre ordinaire. Cette transition doit être anticipée pour éviter toute rupture dans la régularité du séjour.

## Les implications du Passeport Talent pour les conjoints et les enfants

Les avantages du régime de la famille accompagnante du Passeport Talent ont été évoqués précédemment, mais leurs implications concrètes méritent une attention particulière. Le conjoint qui obtient une carte « vie privée et familiale » liée au Passeport Talent du partenaire bénéficie non seulement du droit de travailler librement, mais aussi de la même durée de validité de titre — quatre ans de stabilité administrative plutôt qu'une validité annuelle.

Cette stabilité à quatre ans pour le conjoint est particulièrement importante pour les projets à long terme : l'obtention d'un prêt immobilier, la signature d'un bail de longue durée, l'inscription dans une formation professionnelle de plusieurs années. La prévisibilité administrative qu'elle crée pour l'ensemble du foyer est un avantage concret qui dépasse la simple commodité administrative.

Pour les enfants, la situation est différente selon leur âge. Les enfants mineurs sont généralement couverts par le titre de séjour de leurs parents et n'ont pas de titre personnel. À la majorité, ils devront obtenir leur propre titre. Si leurs parents sont titulaires d'un Passeport Talent depuis plusieurs années et qu'eux-mêmes ont grandi en France, la demande de titre de séjour « vie privée et familiale » ou, à terme, de naturalisation se présente dans des conditions généralement favorables.

## Les secteurs d'activité où le Passeport Talent est particulièrement utile

Bien que le Passeport Talent soit en principe accessible dans tous les secteurs d'activité dès lors que les conditions de rémunération ou de profil sont remplies, certains secteurs ont une concentration particulièrement forte de titulaires de ce titre. La French Tech, l'écosystème des startups technologiques françaises, est l'un des Principaux bénéficiaires du Passeport Talent grâce aux catégories « salarié qualifié » et « créateur d'entreprise ». De nombreuses startups parisiennes, berlinoises et lyonnaises ont développé des procédures internes pour faciliter l'obtention du Passeport Talent pour leurs recrutements internationaux.

Le secteur de la recherche académique et industrielle, comme évoqué précédemment, a un recours massif au Passeport Talent Chercheur. Le secteur des arts et de la création culturelle — musique, cinéma, arts plastiques, mode — utilise fréquemment les catégories « artiste interprète » et « auteur ». Le sport professionnel enfin, notamment le football, le basket et le rugby, mobilise régulièrement la catégorie « sportif de haut niveau » pour les recrutements de joueurs étrangers dans des clubs professionnels français.
`;

await appendAndPatch('a7731dff-3fba-4ef7-84d2-5febfe107c07', EXT2_L1);
await appendAndPatch('35a1efd2-6d33-42b9-b253-749418a6ae2b', EXT2_L2);
await appendAndPatch('245f4bd4-cc40-42db-8775-6e525fbebc14', EXT2_L3);
await appendAndPatch('cca2d227-e2f1-4c0b-afef-60b9c0359424', EXT2_L4);
await appendAndPatch('16d9efa8-d878-47a0-82cf-89173163dbcb', EXT2_L5);
await appendAndPatch('92fee6cd-d266-4081-b459-535cf1f26e9a', EXT2_L6);
