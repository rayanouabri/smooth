#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les INSERT INTO lessons pour ajouter les valeurs manquantes (order et duration_minutes)
"""

import re
from pathlib import Path

def fix_lessons_insert(content):
    """Corrige les INSERT INTO lessons"""
    
    # Pattern pour trouver INSERT INTO lessons avec ses valeurs
    # Les colonnes sont: id, course_id, title, content, "order", duration_minutes, video_url, resources
    pattern = r'(INSERT\s+INTO\s+lessons\s*\([^)]+\)\s*VALUES\s*\()(.*?)(\)\s*ON\s+CONFLICT)'
    
    def fix_match(match):
        header = match.group(1)
        values_text = match.group(2)
        footer = match.group(3)
        
        # Extraire les valeurs en comptant les virgules au niveau 0 (hors chaînes)
        values = []
        current = ""
        in_string = False
        string_char = None
        paren_depth = 0
        
        for i, char in enumerate(values_text):
            if char in ("'", '"') and (i == 0 or values_text[i-1] != '\\'):
                if not in_string:
                    in_string = True
                    string_char = char
                elif char == string_char:
                    # Vérifier si c'est une apostrophe échappée ''
                    if char == "'" and i + 1 < len(values_text) and values_text[i+1] == "'":
                        current += "''"
                        continue
                    in_string = False
                    string_char = None
            elif char == '(' and not in_string:
                paren_depth += 1
            elif char == ')' and not in_string:
                paren_depth -= 1
            elif char == ',' and not in_string and paren_depth == 0:
                value = current.strip()
                if value:
                    values.append(value)
                current = ""
                continue
            
            current += char
        
        if current.strip():
            values.append(current.strip())
        
        # Maintenant, vérifier combien de valeurs on a
        # On devrait avoir 8 valeurs : id, course_id, title, content, order, duration_minutes, video_url, resources
        
        # Si on a moins de 6 valeurs, il y a un problème
        # Structure attendue après extraction :
        # 0: id
        # 1: course_id
        # 2: title
        # 3: content (peut être très long)
        # 4: order (peut manquer)
        # 5: duration_minutes (peut manquer)
        # 6: video_url (peut être NULL)
        # 7: resources (peut être '[]'::jsonb)
        
        # Identifier les valeurs par leur type
        fixed_values = []
        
        # id (première valeur, UUID)
        if len(values) > 0:
            fixed_values.append(values[0])
        
        # course_id (deuxième valeur, UUID)
        if len(values) > 1:
            fixed_values.append(values[1])
        
        # title (troisième valeur, chaîne)
        if len(values) > 2:
            fixed_values.append(values[2])
        
        # content (quatrième valeur, chaîne longue avec markdown)
        if len(values) > 3:
            fixed_values.append(values[3])
        
        # Chercher "order" - peut être dans values[4] ou après
        order_found = False
        duration_found = False
        video_url_found = False
        
        # Si on a 4 valeurs, alors il manque order, duration_minutes, video_url, resources
        # Si on a 5 valeurs, vérifier ce que c'est
        # Si on a 6 valeurs, etc.
        
        idx = 4
        # order
        if len(values) > idx:
            val = values[idx]
            # Si c'est un nombre entre 1-10, c'est probablement order
            if re.match(r'^\s*\d+\s*$', val) and 1 <= int(val.strip()) <= 100:
                fixed_values.append(val)
                order_found = True
                idx += 1
            else:
                # C'est peut-être NULL ou autre chose, on va mettre un ordre par défaut
                # Mais d'abord, regardons la valeur suivante
                pass
        
        if not order_found:
            # Essayer de trouver order dans les valeurs suivantes
            for i in range(idx, min(idx + 3, len(values))):
                val = values[i]
                if re.match(r'^\s*\d+\s*$', val) and 1 <= int(val.strip()) <= 100:
                    fixed_values.append(val)
                    order_found = True
                    idx = i + 1
                    break
            
            if not order_found:
                # Pas trouvé, mettre 1 par défaut
                fixed_values.append('1')
        
        # duration_minutes
        if len(values) > idx:
            val = values[idx]
            # Si c'est un nombre entre 30-90 ou proche, c'est probablement duration_minutes
            if re.match(r'^\s*\d+\s*$', val):
                num = int(val.strip())
                if 30 <= num <= 120:  # Durée raisonnable
                    fixed_values.append(val)
                    duration_found = True
                    idx += 1
        
        if not duration_found:
            # Chercher dans les valeurs suivantes
            for i in range(idx, min(idx + 3, len(values))):
                val = values[i]
                if re.match(r'^\s*\d+\s*$', val):
                    num = int(val.strip())
                    if 30 <= num <= 120:
                        fixed_values.append(val)
                        duration_found = True
                        idx = i + 1
                        break
            
            if not duration_found:
                # Pas trouvé, mettre 60 par défaut
                fixed_values.append('60')
        
        # video_url
        if len(values) > idx:
            val = values[idx]
            # Si c'est NULL, c'est video_url
            if val.strip().upper() == 'NULL':
                fixed_values.append('NULL')
                video_url_found = True
                idx += 1
            elif 'http' in val.lower() or 'youtube' in val.lower() or 'vimeo' in val.lower():
                fixed_values.append(val)
                video_url_found = True
                idx += 1
        
        if not video_url_found:
            fixed_values.append('NULL')
        
        # resources (dernière valeur)
        if len(values) > idx:
            fixed_values.append(values[idx])
        else:
            # Vérifier s'il y a une valeur après video_url
            if len(values) > idx - 1 and idx > 0:
                # Prendre la dernière valeur
                fixed_values.append(values[-1])
            else:
                fixed_values.append("'[]'::jsonb")
        
        # Reconstruire
        fixed_values_text = ',\n  '.join(fixed_values)
        return f"{header}\n  {fixed_values_text}\n{footer}"
    
    # Appliquer à tous les INSERT INTO lessons
    fixed_content = re.sub(pattern, fix_match, content, flags=re.DOTALL | re.IGNORECASE)
    
    return fixed_content

def fix_file(file_path):
    """Corrige un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Correction des INSERT INTO lessons
    content = fix_lessons_insert(content)
    
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
    
    print(f"Correction des INSERT INTO lessons dans {len(sql_files)} fichiers...\n")
    
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

