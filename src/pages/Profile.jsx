import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { createBillingPortal } from "@/api/functions";
import SEO from "@/components/SEO";
import { useUserProfile } from "@/hooks/useUserProfile";
import { supabase } from "@/api/supabaseClient";
import logger from "@/utils/logger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Globe,
  MapPin,
  Calendar,
  BookOpen,
  Target,
  X,
  Crown,
  Loader2,
  Check,
  CreditCard,
  AlertCircle,
  Calendar as CalendarIcon,
  DollarSign,
  FileText,
  Lock,
  Eye,
  EyeOff,
  Settings,
  Mail,
  LogOut,
  Trash2
} from "lucide-react";
import ChatBot from "../components/ChatBot";

export default function Profile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeTab = searchParams.get('tab') || 'profile';

  const { user, profile, isLoading: isLoadingProfile, refetch: refetchProfile } = useUserProfile();
  const [formData, setFormData] = useState({ goals: [], photo_url: "", country_origin: "", city_destination: "", arrival_date: "", study_field: "", french_level: "A1", bio: "", phone: "" });
  const [goalInput, setGoalInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [billingLoading, setBillingLoading] = useState(false);

  // Security tab states
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  // Settings tab states
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  useEffect(() => {
    // Recharger le profil quand on revient sur la page (après paiement)
    const handleFocus = () => {
      refetchProfile();
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [refetchProfile]);

  useEffect(() => {
    if (isLoadingProfile) return; // Wait for user data to load before checking auth
    if (!user) {
      navigate('/login');
      return;
    }

    if (profile) {
      setFormData({
        photo_url: profile.photo_url || "",
        country_origin: profile.country_origin || "",
        city_destination: profile.city_destination || "",
        arrival_date: profile.arrival_date || "",
        study_field: profile.study_field || "",
        french_level: profile.french_level || "A1",
        goals: profile.goals || [],
        bio: profile.bio || "",
        phone: profile.phone || ""
      });
    } else {
      // Profil n'existe pas encore, initialiser avec des valeurs vides
      setFormData({
        photo_url: "",
        country_origin: "",
        city_destination: "",
        arrival_date: "",
        study_field: "",
        french_level: "A1",
        goals: [],
        bio: "",
        phone: ""
      });
    }
  }, [user, profile, isLoadingProfile, navigate]);

  const saveProfile = async () => {
    try {
      setSaving(true);
      setMessage({ type: '', text: '' });

      logger.debug('Saving profile...');

      if (!user) {
        throw new Error('Utilisateur non connecté');
      }

      const profilePayload = {
        id: user.id,
        user_email: user.email,
        full_name: user.full_name || user.user_metadata?.full_name || user.email.split('@')[0],
        ...formData
      };

      logger.debug('Profile payload:', profilePayload);

      if (profile) {
        // Mise à jour
        const { error } = await supabase
          .from('user_profiles')
          .update(profilePayload)
          .eq('id', user.id);

        if (error) throw error;
      } else {
        // Insertion
        const { error } = await supabase
          .from('user_profiles')
          .insert(profilePayload);

        if (error) throw error;
      }

      setMessage({ type: 'success', text: 'Profil mis à jour avec succès !' });

      // Recharger le profil
      await refetchProfile();
    } catch (error) {
      logger.error('Error saving profile:', error);
      setMessage({ type: 'error', text: error.message || 'Erreur lors de la sauvegarde' });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addGoal = () => {
    if (goalInput.trim() && formData.goals.length < 5) {
      handleChange('goals', [...formData.goals, goalInput.trim()]);
      setGoalInput("");
    }
  };

  const removeGoal = (index) => {
    handleChange('goals', formData.goals.filter((_, i) => i !== index));
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: "", color: "bg-gray-300" };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;

    if (strength <= 1) return { strength: 1, label: "Faible", color: "bg-red-500" };
    if (strength <= 2) return { strength: 2, label: "Moyen", color: "bg-orange-500" };
    if (strength <= 3) return { strength: 3, label: "Bon", color: "bg-yellow-500" };
    return { strength: 4, label: "Très fort", color: "bg-green-500" };
  };

  const handleChangePassword = async () => {
    try {
      setMessage({ type: '', text: '' });

      // Validation
      if (!newPassword || !confirmPassword) {
        setMessage({ type: 'error', text: 'Veuillez remplir tous les champs' });
        return;
      }

      if (newPassword.length < 8) {
        setMessage({ type: 'error', text: 'Le mot de passe doit contenir au moins 8 caractères' });
        return;
      }

      if (newPassword !== confirmPassword) {
        setMessage({ type: 'error', text: 'Les mots de passe ne correspondent pas' });
        return;
      }

      setChangingPassword(true);

      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      setMessage({ type: 'success', text: 'Mot de passe changé avec succès !' });
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      logger.error('Error changing password:', error);
      setMessage({ type: 'error', text: error.message || 'Erreur lors du changement de mot de passe' });
    } finally {
      setChangingPassword(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      navigate('/login');
    } catch (error) {
      logger.error('Error logging out:', error);
      setMessage({ type: 'error', text: error.message || 'Erreur lors de la déconnexion' });
      setLogoutLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      setDeleteLoading(true);
      setMessage({ type: '', text: '' });

      // Supprimer le profil utilisateur
      if (profile) {
        const { error: deleteProfileError } = await supabase
          .from('user_profiles')
          .delete()
          .eq('id', user.id);

        if (deleteProfileError) throw deleteProfileError;
      }

      // Supprimer le compte utilisateur
      const { error: deleteAuthError } = await supabase.auth.admin.deleteUser(user.id);

      if (deleteAuthError) {
        // Si admin delete échoue (permissions), on essaie de se déconnecter et afficher un message
        logger.warn('Could not delete auth user with admin, signing out instead');
        await supabase.auth.signOut();
      }

      navigate('/login');
    } catch (error) {
      logger.error('Error deleting account:', error);
      setMessage({ type: 'error', text: error.message || 'Erreur lors de la suppression du compte' });
      setDeleteLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  if (isLoadingProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Chargement de votre profil...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center">
          <p className="text-gray-600 mb-4">Vous devez être connecté pour accéder à votre profil</p>
          <Button onClick={() => window.location.href = '/login'}>Se connecter</Button>
        </Card>
      </div>
    );
  }

  const passwordStrength = getPasswordStrength(newPassword);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Mon profil"
        description="Gérez votre profil FrancePrepAcademy : informations personnelles, abonnement et préférences."
        canonical="/profile"
        noindex={true}
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Mon profil</h1>
          <p className="text-blue-100 text-lg">
            Personnalisez votre expérience d'apprentissage
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Message de confirmation/erreur */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg border-l-4 ${
            message.type === 'success'
              ? 'bg-green-50 border-green-500 text-green-800'
              : 'bg-red-50 border-red-500 text-red-800'
          }`}>
            {message.text}
          </div>
        )}

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={(value) => {
            setSearchParams({ tab: value });
          }}
          className="mb-8"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Mon Profil</TabsTrigger>
            <TabsTrigger value="security">Sécurité</TabsTrigger>
            <TabsTrigger value="subscription">
              Abonnement {profile?.is_premium && <Crown className="w-3 h-3 ml-1 text-amber-500" />}
            </TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Mon Profil Tab */}
          <TabsContent value="profile" className="space-y-8">
            {/* User Info Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-6 h-6 mr-2" />
                    Informations de compte
                  </div>
                  {profile?.is_premium && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Nom complet</label>
                    <p className="text-gray-900 font-semibold">{user.full_name || user.user_metadata?.full_name || "Non renseigné"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900 font-semibold">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Statut</label>
                    <Badge className={profile?.is_premium ? 'bg-yellow-600' : 'bg-blue-600'}>
                      {profile?.is_premium ? 'Membre Premium' : 'Membre Gratuit'}
                    </Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Membre depuis</label>
                    <p className="text-gray-900 font-semibold">
                      {user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR') : 'Récemment'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 mr-2" />
                  Informations personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo de profil (URL)
                  </label>
                  <Input
                    value={formData.photo_url}
                    onChange={(e) => handleChange('photo_url', e.target.value)}
                    placeholder="https://exemple.com/photo.jpg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Pays d'origine
                    </label>
                    <Input
                      value={formData.country_origin}
                      onChange={(e) => handleChange('country_origin', e.target.value)}
                      placeholder="Ex: Maroc, Sénégal, Vietnam..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Ville de destination en France
                    </label>
                    <Input
                      value={formData.city_destination}
                      onChange={(e) => handleChange('city_destination', e.target.value)}
                      placeholder="Ex: Paris, Lyon, Toulouse..."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Date d'arrivée prévue
                    </label>
                    <Input
                      type="date"
                      value={formData.arrival_date}
                      onChange={(e) => handleChange('arrival_date', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <BookOpen className="w-4 h-4 inline mr-1" />
                      Niveau de français
                    </label>
                    <Select
                      value={formData.french_level}
                      onValueChange={(value) => handleChange('french_level', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A1">A1 - Débutant</SelectItem>
                        <SelectItem value="A2">A2 - Élémentaire</SelectItem>
                        <SelectItem value="B1">B1 - Intermédiaire</SelectItem>
                        <SelectItem value="B2">B2 - Intermédiaire avancé</SelectItem>
                        <SelectItem value="C1">C1 - Avancé</SelectItem>
                        <SelectItem value="C2">C2 - Maîtrise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Domaine d'études
                  </label>
                  <Input
                    value={formData.study_field}
                    onChange={(e) => handleChange('study_field', e.target.value)}
                    placeholder="Ex: Informatique, Médecine, Commerce..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Biographie
                  </label>
                  <Textarea
                    value={formData.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    placeholder="Parlez-nous de vous, vos aspirations, votre parcours..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Goals Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Mes objectifs (max 5)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Input
                    value={goalInput}
                    onChange={(e) => setGoalInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addGoal()}
                    placeholder="Ex: Obtenir mon DELF B2"
                    disabled={formData.goals.length >= 5}
                  />
                  <Button
                    onClick={addGoal}
                    disabled={!goalInput.trim() || formData.goals.length >= 5}
                  >
                    Ajouter
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {formData.goals.map((goal, index) => (
                    <Badge key={index} variant="secondary" className="text-sm pl-3 pr-2 py-2">
                      {goal}
                      <button
                        onClick={() => removeGoal(index)}
                        className="ml-2 hover:text-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>

                {formData.goals.length === 0 && (
                  <p className="text-sm text-gray-500 italic">
                    Aucun objectif défini. Ajoutez vos objectifs pour personnaliser votre expérience !
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800"
                onClick={saveProfile}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  'Enregistrer les modifications'
                )}
              </Button>
            </div>
          </TabsContent>

          {/* Sécurité Tab */}
          <TabsContent value="security" className="space-y-8">
            {/* Email Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="text-sm font-medium text-gray-700">Adresse email</label>
                  <p className="text-gray-900 font-semibold text-lg mt-2">{user.email}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Pour changer votre email, veuillez contacter le support.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Password Change Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-6 h-6 mr-2" />
                  Changer le mot de passe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nouveau mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Entrez votre nouveau mot de passe"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {newPassword && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">
                          Force du mot de passe
                        </label>
                        <span className={`text-xs font-semibold ${
                          passwordStrength.strength === 1 ? 'text-red-600' :
                          passwordStrength.strength === 2 ? 'text-orange-600' :
                          passwordStrength.strength === 3 ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {passwordStrength.label}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${passwordStrength.color}`}
                          style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Utilisez au moins 8 caractères avec des majuscules, minuscules, chiffres et symboles.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirmez votre nouveau mot de passe"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {confirmPassword && newPassword !== confirmPassword && (
                    <p className="text-sm text-red-600 mt-2">
                      Les mots de passe ne correspondent pas
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handleChangePassword}
                    disabled={
                      changingPassword ||
                      !newPassword ||
                      !confirmPassword ||
                      newPassword !== confirmPassword ||
                      newPassword.length < 8
                    }
                    className="bg-blue-900 hover:bg-blue-800"
                  >
                    {changingPassword ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Changement en cours...
                      </>
                    ) : (
                      'Changer le mot de passe'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Abonnement Tab */}
          <TabsContent value="subscription">
            {/* Subscription Management Card */}
            {profile?.is_premium ? (
              <div className="space-y-6">
                <Card className="border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Crown className="w-6 h-6 mr-2 text-yellow-600" />
                        Mon abonnement Premium
                      </div>
                      <Badge className="bg-green-600 text-white">
                        <Check className="w-3 h-3 mr-1" />
                        {profile.subscription_status === 'active' ? 'Actif' : profile.subscription_status || 'Actif'}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Informations de l'abonnement */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/70 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <CalendarIcon className="w-4 h-4 text-gray-600" />
                          <label className="text-xs font-medium text-gray-600">Membre depuis</label>
                        </div>
                        <p className="text-gray-900 font-semibold">
                          {profile.premium_since ? new Date(profile.premium_since).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          }) : 'Récemment'}
                        </p>
                      </div>
                      <div className="bg-white/70 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-gray-600" />
                          <label className="text-xs font-medium text-gray-600">ID Client Stripe</label>
                        </div>
                        <p className="text-gray-900 font-semibold text-xs truncate">
                          {profile.stripe_customer_id || 'Non disponible'}
                        </p>
                      </div>
                      <div className="bg-white/70 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-gray-600" />
                          <label className="text-xs font-medium text-gray-600">ID Abonnement</label>
                        </div>
                        <p className="text-gray-900 font-semibold text-xs truncate">
                          {profile.stripe_subscription_id || 'Non disponible'}
                        </p>
                      </div>
                    </div>

                    {/* Avantages Premium */}
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Check className="w-5 h-5 mr-2 text-green-600" />
                        Avantages Premium actifs
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center">
                          <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                          Accès illimité à tous les cours Premium
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                          IA Sophie illimitée avec historique complet
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                          Certificats professionnels téléchargeables
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                          Support prioritaire par email
                        </li>
                        <li className="flex items-center">
                          <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                          Accès anticipé aux nouveaux cours
                        </li>
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="flex-1"
                          disabled={billingLoading}
                          onClick={async () => {
                            if (!profile?.stripe_customer_id) {
                              alert('Aucun identifiant client Stripe trouvé. Contactez le support à contact@franceprepacademy.fr');
                              return;
                            }

                            setBillingLoading(true);
                            try {
                              await createBillingPortal({
                                customerId: profile.stripe_customer_id,
                                returnUrl: window.location.origin + '/profile?tab=subscription',
                              });
                            } catch (error) {
                              console.error('Erreur billing portal:', error);
                              alert('Erreur lors de l\'ouverture du portail de gestion. ' + error.message);
                              setBillingLoading(false);
                            }
                          }}
                        >
                          {billingLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Chargement...
                            </>
                          ) : (
                            <>
                              <CreditCard className="w-4 h-4 mr-2" />
                              Gérer mon abonnement
                            </>
                          )}
                        </Button>
                        <Button
                          onClick={() => window.location.href = '/pricing'}
                          className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                        >
                          Voir tous les avantages
                        </Button>
                      </div>

                      {/* Informations importantes */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-blue-900">
                            <p className="font-semibold mb-1">Gestion de votre abonnement</p>
                            <p className="text-blue-800">
                              Pour modifier votre méthode de paiement, consulter vos factures, ou résilier votre abonnement,
                              cliquez sur "Gérer mon abonnement" ci-dessus. Vous serez redirigé vers le portail sécurisé Stripe.
                            </p>
                            <p className="text-blue-800 mt-2">
                              <strong>Besoin d'aide ?</strong> Contactez-nous à{' '}
                              <a href="mailto:contact@franceprepacademy.fr" className="underline font-semibold">
                                contact@franceprepacademy.fr
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-pink-50">
                <CardContent className="p-6 text-center">
                  <div className="inline-block p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Passez Premium !</h3>
                  <p className="text-gray-700 mb-4">
                    Débloquez tous les cours, IA illimitée et certificats professionnels
                  </p>
                  <Button
                    onClick={() => window.location.href = '/pricing'}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-lg px-8 py-6"
                  >
                    Découvrir Premium →
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Paramètres Tab */}
          <TabsContent value="settings" className="space-y-8">
            {/* Language Preference Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 mr-2" />
                  Langue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Langue de l'interface
                  </label>
                  <Select defaultValue="fr">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600 mt-2">
                    Changez la langue de l'interface FrancePrepAcademy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Logout Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LogOut className="w-6 h-6 mr-2" />
                  Déconnexion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Vous serez déconnecté de votre compte et rediriger vers la page d'accueil.
                </p>
                <Button
                  onClick={handleLogout}
                  disabled={logoutLoading}
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  {logoutLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Déconnexion en cours...
                    </>
                  ) : (
                    <>
                      <LogOut className="w-4 h-4 mr-2" />
                      Se déconnecter
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Delete Account Card */}
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <Trash2 className="w-6 h-6 mr-2" />
                  Supprimer mon compte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  La suppression de votre compte est permanente et irréversible. Toutes vos données seront supprimées.
                </p>

                {!showDeleteConfirm ? (
                  <Button
                    onClick={() => setShowDeleteConfirm(true)}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Supprimer mon compte
                  </Button>
                ) : (
                  <div className="bg-white p-4 rounded-lg border border-red-300">
                    <p className="font-semibold text-gray-900 mb-4">
                      Êtes-vous absolument sûr ? Cette action ne peut pas être annulée.
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                      Tous vos cours, progrès, certificats et données seront supprimés définitivement.
                    </p>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => setShowDeleteConfirm(false)}
                        variant="outline"
                      >
                        Annuler
                      </Button>
                      <Button
                        onClick={handleDeleteAccount}
                        disabled={deleteLoading}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        {deleteLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Suppression...
                          </>
                        ) : (
                          'Confirmer la suppression'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <ChatBot />
    </div>
  );
}
