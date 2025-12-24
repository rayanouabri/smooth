import { supabase } from './supabaseClient';

/**
 * Service de base de données générique
 * Remplace base44.entities.EntityName avec une interface similaire
 */

/**
 * Crée un service d'entité pour une table Supabase
 * @param {string} tableName - Nom de la table Supabase
 * @returns {Object} Service avec méthodes filter, get, create, update, delete
 */
export const createEntityService = (tableName) => {
  return {
    /**
     * Filtrer les entités (remplace base44.entities.EntityName.filter)
     * @param {Object} filters - Filtres à appliquer { field: value }
     * @param {string} orderBy - Champ de tri (préfixé par '-' pour ordre décroissant)
     * @param {number} limit - Nombre maximum de résultats
     * @returns {Promise<Array>} Liste des entités
     */
    filter: async (filters = {}, orderBy = null, limit = null) => {
      let query = supabase.from(tableName).select('*');

      // Appliquer les filtres
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            if (value.length > 0) {
              query = query.in(key, value);
            }
          } else {
            query = query.eq(key, value);
          }
        }
      });

      // Appliquer le tri
      if (orderBy) {
        const isDescending = orderBy.startsWith('-');
        const field = isDescending ? orderBy.slice(1) : orderBy;
        query = query.order(field, { ascending: !isDescending });
      }

      // Appliquer la limite
      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;
      if (error) {
        console.error(`Error filtering ${tableName}:`, error);
        throw error;
      }
      return data || [];
    },

    /**
     * Obtenir une entité par ID
     */
    get: async (id) => {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    },

    /**
     * Créer une nouvelle entité
     */
    create: async (entity) => {
      const { data, error } = await supabase
        .from(tableName)
        .insert(entity)
        .select()
        .single();
      if (error) throw error;
      return data;
    },

    /**
     * Mettre à jour une entité
     */
    update: async (id, updates) => {
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },

    /**
     * Supprimer une entité
     */
    delete: async (id) => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      if (error) throw error;
    },

    /**
     * Obtenir toutes les entités
     */
    all: async (orderBy = null, limit = null) => {
      return this.filter({}, orderBy, limit);
    },
  };
};

// Créer les services pour chaque entité
export const Course = createEntityService('courses');
export const Progress = createEntityService('progress');
export const Assessment = createEntityService('assessments');
export const Resume = createEntityService('resumes');
export const Certificate = createEntityService('certificates');
export const Lesson = createEntityService('lessons');
export const Enrollment = createEntityService('enrollments');
export const ForumPost = createEntityService('forum_posts');
export const ForumReply = createEntityService('forum_replies');
export const TeacherProfile = createEntityService('teacher_profiles');
export const Testimonial = createEntityService('testimonials');
export const UserProfile = createEntityService('user_profiles');

