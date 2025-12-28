#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige TOUS les UUID de cours en double dans tous les lots
Identifie les UUID dupliqués et les remplace par des UUID uniques, en mettant à jour toutes les références
"""

import re
import uuid
from pathlib import Path
from collections import defaultdict

def extract_course_ids_from_file(file_path):
    """Extrait tous les UUID de cours d'un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern pour trouver INSERT INTO courses avec l'UUID sur la ligne suivante
    pattern = r'INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*[\'"]?([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'
    
    matches = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
    return matches

def find_all_course_ids():
    """Trouve tous les UUID de cours dans tous les fichiers"""
    batches_dir = Path("batches_fixed")
    course_id_files = defaultdict(list)  # UUID -> liste des fichiers où il apparaît
    
    for file_path in sorted(batches_dir.glob("lot_*.sql")):
        course_ids = extract_course_ids_from_file(file_path)
        for course_id in course_ids:
            course_id_files[course_id].append(file_path)
    
    # Trouver les UUID qui apparaissent dans plusieurs fichiers
    duplicates = {uuid: files for uuid, files in course_id_files.items() if len(files) > 1}
    
    return course_id_files, duplicates

def fix_file_duplicates(file_path, duplicates_map, already_fixed):
    """Corrige les UUID dupliqués dans un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    replacements = {}
    
    # Pour chaque UUID dupliqué dans ce fichier
    for old_uuid in duplicates_map:
        # Vérifier si cet UUID est dans ce fichier
        if file_path not in duplicates_map[old_uuid]:
            continue
        
        # Si cet UUID a déjà été corrigé ailleurs et qu'on garde la première occurrence
        # On doit remplacer toutes les occurrences dans ce fichier
        file_index = duplicates_map[old_uuid].index(file_path)
        
        # Si ce n'est pas le premier fichier où apparaît cet UUID, on doit le remplacer
        if file_index > 0 or old_uuid in already_fixed:
            # Générer un nouvel UUID unique
            new_uuid = str(uuid.uuid4())
            while new_uuid in replacements.values() or new_uuid in already_fixed:
                new_uuid = str(uuid.uuid4())
            
            replacements[old_uuid] = new_uuid
            already_fixed[new_uuid] = True
    
    # Appliquer les remplacements
    for old_uuid, new_uuid in replacements.items():
        count = content.count(f"'{old_uuid}'")
        if count > 0:
            content = content.replace(f"'{old_uuid}'", f"'{new_uuid}'")
            modified = True
            print(f"  {file_path.name}: {old_uuid} -> {new_uuid} ({count} occurrences)")
    
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    
    return modified, replacements

def fix_all_duplicates():
    """Corrige tous les UUID dupliqués dans tous les fichiers"""
    print("Analyse de tous les fichiers...")
    course_id_files, duplicates = find_all_course_ids()
    
    print(f"\nUUID de cours trouvés: {len(course_id_files)}")
    print(f"UUID dupliqués: {len(duplicates)}")
    
    if not duplicates:
        print("\nAucun UUID dupliqué trouvé !")
        return
    
    print("\nUUID dupliqués détectés:")
    for dup_uuid, files in duplicates.items():
        print(f"  {dup_uuid} apparaît dans:")
        for f in files:
            print(f"    - {f.name}")
    
    print("\nCorrection des duplications...")
    already_fixed = {}
    total_replacements = 0
    
    # Traiter les fichiers dans l'ordre
    all_files = set()
    for files in duplicates.values():
        all_files.update(files)
    
    for file_path in sorted(all_files):
        print(f"\nTraitement de {file_path.name}...")
        modified, replacements = fix_file_duplicates(file_path, duplicates, already_fixed)
        if modified:
            total_replacements += len(replacements)
            print(f"  [OK] {len(replacements)} UUID remplace(s)")
        else:
            print(f"  - Aucune modification necessaire")
    
    print(f"\n[OK] Correction terminee ! {total_replacements} UUID remplace(s) au total.")

if __name__ == "__main__":
    fix_all_duplicates()

