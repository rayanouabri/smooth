#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Trouve tous les UUID de cours dans tous les fichiers et vérifie les duplications
"""

import re
from pathlib import Path
from collections import defaultdict

def extract_course_uuids_from_file(file_path):
    """Extrait tous les UUID de cours d'un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern pour trouver INSERT INTO courses avec l'UUID
    pattern = r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    
    matches = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
    return matches

def find_all_uuids():
    """Trouve tous les UUID dans tous les fichiers"""
    batches_dir = Path("batches_fixed")
    uuid_files = defaultdict(list)
    
    for file_path in sorted(batches_dir.glob("lot_*.sql")):
        uuids = extract_course_uuids_from_file(file_path)
        for uuid_val in uuids:
            uuid_files[uuid_val].append(file_path)
    
    return uuid_files

if __name__ == "__main__":
    print("Analyse de tous les UUID de cours...")
    uuid_files = find_all_uuids()
    
    print(f"\nTotal d'UUID uniques trouves: {len(uuid_files)}")
    
    # Trouver les duplications
    duplicates = {uuid: files for uuid, files in uuid_files.items() if len(files) > 1}
    
    if duplicates:
        print(f"\n{len(duplicates)} UUID dupliques trouves:")
        for uuid, files in duplicates.items():
            print(f"\n  {uuid}")
            for f in files:
                print(f"    - {f.name}")
    else:
        print("\nAucune duplication trouvee entre les fichiers !")
    
    # Vérifier l'UUID spécifique
    target_uuid = "d0067a6e-6fa3-44e6-ad83-2db54ca02994"
    if target_uuid in uuid_files:
        print(f"\n\nUUID cible '{target_uuid}' trouve dans:")
        for f in uuid_files[target_uuid]:
            print(f"  - {f.name}")

