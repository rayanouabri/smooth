/**
 * Script pour supprimer les cours "Guide Complet" via l'API Supabase
 * 
 * UTILISATION:
 * 1. Assurez-vous d'avoir VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans votre .env
 * 2. OU utilisez le service role key pour les suppressions (recommandé)
 * 3. Exécutez: node delete-guide-complet-courses.js
 * 
 * NOTE: Pour les suppressions en cascade, vous devez utiliser le service role key
 * ou exécuter le script SQL directement dans Supabase SQL Editor
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Charger les variables d'environnement depuis .env.local ou .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadEnv() {
  try {
    const envPath = join(__dirname, '.env.local');
    const env = readFileSync(envPath, 'utf-8');
    env.split('\n').forEach(line => {
      const [key, ...values] = line.split('=');
      if (key && values.length) {
        process.env[key.trim()] = values.join('=').trim().replace(/^["']|["']$/g, '');
      }
    });
  } catch (e) {
    // .env.local n'existe pas, essayer .env
    try {
      const envPath = join(__dirname, '.env');
      const env = readFileSync(envPath, 'utf-8');
      env.split('\n').forEach(line => {
        const [key, ...values] = line.split('=');
        if (key && values.length) {
          process.env[key.trim()] = values.join('=').trim().replace(/^["']|["']$/g, '');
        }
      });
    } catch (e2) {
      // Pas de fichier .env
    }
  }
}

loadEnv();

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Erreur: Variables d\'environnement Supabase manquantes');
  console.error('   Assurez-vous d\'avoir SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY dans votre .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function deleteGuideCompletCourses() {
  console.log('🔍 Recherche des cours "Guide Complet"...\n');

  try {
    // 1. Trouver tous les cours "Guide Complet"
    const { data: courses, error: fetchError } = await supabase
      .from('courses')
      .select('id, title, slug')
      .ilike('title', '%Guide Complet%');

    if (fetchError) {
      throw fetchError;
    }

    if (!courses || courses.length === 0) {
      console.log('✅ Aucun cours "Guide Complet" trouvé.');
      return;
    }

    console.log(`📋 ${courses.length} cours trouvés:\n`);
    courses.forEach((course, index) => {
      console.log(`   ${index + 1}. ${course.title} (${course.id})`);
    });

    const courseIds = courses.map(c => c.id);

    console.log('\n🗑️  Suppression en cours...\n');

    // 2. Supprimer les enrollments
    const { error: enrollmentsError } = await supabase
      .from('enrollments')
      .delete()
      .in('course_id', courseIds);
    
    if (enrollmentsError) {
      console.warn('⚠️  Erreur lors de la suppression des enrollments:', enrollmentsError.message);
    } else {
      console.log('✅ Enrollments supprimés');
    }

    // 3. Supprimer les progress
    const { error: progressError } = await supabase
      .from('progress')
      .delete()
      .in('course_id', courseIds);
    
    if (progressError) {
      console.warn('⚠️  Erreur lors de la suppression des progress:', progressError.message);
    } else {
      console.log('✅ Progress supprimés');
    }

    // 4. Supprimer les certificates
    const { error: certificatesError } = await supabase
      .from('certificates')
      .delete()
      .in('course_id', courseIds);
    
    if (certificatesError) {
      console.warn('⚠️  Erreur lors de la suppression des certificates:', certificatesError.message);
    } else {
      console.log('✅ Certificates supprimés');
    }

    // 5. Supprimer les lessons
    const { error: lessonsError } = await supabase
      .from('lessons')
      .delete()
      .in('course_id', courseIds);
    
    if (lessonsError) {
      console.warn('⚠️  Erreur lors de la suppression des lessons:', lessonsError.message);
    } else {
      console.log('✅ Lessons supprimées');
    }

    // 6. Supprimer les courses
    const { error: coursesError } = await supabase
      .from('courses')
      .delete()
      .in('id', courseIds);
    
    if (coursesError) {
      throw coursesError;
    }

    console.log('\n✅ Tous les cours "Guide Complet" ont été supprimés avec succès!');
    console.log(`   ${courses.length} cours supprimés\n`);

    // Vérification finale
    const { count } = await supabase
      .from('courses')
      .select('*', { count: 'exact', head: true })
      .ilike('title', '%Guide Complet%');

    console.log(`📊 Vérification: ${count || 0} cours "Guide Complet" restants`);

  } catch (error) {
    console.error('\n❌ Erreur lors de la suppression:', error.message);
    console.error('\n💡 Solution alternative:');
    console.error('   Utilisez le script SQL: supprimer_cours_guide_complet_EXECUTE.sql');
    console.error('   dans Supabase SQL Editor (recommandé pour les suppressions en cascade)');
    process.exit(1);
  }
}

// Exécuter le script
deleteGuideCompletCourses();
