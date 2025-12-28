-- ==========================================
-- LOT 5 : Cours 21 à 25
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 21 ---

-- COURS 22 : L'État des lieux d'entrée
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'L''État des lieux d''entrée : Protégez votre dépôt de garantie',
  'etat-des-lieux-entree-protegez-depot-garantie',
  'Ce cours est d''une importance capitale pour tout locataire en France, et particulièrement pour les étudiants internationaux. L''état des lieux d''entrée est le document qui décrit précisément l''état du logement au moment de votre emménagement. Il est la preuve de l''état initial du bien et conditionne directement la restitution de votre dépôt de garantie à votre départ. Ne pas le réaliser avec la plus grande rigueur, ou le signer sans attention, peut vous coûter cher. Nous vous expliquerons pourquoi c''est le moment le plus important, comment tester l''eau et l''électricité, l''impératif de prendre des photos de tout défaut, et de récupérer votre copie signée. Maîtriser cette étape est crucial pour protéger vos finances.',
  'État des lieux d''entrée : le moment clé ! Testez, photographiez les défauts, obtenez votre copie. Protégez votre dépôt de garantie !',
  'logement',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''importance cruciale de l''état des lieux d''entrée", "Savoir comment vérifier l''état des équipements (eau, électricité, ouvertures)", "Maîtriser la prise de photos comme preuve de tous les défauts", "Obtenir impérativement votre copie de l''état des lieux signé"]'::jsonb,
  '["Avoir signé un bail de location"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 22
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Pourquoi c''est le moment le plus important',
  '# Pourquoi c''est le moment le plus important

## Pourquoi c''est important ?

L''état des lieux d''entrée est sans conteste le document le plus crucial que vous allez signer en tant que locataire, après le bail lui-même. Ce document, qui décrit minutieusement l''état du logement pièce par pièce et équipement par équipement, est la preuve juridique de l''état initial du bien. Il constitue la référence unique qui sera utilisée lors de l''état des lieux de sortie pour comparer l''état du logement et déterminer les éventuelles réparations à votre charge. Une négligence à cette étape peut vous coûter très cher : des retenues injustifiées sur votre dépôt de garantie pour des dégradations préexistantes. Comprendre son importance capitale est le premier pas pour protéger vos finances et assurer la restitution intégrale de votre dépôt de garantie.


-   Comprendre le rôle juridique de l''état des lieux d''entrée.
-   Identifier le lien direct entre l''état des lieux et la restitution du dépôt de garantie.
-   Connaître les conséquences d''une absence d''état des lieux ou d''un document imprécis.


L''état des lieux est une photographie de l''appartement au moment où vous en prenez possession. Il est établi contradictoirement, c''est-à-dire en présence du locataire et du propriétaire (ou de son représentant, l''agence).

🔗 [Service-Public.fr : L''état des lieux](https://www.service-public.fr/particuliers/vosdroits/F31169) - La page officielle sur l''état des lieux.


### 1. Le rôle juridique de l''état des lieux d''entrée

C''est la base de toute comparaison.

#### a) Preuve de l''état du logement
-   L''état des lieux d''entrée est le seul document qui prouve l''état réel du logement au moment où vous emménagez.
-   Il décrit la propreté, l''état des peintures, des sols, des équipements (cuisine, salle de bain), le bon fonctionnement des installations (électricité, eau, chauffage).
-   Il doit être le plus détaillé possible : "mur salon : trou de cheville", "peinture chambre : écaillée sur 10 cm", "robinet salle de bain : fuit légèrement".

#### b) Comparaison avec l''état des lieux de sortie
-   À votre départ, un nouvel état des lieux (de sortie) sera réalisé. Le document d''entrée servira de référence pour comparer l''état du logement.
-   **Les dégradations constatées à la sortie qui ne figuraient pas sur l''état des lieux d''entrée sont considérées comme étant de votre responsabilité** (sauf vétusté normale).

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - Explications détaillées.




-   Si l''état des lieux de sortie révèle des dégradations qui n''étaient pas mentionnées à l''entrée (et qui ne relèvent pas de la vétusté ou d''un cas de force majeure), le propriétaire peut retenir une partie (ou la totalité) de votre dépôt de garantie pour financer les réparations.
-   **Sans un état des lieux d''entrée précis**, le propriétaire peut arguer que toutes les dégradations constatées à la sortie sont de votre fait, et vous n''aurez aucune preuve pour le contester.

### 3. Conséquences d''une absence d''état des lieux ou d''un document imprécis

Les risques d''une négligence.

#### a) Absence d''état des lieux d''entrée
-   **Présomption en faveur du locataire** : Si aucun état des lieux d''entrée n''est fait, la loi présume que le locataire a reçu le logement en bon état. C''est une présomption simple, mais difficile à renverser.

-   Des mentions vagues comme "bon état général" ou "état neuf" sont à proscrire. Elles ne vous protègent pas.
-   Chaque défaut doit être décrit précisément (ex: "mur cuisine : trace de crayon", "fenêtre chambre : joint usé").

🔗 [Légifrance : Article 3-2 de la loi n° 89-462 du 6 juillet 1989](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000806456/) - Le texte de loi sur l''état des lieux.



-   **Prenez votre temps** : L''état des lieux peut durer longtemps, ne vous précipitez pas, même si le propriétaire est pressé.
-   **Utilisez des termes précis** : "Propre" ou "très propre" est différent de "neuf".
-   **Testez tout** : Les robinets (eau chaude/froide), la chasse d''eau, les lumières, les interrupteurs, les plaques de cuisson, le four, les volets, les serrures, les fenêtres.
-   **Prenez des photos et des vidéos** : C''est votre preuve visuelle. (Voir leçon suivante).




-   **Ayez une lampe de poche** : Pour vérifier les recoins sombres (sous l''évier, derrière les meubles).
-   **Prenez le temps de relire** : Avant de signer, lisez l''intégralité de l''état des lieux.
-   **Ne signez pas si vous n''êtes pas d''accord** : Si un désaccord persiste, vous avez 10 jours après la remise des clés pour compléter l''état des lieux d''entrée. Envoyez alors un courrier recommandé avec accusé de réception à votre propriétaire/agence, listant les défauts non mentionnés.


-   **Ne pas faire d''état des lieux** : C''est un grand risque pour vous.
-   **Se sentir intimidé par le propriétaire/l''agence** : Vos droits doivent être respectés.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - La référence principale.
-   🔗 [Service-Public.fr : L''état des lieux](https://www.service-public.fr/particuliers/vosdroits/F31169) - Guide officiel.
-   🔗 [Légifrance : Décret n° 2016-382 du 30 mars 2016 fixant les modalités d''établissement de l''état des lieux et de l''inventaire de mobilier](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032338575/) - Texte de loi.
-   🔗 [UFC-Que Choisir : L''état des lieux : un document crucial](https://www.quechoisir.org/fiche-pratique-etat-des-lieux-un-document-crucial-n100507/) - Conseils aux consommateurs.
-   🔗 [PAP (Particulier à Particulier) : L''état des lieux de location](https://www.pap.fr/conseils/location/l-etat-des-lieux-de-location-a1314) - Conseils pratiques.


L''état des lieux d''entrée est le moment le plus important de votre location pour protéger votre dépôt de garantie. Prenez votre temps, soyez extrêmement détaillé(e) en notant tous les défauts, même les plus minimes, et testez tous les équipements. Prenez des photos et des vidéos comme preuves. Ne signez jamais si vous n''êtes pas d''accord ou si vous n''avez pas vérifié le document. Une rigueur absolue à cette étape est la garantie d''une restitution sereine de votre dépôt de garantie à votre départ du logement.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Tester l''eau, l''électricité et les ouvertures',
  '# Tester l''eau, l''électricité et les ouvertures

## Pourquoi c''est important ?

Lors de l''état des lieux d''entrée, au moment où vous prenez possession de votre logement, il ne suffit pas de constater visuellement l''état des peintures ou des sols. Il est absolument crucial de vérifier le bon fonctionnement de tous les équipements et installations : l''eau (chaude et froide, pression, fuites), l''électricité (prises, lumières, tableau électrique) et toutes les ouvertures (fenêtres, portes, volets, serrures). Ne pas tester ces éléments, ou le faire de manière superficielle, peut vous amener à endosser la responsabilité de dysfonctionnements préexistants et à payer des réparations qui ne sont pas de votre faute lors de l''état des lieux de sortie. C''est une étape active de vérification qui protège votre dépôt de garantie et votre confort futur.


-   Savoir comment tester efficacement toutes les installations d''eau (robinets, chasse d''eau).


L''état des lieux n''est pas une simple formalité. C''est une véritable inspection que vous devez mener avec rigueur et méthode. Munissez-vous d''une feuille et d''un stylo (ou de votre smartphone) et soyez prêt(e) à tout vérifier.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - Guide pour l''état des lieux.


### 1. Vérification des installations d''eau


-   **Robinet de l''évier** : Ouvrez l''eau chaude et froide. Vérifiez la pression, la température. Y a-t-il des fuites sous l''évier ou au niveau du robinet ?
-   **Évacuation** : L''eau s''écoule-t-elle correctement ? Le siphon est-il propre ?
-   **Raccordements** : Si une machine à laver ou un lave-vaisselle sont prévus, vérifiez la présence des arrivées et évacuations d''eau, et leur état.

-   **Chasse d''eau** : Tirez la chasse d''eau plusieurs fois. Est-ce qu''elle remplit correctement ? Y a-t-il des fuites au niveau du mécanisme ?
-   **Chauffe-eau** : S''il est individuel, est-il en bon état apparent ? Signalez toute trace de rouille ou d''humidité.


-   Votre **feuille d''état des lieux** (pour noter).


-   **Soyez systématique** : Pièce par pièce, du sol au plafond, du mur à l''équipement.
-   **Prenez votre temps** : Ne vous laissez pas presser par le propriétaire ou l''agence. C''est VOTRE sécurité.
-   **N''hésitez pas à allumer/ouvrir/fermer plusieurs fois** pour vérifier le bon fonctionnement.
-   **Demandez des explications** sur l''utilisation des équipements que vous ne connaissez pas.


-   **Ne pas tester tous les points** : Ce qui n''est pas noté est réputé en bon état.
-   **Ne pas prendre de photos/vidéos** des défauts de fonctionnement ou d''état.
-   **Se sentir gêné de tout vérifier** : C''est votre droit et votre devoir.
-   **Oublier de vérifier l''eau chaude** : Une absence d''eau chaude est un défaut majeur.
-   **Ne pas mentionner une faible pression d''eau** ou un écoulement lent.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - Conseils détaillés pour l''inspection.
-   🔗 [Service-Public.fr : L''état des lieux](https://www.service-public.fr/particuliers/vosdroits/F31169) - Guide officiel.
-   🔗 [UFC-Que Choisir : L''état des lieux : un document crucial](https://www.quechoisir.org/fiche-pratique-etat-des-lieux-un-document-crucial-n100507/) - Conseils aux consommateurs.
-   🔗 [QualiDiag (diagnostiqueurs immobiliers)](https://www.qualidiag.fr/) - Pour comprendre le rôle du diagnostiqueur, même si c''est le DPE qui vous est remis.


Tester minutieusement les installations d''eau, d''électricité et toutes les ouvertures du logement est une étape cruciale de l''état des lieux d''entrée. Vérifiez la pression, la température, l''absence de fuites, le fonctionnement des prises et lumières, et l''état de toutes les fenêtres, portes et serrures. Notez chaque défaut, même minime, et photographiez-le. Cette inspection rigoureuse vous protège contre des imputations de dégradations futures et assure votre confort au quotidien. Votre vigilance est votre meilleure garantie.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Prendre des photos de tout (défauts)',
  '# Prendre des photos de tout (défauts)

## Pourquoi c''est important ?

Lors de l''état des lieux d''entrée, votre mémoire et la description écrite des défauts peuvent parfois ne pas suffire. Les photos et les vidéos sont des preuves irréfutables de l''état du logement au moment de votre emménagement. Ne pas prendre de photos ou le faire de manière superficielle est une erreur fréquente et potentiellement très coûteuse. En cas de litige à la sortie, une photo datée et claire d''un défaut préexistant sera votre meilleure défense contre une retenue injustifiée sur votre dépôt de garantie. C''est votre bouclier visuel et la garantie la plus efficace pour prouver votre bonne foi.




L''état des lieux d''entrée est un document écrit, mais la preuve visuelle le complète et le renforce de manière irremplaçable. Votre smartphone est votre meilleur ami pour cette étape.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - Conseils sur les preuves.





-   **Preuve irréfutable** : Une photo ou une vidéo datée et géolocalisée (si votre téléphone le permet) est une preuve objective et difficilement contestable de l''état du logement à un instant T.
-   **Complément à l''écrit** : Elle vient renforcer la description écrite sur l''état des lieux et lève toute ambiguïté sur la nature et l''ampleur d''un défaut.



-   **Activez la fonction "date et heure"** sur votre appareil photo si possible.
-   Prenez une photo d''un journal du jour, ou d''un écran d''ordinateur affichant la date et l''heure, en début de reportage photo.
-   Filmez une courte vidéo en disant la date et l''heure du jour de l''état des lieux.

-   **Photo générale de la pièce** : Commencez par une photo d''ensemble de chaque pièce pour situer.
-   **Grossir les défauts** : Pour chaque défaut, prenez une photo large pour situer, puis une ou deux photos rapprochées (gros plan) pour montrer le détail et l''ampleur.
-   **Luminosité** : Prenez des photos avec une bonne luminosité. N''hésitez pas à allumer toutes les lumières. Utilisez le flash si nécessaire.

-   Une courte vidéo, en faisant un "tour du propriétaire" pièce par pièce, peut compléter les photos.
-   Commentez en direct les défauts que vous constatez : "Voici la tache sur le mur du salon", "Le robinet de la salle de bain fuit ici".



-   **Murs, plafonds, sols** : Tâches, fissures, trous, rayures, décollement de peinture, traces d''humidité, moisissures.

-   **Électricité** : Prises électriques (état des caches), interrupteurs, luminaires (surtout s''ils ne fonctionnent pas ou sont cassés).
-   **Plomberie** : Robinetterie (fuites, débit), tuyauterie apparente (rouille, traces d''humidité). Vérifiez sous les éviers et lavabos.

-   **Fenêtres** : État des vitres (fissures, rayures), cadres (peinture écaillée, chocs), joints (usure, déchirure), fonctionnement de l''ouverture/fermeture, loquets, poignées.
-   **Volets roulants ou battants** : Fonctionnement, lames cassées, traces d''usure.
-   **Porte d''entrée** : État de la porte, de la serrure, judas, sonnette.

-   **Balcon, terrasse, jardin** : Sol, garde-corps, traces d''humidité, état général.


-   Une **batterie bien chargée** et de l''**espace de stockage** suffisant.
-   Le **document d''état des lieux papier** pour noter les descriptions.


-   **Prenez des photos de l''ensemble des pièces et des équipements même s''ils semblent en parfait état.** Cela prouve que vous avez tout vérifié.
-   **Ne comptez pas sur le propriétaire ou l''agent pour prendre les photos.** C''est votre responsabilité de vous protéger.
-   **Demandez à ce que les photos soient annexées à l''état des lieux** (surtout pour les agences). Si ce n''est pas possible, conservez-les précieusement et mentionnez sur l''état des lieux que "des photos ont été prises par le locataire et seront conservées comme preuves".
-   **Faites une sauvegarde immédiate** de vos photos et vidéos sur un cloud ou un disque dur externe dès que l''état des lieux est terminé.


-   **Oublier de dater les photos** : La datation est cruciale pour prouver que les défauts existaient à l''entrée.
-   **Ne pas prendre de photos des "petits" défauts** : Ce sont souvent eux qui sont sources de retenues sur le dépôt de garantie.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - La référence principale pour l''état des lieux.
-   🔗 [Service-Public.fr : L''état des lieux](https://www.service-public.fr/particuliers/vosdroits/F31169) - Guide officiel du service public.
-   🔗 [UFC-Que Choisir : L''état des lieux : un document crucial](https://www.quechoisir.org/fiche-pratique-etat-des-lieux-un-document-crucial-n100507/) - Conseils très pratiques aux consommateurs, souvent avec des modèles.
-   🔗 [Légifrance : Décret n° 2016-382 du 30 mars 2016 fixant les modalités d''établissement de l''état des lieux](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032338575/) - Le texte de loi qui encadre l''état des lieux.


Prendre des photos et des vidéos datées de tous les défauts, même minimes, est une précaution indispensable lors de l''état des lieux d''entrée. Ces preuves visuelles sont votre meilleure défense en cas de litige sur le dépôt de garantie. Soyez méthodique, minutieux, et documentez chaque pièce, chaque mur, chaque équipement. Sauvegardez immédiatement ces preuves numériques. Votre diligence à cette étape est la garantie la plus solide pour protéger votre dépôt de garantie et éviter des frais de réparation injustifiés à votre départ.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Signer et récupérer sa copie',
  '# Signer et récupérer sa copie

## Pourquoi c''est important ?

La signature de l''état des lieux d''entrée est l''acte qui rend ce document officiel et juridiquement contraignant pour toutes les parties. Récupérer votre propre copie signée est tout aussi crucial : sans elle, vous n''aurez aucune preuve de ce qui a été convenu à votre arrivée. Ne pas signer ou ne pas obtenir votre copie peut vous laisser sans défense en cas de désaccord avec le propriétaire lors de l''état des lieux de sortie. En tant qu''étudiant international, la méconnaissance de cette étape finale peut vous coûter très cher. Maîtriser la procédure de signature, savoir comment consigner vos réserves, et obtenir votre exemplaire est absolument essentiel pour sécuriser votre dépôt de garantie et protéger vos droits de locataire.


-   Comprendre la valeur juridique de la signature de l''état des lieux.


L''état des lieux est un document contradictoire. Cela signifie qu''il doit être établi et signé par toutes les parties (locataire et propriétaire/agence) pour avoir pleine valeur juridique.

🔗 [Service-Public.fr : L''état des lieux](https://www.service-public.fr/particuliers/vosdroits/F31169) - Guide officiel sur la signature et la remise du document.


### 1. La signature de l''état des lieux : Un engagement formel


-   **Relisez attentivement le document complet** : Avant de signer, prenez quelques minutes pour relire l''intégralité de l''état des lieux, y compris toutes les descriptions des pièces et des équipements, et les mentions des défauts que vous avez constatés.
-   **Vérifiez l''orthographe et les dates** : Assurez-vous que votre nom est correctement orthographié, et que la date de l''état des lieux est bien celle du jour.

-   **Désaccords sur l''état des lieux** : Si, après relecture, vous êtes en désaccord avec une description ou si un défaut que vous avez signalé n''est pas noté, vous avez le droit de refuser de signer ou de consigner vos "réserves" par écrit sur le document lui-même, juste avant votre signature.
    -   Exemple : "Je soussigné(e) [Votre Nom] conteste l''état [bon état] du mur du salon et signale une fissure de 10cm non mentionnée."
-   **Si désaccord persistant** : Si un désaccord majeur persiste et que le propriétaire/agence refuse de modifier le document ou d''ajouter vos réserves, vous pouvez refuser de signer. Dans ce cas, vous disposez de 10 jours calendaires à compter de la date d''établissement de l''état des lieux pour adresser un courrier recommandé avec accusé de réception au propriétaire/agence listant les défauts non constatés (avec photos à l''appui).

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - Détails sur les désaccords.



-   **Exigez une copie immédiate** : Une fois que toutes les parties ont signé l''état des lieux, vous avez le droit d''obtenir immédiatement un exemplaire original du document.
-   **Importance** : Ne quittez jamais le logement sans votre copie signée. C''est votre seule preuve !
-   **Version numérique** : Si l''état des lieux est fait sur tablette, vous devriez recevoir une copie par e-mail immédiatement. Assurez-vous de la télécharger et de la sauvegarder.




-   Rangez votre copie originale de l''état des lieux d''entrée (avec le bail, l''inventaire des meubles si meublé, et vos photos/vidéos datées) dans un classeur dédié à vos documents administratifs (voir cours sur l''organisation du classeur).
-   Il doit être conservé jusqu''à plusieurs années après votre départ du logement, au cas où un litige sur le dépôt de garantie surviendrait.

-   Nommez le fichier clairement : "Etat_des_lieux_ENTREE_NOM_Prenom_Adresse_Date.pdf".


-   Le **document d''état des lieux** à signer.


-   **Si l''état des lieux est sur tablette** : Demandez à voir l''écran avant la signature pour vérifier que toutes vos remarques ont été bien saisies.
-   **Le document doit être unique et complet** : Ne signez pas une version "provisoire" ou partielle.


-   **Ne pas récupérer votre copie signée** : C''est votre preuve, vous en avez absolument besoin.
-   **Perdre l''état des lieux d''entrée** : C''est une perte majeure qui vous met en position de faiblesse à la sortie.
-   **Oublier de joindre les photos/vidéos à l''état des lieux** (ou de mentionner leur existence si non annexées).
-   **Se précipiter parce que le bailleur est pressé** : C''est votre droit de prendre le temps nécessaire.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - La référence principale.
-   🔗 [Service-Public.fr : L''état des lieux](https://www.service-public.fr/particuliers/vosdroits/F31169) - Guide officiel.
-   🔗 [UFC-Que Choisir : L''état des lieux : un document crucial](https://www.quechoisir.org/fiche-pratique-etat-des-lieux-un-document-crucial-n100507/) - Conseils aux consommateurs.
-   🔗 [Modeles-types.fr : Modèle de lettre de contestation de l''état des lieux](https://www.modeles-types.fr/location/modele-lettre-contestation-etat-des-lieux-n142) - Si vous devez émettre des réserves après coup.


Signer l''état des lieux d''entrée et récupérer votre copie sont les étapes finales et cruciales pour valider ce document essentiel. Lisez-le attentivement, consignez vos réserves si nécessaire, et ne quittez jamais les lieux sans votre exemplaire signé par toutes les parties. Archivez-le précieusement, accompagné de vos photos/vidéos. Cette diligence vous offre la meilleure protection pour la restitution de votre dépôt de garantie à votre départ et vous assure un séjour serein dans votre logement en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 22 ---

-- COURS 23 : Assurance Habitation
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Assurance Habitation en France : Protégez votre logement',
  'assurance-habitation-france-protegez-logement',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux qui s''apprêtent à louer un logement en France. L''assurance habitation est une obligation légale pour le locataire et une protection indispensable pour votre bien-être. Nous vous expliquerons pourquoi cette assurance est obligatoire, la distinction entre la Responsabilité Civile et l''assurance Multirisque Habitation, comment comparer les offres des banques et des assureurs en ligne, et comment obtenir rapidement votre attestation d''assurance. Maîtriser ce sujet est crucial pour être en règle avec la loi, protéger vos biens et ceux du propriétaire, et éviter des frais exorbitants en cas de sinistre. Ne négligez jamais cette protection !',
  'Assurance habitation obligatoire ! Responsabilité Civile, Multirisque, comparateurs, attestation. Protégez votre logement et votre budget.',
  'logement',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''obligation légale de souscrire une assurance habitation", "Distinguer la Responsabilité Civile de la garantie Multirisque Habitation", "Savoir comparer les offres et choisir la bonne assurance", "Obtenir rapidement son attestation d''assurance pour le propriétaire"]'::jsonb,
  '["Avoir trouvé un logement en France"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 23
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'L''obligation légale d''assurance',
  '# L''obligation légale d''assurance

## Pourquoi c''est important ?

En France, la souscription à une assurance habitation est une **obligation légale** pour tout locataire d''un logement (qu''il soit meublé ou non-meublé). Ne pas être assuré(e) n''est pas seulement un manquement à la loi, mais c''est aussi une prise de risque énorme qui peut avoir des conséquences financières catastrophiques. En cas de sinistre (incendie, dégât des eaux, explosion) causé par votre négligence ou survenant dans votre logement, vous pourriez être tenu(e) de rembourser des sommes très importantes au propriétaire ou aux voisins, des montants qui peuvent ruiner votre budget et votre séjour en France. Comprendre cette obligation et y souscrire est absolument crucial pour votre protection et pour être en règle avec votre bailleur.


-   Comprendre le caractère obligatoire de l''assurance habitation pour le locataire.
-   Identifier les risques et les conséquences de l''absence d''assurance.


L''assurance habitation a pour but de vous protéger contre les risques liés à votre logement et de protéger les tiers (propriétaire, voisins) contre les dommages que vous pourriez causer. C''est une sécurité indispensable pour une vie sereine en France.

🔗 [Service-Public.fr : L''assurance habitation est-elle obligatoire ?](https://www.service-public.fr/particuliers/vosdroits/F31169) - La page officielle qui affirme l''obligation.


### 1. Le caractère obligatoire de l''assurance habitation pour le locataire

C''est une exigence légale et contractuelle.

-   L''article 7 de la loi du 6 juillet 1989 sur les rapports locatifs stipule que "le locataire est obligé de s''assurer contre les risques dont il doit répondre en sa qualité de locataire".

#### b) Exigence du propriétaire / de l''agence
-   Le propriétaire ou l''agence vous demandera systématiquement une attestation d''assurance habitation au moment de la signature du bail et chaque année lors du renouvellement.


🔗 [Légifrance : Article 7 de la loi n° 89-462 du 6 juillet 1989](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000806456/) - Le texte de loi sur l''obligation.

### 2. Les risques et conséquences de l''absence d''assurance


-   **Sans assurance, vous devrez payer tous les dégâts de votre poche**. Les montants peuvent atteindre des dizaines de milliers d''euros, voire plus, ce qui est impayable pour un étudiant.

-   Le fait de ne pas fournir d''attestation d''assurance peut être un motif de résiliation du bail par le propriétaire.

-   Si vous causez un dégât des eaux chez un voisin, l''absence d''assurance compliquera énormément le processus d''indemnisation.


C''est la base de votre protection.

-   C''est le minimum légal exigé par la loi.

-   Elle est souvent incluse dans les contrats d''assurance habitation ou peut être souscrite séparément. Elle vous couvre pour les dommages que vous pourriez causer à des tiers dans votre vie quotidienne (ex: casser un objet dans un magasin, blesser quelqu''un).

🔗 [France Assureurs : L''assurance habitation](https://www.franceassureurs.fr/les-assurances/lassurance-habitation) - Informations des assureurs.



#### a) L''attestation d''assurance
-   Une fois votre contrat souscrit, votre assureur vous délivrera une "attestation d''assurance habitation".
-   Ce document prouve que vous êtes couvert(e) pour votre logement, mentionne l''adresse du logement, les garanties souscrites (au minimum la RC locative) et la période de validité.

-   **Chaque année** : Il faudra lui fournir une nouvelle attestation à chaque renouvellement de contrat d''assurance.


-   Votre **bail de location** (pour l''adresse du logement).
-   Vos **coordonnées bancaires** (RIB) pour le paiement de l''assurance.


-   **Souscrivez une assurance AVANT de signer le bail** : Ou au plus tard le jour de la signature pour pouvoir fournir l''attestation.
-   **Utilisez des comparateurs en ligne** : Pour trouver l''offre la plus adaptée à votre budget.
-   **Lisez attentivement votre contrat d''assurance** : Comprenez ce qui est couvert et ce qui ne l''est pas.


-   **Ne pas prendre d''assurance** : C''est un risque financier énorme et une infraction légale.
-   **Souscrire une assurance qui ne couvre pas la Responsabilité Civile Locative** : Assurez-vous d''avoir au moins cette garantie.
-   **Fournir une fausse attestation** : C''est une fraude.


-   🔗 [Service-Public.fr : L''assurance habitation est-elle obligatoire ?](https://www.service-public.fr/particuliers/vosdroits/F31169) - La page de référence.
-   🔗 [France Assureurs : L''assurance habitation](https://www.franceassureurs.fr/les-assurances/lassurance-habitation) - Le site de la fédération des assureurs.
-   🔗 [Légifrance : Loi n° 89-462 du 6 juillet 1989 (Article 7)](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000806456/) - Le texte de loi sur l''obligation.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''assurance du logement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-assurance-du-logement/) - Informations détaillées pour les locataires.
-   🔗 [LeLynx.fr / LesFurets.com](https://www.lelynx.fr/) - Comparateurs d''assurances habitation.


L''assurance habitation est une obligation légale et une nécessité absolue pour tout locataire en France. Elle vous protège contre les risques financiers liés aux dommages que vous pourriez causer au logement ou aux voisins (Responsabilité Civile Locative, le minimum requis). Souscrivez-y avant de prendre possession de votre logement et fournissez l''attestation à votre propriétaire. Ne jamais négliger cette protection, elle est cruciale pour votre sécurité financière et votre tranquillité d''esprit durant votre séjour en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Responsabilité Civile vs Multirisque',
  '# Responsabilité Civile vs Multirisque

## Pourquoi c''est important ?



-   Définir la Responsabilité Civile Locative et ce qu''elle couvre.
-   Comprendre l''étendue de la garantie Multirisque Habitation et ses avantages.
-   Maîtriser les conseils pour choisir le niveau d''assurance adapté à votre situation.


Le choix de votre assurance habitation ne se limite pas à l''obligation légale. Il s''agit aussi de protéger votre patrimoine et votre tranquillité d''esprit.

🔗 [Service-Public.fr : Les garanties de l''assurance habitation](https://www.service-public.fr/particuliers/vosdroits/F31169) - Informations sur les garanties.



C''est la garantie de base que vous devez avoir.

#### a) Ce qu''elle couvre
-   **Risques couverts** : Principalement l''incendie, l''explosion et les dégâts des eaux.
-   **Limite** : Elle ne couvre PAS vos propres biens, ni les dommages que vous pourriez causer à vous-même ou à vos proches, ni les dommages aux tiers (voisins) qui ne seraient pas la conséquence d''un sinistre ayant pris naissance chez vous.

-   C''est le minimum exigé par la loi du 6 juillet 1989.

🔗 [France Assureurs : L''assurance habitation - Les garanties](https://www.franceassureurs.fr/les-assurances/lassurance-habitation) - Détails sur les garanties de base.



#### a) Ce qu''elle couvre (en plus de la RC Locative)
-   **Vos propres biens** : La MRH couvre les dommages subis par vos meubles, vos vêtements, vos appareils électroniques, vos objets personnels, etc., en cas d''incendie, dégât des eaux, vol, bris de glace, catastrophes naturelles, etc.
-   **Responsabilité Civile Vie privée (RC Vie privée)** : C''est une garantie très importante. Elle vous couvre pour les dommages que vous pourriez causer accidentellement à des tiers (voisins, amis, passants) dans votre vie quotidienne, en dehors du logement (ex: votre sac tombe et casse un objet dans un magasin, vous blessez quelqu''un en faisant du sport).
-   **Garantie recours des voisins et des tiers** : L''assureur se charge de défendre vos intérêts si des voisins ou des tiers vous réclament des dommages.

-   **Tranquillité d''esprit** : Une couverture plus complète réduit le stress en cas de problème.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''assurance du logement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-assurance-du-logement/) - Informations sur les garanties.



-   Couvre le vol de vos biens et les dégradations commises à l''occasion d''un vol.


#### c) Garantie "électroménager" / "tout risque appareils nomades"

-   Services d''urgence (serrurerie, plomberie) en cas de problème.


### 4. Choisir le niveau d''assurance adapté


-   **Ne prenez jamais moins que la RC locative** : C''est le minimum légal.
-   **La MRH est fortement recommandée** : C''est la norme en France et elle offre une protection complète pour un coût souvent raisonnablement supérieur.
-   **Évaluez la valeur de vos biens** : Si vous avez des objets de valeur, assurez-vous qu''ils sont bien couverts par la MRH.
-   **Comparez les franchises** : C''est la somme qui reste à votre charge en cas de sinistre. Une franchise élevée réduit la prime, mais augmente votre reste à payer en cas de problème.
-   **Vérifiez les exclusions et les plafonds d''indemnisation** : Lisez bien le contrat.




-   **Demandez des devis pour la MRH** : Vous verrez que la différence de prix avec une RC simple n''est souvent pas énorme.
-   **Mentionnez votre statut d''étudiant** : De nombreux assureurs proposent des tarifs préférentiels pour les étudiants.
-   **Demandez un "devis complet"** : Avec le détail des garanties et des franchises.
-   **N''hésitez pas à poser des questions à l''assureur** : Pour clarifier les garanties.


-   **Ne pas déclarer d''objets de valeur** : Ils pourraient ne pas être couverts ou mal indemnisés.
-   **Ne pas comprendre les franchises** : C''est la part qui reste à votre charge.
-   **Oublier d''inclure la Responsabilité Civile Vie privée** : C''est une protection importante.


-   🔗 [France Assureurs : L''assurance habitation](https://www.franceassureurs.fr/les-assurances/lassurance-habitation) - La fédération des assureurs.
-   🔗 [Service-Public.fr : Garanties de l''assurance habitation](https://www.service-public.fr/particuliers/vosdroits/F31169) - Informations détaillées sur les différentes garanties.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''assurance du logement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-assurance-du-logement/) - Guide pour le locataire.
-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - L''organisme qui supervise les banques et assureurs.


La Responsabilité Civile Locative est l''assurance habitation minimum légalement obligatoire en France, couvrant les dommages que vous pourriez causer au logement du propriétaire. Cependant, la garantie Multirisque Habitation (MRH) est fortement recommandée car elle offre une couverture bien plus étendue, protégeant vos propres biens et incluant la Responsabilité Civile Vie privée. Évaluez la valeur de vos biens et votre budget pour choisir le niveau d''assurance adapté. La MRH est un investissement essentiel pour une protection complète et une tranquillité d''esprit durant votre séjour en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Comparer les offres (Banques vs Assureurs en ligne)',
  '# Comparer les offres (Banques vs Assureurs en ligne)

## Pourquoi c''est important ?

Le marché de l''assurance habitation en France est vaste et concurrentiel. Vous aurez le choix entre de nombreux acteurs : les banques (qui proposent souvent des produits d''assurance), les assureurs traditionnels et les assureurs en ligne. Pour les étudiants internationaux, comparer ces offres est absolument crucial pour trouver la meilleure couverture au meilleur prix. Une mauvaise comparaison peut vous faire payer trop cher pour des garanties inutiles, ou au contraire, vous laisser sous-assuré(e) pour des risques importants. Maîtriser les critères de comparaison et les différents canaux de souscription vous permettra de faire un choix éclairé et d''optimiser votre budget.


-   Identifier les différents types de fournisseurs d''assurance habitation.


Choisir son assurance, c''est un peu comme choisir son téléphone portable : de nombreuses offres existent, et il faut trouver celle qui correspond à vos besoins et à votre budget.



### 1. Les différents types de fournisseurs d''assurance habitation


-   **Avantages** : Pratique si vous ouvrez déjà un compte bancaire chez elles. Elles peuvent proposer des "packages" (compte + assurance) et une gestion simplifiée via votre conseiller.



🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''assurance du logement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-assurance-du-logement/) - Mentions sur les fournisseurs.



-   C''est le premier critère, mais il doit être mis en perspective avec les garanties.

-   **Obligatoires** : Assurez-vous d''avoir au minimum la Responsabilité Civile Locative.

-   **Définition** : La somme qui reste à votre charge en cas de sinistre. Une franchise de 100€ signifie que si les dégâts s''élèvent à 500€, l''assureur paie 400€ et vous 100€.

#### d) Les plafonds d''indemnisation
-   C''est le montant maximum que l''assureur vous versera en cas de sinistre. Assurez-vous qu''il est suffisant pour couvrir la valeur de vos biens.

-   Ce sont les situations où l''assureur ne vous couvrira pas (ex: dommages causés par négligence grave, absence de serrure de sécurité en cas de vol). Lisez-les attentivement.

#### f) Les services d''assistance
-   Dépannage d''urgence (plombier, serrurier), aide au relogement temporaire en cas de sinistre majeur.



-   **Avantages** : Gain de temps considérable, vision d''ensemble du marché, dénicher les offres les plus compétitives.

🔗 [LeLynx.fr](https://www.lelynx.fr/) - Un des principaux comparateurs d''assurance.

### 4. Obtenir son attestation d''assurance


-   Une fois votre choix fait et votre contrat signé, l''assureur vous délivrera une attestation d''assurance.


-   Votre **budget** pour l''assurance.


-   **Pensez aux offres "packagées" pour étudiants** : Certaines banques/assureurs ont des offres spécifiques et avantageuses.
-   **Lisez les avis clients** : Pour évaluer la qualité du service client et la réactivité de l''assureur en cas de sinistre.
-   **N''hésitez pas à contacter les assureurs** : Pour poser des questions et négocier si possible.
-   **Souscrivez avant la remise des clés** : Vous devez pouvoir fournir l''attestation au moment de la signature du bail ou de l''état des lieux d''entrée.


-   **Prendre l''assurance la moins chère sans vérifier les garanties** : Vous risquez d''être mal couvert(e).
-   **Ne pas déclarer d''objets de valeur** : Ils pourraient ne pas être couverts.
-   **Choisir un assureur non agréé en France** : Vérifiez toujours l''agrément de l''entreprise.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''assurance du logement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-assurance-du-logement/) - Conseils pour les locataires.
-   🔗 [LeLynx.fr / LesFurets.com](https://www.lelynx.fr/) - Comparateurs d''assurances.
-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - Pour vérifier l''agrément des assureurs.


Comparer les offres d''assurance habitation entre les banques, les assureurs traditionnels et les assureurs en ligne est crucial pour les étudiants internationaux en France. Ne vous limitez pas au prix, mais comparez attentivement les garanties (RC Locative obligatoire, MRH recommandée), les franchises, les plafonds d''indemnisation et les exclusions. Utilisez les comparateurs en ligne, demandez des devis personnalisés et n''hésitez pas à poser des questions. Souscrivez à votre assurance avant la remise des clés et obtenez votre attestation pour être en règle et protégé(e).
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Obtenir son attestation',
  '# Obtenir son attestation d''assurance habitation

## Pourquoi c''est important ?

L''attestation d''assurance habitation est le document officiel qui prouve que vous êtes bien assuré(e) pour votre logement. Elle est **obligatoire** et vous sera systématiquement demandée par le propriétaire ou l''agence immobilière avant de vous remettre les clés, et chaque année à la date anniversaire de votre bail. Ne pas pouvoir la fournir signifie que vous n''êtes pas en règle avec la loi et votre contrat de location, ce qui peut entraîner le refus de vous donner accès au logement, ou même la résiliation de votre bail. En tant qu''étudiant international, il est absolument crucial de savoir comment obtenir rapidement cette attestation et de la conserver précieusement.


-   Comprendre la finalité et l''importance de l''attestation d''assurance habitation.
-   Identifier les informations clés qui doivent figurer sur l''attestation.


L''attestation d''assurance est la preuve que vous avez rempli votre obligation légale d''être assuré(e). C''est un document simple, mais indispensable.

🔗 [Service-Public.fr : Assurance habitation - Attestation](https://www.service-public.fr/particuliers/vosdroits/F31169) - Informations sur l''attestation.


### 1. Qu''est-ce que l''attestation d''assurance habitation ?


-   **Document officiel** : C''est un document délivré par votre compagnie d''assurance.
-   **Preuve de garantie** : Il atteste que vous avez souscrit un contrat d''assurance habitation pour un logement précis et pour une période donnée.
-   **Informations clés** : L''attestation doit mentionner :
    -   L''adresse exacte du logement assuré.
    -   La période de validité de l''assurance (date de début et de fin).



-   **Espace client** : La plupart des assureurs (et banques qui proposent de l''assurance) mettent l''attestation à disposition sur votre espace client en ligne, juste après la souscription.
-   **Téléchargement immédiat** : Vous pouvez la télécharger au format PDF et l''imprimer ou l''envoyer par e-mail.
-   **Immédiatement après la souscription** : N''attendez pas, téléchargez-la dès que vous avez finalisé votre contrat.

-   Votre assureur peut vous envoyer l''attestation par e-mail après la souscription.

-   Dans certains cas, vous recevrez une attestation papier par la poste quelques jours après la souscription. Cependant, pour la remise des clés, l''attestation numérique ou par e-mail est souvent suffisante.



### 3. Transmettre l''attestation au propriétaire / à l''agence

C''est une formalité obligatoire.

-   **Avant la remise des clés** : Le propriétaire ou l''agence vous la demandera impérativement avant de vous donner accès au logement.
-   **À chaque date anniversaire du bail** : Chaque année, vous devrez fournir une nouvelle attestation d''assurance (prouvant le renouvellement de votre contrat) à votre bailleur.

-   **Par e-mail** : Envoyez le fichier PDF par e-mail au propriétaire ou à l''agence.




-   Imprimez plusieurs exemplaires et rangez-en un avec votre bail et l''état des lieux dans votre classeur administratif.


-   Votre **contrat d''assurance habitation**.


-   **Vérifiez toutes les informations** sur l''attestation (adresse, nom, période) avant de la transmettre.
-   **Mettez un rappel dans votre calendrier** pour l''année suivante pour penser au renouvellement de votre assurance et à la transmission de la nouvelle attestation.
-   **N''hésitez pas à demander une attestation temporaire** si votre contrat définitif tarde, elle peut être acceptée par le propriétaire.


-   **Ne pas avoir d''attestation** : Votre entrée dans le logement sera bloquée.
-   **Attestation non conforme** : Par exemple, si l''adresse du logement n''y figure pas.
-   **Perdre l''attestation** : Elle est cruciale en cas de sinistre ou de demande du propriétaire.
-   **Fournir une fausse attestation** : C''est une fraude avec de lourdes conséquences.


-   🔗 [Service-Public.fr : Attestation d''assurance habitation](https://www.service-public.fr/particuliers/vosdroits/F31169) - La page de référence.
-   🔗 [France Assureurs : Questions/Réponses sur l''attestation](https://www.franceassureurs.fr/les-assurances/lassurance-habitation/questions-reponses-assurance-habitation) - Réponses aux questions fréquentes.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''assurance du logement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-assurance-du-logement/) - Informations pour les locataires.
-   🔗 [UFC-Que Choisir : L''attestation d''assurance](https://www.quechoisir.org/fiche-pratique-location-l-assurance-habitation-n100507/) - Conseils aux consommateurs.
-   🔗 [Ministère de la Justice : Que faire en cas de non-respect du bail](https://www.justice.gouv.fr/justice-au-quotidien/vie-pratique-et-conflits/conflit-logement) - Conséquences du défaut d''assurance.


L''obtention rapide et la conservation précieuse de votre attestation d''assurance habitation sont des étapes cruciales pour votre installation en France. Ce document officiel, qui prouve votre couverture pour le logement, vous sera demandé à la remise des clés et chaque année par votre propriétaire. Téléchargez-le depuis votre espace client en ligne, vérifiez toutes les informations, et archivez-le numériquement et physiquement. Votre diligence à cette étape garantit votre conformité légale et votre protection financière en cas de sinistre.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 23 ---

-- COURS 24 : Ouvrir ses compteurs (Énergie)
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Ouvrir ses compteurs (Énergie) en France : Électricité et Gaz',
  'ouvrir-compteurs-energie-france-electricite-gaz',
  'Ce cours est un guide essentiel pour les étudiants internationaux s''installant dans un nouveau logement en France et devant gérer leurs contrats d''énergie. L''ouverture des compteurs d''électricité et de gaz est une démarche obligatoire et urgente pour avoir l''énergie dans votre logement. Nous vous expliquerons comment relever les compteurs à l''entrée, comment choisir votre fournisseur (EDF, TotalEnergies, Engie, etc.), la différence entre heures creuses et heures pleines pour optimiser votre consommation, et le fonctionnement du compteur Linky. Maîtriser ces étapes est crucial pour éviter de vous retrouver sans électricité ou gaz, gérer votre consommation et comprendre vos factures.',
  'Ouvrir vos compteurs énergie : relevé, choix fournisseur (EDF, Engie), heures creuses/pleines, Linky. Guide complet pour votre logement !',
  'logement',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Savoir relever les compteurs d''électricité et de gaz à votre arrivée", "Comprendre le marché de l''énergie et choisir son fournisseur (EDF, Engie)", "Distinguer les heures creuses/heures pleines pour optimiser sa consommation", "Comprendre le fonctionnement et les avantages du compteur Linky"]'::jsonb,
  '["Avoir trouvé un logement en France"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 24
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Relever les compteurs à l''entrée',
  '# Relever les compteurs à l''entrée

## Pourquoi c''est important ?

Le relevé des compteurs d''électricité et de gaz (et parfois d''eau si individualisé) à votre arrivée dans un nouveau logement en France est une étape absolument cruciale. Il sert à définir précisément votre consommation à partir du jour où vous emménagez. Ne pas effectuer ce relevé, ou le faire de manière imprécise, peut entraîner des facturations erronées : vous pourriez payer la consommation de l''ancien locataire, ou au contraire, ne pas être facturé(e) pour votre propre consommation, créant une dette importante. C''est aussi un élément essentiel pour l''état des lieux. Maîtriser cette étape est fondamental pour garantir la justesse de vos futures factures d''énergie et éviter tout litige financier.


-   Comprendre la nécessité du relevé de compteur pour les contrats d''énergie.
-   Savoir localiser les compteurs d''électricité, de gaz et d''eau dans un logement.


Le relevé de compteur est la "photographie" de votre consommation à un instant T. Il est indispensable pour ouvrir un contrat d''énergie à votre nom.

🔗 [Service-Public.fr : Ouverture de compteur d''électricité](https://www.service-public.fr/particuliers/vosdroits/F31405) - Informations sur les démarches.




-   **Facturation juste** : Le relevé à l''entrée permet à votre nouveau fournisseur d''énergie de facturer votre consommation à partir de la bonne date et du bon index.
-   **Éviter les litiges** : C''est la preuve que vous n''êtes pas responsable de la consommation antérieure.
-   **État des lieux** : Les index des compteurs doivent être notés sur l''état des lieux d''entrée. C''est une information obligatoire.



#### a) Compteur d''électricité
-   **À l''intérieur du logement** : Souvent près de la porte d''entrée, dans un placard, ou dans la cuisine.
-   **À l''extérieur du logement** : Dans le hall d''immeuble, sur le palier, au rez-de-chaussée (pour les immeubles), ou dans un local technique commun. Pour les maisons individuelles, il est souvent sur la façade extérieure ou dans le jardin.
-   **Compteur Linky** : C''est le nouveau compteur communicant, souvent de couleur vert fluo (voir leçon 24.4).

-   **À l''intérieur du logement** : Dans la cuisine (sous l''évier, près de la gazinière), ou dans un placard.
-   **À l''extérieur du logement** : Souvent en bas de l''immeuble, dans un local technique, dans un coffret sur le trottoir ou sur la façade pour les maisons.
-   **Compteur Gazpar** : C''est le nouveau compteur communicant pour le gaz (de couleur verte ou grise).

#### c) Compteur d''eau (si individualisé)
-   **Dans le logement** : Souvent sous l''évier de la cuisine, dans la salle de bain, ou dans un WC.
-   **À l''extérieur du logement** : Dans la cave, dans un local technique, ou dans un regard (petite trappe) dans le sol.
-   **Attention** : Dans de nombreux immeubles, l''eau est collective et incluse dans les charges. Si c''est le cas, il n''y a pas de compteur d''eau individuel à relever.

🔗 [Enedis : Localiser son compteur électrique](https://www.enedis.fr/comment-localiser-son-compteur-electrique) - Guide pour l''électricité.



#### a) Pour l''électricité
-   **Ancien compteur électromécanique** : Notez les chiffres en kWh (kilowattheure) sur fond noir (ou blanc), avant la virgule. S''il y a deux cadrans (heures pleines/heures creuses), notez les deux.
-   **Ancien compteur électronique** : Appuyez plusieurs fois sur le bouton "D" pour faire défiler les informations et afficher l''index (ou les deux index HP/HC).
-   **Compteur Linky** : Appuyez sur le bouton "+" pour faire défiler les informations. Il affichera directement "BASE" (si option base) ou "HEURES PLEINES" et "HEURES CREUSES". Notez les chiffres.

-   **Compteur Gazpar ou ancien compteur** : Notez les chiffres sur fond noir (ou blanc) qui défilent, avant la virgule (les chiffres rouges après la virgule ne sont pas à prendre en compte pour le relevé). L''unité est le m3 (mètre cube).

#### c) Pour l''eau



#### a) Noter sur l''état des lieux
-   **Impératif** : L''agent immobilier ou le propriétaire doit noter les index des compteurs sur l''état des lieux d''entrée. Assurez-vous qu''ils sont écrits et que vous les vérifiez.

-   Lorsque vous souscrirez votre contrat d''électricité et/ou de gaz, le fournisseur vous demandera le "numéro PDL" (Point De Livraison pour l''électricité) ou "PCE" (Point de Comptage et d''Estimation pour le gaz) du logement. Vous le trouverez sur l''ancienne facture d''énergie du logement, ou le fournisseur peut le trouver avec l''adresse et le nom de l''ancien occupant.


-   Le **document d''état des lieux d''entrée**.


-   **Soyez présent(e) lors du relevé** : Ne laissez pas le propriétaire ou l''agence le faire seul.
-   **Demandez le numéro PDL/PCE** au propriétaire ou à l''ancienne facture.
-   **Ouvrez vos contrats d''énergie rapidement** (au moins 15 jours avant votre emménagement) pour éviter une coupure.


-   **Ne pas relever les compteurs** : C''est la cause principale des facturations erronées.
-   **Oublier de noter les index sur l''état des lieux d''entrée** : Votre seule preuve officielle.
-   **Transmettre de faux index** : C''est une fraude.
-   **Attendre d''être installé pour ouvrir les contrats** : Vous risquez d''être coupé.
-   **Confondre les chiffres avant et après la virgule** (pour le gaz et l''eau).


-   🔗 [Service-Public.fr : Ouverture de compteur d''électricité](https://www.service-public.fr/particuliers/vosdroits/F31405) - Guide pour l''électricité.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - Mentionne le relevé des compteurs.
-   🔗 [Energie-info.fr (Médiateur National de l''Énergie)](https://www.energie-info.fr/) - Pour des informations neutres sur les fournisseurs et les démarches.


Relever les compteurs d''électricité et de gaz (et eau si individualisée) à votre entrée dans le logement est une étape indispensable pour garantir la justesse de vos futures factures. Notez précisément les index sur l''état des lieux d''entrée et prenez des photos comme preuves. Ensuite, transmettez ces informations à votre nouveau fournisseur d''énergie. Une bonne gestion de cette étape est cruciale pour éviter les mauvaises surprises financières et assurer votre confort dès votre emménagement en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Choisir son fournisseur (EDF, Total, Engie...)',
  '# Choisir son fournisseur (EDF, Total, Engie...)

## Pourquoi c''est important ?

En France, le marché de l''énergie (électricité et gaz) est ouvert à la concurrence. Vous n''êtes plus obligé(e) de souscrire un contrat chez les fournisseurs historiques (EDF pour l''électricité, Engie pour le gaz). Il existe une multitude de fournisseurs alternatifs qui proposent des offres variées, avec des prix et des services différents. Pour les étudiants internationaux, choisir le bon fournisseur est absolument crucial pour optimiser votre budget énergie et trouver une offre adaptée à votre consommation et vos préférences (prix fixe, prix indexé, électricité verte, service client en ligne). Une mauvaise décision peut vous coûter plus cher que nécessaire chaque mois.


-   Comprendre l''ouverture du marché de l''énergie en France.


Depuis 2007, vous êtes libre de choisir votre fournisseur d''électricité et de gaz. Cette concurrence a créé un marché dynamique avec de nombreuses options pour les consommateurs.

🔗 [Energie-info.fr (Médiateur National de l''Énergie) : Choisir son fournisseur](https://www.energie-info.fr/choisir-son-fournisseur/) - Le site de référence pour une information neutre et indépendante.


### 1. Le marché de l''énergie en France : Historiques vs Alternatifs


-   **EDF (Électricité de France)** : Fournisseur historique d''électricité. Propose toujours le "tarif réglementé de vente" (TRV) de l''électricité, en plus d''offres de marché.
-   **Engie (anciennement GDF Suez)** : Fournisseur historique de gaz. Proposait le TRV du gaz (désormais supprimé). Propose des offres de marché pour le gaz et l''électricité.
-   **Avantages** : Notoriété, souvent perçus comme "sécurisants", vaste réseau d''agences et service client établi.


🔗 [CRE (Commission de Régulation de l''Énergie) : Comparateur d''offres](https://www.cre.fr/Pages-annexes/espace-professionnels/comparateur-offres) - Le comparateur officiel de la CRE.



-   **Comparer le prix du kWh ET l''abonnement** : Le prix de l''électricité/gaz comprend un abonnement fixe et le prix du kWh consommé. Regardez les deux.

-   **Disponibilité** : Horaires d''ouverture, par téléphone, e-mail, chat.

#### c) L''origine de l''électricité (offres vertes)
-   De nombreux fournisseurs proposent de l''électricité "verte", c''est-à-dire provenant de sources d''énergies renouvelables (éolien, solaire, hydraulique). C''est un critère écologique.



C''est simple et rapide.

-   **Nom de l''ancien occupant** (si connu, facilite la recherche du PDL/PCE).
-   **Numéro PDL** (Point De Livraison pour l''électricité) et/ou **PCE** (Point de Comptage et d''Estimation pour le gaz) : Figurent sur l''ancienne facture d''énergie ou peuvent être trouvés par le fournisseur avec l''adresse.
-   Votre **RIB (Relevé d''Identité Bancaire)** pour le prélèvement des factures.

-   **Délai** : Comptez environ 5 à 10 jours ouvrés pour l''activation du contrat. Anticipez pour ne pas avoir de coupure.
-   **Mise en service** : Le gestionnaire de réseau (Enedis pour l''électricité, GRDF pour le gaz) interviendra pour la mise en service si l''énergie est coupée (frais facturés par Enedis/GRDF, mais inclus dans votre première facture).


C''est facile et gratuit.

-   **Liberté de changer** : Les contrats d''énergie pour les particuliers sont sans engagement. Vous pouvez changer de fournisseur à tout moment, sans frais ni préavis.
-   **Pas de coupure** : Le changement est transparent. C''est le nouveau fournisseur qui se charge de résilier votre ancien contrat et d''assurer la continuité de la fourniture.
-   **Résilier son ancien contrat** : Lorsque vous partez d''un logement, vous devez résilier votre contrat d''énergie vous-même.




-   **Utilisez le comparateur officiel de la CRE** (Commission de Régulation de l''Énergie) : `www.energie-info.fr`. Il est neutre et fiable.
-   **Lisez les conditions générales de vente (CGV)** de l''offre avant de signer.
-   **Souscrivez votre contrat d''énergie au moins 15 jours avant votre emménagement** pour éviter toute coupure.


-   **Oublier de résilier son ancien contrat en déménageant** : Vous continueriez à payer l''énergie de votre ancien logement.


-   🔗 [Energie-info.fr (Médiateur National de l''Énergie)](https://www.energie-info.fr/) - Le site de référence pour toutes les informations et le comparateur.
-   🔗 [CRE (Commission de Régulation de l''Énergie) : Comparateur d''offres](https://www.cre.fr/Pages-annexes/espace-professionnels/comparateur-offres) - Le comparateur officiel.
-   🔗 [Enedis : Liste des fournisseurs d''électricité](https://www.enedis.fr/sites/default/files/Liste_des_fournisseurs_delectricite_en_France.pdf) - Liste des fournisseurs.
-   🔗 [Service-Public.fr : Choisir son fournisseur d''énergie](https://www.service-public.fr/particuliers/vosdroits/F31405) - Guide officiel.
-   🔗 [UFC-Que Choisir : Comparateur d''énergie](https://www.quechoisir.org/comparateur-energie-n21674/) - Comparateur et conseils.


Choisir son fournisseur d''électricité et de gaz en France est une démarche importante pour votre budget. Le marché est ouvert à la concurrence, avec des fournisseurs historiques (EDF, Engie) et de nombreux alternatifs. Comparez les offres selon le prix (kWh et abonnement, fixe ou indexé), la qualité du service client et les services additionnels (électricité verte). Utilisez les comparateurs officiels, souscrivez votre contrat à l''avance et n''oubliez pas de noter vos index de compteurs. Un choix éclairé vous permettra de maîtriser vos dépenses énergétiques en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Comprendre les heures creuses / heures pleines',
  '# Comprendre les heures creuses / heures pleines

## Pourquoi c''est important ?

Le système d''heures creuses et heures pleines (HP/HC) est une option tarifaire proposée par les fournisseurs d''électricité en France qui peut avoir un impact significatif sur votre facture d''énergie. Comprendre ce fonctionnement est absolument crucial pour les étudiants internationaux afin d''optimiser leur consommation d''électricité et de réaliser des économies substantielles. Si vous avez des appareils électriques énergivores (machine à laver, lave-vaisselle, chauffe-eau), décaler leur utilisation pendant les heures creuses peut réduire considérablement votre budget. Une mauvaise gestion de cette option peut, au contraire, vous faire payer plus cher. C''est un levier d''économie directe sur vos dépenses courantes.


-   Savoir comment identifier vos plages horaires d''heures creuses.


L''option HP/HC est un mode de tarification de l''électricité qui encourage la consommation en dehors des pics de demande, généralement la nuit et en milieu de journée. Cela contribue à l''équilibre du réseau électrique.





-   Ce sont les périodes où l''électricité est la plus chère. Elles correspondent généralement aux moments de forte demande sur le réseau (matin et fin d''après-midi/soir).

-   Ce sont les périodes où l''électricité est la moins chère. Elles correspondent généralement aux moments de faible demande (la nuit et parfois une ou deux heures en milieu de journée).
-   **Avantage** : Le prix du kWh en heures creuses est significativement inférieur au prix du kWh en heures pleines, qui est lui-même plus élevé que le prix du kWh en option "Base" (tarif unique).



### 2. Identifier vos plages horaires d''heures creuses


-   Les plages horaires d''heures creuses sont définies par le gestionnaire de réseau (Enedis pour 95% du territoire) de manière locale. Elles peuvent varier d''une commune à l''autre, voire d''un quartier à l''autre.

-   **Sur votre facture d''électricité** : Vos plages horaires sont indiquées sur votre facture.
-   **Sur votre contrat d''électricité**.
-   **Sur le site d''Enedis** : Vous pouvez les trouver en renseignant votre adresse.




-   C''est l''appareil le plus important à décaler. La production d''eau chaude représente une part importante de la consommation électrique.
-   Les chauffe-eau électriques peuvent être réglés pour chauffer l''eau uniquement pendant les heures creuses (souvent via un contacteur jour/nuit sur le tableau électrique).

-   Programmez vos machines pour qu''elles se lancent pendant les heures creuses (la nuit, par exemple).


#### d) Chauffage d''appoint électrique
-   Si vous utilisez un chauffage d''appoint, privilégiez son utilisation en heures creuses (ou modérez en heures pleines).

### 4. Comment choisir l''option tarifaire ?


#### a) Option "Base"
-   **Pour qui ?** : Pour les foyers qui consomment peu d''électricité ou qui ne peuvent pas décaler leur consommation (ex: pas de chauffe-eau électrique, pas de gros appareils, ou pas de possibilité de programmation).

#### b) Option "Heures Pleines / Heures Creuses"


-   Votre **facture d''électricité** ou **contrat**.


-   **Simulez votre consommation** : Utilisez les simulateurs en ligne des fournisseurs ou du Médiateur National de l''Énergie pour voir quelle option (Base ou HP/HC) est la plus avantageuse pour vous.
-   **Ne laissez pas d''appareils en veille** : Même en heures creuses, la veille consomme.


-   **Choisir l''option HP/HC sans pouvoir décaler sa consommation** : Le prix des heures pleines est plus cher que l''option Base, vous paierez plus cher.
-   **Ignorer ses plages horaires d''heures creuses** : Vous ne pourrez pas optimiser.
-   **Ne pas tenir compte de l''abonnement** : L''abonnement en HP/HC est plus cher qu''en option Base. Il faut que les économies sur le kWh compensent cet abonnement.
-   **Oublier d''activer le contacteur jour/nuit pour le chauffe-eau** : S''il est présent.


-   🔗 [Energie-info.fr (Médiateur National de l''Énergie) : Comprendre les offres](https://www.energie-info.fr/comprendre-les-offres/) - Très bonnes explications sur les options tarifaires.
-   🔗 [Enedis : Heures pleines / Heures creuses](https://www.enedis.fr/heures-pleines-heures-creuses) - Le gestionnaire du réseau explique l''option.
-   🔗 [Service-Public.fr : Tarif de l''électricité](https://www.service-public.fr/particuliers/vosdroits/F31405) - Informations officielles sur les tarifs.
-   🔗 [ADEME (Agence de la transition écologique) : Réduire sa consommation d''énergie](https://www.ademe.fr/particuliers-eco-citoyens/habitation/economiser-lenergie) - Conseils pour la maîtrise de l''énergie.
-   🔗 [CRE (Commission de Régulation de l''Énergie) : Comparateur d''offres](https://www.cre.fr/Pages-annexes/espace-professionnels/comparateur-offres) - Pour simuler votre consommation avec les différentes options.


Comprendre le système d''heures creuses et heures pleines est crucial pour optimiser votre facture d''électricité en France. Le prix du kWh est moins cher pendant les 8 heures creuses par jour, souvent la nuit. Si vous avez des appareils énergivores (chauffe-eau, lave-linge), décalez leur utilisation pendant ces périodes. Vérifiez vos plages horaires sur votre facture ou le site d''Enedis et simulez la rentabilité de l''option HP/HC par rapport à l''option Base. Une bonne gestion vous permettra de réaliser des économies significatives sur votre budget énergie.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Le compteur Linky : Comment ça marche',
  '# Le compteur Linky : Comment ça marche

## Pourquoi c''est important ?

Le compteur Linky est le nouveau compteur électrique communicant déployé dans tous les foyers français. Que vous emménagiez dans un logement neuf ou ancien, vous êtes très susceptible de le rencontrer. Comprendre son fonctionnement, ses avantages (et ses controverses), et savoir comment l''utiliser est absolument crucial pour les étudiants internationaux. Linky simplifie certaines démarches (relevés à distance, changement de puissance), mais il est aussi important de savoir comment lire sa consommation, gérer ses options tarifaires, et comprendre l''impact de ce nouveau compteur sur votre vie quotidienne et votre facture d''électricité.


-   Définir ce qu''est le compteur Linky et son déploiement en France.
-   Savoir lire sa consommation et ses options tarifaires directement sur l''écran Linky.


Le compteur Linky remplace progressivement les anciens compteurs d''électricité. Il a été installé dans plus de 35 millions de foyers français. C''est un élément clé de la transition énergétique.

🔗 [Enedis : Le compteur Linky](https://www.enedis.fr/le-compteur-linky) - Le site officiel d''Enedis (gestionnaire du réseau) sur le compteur Linky.


### 1. Qu''est-ce que le compteur Linky ?

Le nouveau compteur électrique "intelligent".

-   **Déploiement** : Installé gratuitement par Enedis (le gestionnaire du réseau de distribution d''électricité) dans tous les foyers français.
    -   **Interventions à distance** : Changement de puissance, mise en service (ouverture de compteur) peuvent se faire à distance en moins de 24h, sans rendez-vous physique d''un technicien (sauf cas de coupure prolongée).



### 2. Lire sa consommation et ses options tarifaires sur l''écran Linky

L''écran affiche toutes les informations nécessaires.

    -   **Bouton "+" (plus)** : Permet de faire défiler les informations sur l''écran.
    -   **Bouton "-" (moins)** : Permet de revenir en arrière ou d''afficher certaines informations spécifiques.

#### b) Informations affichées (en faisant défiler avec le bouton "+")
    -   Si vous êtes en option "Base" : L''écran affichera "BASE" suivi de votre consommation en kWh.
    -   Si vous êtes en option "Heures Pleines / Heures Creuses" : L''écran affichera "HEURES PLEINES" puis "HEURES CREUSES" suivies des consommations correspondantes en kWh.
-   **Puissance souscrite** : Affiche la puissance de votre compteur en kVA (kilovoltampère), par exemple "P SOUSCRITE 6 kVA".
-   **Puissance instantanée** : "P MAX" ou "P APP" (puissance appelée) : Affiche votre consommation électrique en temps réel à un instant T (en watts). Utile pour voir quels appareils consomment le plus.
-   **Numéro de PDL** (Point De Livraison) : C''est le numéro unique de votre compteur (14 chiffres). Il est utile pour souscrire un contrat d''électricité.

🔗 [Enedis : Comment lire mon compteur Linky ?](https://www.enedis.fr/comment-lire-mon-compteur-linky) - Guide visuel d''Enedis.



-   Vos factures seront basées sur votre consommation réelle, ce qui évite les surprises et les régularisations importantes en fin d''année.

-   Lors d''un emménagement, la mise en service (ouverture du compteur) est plus rapide (moins de 24h) et coûte moins cher qu''avec un ancien compteur, car elle se fait à distance.
-   Plus besoin d''attendre le passage d''un technicien.





-   **Identifiez les pics** : Repérez les moments de la journée où vous consommez le plus et essayez d''optimiser l''utilisation de vos appareils (ex: décaler machine à laver en heures creuses).
-   **Ajustez votre puissance** : Si votre compteur disjoncte souvent, vous avez peut-être besoin d''une puissance supérieure. Si vous n''avez jamais de problème, vous pourriez peut-être baisser votre puissance et faire des économies sur l''abonnement.


-   Votre **facture d''électricité** (pour le PDL).
-   Un **smartphone** ou **ordinateur** (pour l''espace client Enedis).


-   **Autorisez l''accès à vos données de consommation** pour un suivi détaillé.


-   **Ne pas consulter son espace client Enedis** : Vous perdriez l''opportunité de suivre et d''optimiser votre consommation.
-   **Penser que le Linky coûte cher au locataire** : L''installation est gratuite, et les interventions à distance sont moins chères.
-   **Ignorer les informations sur les données** : Vous êtes propriétaire de vos données de consommation. C''est vous qui autorisez Enedis à les communiquer à votre fournisseur.


-   🔗 [Energie-info.fr (Médiateur National de l''Énergie) : Le compteur Linky](https://www.energie-info.fr/comprendre-les-offres/le-compteur-linky/) - Informations neutres et objectives.
-   🔗 [ADEME (Agence de la transition écologique) : Réduire sa consommation](https://www.ademe.fr/particuliers-eco-citoyens/habitation/economiser-lenergie) - Conseils pour maîtriser l''énergie.


Le compteur Linky est le nouveau compteur électrique communicant, qui simplifie de nombreuses démarches (relevés à distance, mise en service rapide) et vous permet un suivi détaillé de votre consommation. Apprenez à lire les index (Base, HP/HC) et la puissance souscrite sur son écran. Créez votre espace client Enedis pour accéder à vos données de consommation et optimiser votre utilisation de l''électricité, notamment en décalant les usages les plus énergivores pendant les heures creuses. Linky est un outil précieux pour maîtriser votre budget énergie en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 24 ---

-- COURS 25 : Internet et Fibre
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Internet et Fibre en France : Connectez votre logement',
  'internet-fibre-france-connecter-logement',
  'Ce cours est un guide indispensable pour les étudiants internationaux souhaitant connecter leur logement à Internet en France. Le choix d''un fournisseur d''accès (Orange, Free, SFR, Bouygues Telecom) et du type de connexion (Fibre optique, ADSL, 4G/5G Box) peut être complexe. Nous vous expliquerons comment tester l''éligibilité de votre adresse à la fibre, la distinction entre les offres "Box" et les "Forfaits 4G/5G" (idéaux pour les petits budgets ou les déménagements fréquents), les étapes de l''installation (rendez-vous technicien), et les pièges à éviter lors de la résiliation (frais cachés). Maîtriser ce sujet est crucial pour rester connecté(e) et gérer votre budget Internet efficacement.',
  'Internet et Fibre en France : éligibilité, Box vs 4G/5G, installation, résiliation. Restez connecté et maîtrisez votre budget !',
  'logement',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Savoir tester l''éligibilité de son adresse à la fibre optique", "Distinguer les offres "Box" des "Forfaits 4G/5G" et leurs avantages", "Comprendre les étapes et les délais d''installation (technicien)", "Identifier les frais cachés et les pièges lors de la résiliation d''un contrat"]'::jsonb,
  '["Avoir trouvé un logement en France"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 25
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Tester l''éligibilité de son adresse',
  '# Tester l''éligibilité de son adresse

## Pourquoi c''est important ?

Avant de souscrire à une offre Internet en France, la première étape et la plus cruciale est de tester l''éligibilité de votre adresse. Toutes les technologies (fibre optique, ADSL, VDSL) ne sont pas disponibles partout. Ne pas vérifier cette éligibilité, c''est risquer de souscrire un contrat qui ne fonctionnera pas, de subir des délais d''installation interminables, ou de se retrouver avec une connexion lente et instable. Pour les étudiants internationaux, souvent pressés de se connecter et peu familiers avec le déploiement du réseau français, cette vérification est absolument essentielle pour faire un choix réaliste, éviter les mauvaises surprises et garantir un accès internet rapide et fiable dans votre nouveau logement.


-   Comprendre l''importance de l''éligibilité de votre adresse aux différentes technologies.
-   Savoir comment tester l''éligibilité de votre adresse auprès des différents opérateurs.


Le déploiement de la fibre optique en France progresse rapidement, mais l''ADSL (et VDSL) reste la technologie dominante dans de nombreuses zones. Votre adresse est le facteur clé pour déterminer les offres disponibles.





-   **Qu''est-ce que c''est ?** : C''est la technologie la plus rapide et la plus stable. La fibre arrive directement jusqu''à votre logement.

#### b) L''ADSL / VDSL
-   **Qu''est-ce que c''est ?** : Utilise le réseau téléphonique cuivre (les anciennes lignes de téléphone fixe).
-   **Débit** : Moins rapide que la fibre (généralement quelques Mb/s pour l''ADSL, jusqu''à 50-100 Mb/s pour le VDSL si proche du répartiteur). Le débit dépend de la distance entre votre logement et le central téléphonique.

-   **Qu''est-ce que c''est ?** : Utilise le réseau câblé (type Numericable, maintenant intégré à SFR). La fibre arrive au pied de l''immeuble, puis la connexion est en câble coaxial jusqu''au logement.


### 2. Comment tester l''éligibilité de son adresse ?


-   Chaque opérateur (Orange, Free, SFR, Bouygues Telecom) propose un test d''éligibilité sur son site internet.
-   **Saisissez votre adresse exacte** : Code postal, ville, nom de rue, numéro, étage, numéro d''appartement. Plus c''est précis, plus le résultat sera fiable.
-   **Numéro de ligne téléphonique (facultatif mais utile)** : Si vous avez le numéro de l''ancienne ligne fixe du logement, cela peut affiner le test d''éligibilité ADSL.

#### b) Sur le site de l''Arcep (carte de déploiement)
-   Le site de l''Arcep (`cartefibre.arcep.fr`) est une carte interactive qui montre le déploiement de la fibre optique par adresse. C''est une source d'information neutre et fiable.
-   Vous pouvez zoomer sur votre adresse pour voir si elle est "raccordable" à la fibre.

-   Il vous listera les offres disponibles chez l''opérateur.


-   L''**adresse exacte de votre logement**.
-   Éventuellement le **numéro de l''ancienne ligne fixe** (si vous l''avez).


-   **Faites le test sur plusieurs sites d''opérateurs** : Les résultats peuvent parfois varier légèrement.
-   **Si vous êtes éligible à la fibre, privilégiez-la** : C''est la meilleure qualité de connexion.
-   **Ne vous fiez pas uniquement aux promesses de débit maximal** : Le débit réel peut varier en fonction de nombreux facteurs (équipement, nombre d''utilisateurs sur le réseau, etc.).
-   **Demandez à l''ancien locataire ou au propriétaire** : Ils peuvent vous renseigner sur la connexion précédente.


-   **Souscrire un contrat sans tester l''éligibilité** : Vous risquez des problèmes d''installation ou une mauvaise qualité de service.
-   **Confondre les technologies** : Ne payez pas un prix fibre pour de l''ADSL.
-   **Ne pas être assez précis sur l''adresse** : Surtout en immeuble (étage, numéro d''appartement sont importants pour la fibre).
-   **Oublier que l''éligibilité est une chose, le raccordement une autre** : Être "éligible" ne signifie pas que la fibre est déjà installée dans votre appartement (voir leçon sur l''installation).
-   **Se laisser démarcher par téléphone** avec des offres qui semblent trop belles sans vérifier l''éligibilité.


-   🔗 [Orange : Test d''éligibilité](https://boutique.orange.fr/eligibilite)
-   🔗 [Free : Test d''éligibilité](https://www.free.fr/freebox/informations/test-eligibilite-freebox/)
-   🔗 [SFR : Test d''éligibilité](https://www.sfr.fr/box-internet/test-eligibilite-adsl-vdsl-fibre.html)
-   🔗 [Bouygues Telecom : Test d''éligibilité](https://www.bouyguestelecom.fr/offres-internet/test-eligibilite)
-   🔗 [Service-Public.fr : Fournisseurs d''accès à internet](https://www.service-public.fr/particuliers/vosdroits/F3025) - Guide général.


Tester l''éligibilité de votre adresse est la première étape indispensable pour choisir votre offre Internet en France. Utilisez les sites des opérateurs ou la carte de l''Arcep pour savoir si vous êtes éligible à la fibre optique (rapide et stable) ou à l''ADSL/VDSL. Soyez précis(e) sur votre adresse et n''hésitez pas à tester plusieurs opérateurs. Cette vérification vous permettra de choisir une connexion adaptée à vos besoins et à votre budget, garantissant un accès internet fiable dans votre nouveau logement.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Box vs Forfait 4G/5G',
  '# Box vs Forfait 4G/5G

## Pourquoi c''est important ?

Une fois l''éligibilité de votre adresse testée, vous devrez choisir le type de connexion internet pour votre logement. Le choix traditionnel est la "Box Internet" (Fibre ou ADSL), mais une alternative de plus en plus pertinente, surtout pour les étudiants internationaux, est le "Forfait 4G/5G" via une Box 4G/5G ou un hotspot mobile. Comprendre les avantages et inconvénients de chaque solution est absolument crucial pour adapter votre choix à vos besoins réels (débit, stabilité, mobilité, durée de l''engagement, coût) et à la durée de votre séjour en France. Une mauvaise décision peut entraîner un surcoût ou une connexion inadaptée à votre usage.


-   Distinguer les offres "Box Internet" (Fibre/ADSL) des "Forfaits 4G/5G".
-   Comprendre l''intérêt des forfaits 4G/5G (mobilité, sans engagement, rapidité d''installation).
-   Maîtriser les conseils pour choisir la solution la plus adaptée à votre situation d''étudiant.


Votre mode de vie et la durée de votre séjour sont les facteurs clés pour orienter votre choix entre ces deux grandes familles d''offres internet.





-   Une "Box" est un boîtier fourni par un opérateur (Orange, Free, SFR, Bouygues Telecom) qui se connecte au réseau fixe (fibre optique ou ligne ADSL/VDSL) de votre logement.

-   **Volume de données illimité** : La consommation de données est illimitée, vous n''avez pas à vous soucier d''un dépassement.
-   **Fiabilité** : Moins sujette aux variations de signal qu''un réseau mobile.

-   **Installation** : Nécessite souvent l''intervention d''un technicien (pour la fibre) et peut prendre du temps (plusieurs semaines).
-   **Coût** : Les offres peuvent être plus chères (environ 20-50€/mois) et incluent des frais de location de la Box, des frais d''ouverture/fermeture de service.

🔗 [Arcep : Choisir son fournisseur d''accès internet](https://www.arcep.fr/demarches-et-services/les-offres-et-les-prix/choisir-son-fournisseur-d-acces-a-internet.html) - Informations sur les offres.



-   **Box 4G/5G** : C''est un petit boîtier qui capte le signal 4G/5G et émet du Wi-Fi dans votre logement.
-   **Hotspot mobile / Partage de connexion** : Votre smartphone peut faire office de hotspot pour partager sa connexion 4G/5G avec d''autres appareils.

-   **Rapidité d''installation** : Vous branchez la Box 4G/5G, et ça marche ! Pas d''intervention de technicien. Idéal si vous avez besoin d''internet immédiatement.

-   **Volume de données limité** : C''est le principal inconvénient. Les forfaits 4G/5G ont souvent un volume de données mensuel limité (100 Go, 200 Go, etc.). Si vous dépassez, le débit est réduit ou vous payez un supplément.

🔗 [Orange : Les offres 4G Box](https://boutique.orange.fr/internet/4g-home/) - Exemple d''offre.
🔗 [Free : Les offres Freebox 4G](https://www.free.fr/freebox/forfait-freebox-4g-plus/) - Exemple d''offre.



    -   **Court séjour (moins d''un an) ou projets incertains** : Forfait 4G/5G sans engagement.
    -   **Long séjour (plus d''un an) et besoin de stabilité** : Box Fibre (si éligible) ou ADSL.
-   **Budget** : Comparez les coûts mensuels, les frais d''installation/résiliation, et le coût du boîtier (pour la Box 4G/5G).




-   **Testez la couverture 4G/5G** à votre adresse avant de prendre un forfait 4G/5G Box (demandez une période d''essai si possible).
-   **Demandez si le logement est déjà raccordé à la fibre** : Si oui, l''installation de la Box fibre est plus rapide.


-   **S''engager sur 12 ou 24 mois avec une Box fibre/ADSL si votre séjour est court** : Vous paierez des frais de résiliation.




Le choix entre une Box Internet (Fibre/ADSL) et un forfait 4G/5G est crucial pour votre connexion en France. La Box fixe offre stabilité, débit illimité et services TV/téléphone, mais demande plus de temps pour l''installation et un engagement. Le forfait 4G/5G est rapide à installer, mobile et souvent sans engagement, idéal pour des séjours courts, mais avec un volume de données limité. Évaluez votre durée de séjour, votre consommation et votre besoin de mobilité pour faire le choix le plus adapté et optimiser votre budget Internet.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'L''installation : Rendez-vous technicien',
  '# L''installation : Rendez-vous technicien

## Pourquoi c''est important ?

Si vous avez opté pour une Box Internet fixe (Fibre ou ADSL/VDSL) pour votre logement en France, l''étape de l''installation est cruciale. Elle nécessite souvent l''intervention d''un technicien, et l''organisation de ce rendez-vous peut être source de stress, surtout si vous n''êtes pas familier(ère) avec les pratiques locales. Ne pas comprendre les délais, les modalités de prise de rendez-vous, ou les contraintes de l''installation peut entraîner des retards importants dans la mise en service de votre connexion internet. Pour les étudiants internationaux, obtenir rapidement une connexion est essentiel pour les études et la vie quotidienne. Maîtriser cette étape est donc fondamental pour garantir une installation fluide et rapide de votre Box.


-   Comprendre la nécessité d''un rendez-vous technicien pour l''installation de la Box.
-   Identifier les délais typiques pour l''intervention du technicien.
-   Maîtriser les conseils pour faciliter l''installation et résoudre les problèmes éventuels.


L''installation de la fibre optique nécessite le raccordement de votre logement au réseau optique, tandis que l''ADSL peut nécessiter l''activation d''une ligne téléphonique. Dans les deux cas, une intervention technique est souvent requise.

🔗 [Orange : Préparer mon rendez-vous d''installation fibre](https://assistance.orange.fr/livebox-modem/toutes-les-livebox/installer-et-utiliser/preparer-mon-rdv-d-installation-fibre_212004-796525) - Exemple de guide d''un opérateur.


### 1. La nécessité d''un rendez-vous technicien


-   **Raccordement au logement** : Même si la fibre est déployée dans votre immeuble ou quartier, elle doit être raccordée de l''extérieur jusqu''à l''intérieur de votre appartement. C''est le rôle du technicien.
-   **Durée** : L''intervention peut durer entre 1h et 4h, selon la complexité du raccordement.

#### b) Pour l''ADSL / VDSL
-   **Activation de la ligne** : Si la ligne téléphonique est inactive (car l''ancien locataire a résilié), un technicien peut devoir intervenir pour la réactiver au niveau du répartiteur.
-   **Moins d''interventions à domicile** : Souvent, pour l''ADSL, l''activation se fait à distance et vous n''avez pas besoin de la présence d''un technicien chez vous, sauf si la ligne présente des problèmes.



-   **ADSL** : Les délais sont souvent plus courts (quelques jours à 2 semaines) si l''activation peut se faire à distance.

-   Lors de la souscription de votre offre internet, l''opérateur vous proposera des créneaux de rendez-vous.
-   **Soyez flexible** : Plus vous êtes flexible sur les horaires, plus vous aurez de chances d''avoir un rendez-vous rapidement.



-   **Soyez présent(e)** : Votre présence est obligatoire. Le technicien aura besoin d''accéder à votre logement, et potentiellement aux parties communes (local technique, colonne montante de l''immeuble).
-   **Informez votre propriétaire/gardien** : Si l''accès aux parties communes nécessite une clé ou l''ouverture de portes.
-   **Libérez l''espace** : Dégagez l''endroit où la Box et la prise devront être installées.

-   Votre **pièce d''identité**.
-   Votre **contrat avec l''opérateur**.
-   L''**ancienne facture d''électricité** (pour savoir où se trouve le compteur électrique et le PDL, si le technicien en a besoin).

-   N''hésitez pas à lui poser des questions sur l''emplacement de la PTO, le fonctionnement de la Box, ou la vitesse de connexion.

### 4. Que faire en cas de problème ou d''absence ?


-   Si vous devez annuler ou reporter, faites-le le plus tôt possible auprès de votre opérateur. Des frais peuvent être facturés en cas d''annulation tardive ou d''absence non signalée.


#### c) Problème après l''installation


-   Votre **contrat d''abonnement Internet**.
-   Votre **pièce d''identité**.
-   Vos **coordonnées de l''opérateur**.


-   **Anticipez l''installation** : Souscrivez votre offre internet dès que vous avez un logement pour obtenir le rendez-vous technicien le plus tôt possible.
-   **Soyez courtois avec le technicien** : Un bon contact facilite l''intervention.
-   **Testez la connexion dès l''installation terminée** : Vérifiez que tout fonctionne correctement (Wi-Fi, débit, services TV si inclus).


-   **Ne pas informer le technicien des spécificités du logement** (ex: pas d''accès au local technique).
-   **Oublier d''annuler ou de reporter le rendez-vous** en cas d''imprévu.


-   🔗 [Orange : Préparer mon rendez-vous d''installation fibre](https://assistance.orange.fr/livebox-modem/toutes-les-livebox/installer-et-utiliser/preparer-mon-rdv-d-installation-fibre_212004-796525) - Exemple de guide d''un opérateur.
-   🔗 [Arcep (Autorité de régulation des communications électroniques, des postes et de la distribution de la presse)](https://www.arcep.fr/) - L''autorité régulatrice des télécoms.
-   🔗 [UFC-Que Choisir : Problèmes avec son fournisseur d''accès internet](https://www.quechoisir.org/fiche-pratique-internet-comment-resoudre-un-litige-avec-son-fai-n100508/) - Conseils en cas de problème.
-   🔗 [Les sites des opérateurs (Orange, Free, SFR, Bouygues Telecom)](https://www.orange.fr/) - Pour leurs propres guides d''installation.


L''installation de votre Box Internet (Fibre ou ADSL) nécessite souvent un rendez-vous avec un technicien. Anticipez les délais (2 à 4 semaines), soyez présent(e) et préparez l''accès au logement. N''hésitez pas à poser des questions et à tester la connexion avant le départ du technicien. Une bonne préparation garantit une installation fluide et un accès rapide à Internet, essentiel pour vos études et votre vie quotidienne en France. En cas de problème, contactez immédiatement votre opérateur.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Résiliation : Attention aux frais',
  '# Résiliation : Attention aux frais

## Pourquoi c''est important ?

Lorsque vous quittez un logement en France, la résiliation de votre contrat Internet est une démarche administrative obligatoire. Cependant, cette étape est souvent source de frais inattendus et de litiges avec les opérateurs. Comprendre les conditions de résiliation (engagement, frais de résiliation, restitution du matériel) est absolument crucial pour les étudiants internationaux, car vous pourriez être amené(e) à déménager ou à quitter la France plus tôt que prévu. Ne pas maîtriser ces règles peut vous coûter des centaines d''euros de frais cachés ou vous laisser avec une dette envers l''opérateur. Protéger votre budget et éviter les mauvaises surprises est l''objectif de cette leçon.


-   Comprendre la notion d''engagement et son impact sur la résiliation.





### 1. Comprendre l''engagement et son impact sur les frais de résiliation

L''engagement est la clé des frais.

-   **Frais en cas de résiliation anticipée** : Si vous résiliez avant la fin de la période d''engagement, l''opérateur vous facturera :
    -   La totalité des mensualités restantes jusqu''au 12ème mois d''abonnement.

-   De plus en plus d''offres (notamment les Box 4G/5G, mais aussi certaines Box fixes) sont proposées "sans engagement".
-   **Avantage** : Vous pouvez résilier à tout moment, sans frais de résiliation anticipée. Seuls les frais de résiliation fixes s''appliqueront.



Plusieurs coûts peuvent s''ajouter.

-   Tous les opérateurs facturent des "frais de résiliation fixes" (ou "frais de fermeture de service").
-   **Montant** : Ils sont généralement d''environ **49€ à 59€**, quel que soit l''opérateur.
-   **Pour qui ?** : Ils s''appliquent à tous les contrats résiliés, même sans engagement, car ils couvrent les coûts administratifs et techniques de fermeture de la ligne.

-   **Restitution du matériel** : Vous devez restituer à l''opérateur tout le matériel (Box internet, décodeur TV, télécommande, câbles) en parfait état de fonctionnement.
-   **Pénalités** : Si vous ne restituez pas le matériel, s''il est abîmé, ou si vous le renvoyez en retard, l''opérateur vous facturera des pénalités qui peuvent être très élevées (plusieurs centaines d''euros par équipement).

-   Si la fibre a été installée gratuitement dans votre logement, il n''y a pas de frais de "dé-raccordement". Cependant, des frais d''intervention peuvent être facturés si le technicien doit intervenir pour un problème lié à votre départ.



-   **Contenu** : Indiquez votre numéro de client, l''adresse du logement, et la date souhaitée de fin de contrat.
-   **Préavis** : Un préavis de 10 jours est souvent appliqué à compter de la réception de votre lettre par l''opérateur.

-   L''opérateur vous enverra un bon de retour (souvent prépayé) pour renvoyer le matériel par colis, généralement via un point relais.
-   **Conservez la preuve de dépôt du colis** : C''est votre seule preuve de restitution.





-   **Photographiez le matériel** avant de l''emballer pour prouver son bon état.


-   **Oublier l''engagement** : Et être surpris par les frais de résiliation anticipée.
-   **Ne pas restituer le matériel ou le restituer en retard** : Des pénalités très lourdes s''appliquent.
-   **Ne pas envoyer en recommandé avec accusé de réception** : Vous n''aurez pas de preuve de l''envoi.


-   🔗 [Service-Public.fr : Résiliation d''un abonnement internet](https://www.service-public.fr/particuliers/vosdroits/F18230) - La référence pour la résiliation.
-   🔗 [La Poste : Envoi d''une lettre recommandée avec accusé de réception](https://www.laposte.fr/particulier/produits/envoyer-une-lettre-recommandee) - Pour la preuve d''envoi.


La résiliation de votre contrat Internet en France est une étape importante lors de votre départ, et souvent source de frais. Comprenez l''impact de votre période d''engagement (12 ou 24 mois) sur les frais de résiliation anticipée. Tous les contrats entraînent des frais fixes (environ 49-59€) et des pénalités si le matériel (Box, décodeur) n''est pas restitué en bon état et dans les délais. Envoyez votre lettre de résiliation par recommandé avec accusé de réception et conservez précieusement la preuve de restitution du matériel. Une gestion rigoureuse de cette démarche vous permettra de minimiser les coûts et de quitter votre logement en toute sérénité.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 25 ---

-- COURS 26 : La CAF et les APL : Éligibilité
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '4a5b6c7d-8e9f-4102-a3b4-c5d6e7f8a9b0',
  'CAF et APL : Comprendre votre éligibilité aux aides au logement',
  'caf-apl-eligibilite-aides-logement',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux et jeunes résidents en France qui souhaitent bénéficier des Aides Personnalisées au Logement (APL) de la CAF. Comprendre les critères d''éligibilité est la première étape cruciale pour s''assurer que vous pouvez prétendre à cette aide précieuse qui allège considérablement le coût de votre loyer. Nous vous détaillerons comment le calcul des APL est effectué (prenant en compte le loyer, la zone géographique et vos revenus), nous ferons une démonstration en direct du simulateur CAF, et nous aborderons les conditions spécifiques pour les étrangers, notamment l''importance de votre titre de séjour. Maîtriser ces informations est fondamental pour optimiser votre budget logement et sécuriser votre situation financière.',
  'APL CAF : Éligibilité, calcul (loyer, zone, revenus), simulateur et conditions spécifiques pour étrangers. Optimisez votre budget !',
  'logement',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre les principes du calcul des APL (loyer, zone, revenus)", "Savoir utiliser le simulateur CAF pour estimer ses droits", "Identifier les conditions d''éligibilité spécifiques aux étrangers (titre de séjour)", "Maîtriser les critères pour optimiser ses chances de bénéficier des APL"]'::jsonb,
  '["Avoir un logement en France", "Avoir un titre de séjour valide (ou VLS-TS validé)"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 26
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'b5c6d7e8-9f0a-4102-b3c4-d5e6f7a8b9c0',
  '4a5b6c7d-8e9f-4102-a3b4-c5d6e7f8a9b0',
  'Comprendre le calcul (Loyer, Zone, Revenus)',
  '# Comprendre le calcul (Loyer, Zone, Revenus)

## Pourquoi c''est important ?

Les Aides Personnalisées au Logement (APL) de la Caisse d''Allocations Familiales (CAF) sont des prestations sociales cruciales pour de nombreux étudiants internationaux en France. Cependant, le calcul de ces aides est complexe et prend en compte de nombreux paramètres. Comprendre les trois facteurs principaux (le montant du loyer, la zone géographique du logement et vos ressources financières) est absolument essentiel pour estimer vos droits, anticiper le montant de l''aide, et vérifier la justesse du calcul de la CAF. Une mauvaise compréhension peut vous faire manquer une aide précieuse ou ne pas contester un montant erroné. C''est la base pour optimiser votre budget logement.


-   Comprendre l''impact du montant de votre loyer sur le calcul.






Ce n''est pas le loyer "brut" qui compte.

-   **Charges comprises (CC) ou hors charges (HC)** : Le calcul se fait sur le loyer toutes charges comprises (loyer nu + charges forfaitaires ou provisionnelles). C''est pourquoi le loyer "CC" est important.
-   **Aide personnalisée** : Le montant de l''APL est ensuite une partie de ce loyer plafonné, diminué de votre participation personnelle.


🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les aides au logement](https://www.anil.org/votre-projet/vous-etes-locataire/les-aides-au-logement/les-aides-au-logement/) - Guide sur les APL.


L''emplacement a un impact majeur.






-   **Types de revenus** : Salaires, gratifications de stage imposables, bourses imposables, revenus fonciers, revenus d''activité non salariée.
-   **Absence de revenus** : Si vous n''aviez pas de revenus ou de très faibles revenus il y a deux ans (ce qui est souvent le cas pour les étudiants internationaux primo-arrivants), c''est un avantage pour le calcul des APL.

-   Si vous possédez un patrimoine important (immobilier, placements financiers), une "assiette forfaitaire" peut être prise en compte comme ressource. Cela est rare pour les étudiants.

-   Pour les étudiants, la CAF peut appliquer une "ressource forfaitaire" si vous êtes à la charge fiscale de vos parents, même si vous n''avez pas de revenus propres. Cependant, cette ressource forfaitaire est souvent basse pour les étudiants et ne pénalise pas trop le calcul.

🔗 [Impots.gouv.fr : L''avis d''imposition (ASDIR)](https://www.impots.gouv.fr/portail/particulier/avis-de-situation-declarative-limpot-sur-le-revenu-asdir) - C''est le document que la CAF utilise.




-   Il doit être "conventionné APL", c''est-à-dire que le propriétaire a signé une convention avec l''État. La plupart des logements sociaux et des résidences étudiantes sont conventionnés. Pour les logements privés, c''est à vérifier.


-   L''**adresse complète de votre logement**.
-   Vos **informations de revenus N-2** (ex: avis d''imposition ou de non-imposition/ASDIR).


-   **Ne pas confondre loyer "nu" et loyer "toutes charges comprises"**. Le calcul APL se fait sur le loyer CC.
-   **Vérifiez si votre logement est conventionné APL** (demandez au propriétaire ou à l''agence).


-   **Sous-estimer l''importance de la déclaration de revenus N-2** : C''est la base du calcul.
-   **Oublier d''informer la CAF de tout changement de situation** (déménagement, changement de revenus, etc.).
-   **Penser que l''APL est un droit automatique** : Il y a des conditions.
-   **Ne pas avoir de titre de séjour valide** : C''est une condition sine qua non.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Aides au logement](https://www.anil.org/votre-projet/vous-etes-locataire/les-aides-au-logement/) - Explications claires.
-   🔗 [Légifrance : Code de la construction et de l''habitation (Articles sur les APL)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006074096/) - Le cadre légal.


Le calcul des APL par la CAF repose sur trois piliers : le montant de votre loyer (plafonné), la zone géographique de votre logement, et vos ressources financières (généralement celles de N-2). Il est crucial de comprendre que même avec de faibles revenus, vous pourriez être éligible. Ne négligez pas la déclaration de revenus annuelle et vérifiez si votre logement est conventionné. Une bonne compréhension de ces critères vous permettra d''estimer vos droits et d''optimiser votre budget logement en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'c5d6e7f8-a9b0-4102-b3c4-d5e6f7a8b9c0',
  '4a5b6c7d-8e9f-4102-a3b4-c5d6e7f8a9b0',
  'Le simulateur CAF : Démo en direct',
  '# Le simulateur CAF : Démo en direct

## Pourquoi c''est important ?

Le simulateur en ligne de la Caisse d''Allocations Familiales (CAF) est un outil indispensable pour tout étudiant international souhaitant obtenir une estimation rapide et fiable de ses droits aux Aides Personnalisées au Logement (APL). Il est souvent complexe de comprendre les critères de calcul, et le simulateur démystifie ce processus en vous donnant une idée concrète du montant que vous pourriez percevoir. Ne pas utiliser cet outil, c''est risquer de passer à côté d''une aide financière significative ou de sous-estimer votre budget. Ce cours vous guidera à travers une démonstration en direct du simulateur, étape par étape, pour que vous puissiez l''utiliser en toute autonomie et anticiper vos futures aides.


-   Comprendre l''utilité du simulateur CAF pour les aides au logement.
-   Maîtriser les conseils pour interpréter les résultats et ne pas commettre d''erreurs.


Le simulateur CAF est accessible gratuitement sur le site `caf.fr`. Il est anonyme et ne demande pas de création de compte pour une première estimation. C''est le premier réflexe à avoir avant de déposer une demande.





-   Cliquez sur "Simuler mes droits" (souvent en page d''accueil ou dans la rubrique "Mes services en ligne").

#### b) Choisir l''aide à simuler
-   Sélectionnez l''option "Logement".



-   **"Vous êtes célibataire"** (ou "en couple", "parents isolés" si applicable).
-   **"Nombre d''enfants à charge"** (généralement 0 pour un étudiant seul).
-   **"Grossesse en cours"** (si applicable).

-   **"Votre situation actuelle"** : Étudiant, salarié, sans activité, etc.
-   **"Vos revenus N-2"** : Très important. Saisissez vos revenus nets imposables de l''année N-2 (l''année d''il y a deux ans).
    -   Si vous étiez à l''étranger et sans revenus en France, indiquez "0".
    -   **Important** : Le simulateur peut aussi vous demander vos revenus actuels pour une estimation plus fine, car la CAF peut tenir compte d''un "démarrage de droit" si vos revenus actuels sont très différents de N-2.

-   **Date d''emménagement** : La date à laquelle vous allez entrer dans les lieux.
-   **Logement conventionné** : Demandez à votre propriétaire ou agence si le logement est "conventionné APL". La plupart des résidences étudiantes le sont. Si vous ne savez pas, indiquez "oui" pour avoir l''estimation APL, sinon vous aurez l''ALS (Allocation de Logement Sociale) qui est souvent un peu moins élevée.

-   Parcours d''études, nationalité, etc.


Comprendre l''estimation.

-   **Attention, c''est une estimation !** : Le résultat n''a pas de valeur contractuelle. Seule l''étude de votre dossier complet par un gestionnaire CAF déterminera le montant exact de votre aide.




-   Si l''estimation est positive, rassemblez tous les documents nécessaires pour votre demande officielle d''APL (voir cours sur la demande d''APL) :
    -   Votre RIB (Relevé d''Identité Bancaire) d''un compte bancaire français.
    -   L''attestation de loyer remplie et signée par votre propriétaire.
    -   Votre avis d''imposition N-2 (même de non-imposition).




-   **Comprenez les questions** : Si une question n''est pas claire, consultez la FAQ de la CAF ou de Service-Public.fr.
-   **Gardez une trace des simulations** : Faites une capture d''écran des résultats.


-   **Penser que l''estimation est le montant définitif** : C''est juste une projection.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les aides au logement](https://www.anil.org/votre-projet/vous-etes-locataire/les-aides-au-logement/) - Guide complet sur les APL.


Le simulateur CAF est un outil essentiel pour les étudiants internationaux afin d''estimer leurs droits aux APL. Utilisez-le sur `caf.fr` en saisissant précisément vos revenus N-2, le montant de votre loyer et les caractéristiques de votre logement. Le résultat est une estimation précieuse, mais non contractuelle. C''est la première étape pour anticiper votre budget et préparer votre demande officielle d''APL. N''hésitez pas à faire plusieurs simulations et à être le plus honnête possible pour des résultats fiables.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e6f7a8b9-c0d1-4012-e3f4-a5b6c7d8e9f0',
  '4a5b6c7d-8e9f-4102-a3b4-c5d6e7f8a9b0',
  'Conditions pour les étrangers (Titre de séjour)',
  '# Conditions pour les étrangers (Titre de séjour)

## Pourquoi c''est important ?

En tant qu''étudiant international, votre statut d''étranger en France est un facteur clé pour votre éligibilité aux Aides Personnalisées au Logement (APL) de la CAF. La principale condition est de disposer d''un titre de séjour valide. Ne pas comprendre les exigences spécifiques liées à votre statut, notamment l''importance de la validation de votre VLS-TS ou de votre carte de séjour, peut entraîner un refus de vos aides et compliquer votre installation financière. Maîtriser ces conditions est absolument crucial pour garantir que votre dossier APL soit recevable et pour sécuriser votre soutien financier au logement.


-   Comprendre la condition fondamentale du titre de séjour pour l''éligibilité aux APL.






C''est le point de départ de votre éligibilité.


-   **VLS-TS validé** : Si vous êtes en première année avec un Visa Long Séjour valant Titre de Séjour (VLS-TS), vous devez avoir effectué la validation en ligne sur l''ANEF. L''attestation de validation téléchargeable fait office de titre de séjour pour la première année.


### 2. Le numéro d''identification étranger

Votre identifiant auprès de l''administration.

-   **Numéro étranger** : Sur votre titre de séjour ou votre attestation de validation VLS-TS figure un numéro d''identification étranger. Ce numéro sera demandé par la CAF.



-   **Aucune discrimination** : L''accès aux APL n''est pas discriminatoire en fonction de la nationalité, tant que vous remplissez les conditions de régularité de séjour.

-   **Revenus N-2** : (Voir leçon précédente) : Vos revenus (ou l''absence de revenus) de l''année N-2 sont pris en compte. Assurez-vous d''avoir fait votre déclaration de revenus annuelle (même si non imposable) pour obtenir votre avis d''imposition (ASDIR), indispensable pour la CAF.

-   Le logement doit être votre résidence principale et être conventionné (propriétaire ayant signé un accord avec l''État pour les APL). La plupart des résidences CROUS et de nombreuses résidences étudiantes privées le sont.



-   La demande d''APL se fait principalement en ligne sur `caf.fr`.
-   Vous devrez téléverser les copies numériques de votre titre de séjour (VLS-TS validé ou carte) et l''attestation de loyer remplie et signée par votre propriétaire.

-   La CAF peut vous demander des compléments d''information via votre espace personnel.


-   Votre **RIB** d''un compte bancaire français.
-   L''**attestation de loyer** (fournie par la CAF, à faire remplir par le propriétaire).
-   Votre **avis d''imposition (ASDIR)** N-2.


-   **Validez votre VLS-TS sans tarder** : C''est la première chose à faire après votre arrivée pour toutes les démarches.
-   **Déclarez vos revenus chaque année** : Pour obtenir votre avis d''imposition, même de non-imposition, qui est une preuve de ressources pour la CAF.


-   **Ne pas déclarer ses revenus** : La CAF n''aura pas les informations pour calculer vos droits.
-   **Ne pas fournir l''attestation de loyer remplie par le propriétaire** : C''est un document clé.
-   **Ne pas informer la CAF d''un changement de situation** (déménagement, changement de revenus, départ du logement).


-   🔗 [CAF : Faire une demande d''aide au logement](https://www.caf.fr/allocataires/demander-une-aide-au-logement) - Le portail de la demande en ligne.
-   🔗 [GISTI (Groupe d''information et de soutien des immigrés)](https://www.gisti.org/spip.php?rubrique24) - Informations juridiques pour les étrangers.


Pour être éligible aux APL de la CAF en tant qu''étranger, la condition principale est de disposer d''un titre de séjour valide (VLS-TS validé, carte de séjour ou récépissé). Vous devrez également avoir fait votre déclaration de revenus N-2 et que votre logement soit conventionné. La demande se fait en ligne sur `caf.fr` en téléversant les justificatifs nécessaires. Maintenez toujours votre situation régulière, déclarez vos revenus chaque année, et transmettez les documents requis pour garantir la continuité de vos droits aux APL. Ce soutien est un pilier de votre budget logement en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

