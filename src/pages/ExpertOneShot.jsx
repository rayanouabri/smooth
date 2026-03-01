import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Check, 
  Wrench, 
  FileText, 
  Mail, 
  Phone, 
  User, 
  ArrowLeft,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  Briefcase,
  CreditCard,
  Building2,
  Star,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  Zap,
  HeartHandshake
} from "lucide-react";
import { createPageUrl } from "../utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { isAuthenticated, redirectToLogin, me } from "@/api/auth";
import { SendEmail } from "@/api/integrations";
import { useToast } from "@/components/ui/use-toast";
import ChatBot from "../components/ChatBot";

const SERVICE_TYPES = [
  { value: "visa", label: "Dossier Visa / Titre de séjour", icon: "📋" },
  { value: "cpam", label: "Sécurité Sociale (CPAM)", icon: "🏥" },
  { value: "caf", label: "CAF (APL - Aide Personnalisée au Logement)", icon: "🏠" },
  { value: "logement", label: "Litige Logement", icon: "🔑" },
  { value: "banque", label: "Ouverture compte bancaire", icon: "💳" },
  { value: "emploi", label: "Recherche d'emploi / Alternance", icon: "💼" },
  { value: "impots", label: "Déclaration d'impôts", icon: "📊" },
  { value: "autre", label: "Autre démarche administrative", icon: "📝" },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    origin: "Étudiante Canadienne",
    service: "Dossier Visa",
    text: "J'étais complètement perdue avec mon dossier de visa. L'équipe a tout géré pour moi et j'ai obtenu mon titre de séjour en 2 semaines. Un service exceptionnel !",
    rating: 5
  },
  {
    name: "Mohammed K.",
    origin: "Entrepreneur Marocain",
    service: "CAF + Logement",
    text: "Gr\u00e2ce au service Expert, j'ai r\u00e9solu mon probl\u00e8me de CAF qui tra\u00eenait depuis 3 mois en une semaine. Et ils ont m\u00eame trouv\u00e9 un appartement pour moi !",
    rating: 5
  },
  {
    name: "Emma L.",
    origin: "Travailleuse Britannique",
    service: "CPAM + Banque",
    text: "L'ouverture de compte bancaire et l'inscription à la CPAM ont été gérées de A à Z. Je n'ai eu qu'à signer. Je recommande à 100% !",
    rating: 5
  }
];

export default function ExpertOneShot() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    urgency: "normal",
    description: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [user, setUser] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const authenticated = await isAuthenticated();
      setIsAuthenticatedUser(authenticated);
      if (authenticated) {
        try {
          const userData = await me();
          if (userData) {
            setUser(userData);
            setFormData(prev => ({
              ...prev,
              name: userData.full_name || userData.name || prev.name,
              email: userData.email || prev.email,
              phone: userData.phone || prev.phone,
            }));
          }
        } catch (err) { console.warn('Could not fetch user:', err); }
      }
    } catch (err) {
      console.warn('Auth check failed:', err);
      setIsAuthenticatedUser(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs obligatoires
    if (!formData.name || !formData.email || !formData.serviceType || !formData.description) {
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
    if (!isAuthenticatedUser) {
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
      const selectedService = SERVICE_TYPES.find(s => s.value === formData.serviceType);
      const urgencyLabels = {
        'urgent': 'Urgent (sous 48h)',
        'normal': 'Normal (souhaitable sous 1 semaine)',
        'non-urgent': 'Non urgent'
      };
      
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Nouvelle demande de Service Expert 'Clé en main'</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Informations du client</h3>
            <p><strong>Nom :</strong> ${formData.name}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            <p><strong>Téléphone :</strong> ${formData.phone || 'Non renseigné'}</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Détails de la demande</h3>
            <p><strong>Type de service :</strong> ${selectedService?.label || formData.serviceType}</p>
            <p><strong>Urgence :</strong> ${urgencyLabels[formData.urgency] || 'Non renseigné'}</p>
            <p><strong>Budget estimé :</strong> ${formData.budget ? formData.budget + '€' : 'Non renseigné'}</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Description</h3>
            <p style="white-space: pre-wrap;">${formData.description}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            Cette demande a été soumise depuis le formulaire Service Expert de FrancePrep Academy.
          </p>
        </div>
      `;

      const textContent = `
Nouvelle demande de Service Expert 'Clé en main'

Informations du client:
- Nom: ${formData.name}
- Email: ${formData.email}
- Téléphone: ${formData.phone || 'Non renseigné'}

Détails de la demande:
- Type de service: ${selectedService?.label || formData.serviceType}
- Urgence: ${urgencyLabels[formData.urgency] || 'Non renseigné'}
- Budget estimé: ${formData.budget || 'Non renseigné'}€

Description:
${formData.description}
      `;

      await SendEmail({
        to: "contact@franceprepacademy.fr",
        subject: `[Service Expert] Nouvelle demande - ${selectedService?.label || formData.serviceType}`,
        html: emailHtml,
        text: textContent,
        requestType: 'expert_service',
        formData: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          urgency: formData.urgency,
          budget: formData.budget,
          description: formData.description,
        },
      });

      setSubmitted(true);
      toast({
        title: "✅ Demande envoyée avec succès !",
        description: "Notre équipe vous contactera dans les 24 heures pour discuter de vos besoins et vous proposer un devis.",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      
      let errorMessage = "Une erreur est survenue lors de l'envoi. Veuillez réessayer.";
      
      if (error?.message) {
        if (error.message.includes('Email service not configured')) {
          errorMessage = "Le service d'email n'est pas configuré. Veuillez contacter l'administrateur ou nous écrire directement à contact@franceprepacademy.fr";
        } else if (error.message.includes('RESEND_API_KEY')) {
          errorMessage = "Configuration email manquante. Veuillez contacter le support à contact@franceprepacademy.fr";
        } else {
          errorMessage = error.message;
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

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="border-2 border-green-200 shadow-xl">
              <CardContent className="p-12">
                <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Demande envoyée avec succès !
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Notre équipe d'experts a bien reçu votre demande. Nous vous contacterons dans les <strong>24 heures</strong> 
                  pour discuter de vos besoins et vous proposer un devis personnalisé.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
                  <h3 className="font-bold text-blue-900 mb-2">Prochaines étapes :</h3>
                  <ol className="list-decimal list-inside space-y-2 text-blue-800">
                    <li>Nous analysons votre demande dans les 24h</li>
                    <li>Un expert vous contacte par email ou téléphone</li>
                    <li>Nous vous proposons un devis personnalisé</li>
                    <li>Vous validez et nous prenons le relais</li>
                  </ol>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={createPageUrl("Pricing")}>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Retour aux tarifs
                    </Button>
                  </Link>
                  <Link to={createPageUrl("Dashboard")}>
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600">
                      Aller au tableau de bord
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <ChatBot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link to={createPageUrl("Pricing")}>
              <Button variant="outline" className="mb-6 border-white/20 bg-white/10 text-white hover:bg-white hover:text-purple-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux tarifs
              </Button>
            </Link>
            <Badge className="mb-6 bg-purple-500 text-white border-0 text-base px-6 py-2 shadow-xl">
              <Wrench className="w-4 h-4 mr-2 inline" />
              Service Expert 'Clé en main'
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              On le fait à votre place
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
              Un blocage sur un dossier ? Une urgence ? Nos experts prennent le relais de A à Z sur une démarche précise.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold">À partir de 180€</div>
                <div className="text-sm text-purple-200">Devis personnalisé selon votre besoin</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">&lt; 24h</div>
                <div className="text-sm text-purple-200">Réponse garantie</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm text-purple-200">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Trust Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Pourquoi faire confiance à nos experts ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous avons accompagné des centaines d'étudiants dans leurs démarches administratives avec un taux de réussite de 100%
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Award, title: "Experts certifiés", desc: "Nos équipes maîtrisent parfaitement les démarches françaises" },
              { icon: Clock, title: "Intervention rapide", desc: "Réponse sous 24h, traitement en moins d'une semaine" },
              { icon: Shield, title: "Garantie résultat", desc: "Nous garantissons la réussite de votre dossier" },
              { icon: HeartHandshake, title: "Accompagnement humain", desc: "Un expert dédié vous suit personnellement" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                      <item.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="border-2 border-purple-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
                Comment ça fonctionne ? 3 étapes simples
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="inline-flex p-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-xl">
                      <FileText className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Remplissez le formulaire</h3>
                  <p className="text-gray-600">
                    Décrivez votre besoin et votre situation en quelques minutes. Plus vous êtes précis, mieux nous pourrons vous aider.
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="inline-flex p-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-xl">
                      <Mail className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Recevez un devis personnalisé</h3>
                  <p className="text-gray-600">
                    Notre équipe vous contacte sous 24h avec un devis détaillé et un plan d'action clair pour résoudre votre problème.
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="inline-flex p-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full shadow-xl">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">On s'en occupe pour vous</h3>
                  <p className="text-gray-600">
                    Une fois le devis accepté, nos experts prennent le relais de A à Z. Vous êtes informé à chaque étape.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-0 text-base px-6 py-2">
              ⭐ Témoignages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ils nous ont fait confiance
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les retours de nos clients satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge className="mb-3 bg-purple-100 text-purple-700">
                      {testimonial.service}
                    </Badge>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.origin}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Types d'interventions possibles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {SERVICE_TYPES.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-purple-100">
                    <span className="text-2xl flex-shrink-0">{service.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{service.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Demandez votre devis personnalisé
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Remplissez ce formulaire et nous vous recontacterons sous 24h
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" />
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="jean.dupont@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <Label htmlFor="serviceType" className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4" />
                    Type de service demandé *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleChange("serviceType", value)}
                    required
                  >
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Sélectionnez le type de service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_TYPES.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          <span className="flex items-center gap-2">
                            <span>{service.icon}</span>
                            {service.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="urgency" className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" />
                    Niveau d'urgence
                  </Label>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => handleChange("urgency", value)}
                  >
                    <SelectTrigger id="urgency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="non-urgent">Non urgent</SelectItem>
                      <SelectItem value="normal">Normal (souhaitable sous 1 semaine)</SelectItem>
                      <SelectItem value="urgent">Urgent (sous 48h)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget" className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4" />
                    Budget estimé (optionnel)
                  </Label>
                  <Input
                    id="budget"
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    placeholder="180"
                    min="180"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Prix de départ : 180€. Le prix final dépendra de la complexité de votre dossier.
                  </p>
                </div>

                <div>
                  <Label htmlFor="description" className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4" />
                    Décrivez votre situation et votre besoin *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    required
                    placeholder="Décrivez en détail votre situation, ce dont vous avez besoin, les documents que vous possédez déjà, etc. Plus vous êtes précis, mieux nous pourrons vous aider."
                    rows={8}
                    className="resize-none"
                  />
                </div>

                <div className="pt-4">
                  {!isAuthenticatedUser ? (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-900 mb-1">Connexion requise</p>
                          <p className="text-sm text-yellow-800">
                            Vous devez être connecté pour soumettre une demande.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-7 text-lg shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-center text-gray-500 mt-4">
                    En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe. 
                    Nous vous répondrons dans les <strong>24 heures</strong>.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-2 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-green-900">Confidentialité garantie</h3>
                <p className="text-sm text-green-800">Vos données sont traitées en toute confidentialité</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-blue-900">Réponse rapide</h3>
                <p className="text-sm text-blue-800">Nous vous contactons sous 24h maximum</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <Award className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-purple-900">Expertise garantie</h3>
                <p className="text-sm text-purple-800">Nos experts maîtrisent parfaitement les démarches françaises</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      <ChatBot />
    </div>
  );
}
