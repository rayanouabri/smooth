-- ==========================================
-- LOT 6 : Cours 26 à 30
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 26 ---

-- COURS 27 : Faire sa demande d'APL (Tuto)
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Faire sa demande d''APL (Tuto) : Guide pas à pas sur caf.fr',
  'faire-demande-apl-tuto-guide-pas-a-pas-caf-fr',
  'Ce cours est un tutoriel complet et essentiel pour tous les étudiants internationaux et jeunes résidents en France qui souhaitent demander les Aides Personnalisées au Logement (APL) de la CAF. La procédure de demande, entièrement dématérialisée sur `caf.fr`, peut paraître complexe. Nous vous guiderons pas à pas pour créer votre compte allocataire, remplir votre déclaration de ressources, fournir les informations détaillées sur votre logement et votre bailleur, et comprendre les modalités de versement (directement au locataire ou au propriétaire). Maîtriser cette démarche en ligne est absolument crucial pour obtenir rapidement vos aides au logement et optimiser votre budget en France.',
  'Tuto APL CAF : Créez votre compte, déclarez vos ressources, infos logement, versement. Guide complet sur caf.fr pour vos aides au logement !',
  'logement',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Maîtriser la création de son compte allocataire sur caf.fr", "Remplir correctement sa déclaration de ressources pour les APL", "Fournir toutes les informations sur le logement et le bailleur", "Comprendre les modalités de versement des APL (locataire ou propriétaire)"]'::jsonb,
  '["Avoir un logement en France", "Avoir un titre de séjour valide (ou VLS-TS validé)", "Avoir une attestation de loyer remplie par le propriétaire"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 27
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Créer son compte Allocataire',
  '# Créer son compte Allocataire CAF

## Pourquoi c''est important ?

Pour faire votre demande d''Aides Personnalisées au Logement (APL) ou toute autre prestation de la Caisse d''Allocations Familiales (CAF), la première étape est de créer votre compte allocataire sur le site officiel `caf.fr`. C''est via cet espace personnel sécurisé que vous allez déposer votre demande, télécharger vos justificatifs, suivre l''avancement de votre dossier, et communiquer avec la CAF. Ne pas avoir un compte allocataire opérationnel, ou le créer de manière incorrecte, peut entraîner des retards importants dans le versement de vos aides. Maîtriser cette création de compte est absolument crucial pour initier votre démarche d''APL sans encombre et gérer votre relation avec la CAF en toute autonomie.


-   Identifier les informations personnelles nécessaires pour l''inscription.
-   Comprendre le rôle du "numéro allocataire" et son obtention.
-   Maîtriser les conseils pour sécuriser votre compte et l''utiliser efficacement.


Le compte allocataire est votre porte d''entrée vers les services de la CAF. La démarche est entièrement dématérialisée et demande de la rigueur.



### 1. Accéder au site CAF et démarrer l''inscription


-   Ouvrez votre navigateur internet et tapez l''adresse exacte.

#### b) Cliquer sur "Mon Compte" ou "Créer un compte"
-   En haut à droite de la page d''accueil, cliquez sur "Mon Compte".
-   Cliquez ensuite sur "Créer mon compte" ou "Je n''ai pas de numéro allocataire".



-   **"Vous êtes..."** : Particulier.
-   **"Vous avez..."** : Indiquez "pas de numéro allocataire" si c''est votre première démarche.

-   **Numéro de Sécurité Sociale** : Si vous avez déjà un numéro définitif, renseignez-le. Si vous n''avez qu''un numéro provisoire (commençant par 7 ou 8) ou pas de numéro du tout, la CAF vous guidera. Il est préférable d''avoir déjà initié sa demande de numéro définitif.

-   **Création d''un mot de passe sécurisé** : Combinez lettres majuscules, minuscules, chiffres et symboles. Notez-le dans un endroit sûr.


C''est une étape de sécurité et d''activation.

-   Après avoir rempli le formulaire, un e-mail de confirmation avec un lien d''activation vous sera envoyé.
-   **Vérifiez votre boîte de réception et vos spams** : L''e-mail peut parfois s''y trouver.
-   **Cliquez sur le lien d''activation** pour valider votre adresse e-mail et activer votre compte.








-   **Vérifiez l''orthographe de votre nom** : Il doit être identique à vos documents officiels.
-   **Ne créez qu''un seul compte CAF** : La création de doublons est problématique.


-   **Saisir des informations erronées** : Cela peut retarder votre demande d''APL.


-   🔗 [Service-Public.fr : La Caisse d''allocations familiales (CAF)](https://www.service-public.fr/particuliers/vosdroits/F10403) - Informations générales sur la CAF.
-   🔗 [Ameli.fr : S''inscrire à la Sécurité Sociale](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/etudiant-etranger) - Pour obtenir votre numéro de Sécurité Sociale.


Créer votre compte allocataire sur `caf.fr` est la première étape indispensable pour demander les APL et gérer vos prestations sociales en France. Renseignez vos informations d''identité et de contact avec précision, sécurisez votre mot de passe, et activez votre compte. Une fois votre demande déposée, vous obtiendrez un numéro allocataire, votre identifiant unique auprès de la CAF. Maîtriser cette création de compte est crucial pour initier vos démarches d''APL et assurer une gestion fluide de votre dossier.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Remplir la déclaration de ressources',
  '# Remplir la déclaration de ressources APL

## Pourquoi c''est important ?

La déclaration de ressources est le cœur de votre demande d''Aides Personnalisées au Logement (APL) auprès de la CAF. C''est sur la base des informations que vous fournissez que la CAF va calculer le montant de votre aide. Une erreur ou une omission dans cette déclaration peut entraîner un refus, une demande de remboursement (si vous avez perçu trop d''aides) ou, au contraire, un montant d''aide inférieur à ce à quoi vous avez droit. Pour les étudiants internationaux, souvent sans revenus français établis, il est crucial de savoir comment déclarer correctement vos ressources (y compris les bourses ou les fonds provenant de l''étranger) pour optimiser vos droits et éviter tout litige financier.


-   Comprendre le principe de la déclaration de ressources et l''année de référence (N-2).
-   Savoir comment déclarer l''absence de revenus ou de faibles revenus.


La CAF base le calcul de vos droits sur vos ressources. Il est donc essentiel d''être le plus exact possible lors de cette déclaration. La démarche se fait principalement en ligne via votre espace allocataire.



### 1. L''année de référence et le principe de déclaration


-   **Année de référence** : La CAF utilise principalement vos revenus de l''année N-2. Par exemple, pour une demande faite en 2025, la CAF examinera vos revenus de 2023.
-   **Pourquoi ?** : Pour avoir des données fiscales consolidées et vérifiables (via l''avis d''imposition).

-   Vous devez déclarer tous les revenus imposables perçus durant cette année de référence, en France et à l''étranger, si vous étiez résident fiscal en France cette année-là.
-   Même si vous n''avez pas de revenus imposables, la déclaration doit être faite (en indiquant 0) pour prouver votre situation.



#### a) Salaires et autres revenus d''activité
-   Si vous avez eu un job étudiant en France pendant l''année N-2, déclarez les montants bruts perçus.
-   Si vous avez eu une activité salariée à l''étranger et que vous étiez résident fiscal en France (rare pour N-2 des primo-arrivants), ces revenus sont aussi à déclarer.

#### b) Bourses d''études
-   **Ressources forfaitaires étudiants** : La CAF peut appliquer un "forfait étudiant" si vous n''avez pas de revenus ou de très faibles revenus, surtout si vous êtes détaché(e) fiscalement de vos parents.

-   Si vous avez perçu d''autres prestations sociales (chômage, maladie), elles doivent être déclarées.


#### e) Fonds provenant de l''étranger / prise en charge parentale
-   **Les virements de vos parents** depuis l''étranger, s''ils ne constituent pas une pension alimentaire officielle, ne sont généralement pas considérés comme des revenus imposables et ne sont donc pas à déclarer.
-   Cependant, la CAF peut vous demander des **preuves de vos moyens d''existence** (relevés bancaires, attestation de prise en charge parentale) pour s''assurer que vous avez les ressources nécessaires pour vivre. Ces documents ne sont pas à déclarer comme "revenus" mais comme preuves de votre capacité financière.

🔗 [Impots.gouv.fr : Déclaration de revenus](https://www.impots.gouv.fr/portail/particulier/declaration-des-revenus) - Pour l''avis d''imposition.



-   Cherchez la section "Déclarer un changement de situation" ou "Demander une prestation".

-   Le formulaire en ligne est interactif et vous posera des questions sur votre situation (personnelle, professionnelle, familiale) et vos ressources pour l''année N-2.
-   **Soyez honnête et précis** : Saisissez les montants exacts figurant sur vos documents (avis d''imposition, fiches de paie).
-   **Indiquez 0 si pas de revenus** : Si vous n''avez eu aucun revenu imposable en N-2, indiquez "0" dans les cases correspondantes.
-   **Validez chaque étape** : Ne passez pas à l''étape suivante sans avoir vérifié les informations.



-   **Avis d''imposition (ASDIR) N-2** : C''est le document le plus important. Même de non-imposition.


-   Votre **avis d''imposition N-2** (même de non-imposition / ASDIR).


-   **Faites votre déclaration de revenus annuelle aux impôts** : C''est le document que la CAF utilisera en priorité.
-   **N''hésitez pas à contacter votre CAF** (via la messagerie sécurisée de votre espace) si vous avez des doutes sur ce qu''il faut déclarer.


-   **Ne pas faire sa déclaration de revenus aux impôts** : Vous n''aurez pas l''avis d''imposition N-2, ce qui bloquera votre demande APL.
-   **Ne pas tenir compte de l''année N-2** : Les revenus actuels ne sont pas toujours la base principale du calcul.


-   🔗 [CAF : Faire une demande d''aide au logement](https://www.caf.fr/allocataires/demander-une-aide-au-logement) - Le portail pour la demande.
-   🔗 [Impots.gouv.fr : Déclaration de revenus](https://www.impots.gouv.fr/portail/particulier/declaration-des-revenus) - Pour votre avis d''imposition.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les aides au logement](https://www.anil.org/votre-projet/vous-etes-locataire/les-aides-au-logement/) - Informations complémentaires.


Remplir correctement votre déclaration de ressources pour les APL sur `caf.fr` est une étape déterminante. Vous devrez déclarer vos revenus de l''année N-2 (y compris les salaires ou bourses imposables), même si vous indiquez 0. Préparez votre avis d''imposition N-2 (même de non-imposition), vos fiches de paie et vos preuves de fonds. Soyez précis(e) et honnête. Une déclaration conforme garantira un calcul juste de vos aides et évitera les problèmes avec la CAF.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'Informations sur le logement et le bailleur',
  '# Informations sur le logement et le bailleur (Demande APL)

## Pourquoi c''est important ?

Pour que la CAF puisse calculer et vous verser les Aides Personnalisées au Logement (APL), elle a besoin d''informations très précises non seulement sur vous, mais aussi sur votre logement et votre bailleur (propriétaire ou agence). Fournir des informations exactes et complètes sur le logement (adresse, type, loyer) et sur le bailleur (identité, coordonnées, RIB) est absolument crucial. Toute erreur ou manque d''information peut bloquer votre demande, retarder le versement de vos aides, ou même entraîner un refus. Pour les étudiants internationaux, obtenir l''attestation de loyer remplie et signée par le propriétaire est une étape clé qui demande de la coordination. Maîtriser ces exigences est fondamental pour assurer la fluidité de votre demande APL.


-   Comprendre les données sur le bailleur nécessaires pour la demande d''APL.
-   Savoir comment obtenir l''attestation de loyer remplie et signée par votre propriétaire.


La CAF a besoin d''une description complète de votre situation de logement pour évaluer vos droits. Le logement doit être décent, être votre résidence principale et, pour les APL, être conventionné.




La CAF a besoin d''une description précise.

-   Numéro, rue, code postal, ville, étage, numéro d''appartement.
-   Assurez-vous que l''adresse correspond exactement à celle de votre bail et de vos justificatifs de domicile.

-   Appartement, studio, colocation, chambre chez l''habitant, résidence universitaire.

#### c) Date d''entrée dans le logement

-   **Montant des charges mensuelles** : Pour l''eau, chauffage collectif, entretien des parties communes.
-   Le simulateur et le formulaire demanderont souvent ces deux montants pour calculer le loyer "charges comprises" (CC).


-   **Très important** : Demandez à votre propriétaire ou à l''agence si le logement est "conventionné APL". La plupart des résidences étudiantes, HLM, et certains logements privés ont signé une convention avec l''État.
-   Si le logement est conventionné, vous pouvez bénéficier de l''APL. Sinon, vous pourriez avoir droit à l''ALS (Allocation de Logement Sociale), souvent un peu moins élevée.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Logement décent et APL](https://www.anil.org/votre-projet/vous-etes-locataire/les-aides-au-logement/les-aides-au-logement/) - Informations sur la décence et la convention.






#### d) Relevé d''Identité Bancaire (RIB) du bailleur
-   **Très important** : La CAF a besoin du RIB du propriétaire si vous souhaitez que l''APL soit versée directement à lui (ce qui est souvent le cas et conseillé, car cela réduit votre loyer à payer).
-   Le RIB doit être au nom du propriétaire ou de l''agence gestionnaire.

### 3. L''attestation de loyer : Un document clé à faire remplir par le propriétaire

C''est le lien officiel entre vous, le propriétaire et la CAF.

#### a) Qu''est-ce que l''attestation de loyer ?
-   C''est un formulaire spécifique de la CAF (téléchargeable sur `caf.fr`) que le propriétaire ou l''agence doit remplir, dater et signer.

#### b) Comment l''obtenir ?
-   Téléchargez le formulaire sur `caf.fr` (souvent dans la section "Demander une aide au logement").
-   Remettez-le à votre propriétaire ou à l''agence immobilière.
-   **Récupérez l''original** une fois rempli.

-   **Lien direct avec le versement** : C''est sur cette attestation que le propriétaire indiquera s''il souhaite que la CAF lui verse l''APL directement.


-   Le **formulaire "Attestation de loyer"** de la CAF.


-   **Préparez le formulaire d''attestation de loyer à l''avance** et remettez-le au propriétaire dès que possible.
-   **Expliquez au propriétaire l''importance de ce document** pour vos aides.
-   **Vérifiez toutes les informations** remplies par le propriétaire sur l''attestation avant de la transmettre à la CAF.
-   **Gardez une copie de l''attestation de loyer signée** pour vos archives.
-   **Communiquez avec la CAF** via votre espace si vous avez du mal à obtenir l''attestation.


-   **Ne pas obtenir l''attestation de loyer signée par le propriétaire** : C''est un document bloquant.
-   **Le propriétaire refuse de remplir l''attestation** : Dans ce cas, contactez la CAF pour obtenir des conseils. C''est rare car le versement direct de l''APL au propriétaire est un avantage pour lui.
-   **Ne pas vérifier si le logement est conventionné** : Cela détermine le type d''aide (APL ou ALS).


-   🔗 [CAF : Demander une aide au logement](https://www.caf.fr/allocataires/demander-une-aide-au-logement) - Le portail de la demande d''APL.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les aides au logement](https://www.anil.org/votre-projet/vous-etes-locataire/les-aides-au-logement/) - Guide complet.


Fournir des informations précises sur votre logement et votre bailleur est crucial pour votre demande d''APL. L''attestation de loyer, remplie et signée par votre propriétaire, est un document clé. Assurez-vous d''avoir l''adresse complète, le loyer et les charges, le caractère conventionné du logement, et le RIB du bailleur (si le versement direct est souhaité). Coordonnez-vous avec votre propriétaire pour obtenir cette attestation rapidement. Une information complète et exacte est la garantie d''un traitement fluide de votre demande et du versement de vos aides.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'RIB et versement (Au locataire ou au propriétaire ?)',
  '# RIB et versement (Au locataire ou au propriétaire ?)

## Pourquoi c''est important ?

Une fois votre demande d''Aides Personnalisées au Logement (APL) acceptée par la CAF, la question du versement de l''aide est cruciale. Vous devrez fournir un Relevé d''Identité Bancaire (RIB) d''un compte bancaire français, et choisir (ou laisser le propriétaire choisir) si l''APL vous est versée directement ou si elle est versée directement au propriétaire (tiers payant). Comprendre ces modalités et les implications de chaque option est absolument essentiel pour les étudiants internationaux afin de garantir que l''aide arrive au bon endroit, que votre budget soit géré efficacement, et d''éviter les confusions ou les retards de paiement.


-   Comprendre la nécessité d''un RIB français pour le versement des APL.
-   Identifier les informations clés d''un RIB (IBAN, BIC).


La CAF ne peut verser d''aides que sur un compte bancaire domicilié en France. C''est une règle importante à anticiper.



### 1. La nécessité d''un RIB français

C''est le support indispensable pour recevoir vos aides.

-   **Obligation** : La CAF exige un RIB d''un compte bancaire ouvert dans un établissement bancaire français.
-   **Démarche** : Si vous n''avez pas encore de compte bancaire en France, c''est une des premières choses à faire après votre arrivée. (Voir cours sur l''ouverture de compte bancaire).

-   **IBAN (International Bank Account Number)** : Votre numéro de compte bancaire international (commence par "FR" pour la France, puis 25 chiffres et lettres).
-   **BIC / SWIFT (Bank Identifier Code)** : Code international d''identification de votre banque.

🔗 [Banque de France : Services bancaires](https://www.banque-france.fr/vos-services/particuliers/ouvrir-un-compte-bancaire) - Informations sur l''ouverture de compte.



-   **Principe** : La CAF vous verse l''APL directement sur votre compte bancaire français. Vous êtes ensuite responsable de payer l''intégralité du loyer (loyer nu + charges) au propriétaire.
    -   Vous devez être rigoureux(se) dans le paiement du loyer et ne pas oublier d''inclure l''APL.
    -   Cela peut nécessiter d''avoir un fonds de roulement suffisant en début de mois, le temps que l''APL soit versée (souvent en début de mois, mais après le paiement du loyer).

-   **Principe** : La CAF verse l''APL directement au propriétaire ou à l''agence immobilière. Vous ne payez alors que la partie du loyer qui reste à votre charge (loyer nu + charges - APL).
    -   **Simplification** : Vous n''avez qu''une partie du loyer à payer, ce qui simplifie votre gestion budgétaire.
    -   **Sécurité pour le propriétaire** : Pour le bailleur, c''est une garantie importante qu''une partie du loyer est assurée. Cela peut faciliter l''acceptation de votre dossier de location.
    -   Vous avez moins de contrôle direct sur le montant de l''aide perçue.
    -   Vous dépendez du propriétaire pour l''information sur le versement (bien que la CAF vous informe aussi).

-   **Le propriétaire décide** : C''est le bailleur qui choisit le mode de versement sur l''attestation de loyer qu''il remplit pour la CAF.

🔗 [CAF : Modalités de versement des aides](https://www.caf.fr/allocataires/ma-caf-en-ligne/telecharger-un-formulaire/les-formulaires-nationaux-logement) - La page de l''attestation de loyer mentionne le choix du versement.



-   Allez dans la section "Mes informations personnelles" ou "Mes coordonnées bancaires".

-   Le formulaire de demande d''APL en ligne vous demandera également de fournir votre RIB.


L''APL est versée "à terme échu".

-   **À terme échu** : L''APL est toujours versée le 5 du mois suivant. Par exemple, l''APL due pour le mois de septembre sera versée le 5 octobre.
-   **Anticipez le décalage** : Prévoyez de pouvoir payer votre loyer en intégralité les premiers mois, avant de commencer à percevoir l''APL.


-   Votre **RIB** d''un compte bancaire français.
-   L''**attestation de loyer** remplie par votre propriétaire.


-   **Communiquez avec votre propriétaire** pour savoir s''il préfère le versement direct et obtenir son RIB si c''est le cas.


-   **Ne pas savoir à qui l''APL est versée** : Cela peut créer des problèmes de budget ou des loyers impayés.
-   **Oublier d''informer la CAF en cas de fermeture de compte ou de changement de banque**.


-   🔗 [CAF : Faire une demande d''aide au logement](https://www.caf.fr/allocataires/demander-une-aide-au-logement) - Le portail de la demande.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les aides au logement](https://www.anil.org/votre-projet/vous-etes-locataire/les-aides-au-logement/) - Informations sur le versement.


Pour le versement de vos APL, vous devrez fournir un RIB d''un compte bancaire français. L''APL peut vous être versée directement ou être versée au propriétaire (tiers payant), selon le choix du bailleur. Le versement au propriétaire est souvent plus simple pour votre gestion budgétaire. Anticipez l''ouverture de votre compte bancaire français, comprenez les modalités de versement (à terme échu) et n''oubliez pas que le premier versement peut prendre du temps. Une bonne gestion de ces aspects est cruciale pour une réception fluide de vos aides au logement en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 27 ---

-- COURS 28 : Taxe d'Ordures Ménagères
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Taxe d''Ordures Ménagères (TEOM) : Comprendre vos charges',
  'taxe-ordures-menageres-teom-comprendre-charges',
  'Ce cours est essentiel pour tous les étudiants internationaux en France qui louent un logement et découvrent leurs charges locatives. La Taxe d''Enlèvement des Ordures Ménagères (TEOM) est un impôt local souvent inclus dans vos charges, mais son fonctionnement et son calcul peuvent être complexes. Nous vous expliquerons ce qu''est la TEOM et qui la paie réellement (le propriétaire, qui la récupère sur le locataire), comment elle est calculée et incluse dans vos provisions pour charges, et pourquoi il est important de vérifier son montant lors de la régularisation annuelle. Maîtriser cette information est crucial pour comprendre la composition de votre loyer, éviter de payer des montants indus et gérer efficacement votre budget.',
  'TEOM : C''est quoi ? Comment est-elle calculée dans vos charges ? Vérifiez votre régularisation annuelle. Comprenez tout !',
  'logement',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la nature de la Taxe d''Enlèvement des Ordures Ménagères (TEOM)", "Savoir comment la TEOM est incluse et calculée dans les charges locatives", "Identifier l''importance de vérifier le montant lors de la régularisation annuelle", "Maîtriser les conseils pour une bonne gestion de cette charge locative"]'::jsonb,
  '["Avoir un logement en France avec des charges locatives"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 28
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'C''est quoi la TEOM ?',
  '# C''est quoi la TEOM ?

## Pourquoi c''est important ?

Lorsque vous louez un logement en France, le loyer ne se compose pas seulement du loyer nu, mais aussi de "charges locatives". Parmi ces charges, on trouve souvent la Taxe d''Enlèvement des Ordures Ménagères (TEOM). Comprendre ce qu''est la TEOM, qui la paie réellement (et comment elle est répercutée sur vous, le locataire), est absolument crucial pour décrypter vos quittances de loyer et votre budget logement. La méconnaissance de cette taxe peut vous faire payer des montants non vérifiés ou ne pas comprendre la composition de vos dépenses. C''est un élément essentiel de la transparence financière de votre location.


-   Définir la Taxe d''Enlèvement des Ordures Ménagères (TEOM).



🔗 [Service-Public.fr : Taxe d''enlèvement des ordures ménagères (TEOM)](https://www.service-public.fr/particuliers/vosdroits/F2954) - La page officielle sur la TEOM.




#### a) Taxe d''Enlèvement des Ordures Ménagères (TEOM)
-   **Nature** : C''est un impôt local, pas une redevance pour service rendu. Elle est due par tous les propriétaires de propriétés bâties (logements, locaux commerciaux, etc.).
-   **Objectif** : Financer le service de collecte et de traitement des déchets ménagers et assimilés assuré par la commune ou l''intercommunalité.
-   **Qui la paie initialement ?** : Le propriétaire du logement. Il reçoit un avis d''imposition spécifique pour la TEOM (généralement en automne, avec la taxe foncière).

-   **Charge récupérable** : La TEOM est une "charge récupérable" sur le locataire. Cela signifie que le propriétaire a le droit de vous demander de lui rembourser le montant de la TEOM qu''il a payée.
-   **Inclus dans les charges locatives** : C''est pourquoi elle est souvent incluse dans les "provisions pour charges" que vous payez chaque mois avec votre loyer.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les charges récupérables](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-charges-locatives/#c10443) - Détails sur les charges.



-   **Paiement mensuel** : Chaque mois, en plus de votre loyer nu, vous payez une "provision sur charges". Cette provision est une estimation des charges locatives que vous paierez sur l''année (eau, entretien des parties communes, TEOM, etc.).
-   **Régularisation annuelle** : Une fois par an, le propriétaire doit effectuer une "régularisation des charges". Il compare les provisions que vous avez versées avec les dépenses réelles.
    -   Si vous n''avez pas assez payé, vous lui devez un complément.

-   Pour les locations meublées (surtout les petites surfaces et les baux étudiants), les charges peuvent être "forfaitaires".



-   **Collectivités locales** : La TEOM est collectée par la commune ou l''établissement public de coopération intercommunale (EPCI) auquel votre commune appartient (ex: une métropole, une communauté d''agglomération).
-   **Trésor Public** : C''est le service des impôts qui recouvre cette taxe auprès des propriétaires.


-   L''**avis de taxe foncière du propriétaire** (qui inclut la TEOM).


-   **Demandez au propriétaire une copie de son avis de taxe foncière** : Cela vous permettra de vérifier le montant exact de la TEOM qu''il paie et de vous assurer qu''il ne vous demande pas plus. (Il est en droit de vous le demander, c''est un droit du locataire).
-   **Vérifiez la ligne "TEOM" sur votre relevé annuel de charges** (si provisions).
-   **Comprenez la différence entre provisions et forfait** : C''est essentiel pour savoir si une régularisation est attendue.
-   **Posez des questions** : Si une ligne de charges n''est pas claire sur votre régularisation.


-   **Ne pas vérifier le montant lors de la régularisation annuelle** : Le propriétaire ne peut vous réclamer que le montant exact qu''il a payé.
-   **Payer une TEOM alors que le propriétaire n''y est pas soumis** (très rare, mais possible pour des cas spécifiques de logement vacant).


-   🔗 [Service-Public.fr : Taxe d''enlèvement des ordures ménagères (TEOM)](https://www.service-public.fr/particuliers/vosdroits/F2954) - La référence officielle.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les charges locatives](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-charges-locatives/) - Très détaillé sur la TEOM et la régularisation.


La Taxe d''Enlèvement des Ordures Ménagères (TEOM) est un impôt local payé par le propriétaire mais qu''il a le droit de récupérer sur vous, le locataire, via les charges locatives. Elle est souvent incluse dans vos provisions pour charges mensuelles et fait l''objet d''une régularisation annuelle. Demandez une copie de l''avis de taxe foncière à votre propriétaire pour vérifier le montant de la TEOM et assurez-vous qu''elle ne vous est pas réclamée deux fois. Comprendre cette taxe est crucial pour décrypter vos charges et gérer votre budget en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Comment elle est calculée dans les charges',
  '# Comment la TEOM est calculée dans les charges

## Pourquoi c''est important ?

La Taxe d''Enlèvement des Ordures Ménagères (TEOM) est un impôt dont le propriétaire est redevable, mais qu''il a le droit de récupérer sur le locataire. Il est donc crucial de comprendre comment cette taxe est calculée et intégrée dans les charges que vous payez mensuellement. Ne pas saisir ce mécanisme peut vous faire payer des montants arbitraires ou erronés, surtout lors de la régularisation annuelle des charges. Pour les étudiants internationaux, la complexité du système de charges en France peut être une source de confusion. Maîtriser ce calcul est essentiel pour vérifier la justesse des sommes demandées, contester d''éventuels abus, et gérer votre budget avec précision.


-   Comprendre le principe de calcul de la TEOM par l''administration fiscale.


La TEOM est basée sur la valeur locative cadastrale du logement. C''est un montant fixe pour l''année, que le propriétaire doit ensuite répartir sur les locataires.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La régularisation des charges](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-charges-locatives/#c10443) - Explications sur la régularisation.


### 1. Le calcul de la TEOM par l''administration fiscale


-   Un **taux d''imposition** voté par la commune ou l''intercommunalité est ensuite appliqué à cette valeur locative.
-   **C''est une taxe annuelle et forfaitaire** : Son montant ne dépend pas de la quantité de déchets que vous produisez, ni du nombre de personnes dans le logement.

#### b) L''avis de taxe foncière
-   Le montant de la TEOM est indiqué sur l''avis de taxe foncière que le propriétaire reçoit chaque automne.

🔗 [Impots.gouv.fr : Calcul de la taxe d''enlèvement des ordures ménagères (TEOM)](https://www.impots.gouv.fr/portail/particulier/taxes-locales/taxe-denlevement-des-ordures-menageres-teom) - Informations détaillées sur le calcul.



-   **Estimation mensuelle** : Le propriétaire (ou l''agence) estime un montant mensuel de "provisions pour charges" (incluant la TEOM, l''eau chaude/froide collective, l''entretien des parties communes, l''ascenseur, etc.). Vous payez ce montant chaque mois en plus du loyer nu.

-   Pour les locations meublées, les charges peuvent être un "forfait". Dans ce cas, la TEOM est incluse dans ce forfait et ne donne pas lieu à régularisation. Le propriétaire ne peut rien vous réclamer en plus pour la TEOM.




-   Le propriétaire doit procéder à une **régularisation annuelle des charges**. Il compare les provisions que vous avez versées sur l''année avec les dépenses réelles engagées.

-   Le propriétaire doit être en mesure de vous présenter l''**avis de taxe foncière** sur lequel figure le montant de la TEOM.
-   **Période d''occupation** : Si vous n''avez pas occupé le logement pendant toute l''année civile, le montant de la TEOM qui vous est imputé doit être calculé au prorata de votre période d''occupation.



-   L''**avis de taxe foncière du propriétaire** (à demander pour vérification).


-   **Demandez toujours une copie de l''avis de taxe foncière** à votre propriétaire pour l''année concernée. C''est votre droit.
-   **Vérifiez le calcul de prorata** si vous n''avez pas occupé le logement toute l''année.
-   **Comparez le montant de la TEOM récupérée** avec ce qui est indiqué sur l''avis de taxe foncière du propriétaire.
-   **N''hésitez pas à contester** si le calcul vous semble erroné (voir leçon suivante).


-   **Payer la TEOM sans vérification** : Sans vérifier l''avis de taxe foncière.
-   **Laisser le propriétaire vous facturer des frais supplémentaires** pour la TEOM (il n''a pas le droit).


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La régularisation des charges](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-charges-locatives/#c10443) - La référence pour le calcul et la régularisation.
-   🔗 [Service-Public.fr : Taxe d''enlèvement des ordures ménagères (TEOM)](https://www.service-public.fr/particuliers/vosdroits/F2954) - Informations officielles sur le calcul.
-   🔗 [Ministère de l''Économie et des Finances : Impôts locaux](https://www.economie.gouv.fr/particuliers/impots-locaux) - Informations générales sur les impôts locaux.


La TEOM est calculée par l''administration fiscale sur la valeur locative cadastrale du logement et est répercutée sur le locataire via les charges locatives. Si vous payez des provisions pour charges, le propriétaire doit effectuer une régularisation annuelle en vous fournissant un relevé détaillé. Demandez toujours une copie de l''avis de taxe foncière du propriétaire pour vérifier le montant de la TEOM et le calcul au prorata de votre occupation. Comprendre ce mécanisme est essentiel pour vérifier la justesse de vos charges et gérer votre budget logement.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Vérifier le montant lors de la régularisation',
  '# Vérifier le montant lors de la régularisation de charges

## Pourquoi c''est important ?

Chaque année, si vous payez des provisions pour charges, votre propriétaire doit effectuer une "régularisation annuelle des charges". C''est un moment crucial où il compare les provisions que vous avez versées avec les dépenses réelles qu''il a engagées. Vérifier attentivement ce relevé de régularisation, et notamment la ligne concernant la Taxe d''Enlèvement des Ordures Ménagères (TEOM), est absolument essentiel. Des erreurs sont possibles, et sans vérification, vous pourriez payer un supplément injustifié ou ne pas obtenir un remboursement qui vous est dû. Pour les étudiants internationaux, cette étape peut être complexe mais protège directement votre budget et vos droits de locataire.





🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La régularisation des charges](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-charges-locatives/#c10443) - La référence pour la régularisation.



Un bilan financier de l''année.

-   La régularisation doit être faite **une fois par an**. Le propriétaire dispose d''un délai d''un mois pour vous communiquer le décompte de charges un mois avant de procéder à la régularisation.
-   Elle concerne généralement les charges de l''année civile passée (par exemple, en 2025, il régularise les charges de 2024).





C''est votre droit de tout vérifier.

#### a) L''avis de taxe foncière
-   **Pour la TEOM** : C''est le document indispensable. Le propriétaire doit vous le présenter (ou une copie) pour justifier le montant de la Taxe d''Enlèvement des Ordures Ménagères.

-   **Factures d''eau, de chauffage collectif** : Si ces dépenses sont incluses dans vos charges, demandez les factures détaillées.
-   **Factures d''entretien des parties communes** : Nettoyage, électricité des communs, maintenance d''ascenseur.




#### a) Localiser la TEOM sur l''avis de taxe foncière
-   Sur l''avis de taxe foncière du propriétaire, cherchez la ligne "Taxe d''Enlèvement des Ordures Ménagères". Notez le montant annuel.

-   Si vous avez occupé le logement pendant une partie de l''année civile concernée (ex: 8 mois sur 12), le montant de la TEOM qui vous est imputé doit être calculé au prorata de votre période d''occupation.
-   **Formule** : (Montant annuel TEOM / 12) * Nombre de mois d''occupation.
-   **Vérifiez que le propriétaire ne vous a pas facturé la TEOM pour des mois où vous n''étiez pas locataire**.


-   Le propriétaire ne peut pas vous facturer de frais de gestion ou de frais administratifs supplémentaires pour la TEOM. Il ne peut vous demander que le montant exact qu''il a payé.


-   L''**avis de taxe foncière** du propriétaire (à demander).


-   **Demandez les justificatifs** : C''est un droit fondamental du locataire. Le propriétaire doit pouvoir vous les présenter.
-   **Faites-vous aider** : En cas de doute, contactez l''ANIL ou une association de locataires.


-   **Ne pas vérifier le prorata de la TEOM** si vous n''avez pas habité le logement toute l''année.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La régularisation des charges](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-charges-locatives/#c10443) - La référence pour tout savoir sur la régularisation.
-   🔗 [Impots.gouv.fr : Taxe d''enlèvement des ordures ménagères (TEOM)](https://www.impots.gouv.fr/portail/particulier/taxes-locales/taxe-denlevement-des-ordures-menageres-teom) - Calcul de la TEOM.
-   🔗 [Adresses des ADIL (Agences Départementales d''Information sur le Logement)](https://www.anil.org/adresses-utiles/) - Pour un conseil gratuit et personnalisé.


Lors de la régularisation annuelle de vos charges, il est essentiel de vérifier attentivement le montant de la TEOM qui vous est imputé. Demandez une copie de l''avis de taxe foncière au propriétaire, vérifiez le calcul au prorata de votre période d''occupation et assurez-vous qu''aucun frais supplémentaire n''est appliqué. C''est votre droit de demander des justificatifs. Une vigilance rigoureuse à cette étape vous permettra de protéger votre budget et de garantir la justesse de vos charges locatives en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 28 ---

-- COURS 29 : Types de logements étudiants
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Types de logements étudiants en France : Comparatif et conseils',
  'types-logements-etudiants-france-comparatif-conseils',
  'Ce cours est un guide indispensable pour tous les étudiants internationaux en recherche de logement en France. Le marché du logement étudiant est diversifié et offre de multiples options, chacune avec ses avantages et ses inconvénients. Nous vous présenterons un comparatif détaillé des principales solutions : les résidences du CROUS (critères d''éligibilité et calendrier DSE), les résidences privées (services inclus mais coûts souvent plus élevés), la colocation (avantages sociaux et inconvénients financiers), et le logement chez l''habitant ou intergénérationnel. Maîtriser ces options est crucial pour choisir le type de logement le plus adapté à votre budget, votre mode de vie et vos besoins en France.',
  'Logement étudiant : CROUS (DSE), résidences privées, colocation, chez l''habitant. Comparatif pour trouver votre idéal.',
  'logement',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre les spécificités des résidences CROUS et leurs critères d''attribution", "Identifier les avantages et inconvénients des résidences étudiantes privées", "Évaluer les opportunités et les contraintes de la colocation", "Découvrir les options de logement chez l''habitant ou intergénérationnel"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 29
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le CROUS : Critères et calendrier DSE',
  '# Le CROUS : Critères et calendrier DSE

## Pourquoi c''est important ?

Les résidences universitaires gérées par le CROUS (Centre Régional des Œuvres Universitaires et Scolaires) sont la solution de logement la plus économique et souvent la plus prisée par les étudiants en France, y compris les étudiants internationaux. Cependant, l''accès est très compétitif et soumis à des critères stricts et un calendrier précis via le Dossier Social Étudiant (DSE). Ne pas comprendre ces critères, manquer les dates limites de candidature, ou ne pas connaître la procédure du DSE, c''est risquer de passer à côté d''une opportunité de logement abordable et de qualité. Maîtriser ce processus est absolument crucial pour maximiser vos chances d''obtenir une chambre CROUS et d''optimiser votre budget.


-   Définir ce qu''est le CROUS et son rôle dans la vie étudiante.
-   Identifier les critères d''éligibilité pour les étudiants internationaux.


Le CROUS est un établissement public au service de la vie étudiante. Il gère, entre autres, les résidences universitaires, les restaurants universitaires et l''attribution des bourses. C''est un acteur clé pour l''accueil et le soutien des étudiants.



### 1. Qu''est-ce que le CROUS et son offre de logement ?




### 2. Critères d''éligibilité pour les étudiants internationaux


#### a) Être inscrit dans l''enseignement supérieur
-   Vous devez être inscrit(e) dans un établissement d''enseignement supérieur français pour l''année universitaire concernée.

-   **Système de points** : L''attribution des logements CROUS est basée sur un système de points liés aux ressources financières de votre foyer fiscal (souvent celles de vos parents) et à d''autres critères (éloignement géographique, situation familiale).
-   **Pas forcément "boursier" pour avoir un logement** : Vous n''avez pas besoin d''être boursier sur critères sociaux pour être éligible à un logement CROUS, mais les boursiers sont prioritaires.
-   **Étudiants étrangers** : Vous pouvez déposer un DSE. Vos ressources (celles de vos parents ou les vôtres) seront évaluées. Il faut un avis fiscal français des parents pour les "vrais" boursiers, mais d''autres documents sont acceptés pour évaluer les ressources des parents étrangers (revenus étrangers, relevés bancaires).

-   Généralement, la priorité est donnée aux étudiants de moins de 28 ans au 1er septembre de l''année universitaire, mais ce n''est pas un critère éliminatoire absolu.

🔗 [CROUS : Les conditions d''accès au logement](https://www.crous.fr/le-logement/conditions-dacces-au-logement-crous/) - Critères d''éligibilité.



#### a) Qu''est-ce que le DSE ?
-   C''est la procédure unique et centralisée pour demander une bourse sur critères sociaux et/ou un logement en résidence universitaire CROUS.

-   **Période de dépôt** : Le DSE doit être déposé entre le **1er mars et le 31 mai** pour la rentrée universitaire suivante. C''est un délai strict, ne le manquez pas !

-   **Pièce d''identité** : Passeport, titre de séjour.
-   **Certificat de scolarité** ou attestation d''inscription.
-   **Avis d''imposition des parents** (si résidents en France) ou justificatifs de revenus étrangers (traduits).
-   **RIB** d''un compte bancaire français.




-   **Ne mettez que des vœux réalistes** : N''espérez pas une chambre à Paris intramuros si votre situation financière est juste.


-   Votre **attestation d''inscription** (ou lettre d''admission).


-   **Ne paniquez pas si vous n''avez pas de réponse tout de suite** : L''attribution prend du temps.
-   **Ayez un plan B** (résidences privées, colocation, etc.) car l''obtention d''un logement CROUS est très difficile.


-   **Penser que le CROUS est la seule option** : Il existe d''autres types de logements.




Les résidences CROUS sont une solution de logement abordable et recherchée en France. L''accès est compétitif et passe par le Dossier Social Étudiant (DSE), à déposer impérativement entre le 1er mars et le 31 mai. Préparez votre attestation d''inscription, vos justificatifs de ressources (traduits si nécessaire) et remplissez le DSE avec la plus grande rigueur. Bien que l''obtention soit difficile, maximiser vos chances avec un dossier impeccable est crucial pour bénéficier de cette opportunité de logement. Ayez toujours un plan B en tête.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Résidences privées (Services inclus mais chers)',
  '# Résidences privées (Services inclus mais chers)

## Pourquoi c''est important ?

En dehors des résidences CROUS, les résidences étudiantes privées constituent une option de logement très répandue en France. Elles offrent généralement des services inclus et un confort moderne, mais à un coût souvent significativement plus élevé. Pour les étudiants internationaux, ces résidences peuvent être une solution pratique pour une première installation. Cependant, il est absolument crucial de comprendre le rapport entre les services proposés et le prix, d''analyser attentivement le contrat de location et les charges, et d''évaluer si cette solution correspond à votre budget et à vos besoins. Une mauvaise appréciation peut entraîner des dépenses excessives et des déceptions.


-   Définir ce qu''est une résidence étudiante privée et ses caractéristiques.
-   Comprendre l''impact du coût élevé sur votre budget.


Les résidences étudiantes privées sont gérées par des sociétés privées (comme Studéa, Nemea, Les Belles Années, Kley, etc.). Elles sont conçues spécifiquement pour les étudiants et offrent des solutions "clé en main".





-   Majoritairement des studios ou de petits T1, souvent meublés et équipés (kitchenette, salle d''eau/WC).

-   **Services optionnels** : Laverie automatique (payante), salle de sport, cafétéria, salle d''étude, salle TV, parking, petit-déjeuner.
-   **Avantage** : Ces services facilitent grandement l''installation et la vie quotidienne des étudiants internationaux.


### 2. L''impact du coût élevé sur votre budget



-   Les charges sont souvent incluses dans le loyer sous forme de "forfait" (ce qui simplifie la gestion).






-   **Simplicité de l''installation** : Logement meublé, services inclus, gestion simplifiée. Idéal si vous arrivez seul(e) en France.
-   **Environnement étudiant** : Facilite les rencontres avec d''autres étudiants.

-   **Parfois moins d''intégration locale** : Vous restez dans une "bulle" étudiante.



    -   **Durée du bail** : Est-ce un bail d''un an, ou un bail étudiant de 9 mois ?
    -   **Frais de dossier** : Leur montant et leur légitimité (voir cours sur les frais d''agence).
-   **Vérifiez l''éligibilité aux APL** : Demandez si la résidence est conventionnée.




-   **N''hésitez pas à contacter les résidences** : Posez toutes vos questions sur les services et les frais.


-   **Ne pas vérifier si la résidence est conventionnée APL** : Cela réduit le montant de l''aide.
-   **Ne pas faire d''état des lieux d''entrée précis** : C''est crucial pour le dépôt de garantie.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement)](https://www.anil.org/) - Conseils gratuits sur les contrats de location.


Les résidences étudiantes privées offrent confort et services (internet, sécurité, salle de sport), mais à un coût souvent plus élevé que le CROUS ou le marché privé. Elles peuvent être une solution pratique pour une première installation en France. Comparez attentivement les prix, les services inclus/optionnels, et lisez scrupuleusement le contrat de location (durée, charges, frais de dossier). Assurez-vous de leur éligibilité aux APL et faites un état des lieux rigoureux. Choisir une résidence privée, c''est un compromis entre confort, praticité et budget.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La Colocation : Avantages et inconvénients',
  '# La Colocation : Avantages et inconvénients

## Pourquoi c''est important ?

La colocation est une option de logement très populaire parmi les étudiants en France, et ce, pour de bonnes raisons : elle permet de réduire les coûts et de vivre en communauté. Cependant, elle présente aussi des inconvénients significatifs, notamment en termes de responsabilités financières (clause de solidarité) et de vie quotidienne. Pour un étudiant international, la colocation peut être un excellent moyen de s''intégrer, mais il est absolument crucial de comprendre ses avantages et ses inconvénients avant de s''engager. Une colocation mal choisie ou mal gérée peut entraîner des difficultés financières, des conflits et une expérience négative. Maîtriser cette option est essentiel pour faire un choix éclairé et réussir votre expérience de colocation en France.




La colocation, c''est avant tout une aventure humaine et économique. Elle peut être une formidable expérience d''intégration, mais elle demande aussi un certain sens du compromis et de la communication.





-   **Accès à des logements plus grands** : La colocation permet d''accéder à des appartements plus grands et mieux situés que ce que vous pourriez louer seul(e) avec le même budget.

-   **Compagnie et réseau** : Vous n''êtes pas seul(e) à l''arrivée, ce qui peut être rassurant. Vous rencontrez des gens, vous élargissez votre cercle social, et vous pratiquez le français.
-   **Partage d''expériences** : La colocation offre un soutien mutuel et le partage d''expériences, surtout si vous vivez avec d''autres étudiants internationaux ou des Français.


🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La colocation](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-colocation/) - Détails sur les avantages.



-   **Clause de solidarité** : (Voir cours précédent) C''est le risque majeur. Si le bail contient une clause de solidarité, vous êtes responsable du paiement de la totalité du loyer et des charges, même si vos colocataires ne paient pas leur part. Cela inclut votre garant.
-   **Dépôt de garantie** : Le dépôt est souvent important et peut être retenu en cas de dégradations causées par n''importe quel colocataire.
-   **Impayés d''un colocataire** : Si un colocataire part sans payer ou ne paie pas sa part, vous devrez avancer l''argent au propriétaire.

-   **Manque d''intimité** : Vous partagez des espaces communs (cuisine, salon, salle de bain).

-   Le départ d''un colocataire peut créer des tensions financières (si la part du loyer augmente pour les restants) et nécessite de trouver un remplaçant.



-   **Valeurs partagées** : Assurez-vous d''avoir des valeurs et un mode de vie compatibles.

#### b) Le "pacte de colocation" (recommandé)
-   Bien que non obligatoire, rédiger un "pacte de colocation" entre vous est fortement conseillé. Ce document (non juridique vis-à-vis du propriétaire, mais moral entre colocataires) peut définir :
    -   Ce qui se passe en cas de départ d''un colocataire.

-   Une communication ouverte et régulière est essentielle pour résoudre les petits problèmes avant qu''ils ne s''aggravent.




-   **Privilégiez la colocation à "baux multiples"** : Si chaque colocataire a son propre bail, il n''y a pas de clause de solidarité entre colocataires (mais rare).


-   **Ne pas tenir compte de l''impact culturel** en colocation internationale.
-   **Déménager sans donner son préavis** ou sans trouver de remplaçant (si le bail l''exige) en colocation solidaire.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La colocation](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-colocation/) - La référence principale.
-   🔗 [UFC-Que Choisir : La colocation : comment s''en sortir en cas de problème](https://www.quechoisir.org/fiche-pratique-colocation-comment-s-en-sortir-en-cas-de-probleme-n100508/) - Conseils aux consommateurs.


La colocation offre des avantages financiers (coût réduit, logement plus grand) et sociaux (intégration, compagnie), mais elle présente des inconvénients importants, notamment la clause de solidarité qui vous rend responsable de la totalité du loyer. Choisissez vos colocataires avec soin, établissez un "pacte de colocation" pour définir les règles de vie, et communiquez ouvertement. Comprendre la clause de solidarité et ses implications est crucial pour protéger vos finances et assurer une expérience de colocation réussie et sereine en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Logement chez l''habitant / Intergénérationnel',
  '# Logement chez l''habitant / Intergénérationnel

## Pourquoi c''est important ?

Pour les étudiants internationaux, le logement chez l''habitant ou le logement intergénérationnel représente des alternatives originales et très avantageuses aux solutions de logement classiques (résidence, studio). Ces options offrent non seulement un coût souvent réduit, mais aussi une immersion culturelle précieuse et un soutien local inégalable. Cependant, elles impliquent aussi des règles de vie et des attentes spécifiques. Comprendre le fonctionnement de ces dispositifs, leurs avantages (économiques, sociaux, culturels) et leurs contraintes est absolument crucial pour faire un choix adapté à votre personnalité, à votre budget et à votre désir d''intégration en France. C''est une voie pour vivre une expérience authentique et enrichissante.


-   Définir ce qu''est le logement chez l''habitant et le logement intergénérationnel.
-   Maîtriser les conseils pour trouver et réussir une cohabitation chez l''habitant/intergénérationnelle.



🔗 [Service-Public.fr : Location d''une chambre chez l''habitant](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations sur la chambre chez l''habitant.


### 1. Le logement chez l''habitant : Immersion culturelle et coût maîtrisé



-   **Coût souvent réduit** : Les loyers sont généralement plus abordables que ceux d''un studio indépendant, surtout si vous bénéficiez d''un échange de services (garde d''enfants, aide aux devoirs, petits services).
-   **Soutien local** : La famille d''accueil peut vous aider pour les démarches administratives, la découverte de la ville, les conseils pratiques.
-   **Ambiance familiale** : Pour ceux qui recherchent un cadre de vie plus chaleureux que la solitude d''un studio.

-   **Moins d''indépendance** : Comparé à un logement individuel.
-   **Relationnel** : La qualité de l''expérience dépend beaucoup de la bonne entente.



-   Un étudiant est logé chez une personne âgée (souvent seule) en échange d''une présence, de petits services (courses, lecture, conversation) et/ou d''un loyer très modéré, voire gratuit.
-   L''objectif est de rompre l''isolement des seniors et d''offrir un logement abordable aux étudiants.

-   **Sécurité et compagnie** : Pour la personne âgée, la présence de l''étudiant est une sécurité. Pour l''étudiant, c''est un soutien.
-   **Accès au logement** : Facilite l''accès au logement dans les zones tendues.

-   **Respect des personnes âgées** : Cela demande de la patience, de l''écoute et de l''empathie.
-   **Règles de vie** : Il faut s''adapter à un mode de vie différent et à des horaires parfois stricts.




-   **Pour le logement chez l''habitant** : Certaines associations ou plateformes sont spécialisées dans la mise en relation avec des familles d''accueil (ex: France Homestay, Studapart).





#### a) Le contrat de location / convention d''hébergement
-   Même si c''est chez l''habitant, un contrat est recommandé. Il peut s''agir d''un "contrat de location de chambre meublée chez l''habitant" ou d''une "convention de cohabitation intergénérationnelle".

-   **Pour le logement chez l''habitant** : Horaires de repas, accès à la cuisine, visites d''amis, bruit.
-   **Pour le logement intergénérationnel** : Services exacts attendus (nombre d''heures, type d''aide), périodes de présence, règles spécifiques.



-   Votre **lettre d''admission** ou **certificat de scolarité**.


-   **Soyez honnête sur votre personnalité et vos attentes** : Ne faites pas semblant d''être quelqu''un que vous n''êtes pas.
-   **Ne vous engagez pas trop vite** : Prenez le temps de rencontrer la personne et d''évaluer la situation.
-   **Respectez l''autre personne** : C''est la clé de la réussite de ces cohabitations.


-   **Ne pas avoir de contrat écrit** : En cas de problème, vous n''aurez aucune preuve.
-   **Ne pas s''adapter aux règles de vie de l''hôte**.


-   🔗 [Service-Public.fr : Location d''une chambre chez l''habitant](https://www.service-public.fr/particuliers/vosdroits/F3025) - Guide officiel.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Location solidaire](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-colocation/) - Peut aborder ces formes de logement.
-   🔗 [Studapart / France Homestay](https://www.studapart.com/fr) - Plateformes pour trouver des logements chez l''habitant.


Le logement chez l''habitant ou intergénérationnel offre des avantages économiques (coût réduit) et une immersion culturelle précieuse pour les étudiants internationaux. Cependant, ces options impliquent un fort engagement relationnel et le respect des règles de vie de votre hôte. Discutez clairement des attentes mutuelles, signez un contrat (même simple), et choisissez une solution adaptée à votre personnalité. Ces cohabitations peuvent offrir une expérience authentique et enrichissante de la vie en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 29 ---

-- COURS 30 : Vie en copropriété
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Vie en copropriété : Règles et respect du voisinage en France',
  'vie-copropriete-regles-respect-voisinage-france',
  'Ce cours est essentiel pour tous les étudiants internationaux qui louent un logement dans un immeuble en France. Vivre en copropriété implique le respect de règles spécifiques pour assurer une bonne cohabitation entre voisins. Nous vous expliquerons ce qu''est le règlement de copropriété et comment il encadre la vie de l''immeuble. Nous aborderons la gestion des poubelles et des parties communes, ainsi que les règles concernant le tapage nocturne et le respect du voisinage, des points souvent sources de conflits. Maîtriser ces règles est absolument crucial pour une intégration harmonieuse, éviter les problèmes avec vos voisins ou le syndic, et profiter sereinement de votre logement en France.',
  'Vivre en copropriété : règlement, poubelles, parties communes, tapage nocturne. Respectez vos voisins pour une cohabitation sereine !',
  'logement',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le rôle du règlement de copropriété", "Savoir comment gérer les poubelles et utiliser les parties communes", "Identifier les règles concernant le tapage nocturne et le bruit", "Maîtriser les conseils pour une cohabitation respectueuse et harmonieuse avec le voisinage"]'::jsonb,
  '["Avoir un logement en appartement en France"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 30
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le règlement de copropriété',
  '# Le règlement de copropriété

## Pourquoi c''est important ?

Si vous louez un appartement en France, vous habitez très probablement dans un immeuble qui est en copropriété. Cela signifie que l''immeuble est divisé en parties privatives (votre appartement) et en parties communes (escaliers, hall d''entrée, couloirs, ascenseur, local poubelles, jardin...). La vie de l''immeuble est régie par un document fondamental : le **règlement de copropriété**. Ne pas le connaître, c''est risquer d''enfreindre des règles sans le savoir, d''avoir des problèmes avec le syndic de copropriété ou vos voisins, et de recevoir des plaintes. En tant qu''étudiant international, la compréhension de ce document est absolument cruciale pour une intégration harmonieuse et respectueuse des règles de vie collective.


-   Définir ce qu''est un règlement de copropriété et son rôle.
-   Identifier les principaux types de règles qu''il contient (parties communes, bruit, animaux).


Le règlement de copropriété est la "constitution" de l''immeuble. Il organise la vie collective des résidents et définit les droits et obligations de chacun. Il est annexé au bail de location.



### 1. Qu''est-ce que le règlement de copropriété ?


-   C''est un acte juridique qui organise la copropriété. Il est obligatoirement publié au fichier immobilier.
-   Il est établi par un notaire lors de la création de l''immeuble en copropriété.

-   **Règles d''utilisation des parties communes** : Comment utiliser l''ascenseur, les parkings, les jardins, le local à vélos/poubelles.
-   **Droits et obligations des copropriétaires et locataires** : Concernant les travaux, le bruit, l''entretien.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La copropriété](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-copropriete/) - Informations sur la copropriété.



-   **Animaux domestiques** : Peut contenir des règles sur la détention d''animaux (interdiction des animaux bruyants, obligation de les tenir en laisse dans les parties communes).

-   **Encombrement** : Interdiction de laisser des objets (poubelles, vélos, chaussures, plantes) dans les couloirs, paliers, escaliers, pour des raisons de sécurité (incendie) et d''esthétique.
-   **Travaux** : Conditions pour effectuer des travaux dans les parties privatives si cela affecte les parties communes ou l''aspect extérieur de l''immeuble.

#### c) Aspect extérieur de l''immeuble
-   Règles sur l''installation d''enseignes, de stores, de paraboles, sur la couleur des fenêtres, l''étendage du linge.



-   Le propriétaire a l''obligation de vous remettre le règlement de copropriété (ou un extrait) en annexe de votre bail de location.
-   **Vérifiez qu''il est bien présent** dans votre dossier de location.

#### b) Demander au propriétaire ou à l''agence
-   Si vous ne l''avez pas, demandez-le à votre propriétaire ou à l''agence immobilière.

#### c) Sur l''affichage de l''immeuble (parfois)
-   Des extraits du règlement (notamment sur les règles de bruit ou les poubelles) sont parfois affichés dans le hall d''entrée de l''immeuble.




-   **Lisez attentivement le règlement de copropriété dès votre arrivée.** C''est votre guide pour la vie en immeuble.
-   **N''hésitez pas à poser des questions** à votre propriétaire, à l''agence ou aux voisins (avec tact) si une règle n''est pas claire.
-   **La politesse et le respect sont la clé** d''une bonne cohabitation.


-   **Ignorer l''existence du règlement** : Vous risquez d''enfreindre des règles sans le savoir.
-   **Laisser des objets dans les parties communes** : Cela peut entraîner des avertissements, voire des amendes, et est un risque d''incendie.
-   **Modifier l''extérieur de l''appartement** sans vérifier si le règlement l''autorise (ex: installer une parabole).
-   **Confondre les règles de votre logement avec celles de votre pays d''origine.**


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le règlement de copropriété](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-copropriete/#c10443) - Explications détaillées.


Le règlement de copropriété est un document juridique essentiel qui encadre la vie collective dans votre immeuble. Il contient des règles sur l''utilisation des parties communes, le bruit, les animaux, les travaux, et l''aspect extérieur du bâtiment. Votre propriétaire a l''obligation de vous le remettre en annexe de votre bail. Lisez-le attentivement et respectez ses dispositions pour une cohabitation harmonieuse avec vos voisins et pour éviter les problèmes avec le syndic. Une bonne compréhension de ce règlement est cruciale pour votre intégration et votre sérénité en logement collectif en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Gestion des poubelles et parties communes',
  '# Gestion des poubelles et parties communes

## Pourquoi c''est important ?

La propreté et le bon usage des espaces partagés (local poubelles, escaliers, couloirs, hall d''entrée, ascenseur) sont des éléments fondamentaux de la vie en collectivité dans un immeuble en France. Une mauvaise gestion des poubelles, un encombrement des parties communes, ou une dégradation de ces espaces peuvent entraîner des nuisances (odeurs, insalubrité), des risques (incendie, entrave) et des conflits avec vos voisins ou le syndic de copropriété. En tant qu''étudiant international, comprendre les règles de tri des déchets et le respect des parties communes est absolument crucial pour une intégration harmonieuse et pour éviter des rappels à l''ordre, voire des sanctions financières. C''est un geste simple de respect du vivre-ensemble.


-   Identifier les règles d''utilisation et de non-encombrement des parties communes.
-   Maîtriser les conseils pour contribuer à la propreté et à la sécurité de l''immeuble.







-   **Point d''apport volontaire (PAV)** : Pour le papier/carton, les textiles, les piles, l''huile de cuisine, les médicaments, les ampoules, etc. Ces points se trouvent dans la ville.

#### b) Le local poubelles de l''immeuble
-   **Respectez les règles** : Le règlement de copropriété ou un affichage dans le local indique les règles d''utilisation (jours et heures de sortie des poubelles, propreté, tri).
-   **Ne jetez pas d''objets encombrants** : Pour les meubles ou gros objets, il faut appeler les services des encombrants de votre ville (sur rendez-vous) ou les emmener à la déchetterie.




-   Hall d''entrée, couloirs, escaliers, ascenseur, local à vélos, local poubelles, jardin collectif, local technique, parking.

#### b) Interdiction d''encombrer
-   **Règles de sécurité** : Il est strictement interdit de laisser des objets (vélos, poussettes, chaussures, poubelles, meubles, plantes) dans les parties communes. En cas d''incendie, cela obstrue les issues de secours.

-   **Respectez le travail du personnel d''entretien** : Ils sont là pour maintenir la propreté collective.

#### d) Utilisation de l''ascenseur
-   Ne surchargez pas l''ascenseur.




-   Accidents et difficultés pour les services d''urgence à cause de l''encombrement.





-   **Lisez les affichages dans l''immeuble** : Ils rappellent souvent les règles essentielles (tri, bruit).
-   **Si vous avez un doute sur le tri** : Jetez dans la poubelle des déchets ménagers non recyclables plutôt que de mal trier et "polluer" la filière de recyclage.


-   **Ne pas faire le tri sélectif** : C''est un geste citoyen attendu.
-   **Laisser ses poubelles devant sa porte ou dans les parties communes** : C''est strictement interdit.
-   **Jeter des objets encombrants dans les conteneurs classiques** : C''est une faute.
-   **Encombrer les couloirs ou les escaliers** : Risque d''incendie et d''amendes.
-   **Ignorer les rappels à l''ordre** du syndic ou du propriétaire.
-   **Gérer le tri des déchets comme dans votre pays d''origine** : Les règles sont souvent différentes.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : La copropriété](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-copropriete/) - Informations sur les parties communes.


La bonne gestion des poubelles (tri sélectif) et le respect des parties communes sont essentiels pour une vie harmonieuse en copropriété en France. Triez vos déchets selon les consignes de votre commune (jaune, vert, marron) et ne laissez jamais d''objets dans les couloirs ou le hall d''entrée. Lisez le règlement de copropriété (annexé à votre bail) pour connaître les règles spécifiques de votre immeuble. Ces gestes simples de respect du vivre-ensemble vous permettront d''éviter les conflits et de contribuer à la propreté et la sécurité de votre environnement.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Tapage nocturne et respect du voisinage',
  '# Tapage nocturne et respect du voisinage

## Pourquoi c''est important ?

Le respect de la tranquillité du voisinage est une règle fondamentale de la vie en collectivité en France, et un point de vigilance majeur lorsque l''on vit en appartement. Le "tapage nocturne" (bruit excessif la nuit) et les nuisances sonores diurnes sont les premières causes de conflits entre voisins. En tant qu''étudiant international, vous pourriez être inconsciemment source de nuisances si vous n''êtes pas familier(ère) avec les horaires et les attentes locales, ou au contraire, en être victime. Comprendre les règles de tranquillité, les horaires de silence, et les recours possibles est absolument crucial pour une intégration harmonieuse, éviter les problèmes avec vos voisins, le propriétaire ou la police, et profiter sereinement de votre logement.


-   Définir ce qu''est le tapage nocturne et la notion de "nuisance sonore".


La loi encadre le bruit pour garantir la tranquillité de chacun. La notion de "tapage nocturne" est spécifique, mais le bruit excessif de jour est également sanctionnable.





-   **Constatation** : Pour être caractérisé, il ne nécessite pas la répétition ni l''intensité. Une seule fois, un bruit anormalement fort peut être sanctionné. Il peut s''agir de musique forte, de cris, de bruits de pas, de déménagements, de travaux.
-   **Sanctions** : Le tapage nocturne est puni d''une amende forfaitaire (68€) et, si les bruits sont répétés, des sanctions pénales plus lourdes peuvent être appliquées.

-   **Définition** : Les bruits excessifs sont également interdits en journée (entre 7h et 22h). On parle alors de "bruits de comportement" ou "troubles anormaux de voisinage".
-   **Sanctions** : Même si les amendes sont moins systématiques que la nuit, des rappels à l''ordre, des amendes et des poursuites peuvent être engagées.




-   **Volume modéré** : Maintenez le volume de votre musique, télévision ou conversations à un niveau qui ne dérange pas vos voisins, quelle que soit l''heure.
-   **Casques** : L''utilisation d''un casque est une bonne solution pour écouter de la musique ou regarder des films tard le soir.

-   **Prévenez vos voisins** : Si vous prévoyez une petite fête, prévenez vos voisins quelques jours à l''avance. Donnez-leur un numéro de téléphone où vous joindre en cas de nuisance.


#### d) Bruits d''activités quotidiennes
-   **Bruits de pas, chutes d''objets, claquements de portes** : Essayez de faire attention, surtout la nuit. Portez des chaussons, évitez de claquer les portes.




-   **Première étape** : Le plus simple est d''aller voir votre voisin bruyant et de lui expliquer la situation poliment. Il est possible qu''il ne se rende pas compte du bruit.


-   Si le voisin est locataire, informez son propriétaire ou l''agence immobilière.

-   C''est un recours gratuit et amiable pour tenter de trouver une solution.

#### e) Forces de l''ordre
-   **En cas de tapage nocturne avéré (entre 22h et 7h)** : Vous pouvez appeler la police ou la gendarmerie. Ils peuvent venir constater l''infraction et infliger une amende.




-   Les **numéros d''urgence** (police : 17, gendarmerie : 17, 112).


-   **Soyez attentif à votre propre bruit** : Ne faites pas aux autres ce que vous ne voudriez pas qu''on vous fasse.
-   **Communiquez** : Un petit mot dans le hall d''entrée pour prévenir d''une fête est toujours apprécié.
-   **Conservez des preuves** (relevés d''huissier, témoignages) si vous êtes victime de bruits persistants.




-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Troubles du voisinage](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/troubles-du-voisinage/) - Conseils pour les locataires.


Le respect de la tranquillité du voisinage est essentiel en France. Le tapage nocturne (22h-7h) est sanctionné, et les bruits excessifs de jour (répétitifs, intenses, durables) sont également interdits. Modérez le volume de votre musique, prévenez vos voisins en cas de fête, et respectez les horaires pour les travaux bruyants. En cas de nuisance subie, privilégiez le dialogue amiable, puis les courriers, avant de contacter le propriétaire/syndic ou les forces de l''ordre. Une bonne compréhension de ces règles et une attitude respectueuse sont cruciales pour une cohabitation sereine en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 30 ---

-- COURS 31 : Quitter son logement
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Quitter son logement en France : Préavis et état des lieux de sortie',
  'quitter-logement-france-preavis-etat-des-lieux-sortie',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux qui s''apprêtent à quitter leur logement en France. La procédure de départ est encadrée par des règles strictes concernant le préavis et l''état des lieux de sortie, et une mauvaise gestion de ces étapes peut entraîner des frais imprévus ou la perte de votre dépôt de garantie. Nous vous expliquerons comment déterminer la durée de votre préavis (1 mois en zone tendue/meublé, 3 mois sinon), comment rédiger et envoyer votre lettre de congé (modèle fourni), et l''importance cruciale de l''état des lieux de sortie pour récupérer votre caution. Maîtriser ces étapes est absolument crucial pour un départ serein, en conformité avec la loi, et pour protéger vos finances.',
  'Quitter votre logement : préavis (1 ou 3 mois), lettre de congé (modèle), état des lieux de sortie. Assurez un départ serein et récupérez votre caution !',
  'logement',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la durée légale du préavis de départ (1 ou 3 mois)", "Savoir rédiger et envoyer une lettre de congé conforme", "Identifier l''importance de l''état des lieux de sortie pour le dépôt de garantie", "Maîtriser les conseils pour un départ serein et conforme à la loi"]'::jsonb,
  '["Avoir un contrat de location en France"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 31
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Préavis : 1 mois (Zone tendue/Meublé) ou 3 mois ?',
  '# Préavis : 1 mois (Zone tendue/Meublé) ou 3 mois ?

## Pourquoi c''est important ?

Lorsque vous décidez de quitter votre logement en France, l''étape du "préavis" est la première et l''une des plus importantes. Le préavis est le délai légal que vous devez respecter entre l''envoi de votre lettre de congé et votre départ effectif du logement. Sa durée varie selon le type de logement (meublé ou non-meublé) et la zone géographique (zone tendue ou non). Ne pas respecter le délai de préavis, ou se tromper sur sa durée, peut vous obliger à payer un ou deux mois de loyer en plus, même si vous n''occupez plus le logement. Pour les étudiants internationaux, souvent amenés à déménager ou à rentrer dans leur pays, comprendre précisément la durée de votre préavis est absolument crucial pour protéger votre budget et éviter des frais imprévus.


-   Définir ce qu''est le préavis de départ du locataire.








-   Le locataire reste tenu de payer le loyer et les charges pendant toute la durée du préavis, même s''il quitte le logement avant.
-   Il doit laisser le propriétaire ou l''agence faire visiter le logement à de futurs locataires (généralement 2h par jour, jours ouvrables).



-   C''est un avantage majeur en termes de flexibilité.

#### b) Logement non-meublé situé en "zone tendue"
-   **Zones tendues** : Ce sont des zones où la demande de logement est forte et l''offre faible (grandes agglomérations comme Paris, Lyon, Marseille, etc.). La liste des communes en zone tendue est fixée par décret.

-   Obtention d''un premier emploi.
-   Perte d''emploi ou nouvel emploi suite à une perte d''emploi.
-   Bénéficiaire du RSA ou de l''AAH.
-   Obtention d''un logement social.



L''engagement le plus long.

-   Si votre logement est loué non-meublé et qu''il n''est pas situé en zone tendue (majoritairement les petites villes et les zones rurales), le délai de préavis est de **trois mois**.
-   **Attention** : C''est un engagement long. Si vous partez avant la fin de ces 3 mois, vous devrez quand même payer le loyer, sauf si un nouveau locataire est trouvé et que le propriétaire accepte une résiliation anticipée.

### 4. Calcul de la date de fin de préavis et de l''obligation de paiement


-   **Date de réception de la lettre** : Le point de départ du préavis est la date de réception effective de votre lettre de congé par le propriétaire ou l''agence. C''est pourquoi l''envoi par lettre recommandée avec accusé de réception est indispensable.
-   **Calcul** : Si votre préavis est d''un mois et que la lettre est reçue le 15 octobre, le préavis se termine le 14 novembre à minuit. Vous devez le loyer jusqu''au 14 novembre inclus.


-   Votre **bail de location** (pour savoir s''il est meublé ou non, et l''adresse exacte).


-   **Envoyez toujours votre lettre de congé par lettre recommandée avec accusé de réception**. Conservez précieusement l''accusé.
-   **Anticipez votre départ** : Si vous avez un préavis de 3 mois, commencez vos démarches bien à l''avance.
-   **Proposez de trouver un nouveau locataire** : Si vous partez avant la fin du préavis, le propriétaire n''est pas obligé de vous laisser partir. Cependant, si vous lui trouvez un nouveau locataire solvable qu''il accepte, il peut mettre fin au préavis.


-   **Envoyer la lettre de congé par simple courrier ou e-mail** : Ce n''est pas une preuve légale de réception.
-   **Ne pas joindre le justificatif de réduction de préavis** si vous demandez un préavis d''un mois pour un non-meublé.
-   **Partir du logement sans avoir rendu les clés et fait l''état des lieux de sortie**.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le congé donné par le locataire](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-conge-donne-par-le-locataire/) - Informations détaillées.
-   🔗 [Légifrance : Décret n° 2013-392 du 10 mai 2013 relatif au champ d''application de la taxe sur les logements vacants et à la réduction du délai de préavis de résiliation du bail dans les zones tendues](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027376046/) - Pour la liste des zones tendues.
-   🔗 [La Poste : Envoi d''une lettre recommandée avec accusé de réception](https://www.laposte.fr/particulier/produits/envoyer-une-lettre-recommandee) - Pour la preuve d''envoi.


Le préavis de départ est une étape cruciale pour quitter votre logement en France. Sa durée est d''un mois pour les locations meublées et les non-meublées en zone tendue, et de trois mois pour les non-meublées hors zone tendue. Il commence à la date de réception de votre lettre de congé (envoyée par recommandé avec accusé de réception). Respecter ce délai est essentiel pour éviter de payer des mois de loyer en trop. Vérifiez votre situation, calculez précisément votre date de fin de préavis, et anticipez votre démarche pour un départ serein et conforme à la loi.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Rédiger sa lettre de congé (Modèle fourni)',
  '# Rédiger sa lettre de congé (Modèle fourni)

## Pourquoi c''est important ?

La lettre de congé est le document officiel par lequel vous informez votre propriétaire (ou l''agence) de votre intention de quitter le logement. Sa rédaction doit être précise et conforme à la loi française pour être valide. Une lettre mal rédigée, incomplète ou envoyée par un moyen non reconnu juridiquement, peut invalider votre préavis et vous obliger à payer le loyer plus longtemps que nécessaire. Pour les étudiants internationaux, cette formalité peut sembler complexe, mais maîtriser sa rédaction est absolument crucial pour respecter vos obligations, déclencher correctement la période de préavis, et protéger vos finances.


-   Maîtriser les conseils pour l''envoi et la preuve de réception de la lettre.








#### b) Coordonnées du propriétaire / de l''agence
-   Nom et prénom(s) du propriétaire (ou dénomination sociale de l''agence).
-   Adresse complète du propriétaire / de l''agence.

-   "Lettre de congé de location" ou "Résiliation de bail".


-   **Déclaration formelle** : "Je soussigné(e) [Votre Nom et Prénom], locataire du logement situé au [Adresse Complète du Logement], vous donne congé de ce logement."
    -   Si préavis réduit à un mois pour un non-meublé : Mentionnez le motif de la réduction (ex: "Le logement étant situé en zone tendue") et joignez le justificatif si nécessaire.

#### f) Demande d''état des lieux de sortie
-   "Je vous saurais gré de bien vouloir prendre contact avec moi afin de convenir d''une date pour l''état des lieux de sortie et la remise des clés."


🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Modèle de lettre de congé](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-conge-donne-par-le-locataire/) - Propose des modèles adaptés.



[Nom et Prénom du Propriétaire ou Dénomination de l'Agence]
[Adresse complète du Propriétaire ou de l'Agence]





Conformément aux dispositions légales, le délai de préavis applicable à ma situation est de [mentionner "un mois" ou "trois mois"].

Le logement étant situé en zone tendue, le délai de préavis est réduit à un mois. (OU : Le motif de cette réduction de préavis est [motif, ex: obtention d'un premier emploi], dont vous trouverez le justificatif ci-joint.)


Je vous saurais gré de bien vouloir prendre contact avec moi afin de convenir d''une date pour l''établissement de l''état des lieux de sortie et la restitution des clés.

Dans l''attente de vos nouvelles, je vous prie d''agréer, Madame, Monsieur, l''expression de mes salutations distinguées.









-   **Rédigez la lettre sur un ordinateur** : C''est plus lisible et professionnel.
-   **Faites une copie de la lettre signée** avant de l''envoyer.
-   **N''oubliez pas la date de fin de préavis** : C''est la date à laquelle vous n''êtes plus locataire.


-   **Oublier d''inclure une information essentielle** : Cela peut invalider la lettre.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le congé donné par le locataire](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-conge-donne-par-le-locataire/) - Explications et modèles de lettres.
-   🔗 [La Poste : Envoi d''une lettre recommandée avec accusé de réception](https://www.laposte.fr/particulier/produits/envoyer-une-lettre-recommandee) - Pour la preuve d''envoi.
-   🔗 [Adresses des ADIL (Agences Départementales d''Information sur le Logement)](https://www.anil.org/adresses-utiles/) - Pour un conseil personnalisé avant d''envoyer.


Rédiger votre lettre de congé de location est une étape cruciale pour quitter votre logement en France. Elle doit inclure toutes vos coordonnées, celles du propriétaire, les références du bail, votre déclaration de congé avec la durée du préavis applicable (1 ou 3 mois) et la date de fin de préavis, ainsi qu''une demande d''état des lieux. Utilisez un modèle conforme, adaptez-le à votre situation (avec justificatif pour préavis réduit), signez-le et envoyez-le impérativement par lettre recommandée avec accusé de réception. Une lettre bien préparée est la garantie d''un départ serein et d''une gestion financière correcte.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'L''envoi en Recommandé avec Accusé de Réception',
  '# L''envoi en Recommandé avec Accusé de Réception

## Pourquoi c''est important ?

Lorsque vous envoyez votre lettre de congé pour quitter votre logement en France, la méthode d''envoi est d''une importance capitale. La seule preuve légale et incontestable de la date de réception de votre lettre par le propriétaire (ou l''agence) est l''envoi en **lettre recommandée avec accusé de réception (LRAR)**. Ne pas utiliser ce mode d''envoi, c''est prendre le risque que votre propriétaire conteste la date de réception de votre préavis, ou même affirme n''avoir jamais reçu votre lettre. Cela pourrait vous obliger à payer des mois de loyer supplémentaires, même si vous avez déjà déménagé. Pour les étudiants internationaux, cette formalité est cruciale pour sécuriser votre départ et protéger votre budget.


-   Identifier les éléments à conserver comme preuve d''envoi et de réception.


La lettre recommandée avec accusé de réception (LRAR) est la méthode d''envoi la plus sécurisée et la plus utilisée pour toutes les correspondances importantes avec l''administration ou les professionnels en France.





#### a) Preuve d''envoi

-   L''accusé de réception est un petit carton que le destinataire signe à la réception du courrier et qui vous est ensuite renvoyé. Il atteste de la date à laquelle le courrier a été effectivement reçu par le propriétaire.
-   **Date clé** : C''est la date figurant sur l''accusé de réception qui marque le point de départ de votre délai de préavis.

-   Bien que La Poste ne certifie pas le contenu de la lettre, le fait que l''envoi soit tracé permet de prouver qu''un document a été envoyé et reçu.





-   Demandez un "bordereau de lettre recommandée avec accusé de réception".
    -   Les coordonnées exactes du propriétaire / de l''agence (destinataire).
-   L''agent de La Poste va peser votre lettre, coller les timbres, et vous remettre le récépissé de dépôt.
-   **Demandez l''option "avis de réception" (c''est l''accusé de réception).**

-   **Avantage** : Vous n''avez pas à vous déplacer, et l''envoi est instantané.




-   La petite preuve de dépôt que l''agent de La Poste vous remet. Elle contient un numéro de suivi.

#### b) L''avis de réception
-   Le petit carton orange/rose que La Poste vous renverra après que le propriétaire aura signé. C''est la preuve de la date de réception.

-   Archivez-la avec le récépissé de dépôt et l''accusé de réception.

-   Vous pouvez suivre l''acheminement de votre LRAR sur le site de La Poste avec le numéro de suivi figurant sur votre récépissé de dépôt.




-   **N''attendez pas le dernier jour** pour envoyer la lettre. Laissez-vous une marge pour les délais postaux.
-   **Vérifiez l''adresse du propriétaire/agence** sur votre bail. Une erreur d''adresse peut retarder la réception.
-   **Gardez tout** : Le récépissé de dépôt, l''avis de réception, et la copie de votre lettre sont des documents précieux.
-   **Si le propriétaire ne va pas chercher le recommandé** : La loi considère que vous avez rempli votre obligation d''envoi. Le délai commence à courir à partir de la date de la première présentation de la lettre. Mais l''absence d''accusé de réception peut rendre les choses plus complexes en cas de litige. Conservez la preuve de non-réclamation de la LRAR.


-   **Ne pas demander l''accusé de réception** : C''est la preuve de la date de réception.
-   **Perdre le récépissé de dépôt ou l''accusé de réception** : C''est votre seule preuve.
-   **Se tromper sur l''adresse du destinataire**.


-   🔗 [La Poste : Lettre recommandée en ligne](https://www.laposte.fr/lettre-recommandee-en-ligne) - Pour l''envoi électronique si vous préférez.
-   🔗 [Service-Public.fr : Modèle de lettre de résiliation de bail](https://www.service-public.fr/particuliers/vosdroits/F1168) - Rappel de la méthode d''envoi.
-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le congé donné par le locataire](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-conge-donne-par-le-locataire/) - Insiste sur l''importance de la LRAR.
-   🔗 [Légifrance : Article 15 de la loi n° 89-462 du 6 juillet 1989](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000806456/) - Le texte de loi qui encadre l''envoi.


L''envoi de votre lettre de congé par lettre recommandée avec accusé de réception (LRAR) est une étape administrative obligatoire et cruciale. C''est la seule méthode qui vous fournit une preuve légale de la date d''envoi et de réception de votre préavis, ce qui est essentiel pour calculer la fin de votre engagement et éviter de payer des loyers supplémentaires. Conservez précieusement le récépissé de dépôt et l''avis de réception. Votre diligence à cette étape protège vos droits et assure un départ serein de votre logement en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

