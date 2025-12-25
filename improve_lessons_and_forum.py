#!/usr/bin/env python3
"""
Script pour améliorer les leçons avec des sources officielles
et améliorer les commentaires du forum pour qu'ils soient mieux liés
"""

# Sources officielles par thème
SOURCES = {
    'caf': {
        'site': 'https://www.caf.fr',
        'simulateur': 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/estimateurs',
        'espace': 'https://www.caf.fr/espaces',
        'contact': 'https://www.caf.fr/contact'
    },
    'securite_sociale': {
        'ameli': 'https://www.ameli.fr',
        'cpam': 'https://www.ameli.fr/assure/droits-demarches/principes/etre-affilie-au-regime-general',
        'carte_vitale': 'https://www.ameli.fr/assure/droits-demarches/demarches-et-declarations/remplacer-carte-vitale',
        'mutuelle': 'https://www.service-public.fr/particuliers/vosdroits/F31545'
    },
    'logement': {
        'visale': 'https://www.actionlogement.fr/visale',
        'locapass': 'https://www1.actionlogement.fr/locapass',
        'dossier': 'https://www.service-public.fr/particuliers/vosdroits/F2005'
    },
    'titre_sejour': {
        'prefecture': 'https://www.service-public.fr/particuliers/vosdroits/F1560',
        'rdv': 'https://www.service-public.fr/particuliers/vosdroits/F1560',
        'documents': 'https://www.service-public.fr/particuliers/vosdroits/F1560'
    },
    'francais': {
        'delf': 'https://www.france-education-international.fr/diplome/delf-dalf',
        'ciel': 'https://www.ciep.fr/delf-dalf',
        'apprendre': 'https://www.francaisfacile.com'
    }
}

def get_sources_for_theme(theme_lower):
    """Retourne les sources appropriées selon le thème"""
    if 'caf' in theme_lower or 'allocation' in theme_lower:
        return SOURCES['caf']
    elif 'sécurité' in theme_lower or 'sante' in theme_lower or 'mutuelle' in theme_lower or 'cpam' in theme_lower:
        return SOURCES['securite_sociale']
    elif 'logement' in theme_lower or 'appartement' in theme_lower or 'garant' in theme_lower:
        return SOURCES['logement']
    elif 'titre' in theme_lower or 'visa' in theme_lower or 'séjour' in theme_lower or 'prefecture' in theme_lower:
        return SOURCES['titre_sejour']
    elif 'français' in theme_lower or 'fleur' in theme_lower or 'delf' in theme_lower:
        return SOURCES['francais']
    return {}

