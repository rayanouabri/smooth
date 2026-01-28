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
  MapPin, 
  Send,
  CheckCircle,
  Clock,
  HelpCircle,
  FileText,
  Users
} from "lucide-react";
import { supabase } from "@/api/supabaseClient";
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
      const { error } = await supabase
        .from('contact_requests')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          status: 'pending'
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Message envoy\u00e9 !",
        description: "Nous vous r\u00e9pondrons dans les plus brefs d\u00e9lais.",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez r\u00e9essayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      question: "Comment puis-je acc\u00e9der aux cours Premium ?",
      answer: "Rendez-vous sur notre page Tarifs et choisissez la formule qui vous convient. Une fois le paiement effectu\u00e9, vous aurez imm\u00e9diatement acc\u00e8s \u00e0 tous les contenus Premium."
    },
    {
      question: "Puis-je annuler mon abonnement ?",
      answer: "Oui, vous pouvez annuler votre abonnement \u00e0 tout moment depuis votre profil. L'acc\u00e8s Premium reste actif jusqu'\u00e0 la fin de la p\u00e9riode pay\u00e9e."
    },
    {
      question: "Comment fonctionne l'assistant IA Sophie ?",
      answer: "Sophie est disponible 24/7 pour r\u00e9pondre \u00e0 vos questions sur la vie en France. Les utilisateurs gratuits ont 5 messages/mois, les Premium ont un acc\u00e8s illimit\u00e9."
    },
    {
      question: "Proposez-vous des cours particuliers ?",
      answer: "Oui ! Nos professeurs certifi\u00e9s proposent des cours particuliers de fran\u00e7ais et d'accompagnement administratif. Consultez la page Professeurs pour plus d'infos."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Support & Assistance
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Notre \u00e9quipe est l\u00e0 pour r\u00e9pondre \u00e0 toutes vos questions et vous accompagner dans votre int\u00e9gration en France.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-indigo-600" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoy\u00e9 !</h3>
                    <p className="text-gray-600 mb-6">
                      Merci de nous avoir contact\u00e9s. Nous vous r\u00e9pondrons dans les 24-48h.
                    </p>
                    <Button onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}>
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Sujet</Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="De quoi s'agit-il ?" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="D\u00e9crivez votre demande en d\u00e9tail..." rows={5} required className="mt-1" />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" disabled={isSubmitting}>
                      {isSubmitting ? (<><span className="animate-spin mr-2">\u23F3</span>Envoi en cours...</>) : (<><Send className="w-4 h-4 mr-2" />Envoyer le message</>)}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center"><Mail className="w-5 h-5 text-indigo-600" /></div>
                    <div><p className="font-medium text-gray-900">Email</p><a href="mailto:contact@franceprepacademy.fr" className="text-indigo-600 hover:underline">contact@franceprepacademy.fr</a></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"><Clock className="w-5 h-5 text-purple-600" /></div>
                    <div><p className="font-medium text-gray-900">Temps de r\u00e9ponse</p><p className="text-gray-600">24-48h ouvr\u00e9es</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center"><MapPin className="w-5 h-5 text-pink-600" /></div>
                    <div><p className="font-medium text-gray-900">Localisation</p><p className="text-gray-600">Paris, France</p></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Liens utiles</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="/pricing" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><FileText className="w-5 h-5 text-indigo-600" /><span className="font-medium">Tarifs</span></a>
                  <a href="/courses" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><Users className="w-5 h-5 text-purple-600" /><span className="font-medium">Cours</span></a>
                  <a href="/cgu" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><FileText className="w-5 h-5 text-pink-600" /><span className="font-medium">CGU</span></a>
                  <a href="/privacypolicy" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><FileText className="w-5 h-5 text-green-600" /><span className="font-medium">Confidentialit\u00e9</span></a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">FAQ</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Questions fr\u00e9quentes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
                      <p className="text-gray-600 text-sm">{item.answer}</p>
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