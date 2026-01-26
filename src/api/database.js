import { supabase } from './supabaseClient';
import { isMockId } from '../utils/validate-uuid';

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
  /**
   * Filtrer les entités (remplace base44.entities.EntityName.filter)
   * @param {Object} filters - Filtres à appliquer { field: value }
   * @param {string} orderBy - Champ de tri (préfixé par '-' pour ordre décroissant)
   * @param {number} limit - Nombre maximum de résultats
   * @returns {Promise<Array>} Liste des entités
   */
  const filter = async (filters = {}, orderBy = null, limit = null) => {
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
      console.error(`Table: ${tableName}`, `Filters:`, filters, `Error details:`, error);
      throw error;
    }
    return data || [];
  };

  return {
    /**
     * Lister toutes les entités (remplace base44.entities.EntityName.list)
     * @param {string} orderBy - Champ de tri (préfixé par '-' pour ordre décroissant)
     * @param {number} limit - Nombre maximum de résultats
     * @returns {Promise<Array>} Liste des entités
     */
    all: async (orderBy = null, limit = null) => {
      return filter({}, orderBy, limit);
    },

    /**
     * Alias pour all() (compatibilité avec base44)
     */
    list: async (orderBy = null, limit = null) => {
      return filter({}, orderBy, limit);
    },

    /**
     * Filtrer les entités
     */
    filter,

    /**
     * Obtenir une entité par ID
     */
    get: async (id) => {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        console.error(`Error getting ${tableName} by id ${id}:`, error);
        throw error;
      }
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
      if (error) {
        console.error(`Error creating ${tableName}:`, error);
        throw error;
      }
      return data;
    },

    /**
     * Mettre à jour une entité
     */
    update: async (id, updates) => {
      // Valider l'ID
      if (!id || typeof id !== 'string' || isMockId(id)) {
        console.warn(`Invalid or mock ID for ${tableName}: ${id}`);
        throw new Error(`Invalid ID for ${tableName}: ${id}`);
      }
      
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select();
      
      if (error) {
        console.error(`Error updating ${tableName} ${id}:`, error);
        throw error;
      }
      
      // Si aucune ligne n'a été mise à jour, retourner null au lieu de lancer une erreur
      if (!data || data.length === 0) {
        // Ne logger que si ce n'est pas un ID mock (pour éviter le spam)
        if (!isMockId(id)) {
          console.warn(`No rows updated for ${tableName} with id ${id}`);
        }
        return null;
      }
      
      // Retourner la première ligne (ou toutes les lignes si plusieurs)
      return data.length === 1 ? data[0] : data;
    },

    /**
     * Supprimer une entité
     */
    delete: async (id) => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      if (error) {
        console.error(`Error deleting ${tableName} ${id}:`, error);
        throw error;
      }
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

