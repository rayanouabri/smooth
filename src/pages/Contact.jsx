import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MessageSquare, 
  Send,
  CheckCircle,
  Clock,
  HelpCircle,
  Loader2
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setIsSubmitted(true);
      toast({
        title: "Message envoy\u00e9 !",
        description: "Nous vous r\u00e9pondrons dans les plus brefs d\u00e9lais.",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue. Veuillez r\u00e9essayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      question: "Comment acc\u00e9der aux cours Premium ?",
      answer: "Rendez-vous sur notre page Tarifs et choisissez la formule qui vous convient. Une fois le paiement effectu\u00e9, l'acc\u00e8s est imm\u00e9diat."
    },
    {
      question: "Puis-je annuler mon abonnement ?",
      answer: "Oui, vous pouvez annuler \u00e0 tout moment depuis votre profil. L'acc\u00e8s reste actif jusqu'\u00e0 la fin de la p\u00e9riode pay\u00e9e."
    },
    {
      question: "Comment fonctionne l'assistant IA ?",
      answer: "Sophie est disponible 24/7 pour r\u00e9pondre \u00e0 vos questions. Gratuit: 5 messages/mois, Premium: illimit\u00e9."
    },
    {
      question: "Proposez-vous des cours particuliers ?",
      answer: "Oui ! Nos professeurs certifi\u00e9s proposent des cours de fran\u00e7ais et accompagnement administratif."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJjLTIgMC00IDItNCAyczIgNCA0IDRjMiAwIDQtMiA0LTQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-1.5">
            Support & Assistance
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Une question ?<br />Nous sommes l\u00e0 !
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Notre \u00e9quipe r\u00e9pond sous 24-48h pour vous accompagner dans votre int\u00e9gration en France.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form - Plus large */}
          <div className="lg:col-span-3">
            <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b">
                <CardTitle className="text-2xl font-bold flex items-center gap-3 text-gray-800">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-indigo-600" />
                  </div>
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message envoy\u00e9 !</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Merci pour votre message. Un email de confirmation vous a \u00e9t\u00e9 envoy\u00e9 et nous vous r\u00e9pondrons sous 24-48h.
                    </p>
                    <Button 
                      onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Votre nom</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Jean Dupont" 
                          required 
                          className="mt-2 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Votre email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="jean@email.com" 
                          required 
                          className="mt-2 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500" 
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">Sujet</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="De quoi souhaitez-vous parler ?" 
                        required 
                        className="mt-2 h-12 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Votre message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="D\u00e9crivez votre demande en d\u00e9tail..." 
                        rows={6} 
                        required 
                        className="mt-2 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none" 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-0 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Email</p>
                    <a href="mailto:contact@franceprepacademy.fr" className="text-indigo-600 hover:underline font-medium">
                      contact@franceprepacademy.fr
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">D\u00e9lai de r\u00e9ponse</p>
                    <p className="text-gray-600 font-medium">24-48h ouvr\u00e9es</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  <span className="text-2xl mr-2">\uD83D\uDCA1</span>
                  <strong>Astuce :</strong> Pour une r\u00e9ponse plus rapide, consultez d'abord notre FAQ ci-dessous, vous y trouverez peut-\u00eatre la r\u00e9ponse \u00e0 votre question !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 px-4 py-1.5">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Questions fr\u00e9quentes</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">Trouvez rapidement des r\u00e9ponses aux questions les plus pos\u00e9es</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 border-0 rounded-xl group hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors">
                      <HelpCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}