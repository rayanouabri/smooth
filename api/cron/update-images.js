// api/cron/update-images.js
// Endpoint pour mettre à jour les images des cours via cron job Vercel

export default async function handler(req, res) {
  // Vérifier que c'est bien un appel cron (sécurité)
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;
  
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Appeler la Supabase Edge Function
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase credentials. Vérifiez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans Vercel.');
    }

    console.log('Calling Supabase Edge Function: update-course-images');
    
    const response = await fetch(`${supabaseUrl}/functions/v1/update-course-images`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Failed to update images: ${response.status}`);
    }

    console.log('✅ Course images updated successfully:', data);

    return res.status(200).json({
      success: true,
      message: 'Course images updated successfully',
      data: data
    });
  } catch (error) {
    console.error('❌ Cron job error:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
