-- ==========================================
-- LOT 10 : Cours 46 à 50
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 46 ---

-- COURS 47 : Ouvrir un compte bancaire
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Ouvrir un compte bancaire en France : Guide pas à pas pour étrangers',
  'ouvrir-compte-bancaire-france-guide-etrangers',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux et nouveaux résidents en France. L''ouverture d''un compte bancaire français est une démarche absolument cruciale : elle est indispensable pour recevoir vos aides sociales (APL de la CAF), vos salaires (job étudiant), payer vos loyers, et gérer votre budget au quotidien. Ne pas avoir de compte français complique considérablement votre installation. Nous vous détaillerons les justificatifs requis (passeport, titre de séjour, domicile), le processus de rendez-vous en agence ou d''inscription en ligne, et le contrat qui vous lie à la banque. Maîtriser cette ouverture de compte est fondamental pour votre autonomie financière et une intégration réussie en France.',
  'Ouvrir un compte bancaire en France : justificatifs (passeport, titre de séjour),
  rendez-vous,
  contrat. Indispensable pour votre argent et vos aides !',
  'budget_finances',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la nécessité d''un compte bancaire français", "Identifier les justificatifs requis pour l''ouverture d''un compte", "Maîtriser les étapes de l''ouverture de compte (en agence ou en ligne)", "Décrypter la convention de compte et ses principales clauses"]'::jsonb,
  '["Avoir un passeport et un titre de séjour valide en France"]'::jsonb,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 47
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Justificatifs requis',
  '# Justificatifs requis pour ouvrir un compte bancaire en France

## Pourquoi c''est important ?

L''ouverture d''un compte bancaire est une démarche administrative obligatoire et l''une des premières à effectuer après votre arrivée en France. Cependant, elle est soumise à la présentation de documents précis pour prouver votre identité, votre résidence légale et votre adresse. Ne pas connaître la liste exacte des justificatifs requis, ou en fournir des incomplets/non conformes, peut entraîner un refus de la banque et bloquer toutes vos démarches financières (recevoir des aides, payer le loyer, recevoir votre salaire). Pour les étudiants internationaux, cette étape est absolument cruciale pour votre autonomie financière et une installation réussie.


-   Identifier la liste des documents d''identité et de séjour obligatoires.


Les banques sont soumises à des obligations légales de vérification d''identité et de lutte contre le blanchiment d''argent et le financement du terrorisme. C''est pourquoi elles sont exigeantes sur les documents.



### 1. Documents d''identité et de séjour


#### a) Pièce d''identité en cours de validité
-   **Passeport** : Original et copie (page d''identité). C''est la pièce d''identité internationale la plus acceptée.

-   **Ou attestation de validation du VLS-TS** : Si vous êtes en première année et que votre visa VLS-TS a été validé en ligne sur l''ANEF. L''attestation de validation fait office de titre de séjour.
-   **Pour les citoyens de l''UE/EEE/Suisse** : Une carte d''identité nationale ou un passeport suffit, pas besoin de titre de séjour.

🔗 [Service-Public.fr : Pièces d''identité](https://www.service-public.fr/particuliers/vosdroits/F3025) - Liste des pièces.
🔗 [ANEF : Validation de visa en ligne](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/vls-ts/demarches/etape-1) - Pour l''attestation VLS-TS.



-   **Facture d''électricité, de gaz, d''eau ou de téléphone fixe/internet** : À votre nom.
-   **Attestation d''hébergement** : Si vous êtes hébergé(e) par un tiers (ami, famille), cette attestation doit être rédigée sur papier libre par l''hébergeant, datée et signée, et accompagnée d''une copie de sa pièce d''identité (recto-verso) et de son propre justificatif de domicile de moins de 3 mois.
-   **Attestation de résidence universitaire** : Délivrée par l''administration de votre résidence (CROUS, privée).


### 3. Justificatif de statut d''étudiant et de ressources (si demandé)

Pour adapter l''offre bancaire à votre profil.

-   **Certificat de scolarité** ou **lettre d''admission** de votre établissement d''enseignement supérieur français.

-   **Attestation de virement régulier des parents** : Une lettre manuscrite des parents s''engageant à vous envoyer de l''argent, avec leurs propres justificatifs de ressources.
-   **Avis d''imposition N-2** (même de non-imposition/ASDIR) : Si vous avez déjà déclaré vos revenus en France.


Pour d''éventuels transferts de fonds.

-   Si vous avez un compte bancaire dans votre pays d''origine, le RIB (Relevé d''Identité Bancaire) de ce compte peut être demandé pour faciliter les virements internationaux ou pour prouver l''origine de vos fonds.




-   **Traduisez les documents étrangers** (acte de naissance, relevé bancaire étranger, attestations) par un traducteur assermenté si la banque l''exige.
-   **Expliquez votre situation d''étudiant international** : Les banques sont habituées.


-   **Dossier incomplet** : C''est la cause principale des refus d''ouverture de compte.
-   **Ne pas avoir de justificatif de domicile à votre nom** (sans avoir l''attestation d''hébergement complète).
-   **Ne pas avoir de justificatif de ressources** (même si ce sont des fonds de vos parents depuis l''étranger).


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Justificatifs de domicile](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-dossier-de-location/) - Pour les justificatifs de domicile.
-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


Pour ouvrir un compte bancaire en France, vous devrez fournir des justificatifs d''identité (passeport, titre de séjour validé), de domicile (facture, attestation d''hébergement de moins de 3 mois), et souvent des justificatifs de votre statut étudiant et de vos ressources (bourses, relevés bancaires, attestation parentale). Préparez un dossier complet et conforme, avec des copies de tous les documents. Cette démarche est cruciale pour votre autonomie financière, la réception de vos aides (CAF) et la gestion de votre budget au quotidien en France.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 47 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le rendez-vous en agence',
  '# Le rendez-vous en agence pour l''ouverture d''un compte bancaire

## Pourquoi c''est important ?

Si vous choisissez d''ouvrir un compte bancaire dans une banque traditionnelle (avec agence physique), le rendez-vous avec un conseiller est une étape obligatoire. Ce rendez-vous n''est pas une simple formalité : c''est l''occasion de présenter votre dossier, de poser toutes vos questions, de comprendre les produits et services proposés, et d''établir une relation de confiance avec votre banque. Ne pas le préparer correctement, ou ne pas comprendre son importance, peut entraîner un refus d''ouverture de compte, des choix inadaptés à vos besoins, ou des malentendus sur les frais. Pour les étudiants internationaux, cette interaction est absolument cruciale pour bien démarrer votre vie financière en France.


-   Comprendre la finalité du rendez-vous en agence pour l''ouverture de compte.






Rassemblez tous les documents à l''avance.

-   **Pièce d''identité** : Passeport en cours de validité (original et copie).
-   **Justificatif de domicile** : Facture de moins de 3 mois, quittance de loyer, attestation d''hébergement complète (original et copie).
-   **Justificatif de scolarité** : Certificat de scolarité ou lettre d''admission.
-   **Justificatifs de ressources** : Attestation de bourse, relevé bancaire étranger (traduit), attestation de prise en charge des parents, avis d''imposition N-2 (si applicable).

-   Préparez une liste de questions sur l''offre étudiante, les frais, les services, les virements internationaux, l''accès à l''application mobile.

#### c) Votre besoin d''un RIB étranger
-   Si vous avez besoin de transférer de l''argent de l''étranger, préparez le RIB de votre compte dans votre pays d''origine.



-   Appelez l''agence de la banque de votre choix (souvent le numéro général, puis vous serez redirigé(e) vers l''agence la plus proche).

-   Vous pouvez vous rendre directement à l''accueil d''une agence pour demander un rendez-vous.


#### d) Choix de l''agence
-   Privilégiez une agence proche de votre logement ou de votre lieu d''études.




-   Soyez prêt(e) à expliquer l''origine de vos fonds (si attestation de parents ou virements de l''étranger).

#### c) Discussion sur l''offre
-   Le conseiller vous présentera les différentes offres bancaires (notamment l''offre étudiant) : types de cartes bancaires (Visa, Mastercard), services inclus (application mobile, alertes SMS), frais (cotisation carte, tenue de compte, opérations internationales), possibilité de découvert.
-   **Posez toutes vos questions** : Sur le coût des virements de l''étranger, sur l''obtention d''un chéquier, sur les assurances liées à la carte.

-   Si vous êtes d''accord avec l''offre, vous signerez la "convention de compte" (voir leçon suivante).




-   Vous recevrez vos identifiants pour accéder à votre espace client en ligne et à l''application mobile de la banque.




-   **N''hésitez pas à demander des clarifications** si vous ne comprenez pas un terme bancaire.
-   **Ne signez rien si vous n''êtes pas sûr(e)** et demandez un délai de réflexion.


-   **Se présenter au rendez-vous sans un dossier complet** : Cela retardera l''ouverture de compte.
-   **Oublier d''activer sa carte bancaire** après réception.


-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


Le rendez-vous en agence pour l''ouverture d''un compte bancaire est une étape cruciale pour les étudiants internationaux en France. Préparez un dossier complet (pièces d''identité, séjour, domicile, scolarité, ressources) et une liste de questions. Lors du rendez-vous, présentez vos justificatifs, discutez de l''offre étudiante et des frais, et lisez attentivement la convention de compte avant de signer. Après le rendez-vous, vous recevrez votre carte bancaire et vos identifiants. Une bonne préparation et une communication claire sont les clés pour ouvrir un compte adapté à vos besoins et gérer votre argent sereinement en France.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 47 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La convention de compte',
  '# La convention de compte

## Pourquoi c''est important ?

Lorsque vous ouvrez un compte bancaire en France, vous signez un document essentiel appelé la "convention de compte". Ce n''est pas un simple papier, c''est un contrat légal qui définit l''ensemble des relations entre vous et votre banque : les services auxquels vous avez droit, les conditions d''utilisation de votre compte et de votre carte, et surtout, les frais bancaires qui vous seront appliqués. Ne pas lire et comprendre cette convention, c''est risquer de subir des frais inattendus, de ne pas connaître vos droits (ex: découvert autorisé), ou de ne pas comprendre les obligations qui vous incombent. Pour les étudiants internationaux, cette lecture est absolument cruciale pour éviter les mauvaises surprises financières et gérer votre budget en toute connaissance de cause.


-   Définir ce qu''est une convention de compte et sa valeur juridique.





### 1. Qu''est-ce que la convention de compte ?


-   Elle est obligatoire pour l''ouverture d''un compte de dépôt.


-   La banque a l''obligation de vous remettre un projet de convention de compte et une brochure tarifaire avant toute signature, afin que vous puissiez les consulter.





-   **Frais d''opérations** : Frais de virement international (surtout hors zone euro), frais de retrait à l''étranger, frais d''incidents de paiement (rejet de chèque, découvert non autorisé).

-   **Taux d''intérêt** : Elle indique le taux d''intérêt (agios) applicable en cas de découvert autorisé.
-   **Découvert non autorisé** : Les frais applicables en cas de découvert non autorisé (commissions d''intervention, agios majorés).

-   Vos devoirs (déclarer un changement d''adresse, ne pas dépasser le découvert autorisé) et les devoirs de la banque.





-   C''est une facilité de caisse qui vous permet d''avoir un solde négatif temporairement, dans une certaine limite, sans frais importants (mais avec des agios).

-   **Découvert non autorisé** : Si vous dépensez plus que ce que vous avez sur votre compte et que vous n''avez pas de découvert autorisé, ou si vous le dépassez, la banque facturera des frais importants (commissions d''intervention, agios).
-   **Chèque sans provision** : Émission d''un chèque sans argent sur le compte (interdit bancaire).
-   **Prélèvement rejeté** : Un prélèvement automatique qui n''a pas pu être honoré faute de provision.




-   Archivez l''original de votre convention de compte (et la brochure tarifaire) dans votre classeur administratif.

-   Les tarifs des banques peuvent changer. La banque a l''obligation de vous informer de toute modification des frais par courrier ou e-mail, généralement 2 mois avant l''application.




-   **Ne signez pas si vous n''avez pas tout compris**.
-   **Si vous êtes étudiant, demandez si l''offre est spécifiquement adaptée** (pas de frais, plafonds adaptés).
-   **Soyez attentif aux frais d''opérations hors zone euro** si vous recevez de l''argent ou voyagez beaucoup.




-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


',
  NULL,
  '[]'::sql

-- --- Cours 47 ---

-- COURS 48 : Le RIB (Relevé d'Identité Bancaire)
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le RIB (Relevé d''Identité Bancaire) : Votre identifiant financier en France',
  'rib-releve-identite-bancaire-identifiant-financier-france',
  'Ce cours est essentiel pour tous les étudiants internationaux en France. Le Relevé d''Identité Bancaire (RIB) est un document omniprésent dans votre vie financière. Il contient les informations uniques de votre compte bancaire français et est indispensable pour recevoir de l''argent (salaires, bourses, APL) et pour autoriser des prélèvements automatiques (loyer, électricité, téléphone). Nous vous expliquerons la différence entre l''IBAN et le BIC/SWIFT, où trouver votre RIB (en ligne, sur chéquier), et les règles pour le transmettre en toute sécurité, sans risque. Maîtriser le RIB est absolument crucial pour gérer vos flux financiers, automatiser vos paiements, et interagir sereinement avec l''administration et les prestataires de services en France.',
  'RIB : IBAN, BIC/SWIFT, où le trouver, comment le transmettre. Votre clé pour recevoir de l''argent et gérer vos paiements en France !',
  'budget_finances',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la composition d''un RIB (IBAN, BIC/SWIFT)", "Savoir où trouver et télécharger son RIB (espace client, chéquier)", "Identifier les situations où le RIB est demandé (salaires, APL, prélèvements)", "Maîtriser les conseils pour transmettre son RIB en toute sécurité"]'::jsonb,
  '["Avoir un compte bancaire français"]'::jsonb,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 48
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'IBAN vs BIC/SWIFT',
  '# IBAN vs BIC/SWIFT : Les identifiants de votre compte bancaire

## Pourquoi c''est important ?

Lorsque vous ouvrez un compte bancaire en France, vous recevez un Relevé d''Identité Bancaire (RIB) qui contient des informations clés pour identifier votre compte. Parmi elles, l''**IBAN** et le **BIC/SWIFT** sont les plus importantes. Comprendre la différence entre ces deux identifiants est absolument crucial pour les étudiants internationaux afin de recevoir de l''argent (salaires, bourses, APL), effectuer des virements (loyer), et autoriser des prélèvements automatiques. Une erreur dans ces numéros peut entraîner des problèmes de paiement, des retards, ou l''impossibilité de recevoir vos fonds. Maîtriser ces notions est fondamental pour toutes vos opérations financières en France et à l''international.


-   Définir ce qu''est l''IBAN et sa structure.
-   Identifier les situations où l''IBAN et le BIC sont nécessaires.


Ces deux codes sont des standards internationaux qui permettent d''identifier un compte bancaire de manière unique dans le monde entier.

🔗 [Banque de France : Qu''est-ce que l''IBAN et le BIC ?](https://www.banque-france.fr/fr/vos-services/particuliers/comprendre-votre-banque/l-iban-et-le-bic) - Explications de la Banque de France.


### 1. L''IBAN (International Bank Account Number) : Votre numéro de compte universel

L''IBAN est l''identifiant unique de votre compte bancaire.

-   L''IBAN est une suite alphanumérique qui peut contenir jusqu''à 34 caractères.
-   **Pour un compte français** : Il commence toujours par "FR" (code pays), suivi de 2 caractères de contrôle (clé IBAN), puis 23 chiffres et lettres qui correspondent à votre ancien numéro de compte national (code banque, code guichet, numéro de compte, clé RIB).

-   L''IBAN est indispensable pour effectuer et recevoir des **virements nationaux (SEPA)** et **internationaux (hors SEPA)**.
-   Il est également utilisé pour autoriser des **prélèvements automatiques** (loyer, factures d''électricité, téléphone, abonnements).

-   Sur votre Relevé d''Identité Bancaire (RIB).


### 2. Le BIC / SWIFT (Bank Identifier Code) : L''identifiant de votre banque



-   Le BIC est indispensable pour les **virements internationaux**, surtout ceux réalisés en dehors de la zone SEPA (Single Euro Payments Area), c''est-à-dire en dehors de l''Europe.
-   Pour les virements au sein de la zone SEPA (virements en euros entre pays européens), l''IBAN seul est généralement suffisant, mais le BIC est souvent demandé par sécurité.

-   Sur votre Relevé d''Identité Bancaire (RIB).

### 3. Quand l''IBAN et le BIC sont-ils nécessaires ?


#### a) Pour recevoir de l''argent
-   **Virements de l''étranger** (de vos parents, par exemple) : La personne qui vous envoie de l''argent aura besoin de votre IBAN et de votre BIC (surtout si le virement vient d''un pays hors zone SEPA).

-   **Virements de loyer** : Vous aurez besoin de l''IBAN (et parfois du BIC) du propriétaire ou de l''agence.




-   **Méfiez-vous des faux RIB** : Des arnaques existent où des fraudeurs vous envoient un faux RIB pour que vous leur viriez de l''argent. Vérifiez toujours auprès du bénéficiaire par un autre moyen (téléphone) avant d''effectuer un virement important.



-   Votre **Relevé d''Identité Bancaire (RIB)**.


-   **Ne donnez votre RIB qu''à des organismes ou personnes de confiance** et lorsque cela est nécessaire pour un paiement ou une réception de fonds.
-   **Pour les virements SEPA**, l''IBAN est suffisant. Pour les virements hors SEPA, le BIC est indispensable.
-   **Si vous devez faire un virement important** : Faites d''abord un petit virement de test pour vérifier que le compte est correct.
-   **Familiarisez-vous avec la structure de l''IBAN français**.


-   **Erreur de saisie de l''IBAN ou du BIC** : Cela peut entraîner la perte de fonds.
-   **Envoyer de l''argent à un faux RIB** : Les escroqueries sont fréquentes.
-   **Transmettre son RIB à n''importe qui** : Même si le RIB seul ne permet pas de retirer de l''argent, il peut être utilisé pour des prélèvements frauduleux.
-   **Confondre IBAN et numéro de carte bancaire** : Ce n''est pas la même chose.


-   🔗 [Banque de France : L''IBAN et le BIC](https://www.banque-france.fr/fr/vos-services/particuliers/comprendre-votre-banque/l-iban-et-le-bic) - La référence officielle.


L''IBAN (numéro de compte) et le BIC/SWIFT (identifiant de la banque) sont les identifiants uniques de votre compte bancaire français, regroupés sur votre RIB. Ils sont indispensables pour recevoir de l''argent (salaires, APL, virements internationaux) et pour autoriser des prélèvements automatiques. Vérifiez toujours la précision de ces numéros et ne transmettez votre RIB qu''en toute sécurité et à des organismes de confiance. Maîtriser l''IBAN et le BIC est fondamental pour gérer vos flux financiers en France et éviter les problèmes de paiement ou les fraudes.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 48 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Où trouver son RIB ?',
  '# Où trouver son RIB ?

## Pourquoi c''est important ?

Le Relevé d''Identité Bancaire (RIB) est un document omniprésent dans votre vie financière en France. Il vous sera demandé pour recevoir votre salaire de job étudiant, vos bourses, les APL de la CAF, et pour autoriser le paiement de vos factures (électricité, internet, téléphone) par prélèvement automatique. Savoir où trouver votre RIB rapidement et facilement est absolument crucial pour les étudiants internationaux afin de ne pas bloquer vos démarches administratives et financières. Ne pas avoir son RIB à portée de main peut entraîner des retards dans les paiements ou les réceptions de fonds. Maîtriser son accès est essentiel pour votre autonomie.


-   Comprendre l''utilité du RIB sur votre chéquier.


Une fois votre compte bancaire ouvert en France, votre banque vous fournit plusieurs exemplaires de votre RIB. Il est facile d''y accéder.

🔗 [Banque de France : L''IBAN et le BIC](https://www.banque-france.fr/fr/vos-services/particuliers/comprendre-votre-banque/l-iban-et-le-bic) - Explications sur le RIB.





-   Dans votre espace personnel, cherchez une rubrique intitulée "Mes documents", "Mes RIB", "Mon compte", "Gérer mes moyens de paiement".
-   Un lien ou un bouton "Télécharger mon RIB" (souvent au format PDF) est généralement disponible.

-   Vous pouvez l''imprimer pour avoir des copies physiques.




#### b) Demander un chéquier (si vous n''en avez pas)


D''autres supports pour le trouver.


#### b) Attestation d''ouverture de compte
-   Lors de l''ouverture de votre compte, la banque vous remet une attestation d''ouverture de compte sur laquelle le RIB est mentionné.








-   **Ne donnez votre RIB qu''à des organismes ou personnes de confiance** pour des opérations légitimes.
-   **Vérifiez toujours la justesse du RIB** que vous donnez ou que l''on vous donne.


-   **Perdre son RIB** : Mais comme il est facile à retrouver, ce n''est pas grave si vous avez les accès en ligne.


-   🔗 [Banque de France : L''IBAN et le BIC](https://www.banque-france.fr/fr/vos-services/particuliers/comprendre-votre-banque/l-iban-et-le-bic) - La référence.
-   🔗 [Fédération Bancaire Française (FBF) : Qu''est-ce qu''un RIB ?](https://www.fbf.fr/fr/particuliers/vie-quotidienne/comprendre-votre-convention-de-compte/) - Explications claires.
-   🔗 [Votre banque en ligne / application mobile](https://www.bnpparibas.com/) - Pour l''accès à votre espace client.


Votre RIB (Relevé d''Identité Bancaire) contient l''IBAN et le BIC/SWIFT de votre compte bancaire français. Vous pouvez le trouver facilement sur votre espace client en ligne/application mobile, votre chéquier, ou vos relevés de compte. Il est indispensable pour recevoir de l''argent (salaire, APL, virements) et pour les prélèvements automatiques. Conservez-le numériquement et physiquement, et ne le transmettez qu''à des organismes de confiance. Maîtriser l''accès à votre RIB est crucial pour toutes vos démarches financières en France.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 48 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Transmettre son RIB sans risque',
  '# Transmettre son RIB sans risque

## Pourquoi c''est important ?

Votre Relevé d''Identité Bancaire (RIB) est un document essentiel pour toutes vos transactions financières en France. Vous devrez le transmettre à votre employeur, à la CAF, à votre propriétaire, à vos fournisseurs d''énergie et d''accès internet, etc. Cependant, il est absolument crucial de le transmettre en toute sécurité pour éviter les fraudes. Des arnaqueurs peuvent tenter d''obtenir votre RIB pour mettre en place des prélèvements non autorisés. Pour les étudiants internationaux, la méconnaissance de ces risques peut entraîner des pertes financières significatives. Maîtriser les bonnes pratiques de transmission de votre RIB est fondamental pour protéger votre compte bancaire et éviter les désagréments.




Le RIB contient des informations suffisantes pour initier des prélèvements automatiques. C''est pourquoi sa transmission doit être faite avec prudence.






-   Une arnaque très courante : un fraudeur se fait passer pour votre propriétaire, votre employeur, ou un fournisseur, et vous envoie un faux RIB pour que vous lui viriez de l''argent. Vous pensez payer la bonne personne, mais l''argent part chez le fraudeur.
-   **Vérifiez toujours l''identité de votre interlocuteur et le RIB** avant de faire un virement, surtout si la demande est inhabituelle.



#### a) Via l''espace client sécurisé de l''organisme
-   **Avantage** : Les données sont cryptées et le système garantit l''identification.

-   **Lettre simple ou recommandée** : Vous pouvez envoyer une photocopie de votre RIB par courrier postal à l''organisme concerné.


-   Lors d''un rendez-vous avec votre banque, un propriétaire, ou une agence, vous pouvez leur donner une photocopie de votre RIB.



#### a) Pour recevoir de l''argent
-   **Votre propriétaire** : Si l''APL lui est versée directement, ou si vous souhaitez le remboursement du dépôt de garantie par virement.

-   **Fournisseurs d''énergie** (EDF, Engie, TotalEnergies).
-   **Fournisseurs d''accès internet/téléphone** (Orange, Free, SFR, Bouygues Telecom).



-   **Détecter les prélèvements inconnus** : Vérifiez chaque prélèvement pour vous assurer qu''il correspond bien à un service que vous avez souscrit.

-   **Démarche** : Contactez immédiatement votre banque pour signaler un prélèvement frauduleux. La banque a l''obligation de vous rembourser.
-   **Opposer un prélèvement** : Vous pouvez faire "opposition" à un prélèvement (pour les prélèvements futurs) ou demander à "révoquer" un mandat de prélèvement (annuler l''autorisation que vous avez donnée).




-   **Si une demande de RIB vous semble suspecte**, vérifiez l''identité de l''expéditeur par un autre canal (appelez le numéro officiel de l''organisme).
-   **Utilisez l''application mobile de votre banque** pour suivre vos dépenses et vos prélèvements en temps réel.


-   **Confondre un virement (que vous initiez) et un prélèvement (que l''autre initie avec votre RIB)**.




',
  NULL,
  '[]'::sql

-- --- Cours 48 ---

-- COURS 49 : Carte bancaire : Les options
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Carte bancaire en France : Débit immédiat,
  différé et plafonds',
  'carte-bancaire-france-debit-immediat-differe-plafonds',
  'Ce cours est essentiel pour tous les étudiants internationaux qui vont utiliser une carte bancaire en France. Le choix de votre carte, notamment entre le "débit immédiat" et le "débit différé", ainsi que la compréhension de vos "plafonds" de paiement et de retrait, ont un impact direct sur la gestion de votre budget. Ne pas maîtriser ces options peut entraîner des découverts bancaires, des paiements refusés, ou des difficultés à retirer de l''argent en cas de besoin. Nous vous expliquerons les différences entre les types de débit, le fonctionnement du paiement "sans contact" et ses limites, et comment gérer vos plafonds. Maîtriser sa carte bancaire est absolument crucial pour une gestion financière autonome et sereine en France.',
  'Carte bancaire France : débit immédiat/différé,
  sans contact,
  plafonds. Maîtrisez votre carte pour un budget serein !',
  'budget_finances',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la distinction entre carte à débit immédiat et à débit différé", "Identifier le fonctionnement et les limites du paiement "sans contact"", "Savoir gérer et adapter ses plafonds de paiement et de retrait", "Maîtriser les conseils pour une utilisation sécurisée de sa carte bancaire"]'::jsonb,
  '["Avoir un compte bancaire français"]'::jsonb,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 49
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Débit immédiat vs Débit différé',
  '# Débit immédiat vs Débit différé (Carte bancaire)

## Pourquoi c''est important ?

Lorsque vous recevez votre carte bancaire en France, l''une des caractéristiques les plus importantes est son type de débit : "débit immédiat" ou "débit différé". Cette option a un impact direct et majeur sur la gestion de votre budget et de votre compte bancaire. Ne pas comprendre cette différence, c''est risquer des découverts bancaires imprévus (avec des frais), ou au contraire, de mal anticiper vos dépenses. Pour les étudiants internationaux, souvent avec des revenus fluctuants ou un budget serré, faire le bon choix de carte et comprendre son fonctionnement est absolument crucial pour maintenir un équilibre financier et éviter les mauvaises surprises.


-   Définir ce qu''est une carte à débit immédiat et son fonctionnement.
-   Comprendre le principe d''une carte à débit différé et ses avantages/inconvénients.
-   Maîtriser les conseils pour choisir le type de carte adapté à votre profil d''étudiant.


Le choix entre débit immédiat et différé est une décision à prendre lors de l''ouverture de votre compte. Elle dépend de votre style de gestion budgétaire.




Le réflexe du "cash".


-   **Éviter les découverts** : Si vous n''avez pas l''argent, le paiement sera refusé, ce qui vous protège des frais de découvert.

-   **Moins de flexibilité** : Pas de "délai de réflexion" pour vos dépenses.

-   Les cartes à débit immédiat sont souvent reconnaissables à la mention "DÉBIT" ou "CASH" inscrite sur la carte.




-   **Les retraits d''espèces, en revanche, sont généralement débités immédiatement.**

-   **Souplesse de trésorerie** : Vous bénéficiez d''une avance de fonds (un "crédit" gratuit) pendant un mois. Utile si vous avez des revenus qui arrivent en fin de mois.
-   **Moins de refus** : Vous avez plus de chances que vos paiements passent, même si votre solde est temporairement bas, car le débit n''est pas immédiat.

-   **Risque de découvert élevé** : Si vous ne faites pas attention, le débit global de fin de mois peut vous placer en découvert (avec des frais importants : agios, commissions d''intervention).

-   Les cartes à débit différé sont souvent reconnaissables à la mention "CRÉDIT" inscrite sur la carte.


### 3. Le paiement "sans contact" : Rapidité et limites


-   Le paiement sans contact (NFC) vous permet de payer de petites sommes (généralement jusqu''à 50€ par transaction) en approchant simplement votre carte (ou smartphone/montre connectée) du terminal de paiement, sans saisir votre code PIN.










-   **Consultez régulièrement votre solde** sur l''application mobile ou votre espace client en ligne.
-   **En cas de perte ou de vol de votre carte, faites opposition immédiatement** via l''application mobile ou en appelant le numéro d''urgence de votre banque.






',
  NULL,
  '[]'::sql

-- --- Cours 49 ---

-- COURS 50 : Le Chéquier
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le Chéquier en France : Utilisation,
  remplissage et caution',
  'chequier-france-utilisation-remplissage-caution',
  'Ce cours est essentiel pour tous les étudiants internationaux en France. Le chèque, bien que moins utilisé qu''avant, reste un moyen de paiement courant pour certaines transactions, notamment pour les dépôts de garantie de location ou les gros achats. Comprendre si l''on utilise encore des chèques en France, comment remplir correctement un chèque, et la spécificité du "chèque de caution" non encaissé, est absolument crucial. Ne pas savoir utiliser un chéquier, ou le faire de manière incorrecte, peut entraîner des paiements refusés ou des problèmes avec des prestataires. Maîtriser le chéquier est fondamental pour compléter vos moyens de paiement et gérer des situations spécifiques en toute sécurité.',
  'Chéquier en France : encore utilisé ? Comment remplir,
  chèque de caution non encaissé. Maîtrisez ce moyen de paiement !',
  'budget_finances',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''usage du chèque en France et s''il est encore pertinent", "Savoir comment remplir correctement un chèque (montant, bénéficiaire, date, signature)", "Identifier la spécificité du "chèque de caution" non encaissé (pour le logement)", "Maîtriser les conseils pour commander et utiliser son chéquier en toute sécurité"]'::jsonb,
  '["Avoir un compte bancaire français"]'::jsonb,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 50
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Utilise-t-on encore des chèques ?',
  '# Utilise-t-on encore des chèques ?

## Pourquoi c''est important ?

Dans votre pays d''origine, l''utilisation du chèque comme moyen de paiement peut être très courante ou, au contraire, complètement obsolète. En France, la carte bancaire a largement supplanté le chèque pour les paiements courants, mais le chèque reste un moyen de paiement utilisé pour certaines situations spécifiques. Comprendre si l''on utilise encore des chèques en France et dans quelles circonstances est absolument crucial pour les étudiants internationaux afin de ne pas être surpris(e), de savoir quand il est pertinent de proposer ce moyen de paiement, et de ne pas se retrouver bloqué(e) si un prestataire l''exige. C''est une connaissance importante pour compléter vos moyens de paiement.


-   Comprendre l''évolution de l''utilisation du chèque en France.
-   Savoir quand il est préférable d''utiliser un autre moyen de paiement.
-   Maîtriser les conseils pour décider si vous avez besoin d''un chéquier.


Le chèque a été un moyen de paiement majeur en France pendant des décennies, mais son usage a fortement diminué avec l''essor de la carte bancaire et des virements.



### 1. L''évolution de l''utilisation du chèque en France


-   L''utilisation du chèque pour les paiements quotidiens a considérablement diminué en France. La carte bancaire est le moyen de paiement le plus utilisé pour les achats en magasin et en ligne.
-   Les virements bancaires sont privilégiés pour les paiements de factures ou les transferts d''argent.

-   Malgré son déclin, le chèque n''a pas complètement disparu et reste un moyen de paiement légal.




-   Pour des transactions entre personnes privées (achat/vente de biens d''occasion, remboursement d''une somme importante à un ami).

-   **Dépôt de garantie (caution locative)** : C''est un usage très fréquent. Le propriétaire peut demander un chèque de caution (qu''il n''encaissera pas si tout est en ordre au départ).


-   Pour des sommes importantes où le virement n''est pas adapté ou pour avoir une preuve écrite du paiement.

### 3. Quand est-il préférable d''utiliser un autre moyen de paiement ?



-   Loyer mensuel, factures d''électricité, internet, téléphone : Le prélèvement automatique ou le virement permanent sont plus adaptés.

#### c) Paiements à l''étranger
-   Le chèque bancaire français n''est pas utilisable à l''étranger. Préférez la carte bancaire ou les virements internationaux.

#### d) Risques d''impayés

### 4. Avez-vous besoin d''un chéquier en tant qu''étudiant international ?


-   **Oui, très probablement** : Pour le dépôt de garantie. C''est la principale raison pour laquelle un chéquier est utile pour un étudiant en France.

#### b) Si vous n''êtes pas locataire (ou en résidence CROUS/privée qui n''en demande pas)
-   Probablement **non** : Si vous n''avez pas de besoin spécifique de chèques, vous pouvez vous en passer et privilégier la carte bancaire et les virements.

-   Demandez-le à votre banque lors de l''ouverture de compte ou via votre espace client en ligne.




-   **Soyez vigilant(e) à la date de validité d''un chèque** (1 an et 8 jours après sa date d''émission).
-   **Vérifiez toujours la provision de votre compte** avant d''émettre un chèque.


-   **Émettre un chèque sans provision** : Cela entraîne des frais, des pénalités, et un risque d''interdit bancaire (vous ne pourrez plus utiliser de chèques ni même de carte bancaire).
-   **Donner un chèque de caution sans que cela soit mentionné comme "non encaissable"** sur l''état des lieux ou le bail.




Le chèque est un moyen de paiement en déclin en France, largement supplanté par la carte bancaire. Il reste toutefois utilisé pour certaines situations, notamment le dépôt de garantie de location et certains paiements entre particuliers. Si vous êtes locataire, un chéquier est très probablement utile pour le chèque de caution. Vérifiez toujours la provision de votre compte avant d''émettre un chèque, et ne le donnez jamais à des inconnus. Comprendre son usage et ses risques est crucial pour compléter vos moyens de paiement en France.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 50 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Comment remplir un chèque (Tuto)',
  '# Comment remplir un chèque (Tuto)

## Pourquoi c''est important ?

Bien que l''utilisation du chèque diminue en France, il reste un moyen de paiement que vous pourriez être amené(e) à utiliser, notamment pour le dépôt de garantie de votre logement ou pour des transactions entre particuliers. Remplir correctement un chèque est absolument crucial : une erreur (montant en chiffres/lettres, date, signature) peut le rendre invalide, entraîner un refus de paiement, ou même des problèmes avec votre banque (chèque sans provision). Pour les étudiants internationaux, peu familiers avec ce mode de paiement, maîtriser le remplissage d''un chèque est fondamental pour garantir la validité de votre paiement et éviter tout désagrément.


-   Identifier les différentes zones d''un chèque à remplir.
-   Comprendre l''importance de chaque champ (montant, bénéficiaire, date, signature).


Un chèque est un ordre de paiement écrit donné par vous (le tireur) à votre banque (le tiré) pour qu''elle paie une somme déterminée à une personne (le bénéficiaire).





-   **En haut à droite** : Inscrivez le montant en chiffres (ex: "500,00").
-   Utilisez des virgules pour les centimes (ex: "500,50").
-   Tracez une ligne après le montant jusqu''à la fin de la zone pour éviter les ajouts frauduleux.

-   **Au centre du chèque** : Écrivez le montant en toutes lettres (ex: "Cinq cents euros" ou "Cinq cents euros et cinquante centimes").
-   C''est le montant en lettres qui fait foi en cas de différence avec le montant en chiffres.
-   Tracez une ligne après le montant jusqu''à la fin de la zone.

-   **Champ "à l''ordre de" ou "payez contre ce chèque à"** : Inscrivez le nom exact du bénéficiaire (personne physique ou morale) qui va encaisser le chèque.
-   **Exemple** : "Madame Dupont" ou "Agence Immobilière XYZ".

#### d) Le lieu d''émission
-   **Champ "À" ou "Émis à"** : Inscrivez la ville où vous remplissez le chèque (ex: "Paris").

#### e) La date d''émission
-   **Champ "Le" ou "Date"** : Inscrivez la date exacte du jour où vous remplissez le chèque (ex: "15/11/2025").




1.  **Date** : Commencez par la date (ex: "le 15 novembre 2025 à Paris").
2.  **Bénéficiaire** : Écrivez le nom du bénéficiaire (ex: "à l''ordre de Madame Dupont").
3.  **Montant en chiffres** : Écrivez le montant en chiffres (ex: "500,00"). Tracez une ligne.
4.  **Montant en lettres** : Écrivez le montant en toutes lettres (ex: "Cinq cents euros"). Tracez une ligne.



-   Pour un dépôt de garantie de location, le propriétaire peut demander un "chèque de caution" qu''il s''engage à **ne pas encaisser**.

-   Sur le chèque lui-même ou sur un document annexe (état des lieux, bail), il est fortement recommandé de mentionner "Chèque de caution non encaissable".
-   Le propriétaire ne peut encaisser ce chèque qu''en cas d''impayés ou de dégradations prouvées.





-   **Tracez des lignes** après le montant en chiffres et en lettres pour qu''aucun chiffre ou mot ne puisse être ajouté.
-   **Pour un chèque de caution**, soyez très clair avec le propriétaire sur le fait qu''il ne doit pas être encaissé et faites-le mentionner sur le bail ou l''état des lieux.


-   **Laisser des zones vierges** : Risque de fraude (ajout d''un montant, d''un bénéficiaire).
-   **Antidater ou postdater un chèque** : C''est illégal et peut entraîner des problèmes.
-   **Émettre un chèque sans provision** : Risque d''interdit bancaire (vous ne pourrez plus utiliser de chèques ni même de carte bancaire).
-   **Ne pas avoir une trace du chèque de caution** ou de l''accord de non-encaissement.




Remplir correctement un chèque en France est essentiel pour sa validité. Inscrivez précisément le montant en chiffres et en toutes lettres, le nom du bénéficiaire, le lieu et la date d''émission, et signez. Tracez des lignes pour éviter les fraudes. Pour un chèque de caution de logement, assurez-vous qu''il est bien mentionné comme "non encaissable". Ne signez jamais un chèque en blanc et vérifiez toujours la provision de votre compte. Maîtriser le remplissage d''un chèque garantit la sécurité et la validité de vos paiements.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 50 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le chèque de caution (non encaissé)',
  '# Le chèque de caution (non encaissé)

## Pourquoi c''est important ?

Lorsque vous louez un logement en France, le propriétaire (ou l''agence) vous demandera un "dépôt de garantie" (ou "caution"). Pour des raisons de simplicité, il peut parfois vous demander de lui remettre un **chèque de caution non encaissé**. Cette pratique est très courante, mais elle comporte des risques si elle n''est pas bien encadrée. Ne pas comprendre le principe du chèque non encaissé, ou ne pas prendre les précautions nécessaires, peut entraîner l''encaissement abusif de votre chèque par le propriétaire, vous privant d''une somme importante. Pour les étudiants internationaux, cette information est absolument cruciale pour protéger votre argent et éviter les litiges à votre départ du logement.


-   Définir ce qu''est un chèque de caution non encaissé.


Le chèque de caution est une forme de dépôt de garantie. Sa spécificité est qu''il ne doit être encaissé qu''en cas de manquement du locataire.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le dépôt de garantie](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-depot-de-garantie/) - Informations sur la caution.


### 1. Qu''est-ce qu''un chèque de caution non encaissé ?


-   **Engagement de non-encaissement** : Le propriétaire s''engage alors à ne pas encaisser ce chèque, mais à le conserver comme garantie.

-   Le dépôt de garantie classique est une somme d''argent que le propriétaire encaisse sur un compte. C''est le plus sécurisé pour le locataire.
-   Le chèque de caution non encaissé est une pratique tolérée mais qui offre moins de garanties au locataire si le propriétaire l''encaisse abusivement.




-   Le fait que le dépôt de garantie soit un chèque non encaissé doit impérativement être mentionné dans le contrat de location (bail) ou dans l''état des lieux d''entrée.
-   Cette mention doit préciser que le chèque n''est pas destiné à être encaissé et qu''il vous sera restitué à votre départ (si tout est en ordre).

-   **Chèque sans provision** : Si le chèque est encaissé et que vous n''avez pas la provision suffisante sur votre compte, vous risquez un rejet de chèque et des pénalités bancaires (dont l''interdit bancaire). C''est pourquoi vous devez toujours avoir les fonds sur votre compte tant que le chèque n''est pas restitué.



#### a) Mentionnez "non encaissable" sur le chèque
-   Rédigez la mention "Chèque de caution non encaissable" ou "À restituer" directement sur le chèque, au dos ou sur la partie libre.

#### b) Faites-le mentionner sur le bail ou l''état des lieux
-   Exigez que la clause "Le dépôt de garantie d''un montant de [X] euros est constitué par un chèque n°[numéro du chèque] non encaissé, à restituer au locataire en fin de bail après état des lieux de sortie conforme et apurement des comptes" figure sur votre bail ou sur l''état des lieux d''entrée.

-   Photographiez le chèque rempli (recto-verso) et daté avant de le remettre au propriétaire. C''est une preuve.

-   Assurez-vous que vous avez toujours la somme sur votre compte tant que le chèque n''est pas restitué. Si vous fermez votre compte, faites-vous restituer le chèque avant.

### 4. Que faire en cas d''encaissement abusif ?



-   Si le remboursement n''intervient pas, envoyez une lettre de mise en demeure par recommandé avec accusé de réception (voir cours 32.4).

-   C''est le recours amiable pour les litiges locatifs.



-   Le **chèque de caution** (avec la mention "non encaissable").
-   Votre **état des lieux d''entrée**.


-   **Privilégiez le virement pour le dépôt de garantie** : C''est le plus sécurisé pour vous, car la somme est encaissée, mais elle vous est due à la fin (avec un délai légal de restitution).


-   **Ne pas faire mentionner sur le bail ou l''état des lieux que le chèque est "non encaissable"**.
-   **Perdre le chèque** : Cela peut entraîner des frais et des démarches d''opposition.
-   **Faire confiance aveuglément** : Protégez-vous par l''écrit.
-   **Donner un chèque d''un montant supérieur au dépôt de garantie légal** (1 ou 2 mois de loyer HC).


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le dépôt de garantie](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-depot-de-garantie/) - La référence principale.
-   🔗 [Adresses des ADIL (Agences Départementales d''Information sur le Logement)](https://www.anil.org/adresses-utiles/) - Pour un conseil gratuit et personnalisé.


Le chèque de caution non encaissé est une pratique courante pour le dépôt de garantie de logement en France, mais elle présente des risques d''encaissement abusif. Exigez que la mention "non encaissable" figure sur le chèque lui-même et sur votre bail/état des lieux. Prenez une photo du chèque et assurez-vous d''avoir toujours la provision sur votre compte. En cas d''encaissement abusif, agissez rapidement avec une lettre de mise en demeure et saisissez les instances de conciliation. Maîtriser ces précautions est crucial pour protéger votre argent et éviter les litiges.
',
  NULL,
  '[]'::sql

-- --- Cours 50 ---

-- COURS 51 : Virements internationaux
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Virements internationaux : Moins de frais,
  plus de rapidité',
  'virements-internationaux-moins-frais-plus-rapidite',
  'Ce cours est essentiel pour tous les étudiants internationaux en France qui ont besoin d''envoyer ou de recevoir de l''argent depuis ou vers leur pays d''origine. Les virements internationaux peuvent être coûteux et lents avec les banques traditionnelles. Nous vous expliquerons la différence entre les frais bancaires classiques et les services spécialisés (comme Wise ou Remitly) qui offrent des solutions plus avantageuses. Nous ferons une démonstration de l''utilisation de ces plateformes, et nous aborderons les délais de réception et les pièges à éviter. Maîtriser ces outils est absolument crucial pour optimiser vos transferts d''argent, réduire les frais, et gérer votre budget efficacement.',
  'Virements internationaux : Frais bancaires vs Wise/Remitly. Démo,
  délais de réception. Économisez sur vos transferts d''argent !',
  'budget_finances',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre les coûts des virements internationaux avec les banques traditionnelles",
  "Découvrir les avantages des services spécialisés (Wise, Remitly)",
  "Maîtriser l''utilisation des plateformes de transfert d''argent en ligne",
  "Identifier les délais de réception et les pièges à éviter lors des virements"]'::jsonb,
  '["Avoir un compte bancaire en France et/ou dans votre pays d''origine"]'::jsonb,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 51
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Frais bancaires classiques vs Services spécialisés',
  '# Frais bancaires classiques vs Services spécialisés (Virements internationaux)

## Pourquoi c''est important ?

Pour les étudiants internationaux, les virements d''argent entre la France et votre pays d''origine (recevoir de l''argent de vos parents, envoyer des fonds, etc.) sont une réalité fréquente. Cependant, cette opération peut être coûteuse et complexe si vous utilisez uniquement les banques traditionnelles. Les "frais bancaires classiques" pour les virements internationaux sont souvent élevés et peu transparents, tandis que les "services spécialisés" comme Wise (ex-TransferWise) ou Remitly offrent des solutions bien plus avantageuses en termes de coût et de rapidité. Comprendre cette distinction est absolument crucial pour optimiser vos transferts d''argent, réduire vos dépenses, et gérer votre budget de manière efficace en France.




Les banques et les services de transfert d''argent ne fonctionnent pas de la même manière et n''ont pas les mêmes structures de coûts.





-   Des **commissions proportionnelles au montant transféré** peuvent également s''ajouter.

-   **Taux de change défavorable** : C''est souvent le coût le plus important et le moins visible. Les banques appliquent généralement un taux de change moins favorable que le taux réel du marché (taux moyen du marché ou taux interbancaire). La différence est leur marge.

-   Les virements internationaux via les banques traditionnelles peuvent prendre plusieurs jours ouvrés (3 à 5 jours, parfois plus), ce qui peut être long en cas d''urgence.




-   **Principe** : Wise utilise un système de "transfert de pair à pair". Votre argent est converti au taux de change réel du marché (le taux moyen du marché, celui que vous voyez sur Google), et Wise utilise un réseau de comptes locaux pour réduire les frais.


-   **Principe** : Remitly est spécialisé dans les transferts d''argent vers certains pays (notamment l''Afrique, l''Asie, l''Amérique Latine). Il propose différentes options de réception (compte bancaire, retrait d''espèces, portefeuille mobile).







-   Transferts souvent plus rapides, ce qui est crucial en cas d''urgence.


#### e) Facilité d''utilisation


-   Le **RIB du bénéficiaire** (ou ses coordonnées pour le retrait d''espèces si applicable).


-   **Privilégiez les services spécialisés** comme Wise ou Remitly pour les virements internationaux, surtout si la devise n''est pas l''euro.
-   **Si vous recevez de l''argent de vos parents** : Conseillez-leur d''utiliser ces services.


-   **Ne pas tenir compte du taux de change** : C''est souvent là que se cache la plus grosse part des frais.
-   **Envoyer de l''argent par des services non sécurisés ou peu fiables** : Attention aux arnaques (surtout Western Union/MoneyGram pour les paiements à des inconnus).
-   **Erreur dans le RIB ou les coordonnées du bénéficiaire** : L''argent peut être perdu ou difficile à récupérer.


-   🔗 [UFC-Que Choisir : Comparateur de services de transfert d''argent](https://www.quechoisir.org/comparateur-transfert-argent-n21674/) - Comparateur et conseils.


Pour vos virements internationaux depuis et vers la France, privilégiez les services spécialisés comme Wise ou Remitly plutôt que les banques traditionnelles. Ces plateformes offrent des frais beaucoup plus bas, des taux de change réels et une meilleure transparence, ainsi qu''une rapidité de transfert. Comparez systématiquement les offres avant chaque virement et assurez-vous de la précision des coordonnées du bénéficiaire. Maîtriser ces outils est absolument crucial pour optimiser vos transferts d''argent et gérer votre budget efficacement en France.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 51 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Utiliser Wise / Remitly (Démonstration)',
  '# Utiliser Wise / Remitly (Démonstration)

## Pourquoi c''est important ?

Comprendre la théorie des virements internationaux, c''est bien, mais savoir comment utiliser concrètement les plateformes de transfert d''argent en ligne comme Wise (ex-TransferWise) ou Remitly, c''est encore mieux. Pour les étudiants internationaux, ces outils sont devenus des incontournables pour envoyer ou recevoir de l''argent avec des frais minimes et une grande rapidité. Ne pas savoir naviguer sur ces plateformes, c''est risquer de commettre des erreurs (saisie des coordonnées, choix du mode de réception) qui peuvent retarder vos transferts ou vous faire perdre de l''argent. Ce cours vous propose une démonstration pas à pas pour maîtriser l''envoi et la réception de fonds via ces services, garantissant ainsi des transactions fluides et sécurisées.


-   Suivre une démonstration pas à pas de l''interface de Wise ou Remitly.
-   Comprendre les différentes options d''envoi et de réception de fonds.







-   Rendez-vous sur le site web (Wise.com ou Remitly.com) ou téléchargez l''application mobile.
-   Cliquez sur "S''inscrire" ou "Créer un compte".

#### b) Vérification d''identité (KYC - Know Your Customer)
-   Vous devrez télécharger une copie de votre pièce d''identité (passeport, titre de séjour) et parfois un justificatif de domicile.

### 2. Démontration : Envoyer de l''argent avec Wise (ou Remitly)


-   **"Envoyer depuis"** : Sélectionnez la devise dans laquelle vous envoyez l''argent (ex: EUR pour envoyer depuis la France). Saisissez le montant que vous souhaitez envoyer ou le montant que vous souhaitez que le bénéficiaire reçoive.
-   **"Envoyer vers"** : Sélectionnez la devise du bénéficiaire (ex: USD si le bénéficiaire est aux États-Unis, ou la monnaie de votre pays d''origine).
-   **Affichage immédiat** : La plateforme affichera immédiatement le taux de change, les frais de transfert, et le montant total que le bénéficiaire recevra. C''est la garantie de transparence.

-   Les plateformes peuvent proposer différentes options de rapidité (ex: "virement rapide", "virement économique"). Les options plus rapides peuvent coûter légèrement plus cher.

-   **Pour un retrait d''espèces (avec Remitly)** :
    -   L''agence de retrait souhaitée.
-   **Vérifiez toutes les informations deux fois !** Une erreur peut envoyer l''argent à la mauvaise personne.


-   Vous pourrez suivre l''avancement de votre transfert en temps réel sur votre espace personnel ou via l''application mobile.

### 3. Recevoir de l''argent depuis l''étranger


-   Pour recevoir de l''argent sur votre compte bancaire français, donnez votre **RIB complet (IBAN et BIC/SWIFT)** à la personne qui vous envoie les fonds.

-   Les fonds seront crédités directement sur votre compte bancaire français dans les délais indiqués par la plateforme d''envoi.


-   Votre **pièce d''identité** (pour l''inscription).


-   **Créez votre compte et faites la vérification d''identité avant d''avoir un besoin urgent.** Cela peut prendre quelques heures à quelques jours.
-   **Partagez ces informations avec vos parents ou proches** qui pourraient vous envoyer de l''argent.
-   **Conservez l''historique de vos transactions** sur la plateforme.


-   **Erreur de saisie de l''IBAN ou des informations du bénéficiaire** : L''argent peut être envoyé au mauvais compte et être très difficile à récupérer.
-   **Ne pas faire la vérification d''identité** : Cela bloquera vos transferts importants.
-   **Se fier à des messages ou e-mails frauduleux** qui vous demandent de confirmer un transfert que vous n''avez pas initié.
-   **Ne pas tenir compte des délais de réception** (surtout si l''argent est urgent).
-   **Faire des transferts d''argent à des inconnus** via ces plateformes (même si sécurisées, le risque de fraude est toujours là).


-   🔗 [Remitly : Centre d''aide](https://help.remitly.com/fr/s/) - FAQ et support.
-   🔗 [ACPR (Autorité de Contrôle Prudentiel et de Résolution)](https://acpr.banque-france.fr/) - L''organisme qui régule ces services (Wise et Remitly sont des établissements de paiement agréés).


Les plateformes comme Wise et Remitly simplifient grandement les virements internationaux, offrant des frais réduits et une grande rapidité. Créez un compte, effectuez la vérification d''identité, puis suivez la démonstration pour envoyer de l''argent en choisissant les devises, le montant, et en saisissant précisément les coordonnées du bénéficiaire. Vérifiez toutes les informations deux fois et utilisez une carte bancaire pour un paiement rapide. Maîtriser l''utilisation de ces services est absolument crucial pour des transferts d''argent fluides, économiques et sécurisés, essentiels à votre budget d''étudiant international en France.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 51 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Délais de réception',
  '# Délais de réception des virements internationaux

## Pourquoi c''est important ?

Lorsque vous effectuez ou recevez un virement international (depuis ou vers votre pays d''origine), les délais de réception des fonds peuvent varier considérablement. Ne pas connaître ces délais, c''est risquer de se retrouver sans argent au moment où vous en avez besoin, de manquer un paiement important (loyer, factures), ou de générer un stress inutile. Pour les étudiants internationaux, qui dépendent souvent de transferts de fonds réguliers, comprendre précisément les délais de réception est absolument crucial pour planifier votre budget, anticiper vos dépenses, et vous assurer une gestion financière fluide et sereine en France.









-   **Zone SEPA (Single Euro Payments Area)** : Regroupe les pays de l''Union Européenne, l''Islande, le Liechtenstein, la Norvège, Monaco, Saint-Marin, Suisse, Andorre et le Vatican. Les virements en euros entre ces pays sont les plus rapides.
-   **Hors zone SEPA** : Les virements vers d''autres pays (votre pays d''origine, par exemple, s''il n''est pas dans la zone SEPA) sont plus longs et plus complexes.

-   Un virement en euros est plus rapide qu''un virement qui implique un changement de devise.

-   **Banques traditionnelles** : Impliquent souvent des banques "correspondantes" intermédiaires, ce qui allonge les délais.
-   **Services spécialisés (Wise, Remitly)** : Leur système interne de comptes locaux et leur technologie leur permettent d''être beaucoup plus rapides.

#### d) L''heure d''émission du virement
-   Un virement effectué en fin de journée ou le week-end ne sera traité qu''au début du jour ouvré suivant.




-   **Délai** : Généralement un maximum d''**un jour ouvré** (J+1) si le virement est effectué avant l''heure limite de la banque.

#### b) Virements hors SEPA (hors zone euro, vers d''autres pays)
-   **Délai** : Les virements internationaux (SWIFT) peuvent prendre entre **3 et 5 jours ouvrés**, voire plus (parfois jusqu''à 10 jours) si de nombreuses banques intermédiaires sont impliquées ou si le pays de destination a des régulations spécifiques.
-   **Cas de la France vers votre pays d''origine** : Le délai dépendra de la banque émettrice en France et de la banque réceptrice dans votre pays.



-   **Délais courts** : Wise est réputé pour la rapidité de ses transferts. De nombreux virements sont **instantanés** ou sont livrés **en quelques heures** (moins d''un jour ouvré).

-   **Option "express"** : Permet une réception en quelques minutes ou heures (souvent avec des frais plus élevés).
-   **Option "économie"** : Peut prendre quelques jours.



-   **Anticipez vos besoins financiers** : N''attendez pas d''être à court d''argent pour demander un virement.
-   **Communiquez avec vos proches** : Informez vos parents ou ceux qui vous envoient de l''argent sur les délais et les options les plus rapides.

-   Activez les notifications sur votre application bancaire ou l''application Wise/Remitly pour être informé(e) de l''arrivée des fonds.

#### c) En cas d''urgence absolue
-   **Services "express"** des plateformes spécialisées (Remitly, Wise) : Si le virement est hors SEPA et que l''option est disponible.
-   **Retrait d''espèces (via Western Union/MoneyGram en cas d''extrême urgence et prudence)** : Ces services sont très rapides (quelques minutes), mais coûteux et risqués pour des gros montants (voir leçon 20.1 sur les arnaques). À utiliser avec la plus grande prudence et uniquement si vous êtes sûr(e) de l''identité du destinataire.




-   **Privilégiez les virements en début de semaine** pour avoir une chance qu''ils arrivent avant le week-end.
-   **Si vous recevez de l''argent d''un pays hors SEPA, informez-vous sur les délais spécifiques** de ce pays.
-   **Suivez l''état de votre virement** sur l''application ou l''espace client du service utilisé.


-   **Manquer un paiement** (loyer, facture) parce que le virement n''est pas arrivé.
-   **Envoyer de l''argent sans vérifier les coordonnées du bénéficiaire**.
-   **Utiliser Western Union/MoneyGram pour des paiements importants** si ce n''est pas une urgence vitale.


-   🔗 [Remitly : Centre d''aide](https://help.remitly.com/fr/s/) - FAQ sur les délais.


Les délais de réception des virements internationaux varient : un jour ouvré pour les virements SEPA, 3 à 5 jours ouvrés (voire plus) pour les virements hors SEPA. Les services spécialisés comme Wise et Remitly sont souvent beaucoup plus rapides (instantanés ou en quelques heures). Anticipez vos besoins, planifiez vos transferts, et utilisez les prévisions de délai des plateformes. En cas d''urgence, privilégiez les options les plus rapides. Maîtriser ces délais est absolument crucial pour une gestion financière sereine et pour éviter les problèmes de trésorerie en France.
',
  NULL,
  '[]'::sql

