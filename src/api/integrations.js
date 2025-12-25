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
    // Si Gemini API Key est configurée, utiliser Gemini (priorité)
    if (import.meta.env.VITE_GEMINI_API_KEY) {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      
      const requestBody = {
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 4096,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
          }
        ]
      };

      console.log('🤖 Appel à Gemini API...');
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('❌ Erreur Gemini API:', error);
        throw new Error(error.error?.message || 'Erreur Gemini API');
      }

      const json = await response.json();
      console.log('✅ Réponse Gemini reçue');
      
      const content = json.candidates?.[0]?.content?.parts?.[0]?.text || '';
      
      if (!content) {
        console.error('❌ Pas de contenu dans la réponse:', json);
        throw new Error('Réponse vide de Gemini');
      }

      // Si response_json_schema est fourni, essayer d'extraire le JSON
      if (response_json_schema && content) {
        try {
          // Essayer de trouver un JSON dans la réponse
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
          }
        } catch (e) {
          console.error('Error parsing JSON from Gemini response:', e);
        }
      }

      return content;
    }
    
    // Si OpenAI API Key est configurée, utiliser directement OpenAI
    if (import.meta.env.VITE_OPENAI_API_KEY) {
      const requestBody = {
        model: model === 'gpt-4' ? 'gpt-4-turbo-preview' : model,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      };

      // Si response_json_schema est fourni, utiliser JSON mode
      if (response_json_schema) {
        requestBody.response_format = { type: 'json_object' };
        // Ajouter l'instruction JSON au prompt
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
        throw new Error(error.error?.message || 'Erreur OpenAI API');
      }

      const json = await response.json();
      const content = json.choices[0].message.content;

      // Si response_json_schema est fourni, parser le JSON
      if (response_json_schema) {
        try {
          return JSON.parse(content);
        } catch (e) {
          console.error('Error parsing JSON response:', e);
          throw new Error('La réponse LLM n\'est pas un JSON valide');
        }
      }

      return content;
    }

    // Sinon, retourner une erreur claire
    console.error('❌ Aucune clé API configurée pour l\'IA');
    throw new Error('Configuration IA manquante. Veuillez configurer VITE_GEMINI_API_KEY ou VITE_OPENAI_API_KEY dans votre fichier .env');
  } catch (error) {
    console.error('❌ Erreur lors de l\'appel à l\'IA:', error);
    
    // Message d'erreur plus clair pour l'utilisateur
    if (error.message.includes('API key')) {
      throw new Error('Clé API invalide. Vérifiez votre configuration.');
    }
    if (error.message.includes('quota')) {
      throw new Error('Quota API dépassé. Veuillez réessayer plus tard.');
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
