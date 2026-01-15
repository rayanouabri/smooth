# FrancePrep Academy

Plateforme d'apprentissage complète pour faciliter l'intégration des étudiants étrangers en France. Formation linguistique, administrative, sociale et professionnelle avec assistance IA.

## 🚀 Technologies

- **Frontend** : React + Vite
- **Backend** : Supabase (PostgreSQL, Auth, Storage)
- **Déploiement** : Vercel
- **UI** : Tailwind CSS + shadcn/ui

## 📋 Fonctionnalités

- ✅ 200+ cours d'intégration (CAF, sécurité sociale, logement, etc.)
- ✅ Assistant IA disponible 24/7 (Sophie)
- ✅ Forum communautaire
- ✅ Système de progression et certificats
- ✅ Tests d'aptitude et évaluations
- ✅ Génération de CV
- ✅ Cours particuliers avec professeurs
- ✅ Dashboard personnalisé

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone https://github.com/VOTRE_USERNAME/franceprep-academy.git
cd franceprep-academy
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
Créez un fichier `.env.local` :
```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-anon-key
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

## 🔒 Sécurité

Le projet utilise :
- Variables d'environnement pour toutes les clés API
- Row Level Security (RLS) activé sur Supabase
- Secrets stockés via Supabase Secrets (Edge Functions)
- HTTPS forcé en production

**⚠️ Important** : Ne commitez jamais de fichiers `.env` ou contenant des clés API.

Consultez `SECURITY_AUDIT_REPORT.md` pour plus de détails sur la sécurité.

## 📚 Documentation

- `SECURITY_AUDIT_REPORT.md` - Audit de sécurité complet
- `supabase-schema.sql` - Schéma de base de données
- `enable-rls-security.sql` - Configuration RLS

## 🚀 Déploiement

Le projet est configuré pour se déployer automatiquement sur Vercel via GitHub.

**Variables d'environnement requises sur Vercel** :
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `GEMINI_API_KEY` (pour l'assistant IA)

## 📝 Scripts SQL Utiles

- `enable-rls-security.sql` - Active RLS sur toutes les tables
- `create_contact_requests_table.sql` - Crée la table pour les demandes de contact
- `supprimer_cours.sql` - Script pour supprimer des cours avec gestion des contraintes
- `assign_category_images.sql` - Assigne des images par catégorie aux cours

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

---

**Note** : Ce projet est en développement actif. Les fonctionnalités peuvent évoluer.
