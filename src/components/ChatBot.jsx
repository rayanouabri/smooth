import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Loader2, Sparkles, Crown, AlertCircle } from "lucide-react";
import { InvokeLLM } from "@/api/integrations";
import { Course } from "@/api/entities";
import { supabase } from "@/api/supabaseClient";
import { me, isAuthenticated } from "@/api/auth";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { isPremium } from "@/utils/premium";

// Fonction pour nettoyer le markdown (enlever **, ##, etc.)
const cleanMarkdown = (text) => {
  if (!text) return text;
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Enlever **gras**
    .replace(/\*(.*?)\*/g, '$1') // Enlever *italique*
    .replace(/##+\s*(.*?)$/gm, '$1') // Enlever les titres ##
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Enlever les liens [texte](url)
    .replace(/`(.*?)`/g, '$1') // Enlever le code `
    .replace(/---+/g, '') // Enlever les séparateurs ---
    .trim();
};

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
  const [coursesContext, setCoursesContext] = useState([]);
  const [user, setUser] = useState(null);
  const [messagesCount, setMessagesCount] = useState(0);
  const [isCheckingLimit, setIsCheckingLimit] = useState(true);
  const messagesEndRef = useRef(null);
  const FREE_MESSAGE_LIMIT = 5;

  // Charger l'utilisateur et compter les messages du mois
  useEffect(() => {
    const loadUserAndCount = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          const userData = await me();
          setUser(userData);
          
          if (userData?.email) {
            // Compter les messages du mois en cours
            const startOfMonth = new Date();
            startOfMonth.setDate(1);
            startOfMonth.setHours(0, 0, 0, 0);
            
            const { count, error } = await supabase
              .from('ai_messages')
              .select('*', { count: 'exact', head: true })
              .eq('user_email', userData.email)
              .gte('created_at', startOfMonth.toISOString());
            
            if (!error && count !== null) {
              setMessagesCount(count);
            }
          }
        }
      } catch (error) {
        console.log('Erreur chargement utilisateur:', error);
      } finally {
        setIsCheckingLimit(false);
      }
    };
    
    loadUserAndCount();
  }, []);

  // Charger les cours pour le contexte de l'IA
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courses = await Course.filter({ is_published: true }, '-created_date');
        setCoursesContext(courses || []);
      } catch (error) {
        console.log('Impossible de charger les cours pour le contexte IA:', error);
      }
    };
    loadCourses();
  }, []);

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

    // Vérifier la limite pour les utilisateurs gratuits
    const userIsPremium = isPremium(user);
    if (!userIsPremium && messagesCount >= FREE_MESSAGE_LIMIT) {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `🚫 Vous avez atteint votre limite de ${FREE_MESSAGE_LIMIT} messages gratuits ce mois-ci.\n\n💎 Passez Premium pour des messages illimités et accédez à tous nos cours, certificats et support prioritaire !\n\n👉 Cliquez sur "Passer Premium" ci-dessous pour découvrir nos offres.`
      }]);
      return;
    }

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Stocker le message dans la base de données
      if (user?.email && user?.id) {
        try {
          await supabase
            .from('ai_messages')
            .insert({
              user_id: user.id,
              user_email: user.email,
              message_content: userMessage,
            });
          
          // Mettre à jour le compteur
          setMessagesCount(prev => prev + 1);
        } catch (dbError) {
          console.log('Erreur stockage message:', dbError);
          // Continuer même si le stockage échoue
        }
      }
      // Construire le contexte des cours disponibles
      const coursesList = coursesContext.slice(0, 20).map(course => {
        const isPremium = course.is_premium ? 'Premium' : 'Gratuit';
        return `- "${course.title}" (${isPremium}) - ${course.short_description || course.description || ''}`;
      }).join('\n');

      const coursesContextText = coursesContext.length > 0 
        ? `\n\nCOURS DISPONIBLES SUR LA PLATEFORME (à recommander si pertinent) :\n${coursesList}\n\nPour accéder aux cours, l'utilisateur peut aller sur /Courses. Les cours Premium nécessitent un abonnement (voir /Pricing).`
        : '';

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
- Une communauté d'entraide via un forum${coursesContextText}

TON RÔLE :
Tu es une experte bienveillante qui aide les étudiants internationaux avec :
1. Les démarches administratives en France (CAF, CPAM, carte Vitale, Visale, titre de séjour, préfecture, etc.)
2. Les cours et formations disponibles sur la plateforme - REDIRIGE VERS LES COURS PERTINENTS
3. La culture française et les codes sociaux
4. L'insertion professionnelle en France
5. Les questions pratiques de vie quotidienne (logement, banque, santé, transports)

RÈGLES DE RÉPONSE IMPORTANTES :
- Réponds TOUJOURS en français, de manière claire, concise et bienveillante
- NE JAMAIS utiliser de formatage markdown (**gras**, ##titres, etc.) - réponds en texte simple avec emojis
- Utilise des émojis pertinents : 📚 (cours), ✅ (confirmation), 🎓 (études), 💼 (travail), 🏠 (logement), 📋 (démarches), 💡 (conseil), 🔗 (lien), 💎 (premium), etc.
- Quand tu mentionnes un cours, redirige l'utilisateur vers /Courses avec le nom du cours
- MENTIONNE les avantages Premium quand pertinent (accès complet, certificats, support prioritaire) et redirige vers /Pricing
- Donne des informations précises et pratiques
- Si tu ne connais pas une réponse spécifique, guide l'utilisateur vers les ressources appropriées ou recommande de contacter le support
- Pour le contact support, utilise toujours : contact@franceprepacademy.fr
- Sois empathique et compréhensive envers les difficultés des étudiants internationaux
- Encourage l'utilisation des ressources de la plateforme (cours gratuits et premium, forum communautaire)

Question de l'utilisateur : ${userMessage}

Réponds maintenant de manière utile et bienveillante, SANS formatage markdown, en texte simple avec emojis :`,
        add_context_from_internet: false
      });

      // Nettoyer le markdown de la réponse
      const cleanedResponse = cleanMarkdown(response);

      setMessages(prev => [...prev, { role: "assistant", content: cleanedResponse }]);

      // Mettre à jour la réponse dans la base de données
      if (user?.email && user?.id) {
        try {
          const { data: lastMessage } = await supabase
            .from('ai_messages')
            .select('id')
            .eq('user_email', user.email)
            .eq('message_content', userMessage)
            .order('created_at', { ascending: false })
            .limit(1)
            .single();
          
          if (lastMessage?.id) {
            await supabase
              .from('ai_messages')
              .update({ response_content: cleanedResponse })
              .eq('id', lastMessage.id);
          }
        } catch (dbError) {
          console.log('Erreur mise à jour réponse:', dbError);
        }
      }
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
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-t-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                        <span className="text-2xl">👩‍💼</span>
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
                    </div>
                    <div>
                      <div className="font-bold flex items-center gap-2">
                        Sophie
                        {userIsPremium && (
                          <Crown className="w-4 h-4 text-yellow-300" />
                        )}
                      </div>
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
                {/* Compteur de messages */}
                {!userIsPremium && (
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-blue-100">Messages ce mois</span>
                      <Badge className={`${messagesCount >= FREE_MESSAGE_LIMIT ? 'bg-red-500' : 'bg-white/20'} text-white border-0`}>
                        {messagesCount} / {FREE_MESSAGE_LIMIT}
                      </Badge>
                    </div>
                    {messagesCount >= FREE_MESSAGE_LIMIT && (
                      <Link to={createPageUrl("Pricing")} className="block mt-2">
                        <Button size="sm" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xs">
                          <Crown className="w-3 h-3 mr-1" />
                          Passer Premium
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
                {userIsPremium && (
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <div className="flex items-center gap-1 text-xs text-yellow-200">
                      <Crown className="w-3 h-3" />
                      <span>Messages illimités</span>
                    </div>
                  </div>
                )}
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
                {!userIsPremium && messagesCount >= FREE_MESSAGE_LIMIT ? (
                  <div className="space-y-3">
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 text-center">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-yellow-900 mb-1">
                        Limite atteinte
                      </p>
                      <p className="text-xs text-yellow-700 mb-3">
                        Vous avez utilisé vos {FREE_MESSAGE_LIMIT} messages gratuits ce mois-ci.
                      </p>
                      <Link to={createPageUrl("Pricing")} className="block">
                        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                          <Crown className="w-4 h-4 mr-2" />
                          Passer Premium - Messages illimités
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Écrivez votre message..."
                      disabled={isLoading || isCheckingLimit}
                      className="flex-1 border-2 border-gray-200 focus:border-blue-400 rounded-full"
                    />
                    <Button
                      onClick={() => handleSend()}
                      disabled={!input.trim() || isLoading || isCheckingLimit || (!userIsPremium && messagesCount >= FREE_MESSAGE_LIMIT)}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full w-10 h-10 p-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}