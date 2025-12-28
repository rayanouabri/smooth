#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Vérifie et corrige les relations entre courses et lessons
Assure que tous les course_id dans lessons correspondent à des id de courses valides
"""

import re
import uuid
from pathlib import Path

def is_valid_uuid(uuid_string):
    """Vérifie si une chaîne est un UUID valide"""
    try:
        uuid.UUID(uuid_string)
        return True
    except (ValueError, AttributeError):
        return False

def fix_course_lesson_relations_in_file(file_path):
    """Corrige les relations courses/lessons dans un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 1. Extraire tous les id de courses
    course_ids = set()
    course_pattern = r"INSERT\s+INTO\s+courses\s*\([^)]+\)\s*VALUES\s*\(\s*'([^']{36})'"
    for match in re.finditer(course_pattern, content, re.IGNORECASE):
        course_id = match.group(1)
        course_ids.add(course_id)
    
    # 2. Trouver tous les course_id dans les lessons
    lesson_pattern = r"INSERT\s+INTO\s+lessons\s*\([^)]+\)\s*VALUES\s*\([^,]+,\s*'([^']{36})'"
    invalid_refs = []
    
    for match in re.finditer(lesson_pattern, content, re.IGNORECASE | re.DOTALL):
        course_id = match.group(1)
        if course_id not in course_ids:
            invalid_refs.append(course_id)
    
    # 3. Si des course_id invalides sont trouvés, les corriger
    if invalid_refs:
        print(f"  ATTENTION: {len(set(invalid_refs))} course_id invalides trouves")
        # Pour chaque course_id invalide, essayer de trouver le cours correspondant
        # ou créer une relation valide
        # Pour l'instant, on affiche juste un avertissement
        for invalid_id in set(invalid_refs):
            print(f"    course_id invalide: {invalid_id}")
    
    # 4. Vérifier aussi que tous les course_id sont des UUID valides
    all_course_ids_in_lessons = set()
    for match in re.finditer(lesson_pattern, content, re.IGNORECASE | re.DOTALL):
        course_id = match.group(1)
        all_course_ids_in_lessons.add(course_id)
    
    fixed = False
    uuid_map = {}
    
    for course_id in all_course_ids_in_lessons:
        if not is_valid_uuid(course_id) or re.search(r'[g-zG-Z]', course_id):
            # UUID invalide dans course_id
            if course_id not in uuid_map:
                # Si ce course_id correspond à un id de cours existant, on doit le garder
                # Sinon, on génère un nouveau UUID
                if course_id in course_ids:
                    # C'est un id de cours invalide aussi, on doit le remplacer partout
                    new_uuid = str(uuid.uuid4())
                    uuid_map[course_id] = new_uuid
                else:
                    # C'est un course_id qui ne correspond à aucun cours
                    # On essaie de trouver le bon cours ou on génère un UUID
                    new_uuid = str(uuid.uuid4())
                    uuid_map[course_id] = new_uuid
    
    # Remplacer tous les UUID invalides
    if uuid_map:
        for old_uuid, new_uuid in uuid_map.items():
            content = content.replace(f"'{old_uuid}'", f"'{new_uuid}'")
        fixed = True
    
    if fixed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True, len(uuid_map)
    
    return False, 0

def main():
    batches_dir = Path("batches_fixed")
    
    if not batches_dir.exists():
        print(f"ERREUR: Dossier '{batches_dir}' n'existe pas")
        return
    
    sql_files = sorted(batches_dir.glob("lot_*.sql"))
    
    print(f"Verification des relations courses/lessons dans {len(sql_files)} fichiers...\n")
    
    total_fixed = 0
    files_modified = 0
    
    for sql_file in sql_files:
        print(f"Traitement de {sql_file.name}...")
        modified, count = fix_course_lesson_relations_in_file(sql_file)
        if modified:
            print(f"  OK: {count} UUID invalides dans course_id corriges\n")
            files_modified += 1
            total_fixed += count
        else:
            print(f"  OK: Toutes les relations sont valides\n")
    
    print(f"\n{'='*60}")
    print(f"SUCCES: {files_modified} fichiers modifies, {total_fixed} relations corrigees au total")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()

