import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { InvokeLLM } from "@/api/integrations";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Bonjour ! Je suis Sophie, votre assistante IA FrancePrep. Je peux vous aider avec vos questions sur les démarches administratives, les cours, la culture française et bien plus. Comment puis-je vous aider aujourd'hui ?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    { icon: "📋", text: "Aide CAF", query: "Comment faire ma demande CAF ?" },
    { icon: "🎓", text: "Cours français", query: "Quels cours de français proposez-vous ?" },
    { icon: "💬", text: "Contact support", query: "Comment contacter le support ? Email: contact@franceprepacademy.fr" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (messageText) => {
    const userMessage = messageText || input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await InvokeLLM({
        prompt: `Tu es Sophie, l'assistante IA de FrancePrepAcademy, une plateforme d'apprentissage spécialisée dans l'intégration des étudiants internationaux en France.

CONTEXTE DU SITE :
FrancePrepAcademy est une plateforme éducative qui propose :
- Des cours gratuits et premium sur l'intégration en France
- Des formations sur les démarches administratives (CAF, sécurité sociale, logement, banque, titre de séjour, préfecture)
- Des cours de français (DELF, DALF)
- Des préparations aux examens universitaires et concours administratifs
- Des cours sur la culture française et les codes sociaux
- De l'aide à l'insertion professionnelle (CV, entretiens, recherche d'emploi)
- Des cours particuliers sur demande
- Une communauté d'entraide via un forum

TON RÔLE :
Tu es une experte bienveillante qui aide les étudiants internationaux avec :
1. Les démarches administratives en France (CAF, CPAM, carte Vitale, Visale, titre de séjour, préfecture, etc.)
2. Les cours et formations disponibles sur la plateforme
3. La culture française et les codes sociaux
4. L'insertion professionnelle en France
5. Les questions pratiques de vie quotidienne (logement, banque, santé, transports)

RÈGLES DE RÉPONSE :
- Réponds TOUJOURS en français, de manière claire, concise et bienveillante
- Utilise des émojis pertinents pour rendre tes réponses engageantes : 📚 (cours), ✅ (confirmation), 🎓 (études), 💼 (travail), 🏠 (logement), 📋 (démarches), 💡 (conseil), 🔗 (lien), etc.
- Donne des informations précises et pratiques
- Si tu ne connais pas une réponse spécifique, guide l'utilisateur vers les ressources appropriées ou recommande de contacter le support
- Pour le contact support, utilise toujours : contact@franceprepacademy.fr
- Sois empathique et compréhensive envers les difficultés des étudiants internationaux
- Encourage l'utilisation des ressources de la plateforme (cours, forum communautaire)

Question de l'utilisateur : ${userMessage}

Réponds maintenant de manière utile et bienveillante :`,
        add_context_from_internet: false
      });

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Erreur ChatBot:", error);
      
      let errorMessage = "😔 Désolée, une erreur s'est produite.";
      
      // Messages d'erreur personnalisés
      if (error.message.includes('Clé Gemini non configurée') || error.message.includes('non configurée')) {
        errorMessage = "🔧 L'IA n'est pas configurée sur le serveur. Contactez l'administrateur.";
      } else if (error.message.includes('expiré') || error.message.includes('expired') || error.message.includes('key expired')) {
        errorMessage = "⚠️ La clé API a expiré. L'administrateur doit la renouveler dans Vercel et redéployer l'application.";
      } else if (error.message.includes('invalide') || error.message.includes('Invalid')) {
        errorMessage = "⚠️ Clé API invalide. L'administrateur doit vérifier la configuration dans Vercel.";
      } else if (error.message.includes('quota')) {
        errorMessage = "⚠️ Quota API dépassé. Veuillez réessayer dans quelques minutes.";
      } else if (error.message.includes('connexion') || error.message.includes('réseau') || error.message.includes('network')) {
        errorMessage = "🌐 Erreur de connexion. Vérifiez votre connexion internet et réessayez.";
      } else if (error.message.includes('Gemini')) {
        errorMessage = "🤖 Le service IA est temporairement indisponible. Veuillez réessayer.";
      } else if (error.message) {
        errorMessage = `⚠️ ${error.message}`;
      } else {
        errorMessage += " Veuillez réessayer ou contacter le support : contact@franceprepacademy.fr";
      }
      
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: errorMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickReply = (query) => {
    handleSend(query);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="rounded-full w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-2xl hover:shadow-blue-500/50 transition-all animate-pulse hover:animate-none"
            >
              <MessageCircle className="w-7 h-7 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
            >
            <Card className="flex flex-col h-[600px] max-h-[calc(100vh-3rem)] shadow-2xl border-2 border-blue-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <span className="text-2xl">👩‍💼</span>
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <div className="font-bold">Sophie</div>
                    <div className="text-xs text-blue-100">Assistante • En ligne</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-sm">👩‍💼</span>
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none"
                          : "bg-white text-gray-900 border border-gray-200 rounded-tl-none"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-sm">👩‍💼</span>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-gray-200 rounded-tl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="px-4 pb-3 flex gap-2 flex-wrap">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply.query)}
                      className="text-xs bg-blue-100 text-blue-700 px-3 py-2 rounded-full hover:bg-blue-200 transition-colors flex items-center gap-1"
                    >
                      <span>{reply.icon}</span>
                      <span>{reply.text}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
                <div className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Écrivez votre message..."
                    disabled={isLoading}
                    className="flex-1 border-2 border-gray-200 focus:border-blue-400 rounded-full"
                  />
                  <Button
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isLoading}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full w-10 h-10 p-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}