#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige l'ordre des valeurs dans INSERT INTO courses
"""

import re
from pathlib import Path

def fix_course_insert(content):
    """Corrige l'ordre des valeurs dans INSERT INTO courses"""
    
    # Pattern pour trouver INSERT INTO courses
    pattern = r'(INSERT\s+INTO\s+courses\s*\([^)]+\)\s*VALUES\s*\()(.*?)(\)\s*ON\s+CONFLICT)'
    
    def fix_match(match):
        header = match.group(1)
        values_text = match.group(2)
        footer = match.group(3)
        
        # Extraire les champs de l'en-tête
        fields_match = re.search(r'\(([^)]+)\)', header)
        if not fields_match:
            return match.group(0)
        
        fields = [f.strip().strip('"') for f in fields_match.group(1).split(',')]
        
        # Extraire les valeurs actuelles (méthode simple : chercher les patterns)
        # On va chercher les valeurs une par une en respectant les chaînes SQL
        
        # Pattern pour trouver les valeurs : soit une chaîne '...', soit un nombre, soit TRUE/FALSE, soit NULL, soit jsonb
        value_patterns = []
        
        # Chercher toutes les valeurs
        i = 0
        values = []
        current = ""
        in_string = False
        string_char = None
        paren_depth = 0
        bracket_depth = 0
        
        while i < len(values_text):
            char = values_text[i]
            
            if char in ("'", '"') and (i == 0 or values_text[i-1] != '\\'):
                if not in_string:
                    in_string = True
                    string_char = char
                elif char == string_char:
                    # Vérifier si c'est une apostrophe échappée ''
                    if char == "'" and i + 1 < len(values_text) and values_text[i+1] == "'":
                        current += "''"
                        i += 2
                        continue
                    in_string = False
                    string_char = None
            elif char == '(' and not in_string:
                paren_depth += 1
            elif char == ')' and not in_string:
                paren_depth -= 1
            elif char == '[' and not in_string:
                bracket_depth += 1
            elif char == ']' and not in_string:
                bracket_depth -= 1
            elif char == ',' and not in_string and paren_depth == 0 and bracket_depth == 0:
                value = current.strip()
                if value:
                    values.append(value)
                current = ""
                i += 1
                continue
            
            current += char
            i += 1
        
        if current.strip():
            values.append(current.strip())
        
        # Maintenant, mapper les valeurs aux champs attendus
        expected_fields = ['id', 'title', 'slug', 'description', 'short_description', 'category', 
                          'level', 'language', 'duration_hours', 'price', 'thumbnail_url', 
                          'objectives', 'prerequisites', 'is_published', 'rating', 'reviews_count', 'enrolled_count']
        
        # Créer un mapping des valeurs actuelles
        field_value_map = {}
        for i, field in enumerate(fields):
            if i < len(values):
                field_value_map[field] = values[i]
        
        # Reconstruire les valeurs dans le bon ordre
        fixed_values = []
        for field in expected_fields:
            if field in field_value_map:
                fixed_values.append(field_value_map[field])
            else:
                # Valeur par défaut
                if field == 'duration_hours':
                    fixed_values.append('4')
                elif field == 'price':
                    fixed_values.append('0')
                elif field == 'is_published':
                    fixed_values.append('TRUE')
                elif field == 'rating':
                    fixed_values.append('4.5')
                elif field == 'reviews_count':
                    fixed_values.append('100')
                elif field == 'enrolled_count':
                    fixed_values.append('500')
                else:
                    fixed_values.append('NULL')
        
        # Reconstruire
        fixed_values_text = ',\n  '.join(fixed_values)
        return f"{header}\n  {fixed_values_text}\n{footer}"
    
    # Appliquer
    fixed_content = re.sub(pattern, fix_match, content, flags=re.DOTALL | re.IGNORECASE)
    
    return fixed_content

def fix_file(file_path):
    """Corrige un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Correction 1 : Virgule avant parenthèse
    content = re.sub(r',\s*\)\s*ON\s+CONFLICT', r') ON CONFLICT', content, flags=re.IGNORECASE)
    
    # Correction 2 : Ordre des champs
    content = fix_course_insert(content)
    
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
    
    print(f"Correction de l'ordre des champs dans {len(sql_files)} fichiers...\n")
    
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

