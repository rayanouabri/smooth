// Script simplifié pour importer les CSV
// Usage: node import-csv-simple.js

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
require('dotenv').config({ path: '.env.local' });

// Configuration Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Erreur: Configurez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction pour trouver un fichier CSV
function findCSVFile(filename) {
  const downloadsPath = path.join(process.env.USERPROFILE || process.env.HOME, 'Downloads', filename);
  const currentPath = path.join(process.cwd(), filename);
  
  if (fs.existsSync(downloadsPath)) return downloadsPath;
  if (fs.existsSync(currentPath)) return currentPath;
  return null;
}

// Fonction pour lire un CSV
function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

// Parse JSON field
function parseJSON(value) {
  if (!value || value === '[]' || value === '') return [];
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

// Parse boolean
function parseBool(value) {
  return value === 'true' || value === true;
}

// Import Courses
async function importCourses() {
  const csvPath = findCSVFile('Course_export.csv');
  if (!csvPath) {
    console.log('⚠️  Course_export.csv not found');
    return;
  }

  console.log(`📚 Importing courses from: ${csvPath}`);
  const courses = await readCSV(csvPath);
  
  let success = 0, errors = 0;
  
  for (const course of courses) {
    try {
      const { error } = await supabase
        .from('courses')
        .upsert({
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
          objectives: parseJSON(course.objectives),
          prerequisites: parseJSON(course.prerequisites),
          is_published: parseBool(course.is_published),
          rating: parseFloat(course.rating) || 0,
          reviews_count: parseInt(course.reviews_count) || 0,
          enrolled_count: parseInt(course.enrolled_count) || 0,
          created_date: course.created_date || new Date().toISOString(),
          updated_date: course.updated_date || new Date().toISOString(),
        }, { onConflict: 'id' });

      if (error) throw error;
      success++;
    } catch (error) {
      console.error(`❌ Error importing ${course.title}:`, error.message);
      errors++;
    }
  }
  
  console.log(`✅ Courses: ${success} imported, ${errors} errors\n`);
}

// Import Lessons
async function importLessons() {
  const csvPath = findCSVFile('Lesson_export.csv');
  if (!csvPath) {
    console.log('⚠️  Lesson_export.csv not found');
    return;
  }

  console.log(`📖 Importing lessons from: ${csvPath}`);
  const lessons = await readCSV(csvPath);
  
  let success = 0, skipped = 0;
  
  for (const lesson of lessons) {
    if (!lesson.course_id || lesson.course_id === '' || lesson.course_id === 'DELETE_ME_TEMP') {
      skipped++;
      continue;
    }

    try {
      const { error } = await supabase
        .from('lessons')
        .upsert({
          id: lesson.id,
          course_id: lesson.course_id,
          title: lesson.title,
          content: lesson.content_text || null,
          order: parseInt(lesson.order || lesson.lesson_number) || 0,
          duration_minutes: parseInt(lesson.duration_minutes) || 0,
          video_url: lesson.content_url || null,
          created_date: lesson.created_date || new Date().toISOString(),
          updated_date: lesson.updated_date || new Date().toISOString(),
        }, { onConflict: 'id' });

      if (error) throw error;
      success++;
    } catch (error) {
      console.error(`❌ Error importing lesson ${lesson.id}:`, error.message);
    }
  }
  
  console.log(`✅ Lessons: ${success} imported, ${skipped} skipped\n`);
}

// Import Testimonials
async function importTestimonials() {
  const csvPath = findCSVFile('Testimonial_export.csv');
  if (!csvPath) {
    console.log('⚠️  Testimonial_export.csv not found');
    return;
  }

  console.log(`💬 Importing testimonials from: ${csvPath}`);
  const testimonials = await readCSV(csvPath);
  
  for (const t of testimonials) {
    try {
      await supabase.from('testimonials').upsert({
        id: t.id,
        student_name: t.student_name,
        student_photo: t.student_photo || null,
        country_origin: t.country_origin || null,
        content: t.content,
        rating: parseInt(t.rating) || 5,
        is_featured: parseBool(t.is_featured),
        created_date: t.created_date || new Date().toISOString(),
      }, { onConflict: 'id' });
    } catch (error) {
      console.error(`❌ Error importing testimonial:`, error.message);
    }
  }
  
  console.log(`✅ Testimonials imported\n`);
}

// Import Forum Posts
async function importForumPosts() {
  const csvPath = findCSVFile('ForumPost_export.csv');
  if (!csvPath) {
    console.log('⚠️  ForumPost_export.csv not found');
    return;
  }

  console.log(`💭 Importing forum posts from: ${csvPath}`);
  const posts = await readCSV(csvPath);
  
  for (const post of posts) {
    try {
      await supabase.from('forum_posts').upsert({
        id: post.id,
        title: post.title,
        content: post.content,
        category: post.category || 'autre',
        author_email: post.author_email,
        author_name: post.author_name || null,
        replies_count: parseInt(post.replies_count) || 0,
        views_count: parseInt(post.views_count) || 0,
        is_pinned: parseBool(post.is_pinned),
        is_solved: parseBool(post.is_solved),
        tags: parseJSON(post.tags),
        created_date: post.created_date || new Date().toISOString(),
        updated_date: post.updated_date || new Date().toISOString(),
      }, { onConflict: 'id' });
    } catch (error) {
      console.error(`❌ Error importing post:`, error.message);
    }
  }
  
  console.log(`✅ Forum posts imported\n`);
}

// Import Forum Replies
async function importForumReplies() {
  const csvPath = findCSVFile('ForumReply_export.csv');
  if (!csvPath) {
    console.log('⚠️  ForumReply_export.csv not found');
    return;
  }

  console.log(`💬 Importing forum replies from: ${csvPath}`);
  const replies = await readCSV(csvPath);
  
  for (const reply of replies) {
    try {
      await supabase.from('forum_replies').upsert({
        id: reply.id,
        post_id: reply.post_id,
        content: reply.content,
        author_email: reply.author_email,
        author_name: reply.author_name || null,
        is_solution: parseBool(reply.is_solution),
        likes_count: parseInt(reply.likes_count) || 0,
        created_date: reply.created_date || new Date().toISOString(),
      }, { onConflict: 'id' });
    } catch (error) {
      console.error(`❌ Error importing reply:`, error.message);
    }
  }
  
  console.log(`✅ Forum replies imported\n`);
}

// Import Enrollments
async function importEnrollments() {
  const csvPath = findCSVFile('Enrollment_export.csv');
  if (!csvPath) {
    console.log('⚠️  Enrollment_export.csv not found');
    return;
  }

  console.log(`📝 Importing enrollments from: ${csvPath}`);
  const enrollments = await readCSV(csvPath);
  
  for (const e of enrollments) {
    try {
      await supabase.from('enrollments').upsert({
        id: e.id,
        user_email: e.user_email,
        course_id: e.course_id,
        progress_percentage: parseFloat(e.progress_percentage) || 0,
        completed_lessons: parseJSON(e.completed_lessons),
        last_accessed: e.last_accessed || new Date().toISOString(),
        time_spent_minutes: parseInt(e.time_spent_minutes) || 0,
        completed: parseBool(e.completed),
        certificate_issued: parseBool(e.certificate_issued),
        created_date: e.created_date || new Date().toISOString(),
      }, { onConflict: 'id' });
    } catch (error) {
      console.error(`❌ Error importing enrollment:`, error.message);
    }
  }
  
  console.log(`✅ Enrollments imported\n`);
}

// Import Teacher Profiles
async function importTeacherProfiles() {
  const csvPath = findCSVFile('TeacherProfile_export.csv');
  if (!csvPath) {
    console.log('⚠️  TeacherProfile_export.csv not found');
    return;
  }

  console.log(`👨‍🏫 Importing teacher profiles from: ${csvPath}`);
  const teachers = await readCSV(csvPath);
  
  for (const teacher of teachers) {
    try {
      await supabase.from('teacher_profiles').upsert({
        id: teacher.id,
        user_email: teacher.user_email,
        name: teacher.full_name,
        specialty: teacher.specialties ? parseJSON(teacher.specialties)[0] : null,
        bio: teacher.bio || null,
        rating: parseFloat(teacher.rating) || 0,
        created_date: teacher.created_date || new Date().toISOString(),
        updated_date: teacher.updated_date || new Date().toISOString(),
      }, { onConflict: 'id' });
    } catch (error) {
      console.error(`❌ Error importing teacher:`, error.message);
    }
  }
  
  console.log(`✅ Teacher profiles imported\n`);
}

// Main
async function main() {
  console.log('🚀 Starting CSV import to Supabase...\n');
  console.log(`Supabase URL: ${supabaseUrl.substring(0, 30)}...\n`);

  try {
    await importCourses();
    await importLessons();
    await importTestimonials();
    await importForumPosts();
    await importForumReplies();
    await importEnrollments();
    await importTeacherProfiles();

    console.log('✅ Import completed successfully!');
  } catch (error) {
    console.error('\n❌ Import failed:', error);
    process.exit(1);
  }
}

main();

