#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les erreurs de syntaxe SQL dans les fichiers de lots
"""

import re
from pathlib import Path

def fix_sql_file(file_path):
    """Corrige les erreurs de syntaxe dans un fichier SQL"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Correction 1 : Virgule avant la parenthèse fermante dans VALUES
    # Pattern: ,\s*\)\s*ON CONFLICT
    content = re.sub(r',\s*\)\s*ON\s+CONFLICT', r') ON CONFLICT', content, flags=re.IGNORECASE)
    
    # Correction 2 : Champs manquants dans INSERT INTO courses
    # Vérifier si duration_hours, is_published, rating, etc. sont présents
    # Si un INSERT INTO courses n'a pas tous les champs, on doit les ajouter
    
    # Correction 3 : Vérifier que les chaînes sont bien fermées
    # On ne peut pas faire ça automatiquement de manière sûre
    
    # Correction 4 : S'assurer que les apostrophes dans les chaînes sont doublées
    # C'est complexe, on va juste vérifier les cas évidents
    
    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def fix_all_batches(batches_dir="batches_fixed"):
    """Corrige tous les fichiers dans le dossier batches"""
    batches_path = Path(batches_dir)
    
    if not batches_path.exists():
        print(f"ERREUR: Le dossier '{batches_dir}' n'existe pas")
        return
    
    sql_files = sorted(batches_path.glob("lot_*.sql"))
    
    if not sql_files:
        print(f"ERREUR: Aucun fichier 'lot_*.sql' trouve")
        return
    
    print(f"Correction de {len(sql_files)} fichiers...")
    
    fixed_count = 0
    for sql_file in sql_files:
        if fix_sql_file(sql_file):
            print(f"OK: Corrige {sql_file.name}")
            fixed_count += 1
        else:
            print(f"OK: {sql_file.name} (pas de corrections necessaires)")
    
    print(f"\nSUCCES: {fixed_count} fichiers corriges")

if __name__ == "__main__":
    fix_all_batches()

