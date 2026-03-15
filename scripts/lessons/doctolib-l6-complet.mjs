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

// LEÇON 6 : Les autres services et fonctionnalités de Doctolib
const L6 = `# Les autres services de Doctolib : au-delà de la simple prise de rendez-vous

La plupart des utilisateurs de Doctolib ne connaissent qu'une infime partie des fonctionnalités de la plateforme. Ils savent chercher un médecin, sélectionner un créneau et recevoir les rappels de confirmation. Mais Doctolib a considérablement élargi son périmètre depuis ses débuts, intégrant de nouveaux services qui touchent à la prévention, à la coordination des soins, au suivi de traitement, aux documents médicaux, à la gestion des urgences relatives et à la relation patient-praticien à distance. Pour les étudiants étrangers en France, découvrir ces fonctionnalités moins connues peut transformer Doctolib d'un simple outil de planning médical en un véritable assistant santé personnel. Cette leçon vous présente en détail tous ces services supplémentaires, leur fonctionnement concret et la manière de les intégrer intelligemment dans votre parcours de santé en France.

## Le portail patient Doctolib : votre espace personnel de santé

Le portail patient Doctolib, accessible depuis votre compte après connexion, va bien au-delà d'un simple agenda de rendez-vous. C'est un espace centralisé où se rejoignent l'historique médical que vous y construisez, les documents partagés par vos praticiens, vos ordonnances et résultats, les échanges sécurisés avec vos médecins et les outils de suivi de votre santé.

La section **«Mes rendez-vous»** affiche non seulement les prochaines consultations mais aussi l'historique complet de tous vos rendez-vous passés pris via Doctolib. Pour chaque consultation passée, vous pouvez retrouver le nom du praticien, sa spécialité, la date, le motif, et si le médecin a activé la fonctionnalité, un résumé ou compte-rendu de la consultation. Cet historique est précieux pour les étudiants qui consultent plusieurs praticiens différents et souhaitent garder une trace organisée de leur parcours médical.

La section **«Mon dossier médical»** centralise les documents que vous avez téléversés manuellement et ceux que les praticiens ont partagés avec vous via la plateforme. Vous pouvez y organiser vos documents par catégorie : ordonnances, résultats d'analyses biologiques, comptes-rendus d'imagerie (radios, IRM, scanners), courriers médicaux, certificats. Pour les étudiants dont le dossier médical est réparti entre leur pays d'origine et la France, avoir tous ces documents numérisés et accessibles depuis Doctolib représente un avantage considérable en cas de consultation chez un nouveau praticien.

La section **«Mes praticiens»** liste les professionnels de santé que vous avez consultés via Doctolib ou que vous avez ajoutés comme référents. Vous pouvez y indiquer votre médecin traitant, vos spécialistes habituels, et marquer certains praticiens pour faciliter une future prise de rendez-vous récurrente. Pour les étudiants qui suivent des traitements chroniques nécessitant des consultations régulières (tous les 3 mois, tous les 6 mois), cette liste facilite la reprise rapide de rendez-vous sans avoir à relancer une recherche complète.

## La messagerie sécurisée Doctolib en détail

La messagerie sécurisée est l'une des fonctionnalités les plus utiles et les moins utilisées de Doctolib. Elle permet un canal de communication direct entre vous et les praticiens qui l'ont activée, sans passer par le standard téléphonique ni attendre la prochaine consultation.

**Comment accéder à la messagerie** : depuis votre espace patient, accédez à l'onglet «Messagerie» ou «Messages». Si un praticien que vous avez consulté propose ce service, une conversation avec lui est disponible. Vous pouvez lui envoyer un message textuel, accompagné si nécessaire d'une pièce jointe (photo d'une lésion cutanée, résultat d'analyse, ordonnance à renouveler).

**Pour quoi utiliser la messagerie** : les cas d'usage les plus fréquents sont les demandes de renouvellement d'ordonnances pour des traitements stables et bien connus du médecin, les questions sur la posologie ou la durée d'un traitement en cours, le signalement d'un effet secondaire modéré d'un médicament récemment prescrit, les demandes de prescriptions d'examens complémentaires simples (bilan sanguin de routine), et les questions administratives comme la demande d'un certificat médical ou d'une attestation.

**Limites de la messagerie** : elle n'est pas appropriée pour les urgences médicales (appelez le 15 en cas d'urgence), pour les nouvelles consultations nécessitant un examen physique, pour les questions diagnostiques complexes ou les situations médicales nouvelles qui requièrent un échange approfondi. Certains médecins n'activent pas la messagerie ou ne la consultent qu'une fois par jour, ce qui la rend inadaptée à toute situation nécessitant une réponse rapide.

**La télénotification pour les résultats d'analyses** : certains praticiens utilisent la messagerie pour vous informer du contenu de vos résultats d'analyses lorsqu'ils sont normaux. Un message du type «Vos résultats sont revenus normaux, nous nous en reparlerons lors de votre prochaine consultation» évite un rendez-vous supplémentaire inutile. Cette pratique, de plus en plus courante, est une illustration de l'évolution vers une médecine plus fluide et moins cloisonnée par les contraintes temporelles.

## Les ordonnances numériques et le suivi des prescriptions

L'ordonnance papier fait progressivement place à l'ordonnance numérique (e-ordonnance) en France. Doctolib intègre cette évolution en permettant aux médecins qui utilisent des logiciels de prescription connectés de transmettre directement les ordonnances dans le dossier patient Doctolib.

**Comment fonctionne l'e-ordonnance** : lors d'une consultation (en cabinet ou en téléconsultation), le médecin génère une ordonnance via son logiciel et la transmet simultanément à votre dossier Doctolib et, si vous le souhaitez, directement à votre pharmacie habituellement. L'e-ordonnance est authentifiée par la signature numérique du médecin, ce qui la rend juridiquement équivalente à l'ordonnance papier.

**Accéder à vos ordonnances** : depuis la section «Mon dossier» de votre compte Doctolib, les ordonnances envoyées par les praticiens aparaissent dans un dossier dédié. Vous pouvez les consulter à tout moment, les partager avec un autre praticien ou vous les transmettre par e-mail pour impression si la pharmacie l'exige encore en format papier.

**Renouvellement électronique** : certains praticiens proposent un service de renouvellement électronique pour les traitements chroniques stables, directement via la messagerie ou un formulaire intégré à Doctolib. Cette option évite une consultation face à face pour de simples renouvellements de pilule contraceptive, d'antihypertenseurs bien équilibrés ou d'antidépresseurs en phase de stabilisation. La décision de proposer ce service reste entièrement à la discrétion du praticien.

**Stockage et organisation des ordonnances** : même si votre médecin ne propose pas encore les e-ordonnances, vous pouvez photographier chaque ordonnance reçue sur papier et la téléverser manuellement dans votre dossier Doctolib. Cette pratique simple constitue une archive personnelle très utile : si vous perdez une ordonnance pour un médicament chroniqu en déplacement, la photo dans Doctolib permet au pharmacien de la reconstituer.

## Le module de surveillance et de suivi de santé

Doctolib propose progressivement des modules de suivi de santé entre les consultations, encore en développement mais déjà disponibles chez certains praticiens. Ces modules permettent aux patients de renseigner des paramètres de santé régulièrement (pression artérielle, glycémie, poids, symptômes quotidiens) qui sont ensuite accessibles au praticien lors des consultations de suivi.

**Le suivi des maladies chroniques** est le cas d'usage principal de ces modules. Un patient diabétique peut renseigner ses glycémies quotidiennes dans Doctolib, générant automatiquement un graphique que son diabétologue consultey avant la consultation trimestrielle. Un patient traité pour l'hypertension peut transmettre ses relevés de tension artérielle. Cette continuité de données entre les consultations améliore la qualité du suivi médical et permet d'identifier plus rapidement les déséquilibres.

Pour les étudiants, ces modules sont particulièrement pertinents dans le cadre d'un suivi psychologique ou psychiatrique. Certains psychiatres utilisant Doctolib ont mis en place des questionnaires hebdomadaires d'évaluation de l'humeur, du sommeil et de l'anxiété à compléter entre les consultations. Ces données objectives facilitent l'ajustement des traitements et permettent au médecin d'intervenir plus rapidement en cas de détérioration significative.

**Le carnet de santé numérique** est un espace libre où vous pouvez noter des observations sur votre santé : symptômes récurrents, facteurs déclenchants d'une migraine, évolution d'une douleur, qualité du sommeil. Bien que non structuré, cet espace fonctionne comme un journal de santé que vous pouvez partager avec votre médecin en consultation pour enrichir l'anamnèse.

## Les vaccinations et la prévention sur Doctolib

Depuis la pandémie de COVID-19, Doctolib a considérablement développé ses fonctionnalités liées à la vaccination et à la prévention. Ces services dépassent largement la simple logistique des rendez-vous et s'inscrivent dans une vision plus large de la santé préventive.

**La prise de rendez-vous pour vaccinations** couvre désormais l'ensemble du calendrier vaccinal français : rappel DTP (diphtérie-tétanos-polio), vaccin contre la grippe saisonnière, vaccin contre l'hépatite B, vaccin antiméningococcique, vaccination HPV (papillomavirus humain), vaccin contre la varicelle pour les adultes non immunisés, etc. Sur Doctolib, vous pouvez filtrer spécifiquement les cabinets et centres de santé qui proposent des consultations de vaccination sans avoir besoin d'une ordonnance préalable pour certains vaccins.

**Le carnet de vaccination électronique** : Doctolib permet de stocker les informations de vaccination dans le dossier patient. Bien que non officiel au sens du carnet de vaccination physique remis à la naissance, ce registre numérique vous permet de retrouver rapidement les dates de vos derniers vaccins et les rappels nécessaires. Pour les étudiants arrivant d'autres pays avec des calendriers vaccinaux différents, comprendre quels vaccins sont à jour ou à compléter pour le contexte français est facilité par cette centralisation.

**Les dépistages de prévention** référencés sur Doctolib incluent les centres et professionnels proposant des consultations dédiées au dépistage de certaines pathologies : depistage IST (infections sexuellement transmissibles), dépistage du VIH (en accès libre dans les centres CEGIDD), dépistage du cancer du col de l'utérus par frottis, dépistage de la tuberculose pour les populations exposées. Ces ressources sont précieuses pour les étudiants qui découvrent les dispositifs de prévention français et souhaitent faire un bilan complet à leur arrivée.

## Les fonctionnalités communautaires et l'accès aux soins spécialisés

Doctolib a développé des partenariats avec de nombreux établissements de santé spécialisés, donnant accès via la plateforme à des ressources qui n'étaient pas accessibles directement en dehors des réseaux traditionnels.

**Les centres de santé universitaires** : dans plusieurs grandes villes universitaires, les services de médecine préventive des universités (SUMPPS, SUE, SSE) utilisent Doctolib pour leurs prises de rendez-vous. Ces services proposent souvent des consultations gratuites ou à tarif réduit pour les étudiants inscrits. Chercher «médecin étudiant» ou «service de santé universitaire» sur Doctolib avec le nom de votre université ou de votre ville peut révéler ces options accessibles.

**Les maisons de santé pluriprofessionnelles (MSP)** : ces structures regroupent plusieurs médecins généralistes et paramédicaux sous un même toit avec un dossier partagé. Elles sont souvent référencées sur Doctolib de manière groupée, permettant de chercher une disponibilité parmi plusieurs praticiens simultanément. Pour les étudiants qui cherchent un médecin traitant dans une zone où les agendas individuels sont saturés, les MSP peuvent offrir plus de flexibilité.

**Les consultations hospitalières externes** : les CHU (Centres Hospitaliers Universitaires), les hôpitaux publics et les cliniques privées proposent de plus en plus leurs consultations spécialisées externes directement via Doctolib. L'accès à un neurologue du CHU de Lyon, à un allergologue de l'AP-HP ou à un endocrinologue du CHU de Bordeaux peut se faire directement depuis Doctolib, souvent avec des délais inférieurs à ceux des cabinets libéraux très demandés.

## Doctolib pour la santé mentale : ressources et orientation

La santé mentale est une priorité croissante pour les étudiants, en France comme dans le reste du monde. Le stress académique, l'éloignement familial pour les étudiants internationaux, les difficultés d'adaptation culturelle et les enjeux socio-économiques créent des vulnérabilités psychologiques spécifiques. Doctolib intègre de plus en plus de ressources dans ce domaine.

**Le dispositif Mon Soutien Psy** est accessible via Doctolib depuis 2022. Ce programme gouvernemental permet à tous les assurés sociaux de bénéficier de 8 séances remboursées par an chez un psychologue clinicien conventionné dans le cadre de ce dispositif. Pour trouver un psychologue participant à ce programme, filtrez sur Doctolib avec la mention «Mon Soutien Psy». La consultation initiale chez votre médecin traitant génère un courrier d'orientation vers un psychologue, puis vous pouvez prendre directement rendez-vous sur Doctolib.

**Les urgences psychiatriques** et le soutien en crise ne passent pas par Doctolib, mais la plateforme référence les Centres Médico-Psychologiques (CMP) qui proposent des consultations de première ligne pour les troubles psychiques. Ces centres, souvent liés à des hôpitaux psychiatriques ou à des équipes de secteur, sont accessibles sans médecin traitant et à tarif conventionné. Certains CMP ont ouvert leurs prises de rendez-vous via Doctolib, réduisant la barrière administrative à l'accès.

**Les applications de soutien psychologique référencées** sur certains espaces santé partenaires de Doctolib proposent des modules d'auto-évaluation, de psychoéducation et de soutien entre les consultations. Bien que ces ressources ne remplacent pas un suivi thérapeutique professionnel, elles peuvent compléter efficacement les consultations et sont particulièrement adaptées aux étudiants contraints dans leur emploi du temps.

## L'assistance Doctolib et la résolution des problèmes techniques

Doctolib met à disposition un service d'assistance accessible depuis la plateforme. Comprendre les ressources disponibles en cas de problème technique vous permet de les résoudre rapidement et de ne pas manquer un rendez-vous à cause d'une difficulté informatique.

**Le centre d'aide Doctolib** accessible depuis doctolib.fr/aide propose une base de connaissances structurée par catégorie : création de compte, gestion des rendez-vous, téléconsultation, documents, facturation, confidentialité. Avant de contacter le support, consultez ce centre d'aide : la majorité des questions courantes y trouvent une réponse immédiate avec des tutoriels illustrés.

**Le formulaire de contact** permet d'envoyer une demande d'assistance pour des problèmes non résolus par le centre d'aide. Les délais de réponse varient selon la nature de la demande et les périodes. Pour les problèmes urgents liés à un rendez-vous imminent (lien de téléconsultation non fonctionnel 10 minutes avant la consultation), le chat en ligne est généralement plus rapide que le formulaire.

**Les problèmes de connexion au compte** (mot de passe oublié, compte bloqué, e-mail de confirmation non reçu) se résolvent généralement via la procédure standard de récupération de mot de passe. Vérifiez votre dossier spam pour les e-mails Doctolib si vous ne les recevez pas : les filtres anti-spam des messagements institutionnelles universitaires bloquent parfois les notifications automatiques.

## Témoignages d'utilisation avancée de Doctolib

**Nour Al-Hassan, 26 ans, en master de gestion, arrivée de Syrie** : «J'ai découvert la messagerie sécurisée par hasard en cherchant dans mon compte. Mon psychiatre m'a envoyé un message après ma consultation pour m'informer que ma demande d'ALD avait été acceptée, sans que j'aie besoin de rappeler. C'est un détail mais ça montre que la plateforme peut vraiment améliorer la communication patient-médecin quand les deux côtés l'utilisent bien.»

**Pedro Alves, 22 ans, en licence d'espagnol, arrivé du Portugal** : «Les modules de suivi de santé sont ce qui m'a le plus surpris. Mon médecin traitant m'a demandé de renseigner mes épisodes de migraine dans Doctolib pendant 3 mois. À la consultation de suivi, il avait directement un tableau de fréquence et d'intensité devant lui. Ça a facilement doublé la qualité de notre échange et il a pu ajuster le traitement préventif beaucoup plus précisément.»

## Questions fréquentes sur les services avancés de Doctolib

**Q : Comment ajouter manuellement un praticien que je consulte en dehors de Doctolib ?**
Dans votre espace patient, accédez à «Mes praticiens» et utilisez la fonction «Ajouter un praticien». Vous pouvez rechercher un médecin par son nom, sa spécialité et sa ville. S'il est référencé dans la base Doctolib (même s'il n'utilise pas l'agenda en ligne), vous pouvez l'ajouter à votre liste de référents pour garder ses coordonnées accessibles.

**Q : Doctolib permet-il de partager son dossier médical avec un médecin à l'étranger ?**
Le partage de documents via Doctolib est conçu pour les praticiens utilisateurs de la plateforme, principalement en France, Allemagne et Italie. Pour partager des documents avec un médecin dans un autre pays, l'export de vos données depuis Doctolib (droit à la portabilité RGPD) et leur envoi par une messagerie sécurisée ou un service de partage de fichiers chiffré reste la méthode la plus pratique.

**Q : L'historique Doctolib est-il reconnu comme document médical officiel ?**
L'historique Doctolib est un enregistrement privé de vos rendez-vous sur la plateforme. Il n'a pas la valeur juridique d'un dossier médical officiel au sens de la loi. Le Dossier Médical Partagé (DMP) géré par la CPAM est le registre officiel reconnu. Cependant, vos ordonnances et comptes-rendus stockés dans Doctolib sont des documents médicaux légitimes aux mêmes titres que les originaux.

**Q : Puis-je utiliser Doctolib pour gérer les rendez-vous médicaux de mes parents en France ?**
Oui, via la gestion multi-profils. Ajoutez le profil de votre parent à votre compte et gérez ses rendez-vous depuis cette interface. Si votre parent est en France temporairement (séjour familial, traitement médical) et n'utilise pas Doctolib eux-mêmes, cette option facilite grandement l'organisation logistique.

**Q : Doctolib propose-t-il des ressources en cas de crise psychologique aiguë ?**
Doctolib n'est pas équipé pour gérer les urgences psychiatriques. En cas de crise psychologique aiguë (pensées suicidaires, état de détresse intense, épisode psychotique), appelez le 15 (SAMU), le 3114 (numéro national de prévention du suicide, disponible 24h/24) ou rendez-vous directement aux urgences psychiatriques de l'hôpital le plus proche. Doctolib peut être utilisé pour les rendez-vous de suivi planifiés mais ne remplace pas les dispositifs d'urgence.

**Q : Comment fonctionne l'intégration Doctolib avec le Dossier Médical Partagé ?**
À ce jour, l'intégration entre Doctolib et le DMP ameli est partielle et en cours de développement. Certains praticiens peuvent alimenter le DMP depuis leur logiciel métier (qui est distinct du backoffice Doctolib) lors d'une consultation prise via Doctolib. Selon les logiciels utilisés, les comptes-rendus et prescriptions peuvent apparaître dans votre DMP ameli. Pour vérifier l'état de votre DMP, consultez votre espace ameli.fr.

**Q : Quelle est la différence entre Doctolib et le portail santé.fr du gouvernement ?**
Santé.fr est un portail d'information publique sur le système de santé français, développé par le ministère chargé de la santé. Il propose des informations sur les structures de soins, les dispositifs d'aide et les démarches administratives mais ne gère pas directement les prises de rendez-vous. Doctolib est une plateforme privée dédiée exclusivement à la gestion des rendez-vous médicaux. Les deux outils sont complémentaires et non concurrents.

## Ressources officielles complémentaires

- [doctolib.fr – Mon espace patient](https://www.doctolib.fr) : Accédez à toutes les fonctionnalités avancées depuis votre compte
- [monpsy.sante.gouv.fr](https://www.monpsy.sante.gouv.fr) : Dispositif officiel de remboursement des séances de psychologue clinicien
- [ameli.fr – Dossier Médical Partagé](https://www.ameli.fr/assure/sante/dmp) : Comprendre et accéder à votre DMP officiel
- [3114.fr](https://www.3114.fr) : Numéro national de prévention du suicide, accessible 24h/24, 7j/7
`;

await patch('255220ab-cd87-4c1c-99d0-b7e92b245b89', L6);
