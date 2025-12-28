-- ==========================================
-- LOT 7 : Cours 31 à 35
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 31 ---

-- COURS 32 : Récupérer sa caution
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '8094cd61-8060-4b2a-abf3-cd7ad4b64c29',
  'Récupérer sa caution : État des lieux de sortie et recours',
  'recuperer-caution-etat-des-lieux-sortie-recours',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux qui s''apprêtent à quitter leur logement en France. Le "dépôt de garantie" (ou caution) représente une somme d''argent importante que vous avez versée à votre entrée, et sa restitution est souvent source de litiges. Nous vous guiderons à travers l''étape cruciale de l''état des lieux de sortie, le délai légal de restitution de la caution (1 ou 2 mois), les retenues légales et illégales que le propriétaire peut faire, et les recours possibles (mise en demeure, commission de conciliation) si la caution n''est pas rendue. Maîtriser ces informations est absolument essentiel pour protéger votre argent et assurer la récupération intégrale de votre dépôt de garantie.',
  'Récupérer votre caution : état des lieux de sortie, délai légal (1 ou 2 mois), retenues légales/illégales, mise en demeure. Protégez votre argent !',
  'logement',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''importance de l''état des lieux de sortie pour le dépôt de garantie", "Connaître le délai légal de restitution de la caution (1 ou 2 mois)", "Identifier les retenues légales (dégradations, impayés) et illégales", "Maîtriser les recours (mise en demeure, conciliation) si la caution n''est pas rendue"]'::jsonb,
  '["Avoir quitté un logement en France", "Avoir réalisé un état des lieux d''entrée précis"]'::jsonb,
  TRUE,
  4.8,
  700,
  5000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 32
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'L''état des lieux de sortie',
  '# L''état des lieux de sortie

## Pourquoi c''est important ?

L''état des lieux de sortie est l''étape la plus critique du processus de restitution de votre dépôt de garantie (caution). Ce document, établi à votre départ du logement, est comparé point par point à l''état des lieux d''entrée. Il sert à identifier les éventuelles dégradations dont vous seriez responsable et qui pourraient justifier une retenue sur votre caution. Une négligence à cette étape, un document imprécis ou une mauvaise préparation, peut vous coûter cher. Pour les étudiants internationaux, souvent pressés de partir, il est absolument crucial de réaliser cet état des lieux avec la plus grande rigueur pour protéger vos finances et assurer la récupération intégrale de votre dépôt de garantie.


-   Comprendre le rôle juridique de l''état des lieux de sortie.
-   Identifier la relation directe entre l''état des lieux d''entrée et de sortie.
-   Maîtriser la préparation du logement avant l''état des lieux.
-   Savoir comment réaliser l''état des lieux de sortie avec rigueur et consigner les désaccords.


L''état des lieux de sortie est la dernière "photographie" du logement que vous laisserez au propriétaire. Il est votre dernière chance de prouver que vous avez bien entretenu le logement.

🔗 [Service-Public.fr : L''état des lieux de sortie](https://www.service-public.fr/particuliers/vosdroits/F31169) - Informations officielles sur l''état des lieux.


### 1. Le rôle juridique de l''état des lieux de sortie


#### a) Comparaison avec l''état des lieux d''entrée
-   L''état des lieux de sortie est un document contradictoire (signé par vous et le propriétaire/agence) qui décrit l''état du logement au moment de votre départ.
-   Il est comparé ligne par ligne à l''**état des lieux d''entrée**.
-   **Présomption de bon état** : Si l''état des lieux d''entrée n''a pas été fait, vous êtes présumé(e) avoir reçu le logement en bon état. C''est à vous de prouver le contraire à la sortie, ce qui est très difficile.

#### b) Les "dégradations" et la "vétusté"
-   **Vétusté** : L''usure normale du logement et de ses équipements due au temps qui passe (ex: peinture jaunie, joints de salle de bain usés après plusieurs années). La vétusté est à la charge du propriétaire, pas du locataire.
-   **Grille de vétusté** : Certains baux annexent une grille de vétusté qui aide à distinguer ce qui est de la dégradation ou de l''usure normale.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - Explications sur la vétusté.

### 2. La préparation du logement avant l''état des lieux

Votre meilleure défense, c''est un logement impeccable.

-   **Logement rendu "propre"** : Le logement doit être rendu dans un état de propreté similaire à celui de l''entrée.
-   **Engagez un professionnel** : Si vous n''avez pas le temps ou si le logement est très sale, il est parfois judicieux d''engager une entreprise de ménage professionnelle, et de garder la facture comme preuve.


-   Le logement doit être entièrement vide de vos affaires, y compris les placards, la cave, et le local à vélos (si vous l''utilisiez).

-   Relevez les index des compteurs d''électricité, de gaz et d''eau (si individuels) le jour de l''état des lieux. Prenez des photos.


### 3. Réaliser l''état des lieux de sortie avec rigueur

Soyez aussi minutieux qu''à l''entrée.

-   Ne laissez jamais le propriétaire ou l''agence faire l''état des lieux seul. Votre présence est un droit et une obligation.

#### b) Comparer avec l''état des lieux d''entrée
-   **Ayez votre exemplaire de l''état des lieux d''entrée avec vous** : C''est votre outil de référence.
-   **Confrontez point par point** : Chaque élément (murs, sols, équipements) doit être vérifié et comparé à l''état d''entrée.

-   **Soyez précis** : Si des dégradations sont constatées, assurez-vous qu''elles sont clairement décrites et que vous êtes d''accord avec cette description.
-   **Prenez des photos et des vidéos** : Comme à l''entrée, prenez des photos de tous les points importants, et surtout des zones où il y a désaccord.

-   Si vous n''êtes pas d''accord avec l''état des lieux, vous avez le droit de refuser de le signer.
-   Dans ce cas, le propriétaire peut faire appel à un huissier pour établir l''état des lieux (à frais partagés). Ou vous pouvez envoyer une lettre recommandée pour contester.


-   Votre **état des lieux d''entrée** (l''original).
-   Vos **photos/vidéos de l''état des lieux d''entrée**.


-   **Préparez le logement avant le rendez-vous** : C''est la clé pour éviter les litiges.
-   **Demandez la grille de vétusté** si elle n''est pas annexée au bail.
-   **Ne signez pas si vous n''êtes pas d''accord** et consignez vos réserves par écrit sur le document.
-   **Gardez une copie de l''état des lieux de sortie signé**.


-   **Ne pas être présent(e) à l''état des lieux de sortie** : Le propriétaire peut le faire seul et vous serez lié(e) par son constat.
-   **Ne pas avoir son état des lieux d''entrée** : Vous ne pourrez pas le comparer.
-   **Signer un document que vous n''avez pas lu ou avec lequel vous êtes en désaccord**.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : L''état des lieux](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/l-etat-des-lieux/) - La référence principale.
-   🔗 [Service-Public.fr : L''état des lieux de sortie](https://www.service-public.fr/particuliers/vosdroits/F31169) - Guide officiel.
-   🔗 [Légifrance : Décret n° 2016-382 du 30 mars 2016](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032338575/) - Texte de loi sur les modalités de l''état des lieux.
-   🔗 [UFC-Que Choisir : L''état des lieux : un document crucial](https://www.quechoisir.org/fiche-pratique-etat-des-lieux-un-document-crucial-n100507/) - Conseils aux consommateurs.
-   🔗 [Modeles-types.fr : Modèle de lettre de contestation d''état des lieux](https://www.modeles-types.fr/location/modele-lettre-contestation-etat-des-lieux-n142) - Si vous devez contester.


L''état des lieux de sortie est l''étape la plus importante pour la restitution de votre dépôt de garantie. Préparez minutieusement le logement (nettoyage, petites réparations) et ayez votre état des lieux d''entrée avec vous pour la comparaison. Soyez rigoureux(se) lors de la visite, prenez des photos de tout, et consignez vos désaccords sur le document. Ne signez jamais si vous n''êtes pas d''accord. Une préparation exemplaire de cette étape est la garantie d''un départ serein et d''une récupération intégrale de votre caution en France.
',
  1,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Le délai légal de restitution (1 ou 2 mois)',
  '# Le délai légal de restitution (1 ou 2 mois)

## Pourquoi c''est important ?

Le dépôt de garantie (ou caution) que vous avez versé à votre entrée dans le logement n''est pas une somme que le propriétaire peut conserver indéfiniment. La loi française fixe des délais stricts pour sa restitution après votre départ et la remise des clés. Ne pas connaître ces délais (1 ou 2 mois) et les conditions associées, c''est risquer de laisser le propriétaire traîner et de ne pas récupérer votre argent à temps. Pour les étudiants internationaux, souvent pressés de quitter la France, obtenir votre caution rapidement est absolument crucial pour votre budget. Maîtriser ces délais est essentiel pour réclamer votre dû et engager les recours nécessaires si le propriétaire ne respecte pas la loi.


-   Savoir comment le délai est calculé (à partir de la remise des clés et de l''état des lieux).


Le dépôt de garantie est une somme d''argent destinée à couvrir les dégradations que vous pourriez causer, ou les sommes que vous devriez encore (loyer, charges). Il doit vous être restitué, après déduction des éventuelles retenues justifiées.





-   Le délai de restitution commence à courir à partir de la date de **remise des clés** au propriétaire (ou à l''agence) et après la date de signature de l''**état des lieux de sortie**.
-   **Importance de l''état des lieux** : C''est à partir de la comparaison des états des lieux d''entrée et de sortie que le propriétaire peut justifier des retenues.

-   **Intégralement** : Si l''état des lieux de sortie est conforme à celui d''entrée (pas de dégradations).


Le facteur clé est la conformité de l''état des lieux.

-   Le dépôt de garantie doit être restitué dans un délai d''**un mois** à compter de la remise des clés si l''état des lieux de sortie est **conforme** à l''état des lieux d''entrée.
-   **"Conforme"** signifie qu''aucune dégradation n''est constatée (hors vétusté normale).

-   Le dépôt de garantie doit être restitué dans un délai de **deux mois** à compter de la remise des clés si l''état des lieux de sortie révèle des **différences** avec l''état des lieux d''entrée (dégradations dont le locataire est responsable).
-   Ce délai permet au propriétaire d''estimer le coût des réparations.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La restitution du dépôt de garantie](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-restitution-du-depot-de-garantie/) - Détails sur les délais.



-   **Majorations** : Si le dépôt de garantie n''est pas restitué dans le délai légal (1 ou 2 mois), le propriétaire doit payer une pénalité au locataire.




-   **État des lieux d''entrée et de sortie signés** : Indispensables.
-   **Photos et vidéos datées** : De l''état des lieux d''entrée ET de sortie.

-   Notez la date exacte de l''état des lieux de sortie et de la remise des clés.

-   **Première relance amiable** : Envoyez un e-mail ou un courrier simple au propriétaire pour lui rappeler l''obligation et le délai.
-   **Mise en demeure par lettre recommandée avec accusé de réception** (voir leçon suivante) : C''est la première étape du recours formel.


-   Vos **états des lieux d''entrée et de sortie** (signés).


-   **Soyez présent(e) à l''état des lieux de sortie** et soyez aussi minutieux(se) qu''à l''entrée.
-   **N''hésitez pas à demander un RIB** au propriétaire pour faciliter le remboursement.


-   **Ne pas faire l''état des lieux de sortie** : Le propriétaire peut le faire seul et vous lier à son constat.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La restitution du dépôt de garantie](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-restitution-du-depot-de-garantie/) - Très détaillé sur les délais et les retenues.
-   🔗 [Adresses des ADIL (Agences Départementales d''Information sur le Logement)](https://www.anil.org/adresses-utiles/) - Pour un conseil gratuit et personnalisé.


Le délai légal de restitution de votre dépôt de garantie est d''un mois si l''état des lieux de sortie est conforme à celui d''entrée, et de deux mois en cas de différences. Ce délai court à partir de la remise des clés et de l''état des lieux. Au-delà, des pénalités de 10% du loyer HC par mois de retard s''appliquent. Préparez un état des lieux de sortie impeccable, conservez toutes vos preuves (états des lieux, photos), et agissez rapidement (mise en demeure, conciliation) si votre caution n''est pas rendue dans les délais. La connaissance de ces règles est cruciale pour protéger votre argent.
',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Retenues sur caution : Ce qui est légal ou non',
  '# Retenues sur caution : Ce qui est légal ou non

## Pourquoi c''est important ?

Le "dépôt de garantie" (ou caution) que vous avez versé à votre entrée dans le logement est souvent une somme importante, et les retenues que le propriétaire peut y opérer à votre départ sont une source majeure de litiges. Il est absolument crucial de connaître la distinction entre les retenues légales et illégales. Un propriétaire ne peut pas retenir votre caution pour n''importe quel motif. En tant qu''étudiant international, la méconnaissance de vos droits peut vous faire accepter des retenues injustifiées. Maîtriser ce qui est légalement déductible et ce qui ne l''est pas est essentiel pour contester les abus et récupérer la somme qui vous est due.










-   Si l''état des lieux de sortie (comparé à celui d''entrée) révèle des **dégradations dont vous êtes responsable** (c''est-à-dire qui ne relèvent pas de la vétusté normale), le propriétaire peut retenir la somme nécessaire pour remettre en état.
-   **Preuve** : L''état des lieux de sortie (décrivant la dégradation) et des devis ou factures de réparations.

-   Si le logement est rendu sale (alors qu''il était propre à l''entrée) et que l''état des lieux de sortie le mentionne, le propriétaire peut retenir des frais de ménage.
-   **Preuve** : L''état des lieux de sortie.


🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les retenues sur le dépôt de garantie](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-restitution-du-depot-de-garantie/#c10444) - Très détaillé sur les motifs de retenue.



-   Le propriétaire ne peut pas vous imputer les coûts de réparations liées à l''usure normale du temps ou à la vétusté du logement et de ses équipements.
-   **Exemple** : Une moquette jaunie après 10 ans d''occupation, des joints de salle de bain usés, une peinture défraîchie après plus de 5-7 ans.


-   Il ne peut pas vous facturer les frais pour retrouver un nouveau locataire (publicité, visites, frais d''agence).

-   Si vous donnez votre préavis et que vous quittez le logement avant la fin de celui-ci, le propriétaire peut vous réclamer le loyer jusqu''à la fin du préavis. Cependant, s''il reloue le logement avant la fin de votre préavis, il ne peut pas vous demander le loyer pour la période où le logement est reloué.






#### b) Comparez avec l''état des lieux d''entrée et vos photos
-   Confrontez les dégradations invoquées avec l''état des lieux d''entrée et vos photos/vidéos.


-   C''est un recours amiable et gratuit. La CDC tente de trouver un accord entre vous et le propriétaire. C''est une étape obligatoire avant de saisir le juge.



-   Vos **états des lieux d''entrée et de sortie** (signés).


-   **Un état des lieux d''entrée très précis est votre meilleure arme.**
-   **Ne laissez pas le propriétaire ou l''agence vous intimider.**
-   **Demandez toujours des justificatifs de dépenses** (factures, pas des devis si les travaux n''ont pas été faits).
-   **Faites-vous aider par l''ANIL ou une association de locataires.**




-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les retenues sur le dépôt de garantie](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-restitution-du-depot-de-garantie/#c10444) - La référence pour les retenues légales et illégales.
-   🔗 [Adresses des ADIL (Agences Départementales d''Information sur le Logement)](https://www.anil.org/adresses-utiles/) - Pour un conseil gratuit et personnalisé.


Les retenues sur votre dépôt de garantie sont légales uniquement pour les loyers/charges impayés et les dégradations qui vous sont imputables (hors vétusté normale). Le propriétaire doit toujours justifier ces retenues par l''état des lieux de sortie et des devis/factures. Contestez systématiquement les retenues illégales (vétusté, frais administratifs) en demandant des justificatifs, en vous appuyant sur vos états des lieux et vos photos. Si nécessaire, envoyez une mise en demeure et saisissez la Commission départementale de conciliation. La connaissance de ces règles est cruciale pour protéger votre argent et récupérer votre caution.
',
  3,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Mise en demeure : Que faire si le proprio ne rend pas l''argent',
  '# Mise en demeure : Que faire si le proprio ne rend pas l''argent

## Pourquoi c''est important ?

Malgré un état des lieux de sortie impeccable et le respect des délais, il arrive que certains propriétaires ne restituent pas le dépôt de garantie dans les temps légaux (1 ou 2 mois) ou effectuent des retenues injustifiées. Dans ce cas, il est absolument crucial d''agir avec méthode et de ne pas laisser la situation s''enliser. La première étape formelle et juridique pour réclamer votre dû est l''envoi d''une **lettre de mise en demeure**. Ne pas le faire, c''est risquer de ne jamais revoir votre argent. Pour les étudiants internationaux, souvent éloignés et avec des contraintes de temps, cette procédure est essentielle pour faire valoir vos droits et récupérer votre caution.


-   Maîtriser les étapes suivantes en cas d''absence de réponse du propriétaire.


La mise en demeure est un acte formel qui prouve que vous avez interpellé votre propriétaire et lui avez donné un dernier délai pour s''exécuter. C''est la première étape du processus de résolution amiable ou judiciaire.





-   La lettre de mise en demeure est un document formel qui constitue la première étape d''un litige. Elle établit la preuve que vous avez tenté de régler le problème à l''amiable.
-   Elle est souvent une condition préalable à l''engagement de recours plus lourds (conciliation, justice).

-   Lui demander de s''exécuter dans un délai court (généralement 8 jours).



#### a) Après l''expiration du délai légal
-   Vous devez envoyer la lettre de mise en demeure dès le lendemain de la date limite de restitution de votre dépôt de garantie (1 ou 2 mois après la remise des clés et l''état des lieux de sortie).





[Nom et Prénom du Propriétaire ou Dénomination de l'Agence]
[Adresse complète du Propriétaire ou de l'Agence]




Je fais suite au contrat de location du logement situé au [Adresse complète du logement], que j'ai occupé du [Date de début du bail] au [Date de fin de bail].

L'état des lieux de sortie a été établi le [Date de l'état des lieux de sortie] et les clés vous ont été remises le [Date de remise des clés].

Conformément à l'article 22 de la loi du 6 juillet 1989, le délai légal de restitution du dépôt de garantie, qui s'élève à [Montant du dépôt de garantie] euros, était de [mentionner "un mois" ou "deux mois"] à compter de la remise des clés. Ce délai a expiré le [Date limite de restitution].

À ce jour, je constate que le dépôt de garantie ne m'a pas été restitué (OU : ne m'a été restitué qu'à hauteur de [Montant restitué], les retenues de [Montant des retenues contestées] étant infondées / non justifiées par des pièces probantes).

En conséquence, je vous mets en demeure de me restituer l'intégralité du dépôt de garantie de [Montant total dû] euros (OU : le reliquat de [Montant du reliquat dû] euros) sous un délai de jours à compter de la réception de la présente.



Dans l'attente de votre régularisation dans les plus brefs délais, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.


### 4. L''envoi et les étapes suivantes


-   La lettre de mise en demeure doit impérativement être envoyée par **Lettre Recommandée avec Accusé de Réception (LRAR)**. Conservez précieusement le récépissé de dépôt et l''accusé de réception.

-   **Saisir la Commission Départementale de Conciliation (CDC)** : Si le propriétaire ne répond pas ou ne restitue pas la caution après la mise en demeure, la prochaine étape est de saisir la CDC. C''est une instance gratuite qui tente de trouver un accord amiable. C''est une étape souvent obligatoire avant de pouvoir saisir le juge.


-   Le **récépissé de dépôt** et l''**accusé de réception** de la LRAR.


-   **Faites-vous aider par l''ANIL ou une ADIL** : Avant d''envoyer la mise en demeure et pour les étapes suivantes. Ils vous donneront les coordonnées de la CDC de votre département.




-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La restitution du dépôt de garantie](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-restitution-du-depot-de-garantie/#c10444) - Très détaillé sur les recours.
-   🔗 [Modeles-types.fr : Modèle de mise en demeure de restitution de dépôt de garantie](https://www.modeles-types.fr/location/modele-lettre-mise-en-demande-restitution-depot-garantie.html) - Modèle prêt à l''emploi.


',
  4,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- PARTIE 3 : Santé & Bien-être

-- --- Cours 32 ---

-- COURS 33 : Le système de santé français
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '4a2bf82e-0ba8-479c-96fe-8d87c95ee250',
  'Le système de santé français : Sécurité Sociale et Mutuelle',
  'systeme-sante-francais-securite-sociale-mutuelle',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France, afin de comprendre le système de santé français. Souvent perçu comme complexe, il repose sur un "duo gagnant" : la Sécurité Sociale et la mutuelle complémentaire. Nous vous expliquerons le rôle de chacun, l''importance du "parcours de soins coordonnés" pour un meilleur remboursement, et le mécanisme du "tiers-payant" qui vous permet de ne pas avancer les frais chez le médecin ou à la pharmacie. Maîtriser ces concepts est absolument crucial pour accéder aux soins, optimiser vos remboursements, et garantir votre bien-être tout au long de votre séjour en France.',
  'Système de santé français : Sécu, mutuelle, parcours de soins, tiers-payant. Comprenez tout pour des soins optimaux !',
  'sante',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le fonctionnement du système de santé français (Sécurité Sociale + Mutuelle)", "Identifier l''importance du parcours de soins coordonnés pour de meilleurs remboursements", "Maîtriser le mécanisme du tiers-payant et ses avantages", "Accéder aux soins en toute sérénité et optimiser ses dépenses de santé"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 33
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Sécu vs Mutuelle : Le duo gagnant',
  '# Sécu vs Mutuelle : Le duo gagnant

## Pourquoi c''est important ?

Le système de santé français est l''un des plus performants au monde, mais il repose sur une architecture à deux étages qui peut sembler complexe pour les nouveaux arrivants. Comprendre la distinction fondamentale entre la **Sécurité Sociale (l''Assurance Maladie)** et la **mutuelle complémentaire santé** est absolument crucial pour tout étudiant international. Ne pas connaître ce "duo gagnant", c''est risquer de ne pas être bien remboursé de vos frais de santé, de payer plus cher vos consultations, ou de ne pas accéder aux soins dont vous avez besoin. Maîtriser le rôle de chacun est essentiel pour votre bien-être, votre budget et votre tranquillité d''esprit en France.


-   Définir ce qu''est la Sécurité Sociale (Assurance Maladie) et son rôle.
-   Comprendre la fonction d''une mutuelle complémentaire santé.



🔗 [Ameli.fr : Comprendre le système de santé français](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/comprendre-systeme-sante-francais) - Le portail de l''Assurance Maladie.


### 1. La Sécurité Sociale (l''Assurance Maladie) : La base


-   **Prise en charge de base** : L''Assurance Maladie (gérée par la Caisse Primaire d''Assurance Maladie - CPAM) rembourse une partie de vos frais de santé (consultations médicales, médicaments, hospitalisation, analyses, etc.).
-   **Obligatoire** : L''affiliation à la Sécurité Sociale est obligatoire et gratuite pour les étudiants étrangers inscrits dans l''enseignement supérieur en France (sauf exceptions).
-   **Remboursement partiel** : La Sécurité Sociale ne rembourse jamais 100% des frais (sauf exceptions rares pour certaines maladies graves). Le taux de remboursement varie selon l''acte (ex: 70% pour une consultation chez le médecin généraliste).

#### b) Le "Ticket Modérateur"
-   **Définition** : C''est la partie des frais qui reste à votre charge après le remboursement de l''Assurance Maladie.
-   **Exemple** : Consultation chez un médecin généraliste à 26,50€. L''Assurance Maladie rembourse 70% de la base de remboursement (qui est 26,50€), soit 18,55€. Le "ticket modérateur" est de 7,95€ (26,50€ - 18,55€).




-   **Compléter le remboursement** : La mutuelle (aussi appelée "complémentaire santé" ou "organisme de complémentaire santé") rembourse tout ou partie du "ticket modérateur" et parfois les dépassements d''honoraires (si le médecin facture plus que le tarif de base).



### 3. Le "duo gagnant" en action : Exemple concret


-   **Si vous avez une mutuelle** : La mutuelle rembourse les 7,95€ restants (ou plus si dépassement d''honoraires).

-   **Sécurité Sociale** : Rembourse une partie selon le "Service Médical Rendu" (SMR) du médicament (100%, 65%, 30%, 15%).

-   La Sécurité Sociale rembourse 80% des frais d''hospitalisation. La mutuelle rembourse les 20% restants (forfait journalier, chambre individuelle).



-   **Affiliez-vous à la Sécurité Sociale dès votre arrivée** : C''est gratuit et obligatoire (voir leçon 34).
-   **Souscrivez une mutuelle complémentaire** : C''est fortement recommandé. Évaluez vos besoins et votre budget.
-   **Déclarez un médecin traitant** : C''est essentiel pour un meilleur remboursement (voir leçon 37).


-   Votre **attestation d''affiliation à la Sécurité Sociale**.
-   Votre **Carte Vitale** (si vous l''avez).


-   **En cas de besoin, n''hésitez pas à consulter un médecin** : Ne repoussez pas les soins.


-   **Ne pas s''affilier à la Sécurité Sociale** : Votre séjour est légal, mais vous n''êtes pas couvert(e) pour vos frais de santé.
-   **Se sentir perdu(e) face au jargon** : N''hésitez pas à demander des explications.


-   🔗 [Ameli.fr : Comprendre le système de santé français](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/comprendre-systeme-sante-francais) - La référence de l''Assurance Maladie.
-   🔗 [Service-Public.fr : L''Assurance Maladie](https://www.service-public.fr/particuliers/vosdroits/F31405) - Informations officielles.


Le système de santé français repose sur le "duo gagnant" Sécurité Sociale (Assurance Maladie) + mutuelle complémentaire. La Sécurité Sociale rembourse une partie de vos frais, et la mutuelle complète le reste (le ticket modérateur). Affiliez-vous obligatoirement et gratuitement à la Sécurité Sociale dès votre arrivée, puis souscrivez une mutuelle (ou vérifiez votre éligibilité à la CSS). C''est la clé pour une couverture santé optimale, des remboursements efficaces et une tranquillité d''esprit durant votre séjour en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Le parcours de soins coordonnés',
  '# Le parcours de soins coordonnés

## Pourquoi c''est important ?

Le "parcours de soins coordonnés" est un dispositif essentiel du système de santé français qui vise à améliorer la coordination des soins et à maîtriser les dépenses. Y adhérer est absolument crucial pour les étudiants internationaux, car cela impacte directement le niveau de vos remboursements de la Sécurité Sociale. Ne pas respecter ce parcours (en consultant un spécialiste directement sans passer par votre médecin traitant) entraîne une pénalisation de vos remboursements, vous faisant payer plus cher vos consultations. Comprendre ce principe et déclarer un médecin traitant est fondamental pour optimiser vos remboursements et accéder à des soins de qualité au meilleur coût.


-   Définir ce qu''est le parcours de soins coordonnés.
-   Identifier l''impact du respect ou du non-respect du parcours de soins sur les remboursements.


Le parcours de soins coordonnés a été mis en place pour responsabiliser les patients et rationaliser le système de santé. Il s''agit d''une organisation des soins autour d''un médecin traitant.

🔗 [Ameli.fr : Le parcours de soins coordonnés](https://www.ameli.fr/assure/remboursements/etre-bien-rembourse/le-parcours-de-soins-coordonnes) - La page officielle de l''Assurance Maladie.


### 1. Qu''est-ce que le parcours de soins coordonnés ?


-   C''est le médecin traitant qui vous oriente vers les spécialistes (cardiologue, dermatologue, gynécologue, etc.) si nécessaire.




-   Vous choisissez librement votre médecin traitant (médecin généraliste) et le déclarez à l''Assurance Maladie.
-   Il peut s''agir d''un médecin de ville, d''un médecin de centre de santé, ou d''un médecin hospitalier.

-   **Orientation** : Il vous oriente vers les spécialistes, les examens complémentaires ou l''hôpital si besoin.
-   **Délivrance d''ordonnances** : Il prescrit les médicaments.


### 3. Impact sur les remboursements : Pénalisation du "hors parcours"



-   **Exemple** : Consultation d''un spécialiste à 30€.

-   **Urgence** : En cas d''urgence, vous pouvez consulter n''importe quel médecin ou vous rendre aux urgences hospitalières.
-   **Consultation chez un médecin traitant "remplaçant"** : Si votre médecin traitant est absent.




-   **C''est le médecin qui fait la démarche** : Lors de votre première consultation, indiquez au médecin que vous souhaitez le déclarer comme votre médecin traitant. Il remplira un formulaire (Cerfa n°12485*03 "Déclaration de choix du médecin traitant") qu''il enverra directement à la CPAM (ou que vous pouvez envoyer vous-même).




-   Votre **Carte Vitale** (si vous l''avez).


-   **Cherchez un médecin traitant près de chez vous ou de votre lieu d''études** : Pour faciliter les consultations.
-   **Utilisez Doctolib.fr** : Pour trouver des médecins généralistes qui prennent de nouveaux patients (filtrez par "médecin traitant acceptant de nouveaux patients").
-   **N''attendez pas d''être malade** pour déclarer un médecin traitant.
-   **Communiquez avec votre médecin** : Expliquez-lui votre situation d''étudiant international.


-   **Consulter un spécialiste directement sans orientation** : Sauf si c''est une exception légale.
-   **Oublier d''informer la CPAM** d''un changement de médecin traitant.


-   🔗 [Ameli.fr : Le parcours de soins coordonnés](https://www.ameli.fr/assure/remboursements/etre-bien-rembourse/le-parcours-de-soins-coordonnes) - La référence de l''Assurance Maladie.


',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Tiers-payant : Ne pas avancer les frais',
  '# Tiers-payant : Ne pas avancer les frais

## Pourquoi c''est important ?

Le "tiers-payant" est un mécanisme du système de santé français qui vous permet de ne pas avancer les frais de santé (ou seulement une partie) chez le médecin, à la pharmacie ou à l''hôpital. Pour les étudiants internationaux, souvent avec un budget limité et parfois peu familiers avec la gestion des remboursements, le tiers-payant est un avantage considérable. Ne pas avoir à débourser d''argent au moment de l''acte de soin facilite grandement l''accès à la santé et allège votre charge financière immédiate. Comprendre comment fonctionne le tiers-payant est absolument crucial pour optimiser votre budget et accéder aux soins sans contrainte de trésorerie.


-   Définir ce qu''est le tiers-payant et son principe de fonctionnement.
-   Maîtriser les conseils pour optimiser l''utilisation du tiers-payant avec votre Carte Vitale et votre mutuelle.


Le tiers-payant évite au patient d''avancer la part remboursée par l''Assurance Maladie et/ou la part remboursée par la mutuelle.

🔗 [Ameli.fr : Le tiers payant](https://www.ameli.fr/assure/remboursements/comment-etre-rembourse/le-tiers-payant) - La page officielle de l''Assurance Maladie.


### 1. Qu''est-ce que le tiers-payant ?


-   Le tiers-payant est un dispositif qui dispense le patient d''avancer les frais de santé (ou une partie) au professionnel de santé.
-   C''est le professionnel de santé (médecin, pharmacien, hôpital) qui est directement payé par l''Assurance Maladie et/ou par votre mutuelle.

-   **Tiers-payant sur la part Sécurité Sociale** : Vous ne payez pas la part remboursée par l''Assurance Maladie. Vous n''avancez que la part du "ticket modérateur" et les éventuels dépassements d''honoraires.
-   **Tiers-payant intégral (ou complet)** : Vous ne payez rien du tout (ou seulement la "participation forfaitaire" de 1€ chez le médecin ou 0,50€ par boîte de médicaments). L''Assurance Maladie et votre mutuelle paient directement le professionnel de santé.




-   **Cas spécifiques (100% tiers-payant)** : Le tiers-payant intégral est systématique pour les bénéficiaires de la Complémentaire Santé Solidaire (CSS), de l''Aide Médicale de l''État (AME), pour les femmes enceintes (à partir du 6ème mois), et pour les affections de longue durée (ALD).

-   Vous ne paierez alors que la partie non remboursée (participation forfaitaire, ou la différence si vous n''avez pas de mutuelle).

#### c) À l''hôpital
-   Pour les hospitalisations, le tiers-payant est très fréquent. L''hôpital facturera directement l''Assurance Maladie et votre mutuelle.

#### d) Chez d''autres professionnels de santé
-   Laboratoires d''analyses, radiologie, opticiens, dentistes : Le tiers-payant peut être appliqué sur la part Sécurité Sociale et/ou mutuelle.



#### a) Pas d''avance d''argent
-   Le principal avantage est de ne pas avoir à débourser de l''argent au moment des soins, ce qui est très pratique pour la gestion de votre budget.

#### b) Facilite l''accès aux soins
-   Si vous avez un budget limité, le tiers-payant lève un frein financier à la consultation d''un médecin ou à l''achat de médicaments.

-   Moins de démarches de remboursement à effectuer, car les professionnels de santé traitent directement avec les organismes d''assurance.



-   C''est le moyen le plus simple et le plus rapide pour bénéficier du tiers-payant. (Voir leçon 36).


-   Bien que le tiers-payant puisse être appliqué hors parcours de soins, le remboursement sera moins bon si vous n''avez pas déclaré de médecin traitant. (Voir leçon 33.2).




-   **Vérifiez le montant que vous payez** : Assurez-vous qu''il s''agit bien uniquement du "reste à charge" (ticket modérateur non couvert par mutuelle, ou participation forfaitaire de 1€).


-   **Payer la totalité des frais sans raison** : Certains professionnels peuvent oublier d''appliquer le tiers-payant. Rappelez-leur gentiment.
-   **Penser que le tiers-payant est disponible partout et tout le temps** : Bien qu''il soit très répandu, il n''est pas systématique pour tous les actes ou tous les professionnels.


-   🔗 [Ameli.fr : Le tiers payant](https://www.ameli.fr/assure/remboursements/comment-etre-rembourse/le-tiers-payant) - La référence de l''Assurance Maladie.


Le tiers-payant est un dispositif crucial du système de santé français qui vous permet de ne pas avancer les frais (part Sécurité Sociale et/ou part mutuelle) chez les professionnels de santé. Il est largement disponible en pharmacie, chez le médecin (avec la Carte Vitale et la mutuelle) et à l''hôpital. C''est un avantage considérable pour la gestion de votre budget et l''accès aux soins. Ayez toujours votre Carte Vitale et votre carte de mutuelle sur vous pour en bénéficier pleinement.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 33 ---

-- COURS 34 : Inscription Sécurité Sociale
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'bc78a03d-df75-4667-81e1-353a1b6e5173',
  'Inscription à la Sécurité Sociale française : Votre accès aux soins',
  'inscription-securite-sociale-francaise-acces-soins',
  'Ce cours est un guide absolument essentiel pour tous les étudiants internationaux en France. L''inscription à la Sécurité Sociale (Assurance Maladie) est une démarche **obligatoire et gratuite** qui vous ouvre les portes du système de santé français et vous permet d''être remboursé(e) de vos frais médicaux. Nous vous détaillerons la procédure de demande en ligne sur le site `etudiant-etranger.ameli.fr`, les documents clés à numériser (visa, acte de naissance), et les étapes pour obtenir votre attestation provisoire. Ne pas s''inscrire à la Sécurité Sociale, c''est risquer de payer la totalité de vos frais de santé et de vous retrouver dans une situation financière précaire en cas de maladie. Maîtriser cette inscription est crucial pour votre bien-être et votre sécurité financière.',
  'Inscription Sécurité Sociale obligatoire et gratuite ! Tuto etudiant-etranger.ameli.fr, documents (visa, acte de naissance), attestation provisoire. Accédez aux soins !',
  'sante',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''obligation et la gratuité de l''affiliation à la Sécurité Sociale", "Maîtriser la procédure de demande en ligne sur etudiant-etranger.ameli.fr", "Savoir quels documents numériser (titre de séjour, acte de naissance traduit)", "Obtenir et utiliser l''attestation provisoire de Sécurité Sociale"]'::jsonb,
  '["Avoir un titre de séjour valide (ou VLS-TS validé) en France"]'::jsonb,
  TRUE,
  4.8,
  800,
  6000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 34
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Le site etudiant-etranger.ameli.fr',
  '# Le site etudiant-etranger.ameli.fr : Votre portail Sécurité Sociale

## Pourquoi c''est important ?

Le site `etudiant-etranger.ameli.fr` est la plateforme officielle et dédiée à l''inscription des étudiants internationaux à la Sécurité Sociale française. C''est via ce portail unique que vous allez déposer votre demande d''affiliation, télécharger vos justificatifs, et suivre l''avancement de votre dossier. Ne pas utiliser ce site, ou le faire de manière incorrecte, peut entraîner des retards importants dans votre affiliation, vous laissant sans couverture maladie et contraint(e) de payer la totalité de vos frais de santé. Maîtriser l''utilisation de cette plateforme est absolument crucial pour accéder à vos droits à la santé dès votre arrivée en France.


-   Identifier les sections clés pour l''inscription et le suivi.







-   Ouvrez votre navigateur internet et tapez l''adresse exacte.

-   Sur la page d''accueil, cliquez sur "Je demande mon inscription" ou "Je m''inscris à la Sécurité sociale".
-   Vous devrez renseigner si vous êtes un "nouvel arrivant" ou si vous êtes déjà "inscrit(e)".

### 2. Procédure d''inscription en ligne



-   **Date d''arrivée en France**.
-   **Numéro d''étudiant** (si vous en avez un).

-   **Pièce d''identité** : Passeport (page d''identité).
-   **Titre de séjour** : Votre visa VLS-TS validé (l''attestation de validation téléchargeable sur ANEF) ou votre carte de séjour (recto-verso).
-   **Acte de naissance** : Votre acte de naissance original (avec filiation, si possible), et sa traduction assermentée en français si l''original n''est pas en français.
-   **Attestation d''inscription** : Votre certificat de scolarité ou attestation d''inscription pour l''année universitaire en cours.
-   **RIB (Relevé d''Identité Bancaire)** : D''un compte bancaire français. C''est sur ce compte que vos remboursements seront versés.



Restez informé(e) de l''avancement.

-   Après votre demande d''inscription, vous pourrez créer un espace personnel sur `ameli.fr` (avec un identifiant et un mot de passe).
-   C''est sur cet espace que vous pourrez suivre l''avancement de votre dossier : "demande en cours", "demande de compléments", "affiliation validée".

-   La CPAM peut vous demander des documents supplémentaires si votre dossier est incomplet ou si une pièce n''est pas conforme.
-   **Répondez rapidement** : Téléchargez les documents demandés dès que possible pour relancer l''instruction.


-   Votre **RIB** d''un compte bancaire français.


-   **Préparez tous vos documents numérisés à l''avance** : Scannez-les en PDF, assurez-vous qu''ils sont lisibles et bien nommés.
-   **N''hésitez pas à contacter l''assistance en ligne d''Ameli** si vous rencontrez des difficultés.


-   **Ne pas s''inscrire à la Sécurité Sociale** : Vous n''êtes pas couvert(e).
-   **Attendre la dernière minute** : L''affiliation peut prendre plusieurs semaines ou mois.


-   🔗 [Ameli.fr : Guide pour étudiants étrangers](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/etudiant-etranger) - Informations générales sur l''affiliation.
-   🔗 [Annuaire des traducteurs assermentés](https://www.annuaire-traducteur-assermente.fr/) - Pour la traduction de l''acte de naissance.
-   🔗 [Adresses des CPAM (Caisses Primaires d''Assurance Maladie)](https://www.ameli.fr/assure/adresses-et-contacts/points-accueil-et-agences-cpam) - Si vous avez besoin de vous rendre sur place.


Le site `etudiant-etranger.ameli.fr` est votre portail unique et obligatoire pour l''inscription à la Sécurité Sociale française. Renseignez avec précision vos informations personnelles, téléchargez vos justificatifs (passeport, titre de séjour validé, acte de naissance traduit, certificat de scolarité, RIB français) et suivez l''avancement de votre dossier en ligne. Cette affiliation gratuite est cruciale pour accéder aux soins et être remboursé de vos frais médicaux en France. Ne tardez pas à faire cette démarche essentielle.
',
  1,
  60,
  NULL,
  '[]'::sql

-- --- Cours 34 ---

-- COURS 35 : Numéro de Sécurité Sociale
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Numéro de Sécurité Sociale en France : Provisoire et Définitif',
  'numero-securite-sociale-france-provisoire-definitif',
  'Ce cours est essentiel pour tous les étudiants internationaux en France qui s''affilient à la Sécurité Sociale. L''obtention d''un numéro de Sécurité Sociale est une étape clé, mais elle passe souvent par un numéro provisoire avant le numéro définitif, et le processus peut être long. Nous vous expliquerons ce qu''est le NIR (Numéro d''Identification au Répertoire) définitif et pourquoi son obtention prend du temps. Nous vous aiderons à comprendre la composition de ce numéro à 13 chiffres, et nous aborderons les démarches à suivre si votre dossier d''affiliation est bloqué ou si l''attente est anormalement longue. Maîtriser cette progression est crucial pour accéder pleinement à vos droits et à la Carte Vitale.',
  'Numéro Sécu : provisoire, définitif (NIR), pourquoi c''est long, composition. Que faire si ça bloque ? Accédez à tous vos droits !',
  'sante',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la différence entre numéro provisoire et numéro définitif (NIR)", "Identifier les raisons pour lesquelles l''obtention du NIR peut être longue", "Savoir décrypter les chiffres de votre numéro de Sécurité Sociale", "Maîtriser les recours et actions en cas de blocage du dossier d''affiliation"]'::jsonb,
  '["Avoir déposé sa demande d''affiliation à la Sécurité Sociale sur etudiant-etranger.ameli.fr"]'::jsonb,
  TRUE,
  4.8,
  550,
  4000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 35
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Le NIR (Numéro définitif) : Pourquoi c''est long ?',
  '# Le NIR (Numéro définitif) : Pourquoi c''est long ?

## Pourquoi c''est important ?

Après avoir déposé votre demande d''affiliation à la Sécurité Sociale, vous recevrez peut-être d''abord une attestation avec un "numéro provisoire". Ce n''est qu''après plusieurs mois que vous obtiendrez votre **Numéro d''Identification au Répertoire (NIR)**, votre numéro définitif de Sécurité Sociale. Comprendre pourquoi ce processus est long, quelles sont les étapes de vérification, et quels sont vos droits avec un numéro provisoire est absolument crucial pour les étudiants internationaux. L''attente du NIR définitif peut être source de frustration, mais il est important de savoir que vous êtes couvert(e) dès votre affiliation. Ce cours vous aidera à gérer cette attente et à comprendre les raisons de la complexité administrative.


-   Définir ce qu''est le Numéro d''Identification au Répertoire (NIR) définitif.
-   Comprendre les raisons pour lesquelles l''obtention du NIR prend du temps.
-   Maîtriser les conseils pour suivre l''avancement de son dossier et gérer l''attente.







-   **Délivrance rapide** : Après quelques semaines d''instruction de votre demande d''affiliation (déposée sur `etudiant-etranger.ameli.fr`), la CPAM (Caisse Primaire d''Assurance Maladie) peut vous envoyer une **attestation d''affiliation avec un numéro provisoire**.
-   **Format** : Ce numéro provisoire commence généralement par "7" (pour les hommes) ou "8" (pour les femmes), suivi de la date de naissance et d''autres chiffres.

-   **Format** : Le NIR est un numéro à 13 chiffres (plus une clé de contrôle de 2 chiffres). Il commence par 1 (homme) ou 2 (femme), suivi de l''année et du mois de naissance, du département de naissance, etc. (voir leçon 35.3).


### 2. Pourquoi l''obtention du NIR définitif est longue ?


-   La CPAM doit vérifier l''authenticité et la complétude de vos documents d''état civil (acte de naissance, sa traduction assermentée) auprès des autorités de votre pays d''origine.

-   La CPAM s''assure que votre situation de séjour en France est bien régulière et stable.

#### c) Échange d''informations inter-administrations
-   Le processus implique des échanges d''informations entre la CPAM, les services d''immigration et parfois les consulats.


-   Votre acte de naissance avec filiation permet d''établir votre lien de parenté, nécessaire pour l''attribution du NIR. S''il est incomplet, cela peut générer des demandes de compléments.

### 3. Droits maintenus pendant l''attente du NIR définitif




-   Votre **attestation d''affiliation avec numéro provisoire**.
-   Votre **RIB** d''un compte bancaire français.
-   Le **formulaire de demande d''affiliation** que vous avez déposé.


-   **Conservez précieusement votre attestation provisoire** : C''est votre preuve de couverture.
-   **N''attendez pas le NIR définitif pour consulter un médecin** si vous en avez besoin.
-   **En cas d''urgence** : Le numéro provisoire suffit pour prouver votre affiliation.


-   **Penser que vous n''êtes pas couvert(e) tant que vous n''avez pas le NIR définitif** : C''est faux, vous l''êtes avec le numéro provisoire.
-   **Ne pas demander de feuilles de soins au médecin** si vous n''avez pas encore la Carte Vitale.
-   **Ne pas relancer la CPAM** (via votre espace Ameli ou par courrier) si l''attente est excessivement longue (plus de 6-8 mois après le provisoire).
-   **Perdre son attestation provisoire** : C''est votre seule preuve d''affiliation.


-   🔗 [Ameli.fr : Étudiant étranger et Sécurité sociale](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/etudiant-etranger) - Guide pour l''affiliation.
-   🔗 [Adresses des CPAM (Caisses Primaires d''Assurance Maladie)](https://www.ameli.fr/assure/adresses-et-contacts/points-accueil-et-agences-cpam) - Pour contacter votre CPAM.
-   🔗 [Annuaire des traducteurs assermentés](https://www.annuaire-traducteur-assermente.fr/) - Pour l''acte de naissance.


L''obtention de votre Numéro d''Identification au Répertoire (NIR) définitif peut prendre du temps en raison des vérifications administratives. Cependant, avec votre numéro provisoire, vous êtes déjà couvert(e) par la Sécurité Sociale et remboursé(e) de vos frais de santé (en envoyant les feuilles de soins à la CPAM sur votre RIB français). Utilisez votre attestation provisoire comme preuve et suivez l''avancement de votre dossier sur `ameli.fr`. Ne laissez pas l''attente du NIR définitif vous empêcher d''accéder aux soins.
',
  1,
  60,
  NULL,
  '[]'::sql

-- --- Cours 35 ---

-- COURS 36 : La Carte Vitale
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '2e208c5b-4b47-4212-af6c-992528ea7e12',
  'La Carte Vitale en France : Votre accès simplifié aux soins',
  'carte-vitale-france-acces-simplifie-soins',
  'Ce cours est essentiel pour tous les étudiants internationaux affiliés à la Sécurité Sociale française. La Carte Vitale est un document indispensable qui simplifie considérablement l''accès à vos droits à la santé et vos remboursements. Nous vous expliquerons comment commander votre carte (après l''obtention de votre numéro définitif de Sécurité Sociale), les étapes pour la mettre à jour (notamment dans les pharmacies), et l''émergence de l''application "Carte Vitale" dématérialisée. Ne pas avoir de Carte Vitale, c''est devoir avancer tous vos frais et envoyer des feuilles de soins. Maîtriser son utilisation est absolument crucial pour des remboursements rapides, le tiers-payant, et une gestion sereine de votre santé en France.',
  'Carte Vitale : Commandez, mettez à jour (pharmacie), app e-carte. Simplifiez vos remboursements et accédez au tiers-payant !',
  'sante',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le rôle et les avantages de la Carte Vitale", "Savoir comment commander sa Carte Vitale après le NIR définitif", "Maîtriser la mise à jour régulière de la carte (bornes en pharmacie)", "Découvrir l''application "Carte Vitale" (e-carte) et son fonctionnement"]'::jsonb,
  '["Avoir obtenu votre numéro définitif de Sécurité Sociale (NIR)"]'::jsonb,
  TRUE,
  4.8,
  750,
  5800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 36
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Commander sa carte (Photo, Formulaire)',
  '# Commander sa Carte Vitale (Photo, Formulaire)

## Pourquoi c''est important ?

La Carte Vitale est un document électronique indispensable pour simplifier vos démarches de santé et obtenir vos remboursements de l''Assurance Maladie en France. Elle contient toutes les informations nécessaires à votre prise en charge et permet le tiers-payant chez de nombreux professionnels. Cependant, vous ne pouvez la commander qu''après avoir obtenu votre numéro définitif de Sécurité Sociale (NIR). Ne pas commander votre Carte Vitale, c''est devoir avancer tous vos frais de santé et envoyer des feuilles de soins papier, ce qui est plus long et moins pratique. Maîtriser la procédure de commande (envoi de photo, formulaire) est absolument crucial pour accéder à un système de remboursement fluide et efficace.


-   Identifier les documents nécessaires pour la commande de la Carte Vitale (photo, pièce d''identité).


La Carte Vitale est votre "clé" d''accès au système de santé. Une fois votre NIR définitif en poche, sa commande est la prochaine étape essentielle.





-   Vous ne pouvez commander votre Carte Vitale qu''après avoir reçu votre **numéro définitif de Sécurité Sociale (NIR)**. Ce numéro à 13 chiffres (commençant par 1 ou 2) est différent du numéro provisoire (qui commence par 7 ou 8).
-   **Attente** : Si vous n''avez toujours que votre numéro provisoire, vous devez patienter jusqu''à l''obtention de votre NIR définitif. (Voir cours précédent sur les délais du NIR).

-   Votre NIR définitif vous sera communiqué par courrier par la CPAM, ou il sera visible sur votre attestation de droits à l''Assurance Maladie sur votre espace `ameli.fr`.



-   Si vous n''avez pas encore d''espace personnel, créez-le avec votre NIR définitif et le code fourni par la CPAM.

#### b) Accéder à la rubrique "Commander ma Carte Vitale"
-   Dans votre espace personnel, cherchez la section dédiée à la Carte Vitale (souvent dans "Mes démarches" ou "Mes informations").
-   Cliquez sur "Commander ma Carte Vitale".

#### c) Télécharger votre photo d''identité
-   **Photo numérique** : Vous devrez télécharger une photo d''identité numérique récente, conforme aux normes françaises (fond clair et uni, visage dégagé, expression neutre). Utilisez une **e-photo** (photo numérique avec code fournie par les photographes agréés, voir cours sur les photos d''identité).
-   **Autre option** : Vous pouvez parfois imprimer une planche photo et l''envoyer par courrier.

#### d) Télécharger votre pièce d''identité
-   Une copie numérique de votre pièce d''identité (passeport ou titre de séjour) en cours de validité.


-   Si vous ne souhaitez pas faire la démarche en ligne, vous pouvez demander un formulaire papier de commande de Carte Vitale à votre CPAM et le renvoyer avec votre photo et pièce d''identité. C''est généralement plus long.

🔗 [ANTS : Faire une e-photo](https://ants.gouv.fr/les-services-en-ligne/faire-une-e-photo) - Pour les photos d''identité.




#### b) Droits maintenus avec l''attestation
-   Pendant l''attente de votre Carte Vitale, vous restez couvert(e) par la Sécurité Sociale.
-   Vous continuez à utiliser votre **attestation de droits à l''Assurance Maladie** (disponible sur `ameli.fr`) et à envoyer les feuilles de soins papier à votre CPAM pour vos remboursements.




-   **Utilisez une e-photo** : C''est la méthode la plus simple et la plus fiable pour la photo.
-   **Conservez l''accusé de réception** de votre commande.
-   **Gardez toujours votre attestation de droits à l''Assurance Maladie** sur vous en attendant la Carte Vitale.


-   **Perdre son attestation de droits** pendant l''attente.
-   **Ne pas comprendre que la Carte Vitale n''est pas envoyée automatiquement**.


-   🔗 [ANTS : Normes des photos d''identité](https://ants.gouv.fr/les-services-en-ligne/faire-une-e-photo) - Pour la photo.
-   🔗 [Adresses des CPAM (Caisses Primaires d''Assurance Maladie)](https://www.ameli.fr/assure/adresses-et-contacts/points-accueil-et-agences-cpam) - Pour obtenir de l''aide ou un formulaire papier.


La commande de votre Carte Vitale est une étape cruciale après l''obtention de votre numéro définitif de Sécurité Sociale (NIR). La démarche se fait principalement en ligne sur votre espace `ameli.fr`, en téléchargeant une e-photo et une copie de votre pièce d''identité. Comptez 2 à 3 semaines pour la recevoir par courrier. En attendant, votre attestation de droits vous assure la couverture maladie. Maîtriser cette commande est essentiel pour bénéficier des remboursements rapides et du tiers-payant, simplifiant ainsi votre accès aux soins en France.
',
  1,
  60,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 36 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'Mettre à jour sa carte (Bornes en pharmacie)',
  '# Mettre à jour sa Carte Vitale (Bornes en pharmacie)

## Pourquoi c''est important ?

Votre Carte Vitale n''est pas une simple carte d''identité. Elle contient des informations électroniques sur vos droits à l''Assurance Maladie, qui évoluent (changement d''adresse, de situation familiale, de médecin traitant, etc.). Mettre à jour régulièrement votre Carte Vitale est absolument crucial pour garantir le bon déroulement de vos remboursements, le fonctionnement du tiers-payant, et l''accès à vos droits sans complication. Ne pas le faire peut entraîner des blocages, des retards de remboursement, ou l''impossibilité de bénéficier du tiers-payant chez le médecin ou à la pharmacie. Pour les étudiants internationaux, cette mise à jour est un geste simple qui assure la continuité de votre accès aux soins.


-   Identifier les informations mises à jour et l''impact sur vos droits.







-   Si votre situation change (changement d''adresse, de mutuelle, de médecin traitant, ou simple actualisation annuelle), la mise à jour permet d''inscrire ces nouvelles informations sur la puce de votre carte.

-   Un professionnel de santé peut refuser le tiers-payant si votre Carte Vitale n''est pas à jour, car il ne peut pas s''assurer de l''étendue de vos droits.
-   Une mise à jour assure des remboursements rapides et évite d''avancer les frais.

-   Si votre Carte Vitale est trop ancienne, elle risque d''être "rejetée" par les systèmes informatiques des professionnels de santé, ce qui compliquera vos remboursements.



-   **Le lieu le plus courant et pratique** : La plupart des pharmacies en France sont équipées de bornes multiservices de l''Assurance Maladie.
    2.  Suivez les instructions à l''écran (validez avec le bouton "OK").
    3.  La mise à jour prend quelques secondes. Un message "Mise à jour effectuée" (ou similaire) apparaîtra.

-   Les centres d''accueil de la Caisse Primaire d''Assurance Maladie (CPAM) disposent également de ces bornes.




-   **Au minimum une fois par an** : Généralement en début d''année civile, ou après chaque changement important de situation (changement d''adresse, de médecin traitant, de mutuelle).





-   **Pensez à mettre à jour votre Carte Vitale après un changement d''adresse ou de médecin traitant**.
-   **Profitez d''aller à la pharmacie** pour la mettre à jour, c''est un geste rapide.
-   **Vérifiez le message à l''écran** : Assurez-vous que la mise à jour a bien été effectuée.


-   **Se retrouver bloqué(e) chez le médecin ou le pharmacien** car la carte n''est pas à jour et ne permet pas le tiers-payant.


-   🔗 [Adresses des CPAM (Caisses Primaires d''Assurance Maladie)](https://www.ameli.fr/assure/adresses-et-contacts/points-accueil-et-agences-cpam) - Pour trouver un point d''accueil.


Mettre à jour votre Carte Vitale est un geste simple, rapide et gratuit à faire au minimum une fois par an, ou après chaque changement important de situation. Les bornes multiservices disponibles dans la plupart des pharmacies sont le moyen le plus pratique. Cette mise à jour garantit que vos droits à l''Assurance Maladie sont à jour, assure le bon fonctionnement du tiers-payant, et vous évite des retards de remboursement. Intégrez ce réflexe à votre routine pour une gestion sereine de votre santé en France.
',
  2,
  50,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 36 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'dd87e55e-ca78-42d5-9ee3-9dc874f19e4f',
  'L''appli Carte Vitale (e-carte)',
  '# L''appli Carte Vitale (e-carte)

## Pourquoi c''est important ?

En plus de la Carte Vitale physique, l''Assurance Maladie a lancé l''application "Carte Vitale" (aussi appelée "e-carte Vitale"), une version dématérialisée de votre carte directement sur votre smartphone. Pour les étudiants internationaux, cette innovation est absolument cruciale pour simplifier encore plus l''accès aux soins, le tiers-payant et les remboursements. Ne plus avoir à transporter une carte physique, avoir toutes vos informations à portée de main, et pouvoir consulter vos droits à tout moment est un gain de praticité et de sécurité. Comprendre comment installer et utiliser cette application est essentiel pour une gestion moderne et efficace de votre santé en France.


-   Définir ce qu''est l''application "Carte Vitale" et son fonctionnement.
-   Savoir comment installer l''application et activer sa e-carte Vitale.
-   Maîtriser les conseils pour l''utiliser chez les professionnels de santé.


L''e-carte Vitale est une avancée technologique qui modernise l''accès aux soins et simplifie la vie des assurés sociaux. Elle est en phase de déploiement progressif.

🔗 [Ameli.fr : L''application Carte Vitale](https://www.ameli.fr/assure/droits-demarches/obtenir-une-carte-vitale/lapplication-carte-vitale) - La page officielle sur l''application.


### 1. Qu''est-ce que l''appli Carte Vitale (e-carte) ?


-   L''appli Carte Vitale est une application mobile qui intègre toutes les fonctionnalités de votre Carte Vitale physique.

-   **Tiers-payant** : Facilite l''application du tiers-payant (non-avance de frais).
-   **Feuilles de soins électroniques** : Permet la transmission automatique et rapide des informations de remboursement à l''Assurance Maladie.
-   **Consultation des droits** : Accès à vos informations d''Assurance Maladie (médecin traitant, mutuelle, etc.).

-   L''application est en cours de déploiement national. Elle est disponible pour les assurés de certaines CPAM pilotes. Vérifiez si votre CPAM est concernée.

🔗 [Service-Public.fr : L''application Carte Vitale](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations générales.



-   Moins de risque de l''oublier ou de la perdre.

-   Chez les professionnels de santé équipés (ce qui est de plus en plus le cas), la présentation de la e-carte via un QR code simplifie l''application du tiers-payant.

-   Contrairement à la carte physique qui doit être mise à jour sur une borne, la e-carte peut se mettre à jour automatiquement via l''application.

-   L''accès à l''application est sécurisé par un code PIN ou une authentification biométrique (empreinte digitale, reconnaissance faciale).

### 3. Installer l''application et activer sa e-carte Vitale



#### b) Télécharger l''application
-   Recherchez "Carte Vitale" sur le Google Play Store (Android) ou l''App Store (iOS) et téléchargez l''application officielle de l''Assurance Maladie.

#### c) Activer sa e-carte Vitale (procédure d''identification)
-   **Scan de la Carte Vitale physique** : L''application vous demandera de scanner votre Carte Vitale physique.
-   **Confirmation d''identité** : Vous devrez généralement confirmer votre identité via un service sécurisé (ex: Alicem, ou via un appel vidéo avec un agent).
-   **Création d''un code confidentiel** : Vous devrez définir un code PIN à 4 chiffres pour sécuriser l''accès à votre e-carte.
-   **Délai** : L''activation peut prendre quelques jours.


Simplicité d''usage.

-   Ouvrez l''application sur votre smartphone.
-   Un QR code s''affichera à l''écran.





-   **Activez votre e-carte dès que possible** après l''avoir reçue.
-   **Chargez votre téléphone** avant d''aller chez le médecin !
-   **Vérifiez si votre professionnel de santé est équipé** pour la e-carte (un autocollant peut l''indiquer).


-   **Ne pas avoir de numéro définitif** : L''activation est impossible.
-   **Utiliser une application non officielle** : Téléchargez UNIQUEMENT l''application officielle de l''Assurance Maladie.


-   🔗 [Ameli.fr : L''application Carte Vitale](https://www.ameli.fr/assure/droits-demarches/obtenir-une-carte-vitale/lapplication-carte-vitale) - La référence officielle.
-   🔗 [Google Play Store / Apple App Store](https://play.google.com/store/apps/details?id=fr.ameli.cartevitale) - Pour télécharger l''application (attention à la version officielle).


L''application "Carte Vitale" (e-carte Vitale) dématérialise votre carte d''Assurance Maladie sur votre smartphone. Après avoir obtenu votre NIR définitif et votre Carte Vitale physique, vous pouvez l''installer et l''activer. Elle offre praticité (toujours sur soi), sécurité (code PIN), et facilite le tiers-payant. Elle est une solution moderne pour accéder à vos soins. Gardez toujours votre carte physique en secours et n''oubliez pas votre carte de mutuelle. L''e-carte Vitale est un pas de plus vers la simplification de votre parcours de santé en France.
',
  3,
  55,
  NULL,
  '[]'::sql

