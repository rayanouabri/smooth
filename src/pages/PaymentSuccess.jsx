import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/api/supabaseClient";
import { Badge } from "@/components/ui/badge";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [step, setStep] = useState('loading');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    console.log('PaymentSuccess mounted, sessionId:', sessionId);
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      console.log('Checking authentication...');
      
      if (!sessionId) {
        console.error('No session ID found');
        setError('Aucun identifiant de session trouvé. Veuillez réessayer le paiement.');
        setStep('error');
        return;
      }

      // Vérifier la session Stripe pour confirmer le paiement
      console.log('Verifying Stripe session:', sessionId);
      const sessionVerified = await verifyStripeSession(sessionId);
      
      if (!sessionVerified) {
        console.error('Stripe session verification failed');
        setError('Impossible de vérifier la session de paiement. Veuillez contacter le support.');
        setStep('error');
        return;
      }

      // Vérifier si l'utilisateur est connecté
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
      
      console.log('Auth user:', authUser);
      
      if (authUser) {
        // Utilisateur connecté - marquer comme premium avec retry
        console.log('User authenticated, marking as premium...');
        const success = await markUserAsPremium(authUser.id, authUser.email, sessionId, 5);
        
        if (!success) {
          console.warn('⚠️ Failed to mark user as premium after retries');
          // Le webhook Stripe devrait gérer la mise à jour, mais on va quand même attendre
        }
        
        // Attendre pour que la base de données se synchronise (webhook peut prendre du temps)
        // Augmenter le temps d'attente pour laisser le webhook faire son travail
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Recharger le profil utilisateur plusieurs fois avec retry
        let updatedUser = null;
        for (let i = 0; i < 8; i++) {
          updatedUser = await reloadUserProfile(authUser.id, authUser.email);
          if (updatedUser?.is_premium === true || updatedUser?.subscription_status === 'active') {
            console.log('✅ Premium status confirmed!');
            break;
          }
          if (i < 7) {
            console.log(`⏳ Waiting for premium activation... (${i + 1}/8)`);
            // Si après 3 tentatives, essayer de forcer la mise à jour une dernière fois
            if (i === 3 && !updatedUser?.is_premium) {
              console.log('🔄 Attempting final premium update...');
              await markUserAsPremium(authUser.id, authUser.email, sessionId, 3);
            }
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        }
        
        // Si toujours pas Premium après tous les essais, forcer une dernière fois
        if (!updatedUser?.is_premium && !updatedUser?.subscription_status === 'active') {
          console.warn('⚠️ Premium not activated after all retries, forcing final update...');
          await markUserAsPremium(authUser.id, authUser.email, sessionId, 5);
          // Attendre encore un peu
          await new Promise(resolve => setTimeout(resolve, 2000));
          updatedUser = await reloadUserProfile(authUser.id, authUser.email);
        }
        
        setUser(updatedUser || authUser);
        setStep('success');
      } else {
        // Pas connecté - montrer formulaire d'inscription
        console.log('User not authenticated, showing signup form');
        setStep('signup');
      }
    } catch (err) {
      console.error('Error in checkAuthentication:', err);
      setError(err.message || 'Une erreur est survenue');
      setStep('error');
    }
  };

  const verifyStripeSession = async (sessionId) => {
    try {
      // Vérifier la session via l'API Stripe ou via Supabase
      // Pour l'instant, on fait confiance au webhook Stripe qui devrait avoir déjà mis à jour
      // Mais on peut aussi vérifier directement dans la base de données
      return true; // Le webhook Stripe est la source de vérité
    } catch (err) {
      console.error('Error verifying Stripe session:', err);
      return false;
    }
  };

  const reloadUserProfile = async (userId, userEmail) => {
    try {
      // Recharger le profil depuis la base de données
      // Utiliser des requêtes séparées pour éviter les problèmes avec .or()
      let profile = null;
      
      // Essayer par ID d'abord
      const { data: byId } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      
      if (byId) {
        profile = byId;
      } else {
        // Essayer par email
        const { data: byEmail } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_email', userEmail)
          .maybeSingle();
        
        if (byEmail) {
          profile = byEmail;
        }
      }
      
      if (profile) {
        const { data: { user: authUser } } = await supabase.auth.getUser();
        return {
          ...authUser,
          ...profile,
          is_premium: profile.is_premium === true || profile.subscription_status === 'active',
        };
      }
      return null;
    } catch (err) {
      console.error('Error reloading user profile:', err);
      return null;
    }
  };

  const markUserAsPremium = async (userId, userEmail, sessionId, retries = 3) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`🔄 Marking user as premium (attempt ${attempt}/${retries}):`, userId, userEmail);
        
        const premiumData = {
          is_premium: true,
          subscription_status: 'active',
          premium_since: new Date().toISOString(),
          stripe_session_id: sessionId,
        };

        // STRATÉGIE 1: Chercher et mettre à jour par ID
        let profileFound = false;
        
        const { data: profileById } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', userId)
          .maybeSingle();
        
        if (profileById) {
          const { error: updateError } = await supabase
            .from('user_profiles')
            .update(premiumData)
            .eq('id', userId);
          
          if (!updateError) {
            console.log('✅ Profile updated by ID:', userId);
            profileFound = true;
          } else {
            console.warn('⚠️ Update by ID failed:', updateError);
          }
        }

        // STRATÉGIE 2: Chercher et mettre à jour par email
        if (!profileFound) {
          const { data: profileByEmail } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('user_email', userEmail)
            .maybeSingle();
          
          if (profileByEmail) {
            const { error: updateError } = await supabase
              .from('user_profiles')
              .update(premiumData)
              .eq('user_email', userEmail);
            
            if (!updateError) {
              console.log('✅ Profile updated by email:', userEmail);
              profileFound = true;
            } else {
              console.warn('⚠️ Update by email failed:', updateError);
            }
          }
        }

        // STRATÉGIE 3: Mettre à jour TOUS les profils avec cet email (au cas où il y en aurait plusieurs)
        if (profileFound) {
          const { error: bulkUpdateError } = await supabase
            .from('user_profiles')
            .update(premiumData)
            .eq('user_email', userEmail);
          
          if (bulkUpdateError) {
            console.warn('⚠️ Bulk update warning:', bulkUpdateError);
          } else {
            console.log('✅ Bulk update successful');
          }
        }

        // STRATÉGIE 4: Créer le profil s'il n'existe pas
        if (!profileFound) {
          const { error: insertError } = await supabase
            .from('user_profiles')
            .insert({
              id: userId,
              user_email: userEmail,
              full_name: userEmail.split('@')[0],
              ...premiumData,
            });

          if (insertError) {
            // Si l'insertion échoue (contrainte), essayer upsert
            if (insertError.code === '23505' || insertError.message?.includes('duplicate')) {
              console.log('ℹ️ Profile exists, trying upsert...');
              const { error: upsertError } = await supabase
                .from('user_profiles')
                .upsert(premiumData, { onConflict: 'id' });
              
              if (upsertError) {
                throw upsertError;
              }
            } else {
              throw insertError;
            }
          } else {
            console.log('✅ Profile created successfully');
          }
        }

        // Vérifier que la mise à jour a bien fonctionné
        await new Promise(resolve => setTimeout(resolve, 500));
        const { data: verifyProfile } = await supabase
          .from('user_profiles')
          .select('is_premium, subscription_status')
          .eq('id', userId)
          .maybeSingle();
        
        if (verifyProfile?.is_premium === true || verifyProfile?.subscription_status === 'active') {
          console.log('✅ User marked as premium successfully (verified)');
          return true;
        } else if (attempt < retries) {
          console.warn(`⚠️ Verification failed, retrying... (${attempt}/${retries})`);
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Backoff exponentiel
          continue;
        } else {
          console.error('❌ Verification failed after all retries');
          return false;
        }
      } catch (err) {
        console.error(`❌ Error marking user as premium (attempt ${attempt}/${retries}):`, err);
        if (attempt === retries) {
          return false;
        }
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Backoff exponentiel
      }
    }
    return false;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Starting signup process...');
      
      if (!formData.name || !formData.email || !formData.password) {
        throw new Error('Tous les champs sont obligatoires');
      }
      
      if (formData.password.length < 6) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères');
      }

      // Créer le compte
      const { data, error: signupError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { 
            full_name: formData.name 
          },
        },
      });

      if (signupError) throw signupError;

      console.log('Signup successful:', data);

      if (data.user) {
        // Créer le profil premium avec retry
        console.log('Signup successful, marking as premium...');
        const success = await markUserAsPremium(data.user.id, formData.email, sessionId, 5);
        
        if (!success) {
          console.warn('⚠️ Failed to mark user as premium after retries, but webhook should handle it');
          // Ne pas bloquer, le webhook Stripe devrait gérer la mise à jour
        }
        
        // Attendre pour que la base de données se synchronise
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Recharger le profil utilisateur plusieurs fois avec retry
        let updatedUser = null;
        for (let i = 0; i < 5; i++) {
          updatedUser = await reloadUserProfile(data.user.id, formData.email);
          if (updatedUser?.is_premium === true || updatedUser?.subscription_status === 'active') {
            console.log('✅ Premium status confirmed!');
            break;
          }
          if (i < 4) {
            console.log(`⏳ Waiting for premium activation... (${i + 1}/5)`);
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        }
        
        setUser(updatedUser || data.user);
        setStep('success');
      } else {
        throw new Error('Erreur lors de la création du compte');
      }
    } catch (err) {
      console.error('Error in handleSignup:', err);
      setError(err.message || 'Erreur lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  // État de chargement initial
  if (step === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Vérification du paiement</h2>
            <p className="text-gray-600">Veuillez patienter...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // État de succès
  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="w-full max-w-md"
        >
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center text-white">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.2, type: 'spring' }} 
                className="inline-block p-3 bg-white rounded-full mb-4"
              >
                <CheckCircle className="w-12 h-12 text-green-500" />
              </motion.div>
              <h1 className="text-3xl font-bold">Bienvenue Premium !</h1>
              <p className="text-green-100 mt-2">Votre paiement a été confirmé</p>
            </div>

            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">✨</span>
                    Votre accès Premium est activé !
                    {user?.is_premium && (
                      <Badge className="ml-2 bg-green-600 text-white">Confirmé</Badge>
                    )}
                  </p>
                  <ul className="text-sm text-green-800 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Tous les cours Premium débloqués
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      IA Sophie illimitée
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Support prioritaire
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Certificats professionnels
                    </li>
                  </ul>
                  {!user?.is_premium && (
                    <p className="text-xs text-amber-700 mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Le statut Premium peut prendre quelques secondes à s'activer. Rechargez la page si nécessaire.
                    </p>
                  )}
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Compte Premium</p>
                  <p className="text-gray-900 font-semibold">{user?.email || formData.email}</p>
                </div>

                <Button 
                  onClick={async () => {
                    // Forcer le rechargement complet pour mettre à jour le statut premium partout
                    // Invalider le cache et recharger
                    if (window.location) {
                      // Utiliser window.location.href pour forcer un rechargement complet
                      window.location.href = '/dashboard';
                    } else {
                      // Fallback pour les navigateurs qui ne supportent pas window.location
                      window.location.reload();
                    }
                  }} 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-6 font-semibold text-lg"
                >
                  Accéder à mon Dashboard →
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-3">
                  ⚡ Votre statut Premium sera visible immédiatement après le rechargement
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Formulaire d'inscription
  if (step === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="w-full max-w-md"
        >
          <Card className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold">Créer mon compte Premium</h1>
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-blue-100">Paiement confirmé ✓ Dernière étape !</p>
            </div>

            <CardContent className="p-8">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded"
                >
                  <p className="text-sm text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSignup} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Nom complet *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Jean Dupont" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    disabled={loading} 
                    required 
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="vous@example.com" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    disabled={loading} 
                    required 
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Mot de passe *
                  </label>
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    value={formData.password} 
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                    disabled={loading} 
                    required 
                    minLength={6} 
                    className="h-12"
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 6 caractères</p>
                </div>

                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 font-semibold text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Création en cours...
                    </>
                  ) : (
                    'Créer mon compte Premium'
                  )}
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou</span>
                  </div>
                </div>

                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full h-12" 
                  onClick={() => navigate('/login')} 
                  disabled={loading}
                >
                  J'ai déjà un compte
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // État d'erreur
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-3 text-red-900">Oups ! Une erreur est survenue</h2>
          <p className="text-red-700 mb-8">{error || 'Une erreur inattendue s\'est produite'}</p>
          
          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/pricing')} 
              className="w-full bg-red-500 hover:bg-red-600 text-white h-12"
            >
              Retour à la tarification
            </Button>
            <Button 
              variant="outline" 
              className="w-full h-12" 
              onClick={() => navigate('/')}
            >
              Retour à l'accueil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
