#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les triple apostrophes incorrectes dans tous les fichiers SQL
Le problème: L'''État devrait être L''État dans la chaîne SQL
"""

import re
from pathlib import Path

batches_dir = Path("batches_fixed")

def fix_triple_apostrophes(content):
    """Corrige les triple apostrophes incorrectes"""
    # Pattern pour trouver des triple apostrophes suivies d'une majuscule
    # Exemple: L'''État -> L''État
    # Mais attention: on ne veut pas toucher aux chaînes déjà correctes
    
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        fixed_line = line
        
        # Remplacer les triple apostrophes suivies d'une majuscule par double apostrophes
        # Pattern: L'''État -> L''État
        # Mais il faut faire attention au contexte (ne pas toucher aux URLs, etc.)
        
        # Chercher les patterns comme L'''État, d'''Information, etc.
        # et les remplacer par L''État, d''Information, etc.
        
        # Pattern: une lettre minuscule ou majuscule, suivie de trois apostrophes, suivie d'une majuscule
        pattern = r"([a-zA-Z])'''([A-ZÉÈÊÀÂÇÔÙÛÎÏ])"
        
        def replace_triple_apostrophe(match):
            letter = match.group(1)
            next_letter = match.group(2)
            return f"{letter}''{next_letter}"
        
        fixed_line = re.sub(pattern, replace_triple_apostrophe, fixed_line)
        
        fixed_lines.append(fixed_line)
    
    return '\n'.join(fixed_lines)

# Traiter tous les fichiers SQL dans batches_fixed
sql_files = list(batches_dir.glob("*.sql"))

print(f"Traitement de {len(sql_files)} fichiers...")

for sql_file in sql_files:
    print(f"\nTraitement de {sql_file.name}...")
    
    with open(sql_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content_fixed = fix_triple_apostrophes(content)
    
    # Écrire le fichier corrigé
    with open(sql_file, 'w', encoding='utf-8') as f:
        f.write(content_fixed)
    
    # Compter les corrections
    original_count = len(re.findall(r"[a-zA-Z]'''[A-ZÉÈÊÀÂÇÔÙÛÎÏ]", content))
    fixed_count = len(re.findall(r"[a-zA-Z]'''[A-ZÉÈÊÀÂÇÔÙÛÎÏ]", content_fixed))
    
    if original_count > fixed_count:
        print(f"  ✓ Corrigé {original_count - fixed_count} occurrence(s)")

print("\n✓ Correction terminée pour tous les fichiers !")

