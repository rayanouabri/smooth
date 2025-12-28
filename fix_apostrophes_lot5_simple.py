#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les apostrophes mal échappées dans lot_05_cours_21_a_25.sql
"""

file_path = "batches_fixed/lot_05_cours_21_a_25.sql"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Liste des remplacements à faire
# Format: (ancien, nouveau)
replacements = [
    ("d'information", "d''information"),
    ("d'installation", "d''installation"),
    ("d'éligibilité", "d''éligibilité"),
    ("d'énergie", "d''énergie"),
    ("d'accès", "d''accès"),
    ("d'engagement", "d''engagement"),
    ("d'Arcep", "d''Arcep"),
    ("l'information", "l''information"),
    ("l'installation", "l''installation"),
    ("l'éligibilité", "l''éligibilité"),
    ("l'énergie", "l''énergie"),
    ("l'accès", "l''accès"),
    ("l'engagement", "l''engagement"),
    ("l'Arcep", "l''Arcep"),
    ("l'ancien", "l''ancien"),
    ("l'ancienne", "l''ancienne"),
    ("s'information", "s''information"),
    ("c'est", "c''est"),
    ("n'est", "n''est"),
    ("m'est", "m''est"),
    ("t'est", "t''est"),
    ("j'est", "j''est"),
    ("qu'est", "qu''est"),
    ("qu'il", "qu''il"),
    ("C'est", "C''est"),
    ("N'est", "N''est"),
    ("L'", "L''"),
    ("D'", "D''"),
]

# Appliquer les remplacements en évitant de toucher aux URLs et aux backticks
lines = content.split('\n')
fixed_lines = []

for i, line in enumerate(lines):
    fixed_line = line
    
    # Si la ligne contient des apostrophes, vérifier qu'on ne touche pas aux URLs
    if "'" in fixed_line:
        # Trouver toutes les URLs dans la ligne
        import re
        url_pattern = r'https?://[^\s\'\)]*'
        urls = list(re.finditer(url_pattern, fixed_line))
        
        # Appliquer les remplacements en évitant les zones d'URLs
        for old, new in replacements:
            if old in fixed_line:
                # Trouver toutes les occurrences
                pos = 0
                while True:
                    pos = fixed_line.find(old, pos)
                    if pos == -1:
                        break
                    
                    # Vérifier si on est dans une URL
                    in_url = False
                    for url_match in urls:
                        if url_match.start() <= pos <= url_match.end():
                            in_url = True
                            break
                    
                    # Vérifier si on est dans des backticks
                    before = fixed_line[:pos]
                    after = fixed_line[pos:]
                    backticks_before = before.count('`')
                    backticks_after = after.count('`')
                    in_backticks = (backticks_before % 2 == 1)
                    
                    # Si ce n'est pas dans une URL ni dans des backticks, remplacer
                    if not in_url and not in_backticks:
                        fixed_line = fixed_line[:pos] + new + fixed_line[pos+len(old):]
                        pos += len(new)
                    else:
                        pos += len(old)
    
    fixed_lines.append(fixed_line)

content_fixed = '\n'.join(fixed_lines)

# Écrire le fichier corrigé
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content_fixed)

print("Correction des apostrophes terminee !")
print("Fichier corrige :", file_path)

