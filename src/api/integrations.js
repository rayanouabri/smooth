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
          // Remove markdown code blocks if present
          let cleaned = content.trim();
          cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');

          // Try parsing the cleaned content directly first
          try {
            return JSON.parse(cleaned);
          } catch (_) {}

          // Try to extract JSON array [...] or object {...}
          const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
          if (arrayMatch) {
            return JSON.parse(arrayMatch[0]);
          }
          const objMatch = cleaned.match(/\{[\s\S]*\}/);
          if (objMatch) {
            return JSON.parse(objMatch[0]);
          }
        } catch (e) {
          console.warn('[InvokeLLM] JSON parsing failed, returning raw content');
        }
      }

      console.log('[InvokeLLM] Gemini success, content length:', content.length);
      return content;
    } catch (err) {
      console.error('[InvokeLLM] Gemini proxy failed:', err.message);
      throw err;
    }
  } catch (error) {
    console.error('[InvokeLLM] Fatal error:', error.message);
    
      if (error.message.includes('GEMINI_API_KEY not configured') || error.message.includes('not configured')) {
        throw new Error('⚠️ Clé Gemini non configurée sur le serveur.');
      }
      if (error.message.includes('API key expired') || error.message.includes('key expired') || error.message.includes('expired')) {
        throw new Error('⚠️ Votre clé Gemini a expiré. Veuillez la renouveler dans Vercel et redéployer.');
      }
      if (error.message.includes('Invalid API key') || error.message.includes('Invalid')) {
        throw new Error('⚠️ Clé API invalide. Vérifiez la configuration dans Vercel.');
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
 * Option 1: Utilise une Edge Function Supabase (si configurée avec Resend/SendGrid)
 * Option 2: Stocke la demande dans Supabase (solution sans service externe)
 */
export const SendEmail = async ({ to, subject, html, text, requestType, formData }) => {
  // Si requestType et formData sont fournis, sauvegarder dans Supabase ET envoyer par email
  if (requestType && formData) {
    const { data, error } = await supabase
      .from('contact_requests')
      .insert({
        request_type: requestType,
        name: formData.name || 'N/A',
        email: formData.email || to,
        phone: formData.phone || null,
        form_data: {
          ...formData,
          email_subject: subject,
          email_html: html,
          email_text: text,
        },
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      if (error.message.includes('relation "contact_requests" does not exist')) {
        throw new Error(
          'La table contact_requests n\'existe pas. Exécutez le script create_contact_requests_table.sql dans Supabase SQL Editor.'
        );
      }
      throw error;
    }

    // Envoyer l'email via le proxy Vercel (fire-and-forget, ne bloque pas si ça échoue)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestType, formData, subject, html, text }),
      });
    } catch (emailErr) {
      // Ne pas échouer si l'email ne part pas — la demande est déjà en base
      console.warn('[SendEmail] Email notification failed (non-critical):', emailErr.message);
    }

    return {
      success: true,
      message: 'Demande enregistrée avec succès',
      requestId: data.id,
    };
  }

  throw new Error('Email service non configuré. Configurez Resend ou utilisez les formulaires de contact.');
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
