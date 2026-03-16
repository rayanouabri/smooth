// Ré-exporter depuis database.js pour compatibilité
export {
  Course,
  Progress,
  Assessment,
  Resume,
  Certificate,
  Lesson,
  Enrollment,
  ForumPost,
  ForumReply,
  TeacherProfile,
  Testimonial,
  UserProfile,
  rpc,
} from './database';

// Export auth pour compatibilité
export { default as User } from './auth';