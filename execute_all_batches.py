#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour exécuter automatiquement tous les lots SQL sur Supabase
Utilise psql ou l'API REST de Supabase

Usage:
    python execute_all_batches.py --batches-dir=batches --supabase-url=XXX --supabase-password=XXX
"""

import os
import sys
import subprocess
from pathlib import Path
import time

def execute_with_psql(sql_file_path: Path, supabase_host: str, supabase_password: str, supabase_db: str = "postgres", supabase_user: str = "postgres", supabase_port: int = 5432):
    """
    Exécute un fichier SQL via psql (client PostgreSQL)
    """
    print(f"🔄 Exécution de : {sql_file_path.name}")
    
    # Construire la commande psql
    connection_string = f"postgresql://{supabase_user}:{supabase_password}@{supabase_host}:{supabase_port}/{supabase_db}"
    
    try:
        # Exécuter avec psql
        result = subprocess.run(
            ['psql', connection_string, '-f', str(sql_file_path)],
            capture_output=True,
            text=True,
            timeout=300  # 5 minutes timeout par fichier
        )
        
        if result.returncode == 0:
            print(f"✅ Succès : {sql_file_path.name}")
            if result.stdout:
                print(f"   Sortie : {result.stdout[:200]}...")  # Afficher les 200 premiers caractères
            return True
        else:
            print(f"❌ Erreur : {sql_file_path.name}")
            print(f"   Code retour : {result.returncode}")
            if result.stderr:
                print(f"   Erreur : {result.stderr[:500]}")  # Afficher les 500 premiers caractères
            return False
            
    except FileNotFoundError:
        print(f"❌ Erreur : psql n'est pas installé")
        print(f"💡 Installez PostgreSQL : https://www.postgresql.org/download/")
        return False
    except subprocess.TimeoutExpired:
        print(f"⏱️  Timeout : Le fichier {sql_file_path.name} prend trop de temps")
        return False
    except Exception as e:
        print(f"❌ Erreur inattendue : {e}")
        return False

def execute_with_requests_api(sql_file_path: Path, supabase_url: str, supabase_key: str):
    """
    Exécute un fichier SQL via l'API REST de Supabase
    Note: Cette méthode nécessite une Edge Function ou utilise directement l'API SQL
    """
    print(f"⚠️  L'API REST directe nécessite une configuration spéciale")
    print(f"💡 Utilisez plutôt la méthode psql")
    return False

def execute_all_batches(batches_dir: str, supabase_host: str, supabase_password: str, 
                        supabase_db: str = "postgres", supabase_user: str = "postgres", 
                        supabase_port: int = 5432, delay_between_batches: int = 2):
    """
    Exécute tous les fichiers SQL dans le dossier batches_dir
    """
    batches_path = Path(batches_dir)
    
    if not batches_path.exists():
        print(f"❌ Le dossier '{batches_dir}' n'existe pas")
        return False
    
    # Trouver tous les fichiers .sql
    sql_files = sorted(batches_path.glob("lot_*.sql"))
    
    if not sql_files:
        print(f"❌ Aucun fichier 'lot_*.sql' trouvé dans '{batches_dir}'")
        print(f"💡 Exécutez d'abord : python split_sql_file.py votre_fichier.sql")
        return False
    
    print(f"📦 {len(sql_files)} lots trouvés à exécuter")
    print(f"🔗 Connexion à : {supabase_host}")
    print(f"⏳ Délai entre chaque lot : {delay_between_batches} secondes\n")
    
    success_count = 0
    error_count = 0
    
    for i, sql_file in enumerate(sql_files, 1):
        print(f"\n{'='*60}")
        print(f"📄 Lot {i}/{len(sql_files)} : {sql_file.name}")
        print(f"{'='*60}")
        
        success = execute_with_psql(
            sql_file, 
            supabase_host, 
            supabase_password,
            supabase_db,
            supabase_user,
            supabase_port
        )
        
        if success:
            success_count += 1
        else:
            error_count += 1
            # Demander si on continue après une erreur
            if i < len(sql_files):
                response = input(f"\n❓ Une erreur s'est produite. Continuer avec le lot suivant ? (o/n) : ")
                if response.lower() != 'o' and response.lower() != 'oui':
                    print("⏸️  Arrêt demandé par l'utilisateur")
                    break
        
        # Attendre entre les lots pour ne pas surcharger la base
        if i < len(sql_files):
            print(f"\n⏳ Attente de {delay_between_batches} secondes avant le lot suivant...")
            time.sleep(delay_between_batches)
    
    # Résumé
    print(f"\n{'='*60}")
    print(f"📊 RÉSUMÉ")
    print(f"{'='*60}")
    print(f"✅ Succès : {success_count}/{len(sql_files)}")
    print(f"❌ Erreurs : {error_count}/{len(sql_files)}")
    
    if error_count == 0:
        print(f"\n🎉 Tous les lots ont été exécutés avec succès !")
        return True
    else:
        print(f"\n⚠️  Certains lots ont échoué. Vérifiez les erreurs ci-dessus.")
        return False

def get_supabase_credentials():
    """
    Demande les credentials Supabase à l'utilisateur
    """
    print("\n🔐 Configuration Supabase")
    print("="*60)
    print("Trouvez ces informations dans Supabase Dashboard → Settings → Database")
    print()
    
    # Host
    host = input("Host (ex: db.xxxxx.supabase.co) : ").strip()
    if not host:
        print("❌ Host requis")
        return None
    
    # Password
    password = input("Password : ").strip()
    if not password:
        print("❌ Password requis")
        return None
    
    # Options optionnelles
    db = input("Database (défaut: postgres) : ").strip() or "postgres"
    user = input("User (défaut: postgres) : ").strip() or "postgres"
    port = input("Port (défaut: 5432) : ").strip() or "5432"
    
    try:
        port = int(port)
    except ValueError:
        print("⚠️  Port invalide, utilisation de 5432")
        port = 5432
    
    return {
        'host': host,
        'password': password,
        'db': db,
        'user': user,
        'port': port
    }

def main():
    """Point d'entrée principal"""
    
    if len(sys.argv) < 2:
        print("""
🚀 Script d'exécution automatique des lots SQL sur Supabase

Usage:
    python execute_all_batches.py <dossier_batches> [options]
    
    OU simplement :
    python execute_all_batches.py
    
    (le script vous demandera les informations manquantes)

Options:
    --host=XXX              Host Supabase (db.xxxxx.supabase.co)
    --password=XXX          Password Supabase
    --db=XXX                Database (défaut: postgres)
    --user=XXX              User (défaut: postgres)
    --port=XXX              Port (défaut: 5432)
    --delay=N               Délai entre les lots en secondes (défaut: 2)

Exemples:
    # Mode interactif
    python execute_all_batches.py batches
    
    # Avec tous les paramètres
    python execute_all_batches.py batches \\
        --host=db.xxxxx.supabase.co \\
        --password=monpassword \\
        --db=postgres \\
        --user=postgres \\
        --port=5432

Prérequis:
    - psql installé (PostgreSQL client)
    - Les lots SQL déjà créés (via split_sql_file.py)
        """)
        sys.exit(1)
    
    batches_dir = sys.argv[1] if len(sys.argv) > 1 else "batches"
    
    # Parser les arguments
    credentials = {
        'host': None,
        'password': None,
        'db': 'postgres',
        'user': 'postgres',
        'port': 5432
    }
    delay = 2
    
    for arg in sys.argv[2:]:
        if arg.startswith('--host='):
            credentials['host'] = arg.split('=', 1)[1]
        elif arg.startswith('--password='):
            credentials['password'] = arg.split('=', 1)[1]
        elif arg.startswith('--db='):
            credentials['db'] = arg.split('=', 1)[1]
        elif arg.startswith('--user='):
            credentials['user'] = arg.split('=', 1)[1]
        elif arg.startswith('--port='):
            try:
                credentials['port'] = int(arg.split('=', 1)[1])
            except ValueError:
                pass
        elif arg.startswith('--delay='):
            try:
                delay = int(arg.split('=', 1)[1])
            except ValueError:
                pass
    
    # Demander les credentials manquants
    if not credentials['host'] or not credentials['password']:
        interactive_creds = get_supabase_credentials()
        if interactive_creds:
            credentials.update(interactive_creds)
        else:
            print("❌ Credentials incomplets")
            sys.exit(1)
    
    # Confirmation
    print(f"\n{'='*60}")
    print(f"📋 Configuration")
    print(f"{'='*60}")
    print(f"📁 Dossier des lots : {batches_dir}")
    print(f"🔗 Host : {credentials['host']}")
    print(f"👤 User : {credentials['user']}")
    print(f"💾 Database : {credentials['db']}")
    print(f"🔌 Port : {credentials['port']}")
    print(f"⏳ Délai entre lots : {delay}s")
    print(f"{'='*60}\n")
    
    confirm = input("✅ Confirmer l'exécution ? (o/n) : ")
    if confirm.lower() != 'o' and confirm.lower() != 'oui':
        print("⏸️  Annulé")
        sys.exit(0)
    
    # Exécuter
    execute_all_batches(
        batches_dir,
        credentials['host'],
        credentials['password'],
        credentials['db'],
        credentials['user'],
        credentials['port'],
        delay
    )

if __name__ == "__main__":
    main()

