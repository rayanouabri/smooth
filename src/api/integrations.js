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
    console.log('🤖 [InvokeLLM] Starting LLM call...');
    
    // Always use Gemini via proxy - most secure method
    // Never expose API keys to client-side code
    
    try {
      // Use /api/gemini proxy endpoint (server-side, secure)
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      console.log('🤖 [InvokeLLM] Proxy response status:', response.status);
      
      const json = await response.json();
      
      if (!response.ok) {
        console.error('❌ [InvokeLLM] Proxy error:', json);
        
        // Check if it's a leaked key issue
        if (json.error?.includes('leaked') || json.message?.includes('leaked')) {
          console.error('🚨 [InvokeLLM] API KEY WAS COMPROMISED!');
          throw new Error('API key compromised - need to generate a new one');
        }
        
        throw new Error(json.error || 'Proxy error');
      }

      const content = json.content || '';
      if (!content) {
        console.error('❌ [InvokeLLM] No content in proxy response:', json);
        throw new Error('Empty response from LLM');
      }

      console.log('✅ [InvokeLLM] Got content, length:', content.length);
      
      if (response_json_schema && content) {
        try {
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) return JSON.parse(jsonMatch[0]);
        } catch (e) {
          console.error('Error parsing JSON from response:', e);
        }
      }

      return content;
    } catch (proxyErr) {
      console.error('❌ [InvokeLLM] Proxy failed:', proxyErr.message);
      console.log('🤖 [InvokeLLM] Trying OpenAI fallback...');
      
      // Fallback to OpenAI
      if (!import.meta.env.VITE_OPENAI_API_KEY) {
        throw new Error('No LLM configured. Please set up GEMINI_API_KEY on Vercel or use OpenAI.');
      }
      
      // OpenAI fallback
      const requestBody = {
        model: model === 'gpt-4' ? 'gpt-4-turbo-preview' : model,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      };

      if (response_json_schema) {
        requestBody.response_format = { type: 'json_object' };
        const jsonPrompt = `${prompt}\n\nRespond ONLY with valid JSON matching: ${JSON.stringify(response_json_schema)}`;
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
      const content = json.choices[0].message.content;

      if (response_json_schema) {
        try {
          return JSON.parse(content);
        } catch (e) {
          console.error('Error parsing JSON:', e);
          throw new Error('Invalid JSON in LLM response');
        }
      }

      return content;
    }

    // No LLM configured
    throw new Error('❌ No LLM API configured. Set GEMINI_API_KEY on Vercel (https://aistudio.google.com/apikey) or configure OpenAI.');
  } catch (error) {
    console.error('❌ [InvokeLLM] Fatal error:', error.message);
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
