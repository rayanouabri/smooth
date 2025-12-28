#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige TOUS les problèmes SQL : ordre des valeurs, valeurs manquantes, virgules
"""

import re
from pathlib import Path

def parse_sql_string(text, start_pos):
    """Parse une chaîne SQL correctement"""
    if start_pos >= len(text) or text[start_pos] != "'":
        return None, start_pos
    
    result = "'"
    pos = start_pos + 1
    
    while pos < len(text):
        char = text[pos]
        result += char
        
        if char == "'":
            # Vérifier si c'est une apostrophe échappée ''
            if pos + 1 < len(text) and text[pos + 1] == "'":
                result += "'"
                pos += 2
                continue
            # Sinon, fin de chaîne
            return result, pos + 1
        
        pos += 1
    
    return result, pos

def extract_values_from_sql(values_text):
    """Extrait les valeurs SQL en gérant correctement les chaînes"""
    values = []
    current = ""
    in_string = False
    string_char = None
    paren_depth = 0
    
    i = 0
    while i < len(values_text):
        char = values_text[i]
        
        # Détecter le début d'une chaîne SQL
        if char in ("'", '"') and (i == 0 or values_text[i-1] not in ['\\', "'"]):
            if not in_string:
                in_string = True
                string_char = char
                sql_string, new_pos = parse_sql_string(values_text, i)
                if sql_string:
                    current += sql_string
                    i = new_pos
                    continue
            elif char == string_char:
                in_string = False
                string_char = None
        
        # Gérer les parenthèses (pour les arrays, etc.)
        if char == '(' and not in_string:
            paren_depth += 1
        elif char == ')' and not in_string:
            paren_depth -= 1
        
        # Séparateur de valeur (virgule au niveau 0)
        if char == ',' and not in_string and paren_depth == 0:
            value = current.strip()
            if value:
                values.append(value)
            current = ""
            i += 1
            continue
        
        current += char
        i += 1
    
    # Dernière valeur
    if current.strip():
        values.append(current.strip())
    
    return values

def fix_courses_insert(content):
    """Corrige les INSERT INTO courses"""
    pattern = r'(INSERT\s+INTO\s+courses\s*\([^)]+\)\s*VALUES\s*\()(.*?)(\)\s*ON\s+CONFLICT)'
    
    def fix_match(match):
        header = match.group(1)
        values_text = match.group(2).strip()
        footer = match.group(3)
        
        # Extraire les colonnes
        fields_match = re.search(r'\(([^)]+)\)', header)
        if not fields_match:
            return match.group(0)
        
        fields = [f.strip().strip('"') for f in fields_match.group(1).split(',')]
        
        # Extraire les valeurs
        values = extract_values_from_sql(values_text)
        
        # Mapper les valeurs aux colonnes
        expected_fields = ['id', 'title', 'slug', 'description', 'short_description', 'category', 
                          'level', 'language', 'duration_hours', 'price', 'thumbnail_url', 
                          'objectives', 'prerequisites', 'is_published', 'rating', 'reviews_count', 'enrolled_count']
        
        # Créer un dictionnaire de mapping
        field_to_value = {}
        for i, field in enumerate(fields):
            if i < len(values):
                field_to_value[field] = values[i]
        
        # Reconstruire les valeurs dans le bon ordre
        fixed_values = []
        for field in expected_fields:
            if field in field_to_value:
                fixed_values.append(field_to_value[field])
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
        
        # Reconstruire
        fixed_values_text = ',\n  '.join(fixed_values)
        return f"{header}\n  {fixed_values_text}\n{footer}"
    
    return re.sub(pattern, fix_match, content, flags=re.DOTALL | re.IGNORECASE)

def fix_file(file_path):
    """Corrige tous les problèmes dans un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Fix 1: Virgule avant parenthèse
    content = re.sub(r',\s*\)\s*ON\s+CONFLICT', r') ON CONFLICT', content, flags=re.IGNORECASE)
    
    # Fix 2: INSERT INTO courses
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
    
    print(f"Correction complète de {len(sql_files)} fichiers...\n")
    
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

