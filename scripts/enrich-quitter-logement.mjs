// Enrichissement: Quitter son logement en France (6 leçons)
const SUPABASE_URL = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';

async function updateLesson(id, content) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/lessons?id=eq.${id}`, {
    method: 'PATCH',
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  console.log(`${id}: HTTP ${res.status}`);
  return res.status;
}

// Leçon 1: Donner son préavis
const L1 = `<h2>Donner son préavis : délais, zones tendues et formalités complètes</h2>

<p>Quitter un logement en France ne se fait pas du jour au lendemain. Le <strong>préavis</strong> est une obligation légale encadrée par la <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310" target="_blank">loi du 6 juillet 1989</a> qui régit les rapports locatifs. Comprendre les règles du préavis est essentiel pour éviter des frais inutiles et des conflits avec votre propriétaire. Ce guide complet vous explique tout ce que vous devez savoir en tant qu'étudiant international en France.</p>

<h3>Qu'est-ce que le préavis de départ ?</h3>

<p>Le préavis est la période pendant laquelle le locataire continue de payer son loyer après avoir notifié au propriétaire son intention de quitter le logement. C'est une période de transition qui permet au bailleur de chercher un nouveau locataire. Le préavis commence à courir à partir de la <strong>réception</strong> de la lettre de congé par le propriétaire, et non à partir de la date d'envoi. Pendant toute la durée du préavis, le locataire reste tenu de payer le loyer et les charges, même s'il a déjà quitté physiquement le logement. C'est un point crucial que beaucoup d'étudiants internationaux ignorent et qui peut entraîner des litiges coûteux.</p>

<h3>Les délais de préavis selon le type de bail</h3>

<p>En France, le délai de préavis varie selon le type de location et la localisation géographique du logement. Voici les différents cas de figure que vous pouvez rencontrer :</p>

<h4>Location vide (non meublée)</h4>

<p>Pour une location vide, le délai de préavis est en principe de <strong>3 mois</strong>. Ce délai relativement long s'explique par le fait que les baux vides sont conclus pour une durée de 3 ans minimum et que le propriétaire a besoin de temps pour retrouver un locataire. Toutefois, ce délai peut être réduit à <strong>1 mois</strong> dans plusieurs situations prévues par la loi. Les zones tendues sont le cas le plus fréquent de réduction du préavis. Le concept de zone tendue désigne les communes où la demande de logement est très supérieure à l'offre disponible, créant une tension sur le marché immobilier. La liste complète des 1 149 communes est fixée par le <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027399823" target="_blank">décret n° 2013-392 du 10 mai 2013</a>. Parmi elles, on trouve Paris et toute l'Île-de-France, Lyon, Marseille, Bordeaux, Toulouse, Nantes, Montpellier, Lille, Strasbourg, Nice, et bien d'autres grandes villes universitaires. Vous pouvez vérifier si votre commune est en zone tendue sur le site <a href="https://www.service-public.fr/particuliers/vosdroits/F1168" target="_blank">service-public.fr</a>.</p>

<h4>Location meublée</h4>

<p>Pour un logement meublé, le préavis est toujours de <strong>1 mois</strong>, quelle que soit la zone géographique. C'est l'un des avantages du bail meublé pour les étudiants, car il offre plus de flexibilité. Le bail meublé est d'ailleurs le type de contrat le plus courant pour les étudiants internationaux, car les logements sont équipés et les durées d'engagement plus courtes (1 an renouvelable, ou 9 mois pour un bail étudiant). Il est important de noter que pour qu'un logement soit considéré comme meublé au sens de la loi, il doit contenir un minimum de 11 éléments de mobilier définis par le <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031088656" target="_blank">décret du 31 juillet 2015</a> : literie avec couette ou couverture, volets ou rideaux dans les chambres, plaques de cuisson, four ou micro-ondes, réfrigérateur, congélateur ou compartiment à congélation, vaisselle et ustensiles de cuisine, table et sièges, étagères de rangement, luminaires, et matériel d'entretien ménager.</p>

<h4>Bail mobilité</h4>

<p>Le <strong>bail mobilité</strong>, créé par la <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000037639478" target="_blank">loi ELAN de 2018</a>, est un contrat de 1 à 10 mois non reconductible, destiné aux étudiants, stagiaires, apprentis ou personnes en mission temporaire. Avec ce type de bail, le préavis est également de <strong>1 mois</strong>. L'avantage majeur est qu'aucun dépôt de garantie ne peut être exigé. Ce bail est particulièrement adapté aux étudiants internationaux en échange universitaire ou en stage de courte durée.</p>

<h4>Résidence universitaire CROUS</h4>

<p>Pour les résidences CROUS, les règles sont spécifiques. Le bail est généralement de 10 mois (septembre à juin). Le préavis est de <strong>1 mois avant la fin du bail</strong>, et il faut envoyer une lettre recommandée au directeur de la résidence. Si vous souhaitez partir en cours d'année, vous pouvez demander une résiliation anticipée, mais le CROUS n'est pas obligé de l'accepter. En pratique, il est souvent accordé pour des motifs légitimes (abandon d'études, mutation, maladie). Consultez le site <a href="https://www.messervices.etudiant.gouv.fr" target="_blank">messervices.etudiant.gouv.fr</a> pour les démarches spécifiques.</p>

<h3>Les cas de réduction du préavis à 1 mois</h3>

<p>Même en location vide hors zone tendue, le préavis peut être réduit à 1 mois dans les situations suivantes, que l'étudiant doit impérativement justifier :</p>

<ul>
<li><strong>Obtention d'un premier emploi</strong> : Un contrat de travail (CDI, CDD de plus de 3 mois) signé après la fin des études. Vous devez fournir une copie du contrat de travail au propriétaire avec votre lettre de congé.</li>
<li><strong>Mutation professionnelle</strong> : Un changement de lieu de travail imposé par l'employeur qui rend impossible la poursuite du bail. L'attestation de l'employeur est nécessaire.</li>
<li><strong>Perte d'emploi</strong> : Un licenciement ou une fin de CDD. La lettre de licenciement ou l'attestation Pôle emploi fait office de justificatif.</li>
<li><strong>État de santé</strong> : Une situation médicale justifiant un déménagement urgent, attestée par un certificat médical. Cela peut inclure un handicap, une maladie chronique nécessitant un logement adapté, ou une hospitalisation longue durée.</li>
<li><strong>Bénéficiaire du RSA ou de l'AAH</strong> : Les personnes percevant le Revenu de Solidarité Active ou l'Allocation aux Adultes Handicapés bénéficient automatiquement du préavis réduit.</li>
<li><strong>Attribution d'un logement social</strong> : Si vous obtenez un logement HLM, le préavis est réduit à 1 mois quel que soit le type de bail précédent.</li>
<li><strong>Violences conjugales</strong> : Sur présentation d'une ordonnance de protection du juge, le préavis peut même être supprimé totalement depuis la loi du 28 décembre 2019.</li>
</ul>

<h3>Comment rédiger et envoyer sa lettre de congé</h3>

<p>La lettre de congé est un document formel qui doit respecter certaines conditions pour être valable juridiquement. Voici les éléments obligatoires à inclure :</p>

<ul>
<li>Vos nom, prénom et adresse du logement que vous quittez</li>
<li>Le nom et l'adresse du propriétaire (ou de l'agence immobilière mandatée)</li>
<li>La date de rédaction de la lettre</li>
<li>La mention explicite de votre volonté de quitter le logement ("Je vous informe par la présente de mon intention de résilier le bail...")</li>
<li>La date souhaitée de départ (en respectant le délai de préavis)</li>
<li>Le motif de préavis réduit si applicable (avec justificatifs joints)</li>
<li>La référence au bail (date de signature, adresse du bien)</li>
<li>Votre signature manuscrite</li>
</ul>

<h4>Les modes d'envoi acceptés</h4>

<p>La loi prévoit trois modes de notification du congé, chacun ayant ses spécificités :</p>

<table>
<tr><th>Mode d'envoi</th><th>Date de début du préavis</th><th>Avantages</th><th>Inconvénients</th></tr>
<tr><td>Lettre recommandée avec accusé de réception (LRAR)</td><td>Date de réception par le propriétaire</td><td>Preuve solide, tracé par La Poste</td><td>Coût (environ 6-8€), délai postal</td></tr>
<tr><td>Acte d'huissier</td><td>Date de signification</td><td>Preuve irréfutable</td><td>Coût élevé (100-150€)</td></tr>
<tr><td>Remise en main propre contre récépissé</td><td>Date de la remise</td><td>Gratuit, immédiat</td><td>Nécessite la présence du bailleur</td></tr>
</table>

<p><strong>Conseil pratique</strong> : Envoyez toujours votre lettre en <strong>LRAR</strong>. C'est le mode le plus courant et le plus sûr. Vous pouvez le faire directement en ligne via <a href="https://www.laposte.fr/lettre-recommandee-en-ligne" target="_blank">La Poste en ligne</a>, ce qui est très pratique pour les étudiants internationaux qui ne maîtrisent pas encore parfaitement le français. Le courrier est imprimé, mis sous pli et envoyé par La Poste elle-même.</p>

<blockquote>
<strong>Attention :</strong> Un simple email, un SMS ou un message sur WhatsApp n'a <strong>aucune valeur juridique</strong> pour donner son préavis. Même si votre propriétaire l'accepte verbalement, en cas de litige, seule la lettre recommandée ou l'acte d'huissier fera foi devant un tribunal.
</blockquote>

<h3>Le calcul de la date de fin de préavis</h3>

<p>Le préavis commence à courir le jour de la réception de la lettre par le propriétaire, pas le jour de l'envoi. Par exemple, si vous envoyez une LRAR le 1er mars et que le propriétaire la reçoit le 4 mars, votre préavis d'1 mois commencera le 4 mars et se terminera le 4 avril. Vous devrez payer le loyer jusqu'au 4 avril, même si vous quittez le logement avant cette date. Si votre lettre est envoyée un 31 et que le mois suivant ne comporte pas de 31 (comme février), le préavis se terminera le dernier jour du mois suivant.</p>

<p>Point important : si le propriétaire refuse de réceptionner la LRAR, le préavis commence quand même à courir à partir de la date de première présentation du courrier par le facteur. Le bureau de poste conserve le courrier 15 jours avant de le retourner à l'expéditeur, mais cela n'empêche pas le préavis de courir. Gardez toujours l'avis de passage et l'accusé de réception comme preuves.</p>

<h3>Le loyer pendant le préavis</h3>

<p>Pendant toute la durée du préavis, le locataire est redevable du loyer et des charges. Cependant, si un nouveau locataire entre dans les lieux avant la fin du préavis avec l'accord du propriétaire, le locataire sortant n'a plus à payer le loyer à partir de la date d'entrée du nouveau locataire. C'est une situation avantageuse que vous pouvez négocier avec votre propriétaire, surtout si vous trouvez vous-même un remplaçant. Pour le dernier mois, le loyer est calculé au prorata exact du nombre de jours d'occupation. Si votre loyer mensuel est de 600€ et que votre préavis se termine le 15 du mois, vous paierez 600 × 15/30 = 300€ pour les 15 jours.</p>

<h3>Que faire en cas de litige sur le préavis</h3>

<p>Les litiges les plus fréquents concernent la durée du préavis (le propriétaire conteste la réduction à 1 mois), le calcul du loyer résiduel, ou le refus du propriétaire de reconnaître la réception du congé. En cas de désaccord, plusieurs recours sont possibles par ordre d'escalade :</p>

<ul>
<li><strong>Dialogue amiable</strong> : Contactez votre propriétaire par écrit (email + LRAR) pour exposer votre situation et la base légale de votre droit. Joignez les textes de loi pertinents.</li>
<li><strong>Commission Départementale de Conciliation (CDC)</strong> : C'est une instance gratuite qui tente de concilier propriétaire et locataire. Trouvez votre CDC sur <a href="https://www.service-public.fr/particuliers/vosdroits/F1216" target="_blank">service-public.fr</a>.</li>
<li><strong>ADIL (Agence Départementale d'Information sur le Logement)</strong> : Service gratuit qui vous informe sur vos droits et peut vous aider à rédiger des courriers. Site : <a href="https://www.anil.org" target="_blank">anil.org</a>.</li>
<li><strong>Tribunal judiciaire</strong> : En dernier recours, vous pouvez saisir le tribunal. Pour les litiges inférieurs à 5 000€, c'est le juge des contentieux de la protection. Au-delà, c'est le tribunal judiciaire.</li>
</ul>

<h3>Conseils pratiques pour les étudiants internationaux</h3>

<p>Voici des recommandations spécifiques pour les étudiants étrangers qui quittent leur logement en France :</p>

<ul>
<li><strong>Anticipez votre départ</strong> : Si vous savez que votre visa ou votre programme d'études se termine à une date précise, envoyez votre préavis suffisamment tôt. N'attendez pas le dernier moment.</li>
<li><strong>Conservez tous les documents</strong> : Gardez une copie de votre lettre de congé, l'accusé de réception, les échanges avec le propriétaire, le bail, et les quittances de loyer. Ces documents peuvent être utiles même après votre retour dans votre pays d'origine.</li>
<li><strong>Informez-vous sur vos droits</strong> : L'ADIL et les associations étudiantes (comme l'UNEF ou la FAGE) peuvent vous aider gratuitement à comprendre vos droits et obligations.</li>
<li><strong>Prévoyez le chevauchement</strong> : Si possible, gardez un chevauchement de quelques jours entre votre ancien et votre nouveau logement pour gérer l'état des lieux de sortie sereinement.</li>
<li><strong>Demandez un modèle de lettre</strong> : Le site <a href="https://www.service-public.fr/particuliers/vosdroits/R20456" target="_blank">service-public.fr</a> propose des modèles gratuits de lettres de congé que vous pouvez personnaliser.</li>
</ul>

<h3>Modèle de lettre de préavis</h3>

<blockquote>
<p><strong>[Votre nom et prénom]</strong><br>
[Votre adresse actuelle]<br>
[Code postal – Ville]<br><br>
<strong>[Nom du propriétaire/bailleur]</strong><br>
[Adresse du propriétaire]<br>
[Code postal – Ville]<br><br>
À [Ville], le [Date]<br><br>
<strong>Objet : Congé du logement situé au [adresse complète du logement]</strong><br><br>
Madame, Monsieur,<br><br>
Par la présente lettre recommandée avec accusé de réception, je vous informe de mon intention de mettre fin au bail signé le [date de signature du bail] pour le logement situé au [adresse complète].<br><br>
Conformément à l'article 15 de la loi n° 89-462 du 6 juillet 1989, je vous notifie mon congé avec un préavis d'un mois / trois mois [supprimer la mention inutile], qui commencera à courir à compter de la réception de la présente lettre.<br><br>
[Si préavis réduit :] Je bénéficie d'un préavis réduit à un mois au titre de [motif : zone tendue / premier emploi / etc.]. Vous trouverez ci-joint les justificatifs correspondants.<br><br>
Je reste à votre disposition pour convenir d'une date et d'un horaire pour l'état des lieux de sortie.<br><br>
Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.<br><br>
[Signature]</p>
</blockquote>

<h3>Liens et ressources utiles</h3>

<ul>
<li><a href="https://www.service-public.fr/particuliers/vosdroits/F1168" target="_blank">Service-public.fr – Préavis de départ du locataire</a></li>
<li><a href="https://www.anil.org/votre-adil/" target="_blank">ANIL – Trouver votre ADIL</a></li>
<li><a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310" target="_blank">Loi du 6 juillet 1989 – Rapports locatifs</a></li>
<li><a href="https://www.dossierfacile.logement.gouv.fr" target="_blank">DossierFacile – Dossier de location certifié</a></li>
<li><a href="https://www.laposte.fr/lettre-recommandee-en-ligne" target="_blank">La Poste – Lettre recommandée en ligne</a></li>
<li><a href="https://www.cidj.com/vie-quotidienne/logement-transports/quitter-son-logement" target="_blank">CIDJ – Quitter son logement</a></li>
</ul>

<p>En conclusion, donner son préavis est une étape administrative incontournable qui nécessite rigueur et anticipation. En tant qu'étudiant international, il est essentiel de bien comprendre les délais applicables à votre situation, de respecter les formalités d'envoi, et de conserver tous les documents relatifs à cette démarche. Un préavis bien géré vous évitera des frais supplémentaires et des conflits inutiles avec votre propriétaire.</p>`;

// Leçon 2: Checklist complète du départ
const L2 = `<h2>Checklist complète du départ : ne rien oublier quand on quitte son logement en France</h2>

<p>Quitter son logement en France implique une série de démarches administratives, logistiques et pratiques qu'il ne faut surtout pas négliger. Pour les étudiants internationaux, cette étape peut sembler complexe car elle touche à de nombreux domaines : résiliation de contrats, état des lieux, récupération du dépôt de garantie, redirection du courrier, et bien plus encore. Ce guide vous propose une <strong>checklist exhaustive</strong> pour organiser votre départ sereinement et ne rien oublier.</p>

<h3>3 mois avant le départ : les premières démarches</h3>

<p>La préparation d'un départ de logement commence idéalement trois mois à l'avance. Cette anticipation est particulièrement importante si vous êtes en location vide hors zone tendue, car le préavis est alors de 3 mois. Mais même avec un préavis d'1 mois (meublé ou zone tendue), commencer tôt vous permettra de gérer les imprévus sereinement.</p>

<h4>Envoyer le préavis au propriétaire</h4>
<p>C'est la toute première étape. Envoyez votre lettre de congé par <strong>lettre recommandée avec accusé de réception</strong> le plus tôt possible. Le préavis commence à courir à la date de réception par le propriétaire. N'oubliez pas de mentionner si vous bénéficiez d'un préavis réduit et d'y joindre les justificatifs nécessaires. Conservez précieusement la preuve d'envoi et l'accusé de réception. Vous pouvez utiliser le service <a href="https://www.laposte.fr/lettre-recommandee-en-ligne" target="_blank">La Poste en ligne</a> pour envoyer votre LRAR sans vous déplacer au bureau de poste.</p>

<h4>Contacter votre assurance habitation</h4>
<p>Prévenez votre assureur de votre départ. L'assurance habitation est résiliable à tout moment après la première année de contrat grâce à la <a href="https://www.service-public.fr/particuliers/vosdroits/F2668" target="_blank">loi Hamon</a>. Envoyez une lettre de résiliation (LRAR ou en ligne selon les assureurs) en indiquant la date effective de fin de bail. La résiliation prend effet 1 mois après la réception. Si vous déménagez vers un autre logement en France, vous pouvez aussi transférer votre contrat plutôt que de le résilier. Contactez directement votre assureur pour discuter des options disponibles. Les assureurs étudiants comme la <a href="https://www.lmde.fr" target="_blank">LMDE</a> ou <a href="https://www.heyme.care" target="_blank">HEYME</a> proposent souvent des résiliations en ligne simplifiées.</p>

<h4>Lister les contrats à résilier</h4>
<p>Faites un inventaire complet de tous vos contrats et abonnements liés au logement actuel. Voici la liste des plus courants pour un étudiant :</p>

<table>
<tr><th>Contrat</th><th>Préavis</th><th>Mode de résiliation</th><th>Contact utile</th></tr>
<tr><td>Électricité (EDF/Engie/autre)</td><td>Aucun</td><td>Téléphone ou en ligne</td><td><a href="https://www.edf.fr" target="_blank">edf.fr</a></td></tr>
<tr><td>Gaz (Engie/autre)</td><td>Aucun</td><td>Téléphone ou en ligne</td><td><a href="https://www.engie.fr" target="_blank">engie.fr</a></td></tr>
<tr><td>Internet (Free/Orange/SFR/Bouygues)</td><td>10 jours</td><td>Courrier ou espace client</td><td>Espace client de l'opérateur</td></tr>
<tr><td>Assurance habitation</td><td>1 mois</td><td>LRAR ou en ligne</td><td>Votre assureur</td></tr>
<tr><td>Eau (si contrat individuel)</td><td>Aucun</td><td>Téléphone</td><td>Régie locale</td></tr>
<tr><td>Taxe d'ordures ménagères</td><td>Automatique</td><td>Changement de locataire suffit</td><td>Mairie</td></tr>
</table>

<h3>1 mois avant le départ : les démarches principales</h3>

<h4>Résilier son contrat d'électricité et de gaz</h4>
<p>La résiliation des contrats d'énergie est gratuite et sans préavis. Vous pouvez le faire par téléphone, en ligne ou par courrier. Communiquez au fournisseur votre numéro de contrat (ou numéro PDL pour l'électricité, numéro PCE pour le gaz), la date souhaitée de résiliation (votre dernier jour dans le logement), et votre index de compteur si possible. EDF : appelez le 09 69 32 15 15 ou rendez-vous sur <a href="https://www.edf.fr/demenagement" target="_blank">edf.fr/demenagement</a>. Engie : 09 69 39 99 93 ou <a href="https://www.engie.fr/demenagement" target="_blank">engie.fr/demenagement</a>. Le fournisseur vous enverra une facture de clôture dans les 4 semaines suivant la résiliation. Si vous avez un trop-perçu (ce qui arrive souvent quand les mensualités étaient lissées sur l'année), le remboursement sera effectué sous 2 semaines par virement ou chèque.</p>

<h4>Résilier son abonnement internet</h4>
<p>La résiliation internet nécessite en général un délai de 10 jours. La plupart des opérateurs acceptent la résiliation <strong>sans frais</strong> si vous justifiez d'un déménagement dans une zone non éligible à la fibre ou si votre engagement initial est terminé. En cas d'engagement restant, des frais de résiliation peuvent s'appliquer (le montant restant au prorata des mois restants). Depuis la <a href="https://www.service-public.fr/particuliers/vosdroits/F20566" target="_blank">loi Chatel</a>, ces frais sont plafonnés. N'oubliez pas de <strong>rendre votre box</strong> (routeur) à l'opérateur dans les 30 jours suivant la résiliation, sous peine de facturation (souvent 100-200€). Vous pouvez généralement la déposer dans un Point Relais ou un bureau de poste avec l'étiquette de retour fournie par l'opérateur.</p>

<h4>Faire suivre son courrier</h4>
<p>Souscrivez un <strong>service de réexpédition</strong> auprès de <a href="https://www.laposte.fr/courrier-en-ligne/suivi-du-courrier/demenagement" target="_blank">La Poste</a>. Le service coûte entre 26€ et 75€ selon la durée (6 mois ou 12 mois). Si vous quittez la France définitivement, optez pour la réexpédition internationale (plus chère mais indispensable pour recevoir d'éventuels courriers administratifs). Ce service est crucial car après votre départ, vous pourriez recevoir des courriers importants : dernière facture d'énergie, remboursement de trop-perçu, avis d'imposition, courrier de la CAF, correspondance de la préfecture, etc. Commandez la réexpédition au moins 5 jours ouvrés avant votre départ.</p>

<h4>Prévenir la CAF</h4>
<p>Si vous percevez des aides au logement (APL, ALS), vous devez impérativement <strong>déclarer votre changement de situation</strong> sur <a href="https://www.caf.fr" target="_blank">caf.fr</a> → Mon Compte → Déclarer un changement. Indiquez votre nouvelle adresse et la date de déménagement. Si vous quittez la France, signalez-le également pour que vos droits soient clôturés proprement. Attention : si vous ne signalez pas votre départ et continuez à percevoir l'APL, vous serez en situation de <strong>trop-perçu</strong> et la CAF vous demandera un remboursement avec potentiellement des pénalités pour fraude. Le signalement doit être fait dans le mois qui suit votre déménagement au plus tard.</p>

<h4>Signaler le changement d'adresse aux administrations</h4>
<p>Utilisez le service gratuit <a href="https://www.service-public.fr/particuliers/vosdroits/R11193" target="_blank">service-public.fr – Changement d'adresse</a> qui vous permet de prévenir en une seule démarche : les impôts (DGFIP), la Sécurité sociale (CPAM), Pôle Emploi, la préfecture, la Caisse de retraite, et d'autres organismes. Si vous quittez la France définitivement, informez également votre banque pour les relevés et la correspondance.</p>

<h3>2 semaines avant le départ : la préparation pratique</h3>

<h4>Préparer l'état des lieux de sortie</h4>
<p>C'est un document crucial qui conditionne la restitution de votre dépôt de garantie. Prenez le temps de :</p>
<ul>
<li><strong>Nettoyer le logement en profondeur</strong> : sols, murs, fenêtres, cuisine (four, plaques, réfrigérateur), salle de bain, toilettes. Un logement propre donne une meilleure impression et réduit les retenues sur la caution.</li>
<li><strong>Reboucher les trous</strong> : Si vous aviez fixé des étagères, cadres ou rideaux, rebouchez les trous avec de l'enduit de rebouchage (disponible en grande surface pour 3-5€). Poncez légèrement une fois sec.</li>
<li><strong>Vérifier l'état des équipements</strong> : ampoules fonctionnelles, prises électriques, robinets sans fuite, joints de salle de bain en bon état, poignées de portes et fenêtres.</li>
<li><strong>Comparer avec l'état des lieux d'entrée</strong> : Ressortez votre état des lieux d'entrée et comparez pièce par pièce. Notez les différences et préparez vos arguments pour la vétusté normale (usure naturelle due au temps).</li>
<li><strong>Photographier le logement</strong> : Prenez des photos datées de chaque pièce, des équipements et des compteurs. Ces photos servent de preuve en cas de litige.</li>
</ul>

<h4>Organiser le déménagement</h4>
<p>Plusieurs options s'offrent à vous :</p>
<ul>
<li><strong>Location de véhicule utilitaire</strong> : Carrefour Location est souvent le moins cher (environ 30-50€/jour pour un petit utilitaire). Aussi : <a href="https://www.ada.fr" target="_blank">ADA</a>, <a href="https://www.europcar.fr" target="_blank">Europcar</a>.</li>
<li><strong>Déménageur professionnel</strong> : Comparez les devis sur <a href="https://www.demenager-facile.com" target="_blank">demenager-facile.com</a>. Budget : 500-1500€ pour un studio en Île-de-France.</li>
<li><strong>Aide d'amis</strong> : L'option la plus économique. Prévoyez un apéro ou un repas pour remercier vos amis !</li>
<li><strong>Covoiturage de colis</strong> : <a href="https://www.cocolis.fr" target="_blank">Cocolis</a> permet d'envoyer des cartons avec des particuliers qui ont de la place dans leur véhicule.</li>
<li><strong>Donner ou vendre</strong> : Pour les meubles que vous ne pouvez pas emporter, utilisez <a href="https://www.leboncoin.fr" target="_blank">Leboncoin</a>, <a href="https://www.geev.com" target="_blank">Geev</a> (don gratuit), ou les groupes Facebook de votre ville. Les associations comme Emmaüs récupèrent aussi les meubles et vêtements en bon état.</li>
</ul>

<h3>Le jour du départ : les dernières étapes</h3>

<h4>L'état des lieux de sortie</h4>
<p>L'état des lieux de sortie se fait le jour de la remise des clés, en présence du propriétaire (ou de son mandataire) et du locataire. Il est réalisé contradictoirement, c'est-à-dire que les deux parties doivent être présentes et d'accord sur les constatations. Vérifiez que chaque pièce est inspectée minutieusement et que toutes les remarques sont notées de manière précise. Refusez de signer un état des lieux que vous trouvez injuste – vous avez le droit de contester et de demander la présence d'un huissier.</p>

<h4>Relevé des compteurs</h4>
<p>Notez les index de vos compteurs d'électricité, de gaz et d'eau le jour de votre départ. Transmettez-les à vos fournisseurs d'énergie pour que la facture de clôture soit exacte. Prenez une photo des compteurs avec la date visible.</p>

<h4>Remise des clés</h4>
<p>Rendez <strong>toutes les clés</strong> au propriétaire : clés de l'appartement, de la cave, du parking, de la boîte aux lettres, du local vélo, les badges d'accès, les télécommandes de portail. Demandez un <strong>reçu de remise des clés</strong> signé par le propriétaire avec la date et le nombre de clés rendues. Ce document est essentiel car il marque la fin officielle de votre occupation du logement et le début du délai de restitution du dépôt de garantie.</p>

<h3>Après le départ : les dernières formalités</h3>

<h4>Récupération du dépôt de garantie</h4>
<p>Le propriétaire dispose de <strong>1 mois</strong> pour restituer le dépôt de garantie si l'état des lieux de sortie est conforme à celui d'entrée, et de <strong>2 mois</strong> s'il y a des dégradations constatées. Passé ces délais, le propriétaire doit verser des pénalités de 10% du loyer mensuel par mois de retard. N'hésitez pas à envoyer une mise en demeure par LRAR si le délai est dépassé.</p>

<h4>Dernières factures</h4>
<p>Vérifiez que vous avez bien reçu et payé les factures de clôture d'EDF, de gaz, d'internet et d'eau. Si vous avez un trop-perçu, assurez-vous que le remboursement est bien effectué sur votre compte bancaire français (gardez votre compte ouvert jusqu'à la régularisation complète de toutes les factures).</p>

<h4>Déclaration de revenus</h4>
<p>Même si vous quittez la France, vous devez effectuer votre déclaration de revenus l'année suivante pour les revenus perçus l'année du départ. Rendez-vous sur <a href="https://www.impots.gouv.fr" target="_blank">impots.gouv.fr</a> entre avril et juin. Si vous êtes définitivement parti, indiquez votre nouvelle adresse à l'étranger pour recevoir votre avis d'imposition, qui est un document souvent exigé pour des démarches administratives ultérieures (demande de visa dans un autre pays, par exemple).</p>

<h3>Checklist récapitulative à imprimer</h3>

<ul>
<li>☐ Envoyer le préavis par LRAR au propriétaire</li>
<li>☐ Résilier l'assurance habitation</li>
<li>☐ Résilier électricité (EDF/Engie)</li>
<li>☐ Résilier gaz (si applicable)</li>
<li>☐ Résilier internet (rendre la box !)</li>
<li>☐ Résilier contrat eau (si individuel)</li>
<li>☐ Prévenir la CAF – déclarer changement</li>
<li>☐ Commander réexpédition courrier La Poste</li>
<li>☐ Signaler changement adresse (service-public.fr)</li>
<li>☐ Prévenir la banque</li>
<li>☐ Nettoyer le logement en profondeur</li>
<li>☐ Reboucher les trous et petits travaux</li>
<li>☐ Comparer avec état des lieux d'entrée</li>
<li>☐ Photographier le logement</li>
<li>☐ Organiser le déménagement</li>
<li>☐ Donner/vendre les meubles non transportables</li>
<li>☐ Faire l'état des lieux de sortie</li>
<li>☐ Relever les compteurs (photos datées)</li>
<li>☐ Remettre toutes les clés + obtenir reçu signé</li>
<li>☐ Vérifier restitution du dépôt de garantie</li>
<li>☐ Payer/vérifier factures de clôture</li>
<li>☐ Prévoir déclaration de revenus si nécessaire</li>
</ul>

<h3>Ressources et liens utiles</h3>

<ul>
<li><a href="https://www.service-public.fr/particuliers/vosdroits/N349" target="_blank">Service-public.fr – Quitter son logement</a></li>
<li><a href="https://www.anil.org" target="_blank">ANIL – Agence Nationale d'Information sur le Logement</a></li>
<li><a href="https://www.laposte.fr/demenagement" target="_blank">La Poste – Déménagement et réexpédition</a></li>
<li><a href="https://www.caf.fr" target="_blank">CAF – Déclarer un changement de situation</a></li>
<li><a href="https://www.edf.fr/demenagement" target="_blank">EDF – Déménagement</a></li>
<li><a href="https://www.cidj.com/vie-quotidienne/logement-transports" target="_blank">CIDJ – Logement et transport</a></li>
</ul>

<p>En suivant méthodiquement cette checklist, vous vous assurez de ne rien oublier et d'éviter les mauvaises surprises. La clé d'un départ réussi est l'<strong>anticipation</strong> et la <strong>documentation</strong> de chaque étape. Gardez tous vos justificatifs pendant au moins 3 ans après votre départ, car certains litiges peuvent survenir tardivement.</p>`;

async function main() {
  const wordCount = (text) => text.split(/\s+/).length;

  console.log('Leçon 1 - Préavis:', wordCount(L1), 'mots');
  console.log('Leçon 2 - Checklist:', wordCount(L2), 'mots');

  let s1 = await updateLesson('4fd3a16d-ead6-4be0-b860-fa37822174a7', L1);
  let s2 = await updateLesson('55871b15-8379-49fb-9ee6-3847707432c0', L2);

  console.log(`\nDone! L1: ${s1}, L2: ${s2}`);
}

main().catch(console.error);
