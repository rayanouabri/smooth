-- ==========================================
-- LOT 4 : Cours 16 à 20
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 16 ---

-- COURS 17 : Le dossier de location en béton
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'a6b7c8d9-e0f1-4012-g3h4-i5j6k7l8m9n0',
  'Le dossier de location en béton : Constituez le parfait candidat',
  'dossier-location-en-beton-parfait-candidat',
  'Ce cours est un guide indispensable pour les étudiants internationaux souhaitant maximiser leurs chances de trouver un logement en France. Constituer un "dossier de location en béton" est la clé pour se démarquer dans un marché immobilier compétitif. Nous vous apprendrons à préparer une page de garde impactante pour faire bonne impression, à identifier les documents obligatoires (identité, ressources) exigés par les propriétaires et agences, à connaître les documents strictement interdits (que l''on ne peut pas vous demander), et à fusionner efficacement vos PDF pour un envoi numérique professionnel. Maîtriser ce dossier est crucial pour présenter votre candidature de manière impeccable et sécurisée.',
  'Dossier de location béton : page de garde, documents obligatoires/interdits, PDF. Le guide pour votre logement !',
  'logement',
  'intermediaire',
  'fr',
  5,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Créer une page de garde professionnelle et impactante", "Identifier les documents obligatoires pour un dossier de location", "Connaître les documents interdits par la loi pour protéger vos droits", "Fusionner et organiser son dossier numérique pour un envoi efficace"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  520,
  3900
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 17
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '7c8d9e0f-1a2b-4012-i3j4-k5l6m7n8o9p0',
  'a6b7c8d9-e0f1-4012-g3h4-i5j6k7l8m9n0',
  'La page de garde : Faire bonne impression',
  '# La page de garde : Faire bonne impression

## Pourquoi c''est important ?

Dans un marché locatif compétitif comme celui de la France, les propriétaires et les agences immobilières reçoivent un grand nombre de dossiers de candidature. Votre dossier est votre première et souvent unique chance de faire bonne impression avant même une rencontre. Une page de garde soignée, claire et professionnelle n''est pas un détail, c''est un atout majeur. Elle montre votre sérieux, votre organisation et votre motivation. Une page de garde bien conçue peut inciter le bailleur à examiner votre dossier plus attentivement, tandis qu''une absence ou une présentation négligée risque de faire passer votre candidature inaperçue.


-   Comprendre l''importance d''une page de garde impactante pour votre dossier de location.


La page de garde de votre dossier de location est un peu comme la première page de votre CV : elle doit capter l''attention et donner envie d''en savoir plus. Elle doit être informative, esthétique et refléter votre professionnalisme.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le dossier de location](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-dossier-de-location/) - Conseils généraux sur le dossier de location.


### 1. Les objectifs d''une page de garde réussie

Faire la différence dès le premier coup d''œil.




-   **Numéro de téléphone** : Avec l''indicatif international si vous utilisez un numéro étranger temporaire.
-   **Nationalité** et **statut** (ex: "Étudiant International").

-   **Type de logement** (ex: "Appartement T1", "Studio").
-   **Date d''emménagement souhaitée**.

-   **"Dossier de candidature pour M./Mme [Votre Nom]"**.
-   **Situation professionnelle/académique** : "Étudiant(e) en Master 2 à l''Université de Paris Diderot", "Futur(e) doctorant(e) à l''École Normale Supérieure".
-   **Garant** : "Dossier avec garantie VISALE" ou "Dossier avec garant solvable (parents)".
-   **Stabilité financière** : "Ressources suffisantes et stables".

#### d) Une photo d''identité (facultatif mais recommandé)
-   Une photo d''identité récente et professionnelle peut rendre votre dossier plus personnel et mémorable. Évitez les photos de vacances ou trop informelles.

-   "Je suis [Votre Nom], étudiant(e) international(e) sérieux(se) et calme, à la recherche d''un logement pour mes études de [domaine] à [ville]. Mon dossier est complet et comprend une garantie solide."



-   **Hiérarchie de l''information** : Utilisez des titres, des sous-titres, du gras pour guider la lecture.


-   Une **photo d''identité professionnelle**.


-   **Personnalisez la page de garde pour chaque annonce** : Modifiez l''adresse du logement, la date souhaitée.
-   **Mettez-vous à la place du bailleur** : Que voudrait-il savoir en premier ? Qu''est-ce qui le rassurerait ?
-   **Soyez honnête et direct** : N''essayez pas de cacher des informations, cela finira par se savoir.


-   **Trop d''informations ou informations inutiles** : La page de garde doit être synthétique.
-   **Fautes d''orthographe** : Cela donne une mauvaise image.




Une page de garde professionnelle et bien structurée est essentielle pour faire une bonne première impression avec votre dossier de location. Elle doit inclure vos coordonnées, le logement souhaité, vos principaux atouts et une brève présentation. Optez pour un design sobre et clair, et assurez-vous qu''elle tient sur une seule page. Cette attention aux détails augmentera significativement vos chances de voir votre candidature étudiée favorablement par les propriétaires et agences immobilières.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '8d9e0f1a-2b3c-4012-j4k5-l6m7n8o9p0q1',
  'a6b7c8d9-e0f1-4012-g3h4-i5j6k7l8m9n0',
  'Les documents obligatoires (Identité, Ressources)',
  '# Les documents obligatoires (Identité, Ressources)

## Pourquoi c''est important ?

La constitution de votre dossier de location en France est soumise à des exigences très précises concernant les documents à fournir. Il est absolument crucial de connaître la liste exhaustive des pièces obligatoires pour prouver votre identité et vos capacités financières. Un dossier incomplet est la raison numéro un des rejets de candidature, même si vous êtes un candidat idéal. En tant qu''étudiant international, la méconnaissance de ces exigences peut vous faire perdre un temps précieux et des opportunités de logement. Maîtriser cette liste et préparer tous les documents à l''avance est la clé pour présenter un dossier solide, conforme à la loi et rassurer les propriétaires ou agences.


-   Identifier la liste des documents d''identité obligatoires pour le locataire.


La loi encadre strictement les documents qu''un propriétaire ou une agence immobilière peut vous demander. L''objectif est de protéger le locataire tout en permettant au bailleur de s''assurer de votre solvabilité et de votre identité.



### 1. Documents d''identité du locataire (vous)


#### a) Pièce d''identité en cours de validité
-   **Passeport** : Original et copie (page d''identité, page du visa VLS-TS validé ou titre de séjour). C''est la pièce la plus importante pour les étrangers.
-   **Carte nationale d''identité** : Si vous êtes ressortissant(e) de l''EEE ou d''un pays ayant un accord spécifique.

-   **Facture d''électricité, de gaz, d''eau ou de téléphone fixe/internet** : De moins de 3 mois, à votre nom.
-   **Attestation d''hébergement** : Si vous êtes hébergé(e) chez un tiers, l''attestation de l''hébergeant + sa pièce d''identité + son justificatif de domicile de moins de 3 mois.

🔗 [ANIL : Les documents d''identité du locataire](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-dossier-de-location/) - Informations complémentaires.



-   **Avis d''imposition** ou **avis de situation déclarative à l''impôt sur le revenu (ASDIR)** : Du dernier ou des deux derniers exercices fiscaux. Même un avis de non-imposition est une preuve.
-   **Justificatifs de vos ressources** : Tout document prouvant vos revenus (argent disponible sur un compte bancaire, virements réguliers de l''étranger).

-   **Lettre de vos parents** : S''ils vous soutiennent financièrement, expliquant les transferts de fonds et la régularité.



La présence d''un garant est souvent exigée.

#### a) Documents d''identité du garant
-   **Pièce d''identité** : Passeport ou carte d''identité en cours de validité (recto-verso).


-   **Avis d''imposition** : Du dernier ou des deux derniers exercices fiscaux.

#### d) Attestation d''engagement de caution




-   **Nommez clairement les fichiers** : "Passeport_Nom_Prenom.pdf", "Revenus_Nom_Prenom.pdf", "Garant_Justificatifs_Nom_Prenom.pdf".



-   Vos **justificatifs de revenus** et **avis d''imposition**.


-   **Préparez votre dossier COMPLET à l''avance** : Ayez tous les documents numérisés et organisés dans un dossier prêt à être envoyé.


-   **Dossier incomplet** : C''est le motif de rejet le plus fréquent.
-   **Ne pas avoir de garant** (si demandé) : C''est un point bloquant pour de nombreux propriétaires.
-   **Oublier la pièce d''identité du garant** ou ses justificatifs de domicile/ressources.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le dossier de location](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-dossier-de-location/) - Conseils détaillés pour les locataires.
-   🔗 [PAP (Particulier à Particulier) : Le dossier de location du locataire](https://www.pap.fr/conseils/location/le-dossier-de-location-du-locataire-a1314) - Conseils d''un grand site d''annonces.


La constitution d''un dossier de location complet et conforme est essentielle pour trouver un logement en France. Rassemblez tous les documents d''identité (passeport, titre de séjour), de ressources (avis d''imposition, attestations de bourse, relevés bancaires) et ceux de votre garant (si applicable). Ne donnez jamais les originaux, classez et numérisez vos documents avec soin. Un dossier impeccable et bien organisé est votre meilleur atout pour rassurer les bailleurs et maximiser vos chances d''obtenir le logement de vos rêves.
',
  2,
  75,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '9e0f1a2b-3c4d-4012-k5l6-m7n8o9p0q1r2',
  'a6b7c8d9-e0f1-4012-g3h4-i5j6k7l8m9n0',
  'Les documents interdits (Ce qu''on ne peut pas vous demander)',
  '# Les documents interdits (Ce qu''on ne peut pas vous demander)

## Pourquoi c''est important ?

Bien que les propriétaires et agences immobilières aient besoin de s''assurer de votre solvabilité, la loi française protège les candidats locataires contre les demandes abusives ou discriminatoires. Il existe une liste stricte de documents qu''il est absolument interdit de vous demander pour constituer un dossier de location. En tant qu''étudiant international, la méconnaissance de cette liste vous expose au risque de divulguer des informations personnelles inutiles, de subir des discriminations, ou d''être confronté(e) à des exigences illégales. Savoir quels documents refuser est crucial pour protéger votre vie privée, vos droits, et éviter les arnaques.


-   Identifier la liste exhaustive des documents qu''un propriétaire ou une agence n''a pas le droit de demander.
-   Comprendre les motivations derrière l''interdiction de ces documents.
-   Savoir comment réagir si l''on vous demande un document interdit.


La loi du 6 juillet 1989, complétée par le décret du 30 janvier 1992 (et modifiée par la loi ALUR), liste précisément les documents qu''un bailleur peut exiger et, par conséquent, ceux qu''il ne peut pas demander. Cette protection vise à garantir une certaine équité dans l''accès au logement.





-   **Carte d''assuré social (Carte Vitale)** : Votre numéro de Sécurité Sociale est une donnée sensible.
-   **Certificat de bonne conduite de votre ancien propriétaire** : Ou toute attestation de "non-litige".
-   **Attestation d''absence de crédit** ou d''endettement.
-   **Renseignements contenus dans un fichier de personnes en situation d''expulsion**.
-   **Photos d''identité autres que celles figurant sur une pièce d''identité officielle**.

-   **Demande d''extrait de votre dossier médical personnel**.
-   **Photocopie d''une carte d''invalidité**.
-   **Photo d''identité spécifique demandée sans lien avec une pièce d''identité officielle**.

-   **Relevés de comptes bancaires (autres que l''attestation de solde)**.
-   **Attestation de votre employeur qui n''est pas une promesse d''embauche** (sauf fiche de paie ou contrat de travail).
-   **Plus de deux derniers avis d''imposition**.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Documents interdits](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-dossier-de-location/) - La liste des documents interdits pour le bailleur.



-   **Protection de la vie privée** : Empêcher les bailleurs d''accéder à des informations trop intimes ou sensibles qui ne sont pas pertinentes pour la location.

### 3. Comment réagir si l''on vous demande un document interdit ?


#### a) Informez le bailleur ou l''agence
-   Expliquez poliment que le document demandé est illégal au regard de la loi (loi du 6 juillet 1989 et décret du 30 janvier 1992). Vous pouvez citer `Service-Public.fr` ou l''ANIL comme référence.

-   Ne cédez pas à la pression. Ne donnez jamais un document que l''on n''a pas le droit de vous demander.

#### c) En cas d''insistance ou de refus de votre dossier
-   **Contactez l''ANIL ou une ADIL** (Agence Départementale d''Information sur le Logement) : Ils pourront vous conseiller et, si besoin, intervenir.
-   **Déposez une plainte** : Si vous estimez être victime d''une discrimination avérée.




-   **Préparez votre dossier uniquement avec les documents légaux** : N''ajoutez pas de pièces non demandées.
-   **Ne vous sentez pas obligé(e) de tout accepter** sous prétexte que vous êtes étranger(ère) ou que vous avez du mal à trouver un logement. La loi s''applique à tous.


-   **Confondre "documents demandés mais que j''ai pas" et "documents interdits"** : La liste des interdits est non-négociable.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Liste des pièces non exigibles](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-dossier-de-location/#c10443) - Très clair et précis.


La loi française protège les candidats locataires en interdisant aux bailleurs de demander une liste précise de documents (carte Vitale, casier judiciaire, relevés de compte détaillés, etc.). Connaître cette liste est crucial pour protéger votre vie privée, éviter la discrimination et ne pas céder à des demandes illégales. Si l''on vous demande un document interdit, refusez poliment et informez l''ANIL ou le Défenseur des Droits si la situation persiste. La connaissance de vos droits est votre meilleure protection dans la recherche de logement en France.
',
  3,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'a0b1c2d3-e4f5-4012-z7a8-b9c0d1e2f3g4',
  'a6b7c8d9-e0f1-4012-g3h4-i5j6k7l8m9n0',
  'Fusionner son PDF pour l''envoi mail',
  '# Fusionner son PDF pour l''envoi mail

## Pourquoi c''est important ?

Dans le processus de recherche de logement en France, la plupart des agences immobilières et des propriétaires exigent que les dossiers de candidature soient envoyés par e-mail. Il est alors absolument crucial d''envoyer un dossier numérique clair, organisé et professionnel. Envoyer 20 fichiers PDF séparés et non nommés est une erreur majeure qui peut faire passer votre candidature inaperçue. Fusionner tous vos documents en un seul fichier PDF bien structuré montre votre sérieux, votre organisation et facilite énormément le travail du bailleur. C''est une petite astuce technique qui fait une grande différence pour maximiser vos chances d''obtenir le logement.


-   Comprendre l''importance d''un dossier PDF unique et bien organisé.


Un dossier de location contient de nombreuses pièces : passeport, titre de séjour, justificatif de domicile, relevés de notes, avis d''imposition, documents du garant... Tous ces documents doivent être numérisés. L''objectif est de les présenter de manière cohérente dans un fichier unique.

🔗 [Service-Public.fr : Le dossier de location](https://www.service-public.fr/particuliers/vosdroits/F1166) - Conseils sur les documents, implicitement sur l''organisation.




-   **Professionnalisme** : Un seul fichier PDF organisé est plus professionnel qu''une multitude de pièces jointes.
-   **Simplicité pour le destinataire** : Le propriétaire ou l''agence n''a qu''un seul fichier à ouvrir, à télécharger et à consulter. Il ne risque pas d''en perdre une partie.
-   **Lisibilité** : Vous maîtrisez l''ordre de présentation des documents, ce qui aide le bailleur à suivre votre logique.


De nombreuses solutions sont disponibles, simples d''utilisation.

-   Ces outils sont généralement gratuits pour un usage occasionnel et ne nécessitent pas d''installation de logiciel.

-   **Applications intégrées** : Certains systèmes d''exploitation (ex: macOS "Aperçu") ou suites bureautiques permettent de fusionner des PDF nativement.




-   **Organisez l''ordre des documents** : Avant de les fusionner, mettez-les dans l''ordre logique que vous souhaitez (ex: Page de garde > Pièce d''identité > Titre de séjour > Justificatif de domicile > Justificatifs de ressources > Documents du garant).
-   **Nommez le fichier fusionné de manière claire** : "Dossier_Location_NOM_Prenom.pdf" ou "Candidature_Logement_AdresseDuBien.pdf".
-   **Compressez le fichier** : Si le fichier final est trop lourd (plus de 5 Mo), utilisez un outil de compression PDF (souvent disponible sur les mêmes sites que la fusion) pour réduire sa taille sans trop altérer la qualité. La limite des pièces jointes d''un e-mail est souvent de 10 à 25 Mo.


-   **Envoyer trop de fichiers séparés** : C''est le signe d''un manque d''organisation.
-   **Ne pas vérifier l''ordre des documents après fusion** : Assurez-vous que tout est bien classé.
-   **Utiliser un site de fusion PDF non sécurisé** : Assurez-vous d''utiliser des sites reconnus qui garantissent la confidentialité de vos données.


-   🔗 [Adobe Acrobat en ligne : Fusionner PDF](https://www.adobe.com/fr/acrobat/online/merge-pdf.html) - Solution fiable d''Adobe.
-   🔗 [UFC-Que Choisir : Conseils sur le dossier de location](https://www.quechoisir.org/dossier-de-location-constituer-son-dossier-pour-louer-n22394/) - Pour l''organisation.
-   🔗 [Cybermalveillance.gouv.fr : Protéger ses données en ligne](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/proteger-ses-donnees-personnelles-lors-de-loffre-de-services-en-ligne) - Conseils pour la sécurité lors de l''utilisation d''outils en ligne.


Fusionner tous vos documents de location en un seul fichier PDF est une pratique indispensable pour un envoi par e-mail professionnel et efficace. Utilisez des outils en ligne gratuits et fiables, assurez-vous que votre page de garde est en première position, et que tous les documents sont dans un ordre logique. N''oubliez pas de nommer clairement votre fichier et de le compresser si nécessaire. Cette organisation impeccable augmentera considérablement l''attractivité de votre candidature et vos chances de trouver rapidement un logement en France.
',
  4,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 17 ---

-- COURS 18 : Trouver un garant
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'c7d8e9f0-a1b2-4012-e3f4-a5b6c7d8e9f0',
  'Trouver un garant pour votre logement en France : Solutions et astuces',
  'trouver-garant-logement-france-solutions-astuces',
  'Ce cours est essentiel pour les étudiants internationaux et les jeunes professionnels qui cherchent à louer un logement en France. La plupart des propriétaires exigent un garant, et en tant qu''étranger sans revenus français établis, en trouver un peut être un défi. Nous explorerons les différentes options : le rôle du garant physique (familial ou amical), les solutions de garants payants (comme GarantMe ou Unkle) qui s''adressent spécifiquement aux profils internationaux, et la caution bancaire comme alternative bloquée. Maîtriser ces options est crucial pour constituer un dossier de location solide et rassurer les bailleurs, maximisant ainsi vos chances de trouver votre futur logement en France.',
  'Trouver un garant pour votre location en France : physique, payant (GarantMe, Unkle), ou caution bancaire. Guide complet !',
  'logement',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le rôle et l''importance d''un garant pour la location", "Identifier les options de garants physiques (familial, amical)", "Découvrir les solutions de garants payants pour étudiants internationaux", "Comprendre le fonctionnement et les limites de la caution bancaire"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  450,
  3200
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 18
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '8e9f0a1b-2c3d-4012-f4a5-b6c7d8e9f0a1',
  'c7d8e9f0-a1b2-4012-e3f4-a5b6c7d8e9f0',
  'Le rôle du garant physique',
  '# Le rôle du garant physique

## Pourquoi c''est important ?

En France, pour la location d''un logement, il est très fréquent que les propriétaires et agences immobilières demandent un "garant". Le garant est une personne qui s''engage à payer le loyer et les charges du locataire en cas de défaillance de celui-ci. Pour un étudiant international sans revenus établis en France, la présence d''un garant solide est souvent une condition sine qua non pour l''accès au logement. Comprendre le rôle du garant physique, les obligations qu''il contracte, et les justificatifs qu''il doit fournir est absolument crucial pour rassurer les bailleurs et constituer un dossier de location compétitif.


-   Définir ce qu''est un garant physique et sa fonction.


Le garant est une garantie essentielle pour le propriétaire. C''est un gage de sécurité financière. Pour le locataire, trouver un garant peut être une étape décisive pour obtenir un logement.



### 1. Qu''est-ce qu''un garant physique et son rôle ?

C''est une personne qui se porte caution.

-   **Définition** : Un garant physique est une personne (membre de la famille, ami, proche) qui signe un acte de cautionnement avec le propriétaire du logement. Par cet acte, il s''engage à prendre en charge le paiement du loyer, des charges et d''éventuelles dégradations si le locataire ne peut pas le faire.
-   **Rôle** : Il offre une sécurité financière au propriétaire, réduisant ainsi le risque d''impayés.
-   **Importance pour les étudiants étrangers** : Comme vous n''avez souvent pas de revenus suffisants et stables en France, un garant solide est quasiment indispensable.



-   **Définition** : Le propriétaire ne peut se retourner contre le garant qu''après avoir épuisé toutes les voies de recouvrement contre le locataire (relances, commandement de payer).
-   **Processus** : Le propriétaire doit d''abord prouver que le locataire est incapable de payer, puis il peut demander au garant de prendre le relais.

-   **Définition** : C''est la forme la plus courante et la plus avantageuse pour le propriétaire. Le propriétaire peut directement demander au garant de payer les loyers et charges impayés **dès le premier impayé**, sans avoir à poursuivre d''abord le locataire.
-   **Processus** : Le propriétaire peut choisir de s''adresser au locataire ou au garant solidaire (ou aux deux simultanément) pour obtenir le paiement.
-   **Importance** : Pour le garant, c''est un engagement très fort. Pour le propriétaire, c''est une sécurité maximale.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le cautionnement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-cautionnement/) - Explications détaillées sur les cautions.


Le garant doit prouver qu''il peut payer.

-   **Revenus stables et suffisants** : Le garant doit avoir des revenus stables (CDI, fonctionnaire, retraité) et suffisants pour couvrir le loyer. Il est d''usage que ses revenus nets mensuels soient au moins 3 fois supérieurs au montant du loyer toutes charges comprises (loyer CC).
-   **Domiciliation en France** : Idéalement, le garant doit résider en France. Certains propriétaires acceptent des garants domiciliés dans l''Espace Économique Européen (EEE), mais c''est plus rare hors de l''EEE.

-   **Pièce d''identité** : Copie de la carte d''identité ou du passeport en cours de validité (recto-verso).
-   **Justificatif de domicile** : Copie d''une facture d''électricité, gaz, eau, ou avis de taxe foncière de moins de 3 mois.
    -   Dernier avis d''imposition (ou 2 derniers).
-   **Attestation d''engagement de caution** : Un document écrit (souvent sur papier libre, mais avec un modèle légal) par lequel le garant s''engage à payer. Cet acte doit préciser s''il s''agit d''une caution simple ou solidaire, le montant maximal garanti, la durée de l''engagement, et être signé et rédigé de manière manuscrite pour les mentions importantes.


### 4. L''acte de cautionnement

Ce document est l''engagement juridique du garant.

-   **Forme** : L''acte de cautionnement doit être écrit. Il peut être sous seing privé (entre particuliers) ou authentique (devant notaire, ce qui est plus lourd et coûteux).
-   **Information annuelle du garant** : Le propriétaire est tenu d''informer le garant chaque année de l''évolution de la dette locative.


-   Les **documents d''identité, de domicile et de ressources** de votre garant.
-   Le **modèle d''acte de cautionnement** (souvent fourni par l''agence ou à télécharger).


-   **Communiquez clairement avec votre garant** : Assurez-vous qu''il comprend bien la portée de son engagement, surtout s''il s''agit d''une caution solidaire.
-   **Optez pour la caution solidaire si possible** : Bien qu''elle engage plus le garant, elle est préférée par les propriétaires et peut faciliter l''accès au logement.
-   **Utilisez les modèles officiels** : Pour l''acte de cautionnement, il existe des modèles sur `Service-Public.fr` ou `ANIL`.


-   **Ne pas avoir de garant du tout** : Pour de nombreux logements, c''est un critère éliminatoire.
-   **Manque de mentions manuscrites sur l''acte de cautionnement** : L''acte peut être déclaré nul.
-   **Ne pas informer le garant de ses obligations** : L''engagement est sérieux.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le cautionnement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-cautionnement/) - Très détaillé sur les types de caution.
-   🔗 [Modeles-types.fr : Modèle d''acte de cautionnement](https://www.modeles-types.fr/location/modele-acte-cautionnement-solidaire-n213) - Pour un exemple de document.
-   🔗 [GarantMe / Unkle (plateformes de garantie)](https://www.garantme.fr/fr/locataire) - Si vous n''avez pas de garant physique.


Le garant physique est une personne qui s''engage à payer votre loyer en cas de défaillance. Sa présence est souvent indispensable pour votre dossier de location en France. Comprenez la différence cruciale entre caution simple et solidaire (la solidaire étant préférée par les bailleurs mais plus engageante pour le garant). Votre garant doit prouver sa solvabilité avec des justificatifs de revenus et de domicile. Préparez un dossier complet et un acte de cautionnement conforme à la loi pour rassurer les propriétaires et maximiser vos chances de trouver un logement.
',
  1,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '9f0e1a2b-3c4d-4012-o5p6-q7r8s9t0u1v2',
  'c7d8e9f0-a1b2-4012-e3f4-a5b6c7d8e9f0',
  'GarantMe / Unkle : Les garants payants',
  '# GarantMe / Unkle : Les garants payants

## Pourquoi c''est important ?

Pour de nombreux étudiants internationaux ou jeunes professionnels qui n''ont pas de famille ou d''amis pouvant se porter garant en France, trouver un logement peut devenir un véritable casse-tête. Les garants physiques sont souvent une condition sine qua non, et c''est là qu''interviennent les organismes de garantie privés comme GarantMe ou Unkle. Ces entreprises proposent de se porter garant pour vous moyennant un coût, offrant une solution pour les profils étrangers qui peinent à trouver un garant traditionnel. Comprendre le fonctionnement de ces garants payants, leurs avantages, leurs coûts et les conditions d''éligibilité est crucial pour débloquer votre accès au logement et constituer un dossier de location solide et rassurant pour les bailleurs.


-   Connaître les coûts associés et les conditions d''éligibilité.


Face à la difficulté de trouver un garant physique, de nouvelles solutions ont émergé pour faciliter l''accès au logement, notamment pour les étudiants étrangers ou les jeunes actifs. Ces entreprises se substituent au garant physique et offrent une sécurité équivalente aux propriétaires.



### 1. Qu''est-ce qu''un garant payant (organisme de garantie) ?

C''est une entreprise qui se porte caution pour vous.

-   **Principe** : Un organisme de garantie (comme GarantMe, Unkle) analyse votre dossier, puis s''engage formellement auprès du propriétaire à payer le loyer et les charges en cas de défaillance de votre part.
-   **Contrepartie** : En échange de cette garantie, vous payez une commission ou un abonnement à l''organisme.
-   **Sécurité pour le propriétaire** : Pour le bailleur, c''est une garantie équivalente, voire supérieure, à un garant physique, car il s''agit d''une entité professionnelle et solvable.



-   **Spécialisation** : GarantMe est l''une des plateformes les plus utilisées, notamment par les étudiants internationaux et les jeunes actifs.
-   **Processus** : Vous déposez votre dossier en ligne sur leur plateforme. Ils l''analysent et, si vous êtes éligible, vous délivrent un certificat de garantie en 24 à 48 heures.


-   **Processus** : Dépôt de dossier en ligne, analyse rapide et délivrance d''un certificat de garantie.




-   **Alternative au garant français** : Si vous n''avez pas de famille ou d''amis en France avec des revenus suffisants.
-   **Crédibilité renforcée** : La garantie d''un organisme professionnel est souvent très bien perçue par les propriétaires qui ne connaissent pas les garants étrangers.
-   **Dossier simplifié pour le locataire** : Une fois la garantie obtenue, le document de GarantMe ou Unkle remplace l''ensemble des justificatifs de votre garant physique.

### 4. Conditions d''éligibilité et coûts


#### a) Conditions d''éligibilité

-   Ces frais sont à votre charge et sont à prendre en compte dans votre budget. Ils sont moins élevés qu''une caution bancaire (voir leçon suivante).


-   Votre **attestation d''admission** dans un établissement français.


-   **Mentionnez la garantie dans votre page de garde** : "Dossier avec garantie GarantMe (ou Unkle) certifiée".
-   **Comparez les offres** : Entre GarantMe, Unkle, et d''autres solutions, comparez les prix et les services.


-   **Ne pas comprendre le coût** : Ce service est payant et n''est pas un remboursement.
-   **Oublier d''inclure le certificat de garantie dans votre dossier de location**.
-   **Faire appel à un organisme non reconnu** : Assurez-vous de la crédibilité de l''entreprise.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les garanties alternatives](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-cautionnement/#c10444) - Informations sur ces solutions.


Les organismes de garantie privés comme GarantMe ou Unkle sont des solutions efficaces et reconnues pour les étudiants internationaux qui n''ont pas de garant physique en France. Ils se portent caution pour vous moyennant un coût annuel (souvent 3-5% du loyer). Ces plateformes offrent une garantie solide aux propriétaires, un processus rapide et une forte reconnaissance. Préparez un dossier de ressources clair, simulez votre éligibilité, et obtenez votre certificat de garantie avant même de commencer vos recherches de logement pour maximiser vos chances.
',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'a0b1c2d3-e4f5-4012-z7a8-b9c0d1e2f3g4',
  'c7d8e9f0-a1b2-4012-e3f4-a5b6c7d8e9f0',
  'La caution bancaire : Une alternative bloquée',
  '# La caution bancaire : Une alternative bloquée

## Pourquoi c''est important ?

La caution bancaire est une solution alternative au garant physique ou aux organismes de garantie privés, mais elle est de moins en moins courante et souvent peu avantageuse pour le locataire en France. Il est crucial de comprendre son fonctionnement, ses contraintes financières et pourquoi elle est souvent considérée comme une "alternative bloquée" par rapport à d''autres garanties. En tant qu''étudiant international, la méconnaissance de ce dispositif peut vous faire opter pour une solution coûteuse et rigide, alors que d''autres options pourraient être plus adaptées à votre situation. Ce cours vous aidera à évaluer la pertinence de la caution bancaire dans votre recherche de logement.


-   Définir ce qu''est une caution bancaire et son principe.
-   Comprendre le mécanisme de blocage des fonds qu''elle implique.


La caution bancaire est un engagement par lequel une banque se porte garant pour son client locataire. En cas d''impayé de loyer, la banque paie le propriétaire et se retourne ensuite contre son client. Cependant, ce mécanisme est coûteux et contraignant.



### 1. Qu''est-ce qu''une caution bancaire ?

C''est un engagement de la banque.

-   **Principe** : La banque s''engage envers le propriétaire à lui verser le montant des loyers et charges impayés en cas de défaillance du locataire.
-   **Contrat tripartite** : Il s''agit d''un contrat entre le locataire (vous), la banque et le propriétaire.
-   **Garantie financière** : Pour sécuriser la banque, le locataire doit généralement bloquer une somme d''argent sur un compte dédié. Cette somme correspond à plusieurs mois de loyer (souvent entre 12 et 24 mois).


C''est l''inconvénient majeur de cette solution.

-   **Somme immobilisée** : La banque exige que vous bloquiez sur un compte une somme d''argent équivalente au montant garanti (par exemple, 12 mois de loyer). Cette somme n''est plus disponible pour vous pendant toute la durée du bail.
-   **Contraintes budgétaires** : Pour un étudiant international avec un budget limité, immobiliser une telle somme (plusieurs milliers d''euros) est très difficile, voire impossible.

#### b) Durée de l''engagement
-   La somme reste bloquée pendant toute la durée du bail, et même après, jusqu''à ce que le propriétaire atteste que toutes les obligations locatives ont été remplies.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le cautionnement bancaire](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-cautionnement/#c10444) - Détails sur le cautionnement bancaire.



#### a) Coût d''immobilisation
-   Le principal coût n''est pas un frais direct, mais le manque à gagner lié à l''immobilisation d''une somme importante d''argent que vous ne pouvez pas utiliser pour d''autres dépenses ou investissements.


-   Les propriétaires, bien qu''acceptant cette forme de garantie, la préfèrent moins à la garantie VISALE (gratuite pour le locataire) ou aux garants physiques très solides.




    -   Vous avez des fonds importants disponibles que vous n''avez pas besoin d''utiliser.
    -   Vous n''avez aucune autre solution de garantie (ni garant physique, ni éligibilité à VISALE, ni organismes privés).


-   Un **entretien avec votre banque** (en France ou dans votre pays d''origine).




-   **Ne pas comprendre les frais** : Assurez-vous de tout savoir sur les frais de dossier et d''immobilisation.
-   **Penser que c''est une solution gratuite** : Le blocage des fonds a un coût d''opportunité.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les garanties alternatives](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-cautionnement/#c10444) - Détails sur les différents types de caution.


La caution bancaire est une alternative de garantie pour la location, mais elle est souvent peu pratique pour les étudiants internationaux en raison du blocage d''une somme importante (plusieurs mois de loyer) pendant toute la durée du bail. Elle est coûteuse en termes d''immobilisation de capital et moins flexible que d''autres solutions comme VISALE (gratuite) ou les garants privés payants (GarantMe, Unkle). Évaluez bien vos besoins et vos capacités financières avant d''envisager cette option, qui est généralement considérée comme une "alternative bloquée" pour les budgets étudiants.
',
  3,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 18 ---

-- COURS 19 : La garantie VISALE (Tuto)
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'd9e0f1a2-b3c4-4012-e5f6-a7b8c9d0e1f2',
  'La garantie VISALE (Tuto) : Votre garant gratuit en France',
  'garantie-visale-tuto-garant-gratuit-france',
  'Ce cours est un tutoriel complet et essentiel sur la garantie VISALE, la solution de garantie locative gratuite la plus avantageuse pour de nombreux étudiants internationaux et jeunes actifs en France. Si vous n''avez pas de garant physique, VISALE est un dispositif public qui se porte caution pour vous. Nous vous détaillerons ce qu''est VISALE et qui est éligible, comment créer votre espace personnel sur le site officiel, télécharger vos justificatifs, obtenir votre visa certifié en moins de 48h, et comment le présenter efficacement à un propriétaire. Maîtriser cette démarche est crucial pour obtenir un garant sans frais et débloquer rapidement votre accès au logement en France.',
  'VISALE : votre garant gratuit ! Éligibilité, compte, justificatifs, visa certifié 48h. Tuto complet pour trouver votre logement.',
  'logement',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le principe et les avantages de la garantie VISALE", "Identifier les conditions d''éligibilité pour les étudiants internationaux", "Maîtriser la création de compte et le dépôt de dossier en ligne", "Obtenir le visa VISALE certifié et le présenter efficacement aux propriétaires"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  950,
  4800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 19
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e0f1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'd9e0f1a2-b3c4-4012-e5f6-a7b8c9d0e1f2',
  'Visale : C''est quoi et pour qui ?',
  '# Visale : C''est quoi et pour qui ?

## Pourquoi c''est important ?

La garantie VISALE est un dispositif public gratuit qui permet à de nombreux étudiants internationaux et jeunes actifs d''obtenir une caution locative sans avoir à trouver un garant physique. Pour les étrangers qui n''ont pas de famille ou d''amis en France, VISALE est une solution Game Changer qui ouvre les portes du logement. Comprendre ce qu''est VISALE, son fonctionnement, et surtout qui est éligible, est absolument crucial pour savoir si vous pouvez bénéficier de cette aide précieuse. C''est la première étape pour obtenir votre garant gratuit et sécuriser votre dossier de location en France.


-   Définir ce qu''est la garantie VISALE et son rôle dans la location.
-   Identifier les conditions d''éligibilité spécifiques pour les étudiants (y compris internationaux).


VISALE (Visa pour le Logement et l''Emploi) est une garantie de loyer impayé gérée par Action Logement, un organisme paritaire d''intérêt général. C''est un dispositif public qui vise à faciliter l''accès au logement pour les personnes qui en ont le plus besoin ou qui rencontrent des difficultés à trouver un garant.



### 1. Qu''est-ce que la garantie VISALE ?

C''est un garant gratuit pour le locataire.

-   **Gratuite pour le locataire** : C''est son principal avantage. Il n''y a aucun frais à payer pour le locataire.
-   **Sécurité pour le propriétaire** : Pour le propriétaire, c''est une garantie fiable car elle est gérée par un organisme public. C''est souvent un argument très convaincant.
-   **Couverture** : VISALE couvre les loyers impayés (jusqu''à 36 mensualités) et les dégradations locatives (jusqu''à l''équivalent de 2 mois de loyer et charges).




-   **C''est la catégorie principale pour les étudiants internationaux.**
-   **Inclus les étudiants étrangers** : Vous êtes éligible en tant qu''étudiant international, même sans revenus en France, tant que vous avez une attestation d''inscription ou une promesse de logement.

-   Les salariés de plus de 30 ans peuvent être éligibles s''ils sont :

#### c) Les ménages logés par un organisme d''intermédiation locative

-   Le logement doit être situé en France métropolitaine ou dans les DROM (Départements et Régions d''Outre-Mer).

🔗 [Visale.fr : Suis-je éligible ?](https://www.visale.fr/eligibilite/) - Le simulateur d''éligibilité officiel de VISALE.



#### a) Attestation d''inscription
-   En tant qu''étudiant international, vous devrez fournir une attestation d''inscription dans un établissement d''enseignement supérieur français.

-   Même si vous n''avez pas de revenus en France, vous devrez justifier de vos ressources (bourses, virements de vos parents depuis l''étranger, attestation de prise en charge). Le site Visale expliquera quels documents sont acceptés.

#### c) Le "visa certifié"
-   Une fois votre dossier accepté, VISALE vous délivre un "visa certifié". C''est un document officiel qui prouve votre garantie. Ce visa a une durée de validité et doit être transmis au propriétaire.


-   Votre **attestation d''inscription** dans un établissement français.


-   **Mentionnez VISALE dans votre page de garde** : "Dossier de location avec garantie VISALE".


-   **Ne pas savoir si vous êtes éligible** : C''est la première chose à vérifier.
-   **Ne pas avoir de justificatifs de ressources** : Même si c''est une garantie, VISALE s''assure que vous avez un minimum de ressources.


-   🔗 [Action Logement : La garantie Visale](https://www.actionlogement.fr/actualites/la-garantie-visale) - Présentation par l''organisme gestionnaire.
-   🔗 [Service-Public.fr : Garantie Visale (pour la location d''un logement)](https://www.service-public.fr/particuliers/vosdroits/F33800) - Informations officielles.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La garantie Visale](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-cautionnement/#c10444) - Détails pour les locataires.


VISALE est une garantie locative gratuite et très avantageuse pour les étudiants internationaux et les jeunes de moins de 30 ans en France. Elle se porte caution pour vous auprès du propriétaire, couvrant loyers impayés et dégradations. Vérifiez votre éligibilité sur `visale.fr`, préparez vos justificatifs de ressources et d''inscription, et obtenez votre visa certifié en ligne avant même de commencer vos recherches de logement. VISALE est une solution clé pour débloquer votre accès au logement en toute sérénité et sans frais.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e6f7a8b9-c0d1-4012-e3f4-a5b6c7d8e9f0',
  'd9e0f1a2-b3c4-4012-e5f6-a7b8c9d0e1f2',
  'Créer son espace personnel',
  '# Créer son espace personnel Visale

## Pourquoi c''est important ?

Pour bénéficier de la garantie VISALE, la première étape est de créer votre espace personnel sur le site officiel `visale.fr`. C''est via cet espace que vous allez déposer l''ensemble de votre dossier de candidature, suivre son avancement, et finalement obtenir votre "visa certifié". Une création de compte correcte et sécurisée est absolument cruciale pour initier votre démarche sans encombre. Toute erreur lors de cette étape peut entraîner des retards, des blocages, ou même la perte de votre progression. Maîtriser ce processus est donc essentiel pour accéder à cette garantie gratuite et indispensable pour votre recherche de logement.


-   Identifier les informations personnelles nécessaires pour l''inscription.
-   Comprendre l''importance des identifiants et leur sécurisation.


Le site `visale.fr` est l''unique portail pour faire votre demande de garantie VISALE. La procédure est entièrement dématérialisée, ce qui la rend rapide et accessible, mais elle exige une attention particulière aux détails.



### 1. Accéder au site VISALE et démarrer l''inscription


-   Ouvrez votre navigateur internet et tapez l''adresse exacte.

#### b) Cliquer sur "Mon espace Visale" ou "Créer un compte"
-   Sur la page d''accueil, cherchez le bouton ou le lien pour accéder à l''espace personnel.
-   Si vous êtes un nouvel utilisateur, cliquez sur "Créer mon compte".



#### a) Informations d''identification
-   **Création d''un mot de passe sécurisé** : Combinez lettres majuscules, minuscules, chiffres et symboles. Notez-le dans un endroit sûr.

-   Vous devrez indiquer si vous êtes locataire ou propriétaire. Choisissez "locataire".


C''est une étape de sécurité.

-   Après avoir rempli le formulaire, un e-mail de confirmation avec un lien d''activation vous sera envoyé.
-   **Vérifiez votre boîte de réception et vos spams** : L''e-mail peut parfois s''y trouver.
-   **Cliquez sur le lien d''activation** pour valider votre adresse e-mail et activer votre compte.




-   **Utilisez vos identifiants** : Connectez-vous avec l''adresse e-mail et le mot de passe que vous avez choisis.


-   Votre **passeport** (pour les informations d''identité).


-   **Vérifiez l''orthographe de votre nom et prénom** : Une erreur peut créer des problèmes.
-   **Ne créez qu''un seul compte** : La multiplication des comptes peut entraîner des blocages.


-   **Ne pas activer le compte via l''e-mail de confirmation** : Votre compte restera inactif.




La création de votre espace personnel sur `visale.fr` est la première étape indispensable pour bénéficier de la garantie VISALE. Renseignez avec précision toutes vos informations personnelles, sécurisez votre mot de passe, et activez votre compte via l''e-mail de confirmation. Une fois votre compte créé, vous serez prêt(e) à déposer votre dossier et à obtenir votre visa certifié, un atout majeur pour votre recherche de logement en France.
',
  2,
  45,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'd9e0f1a2-b3c4-4012-e5f6-a7b8c9d0e1f2',
  'Télécharger ses justificatifs',
  '# Télécharger ses justificatifs Visale

## Pourquoi c''est important ?

Une fois votre espace personnel créé sur `visale.fr`, l''étape suivante est de télécharger tous les justificatifs demandés. C''est le cœur de votre dossier de candidature VISALE. La qualité, la conformité et l''exhaustivité de ces documents sont absolument cruciales. Un dossier incomplet, illisible ou avec des pièces non conformes entraînera un refus ou un retard important dans l''obtention de votre visa certifié. En tant qu''étudiant international, vous devrez prouver votre statut et vos ressources de manière très spécifique. Maîtriser la préparation et le téléchargement de ces justificatifs est donc essentiel pour obtenir votre garant gratuit dans les meilleurs délais.









#### a) Pièce d''identité
-   **Passeport** : Copie couleur de la page d''identité et de la page comportant votre visa VLS-TS (si c''est votre premier titre) ou de votre carte de séjour (recto-verso). Le document doit être en cours de validité.

-   **Attestation d''hébergement** : Si vous êtes hébergé(e) chez un tiers (ami, famille), une lettre manuscrite ou tapuscrite de l''hébergeant, datée et signée, accompagnée de sa pièce d''identité (recto-verso) et de son propre justificatif de domicile de moins de 3 mois.

-   **Attestation d''inscription** ou de pré-inscription dans un établissement d''enseignement supérieur français pour l''année universitaire en cours.
-   **Justificatif de ressources** : C''est crucial. VISALE vérifie que vous avez les moyens de payer le loyer. Pour les étudiants internationaux, cela peut inclure :
    -   **Attestation de virement régulier des parents** : Une lettre des parents s''engageant à vous verser régulièrement des fonds, accompagnée de leurs justificatifs de ressources (avis d''imposition, bulletins de salaire) et de leur pièce d''identité.
    -   **Avis d''imposition (ASDIR)** : Du dernier ou des deux derniers exercices fiscaux (même de non-imposition).

#### d) Photo d''identité
-   Une photo d''identité récente aux normes (type e-photo).




-   **Qualité du scan** : Les documents doivent être parfaitement lisibles, en couleur si l''original est en couleur, sans reflet, ni flou, ni angle coupé. Une résolution d''au moins 200 dpi est recommandée.
-   **Nommage clair des fichiers** : "Passeport_NOM_Prenom.pdf", "Attestation_Inscription_NOM_Prenom.pdf", "Attestation_Hébergement_Hébergeant.pdf".




-   **Préparez tous vos documents à l''avance** : Ne téléchargez pas au fur et à mesure.
-   **Utilisez l''aide en ligne de VISALE** : Le site propose souvent des bulles d''aide ou des FAQ pour chaque type de document.


-   **Dossier incomplet** : C''est la cause principale des refus ou retards.
-   **Ne pas respecter les formats de fichiers** (ex: envoyer une photo JPEG au lieu d''un PDF).
-   **Ne pas prouver la prise en charge financière** si vous n''avez pas de revenus.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le dossier de location](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-dossier-de-location/) - Informations générales sur les pièces à fournir.
-   🔗 [Cybermalveillance.gouv.fr : Protéger ses données lors d''un envoi en ligne](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/proteger-ses-donnees-personnelles-lors-de-loffre-de-services-en-ligne) - Conseils de sécurité pour vos documents numérisés.


Le téléchargement de vos justificatifs sur `visale.fr` est une étape critique pour l''obtention de votre garantie. Préparez minutieusement votre passeport, titre de séjour, justificatif de domicile, attestation d''inscription et surtout vos preuves de ressources (bourses, relevés bancaires, attestations de parents). Assurez-vous que tous les documents sont lisibles, au bon format PDF, et bien nommés. Un dossier complet et de qualité garantira un traitement rapide de votre demande et l''obtention de votre visa certifié VISALE.
',
  3,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e6f7a8b9-c0d1-4012-e3f4-a5b6c7d8e9f0',
  'd9e0f1a2-b3c4-4012-e5f6-a7b8c9d0e1f2',
  'Obtenir son visa certifié en 48h',
  '# Obtenir son visa certifié en 48h

## Pourquoi c''est important ?

Après avoir créé votre espace personnel et téléchargé tous vos justificatifs sur `visale.fr`, l''étape finale est l''obtention de votre "visa certifié" VISALE. Ce document est la preuve officielle que vous bénéficiez de la garantie d''Action Logement. Le délai de 48 heures (ouvrées) est un avantage majeur de VISALE, car il vous permet d''avoir rapidement une solution de garant, un atout considérable dans un marché locatif tendu. Sans ce visa certifié, le propriétaire ne pourra pas s''assurer que vous êtes bien couvert. Maîtriser cette étape et savoir comment le récupérer est crucial pour finaliser votre dossier de location et concrétiser rapidement votre projet d''emménagement en France.




Le traitement rapide des dossiers est une des forces de la garantie VISALE. L''objectif est de vous fournir un garant officiel en un temps record pour ne pas retarder vos recherches de logement.




Après le téléchargement, place à l''analyse.

-   Une fois que vous avez téléchargé tous les justificatifs, votre dossier est soumis à l''examen des équipes de VISALE (Action Logement).





-   Dans votre tableau de bord, vous verrez le statut de votre demande. Si elle est acceptée, un lien ou un bouton "Télécharger mon visa certifié" sera disponible.

-   **Téléchargez-le immédiatement** et enregistrez-le dans un dossier sécurisé sur votre ordinateur et un cloud (voir cours sur l''organisation des documents).
-   **Renommez-le clairement** : "Visa_VISALE_NOM_Prenom.pdf".





-   **Répondez rapidement** : Téléchargez les documents demandés dès que possible pour relancer l''instruction.

-   **Recours** : Vous pouvez parfois contester la décision ou tenter de déposer un nouveau dossier si vous pouvez apporter de nouvelles preuves. Dans ce cas, contactez l''aide de VISALE pour comprendre vos options.




-   **Informez votre potentiel propriétaire** que vous avez déjà votre garantie VISALE. C''est un argument de poids !


-   **Ne pas télécharger le visa certifié** : C''est votre preuve de garantie.


-   🔗 [Action Logement : La garantie Visale](https://www.actionlogement.fr/actualites/la-garantie-visale) - Vue d''ensemble.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement)](https://www.anil.org/) - Peut vous conseiller en cas de litige avec VISALE ou le propriétaire.


L''obtention de votre visa certifié VISALE en 48h (ouvrées) est l''aboutissement de votre démarche de garantie gratuite. Ce document PDF, disponible sur votre espace `visale.fr`, est la preuve officielle de votre couverture. Téléchargez-le, vérifiez ses informations, et conservez-le précieusement. En cas de retard ou de demande de compléments, soyez réactif(ve) et contactez le support VISALE. Ce visa est votre meilleur atout pour présenter un dossier de location solide et trouver rapidement un logement en France.
',
  4,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e6f7a8b9-c0d1-4012-e3f4-a5b6c7d8e9f0',
  'd9e0f1a2-b3c4-4012-e5f6-a7b8c9d0e1f2',
  'Présenter Visale au propriétaire',
  '# Présenter Visale au propriétaire

## Pourquoi c''est important ?



-   Comprendre l''importance d''une présentation proactive de la garantie VISALE.
-   Connaître les conseils pour l''intégrer dans votre dossier de location et lors de la visite.







-   Mentionnez clairement dès la page de garde de votre dossier : "Dossier de candidature avec garantie VISALE certifiée". Cela attire immédiatement l''attention du bailleur.

-   Dans votre lettre de motivation, expliquez que vous bénéficiez de la garantie VISALE, précisez qu''elle est gratuite pour vous et qu''elle couvre les loyers impayés et les dégradations pour le propriétaire.

-   Placez le visa certifié VISALE en première position (juste après votre page de garde et votre pièce d''identité) dans le fichier PDF fusionné de votre dossier de location.



-   Lorsque vous appelez ou envoyez un e-mail pour prendre rendez-vous, précisez que vous avez un dossier "solide avec la garantie VISALE".

-   Si le propriétaire ou l''agent immobilier vous pose des questions sur votre garant, présentez votre visa certifié VISALE (version imprimée et/ou sur votre smartphone).
-   Expliquez clairement : "Je bénéficie de la garantie VISALE. C''est un dispositif d''Action Logement qui se porte caution pour moi. Cela signifie que si un jour je rencontre des difficultés pour payer mon loyer, VISALE paiera à ma place et vous serez assuré(e) d''être réglé(e)."



-   Insistez sur le fait que la garantie VISALE est entièrement gratuite pour lui. Il n''a aucune démarche administrative ni aucun coût.

#### b) La sécurité d''un organisme public
-   Mettez en avant le fait que c''est une garantie d''Action Logement (un organisme public de confiance), ce qui est souvent plus rassurant pour un propriétaire qu''un garant physique qu''il ne connaît pas.
-   Le propriétaire peut s''inscrire gratuitement sur `visale.fr` pour valider votre visa et obtenir une attestation de garantie VISALE directement à son nom, ce qui le sécurise encore plus.


-   Pour le propriétaire, la gestion est simplifiée en cas d''impayé, car il traite directement avec Action Logement.








-   **Ayez l''e-mail de confirmation à portée de main** : Cela renforce votre crédibilité.
-   **Ne donnez jamais l''original du visa** : Une copie suffit pour le dossier. Le propriétaire pourra vérifier le numéro en ligne.


-   **Ne pas savoir expliquer ce que c''est** : Vous ne convaincrez pas le propriétaire.
-   **Laisser le propriétaire croire que vous n''avez pas de garant** alors que vous avez VISALE.
-   **Ne pas avoir le visa certifié au moment de présenter le dossier** : C''est un document officiel.
-   **Ne pas vérifier la validité de votre visa** : Assurez-vous qu''il est toujours actif.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le cautionnement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-cautionnement/) - Conseils sur les garanties.


Présenter votre visa certifié VISALE de manière proactive et convaincante est essentiel pour rassurer les propriétaires et faciliter votre accès au logement. Mentionnez VISALE dès la page de garde et dans votre lettre de motivation, et expliquez ses avantages (gratuité pour le propriétaire, sécurité d''un organisme public, couverture des impayés et dégradations). Soyez confiant(e), informatif(ve) et ayez toujours votre visa certifié à portée de main. VISALE est un atout puissant, utilisez-le à bon escient pour concrétiser votre projet de location en France.
',
  5,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 19 ---

-- COURS 20 : Éviter les arnaques au logement
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e0f1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Éviter les arnaques au logement : Protégez-vous en France',
  'eviter-arnaques-logement-protegez-vous-france',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux en recherche de logement en France. Le marché locatif, surtout dans les grandes villes, est malheureusement propice aux arnaques et aux tentatives d''escroquerie. Nous vous apprendrons à identifier les signaux d''alerte classiques : les demandes de "mandat cash" ou "Western Union", le scénario du "propriétaire à l''étranger", les annonces trop belles pour être vraies, et la règle d''or de ne jamais envoyer d''argent avant la visite et la signature du bail. Maîtriser ces réflexes est crucial pour protéger votre argent, votre identité et éviter de devenir victime de fraudeurs peu scrupuleux.',
  'Évitez les arnaques au logement : mandat cash, propriétaire à l''étranger, annonces trop belles. Ne payez jamais avant la visite !',
  'logement',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Identifier les arnaques courantes au logement (mandat cash, propriétaire étranger)", "Savoir vérifier la véracité d''une annonce immobilière", "Comprendre la règle d''or : ne jamais payer avant la visite et le bail", "Maîtriser les réflexes de prudence pour protéger son argent et son identité"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  700,
  5500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 20
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Mandat Cash / Western Union : Fuyez !',
  '# Mandat Cash / Western Union : Fuyez !

## Pourquoi c''est important ?

La demande de paiement par Mandat Cash, Western Union, Transcash, ou tout autre service de transfert d''argent anonyme et non traçable, est le signal d''alerte numéro UN d''une arnaque au logement. En tant qu''étudiant international, vous pourriez être la cible privilégiée de ces fraudeurs qui exploitent la méconnaissance des règles françaises et l''urgence des recherches de logement. Envoyer de l''argent par ces moyens revient à donner de l''argent à un inconnu sans aucune garantie de le revoir ou d''obtenir un logement. Comprendre que ces méthodes de paiement sont illégales et toujours frauduleuses dans le cadre d''une location est absolument crucial pour protéger votre argent et éviter de devenir victime d''escroquerie.


-   Savoir comment signaler une tentative d''escroquerie.





### 1. Qu''est-ce que le Mandat Cash / Western Union ?

Ce sont des services de transfert d''argent avec peu de traçabilité.

-   Il existait des variantes (Mandat Compte) mais l''idée est un transfert d''argent facile, sans compte bancaire pour le destinataire, et souvent peu traçable.

-   **Principe** : Ce sont des services de transfert d''argent rapide à l''international. L''expéditeur dépose de l''argent dans une agence, et le destinataire peut le retirer en espèces dans une autre agence, souvent avec un simple code et une pièce d''identité.
-   **Anonymat et non-traçabilité** : C''est ce qui les rend dangereux pour les paiements entre inconnus. Une fois l''argent retiré, il est quasiment impossible de le récupérer et de retrouver le destinataire.


### 2. Pourquoi c''est TOUJOURS une arnaque dans le cadre d''une location

C''est le mode opératoire classique des fraudeurs.

-   Le fraudeur vous demandera généralement d''envoyer de l''argent par ces moyens avant même de vous faire visiter le logement, sous prétexte de "réserver le bien", de "payer les frais de dossier à distance" ou de "prouver votre solvabilité". C''est une fausse bonne excuse.

#### b) Le propriétaire n''est jamais là
-   Le scénario classique est que le "propriétaire" est à l''étranger et ne peut pas vous rencontrer. Il vous demande d''envoyer l''argent à un "tiers de confiance" ou à un "notaire à l''étranger". Tout cela est faux.

#### c) L''objectif est de disparaître avec votre argent
-   Une fois l''argent envoyé et retiré, le "propriétaire" disparaît, et le logement n''existe pas ou n''est pas à louer. Vous avez perdu votre argent.



-   Toute demande de paiement par Mandat Cash, Western Union, Transcash est un signal d''alarme ROUGE. Refusez immédiatement et coupez court à la conversation.

-   Vous pouvez dire : "En France, les paiements pour une location se font par virement bancaire ou chèque, après la visite du logement et la signature du bail. Je ne ferai aucun paiement par Mandat Cash ou Western Union, car c''est une pratique interdite et souvent associée à la fraude."

-   Si on vous demande des informations personnelles ou bancaires pour "vérifier" un transfert de Mandat Cash que vous n''avez pas fait, ne les donnez jamais.




-   **Règle d''or** : Ne payez JAMAIS d''argent à qui que ce soit avant d''avoir visité le logement, rencontré le propriétaire (ou l''agence), et signé un contrat de location EN PRÉSENCE du propriétaire ou de l''agent.
-   **Mode de paiement légal** : Les seuls modes de paiement acceptables pour un premier loyer et un dépôt de garantie sont le virement bancaire, le chèque (de banque si le propriétaire le demande) ou le paiement par carte bancaire via un terminal professionnel d''agence.
-   **Ayez votre propre compte bancaire français** : C''est indispensable pour les virements.


-   **Envoyer de l''argent sans avoir vu le bien** : C''est le plus grand risque.
-   **Croire aux histoires de "propriétaire à l''étranger"** : C''est le script classique des arnaques.
-   **Céder à la pression** : Les fraudeurs insistent souvent sur l''urgence pour vous faire agir sans réfléchir.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Arnaques à la location](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/attention-aux-arnaques/) - Conseils pour éviter les pièges.
-   🔗 [Ministère de l''Intérieur : Cybercriminalité - Arnaques en ligne](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Prevention-des-risques/Cybercriminalite) - Infos sur la cybercriminalité.
-   🔗 [Info Escroqueries](https://www.service-public.fr/particuliers/vosdroits/F34522) - Le numéro de téléphone 0 805 805 817 (appel gratuit) pour obtenir de l''aide.


Toute demande de paiement par Mandat Cash, Western Union, Transcash ou tout autre service de transfert d''argent non traçable dans le cadre d''une location est une arnaque. Fuyez immédiatement ! Ne payez jamais d''argent avant d''avoir visité le logement, rencontré le propriétaire et signé un bail en bonne et due forme. Les paiements légaux se font par virement bancaire ou chèque. Protégez votre argent et votre identité en étant vigilant(e) face à ces signaux d''alerte clairs.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Le propriétaire est à l''étranger : Le script classique',
  '# Le propriétaire est à l''étranger : Le script classique

## Pourquoi c''est important ?

Le scénario du "propriétaire à l''étranger" est l''un des scripts d''arnaque au logement les plus répandus et les plus efficaces, ciblant particulièrement les étudiants internationaux et les personnes cherchant un logement à distance. Ce récit, souvent très détaillé et élaboré, vise à empêcher toute rencontre physique, vous incitant à payer des "frais" ou une "caution" sans avoir vu le bien. Comprendre que ce scénario est un signal d''alerte clair de fraude est absolument crucial pour protéger votre argent et éviter de tomber dans un piège bien connu des escrocs. Ne pas reconnaître ce script, c''est prendre le risque de louer un logement inexistant ou non disponible.


-   Identifier les caractéristiques du scénario d''arnaque du "propriétaire à l''étranger".
-   Savoir comment vérifier la légitimité d''une offre dans un tel contexte.



🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Attention aux arnaques](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/attention-aux-arnaques/) - Conseils pour éviter les pièges, y compris le scénario du propriétaire à l''étranger.


### 1. Les éléments du script du "propriétaire à l''étranger"


-   Le propriétaire prétend être à l''étranger pour des raisons urgentes et imprévues : mutation professionnelle, maladie grave d''un proche, mission humanitaire, etc. Cela justifie son absence et l''impossibilité de vous rencontrer.

#### b) La "confiance" à distance
-   Il vous envoie des photos du logement (souvent volées sur de vraies annonces), des copies de faux papiers d''identité ou de faux titres de propriété pour inspirer confiance.
-   Il insiste sur le fait qu''il a "beaucoup d''offres" et qu''il "cherche quelqu''un de confiance", créant un sentiment d''urgence et de privilège.

-   Pour la visite ou la remise des clés, il vous propose de passer par un "tiers de confiance" (ami, notaire, agence) qui n''existe pas.
-   Il vous demandera d''envoyer une avance sur loyer ou un dépôt de garantie via des méthodes de paiement non sécurisées comme Mandat Cash, Western Union, ou un faux site de paiement.
-   **L''objectif est toujours de vous faire payer SANS rencontre physique et SANS signature de bail**.

🔗 [Service-Public.fr : Les arnaques les plus courantes à la location](https://www.service-public.fr/particuliers/vosdroits/F34522) - Détaille ce type d''arnaque.



-   **Empêcher la rencontre physique** : C''est la clé de l''arnaque. Sans rencontre, vous ne pouvez pas vérifier l''existence du logement ou l''identité du "propriétaire".
-   **Créer l''urgence** : Le fraudeur insiste souvent sur la forte demande et la rapidité pour vous pousser à agir sans réfléchir.
-   **Utiliser des paiements non traçables** : Une fois l''argent envoyé via Mandat Cash/Western Union, il est irrattrapable.


Tout le monde n''est pas à l''étranger pour louer.

#### a) Signaux d''alerte
-   **Le loyer est anormalement bas** par rapport à la taille et l''emplacement du logement.

#### b) La règle d''or : Pas d''argent avant la visite et le bail
-   Ne payez **JAMAIS** le premier loyer, le dépôt de garantie, ou des frais de dossier à qui que ce soit avant d''avoir :
    2.  Rencontré le propriétaire (ou l''agence légitime).
    4.  Obtenu un état des lieux d''entrée.


### 4. Comment vérifier la légitimité de l''offre ?


#### a) Vérifier l''annonce
-   Faites une **recherche inversée d''images** sur Google Images avec les photos de l''annonce. Souvent, les photos sont copiées d''autres annonces (ventes, locations déjà passées) ou de banques d''images.
-   Vérifiez l''adresse du logement sur Google Maps. Est-ce que le bâtiment correspond ? Le quartier ?

-   Si le propriétaire est "à l''étranger", demandez si un ami, un membre de la famille ou une agence locale peut vous faire visiter. S''il refuse, fuyez.

#### c) Vérifiez l''identité
-   Demandez une copie de la pièce d''identité du propriétaire et son titre de propriété (extrait Kbis pour une société).
-   Si le "propriétaire" refuse, c''est suspect.


-   La **liste des signaux d''alerte**.


-   **Si une offre est trop belle pour être vraie, c''est probablement une arnaque.**
-   **Utilisez des plateformes de location fiables** : Sites d''agences immobilières connues (Se Loger, PAP, Leboncoin avec vigilance).
-   **Si vous êtes à l''étranger, demandez à un ami ou un service sur place de visiter pour vous**.
-   **Méfiez-vous des fautes d''orthographe et de grammaire** dans les e-mails des prétendus propriétaires.


-   **Faire confiance à des papiers envoyés par e-mail** sans vérification (fausses pièces d''identité, faux documents).
-   **Se laisser prendre par l''urgence et la pression**.
-   **Ne pas faire de recherches complémentaires** sur l''annonce ou le "propriétaire".
-   **Croire que vous êtes le seul privilégié** à qui l''on propose une telle offre.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Arnaques](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/attention-aux-arnaques/) - La référence pour les arnaques.
-   🔗 [Service-Public.fr : Arnaques à la location](https://www.service-public.fr/particuliers/vosdroits/F34522) - Description des principaux types d''escroqueries.
-   🔗 [Info Escroqueries](https://www.service-public.fr/particuliers/vosdroits/F34522) - Le numéro de téléphone 0 805 805 817 pour obtenir de l''aide.
-   🔗 [Ministère de la Justice : Que faire si vous êtes victime d''une arnaque ?](https://www.justice.gouv.fr/justice-au-quotidien/vie-pratique-et-conflits/arnaque-escroquerie) - Procédures.


Le scénario du "propriétaire à l''étranger" est une arnaque classique au logement. Méfiez-vous de toute annonce où la rencontre physique est impossible et où l''on vous demande de payer par des moyens non sécurisés (Mandat Cash, Western Union). La règle d''or est de ne jamais envoyer d''argent avant d''avoir visité le logement et signé le bail. Vérifiez toujours la véracité de l''annonce (recherche inversée d''images) et exigez une visite. Votre vigilance est votre meilleure protection contre ces escroqueries.
',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Vérifier si une annonce est réelle (Recherche image)',
  '# Vérifier si une annonce est réelle (Recherche image)

## Pourquoi c''est important ?

Dans la jungle des annonces immobilières en ligne, il est difficile de distinguer le vrai du faux. Les fraudeurs utilisent souvent des photos de logements réels, mais qui ne sont pas les leurs, ou qui sont déjà loués/vendus. Vérifier la source et l''authenticité des images d''une annonce est une technique simple mais redoutablement efficace pour démasquer les arnaques au logement. En tant qu''étudiant international, votre vulnérabilité aux fausses annonces est accrue, car vous ne pouvez pas toujours visiter physiquement. Maîtriser la "recherche inversée d''images" est donc absolument crucial pour ne pas perdre votre temps avec des annonces frauduleuses et pour protéger votre argent.


-   Maîtriser la technique de la "recherche inversée d''images" sur internet.
-   Identifier les signaux d''alerte visuels d''une fausse annonce.
-   Savoir comment recouper les informations pour confirmer la légitimité d''une offre.


Les images sont l''hameçon des fraudeurs. Elles sont attrayantes, mais peuvent être trompeuses. Une simple vérification peut vous éviter de tomber dans le piège.




C''est la base de leur stratagème.

-   **Crédibilité** : Des photos de haute qualité d''un logement attrayant donnent de la crédibilité à une fausse annonce.
-   **Gain de temps** : Il est plus facile de voler des images que d''organiser de vraies visites.

### 2. La technique de la "recherche inversée d''images"


-   Un moteur de recherche inversée d''images vous permet de soumettre une image et de trouver où cette image apparaît sur internet.
-   Si la photo de l''annonce apparaît sur d''autres sites (annonces de vente, anciennes annonces de location, sites étrangers, banques d''images), cela peut être un signe de fraude.

-   **Google Images** : C''est l''outil le plus courant.
    3.  Cliquez sur l''icône de l''appareil photo (recherche par image).
    4.  Téléchargez l''image ou collez son URL.
-   **TinEye** (`tineye.com`) : Un autre moteur de recherche inversée d''images efficace.

🔗 [Google Images : Recherche par image](https://images.google.com/) - L''outil le plus accessible.
🔗 [TinEye : Recherche inversée d''images](https://tineye.com/) - Un moteur dédié à cette fonction.

### 3. Identifier les signaux d''alerte visuels


#### a) Photos qui "voyagent"
-   **Annonce de vente actuelle ou passée** : Si les photos du logement à louer apparaissent sur une annonce de vente (actuelle ou datant d''il y a quelques mois), c''est un signe de fraude. Le "propriétaire" n''est pas le vrai propriétaire ou n''a pas le droit de louer.
-   **Photos de banques d''images** : Des photos d''intérieur "parfaites" et génériques, souvent utilisées par des designers ou des sites de décoration, peuvent être suspectes.

-   **Style des photos différent** : Si l''ensemble des photos d''une même annonce n''ont pas le même style, la même lumière, la même qualité, cela peut indiquer un montage de photos volées.
-   **Incohérence avec l''adresse** : Vérifiez l''adresse sur Google Maps (Street View si disponible). Est-ce que l''extérieur du bâtiment correspond aux photos ? Le quartier ?

-   Un appartement spacieux, refait à neuf, en plein centre-ville, avec des équipements modernes, à un loyer anormalement bas : c''est un signal d''alarme très fort.


La recherche d''images est une étape, pas la seule.

-   Contactez le "propriétaire" ou l''agence. Posez des questions précises sur le logement (année de construction, diagnostics, etc.). Un fraudeur aura du mal à répondre précisément.

-   Si vous êtes à l''étranger, demandez une visite en visio (en direct) ou par une personne de confiance sur place. Demandez au "propriétaire" de vous montrer un détail spécifique du logement pendant la visio pour prouver qu''il est bien là.

#### c) Vérifiez l''identité du propriétaire
-   Demandez un document d''identité du propriétaire et, si possible, un justificatif de propriété (avis de taxe foncière, extrait d''acte de propriété).


-   Les **photos de l''annonce immobilière**.


-   **Faites systématiquement une recherche inversée d''images** pour chaque annonce qui vous intéresse, surtout si le loyer est très attractif.


-   **Ne pas faire de recherche inversée** : C''est une méthode trop efficace pour être ignorée.
-   **Ignorer les signaux d''alerte** : Photos trop parfaites, loyer bas, pas de visite possible.
-   **Payer quoi que ce soit avant les vérifications** : C''est le but de l''arnaque.
-   **Croire les excuses du "propriétaire" sur les photos** (ex: "ce sont d''anciennes photos, le logement a changé").


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Arnaques à la location](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/attention-aux-arnaques/) - Conseils pour détecter les fraudes.
-   🔗 [Info Escroqueries](https://www.service-public.fr/particuliers/vosdroits/F34522) - Le numéro de téléphone 0 805 805 817 (appel gratuit) pour obtenir de l''aide.
-   🔗 [Google Images : Aide](https://support.google.com/websearch/answer/1325808?hl=fr) - Guide d''utilisation de la recherche inversée.


La recherche inversée d''images est un outil puissant pour vérifier l''authenticité des annonces immobilières et démasquer les arnaques. Si les photos d''un logement apparaissent sur d''autres sites, sont incohérentes avec l''adresse, ou si l''offre est trop belle pour être vraie, méfiez-vous. Complétez cette vérification par un contact direct, des questions précises et une exigence de visite. Votre vigilance et l''utilisation de ces outils numériques sont cruciales pour protéger votre argent et trouver un logement réel et sûr en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Ne jamais envoyer d''argent avant la visite',
  '# Ne jamais envoyer d''argent avant la visite

## Pourquoi c''est important ?

C''est la règle d''or absolue, le principe fondamental à graver dans votre esprit pour toute recherche de logement en France : **ne jamais, jamais envoyer d''argent à qui que ce soit avant d''avoir visité le logement physiquement et signé le contrat de location (bail) en présence du propriétaire ou de l''agent immobilier.** Les arnaqueurs comptent sur votre urgence, votre distance et votre méconnaissance des pratiques locales pour vous soutirer de l''argent avant que vous ne réalisiez la fraude. En tant qu''étudiant international, cette règle est votre meilleure protection contre les escroqueries. La négliger, c''est prendre le risque certain de perdre votre argent et de vous retrouver sans logement à l''arrivée.


-   Identifier les différentes excuses utilisées par les fraudeurs pour demander de l''argent à l''avance.


La recherche de logement est stressante, et les fraudeurs l''ont bien compris. Ils créent un sentiment de panique et d''urgence pour vous faire baisser votre garde. Mais en France, les règles sont claires.

🔗 [Service-Public.fr : Se protéger des arnaques à la location](https://www.service-public.fr/particuliers/vosdroits/F34522) - Le conseil principal est de ne pas payer à l''avance.



C''est l''objectif final des escrocs.

-   **Vol d''argent pur et simple** : Le fraudeur veut votre argent. Une fois qu''il l''a, il disparaît.
-   **Logement inexistant ou non disponible** : Dans la plupart des cas, le logement que vous croyez louer n''existe pas, n''appartient pas au fraudeur, ou est déjà loué.
-   **Absence de recours** : Une fois l''argent envoyé (surtout par Mandat Cash, Western Union), il est quasiment impossible de le récupérer et de retrouver l''escroc.

### 2. Les excuses des fraudeurs pour demander de l''argent à l''avance


#### a) "Réserver le logement"
-   "Il y a beaucoup de demandes, envoyez un acompte pour réserver le logement avant la visite."
-   "Prouvez votre sérieux avec un dépôt de fonds qui sera débloqué après la visite."

#### b) "Frais de dossier à distance"
-   "Payer les frais de dossier à mon notaire à l''étranger" ou "à mon agent qui va vous faire visiter."

#### c) "Propriétaire à l''étranger"
-   (Voir leçon précédente) : L''absence physique du propriétaire est souvent l''excuse pour demander un paiement à distance avant toute rencontre.

#### d) "Vérifier votre solvabilité"
-   "Faites un virement par Mandat Cash à votre propre nom, et envoyez-moi le reçu, pour prouver que vous avez les fonds." (Le fraudeur a ensuite un moyen de récupérer l''argent).

### 3. La règle d''or : Pas un centime avant la visite et le bail


-   **Exigez toujours de voir le logement**. Si vous êtes à l''étranger, demandez à un ami de confiance sur place de visiter pour vous, ou utilisez un service de "visite à distance" via des agences légitimes.
-   Si le "propriétaire" refuse toute forme de visite (physique ou à distance avec preuve), coupez court à la conversation.

#### b) La rencontre avec le propriétaire ou l''agence
-   Rencontrez la personne qui se présente comme le bailleur ou l''agent immobilier. Demandez une pièce d''identité.


#### d) L''état des lieux d''entrée
-   Idéalement, le premier paiement (premier loyer et dépôt de garantie) se fait au moment de la signature du bail ou au plus tard lors de l''état des lieux d''entrée.

🔗 [ANIL : Les étapes de la location](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-etapes-de-la-location/) - Les étapes légales d''une location.



-   C''est le moyen le plus courant et le plus sécurisé. Assurez-vous que le RIB (Relevé d''Identité Bancaire) que l''on vous donne est bien au nom du propriétaire ou de l''agence immobilière légitime.
-   Vérifiez l''IBAN.

-   Attention, n''établissez un chèque qu''au nom du propriétaire ou de l''agence.




-   La **règle d''or** : Pas d''argent avant visite et bail.


-   **Faites confiance à votre instinct** : Si vous avez un doute, c''est probablement une arnaque.
-   **Demandez des informations complémentaires** : Exigez le numéro de SIRET de l''agence, les références du propriétaire.


-   **Payer une "réservation" ou un "acompte" par Mandat Cash/Western Union**.
-   **Ne pas vérifier l''identité du propriétaire** (demandez une pièce d''identité).
-   **Transférer de l''argent sur un compte à l''étranger** sans avoir toutes les garanties.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Arnaques à la location](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/attention-aux-arnaques/) - La référence pour la prévention des fraudes.
-   🔗 [Info Escroqueries](https://www.service-public.fr/particuliers/vosdroits/F34522) - Le numéro de téléphone 0 805 805 817 (appel gratuit) pour obtenir de l''aide.


La règle d''or absolue pour la recherche de logement en France est de ne **JAMAIS** envoyer d''argent avant d''avoir visité le logement et signé le bail en présence du propriétaire ou de l''agence. Méfiez-vous des prétextes de "propriétaire à l''étranger" ou des demandes de paiement par Mandat Cash/Western Union, qui sont toujours des signaux d''arnaque. Utilisez des moyens de paiement sécurisés comme le virement bancaire ou le chèque une fois toutes les vérifications faites. Votre vigilance est votre meilleure protection contre les fraudes immobilières.
',
  4,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 20 ---

-- COURS 21 : Comprendre et signer son bail
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Comprendre et signer son bail : Votre contrat de location en France',
  'comprendre-signer-bail-contrat-location-france',
  'Ce cours est une étape cruciale pour les étudiants internationaux s''apprêtant à signer leur premier contrat de location en France. Le bail est un document juridique complexe qui engage le locataire et le propriétaire pour plusieurs années. Nous vous guiderons pour comprendre la durée de votre bail (1 an ou 3 ans), la clause de solidarité souvent présente en colocation, les clauses abusives (que vous avez le droit de rayer), et les spécificités de la signature électronique. Maîtriser ce document est absolument essentiel pour connaître vos droits et obligations, éviter les mauvaises surprises, et signer un contrat équilibré et conforme à la loi.',
  'Comprendre et signer votre bail : durée (1 an, 3 ans), clause de solidarité, clauses abusives, signature électronique. Protégez-vous !',
  'logement',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la durée légale d''un bail (meublé, non-meublé, étudiant)", "Identifier et comprendre la clause de solidarité en colocation", "Savoir repérer et refuser les clauses abusives", "Maîtriser les spécificités de la signature électronique du bail"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  500,
  3700
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 21
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Durée du bail (1 an vs 3 ans)',
  '# Durée du bail (1 an vs 3 ans)

## Pourquoi c''est important ?

La durée du bail (contrat de location) est l''une des clauses les plus fondamentales de votre contrat de logement en France. Elle détermine la période minimale pendant laquelle vous êtes engagé(e) et les conditions de renouvellement. En tant qu''étudiant international, comprendre la différence entre un bail d''un an (meublé), un bail de 3 ans (non-meublé) et le bail étudiant spécifique de 9 mois est absolument crucial. Une mauvaise compréhension de cette durée peut entraîner des contraintes inutiles (engagement trop long) ou des difficultés (devoir chercher un nouveau logement trop souvent). Ce cours vous aidera à choisir le bail le plus adapté à la durée de votre séjour et à vos projets en France.







### 1. Le bail de location meublée : Durée d''un an (renouvelable)


-   Le bail d''un logement meublé est signé pour une durée minimale d''**un an**.

-   Vous pouvez résilier le bail à tout moment, en respectant un **préavis d''un mois**. C''est un avantage majeur en termes de flexibilité.
-   Le congé doit être donné par lettre recommandée avec accusé de réception ou par acte d''huissier, ou par remise en main propre contre récépissé ou émargement.

-   Le propriétaire ne peut vous donner congé qu''à l''échéance du bail, et pour des motifs précis :
-   Le préavis est de 3 mois avant la date d''échéance.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Durée du bail meublé](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-duree-et-la-forme-du-bail/#c10444) - Détails sur les baux meublés.



-   Le bail d''un logement non-meublé est signé pour une durée minimale de **trois ans** (si le propriétaire est une personne physique) ou **six ans** (si le propriétaire est une personne morale comme une société).

    -   Obtention d''un premier emploi, perte d''emploi, nouvel emploi consécutif à une perte d''emploi.
    -   Bénéficiaire du RSA ou de l''AAH.
    -   Obtention d''un logement social.


-   Le propriétaire ne peut vous donner congé qu''à l''échéance du bail, et pour des motifs précis (reprise, vente, motif légitime et sérieux).
-   Le préavis est de 6 mois avant la date d''échéance.



-   Il s''agit d''un bail de location meublée signé pour une durée fixe de **neuf mois**.
-   **Avantage pour les étudiants** : Il est parfaitement adapté à la durée d''une année universitaire. Pas besoin de vous soucier d''un préavis à la fin de vos études.

-   Comme pour le bail meublé classique, le préavis est d''**un mois**. Vous pouvez partir plus tôt si vos projets changent.



-   Votre **projet d''études ou professionnel** en France (durée de séjour envisagée).


-   **Évaluez bien la durée de votre séjour** : Si vous venez pour une seule année universitaire, privilégiez le bail étudiant de 9 mois. Si c''est plus long, un meublé d''un an peut être un bon compromis.
-   **Demandez des précisions** : Si vous ne comprenez pas une clause sur la durée ou le préavis, n''hésitez pas à poser la question au propriétaire ou à l''agence.


-   **Signer un bail de 3 ans pour un séjour d''un an** : Vous resterez engagé pour 3 mois de loyer après votre départ si le préavis de 3 mois s''applique et que le logement n''est pas reloué.
-   **Penser qu''un bail étudiant est reconductible** : Non, il prend fin automatiquement.
-   **Oublier d''informer le propriétaire par lettre recommandée** pour le préavis.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Durée et forme du bail](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-duree-et-la-forme-du-bail/) - La référence la plus complète.


La durée de votre bail est un élément essentiel à comprendre avant de signer un contrat de location en France. Les baux meublés sont généralement d''un an (avec un préavis d''un mois pour le locataire), les non-meublés de trois ans (avec un préavis de trois mois, parfois réduit à un mois). Le bail étudiant meublé de neuf mois est idéal pour une année universitaire. Choisissez le type de bail le plus adapté à la durée prévue de votre séjour et soyez vigilant(e) aux conditions de préavis. Une bonne compréhension vous évitera des contraintes inutiles et des frais imprévus.
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
  'Clause de solidarité (Colocation)',
  '# Clause de solidarité (Colocation)

## Pourquoi c''est important ?

Si vous choisissez de vivre en colocation en France, il est fort probable que votre bail contienne une "clause de solidarité". Cette clause est d''une importance capitale et a des conséquences financières majeures pour tous les colocataires. Elle signifie que chaque colocataire (et son éventuel garant) est solidairement responsable du paiement de la totalité du loyer et des charges. En tant qu''étudiant international, la méconnaissance de cette clause peut vous exposer à devoir payer le loyer de vos colocataires si l''un d''entre eux ne paie pas, même si vous avez toujours réglé votre part. Comprendre le fonctionnement et les implications de la clause de solidarité est absolument crucial pour protéger vos finances et choisir une colocation en toute connaissance de cause.


-   Définir ce qu''est une clause de solidarité dans un bail de colocation.
-   Identifier la durée de l''engagement solidaire après le départ d''un colocataire.





### 1. Qu''est-ce que la clause de solidarité ?


-   **Responsabilité collective** : Tous les colocataires (et leurs garants) sont tenus solidairement et indivisiblement au paiement de l''intégralité du loyer, des charges et des éventuelles réparations locatives.
-   **Le bailleur peut réclamer la totalité à n''importe quel colocataire** : Cela signifie que si l''un des colocataires ne paie pas sa part de loyer, le propriétaire peut demander la totalité du montant impayé à n''importe lequel des autres colocataires (celui qui est le plus solvable, par exemple).
-   **Pas de "ma part est payée"** : Votre part peut être payée, mais si celle d''un autre ne l''est pas, le propriétaire peut exiger que vous payiez la sienne.

-   Le propriétaire n''est pas tenu de diviser la dette entre les colocataires. Il peut réclamer l''intégralité de la somme à une seule personne.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La colocation](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-colocation/) - Détails sur la clause de solidarité.



-   **Risque d''impayés** : Vous risquez de devoir avancer la part de loyer d''un colocataire défaillant.

-   **Engagement lourd** : Le garant de chaque colocataire est également engagé solidairement pour la totalité du loyer. Si le propriétaire ne parvient pas à obtenir le paiement des colocataires, il peut se retourner contre n''importe lequel des garants.
-   **Pas de limite à la "part" du garanti** : Le garant d''un colocataire peut se voir réclamer la totalité du loyer impayé, même si son garanti n''en devait qu''une partie.


### 3. Durée de l''engagement solidaire après le départ d''un colocataire

La solidarité ne s''arrête pas tout de suite.

#### a) Après le départ d''un colocataire
-   **Durée maximale** : La clause de solidarité continue de s''appliquer pendant **6 mois** après la date effective du départ du colocataire, ou jusqu''à ce qu''un nouveau colocataire le remplace et soit mentionné dans le bail.
-   **Importance** : Cela signifie que pendant 6 mois, l''ancien colocataire et son garant peuvent toujours être sollicités en cas d''impayés, même s''ils n''occupent plus le logement.

-   Si un nouveau colocataire remplace le partant et que le bail est mis à jour (avenant au bail), la solidarité de l''ancien colocataire cesse dès la signature de l''avenant par le nouveau.



-   C''est le conseil le plus important. Vivez avec des personnes de confiance, avec qui vous avez de bonnes relations et qui sont fiables financièrement.

#### b) Demandez un "pacte de colocation" (non obligatoire, mais recommandé)
-   Rédigez un document interne entre colocataires qui définit les règles de vie, la répartition du loyer et des charges, et ce qui se passe en cas de départ d''un colocataire. Ce n''a pas de valeur vis-à-vis du propriétaire, mais encadre les relations internes.



-   Lorsqu''un colocataire part, assurez-vous que le propriétaire est informé par lettre recommandée avec accusé de réception et que la situation est clarifiée.




-   **Privilégiez le bail individuel** si possible : Si chaque colocataire a son propre bail, il n''y a pas de solidarité. C''est rare pour les colocations entières, mais existe.
-   **Comprenez l''engagement de votre garant** : Expliquez-lui bien la notion de solidarité.


-   **Faire confiance aveuglément** : Même avec des amis, les problèmes d''argent peuvent survenir.
-   **Ne pas réagir en cas d''impayés** : Plus vous attendez, plus la dette augmente.
-   **Penser que votre départ met fin à votre solidarité immédiatement** : L''engagement persiste 6 mois après votre départ (ou jusqu''à un remplaçant).
-   **Ne pas informer le propriétaire d''un départ** : La clause de solidarité peut alors s''appliquer indéfiniment.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La colocation](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-colocation/) - La référence pour toutes les informations sur la colocation.
-   🔗 [UFC-Que Choisir : Colocation : comment s''en sortir en cas de problème](https://www.quechoisir.org/fiche-pratique-colocation-comment-s-en-sortir-en-cas-de-probleme-n100508/) - Conseils aux consommateurs.
-   🔗 [Modeles-types.fr : Modèle d''avenant au bail en cas de départ](https://www.modeles-types.fr/location/modele-avenant-bail-colocation-depart-locataire.html) - Utile pour la gestion.


La clause de solidarité dans un bail de colocation est un engagement financier majeur : chaque colocataire et son garant sont solidairement responsables du paiement de la totalité du loyer et des charges. Cette solidarité persiste 6 mois après le départ d''un colocataire. Choisissez vos colocataires avec soin, assurez-vous de la solvabilité de tous les garants, et communiquez ouvertement sur les aspects financiers. Comprendre et gérer cette clause est crucial pour protéger vos finances et assurer une colocation sereine en France.
',
  2,
  65,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Les clauses abusives à rayer',
  '# Les clauses abusives à rayer

## Pourquoi c''est important ?

Le bail (contrat de location) est un document légal qui définit les droits et obligations du locataire et du propriétaire. Malheureusement, certains propriétaires ou agences immobilières peu scrupuleux peuvent tenter d''y insérer des "clauses abusives", c''est-à-dire des clauses qui sont contraires à la loi et qui vous désavantagent injustement. En tant qu''étudiant international, la méconnaissance du droit du logement français peut vous faire accepter des conditions illégales. Savoir identifier ces clauses abusives, connaître vos droits pour les refuser ou les rayer, et comprendre les recours possibles est absolument crucial pour protéger vos intérêts, éviter les litiges et signer un bail équilibré et conforme à la loi.


-   Définir ce qu''est une clause abusive dans un contrat de location.


La loi française (notamment la loi du 6 juillet 1989 sur les rapports locatifs) est très protectrice pour le locataire. Toute clause d''un bail qui contrevient à cette loi est réputée non écrite, ce qui signifie qu''elle n''a aucune valeur juridique, même si vous l''avez signée. Mais il est toujours préférable de la faire rayer.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les clauses abusives](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-bail/) - La référence sur les clauses abusives.


### 1. Qu''est-ce qu''une clause abusive ?


-   **Définition** : Une clause abusive est une disposition d''un contrat qui crée un déséquilibre significatif entre les droits et obligations des parties au détriment du consommateur (ici, le locataire).
-   **Nullité de la clause** : En droit français, une clause abusive est réputée non écrite, c''est-à-dire qu''elle n''a pas de valeur juridique. Cependant, il est toujours préférable de la faire rayer ou de la contester.




-   **Interdiction d''héberger des proches** : Le locataire a le droit d''héberger librement qui il souhaite, sauf si le logement est sur-occupé ou si cela crée un trouble à l''ordre public.
-   **Facturation de quittances** : L''envoi des quittances de loyer est gratuit.

#### b) Clauses sur l''entretien et les réparations
-   **Obligation de faire réaliser des travaux d''embellissement ou de remise à neuf lors du départ**.
-   **Interdiction d''aménager le logement** : Vous avez le droit d''aménager (peindre, poser des étagères) tant que vous ne dénaturez pas le logement.

-   **Obligation de se faire remplacer par un autre locataire** si vous partez avant la fin du bail (en colocation, le propriétaire ne peut vous obliger, mais c''est une pratique courante).





-   Avant de signer, indiquez poliment que la clause est abusive et donc réputée non écrite selon la loi (vous pouvez citer l''article 4 de la loi du 6 juillet 1989).


-   **Signature avec réserve** : Vous pouvez signer le bail, mais sachez que la clause est de toute façon non valide. Vous risquez cependant un litige si le bailleur tente de l''appliquer.
-   **Contactez l''ANIL / ADIL** : Avant de signer ou si vous avez déjà signé, ces organismes peuvent vous conseiller sur la validité des clauses et les recours possibles.




-   **Faites-vous aider** : Si le français n''est pas votre langue maternelle, faites-vous relire par un ami francophone ou un professionnel du droit.
-   **Conservez une copie du bail signé** : C''est votre preuve.
-   **N''hésitez pas à poser des questions** : Un bailleur honnête répondra sans problème.




-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les clauses abusives](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-bail/) - La référence principale.


De nombreuses clauses dans un bail de location peuvent être abusives et illégales. Il est crucial d''apprendre à les identifier (prélèvement automatique obligatoire, frais de quittance, interdiction d''héberger des proches, etc.) et de demander leur suppression ou de les rayer avant de signer. La loi est de votre côté. N''hésitez pas à vous faire aider par l''ANIL ou des associations de consommateurs. Protégez vos droits et assurez-vous de signer un bail juste et conforme pour votre logement en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'La signature électronique',
  '# La signature électronique

## Pourquoi c''est important ?

À l''ère du numérique, la signature électronique des contrats de location (baux) devient de plus en plus courante en France. Elle permet de simplifier et d''accélérer les démarches, surtout si vous êtes à distance ou si plusieurs parties doivent signer. Cependant, il est absolument crucial de comprendre ce qu''est une signature électronique "valide" d''un point de vue légal, comment elle fonctionne, et comment vous assurer que le processus est sécurisé. Une signature électronique non conforme pourrait rendre votre bail contestable, vous exposant à des problèmes juridiques. Maîtriser cette technologie est donc essentiel pour signer votre bail en toute confiance et en toute légalité.


-   Définir ce qu''est une signature électronique légale en France.
-   Identifier les éléments de sécurité d''une signature électronique.


La signature électronique n''est pas une simple image de votre signature manuscrite. C''est un processus technique et juridique qui permet de garantir l''intégrité du document et l''identification du signataire. En France, elle est encadrée par le règlement européen eIDAS.



### 1. Qu''est-ce qu''une signature électronique légale ?

Elle a la même valeur qu''une signature manuscrite.

-   **Équivalence à la signature manuscrite** : Selon le Code civil français (article 1367) et le règlement européen eIDAS, une signature électronique valide a la même valeur juridique qu''une signature manuscrite.
-   **Preuve** : Elle permet de garantir l''intégrité du document signé (qu''il n''a pas été modifié après signature) et d''identifier de manière fiable le signataire.

-   **Avancée** : Offre une meilleure identification (par exemple, code reçu par SMS sur un numéro unique). C''est la plus courante pour les baux.
-   Pour un bail de location, une signature électronique "avancée" est généralement suffisante et légale.

🔗 [ANSSI (Agence Nationale de la Sécurité des Systèmes d''Information) : Qu''est-ce que la signature électronique ?](https://www.ssi.gouv.fr/entreprise/reglementation/signature-electronique/) - Explications techniques et juridiques.



-   Le propriétaire ou l''agence utilise une plateforme de signature électronique (ex: Universign, DocuSign, YouSign, CertiSign).

-   **Vérification d''identité** : La plateforme peut vous demander de confirmer votre identité via un code reçu par SMS sur votre numéro de téléphone portable enregistré.
-   **Consultation du document** : Vous lisez l''intégralité du bail. Prenez votre temps !
-   **Signature** : Vous cliquez sur un bouton "Signer" ou "Approuver". La plateforme génère alors une "signature" cryptographique liée à votre identité et au document.
-   **Historique** : La plateforme garde une trace de toutes les étapes (heure d''ouverture, heure de signature, adresse IP).

-   Une fois que toutes les parties ont signé, vous recevez une copie du bail signé électroniquement par e-mail, généralement avec un "dossier de preuves" (audit trail) qui atteste de la validité de la signature.



-   Assurez-vous que l''agence ou le propriétaire utilise un fournisseur de signature électronique reconnu et certifié (comme ceux mentionnés ci-dessus).

-   La signature électronique repose sur un certificat électronique. La plateforme doit pouvoir prouver l''identité du signataire.

-   La plateforme doit garantir que le document n''a pas été modifié entre le moment où il a été proposé à la signature et le moment de la signature.





-   **Assurez-vous d''être sur une plateforme fiable** : Ne cliquez pas sur des liens suspects ou provenant d''expéditeurs inconnus.
-   **Vérifiez l''identité de toutes les parties** : Assurez-vous que les autres signataires sont bien ceux qu''ils prétendent être.
-   **N''hésitez pas à demander une version papier** si vous préférez, bien que la version électronique soit légale.


-   **Cliquer sur des liens de signature frauduleux** : Vérifiez toujours l''expéditeur et l''URL.
-   **Ne pas avoir de preuve d''identité forte** : Si la plateforme ne demande pas de vérification forte (par SMS par exemple), la signature est moins sécurisée.
-   **Penser qu''une image de signature scannée est une signature électronique légale** : Ce n''est pas le cas.
-   **Ne pas conserver le document signé** : C''est votre preuve contractuelle.


-   🔗 [ANSSI (Agence Nationale de la Sécurité des Systèmes d''Information) : Qu''est-ce que la signature électronique ?](https://www.ssi.gouv.fr/entreprise/reglementation/signature-electronique/) - Explications de l''organisme de cybersécurité.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le bail de location](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-bail/) - Informations sur les contrats de location.


La signature électronique des baux est un moyen légal, rapide et sécurisé de conclure un contrat de location en France. Elle a la même valeur juridique qu''une signature manuscrite si elle respecte les normes (règlement eIDAS). Lisez toujours attentivement le bail avant de signer sur une plateforme sécurisée, vérifiez votre identité, et conservez précieusement le document signé et son dossier de preuves. Maîtriser ce processus vous permettra de signer votre bail en toute confiance et d''éviter les problèmes juridiques.
',
  4,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

