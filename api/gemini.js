import { createClient } from '@supabase/supabase-js';

const ASSISTANT_USAGE_SCOPE = 'assistant';
const FREE_ASSISTANT_MESSAGES_PER_MONTH = 5;

const getMonthKey = (date = new Date()) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  return new Date(Date.UTC(year, month, 1)).toISOString().slice(0, 10);
};

const getSupabaseConfig = () => {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  return {
    url,
    key: serviceRoleKey || anonKey,
    hasServiceRole: Boolean(serviceRoleKey),
  };
};

const createSupabaseClient = (token) => {
  const { url, key, hasServiceRole } = getSupabaseConfig();
  if (!url || !key) {
    return null;
  }
  if (token && !hasServiceRole) {
    return createClient(url, key, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
  }
  return createClient(url, key);
};

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse body
    let body = req.body;
    
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON' });
      }
    }
    
    if (!body || (typeof body === 'object' && Object.keys(body).length === 0)) {
      body = req.body || {};
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'GEMINI_API_KEY not configured',
        message: 'Configure GEMINI_API_KEY in Vercel environment variables'
      });
    }

    const prompt = body.prompt;
    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    const usageScope = body.usage_scope || body.feature || null;
    let usage = null;
    let shouldCountUsage = false;
    let usageMonthKey = null;
    let usageToken = null;
    let usageUserId = null;
    let usageUserEmail = null;
    let usageUserName = null;
    let usageUsed = 0;
    let usageIsPremium = false;

    if (usageScope === ASSISTANT_USAGE_SCOPE) {
      const authHeader = req.headers.authorization || req.headers.Authorization || '';
      const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
      usageMonthKey = getMonthKey();
      usageToken = token;

      if (!token) {
        return res.status(401).json({
          error: "Connectez-vous pour utiliser l'assistant IA.",
          code: 'authentication_required',
          usage: {
            isPremium: false,
            limit: FREE_ASSISTANT_MESSAGES_PER_MONTH,
            used: 0,
            remaining: FREE_ASSISTANT_MESSAGES_PER_MONTH,
            month: usageMonthKey,
          },
        });
      }

      const supabaseAdmin = createSupabaseClient();
      if (!supabaseAdmin) {
        return res.status(500).json({
          error: 'supabase_not_configured',
          message: 'Configuration Supabase manquante pour contrôler le quota IA.',
        });
      }

      const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token);
      if (userError || !userData?.user) {
        return res.status(401).json({
          error: "Votre session a expiré. Connectez-vous pour utiliser l'assistant IA.",
          code: 'authentication_required',
          usage: {
            isPremium: false,
            limit: FREE_ASSISTANT_MESSAGES_PER_MONTH,
            used: 0,
            remaining: FREE_ASSISTANT_MESSAGES_PER_MONTH,
            month: usageMonthKey,
          },
        });
      }

      const currentUser = userData.user;
      usageUserId = currentUser.id;
      usageUserEmail = currentUser.email;
      usageUserName = currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0];

      const supabaseUser = createSupabaseClient(token) || supabaseAdmin;
      const { data: profile, error: profileError } = await supabaseUser
        .from('user_profiles')
        .select('user_id, user_email, full_name, is_premium, subscription_status, subscription_plan, ai_messages_used, ai_messages_month')
        .eq('user_id', usageUserId)
        .maybeSingle();

      if (profileError) {
        console.error('[Gemini] Profil utilisateur introuvable:', profileError);
      }

      const plan = profile?.subscription_plan;
      usageIsPremium = profile?.is_premium === true ||
        profile?.is_premium === 'true' ||
        profile?.subscription_status === 'active' ||
        plan === 'premium' ||
        plan === 'intensif' ||
        plan === 'ultimate';

      const storedMonth = profile?.ai_messages_month
        ? new Date(profile.ai_messages_month).toISOString().slice(0, 10)
        : null;
      const storedUsed = Number.isFinite(profile?.ai_messages_used)
        ? profile.ai_messages_used
        : Number.parseInt(profile?.ai_messages_used || 0, 10);
      usageUsed = storedMonth === usageMonthKey ? storedUsed : 0;

      usage = {
        isPremium: usageIsPremium,
        limit: usageIsPremium ? null : FREE_ASSISTANT_MESSAGES_PER_MONTH,
        used: usageUsed,
        remaining: usageIsPremium ? null : Math.max(FREE_ASSISTANT_MESSAGES_PER_MONTH - usageUsed, 0),
        month: usageMonthKey,
      };

      if (!usageIsPremium && usage.remaining <= 0) {
        return res.status(429).json({
          error: "Limite mensuelle atteinte : 5 messages pour l'assistant IA.",
          code: 'free_plan_limit_reached',
          usage,
        });
      }

      shouldCountUsage = !usageIsPremium;
    }

    // UTILISER UNIQUEMENT gemini-2.5-flash
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
      ]
    };

    console.log('[Gemini] Calling gemini-2.5-flash, prompt length:', prompt.length);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    let json;
    
    try {
      json = JSON.parse(responseText);
    } catch (parseErr) {
      console.error('[Gemini] Parse error. Status:', response.status);
      return res.status(500).json({ 
        error: 'Invalid response from Gemini',
        status: response.status,
        detail: responseText.substring(0, 200)
      });
    }

    if (!response.ok) {
      const errorMsg = json.error?.message || json.error?.message || json.error || 'Gemini API error';
      const errorStatus = json.error?.status || response.status;
      console.error('[Gemini] API error:', errorStatus, errorMsg);
      
      // Détection spécifique de l'erreur "API key expired"
      if (errorMsg.toLowerCase().includes('api key expired') || 
          errorMsg.toLowerCase().includes('key expired') ||
          errorMsg.toLowerCase().includes('expired')) {
        return res.status(500).json({ 
          error: 'API key expired',
          message: 'Votre clé Gemini a expiré. Veuillez la renouveler dans Vercel Environment Variables et redéployer l\'application.'
        });
      }
      
      if (response.status === 401 || response.status === 403 || errorStatus === 401 || errorStatus === 403) {
        return res.status(500).json({ 
          error: 'Invalid API key',
          message: 'Clé API invalide. Vérifiez GEMINI_API_KEY dans Vercel Environment Variables et redéployez l\'application.'
        });
      }
      if (response.status === 429) {
        return res.status(500).json({ 
          error: 'Rate limit exceeded',
          message: 'Try again later'
        });
      }
      if (response.status === 404) {
        return res.status(500).json({ 
          error: 'Model gemini-2.5-flash not found',
          message: `Error: ${errorMsg}. Verify model name and API access.`
        });
      }
      
      return res.status(500).json({ 
        error: errorMsg,
        status: response.status
      });
    }

    const content = json.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!content) {
      console.error('[Gemini] No content:', JSON.stringify(json).substring(0, 300));
      return res.status(500).json({ error: 'No content from Gemini' });
    }
    
    if (shouldCountUsage && usageUserId && usageMonthKey) {
      const supabaseUpdater = createSupabaseClient(usageToken);
      if (supabaseUpdater) {
        const nextUsed = usageUsed + 1;
        const upsertPayload = {
          user_id: usageUserId,
          user_email: usageUserEmail,
          full_name: usageUserName,
          ai_messages_used: nextUsed,
          ai_messages_month: usageMonthKey,
        };
        const { error: updateError } = await supabaseUpdater
          .from('user_profiles')
          .upsert(upsertPayload, { onConflict: 'user_id' });

        if (updateError) {
          console.error('[Gemini] Usage update failed:', updateError);
        } else if (usage) {
          usage = {
            ...usage,
            used: nextUsed,
            remaining: Math.max(FREE_ASSISTANT_MESSAGES_PER_MONTH - nextUsed, 0),
          };
        }
      }
    }

    console.log('[Gemini] Success! Content length:', content.length);
    return res.status(200).json({ content, usage });
    
  } catch (err) {
    console.error('[Gemini] Error:', err.message);
    return res.status(500).json({ 
      error: err.message || 'Server error',
      message: 'Check server logs for details'
    });
  }
}
