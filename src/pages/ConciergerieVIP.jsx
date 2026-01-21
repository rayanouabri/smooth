import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Calendar, Home, CreditCard, MessageCircle, User, Shield, Clock, Zap } from "lucide-react";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ConciergerieVIP() {
  const [isProcessing, setIsProcessing] = useState(false);

  const services = [
    {
      icon: Crown,
      title: "Accès total Premium inclus",
      description: "Tous les guides et ressources Premium à votre disposition"
    },
    {
      icon: Calendar,
      title: "On gère vos RDV en préfecture",
      description: "Prise de rendez-vous, préparation des dossiers, suivi administratif"
    },
    {
      icon: Home,
      title: "Recherche de logement personnalisée",
      description: "Recherche active, visite accompagnée, négociation des contrats"
    },
    {
      icon: CreditCard,
      title: "Ouverture de compte bancaire",
      description: "Accompagnement pour l'ouverture de compte et démarches bancaires"
    },
    {
      icon: MessageCircle,
      title: "Support WhatsApp 24/7",
      description: "Réponses immédiates à toutes vos questions, jour et nuit"
    },
    {
      icon: User,
      title: "Conseiller dédié",
      description: "Un expert dédié qui connaît votre dossier et vos besoins"
    },
    {
      icon: Shield,
      title: "Suivi personnalisé de votre dossier",
      description: "Suivi complet de toutes vos démarches administratives"
    },
    {
      icon: Zap,
      title: "Assistance complète administrative",
      description: "CAF, Sécurité Sociale, Impôts, Titre de séjour... On s'occupe de tout"
    }
  ];

  const benefits = [
    "Gain de temps considérable",
    "Zéro erreur administrative",
    "Stress réduit à zéro",
    "Installation rapide et efficace",
    "Conseil expert à chaque étape"
  ];

  const testimonials = [
    {
      name: "Thomas",
      origin: "Expatrié Canadien",
      text: "Gr\u00e2ce \u00e0 la Conciergerie VIP, j'ai pu m'installer en France en 2 semaines au lieu de 3 mois. Tout \u00e9tait g\u00e9r\u00e9 pour moi, je n'ai eu qu'\u00e0 signer les papiers.",
      rating: 5
    },
    {
      name: "Daniela",
      origin: "Travailleuse internationale",
      text: "Le support WhatsApp 24/7 a été un game-changer. À chaque question, j'avais une réponse immédiate. Je recommande à 100%.",
      rating: 5
    },
    {
      name: "Ahmed",
      origin: "Entrepreneur",
      text: "L'ouverture de compte bancaire et la recherche de logement ont été gérées parfaitement. J'ai économisé des semaines de démarches.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-amber-500 text-white border-0 text-base px-6 py-2 shadow-xl">
              <Crown className="w-4 h-4 mr-2 inline" />
              Service Premium
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Conciergerie VIP
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              On gère votre intégration en France de A à Z. Ne laissez plus l'administration freiner vos projets.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold">599€</div>
                <div className="text-sm text-blue-200">À partir de</div>
              </div>
            </div>
            <Link to={createPageUrl("Pricing")}>
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-6 text-lg backdrop-blur">
                ← Retour aux tarifs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Ce qui est inclus dans votre service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-100 mb-4">
                      <service.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir la Conciergerie VIP ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-amber-500 rounded-full p-2">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Ce que disent nos clients
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.origin}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Prêt à simplifier votre installation en France ?</h2>
              <p className="text-xl mb-8 text-amber-50">
                Contactez-nous pour discuter de vos besoins spécifiques
              </p>
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl"
                onClick={() => {
                  // TODO: Ajouter logique de contact/commande
                  alert("Contactez-nous à contact@franceprepacademy.fr pour plus d'informations");
                }}
              >
                Contacter notre équipe
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

