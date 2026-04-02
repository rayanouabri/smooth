import React, { useState, useRef, useEffect } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User as UserIcon, Sparkles, BookOpen, Target, Brain, AlertCircle } from "lucide-react";

// Simple local AI responses for common questions - no external API needed
const getLocalResponse = (message, userName) => {
  const lower = message.toLowerCase();

  if (lower.includes('bonjour') || lower.includes('salut') || lower.includes('hello') || lower.includes('hi')) {
    return `Bonjour${userName ? ` ${userName}` : ''} ! Je suis votre assistant FrancePrepAcademy. Comment puis-je vous aider aujourd'hui ? Je peux vous renseigner sur nos cours, l'intégration en France, les démarches administratives, et bien plus.`;
  }
  if (lower.includes('cours') || lower.includes('formation') || lower.includes('apprendre')) {
    return "Nous proposons plus de 30 cours couvrant 11 catégories essentielles : logement, budget & finances, santé, culture française, insertion professionnelle, administration, transport, et plus encore. Consultez notre page Cours pour découvrir tout le catalogue. La majorité de nos cours sont gratuits !";
  }
  if (lower.includes('logement') || lower.includes('appartement') || lower.includes('loyer')) {
    return "Pour le logement en France, nous avons des guides complets sur : la garantie Visale, la recherche d'appartement, les droits du locataire, et l'aide au logement (APL). Consultez notre catégorie 'Logement' dans les cours pour des guides détaillés.";
  }
  if (lower.includes('visa') || lower.includes('titre de séjour') || lower.includes('prefecture') || lower.includes('préfecture')) {
    return "Les démarches administratives peuvent être complexes. Nos cours couvrent les rendez-vous en préfecture, le renouvellement du titre de séjour, et toutes les formalités. Pour un accompagnement personnalisé, découvrez notre Conciergerie VIP.";
  }
  if (lower.includes('caf') || lower.includes('aide') || lower.includes('allocation') || lower.includes('bourse')) {
    return "La CAF propose plusieurs aides : APL (aide au logement), prime d'activité, et plus. Nos cours 'Budget & Finances' vous guident étape par étape dans vos demandes d'aides.";
  }
  if (lower.includes('santé') || lower.includes('sante') || lower.includes('médecin') || lower.includes('cpam') || lower.includes('carte vitale')) {
    return "Pour la santé en France : inscrivez-vous à la Sécurité Sociale (CPAM) pour obtenir votre carte Vitale. Nos cours 'Santé' vous expliquent tout le processus, du choix du médecin traitant aux remboursements.";
  }
  if (lower.includes('travail') || lower.includes('emploi') || lower.includes('job') || lower.includes('cv') || lower.includes('entretien')) {
    return "Pour trouver un emploi en France, nos cours couvrent : la rédaction de CV à la française, la préparation aux entretiens, les droits des travailleurs, et les plateformes de recherche d'emploi. Consultez nos catégories 'Insertion professionnelle' et 'Travail'.";
  }
  if (lower.includes('premium') || lower.includes('prix') || lower.includes('tarif') || lower.includes('abonnement')) {
    return "FrancePrepAcademy propose 70% de contenu gratuit ! Nos plans Premium débloquent des guides avancés et un accès prioritaire. Consultez notre page Tarifs pour les détails.";
  }
  if (lower.includes('merci') || lower.includes('super') || lower.includes('génial') || lower.includes('parfait')) {
    return `De rien${userName ? ` ${userName}` : ''} ! N'hésitez pas si vous avez d'autres questions. Bonne continuation dans votre parcours en France !`;
  }

  return "Je suis votre assistant FrancePrepAcademy. Je peux vous aider avec des questions sur nos cours, le logement, les démarches administratives, la santé, l'emploi, et l'intégration en France. Posez-moi une question précise et je ferai de mon mieux pour vous aider !";
};

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Bonjour ! Je suis l'assistant FrancePrepAcademy. Je peux vous aider avec vos questions sur les cours, l'intégration en France, les démarches administratives, et bien plus. Comment puis-je vous aider ?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserProfile();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickPrompts = [
    { text: "Aide sur les cours disponibles", icon: BookOpen, color: "bg-blue-100 text-blue-800" },
    { text: "Comment trouver un logement ?", icon: Target, color: "bg-green-100 text-green-800" },
    { text: "Démarches administratives", icon: Brain, color: "bg-purple-100 text-purple-800" },
    { text: "Aide pour l'emploi", icon: Sparkles, color: "bg-orange-100 text-orange-800" }
  ];

  const handleSend = async (message = input) => {
    if (!message.trim() || isLoading) return;

    const userMessage = { role: "user", content: message };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate a brief delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 600));

    const response = getLocalResponse(message, user?.full_name || user?.email?.split('@')[0]);
    const assistantMessage = { role: "assistant", content: response };
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="h-[80vh] border-0 shadow-2xl">
          <CardHeader className="border-b border-blue-100 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Assistant FrancePrepAcademy</h2>
                <p className="text-blue-100 text-sm font-normal">Votre guide pour l'intégration en France</p>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' ? 'bg-blue-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    }`}>
                      {message.role === 'user' ? (
                        <UserIcon className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white shadow-md border border-gray-100'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="p-6 pt-0">
                <p className="text-gray-600 text-sm mb-4">Suggestions rapides :</p>
                <div className="grid grid-cols-2 gap-3">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`h-auto p-4 justify-start gap-3 hover:scale-105 transition-transform ${prompt.color} border-0`}
                      onClick={() => handleSend(prompt.text)}
                    >
                      <prompt.icon className="w-5 h-5" />
                      <span className="text-left">{prompt.text}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-gray-100 p-6">
              <div className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question sur l'intégration en France..."
                  className="flex-1 h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="h-12 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Les réponses sont générées localement. Pour des questions complexes, consultez nos cours détaillés.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
