#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige tous les UUID invalides dans les fichiers SQL
Détecte et remplace les UUID contenant des caractères non-hexadécimaux (g-z, G-Z)
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

def generate_valid_uuid():
    """Génère un UUID valide"""
    return str(uuid.uuid4())

def fix_invalid_uuids_in_file(file_path):
    """Corrige les UUID invalides dans un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Pattern pour trouver les UUID : format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    # On cherche tous les patterns qui ressemblent à des UUID, même s'ils sont invalides
    uuid_pattern = r"'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    
    # Trouver tous les patterns UUID (y compris invalides)
    matches = re.finditer(uuid_pattern, content)
    
    uuid_map = {}
    
    for match in matches:
        uuid_str = match.group(1)
        # Vérifier si l'UUID contient des caractères non-hexadécimaux (g-z, G-Z)
        if re.search(r'[g-zG-Z]', uuid_str):
            if uuid_str not in uuid_map:
                # Générer un nouvel UUID valide
                new_uuid = generate_valid_uuid()
                uuid_map[uuid_str] = new_uuid
                print(f"  UUID invalide trouve: {uuid_str} -> {new_uuid}")
        # Vérifier aussi avec la fonction is_valid_uuid
        elif not is_valid_uuid(uuid_str):
            if uuid_str not in uuid_map:
                new_uuid = generate_valid_uuid()
                uuid_map[uuid_str] = new_uuid
                print(f"  UUID invalide trouve: {uuid_str} -> {new_uuid}")
    
    # Remplacer tous les UUID invalides
    if uuid_map:
        for old_uuid, new_uuid in uuid_map.items():
            # Remplacer dans le contenu
            content = content.replace(f"'{old_uuid}'", f"'{new_uuid}'")
        
        # Sauvegarder le fichier corrigé
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
    
    print(f"Recherche et correction des UUID invalides dans {len(sql_files)} fichiers...\n")
    
    total_fixed = 0
    files_modified = 0
    
    for sql_file in sql_files:
        print(f"Traitement de {sql_file.name}...")
        modified, count = fix_invalid_uuids_in_file(sql_file)
        if modified:
            print(f"  OK: {count} UUID invalides corriges\n")
            files_modified += 1
            total_fixed += count
        else:
            print(f"  OK: Aucun UUID invalide trouve\n")
    
    print(f"\n{'='*60}")
    print(f"SUCCES: {files_modified} fichiers modifies, {total_fixed} UUID invalides corriges au total")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()

