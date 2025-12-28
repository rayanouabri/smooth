#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les INSERT INTO lessons en restaurant depuis le fichier source et en corrigeant correctement
"""

import re
from pathlib import Path

def fix_lessons_insert(content):
    """Corrige les INSERT INTO lessons en recherchant les patterns spécifiques"""
    
    # Pattern pour trouver INSERT INTO lessons avec la structure complète
    # On va chercher : INSERT ... VALUES ( ... 'content'... 'order'... 'duration'... 'video_url'... 'resources'...)
    
    pattern = r'(INSERT\s+INTO\s+lessons\s*\([^)]+\)\s*VALUES\s*\()(.*?)(\)\s*ON\s+CONFLICT)'
    
    def fix_match(match):
        header = match.group(1)
        values_text = match.group(2)
        footer = match.group(3)
        
        # Le problème : le contenu Markdown peut contenir des lignes qui ressemblent à des valeurs
        # On doit identifier correctement où se termine la chaîne content
        
        # Chercher la structure : id, course_id, title, content (très long), puis order, duration, video_url, resources
        # Le content se termine par une apostrophe suivie d'une virgule et d'un saut de ligne
        
        # Pattern pour trouver la fin du content : ' suivi de ,\n puis un nombre (order)
        # ou ' suivi de ,\n puis NULL ou un jsonb
        
        # Rechercher : ...',\n  \d+,\n  \d+,\n  NULL,\n  '[]'::jsonb
        # ou : ...',\n  NULL,\n  '[]'::jsonb (si order et duration manquent)
        
        # Méthode : trouver le dernier ' qui n'est pas dans une chaîne, puis chercher les patterns suivants
        
        # Chercher le pattern : ...', suivi d'un nombre (order), puis un nombre (duration), puis NULL, puis jsonb
        order_duration_pattern = r"',\s*\n\s*(\d+)\s*,\s*\n\s*(\d+)\s*,\s*\n\s*NULL\s*,\s*\n\s*('\[\]'::jsonb)"
        
        match_od = re.search(order_duration_pattern, values_text)
        if match_od:
            # Les valeurs sont déjà là, vérifier qu'elles sont complètes
            order = match_od.group(1)
            duration = match_od.group(2)
            resources = match_od.group(3)
            
            # Vérifier qu'on a bien 8 valeurs au total
            # Compter les virgules au niveau 0
            # Mais c'est complexe avec le content qui peut contenir des virgules
            
            # Simple check : si le pattern est trouvé, les valeurs sont probablement bonnes
            return match.group(0)
        
        # Chercher le pattern où il manque order et duration : ...', NULL, '[]'::jsonb
        missing_od_pattern = r"',\s*\n\s*NULL\s*,\s*\n\s*('\[\]'::jsonb)"
        match_missing = re.search(missing_od_pattern, values_text)
        if match_missing:
            # Il manque order et duration
            resources = match_missing.group(1)
            # Insérer order=1 et duration=60 avant NULL
            replacement = f"',\n  1,\n  60,\n  NULL,\n  {resources}"
            new_values = values_text.replace(match_missing.group(0), replacement)
            return f"{header}{new_values}{footer}"
        
        # Chercher le pattern où il manque seulement order : ...', \d+, NULL, ...
        missing_order_pattern = r"',\s*\n\s*(\d+)\s*,\s*\n\s*NULL"
        match_missing_o = re.search(missing_order_pattern, values_text)
        if match_missing_o:
            duration = match_missing_o.group(1)
            # Insérer order=1 avant duration
            replacement = f"',\n  1,\n  {duration},\n  NULL"
            new_values = values_text.replace(match_missing_o.group(0), replacement)
            return f"{header}{new_values}{footer}"
        
        # Si aucun pattern n'est trouvé, essayer une méthode plus générale
        # Chercher : content se termine par ', puis chercher ce qui suit
        # Pattern : longue chaîne terminant par ',\n puis quelque chose
        
        # Chercher le dernier ' qui est suivi de ,\n et qui n'est pas dans une chaîne
        # C'est complexe, on va utiliser une approche différente
        
        # Trouver où se termine probablement le content (chercher ' qui est suivi de ,\n et qui précède order/duration/NULL)
        content_end_pattern = r"([^']*(?:''[^']*)*)',\s*\n\s*(NULL|'\d+'|\d+|'\[\]'::jsonb)"
        
        # Plus simple : chercher si on a exactement 4 valeurs après le content
        # id, course_id, title, content - donc 4 valeurs
        # Puis on devrait avoir : order, duration, video_url, resources - 4 autres valeurs
        
        # Compter les virgules au niveau 0 (hors chaînes)
        comma_count = 0
        in_string = False
        string_char = None
        
        for i, char in enumerate(values_text):
            if char in ("'", '"') and (i == 0 or values_text[i-1] != '\\'):
                if not in_string:
                    in_string = True
                    string_char = char
                elif char == string_char:
                    if char == "'" and i + 1 < len(values_text) and values_text[i+1] == "'":
                        # Apostrophe échappée
                        i += 1
                        continue
                    in_string = False
                    string_char = None
            elif char == ',' and not in_string:
                comma_count += 1
        
        # Si on a moins de 7 virgules (8 valeurs - 1), il manque des valeurs
        if comma_count < 7:
            # Il manque probablement order et/ou duration
            # Chercher où insérer
            
            # Chercher le pattern : content se termine par ', puis quelque chose
            # et insérer order=1, duration=60 si nécessaire
            
            # Pattern final : trouver ', suivi de NULL ou jsonb directement
            final_fix_pattern = r"',\s*\n\s*(NULL\s*,\s*\n\s*'\[\]'::jsonb)"
            final_match = re.search(final_fix_pattern, values_text)
            if final_match:
                replacement = f"',\n  1,\n  60,\n  {final_match.group(1)}"
                new_values = values_text.replace(final_match.group(0), replacement)
                return f"{header}{new_values}{footer}"
        
        # Si aucune correction n'est possible, retourner l'original
        return match.group(0)
    
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

