import React, { useState, useEffect } from "react";
import { getCurrentUser } from "@/api/auth";
import { supabase } from "@/api/supabaseClient";
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
import { User, Globe, MapPin, Calendar, BookOpen, Target, X, Crown, Loader2 } from "lucide-react";
import ChatBot from "../components/ChatBot";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [goalInput, setGoalInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);
      console.log('Loading profile...');
      
      // Récupérer l'utilisateur connecté
      const userData = await getCurrentUser();
      console.log('User data:', userData);
      
      if (!userData) {
        console.error('No user found');
        window.location.href = '/login';
        return;
      }
      
      setUser(userData);
      
      // Récupérer le profil depuis user_profiles
      const { data: profileData, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userData.id)
        .single();
      
      console.log('Profile data:', profileData, 'Error:', error);
      
      if (profileData) {
        setProfile(profileData);
        setFormData({
          photo_url: profileData.photo_url || "",
          country_origin: profileData.country_origin || "",
          city_destination: profileData.city_destination || "",
          arrival_date: profileData.arrival_date || "",
          study_field: profileData.study_field || "",
          french_level: profileData.french_level || "A1",
          goals: profileData.goals || [],
          bio: profileData.bio || "",
          phone: profileData.phone || ""
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
    } catch (error) {
      console.error('Error loading profile:', error);
      setMessage({ type: 'error', text: 'Erreur lors du chargement du profil' });
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async () => {
    try {
      setSaving(true);
      setMessage({ type: '', text: '' });
      
      console.log('Saving profile...');
      
      if (!user) {
        throw new Error('Utilisateur non connecté');
      }

      const profilePayload = {
        id: user.id,
        user_email: user.email,
        full_name: user.full_name || user.user_metadata?.full_name || user.email.split('@')[0],
        ...formData
      };

      console.log('Profile payload:', profilePayload);

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
      await loadProfile();
    } catch (error) {
      console.error('Error saving profile:', error);
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

  if (loading) {
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

  return (
    <div className="min-h-screen bg-gray-50">
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
      </div>

      <ChatBot />
    </div>
  );
}