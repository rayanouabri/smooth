import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  BookOpen, 
  Clock, 
  Star, 
  Award,
  CheckCircle,
  Filter,
  Search,
  Globe,
  Users,
  Calendar,
  Video,
  MessageCircle,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { SendEmail } from "@/api/integrations";
import { motion } from "framer-motion";
import ChatBot from "../components/ChatBot";

export default function Teachers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const subjects = [
    { value: "francais", label: "📚 Français", icon: "📚", color: "from-blue-500 to-cyan-500" },
    { value: "mathematiques", label: "➗ Mathématiques", icon: "➗", color: "from-purple-500 to-pink-500" },
    { value: "administratif", label: "📋 Démarches Admin", icon: "📋", color: "from-green-500 to-emerald-500" },
    { value: "cv_entretien", label: "💼 CV & Entretien", icon: "💼", color: "from-orange-500 to-red-500" },
    { value: "culture", label: "🎭 Culture Française", icon: "🎭", color: "from-yellow-500 to-orange-500" },
    { value: "informatique", label: "💻 Informatique", icon: "💻", color: "from-indigo-500 to-purple-500" }
  ];

  const levels = [
    { value: "debutant", label: "🟢 Débutant" },
    { value: "intermediaire", label: "🟡 Intermédiaire" },
    { value: "avance", label: "🔴 Avancé" }
  ];

  const teachers = [
    {
      name: "Sophie Martin",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      specialty: "Français & Culture",
      subjects: ["francais", "culture"],
      level: "Tous niveaux",
      rating: 4.9,
      reviews: 127,
      students: 450,
      hourlyRate: 35,
      languages: ["Français", "Anglais", "Arabe"],
      experience: "8 ans",
      verified: true,
      bio: "Professeure certifiée avec 8 ans d'expérience dans l'enseignement du français aux étudiants internationaux.",
      available: true
    },
    {
      name: "Marc Dubois",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      specialty: "Mathématiques & Sciences",
      subjects: ["mathematiques"],
      level: "Intermédiaire à Avancé",
      rating: 4.8,
      reviews: 98,
      students: 320,
      hourlyRate: 40,
      languages: ["Français", "Anglais"],
      experience: "10 ans",
      verified: true,
      bio: "Ingénieur et professeur de mathématiques, spécialisé dans la préparation aux concours.",
      available: true
    },
    {
      name: "Amira Hassan",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
      specialty: "Démarches & Admin",
      subjects: ["administratif"],
      level: "Tous niveaux",
      rating: 5.0,
      reviews: 156,
      students: 580,
      hourlyRate: 30,
      languages: ["Français", "Arabe", "Anglais"],
      experience: "6 ans",
      verified: true,
      bio: "Experte en démarches administratives, aide les étudiants étrangers depuis 2018.",
      available: true
    },
    {
      name: "Pierre Laurent",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      specialty: "CV & Carrière",
      subjects: ["cv_entretien"],
      level: "Tous niveaux",
      rating: 4.9,
      reviews: 143,
      students: 490,
      hourlyRate: 45,
      languages: ["Français", "Anglais", "Espagnol"],
      experience: "12 ans",
      verified: true,
      bio: "Coach carrière et recruteur, expert en préparation d'entretiens et optimisation de CV.",
      available: false
    },
    {
      name: "Léa Bernard",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      specialty: "Culture & Codes Sociaux",
      subjects: ["culture", "francais"],
      level: "Débutant à Intermédiaire",
      rating: 4.8,
      reviews: 89,
      students: 270,
      hourlyRate: 32,
      languages: ["Français", "Anglais", "Chinois"],
      experience: "5 ans",
      verified: true,
      bio: "Anthropologue et formatrice en codes culturels français.",
      available: true
    },
    {
      name: "Thomas Nguyen",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      specialty: "Informatique & Tech",
      subjects: ["informatique"],
      level: "Débutant à Avancé",
      rating: 4.9,
      reviews: 134,
      students: 410,
      hourlyRate: 50,
      languages: ["Français", "Anglais", "Vietnamien"],
      experience: "9 ans",
      verified: true,
      bio: "Développeur senior et formateur en programmation et technologies web.",
      available: true
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSubject = !selectedSubject || teacher.subjects.includes(selectedSubject);
    const matchesSearch = !searchTerm || 
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const [formData, setFormData] = useState({
    subject: "",
    level: "",
    message: "",
    preferredTime: "",
    email: "",
    name: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await SendEmail({
        to: "contact@franceprepacademy.com",
        subject: `Demande de cours particulier - ${formData.subject}`,
        body: `
          Nouvelle demande de cours particulier:
          
          Nom: ${formData.name}
          Email: ${formData.email}
          Matière: ${formData.subject}
          Niveau: ${formData.level}
          Horaires préférés: ${formData.preferredTime}
          
          Message:
          ${formData.message}
        `
      });

      setRequestSent(true);
    } catch (error) {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-pink-400 text-white border-0 text-base px-6 py-2 shadow-xl">
              <Users className="w-4 h-4 mr-2 inline" />
              15+ Professeurs Experts
            </Badge>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Cours Particuliers
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                avec des Experts
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Accompagnement personnalisé en français, maths, admin, CV et bien plus
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Video className="w-5 h-5 inline mr-2" />
                <span className="font-bold">Cours en ligne</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Calendar className="w-5 h-5 inline mr-2" />
                <span className="font-bold">Horaires flexibles</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Award className="w-5 h-5 inline mr-2" />
                <span className="font-bold">Profs certifiés</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <div className="bg-white border-b-2 border-gray-200 sticky top-16 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Rechercher un professeur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-2"
              />
            </div>

            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="h-12 border-2">
                <Filter className="w-5 h-5 mr-2 text-gray-500" />
                <SelectValue placeholder="Matière" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les matières</SelectItem>
                {subjects.map(subject => (
                  <SelectItem key={subject.value} value={subject.value}>
                    {subject.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="h-12 border-2">
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                {levels.map(level => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-700 font-bold">
              <span className="text-2xl text-indigo-600">{filteredTeachers.length}</span> professeurs disponibles
            </p>
            {(selectedSubject || searchTerm) && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedSubject("");
                  setSearchTerm("");
                }}
              >
                Réinitialiser
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all border-2 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {teacher.verified && (
                        <Badge className="bg-blue-500 text-white shadow-lg">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Vérifié
                        </Badge>
                      )}
                      {teacher.available ? (
                        <Badge className="bg-green-500 text-white shadow-lg">
                          ● Disponible
                        </Badge>
                      ) : (
                        <Badge className="bg-gray-500 text-white shadow-lg">
                          Complet
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {teacher.name}
                        </h3>
                        <p className="text-indigo-600 font-semibold">{teacher.specialty}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(teacher.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">{teacher.rating}</span>
                      <span className="text-sm text-gray-500">({teacher.reviews} avis)</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {teacher.bio}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{teacher.languages.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{teacher.experience} d'expérience</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{teacher.students} étudiants formés</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-3xl font-bold text-indigo-600">
                          {teacher.hourlyRate}€
                        </div>
                        <div className="text-xs text-gray-500">par heure</div>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                        onClick={() => {
                          document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
                          setFormData({...formData, subject: teacher.specialty});
                        }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contacter
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Matières Proposées
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez le cours qui correspond à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-indigo-300"
                  onClick={() => {
                    setSelectedSubject(subject.value);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${subject.color} mb-4`}>
                      <span className="text-4xl">{subject.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {subject.label.substring(2)}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {teachers.filter(t => t.subjects.includes(subject.value)).length} professeurs
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-600 text-white text-base px-6 py-2">
              📧 Demande de cours
            </Badge>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Réservez votre cours particulier
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire et nous vous contacterons sous 24h
            </p>
          </div>

          {requestSent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card className="border-4 border-green-500">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Demande envoyée !
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    Nous vous contacterons sous 24h pour organiser votre premier cours.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => setRequestSent(false)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Faire une autre demande
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Votre nom *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Votre email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Matière souhaitée *
                      </label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({...formData, subject: value})}
                        required
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map(subject => (
                            <SelectItem key={subject.value} value={subject.value}>
                              {subject.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Votre niveau *
                      </label>
                      <Select
                        value={formData.level}
                        onValueChange={(value) => setFormData({...formData, level: value})}
                        required
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent>
                          {levels.map(level => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Horaires préférés
                    </label>
                    <Input
                      placeholder="Ex: Lundi et Mercredi soir, 18h-20h"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Décrivez vos besoins, objectifs, questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg py-6"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <ChatBot />
    </div>
  );
}