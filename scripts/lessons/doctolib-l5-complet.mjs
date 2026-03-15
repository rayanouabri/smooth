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

// LEÇON 5 : Annuler ou modifier un rendez-vous Doctolib
const L5 = `# Annuler, modifier et reprogrammer un rendez-vous sur Doctolib

La flexibilité de gestion des rendez-vous médicaux est l'un des avantages les plus concrets de la plateforme Doctolib pour les étudiants dont l'emploi du temps est par nature imprévisible. Entre les partiels qui s'accumulent, les TD déplacés à la dernière minute, les obligations universitaires imprévues et la fatigue inhérente à une vie étudiante intense, il n'est pas rare de devoir annuler ou reporter un rendez-vous médical prévu. Comprendre les procédures d'annulation et de modification sur Doctolib, les délais recommandés, les conséquences d'une annulation tardive et les bonnes pratiques pour reprogrammer efficacement peut vous faire gagner du temps et préserver une bonne relation avec vos praticiens. Cette leçon détaille toutes les situations possibles et vous donne les outils pour les gérer sereinement, en tenant compte du contexte spécifique des étudiants étrangers en France.

## Pourquoi l'annulation responsable est importante dans le système de santé

La question de l'annulation des rendez-vous médicaux est loin d'être anodine dans un pays où la pénurie de médecins généralistes et de spécialistes est un problème structurel reconnu. Chaque rendez-vous non honoré sans avertissement préalable — ce que les professionnels de santé appellent un «no-show» — représente une perte économique pour le cabinet, mais surtout un gaspillage de ressources de soin dans un système déjà sous tension.

En France, les taux de no-show avant l'arrivée de Doctolib atteignaient des niveaux préoccupants dans de nombreuses spécialités : 15 à 30 % chez les ophtalmologues, jusqu'à 20 % chez les dentistes dans certaines zones urbaines. Ces absences représentent des dizaines de milliers de consultations perdues chaque année au niveau national, tandis que d'autres patients attendent parfois plusieurs mois pour obtenir un créneau dans ces mêmes spécialités. L'impact humain est réel : un patient qui avait besoin d'un rendez-vous urgent n'a pas pu être pris en charge parce qu'un créneau était «occupé» par un patient qui ne s'est finalement pas présenté.

Doctolib a largement contribué à réduire ce phénomène grâce à ses rappels automatiques et à la facilitation de l'annulation. Les études menées par la plateforme indiquent une réduction des no-shows de 60 à 70 % chez les cabinets utilisant les rappels Doctolib comparativement aux cabinets sans outil numérique. Cette amélioration profite à l'ensemble des patients et justifie que chacun adopte une éthique responsable d'annulation : si vous ne pouvez pas honorer un rendez-vous, annulez le rapidement pour qu'un autre patient puisse en bénéficier.

Pour les étudiants en particulier, cette responsabilité prend une dimension supplémentaire. Dans les grandes villes où les cabinets médicaux sont souvent les référents de communautés entières d'étudiants internationaux (comme certains médecins qui parlent plusieurs langues et sont connus de toute une communauté nationale), une mauvaise gestion des rendez-vous peut entacher votre réputation auprès d'un professionnel de santé dont vous aurez peut-être besoin tout au long de vos années d'études.

## Les méthodes d'annulation disponibles sur Doctolib

Doctolib propose plusieurs voies d'annulation, toutes conçues pour être simples et accessibles depuis n'importe quel appareil connecté à n'importe quelle heure de la journée.

**Via l'e-mail de confirmation** : chaque rendez-vous confirmé sur Doctolib est accompagné d'un e-mail contenant un lien unique d'annulation. Ce lien s'intitule généralement «Annuler ou modifier ce rendez-vous». Un seul clic suffit pour accéder à la page d'annulation. Cette méthode fonctionne même si vous n'êtes pas connecté à votre compte Doctolib, ce qui la rend accessible même depuis un autre appareil que celui habituellement utilisé.

**Via votre compte Doctolib** : depuis votre espace personnel sur doctolib.fr ou l'application mobile, accédez à l'onglet «Mes rendez-vous» ou «Prochains rendez-vous». Chaque rendez-vous à venir est listé avec un bouton «Annuler» et un bouton «Modifier». Cliquer sur «Annuler» déclenche une procédure avec une demande de confirmation pour éviter les annulations accidentelles.

**Via le SMS de rappel** : les rappels automatiques envoyés 24 heures avant le rendez-vous contiennent parfois un numéro de réponse rapide ou un lien court d'annulation. Cette méthode directement depuis le SMS est la plus rapide pour une annulation de dernière minute.

**Par téléphone au cabinet** : si vous rencontrez des problèmes techniques avec Doctolib ou si vous êtes à moins de quelques heures du rendez-vous et voulez vous assurer que le cabinet est immédiatement prévenu, appeler directement le secrétariat du cabinet reste la méthode la plus directe. Le numéro de téléphone du cabinet figure dans l'e-mail de confirmation Doctolib.

## Délais d'annulation et bonnes pratiques éthiques

Il n'existe pas de règle légale française imposant un délai minimum d'annulation d'un rendez-vous médical. Contrairement à d'autres types de rendez-vous professionnels (coiffeur, spa, etc.), les consultations médicales ne font généralement pas l'objet de pénalités financières formelles pour annulation tardive — bien que cela puisse changer avec les discussions actuelles sur les moyens de lutter contre les no-shows.

Cependant, l'éthique de la situation est claire. **Annuler au moins 24 heures avant** est la norme de courtoisie recommandée, permettant au cabinet de libérer le créneau pour un autre patient via la liste d'attente Doctolib ou en rappelant directement des patients en attente. **Annuler 48 heures avant** est encore mieux pour les spécialistes dont les tarifs de consultation sont élevés et les délais d'accès longs.

Pour les rendez-vous avec des spécialistes très demandés (psychiatres, rhumatologues, certains chirurgiens), annuler avec moins de 24 heures de préavis pénalise particulièrement les autres patients en file d'attente. Si l'impossibilité de venir est connue suffisamment à l'avance — par exemple, si vous apprenez trois jours avant votre rendez-vous que vous partez en déplacement — annulez immédiatement sans attendre la veille.

La notion de **«bonne foi»** est importante dans la relation avec un praticien. Un patient qui annule régulièrement à la dernière minute ou qui est posé plusieurs fois en no-show peut se voir refuser de nouveaux rendez-vous par le cabinet. Cette décision appartient à chaque praticien et n'est pas encadrée par Doctolib, mais plusieurs cabinets ont mis en place des politiques de seuil de tolérance. Certains envoient une alerte après deux no-shows, d'autres après trois.

## Modifier un rendez-vous sans l'annuler

Dans de nombreuses situations, vous n'avez pas besoin d'annuler purement et simplement votre rendez-vous mais de le déplacer à une date ou heure différente. Doctolib propose une fonctionnalité de modification directe qui vous permet de choisir un autre créneau chez le même praticien en une seule opération, sans passer par une annulation puis une nouvelle réservation distincte.

**Depuis votre compte ou l'e-mail de confirmation**, cliquez sur «Modifier ce rendez-vous» plutôt que sur «Annuler». Doctolib affiche alors les créneaux disponibles restants chez ce praticien. Sélectionnez le créneau alternatif et confirmez. Cette opération est fluide et instantanée. L'ancien créneau est automatiquement libéré sur la plateforme dès que vous en sélectionnez un nouveau.

Cette fonctionnalité de modification directe est particulièrement utile pour les étudiants dont les contraintes d'agenda changent fréquemment. Si votre emploi du temps universitaire évolue et qu'un rendez-vous pris en début de semestre ne cadre plus avec votre planning, une modification rapide sans annulation préserve la continuité de soins et évite le risque de ne pas trouver un nouveau créneau si vous annulez complètement.

**Une nuance importante** : la modification directe n'est possible que si des créneaux alternatifs sont disponibles chez le même praticien. Si l'agenda est complet, vous serez contraint d'annuler et de chercher un nouveau créneau, en utilisant la liste d'attente si disponible. Planifiez donc vos modifications le plus tôt possible après avoir identifié un conflit d'agenda.

## La liste d'attente pour reprogrammer rapidement

Quand vous annulez un rendez-vous chez un médecin très demandé et que son prochain créneau disponible est dans plusieurs semaines ou mois, la liste d'attente Doctolib devient votre meilleure alliée. Dès que votre annulation est confirmée, retournez sur le profil du praticien et cherchez le bouton «M'inscrire sur la liste d'attente» ou «Me prévenir si une disponibilité se libère».

Une fois inscrit, Doctolib vous enverra une notification par e-mail et/ou SMS dès qu'un créneau se libère chez ce praticien. La notification est généralement envoyée à plusieurs personnes sur la liste, et le premier à cliquer sur le lien de réservation obtient le créneau. Il est donc important de répondre rapidement à ces notifications, idéalement dans les minutes qui suivent leur réception. Configurez vos notifications Doctolib pour que les alertes de liste d'attente apparaissent en tant que notifications push sur votre smartphone.

Pour les spécialités à très longue attente, le système de liste d'attente couplé à une consultation régulière de l'agenda (en ajoutant le praticien dans vos favoris Doctolib) peut permettre d'obtenir un rendez-vous bien plus tôt qu'une simple attente passive. Certains patients ont obtenu des rendez-vous en psychiatrie ou en ophtalmologie avec seulement quelques jours de délai grâce à cette combinaison de stratégies.

## Conséquences pratiques d'une annulation sur votre relation avec le praticien

Dans la pratique courante, une annulation unique et bien anticipée n'a aucune conséquence sur votre relation avec un praticien. Les secrétariats médicaux sont habitués à gérer les annulations et les modifications, et un patient qui prévient 24 ou 48 heures à l'avance témoigne d'un respect qui est généralement apprécié et noté positivement.

La situation devient problématique en cas de **schéma répété** : annulations fréquentes, no-shows multiples, modifications de dernière minute répétitives. Certains médecins traitants, qui gèrent des relations de soins à long terme avec leurs patients, peuvent prendre note de ces comportements et adapter leur accessibilité en conséquence. Ce n'est pas une sanction officielle mais une réalité pratique de la relation thérapeutique.

Pour les **spécialistes avec de longues listes d'attente**, un no-show peut se traduire par l'impossibilité de reprendre rendez-vous chez ce praticien. Cette sanction informelle est particulièrement appliquée dans les spécialités sous tension comme la psychiatrie ou certains chirurgiens spécialisés. La règle est simple : si vous ne pouvez pas venir, annulez le plus tôt possible.

Il existe des **situations médicales justifiant une annulation légitime très tardive** : une consultation aux urgences dans la nuit précédant votre rendez-vous, une hospitalisation d'urgence, ou une aggravation soudaine de votre état de santé. Dans ces cas, appelez directement le cabinet dès que possible en expliquant brièvement la situation. La quasi-totalité des cabinets médicaux comprend ces circonstances et ne pénalisera pas un patient qui a annulé pour une raison médicale légitime.

## Annuler un rendez-vous de téléconsultation

Les rendez-vous de téléconsultation vidéo ont leurs propres particularités en matière d'annulation. Le praticien lance la session vidéo depuis son côté à l'heure prévue, et si vous ne rejoignez pas la session dans les premières minutes, la consultation est considérée comme un no-show côté médecin, même si vous êtes présent devant votre écran avec des problèmes de connexion.

**Si vous avez un problème technique** (connexion Internet instable, caméra défaillante, logiciel non compatible), signalez-le le plus tôt possible. La messagerie sécurisée Doctolib est un bon canal pour prévenir le médecin quelques heures avant. La plupart des médecins qui proposent des téléconsultations ont une procédure de repli en cas de problème technique : basculement vers une consultation téléphonique audio-only, ou report du rendez-vous.

**Pour tester votre connexion avant la téléconsultation**, Doctolib propose un module de test accessible depuis l'e-mail de confirmation ou depuis votre espace rendez-vous. Ce test vérifie votre caméra, votre microphone, votre connexion Internet et la compatibilité de votre navigateur ou application. Effectuez ce test au moins 30 minutes avant la consultation prévue pour avoir le temps de corriger d'éventuels problèmes techniques.

L'annulation d'une téléconsultation suit les mêmes procédures qu'une consultation en cabinet : lien dans l'e-mail de confirmation, bouton dans votre compte, ou appel téléphonique direct. Les mêmes délais recommandés s'appliquent.

## Que faire quand c'est le médecin qui annule

La plupart du temps, quand un praticien annule un rendez-vous de son côté, Doctolib vous envoie automatiquement un e-mail et un SMS de notification avec la mention «Votre rendez-vous a été annulé par le cabinet». Ce message contient généralement un lien direct pour reprendre rendez-vous chez le même praticien ou trouver un praticien similaire dans votre secteur.

Les raisons d'annulation côté médecin sont variées : maladie du praticien, urgence personnelle ou familiale, fermeture temporaire du cabinet pour formation ou congrès médical, déménagement de cabinet, départ en retraite anticipé, ou remplacement du médecin par un confrère. La notification Doctolib précise rarement la raison de l'annulation pour des questions de confidentialité professionnelle.

Si vous avez un besoin médical urgent ou semi-urgent et que votre rendez-vous a été annulé avec peu de préavis, voici comment réagir efficacement. Commencez par vérifier sur Doctolib si le même praticien a des créneaux alternatifs dans les prochains jours. Si son agenda est vide ou s'il a été fermé temporairement, utilisez le filtre de disponibilité «Disponible cette semaine» pour trouver un confrère acceptant les nouveaux patients. Pour les urgences qui ne peuvent attendre, la médecine générale de garde (disponible via le 15 ou les maisons médicales de garde) assure une permanence de soins sans rendez-vous.

## Gérer les annulations en cas de force majeure : l'imprévu étudiant

La vie étudiante génère des situations imprévues qui peuvent rendre impossible la venue à un rendez-vous médical planifié plusieurs semaines à l'avance. Quelques scénarios fréquents et les meilleures réponses à y apporter :

**Examen ou concours le même jour** : si votre calendrier d'examens n'était pas connu avec certitude au moment de la réservation, signalez immédiatement le problème dès que vous connaissez la date d'examen. Annulez via Doctolib et reprogrammez pour après la période d'examens. La plupart des consultations médicales non urgentes peuvent attendre quelques semaines sans risque.

**Voyage imprévu (stage, réunion de famille, urgence personnelle)** : les étudiants internationaux voyagent fréquemment entre leur pays d'origine et la France, parfois avec peu de préavis. Dès que vous savez que vous serez absent, annulez le rendez-vous, même si le départ est dans deux semaines. Mieux vaut annuler tôt que repousser cette décision.

**Maladie soudaine le jour du rendez-vous** : si vous êtes trop malade pour vous rendre en cabinet (fièvre, vomissements, forte douleur limitant les déplacements), appelez directement le cabinet dès l'ouverture des lignes et expliquez la situation. De nombreux médecins peuvent proposer de basculer la consultation en téléconsultation si leur agenda le permet, vous permettant de consulter depuis chez vous même dans cet état.

## Témoignages d'étudiants sur la gestion de leurs rendez-vous

**Amara Traoré, 21 ans, en deuxième année de droit, arrivée du Mali** : «La première fois que j'ai dû annuler, j'avais peur de créer une mauvaise impression. J'ai envoyé un message depuis la messagerie Doctolib et j'ai annulé via l'application avec 36 heures d'avance. Mon médecin m'a répondu un mot gentil et a proposé de me mettre en priorité sur la liste d'attente pour la semaine suivante. En France, si tu respectes les règles de politesse médicale, les praticiens sont très compréhensifs.»

**Diego Moreau, 24 ans, en master d'architecture, arrivé d'Argentine** : «Je suis parti en Argentine en urgence pour un événement familial et j'avais un rendez-vous chez le dermatologue 3 jours plus tard. J'ai annulé depuis l'application dans l'aéroport et un autre patient a pu prendre mon créneau. Deux semaines après mon retour, j'ai retrou vé un créneau sans problème. Doctolib rend vraiment simple la gestion de ce genre de situation imprévue.»

## Questions fréquentes sur la gestion des rendez-vous

**Q : L'annulation d'un rendez-vous est-elle toujours gratuite sur Doctolib ?**
Oui, l'annulation est gratuite pour les patients dans tous les cas. Aucun médecin ne peut vous facturer pour une annulation correctement signalée via Doctolib ou par téléphone. Les tentatives de facturation pour annulation tardive, quoique rarissimes, ne sont pas légalement opposables pour une consultation médicale standard.

**Q : Puis-je annuler un rendez-vous le jour même sans conséquences ?**
Techniquement oui, mais éthiquement c'est une annulation de dernière minute qui pénalise fortement le cabinet et les autres patients. Dans certaines spécialités surchargées, les créneaux annulés le matin même ne peuvent plus être attribués à d'autres patients ce jour-là par manque de temps pour les prévenir. Malgré tout, une annulation tardive reste préférable à un no-show total.

**Q : Que faire si je ne me souviens plus où est enregistré mon rendez-vous ?**
Cherchez l'e-mail de confirmation dans votre messagerie avec le nom «Doctolib» comme expéditeur ou «rendez-vous» dans le titre. Si vous avez lié votre compte Doctolib à votre application, ouvrez la section «Mes rendez-vous». En dernier recours, connectez-vous à votre compte sur doctolib.fr pour accéder à l'ensemble de vos rendez-vous à venir et passés.

**Q : Est-il possible d'annuler un rendez-vous pour quelqu'un d'autre depuis mon compte ?**
Oui, si vous gérez le rendez-vous d'un proche depuis votre compte multi-profils Doctolib. Dans ce cas, sélectionnez le profil de la personne concernée et annulez depuis la liste de ses rendez-vous. Si le rendez-vous a été pris depuis un autre compte, la personne concernée doit l'annuler depuis son propre compte ou en appelant directement le cabinet.

**Q : Un rendez-vous annulé est-il remboursé si j'avais payé d'avance ?**
Les consultations médicales sont généralement payées lors de la consultation, pas à la réservation sur Doctolib. La question du remboursement d'avance ne se pose donc pas pour les consultations standard. Pour certaines consultations spécialisées ou certains actes techniques (chirurgie ambulatoire, certaines séances de kinésithérapie en série), des acomptes peuvent avoir été demandés. Dans ce cas, les conditions de remboursement de l'acompte dépendent des conditions générales du cabinet.

**Q : Comment savoir si mon annulation a bien été prise en compte par le cabinet ?**
Après une annulation via Doctolib, vous recevez un e-mail de confirmation d'annulation. Si vous annulez par téléphone, demandez au secrétariat de confirmer l'annulation dans le système. En l'absence de confirmation, votre créneau reste techniquement occupé dans l'agenda du médecin. Si vous avez un doute, appelez le cabinet pour vérifier.

**Q : Le médecin est-il informé de mon annulation immédiatement ?**
Oui. Dès qu'une annulation est confirmée sur Doctolib, le créneau est libéré dans le backoffice praticien en temps réel. Le secrétariat et le médecin ont accès à tout moment à l'état actualisé de l'agenda. Si le cabinet a activé la liste d'attente, les premiers patients de la liste sont notifiés automatiquement dans les secondes qui suivent.

**Q : Peut-on reprendre rendez-vous directement sur Doctolib après une annulation ?**
Oui, c'est même l'option suggérée par Doctolib après confirmation de votre annulation. La plateforme vous propose immédiatement les prochains créneaux disponibles chez le même praticien ou, s'il n'y a pas de disponibilité proche, chez des praticiens similaires dans votre secteur géographique.

## Ressources utiles

- [doctolib.fr – Gérer mes rendez-vous](https://www.doctolib.fr) : Accédez à votre espace personnel pour gérer vos rendez-vous
- [ameli.fr – Droits des assurés](https://www.ameli.fr/assure/droits-demarches/principes) : Vos droits en tant que patient dans le système de santé français
- [service-public.fr – Consultation médicale](https://www.service-public.fr/particuliers/vosdroits/F170) : Informations officielles sur la consultation médicale et la relation patient-médecin
`;

await patch('e5f8ba04-ba3e-45ff-82bd-60d5b0580f3e', L5);
