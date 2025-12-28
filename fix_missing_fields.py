#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les INSERT INTO courses qui ont des valeurs manquantes
"""

import re
from pathlib import Path

def fix_course_inserts(content):
    """Corrige les INSERT INTO courses avec valeurs manquantes"""
    
    # Pattern pour trouver INSERT INTO courses avec ses valeurs
    pattern = r'(INSERT\s+INTO\s+courses\s*\([^)]+\)\s*VALUES\s*\()(.*?)(\)\s*ON\s+CONFLICT)'
    
    def fix_insert(match):
        header = match.group(1)
        values_text = match.group(2)
        footer = match.group(3)
        
        # Extraire les champs de l'en-tête
        fields_match = re.search(r'\(([^)]+)\)', header)
        if not fields_match:
            return match.group(0)
        
        fields = [f.strip().strip('"') for f in fields_match.group(1).split(',')]
        
        # Extraire les valeurs actuelles (c'est complexe car il y a des chaînes)
        # On va compter les virgules au niveau 0 (hors chaînes)
        values = []
        current = ""
        in_string = False
        string_char = None
        paren_depth = 0
        
        for char in values_text:
            if char in ("'", '"') and (not current or current[-1] != '\\'):
                if not in_string:
                    in_string = True
                    string_char = char
                elif char == string_char:
                    # Vérifier si c'est une apostrophe échappée ''
                    if char == "'" and len(current) > 0 and current[-1] == "'":
                        current += char
                        continue
                    in_string = False
                    string_char = None
            elif char == '(' and not in_string:
                paren_depth += 1
            elif char == ')' and not in_string:
                paren_depth -= 1
            elif char == ',' and not in_string and paren_depth == 0:
                values.append(current.strip())
                current = ""
                continue
            
            current += char
        
        if current.strip():
            values.append(current.strip())
        
        # Identifier les champs manquants
        expected_fields = ['id', 'title', 'slug', 'description', 'short_description', 'category', 
                          'level', 'language', 'duration_hours', 'price', 'thumbnail_url', 
                          'objectives', 'prerequisites', 'is_published', 'rating', 'reviews_count', 'enrolled_count']
        
        # Mapper les valeurs aux champs
        field_value_map = {}
        for i, field in enumerate(fields):
            if i < len(values):
                field_value_map[field] = values[i]
        
        # Vérifier les champs manquants et ajouter les valeurs par défaut
        fixed_values = []
        for field in expected_fields:
            if field in field_value_map:
                fixed_values.append(field_value_map[field])
            else:
                # Valeur par défaut selon le champ
                if field == 'duration_hours':
                    fixed_values.append('4')  # Valeur par défaut
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
                    # Pour les autres champs, utiliser NULL ou valeur par défaut
                    fixed_values.append('NULL')
        
        # Reconstruire l'INSERT
        fixed_values_text = ',\n  '.join(fixed_values)
        return f"{header}\n  {fixed_values_text}\n{footer}"
    
    # Appliquer la correction
    fixed_content = re.sub(pattern, fix_insert, content, flags=re.DOTALL | re.IGNORECASE)
    
    return fixed_content

def fix_file(file_path):
    """Corrige un fichier SQL"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Correction 1 : Virgule avant parenthèse
    content = re.sub(r',\s*\)\s*ON\s+CONFLICT', r') ON CONFLICT', content, flags=re.IGNORECASE)
    
    # Correction 2 : Champs manquants dans INSERT INTO courses
    content = fix_course_inserts(content)
    
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
    
    print(f"Correction de {len(sql_files)} fichiers...\n")
    
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

