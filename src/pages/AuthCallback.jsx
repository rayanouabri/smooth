import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/api/supabaseClient";
import { createPageUrl } from "../utils";

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Récupérer le code d'authentification depuis l'URL
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Erreur d'authentification:", error);
          navigate(createPageUrl("Login") + "?error=auth_failed");
          return;
        }

        if (data.session) {
          // Créer ou mettre à jour le profil utilisateur
          const user = data.session.user;
          
          // Vérifier si le profil existe (par id ou user_id ou email)
          const { data: existingProfile } = await supabase
            .from('user_profiles')
            .select('*')
            .or(`id.eq.${user.id},user_id.eq.${user.id},user_email.eq.${user.email}`)
            .maybeSingle();

          if (!existingProfile) {
            // Créer un nouveau profil avec toutes les colonnes nécessaires
            const { error: insertError } = await supabase.from('user_profiles').insert({
              id: user.id, // Utiliser l'ID de l'utilisateur auth comme ID du profil
              user_id: user.id,
              user_email: user.email,
              full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
              is_premium: false,
              subscription_status: 'inactive',
            });
            
            if (insertError) {
              console.error('Error creating profile in AuthCallback:', insertError);
            }
          }

          // Rediriger vers la page demandée ou le dashboard
          const redirectTo = searchParams.get('redirect') || createPageUrl('Dashboard');
          window.location.href = redirectTo;
        } else {
          navigate(createPageUrl("Login"));
        }
      } catch (err) {
        console.error("Erreur lors du callback:", err);
        navigate(createPageUrl("Login") + "?error=callback_failed");
      }
    };

    handleAuthCallback();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mb-4"></div>
        <p className="text-gray-600">Connexion en cours...</p>
      </div>
    </div>
  );
}

