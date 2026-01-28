import { supabase } from './supabaseClient';
import { isMockId } from '../utils/validate-uuid';

/**
 * Service de base de données générique pour Supabase
 * Crée des services CRUD pour chaque table
 */

const getSupabaseConfig = () => ({
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
});

/**
 * Crée un service d'entité pour une table Supabase
 * @param {string} tableName - Nom de la table
 * @returns {Object} Service avec méthodes filter, get, create, update, delete
 */
export const createEntityService = (tableName) => {
  /**
   * Filtrer les entités
   * @param {Object} filters - Filtres { field: value }
   * @param {string} orderBy - Champ de tri ('-field' pour DESC)
   * @param {number} limit - Limite de résultats
   */
  const filter = async (filters = {}, orderBy = null, limit = null) => {
    const defaultLimit = 1000;
    const finalLimit = limit ?? defaultLimit;

    // Pour forum_posts, utiliser l'API REST directe pour garantir la limite
    if (tableName === 'forum_posts') {
      const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
      
      if (supabaseUrl && supabaseAnonKey) {
        try {
          let url = `${supabaseUrl}/rest/v1/${tableName}?select=*&limit=${finalLimit}`;
          
          // Ajouter les filtres
          Object.entries(filters).forEach(([key, value]) => {
            if (value != null && value !== '') {
              if (Array.isArray(value) && value.length > 0) {
                url += `&${key}=in.(${value.join(',')})`;
              } else if (!Array.isArray(value)) {
                url += `&${key}=eq.${encodeURIComponent(value)}`;
              }
            }
          });
          
          // Ajouter le tri
          if (orderBy) {
            const isDesc = orderBy.startsWith('-');
            const field = isDesc ? orderBy.slice(1) : orderBy;
            url += `&order=${field}.${isDesc ? 'desc' : 'asc'}`;
          }
          
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'apikey': supabaseAnonKey,
              'Authorization': `Bearer ${supabaseAnonKey}`,
              'Content-Type': 'application/json',
            }
          });
          
          if (response.ok) {
            return await response.json() || [];
          }
        } catch (err) {
          console.error(`[Database] REST error for ${tableName}:`, err.message);
        }
      }
    }

    // Fallback: utiliser le client Supabase
    let query = supabase.from(tableName).select('*');

    // Appliquer les filtres
    Object.entries(filters).forEach(([key, value]) => {
      if (value != null && value !== '') {
        if (Array.isArray(value) && value.length > 0) {
          query = query.in(key, value);
        } else if (!Array.isArray(value)) {
          query = query.eq(key, value);
        }
      }
    });

    // Appliquer le tri
    if (orderBy) {
      const isDesc = orderBy.startsWith('-');
      const field = isDesc ? orderBy.slice(1) : orderBy;
      query = query.order(field, { ascending: !isDesc });
    }

    query = query.limit(finalLimit);
    
    const { data, error } = await query;
    if (error) {
      console.error(`[Database] Error filtering ${tableName}:`, error.message);
      throw error;
    }
    
    return data || [];
  };

  return {
    /** Lister toutes les entités */
    all: (orderBy = null, limit = null) => filter({}, orderBy, limit),
    
    /** Alias pour all() */
    list: (orderBy = null, limit = null) => filter({}, orderBy, limit),

    /** Filtrer les entités */
    filter,

    /** Obtenir une entité par ID */
    get: async (id) => {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error(`[Database] Error getting ${tableName}:`, error.message);
        throw error;
      }
      return data;
    },

    /** Créer une nouvelle entité */
    create: async (entity) => {
      const { data, error } = await supabase
        .from(tableName)
        .insert(entity)
        .select()
        .single();
      
      if (error) {
        console.error(`[Database] Error creating ${tableName}:`, error.message);
        throw error;
      }
      return data;
    },

    /** Mettre à jour une entité */
    update: async (id, updates) => {
      if (!id || typeof id !== 'string' || isMockId(id)) {
        return null;
      }
      
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select();
      
      if (error) {
        console.error(`[Database] Error updating ${tableName}:`, error.message);
        throw error;
      }
      
      return data?.[0] ?? null;
    },

    /** Supprimer une entité */
    delete: async (id) => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error(`[Database] Error deleting ${tableName}:`, error.message);
        throw error;
      }
    },
  };
};

// Services pour chaque entité
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
