// Edge Function pour envoyer des emails
// Supporte Resend ou Supabase Email service

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailRequest {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  from?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Get authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Missing Authorization header');
    }

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    // Parse request body
    const emailData: EmailRequest = await req.json();
    const { to, subject, html, text, from } = emailData;

    // Validate required fields
    if (!to || !subject) {
      throw new Error('Missing required fields: to and subject are required');
    }

    // Use Resend if API key is available (recommended)
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (RESEND_API_KEY) {
      // Use Resend service
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: from || 'FrancePrep Academy <contact@franceprepacademy.fr>',
          to: [to],
          subject: subject,
          html: html || text || '',
          text: text || '',
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error('Resend error:', errorData);
        throw new Error(`Resend API error: ${errorData.message || resendResponse.statusText}`);
      }

      const result = await resendResponse.json();
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          messageId: result.id,
          message: 'Email sent successfully via Resend'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // Fallback: Use Supabase Database email service (if configured)
    // Store email request in database for processing
    const { error: dbError } = await supabaseClient
      .from('email_requests')
      .insert({
        to_email: to,
        subject: subject,
        html_content: html,
        text_content: text,
        status: 'pending',
        created_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error('Database error:', dbError);
      // If table doesn't exist, suggest using Resend
      if (dbError.message.includes('relation "email_requests" does not exist')) {
        throw new Error(
          'Email service not configured. Please set RESEND_API_KEY environment variable or create email_requests table.'
        );
      }
      throw dbError;
    }

    // Return success
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email request saved to database (requires processing)' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in send-email function:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to send email' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});


