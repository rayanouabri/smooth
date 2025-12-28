#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige TOUTES les duplications d'UUID de cours, même dans le même fichier
"""

import re
import uuid
from pathlib import Path
from collections import defaultdict

def find_all_course_inserts(content):
    """Trouve tous les INSERT INTO courses avec leur UUID"""
    # Pattern pour trouver INSERT INTO courses suivi de l'UUID
    pattern = r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    
    matches = []
    for match in re.finditer(pattern, content, re.MULTILINE | re.DOTALL):
        matches.append((match.group(1), match.start(), match.end()))
    
    return matches

def fix_file_duplicates(file_path):
    """Corrige les UUID dupliqués dans un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Trouver tous les INSERT INTO courses
    inserts = find_all_course_inserts(content)
    
    # Détecter les duplications
    uuid_positions = defaultdict(list)
    for uuid_val, start, end in inserts:
        uuid_positions[uuid_val].append((start, end))
    
    # Trouver les UUID qui apparaissent plusieurs fois
    duplicates = {uuid_val: positions for uuid_val, positions in uuid_positions.items() if len(positions) > 1}
    
    if not duplicates:
        return False, {}
    
    # Générer les remplacements
    replacements = {}
    for dup_uuid, positions in duplicates.items():
        # Garder la première occurrence, remplacer les autres
        for i, (start, end) in enumerate(positions[1:], 1):  # Skip la première
            new_uuid = str(uuid.uuid4())
            # S'assurer que le nouvel UUID n'existe pas déjà
            while new_uuid in replacements.values() or f"'{new_uuid}'" in content:
                new_uuid = str(uuid.uuid4())
            
            # Stocker le mapping pour cette occurrence spécifique
            replacements[(dup_uuid, i)] = new_uuid
    
    # Appliquer les remplacements dans l'ordre inverse pour ne pas décaler les positions
    sorted_replacements = sorted(duplicates.items(), key=lambda x: x[1][0][0], reverse=True)
    
    for dup_uuid, positions in sorted_replacements:
        # Remplacer de la fin vers le début pour préserver les positions
        for i, (start, end) in enumerate(reversed(positions[1:]), 1):  # Skip la première
            replacement_key = (dup_uuid, len(positions) - i)
            if replacement_key in replacements:
                new_uuid = replacements[replacement_key]
                # Remplacer cette occurrence spécifique dans le contenu
                # On remplace toutes les occurrences de cet UUID à partir de cette position
                before = content[:start]
                after = content[start:]
                # Remplacer la première occurrence de l'UUID dans "after"
                after = after.replace(f"'{dup_uuid}'", f"'{new_uuid}'", 1)
                content = before + after
    
    # Mais cette approche ne fonctionne pas bien. Utilisons une approche différente.
    # On va remplacer toutes les occurrences sauf la première pour chaque UUID dupliqué.
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    final_replacements = {}
    
    for dup_uuid, positions in duplicates.items():
        # Compter combien de fois cet UUID apparaît
        count = content.count(f"'{dup_uuid}'")
        
        # Remplacer toutes les occurrences sauf la première
        parts = content.split(f"'{dup_uuid}'", 1)  # Split en 2 parties
        if len(parts) == 2:
            # Première partie (avant la première occurrence)
            # Deuxième partie (après la première occurrence)
            # On remplace toutes les occurrences dans la deuxième partie
            new_uuid = str(uuid.uuid4())
            while f"'{new_uuid}'" in content or new_uuid in final_replacements.values():
                new_uuid = str(uuid.uuid4())
            
            final_replacements[dup_uuid] = new_uuid
            second_part = parts[1].replace(f"'{dup_uuid}'", f"'{new_uuid}'")
            content = parts[0] + f"'{dup_uuid}'" + second_part
            modified = True
    
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    
    return modified, final_replacements

def fix_all_files():
    """Corrige tous les fichiers"""
    batches_dir = Path("batches_fixed")
    total_fixed = 0
    
    for file_path in sorted(batches_dir.glob("lot_*.sql")):
        print(f"Traitement de {file_path.name}...")
        modified, replacements = fix_file_duplicates(file_path)
        if modified:
            print(f"  [OK] {len(replacements)} UUID remplace(s):")
            for old_uuid, new_uuid in replacements.items():
                print(f"    {old_uuid[:8]}... -> {new_uuid[:8]}...")
            total_fixed += len(replacements)
        else:
            print(f"  - OK")
    
    print(f"\n[OK] Correction complete ! {total_fixed} UUID remplace(s) au total.")

if __name__ == "__main__":
    fix_all_files()

