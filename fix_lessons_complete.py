#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les INSERT INTO lessons - Version améliorée qui gère correctement les chaînes SQL
"""

import re
from pathlib import Path

def parse_sql_string(s, start_pos):
    """Parse une chaîne SQL en tenant compte des apostrophes échappées"""
    if start_pos >= len(s):
        return None, start_pos
    
    if s[start_pos] != "'":
        return None, start_pos
    
    result = "'"
    pos = start_pos + 1
    
    while pos < len(s):
        char = s[pos]
        result += char
        
        if char == "'":
            # Vérifier si c'est une apostrophe échappée ''
            if pos + 1 < len(s) and s[pos + 1] == "'":
                result += "'"
                pos += 2
                continue
            # Sinon, c'est la fin de la chaîne
            return result, pos + 1
        
        pos += 1
    
    # Chaîne non fermée
    return result, pos

def extract_values_from_insert(values_text):
    """Extrait les valeurs d'un INSERT en gérant correctement les chaînes SQL"""
    values = []
    pos = 0
    current_value = ""
    paren_depth = 0
    
    while pos < len(values_text):
        char = values_text[pos]
        
        # Gérer les chaînes SQL
        if char == "'" and (pos == 0 or values_text[pos-1] not in ['\\', "'"]):
            # On a trouvé le début d'une chaîne
            sql_string, new_pos = parse_sql_string(values_text, pos)
            if sql_string:
                current_value += sql_string
                pos = new_pos
                continue
        
        # Gérer les parenthèses
        if char == '(':
            paren_depth += 1
            current_value += char
        elif char == ')':
            paren_depth -= 1
            current_value += char
        elif char == ',' and paren_depth == 0:
            # Séparateur de valeur trouvé
            value = current_value.strip()
            if value:
                values.append(value)
            current_value = ""
        else:
            current_value += char
        
        pos += 1
    
    # Ajouter la dernière valeur
    if current_value.strip():
        values.append(current_value.strip())
    
    return values

def fix_lessons_insert(content):
    """Corrige les INSERT INTO lessons"""
    
    pattern = r'(INSERT\s+INTO\s+lessons\s*\([^)]+\)\s*VALUES\s*\()(.*?)(\)\s*ON\s+CONFLICT)'
    
    def fix_match(match):
        header = match.group(1)
        values_text = match.group(2).strip()
        footer = match.group(3)
        
        # Extraire les valeurs correctement
        values = extract_values_from_insert(values_text)
        
        # On devrait avoir 8 valeurs : id, course_id, title, content, order, duration_minutes, video_url, resources
        # Si on en a moins, on doit ajouter les valeurs manquantes
        
        fixed_values = []
        
        # id (valeur 0)
        if len(values) > 0:
            fixed_values.append(values[0])
        else:
            return match.group(0)  # Erreur, ne pas modifier
        
        # course_id (valeur 1)
        if len(values) > 1:
            fixed_values.append(values[1])
        else:
            return match.group(0)
        
        # title (valeur 2)
        if len(values) > 2:
            fixed_values.append(values[2])
        else:
            return match.group(0)
        
        # content (valeur 3) - peut être très long
        if len(values) > 3:
            fixed_values.append(values[3])
        else:
            return match.group(0)
        
        # order (valeur 4) - peut manquer
        if len(values) > 4:
            val = values[4].strip()
            # Vérifier si c'est un nombre (order)
            if re.match(r'^\d+$', val):
                fixed_values.append(val)
            else:
                # Ce n'est pas order, chercher plus loin
                order_found = False
                for i in range(4, min(7, len(values))):
                    if re.match(r'^\d+$', values[i].strip()) and 1 <= int(values[i].strip()) <= 100:
                        fixed_values.append(values[i].strip())
                        order_found = True
                        # Retirer cette valeur de la liste pour ne pas la dupliquer
                        if i > 4:
                            values.pop(i)
                        break
                if not order_found:
                    fixed_values.append('1')  # Valeur par défaut
        else:
            fixed_values.append('1')  # Valeur par défaut
        
        # duration_minutes (valeur 5)
        idx = 5 if len(values) > 5 else 4
        if len(values) > idx:
            val = values[idx].strip()
            if re.match(r'^\d+$', val) and 30 <= int(val) <= 120:
                fixed_values.append(val)
            else:
                # Chercher dans les valeurs suivantes
                duration_found = False
                for i in range(idx, min(idx + 3, len(values))):
                    if re.match(r'^\d+$', values[i].strip()):
                        num = int(values[i].strip())
                        if 30 <= num <= 120:
                            fixed_values.append(values[i].strip())
                            duration_found = True
                            if i > idx:
                                values.pop(i)
                            break
                if not duration_found:
                    fixed_values.append('60')  # Valeur par défaut
        else:
            fixed_values.append('60')  # Valeur par défaut
        
        # video_url (valeur 6)
        idx = 6 if len(values) > 6 else (5 if len(values) > 5 else 4)
        if len(values) > idx:
            val = values[idx].strip()
            if val.upper() == 'NULL':
                fixed_values.append('NULL')
            elif 'http' in val.lower() or 'youtube' in val.lower():
                fixed_values.append(val)
            else:
                fixed_values.append('NULL')
        else:
            fixed_values.append('NULL')
        
        # resources (valeur 7) - dernière valeur
        idx = 7 if len(values) > 7 else (len(values) - 1 if len(values) > 0 else 0)
        if len(values) > idx:
            val = values[idx].strip()
            if "'[]'::jsonb" in val or "[]" in val:
                fixed_values.append(val)
            else:
                fixed_values.append("'[]'::jsonb")
        else:
            # Vérifier la dernière valeur
            if len(values) > 0:
                last_val = values[-1].strip()
                if "'[]'::jsonb" in last_val or "[]" in last_val:
                    fixed_values.append(last_val)
                else:
                    fixed_values.append("'[]'::jsonb")
            else:
                fixed_values.append("'[]'::jsonb")
        
        # Reconstruire
        fixed_values_text = ',\n  '.join(fixed_values)
        return f"{header}\n  {fixed_values_text}\n{footer}"
    
    fixed_content = re.sub(pattern, fix_match, content, flags=re.DOTALL | re.IGNORECASE)
    return fixed_content

def fix_file(file_path):
    """Corrige un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
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

