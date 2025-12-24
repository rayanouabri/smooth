// Script Node.js pour importer les CSV dans Supabase
// Usage: node import-csv-to-supabase.js

// Script Node.js pour importer les CSV dans Supabase
// Usage: node import-csv-to-supabase.js

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import csv from 'csv-parser';
import { config } from 'dotenv';

// Charger les variables d'environnement
config({ path: '.env.local' });
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
  console.error('❌ Erreur: Configurez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction pour lire un CSV et retourner les données
async function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

// Fonction pour convertir les valeurs JSON en JSONB
function parseJSONField(value) {
  if (!value || value === '[]' || value === '') return [];
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

// Fonction pour convertir date string en timestamp
function parseDate(dateStr) {
  if (!dateStr) return new Date().toISOString();
  return dateStr;
}

// Fonction pour convertir boolean string
function parseBoolean(value) {
  if (value === 'true' || value === true) return true;
  if (value === 'false' || value === false) return false;
  return value;
}

// Import Courses
async function importCourses() {
  // Chercher le fichier CSV dans plusieurs emplacements possibles
  const possiblePaths = [
    path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads', 'Course_export.csv'),
    path.join(__dirname, '../Downloads/Course_export.csv'),
    path.join(__dirname, '../../Downloads/Course_export.csv'),
    path.join(process.cwd(), 'Course_export.csv'),
  ];
  
  let csvPath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      csvPath = p;
      break;
    }
  }
  if (!csvPath) {
    console.log('⚠️  Course_export.csv not found. Placez-le dans Downloads/ ou dans le dossier du projet.');
    return;
  }
  
  console.log(`📂 Reading from: ${csvPath}`);

  const courses = await readCSV(csvPath);
  console.log(`📚 Importing ${courses.length} courses...`);

  for (const course of courses) {
    const courseData = {
      id: course.id,
      title: course.title,
      slug: course.slug,
      description: course.description,
      short_description: course.short_description,
      category: course.category,
      level: course.level,
      language: course.language,
      duration_hours: parseInt(course.duration_hours) || 0,
      price: parseFloat(course.price) || 0,
      thumbnail_url: course.thumbnail_url || null,
      objectives: parseJSONField(course.objectives),
      prerequisites: parseJSONField(course.prerequisites),
      is_published: parseBoolean(course.is_published),
      rating: parseFloat(course.rating) || 0,
      reviews_count: parseInt(course.reviews_count) || 0,
      enrolled_count: parseInt(course.enrolled_count) || 0,
      created_date: parseDate(course.created_date),
      updated_date: parseDate(course.updated_date),
    };

    const { error } = await supabase
      .from('courses')
      .upsert(courseData, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Error importing course ${course.id}:`, error.message);
    } else {
      console.log(`✅ Imported: ${course.title}`);
    }
  }
}

// Fonction helper pour trouver un fichier CSV
function findCSVFile(filename) {
  const possiblePaths = [
    path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads', filename),
    path.join(__dirname, '../Downloads', filename),
    path.join(__dirname, '../../Downloads', filename),
    path.join(process.cwd(), filename),
  ];
  
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return null;
}

// Import Lessons
async function importLessons() {
  const csvPath = findCSVFile('Lesson_export.csv');
  if (!csvPath) {
    console.log('⚠️  Lesson_export.csv not found, skipping...');
    return;
  }

  const lessons = await readCSV(csvPath);
  console.log(`📖 Importing ${lessons.length} lessons...`);

  for (const lesson of lessons) {
    if (!lesson.course_id || lesson.course_id === '' || lesson.course_id === 'DELETE_ME_TEMP') {
      continue; // Skip lessons without course_id
    }

    const lessonData = {
      id: lesson.id,
      course_id: lesson.course_id,
      title: lesson.title,
      content: lesson.content_text || null,
      order: parseInt(lesson.order) || parseInt(lesson.lesson_number) || 0,
      duration_minutes: parseInt(lesson.duration_minutes) || 0,
      video_url: lesson.content_url || null,
      created_date: parseDate(lesson.created_date),
      updated_date: parseDate(lesson.updated_date),
    };

    const { error } = await supabase
      .from('lessons')
      .upsert(lessonData, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Error importing lesson ${lesson.id}:`, error.message);
    }
  }
  console.log(`✅ Lessons imported`);
}

// Import Testimonials
async function importTestimonials() {
  const csvPath = findCSVFile('Testimonial_export.csv');
  if (!csvPath) {
    console.log('⚠️  Testimonial_export.csv not found, skipping...');
    return;
  }

  const testimonials = await readCSV(csvPath);
  console.log(`💬 Importing ${testimonials.length} testimonials...`);

  for (const testimonial of testimonials) {
    const testimonialData = {
      id: testimonial.id,
      student_name: testimonial.student_name,
      student_photo: testimonial.student_photo || null,
      country_origin: testimonial.country_origin || null,
      content: testimonial.content,
      rating: parseInt(testimonial.rating) || 5,
      is_featured: parseBoolean(testimonial.is_featured),
      created_date: parseDate(testimonial.created_date),
    };

    const { error } = await supabase
      .from('testimonials')
      .upsert(testimonialData, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Error importing testimonial ${testimonial.id}:`, error.message);
    }
  }
  console.log(`✅ Testimonials imported`);
}

// Import Forum Posts
async function importForumPosts() {
  const csvPath = findCSVFile('ForumPost_export.csv');
  if (!csvPath) {
    console.log('⚠️  ForumPost_export.csv not found, skipping...');
    return;
  }

  const posts = await readCSV(csvPath);
  console.log(`💭 Importing ${posts.length} forum posts...`);

  for (const post of posts) {
    const postData = {
      id: post.id,
      title: post.title,
      content: post.content,
      category: post.category || 'autre',
      author_email: post.author_email,
      author_name: post.author_name || null,
      replies_count: parseInt(post.replies_count) || 0,
      views_count: parseInt(post.views_count) || 0,
      is_pinned: parseBoolean(post.is_pinned),
      is_solved: parseBoolean(post.is_solved),
      tags: parseJSONField(post.tags),
      created_date: parseDate(post.created_date),
      updated_date: parseDate(post.updated_date),
    };

    const { error } = await supabase
      .from('forum_posts')
      .upsert(postData, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Error importing post ${post.id}:`, error.message);
    }
  }
  console.log(`✅ Forum posts imported`);
}

// Import Forum Replies
async function importForumReplies() {
  const csvPath = findCSVFile('ForumReply_export.csv');
  if (!csvPath) {
    console.log('⚠️  ForumReply_export.csv not found, skipping...');
    return;
  }

  const replies = await readCSV(csvPath);
  console.log(`💬 Importing ${replies.length} forum replies...`);

  for (const reply of replies) {
    const replyData = {
      id: reply.id,
      post_id: reply.post_id,
      content: reply.content,
      author_email: reply.author_email,
      author_name: reply.author_name || null,
      is_solution: parseBoolean(reply.is_solution),
      likes_count: parseInt(reply.likes_count) || 0,
      created_date: parseDate(reply.created_date),
    };

    const { error } = await supabase
      .from('forum_replies')
      .upsert(replyData, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Error importing reply ${reply.id}:`, error.message);
    }
  }
  console.log(`✅ Forum replies imported`);
}

// Import Enrollments
async function importEnrollments() {
  const csvPath = findCSVFile('Enrollment_export.csv');
  if (!csvPath) {
    console.log('⚠️  Enrollment_export.csv not found, skipping...');
    return;
  }

  const enrollments = await readCSV(csvPath);
  console.log(`📝 Importing ${enrollments.length} enrollments...`);

  for (const enrollment of enrollments) {
    const enrollmentData = {
      id: enrollment.id,
      user_email: enrollment.user_email,
      course_id: enrollment.course_id,
      progress_percentage: parseFloat(enrollment.progress_percentage) || 0,
      completed_lessons: parseJSONField(enrollment.completed_lessons),
      last_accessed: parseDate(enrollment.last_accessed),
      time_spent_minutes: parseInt(enrollment.time_spent_minutes) || 0,
      completed: parseBoolean(enrollment.completed),
      certificate_issued: parseBoolean(enrollment.certificate_issued),
      created_date: parseDate(enrollment.created_date),
    };

    const { error } = await supabase
      .from('enrollments')
      .upsert(enrollmentData, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Error importing enrollment ${enrollment.id}:`, error.message);
    }
  }
  console.log(`✅ Enrollments imported`);
}

// Import Teacher Profiles
async function importTeacherProfiles() {
  const csvPath = findCSVFile('TeacherProfile_export.csv');
  if (!csvPath) {
    console.log('⚠️  TeacherProfile_export.csv not found, skipping...');
    return;
  }

  const teachers = await readCSV(csvPath);
  console.log(`👨‍🏫 Importing ${teachers.length} teacher profiles...`);

  for (const teacher of teachers) {
    const teacherData = {
      id: teacher.id,
      user_email: teacher.user_email,
      name: teacher.full_name,
      specialty: teacher.specialties ? parseJSONField(teacher.specialties)[0] : null,
      bio: teacher.bio || null,
      rating: parseFloat(teacher.rating) || 0,
      created_date: parseDate(teacher.created_date),
      updated_date: parseDate(teacher.updated_date),
    };

    const { error } = await supabase
      .from('teacher_profiles')
      .upsert(teacherData, { onConflict: 'id' });

    if (error) {
      console.error(`❌ Error importing teacher ${teacher.id}:`, error.message);
    }
  }
  console.log(`✅ Teacher profiles imported`);
}

// Main function
async function main() {
  console.log('🚀 Starting CSV import to Supabase...\n');

  try {
    await importCourses();
    await importLessons();
    await importTestimonials();
    await importForumPosts();
    await importForumReplies();
    await importEnrollments();
    await importTeacherProfiles();

    console.log('\n✅ Import completed successfully!');
  } catch (error) {
    console.error('\n❌ Import failed:', error);
    process.exit(1);
  }
}

main();

