# 🚀 Configuration : Supabase Edge Function pour Images

## 📋 Objectif

Créer une Edge Function Supabase qui met automatiquement à jour les images des cours par catégorie.

---

## 🔧 Étape 1 : Créer la Edge Function dans Supabase

### 1.1 Accéder aux Edge Functions

1. Ouvrez **Supabase Dashboard**
2. Allez dans **Edge Functions** (menu de gauche)
3. Cliquez sur **"Create a new function"**

### 1.2 Créer la fonction

1. **Nom** : `update-course-images`
2. **Template** : Choisissez "TypeScript" ou "Deno"
3. Cliquez sur **"Create function"**

---

## 📝 Étape 2 : Code de la Function

### 2.1 Remplacez le code par défaut par :

```typescript
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

    // Mettre à jour les images
    for (const course of courses || []) {
      const needsUpdate = !course.thumbnail_url || 
                         course.thumbnail_url === '' || 
                         !course.thumbnail_url.includes('unsplash') ||
                         course.thumbnail_url.includes('default')

      if (needsUpdate && course.category) {
        const newImage = categoryImages[course.category] || defaultImage
        
        const { error: updateError } = await supabase
          .from('courses')
          .update({ thumbnail_url: newImage })
          .eq('id', course.id)

        if (!updateError) {
          updatedCount++
        }
      }
    }

    // Statistiques
    const { data: stats } = await supabase
      .from('courses')
      .select('category, thumbnail_url')
      .eq('is_published', true)

    const statsByCategory = {}
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
```

### 2.2 Déployer la fonction

1. Cliquez sur **"Deploy"** ou **"Save"**
2. Attendez le déploiement (quelques secondes)

---

## 🧪 Étape 3 : Tester la Function

### 3.1 Depuis Supabase Dashboard

1. Allez dans **Edge Functions** → `update-course-images`
2. Cliquez sur **"Invoke"**
3. Cliquez sur **"Invoke function"**
4. Vérifiez le résultat dans la console

### 3.2 Depuis le code (optionnel)

Vous pouvez appeler cette fonction depuis votre app :

```javascript
const { data, error } = await supabase.functions.invoke('update-course-images')

if (data?.success) {
  console.log('✅ Images mises à jour :', data.updated)
} else {
  console.error('❌ Erreur :', error)
}
```

---

## 🔄 Étape 4 : Automatiser (Optionnel)

### Créer un webhook ou un cron job

Pour automatiser l'exécution, vous pouvez :

1. **Créer une page admin** qui appelle cette fonction
2. **Utiliser un service externe** (Zapier, n8n, etc.) pour appeler l'endpoint périodiquement
3. **Créer un cron job** dans Vercel (voir guide webhooks Vercel)

---

## ✅ Vérification

Après avoir exécuté la fonction :

1. Allez dans **Table Editor** → **courses**
2. Vérifiez que les cours ont maintenant des `thumbnail_url` avec `unsplash`
3. Filtrez par catégorie pour vérifier que les images correspondent

---

## 🆘 Dépannage

### Erreur : "Missing Supabase credentials"
- Les variables d'environnement sont automatiquement injectées par Supabase
- Vérifiez que vous êtes dans le bon projet

### Erreur : "Permission denied"
- La fonction utilise `SUPABASE_SERVICE_ROLE_KEY` qui a tous les droits
- Vérifiez que cette variable est bien configurée dans Supabase

### La fonction ne met rien à jour
- Vérifiez que les cours ont `is_published = true`
- Vérifiez les catégories dans la table `courses`
