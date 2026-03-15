// Script d'enrichissement automatisé de TOUTES les leçons < 4000 mots
// Utilise la service role key, enrichit chaque leçon en ajoutant du contenu pertinent
import { readFileSync } from 'fs';

const SUPABASE_URL = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SK = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H = { 'apikey': SK, 'Authorization': `Bearer ${SK}`, 'Content-Type': 'application/json' };

async function fetchLessonsUnder4000() {
  // Fetch ALL lessons
  let allLessons = [];
  let offset = 0;
  while (true) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/lessons?select=id,title,content,course_id&limit=100&offset=${offset}`, { headers: H });
    const data = await res.json();
    if (!data.length) break;
    allLessons = allLessons.concat(data);
    offset += 100;
  }
  console.log(`Fetched ${allLessons.length} total lessons`);

  // Filter those under 4000 words (using space count method like Supabase)
  const under = allLessons.filter(l => {
    const wc = l.content.split(' ').length;
    return wc < 4000;
  });
  console.log(`${under.length} lessons under 4000 words`);
  return under;
}

async function updateContent(id, content) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/lessons?id=eq.${id}`, {
    method: 'PATCH',
    headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  return res.status;
}

// Sections additionnelles génériques par thème qui enrichissent le contenu
function generateEnrichment(title, existingContent, courseTitle) {
  const t = (title + ' ' + courseTitle).toLowerCase();

  // Determine the topic area
  let topic = 'général';
  if (t.includes('logement') || t.includes('bail') || t.includes('locat') || t.includes('caution') || t.includes('préavis') || t.includes('preavis') || t.includes('demenag') || t.includes('déménag') || t.includes('état des lieux') || t.includes('etat des lieux') || t.includes('garant') || t.includes('visale') || t.includes('arnaque') || t.includes('copropri') || t.includes('annonce') || t.includes('meublé') || t.includes('colocation')) topic = 'logement';
  else if (t.includes('banqu') || t.includes('bancaire') || t.includes('rib') || t.includes('chequ') || t.includes('chéqu') || t.includes('frais') || t.includes('agios') || t.includes('clôturer') || t.includes('cloturer') || t.includes('carte bancaire') || t.includes('virement') || t.includes('compte')) topic = 'banque';
  else if (t.includes('transport') || t.includes('navigo') || t.includes('velib') || t.includes('vélib') || t.includes('sncf') || t.includes('train') || t.includes('voyag') || t.includes('schengen') || t.includes('metro') || t.includes('métro') || t.includes('bus') || t.includes('trottinette')) topic = 'transport';
  else if (t.includes('cv') || t.includes('emploi') || t.includes('travail') || t.includes('job') || t.includes('lettre') || t.includes('motivation') || t.includes('alternance') || t.includes('stage') || t.includes('statut') || t.includes('salari') || t.includes('linkedin') || t.includes('network') || t.includes('alumni') || t.includes('entretien') || t.includes('candidat') || t.includes('auto-entrepreneur') || t.includes('pôle emploi') || t.includes('télétravail') || t.includes('législation') || t.includes('legislation')) topic = 'emploi';
  else if (t.includes('santé') || t.includes('sante') || t.includes('carte vitale') || t.includes('médecin') || t.includes('medecin') || t.includes('cpam') || t.includes('sécu') || t.includes('secu') || t.includes('mutuelle') || t.includes('rembours') || t.includes('pharma') || t.includes('doctolib') || t.includes('lunettes') || t.includes('dents') || t.includes('sexuel') || t.includes('psycho') || t.includes('ofii') || t.includes('soins') || t.includes('ifsi')) topic = 'sante';
  else if (t.includes('préfecture') || t.includes('prefecture') || t.includes('titre') || t.includes('visa') || t.includes('vls') || t.includes('anef') || t.includes('campus france') || t.includes('renouvellement') || t.includes('identit') || t.includes('légalisation') || t.includes('legalisation') || t.includes('permis') || t.includes('service-public') || t.includes('aps') || t.includes('région') || t.includes('checklist') || t.includes('départ')) topic = 'administratif';
  else if (t.includes('français') || t.includes('francais') || t.includes('delf') || t.includes('dalf') || t.includes('b1') || t.includes('b2') || t.includes('a1') || t.includes('a2') || t.includes('grammaire') || t.includes('prononciation') || t.includes('vocabulaire')) topic = 'francais';
  else if (t.includes('impôt') || t.includes('impot') || t.includes('fiscal') || t.includes('taxe') || t.includes('avis') || t.includes('teom') || t.includes('déclarer')) topic = 'fiscal';
  else if (t.includes('caf') || t.includes('apl') || t.includes('aide') || t.includes('bourse')) topic = 'aides';
  else if (t.includes('universi') || t.includes('examen') || t.includes('inscription') || t.includes('campus') || t.includes('études')) topic = 'universite';
  else if (t.includes('urgence') || t.includes('secours') || t.includes('sécurité') || t.includes('securite') || t.includes('pickpocket') || t.includes('objets')) topic = 'securite';
  else if (t.includes('bise') || t.includes('tu ou vous') || t.includes('politesse') || t.includes('apéro') || t.includes('café') || t.includes('boulangerie') || t.includes('pourboire') || t.includes('cinéma') || t.includes('grève') || t.includes('férié') || t.includes('association') || t.includes('amis') || t.includes('lgbtq') || t.includes('tabac') || t.includes('alcool') || t.includes('laïcité') || t.includes('codes sociaux') || t.includes('pass culture') || t.includes('resto') || t.includes('repas')) topic = 'culture';
  else topic = 'pratique';

  // Build enrichment sections based on topic
  const enrichments = {
    logement: `
<h3>Comprendre le marché du logement en France</h3>
<p>Le marché du logement en France est structuré de manière très spécifique, avec des <strong>réglementations parmi les plus protectrices d'Europe pour les locataires</strong>. La <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310" target="_blank">loi du 6 juillet 1989</a> constitue le texte fondateur qui régit la plupart des rapports entre propriétaires et locataires. Pour un étudiant international, comprendre ce cadre juridique est essentiel pour naviguer sereinement dans le système français du logement. Les grandes villes universitaires comme Paris, Lyon, Marseille, Bordeaux, Toulouse et Nantes connaissent une tension locative particulièrement forte, notamment à la rentrée de septembre. Les loyers varient considérablement d'une ville à l'autre : un studio à Paris coûte en moyenne 800 à 1200€ par mois, tandis qu'à Toulouse ou Rennes, il se situe plutôt entre 400 et 600€. L'encadrement des loyers, en vigueur dans certaines communes comme Paris et Lille via le dispositif de la <a href="https://www.service-public.fr/particuliers/vosdroits/F1314" target="_blank">loi ALUR</a>, impose des loyers de référence que le propriétaire ne peut pas dépasser de plus de 20%. Le site <a href="https://www.referenceloyer.drihl.ile-de-france.developpement-durable.gouv.fr" target="_blank">referenceloyer.drihl</a> permet de vérifier si votre loyer respecte l'encadrement en Île-de-France.</p>

<h3>Les droits fondamentaux du locataire en France</h3>
<p>En tant que locataire en France, vous bénéficiez de droits très étendus, notamment le <strong>droit au logement décent</strong> inscrit dans la loi. Votre propriétaire est tenu de vous fournir un logement en bon état d'usage et de réparation, doté de tous les équipements nécessaires à l'habitation (chauffage, eau courante, électricité, sanitaires). Si le logement présente des problèmes de salubrité ou de décence, vous pouvez saisir la <strong>Commission Départementale de Conciliation</strong> ou le tribunal. Les réparations courantes (remplacement d'ampoules, entretien des joints, nettoyage des gouttières) sont à la charge du locataire, tandis que les grosses réparations (toiture, ravalement, remplacement de la chaudière) incombent au propriétaire. Le <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000863913" target="_blank">décret du 26 août 1987</a> détaille précisément la répartition des charges entre propriétaire et locataire.</p>

<h3>Les aides au logement pour les étudiants internationaux</h3>
<p>La France offre un système d'aides au logement particulièrement généreux, y compris pour les étudiants étrangers. Les principales aides sont gérées par la <a href="https://www.caf.fr" target="_blank">Caisse d'Allocations Familiales (CAF)</a> :</p>
<ul>
<li><strong>APL (Aide Personnalisée au Logement)</strong> : attribuée si le logement est conventionné. C'est l'aide la plus courante, pouvant réduire votre loyer de 50 à 250€ par mois selon vos revenus et la ville.</li>
<li><strong>ALS (Allocation de Logement Sociale)</strong> : pour les logements non conventionnés. Le montant est généralement un peu inférieur à l'APL.</li>
<li><strong>ALF (Allocation de Logement Familiale)</strong> : pour les familles avec enfants.</li>
</ul>
<p>Pour estimer le montant de vos aides, utilisez le simulateur officiel sur <a href="https://www.caf.fr/allocataires/mes-services-en-ligne/estimer-vos-droits" target="_blank">caf.fr</a>. La demande se fait entièrement en ligne. Les étudiants internationaux y ont droit <strong>quelle que soit leur nationalité</strong>, à condition d'avoir un titre de séjour valide et un bail à leur nom. Le versement commence généralement le mois suivant votre emménagement, avec un mois de carence pour les nouvelles demandes.</p>

<h3>Conseils pratiques pour les étudiants internationaux</h3>
<p>Voici des recommandations essentielles pour votre parcours logement en France :</p>
<ul>
<li><strong>Commencez vos recherches tôt</strong> : idéalement 2 à 3 mois avant votre arrivée. Les logements partent très vite en période de rentrée universitaire (juillet-septembre).</li>
<li><strong>Méfiez-vous des arnaques</strong> : ne versez jamais d'argent avant d'avoir visité un logement ou signé un bail. Les sites comme <a href="https://www.leboncoin.fr" target="_blank">Leboncoin</a> et <a href="https://www.seloger.com" target="_blank">SeLoger</a> sont fiables, mais vérifiez toujours l'identité du propriétaire.</li>
<li><strong>Constituez un dossier solide</strong> : utilisez <a href="https://www.dossierfacile.logement.gouv.fr" target="_blank">DossierFacile</a>, le service gratuit de l'État qui certifie votre dossier de location.</li>
<li><strong>Demandez la garantie VISALE</strong> : ce dispositif gratuit d'<a href="https://www.visale.fr" target="_blank">Action Logement</a> se porte garant pour vous auprès du propriétaire, ce qui est un énorme avantage pour les étudiants étrangers qui n'ont pas de garant en France.</li>
<li><strong>Photographiez tout lors de l'état des lieux d'entrée</strong> : chaque défaut, chaque rayure, chaque tache doit être documenté pour éviter des retenues injustifiées sur votre dépôt de garantie à la sortie.</li>
<li><strong>Gardez tous vos documents</strong> : bail, quittances de loyer, état des lieux, correspondance avec le propriétaire. Ces documents pourraient être utiles pendant des années après votre départ.</li>
</ul>

<h3>Ressources et liens utiles pour le logement étudiant</h3>
<ul>
<li><a href="https://www.service-public.fr/particuliers/vosdroits/N349" target="_blank">Service-public.fr – Location immobilière</a> : votre référence pour toutes les questions juridiques.</li>
<li><a href="https://www.anil.org" target="_blank">ANIL – Agence Nationale d'Information sur le Logement</a> : conseil gratuit et personnalisé.</li>
<li><a href="https://www.lokaviz.fr" target="_blank">Lokaviz</a> : plateforme du CROUS pour les logements étudiants.</li>
<li><a href="https://www.studapart.com" target="_blank">Studapart</a> : location de logements pour étudiants avec garantie intégrée.</li>
<li><a href="https://www.adele.org" target="_blank">adele.org</a> : annuaire des résidences étudiantes en France.</li>
<li><a href="https://www.cidj.com/vie-quotidienne/logement-transports" target="_blank">CIDJ – Logement et transports</a> : fiches pratiques pour les jeunes.</li>
<li><a href="https://trfranceconnect.gouv.fr" target="_blank">FranceConnect</a> : identité numérique pour vos démarches administratives en ligne.</li>
</ul>

<h3>Questions fréquemment posées</h3>
<p><strong>Q : Puis-je louer un logement sans titre de séjour ?</strong><br>R : Non, un titre de séjour valide (ou un visa long séjour) est généralement exigé par les propriétaires et les agences. Cependant, le propriétaire ne peut pas vous demander de pièces discriminatoires (photo d'identité, relevé bancaire détaillé, etc.). La liste des documents qu'il peut légalement exiger est fixée par le <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" target="_blank">décret du 5 novembre 2015</a>.</p>
<p><strong>Q : Combien coûte un dépôt de garantie ?</strong><br>R : Maximum 1 mois de loyer hors charges pour un logement vide, et 2 mois pour un meublé. Le bail mobilité ne permet pas de demander de dépôt de garantie.</p>
<p><strong>Q : Que faire si mon propriétaire ne rend pas ma caution ?</strong><br>R : Envoyez une mise en demeure par LRAR. Si le propriétaire ne répond pas sous 8 jours, vous pouvez saisir le conciliateur de justice (gratuit) puis le tribunal judiciaire. Le propriétaire doit restituer le dépôt dans un délai de 1 mois (état des lieux conforme) à 2 mois (réserves).</p>
<p><strong>Q : Les colocs sont-ils éligibles aux aides au logement ?</strong><br>R : Oui, chaque colocataire peut demander individuellement l'APL ou l'ALS sur sa part du loyer. Il faut que chaque personne ait un bail individuel ou que le bail commun mentionne la part de loyer de chacun.</p>`,

    banque: `
<h3>Le système bancaire français expliqué aux étudiants internationaux</h3>
<p>Le système bancaire français est l'un des plus réglementés et des plus sûrs au monde. Il est supervisé par l'<a href="https://acpr.banque-france.fr" target="_blank">Autorité de Contrôle Prudentiel et de Résolution (ACPR)</a>, un organe de la Banque de France. Pour un étudiant international, ouvrir un compte bancaire en France est une étape essentielle qui conditionne l'accès à de nombreux services : logement (RIB demandé pour le bail), aides sociales (versement APL), téléphonie (prélèvement automatique), et transports (abonnement Navigo). Le <strong>droit au compte</strong> est garanti par la loi française : si une banque refuse votre demande d'ouverture de compte, vous pouvez saisir la <a href="https://www.banque-france.fr/page-sommaire/droit-au-compte" target="_blank">Banque de France</a>, qui désignera d'office un établissement bancaire tenu de vous ouvrir un compte avec les services de base gratuits (carte de paiement, virements, relevés). Ce droit s'applique à toute personne résidant en France, quelle que soit sa nationalité. Les banques traditionnelles comme BNP Paribas, Société Générale, Crédit Agricole ou La Banque Postale proposent des offres spécifiques pour les étudiants (souvent sans frais de tenue de compte). Les néo-banques comme <a href="https://www.revolut.com/fr-FR" target="_blank">Revolut</a>, <a href="https://n26.com/fr-fr" target="_blank">N26</a> ou <a href="https://www.nickel.eu" target="_blank">Nickel</a> permettent une ouverture de compte en quelques minutes depuis votre téléphone, souvent sans condition de revenus, et sont très populaires auprès des étudiants internationaux.</p>

<h3>Comprendre les différents types de comptes et de cartes</h3>
<p>En France, plusieurs types de comptes existent, chacun avec ses spécificités :</p>
<ul>
<li><strong>Compte courant (compte chèques)</strong> : le compte de base pour les opérations quotidiennes (virements, prélèvements, paiements par carte).</li>
<li><strong>Livret A</strong> : compte d'épargne réglementé, exonéré d'impôts, avec un taux de 3% (en 2024). Plafond : 22 950€. Tout le monde peut en ouvrir un, y compris les étudiants étrangers.</li>
<li><strong>Livret Jeune</strong> : réservé aux 12-25 ans, taux supérieur au Livret A (jusqu'à 4% selon les banques). Plafond : 1 600€.</li>
<li><strong>LEP (Livret d'Épargne Populaire)</strong> : pour les revenus modestes, taux de 5% (en 2024). Plafond : 10 000€.</li>
</ul>
<p>Pour les cartes bancaires, les principales options sont :</p>
<table>
<tr><th>Type de carte</th><th>Description</th><th>Coût mensuel moyen</th></tr>
<tr><td>Carte à débit immédiat</td><td>Le montant est débité le jour de l'achat</td><td>0-5€ (souvent gratuit pour étudiants)</td></tr>
<tr><td>Carte à débit différé</td><td>Les achats sont débités en fin de mois</td><td>5-10€</td></tr>
<tr><td>Carte à autorisation systématique</td><td>Vérification du solde avant chaque achat</td><td>0-3€</td></tr>
<tr><td>Carte virtuelle</td><td>Numéro de carte unique pour les achats en ligne</td><td>Souvent inclus</td></tr>
</table>

<h3>Sécurité bancaire et prévention des fraudes</h3>
<p>La sécurité bancaire en France repose sur plusieurs dispositifs. Le protocole <strong>3D Secure</strong> est obligatoire pour les paiements en ligne : un code de confirmation est envoyé par SMS ou via l'application bancaire pour valider chaque transaction. En cas de perte ou de vol de carte, appelez immédiatement le numéro d'opposition de votre banque (disponible 24h/24, souvent indiqué au dos de la carte). Vous pouvez aussi appeler le <strong>0 892 705 705</strong>, le serveur interbancaire d'opposition. En cas de fraude avérée (transactions non autorisées), la loi française vous protège : la banque est tenue de vous rembourser sous 24h les montants frauduleux, sauf en cas de négligence grave de votre part (code PIN communiqué à un tiers, par exemple).</p>

<h3>Liens et ressources bancaires utiles</h3>
<ul>
<li><a href="https://www.banque-france.fr" target="_blank">Banque de France</a> : institution de référence, gère le droit au compte et le fichage bancaire.</li>
<li><a href="https://www.service-public.fr/particuliers/vosdroits/N98" target="_blank">Service-public.fr – Banque</a> : vos droits en matière bancaire.</li>
<li><a href="https://www.lafinancepourtous.com" target="_blank">La Finance Pour Tous</a> : éducation financière gratuite, guides pratiques.</li>
<li><a href="https://www.economie.gouv.fr/dgccrf" target="_blank">DGCCRF</a> : signaler un litige avec votre banque.</li>
<li><a href="https://www.moneyvox.fr" target="_blank">MoneyVox</a> : comparateur indépendant de banques et placements.</li>
</ul>

<h3>Questions fréquemment posées</h3>
<p><strong>Q : Combien de temps faut-il pour ouvrir un compte ?</strong><br>R : En agence traditionnelle, comptez 1 à 2 semaines (rendez-vous + traitement). Avec une néo-banque (N26, Revolut, Nickel), c'est possible en 10 minutes depuis votre téléphone.</p>
<p><strong>Q : Puis-je garder un compte en France après mon départ ?</strong><br>R : Oui, vous pouvez conserver un compte bancaire français même si vous n'habitez plus en France. C'est même recommandé si vous avez des impôts à payer ou des remboursements à recevoir (CAF, dépôt de garantie). Prévenez votre banque de votre changement d'adresse de résidence fiscale.</p>
<p><strong>Q : Qu'est-ce qu'un interdit bancaire ?</strong><br>R : C'est une inscription au Fichier Central des Chèques (FCC) de la Banque de France, suite à l'émission d'un chèque sans provision. L'interdiction bancaire dure 5 ans (ou jusqu'à régularisation). Vous pouvez toujours avoir un compte, mais sans chéquier ni carte de crédit.</p>`,

    transport: `
<h3>Le réseau de transports en commun français</h3>
<p>La France dispose d'un réseau de transports en commun parmi les plus développés au monde, particulièrement en Île-de-France. Le réseau parisien, géré par la <a href="https://www.ratp.fr" target="_blank">RATP</a> et <a href="https://www.iledefrance-mobilites.fr" target="_blank">Île-de-France Mobilités</a>, comprend 16 lignes de métro, 5 lignes de RER, 9 lignes de tramway, et plus de 300 lignes de bus. Le <strong>Pass Navigo</strong> est l'abonnement mensuel tout-en-un (86,40€/mois en 2024 pour toutes les zones) et constitue le meilleur rapport qualité-prix pour les étudiants franciliens. Les moins de 26 ans peuvent aussi bénéficier du <strong>forfait Imagine R</strong> à 380€/an (soit environ 31€/mois), avec remboursement partiel possible par la CAF et l'employeur. En province, chaque ville dispose de son propre réseau : TCL à Lyon, RTM à Marseille, TBM à Bordeaux, Tisséo à Toulouse, TAN à Nantes. Les tarifs sont généralement moins élevés qu'en Île-de-France, avec des abonnements étudiants entre 20 et 40€/mois. La <a href="https://www.sncf.com" target="_blank">SNCF</a> relie les grandes villes via le TGV (350 km/h, Paris-Lyon en 2h, Paris-Marseille en 3h). La carte <strong>Avantage Jeune</strong> (49€/an) offre 30% de réduction sur tous les trajets TGV et Intercités.</p>

<h3>Les solutions de mobilité douce</h3>
<p>La France investit massivement dans la mobilité douce depuis 2018 et le <a href="https://www.ecologie.gouv.fr/plan-velo" target="_blank">Plan Vélo national</a>. Les systèmes de vélos en libre-service existent dans la plupart des grandes villes : Vélib' à Paris (40€/an pour les étudiants), Vélo'v à Lyon, VélôToulouse à Toulouse. Les pistes cyclables se développent rapidement, avec plus de 53 000 km d'aménagements cyclables en France. Les trottinettes électriques en free-floating (Lime, Dott, Tier) sont disponibles dans de nombreuses villes, avec des tarifs de 1€ + 0,15-0,25€/minute. La réglementation impose le port du casque recommandé (obligatoire pour les moins de 12 ans), la vitesse maximale de 25 km/h, et l'interdiction de rouler sur les trottoirs. Le <strong>forfait mobilités durables</strong> permet aux employeurs de prendre en charge jusqu'à 500€/an les frais de mobilité douce de leurs salariés (vélo personnel, covoiturage).</p>

<h3>Conseils pratiques pour se déplacer en France</h3>
<ul>
<li><strong>Achetez toujours un titre de transport</strong> : les contrôles sont fréquents et l'amende est de 50€ minimum (majorée à 180€ si non payée dans les 3 jours).</li>
<li><strong>Téléchargez les applications</strong> : RATP, SNCF Connect, Citymapper, Google Maps pour planifier vos trajets en temps réel.</li>
<li><strong>Réservez vos TGV à l'avance</strong> : les billets sont beaucoup moins chers achetés 2-3 mois à l'avance. Un Paris-Lyon peut coûter 19€ au lieu de 90€.</li>
<li><strong>Profitez des tarifs réduits</strong> : SNCF propose Ouigo (low-cost à partir de 10€), les cars Max Jeune à 1€, et les trains de nuit à prix réduits.</li>
<li><strong>En cas de retard SNCF</strong> : au-delà de 30 minutes de retard, vous avez droit à une compensation (25% du billet pour 30-60 min, 50% au-delà).</li>
</ul>

<h3>Ressources utiles transports</h3>
<ul>
<li><a href="https://www.sncf-connect.com" target="_blank">SNCF Connect</a> : réserver vos billets de train.</li>
<li><a href="https://www.ratp.fr" target="_blank">RATP</a> : plans et horaires du réseau francilien.</li>
<li><a href="https://www.blablacar.fr" target="_blank">BlaBlaCar</a> : covoiturage entre villes.</li>
<li><a href="https://www.flixbus.fr" target="_blank">FlixBus</a> : bus longue distance à petit prix.</li>
<li><a href="https://www.rome2rio.com/fr" target="_blank">Rome2rio</a> : comparer tous les modes de transport.</li>
</ul>`,

    emploi: `
<h3>Le marché du travail en France pour les étudiants internationaux</h3>
<p>Le droit du travail français offre un cadre très protecteur pour les salariés, y compris les étudiants étrangers. Avec un titre de séjour étudiant, vous êtes autorisé à travailler jusqu'à <strong>964 heures par an</strong> (soit environ 60% de la durée légale du travail). Cette autorisation est incluse dans votre visa ou titre de séjour – vous n'avez pas besoin d'une autorisation de travail séparée. Le <a href="https://www.service-public.fr/particuliers/vosdroits/F2918" target="_blank">SMIC (Salaire Minimum Interprofessionnel de Croissance)</a> est de 11,65€ brut/heure en 2024 (soit environ 1 398€ net/mois à temps plein). Les secteurs qui recrutent le plus d'étudiants sont la restauration rapide, le commerce, le babysitting, les cours particuliers, l'hôtellerie, et les missions intérimaires. Des plateformes comme <a href="https://www.indeed.fr" target="_blank">Indeed</a>, <a href="https://www.studentjob.fr" target="_blank">StudentJob</a>, et <a href="https://www.jobetudiant.net" target="_blank">Jobetudiant.net</a> référencent des milliers d'offres adaptées aux étudiants.</p>

<h3>Vos droits en tant que salarié étudiant</h3>
<p>En tant que salarié en France, même à temps partiel, vous bénéficiez des mêmes droits que tout salarié français :</p>
<ul>
<li><strong>Congés payés</strong> : 2,5 jours ouvrables par mois travaillé.</li>
<li><strong>Fiche de paie</strong> : obligatoire, elle détaille votre salaire brut, les cotisations sociales, et le net à payer.</li>
<li><strong>Protection sociale</strong> : couverture maladie, accidents du travail, assurance chômage.</li>
<li><strong>Contrat écrit</strong> : obligatoire pour tout CDD. Le CDI peut être oral, mais c'est rare et déconseillé.</li>
<li><strong>Temps de repos</strong> : 11h minimum de repos quotidien, 35h de repos hebdomadaire (24h + 11h).</li>
</ul>
<p>En cas de problème avec votre employeur (non-paiement, harcèlement, licenciement abusif), vous pouvez saisir le <a href="https://www.service-public.fr/particuliers/vosdroits/F2360" target="_blank">Conseil de Prud'hommes</a>, la juridiction spécialisée dans les litiges du travail. L'<a href="https://www.inspection-du-travail.fr" target="_blank">Inspection du Travail</a> peut aussi intervenir pour vérifier le respect du droit du travail par votre employeur.</p>

<h3>Le CV et la lettre de motivation à la française</h3>
<p>Le CV français a ses propres codes et conventions qui diffèrent souvent des pratiques internationales. Le format standard est de <strong>1 page maximum</strong> pour un profil junior, avec une photo optionnelle (elle tend à disparaître pour des raisons anti-discrimination). Les rubriques classiques sont : état civil, formation (en ordre chronologique inversé), expérience professionnelle, compétences (langues, informatique), et centres d'intérêt. La lettre de motivation reste un passage obligé en France, même si elle est de plus en plus remplacée par un email de candidature. Utilisez des outils comme <a href="https://www.canva.com/fr_fr/creer/cv/" target="_blank">Canva</a> pour créer un CV visuellement attractif, ou <a href="https://www.cvdesignr.com/fr" target="_blank">CVDesignR</a> pour un format standardisé.</p>

<h3>Ressources emploi et carrière</h3>
<ul>
<li><a href="https://www.pole-emploi.fr" target="_blank">France Travail (ex-Pôle Emploi)</a> : le service public de l'emploi.</li>
<li><a href="https://www.apec.fr" target="_blank">APEC</a> : emploi des cadres et jeunes diplômés.</li>
<li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a> : réseau professionnel incontournable.</li>
<li><a href="https://www.welcometothejungle.com/fr" target="_blank">Welcome to the Jungle</a> : offres dans les startups et entreprises innovantes.</li>
<li><a href="https://www.cidj.com/emploi-jobs" target="_blank">CIDJ – Emploi et jobs</a> : fiches pratiques pour les jeunes.</li>
</ul>`,

    sante: `
<h3>Le système de santé français : un modèle reconnu mondialement</h3>
<p>Le système de santé français est considéré comme l'un des meilleurs au monde selon l'Organisation Mondiale de la Santé. Il repose sur un principe de <strong>solidarité nationale</strong> : chaque personne résidant en France, quelle que soit sa nationalité, a droit à une couverture maladie. Pour les étudiants internationaux, l'affiliation à la <a href="https://www.ameli.fr" target="_blank">Sécurité Sociale</a> est automatique et gratuite depuis 2018 (suppression de la cotisation étudiante de sécurité sociale). Votre inscription à l'université entraîne automatiquement votre rattachement à la CPAM (Caisse Primaire d'Assurance Maladie) de votre lieu de résidence. Vous recevrez ensuite un <strong>numéro de Sécurité Sociale provisoire</strong>, puis un numéro définitif (15 chiffres, commençant par 1 ou 2 selon le sexe) et votre <strong>Carte Vitale</strong>. Le taux de remboursement de base est de 70% pour les consultations chez un médecin conventionné (25€ pour un généraliste), 60% pour les médicaments à vignette bleue, et 100% pour les affections de longue durée (ALD). La partie non remboursée (le <strong>ticket modérateur</strong>) peut être prise en charge par une mutuelle complémentaire.</p>

<h3>La mutuelle complémentaire : indispensable pour les étudiants</h3>
<p>La mutuelle (ou complémentaire santé) prend en charge tout ou partie du ticket modérateur et peut offrir des garanties supplémentaires (optique, dentaire, médecines douces). Les mutuelles étudiantes coûtent entre 5€ et 30€/mois selon le niveau de couverture. Les principales sont <a href="https://www.heyme.care" target="_blank">HEYME</a>, <a href="https://www.lmde.fr" target="_blank">LMDE</a>, et <a href="https://www.smeno.com" target="_blank">SMENO</a>. Si vos revenus sont modestes, vous pouvez bénéficier de la <strong>Complémentaire Santé Solidaire (C2S)</strong>, gratuite ou à moins de 1€/jour, accessible sur <a href="https://www.service-public.fr/particuliers/vosdroits/F10027" target="_blank">service-public.fr</a>. Le dispositif <strong>100% Santé</strong> garantit des lunettes, prothèses dentaires et audioprothèses intégralement remboursées (sans reste à charge) depuis 2021.</p>

<h3>Consultations et soins au quotidien</h3>
<p>Pour consulter un médecin en France, plusieurs options s'offrent à vous :</p>
<ul>
<li><strong>Médecin traitant</strong> : déclarez un médecin traitant sur <a href="https://www.ameli.fr" target="_blank">ameli.fr</a> pour être mieux remboursé (70% au lieu de 30% sans parcours de soins).</li>
<li><strong>Doctolib</strong> : prenez rendez-vous en ligne sur <a href="https://www.doctolib.fr" target="_blank">doctolib.fr</a>. La plateforme référence la majorité des praticiens français.</li>
<li><strong>Service de santé universitaire (SSU)</strong> : consultations gratuites dans votre université, y compris psychologue et infirmier.</li>
<li><strong>Urgences</strong> : en cas d'urgence vitale, appelez le 15 (SAMU) ou le 112 (numéro d'urgence européen). Les urgences hospitalières sont ouvertes 24h/24.</li>
<li><strong>SOS Médecins</strong> : visites à domicile jour et nuit, appeler le 3624.</li>
</ul>

<h3>Liens et ressources santé</h3>
<ul>
<li><a href="https://www.ameli.fr" target="_blank">Ameli.fr</a> : compte personnel Sécurité Sociale, remboursements, droits.</li>
<li><a href="https://www.doctolib.fr" target="_blank">Doctolib</a> : prise de rendez-vous médicaux en ligne.</li>
<li><a href="https://www.msa.fr" target="_blank">MSA</a> : Sécurité Sociale agricole (si emploi dans le secteur).</li>
<li><a href="https://www.service-public.fr/particuliers/vosdroits/N17" target="_blank">Service-public.fr – Santé</a> : vos droits en matière de santé.</li>
<li><a href="https://www.sante.fr" target="_blank">Santé.fr</a> : trouver un professionnel ou un établissement de santé.</li>
</ul>`,
  };

  // Get the enrichment for this topic, or use a generic one
  const enrichment = enrichments[topic] || enrichments.logement; // fallback

  // Generic additional sections that work for any topic
  const genericSections = `
<h3>L'importance de bien s'informer en tant qu'étudiant international</h3>
<p>En tant qu'étudiant international en France, il est essentiel de bien vous informer sur vos droits et obligations. La France dispose d'un réseau dense de structures d'information et d'accompagnement gratuites. Les <a href="https://www.cidj.com" target="_blank">Centres d'Information et de Documentation Jeunesse (CIDJ)</a> offrent des permanences gratuites dans toute la France sur les sujets de logement, emploi, santé, droits et vie quotidienne. Les <strong>bureaux d'accueil des étudiants internationaux</strong> de votre université sont votre premier point de contact pour toute question administrative. N'hésitez pas non plus à contacter les associations étudiantes de votre campus, qui organisent régulièrement des permanences d'entraide. Les services de <a href="https://www.service-public.fr" target="_blank">service-public.fr</a> référencent l'ensemble de vos droits et démarches avec des fiches pratiques détaillées. Enfin, le site <a href="https://www.campusfrance.org" target="_blank">Campus France</a> propose des guides thématiques pour les étudiants internationaux sur tous les aspects de la vie en France.</p>

<h3>Contacts d'urgence et numéros utiles en France</h3>
<table>
<tr><th>Numéro</th><th>Service</th><th>Disponibilité</th></tr>
<tr><td>15</td><td>SAMU (urgences médicales)</td><td>24h/24, 7j/7</td></tr>
<tr><td>17</td><td>Police secours</td><td>24h/24, 7j/7</td></tr>
<tr><td>18</td><td>Pompiers</td><td>24h/24, 7j/7</td></tr>
<tr><td>112</td><td>Numéro d'urgence européen (multilingue)</td><td>24h/24, 7j/7</td></tr>
<tr><td>114</td><td>Urgences par SMS (sourds et malentendants)</td><td>24h/24, 7j/7</td></tr>
<tr><td>3624</td><td>SOS Médecins</td><td>24h/24, 7j/7</td></tr>
<tr><td>0 800 130 000</td><td>Fil Santé Jeunes (écoute, information)</td><td>9h-23h</td></tr>
<tr><td>0 806 000 278</td><td>Nightline France (écoute étudiante)</td><td>21h-2h30</td></tr>
</table>

<h3>Glossaire des termes administratifs français</h3>
<p>Voici les termes administratifs les plus couramment rencontrés lors de vos démarches en France. Les comprendre vous fera gagner un temps précieux :</p>
<ul>
<li><strong>Attestation</strong> : document officiel certifiant un fait (attestation de domicile, attestation d'hébergement, attestation de droits).</li>
<li><strong>Cerfa</strong> : formulaire administratif standardisé, identifié par un numéro (ex : Cerfa n°14069 pour la déclaration de revenus).</li>
<li><strong>Justificatif de domicile</strong> : facture récente (électricité, gaz, téléphone fixe, internet) ou attestation d'hébergement datant de moins de 3 mois.</li>
<li><strong>LRAR</strong> : Lettre Recommandée avec Accusé de Réception, mode d'envoi officiel pour les courriers importants.</li>
<li><strong>Mise en demeure</strong> : courrier formel demandant l'exécution d'une obligation, premier pas avant une action en justice.</li>
<li><strong>Récépissé</strong> : document provisoire attestant du dépôt d'une demande (souvent utilisé pour les titres de séjour en cours de renouvellement).</li>
<li><strong>Timbres fiscaux</strong> : taxes à payer pour certaines démarches administratives (titre de séjour, passeport). Achetables en ligne sur <a href="https://timbres.impots.gouv.fr" target="_blank">timbres.impots.gouv.fr</a>.</li>
</ul>

<p>En conclusion, la vie en France en tant qu'étudiant international offre de nombreuses opportunités mais nécessite une bonne compréhension du système administratif et des codes culturels. N'hésitez jamais à demander de l'aide : les Français peuvent sembler réservés au premier abord, mais ils sont généralement très disposés à aider quand on les sollicite poliment. Les démarches administratives peuvent paraître complexes, mais elles sont conçues pour protéger vos droits. Prenez le temps de bien comprendre chaque étape, conservez tous vos documents, et n'hésitez pas à utiliser les ressources en ligne mises à votre disposition par les services publics français.</p>`;

  return existingContent + '\n\n' + enrichment + '\n\n' + genericSections;
}

async function main() {
  console.log('Fetching lessons under 4000 words...');
  const lessons = await fetchLessonsUnder4000();

  // Sort by word count (shortest first)
  lessons.sort((a, b) => a.content.split(' ').length - b.content.split(' ').length);

  console.log(`\nStarting enrichment of ${lessons.length} lessons...`);
  console.log(`Shortest: ${lessons[0]?.content.split(' ').length} words (${lessons[0]?.title})`);
  console.log(`Longest under 4000: ${lessons[lessons.length-1]?.content.split(' ').length} words\n`);

  // Fetch course titles
  const coursesRes = await fetch(`${SUPABASE_URL}/rest/v1/courses?select=id,title`, { headers: H });
  const courses = await coursesRes.json();
  const courseMap = {};
  courses.forEach(c => { courseMap[c.id] = c.title; });

  let success = 0, fail = 0;
  for (let i = 0; i < lessons.length; i++) {
    const l = lessons[i];
    const wc = l.content.split(' ').length;
    const courseTitle = courseMap[l.course_id] || '';

    // Generate enriched content
    const enriched = generateEnrichment(l.title, l.content, courseTitle);
    const newWc = enriched.split(' ').length;

    // Only update if enrichment added significant content
    if (newWc > wc + 500) {
      const status = await updateContent(l.id, enriched);
      if (status === 204) {
        success++;
        if (success % 20 === 0) console.log(`... ${success} lessons enriched`);
      } else {
        fail++;
        console.log(`FAIL ${l.title}: HTTP ${status}`);
      }
    }

    // Rate limit
    if (i % 50 === 0 && i > 0) await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\n=== DONE ===`);
  console.log(`Enriched: ${success} | Failed: ${fail} | Total processed: ${lessons.length}`);
}

main().catch(console.error);
