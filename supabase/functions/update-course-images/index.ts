import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Gérer les requêtes OPTIONS (CORS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Récupérer les variables d'environnement
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase credentials')
    }

    // Créer le client Supabase avec les droits admin
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Images par catégorie
    const categoryImages = {
      'integration_administrative': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
      'preparation_academique': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
      'culture_codes_sociaux': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
      'insertion_professionnelle': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3',
      'formations_professionnelles': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
    }

    const defaultImage = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'

    // Récupérer tous les cours publiés
    const { data: courses, error: fetchError } = await supabase
      .from('courses')
      .select('id, title, category, thumbnail_url')
      .eq('is_published', true)

    if (fetchError) {
      throw fetchError
    }

    let updatedCount = 0

    // Mettre à jour TOUTES les images selon la catégorie (force update)
    for (const course of courses || []) {
      if (course.category) {
        const newImage = categoryImages[course.category] || defaultImage
        
        // Mettre à jour même si l'image existe déjà (force update)
        const { error: updateError } = await supabase
          .from('courses')
          .update({ thumbnail_url: newImage })
          .eq('id', course.id)

        if (!updateError) {
          updatedCount++
        } else {
          console.error(`Error updating course ${course.id}:`, updateError)
        }
      }
    }

    // Statistiques
    const { data: stats } = await supabase
      .from('courses')
      .select('category, thumbnail_url')
      .eq('is_published', true)

    const statsByCategory: Record<string, { total: number; withImage: number }> = {}
    stats?.forEach(course => {
      if (!statsByCategory[course.category]) {
        statsByCategory[course.category] = { total: 0, withImage: 0 }
      }
      statsByCategory[course.category].total++
      if (course.thumbnail_url?.includes('unsplash')) {
        statsByCategory[course.category].withImage++
      }
    })

    return new Response(
      JSON.stringify({
        success: true,
        message: `✅ ${updatedCount} cours mis à jour avec succès`,
        updated: updatedCount,
        total: courses?.length || 0,
        stats: statsByCategory
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
