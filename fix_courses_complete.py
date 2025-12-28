#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige TOUS les INSERT INTO courses pour s'assurer qu'ils ont toutes les valeurs requises
"""

import re
from pathlib import Path

def fix_courses_insert(content):
    """Corrige les INSERT INTO courses qui ont des valeurs manquantes"""
    
    # Pattern pour trouver INSERT INTO courses
    pattern = r'(INSERT\s+INTO\s+courses\s*\([^)]+\)\s*VALUES\s*\()(.*?)(\)\s*ON\s+CONFLICT)'
    
    def fix_match(match):
        header = match.group(1)
        values_text = match.group(2).strip()
        footer = match.group(3)
        
        # Extraire les colonnes de l'en-tête
        fields_match = re.search(r'\(([^)]+)\)', header)
        if not fields_match:
            return match.group(0)
        
        fields = [f.strip().strip('"') for f in fields_match.group(1).split(',')]
        expected_field_count = len(fields)
        
        # Compter les valeurs en tenant compte des chaînes SQL
        values = []
        current = ""
        in_string = False
        string_char = None
        paren_depth = 0
        
        i = 0
        while i < len(values_text):
            char = values_text[i]
            
            # Gérer les chaînes SQL
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
            
            # Gérer les parenthèses
            if char == '(' and not in_string:
                paren_depth += 1
            elif char == ')' and not in_string:
                paren_depth -= 1
            
            # Séparateur de valeur
            if char == ',' and not in_string and paren_depth == 0:
                value = current.strip()
                if value:
                    values.append(value)
                current = ""
                i += 1
                continue
            
            current += char
            i += 1
        
        # Ajouter la dernière valeur
        if current.strip():
            values.append(current.strip())
        
        # Vérifier si on a toutes les valeurs
        if len(values) < expected_field_count:
            # Il manque des valeurs
            missing_count = expected_field_count - len(values)
            
            # Identifier quelles valeurs manquent en fonction de la dernière valeur
            # Les champs attendus : id, title, slug, description, short_description, category, level, language, 
            # duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count
            
            # Si la dernière valeur est '[]'::jsonb, alors il manque : is_published, rating, reviews_count, enrolled_count
            if len(values) > 0 and "'[]'::jsonb" in values[-1]:
                # Ajouter les valeurs manquantes
                values.append('TRUE')  # is_published
                values.append('4.5')   # rating
                values.append('100')   # reviews_count
                values.append('500')   # enrolled_count
            
            # Reconstruire
            fixed_values_text = ',\n  '.join(values)
            return f"{header}\n  {fixed_values_text}\n{footer}"
        
        # Si on a toutes les valeurs, retourner l'original
        return match.group(0)
    
    fixed_content = re.sub(pattern, fix_match, content, flags=re.DOTALL | re.IGNORECASE)
    return fixed_content

def fix_file(file_path):
    """Corrige un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Correction 1 : Virgule avant parenthèse
    content = re.sub(r',\s*\)\s*ON\s+CONFLICT', r') ON CONFLICT', content, flags=re.IGNORECASE)
    
    # Correction 2 : Valeurs manquantes dans INSERT INTO courses
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
    
    print(f"Correction des INSERT INTO courses dans {len(sql_files)} fichiers...\n")
    
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

