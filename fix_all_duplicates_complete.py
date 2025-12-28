#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige TOUS les UUID de cours en double dans tous les lots
- UUID dupliqués dans le même fichier
- UUID dupliqués entre différents fichiers
"""

import re
import uuid
from pathlib import Path
from collections import defaultdict

def extract_all_course_ids_from_file(file_path):
    """Extrait tous les UUID de cours d'un fichier avec leur position"""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    course_ids = []
    for i, line in enumerate(lines):
        # Chercher INSERT INTO courses
        if 'INSERT INTO courses' in line:
            # Chercher l'UUID dans les lignes suivantes (max 5 lignes)
            for j in range(i, min(i+10, len(lines))):
                uuid_match = re.search(r"'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'", lines[j])
                if uuid_match:
                    course_ids.append((uuid_match.group(1), i))
                    break
    
    return course_ids

def fix_file_duplicates(file_path):
    """Corrige les UUID dupliqués dans un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        lines = content.split('\n')
    
    # Extraire tous les UUID de cours
    course_ids = extract_all_course_ids_from_file(file_path)
    
    # Détecter les duplications dans ce fichier
    id_counts = defaultdict(list)
    for course_id, line_num in course_ids:
        id_counts[course_id].append(line_num)
    
    # Trouver les UUID qui apparaissent plusieurs fois
    duplicates_in_file = {cid: positions for cid, positions in id_counts.items() if len(positions) > 1}
    
    if not duplicates_in_file:
        return False, {}
    
    replacements = {}
    
    # Pour chaque UUID dupliqué dans ce fichier
    for dup_uuid, positions in duplicates_in_file.items():
        # Garder la première occurrence, remplacer les autres
        for pos in positions[1:]:  # Toutes sauf la première
            new_uuid = str(uuid.uuid4())
            # S'assurer que le nouvel UUID n'existe pas déjà
            while new_uuid in replacements.values() or new_uuid in content:
                new_uuid = str(uuid.uuid4())
            
            replacements[dup_uuid] = new_uuid
            # Remplacer dans le contenu (uniquement à partir de cette position)
            # On remplace toutes les occurrences de cet UUID après la première
            # Mais on doit être plus intelligent : remplacer seulement les occurrences après la première INSERT
    
    # Maintenant, appliquer les remplacements de manière sélective
    modified_content = content
    for old_uuid, positions in duplicates_in_file.items():
        if old_uuid in replacements:
            new_uuid = replacements[old_uuid]
            # Trouver toutes les occurrences
            parts = modified_content.split(f"'{old_uuid}'")
            if len(parts) > 1:
                # Garder la première, remplacer les autres
                result = parts[0]
                for part in parts[1:]:
                    result += f"'{new_uuid}'" + part
                modified_content = result
    
    if modified_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        return True, replacements
    
    return False, {}

def find_duplicates_between_files():
    """Trouve les UUID qui apparaissent dans plusieurs fichiers"""
    batches_dir = Path("batches_fixed")
    course_id_files = defaultdict(set)  # UUID -> set des fichiers où il apparaît
    
    for file_path in sorted(batches_dir.glob("lot_*.sql")):
        course_ids = extract_all_course_ids_from_file(file_path)
        for course_id, _ in course_ids:
            course_id_files[course_id].add(file_path)
    
    # Trouver les UUID qui apparaissent dans plusieurs fichiers
    duplicates = {uuid: sorted(files) for uuid, files in course_id_files.items() if len(files) > 1}
    
    return duplicates

def fix_duplicates_between_files(duplicates):
    """Corrige les UUID qui apparaissent dans plusieurs fichiers"""
    total_replacements = 0
    
    for dup_uuid, files in duplicates.items():
        # Garder la première occurrence (dans le premier fichier)
        first_file = files[0]
        
        # Remplacer dans tous les autres fichiers
        for file_path in files[1:]:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Générer un nouvel UUID
            new_uuid = str(uuid.uuid4())
            # Vérifier qu'il n'existe pas déjà dans le fichier
            while f"'{new_uuid}'" in content:
                new_uuid = str(uuid.uuid4())
            
            # Remplacer toutes les occurrences
            count = content.count(f"'{dup_uuid}'")
            if count > 0:
                content = content.replace(f"'{dup_uuid}'", f"'{new_uuid}'")
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  {file_path.name}: {dup_uuid[:8]}... -> {new_uuid[:8]}... ({count} occurrences)")
                total_replacements += 1
    
    return total_replacements

def fix_all_duplicates():
    """Corrige tous les UUID dupliqués"""
    batches_dir = Path("batches_fixed")
    
    print("Etape 1: Correction des duplications dans chaque fichier...")
    total_in_file = 0
    for file_path in sorted(batches_dir.glob("lot_*.sql")):
        modified, replacements = fix_file_duplicates(file_path)
        if modified:
            print(f"  {file_path.name}: {len(replacements)} UUID remplace(s)")
            total_in_file += len(replacements)
        else:
            print(f"  {file_path.name}: OK")
    
    print(f"\n[OK] {total_in_file} UUID remplace(s) dans les fichiers individuels")
    
    print("\nEtape 2: Correction des duplications entre fichiers...")
    duplicates = find_duplicates_between_files()
    
    if duplicates:
        print(f"  {len(duplicates)} UUID trouve(s) dans plusieurs fichiers")
        total_between = fix_duplicates_between_files(duplicates)
        print(f"\n[OK] {total_between} fichier(s) modifie(s)")
    else:
        print("  Aucune duplication entre fichiers")
    
    print("\n[OK] Correction complete !")

if __name__ == "__main__":
    fix_all_duplicates()

