import React, { useState, useEffect } from "react";
import { me as getCurrentUser } from "@/api/auth";
import { UserProfile } from "@/api/entities";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { User, Globe, MapPin, Calendar, BookOpen, Target, X } from "lucide-react";
import ChatBot from "../components/ChatBot";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [goalInput, setGoalInput] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const userData = await getCurrentUser();
    setUser(userData);
    
    const profiles = await UserProfile.filter({ user_email: userData.email });
    if (profiles.length > 0) {
      setProfile(profiles[0]);
      setFormData({
        photo_url: profiles[0].photo_url || "",
        country_origin: profiles[0].country_origin || "",
        city_destination: profiles[0].city_destination || "",
        arrival_date: profiles[0].arrival_date || "",
        study_field: profiles[0].study_field || "",
        french_level: profiles[0].french_level || "A1",
        goals: profiles[0].goals || [],
        bio: profiles[0].bio || "",
        phone: profiles[0].phone || ""
      });
    } else {
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
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      const data = {
        user_email: user.email,
        ...formData
      };

      if (profile) {
        return UserProfile.update(profile.id, data);
      } else {
        return UserProfile.create(data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] });
      alert('Profil mis à jour avec succès !');
      loadProfile();
    },
  });

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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
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
        {/* User Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-6 h-6 mr-2" />
              Informations de compte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Nom complet</label>
                <p className="text-gray-900 font-semibold">{user.full_name || "Non renseigné"}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <p className="text-gray-900 font-semibold">{user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Rôle</label>
                <Badge className={user.role === 'admin' ? 'bg-purple-600' : 'bg-blue-600'}>
                  {user.role === 'admin' ? 'Administrateur' : 'Étudiant'}
                </Badge>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Membre depuis</label>
                <p className="text-gray-900 font-semibold">
                  {new Date(user.created_date).toLocaleDateString('fr-FR')}
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
            onClick={() => saveMutation.mutate()}
            disabled={saveMutation.isPending}
          >
            {saveMutation.isPending ? "Enregistrement..." : "Enregistrer les modifications"}
          </Button>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}