import { supabase } from './supabaseClient';

/**
 * Service d'intégrations
 * Remplace base44.integrations.Core
 */

/**
 * InvokeLLM - Appeler un modèle de langage
 * Pour l'instant, utilise une Edge Function Supabase
 * Vous pouvez aussi utiliser directement une API OpenAI/Anthropic
 */
export const InvokeLLM = async ({ prompt, add_context_from_internet = false, model = 'gpt-4', response_json_schema = null }) => {
  try {
    // Utiliser TOUJOURS le proxy /api/gemini (clé backend sûre)
    try {
      console.log('[InvokeLLM] Calling /api/gemini proxy');
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        let errorData;
        try {
          const text = await response.text();
          errorData = text ? JSON.parse(text) : { error: `HTTP ${response.status}` };
        } catch (parseErr) {
          errorData = { error: `HTTP ${response.status} - Failed to parse error response` };
        }
        console.error('[InvokeLLM] Gemini proxy error:', response.status, errorData);
        const errorMessage = errorData.error || errorData.message || `Gemini API error (${response.status})`;
        throw new Error(errorMessage);
      }

      const json = await response.json();
      const content = json.content;
      
      if (!content) {
        console.error('[InvokeLLM] Empty content from proxy:', json);
        throw new Error('Réponse vide de Gemini');
      }

      if (response_json_schema && content) {
        try {
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
          }
        } catch (e) {
          console.warn('[InvokeLLM] JSON parsing failed, returning raw content');
        }
      }

      console.log('[InvokeLLM] Gemini success, content length:', content.length);
      return content;
    } catch (err) {
      console.error('[InvokeLLM] Gemini proxy failed:', err.message);
      if (!import.meta.env.VITE_OPENAI_API_KEY) {
        throw err;
      }
    }
    
    // Fallback: Si OpenAI API Key est configurée
    if (import.meta.env.VITE_OPENAI_API_KEY) {
      console.log('[InvokeLLM] Falling back to OpenAI');
      const requestBody = {
        model: model === 'gpt-4' ? 'gpt-4-turbo-preview' : model,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      };

      if (response_json_schema) {
        requestBody.response_format = { type: 'json_object' };
        const jsonPrompt = `${prompt}\n\nImportant: Réponds UNIQUEMENT avec un objet JSON valide qui correspond exactement à ce schéma: ${JSON.stringify(response_json_schema)}`;
        requestBody.messages[0].content = jsonPrompt;
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'OpenAI API error');
      }

      const json = await response.json();
      const content = json.choices[0]?.message?.content;

      if (!content) {
        throw new Error('OpenAI returned empty content');
      }

      if (response_json_schema) {
        try {
          return JSON.parse(content);
        } catch (e) {
          console.error('[InvokeLLM] JSON parse error from OpenAI:', e);
          throw new Error('Invalid JSON from OpenAI');
        }
      }

      return content;
    }

    // Erreur: Aucune clé API configurée
    throw new Error('No AI API configured. Set GEMINI_API_KEY on Vercel or VITE_OPENAI_API_KEY in .env');
  } catch (error) {
    console.error('[InvokeLLM] Fatal error:', error.message);
    
    if (error.message.includes('GEMINI_API_KEY not configured')) {
      throw new Error('⚠️ Clé Gemini non configurée sur le serveur.');
    }
    if (error.message.includes('quota')) {
      throw new Error('⚠️ Quota API dépassé.');
    }
    if (error.message.includes('network') || error.message.includes('fetch')) {
      throw new Error('⚠️ Erreur de connexion réseau.');
    }
    
    throw error;
  }
};

/**
 * SendEmail - Envoyer un email
 * Utilise une Edge Function Supabase ou un service externe (Resend, SendGrid, etc.)
 */
export const SendEmail = async ({ to, subject, html, text }) => {
  const { data, error } = await supabase.functions.invoke('send-email', {
    body: {
      to,
      subject,
      html,
      text,
    },
  });

  if (error) throw error;
  return data;
};

/**
 * UploadFile - Uploader un fichier vers Supabase Storage
 */
export const UploadFile = async (file, path, bucket = 'public') => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) throw error;

  // Obtenir l'URL publique
  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  return {
    ...data,
    publicUrl: urlData.publicUrl,
  };
};

/**
 * UploadPrivateFile - Uploader un fichier privé
 */
export const UploadPrivateFile = async (file, path, bucket = 'private') => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) throw error;
  return data;
};

/**
 * CreateFileSignedUrl - Créer une URL signée pour un fichier privé
 */
export const CreateFileSignedUrl = async (path, bucket = 'private', expiresIn = 3600) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(path, expiresIn);

  if (error) throw error;
  return data;
};

/**
 * GenerateImage - Générer une image avec DALL-E ou Midjourney
 */
export const GenerateImage = async ({ prompt, size = '1024x1024' }) => {
  const { data, error } = await supabase.functions.invoke('generate-image', {
    body: {
      prompt,
      size,
    },
  });

  if (error) throw error;
  return data;
};

/**
 * ExtractDataFromUploadedFile - Extraire des données d'un fichier
 */
export const ExtractDataFromUploadedFile = async ({ fileUrl, fileType }) => {
  const { data, error } = await supabase.functions.invoke('extract-file-data', {
    body: {
      fileUrl,
      fileType,
    },
  });

  if (error) throw error;
  return data;
};

// Export par défaut pour compatibilité
export const Core = {
  InvokeLLM,
  SendEmail,
  UploadFile,
  UploadPrivateFile,
  CreateFileSignedUrl,
  GenerateImage,
  ExtractDataFromUploadedFile,
};

export default Core;
