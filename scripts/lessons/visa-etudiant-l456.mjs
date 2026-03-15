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

// L4 — Valider votre VLS-TS après l'arrivée : la procédure OFII (091720f8)
const VISA_L4 = `# Valider votre VLS-TS après l'arrivée en France : la procédure OFII

Arriver en France avec votre visa de long séjour valant titre de séjour (VLS-TS) est une première étape franchie avec succès. Mais ce visa ne devient pleinement opérant que si vous accomplissez une démarche administrative essentielle dans les trois mois suivant votre arrivée : la validation de votre VLS-TS auprès de l'Office Français de l'Immigration et de l'Intégration (OFII). Cette procédure, entièrement dématérialisée depuis 2021 pour la grande majorité des titulaires, est souvent méconnue des nouveaux arrivants qui croient, à tort, que leur processus administratif s'arrête à l'obtention du visa. Négliger cette validation peut avoir des conséquences très sérieuses sur votre statut légal en France. Cette leçon vous explique tout ce que vous devez savoir sur la validation OFII : pourquoi elle est obligatoire, comment la réaliser, quels documents préparer et que faire en cas de complication.

## Pourquoi la validation OFII est-elle obligatoire ?

La procédure OFII a été conçue dans le cadre de la politique d'immigration française pour remplir plusieurs objectifs. Elle permet à l'État français de s'assurer que chaque titulaire de VLS-TS est bien arrivé en France et a bien commencé le séjour pour lequel il a reçu son visa. Elle constitue également un point de contact administratif officiel entre l'État et le nouvel arrivant, permettant de vérifier que sa situation à son arrivée correspond à ce qui avait été présenté lors de la demande de visa. Elle permet enfin à l'OFII de vous informer sur les droits et les obligations associés à votre statut de résident en France.

La validation OFII est techniquement la confirmation officielle que vous avez bien pris résidence en France conformément aux termes de votre visa. Sans cette validation, votre VLS-TS est légalement incomplet et ne vous confère pas l'intégralité des droits associés à un titre de séjour valide. En pratique, un VLS-TS non validé peut poser des problèmes lors de vos démarches administratives en France (ouverture de compte bancaire, inscription à la sécurité sociale, demande d'APL) qui nécessitent la présentation d'un titre de séjour valide. Lors du renouvellement de votre titre en préfecture, un VLS-TS non validé sera une anomalie qui devra être expliquée.

## Qui est concerné par la procédure de validation OFII ?

Tous les titulaires d'un VLS-TS sont en principe concernés par la validation OFII, indépendamment de leur nationalité ou du type de mention indiquée sur le visa (étudiant, salarié, visiteur, etc.). Pour les étudiants titulaires d'un VLS-TS mention «étudiant», la procédure s'applique lors de la première année de séjour. Pour les séjours suivants, c'est le renouvellement de carte de séjour temporaire en préfecture qui prend le relais — la validation OFII ne s'applique qu'aux primo-arrivants avec un VLS-TS.

Les ressortissants de l'Union européenne, de l'EEE et de la Suisse, qui n'ont pas de visa et arrivent librement en France, ne sont pas concernés par la procédure OFII. Les titulaires d'un visa de court séjour (inférieur à 90 jours) ne sont pas non plus concernés. La procédure s'applique spécifiquement aux titulaires de VLS-TS, c'est-à-dire aux ressortissants de pays tiers venus en France pour des séjours de longue durée.

## La procédure dématérialisée depuis 2021 : comment ça fonctionne

La grande simplification administrative apportée depuis 2021 est la dématérialisation complète de la procédure OFII pour la quasi-totalité des titulaires de VLS-TS. Avant cette réforme, les néo-arrivants devaient se présenter physiquement dans une délégation territoriale de l'OFII pour accomplir des formalités qui pouvaient inclure une visite médicale. Désormais, la validation se fait entièrement en ligne via le portail dédié.

La démarche en ligne consiste à vous connecter sur le portail officiel de validation des VLS-TS (teleservices.ofii.fr ou administration-etrangers-en-france.interieur.gouv.fr selon l'accès), à créer un compte personnel, à saisir les informations de votre VLS-TS (numéro de visa, date de délivrance, consulat délivrant), à renseigner votre adresse de résidence en France, à téléverser les justificatifs demandés (passeport avec le visa, justificatif de l'adresse en France), et à effectuer le paiement d'une taxe OFII dont le montant varie selon le type de visa (pour les étudiants, ce montant est de 58 euros en 2024 pour la plupart des cas).

Une fois la procédure en ligne complétée et le paiement effectué, vous recevez une confirmation électronique. Dans les semaines suivantes, l'OFII vous envoie par courrier une vignette (autocollant) à coller sur votre passeport, qui atteste de la validation de votre VLS-TS. Conservez cette vignette précieusement — elle est la preuve tangible que votre procédure est complète.

## Le délai de 3 mois : comprendre et respecter l'échéance

Le délai de 3 mois après l'arrivée en France est une échéance absolue. Voici comment le calculer : si vous êtes arrivé en France le 15 septembre, vous avez jusqu'au 15 décembre pour valider votre VLS-TS. Il est fortement conseillé de ne pas attendre les dernières semaines pour effectuer cette démarche — un problème technique sur la plateforme, un document manquant, ou un délai de paiement imprévu pourrait vous faire dépasser l'échéance sans l'avoir voulu.

La question que beaucoup d'étudiants se posent est : que se passe-t-il si on dépasse ce délai de 3 mois ? La réponse officielle est que le défaut de validation dans le délai imparti est considéré comme une irrégularité de situation. En pratique, une validation tardive est parfois acceptée avec la présentation d'une justification sérieuse (maladie, circonstance exceptionnelle), mais il ne faut pas compter sur cette indulgence. Une validation très tardive, ou l'absence totale de validation, peut conduire au refus de renouvellement du titre de séjour l'année suivante, ce qui place l'étudiant dans une situation très difficile.

Certains étudiants, notamment ceux qui arrivent en France à la dernière semaine d'août pour une rentrée début septembre, ont tendance à retarder les démarches administratives jusqu'après la rentrée. C'est compréhensible mais risqué. La bonne pratique est de traiter la validation OFII dans les premières semaines suivant l'arrivée, même si vous êtes en pleine recherche de logement et d'organisation.

## Les justificatifs à préparer pour la validation OFII

Pour compléter la procédure de validation OFII en ligne, vous aurez besoin des documents suivants : votre passeport valide avec le VLS-TS collé à l'intérieur ; un justificatif d'adresse en France (quittance de loyer, attestation de logement fournie par la résidence universitaire, attestation d'hébergement chez un tiers, ou toute autre preuve d'une adresse fixe en France) ; votre numéro de sécurité sociale ou votre numéro CPAM si vous en disposez déjà (pas obligatoire mais utile dans certains cas) ; un moyen de paiement en ligne pour régler la taxe OFII (carte bancaire acceptant les paiements en ligne en euros).

Si vous n'avez pas encore d'adresse fixe lors des premières semaines (par exemple si vous êtes en logement temporaire dans un hôtel ou une auberge de jeunesse), vous pouvez indiquer une adresse provisoire à condition de pouvoir recevoir le courrier contenant la vignette. Il est préférable d'avoir une adresse stable avant d'effectuer la démarche.

## La visite médicale OFII : vestige ou obligation encore présente ?

Jusqu'en 2020, la validation du VLS-TS comprenait systématiquement une visite médicale obligatoire dans les centres OFII. Cette visite incluait une radiographie pulmonaire (dans certains cas) et un entretien avec un médecin OFII. Cette obligation s'appliquait à tous les primo-arrivants non-ressortissants UE, dans le cadre du contrôle sanitaire à l'immigration.

Depuis 2021, la visite médicale systématique a été supprimée de la procédure de validation OFII standard pour la grande majorité des cas. Elle a été remplacée par la procédure dématérialisée décrite ci-dessus. Certains cas spécifiques ou certaines nationalités peuvent encore faire l'objet de contrôles médicaux ponctuels, mais ils ne font plus partie du parcours standard de validation pour les étudiants. Si une convocation médicale vous est envoyée après votre démarche en ligne, elle doit être respectée dans les délais indiqués.

## Après la validation : ce que la vignette OFII vous permet de faire

Une fois votre VLS-TS validé (confirmation électronique reçue et/ou vignette OFII collée dans votre passeport), vous êtes administrativement en règle pour toute la durée de validité de votre visa. Concrètement, ce titre valide vous permet d'ouvrir un compte bancaire dans la plupart des établissements bancaires français qui acceptent le VLS-TS comme titre de séjour, de vous inscrire à la Sécurité Sociale étudiante et de demander une carte vitale, de faire une demande d'APL ou d'ALS auprès de la CAF, de travailler légalement en France dans la limite de 964 heures annuelles, de quitter et de revenir en France pendant la durée de validité de votre visa (le VLS-TS validé sert également de visa de retour pour les voyages en dehors de France), et de commencer les démarches de renouvellement en carte de séjour avant l'expiration de votre VLS-TS.

L'aspect du droit de sortie et de retour est particulièrement important à bien comprendre. Un VLS-TS validé vous permet de quitter l'espace Schengen et d'y retourner pendant sa durée de validité. Si vous rentrez chez vous pendant les vacances, vous n'avez pas besoin d'un visa de retour séparé : votre passeport avec le VLS-TS (validé ou en cours de validation) vous permet de revenir en France. En revanche, si votre VLS-TS a expiré entre-temps et que vous n'avez pas encore renouvelé votre titre en carte de séjour, vous ne pouvez pas rentrer en France sans un nouveau visa.

## Le renouvellement : de VLS-TS à carte de séjour temporaire

La validation OFII concerne uniquement la première année en France. À l'approche de l'expiration de votre VLS-TS (généralement 12 mois après sa délivrance), vous devez entamer les démarches de renouvellement en carte de séjour temporaire mention «étudiant». Ce renouvellement se fait désormais en ligne sur le portail ANEF (administration-etrangers-en-france.interieur.gouv.fr) et non plus sur la plateforme OFII.

Pour ce renouvellement, vous devrez justifier de votre progression dans vos études (attestation d'inscription, relevé de notes ou équivalent montrant que vous avancez dans votre cursus), de votre logement, de vos ressources financières, et présenter votre passeport à jour. Il est recommandé de commencer le dossier de renouvellement 2 à 3 mois avant l'expiration du VLS-TS pour éviter toute interruption de validité du titre. Une fois la demande de renouvellement déposée, vous recevez un récépissé permettant de prouver votre présence légale en France pendant l'instruction du dossier.

## Témoignages sur la procédure OFII

**Fatou Cissé, 21 ans, étudiante en droit venant du Sénégal** : «J'ai fait la validation OFII en ligne 3 semaines après mon arrivée. Ça m'a pris environ 30 minutes. La plateforme était simple. J'ai reçu ma vignette par courrier 6 semaines après. Le plus difficile a été de scanner mon passeport en haute résolution — le scan de mon téléphone était trop flou au début.»

**Marwan Hamdi, 26 ans, doctorant en chimie venant du Maroc** : «J'ai failli oublier la validation OFII, perdu dans la rentrée universitaire et l'installation. Mon directeur de thèse me l'a rappelé à la fin du mois d'octobre, soit 6 semaines après mon arrivée. J'ai tout fait en une soirée. Gardez une alerte dans votre calendrier dès le premier jour !»

## Questions fréquentes sur la validation OFII

**Q : Puis-je voyager hors de France avant d'avoir validé mon VLS-TS ?**
Techniquement, quitter la France avant de valider votre VLS-TS n'est pas interdit, mais c'est une prise de risque administrative. Si vous quittez l'espace Schengen, votre retour sera soumis aux contrôles aux frontières qui vérifieront la validité de votre titre. Un VLS-TS non validé peut poser des questions. La recommandation est de rester en France jusqu'à l'accomplissement de la validation.

**Q : J'ai perdu ma vignette OFII. Que faire ?**
Contactez la délégation territoriale OFII de votre région. Des duplicatas peuvent être délivrés sur présentation des justificatifs de la démarche initiale. N'attendez pas, car la vignette est un document officiel dont vous pourriez avoir besoin lors de démarches ultérieures.

**Q : La validation OFII est-elle payante pour les boursiers du gouvernement français ?**
Les bénéficiaires de bourses du gouvernement français (BGF), notamment les boursiers Campus France, peuvent être exonérés de la taxe OFII. Vérifiez les conditions d'exonération dans votre lettre de bourse et signalez votre statut de boursier lors de la procédure en ligne.

## Ressources officielles

- [administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr) : Le portail officiel pour valider votre VLS-TS
- [ofii.fr](https://www.ofii.fr) : Site de l'OFII avec les informations sur la procédure et les coordonnées des délégations territoriales
- [service-public.fr – VLS-TS validation](https://www.service-public.fr/particuliers/vosdroits/F16003) : Les informations officielles sur la validation du visa de long séjour
`;

// L5 — Vos droits et obligations en tant qu'étudiant étranger (90444a49)
const VISA_L5 = `# Vos droits et obligations en tant qu'étudiant étranger en France

Obtenir un visa étudiant et valider votre VLS-TS vous confère un statut légal en France, mais ce statut ne se résume pas à un simple «droit d'être là». Il est assorti d'un ensemble de droits que vous pouvez exercer pleinement, et d'obligations que vous devez respecter pour maintenir votre séjour dans la légalité. Beaucoup d'étudiants étrangers arrivent en France avec une connaissance partielle de ces droits et obligations, ce qui peut conduire à des erreurs par ignorance — utiliser le droit de travail au-delà des limites autorisées, négliger de déclarer un déménagement, ou au contraire ne pas demander des aides auxquelles on a parfaitement droit. Cette leçon établit un panorama complet et précis des droits et obligations du titulaire d'un visa étudiant en France, pour que vous puissiez naviguer votre séjour en pleine connaissance de votre situation administrative et juridique.

## Le droit au séjour : fondement de tous les autres droits

Le premier et le plus fondamental de vos droits est le droit au séjour légal sur le territoire français. Votre VLS-TS validé ou votre carte de séjour temporaire mention «étudiant» vous autorise à résider en France pendant sa durée de validité sans avoir à justifier de votre présence à chaque étape. En pratique, cela signifie que vous pouvez louer un logement, vous inscrire à l'université, ouvrir un compte bancaire, accéder aux services publics et à l'ensemble des prestations sociales auxquelles vous êtes eligible, tout cela sans question sur la légitimité de votre présence.

Ce droit au séjour est conditionnel : il subsiste tant que vous respectez les conditions initiales de délivrance de votre visa (être inscrit dans la formation indiquée, ne pas travailler au-delà des limites autorisées, résider dans le respect de la loi). Si ces conditions cessent d'être remplies, les autorités peuvent retirer ou refuser de renouveler votre titre de séjour.

## Le droit de travailler : 964 heures annuelles

L'un des droits les plus importants et les plus utilisés par les étudiants étrangers est le droit de travailler en France. Contrairement à certaines idées reçues, un visa étudiant n'interdit pas totalement de travailler — il encadre ce travail dans une limite quantitative. La règle française autorise les étudiants étrangers à travailler jusqu'à 964 heures par an, ce qui correspond à 60 % d'un temps plein annuel ou environ 18,5 à 20 heures par semaine en activité régulière.

Cette limite de 964 heures est calculée sur l'année calendaire (du 1er janvier au 31 décembre) et non sur l'année académique. Si vous avez travaillé 600 heures avant l'été, vous disposez encore de 364 heures pour la période d'été et l'automne. En pratique, les employeurs et les étudiants gèrent souvent cette limite de manière flexible, en travaillant davantage pendant les vacances universitaires (été, Noël, Pâques) et moins pendant les périodes d'examens ou de cours intensifs.

Il n'est pas nécessaire d'obtenir une autorisation de travail séparée pour travailler dans cette limite. Votre VLS-TS ou carte de séjour mention «étudiant» vaut elle-même autorisation de travail. Il vous suffit de présenter ce titre à votre employeur pour justifier que vous êtes autorisé à travailler en France. L'employeur est tenu de vérifier la régularité de votre situation lors de l'embauche.

Dépasser les 964 heures annuelles constitue une infraction aux conditions de votre titre de séjour. En cas de contrôle ou de signalement, cela peut conduire à des difficultés lors du renouvellement de votre titre, voire dans des cas graves à une demande de justification devant la préfecture.

## Le droit à l'éducation : inscription libre et égale

Le droit à l'éducation pour les étudiants en situation régulière est garanti par la loi française. Vous avez le droit de vous inscrire dans tout établissement d'enseignement supérieur français qui vous a accepté selon ses propres critères d'admission, exactement dans les mêmes conditions que les étudiants français ou européens. Les frais d'inscription pour les étudiants non-européens ont fait l'objet de modifications réglementaires : depuis la réforme de 2019, des frais différenciés peuvent être appliqués (2 770 euros en licence, 3 770 euros en master pour les hors-UE), mais de nombreux établissements ont adopté une politique d'exonération partielle ou totale. Les grandes écoles et les établissements privés ont leurs propres grilles tarifaires.

En dehors des frais d'inscription, tous les services universitaires — bibliothèques, restaurants universitaires avec leur tarif subventionné, services de santé universitaires, associations sportives et culturelles campus — sont accessibles aux étudiants étrangers régulièrement inscrits dans les mêmes conditions que les étudiants français.

## Le droit aux aides sociales : CAF, CROUS et santé

Les étudiants étrangers en situation régulière ont accès à la plupart des aides sociales françaises, sous conditions dont les principales ont été détaillées dans les leçons dédiées à la CAF. Le droit à l'APL ou à l'ALS (aides au logement de la CAF) est accessible dès le premier mois de résidence en France pour les titulaires d'un VLS-TS valide. La demande se fait sur caf.fr dès que vous avez un logement et un bail signé.

Les bourses sur critères sociaux du CROUS sont en principe réservées aux étudiants de nationalité française ou aux étudiants étrangers dont les parents cotisent aux impôts français, ce qui exclut la plupart des étudiants internationaux primo-arrivants. Cependant, des aides d'urgence du CROUS sont accessibles à tous les étudiants inscrits en France, quelle que soit leur nationalité, sur justification de difficultés financières graves.

La couverture maladie universelle (AME ou protection maladie universelle — PUMA) est accessible aux étrangers en situation régulière après 3 mois de résidence en France (ce délai de carence ne s'applique pas en cas d'urgence médicale). Pour les étudiants, l'inscription à la sécurité sociale étudiante via l'université dès la rentrée est la voie la plus simple pour bénéficier d'une couverture santé dès le premier jour. En pratique, les étudiants s'inscrivent à la CPAM lors de leur inscription universitaire et reçoivent une Carte Vitale après quelques semaines ou mois.

## Les obligations liées au statut d'étudiant

L'obligation principale du titulaire d'un visa étudiant est d'être réellement inscrit dans la formation pour laquelle le visa a été délivré et d'y progresser de manière effective. Un étudiant qui s'inscrit administrativement mais ne suit pas les cours, ne passe pas d'examens, et ne valide aucune unité d'enseignement ne remplit pas les conditions de son visa étudiant. Lors du renouvellement, la préfecture peut demander des justificatifs de progression académique (relevé de notes, attestation de présence, attestation de réinscription) et peut refuser le renouvellement en l'absence de progression sérieuse.

Cette exigence ne veut pas dire qu'un étudiant ne peut jamais échouer — l'échec académique est une situation humaine et compréhensible. Mais elle signifie qu'un étudiant qui accumule plusieurs années consécutives avec aucune validation d'unité, aucune présence, ou qui ne peut justifier d'aucune activité académique réelle, sera en difficulté lors du renouvellement de son titre.

## L'obligation de déclarer les changements de situation

Vous avez l'obligation légale de déclarer à la préfecture tout changement de situation relevant de votre titre de séjour. Le plus courant est le changement d'adresse : vous devez déclarer tout déménagement à la préfecture dans les 3 mois suivant le changement. Dans la pratique, cette obligation est souvent négligée sans conséquences immédiates, mais une adresse incorrecte dans vos dossiers administratifs peut créer des problèmes lors du renouvellement ou si vous attendez des courriers officiels à l'ancienne adresse.

D'autres changements doivent également être signalés : un changement d'établissement d'enseignement (passer d'une université à une autre, par exemple), un changement de niveau d'études (passage du master au doctorat) qui peut nécessiter une mise à jour du titre, ou des changements familiaux significatifs (mariage, naissance d'un enfant). Chaque changement a des implications administratives spécifiques qui méritent d'être vérifiées auprès de la préfecture.

## L'obligation de renouveler le titre avant son expiration

Une obligation pratique mais fondamentale : vous devez déposer votre demande de renouvellement de titre de séjour dans les deux mois précédant l'expiration de votre titre en cours. Ne pas déposer la demande à temps peut créer une période de «vide juridique» pendant laquelle vous n'avez plus de titre de séjour valide, bien que vous ayez initié la procédure. Cette situation peut créer des complications administratives et les récépissés de demande de renouvellement, bien qu'ils attestent de votre présence légale, sont parfois moins bien acceptés que le titre lui-même dans certains démarches.

Avec la dématérialisation des demandes via l'ANEF, il est possible de suivre l'avancement de votre demande en ligne. Le délai d'instruction varie selon les préfectures et les périodes — de quelques semaines à plusieurs mois pour les préfectures très chargées comme Paris. Anticipez systématiquement.

## Le droit à la vie privée et familiale

Les étudiants étrangers ont des droits fondamentaux liés à leur vie privée et familiale, reconnus par la Convention européenne des droits de l'homme et intégrés dans le droit français. En particulier, si vous avez commencé à construire des liens familiaux forts en France — par un mariage, une vie commune de plusieurs années, des enfants nés en France — ces liens sont pris en compte comme facteurs positifs lors des renouvellements ou lors d'éventuelles procédures d'éloignement. Le droit à la vie familiale ordinaire et normale n'est pas remis en question par votre statut d'étudiant étranger.

## La liberté de circulation dans l'espace Schengen

Avec un VLS-TS validé ou une carte de séjour temporaire en cours de validité, vous bénéficiez d'un droit de circulation dans les autres pays de l'espace Schengen pour des séjours de courte durée (jusqu'à 90 jours sur 180 jours dans l'espace Schengen hors France). Ce droit est précieux pour voyager en Europe pendant vos études — visiter des pays voisins, participer à des conférences, ou simplement explorer le continent. Conservez votre passeport et votre titre de séjour sur vous lors de tout déplacement dans l'espace Schengen.

## Questions fréquentes sur les droits et obligations

**Q : Puis-je changer de ville en France sans démarche particulière ?**
Un déménagement dans une autre ville implique un changement de préfecture compétente pour votre titre de séjour. Lors de votre prochain renouvellement, c'est la préfecture de votre nouveau lieu de résidence qui sera compétente. Il est recommandé de déclarer votre nouvelle adresse à la préfecture et à la CAF (pour les aides au logement) dès votre installation.

**Q : Puis-je faire des stages non rémunérés sans que cela affecte mes 964 heures de travail autorisé ?**
Les stages en entreprise effectués dans le cadre de la formation (stages obligatoires ou optionnels intégrés au cursus) ne sont généralement pas comptabilisés dans les 964 heures de travail autorisé, même s'ils donnent lieu à une gratification (la gratification de stage n'est pas assimilée à un salaire pour cette limite). Les stages hors cursus ou les emplois salariés ordinaires, eux, sont comptabilisés.

**Q : Que se passe-t-il si je suis en litige avec mon employeur et qu'il me déclare pas mes heures correctement ?**
En cas de litige avec un employeur sur votre contrat ou vos heures de travail, les mêmes voies de recours s'appliquent à vous qu'à tout salarié en France : réclamation auprès de l'Inspection du Travail, saisine du Conseil de Prud'hommes. Votre statut d'étranger ne diminue pas vos droits travailleurs en France.

## Ressources officielles

- [service-public.fr – Droits des étudiants étrangers](https://www.service-public.fr/particuliers/vosdroits/N106) : Les droits et obligations des titulaires de titres de séjour étudiant
- [travail-emploi.gouv.fr – Étudiants étrangers et travail](https://travail-emploi.gouv.fr/emploi-et-insertion/travailler-en-france/travailleurs-etrangers) : Les règles d'emploi pour les étudiants étrangers
- [ameli.fr – Étudiants étrangers](https://www.ameli.fr) : Les droits à l'Assurance Maladie pour les étudiants étrangers
`;

// L6 — Situations particulières (1b8fc4c5)
const VISA_L6 = `# Situations particulières liées au visa étudiant en France : changements, difficultés et solutions

Le parcours administratif d'un étudiant étranger en France n'est pas toujours un chemin parfaitement rectiligne. Réorientation en cours d'études, interruption temporaire pour des raisons personnelles, souhait de travailler davantage dans le cadre d'une alternance, passage du statut étudiant à celui de salarié ou de chercheur d'emploi après l'obtention du diplôme — toutes ces situations sortent du schéma standard et soulèvent des questions administratives que beaucoup d'étudiants ne savent pas comment aborder. Cette leçon traite en profondeur les situations particulières les plus fréquentes, en offrant des réponses précises sur les démarches à entreprendre, les délais à respecter, et les erreurs à ne pas commettre.

## Changer de formation ou d'établissement en cours de séjour

L'une des situations particulières les plus courantes est le souhait de changer de formation ou d'établissement après l'obtention du visa. Vous avez peut-être été admis dans une licence mais vous souhaitez vous réorienter vers une autre filière après quelques mois. Ou vous avez été accepté dans une université mais préférez finalement rejoindre une grande école ou une autre institution. Que faut-il faire dans ce cas ?

La règle générale est que votre titre de séjour étudiant autorise un séjour pour suivre des études supérieures en France, et non pour suivre spécifiquement la formation mentionnée dans votre dossier visa. Ainsi, un changement de formation au sein du même établissement, comme passer d'une licence en économie à une licence en sciences sociales, est généralement possible sans démarche administrative préfectorale spécifique, à condition que le changement reste dans le cadre d'études supérieures légitimes en France. Informez néanmoins la préfecture lors de votre prochain renouvellement en présentant votre nouvelle attestation d'inscription.

Un changement d'établissement (passer d'une université à une autre) est également possible mais doit être mentionné lors du renouvellement. Si le changement intervient en cours d'année académique et implique une période de rupture d'inscription, la situation peut être plus délicate — une période sans inscription university affaiblit votre dossier de renouvellement. La bonne pratique est de vous réinscrire dans le nouvel établissement avant de finaliser votre départ de l'ancien.

Un changement de niveau d'études plus radical — quitter une formation de master pour s'inscrire dans une école professionnelle, par exemple, ou passer d'une formation initiale à une formation en alternance — peut nécessiter des démarches supplémentaires selon les cas. Pour les alternances en particulier, le changement de statut vers un contrat d'apprentissage ou de professionnalisation implique de vérifier auprès de la préfecture si votre titre de séjour couvre ce nouveau statut ou si une mise à jour est nécessaire.

## L'interruption temporaire des études pour raisons personnelles

Des circonstances personnelles graves — une maladie sérieuse, un décès dans la famille nécessitant un retour prolongé dans le pays d'origine, une situation de détresse psychologique — peuvent amener un étudiant étranger à interrompre temporairement ses études. Cette interruption, si elle est prolongée, peut avoir des conséquences administratives.

Sur le plan du séjour en France, une interruption des études n'entraîne pas automatiquement la perte du titre de séjour si elle est temporaire et justifiable. Lors du renouvellement, la préfecture prend en compte les circonstances exceptionnelles si elles sont documentées (certificat médical, justificatif de l'événement familial). Il est important de contacter proactivement la préfecture ou l'assistante sociale de votre établissement dès que vous savez que votre situation va s'éloigner du schéma standard, pour obtenir des conseils personnalisés et éviter d'être pris de court lors du renouvellement.

Sur le plan de la CAF, une interruption des études qui conduit à ne plus être inscrit dans un établissement d'enseignement supérieur peut avoir des conséquences sur les aides au logement que vous percevez. La CAF doit être informée de tout changement de situation, et l'aide peut être suspendue si vous n'êtes temporairement plus étudiant.

## Le passage en alternance : droits spécifiques et démarches

L'alternance (contrat d'apprentissage ou contrat de professionnalisation) est un statut hybride qui combine études et emploi. Elle est de plus en plus prisée par les étudiants étrangers car elle offre une rémunération plus élevée qu'un emploi étudiant ordinaire et une expérience professionnelle valorisante. Mais elle soulève des questions spécifiques liées au titre de séjour.

Un étudiant étranger titulaire d'un titre de séjour «étudiant» peut en principe accéder à l'alternance, mais dans la limite des 964 heures de travail annuelles autorisées — sauf si l'alternance est considérée comme faisant partie intégrante de la formation. Or, un contrat d'apprentissage représente souvent 35 heures par semaine en entreprise (70 % du temps en entreprise et 30 % en école), ce qui dépasse largement la limite de 20 heures hebdomadaires habituelles.

Pour accéder légalement à l'alternance à plein temps, les étudiants étrangers hors-UE doivent généralement obtenir un titre de séjour différent ou une autorisation complémentaire. La règle de la «régularisation par le travail» prévue pour certains profils s'applique parfois, mais la situation est complexe et varie selon les préfectures. Il est vivement recommandé de consulter la préfecture de votre région avant de signer un contrat d'alternance pour vérifier si votre titre actuel est compatible ou s'il faut l'adapter.

## Comment accéder au marché du travail après le diplôme : l'APS

L'une des questions les plus importantes pour les étudiants en fin de cursus est celle de la transition du statut étudiant vers un statut professionnel en France. La France a mis en place un dispositif spécifique pour faciliter cette transition : l'Autorisation Provisoire de Séjour pour travailleur (APS).

L'APS post-diplôme est un titre de séjour temporaire d'une durée de 12 mois (non renouvelable) délivré aux étudiants titulaires d'un diplôme de niveau master ou d'un titre équivalent (niveau 7 du Cadre National des Certifications) obtenu en France. Elle permet à son titulaire de chercher un emploi en France ou de créer une entreprise pendant un an, tout en ayant le droit de travailler en parallèle pour subvenir à ses besoins. Elle n'est accordée qu'une seule fois dans la carrière.

Pour obtenir l'APS, il faut déposer une demande auprès de la préfecture dans les 4 mois suivant l'obtention du diplôme (attention, certaines préfectures ont des pratiques légèrement différentes). Le dossier comprend l'attestation de diplôme ou les relevés de notes finaux, le passeport, un justificatif de logement, et parfois un justificatif de ressources. Le délai d'instruction varie selon les préfectures.

Une fois l'APS obtenue, l'étudiant devenu chercheur d'emploi peut postuler à des postes et, s'il trouve un emploi correspondant à son niveau de formation, entamer la procédure pour obtenir une carte de séjour salarié ou une carte de séjour «passeport talent» selon la nature du poste. La transition du statut étudiant au statut salarié est ainsi facilitée par ce sas d'une année qui permet de chercher sans être sous pression administrative.

## Retour temporaire dans le pays d'origine et réadmission en France

Les étudiants qui rentrent dans leur pays d'origine pendant les vacances ou pour des raisons familiales et souhaitent revenir en France pour continuer leurs études peuvent le faire sans formalité particulière tant que leur titre de séjour est en cours de validité. Leur VLS-TS validé ou leur carte de séjour en cours de validité leur permet de revenir en France.

La situation se complique si le titre de séjour expire pendant le séjour à l'étranger. Dans ce cas, il faut demander un nouveau visa depuis le pays d'origine — on parle de «demande de visa depuis l'étranger en renouvellement». Cette situation est préférable à éviter en gérant correctement les délais de renouvellement, mais si elle se produit, deux options s'offrent à vous : revenir en France avant l'expiration du titre pour y déposer le renouvellement, ou déposer une demande de visa depuis le consulat dans votre pays en justifiant de votre scolarité en France.

La politique préfectorale française est généralement accommodante pour les étudiants en séjour régulier qui ont une interruption de séjour justifiée, mais les situations se traitent au cas par cas.

## La perte ou le vol de documents : que faire en urgence ?

Perdre son passeport ou se le faire voler en France est une situation stressante qui peut paralyser les démarches administratives. Voici les étapes à suivre en cas de perte ou de vol.

Signalez immédiatement la perte ou le vol du passeport à la police ou à la gendarmerie la plus proche et obtenez un récépissé de déclaration de perte/vol. Ce document est important pour toutes les démarches suivantes. Contactez l'ambassade ou le consulat de votre pays en France pour signaler la situation et entamer les démarches de remplacement du passeport. Les délais varient selon les pays mais comptez plusieurs semaines.

Si votre titre de séjour était collé dans le passeport perdu, informez immédiatement la préfecture de cette situation. La préfecture peut délivrer un récépissé attestant de votre présence légale en France pendant les démarches de remplacement. Ne tardez pas à faire ces signalements — agir rapidement vous protège et démontre votre bonne foi.

## Le mariage ou le PACS en France : incidences sur le titre de séjour

Si vous vous mariez ou concluez un PACS avec un(e) ressortissant(e) français(e) ou un(e) ressortissant(e) européen(ne) pendant vos études en France, cela ouvre potentiellement des droits à un titre de séjour différent et plus stable : la carte de séjour «vie privée et familiale». Ce titre, généralement valable 1 an et renouvelable, est indépendant de la poursuite des études et offre davantage de droits professionnels. La procédure de changement de statut (de séjour étudiant à séjour vie privée et familiale) se fait auprès de la préfecture sur présentation du certificat de mariage ou de l'attestation de PACS et des justificatifs habituels.

La conclusion d'un PACS ou d'un mariage ne supprime pas automatiquement le titre de séjour étudiant — vous pouvez conserver votre statut étudiant si vous le souhaitez. Le changement de statut est une option, pas une obligation.

## Questions fréquentes sur les situations particulières

**Q : Puis-je changer d'objectif de visa — passer de visa étudiant à visa salarié — sans quitter la France ?**
Dans certains cas, il est possible de changer de statut depuis la France (on parle de «changement de statut» ou «admission exceptionnelle au séjour»), notamment pour accéder à un emploi salarié correspond à votre qualification après l'obtention du diplôme, via l'APS ou un titre de séjour salarié. Ce changement de statut n'est pas automatique et nécessite une demande en préfecture avec un dossier complet.

**Q : Je suis étudiant étranger et je souhaite créer une entreprise en France. Mon visa étudiant me le permet-il ?**
Un visa étudiant ne l'interdit pas formellement, mais la création et la gestion d'une entreprise à temps plein est difficile à concilier avec le statut étudiant temps plein et la limite de 964 heures de travail annuel. Si votre projet est sérieux, renseignez-vous sur les dispositifs spécifiques aux créateurs d'entreprise étrangers (visa entrepreneur, carte de séjour «passeport talent — créateur d'entreprise» après le diplôme).

**Q : Mon conjoint ou mes enfants peuvent-ils venir s'installer en France avec moi pendant mes études ?**
Le regroupement familial pour les étudiants titulaires d'un simple titre de séjour «étudiant» est possible sous certaines conditions mais est soumis à des critères stricts de ressources et de logement. La procédure est distincte et plus longue que le simple renouvellement de titre. Votre conjoint(e) doit déposer une demande de visa de long séjour depuis votre pays d'origine. Commencez cette procédure très tôt si c'est votre situation.

## Ressources officielles

- [service-public.fr – Changement de statut](https://www.service-public.fr/particuliers/vosdroits/N106) : Les démarches pour changer de statut ou de titre de séjour
- [service-public.fr – APS post-diplôme](https://www.service-public.fr/particuliers/vosdroits/F18s) : Tout sur l'Autorisation Provisoire de Séjour
- [prefecture.gouv.fr](https://www.prefectures-regions.gouv.fr) : La liste des préfectures avec leurs coordonnées et leurs démarches en ligne
- [gisti.org](https://www.gisti.org) : Le Groupe d'Information et de Soutien des Immigrés, ressource juridique sur les droits des étrangers en France
`;

await patch('091720f8-2caa-4c7f-8ae9-02e55406872a', VISA_L4);
await patch('90444a49-53bc-4a34-b454-a2897fa20591', VISA_L5);
await patch('1b8fc4c5-ba29-43cd-88c9-7b7b85524b1a', VISA_L6);
