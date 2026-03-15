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

// CAF/APL L1 : L'APL, qui peut en bénéficier et combien ?
const APL1 = `# L'APL : qui peut en bénéficier, comment ça marche et combien ça rapporte

L'Aide Personnalisée au Logement, universellement connue sous son acronyme APL, constitue pour de nombreux étudiants en France l'une des aides sociales les plus concrètes et les plus immédiatement utiles. Versée mensuellement par la Caisse d'Allocations Familiales (CAF) directement sur le compte du bénéficiaire ou déduite du loyer à la source selon les conventions avec les bailleurs, l'APL peut représenter entre 50 et 300 euros par mois selon les situations. Pour un étudiant dont le budget mensuel total est souvent inférieur à 1 000 euros, cette aide peut couvrir 20 à 40 % du loyer mensuel. Comprendre précisément qui peut y prétendre, comment le montant est calculé, comment faire la demande et quels sont les droits et obligations des bénéficiaires est une compétence administrative fondamentale que tout étudiant arrivant en France devrait acquérir dès les premières semaines. Cette leçon vous apporte une réponse exhaustive à toutes ces questions.

## Qu'est-ce que l'APL et d'où vient-elle ?

L'APL a été créée par la loi du 3 janvier 1977, dans le contexte de la politique de logement social des Trente Glorieuses. À cette époque, le gouvernement français cherchait à rendre le logement accessible aux ménages modestes dans un contexte d'urbanisation massive et de construction intensive de logements neufs. L'APL était initialement conçue pour aider les occupants de logements conventionnés — c'est-à-dire des logements dont les bailleurs avaient signé une convention avec l'État fixant les loyers plafonds et les conditions d'entretien. En contrepartie de cette convention, l'État garantissait aux locataires une aide proportionnelle au loyer.

Progressivement, le champ d'application de l'APL s'est étendu. Aujourd'hui, l'APL est l'une des trois aides personnelles au logement en France, aux côtés de l'Allocation de Logement à Caractère Social (ALS) et de l'Allocation de Logement Familiale (ALF). Ces trois aides répondent à des situations différentes et ne peuvent pas se cumuler entre elles : un ménage ne peut recevoir qu'une seule de ces trois aides en même temps. Pour la plupart des étudiants, l'APL ou l'ALS sont les plus pertinentes.

L'APL est gérée par les CAF (Caisses d'Allocations Familiales) dans chaque département. La CAF du département où se situe le logement est l'organisme auprès duquel vous faites votre demande, même si votre lieu de résidence principale est dans un autre département. Les CAF reçoivent et instruisent les dossiers, calculent les droits et versent les montants. L'aspect national de la politique APL est géré par le Ministère chargé du Logement et le Fonds National d'Aide au Logement (FNAL).

Pour l'année 2024-2025, le budget total consacré aux aides personnelles au logement en France dépasse les 17 milliards d'euros annuels, faisant de ces aides l'un des postes de dépenses sociales les plus importants du budget de l'État. Cette enveloppe considérable illustre l'importance accordée à l'accessibilité du logement dans la politique sociale française, mais aussi les tensions budgétaires qui ont conduit à plusieurs réformes successives depuis 2016, notamment la réforme majeure de la contemporisation des aides en 2021.

## Qui peut bénéficier de l'APL ?

Les conditions d'éligibilité à l'APL sont multiples et doivent toutes être réunies simultanément. Une confusion sur l'une d'elles peut conduire à un refus de droits ou à un trop-perçu qui devra être remboursé.

**Conditions liées à la résidence** : vous devez occuper le logement à titre de résidence principale, c'est-à-dire y résider au minimum 8 mois par an. Un logement utilisé uniquement pendant l'année scolaire, avec retour dans vos pays d'origine pour les vacances, peut poser problème si la durée d'occupation tombe sous ce seuil. La CAF peut demander des justificatifs d'occupation effective (factures d'électricité, relevés bancaires avec des dépenses en France, etc.). Pour les étudiants qui rentrent dans leur pays pendant l'été mais conservent leur logement sur toute l'année, la résidence principale est généralement reconnue sans difficulté.

**Conditions liées au logement** : le logement doit être conventionné par l'État (pour l'APL stricto sensu) ou répondre à certaines normes de décence définies par la loi. La convention du logement est signée entre le bailleur et l'État et engage le bailleur à respecter des loyers plafonds et des conditions de qualité du logement. En pratique, la quasi-totalité des logements en résidences universitaires CROUS, en résidences étudiantes privées conventionnées et dans de nombreuses HLM sont des logements APL-éligibles. Pour les appartements du parc privé, l'éligibilité à l'APL est plus restrictive (elle dépend de la convention du bailleur): dans ce cas, c'est l'ALS, l'Allocation de Logement à Caractère Social, qui s'applique dans les mêmes conditions financières.

**Conditions liées aux ressources** : le montant de l'APL est inversement proportionnel aux revenus du demandeur. Plus vos revenus sont élevés, plus l'aide est faible, jusqu'à ce qu'elle descende à 0. Les revenus pris en compte sont ceux de l'année N-2 (deux ans avant la demande) pour les premières demandes, puis mis à jour en temps réel (contemporisation) depuis la réforme de 2021. Pour la grande majorité des étudiants qui n'ont pas de revenus significatifs, le montant de l'APL est calculé principalement en fonction du loyer et de la composition du foyer, sans impact majeur des ressources.

**Conditions liées à la nationalité** : pour les ressortissants de l'Union européenne et de l'Espace Économique Européen, les conditions sont équivalentes à celles des citoyens français. Pour les ressortissants hors Union européenne, une condition de régularité du séjour est exigée. Un titre de séjour valide est obligatoire. Certains statuts de séjour particuliers (étudiant en mobilité courte sans titre de séjour mais avec visa de court séjour) peuvent ne pas ouvrir droit à l'APL. Cette question est détaillée dans la leçon spécifique aux conditions des étudiants étrangers.

## Comment le montant de l'APL est-il calculé ?

Le calcul du montant de l'APL est réalisé par la CAF selon une formule définie par la réglementation. Cette formule prend en compte plusieurs variables dont les valeurs sont mises à jour chaque année (généralement en janvier) par décret ministeriel.

La formule de base de l'APL intègre les éléments suivants : le loyer réel du logement (plafonné à un loyer de référence qui varie selon la zone géographique et la composition du foyer), les ressources du demandeur et de son foyer, la participation personnelle minimale qui est une contribution fixe que tout demandeur doit assurer (environ 35 euros en 2024 pour un étudiant seul), et divers correctifs selon la situation familiale.

**La zone géographique** joue un rôle fondamental dans le calcul. La France est divisée en zones APL : la zone I correspond à Paris et la petite couronne (Île-de-France), la zone II aux grandes agglomérations de province et à la couronne parisienne élargie, la zone III au reste du territoire. Les loyers de référence (plafonds) sont nettement plus élevés en zone I qu'en zone III, ce qui se traduit par des APL potentiellement plus élevées en Île-de-France pour les logements dont les loyers sont eux-mêmes plus chers.

**Le loyer maximum pris en compte** varie selon la zone et la composition du foyer. En 2024, pour une personne seule en zone I (Paris), le loyer plafond est d'environ 611 euros. En zone II (grandes villes comme Lyon, Bordeaux, Toulouse, Marseille, Strasbourg), il est d'environ 520 euros. En zone III (villes moyennes et rurales), il est d'environ 488 euros. Si votre loyer réel dépasse ce plafond, c'est le plafond qui sert de base de calcul : vous ne recevrez pas plus d'APL qu'un locataire dont le loyer est exactement au plafond, même si le vôtre est supérieur.

**Les ressources contemporisées** : depuis la réforme de 2021, les ressources prises en compte pour le calcul de l'APL sont celles des 12 derniers mois glissants, mises à jour en temps réel grâce à l'échange de données entre la CAF et les organismes de collecte des cotisations sociales (URSSAF, Pôle emploi). Cette réforme visait à éviter les situations où des bénéficiaires touchaient des aides calculées sur des revenus anciens après une augmentation significative de leurs ressources. Pour les étudiants, cette contemporisation a un impact principalement en cas de job étudiant significatif.

## Simuler le montant de l'APL avant de faire sa demande

Avant de faire une demande officielle, il est fortement recommandé d'utiliser le simulateur gratuit disponible sur le site de la CAF (caf.fr). Ce simulateur, accessible sans créer de compte, permet d'estimer le montant de l'APL ou de l'ALS auquel vous pouvez prétendre en renseignant une quinzaine d'informations : montant du loyer, type de logement, code postal, composition du foyer, revenus annuels, situation professionnelle et statut étudiant.

Le simulateur CAF est régulièrement mis à jour pour refléter les paramètres de calcul actualisés. Il est très fiable pour des estimations préliminaires. Notez toutefois que le montant réel accordé par la CAF peut légèrement différer de la simulation, notamment si certaines informations sont interprétées différemment par le département de gestion ou si des informations sur votre situation n'ont pas été correctement prises en compte dans la simulation.

Pour les étudiants qui hésite entre deux logements avec des loyers différents, simuler les deux scénarios sur le simulateur CAF permet de calculer le coût réel de chaque option après déduction de l'APL. Il n'est pas toujours vrai qu'un loyer plus cher revient plus cher «à la finition» : si le logement cher est en zone I et ouvre droit à une APL nettement plus haute, l'écart de loyer brut peut être partiellement compensé.

## Les montants réels d'APL en 2024 : exemples concrets

Pour donner une idée concrète des montants en jeu, voici des exemples représentatifs basés sur les paramètres de calcul 2024. Ces exemples supposent des ressources nulles ou très faibles (situation typique d'un étudiant sans emploi).

**Étudiant seul, chambre en résidence CROUS à Paris (loyer 380 euros)** : l'APL estimée après simulation est d'environ 100 à 130 euros par mois. Le reste à charge est d'environ 250 à 280 euros, ce qui représente l'un des meilleurs rapports coût-efficacité dans le parc estudiantin parisien.

**Étudiant seul, studio meublé en location privée à Toulouse (loyer 520 euros)** : l'APL estimée est d'environ 200 à 220 euros par mois en zone II. Le reste à charge serait d'environ 300 à 320 euros.

**Étudiant en colocation (deux colocataires), T2 à Lyon (loyer total 900 euros, soit 450 par personne)** : chaque colocataire fait sa demande séparément. L'APL de chacun est calculée sur sa part du loyer individuelle, soit 450 euros en zone II. Chaque colocataire peut recevoir environ 165 à 185 euros d'APL, selon sa situation personnelle.

**Étudiant marié ou en couple, T2 à Bordeaux (loyer 750 euros)** : le foyer constitué de deux personnes bénéficie d'un loyer plafond plus élevé que pour une personne seule. L'aide mensuelle pour le foyer peut atteindre 280 à 320 euros, selon les revenus combinés des deux membres du foyer.

Ces montants sont indicatifs et peuvent varier significativement selon les revenus exacts, les charges déductibles et les paramètres de zone. Le simulateur caf.fr reste l'outil de référence pour une estimation personnalisée.

## La procédure de demande en ligne sur caf.fr

La demande d'APL s'effectue entièrement en ligne sur le site caf.fr. Il n'est plus nécessaire (ni même possible dans la plupart des cas) de déposer une demande papier en agence CAF. La dématérialisation complète du processus, amorcée depuis 2016, est désormais la norme.

**Étape 1 : Créer son espace personnel CAF**. Si vous n'avez pas encore de compte sur caf.fr, créez-en un en cliquant sur «Créer mon espace Mon Compte». Il vous faudra renseigner vos informations personnelles (nom, prénom, date de naissance, adresse, numéro de Sécurité sociale) et valider votre compte par e-mail. Si vous êtes un nouvel arrivant en France et n'avez pas encore de numéro de Sécurité sociale définitif, contactez la CAF directement : des procédures existent pour les personnes en attente de leur numéro d'immatriculation.

**Étape 2 : Renseigner votre situation**. Une fois connecté, accédez à la section «Faire une demande de prestation» et sélectionnez «Aide au logement». Le formulaire en ligne vous guide progressivement à travers toutes les sections importantes : composition du foyer, situation professionnelle (étudiant, salarié, demandeur d'emploi, etc.), informations sur votre logement (type de logement, surface, loyer mensuel, bailleur) et coordonnées bancaires pour le versement.

**Étape 3 : Téléverser les pièces justificatives**. Vous devrez fournir des documents numérisés : pièce d'identité, titre de séjour pour les ressortissants hors UE, contrat de location, attestation de loyer de votre bailleur, relevé d'identité bancaire (RIB) à votre nom, certificat de scolarité ou carte étudiante. La liste exacte des documents peut varier selon votre situation. La CAF dispose généralement d'un module de téléversement de documents accessible depuis votre espace personnel.

**Étape 4 : Confirmation et délai de traitement**. Après soumission de votre dossier, la CAF dispose de plusieurs semaines pour l'instruire. Le délai moyen de traitement est de 4 à 8 semaines. Une fois les droits ouverts, le premier versement couvre rétroactivement les mois depuis la date d'ouverture des droits (la date à laquelle votre contrat de location a débuté ou la date de votre demande si elle est postérieure). Les versements ont lieu le 5 de chaque mois.

## Du premier versement aux révisions annuelles

Une fois l'APL accordée, les droits sont réévalués à intervalles réguliers selon la réforme de contemporisation de 2021. Concrètement, la CAF réévalue automatiquement votre APL tous les 3 mois en se basant sur vos revenus des 12 derniers mois. Si vos revenus ont augmenté (par exemple si vous avez travaillé significativement pendant l'été), votre APL peut baisser. Si vos revenus ont baissé ou sont restés nuls, l'APL reste stable ou peut augmenter si vous avez signalé un changement de situation.

Il est de votre responsabilité de déclarer tout changement de situation à la CAF dans un délai de 2 mois suivant ce changement : changement de logement, modification du loyer, déménagement, mise en couple ou séparation, naissance d'un enfant, fin des études, début d'un emploi salarié. Ces déclarations se font depuis votre espace Mon Compte CAF via le formulaire «Déclarer un changement de situation».

Chaque année, la CAF envoie une déclaration de ressources annuelle que vous devez compléter, même si vos revenus sont nuls. Cette déclaration permet à la CAF de calculer vos droits pour l'année suivante. Ne pas retourner cette déclaration entraîne la suspension des versements. La déclaration annuelle se fait désormais principalement en ligne depuis votre espace Mon Compte.

## Que faire en cas de refus ou de montant inférieur aux attentes ?

Si la CAF détermine que vous n'avez pas droit à l'APL ou que le montant accordé est inférieur à celui que vous aviez estimé, plusieurs recours sont possibles.

**La demande de révision** est la première étape. Contactez la CAF par messager depuis votre espace Mon Compte ou rendez-vous en agence pour expliquer votre situation et vérifier si une erreur de saisie ou d'interprétation a été commise. Des erreurs surviennent parfois dans le traitement des dossiers, notamment pour les situations atypiques comme les étudiants en mobilité internationale ou les ressortissants de pays avec des conventions bilatérales particulières.

**Le recours amiable** auprès de la Commission de Recours Amiable (CRA) de la CAF est la deuxième étape. Vous pouvez saisir la CRA dans un délai de 2 mois suivant la décision de la CAF que vous contestez. La CRA est une instance interne à la CAF qui réexamine votre dossier de manière indépendante du gestionnaire initial.

**Le recours judiciaire** devant le Tribunal Judiciaire (juridiction de droit commun compétente pour les litiges de Sécurité sociale) est le dernier recours, à utiliser après épuisement des voies amiables. Cette procédure est moins fréquente pour les étudiants mais existe pour les situations où un droit est clairement accordé par la loi mais refusé de manière injustifiée.

## Témoignages d'étudiants sur leur expérience avec l'APL

**Thomas Hernandez, 20 ans, en licence de lettres modernes, arrivé du Mexique** : «J'ai mis 6 semaines à recevoir mon premier versement APL. Pendant ce temps j'étais inquiet parce que mon loyer prenait toute ma bourse. Mais la CAF a versé rétroactivement les deux premiers mois en une fois. Depuis, je reçois 185 euros par mois d'APL sur un loyer de 550 euros à Nantes. C'est 33 % de mon loyer couvert, c'est vraiment appréciable.»

**Selma Bakri, 23 ans, en master de chimie, arrivée d'Algérie** : «La difficulté pour moi était de réunir tous les documents. Je n'avais pas encore reçu mon titre de séjour définitif quand j'ai voulu faire ma demande. J'ai contacté la CAF qui m'a expliqué que je pouvais soumettre ma demande avec le récépissé de demande de carte de séjour. Le traitement a pris plus longtemps mais mes droits ont été reconnus rétroactivement.»

**Olivier Mbida, 22 ans, en deuxième année de BTS, venu du Cameroun** : «Je vivais en résidence CROUS et j'avais trouvé l'information sur l'APL dans le guide d'accueil de la résidence. J'ai fait ma demande en ligne en 45 minutes avec tous mes documents. Trois semaines plus tard, j'ai reçu une notification de la CAF confirmant mes droits à 124 euros par mois. Pour une chambre à 240 euros au CROUS, c'est plus de 50 % du loyer couvert.»

## Questions fréquentes sur l'APL

**Q : Peut-on recevoir l'APL si on est logé gratuitement par ses parents ou une connaissance ?**
Non. L'APL est réservée aux personnes qui paient un loyer dans le cadre d'un contrat de location ou d'un titre d'occupation. Si vous êtes hébergé gratuitement, vous n'êtes pas locataire et ne pouvez pas bénéficier de l'APL. En revanche, si vous payez un loyer même informel à votre famille d'accueil, une convention de location peut être formalisée.

**Q : L'APL est-elle imposable ?**
Non, l'APL n'est pas soumis à l'impôt sur le revenu. C'est une aide sociale non imposable. Vous n'avez pas à la déclarer dans votre déclaration de revenus annuelle.

**Q : Quelle est la différence entre l'APL et l'ALS ?**
Les deux aides ont le même rôle (aider à payer le loyer) et sont calculées de manière très similaire. La différence principale est le type de logement : l'APL s'applique aux logements conventionnés (avec une convention État-bailleur signée), tandis que l'ALS couvre les logements non conventionnés du parc privé. Dans les deux cas, la démarche de demande est identique via caf.fr et la CAF détermine automatiquement laquelle des deux aides s'applique à votre situation.

**Q : Mon propriétaire doit-il être informé que je touche l'APL ?**
Oui, dans certains cas. La CAF peut verser l'APL directement à votre bailleur («tiers payant») plutôt qu'à vous si votre bailleur a adhéré à ce dispositif ou si vous y avez consenti. Le tiers payant est la modalité standard dans les résidences CROUS, où la CAF verse directement à la résidence universitaire. Dans ce cas, votre loyer mensuel affiché est souvent déjà réduit de l'APL. Dans le parc privé, le versement se fait généralement sur votre compte bancaire et c'est vous qui payez votre loyer intégralement à votre propriétaire.

**Q : L'APL continue-t-elle pendant les grandes vacances si je garde mon logement ?**
Oui, l'APL est versée chaque mois tant que vous êtes locataire d'un logement éligible et que votre dossier est à jour. Garder son logement pendant l'été (en France ou en retournant dans son pays d'origine) n'interrompt pas l'APL, à condition que le logement reste votre résidence principale (contractuellement, c'est-à-dire que vous ne sous-louez pas et que vous n'avez pas de bail dans un autre logement). Partir en stage à l'étranger pendant quelques mois ne remet pas en cause l'APL si le logement en France reste votre résidence principale et que vous y revenez.

**Q : L'APL peut-elle être versée sur un compte bancaire étranger ?**
Non. La CAF exige un compte bancaire domicilié en France (IBAN français) pour le versement de l'APL. Ouvrir un compte bancaire en France est donc une priorité absolue dès votre arrivée, et ce avant même de faire votre demande d'APL. Des banques comme BNP Paribas, Société Générale, Crédit Agricole, mais aussi des néobanques comme Nickel ou Revolut (avec IBAN français) acceptent les étudiants étrangers en France.

**Q : Puis-je continuer à toucher l'APL après la fin de mes études si je reste dans mon logement ?**
L'APL est liée au logement, pas au statut étudiant. Si vous restez dans le même logement après la fin de vos études et que vous continuez à remplir les conditions d'éligibilité (ressources, logement éligible), vous pouvez continuer à percevoir l'APL. Votre APL sera recalculée en fonction de vos nouveaux revenus (emploi salarié, chômage, etc.) et peut baisser significativement si vous commencez à travailler.

**Q : L'APL est-elle compatible avec la bourse du CROUS ?**
Oui, l'APL et la bourse sur critères sociaux du CROUS sont deux aides distinctes et cumulables. La bourse répond aux besoins de ressources généraux de l'étudiant, tandis que l'APL est spécifiquement dédiée aux dépenses de logement. La bourse n'est pas prise en compte dans le calcul des ressources pour l'APL (elle n'est pas déclarée comme revenu pour le calcul de l'aide au logement).

## Ressources officielles

- [caf.fr – Simulateur d'aides au logement](https://www.caf.fr/allocataires/droits-et-prestations/s-informer-sur-les-aides/logement-et-habitat/apl-aide-personnalisee-au-logement) : Le simulateur officiel pour estimer votre APL potentielle
- [service-public.fr – APL](https://www.service-public.fr/particuliers/vosdroits/F12006) : Fiche officielle de synthèse sur l'APL, ses conditions et ses montants
- [action-logement.fr](https://www.actionlogement.fr) : Informations complémentaires sur les aides au logement en France pour les actifs et étudiants
`;

await patch('76d8e8e6-da6a-4382-a970-e0dec7a6578d', APL1);
