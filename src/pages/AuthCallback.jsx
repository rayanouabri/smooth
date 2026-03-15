import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/api/supabaseClient";
import { createPageUrl } from "../utils";

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Sur mobile et certains navigateurs, le hash fragment contient les tokens OAuth
        // Supabase devrait les gérer automatiquement, mais on s'assure de les traiter
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const errorFromHash = hashParams.get('error');
        const errorDescription = hashParams.get('error_description');

        if (errorFromHash) {
          console.error("OAuth error from hash:", errorFromHash, errorDescription);
          setAuthError(errorDescription || errorFromHash);
          setTimeout(() => {
            navigate(createPageUrl("Login") + "?error=auth_failed");
          }, 3000);
          return;
        }

        // Attendre un court instant pour que Supabase traite les tokens du hash
        // Nécessaire sur certains navigateurs mobiles (Samsung Internet, Opera Mini)
        await new Promise(resolve => setTimeout(resolve, 500));

        // Récupérer le code d'authentification depuis l'URL
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Erreur d'authentification:", error);
          setAuthError(error.message);
          setTimeout(() => {
            navigate(createPageUrl("Login") + "?error=auth_failed");
          }, 3000);
          return;
        }

        if (data.session) {
          // Créer ou mettre à jour le profil utilisateur
          const user = data.session.user;
          console.log('[AuthCallback] User authenticated:', user.id, user.email);
          
          // Vérifier si le profil existe (par ID d'abord, puis par email)
          let existingProfile = null;
          
          // Essayer par ID
          const { data: byId } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', user.id)
            .maybeSingle();
          
          if (byId) {
            existingProfile = byId;
            console.log('[AuthCallback] Profile found by ID');
          } else {
            // Essayer par email
            const { data: byEmail } = await supabase
              .from('user_profiles')
              .select('*')
              .eq('user_email', user.email)
              .maybeSingle();
            
            if (byEmail) {
              existingProfile = byEmail;
              console.log('[AuthCallback] Profile found by email');
            }
          }

          if (!existingProfile) {
            console.log('[AuthCallback] No profile found, creating new one...');
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
              // Si l'insertion échoue (profil peut exister via trigger), ce n'est pas critique
              if (insertError.code === '23505') {
                console.log('[AuthCallback] Profile already exists (created by trigger)');
              } else {
                console.error('[AuthCallback] Error creating profile:', insertError);
              }
            } else {
              console.log('[AuthCallback] Profile created successfully');
            }
          } else {
            console.log('[AuthCallback] Profile already exists:', existingProfile.id);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {authError ? (
          <>
            <div className="text-5xl mb-4">{"⚠️"}</div>
            <p className="text-red-600 font-semibold mb-2">{"Erreur de connexion"}</p>
            <p className="text-gray-600 text-sm mb-4">{authError}</p>
            <p className="text-gray-400 text-xs">{"Redirection vers la page de connexion..."}</p>
          </>
        ) : (
          <>
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mb-4"></div>
            <p className="text-gray-600">{"Connexion en cours..."}</p>
            <p className="text-gray-400 text-xs mt-2">{"Veuillez patienter, nous vérifions votre identité..."}</p>
          </>
        )}
      </div>
    </div>
  );
}

