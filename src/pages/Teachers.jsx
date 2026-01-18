import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  BookOpen, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  HelpCircle,
  Mail,
  User,
  GraduationCap,
  Calendar,
  MapPin,
  Star,
  Award,
  Users,
  Video,
  Globe,
  Phone,
  Sparkles,
  Target,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";
import { SendEmail } from "@/api/integrations";
import { isAuthenticated, redirectToLogin } from "@/api/auth";
import { motion } from "framer-motion";
import ChatBot from "../components/ChatBot";
import { useToast } from "@/components/ui/use-toast";

export default function Teachers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    level: "",
    frequency: "",
    duration: "",
    budget: "",
    availability: "",
    city: "",
    needs: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation des champs obligatoires
    if (!formData.name || !formData.email || !formData.subject || !formData.level || 
        !formData.frequency || !formData.duration || !formData.availability || !formData.needs) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires (marqués d'un *).",
        variant: "destructive",
      });
      return;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    // Vérifier l'authentification
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      toast({
        title: "Connexion requise",
        description: "Vous devez être connecté pour soumettre une demande.",
        variant: "destructive",
      });
      redirectToLogin(window.location.href);
      return;
    }

    setIsSubmitting(true);

    try {
      const emailSubject = `Demande de cours particulier - ${formData.subject}`;
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">Nouvelle demande de cours particulier</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations du client</h3>
            <p><strong>Nom:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Téléphone:</strong> ${formData.phone || 'Non renseigné'}</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Détails de la demande</h3>
            <p><strong>Matière:</strong> ${formData.subject}</p>
            <p><strong>Niveau:</strong> ${formData.level}</p>
            <p><strong>Fréquence:</strong> ${formData.frequency}</p>
            <p><strong>Durée:</strong> ${formData.duration}</p>
            <p><strong>Budget:</strong> ${formData.budget ? formData.budget + '€' : 'Non renseigné'}</p>
            <p><strong>Disponibilités:</strong> ${formData.availability}</p>
            <p><strong>Ville:</strong> ${formData.city || 'Non renseigné'}</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Besoins spécifiques</h3>
            <p style="white-space: pre-wrap;">${formData.needs}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            Cette demande a été soumise depuis le formulaire de cours particuliers de FrancePrep Academy.
          </p>
        </div>
      `;

      const emailText = `
Nouvelle demande de cours particulier

Informations du client:
- Nom: ${formData.name}
- Email: ${formData.email}
- Téléphone: ${formData.phone || 'Non renseigné'}

Détails de la demande:
- Matière: ${formData.subject}
- Niveau: ${formData.level}
- Fréquence: ${formData.frequency}
- Durée: ${formData.duration}
- Budget: ${formData.budget ? formData.budget + '€' : 'Non renseigné'}
- Disponibilités: ${formData.availability}
- Ville: ${formData.city || 'Non renseigné'}

Besoins spécifiques:
${formData.needs}
      `;

      await SendEmail({
        to: "contact@franceprepacademy.fr",
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
        requestType: 'private_course',
        formData: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          level: formData.level,
          frequency: formData.frequency,
          duration: formData.duration,
          budget: formData.budget,
          availability: formData.availability,
          city: formData.city,
          needs: formData.needs,
        },
      });

      setRequestSent(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        level: "",
        frequency: "",
        duration: "",
        budget: "",
        availability: "",
        city: "",
        needs: "",
      });
      toast({
        title: "✅ Demande envoyée avec succès !",
        description: "Notre équipe vous contactera sous 24-48h pour discuter de vos besoins.",
      });
    } catch (error) {
      console.error("Error sending request:", error);
      
      let errorMessage = "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou contacter le support à contact@franceprepacademy.fr";
      
      if (error?.message) {
        if (error.message.includes('Email service not configured')) {
          errorMessage = "Le service d'email n'est pas configuré. Veuillez contacter l'administrateur.";
        } else if (error.message.includes('RESEND_API_KEY')) {
          errorMessage = "Configuration email manquante. Veuillez contacter le support.";
        } else if (error.message.includes('permission denied') || error.message.includes('does not exist')) {
          errorMessage = "Une erreur technique s'est produite. Veuillez contacter directement contact@franceprepacademy.fr avec les détails de votre demande.";
        } else if (error.message.includes('contact_requests')) {
          errorMessage = "La base de données n'est pas configurée. Veuillez contacter le support à contact@franceprepacademy.fr";
        } else {
          // Ne pas afficher les erreurs techniques brutes à l'utilisateur
          errorMessage = "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement à contact@franceprepacademy.fr";
        }
      }

      toast({
        title: "❌ Erreur lors de l'envoi",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const advantages = [
    {
      icon: GraduationCap,
      title: "Professeurs certifiés",
      description: "Tous nos professeurs sont diplômés et expérimentés dans leur domaine",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Pédagogie adaptée",
      description: "Méthodes personnalisées selon votre profil et vos objectifs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Cours en ligne ou présentiel",
      description: "Choisissez le format qui vous convient le mieux",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Horaires flexibles",
      description: "Cours adaptés à votre emploi du temps, même le soir et le week-end",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Accompagnement personnalisé",
      description: "Suivi régulier et ajustement du programme selon vos progrès",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Suivi personnalisé",
      description: "Bilan régulier de vos progrès et ajustement du programme",
      color: "from-teal-500 to-green-500"
    }
  ];

  const subjects = [
    { value: "francais", label: "📚 Français (FLE)", description: "Français Langue Étrangère de tous niveaux" },
    { value: "mathematiques", label: "➗ Mathématiques", description: "Algèbre, géométrie, statistiques, prépa scientifique" },
    { value: "anglais", label: "🇬🇧 Anglais", description: "TOEFL, TOEIC, IELTS, conversation, business" },
    { value: "administratif", label: "📋 Démarches administratives", description: "CAF, sécurité sociale, préfecture, logement" },
    { value: "cv_entretien", label: "💼 CV et entretien", description: "Rédaction CV français, préparation entretiens" },
    { value: "culture", label: "🎭 Culture française", description: "Codes sociaux, histoire, traditions françaises" },
    { value: "autre", label: "➕ Autre", description: "Autre matière ou besoin spécifique" }
  ];

  const faqItems = [
    {
      question: "Comment fonctionnent les cours particuliers ?",
      answer: "Nos cours particuliers sont adaptés à vos besoins spécifiques. Vous remplissez le formulaire ci-dessus avec vos besoins, votre niveau et vos disponibilités. Notre équipe vous contacte sous 24-48h pour vous proposer un professeur adapté et planifier votre première séance."
    },
    {
      question: "Quels sont les tarifs ?",
      answer: "Les tarifs varient selon la matière, le niveau et la fréquence des cours. En moyenne, comptez entre 25€ et 50€ de l'heure selon ces critères. Des forfaits mensuels sont également disponibles avec des tarifs dégressifs. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins."
    },
    {
      question: "Puis-je prendre des cours en ligne ?",
      answer: "Oui ! Nous proposons des cours en ligne via visioconférence pour toutes les matières. C'est pratique, flexible et aussi efficace que les cours en présentiel. Vous pouvez même combiner les deux formats selon vos besoins et votre emploi du temps."
    },
    {
      question: "Combien de temps à l'avance dois-je réserver ?",
      answer: "Nous recommandons de réserver au moins 48h à l'avance pour garantir la disponibilité du professeur. Cependant, en cas d'urgence, nous pouvons souvent trouver un créneau dans les 24h. Pour les cours réguliers, vous pouvez planifier à l'avance vos séances mensuelles."
    },
    {
      question: "Puis-je changer de professeur si ça ne me convient pas ?",
      answer: "Oui, vous pouvez demander un changement de professeur si nécessaire. Notre équipe vous aidera à trouver un autre professeur qui correspond mieux à vos attentes parmi notre réseau de professeurs qualifiés."
    },
    {
      question: "Les cours sont-ils adaptés aux étudiants étrangers ?",
      answer: "Oui, nos professeurs sont spécialisés dans l'accompagnement des étudiants internationaux. Ils comprennent les défis spécifiques que vous pouvez rencontrer (langue, culture, codes sociaux) et adaptent leur pédagogie en conséquence. Beaucoup parlent plusieurs langues pour faciliter la communication au début."
    },
    {
      question: "Proposez-vous des cours en groupe ?",
      answer: "Oui, nous proposons également des cours en petits groupes (2-4 personnes) à des tarifs réduits. C'est idéal pour partager les coûts tout en bénéficiant d'un accompagnement personnalisé. Les groupes sont formés selon le niveau et les objectifs des participants."
    },
    {
      question: "Comment se déroule le premier cours ?",
      answer: "Lors du premier cours, le professeur évalue votre niveau actuel, discute de vos objectifs, de vos difficultés et établit avec vous un plan d'apprentissage personnalisé. C'est également l'occasion de vérifier que le courant passe bien entre vous."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements par carte bancaire, virement bancaire, PayPal et espèces pour les cours en présentiel. Vous pouvez payer à la séance, par forfait de 5 ou 10 heures (avec réduction), ou par abonnement mensuel."
    },
    {
      question: "Y a-t-il un engagement de durée ?",
      answer: "Non, il n'y a aucun engagement de durée. Vous pouvez arrêter les cours à tout moment, même après une seule séance. Nous demandons simplement une annulation au moins 24h à l'avance pour éviter les frais de dernière minute."
    }
  ];

  if (requestSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="border-2 shadow-2xl">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Demande envoyée avec succès ! ✅
                </h2>
                <p className="text-gray-600 mb-6">
                  Merci pour votre demande. Notre équipe vous contactera sous 24-48h pour discuter de vos besoins et vous proposer un professeur adapté.
                </p>
                <Button 
                  onClick={() => setRequestSent(false)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  Faire une nouvelle demande
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <ChatBot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-6">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cours Particuliers Sur Mesure
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              Bénéficiez d'un accompagnement personnalisé adapté à vos besoins, votre niveau et vos objectifs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Professeurs certifiés
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Cours sur mesure
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Video className="w-4 h-4 mr-2" />
                En ligne ou présentiel
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Pourquoi choisir nos cours particuliers ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 hover:shadow-xl transition-all h-full">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${advantage.color} mb-4`}>
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-cyan-600" />
                  Faites votre demande
                </CardTitle>
                <p className="text-gray-600">
                  Remplissez le formulaire et nous vous recontactons rapidement (24-48h)
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10"
                          placeholder="Jean Dupont"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10"
                          placeholder="jean@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Matière souhaitée *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="">Sélectionnez une matière</option>
                        {subjects.map(subj => (
                          <option key={subj.value} value={subj.value}>{subj.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Niveau *
                      </label>
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="">Sélectionnez un niveau</option>
                        <option value="debutant">Débutant (A1-A2)</option>
                        <option value="intermediaire">Intermédiaire (B1-B2)</option>
                        <option value="avance">Avancé (C1-C2)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Fréquence souhaitée *
                      </label>
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="1-semaine">1 fois par semaine</option>
                        <option value="2-semaine">2 fois par semaine</option>
                        <option value="3-semaine">3 fois par semaine</option>
                        <option value="quotidien">Quotidien</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Durée de la séance *
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="1h">1 heure</option>
                        <option value="1h30">1h30</option>
                        <option value="2h">2 heures</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Budget mensuel approximatif (optionnel)
                    </label>
                    <Input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Ex: 200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Disponibilités *
                    </label>
                    <Textarea
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Lundi et mercredi après-midi (14h-18h), Samedi matin (9h-12h)..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Ville (pour cours présentiel)
                    </label>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Paris, Lyon, Marseille... (ou 'En ligne uniquement')"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Besoins spécifiques et objectifs *
                    </label>
                    <Textarea
                      name="needs"
                      value={formData.needs}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez vos besoins, vos objectifs (ex: préparer le DELF B2, améliorer la prononciation, réussir un examen...), les points à travailler..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="border-2 shadow-xl sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  Questions Fréquentes
                </CardTitle>
                <p className="text-gray-600">
                  Tout ce que vous devez savoir sur nos cours particuliers
                </p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-cyan-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-sm leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12"
        >
          <Card className="border-2 bg-gradient-to-r from-cyan-50 to-blue-50">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Besoin d'aide ? Contactez-nous directement
              </h3>
              <p className="text-gray-600 mb-4">
                Notre équipe est disponible pour répondre à toutes vos questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="mailto:contact@franceprepacademy.fr" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold">
                  <Mail className="w-5 h-5" />
                  contact@franceprepacademy.fr
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <ChatBot />
    </div>
  );
}
