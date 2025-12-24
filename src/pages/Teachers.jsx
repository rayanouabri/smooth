import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  MapPin
} from "lucide-react";
import { SendEmail } from "@/api/integrations";
import { isAuthenticated, redirectToLogin } from "@/api/auth";
import { motion } from "framer-motion";
import ChatBot from "../components/ChatBot";

export default function Teachers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérifier l'authentification
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      redirectToLogin(window.location.href);
      return;
    }

    setIsSubmitting(true);

    try {
      await SendEmail({
        to: "contact@franceprepacademy.fr",
        subject: `Demande de cours particulier - ${formData.subject}`,
        html: `
          <h2>Nouvelle demande de cours particulier</h2>
          <p><strong>Nom:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Téléphone:</strong> ${formData.phone}</p>
          <p><strong>Matière:</strong> ${formData.subject}</p>
          <p><strong>Niveau:</strong> ${formData.level}</p>
          <p><strong>Fréquence:</strong> ${formData.frequency}</p>
          <p><strong>Durée:</strong> ${formData.duration}</p>
          <p><strong>Budget:</strong> ${formData.budget}€</p>
          <p><strong>Disponibilités:</strong> ${formData.availability}</p>
          <p><strong>Ville:</strong> ${formData.city}</p>
          <p><strong>Besoins spécifiques:</strong></p>
          <p>${formData.needs}</p>
        `,
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
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqItems = [
    {
      question: "Comment fonctionnent les cours particuliers ?",
      answer: "Nos cours particuliers sont adaptés à vos besoins spécifiques. Vous remplissez le formulaire ci-dessus avec vos besoins, votre niveau et vos disponibilités. Notre équipe vous contacte sous 24-48h pour vous proposer un professeur adapté et planifier votre première séance."
    },
    {
      question: "Quels sont les tarifs ?",
      answer: "Les tarifs varient selon la matière, le niveau et la fréquence des cours. En moyenne, comptez entre 25€ et 50€ de l'heure selon ces critères. Des forfaits mensuels sont également disponibles avec des tarifs dégressifs."
    },
    {
      question: "Puis-je prendre des cours en ligne ?",
      answer: "Oui ! Nous proposons des cours en ligne via visioconférence pour toutes les matières. C'est pratique, flexible et aussi efficace que les cours en présentiel. Vous pouvez même combiner les deux formats selon vos besoins."
    },
    {
      question: "Combien de temps à l'avance dois-je réserver ?",
      answer: "Nous recommandons de réserver au moins 48h à l'avance pour garantir la disponibilité du professeur. Cependant, en cas d'urgence, nous pouvons souvent trouver un créneau dans les 24h."
    },
    {
      question: "Puis-je changer de professeur si ça ne me convient pas ?",
      answer: "Absolument ! Votre satisfaction est notre priorité. Si le premier professeur ne correspond pas à vos attentes, nous vous proposons gratuitement un autre professeur jusqu'à trouver celui qui vous convient parfaitement."
    },
    {
      question: "Les cours sont-ils adaptés aux étudiants étrangers ?",
      answer: "Oui, nos professeurs sont spécialisés dans l'accompagnement des étudiants internationaux. Ils comprennent les défis spécifiques que vous pouvez rencontrer et adaptent leur pédagogie en conséquence. Beaucoup parlent plusieurs langues pour faciliter la communication."
    },
    {
      question: "Proposez-vous des cours en groupe ?",
      answer: "Oui, nous proposons également des cours en petits groupes (2-4 personnes) à des tarifs réduits. C'est idéal pour partager les coûts tout en bénéficiant d'un accompagnement personnalisé."
    },
    {
      question: "Comment se déroule le premier cours ?",
      answer: "Le premier cours est une séance de diagnostic gratuite. Le professeur évalue votre niveau, discute de vos objectifs et établit avec vous un plan d'apprentissage personnalisé. C'est également l'occasion de vérifier que le courant passe bien entre vous."
    },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cours Particuliers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bénéficiez d'un accompagnement personnalisé adapté à vos besoins et votre niveau
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                  Remplissez le formulaire et nous vous recontactons rapidement
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
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Matière *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 border border-gray-300 rounded-md"
                      >
                        <option value="">Sélectionnez une matière</option>
                        <option value="francais">Français (FLE)</option>
                        <option value="mathematiques">Mathématiques</option>
                        <option value="anglais">Anglais</option>
                        <option value="administratif">Démarches administratives</option>
                        <option value="cv_entretien">CV et entretien d'embauche</option>
                        <option value="culture">Culture française</option>
                        <option value="autre">Autre</option>
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
                        className="w-full h-10 px-3 border border-gray-300 rounded-md"
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
                        className="w-full h-10 px-3 border border-gray-300 rounded-md"
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
                        className="w-full h-10 px-3 border border-gray-300 rounded-md"
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
                      Budget mensuel approximatif
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
                      placeholder="Ex: Lundi et mercredi après-midi, Samedi matin..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Ville
                    </label>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Paris, Lyon, Marseille..."
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
                      placeholder="Décrivez vos besoins, vos objectifs, les points à travailler..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold h-12"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                  Questions fréquentes
                </CardTitle>
                <p className="text-gray-600">
                  Tout ce que vous devez savoir sur nos cours particuliers
                </p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
