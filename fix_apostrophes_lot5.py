#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les apostrophes mal échappées dans lot_05_cours_21_a_25.sql
"""

import re

file_path = "batches_fixed/lot_05_cours_21_a_25.sql"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Les apostrophes dans les chaînes SQL doivent être doublées ('')
# Mais il faut faire attention à ne pas toucher aux apostrophes déjà échappées ('')
# et aux apostrophes dans les URLs ou les backticks

# Pattern pour trouver les contenus entre des quotes simples dans INSERT INTO lessons
# On va chercher les contenus qui ont des apostrophes simples non échappées après d', l', s', etc.

# D'abord, trouvons tous les contenus de leçons (entre '...' dans VALUES)
# Le problème est dans le contenu des leçons qui est dans une chaîne SQL

# On va chercher les patterns comme "d'information", "l'information", etc. dans les chaînes SQL
# et les remplacer par "d''information", "l''information", etc.

# Pattern pour trouver des apostrophes après d', l', s', c', n', m', t', j', qu' suivi d'une lettre minuscule
# dans les chaînes SQL (mais pas dans les URLs ou backticks)

def fix_apostrophes_in_sql_strings(content):
    """Corrige les apostrophes dans les chaînes SQL"""
    lines = content.split('\n')
    fixed_lines = []
    in_string = False
    string_start = -1
    
    for i, line in enumerate(lines):
        # Chercher le début d'une chaîne SQL (début de VALUES après INSERT INTO lessons)
        if 'INSERT INTO lessons' in line or (in_string and "VALUES" in line):
            # On va traiter ligne par ligne
            pass
        
        # Chercher les apostrophes simples qui suivent une lettre minuscule et précèdent une lettre
        # Pattern: lettre minuscule + apostrophe simple + lettre
        # Mais il faut être dans une chaîne SQL
        fixed_line = line
        
        # Si on est dans une section de contenu SQL (contenu de lesson entre quotes)
        # Chercher les patterns comme "d'information", "l'Arcep", etc.
        # Pattern: une lettre minuscule suivie d'une apostrophe simple suivie d'une lettre
        # Mais attention aux apostrophes déjà échappées ('')
        
        # Remplacer les apostrophes simples après d', l', s', c', n', m', t', j', qu'
        # sauf si elles sont déjà doublées ou dans des URLs/backticks
        
        # Approche plus simple: chercher toutes les apostrophes simples qui ne sont pas déjà doublées
        # dans les contenus de leçons (qui sont entre '...')
        # Mais il faut faire attention aux apostrophes dans les URLs
        
        # Pattern pour trouver: lettre + apostrophe simple + lettre (mais pas dans URL ou déjà échappé)
        # Exemple: "d'information" -> "d''information"
        
        # On va chercher les contenus dans les VALUES des INSERT INTO lessons
        # et remplacer les apostrophes simples par des apostrophes doubles
        
        # Détection plus précise: si on est dans un contenu SQL (entre quotes dans VALUES)
        # Chercher les patterns comme "d'", "l'", "s'", "c'", "n'", "m'", "t'", "j'", "qu'"
        # suivis d'une lettre et remplacer l'apostrophe par deux apostrophes
        
        # Pattern pour détecter: (d|l|s|c|n|m|t|j|qu)'([a-zA-Z])
        # mais pas si c'est déjà '' ou dans une URL
        
        # Méthode plus sûre: chercher dans le contenu des leçons uniquement
        # Le contenu est entre des quotes simples dans le champ content
        # On va utiliser une regex pour trouver les patterns problématiques
        
        # Trouver tous les patterns comme "d'information", "l'Arcep", etc.
        # qui ne sont pas déjà échappés
        pattern = r"(?<!')([dlscnmqtj]|qu)'([a-zA-Z])"
        
        # Mais il faut éviter de remplacer dans les URLs ou backticks
        # Vérifier si on est dans une URL (http:// ou https://) ou dans des backticks (`)
        
        def replace_apostrophe(match):
            before = match.group(1)
            after = match.group(2)
            # Vérifier le contexte: si on est dans une URL ou des backticks, ne pas remplacer
            start = match.start()
            # Vérifier les 50 caractères avant pour voir si on est dans une URL
            context_before = line[max(0, start-50):start]
            context_after = line[start:min(len(line), start+50)]
            
            # Si on est dans une URL (http:// ou https://) ou des backticks, ne pas toucher
            if 'http://' in context_before or 'https://' in context_before:
                # Vérifier si l'apostrophe est dans l'URL
                url_match = re.search(r'(https?://[^\s]*)', context_before + context_after)
                if url_match and start >= url_match.start() and start <= url_match.end():
                    return match.group(0)  # Ne pas modifier
            
            # Si on est dans des backticks, ne pas toucher
            if '`' in context_before:
                backtick_pos = context_before.rfind('`')
                # Vérifier si on est entre backticks (nombre impair de backticks après le dernier)
                backticks_after = context_after.count('`')
                if backticks_after % 2 == 0:  # Nombre pair = on est dans des backticks
                    return match.group(0)  # Ne pas modifier
            
            # Sinon, remplacer par deux apostrophes
            return f"{before}''{after}"
        
        # Appliquer le remplacement seulement dans les lignes qui contiennent du contenu de leçon
        # (lignes qui sont dans des VALUES avec des quotes)
        if "'" in line and ("INSERT INTO lessons" in '\n'.join(lines[max(0,i-5):i+1]) or in_string):
            fixed_line = re.sub(pattern, replace_apostrophe, line)
        
        fixed_lines.append(fixed_line)
    
    return '\n'.join(fixed_lines)

# Méthode plus simple et plus directe
# Lire le fichier et remplacer toutes les apostrophes simples après certaines lettres
# dans les chaînes SQL des leçons

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Trouver toutes les sections de contenu dans INSERT INTO lessons
# Le contenu est entre des quotes simples qui peuvent être sur plusieurs lignes
# Pattern pour trouver le contenu: 'content' dans VALUES

# On va remplacer toutes les occurrences de patterns comme "d'information" par "d''information"
# mais uniquement dans les contenus de leçons (entre quotes dans VALUES)

# Pattern plus précis: chercher dans le contenu des leçons
# Les contenus de leçons sont dans des INSERT INTO lessons avec VALUES ('...')

# Trouver tous les INSERT INTO lessons et leurs contenus
lesson_pattern = r"(INSERT INTO lessons[^)]*VALUES\s*\([^)]*')(.*?)('\s*,\s*\d+)" # Approximatif

# Approche plus simple: remplacer les patterns problématiques dans tout le fichier
# mais seulement ceux qui sont clairement des apostrophes françaises mal échappées

# Liste des patterns à corriger
replacements = [
    (r"d'information", "d''information"),
    (r"d'installation", "d''installation"),
    (r"d'éligibilité", "d''éligibilité"),
    (r"d'énergie", "d''énergie"),
    (r"d'accès", "d''accès"),
    (r"d'engagement", "d''engagement"),
    (r"d'Arcep", "d''Arcep"),
    (r"l'information", "l''information"),
    (r"l'installation", "l''installation"),
    (r"l'éligibilité", "l''éligibilité"),
    (r"l'énergie", "l''énergie"),
    (r"l'accès", "l''accès"),
    (r"l'engagement", "l''engagement"),
    (r"l'Arcep", "l''Arcep"),
    (r"l'ancien", "l''ancien"),
    (r"s'information", "s''information"),
    (r"c'est", "c''est"),
    (r"n'est", "n''est"),
    (r"m'est", "m''est"),
    (r"t'est", "t''est"),
    (r"j'est", "j''est"),
    (r"qu'est", "qu''est"),
    (r"qu'il", "qu''il"),
]

# Mais attention, il ne faut pas remplacer si c'est déjà échappé ou dans une URL
for old, new in replacements:
    # Remplacer seulement si ce n'est pas déjà '' et pas dans une URL
    # Pattern pour détecter si on est dans une URL
    # On va remplacer mais vérifier le contexte
    
    # Approche: remplacer toutes les occurrences, mais vérifier qu'elles ne sont pas déjà échappées
    # Si old contient une apostrophe simple et qu'on trouve old, vérifier qu'il n'y a pas déjà ''
    if "'" in old:
        # Vérifier qu'on ne remplace pas quelque chose qui est déjà '' ou dans une URL
        pattern_with_context = r"(?<!')(?<!https?://[^' ]*)" + re.escape(old) + r"(?!')"
        content = re.sub(pattern_with_context, new, content, flags=re.IGNORECASE)

# Mais cette approche n'est pas parfaite. Utilisons une approche plus manuelle:
# Chercher la ligne 1145 spécifiquement et corriger

lines = content.split('\n')
for i, line in enumerate(lines):
    # Ligne 1145 (index 1144) ou autour
    if i >= 1140 and i <= 1150:
        # Vérifier si la ligne contient le problème
        if "d'information" in line or "l'information" in line or "d'Arcep" in line:
            # Remplacer les apostrophes simples mal échappées
            # Mais attention aux URLs et backticks
            fixed_line = line
            
            # Si la ligne contient "d'information" ou similaire, remplacer
            # Mais vérifier que ce n'est pas dans une URL
            if "'information" in line and 'http' not in line[max(0, line.find("'information")-20):line.find("'information")]:
                fixed_line = fixed_line.replace("d'information", "d''information")
                fixed_line = fixed_line.replace("l'information", "l''information")
            
            if "'Arcep" in line and 'http' not in line[max(0, line.find("'Arcep")-20):line.find("'Arcep")]:
                fixed_line = fixed_line.replace("d'Arcep", "d''Arcep")
                fixed_line = fixed_line.replace("l'Arcep", "l''Arcep")
            
            lines[i] = fixed_line

content = '\n'.join(lines)

# Maintenant, chercher TOUTES les apostrophes simples après d', l', s', c', n', m', t', j', qu'
# dans les contenus de leçons (qui sont entre quotes simples dans VALUES)
# et les remplacer par deux apostrophes, SAUF si elles sont déjà doublées ou dans des URLs

# Trouver tous les blocs de contenu dans INSERT INTO lessons
# Le contenu est le deuxième paramètre dans VALUES, donc après course_id

# Approche finale: parcourir le fichier et remplacer toutes les apostrophes problématiques
# en étant prudent avec les URLs et les apostrophes déjà échappées

def fix_all_apostrophes(content):
    """Corrige toutes les apostrophes mal échappées dans les contenus SQL"""
    lines = content.split('\n')
    result = []
    in_lesson_content = False
    
    for i, line in enumerate(lines):
        # Détecter si on est dans un contenu de leçon
        if 'INSERT INTO lessons' in line and 'content' in line:
            in_lesson_content = True
        
        if in_lesson_content:
            # Si on trouve la fin du contenu (fermeture de quote suivie de virgule et nombre)
            if re.search(r"'\s*,\s*\d+", line):
                in_lesson_content = False
        
        # Si on est dans le contenu d'une leçon, corriger les apostrophes
        if in_lesson_content or ("content" in line.lower() and "'" in line):
            # Remplacer les patterns problématiques
            # Pattern: lettre + apostrophe simple + lettre (pas déjà échappé)
            
            # Liste de tous les patterns à corriger
            patterns_to_fix = [
                (r"(?<!')([dlscnmqtj]|qu)'(?![a-zA-Z]*')([a-zA-Z])", r"\1''\2"),
            ]
            
            # Mais éviter les URLs
            fixed_line = line
            if "'" in fixed_line:
                # Vérifier si on est dans une URL
                url_pattern = r'https?://[^\s\']*'
                urls = re.finditer(url_pattern, fixed_line)
                url_positions = [(m.start(), m.end()) for m in urls]
                
                # Remplacer les apostrophes qui ne sont pas dans des URLs
                def replace_if_not_in_url(match):
                    pos = match.start()
                    # Vérifier si on est dans une URL
                    for url_start, url_end in url_positions:
                        if url_start <= pos <= url_end:
                            return match.group(0)  # Ne pas remplacer
                    # Vérifier si c'est déjà échappé
                    if match.group(0).count("'") > 1:
                        return match.group(0)  # Ne pas remplacer
                    # Remplacer
                    return match.group(0).replace("'", "''", 1)
                
                # Trouver tous les patterns comme "d'information", "l'Arcep", etc.
                pattern = r"[dlscnmqtj]'[a-zA-Z]|qu'[a-zA-Z]"
                fixed_line = re.sub(pattern, lambda m: m.group(0).replace("'", "''", 1) if not any(url_start <= m.start() <= url_end for url_start, url_end in url_positions) else m.group(0), fixed_line)
            
            result.append(fixed_line)
        else:
            result.append(line)
    
    return '\n'.join(result)

# Appliquer la correction
content_fixed = fix_all_apostrophes(content)

# Vérifier spécifiquement la ligne 1145
lines_fixed = content_fixed.split('\n')
if len(lines_fixed) > 1144:
    line_1145 = lines_fixed[1144]
    # S'assurer que toutes les apostrophes sont bien échappées
    # Remplacer "d'information" par "d''information" si ce n'est pas dans une URL
    if "d'information" in line_1145 or "l'information" in line_1145 or "d'Arcep" in line_1145:
        # Trouver la position de chaque occurrence
        # et vérifier qu'elle n'est pas dans une URL
        fixed_line_1145 = line_1145
        
        # Remplacer tous les patterns problématiques
        for old, new in replacements:
            # Vérifier qu'on n'est pas dans une URL avant de remplacer
            pos = 0
            while True:
                pos = fixed_line_1145.find(old, pos)
                if pos == -1:
                    break
                # Vérifier les 50 caractères avant
                context = fixed_line_1145[max(0, pos-50):pos+len(old)]
                # Si on n'est pas dans une URL, remplacer
                if 'http://' not in context and 'https://' not in context:
                    # Vérifier aussi qu'on n'est pas dans des backticks
                    if context.count('`') % 2 == 0:  # Nombre pair = pas dans des backticks
                        fixed_line_1145 = fixed_line_1145[:pos] + new + fixed_line_1145[pos+len(old):]
                        pos += len(new)
                    else:
                        pos += len(old)
                else:
                    pos += len(old)
        
        lines_fixed[1144] = fixed_line_1145
        content_fixed = '\n'.join(lines_fixed)

# Écrire le fichier corrigé
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content_fixed)

print("Correction des apostrophes terminee !")

