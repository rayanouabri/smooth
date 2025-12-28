#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Ajoute la valeur rating manquante dans les INSERT INTO courses
"""

import re
from pathlib import Path

def fix_courses_insert(content):
    """Corrige les INSERT INTO courses qui manquent rating"""
    pattern = r'(INSERT\s+INTO\s+courses\s*\([^)]+\)\s*VALUES\s*\()(.*?)(\)\s*ON\s+CONFLICT)'
    
    def fix_match(match):
        header = match.group(1)
        values_text = match.group(2).strip()
        footer = match.group(3)
        
        # Vérifier si rating manque (pattern: TRUE suivi directement d'un grand nombre = reviews_count)
        # Pattern à chercher : TRUE,\s*\d{3,},\s*\d+ (TRUE suivi d'un nombre >= 100 = reviews_count)
        # Mais aussi vérifier si on a déjà un rating (nombre décimal < 10)
        has_rating = re.search(r'TRUE\s*,\s*(\d+\.?\d*)\s*,', values_text)
        if has_rating:
            rating_value = has_rating.group(1)
            # Si le nombre après TRUE est >= 100, c'est reviews_count, pas rating
            try:
                if float(rating_value) >= 100:
                    # Il manque rating
                    fixed_values = re.sub(
                        r'TRUE\s*,\s*(\d{3,})\s*,\s*(\d+)',
                        r'TRUE,\n  4.8,\n  \1,\n  \2',
                        values_text
                    )
                    fixed_values_text = fixed_values.strip()
                else:
                    fixed_values_text = values_text
            except:
                fixed_values_text = values_text
        else:
            fixed_values_text = values_text
        
        return f"{header}\n  {fixed_values_text}\n{footer}"
    
    return re.sub(pattern, fix_match, content, flags=re.DOTALL | re.IGNORECASE)

def fix_file(file_path):
    """Corrige un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    content = fix_courses_insert(content)
    
    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    batches_dir = Path("batches_fixed")
    
    if not batches_dir.exists():
        print(f"ERREUR: Dossier '{batches_dir}' n'existe pas")
        return
    
    sql_files = sorted(batches_dir.glob("lot_*.sql"))
    
    print(f"Ajout de rating manquant dans {len(sql_files)} fichiers...\n")
    
    fixed_count = 0
    for sql_file in sql_files:
        if fix_file(sql_file):
            print(f"OK: Corrige {sql_file.name}")
            fixed_count += 1
        else:
            print(f"OK: {sql_file.name} (pas de corrections)")
    
    print(f"\nSUCCES: {fixed_count} fichiers corriges")

if __name__ == "__main__":
    main()

