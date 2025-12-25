#!/usr/bin/env python3
"""
Script pour générer 80 cours complets + 25 posts forum avec commentaires
pour FrancePrep Academy
"""

import json
import uuid
from datetime import datetime

# Catégories disponibles
CATEGORIES = {
    'integration_administrative': {
        'name': 'Intégration Administrative',
        'count': 20,
        'themes': [
            'CAF', 'Sécurité Sociale', 'Titre de Séjour', 'Logement', 'Banque',
            'Assurance', 'Impôts', 'Démarches Préfecture', 'Visa', 'Carte Vitale',
            'Mutuelle', 'CPAM', 'RSI', 'Urssaf', 'Pôle Emploi',
            'Passeport', 'Carte d''Identité', 'Permis de Séjour', 'Renouvellement', 'Naturalisation'
        ]
    },
    'preparation_academique': {
        'name': 'Préparation Académique',
        'count': 20,
        'themes': [
            'Français A1', 'Français A2', 'Français B1', 'Français B2', 'DELF',
            'DALF', 'Système Éducatif', 'Inscription Université', 'LMD', 'Bourses',
            'Équivalences', 'Mémoire', 'Thèse', 'Recherche', 'Bibliographie',
            'Présentations', 'Examens', 'Méthodologie', 'Prise de Notes', 'Apprentissage'
        ]
    },
    'culture_codes_sociaux': {
        'name': 'Culture & Codes Sociaux',
        'count': 15,
        'themes': [
            'Codes Sociaux', 'Politesse', 'Tutoiement/Vouvoiement', 'Repas', 'Cadeaux',
            'Transport Paris', 'Carte Navigo', 'Événements', 'Fêtes', 'Traditions',
            'Histoire France', 'Géographie', 'Régions', 'Patrimoine', 'Art'
        ]
    },
    'insertion_professionnelle': {
        'name': 'Insertion Professionnelle',
        'count': 15,
        'themes': [
            'CV Français', 'Lettre Motivation', 'Entretien', 'LinkedIn', 'Réseau',
            'Stage', 'Alternance', 'CDD', 'CDI', 'Freelance',
            'Salaire', 'Négociation', 'Droits Travail', 'Congés', 'Télétravail'
        ]
    },
    'formations_professionnelles': {
        'name': 'Formations Professionnelles',
        'count': 10,
        'themes': [
            'Concours Administratifs', 'IFSI', 'Gendarmerie', 'Police', 'Douanes',
            'Pompier', 'Sapeur', 'Magistrat', 'Avocat', 'Professeur'
        ]
    }
}

LEVELS = ['debutant', 'intermediaire', 'avance']
# Système Premium : 0 = Gratuit, 1 = Premium (abonnement requis, pas de prix par cours)
PRICES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]  # Majorité gratuits, quelques premium

def generate_slug(title):
    """Génère un slug à partir d'un titre"""
    return title.lower().replace(' ', '-').replace(',', '').replace("'", '').replace('é', 'e').replace('è', 'e').replace('à', 'a').replace('ç', 'c')

def generate_course_id(index):
    """Génère un UUID déterministe pour un cours"""
    # Pour avoir des IDs cohérents, on utilise un namespace UUID
    namespace = uuid.UUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8')
    return str(uuid.uuid5(namespace, f'course-{index}'))

def generate_lesson_id(course_id, lesson_order):
    """Génère un UUID pour une leçon"""
    namespace = uuid.UUID('6ba7b811-9dad-11d1-80b4-00c04fd430c8')
    return str(uuid.uuid5(namespace, f'{course_id}-lesson-{lesson_order}'))

def generate_course(category_key, category_info, theme, course_index):
    """Génère un cours complet avec ses leçons"""
    course_id = generate_course_id(course_index)
    level = LEVELS[course_index % len(LEVELS)]
    price = PRICES[course_index % len(PRICES)]
    rating = round(4.0 + (course_index % 10) * 0.1, 1)
    reviews = 50 + (course_index % 150)
    
    title = f"{theme} - Guide Complet"
    slug = generate_slug(title)
    
    descriptions = {
        'integration_administrative': f"Apprenez tout sur {theme.lower()} en France. Guide complet avec démarches, documents nécessaires et conseils pratiques pour réussir vos démarches administratives.",
        'preparation_academique': f"Formation complète sur {theme.lower()}. Cours structuré avec exercices, méthodologie et préparation aux examens pour réussir votre parcours académique en France.",
        'culture_codes_sociaux': f"Découvrez {theme.lower()} en France. Comprenez les codes sociaux, les traditions et la culture française pour mieux vous intégrer.",
        'insertion_professionnelle': f"Maîtrisez {theme.lower()} pour réussir votre insertion professionnelle en France. Techniques, conseils et exemples pratiques.",
        'formations_professionnelles': f"Préparez-vous efficacement au {theme.lower()}. Cours complet avec annales, méthodologie et entraînements pour réussir votre concours."
    }
    
    short_descriptions = {
        'integration_administrative': f"Guide pas à pas pour {theme.lower()}",
        'preparation_academique': f"Formation complète {theme.lower()}",
        'culture_codes_sociaux': f"Comprendre {theme.lower()} en France",
        'insertion_professionnelle': f"Réussir {theme.lower()}",
        'formations_professionnelles': f"Préparation {theme.lower()}"
    }
    
    objectives = [
        f"Comprendre {theme.lower()}",
        "Maîtriser les démarches pratiques",
        "Éviter les erreurs courantes",
        "Optimiser vos chances de réussite"
    ]
    
    # Générer 8-12 leçons par cours (beaucoup plus de contenu)
    num_lessons = 8 + (course_index % 5)  # 8, 9, 10, 11 ou 12 leçons
    lessons = []
    
    lesson_titles = [
        f"Introduction à {theme}",
        f"Les démarches pratiques",
        f"Documents et procédures",
        f"Conseils et bonnes pratiques",
        f"Résolution de problèmes courants"
    ]
    
    # Sources officielles selon le thème
    sources = {}
    theme_lower = theme.lower()
    if 'caf' in theme_lower or 'allocation' in theme_lower:
        sources = {
            'site': 'https://www.caf.fr',
            'simulateur': 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/estimateurs',
            'espace': 'https://www.caf.fr/espaces'
        }
    elif 'sécurité' in theme_lower or 'sante' in theme_lower or 'mutuelle' in theme_lower or 'cpam' in theme_lower:
        sources = {
            'ameli': 'https://www.ameli.fr',
            'cpam': 'https://www.ameli.fr/assure/droits-demarches/principes/etre-affilie-au-regime-general',
            'carte_vitale': 'https://www.ameli.fr/assure/droits-demarches/demarches-et-declarations/remplacer-carte-vitale'
        }
    elif 'logement' in theme_lower or 'appartement' in theme_lower or 'garant' in theme_lower:
        sources = {
            'visale': 'https://www.actionlogement.fr/visale',
            'dossier': 'https://www.service-public.fr/particuliers/vosdroits/F2005'
        }
    elif 'titre' in theme_lower or 'visa' in theme_lower or 'séjour' in theme_lower or 'prefecture' in theme_lower:
        sources = {
            'prefecture': 'https://www.service-public.fr/particuliers/vosdroits/F1560'
        }
    elif 'français' in theme_lower or 'delf' in theme_lower or 'dalf' in theme_lower:
        sources = {
            'delf': 'https://www.france-education-international.fr/diplome/delf-dalf',
            'ciel': 'https://www.ciep.fr/delf-dalf'
        }
    
    sources_text = ""
    if sources:
        sources_text = "\n\n## 📚 Ressources Officielles\n\n"
        for key, url in sources.items():
            label = key.replace('_', ' ').title()
            sources_text += f"- [{label}]({url})\n"
    
    lesson_contents = [
        f"""# Introduction à {theme}

Ce cours vous guide pas à pas dans {theme.lower()}.

## Pourquoi c'est important ?

{theme} est essentiel pour réussir votre intégration en France. Ce guide complet vous accompagne dans toutes vos démarches.

## Ce que vous allez apprendre

- Les bases de {theme.lower()}
- Les démarches nécessaires étape par étape
- Les pièges à éviter
- Les meilleures pratiques
- Les ressources officielles à utiliser{sources_text}

## Prérequis

Aucun prérequis nécessaire. Ce cours est accessible à tous.""",
        
        f"""# Les démarches pratiques

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

- Pièce d'identité
- Justificatifs requis
- Formulaires complétés""",
        
        f"""# Documents et procédures

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
- Format PDF recommandé""",
        
        f"""# Conseils et bonnes pratiques

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
R : Autre réponse.""",
        
        f"""# Résolution de problèmes courants

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
- Utilisez notre forum d'entraide"""
    ]
    
    for i in range(num_lessons):
        lesson_id = generate_lesson_id(course_id, i + 1)
        lessons.append({
            'id': lesson_id,
            'course_id': course_id,
            'title': lesson_titles[i] if i < len(lesson_titles) else f"Leçon {i + 1}",
            'content': lesson_contents[i] if i < len(lesson_contents) else lesson_contents[-1],
            'order': i + 1,
            'duration_minutes': 15 + i * 5
        })
    
    course = {
        'id': course_id,
        'title': title,
        'slug': slug,
        'description': descriptions[category_key],
        'short_description': short_descriptions[category_key],
        'category': category_key,
        'level': level,
        'language': 'fr',
        'duration_hours': sum(l['duration_minutes'] for l in lessons) // 60,
        'price': price,
        'thumbnail_url': f'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig={course_index}',
        'objectives': objectives,
        'prerequisites': [],
        'is_published': True,
        'rating': rating,
        'reviews_count': reviews,
        'lessons': lessons
    }
    
    return course

def generate_forum_post(post_index):
    """Génère un post de forum avec commentaires"""
    post_id = str(uuid.uuid5(uuid.UUID('6ba7b812-9dad-11d1-80b4-00c04fd430c8'), f'post-{post_index}'))
    
    titles = [
        "Comment obtenir mon titre de séjour rapidement ?",
        "Problème avec ma demande CAF, besoin d'aide",
        "Quelle mutuelle étudiante choisir ?",
        "Comment trouver un logement à Paris sans garant ?",
        "Difficultés pour ouvrir un compte bancaire",
        "Comprendre le système de santé français",
        "Comment réussir son DELF B2 ?",
        "Méthodologie pour les examens universitaires",
        "CV français vs CV international, différences ?",
        "Comment se préparer à un entretien d'embauche ?",
        "Codes sociaux français à connaître",
        "Comment utiliser les transports parisiens ?",
        "Préparation concours administratifs",
        "Bourses d'études disponibles pour étudiants étrangers",
        "Équivalences de diplômes comment faire ?",
        "Problème avec mon visa, renouvellement urgent",
        "Comment améliorer son français rapidement ?",
        "Recherche de stage en France",
        "Comprendre les contrats de travail",
        "Carte Vitale, comment l'obtenir ?",
        "Trouver un médecin traitant en France",
        "Impôts sur le revenu, déclaration étudiante",
        "Banque en ligne vs banque traditionnelle",
        "Assurance habitation obligatoire ?",
        "Forum général : questions diverses"
    ]
    
    contents = [
        "Je suis étudiante et mon titre de séjour expire dans 2 mois. J'ai commencé ma demande mais ça prend beaucoup de temps. Est-ce que quelqu'un peut me donner des conseils pour accélérer le processus ? Merci beaucoup !",
        
        "Bonjour, j'ai fait ma demande CAF il y a 3 mois et je n'ai toujours pas de réponse. Mon dossier est complet selon eux. Est-ce normal ? Que puis-je faire ?",
        
        "Je cherche une mutuelle étudiante pas chère mais qui couvre bien. Des recommandations ? J'ai vu LMDE, SMEREP, HEYME... laquelle choisir ?",
        
        "Salut ! Je suis nouveau à Paris et je cherche un studio. Le problème c'est que je n'ai pas de garant français. Est-ce possible de trouver quand même ?",
        
        "Bonjour, j'ai essayé d'ouvrir un compte dans plusieurs banques mais elles me demandent toutes un justificatif de domicile de plus de 3 mois. Je viens d'arriver ! Que faire ?",
        
        "Quelqu'un peut m'expliquer comment fonctionne vraiment le système de santé ici ? Carte Vitale, mutuelle, remboursements... je suis un peu perdu.",
        
        "Je passe le DELF B2 dans 3 mois. J'ai besoin de conseils pour la préparation. Quels sont les pièges à éviter ? Des ressources à recommander ?",
        
        "Comment réviser efficacement pour les examens universitaires en France ? La méthodologie semble différente de mon pays d'origine.",
        
        "Quelles sont les différences principales entre un CV français et un CV international ? Je dois adapter le mien mais je ne sais pas par où commencer.",
        
        "J'ai un entretien pour un stage la semaine prochaine. C'est mon premier entretien en France. Des conseils ? Questions fréquentes ?",
        
        "Je viens d'arriver et je fais souvent des impairs. Quels sont les codes sociaux français essentiels à connaître pour éviter les malentendus ?",
        
        "Comment fonctionne la carte Navigo ? C'est compliqué ! J'ai besoin d'aide pour comprendre les zones, tarifs, etc.",
        
        "Je veux préparer un concours administratif mais je ne sais pas par où commencer. Quelles sont les meilleures ressources ?",
        
        "Existe-t-il des bourses spécifiques pour étudiants internationaux en France ? Je cherche des financements pour mes études.",
        
        "Mon diplôme vient d'un autre pays. Comment faire reconnaître mon équivalence en France ? La procédure semble complexe.",
        
        "URGENT : Mon visa expire dans 1 mois et mon renouvellement est en cours mais je n'ai pas encore de réponse. Que faire ?",
        
        "Je suis niveau B1 en français mais je veux progresser rapidement vers B2. Quelles méthodes marchent le mieux ?",
        
        "Je cherche un stage en marketing/communication. Des conseils pour trouver ? LinkedIn, sites spécialisés... ?",
        
        "CDD, CDI, stage, alternance... je comprends mal les différents types de contrats. Quelqu'un peut expliquer ?",
        
        "J'ai envoyé ma demande de carte Vitale il y a 2 mois, toujours rien. C'est normal ? Comment vérifier l'état de ma demande ?",
        
        "Je cherche un médecin traitant près de chez moi (11ème arrondissement). Comment procéder ? Dois-je appeler directement ?",
        
        "Je suis étudiante avec un petit job. Dois-je déclarer mes impôts ? Je ne gagne pas beaucoup...",
        
        "Banque en ligne (N26, Revolut) ou banque traditionnelle (BNP, Société Générale) ? Avantages/inconvénients pour un étudiant ?",
        
        "Est-ce que l'assurance habitation est vraiment obligatoire ? Mon propriétaire insiste mais je trouve ça cher...",
        
        "Utilisez ce post pour poser vos questions diverses qui ne rentrent pas dans les autres catégories !"
    ]
    
    categories = [
        'integration_administrative', 'integration_administrative', 'integration_administrative',
        'integration_administrative', 'integration_administrative', 'integration_administrative',
        'preparation_academique', 'preparation_academique', 'insertion_professionnelle',
        'insertion_professionnelle', 'culture_codes_sociaux', 'culture_codes_sociaux',
        'formations_professionnelles', 'preparation_academique', 'preparation_academique',
        'integration_administrative', 'preparation_academique', 'insertion_professionnelle',
        'insertion_professionnelle', 'integration_administrative', 'integration_administrative',
        'integration_administrative', 'integration_administrative', 'integration_administrative',
        'general'
    ]
    
    authors = [
        ('Maria Silva', 'maria.silva@example.com'),
        ('Ahmed Benali', 'ahmed.benali@example.com'),
        ('Priya Sharma', 'priya.sharma@example.com'),
        ('Jean Dupont', 'jean.dupont@example.com'),
        ('Sophie Martin', 'sophie.martin@example.com'),
        ('Carlos Rodriguez', 'carlos.rodriguez@example.com'),
        ('Fatima Alami', 'fatima.alami@example.com'),
        ('Lucas Bernard', 'lucas.bernard@example.com'),
        ('Anna Kowalski', 'anna.kowalski@example.com'),
        ('Mohammed Hassan', 'mohammed.hassan@example.com')
    ]
    
    author_name, author_email = authors[post_index % len(authors)]
    
    # Générer 2-4 commentaires par post
    num_comments = 2 + (post_index % 3)
    replies = []
    
    # Réponses plus humaines et pertinentes selon le type de question
    reply_templates = {
        'caf': [
            "Salut ! J'ai eu exactement le même problème l'année dernière. En fait, ce qui a fonctionné pour moi c'est de remplir le dossier en ligne ET d'envoyer les pièces justificatives par courrier recommandé en même temps. Ça accélère vraiment le traitement !",
            "Bonjour ! Attention, un conseil important : vérifie bien que ton RIB est un compte français. J'avais mis mon compte de mon pays d'origine et ça a tout retardé de 2 mois. Une fois corrigé, j'ai reçu l'APL rétroactivement, donc pas de perte, mais ça vaut le coup de vérifier !",
            "Hello ! Pour accélérer, je conseille vraiment de prendre rendez-vous dans l'agence CAF près de chez toi. C'est un peu long à obtenir (2-3 semaines) mais une fois là-bas avec tous tes documents, ils valident ton dossier en direct. Ça m'a évité des mois d'attente !"
        ],
        'logement': [
            "Coucou ! J'étais dans la même galère il y a 6 mois. Mon conseil : cherche sur les groupes Facebook de ta ville (ex: 'Étudiants Paris', 'Colocation Lyon'). J'ai trouvé mon studio comme ça en 2 semaines, sans garant ! Beaucoup de proprios comprennent la situation des étudiants étrangers.",
            "Salut ! Pour le garant, tu peux essayer Visale (c'est gratuit et ça fonctionne bien). Sinon, certaines banques proposent des garanties locatives pour étudiants. J'ai utilisé celle de la BNP et ça m'a sauvé !",
            "Hey ! Un truc qui m'a beaucoup aidé : prépare un dossier COMPLET dès le premier contact. Photo de ta pièce d'identité, 3 fiches de paie (ou attestation de bourse), RIB, et même une petite lettre de motivation. Les proprios adorent ça et ça te démarque vraiment !"
        ],
        'securite_sociale': [
            "Bonjour ! J'ai fait ma demande il y a 3 mois. Le délai normal c'est environ 3 semaines, mais ça peut prendre jusqu'à 2 mois selon les périodes. Le plus important c'est de créer ton compte ameli.fr dès que tu as ton numéro étudiant, comme ça tu peux suivre l'avancement en temps réel !",
            "Salut ! Pour la carte Vitale, une fois que tu es affilié à la CPAM, elle arrive automatiquement par courrier sous 2-3 semaines. Si elle n'arrive pas après 1 mois, appelle le 3646 (numéro gratuit) pour la réclamer. Ils te la renvoient rapidement !",
            "Hello ! Conseil important : prends une mutuelle étudiante (LMDE ou SMEREP) dès que possible. Elle coûte que 20-30€/mois et ça te rembourse à 100% au lieu de 70%. Pour les soins dentaires et optiques c'est vraiment utile !"
        ],
        'francais': [
            "Salut ! Pour progresser en français, ce qui m'a le plus aidé c'est de regarder des séries françaises sur Netflix avec les sous-titres en français (pas dans ta langue !). Au début c'est dur mais après 2-3 semaines tu comprends déjà beaucoup mieux.",
            "Bonjour ! Je te conseille vraiment de rejoindre des groupes de conversation. Il y en a partout (Meetup, Facebook, ou même à l'université). Parler avec des natifs même 1h par semaine, ça fait une ÉNORME différence !",
            "Hey ! Pour le DELF B2, je recommande vraiment de faire les annales. Le format des épreuves est très spécifique et ça te fait gagner beaucoup de points. Il y a plein d'annales gratuites sur internet !"
        ],
        'titre_sejour': [
            "Salut ! J'ai renouvelé mon titre de séjour il y a 3 mois. Le truc important c'est de prendre le RDV en ligne DÈS que possible (les créneaux partent très vite). Ensuite, prépare TOUS tes documents 2 semaines avant pour éviter le stress.",
            "Bonjour ! Un conseil qui m'a sauvé : fais des photos/scan de TOUS tes documents avant de les déposer à la préfecture. Comme ça si jamais il manque quelque chose, tu peux les imprimer rapidement sans refaire tout le dossier.",
            "Hello ! Pour le rendez-vous préfecture, c'est vraiment la galère je sais. Essaye de te connecter tôt le matin (vers 8h-9h) ou très tard le soir. Les créneaux s'ouvrent souvent à ces heures-là. Persévère, tu vas y arriver !"
        ],
        'general': [
            "Merci pour cette question ! J'étais exactement dans la même situation il y a quelques mois. Ce qui a fonctionné pour moi c'est de...",
            "Excellente question ! Je te conseille vraiment de...",
            "Salut ! J'ai eu le même problème. Voici ce que j'ai fait et ça a marché...",
            "Bon conseil ! J'ajouterais juste que...",
            "D'accord avec toi ! J'ai testé cette méthode et ça marche super bien.",
            "Pour compléter, n'oublie pas aussi de...",
            "Merci beaucoup ! Ces infos m'aident vraiment.",
            "Super ! Je voulais juste ajouter un petit détail important..."
        ]
    }
    
    reply_authors = [
        ('Sophie L.', 'sophie.l@example.com'),
        ('Pierre M.', 'pierre.m@example.com'),
        ('Emma D.', 'emma.d@example.com'),
        ('Thomas R.', 'thomas.r@example.com'),
        ('Léa B.', 'lea.b@example.com'),
        ('Antoine C.', 'antoine.c@example.com')
    ]
    
    # Déterminer le type de question pour des réponses pertinentes en analysant titre ET contenu
    question_type = 'general'
    title_lower = titles[post_index].lower() if post_index < len(titles) else ''
    content_lower = contents[post_index].lower() if post_index < len(contents) else ''
    combined_text = title_lower + " " + content_lower
    
    if 'caf' in combined_text or 'allocation' in combined_text or 'apl' in combined_text:
        question_type = 'caf'
    elif 'logement' in combined_text or 'appartement' in combined_text or 'studio' in combined_text or 'garant' in combined_text or 'loyer' in combined_text:
        question_type = 'logement'
    elif 'sécurité' in combined_text or 'sante' in combined_text or 'mutuelle' in combined_text or 'vitale' in combined_text or 'cpam' in combined_text or 'médecin' in combined_text:
        question_type = 'securite_sociale'
    elif 'français' in combined_text or 'delf' in combined_text or 'francais' in combined_text or 'dalf' in combined_text or 'b1' in combined_text or 'b2' in combined_text:
        question_type = 'francais'
    elif 'titre' in combined_text or 'visa' in combined_text or 'séjour' in combined_text or 'prefecture' in combined_text or 'renouvellement' in combined_text:
        question_type = 'titre_sejour'
    elif 'bancaire' in combined_text or 'compte' in combined_text and 'banque' in combined_text:
        question_type = 'logement'  # Similaire au logement pour les garanties
    elif 'stage' in combined_text or 'cv' in combined_text or 'entretien' in combined_text or 'contrat' in combined_text:
        question_type = 'general'  # Professionnel
    
    # Sélectionner les réponses appropriées
    available_replies = reply_templates.get(question_type, reply_templates['general'])
    
    # Créer des réponses spécifiques pour certaines questions fréquentes
    specific_replies = {}
    if post_index < len(contents):
        content = contents[post_index]
        if '3 mois' in content and 'réponse' in content:
            # Question sur délai CAF
            specific_replies[0] = "Salut ! 3 mois c'est effectivement long mais pas anormal malheureusement. Ce qui a marché pour moi : j'ai appelé la CAF tous les 15 jours pour relancer (pas trop souvent pour pas les embêter). Au 3ème appel, ils ont accéléré mon dossier. Le numéro : 0810 25 25 10 (numéro non surtaxé). Bon courage !"
        elif 'garant' in content.lower() and 'français' in content.lower():
            # Question garant français
            specific_replies[0] = "Coucou ! Oui c'est possible ! J'étais dans la même situation. Deux solutions qui marchent : 1) Visale (garantie gratuite de l'État) - tu peux la demander sur actionlogement.fr, 2) Certaines banques proposent des garanties pour étudiants. J'ai utilisé celle de Boursorama, c'est rapide et pas cher. Ça vaut vraiment le coup d'essayer !"
        elif 'justificatif de domicile' in content.lower() or '3 mois' in content and 'domicile' in content.lower():
            # Question justificatif de domicile
            specific_replies[0] = "Hello ! Même problème ici ! La solution : certaines banques en ligne (N26, Revolut, Boursorama) acceptent des justificatifs de moins de 3 mois, voire même une attestation d'hébergement. J'ai ouvert mon compte Boursorama avec juste une attestation d'hébergement signée par mon colocataire. Essaye ça, c'est beaucoup plus simple !"
        elif 'delf b2' in content.lower() or 'delf' in content.lower() and 'préparation' in content.lower():
            # Question préparation DELF
            specific_replies[0] = "Salut ! J'ai passé le DELF B2 il y a 6 mois et je l'ai eu du premier coup. Mes conseils : 1) Fais TOUTES les annales disponibles (il y en a plein sur francaisfacile.com), 2) Pour l'oral, entraîne-toi à parler 10 minutes sur un sujet au hasard, 3) Pour la production écrite, apprends les formules de politesse françaises. C'est ça qui fait la différence ! Bonne chance !"
    
    for i in range(num_comments):
        reply_id = str(uuid.uuid5(uuid.UUID('6ba7b813-9dad-11d1-80b4-00c04fd430c8'), f'{post_id}-reply-{i}'))
        reply_author_name, reply_author_email = reply_authors[i % len(reply_authors)]
        
        # Utiliser une réponse spécifique si elle existe, sinon utiliser les templates
        if i in specific_replies:
            reply_content = specific_replies[i]
        elif i == 0:
            # Première réponse : détaillée et utile
            reply_content = available_replies[i % len(available_replies)]
        elif i == 1:
            # Deuxième réponse : complémentaire ou alternative
            if len(available_replies) > 1:
                reply_content = available_replies[1 % len(available_replies)]
            else:
                reply_content = f"D'accord avec {reply_authors[0][0]} ! J'ajouterais que {available_replies[0][:120]}..."
        else:
            # Autres réponses : références aux réponses précédentes pour créer un vrai fil de discussion
            if i == 2:
                reply_content = f"Merci {reply_authors[0][0]} et {reply_authors[1][0]} pour ces conseils ! Je confirme que {available_replies[min(i-1, len(available_replies)-1)][:100]}... C'est vraiment ce qui m'a aidé aussi."
            else:
                reply_content = f"Super fil de discussion ! Tous ces conseils sont vraiment utiles. Pour ma part, je recommande aussi de {available_replies[min(i-2, len(available_replies)-1)][:80]}..."
        
        replies.append({
            'id': reply_id,
            'post_id': post_id,
            'content': reply_content,
            'author_email': reply_author_email,
            'author_name': reply_author_name,
            'is_solution': i == 0 and post_index % 4 == 0,  # 25% des premières réponses marquées solution
            'likes_count': (num_comments - i) * 3 + (i % 2)  # Plus de likes pour les premières réponses
        })
    
    post = {
        'id': post_id,
        'title': titles[post_index] if post_index < len(titles) else f"Question {post_index + 1}",
        'content': contents[post_index] if post_index < len(contents) else contents[-1],
        'category': categories[post_index] if post_index < len(categories) else 'general',
        'author_email': author_email,
        'author_name': author_name,
        'replies_count': num_comments,
        'views_count': 50 + post_index * 10,
        'is_pinned': post_index < 3,  # 3 premiers posts épinglés
        'is_solved': post_index % 3 == 0,
        'tags': [],
        'replies': replies
    }
    
    return post

def main():
    """Génère tous les cours et posts forum"""
    courses = []
    forum_posts = []
    
    course_index = 1
    
    # Générer les cours par catégorie
    for category_key, category_info in CATEGORIES.items():
        themes = category_info['themes']
        count = category_info['count']
        
        for i in range(count):
            theme = themes[i % len(themes)]
            course = generate_course(category_key, category_info, theme, course_index)
            courses.append(course)
            course_index += 1
    
    # Générer 25 posts forum
    for i in range(25):
        post = generate_forum_post(i)
        forum_posts.append(post)
    
    # Générer le SQL
    sql_lines = [
        "-- =====================================================\n",
        "-- SCRIPT COMPLET DE DONNÉES POUR FRANCEPREP ACADEMY\n",
        f"-- {len(courses)} cours complets + {len(forum_posts)} posts forum avec commentaires\n",
        f"-- Généré le {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n",
        "-- =====================================================\n\n",
        "-- Désactiver temporairement les contraintes\n",
        "SET session_replication_role = replica;\n\n"
    ]
    
    # Insérer les cours
    sql_lines.append("-- =====================================================\n")
    sql_lines.append("-- COURS\n")
    sql_lines.append("-- =====================================================\n\n")
    
    for course in courses:
        sql_lines.append(f"INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating) VALUES\n")
        sql_lines.append("(\n")
        sql_lines.append(f"  '{course['id']}',\n")
        sql_lines.append(f"  {repr(course['title'])},\n")
        sql_lines.append(f"  {repr(course['slug'])},\n")
        sql_lines.append(f"  {repr(course['description'])},\n")
        sql_lines.append(f"  {repr(course['short_description'])},\n")
        sql_lines.append(f"  {repr(course['category'])},\n")
        sql_lines.append(f"  {repr(course['level'])},\n")
        sql_lines.append(f"  {repr(course['language'])},\n")
        sql_lines.append(f"  {course['duration_hours']},\n")
        sql_lines.append(f"  {course['price']},\n")
        sql_lines.append(f"  {repr(course['thumbnail_url'])},\n")
        # Convertir JSON en chaîne SQL correctement échappée
        objectives_json = json.dumps(course['objectives'], ensure_ascii=False).replace("'", "''")
        prerequisites_json = json.dumps(course['prerequisites'], ensure_ascii=False).replace("'", "''")
        sql_lines.append(f"  '{objectives_json}'::jsonb,\n")
        sql_lines.append(f"  '{prerequisites_json}'::jsonb,\n")
        sql_lines.append(f"  {str(course['is_published']).upper()},\n")
        sql_lines.append(f"  {course['rating']}\n")
        sql_lines.append(") ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;\n\n")
        
        # Insérer les leçons
        for lesson in course['lessons']:
            sql_lines.append(f'INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes) VALUES\n')
            sql_lines.append("(\n")
            sql_lines.append(f"  '{lesson['id']}',\n")
            sql_lines.append(f"  '{lesson['course_id']}',\n")
            # Échapper correctement le titre et le contenu pour SQL
            # Remplacer les apostrophes par deux apostrophes et échapper les guillemets
            title_escaped = lesson['title'].replace("'", "''").replace('\\', '\\\\')
            content_escaped = lesson['content'].replace("'", "''").replace('\\', '\\\\')
            sql_lines.append(f"  '{title_escaped}',\n")
            sql_lines.append(f"  '{content_escaped}',\n")
            sql_lines.append(f"  {lesson['order']},\n")
            sql_lines.append(f"  {lesson['duration_minutes']}\n")
            sql_lines.append(") ON CONFLICT (id) DO NOTHING;\n\n")
    
    # Insérer les posts forum
    sql_lines.append("-- =====================================================\n")
    sql_lines.append("-- POSTS FORUM\n")
    sql_lines.append("-- =====================================================\n\n")
    
    for post in forum_posts:
        # Échapper correctement tous les textes
        title_escaped = post['title'].replace("'", "''")
        content_escaped = post['content'].replace("'", "''")
        category_escaped = post['category'].replace("'", "''")
        author_email_escaped = post['author_email'].replace("'", "''")
        author_name_escaped = post['author_name'].replace("'", "''")
        sql_lines.append(f"INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES\n")
        sql_lines.append("(\n")
        sql_lines.append(f"  '{post['id']}',\n")
        sql_lines.append(f"  '{title_escaped}',\n")
        sql_lines.append(f"  '{content_escaped}',\n")
        sql_lines.append(f"  '{category_escaped}',\n")
        sql_lines.append(f"  '{author_email_escaped}',\n")
        sql_lines.append(f"  '{author_name_escaped}',\n")
        sql_lines.append(f"  {post['replies_count']},\n")
        sql_lines.append(f"  {post['views_count']},\n")
        sql_lines.append(f"  {str(post['is_pinned']).upper()},\n")
        sql_lines.append(f"  {str(post['is_solved']).upper()},\n")
        tags_json = json.dumps(post['tags'], ensure_ascii=False).replace("'", "''")
        sql_lines.append(f"  '{tags_json}'::jsonb\n")
        sql_lines.append(") ON CONFLICT (id) DO NOTHING;\n\n")
        
        # Insérer les réponses
        for reply in post['replies']:
            reply_content_escaped = reply['content'].replace("'", "''")
            reply_email_escaped = reply['author_email'].replace("'", "''")
            reply_name_escaped = reply['author_name'].replace("'", "''")
            sql_lines.append(f"INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES\n")
            sql_lines.append("(\n")
            sql_lines.append(f"  '{reply['id']}',\n")
            sql_lines.append(f"  '{reply['post_id']}',\n")
            sql_lines.append(f"  '{reply_content_escaped}',\n")
            sql_lines.append(f"  '{reply_email_escaped}',\n")
            sql_lines.append(f"  '{reply_name_escaped}',\n")
            sql_lines.append(f"  {str(reply['is_solution']).upper()},\n")
            sql_lines.append(f"  {reply['likes_count']}\n")
            sql_lines.append(") ON CONFLICT (id) DO NOTHING;\n\n")
    
    # Réactiver les contraintes
    sql_lines.append("-- Réactiver les contraintes\n")
    sql_lines.append("SET session_replication_role = DEFAULT;\n")
    
    # Écrire le fichier SQL
    with open('seed-complete-data.sql', 'w', encoding='utf-8') as f:
        f.writelines(sql_lines)
    
    print(f"OK - Genere {len(courses)} cours avec {sum(len(c['lessons']) for c in courses)} lecons")
    print(f"OK - Genere {len(forum_posts)} posts forum avec {sum(len(p['replies']) for p in forum_posts)} commentaires")
    print(f"OK - Fichier SQL cree : seed-complete-data.sql")

if __name__ == '__main__':
    main()

