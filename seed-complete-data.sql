-- =====================================================
-- SCRIPT COMPLET DE DONNÉES POUR FRANCEPREP ACADEMY
-- 80 cours complets + 25 posts forum avec commentaires
-- Généré le 2025-12-25 01:51:35
-- =====================================================

-- Désactiver temporairement les contraintes
SET session_replication_role = replica;

-- =====================================================
-- COURS
-- =====================================================

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'c5e9e1aa-441d-56e4-a7eb-ef5148374409',
  'CAF - Guide Complet',
  'caf---guide-complet',
  'Apprenez tout sur caf en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour caf',
  'integration_administrative',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=1',
  '["Comprendre caf", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.1
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'dac6ba06-36e5-5e44-9a1e-de5eb9e6bd24',
  'c5e9e1aa-441d-56e4-a7eb-ef5148374409',
  'Introduction à CAF',
  '# Introduction à CAF

Ce cours vous guide pas à pas dans caf.

## Pourquoi c''est important ?

CAF est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de caf
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Site](https://www.caf.fr)
- [Simulateur](https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/estimateurs)
- [Espace](https://www.caf.fr/espaces)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a54133d4-41b3-59a7-8e88-e4f609686828',
  'c5e9e1aa-441d-56e4-a7eb-ef5148374409',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1804b92c-6f08-5c23-b415-a4a7139f8bbe',
  'c5e9e1aa-441d-56e4-a7eb-ef5148374409',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '74924f06-c36e-55f5-852e-40b2d495b4d0',
  'c5e9e1aa-441d-56e4-a7eb-ef5148374409',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'acac3731-c5a1-52f9-9e1d-04e3bf8d3a29',
  'Sécurité Sociale - Guide Complet',
  'securite-sociale---guide-complet',
  'Apprenez tout sur sécurité sociale en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour sécurité sociale',
  'integration_administrative',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=2',
  '["Comprendre sécurité sociale", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.2
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b1b26f50-db14-5dd0-8733-ed535dc99812',
  'acac3731-c5a1-52f9-9e1d-04e3bf8d3a29',
  'Introduction à Sécurité Sociale',
  '# Introduction à Sécurité Sociale

Ce cours vous guide pas à pas dans sécurité sociale.

## Pourquoi c''est important ?

Sécurité Sociale est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de sécurité sociale
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Ameli](https://www.ameli.fr)
- [Cpam](https://www.ameli.fr/assure/droits-demarches/principes/etre-affilie-au-regime-general)
- [Carte Vitale](https://www.ameli.fr/assure/droits-demarches/demarches-et-declarations/remplacer-carte-vitale)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '90346d78-aba1-50d0-bb42-7c8fb8127575',
  'acac3731-c5a1-52f9-9e1d-04e3bf8d3a29',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'aace5557-b060-5bb4-b75d-9876231ace9f',
  'acac3731-c5a1-52f9-9e1d-04e3bf8d3a29',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '53c85cd3-a61b-5191-806b-99da7855c16d',
  'acac3731-c5a1-52f9-9e1d-04e3bf8d3a29',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2aca8027-7180-560a-bcf0-0a19fbc4a115',
  'acac3731-c5a1-52f9-9e1d-04e3bf8d3a29',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '4d85f8d0-1041-52f6-a9cc-155e2de26d10',
  'Titre de Séjour - Guide Complet',
  'titre-de-sejour---guide-complet',
  'Apprenez tout sur titre de séjour en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour titre de séjour',
  'integration_administrative',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=3',
  '["Comprendre titre de séjour", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.3
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '09e8ce6e-11b8-5578-9773-c183446f3a1d',
  '4d85f8d0-1041-52f6-a9cc-155e2de26d10',
  'Introduction à Titre de Séjour',
  '# Introduction à Titre de Séjour

Ce cours vous guide pas à pas dans titre de séjour.

## Pourquoi c''est important ?

Titre de Séjour est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de titre de séjour
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Prefecture](https://www.service-public.fr/particuliers/vosdroits/F1560)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '74e8e018-edeb-558c-9c17-34df7ed1a76d',
  '4d85f8d0-1041-52f6-a9cc-155e2de26d10',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '70335b8a-fcd4-5eeb-973b-4abec1729be4',
  '4d85f8d0-1041-52f6-a9cc-155e2de26d10',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '23a0f201-625d-54d9-b747-cb601a8ba343',
  'Logement - Guide Complet',
  'logement---guide-complet',
  'Apprenez tout sur logement en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour logement',
  'integration_administrative',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=4',
  '["Comprendre logement", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.4
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a42fc333-f82a-5863-8485-d388fd9bb216',
  '23a0f201-625d-54d9-b747-cb601a8ba343',
  'Introduction à Logement',
  '# Introduction à Logement

Ce cours vous guide pas à pas dans logement.

## Pourquoi c''est important ?

Logement est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de logement
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Visale](https://www.actionlogement.fr/visale)
- [Dossier](https://www.service-public.fr/particuliers/vosdroits/F2005)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '32ee7770-6f57-5fea-ab2a-982a91ad6c1d',
  '23a0f201-625d-54d9-b747-cb601a8ba343',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2aec909c-cad5-53dd-956e-62a6041577af',
  '23a0f201-625d-54d9-b747-cb601a8ba343',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'e92bcfee-51a4-542c-a1a7-375fbc3fcc9c',
  '23a0f201-625d-54d9-b747-cb601a8ba343',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'c69480f5-97cc-5102-98d8-d8e572b1d5dd',
  'Banque - Guide Complet',
  'banque---guide-complet',
  'Apprenez tout sur banque en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour banque',
  'integration_administrative',
  'avance',
  'fr',
  2,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=5',
  '["Comprendre banque", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '65536439-7e90-5db2-a1d4-b5f9b673396f',
  'c69480f5-97cc-5102-98d8-d8e572b1d5dd',
  'Introduction à Banque',
  '# Introduction à Banque

Ce cours vous guide pas à pas dans banque.

## Pourquoi c''est important ?

Banque est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de banque
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '9d74d366-96e5-5de3-8e20-7962816ce921',
  'c69480f5-97cc-5102-98d8-d8e572b1d5dd',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5f004ae5-e1f5-5345-a180-c2055291499f',
  'c69480f5-97cc-5102-98d8-d8e572b1d5dd',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '199dc5ce-63a3-564c-85ee-af66da3c7fa4',
  'c69480f5-97cc-5102-98d8-d8e572b1d5dd',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '48340ae9-a035-5906-9be6-02d6494d367f',
  'c69480f5-97cc-5102-98d8-d8e572b1d5dd',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'b82b701b-37d4-5e91-a5fa-4f6994cae081',
  'Assurance - Guide Complet',
  'assurance---guide-complet',
  'Apprenez tout sur assurance en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour assurance',
  'integration_administrative',
  'debutant',
  'fr',
  1,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=6',
  '["Comprendre assurance", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.6
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7f8811c8-d2f4-5539-b517-ff58adb5fac5',
  'b82b701b-37d4-5e91-a5fa-4f6994cae081',
  'Introduction à Assurance',
  '# Introduction à Assurance

Ce cours vous guide pas à pas dans assurance.

## Pourquoi c''est important ?

Assurance est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de assurance
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6eaa9ebe-f96d-55f4-a085-066863809fdc',
  'b82b701b-37d4-5e91-a5fa-4f6994cae081',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c7be4fc8-3739-5a02-addd-a7668bc0422e',
  'b82b701b-37d4-5e91-a5fa-4f6994cae081',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'd68ff61a-54d2-56b6-ad6a-cf7014910b62',
  'Impôts - Guide Complet',
  'impôts---guide-complet',
  'Apprenez tout sur impôts en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour impôts',
  'integration_administrative',
  'intermediaire',
  'fr',
  1,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=7',
  '["Comprendre impôts", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.7
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'ee58a212-8e41-5bae-83c6-6eeda1a50ab4',
  'd68ff61a-54d2-56b6-ad6a-cf7014910b62',
  'Introduction à Impôts',
  '# Introduction à Impôts

Ce cours vous guide pas à pas dans impôts.

## Pourquoi c''est important ?

Impôts est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de impôts
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '09382990-3134-5d72-97da-b2c742fd4e73',
  'd68ff61a-54d2-56b6-ad6a-cf7014910b62',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'af18ab39-c1ba-560d-99ab-a19f6ae76337',
  'd68ff61a-54d2-56b6-ad6a-cf7014910b62',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '746d8a63-7082-5cb3-a00d-b8c59de6d4f6',
  'd68ff61a-54d2-56b6-ad6a-cf7014910b62',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'd8d862d7-df06-5a2c-b7a4-67537c51649b',
  'Démarches Préfecture - Guide Complet',
  'demarches-prefecture---guide-complet',
  'Apprenez tout sur démarches préfecture en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour démarches préfecture',
  'integration_administrative',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=8',
  '["Comprendre démarches préfecture", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '00f5e28f-4c20-5f3b-8df7-38f440caed16',
  'd8d862d7-df06-5a2c-b7a4-67537c51649b',
  'Introduction à Démarches Préfecture',
  '# Introduction à Démarches Préfecture

Ce cours vous guide pas à pas dans démarches préfecture.

## Pourquoi c''est important ?

Démarches Préfecture est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de démarches préfecture
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0eb932a9-359e-537e-a2eb-f3a2ceca06e7',
  'd8d862d7-df06-5a2c-b7a4-67537c51649b',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0594079a-921f-5ad1-8aa2-7d681e194df8',
  'd8d862d7-df06-5a2c-b7a4-67537c51649b',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0ca84074-f7c7-56e2-aefd-245b8dad859c',
  'd8d862d7-df06-5a2c-b7a4-67537c51649b',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '980b30a0-14c5-51c8-9c0e-19aa05ef1be0',
  'd8d862d7-df06-5a2c-b7a4-67537c51649b',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '82cba879-2b17-5895-8579-aec5efcf0fdc',
  'Visa - Guide Complet',
  'visa---guide-complet',
  'Apprenez tout sur visa en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour visa',
  'integration_administrative',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=9',
  '["Comprendre visa", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.9
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '545ad71b-5504-5186-a7b7-5fe22809ff33',
  '82cba879-2b17-5895-8579-aec5efcf0fdc',
  'Introduction à Visa',
  '# Introduction à Visa

Ce cours vous guide pas à pas dans visa.

## Pourquoi c''est important ?

Visa est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de visa
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Prefecture](https://www.service-public.fr/particuliers/vosdroits/F1560)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '87b7fc10-7577-5bb9-8792-e13a6d64ef93',
  '82cba879-2b17-5895-8579-aec5efcf0fdc',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '71a997a6-9ce8-56c8-b97c-2e641a33c73a',
  '82cba879-2b17-5895-8579-aec5efcf0fdc',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'd697c2e4-eb12-570b-ae6d-daab49751174',
  'Carte Vitale - Guide Complet',
  'carte-vitale---guide-complet',
  'Apprenez tout sur carte vitale en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour carte vitale',
  'integration_administrative',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=10',
  '["Comprendre carte vitale", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '496f88e2-7a02-5996-8c97-912b8fea6111',
  'd697c2e4-eb12-570b-ae6d-daab49751174',
  'Introduction à Carte Vitale',
  '# Introduction à Carte Vitale

Ce cours vous guide pas à pas dans carte vitale.

## Pourquoi c''est important ?

Carte Vitale est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de carte vitale
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'e2e441ca-c7e2-5616-83d9-959324c22857',
  'd697c2e4-eb12-570b-ae6d-daab49751174',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7db29bce-06a6-5b5f-be93-0d8630731b6a',
  'd697c2e4-eb12-570b-ae6d-daab49751174',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '10f6c35b-f398-57b0-9dc4-b7534cd732cd',
  'd697c2e4-eb12-570b-ae6d-daab49751174',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'f092d096-326b-5fa2-b522-fc7aeedd0fa3',
  'Mutuelle - Guide Complet',
  'mutuelle---guide-complet',
  'Apprenez tout sur mutuelle en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour mutuelle',
  'integration_administrative',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=11',
  '["Comprendre mutuelle", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.1
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6a8958c5-c1db-5ee3-aadc-804557d8ed8a',
  'f092d096-326b-5fa2-b522-fc7aeedd0fa3',
  'Introduction à Mutuelle',
  '# Introduction à Mutuelle

Ce cours vous guide pas à pas dans mutuelle.

## Pourquoi c''est important ?

Mutuelle est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de mutuelle
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Ameli](https://www.ameli.fr)
- [Cpam](https://www.ameli.fr/assure/droits-demarches/principes/etre-affilie-au-regime-general)
- [Carte Vitale](https://www.ameli.fr/assure/droits-demarches/demarches-et-declarations/remplacer-carte-vitale)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c4880cd9-7e59-5ca3-812d-9df827dfd79c',
  'f092d096-326b-5fa2-b522-fc7aeedd0fa3',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b5840d46-d9a9-5146-918a-8b62c8c7cd12',
  'f092d096-326b-5fa2-b522-fc7aeedd0fa3',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '50793eae-9318-5a51-b954-527be2c1f88e',
  'f092d096-326b-5fa2-b522-fc7aeedd0fa3',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'acb1f1e6-98f0-5be6-b5c6-b9a297d0e30d',
  'f092d096-326b-5fa2-b522-fc7aeedd0fa3',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '0fb13029-81be-51b4-9c61-973c61ebe40f',
  'CPAM - Guide Complet',
  'cpam---guide-complet',
  'Apprenez tout sur cpam en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour cpam',
  'integration_administrative',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=12',
  '["Comprendre cpam", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.2
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '23ed5e2f-21a0-5e3b-a0c4-cfc9eb2645e6',
  '0fb13029-81be-51b4-9c61-973c61ebe40f',
  'Introduction à CPAM',
  '# Introduction à CPAM

Ce cours vous guide pas à pas dans cpam.

## Pourquoi c''est important ?

CPAM est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de cpam
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Ameli](https://www.ameli.fr)
- [Cpam](https://www.ameli.fr/assure/droits-demarches/principes/etre-affilie-au-regime-general)
- [Carte Vitale](https://www.ameli.fr/assure/droits-demarches/demarches-et-declarations/remplacer-carte-vitale)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2ca7dacc-7957-5b33-85de-6c051878a577',
  '0fb13029-81be-51b4-9c61-973c61ebe40f',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '8cf47727-2b1e-55d4-b0f2-3115029205a6',
  '0fb13029-81be-51b4-9c61-973c61ebe40f',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'd9542a60-0ac2-5038-9510-a1f1f86f7aec',
  'RSI - Guide Complet',
  'rsi---guide-complet',
  'Apprenez tout sur rsi en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour rsi',
  'integration_administrative',
  'intermediaire',
  'fr',
  1,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=13',
  '["Comprendre rsi", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.3
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '75c573a6-8ecf-5424-bf14-22cd975b94bd',
  'd9542a60-0ac2-5038-9510-a1f1f86f7aec',
  'Introduction à RSI',
  '# Introduction à RSI

Ce cours vous guide pas à pas dans rsi.

## Pourquoi c''est important ?

RSI est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de rsi
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1f9bac8b-4d24-5537-a809-bd83808c33b5',
  'd9542a60-0ac2-5038-9510-a1f1f86f7aec',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'fc3fae53-db3e-50dd-ab51-9bb1009d3080',
  'd9542a60-0ac2-5038-9510-a1f1f86f7aec',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '9709494f-2571-57f5-8f50-7b16dac166be',
  'd9542a60-0ac2-5038-9510-a1f1f86f7aec',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '750b1c7f-7e8a-5fc6-a0f2-af39e0321857',
  'Urssaf - Guide Complet',
  'urssaf---guide-complet',
  'Apprenez tout sur urssaf en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour urssaf',
  'integration_administrative',
  'avance',
  'fr',
  2,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=14',
  '["Comprendre urssaf", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.4
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '9512c314-1e5d-5df4-ab8a-52c3bda66bf1',
  '750b1c7f-7e8a-5fc6-a0f2-af39e0321857',
  'Introduction à Urssaf',
  '# Introduction à Urssaf

Ce cours vous guide pas à pas dans urssaf.

## Pourquoi c''est important ?

Urssaf est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de urssaf
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5cccb221-baf8-5f99-9074-14f074c9e695',
  '750b1c7f-7e8a-5fc6-a0f2-af39e0321857',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '05b13d6b-cf58-5e26-9c5d-5e9fa77b72f0',
  '750b1c7f-7e8a-5fc6-a0f2-af39e0321857',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1883d5ba-38eb-5908-9241-4950eabfe1fa',
  '750b1c7f-7e8a-5fc6-a0f2-af39e0321857',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '321468a6-498f-5720-ad0a-500e57d8a9a3',
  '750b1c7f-7e8a-5fc6-a0f2-af39e0321857',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '4cf88925-1e27-5a21-8d84-e06df3377022',
  'Pôle Emploi - Guide Complet',
  'pôle-emploi---guide-complet',
  'Apprenez tout sur pôle emploi en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour pôle emploi',
  'integration_administrative',
  'debutant',
  'fr',
  1,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=15',
  '["Comprendre pôle emploi", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6cfad82a-7bab-5201-b45f-d5ed3dfb6d62',
  '4cf88925-1e27-5a21-8d84-e06df3377022',
  'Introduction à Pôle Emploi',
  '# Introduction à Pôle Emploi

Ce cours vous guide pas à pas dans pôle emploi.

## Pourquoi c''est important ?

Pôle Emploi est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de pôle emploi
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '912c2115-2dd8-5620-a8fb-709a04f07e5b',
  '4cf88925-1e27-5a21-8d84-e06df3377022',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a7ef01dc-5148-588b-bfca-b50265a43e21',
  '4cf88925-1e27-5a21-8d84-e06df3377022',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'b0b71099-9d60-556a-846d-e927b0341804',
  'Passeport - Guide Complet',
  'passeport---guide-complet',
  'Apprenez tout sur passeport en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour passeport',
  'integration_administrative',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=16',
  '["Comprendre passeport", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.6
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd57d9383-98f6-5dc3-b515-446247f3a205',
  'b0b71099-9d60-556a-846d-e927b0341804',
  'Introduction à Passeport',
  '# Introduction à Passeport

Ce cours vous guide pas à pas dans passeport.

## Pourquoi c''est important ?

Passeport est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de passeport
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '24c889c4-fe1c-52de-9723-effb0f090e25',
  'b0b71099-9d60-556a-846d-e927b0341804',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'bd6307d0-7bbf-55a9-b646-5909e3e472a3',
  'b0b71099-9d60-556a-846d-e927b0341804',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'e664801b-2edd-566e-8a95-9f663da81551',
  'b0b71099-9d60-556a-846d-e927b0341804',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '0c8c0a70-6c1a-5ece-968a-3a7b5df35a41',
  'Carte dIdentité - Guide Complet',
  'carte-didentite---guide-complet',
  'Apprenez tout sur carte didentité en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour carte didentité',
  'integration_administrative',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=17',
  '["Comprendre carte didentité", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.7
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'da482455-7344-5a33-9336-b2560e1c53d6',
  '0c8c0a70-6c1a-5ece-968a-3a7b5df35a41',
  'Introduction à Carte dIdentité',
  '# Introduction à Carte dIdentité

Ce cours vous guide pas à pas dans carte didentité.

## Pourquoi c''est important ?

Carte dIdentité est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de carte didentité
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1a5fbc15-ce88-59d9-85d3-e55bbb64773b',
  '0c8c0a70-6c1a-5ece-968a-3a7b5df35a41',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '467afcf1-678e-5563-8b7f-235c5dd361d8',
  '0c8c0a70-6c1a-5ece-968a-3a7b5df35a41',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '8116c4e8-ba14-59b4-9246-7dd9ab5a0086',
  '0c8c0a70-6c1a-5ece-968a-3a7b5df35a41',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1ea14e40-9ad0-50a2-90fd-f03ba3f65deb',
  '0c8c0a70-6c1a-5ece-968a-3a7b5df35a41',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '06da14aa-a677-5e59-9771-b7322cc537ad',
  'Permis de Séjour - Guide Complet',
  'permis-de-sejour---guide-complet',
  'Apprenez tout sur permis de séjour en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour permis de séjour',
  'integration_administrative',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=18',
  '["Comprendre permis de séjour", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2bf5eaed-008c-5c00-87e6-ccc30e1284e9',
  '06da14aa-a677-5e59-9771-b7322cc537ad',
  'Introduction à Permis de Séjour',
  '# Introduction à Permis de Séjour

Ce cours vous guide pas à pas dans permis de séjour.

## Pourquoi c''est important ?

Permis de Séjour est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de permis de séjour
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Prefecture](https://www.service-public.fr/particuliers/vosdroits/F1560)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '8671e3eb-6cef-5cd9-9afa-98e13ff4a4ae',
  '06da14aa-a677-5e59-9771-b7322cc537ad',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5767d414-8db0-57d8-a8ca-a850362c2799',
  '06da14aa-a677-5e59-9771-b7322cc537ad',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'f89def1f-0546-516e-ae29-0abfd3f6fa5e',
  'Renouvellement - Guide Complet',
  'renouvellement---guide-complet',
  'Apprenez tout sur renouvellement en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour renouvellement',
  'integration_administrative',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=19',
  '["Comprendre renouvellement", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.9
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '8ccb0f43-0c59-59b6-ae31-9bca09dc1be7',
  'f89def1f-0546-516e-ae29-0abfd3f6fa5e',
  'Introduction à Renouvellement',
  '# Introduction à Renouvellement

Ce cours vous guide pas à pas dans renouvellement.

## Pourquoi c''est important ?

Renouvellement est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de renouvellement
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '18d64330-7180-59ba-a322-2e680123dc91',
  'f89def1f-0546-516e-ae29-0abfd3f6fa5e',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'cac921aa-a956-538f-bf96-cbc6724b12ab',
  'f89def1f-0546-516e-ae29-0abfd3f6fa5e',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'eac4f675-5cef-58ef-84be-21f84f387491',
  'f89def1f-0546-516e-ae29-0abfd3f6fa5e',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'd5e062c5-eb8b-5dd6-9160-8fc136a7e9d4',
  'Naturalisation - Guide Complet',
  'naturalisation---guide-complet',
  'Apprenez tout sur naturalisation en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.',
  'Guide pas à pas pour naturalisation',
  'integration_administrative',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=20',
  '["Comprendre naturalisation", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a5a1419a-a4fe-5daa-99b8-82e2ae9d70e9',
  'd5e062c5-eb8b-5dd6-9160-8fc136a7e9d4',
  'Introduction à Naturalisation',
  '# Introduction à Naturalisation

Ce cours vous guide pas à pas dans naturalisation.

## Pourquoi c''est important ?

Naturalisation est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de naturalisation
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '84922803-6e01-5bde-aa11-8d701d9a18b4',
  'd5e062c5-eb8b-5dd6-9160-8fc136a7e9d4',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '01c8889f-b868-5b7c-9d5d-8f00ca1e492d',
  'd5e062c5-eb8b-5dd6-9160-8fc136a7e9d4',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '42681a9d-7b59-5d7c-bdc0-f0e54b1f632e',
  'd5e062c5-eb8b-5dd6-9160-8fc136a7e9d4',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'bd7f1c6a-1551-53c4-a4e7-c2f87d0d6b31',
  'd5e062c5-eb8b-5dd6-9160-8fc136a7e9d4',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'f814b538-a57b-5b46-a0a5-5f2cdf951b79',
  'Français A1 - Guide Complet',
  'francais-a1---guide-complet',
  'Formation complète sur français a1. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète français a1',
  'preparation_academique',
  'debutant',
  'fr',
  1,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=21',
  '["Comprendre français a1", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.1
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '77034924-ade9-59bb-8f82-7bcafb41638a',
  'f814b538-a57b-5b46-a0a5-5f2cdf951b79',
  'Introduction à Français A1',
  '# Introduction à Français A1

Ce cours vous guide pas à pas dans français a1.

## Pourquoi c''est important ?

Français A1 est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de français a1
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Delf](https://www.france-education-international.fr/diplome/delf-dalf)
- [Ciel](https://www.ciep.fr/delf-dalf)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6fcc818a-7115-54c3-b546-519fae6e4a41',
  'f814b538-a57b-5b46-a0a5-5f2cdf951b79',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'e91f212e-14b3-5dde-99fb-e822f632487c',
  'f814b538-a57b-5b46-a0a5-5f2cdf951b79',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '0e666326-377f-5bb1-8293-ec7d9cc6bb99',
  'Français A2 - Guide Complet',
  'francais-a2---guide-complet',
  'Formation complète sur français a2. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète français a2',
  'preparation_academique',
  'intermediaire',
  'fr',
  1,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=22',
  '["Comprendre français a2", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.2
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4b5c17cb-b341-5b2f-b9cb-20e8da2011f6',
  '0e666326-377f-5bb1-8293-ec7d9cc6bb99',
  'Introduction à Français A2',
  '# Introduction à Français A2

Ce cours vous guide pas à pas dans français a2.

## Pourquoi c''est important ?

Français A2 est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de français a2
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Delf](https://www.france-education-international.fr/diplome/delf-dalf)
- [Ciel](https://www.ciep.fr/delf-dalf)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'df786b27-bc9d-5cbf-b2f5-7f32ccfd664b',
  '0e666326-377f-5bb1-8293-ec7d9cc6bb99',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '57e3b1e4-f8d9-5c16-8333-e334131cfa24',
  '0e666326-377f-5bb1-8293-ec7d9cc6bb99',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4791334c-d28d-5506-8765-bc5a86bd6fa7',
  '0e666326-377f-5bb1-8293-ec7d9cc6bb99',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'ad63ebd0-935d-55e7-8604-f61e36be828a',
  'Français B1 - Guide Complet',
  'francais-b1---guide-complet',
  'Formation complète sur français b1. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète français b1',
  'preparation_academique',
  'avance',
  'fr',
  2,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=23',
  '["Comprendre français b1", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.3
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '60937736-dc53-526d-b072-66979413b4b2',
  'ad63ebd0-935d-55e7-8604-f61e36be828a',
  'Introduction à Français B1',
  '# Introduction à Français B1

Ce cours vous guide pas à pas dans français b1.

## Pourquoi c''est important ?

Français B1 est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de français b1
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Delf](https://www.france-education-international.fr/diplome/delf-dalf)
- [Ciel](https://www.ciep.fr/delf-dalf)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '489276f3-b83d-5a54-800e-7083fc48d04e',
  'ad63ebd0-935d-55e7-8604-f61e36be828a',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2a22b142-0227-5b8d-9083-ddbd64d3cf88',
  'ad63ebd0-935d-55e7-8604-f61e36be828a',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '3aeb13da-8133-511b-b6f3-57d328d6916b',
  'ad63ebd0-935d-55e7-8604-f61e36be828a',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '95d8e4b9-7311-555c-ab5a-dce1aa16d102',
  'ad63ebd0-935d-55e7-8604-f61e36be828a',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '2e8f5923-62aa-5009-b1aa-ad1e6818fd21',
  'Français B2 - Guide Complet',
  'francais-b2---guide-complet',
  'Formation complète sur français b2. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète français b2',
  'preparation_academique',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=24',
  '["Comprendre français b2", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.4
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6ef053ea-e939-57af-ab92-52217d2906c5',
  '2e8f5923-62aa-5009-b1aa-ad1e6818fd21',
  'Introduction à Français B2',
  '# Introduction à Français B2

Ce cours vous guide pas à pas dans français b2.

## Pourquoi c''est important ?

Français B2 est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de français b2
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Delf](https://www.france-education-international.fr/diplome/delf-dalf)
- [Ciel](https://www.ciep.fr/delf-dalf)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '237beb56-91bd-5eba-ae48-2630949d4ae5',
  '2e8f5923-62aa-5009-b1aa-ad1e6818fd21',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '004afe2c-090b-57f8-8dcf-58ad6ab8c60c',
  '2e8f5923-62aa-5009-b1aa-ad1e6818fd21',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '28a75f3b-57c7-58f2-878f-649893bb8bda',
  'DELF - Guide Complet',
  'delf---guide-complet',
  'Formation complète sur delf. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète delf',
  'preparation_academique',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=25',
  '["Comprendre delf", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f69bb481-b16c-59c7-841b-e492c2447e64',
  '28a75f3b-57c7-58f2-878f-649893bb8bda',
  'Introduction à DELF',
  '# Introduction à DELF

Ce cours vous guide pas à pas dans delf.

## Pourquoi c''est important ?

DELF est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de delf
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Delf](https://www.france-education-international.fr/diplome/delf-dalf)
- [Ciel](https://www.ciep.fr/delf-dalf)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f3233c2d-a130-5853-8298-8f648326ab5b',
  '28a75f3b-57c7-58f2-878f-649893bb8bda',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '60a33674-0f23-5531-870d-087d88b7d9e0',
  '28a75f3b-57c7-58f2-878f-649893bb8bda',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4c91a905-f019-5629-8700-f1c48c28c5c7',
  '28a75f3b-57c7-58f2-878f-649893bb8bda',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '67f19067-6596-54e8-a5ad-fb28223de216',
  'DALF - Guide Complet',
  'dalf---guide-complet',
  'Formation complète sur dalf. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète dalf',
  'preparation_academique',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=26',
  '["Comprendre dalf", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.6
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4defe114-83a9-549c-8920-3419cb29398f',
  '67f19067-6596-54e8-a5ad-fb28223de216',
  'Introduction à DALF',
  '# Introduction à DALF

Ce cours vous guide pas à pas dans dalf.

## Pourquoi c''est important ?

DALF est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de dalf
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Delf](https://www.france-education-international.fr/diplome/delf-dalf)
- [Ciel](https://www.ciep.fr/delf-dalf)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd33f368d-3da2-5567-af02-1c2e6b632147',
  '67f19067-6596-54e8-a5ad-fb28223de216',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2e543b80-6a97-54db-a2a9-fccdd4f3e42c',
  '67f19067-6596-54e8-a5ad-fb28223de216',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5a844235-cd05-5a82-b207-5023a6ddfaa6',
  '67f19067-6596-54e8-a5ad-fb28223de216',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd212e50f-f737-5c3c-981a-81146c2b9a62',
  '67f19067-6596-54e8-a5ad-fb28223de216',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '1c11bd6d-d0e0-59cd-84d4-4e467fa3713d',
  'Système Éducatif - Guide Complet',
  'systeme-educatif---guide-complet',
  'Formation complète sur système éducatif. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète système éducatif',
  'preparation_academique',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=27',
  '["Comprendre système éducatif", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.7
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '72ccae50-df50-5e86-93ce-0acc000b3bfe',
  '1c11bd6d-d0e0-59cd-84d4-4e467fa3713d',
  'Introduction à Système Éducatif',
  '# Introduction à Système Éducatif

Ce cours vous guide pas à pas dans système éducatif.

## Pourquoi c''est important ?

Système Éducatif est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de système éducatif
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '96806592-ec04-50c9-b255-2dbfca170306',
  '1c11bd6d-d0e0-59cd-84d4-4e467fa3713d',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '792e7856-61b9-5042-8193-d62614dc4e70',
  '1c11bd6d-d0e0-59cd-84d4-4e467fa3713d',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '016fc562-ead6-5ed2-a991-256e9b644cd3',
  'Inscription Université - Guide Complet',
  'inscription-universite---guide-complet',
  'Formation complète sur inscription université. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète inscription université',
  'preparation_academique',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=28',
  '["Comprendre inscription université", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'cdca3b49-04a5-51c2-8fd4-ebbc8e1904af',
  '016fc562-ead6-5ed2-a991-256e9b644cd3',
  'Introduction à Inscription Université',
  '# Introduction à Inscription Université

Ce cours vous guide pas à pas dans inscription université.

## Pourquoi c''est important ?

Inscription Université est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de inscription université
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'e73a662d-1c1b-5895-936c-ace7160b6f8a',
  '016fc562-ead6-5ed2-a991-256e9b644cd3',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f9b090bb-d49f-5735-a5b2-64cdfc1be336',
  '016fc562-ead6-5ed2-a991-256e9b644cd3',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a0e94264-e87b-5d21-9d69-4ccdc86ab968',
  '016fc562-ead6-5ed2-a991-256e9b644cd3',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '3496137e-cd83-5814-91f9-197b223acad3',
  'LMD - Guide Complet',
  'lmd---guide-complet',
  'Formation complète sur lmd. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète lmd',
  'preparation_academique',
  'avance',
  'fr',
  2,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=29',
  '["Comprendre lmd", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.9
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a22f0434-b376-51a6-a10b-d4f7c7d874df',
  '3496137e-cd83-5814-91f9-197b223acad3',
  'Introduction à LMD',
  '# Introduction à LMD

Ce cours vous guide pas à pas dans lmd.

## Pourquoi c''est important ?

LMD est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de lmd
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6c4f93ea-bce6-5df3-9494-1388d85be16c',
  '3496137e-cd83-5814-91f9-197b223acad3',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c1124b4a-fe1d-5228-800b-494d5191492e',
  '3496137e-cd83-5814-91f9-197b223acad3',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1c901dbf-c137-53c9-9123-38359f7c4f50',
  '3496137e-cd83-5814-91f9-197b223acad3',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c72dc91c-fa78-526f-979f-828c9b93eff5',
  '3496137e-cd83-5814-91f9-197b223acad3',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '8be331f7-fd12-5a02-82ab-eb840bc2bbae',
  'Bourses - Guide Complet',
  'bourses---guide-complet',
  'Formation complète sur bourses. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète bourses',
  'preparation_academique',
  'debutant',
  'fr',
  1,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=30',
  '["Comprendre bourses", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'bdbce2d3-3b24-5567-939c-d5fe2d5452f9',
  '8be331f7-fd12-5a02-82ab-eb840bc2bbae',
  'Introduction à Bourses',
  '# Introduction à Bourses

Ce cours vous guide pas à pas dans bourses.

## Pourquoi c''est important ?

Bourses est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de bourses
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'aac08cf9-1efb-5e00-8d4b-77ae7b54906f',
  '8be331f7-fd12-5a02-82ab-eb840bc2bbae',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0afafdd0-6f24-50bb-8a23-6ffc7a4db099',
  '8be331f7-fd12-5a02-82ab-eb840bc2bbae',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'c7ffb411-530e-5017-8a79-2f6428977ad6',
  'Équivalences - Guide Complet',
  'equivalences---guide-complet',
  'Formation complète sur équivalences. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète équivalences',
  'preparation_academique',
  'intermediaire',
  'fr',
  1,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=31',
  '["Comprendre équivalences", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.1
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'ca3ac4c5-abc1-5633-82af-dfdae223e491',
  'c7ffb411-530e-5017-8a79-2f6428977ad6',
  'Introduction à Équivalences',
  '# Introduction à Équivalences

Ce cours vous guide pas à pas dans équivalences.

## Pourquoi c''est important ?

Équivalences est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de équivalences
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '68cdb12a-9f27-59a1-836a-082ea6205ad2',
  'c7ffb411-530e-5017-8a79-2f6428977ad6',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6b9a4aae-a7e0-5120-98e9-d95859b99afc',
  'c7ffb411-530e-5017-8a79-2f6428977ad6',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b62e718c-6ef7-58d0-83dc-e27309e258da',
  'c7ffb411-530e-5017-8a79-2f6428977ad6',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'c52da179-2c0e-59d1-863b-b2d1827d6614',
  'Mémoire - Guide Complet',
  'memoire---guide-complet',
  'Formation complète sur mémoire. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète mémoire',
  'preparation_academique',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=32',
  '["Comprendre mémoire", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.2
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '9bbc7dff-d60d-52fe-9386-de5ba836268f',
  'c52da179-2c0e-59d1-863b-b2d1827d6614',
  'Introduction à Mémoire',
  '# Introduction à Mémoire

Ce cours vous guide pas à pas dans mémoire.

## Pourquoi c''est important ?

Mémoire est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de mémoire
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'bef632f4-f5db-5d14-b1b6-5758581271e6',
  'c52da179-2c0e-59d1-863b-b2d1827d6614',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '30930b15-5202-5c24-b179-0d09d6c2cd5c',
  'c52da179-2c0e-59d1-863b-b2d1827d6614',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b902daa9-90ae-5df4-91b9-c369033183bf',
  'c52da179-2c0e-59d1-863b-b2d1827d6614',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '294a86dc-05ac-5528-8d99-0cd86e973858',
  'c52da179-2c0e-59d1-863b-b2d1827d6614',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '6d4e876d-3843-5429-8d50-725c741023c8',
  'Thèse - Guide Complet',
  'these---guide-complet',
  'Formation complète sur thèse. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète thèse',
  'preparation_academique',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=33',
  '["Comprendre thèse", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.3
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '79630ce4-859a-559f-a36a-d9e141a61f3f',
  '6d4e876d-3843-5429-8d50-725c741023c8',
  'Introduction à Thèse',
  '# Introduction à Thèse

Ce cours vous guide pas à pas dans thèse.

## Pourquoi c''est important ?

Thèse est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de thèse
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5b7de3f6-9dc4-586c-905d-c0621bfc935a',
  '6d4e876d-3843-5429-8d50-725c741023c8',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '441dd400-988d-5f98-a434-bc9caa304b5c',
  '6d4e876d-3843-5429-8d50-725c741023c8',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '7fe7066b-abbe-5914-9f89-93157bf0d2a7',
  'Recherche - Guide Complet',
  'recherche---guide-complet',
  'Formation complète sur recherche. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète recherche',
  'preparation_academique',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=34',
  '["Comprendre recherche", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.4
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1e6f60af-526d-5fe6-8510-7b6bc52d147c',
  '7fe7066b-abbe-5914-9f89-93157bf0d2a7',
  'Introduction à Recherche',
  '# Introduction à Recherche

Ce cours vous guide pas à pas dans recherche.

## Pourquoi c''est important ?

Recherche est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de recherche
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c85cd40a-92da-5c23-95fa-b941f4448467',
  '7fe7066b-abbe-5914-9f89-93157bf0d2a7',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a42112f3-4f14-5284-80e1-48c92c20e376',
  '7fe7066b-abbe-5914-9f89-93157bf0d2a7',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '88f7ea69-cb34-5a72-b9ee-50b29e80c733',
  '7fe7066b-abbe-5914-9f89-93157bf0d2a7',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'c32ca30f-e40d-5168-a14d-0111b23ce4bf',
  'Bibliographie - Guide Complet',
  'bibliographie---guide-complet',
  'Formation complète sur bibliographie. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète bibliographie',
  'preparation_academique',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=35',
  '["Comprendre bibliographie", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1bcae0a7-d150-5b73-b452-2fd87c1a3a1e',
  'c32ca30f-e40d-5168-a14d-0111b23ce4bf',
  'Introduction à Bibliographie',
  '# Introduction à Bibliographie

Ce cours vous guide pas à pas dans bibliographie.

## Pourquoi c''est important ?

Bibliographie est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de bibliographie
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'bbbf5c67-cd34-5188-a0bc-ae1ef6fe8d0e',
  'c32ca30f-e40d-5168-a14d-0111b23ce4bf',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '3e8742e6-2847-5bac-b097-418d2c6d84a0',
  'c32ca30f-e40d-5168-a14d-0111b23ce4bf',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '357fe880-c436-5b85-b1ed-811ea7b7686f',
  'c32ca30f-e40d-5168-a14d-0111b23ce4bf',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'cfde018c-0931-55d1-8814-ccc7cb1add35',
  'c32ca30f-e40d-5168-a14d-0111b23ce4bf',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '4a3a4dbc-365e-5c5f-9b62-4ea83ea9718f',
  'Présentations - Guide Complet',
  'presentations---guide-complet',
  'Formation complète sur présentations. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète présentations',
  'preparation_academique',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=36',
  '["Comprendre présentations", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.6
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '9f718855-ad26-5107-9896-45d9f5a5774e',
  '4a3a4dbc-365e-5c5f-9b62-4ea83ea9718f',
  'Introduction à Présentations',
  '# Introduction à Présentations

Ce cours vous guide pas à pas dans présentations.

## Pourquoi c''est important ?

Présentations est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de présentations
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f760d035-9047-5d7d-ad6b-320c63400521',
  '4a3a4dbc-365e-5c5f-9b62-4ea83ea9718f',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '730b2a69-7bb9-54d3-b360-485157ff8ff5',
  '4a3a4dbc-365e-5c5f-9b62-4ea83ea9718f',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '38833e90-ca82-5318-b714-5b8889cb3ced',
  'Examens - Guide Complet',
  'examens---guide-complet',
  'Formation complète sur examens. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète examens',
  'preparation_academique',
  'intermediaire',
  'fr',
  1,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=37',
  '["Comprendre examens", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.7
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5dfaa662-4d17-57a5-a3d3-bd720d50cece',
  '38833e90-ca82-5318-b714-5b8889cb3ced',
  'Introduction à Examens',
  '# Introduction à Examens

Ce cours vous guide pas à pas dans examens.

## Pourquoi c''est important ?

Examens est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de examens
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b734f2ff-50ea-5762-bb68-0592ddb691ee',
  '38833e90-ca82-5318-b714-5b8889cb3ced',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '9fccf44e-b418-57fb-9c0d-0a9761c0a2ad',
  '38833e90-ca82-5318-b714-5b8889cb3ced',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7bc2197d-0f81-5c10-a986-e226d12d2875',
  '38833e90-ca82-5318-b714-5b8889cb3ced',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'da88c66a-4d61-5a5e-a178-0f3f198bbc0f',
  'Méthodologie - Guide Complet',
  'methodologie---guide-complet',
  'Formation complète sur méthodologie. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète méthodologie',
  'preparation_academique',
  'avance',
  'fr',
  2,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=38',
  '["Comprendre méthodologie", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'ea2d3cc7-53b0-5963-9ad2-60b264a49273',
  'da88c66a-4d61-5a5e-a178-0f3f198bbc0f',
  'Introduction à Méthodologie',
  '# Introduction à Méthodologie

Ce cours vous guide pas à pas dans méthodologie.

## Pourquoi c''est important ?

Méthodologie est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de méthodologie
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7d124d3f-532a-5e92-98ce-54f6649dc724',
  'da88c66a-4d61-5a5e-a178-0f3f198bbc0f',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'db79451e-0c77-55c6-8a5d-65ee0ac0dc7e',
  'da88c66a-4d61-5a5e-a178-0f3f198bbc0f',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '29ea29a2-bf8b-55bb-ae5f-30dbef627a4f',
  'da88c66a-4d61-5a5e-a178-0f3f198bbc0f',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '926c6e7c-72da-53f5-8bee-0e586296734a',
  'da88c66a-4d61-5a5e-a178-0f3f198bbc0f',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '60aefcc7-9ad3-54b0-92f6-14c5efee11c3',
  'Prise de Notes - Guide Complet',
  'prise-de-notes---guide-complet',
  'Formation complète sur prise de notes. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète prise de notes',
  'preparation_academique',
  'debutant',
  'fr',
  1,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=39',
  '["Comprendre prise de notes", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.9
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1205f688-7947-53f1-b4e3-cf5e8d8736fc',
  '60aefcc7-9ad3-54b0-92f6-14c5efee11c3',
  'Introduction à Prise de Notes',
  '# Introduction à Prise de Notes

Ce cours vous guide pas à pas dans prise de notes.

## Pourquoi c''est important ?

Prise de Notes est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de prise de notes
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '87dec4bc-f697-55c0-8d99-1836a5819996',
  '60aefcc7-9ad3-54b0-92f6-14c5efee11c3',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '319f34c1-f92c-5d21-b395-56762b4ff129',
  '60aefcc7-9ad3-54b0-92f6-14c5efee11c3',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'e13aa66a-d08a-52c2-9e8d-d0a367f450ff',
  'Apprentissage - Guide Complet',
  'apprentissage---guide-complet',
  'Formation complète sur apprentissage. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.',
  'Formation complète apprentissage',
  'preparation_academique',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=40',
  '["Comprendre apprentissage", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6325df0b-ae0e-5889-88ce-f2994593939b',
  'e13aa66a-d08a-52c2-9e8d-d0a367f450ff',
  'Introduction à Apprentissage',
  '# Introduction à Apprentissage

Ce cours vous guide pas à pas dans apprentissage.

## Pourquoi c''est important ?

Apprentissage est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de apprentissage
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '50e0ef13-075e-54d8-a3f3-45baac42d5d0',
  'e13aa66a-d08a-52c2-9e8d-d0a367f450ff',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd24c53a3-876a-563e-989d-653dd3c36f5a',
  'e13aa66a-d08a-52c2-9e8d-d0a367f450ff',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f5b7305d-50c8-5a34-9367-111e3353c38e',
  'e13aa66a-d08a-52c2-9e8d-d0a367f450ff',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '037be095-d748-512e-8ed8-f1e0743d4738',
  'Codes Sociaux - Guide Complet',
  'codes-sociaux---guide-complet',
  'Découvrez codes sociaux en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre codes sociaux en France',
  'culture_codes_sociaux',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=41',
  '["Comprendre codes sociaux", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.1
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2578a826-fcda-5513-aabe-9a6d979beab8',
  '037be095-d748-512e-8ed8-f1e0743d4738',
  'Introduction à Codes Sociaux',
  '# Introduction à Codes Sociaux

Ce cours vous guide pas à pas dans codes sociaux.

## Pourquoi c''est important ?

Codes Sociaux est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de codes sociaux
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2eb7fce1-f71e-5b19-a034-37d7c785bcf7',
  '037be095-d748-512e-8ed8-f1e0743d4738',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6367ffac-bb5b-56a2-9d2d-72409afe8f46',
  '037be095-d748-512e-8ed8-f1e0743d4738',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '62c9c67c-af81-507d-84d9-737684886613',
  '037be095-d748-512e-8ed8-f1e0743d4738',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7383a11c-4e31-5540-84fb-8c8714dde264',
  '037be095-d748-512e-8ed8-f1e0743d4738',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'b300742e-de87-5f11-a7d4-571dafede82b',
  'Politesse - Guide Complet',
  'politesse---guide-complet',
  'Découvrez politesse en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre politesse en France',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=42',
  '["Comprendre politesse", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.2
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '38bc183f-e731-586f-8595-e965b5560d83',
  'b300742e-de87-5f11-a7d4-571dafede82b',
  'Introduction à Politesse',
  '# Introduction à Politesse

Ce cours vous guide pas à pas dans politesse.

## Pourquoi c''est important ?

Politesse est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de politesse
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f3a22376-ac67-59ce-b7d8-ed24c33a2c36',
  'b300742e-de87-5f11-a7d4-571dafede82b',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '88e742f4-d7ad-5b82-9cba-071e699b4721',
  'b300742e-de87-5f11-a7d4-571dafede82b',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '69f5b33d-ba22-5f30-8b47-7dbe66ca6b2b',
  'Tutoiement/Vouvoiement - Guide Complet',
  'tutoiement/vouvoiement---guide-complet',
  'Découvrez tutoiement/vouvoiement en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre tutoiement/vouvoiement en France',
  'culture_codes_sociaux',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=43',
  '["Comprendre tutoiement/vouvoiement", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.3
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a6f6afce-4f24-5a75-95cf-61619de5371d',
  '69f5b33d-ba22-5f30-8b47-7dbe66ca6b2b',
  'Introduction à Tutoiement/Vouvoiement',
  '# Introduction à Tutoiement/Vouvoiement

Ce cours vous guide pas à pas dans tutoiement/vouvoiement.

## Pourquoi c''est important ?

Tutoiement/Vouvoiement est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de tutoiement/vouvoiement
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd734d44a-ae17-5231-8995-e39cf0064295',
  '69f5b33d-ba22-5f30-8b47-7dbe66ca6b2b',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7f4cb85a-f670-5e1d-8bc7-c1eb66351edb',
  '69f5b33d-ba22-5f30-8b47-7dbe66ca6b2b',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'da4ebce7-68b7-5aeb-8fcd-27e497eb4295',
  '69f5b33d-ba22-5f30-8b47-7dbe66ca6b2b',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'db1656ff-edc5-5041-a460-b30f83037cc6',
  'Repas - Guide Complet',
  'repas---guide-complet',
  'Découvrez repas en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre repas en France',
  'culture_codes_sociaux',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=44',
  '["Comprendre repas", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.4
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '8572b272-5962-5830-bebe-5d771d1f7b26',
  'db1656ff-edc5-5041-a460-b30f83037cc6',
  'Introduction à Repas',
  '# Introduction à Repas

Ce cours vous guide pas à pas dans repas.

## Pourquoi c''est important ?

Repas est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de repas
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0a97e516-df82-537b-8c1d-93afd3cd4326',
  'db1656ff-edc5-5041-a460-b30f83037cc6',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4c0c0ac8-7d73-5221-abe2-fbfb13a9c73c',
  'db1656ff-edc5-5041-a460-b30f83037cc6',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4b562630-09e3-53a8-9aaf-e114eae5a962',
  'db1656ff-edc5-5041-a460-b30f83037cc6',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd57733bd-12a2-5e86-b6c1-adc06073d1b7',
  'db1656ff-edc5-5041-a460-b30f83037cc6',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'a74489af-2d5f-5fc5-ac8b-d707a69567cf',
  'Cadeaux - Guide Complet',
  'cadeaux---guide-complet',
  'Découvrez cadeaux en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre cadeaux en France',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  1,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=45',
  '["Comprendre cadeaux", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '83ea9fb9-de55-5a0d-baf2-d63dd9deffd7',
  'a74489af-2d5f-5fc5-ac8b-d707a69567cf',
  'Introduction à Cadeaux',
  '# Introduction à Cadeaux

Ce cours vous guide pas à pas dans cadeaux.

## Pourquoi c''est important ?

Cadeaux est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de cadeaux
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'fe9b59bf-3b44-5d93-9541-0826d84422d1',
  'a74489af-2d5f-5fc5-ac8b-d707a69567cf',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'dd568274-4d8b-5e34-969c-ca7a1342d8fd',
  'a74489af-2d5f-5fc5-ac8b-d707a69567cf',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'bed05488-270c-57d4-97df-df677303b328',
  'Transport Paris - Guide Complet',
  'transport-paris---guide-complet',
  'Découvrez transport paris en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre transport paris en France',
  'culture_codes_sociaux',
  'intermediaire',
  'fr',
  1,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=46',
  '["Comprendre transport paris", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.6
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '20339a2c-69a3-529a-baf7-9fff8458f567',
  'bed05488-270c-57d4-97df-df677303b328',
  'Introduction à Transport Paris',
  '# Introduction à Transport Paris

Ce cours vous guide pas à pas dans transport paris.

## Pourquoi c''est important ?

Transport Paris est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de transport paris
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6c5e23b6-ef6d-544d-bb5d-aaeba8ae0f87',
  'bed05488-270c-57d4-97df-df677303b328',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '14c1a571-d403-54d3-9238-47573ff8198a',
  'bed05488-270c-57d4-97df-df677303b328',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd426e431-b6c1-5686-80d8-048ed91f751d',
  'bed05488-270c-57d4-97df-df677303b328',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'ec9e8d76-9a23-52c8-826b-4a8fe67a2eb7',
  'Carte Navigo - Guide Complet',
  'carte-navigo---guide-complet',
  'Découvrez carte navigo en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre carte navigo en France',
  'culture_codes_sociaux',
  'avance',
  'fr',
  2,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=47',
  '["Comprendre carte navigo", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.7
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2ea75410-3e7b-53f1-a9ce-c26271a9b76c',
  'ec9e8d76-9a23-52c8-826b-4a8fe67a2eb7',
  'Introduction à Carte Navigo',
  '# Introduction à Carte Navigo

Ce cours vous guide pas à pas dans carte navigo.

## Pourquoi c''est important ?

Carte Navigo est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de carte navigo
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '63730095-7f80-5fb6-8896-21717c745e92',
  'ec9e8d76-9a23-52c8-826b-4a8fe67a2eb7',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '8d1e490e-fefa-502c-aec2-bf15a2da955c',
  'ec9e8d76-9a23-52c8-826b-4a8fe67a2eb7',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '63aacda3-c0ef-5607-b746-402fc890c737',
  'ec9e8d76-9a23-52c8-826b-4a8fe67a2eb7',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '29e23c8d-0df4-566f-b812-a22a2fcf7db4',
  'ec9e8d76-9a23-52c8-826b-4a8fe67a2eb7',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '71f5186e-c87a-5677-af21-9dee20c73dd4',
  'Événements - Guide Complet',
  'evenements---guide-complet',
  'Découvrez événements en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre événements en France',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=48',
  '["Comprendre événements", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'fd9572fb-c5b2-543e-a28a-e50d6c112a90',
  '71f5186e-c87a-5677-af21-9dee20c73dd4',
  'Introduction à Événements',
  '# Introduction à Événements

Ce cours vous guide pas à pas dans événements.

## Pourquoi c''est important ?

Événements est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de événements
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '44d62948-8f26-5200-9798-283582e36008',
  '71f5186e-c87a-5677-af21-9dee20c73dd4',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2ccc5588-1407-5f6e-a254-5d128ec4a010',
  '71f5186e-c87a-5677-af21-9dee20c73dd4',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '024a2d17-ae36-5bef-be64-298a5e6f130b',
  'Fêtes - Guide Complet',
  'fêtes---guide-complet',
  'Découvrez fêtes en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre fêtes en France',
  'culture_codes_sociaux',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=49',
  '["Comprendre fêtes", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.9
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '093d55d9-cd35-502c-a900-4ec998d07aa2',
  '024a2d17-ae36-5bef-be64-298a5e6f130b',
  'Introduction à Fêtes',
  '# Introduction à Fêtes

Ce cours vous guide pas à pas dans fêtes.

## Pourquoi c''est important ?

Fêtes est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de fêtes
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0700f038-d479-55bc-8d05-054a97075885',
  '024a2d17-ae36-5bef-be64-298a5e6f130b',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2a2fa8b3-08ac-5297-af7e-7d246da540b7',
  '024a2d17-ae36-5bef-be64-298a5e6f130b',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '09e1276a-2f96-5a3c-9bad-667fc96b73f4',
  '024a2d17-ae36-5bef-be64-298a5e6f130b',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '97584e36-6e66-599f-a073-86d260b64b13',
  'Traditions - Guide Complet',
  'traditions---guide-complet',
  'Découvrez traditions en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre traditions en France',
  'culture_codes_sociaux',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=50',
  '["Comprendre traditions", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0a6796ab-fc13-5583-a148-f807e0b375a6',
  '97584e36-6e66-599f-a073-86d260b64b13',
  'Introduction à Traditions',
  '# Introduction à Traditions

Ce cours vous guide pas à pas dans traditions.

## Pourquoi c''est important ?

Traditions est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de traditions
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'cd1a8c1b-cc9a-57fb-8b3f-ecaf0c9b5745',
  '97584e36-6e66-599f-a073-86d260b64b13',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5c72fba1-5dd8-5baa-a398-0cf8941da451',
  '97584e36-6e66-599f-a073-86d260b64b13',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '760b7d1a-5d6b-511b-a32c-9556b46202c6',
  '97584e36-6e66-599f-a073-86d260b64b13',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '198649c3-a2b4-5f94-84e2-2ff9b68da084',
  '97584e36-6e66-599f-a073-86d260b64b13',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'c8740d55-3f25-5cc4-8807-6a1a5c9cca48',
  'Histoire France - Guide Complet',
  'histoire-france---guide-complet',
  'Découvrez histoire france en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre histoire france en France',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=51',
  '["Comprendre histoire france", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.1
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '59594a08-1863-5bad-81f0-c3ec6258cd7a',
  'c8740d55-3f25-5cc4-8807-6a1a5c9cca48',
  'Introduction à Histoire France',
  '# Introduction à Histoire France

Ce cours vous guide pas à pas dans histoire france.

## Pourquoi c''est important ?

Histoire France est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de histoire france
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a4d06ad1-5b6d-5e5b-badd-b3c998965ea0',
  'c8740d55-3f25-5cc4-8807-6a1a5c9cca48',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2c636e34-321f-581c-8194-c4d75834ccc3',
  'c8740d55-3f25-5cc4-8807-6a1a5c9cca48',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '8d075147-3d4c-533a-9ce4-52cb42c678ce',
  'Géographie - Guide Complet',
  'geographie---guide-complet',
  'Découvrez géographie en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre géographie en France',
  'culture_codes_sociaux',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=52',
  '["Comprendre géographie", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.2
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '75fed551-72e5-566c-b384-719a29f059d4',
  '8d075147-3d4c-533a-9ce4-52cb42c678ce',
  'Introduction à Géographie',
  '# Introduction à Géographie

Ce cours vous guide pas à pas dans géographie.

## Pourquoi c''est important ?

Géographie est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de géographie
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '533fefe3-b468-5e75-a9ed-90a47114c7f6',
  '8d075147-3d4c-533a-9ce4-52cb42c678ce',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5f245e75-c756-57fd-a093-b469b48b9711',
  '8d075147-3d4c-533a-9ce4-52cb42c678ce',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '3c5b2071-a001-5c25-acfa-d143751644da',
  '8d075147-3d4c-533a-9ce4-52cb42c678ce',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '0dc01311-ce32-5306-bcec-343272734361',
  'Régions - Guide Complet',
  'regions---guide-complet',
  'Découvrez régions en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre régions en France',
  'culture_codes_sociaux',
  'avance',
  'fr',
  2,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=53',
  '["Comprendre régions", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.3
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '23eb69f1-3921-50ac-80df-4170eb150ffc',
  '0dc01311-ce32-5306-bcec-343272734361',
  'Introduction à Régions',
  '# Introduction à Régions

Ce cours vous guide pas à pas dans régions.

## Pourquoi c''est important ?

Régions est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de régions
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6d941740-ef00-540a-b201-8554b0d48422',
  '0dc01311-ce32-5306-bcec-343272734361',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '58bd804e-8437-59ea-80c8-d37573bc4831',
  '0dc01311-ce32-5306-bcec-343272734361',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '8f762ee8-0c63-546c-8990-6436ceae290d',
  '0dc01311-ce32-5306-bcec-343272734361',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '26c0fd9b-725a-5d81-8c9c-13db7307beb3',
  '0dc01311-ce32-5306-bcec-343272734361',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'ccec44b2-962f-55b3-b8c6-c5c615497718',
  'Patrimoine - Guide Complet',
  'patrimoine---guide-complet',
  'Découvrez patrimoine en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre patrimoine en France',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  1,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=54',
  '["Comprendre patrimoine", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.4
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1befc31c-1519-594e-a7b7-5643358faa47',
  'ccec44b2-962f-55b3-b8c6-c5c615497718',
  'Introduction à Patrimoine',
  '# Introduction à Patrimoine

Ce cours vous guide pas à pas dans patrimoine.

## Pourquoi c''est important ?

Patrimoine est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de patrimoine
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '14d2ed28-92ec-5486-95fc-88cba4dc333e',
  'ccec44b2-962f-55b3-b8c6-c5c615497718',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '553a4a99-c408-5112-8f19-a33baf2615d5',
  'ccec44b2-962f-55b3-b8c6-c5c615497718',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'e6cfbd6e-34ca-5d4a-8960-cfae74361ad1',
  'Art - Guide Complet',
  'art---guide-complet',
  'Découvrez art en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.',
  'Comprendre art en France',
  'culture_codes_sociaux',
  'intermediaire',
  'fr',
  1,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=55',
  '["Comprendre art", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2c245a08-36f7-5905-9ddd-e8e6343d4c0b',
  'e6cfbd6e-34ca-5d4a-8960-cfae74361ad1',
  'Introduction à Art',
  '# Introduction à Art

Ce cours vous guide pas à pas dans art.

## Pourquoi c''est important ?

Art est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de art
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6d4bc358-3ca4-576b-b0ff-2f13f13ed9f0',
  'e6cfbd6e-34ca-5d4a-8960-cfae74361ad1',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6ec2b278-b906-5839-aab1-ff961200cb35',
  'e6cfbd6e-34ca-5d4a-8960-cfae74361ad1',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '59a08cc9-fba5-5713-a9dc-191127569133',
  'e6cfbd6e-34ca-5d4a-8960-cfae74361ad1',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '4b7a2635-af6f-5f51-8a25-c05a67490caa',
  'CV Français - Guide Complet',
  'cv-francais---guide-complet',
  'Maîtrisez cv français pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir cv français',
  'insertion_professionnelle',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=56',
  '["Comprendre cv français", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.6
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '336b5754-1358-53bd-b2d7-6b2f396dbd27',
  '4b7a2635-af6f-5f51-8a25-c05a67490caa',
  'Introduction à CV Français',
  '# Introduction à CV Français

Ce cours vous guide pas à pas dans cv français.

## Pourquoi c''est important ?

CV Français est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de cv français
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## 📚 Ressources Officielles

- [Delf](https://www.france-education-international.fr/diplome/delf-dalf)
- [Ciel](https://www.ciep.fr/delf-dalf)


## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'bf26bee1-ea39-58e5-a34e-ce8d5da014a1',
  '4b7a2635-af6f-5f51-8a25-c05a67490caa',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0751e56f-7165-54ba-ae0d-d34c659fdcbc',
  '4b7a2635-af6f-5f51-8a25-c05a67490caa',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'fa707642-46b0-5e83-8a16-75d20505e40c',
  '4b7a2635-af6f-5f51-8a25-c05a67490caa',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7490dff0-e9e5-51ab-b484-46f2c1b2334a',
  '4b7a2635-af6f-5f51-8a25-c05a67490caa',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '8e12ddbb-112e-585d-b9c6-3e788c6c7092',
  'Lettre Motivation - Guide Complet',
  'lettre-motivation---guide-complet',
  'Maîtrisez lettre motivation pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir lettre motivation',
  'insertion_professionnelle',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=57',
  '["Comprendre lettre motivation", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.7
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'e2fd1e9a-fd33-530a-9707-4fcfa1e595e5',
  '8e12ddbb-112e-585d-b9c6-3e788c6c7092',
  'Introduction à Lettre Motivation',
  '# Introduction à Lettre Motivation

Ce cours vous guide pas à pas dans lettre motivation.

## Pourquoi c''est important ?

Lettre Motivation est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de lettre motivation
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '38733562-846e-5e6d-bb10-65b6273c4a32',
  '8e12ddbb-112e-585d-b9c6-3e788c6c7092',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '08261bb0-c3a5-5dae-b995-0e2e4f6b5130',
  '8e12ddbb-112e-585d-b9c6-3e788c6c7092',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '393674c5-fb47-5c89-9769-63f523f7db83',
  'Entretien - Guide Complet',
  'entretien---guide-complet',
  'Maîtrisez entretien pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir entretien',
  'insertion_professionnelle',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=58',
  '["Comprendre entretien", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd5ca0179-918d-5973-ae70-d6db06a338e8',
  '393674c5-fb47-5c89-9769-63f523f7db83',
  'Introduction à Entretien',
  '# Introduction à Entretien

Ce cours vous guide pas à pas dans entretien.

## Pourquoi c''est important ?

Entretien est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de entretien
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '30f82afc-4bdd-5224-8214-b4530e355237',
  '393674c5-fb47-5c89-9769-63f523f7db83',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a2c14a68-9bb0-59b6-a43f-9aad136493b3',
  '393674c5-fb47-5c89-9769-63f523f7db83',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6217f350-bf4a-5dfb-a12c-dfd02283947f',
  '393674c5-fb47-5c89-9769-63f523f7db83',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '30874e2f-2f80-54d9-b3b7-978c1556c4f4',
  'LinkedIn - Guide Complet',
  'linkedin---guide-complet',
  'Maîtrisez linkedin pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir linkedin',
  'insertion_professionnelle',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=59',
  '["Comprendre linkedin", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.9
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5d05d887-f718-5a17-bbef-cd656c0fc844',
  '30874e2f-2f80-54d9-b3b7-978c1556c4f4',
  'Introduction à LinkedIn',
  '# Introduction à LinkedIn

Ce cours vous guide pas à pas dans linkedin.

## Pourquoi c''est important ?

LinkedIn est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de linkedin
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '55021a3e-2ab2-5da9-9d58-6d2276942ce9',
  '30874e2f-2f80-54d9-b3b7-978c1556c4f4',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4f90feb4-fc39-5ff4-bec9-c4350ee32780',
  '30874e2f-2f80-54d9-b3b7-978c1556c4f4',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'af583e54-bf2c-5dc7-81e7-9ea75972d730',
  '30874e2f-2f80-54d9-b3b7-978c1556c4f4',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '24667a90-163d-585d-a549-9ff03373aa0e',
  '30874e2f-2f80-54d9-b3b7-978c1556c4f4',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'efa2d432-d51b-54ba-88c0-794c252488f0',
  'Réseau - Guide Complet',
  'reseau---guide-complet',
  'Maîtrisez réseau pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir réseau',
  'insertion_professionnelle',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=60',
  '["Comprendre réseau", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0fdad1ee-4032-5d26-b512-6d870a429fd4',
  'efa2d432-d51b-54ba-88c0-794c252488f0',
  'Introduction à Réseau',
  '# Introduction à Réseau

Ce cours vous guide pas à pas dans réseau.

## Pourquoi c''est important ?

Réseau est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de réseau
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'cd77715d-810c-58d7-bd15-64fb337bdaaa',
  'efa2d432-d51b-54ba-88c0-794c252488f0',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c885bb9a-72a4-543b-893b-c1e6b9f5dea2',
  'efa2d432-d51b-54ba-88c0-794c252488f0',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'c7ef3fd4-af73-5414-8191-90ea2b46bd8b',
  'Stage - Guide Complet',
  'stage---guide-complet',
  'Maîtrisez stage pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir stage',
  'insertion_professionnelle',
  'intermediaire',
  'fr',
  1,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=61',
  '["Comprendre stage", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.1
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b4623a60-3b8f-5c2d-b46c-59fad2cadeaf',
  'c7ef3fd4-af73-5414-8191-90ea2b46bd8b',
  'Introduction à Stage',
  '# Introduction à Stage

Ce cours vous guide pas à pas dans stage.

## Pourquoi c''est important ?

Stage est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de stage
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd3ffb940-9768-5db2-a945-6385bb42aea5',
  'c7ef3fd4-af73-5414-8191-90ea2b46bd8b',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '1a4565a7-82a7-505b-ac68-74db83b6f6e3',
  'c7ef3fd4-af73-5414-8191-90ea2b46bd8b',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd102f7a2-8609-5b95-a710-7eb63ffab68b',
  'c7ef3fd4-af73-5414-8191-90ea2b46bd8b',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '3b980880-fdf0-5868-956c-877291bd547b',
  'Alternance - Guide Complet',
  'alternance---guide-complet',
  'Maîtrisez alternance pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir alternance',
  'insertion_professionnelle',
  'avance',
  'fr',
  2,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=62',
  '["Comprendre alternance", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.2
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd2cdd35c-7a07-553d-8e80-35baf0b0f27b',
  '3b980880-fdf0-5868-956c-877291bd547b',
  'Introduction à Alternance',
  '# Introduction à Alternance

Ce cours vous guide pas à pas dans alternance.

## Pourquoi c''est important ?

Alternance est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de alternance
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '01dbd2fc-59de-56b0-9e5d-ca8976222f18',
  '3b980880-fdf0-5868-956c-877291bd547b',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'fffe27a4-cfd3-5532-a739-40d93375eefc',
  '3b980880-fdf0-5868-956c-877291bd547b',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '45207f74-49e3-53d5-a019-730ca3861271',
  '3b980880-fdf0-5868-956c-877291bd547b',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c2e86b0c-877a-5e68-967a-68fadbf6ba69',
  '3b980880-fdf0-5868-956c-877291bd547b',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '9216c13d-7986-5cd9-acf4-64708d4e4de8',
  'CDD - Guide Complet',
  'cdd---guide-complet',
  'Maîtrisez cdd pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir cdd',
  'insertion_professionnelle',
  'debutant',
  'fr',
  1,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=63',
  '["Comprendre cdd", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.3
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5c2284dd-6625-5fda-82c8-48ad00c0ceaa',
  '9216c13d-7986-5cd9-acf4-64708d4e4de8',
  'Introduction à CDD',
  '# Introduction à CDD

Ce cours vous guide pas à pas dans cdd.

## Pourquoi c''est important ?

CDD est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de cdd
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b1a0542e-88dd-51b2-a9b2-295089846747',
  '9216c13d-7986-5cd9-acf4-64708d4e4de8',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c7aa6d75-a418-59de-b609-65f75f28893a',
  '9216c13d-7986-5cd9-acf4-64708d4e4de8',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'd03c8d50-df4d-5b4f-98f9-98ecf09dfe08',
  'CDI - Guide Complet',
  'cdi---guide-complet',
  'Maîtrisez cdi pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir cdi',
  'insertion_professionnelle',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=64',
  '["Comprendre cdi", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.4
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '3d89f084-149a-5054-a40d-bc2628f01314',
  'd03c8d50-df4d-5b4f-98f9-98ecf09dfe08',
  'Introduction à CDI',
  '# Introduction à CDI

Ce cours vous guide pas à pas dans cdi.

## Pourquoi c''est important ?

CDI est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de cdi
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c49bae51-ca12-5bb5-871d-6d425f6b2f7b',
  'd03c8d50-df4d-5b4f-98f9-98ecf09dfe08',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'e9d9d168-38bf-5327-abe4-0abb4d04a2a2',
  'd03c8d50-df4d-5b4f-98f9-98ecf09dfe08',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0348f079-de97-51ba-ac03-17d320cf525d',
  'd03c8d50-df4d-5b4f-98f9-98ecf09dfe08',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '9d552d35-dfd6-5108-a9e2-17d9ea545eb3',
  'Freelance - Guide Complet',
  'freelance---guide-complet',
  'Maîtrisez freelance pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir freelance',
  'insertion_professionnelle',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=65',
  '["Comprendre freelance", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'fb0a4eab-b1ef-5352-945a-941bda09477e',
  '9d552d35-dfd6-5108-a9e2-17d9ea545eb3',
  'Introduction à Freelance',
  '# Introduction à Freelance

Ce cours vous guide pas à pas dans freelance.

## Pourquoi c''est important ?

Freelance est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de freelance
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '23baa1d2-6262-5b3b-9076-6342fd70f5f1',
  '9d552d35-dfd6-5108-a9e2-17d9ea545eb3',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '6f72b9f1-0401-50a8-b5ef-45f696ed1d41',
  '9d552d35-dfd6-5108-a9e2-17d9ea545eb3',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f8fbc507-f2c3-5d65-bdae-745bc149de4d',
  '9d552d35-dfd6-5108-a9e2-17d9ea545eb3',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b4c1f2f0-2b5e-53ae-8695-5429d9e9e44d',
  '9d552d35-dfd6-5108-a9e2-17d9ea545eb3',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'ca164036-fe9d-511c-92dd-199bf18cbb53',
  'Salaire - Guide Complet',
  'salaire---guide-complet',
  'Maîtrisez salaire pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir salaire',
  'insertion_professionnelle',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=66',
  '["Comprendre salaire", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.6
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0e289dbb-a7dc-5040-9d7b-42c40d913661',
  'ca164036-fe9d-511c-92dd-199bf18cbb53',
  'Introduction à Salaire',
  '# Introduction à Salaire

Ce cours vous guide pas à pas dans salaire.

## Pourquoi c''est important ?

Salaire est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de salaire
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '98219732-f66d-5b7d-a59b-8e4c5112235c',
  'ca164036-fe9d-511c-92dd-199bf18cbb53',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '3dddf198-4bdb-5fc3-95f6-7276111cee5c',
  'ca164036-fe9d-511c-92dd-199bf18cbb53',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'bb04d730-b42d-5df9-bc28-3e6ef5a07d34',
  'Négociation - Guide Complet',
  'negociation---guide-complet',
  'Maîtrisez négociation pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir négociation',
  'insertion_professionnelle',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=67',
  '["Comprendre négociation", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.7
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '91a4e2cb-8ec0-50e9-9be5-001f8f926417',
  'bb04d730-b42d-5df9-bc28-3e6ef5a07d34',
  'Introduction à Négociation',
  '# Introduction à Négociation

Ce cours vous guide pas à pas dans négociation.

## Pourquoi c''est important ?

Négociation est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de négociation
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '562f58f2-8c87-566e-90b4-af895dd05166',
  'bb04d730-b42d-5df9-bc28-3e6ef5a07d34',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '76031318-df79-5786-96a6-299ca3c6e66a',
  'bb04d730-b42d-5df9-bc28-3e6ef5a07d34',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '39c2c7e3-4ac2-572c-af63-5f5be9969616',
  'bb04d730-b42d-5df9-bc28-3e6ef5a07d34',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '98f496f7-8ee5-5cc2-9518-ca08b474bed9',
  'Droits Travail - Guide Complet',
  'droits-travail---guide-complet',
  'Maîtrisez droits travail pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir droits travail',
  'insertion_professionnelle',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=68',
  '["Comprendre droits travail", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '675f6539-c6e0-5909-98ba-9512211e0b54',
  '98f496f7-8ee5-5cc2-9518-ca08b474bed9',
  'Introduction à Droits Travail',
  '# Introduction à Droits Travail

Ce cours vous guide pas à pas dans droits travail.

## Pourquoi c''est important ?

Droits Travail est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de droits travail
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'bfb19ee8-020d-5cbe-a4f0-9db8a2d56efd',
  '98f496f7-8ee5-5cc2-9518-ca08b474bed9',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '8c67cbb3-afdf-5b24-af4f-5b1c4c095743',
  '98f496f7-8ee5-5cc2-9518-ca08b474bed9',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0d231260-8886-57e1-9566-239f7f27b092',
  '98f496f7-8ee5-5cc2-9518-ca08b474bed9',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '944b7b7d-8bb2-5fd9-bd01-f49137df24b0',
  '98f496f7-8ee5-5cc2-9518-ca08b474bed9',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '356db2e0-9f67-58fb-8a2e-6f71f6dbeb0b',
  'Congés - Guide Complet',
  'conges---guide-complet',
  'Maîtrisez congés pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir congés',
  'insertion_professionnelle',
  'debutant',
  'fr',
  1,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=69',
  '["Comprendre congés", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.9
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f4b66405-b2c6-5ba6-94ac-a3c7f8197221',
  '356db2e0-9f67-58fb-8a2e-6f71f6dbeb0b',
  'Introduction à Congés',
  '# Introduction à Congés

Ce cours vous guide pas à pas dans congés.

## Pourquoi c''est important ?

Congés est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de congés
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '29c3c292-9e40-54da-bc7f-bcd897631d68',
  '356db2e0-9f67-58fb-8a2e-6f71f6dbeb0b',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7fdc11d2-a310-5b6b-9258-51aa341ffbfd',
  '356db2e0-9f67-58fb-8a2e-6f71f6dbeb0b',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '253337de-db98-5e5d-bdbb-78a80040cbbb',
  'Télétravail - Guide Complet',
  'teletravail---guide-complet',
  'Maîtrisez télétravail pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.',
  'Réussir télétravail',
  'insertion_professionnelle',
  'intermediaire',
  'fr',
  1,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=70',
  '["Comprendre télétravail", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'b3e8267f-512f-5a9a-bd3d-8f79d5b874f4',
  '253337de-db98-5e5d-bdbb-78a80040cbbb',
  'Introduction à Télétravail',
  '# Introduction à Télétravail

Ce cours vous guide pas à pas dans télétravail.

## Pourquoi c''est important ?

Télétravail est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de télétravail
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '07725bc2-2ef4-5331-95d3-5a04827f8ade',
  '253337de-db98-5e5d-bdbb-78a80040cbbb',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2bdb3960-595d-5882-9deb-f07e3cda1a97',
  '253337de-db98-5e5d-bdbb-78a80040cbbb',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '07682f6b-fbaf-580a-967e-7e9984735359',
  '253337de-db98-5e5d-bdbb-78a80040cbbb',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'db213c5d-b726-501d-94a3-8729e04bcb1e',
  'Concours Administratifs - Guide Complet',
  'concours-administratifs---guide-complet',
  'Préparez-vous efficacement au concours administratifs. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation concours administratifs',
  'formations_professionnelles',
  'avance',
  'fr',
  2,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=71',
  '["Comprendre concours administratifs", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.1
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd89e8766-b003-5993-aafd-f32ed5df0d3e',
  'db213c5d-b726-501d-94a3-8729e04bcb1e',
  'Introduction à Concours Administratifs',
  '# Introduction à Concours Administratifs

Ce cours vous guide pas à pas dans concours administratifs.

## Pourquoi c''est important ?

Concours Administratifs est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de concours administratifs
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '21f2d9cb-2e80-525e-8387-21b786097007',
  'db213c5d-b726-501d-94a3-8729e04bcb1e',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5d46bad3-d7ef-5d90-8a2d-005c9f7eda16',
  'db213c5d-b726-501d-94a3-8729e04bcb1e',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '21a0ba12-4a60-51fe-a98c-8df5f6c952b8',
  'db213c5d-b726-501d-94a3-8729e04bcb1e',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'dfbb41da-803e-5f73-bd18-81187eb91ee0',
  'db213c5d-b726-501d-94a3-8729e04bcb1e',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '31b91a8b-8235-504e-9e9d-b70d6ab86f9e',
  'IFSI - Guide Complet',
  'ifsi---guide-complet',
  'Préparez-vous efficacement au ifsi. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation ifsi',
  'formations_professionnelles',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=72',
  '["Comprendre ifsi", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.2
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'ccd04739-12a4-5ac9-bf94-951677a2abae',
  '31b91a8b-8235-504e-9e9d-b70d6ab86f9e',
  'Introduction à IFSI',
  '# Introduction à IFSI

Ce cours vous guide pas à pas dans ifsi.

## Pourquoi c''est important ?

IFSI est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de ifsi
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'a984498b-b86a-5564-8fdb-72970df565a7',
  '31b91a8b-8235-504e-9e9d-b70d6ab86f9e',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '44332ad2-8887-55f1-81b1-e2a41cc605c8',
  '31b91a8b-8235-504e-9e9d-b70d6ab86f9e',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '6b4abb06-3175-53b0-97a4-858e5774101e',
  'Gendarmerie - Guide Complet',
  'gendarmerie---guide-complet',
  'Préparez-vous efficacement au gendarmerie. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation gendarmerie',
  'formations_professionnelles',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=73',
  '["Comprendre gendarmerie", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.3
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'cf55d24d-3e7d-5bfd-bd4d-2bbaf4372d5c',
  '6b4abb06-3175-53b0-97a4-858e5774101e',
  'Introduction à Gendarmerie',
  '# Introduction à Gendarmerie

Ce cours vous guide pas à pas dans gendarmerie.

## Pourquoi c''est important ?

Gendarmerie est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de gendarmerie
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '507f5749-0788-5ef2-b6a8-dde2c25f1cdf',
  '6b4abb06-3175-53b0-97a4-858e5774101e',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '11989b33-d0a6-5172-a6d6-d57db3e740f2',
  '6b4abb06-3175-53b0-97a4-858e5774101e',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4c00e915-b316-525a-8f80-1e6cd4948d4a',
  '6b4abb06-3175-53b0-97a4-858e5774101e',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '3891b2b0-553e-53a8-b223-698d5816409b',
  'Police - Guide Complet',
  'police---guide-complet',
  'Préparez-vous efficacement au police. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation police',
  'formations_professionnelles',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=74',
  '["Comprendre police", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.4
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f694705d-ae85-5750-ad1c-aecf2f49bda3',
  '3891b2b0-553e-53a8-b223-698d5816409b',
  'Introduction à Police',
  '# Introduction à Police

Ce cours vous guide pas à pas dans police.

## Pourquoi c''est important ?

Police est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de police
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c792b703-b3dc-583b-9a88-e08a6fdfcca3',
  '3891b2b0-553e-53a8-b223-698d5816409b',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'd2304946-70a1-5beb-bfb4-827217f2bce6',
  '3891b2b0-553e-53a8-b223-698d5816409b',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'c5ab2f0c-d15f-5d03-a95f-c4654ce8c38b',
  '3891b2b0-553e-53a8-b223-698d5816409b',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f14cf722-8cc7-5936-a6ab-2b655b87d9fb',
  '3891b2b0-553e-53a8-b223-698d5816409b',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '8ea16789-207e-588d-9004-6c7d398c4d98',
  'Douanes - Guide Complet',
  'douanes---guide-complet',
  'Préparez-vous efficacement au douanes. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation douanes',
  'formations_professionnelles',
  'debutant',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=75',
  '["Comprendre douanes", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4ff85119-61c2-545e-912f-bbaeae192944',
  '8ea16789-207e-588d-9004-6c7d398c4d98',
  'Introduction à Douanes',
  '# Introduction à Douanes

Ce cours vous guide pas à pas dans douanes.

## Pourquoi c''est important ?

Douanes est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de douanes
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '29eb6b8d-663d-529a-ad23-45d05bcee2d6',
  '8ea16789-207e-588d-9004-6c7d398c4d98',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '4f46e842-60fb-5cec-92c7-b51107c6f3c1',
  '8ea16789-207e-588d-9004-6c7d398c4d98',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'b03eddf2-162b-5bd5-a5df-d4fccc0d038c',
  'Pompier - Guide Complet',
  'pompier---guide-complet',
  'Préparez-vous efficacement au pompier. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation pompier',
  'formations_professionnelles',
  'intermediaire',
  'fr',
  1,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=76',
  '["Comprendre pompier", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.6
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'ebd6c6d2-5f23-51ea-9bee-ab3c01c850c9',
  'b03eddf2-162b-5bd5-a5df-d4fccc0d038c',
  'Introduction à Pompier',
  '# Introduction à Pompier

Ce cours vous guide pas à pas dans pompier.

## Pourquoi c''est important ?

Pompier est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de pompier
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0702b46b-0b43-5e90-a41e-d64b4cca468a',
  'b03eddf2-162b-5bd5-a5df-d4fccc0d038c',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '782cc4ed-b366-5864-8105-2e1e6e6f538c',
  'b03eddf2-162b-5bd5-a5df-d4fccc0d038c',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f4450991-8f41-5a72-95d0-6e56ebf0deb0',
  'b03eddf2-162b-5bd5-a5df-d4fccc0d038c',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '8e9e8ecc-ba25-5d72-9927-e8bc02bbccce',
  'Sapeur - Guide Complet',
  'sapeur---guide-complet',
  'Préparez-vous efficacement au sapeur. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation sapeur',
  'formations_professionnelles',
  'avance',
  'fr',
  2,
  29,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=77',
  '["Comprendre sapeur", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.7
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '84340f81-b5e3-5e23-85f7-e4dcdab151fa',
  '8e9e8ecc-ba25-5d72-9927-e8bc02bbccce',
  'Introduction à Sapeur',
  '# Introduction à Sapeur

Ce cours vous guide pas à pas dans sapeur.

## Pourquoi c''est important ?

Sapeur est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de sapeur
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '7a3df782-56b6-549f-8db0-92b4096dbca9',
  '8e9e8ecc-ba25-5d72-9927-e8bc02bbccce',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '5a193c03-fe51-50d5-b595-2096ec8726d9',
  '8e9e8ecc-ba25-5d72-9927-e8bc02bbccce',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '0c16a274-391a-5673-84f2-b43235ea246c',
  '8e9e8ecc-ba25-5d72-9927-e8bc02bbccce',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'fcc1a673-3ce0-5653-98ee-44ba56e57445',
  '8e9e8ecc-ba25-5d72-9927-e8bc02bbccce',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'f58bb291-260b-51f2-88f6-d84f64095520',
  'Magistrat - Guide Complet',
  'magistrat---guide-complet',
  'Préparez-vous efficacement au magistrat. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation magistrat',
  'formations_professionnelles',
  'debutant',
  'fr',
  1,
  39,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=78',
  '["Comprendre magistrat", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '9e566e99-5f1c-563a-85bd-9ef39027bfeb',
  'f58bb291-260b-51f2-88f6-d84f64095520',
  'Introduction à Magistrat',
  '# Introduction à Magistrat

Ce cours vous guide pas à pas dans magistrat.

## Pourquoi c''est important ?

Magistrat est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de magistrat
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '460e9c8c-77f3-592a-a926-cd3121fb73dd',
  'f58bb291-260b-51f2-88f6-d84f64095520',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '16f8e0cd-6838-5166-aadd-04c6abf97336',
  'f58bb291-260b-51f2-88f6-d84f64095520',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  'e73c1cd6-4086-5df9-8d38-117834200998',
  'Avocat - Guide Complet',
  'avocat---guide-complet',
  'Préparez-vous efficacement au avocat. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation avocat',
  'formations_professionnelles',
  'intermediaire',
  'fr',
  1,
  49,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=79',
  '["Comprendre avocat", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.9
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '679e0dc2-9d0c-544a-89cb-2535fc5b47ed',
  'e73c1cd6-4086-5df9-8d38-117834200998',
  'Introduction à Avocat',
  '# Introduction à Avocat

Ce cours vous guide pas à pas dans avocat.

## Pourquoi c''est important ?

Avocat est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de avocat
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'f12a6ca1-f601-51d8-873a-c9c2c68262b9',
  'e73c1cd6-4086-5df9-8d38-117834200998',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2a364445-aa74-55fa-98f8-88e18119f020',
  'e73c1cd6-4086-5df9-8d38-117834200998',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '161697a6-f46a-5b47-9fa9-d1a4d7425176',
  'e73c1cd6-4086-5df9-8d38-117834200998',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES
(
  '780224dd-7001-59cc-9261-8212529e5f7d',
  'Professeur - Guide Complet',
  'professeur---guide-complet',
  'Préparez-vous efficacement au professeur. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours.',
  'Préparation professeur',
  'formations_professionnelles',
  'avance',
  'fr',
  2,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=80',
  '["Comprendre professeur", "Maîtriser les démarches pratiques", "Éviter les erreurs courantes", "Optimiser vos chances de réussite"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '9a4a72ac-8fbe-5f76-b131-1580d393d2d7',
  '780224dd-7001-59cc-9261-8212529e5f7d',
  'Introduction à Professeur',
  '# Introduction à Professeur

Ce cours vous guide pas à pas dans professeur.

## Pourquoi c''est important ?

Professeur est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de professeur
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.',
  1,
  15
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  'cef94799-96ad-5b05-98e4-62a05c0612d0',
  '780224dd-7001-59cc-9261-8212529e5f7d',
  'Les démarches pratiques',
  '# Les démarches pratiques

## Étapes à suivre

1. **Préparation**
   - Rassemblez vos documents
   - Vérifiez les délais
   - Préparez votre dossier

2. **Démarche**
   - Rendez-vous ou envoi
   - Suivi de votre dossier
   - Réponses aux demandes

3. **Suivi**
   - Consultation en ligne
   - Notifications
   - Finalisation

## Documents nécessaires

- Pièce d''identité
- Justificatifs requis
- Formulaires complétés',
  2,
  20
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '43a4d60d-4b1c-5d43-adcc-c2bcebe5002b',
  '780224dd-7001-59cc-9261-8212529e5f7d',
  'Documents et procédures',
  '# Documents et procédures

## Checklist des documents

- [ ] Document 1 : Description
- [ ] Document 2 : Description
- [ ] Document 3 : Description

## Où les obtenir ?

- **Document 1** : Lieu/méthode
- **Document 2** : Lieu/méthode
- **Document 3** : Lieu/méthode

## Conseils

- Tous les documents doivent être récents
- Photos nettes et lisibles
- Format PDF recommandé',
  3,
  25
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '52fc25fa-e061-5817-bfd9-646191658ed4',
  '780224dd-7001-59cc-9261-8212529e5f7d',
  'Conseils et bonnes pratiques',
  '# Conseils et bonnes pratiques

## Les erreurs à éviter

1. ❌ Erreur courante 1
2. ❌ Erreur courante 2
3. ❌ Erreur courante 3

## Les bonnes pratiques

1. ✅ Bonne pratique 1
2. ✅ Bonne pratique 2
3. ✅ Bonne pratique 3

## FAQ

**Q : Question fréquente ?**
R : Réponse détaillée.

**Q : Autre question ?**
R : Autre réponse.',
  4,
  30
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES
(
  '2a62d7ed-822e-55e5-9056-672055c13506',
  '780224dd-7001-59cc-9261-8212529e5f7d',
  'Résolution de problèmes courants',
  '# Résolution de problèmes courants

## Problème 1 : Description

**Solution :**
- Étape 1
- Étape 2
- Étape 3

## Problème 2 : Description

**Solution :**
- Étape 1
- Étape 2

## Contact et aide

Si vous rencontrez des difficultés :
- Consultez la FAQ
- Contactez le service concerné
- Utilisez notre forum d''entraide',
  5,
  35
) ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- POSTS FORUM
-- =====================================================

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '0d473c42-cbf6-57f5-88fc-ce7e6cb227b9',
  'Comment obtenir mon titre de séjour rapidement ?',
  'Je suis étudiante et mon titre de séjour expire dans 2 mois. J''ai commencé ma demande mais ça prend beaucoup de temps. Est-ce que quelqu''un peut me donner des conseils pour accélérer le processus ? Merci beaucoup !',
  'integration_administrative',
  'maria.silva@example.com',
  'Maria Silva',
  2,
  50,
  TRUE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '1b09ccc2-ebef-5b62-9fae-d2a6aedda06d',
  '0d473c42-cbf6-57f5-88fc-ce7e6cb227b9',
  'Salut ! J''ai renouvelé mon titre de séjour il y a 3 mois. Le truc important c''est de prendre le RDV en ligne DÈS que possible (les créneaux partent très vite). Ensuite, prépare TOUS tes documents 2 semaines avant pour éviter le stress.',
  'sophie.l@example.com',
  'Sophie L.',
  TRUE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '5af630b3-81d8-5cbf-a887-5269cbf9d0ff',
  '0d473c42-cbf6-57f5-88fc-ce7e6cb227b9',
  'Bonjour ! Un conseil qui m''a sauvé : fais des photos/scan de TOUS tes documents avant de les déposer à la préfecture. Comme ça si jamais il manque quelque chose, tu peux les imprimer rapidement sans refaire tout le dossier.',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '9b8b1299-dc2f-5b8e-ae3a-de77531b68c5',
  'Problème avec ma demande CAF, besoin d''aide',
  'Bonjour, j''ai fait ma demande CAF il y a 3 mois et je n''ai toujours pas de réponse. Mon dossier est complet selon eux. Est-ce normal ? Que puis-je faire ?',
  'integration_administrative',
  'ahmed.benali@example.com',
  'Ahmed Benali',
  3,
  60,
  TRUE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'd5aa9de3-e439-58b1-a8a3-9e6a0392575e',
  '9b8b1299-dc2f-5b8e-ae3a-de77531b68c5',
  'Salut ! 3 mois c''est effectivement long mais pas anormal malheureusement. Ce qui a marché pour moi : j''ai appelé la CAF tous les 15 jours pour relancer (pas trop souvent pour pas les embêter). Au 3ème appel, ils ont accéléré mon dossier. Le numéro : 0810 25 25 10 (numéro non surtaxé). Bon courage !',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  9
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '5669bc21-473b-5f0c-bec5-105ceccf9d78',
  '9b8b1299-dc2f-5b8e-ae3a-de77531b68c5',
  'Bonjour ! Attention, un conseil important : vérifie bien que ton RIB est un compte français. J''avais mis mon compte de mon pays d''origine et ça a tout retardé de 2 mois. Une fois corrigé, j''ai reçu l''APL rétroactivement, donc pas de perte, mais ça vaut le coup de vérifier !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '0567fd61-a9df-5f73-bf5d-02f47d453adc',
  '9b8b1299-dc2f-5b8e-ae3a-de77531b68c5',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Bonjour ! Attention, un conseil important : vérifie bien que ton RIB est un compte français. J''avais... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '173cb5ba-c871-55c8-8bc8-76a24bd9562f',
  'Quelle mutuelle étudiante choisir ?',
  'Je cherche une mutuelle étudiante pas chère mais qui couvre bien. Des recommandations ? J''ai vu LMDE, SMEREP, HEYME... laquelle choisir ?',
  'integration_administrative',
  'priya.sharma@example.com',
  'Priya Sharma',
  4,
  70,
  TRUE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'eab47266-25ee-580f-8e9f-10f328095033',
  '173cb5ba-c871-55c8-8bc8-76a24bd9562f',
  'Bonjour ! J''ai fait ma demande il y a 3 mois. Le délai normal c''est environ 3 semaines, mais ça peut prendre jusqu''à 2 mois selon les périodes. Le plus important c''est de créer ton compte ameli.fr dès que tu as ton numéro étudiant, comme ça tu peux suivre l''avancement en temps réel !',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  12
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'de8f45c5-2298-5cd7-87a0-2c59c178d04c',
  '173cb5ba-c871-55c8-8bc8-76a24bd9562f',
  'Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par courrier sous 2-3 semaines. Si elle n''arrive pas après 1 mois, appelle le 3646 (numéro gratuit) pour la réclamer. Ils te la renvoient rapidement !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  10
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'e3a1a217-4b77-5917-a4f0-2a3c16aeefba',
  '173cb5ba-c871-55c8-8bc8-76a24bd9562f',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par ... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'cf0de055-f603-59d6-ae82-8185b8744b40',
  '173cb5ba-c871-55c8-8bc8-76a24bd9562f',
  'Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive ...',
  'thomas.r@example.com',
  'Thomas R.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '0252c811-7c75-52db-bb6e-a312efbffb64',
  'Comment trouver un logement à Paris sans garant ?',
  'Salut ! Je suis nouveau à Paris et je cherche un studio. Le problème c''est que je n''ai pas de garant français. Est-ce possible de trouver quand même ?',
  'integration_administrative',
  'jean.dupont@example.com',
  'Jean Dupont',
  2,
  80,
  FALSE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '25878249-887e-539b-928a-f4cfd8daf075',
  '0252c811-7c75-52db-bb6e-a312efbffb64',
  'Coucou ! Oui c''est possible ! J''étais dans la même situation. Deux solutions qui marchent : 1) Visale (garantie gratuite de l''État) - tu peux la demander sur actionlogement.fr, 2) Certaines banques proposent des garanties pour étudiants. J''ai utilisé celle de Boursorama, c''est rapide et pas cher. Ça vaut vraiment le coup d''essayer !',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'f231d709-46d0-5dd0-84a7-85d117b8a878',
  '0252c811-7c75-52db-bb6e-a312efbffb64',
  'Salut ! Pour le garant, tu peux essayer Visale (c''est gratuit et ça fonctionne bien). Sinon, certaines banques proposent des garanties locatives pour étudiants. J''ai utilisé celle de la BNP et ça m''a sauvé !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '4977e849-ca23-57f9-bdf1-1e41c48f6b84',
  'Difficultés pour ouvrir un compte bancaire',
  'Bonjour, j''ai essayé d''ouvrir un compte dans plusieurs banques mais elles me demandent toutes un justificatif de domicile de plus de 3 mois. Je viens d''arriver ! Que faire ?',
  'integration_administrative',
  'sophie.martin@example.com',
  'Sophie Martin',
  3,
  90,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'cbc3ca1e-8965-500a-8aa3-5524f2b20979',
  '4977e849-ca23-57f9-bdf1-1e41c48f6b84',
  'Hello ! Même problème ici ! La solution : certaines banques en ligne (N26, Revolut, Boursorama) acceptent des justificatifs de moins de 3 mois, voire même une attestation d''hébergement. J''ai ouvert mon compte Boursorama avec juste une attestation d''hébergement signée par mon colocataire. Essaye ça, c''est beaucoup plus simple !',
  'sophie.l@example.com',
  'Sophie L.',
  TRUE,
  9
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '16b6be30-11ba-5838-9f6f-8530b1f169ff',
  '4977e849-ca23-57f9-bdf1-1e41c48f6b84',
  'Salut ! Pour le garant, tu peux essayer Visale (c''est gratuit et ça fonctionne bien). Sinon, certaines banques proposent des garanties locatives pour étudiants. J''ai utilisé celle de la BNP et ça m''a sauvé !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '47fbe9b0-f597-55d4-ad45-20a7c5e6a3f5',
  '4977e849-ca23-57f9-bdf1-1e41c48f6b84',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Salut ! Pour le garant, tu peux essayer Visale (c''est gratuit et ça fonctionne bien). Sinon, certain... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '4be15efb-482e-5591-948c-aed49937f904',
  'Comprendre le système de santé français',
  'Quelqu''un peut m''expliquer comment fonctionne vraiment le système de santé ici ? Carte Vitale, mutuelle, remboursements... je suis un peu perdu.',
  'integration_administrative',
  'carlos.rodriguez@example.com',
  'Carlos Rodriguez',
  4,
  100,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'c4c0dd99-1f7b-50d9-a3a8-ce738f892b41',
  '4be15efb-482e-5591-948c-aed49937f904',
  'Bonjour ! J''ai fait ma demande il y a 3 mois. Le délai normal c''est environ 3 semaines, mais ça peut prendre jusqu''à 2 mois selon les périodes. Le plus important c''est de créer ton compte ameli.fr dès que tu as ton numéro étudiant, comme ça tu peux suivre l''avancement en temps réel !',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  12
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'f70bcd7b-d255-523e-af2f-d415943168b9',
  '4be15efb-482e-5591-948c-aed49937f904',
  'Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par courrier sous 2-3 semaines. Si elle n''arrive pas après 1 mois, appelle le 3646 (numéro gratuit) pour la réclamer. Ils te la renvoient rapidement !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  10
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '24c3fb59-11d3-5954-9767-58c777014e28',
  '4be15efb-482e-5591-948c-aed49937f904',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par ... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'd7659e4e-3fd3-5d61-84d6-fa520361f0f7',
  '4be15efb-482e-5591-948c-aed49937f904',
  'Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive ...',
  'thomas.r@example.com',
  'Thomas R.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'f6af59a3-67d6-5abe-8238-7cd32053cad4',
  'Comment réussir son DELF B2 ?',
  'Je passe le DELF B2 dans 3 mois. J''ai besoin de conseils pour la préparation. Quels sont les pièges à éviter ? Des ressources à recommander ?',
  'preparation_academique',
  'fatima.alami@example.com',
  'Fatima Alami',
  2,
  110,
  FALSE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'fa2ed4e1-0cb2-5c59-94ea-55fe65e10153',
  'f6af59a3-67d6-5abe-8238-7cd32053cad4',
  'Salut ! J''ai passé le DELF B2 il y a 6 mois et je l''ai eu du premier coup. Mes conseils : 1) Fais TOUTES les annales disponibles (il y en a plein sur francaisfacile.com), 2) Pour l''oral, entraîne-toi à parler 10 minutes sur un sujet au hasard, 3) Pour la production écrite, apprends les formules de politesse françaises. C''est ça qui fait la différence ! Bonne chance !',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'd9e5134f-a0e9-5be7-a612-d044b632d21e',
  'f6af59a3-67d6-5abe-8238-7cd32053cad4',
  'Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il y en a partout (Meetup, Facebook, ou même à l''université). Parler avec des natifs même 1h par semaine, ça fait une ÉNORME différence !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '42912afd-dbf5-5b6e-951b-73463aa5e390',
  'Méthodologie pour les examens universitaires',
  'Comment réviser efficacement pour les examens universitaires en France ? La méthodologie semble différente de mon pays d''origine.',
  'preparation_academique',
  'lucas.bernard@example.com',
  'Lucas Bernard',
  3,
  120,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'c5cdb167-75bd-55c0-bfd7-ca5fc9b36820',
  '42912afd-dbf5-5b6e-951b-73463aa5e390',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  9
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'cda5dc73-d90a-5233-949a-596355de0dbd',
  '42912afd-dbf5-5b6e-951b-73463aa5e390',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'cc731023-a1b9-55fc-bd3a-d50b086397bf',
  '42912afd-dbf5-5b6e-951b-73463aa5e390',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Excellente question ! Je te conseille vraiment de...... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '0d24cd77-825c-547b-85e3-5d23ad9d17b0',
  'CV français vs CV international, différences ?',
  'Quelles sont les différences principales entre un CV français et un CV international ? Je dois adapter le mien mais je ne sais pas par où commencer.',
  'insertion_professionnelle',
  'anna.kowalski@example.com',
  'Anna Kowalski',
  4,
  130,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '768b5902-c1c5-5788-8cb4-b946aa33b470',
  '0d24cd77-825c-547b-85e3-5d23ad9d17b0',
  'Salut ! Pour progresser en français, ce qui m''a le plus aidé c''est de regarder des séries françaises sur Netflix avec les sous-titres en français (pas dans ta langue !). Au début c''est dur mais après 2-3 semaines tu comprends déjà beaucoup mieux.',
  'sophie.l@example.com',
  'Sophie L.',
  TRUE,
  12
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '78b7df9e-bffa-52c1-acc0-c32b0488841b',
  '0d24cd77-825c-547b-85e3-5d23ad9d17b0',
  'Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il y en a partout (Meetup, Facebook, ou même à l''université). Parler avec des natifs même 1h par semaine, ça fait une ÉNORME différence !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  10
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'd5d30fa7-6860-540b-9a3f-6b8e92ae82a8',
  '0d24cd77-825c-547b-85e3-5d23ad9d17b0',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il y en a partout (Meet... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'e3902060-5417-5512-9fca-cd1fe6d71b56',
  '0d24cd77-825c-547b-85e3-5d23ad9d17b0',
  'Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il ...',
  'thomas.r@example.com',
  'Thomas R.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '6a48bc7b-7699-5e0a-87d0-a3b01e533b01',
  'Comment se préparer à un entretien d''embauche ?',
  'J''ai un entretien pour un stage la semaine prochaine. C''est mon premier entretien en France. Des conseils ? Questions fréquentes ?',
  'insertion_professionnelle',
  'mohammed.hassan@example.com',
  'Mohammed Hassan',
  2,
  140,
  FALSE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '28a12b8c-ae45-543f-882f-4b4f83b64d6e',
  '6a48bc7b-7699-5e0a-87d0-a3b01e533b01',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'c974261e-966f-55ef-9fce-9abdc042c0b8',
  '6a48bc7b-7699-5e0a-87d0-a3b01e533b01',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'ba244ce1-3191-52a6-ba43-1c0cd17845e2',
  'Codes sociaux français à connaître',
  'Je viens d''arriver et je fais souvent des impairs. Quels sont les codes sociaux français essentiels à connaître pour éviter les malentendus ?',
  'culture_codes_sociaux',
  'maria.silva@example.com',
  'Maria Silva',
  3,
  150,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '2dbaf360-b6d0-52b7-a87a-1453319df583',
  'ba244ce1-3191-52a6-ba43-1c0cd17845e2',
  'Salut ! Pour progresser en français, ce qui m''a le plus aidé c''est de regarder des séries françaises sur Netflix avec les sous-titres en français (pas dans ta langue !). Au début c''est dur mais après 2-3 semaines tu comprends déjà beaucoup mieux.',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  9
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '2cf0ebfd-4fb0-51ff-a11e-3db7b9c61f7d',
  'ba244ce1-3191-52a6-ba43-1c0cd17845e2',
  'Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il y en a partout (Meetup, Facebook, ou même à l''université). Parler avec des natifs même 1h par semaine, ça fait une ÉNORME différence !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '41057a08-8412-55e4-9b44-63f24798d224',
  'ba244ce1-3191-52a6-ba43-1c0cd17845e2',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il y en a partout (Meet... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'c100ac4f-7794-5f69-adb8-7e499d90e707',
  'Comment utiliser les transports parisiens ?',
  'Comment fonctionne la carte Navigo ? C''est compliqué ! J''ai besoin d''aide pour comprendre les zones, tarifs, etc.',
  'culture_codes_sociaux',
  'ahmed.benali@example.com',
  'Ahmed Benali',
  4,
  160,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '51c259c8-5334-5634-93b1-96d0cb5e50d8',
  'c100ac4f-7794-5f69-adb8-7e499d90e707',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  12
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '522b9bc3-fdaf-5367-bd11-962c00c351ff',
  'c100ac4f-7794-5f69-adb8-7e499d90e707',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  10
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '1a33707a-ef77-5e10-904e-5dfb66f0a03f',
  'c100ac4f-7794-5f69-adb8-7e499d90e707',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Excellente question ! Je te conseille vraiment de...... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'e4f68eb9-703d-5bda-94de-bbb22b569b4c',
  'c100ac4f-7794-5f69-adb8-7e499d90e707',
  'Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de Excellente question ! Je te conseille vraiment de......',
  'thomas.r@example.com',
  'Thomas R.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '991b6e5c-b1db-5423-8ef4-1951f107e8fc',
  'Préparation concours administratifs',
  'Je veux préparer un concours administratif mais je ne sais pas par où commencer. Quelles sont les meilleures ressources ?',
  'formations_professionnelles',
  'priya.sharma@example.com',
  'Priya Sharma',
  2,
  170,
  FALSE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '4e08691b-736a-580f-a188-37865cf678f5',
  '991b6e5c-b1db-5423-8ef4-1951f107e8fc',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  TRUE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '6782cb03-85ba-5753-a55f-b5ce4ea15df6',
  '991b6e5c-b1db-5423-8ef4-1951f107e8fc',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '2dd7e778-2505-5f8a-9beb-fb26046941e1',
  'Bourses d''études disponibles pour étudiants étrangers',
  'Existe-t-il des bourses spécifiques pour étudiants internationaux en France ? Je cherche des financements pour mes études.',
  'preparation_academique',
  'jean.dupont@example.com',
  'Jean Dupont',
  3,
  180,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '3d93ac60-78c5-5de3-b4b8-f87f695587db',
  '2dd7e778-2505-5f8a-9beb-fb26046941e1',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  9
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '3e71e74e-4576-5f45-a0dc-2c1887219d26',
  '2dd7e778-2505-5f8a-9beb-fb26046941e1',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '434b29f3-c9f0-54d8-8b7a-87279105bd6c',
  '2dd7e778-2505-5f8a-9beb-fb26046941e1',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Excellente question ! Je te conseille vraiment de...... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '07f3ed10-a0e8-54d1-adfb-bb46c6f20b1e',
  'Équivalences de diplômes comment faire ?',
  'Mon diplôme vient d''un autre pays. Comment faire reconnaître mon équivalence en France ? La procédure semble complexe.',
  'preparation_academique',
  'sophie.martin@example.com',
  'Sophie Martin',
  4,
  190,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'b1f76025-401d-5f68-bf4f-bead184787dd',
  '07f3ed10-a0e8-54d1-adfb-bb46c6f20b1e',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  12
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '64cbeecb-f7a8-5830-a18b-1d5c90dde523',
  '07f3ed10-a0e8-54d1-adfb-bb46c6f20b1e',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  10
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'dc450361-64fb-54c3-8a20-f7981db55f18',
  '07f3ed10-a0e8-54d1-adfb-bb46c6f20b1e',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Excellente question ! Je te conseille vraiment de...... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'e7ae3bf0-a83b-5c6a-8452-fbf95515d9a3',
  '07f3ed10-a0e8-54d1-adfb-bb46c6f20b1e',
  'Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de Excellente question ! Je te conseille vraiment de......',
  'thomas.r@example.com',
  'Thomas R.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'c397cb7e-0fa4-5902-85a6-3fa1a4088197',
  'Problème avec mon visa, renouvellement urgent',
  'URGENT : Mon visa expire dans 1 mois et mon renouvellement est en cours mais je n''ai pas encore de réponse. Que faire ?',
  'integration_administrative',
  'carlos.rodriguez@example.com',
  'Carlos Rodriguez',
  2,
  200,
  FALSE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '2546d133-47ba-563d-b380-2023dea65368',
  'c397cb7e-0fa4-5902-85a6-3fa1a4088197',
  'Salut ! J''ai renouvelé mon titre de séjour il y a 3 mois. Le truc important c''est de prendre le RDV en ligne DÈS que possible (les créneaux partent très vite). Ensuite, prépare TOUS tes documents 2 semaines avant pour éviter le stress.',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '78bfa75c-c1f5-5757-a9ee-9d5f8b7ca227',
  'c397cb7e-0fa4-5902-85a6-3fa1a4088197',
  'Bonjour ! Un conseil qui m''a sauvé : fais des photos/scan de TOUS tes documents avant de les déposer à la préfecture. Comme ça si jamais il manque quelque chose, tu peux les imprimer rapidement sans refaire tout le dossier.',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '56983b7e-6a93-5b10-9196-4bd88661052c',
  'Comment améliorer son français rapidement ?',
  'Je suis niveau B1 en français mais je veux progresser rapidement vers B2. Quelles méthodes marchent le mieux ?',
  'preparation_academique',
  'fatima.alami@example.com',
  'Fatima Alami',
  3,
  210,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '8034f207-c8ff-583d-abac-fc9e598bf000',
  '56983b7e-6a93-5b10-9196-4bd88661052c',
  'Salut ! Pour progresser en français, ce qui m''a le plus aidé c''est de regarder des séries françaises sur Netflix avec les sous-titres en français (pas dans ta langue !). Au début c''est dur mais après 2-3 semaines tu comprends déjà beaucoup mieux.',
  'sophie.l@example.com',
  'Sophie L.',
  TRUE,
  9
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'bee17707-8eb7-5dcd-936d-58720a9742db',
  '56983b7e-6a93-5b10-9196-4bd88661052c',
  'Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il y en a partout (Meetup, Facebook, ou même à l''université). Parler avec des natifs même 1h par semaine, ça fait une ÉNORME différence !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '78f87165-8b86-5f5e-bb85-6bad475c1d51',
  '56983b7e-6a93-5b10-9196-4bd88661052c',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il y en a partout (Meet... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'ba5e2f22-7d7e-5351-a4fd-e17b653900d7',
  'Recherche de stage en France',
  'Je cherche un stage en marketing/communication. Des conseils pour trouver ? LinkedIn, sites spécialisés... ?',
  'insertion_professionnelle',
  'lucas.bernard@example.com',
  'Lucas Bernard',
  4,
  220,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '7147632b-f583-5a8b-b236-a0f5adab4cb3',
  'ba5e2f22-7d7e-5351-a4fd-e17b653900d7',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  12
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'e79df5a6-468c-546b-a6d5-6c74d5f219a1',
  'ba5e2f22-7d7e-5351-a4fd-e17b653900d7',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  10
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '10797d0f-5162-5d9c-9a33-66883676bd05',
  'ba5e2f22-7d7e-5351-a4fd-e17b653900d7',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Excellente question ! Je te conseille vraiment de...... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '1f7c2251-343d-52ab-9303-93102c9e335f',
  'ba5e2f22-7d7e-5351-a4fd-e17b653900d7',
  'Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de Excellente question ! Je te conseille vraiment de......',
  'thomas.r@example.com',
  'Thomas R.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'fa3c3a98-045e-51f0-a24c-0646e1c64136',
  'Comprendre les contrats de travail',
  'CDD, CDI, stage, alternance... je comprends mal les différents types de contrats. Quelqu''un peut expliquer ?',
  'insertion_professionnelle',
  'anna.kowalski@example.com',
  'Anna Kowalski',
  2,
  230,
  FALSE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '5dc14ec0-90e1-5b76-a93f-9342a1a55b78',
  'fa3c3a98-045e-51f0-a24c-0646e1c64136',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '4993bbdb-1c79-5c58-bd25-379d897ee6ba',
  'fa3c3a98-045e-51f0-a24c-0646e1c64136',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '0b5435e2-eefc-5e0f-ab26-d19c11a6222c',
  'Carte Vitale, comment l''obtenir ?',
  'J''ai envoyé ma demande de carte Vitale il y a 2 mois, toujours rien. C''est normal ? Comment vérifier l''état de ma demande ?',
  'integration_administrative',
  'mohammed.hassan@example.com',
  'Mohammed Hassan',
  3,
  240,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '84ea4022-2656-5937-ac39-b88c213cbac5',
  '0b5435e2-eefc-5e0f-ab26-d19c11a6222c',
  'Bonjour ! J''ai fait ma demande il y a 3 mois. Le délai normal c''est environ 3 semaines, mais ça peut prendre jusqu''à 2 mois selon les périodes. Le plus important c''est de créer ton compte ameli.fr dès que tu as ton numéro étudiant, comme ça tu peux suivre l''avancement en temps réel !',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  9
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '07a8b9a2-e439-5823-9750-8e20c51d8aa0',
  '0b5435e2-eefc-5e0f-ab26-d19c11a6222c',
  'Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par courrier sous 2-3 semaines. Si elle n''arrive pas après 1 mois, appelle le 3646 (numéro gratuit) pour la réclamer. Ils te la renvoient rapidement !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '9c62b8c8-27f4-58ae-972b-94fbaf92ea54',
  '0b5435e2-eefc-5e0f-ab26-d19c11a6222c',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par ... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '17006f43-5b49-5d6e-b67e-33495364b1b0',
  'Trouver un médecin traitant en France',
  'Je cherche un médecin traitant près de chez moi (11ème arrondissement). Comment procéder ? Dois-je appeler directement ?',
  'integration_administrative',
  'maria.silva@example.com',
  'Maria Silva',
  4,
  250,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'fa611ff4-4213-5068-8958-ace0e3d6d148',
  '17006f43-5b49-5d6e-b67e-33495364b1b0',
  'Bonjour ! J''ai fait ma demande il y a 3 mois. Le délai normal c''est environ 3 semaines, mais ça peut prendre jusqu''à 2 mois selon les périodes. Le plus important c''est de créer ton compte ameli.fr dès que tu as ton numéro étudiant, comme ça tu peux suivre l''avancement en temps réel !',
  'sophie.l@example.com',
  'Sophie L.',
  TRUE,
  12
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '2cda2c38-520f-5442-bcd0-c21084c4cfc1',
  '17006f43-5b49-5d6e-b67e-33495364b1b0',
  'Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par courrier sous 2-3 semaines. Si elle n''arrive pas après 1 mois, appelle le 3646 (numéro gratuit) pour la réclamer. Ils te la renvoient rapidement !',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  10
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '9ca6aa3a-a22b-5131-9c17-278c945cf496',
  '17006f43-5b49-5d6e-b67e-33495364b1b0',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par ... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '31de6085-4823-5946-8567-8d30505d4a96',
  '17006f43-5b49-5d6e-b67e-33495364b1b0',
  'Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive ...',
  'thomas.r@example.com',
  'Thomas R.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'b1959853-fbb4-580f-a513-7af79c949efa',
  'Impôts sur le revenu, déclaration étudiante',
  'Je suis étudiante avec un petit job. Dois-je déclarer mes impôts ? Je ne gagne pas beaucoup...',
  'integration_administrative',
  'ahmed.benali@example.com',
  'Ahmed Benali',
  2,
  260,
  FALSE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '45f11d5e-8eef-524e-84c4-2a5e3a7cf019',
  'b1959853-fbb4-580f-a513-7af79c949efa',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '2f81fcd9-f281-5508-9567-da6f9c043a56',
  'b1959853-fbb4-580f-a513-7af79c949efa',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '995374cb-f3d1-5426-9f81-a626cb9cfcd4',
  'Banque en ligne vs banque traditionnelle',
  'Banque en ligne (N26, Revolut) ou banque traditionnelle (BNP, Société Générale) ? Avantages/inconvénients pour un étudiant ?',
  'integration_administrative',
  'priya.sharma@example.com',
  'Priya Sharma',
  3,
  270,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '7c5bc58a-f99b-5907-942f-96032fac7d80',
  '995374cb-f3d1-5426-9f81-a626cb9cfcd4',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  9
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '179fde6f-ac59-5316-937b-3b78cd1a466e',
  '995374cb-f3d1-5426-9f81-a626cb9cfcd4',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  7
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '204ccb01-bde8-5075-8add-1b3967d767b2',
  '995374cb-f3d1-5426-9f81-a626cb9cfcd4',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Excellente question ! Je te conseille vraiment de...... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  3
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '8adb5f2e-7d96-500e-bd5b-26a15439af60',
  'Assurance habitation obligatoire ?',
  'Est-ce que l''assurance habitation est vraiment obligatoire ? Mon propriétaire insiste mais je trouve ça cher...',
  'integration_administrative',
  'jean.dupont@example.com',
  'Jean Dupont',
  4,
  280,
  FALSE,
  FALSE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'abdd1d35-4357-569c-a42a-07a5cffa714c',
  '8adb5f2e-7d96-500e-bd5b-26a15439af60',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  FALSE,
  12
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '30b258ef-f086-578d-8564-beb97921019a',
  '8adb5f2e-7d96-500e-bd5b-26a15439af60',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  10
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '6e6283e9-ff4b-5b58-9e81-cff4e52d6ebd',
  '8adb5f2e-7d96-500e-bd5b-26a15439af60',
  'Merci Sophie L. et Pierre M. pour ces conseils ! Je confirme que Excellente question ! Je te conseille vraiment de...... C''est vraiment ce qui m''a aidé aussi.',
  'emma.d@example.com',
  'Emma D.',
  FALSE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'cdfa2f5a-b223-556c-92da-ff9dfa2d82da',
  '8adb5f2e-7d96-500e-bd5b-26a15439af60',
  'Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de Excellente question ! Je te conseille vraiment de......',
  'thomas.r@example.com',
  'Thomas R.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  '532fe846-b4d2-58de-87c6-9e1e879bdc11',
  'Forum général : questions diverses',
  'Utilisez ce post pour poser vos questions diverses qui ne rentrent pas dans les autres catégories !',
  'general',
  'sophie.martin@example.com',
  'Sophie Martin',
  2,
  290,
  FALSE,
  TRUE,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  '4ea65a15-a799-57d8-b33a-4c8a06836229',
  '532fe846-b4d2-58de-87c6-9e1e879bdc11',
  'Merci pour cette question ! J''étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c''est de...',
  'sophie.l@example.com',
  'Sophie L.',
  TRUE,
  6
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
(
  'a2b9acfb-0124-55c6-ae00-70b52f5f5c6a',
  '532fe846-b4d2-58de-87c6-9e1e879bdc11',
  'Excellente question ! Je te conseille vraiment de...',
  'pierre.m@example.com',
  'Pierre M.',
  FALSE,
  4
) ON CONFLICT (id) DO NOTHING;

-- Réactiver les contraintes
SET session_replication_role = DEFAULT;
