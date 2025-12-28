#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige toutes les incohérences entre courses et lessons dans tous les fichiers
"""

import re
import uuid
from pathlib import Path
from collections import defaultdict

def extract_course_id_title_mapping(file_path):
    """Extrait tous les cours avec leur ID et titre"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern pour trouver INSERT INTO courses avec id et title
    pattern = r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'[^)]*'([^']+)'"
    
    courses = {}
    for match in re.finditer(pattern, content, re.MULTILINE | re.DOTALL):
        course_id = match.group(1)
        # Le titre est dans le deuxième groupe, mais peut être complexe à extraire
        # On va plutôt chercher le titre dans les lignes suivantes
        pass
    
    # Approche différente : trouver tous les cours et leurs titres
    course_pattern = r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    
    course_ids = []
    for match in re.finditer(course_pattern, content, re.MULTILINE | re.DOTALL):
        course_ids.append(match.group(1))
    
    return course_ids

def fix_file(file_path):
    """Corrige un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extraire tous les IDs de cours
    course_pattern = r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    course_ids = []
    for match in re.finditer(course_pattern, content, re.MULTILINE | re.DOTALL):
        course_ids.append((match.start(), match.group(1)))
    
    # Trouver les cours avec le même UUID
    uuid_positions = defaultdict(list)
    for pos, course_id in course_ids:
        uuid_positions[course_id].append(pos)
    
    # Trouver les duplications
    duplicates = {uuid_val: positions for uuid_val, positions in uuid_positions.items() if len(positions) > 1}
    
    modified = False
    
    # Pour chaque duplication, remplacer toutes sauf la première
    for dup_uuid, positions in duplicates.items():
        # Garder la première, remplacer les autres par un nouvel UUID
        for i, pos in enumerate(positions[1:], 1):
            new_uuid = str(uuid.uuid4())
            while f"'{new_uuid}'" in content:
                new_uuid = str(uuid.uuid4())
            
            # Remplacer dans le cours et toutes ses leçons
            # On remplace toutes les occurrences après cette position
            before = content[:pos]
            after = content[pos:]
            after = after.replace(f"'{dup_uuid}'", f"'{new_uuid}'", 1)
            content = before + after
            modified = True
    
    # Maintenant vérifier que chaque lesson course_id correspond à un cours existant
    # Extraire tous les course_ids de cours
    all_course_ids = set()
    for match in re.finditer(course_pattern, content, re.MULTILINE | re.DOTALL):
        all_course_ids.add(match.group(1))
    
    # Extraire tous les course_id dans lessons
    lesson_pattern = r"course_id[,\s]+'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    orphan_lessons = []
    for match in re.finditer(lesson_pattern, content, re.MULTILINE):
        lesson_course_id = match.group(1)
        if lesson_course_id not in all_course_ids:
            orphan_lessons.append((match.start(), lesson_course_id))
    
    # Pour les leçons orphelines, on doit trouver le bon cours
    # On va chercher le cours qui précède la leçon
    if orphan_lessons:
        # Extraire à nouveau les IDs de cours avec leurs positions
        course_ids_with_pos = []
        for match in re.finditer(course_pattern, content, re.MULTILINE | re.DOTALL):
            course_ids_with_pos.append((match.start(), match.group(1)))
        
        # Pour chaque leçon orpheline, trouver le cours le plus proche avant
        for lesson_pos, orphan_id in orphan_lessons:
            # Trouver le dernier cours avant cette leçon
            closest_course_id = None
            for course_pos, course_id in course_ids_with_pos:
                if course_pos < lesson_pos:
                    closest_course_id = course_id
                else:
                    break
            
            if closest_course_id:
                # Remplacer l'UUID orphelin par l'UUID du cours le plus proche
                before = content[:lesson_pos]
                after = content[lesson_pos:]
                after = after.replace(f"course_id[,\s]+'{orphan_id}'", f"course_id, '{closest_course_id}'", 1)
                # Correction du pattern
                before = content[:lesson_pos]
                after = content[lesson_pos:]
                # Remplacer la première occurrence de l'UUID orphelin après cette position
                uuid_match = re.search(r"course_id[,\s]+'([^']+)'", after)
                if uuid_match and uuid_match.group(1) == orphan_id:
                    replacement = after[:uuid_match.start(1)] + closest_course_id + after[uuid_match.end(1):]
                    content = before + replacement
                    modified = True
    
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    
    return modified, len(duplicates), len(orphan_lessons) if 'orphan_lessons' in locals() else 0

def fix_all_files():
    """Corrige tous les fichiers"""
    batches_dir = Path("batches_fixed")
    total_duplicates = 0
    total_orphans = 0
    
    for file_path in sorted(batches_dir.glob("lot_*.sql")):
        print(f"Traitement de {file_path.name}...")
        modified, duplicates, orphans = fix_file(file_path)
        if modified:
            print(f"  [OK] {duplicates} duplications, {orphans} leçons orphelines corrigées")
            total_duplicates += duplicates
            total_orphans += orphans
        else:
            print(f"  - OK")
    
    print(f"\n[OK] Correction complete ! {total_duplicates} duplications et {total_orphans} leçons orphelines corrigées.")

if __name__ == "__main__":
    fix_all_files()

