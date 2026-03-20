import React, { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Crown, AlertCircle, ChevronDown, Sparkles } from "lucide-react";
import { InvokeLLM } from "@/api/integrations";
import { Course } from "@/api/entities";
import { supabase } from "@/api/supabaseClient";
import { me, isAuthenticated } from "@/api/auth";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { isPremium } from "@/utils/premium";

// Nettoyer le markdown
const cleanMarkdown = (text) => {
  if (!text) return text;
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/##+\s*(.*?)$/gm, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/---+/g, '')
    .trim();
};

const SOPHIE_AVATAR = (
  <div className="relative flex-shrink-0">
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
      <span className="text-base">🎓</span>
    </div>
    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></span>
  </div>
);

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Bonjour ! Je suis Sophie, votre assistante IA FrancePrep. Je vous aide avec les démarches administratives, les cours et la vie en France. Comment puis-je vous aider ?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [coursesContext, setCoursesContext] = useState([]);
  const [user, setUser] = useState(null);
  const [messagesCount, setMessagesCount] = useState(0);
  const [isCheckingLimit, setIsCheckingLimit] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const FREE_MESSAGE_LIMIT = 5;
  const MAX_PROMPT_CHARS = 4800;

  const userIsPremium = useMemo(() => isPremium(user), [user]);

  useEffect(() => {
    const loadUserAndCount = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          const userData = await me();
          setUser(userData);
          if (userData?.email) {
            const startOfMonth = new Date();
            startOfMonth.setDate(1);
            startOfMonth.setHours(0, 0, 0, 0);
            const { count, error } = await supabase
              .from('ai_messages')
              .select('*', { count: 'exact', head: true })
              .eq('user_email', userData.email)
              .gte('created_at', startOfMonth.toISOString());
            if (!error && count !== null) setMessagesCount(count);
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

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courses = await Course.filter({ is_published: true }, '-created_date');
        setCoursesContext(courses || []);
      } catch (error) {
        console.log('Impossible de charger les cours:', error);
      }
    };
    loadCourses();
  }, []);

  const quickReplies = [
    { icon: "📋", text: "Aide CAF", query: "Comment faire ma demande CAF ?" },
    { icon: "🏠", text: "Logement", query: "Comment trouver un logement en France ?" },
    { icon: "🎓", text: "Nos cours", query: "Quels cours proposez-vous ?" },
    { icon: "📞", text: "Support", query: "Comment contacter le support ?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Notification badge quand le chat est fermé et nouveau message IA
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === 'assistant') setHasNewMessage(true);
    }
  }, [messages, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasNewMessage(false);
    setIsMinimized(false);
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  const handleSend = async (messageText) => {
    const userMessage = messageText || input.trim();
    if (!userMessage || isLoading) return;

    if (!userIsPremium && messagesCount >= FREE_MESSAGE_LIMIT) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: `🚫 Vous avez atteint votre limite de ${FREE_MESSAGE_LIMIT} messages gratuits ce mois-ci.\n\n💎 Passez Premium pour des messages illimités et accédez à tous nos cours et certificats !`
      }]);
      return;
    }

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      if (user?.email && user?.id) {
        try {
          await supabase.from('ai_messages').insert({
            user_id: user.id,
            user_email: user.email,
            message_content: userMessage,
          });
          setMessagesCount(prev => prev + 1);
        } catch (dbError) {
          console.log('Erreur stockage message:', dbError);
        }
      }

      const coursesList = coursesContext.slice(0, 20).map(course => {
        const isPrem = course.is_premium ? 'Premium' : 'Gratuit';
        return `- "${course.title}" (${isPrem}) - ${course.short_description || course.description || ''}`;
      }).join('\n');

      const coursesContextText = coursesContext.length > 0
        ? `\n\nCOURS DISPONIBLES :\n${coursesList}\n\nPour accéder aux cours : /courses. Les cours Premium nécessitent un abonnement : /pricing.`
        : '';

      const basePrompt = `Tu es Sophie, l'assistante IA de FrancePrepAcademy, plateforme d'apprentissage pour l'intégration des étudiants internationaux en France.

RÔLE : Experte bienveillante qui aide avec :
1. Démarches administratives (CAF, CPAM, carte Vitale, Visale, titre de séjour, préfecture)
2. Cours et formations disponibles sur la plateforme
3. Culture française et codes sociaux
4. Insertion professionnelle en France
5. Vie quotidienne (logement, banque, santé, transports)

RÈGLES :
- Réponds TOUJOURS en français, claire et concise
- PAS de formatage markdown (**gras**, ##titres) - texte simple avec emojis
- Emojis pertinents : 📚 📋 🎓 💼 🏠 💡 ✅ 💎
- Redirige vers /courses pour les cours, /pricing pour Premium
- Support : contact@franceprepacademy.fr
- Sois empathique envers les difficultés des étudiants internationaux`;

      const QUESTION_PREFIX = "\n\nQuestion : ";
      const QUESTION_SUFFIX = "\n\nRéponds en texte simple avec emojis, sans markdown :";

      let currentBase = basePrompt;
      let currentCourses = coursesContextText;
      let currentQ = userMessage;

      const totalLen = () => currentBase.length + currentCourses.length + QUESTION_PREFIX.length + currentQ.length + QUESTION_SUFFIX.length;

      if (totalLen() > MAX_PROMPT_CHARS) {
        const maxC = Math.max(0, MAX_PROMPT_CHARS - currentBase.length - QUESTION_PREFIX.length - currentQ.length - QUESTION_SUFFIX.length);
        currentCourses = currentCourses.slice(0, maxC);
      }
      if (totalLen() > MAX_PROMPT_CHARS) {
        const maxQ = Math.max(0, MAX_PROMPT_CHARS - currentBase.length - currentCourses.length - QUESTION_PREFIX.length - QUESTION_SUFFIX.length - 10);
        currentQ = currentQ.slice(0, maxQ) + ' [tronqué]';
      }

      const prompt = `${currentBase}${currentCourses}${QUESTION_PREFIX}${currentQ}${QUESTION_SUFFIX}`;

      const response = await InvokeLLM({ prompt, add_context_from_internet: false });
      const cleanedResponse = cleanMarkdown(response);
      setMessages(prev => [...prev, { role: "assistant", content: cleanedResponse }]);

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
            await supabase.from('ai_messages').update({ response_content: cleanedResponse }).eq('id', lastMessage.id);
          }
        } catch (dbError) {
          console.log('Erreur mise à jour réponse:', dbError);
        }
      }
    } catch (error) {
      console.error("Erreur ChatBot:", error);
      let errorMessage = "😔 Désolée, une erreur s'est produite. Veuillez réessayer.";
      if (error.message?.includes('expiré') || error.message?.includes('expired')) {
        errorMessage = "⚠️ Le service IA est temporairement indisponible. Contactez le support : contact@franceprepacademy.fr";
      } else if (error.message?.includes('quota')) {
        errorMessage = "⚠️ Quota API dépassé. Veuillez réessayer dans quelques minutes.";
      }
      setMessages(prev => [...prev, { role: "assistant", content: errorMessage }]);
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

  const isAtLimit = !userIsPremium && messagesCount >= FREE_MESSAGE_LIMIT;

  return (
    <>
      {/* Bouton flottant */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-2xl shadow-purple-500/30 transition-all border border-white/20 backdrop-blur-sm text-white"
            >
              {/* Avatar Sophie */}
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></span>
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="font-semibold text-sm">Sophie — Assistant IA</span>
                <span className="text-white/70 text-[11px]">En ligne · Réponse instantanée</span>
              </div>
              {/* Badge notification */}
              {hasNewMessage && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold"
                >
                  1
                </motion.span>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-1.5rem)]"
          >
            <Card className="flex flex-col shadow-2xl shadow-purple-500/20 border border-purple-100 overflow-hidden rounded-2xl"
              style={{ height: isMinimized ? 'auto' : '580px', maxHeight: 'calc(100vh - 2rem)' }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-4 py-3 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {SOPHIE_AVATAR}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">Sophie</span>
                        {userIsPremium && <Crown className="w-3.5 h-3.5 text-yellow-300" />}
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                        <span className="text-white/70 text-[11px]">En ligne</span>
                      </div>
                      <div className="text-white/60 text-[10px]">Assistante IA · FrancePrep Academy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsMinimized(m => !m)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Barre de limite messages */}
                {!isMinimized && !userIsPremium && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-white/60 text-[11px]">Messages ce mois</span>
                      <Badge className={`text-[10px] px-2 py-0 h-5 border-0 ${messagesCount >= FREE_MESSAGE_LIMIT ? 'bg-red-500/80' : 'bg-white/20'} text-white`}>
                        {messagesCount} / {FREE_MESSAGE_LIMIT}
                      </Badge>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full transition-all ${messagesCount >= FREE_MESSAGE_LIMIT ? 'bg-red-400' : 'bg-emerald-400'}`}
                        style={{ width: `${Math.min(100, (messagesCount / FREE_MESSAGE_LIMIT) * 100)}%` }}
                      />
                    </div>
                    {messagesCount >= FREE_MESSAGE_LIMIT && (
                      <Link to={createPageUrl("Pricing")} className="block mt-2">
                        <button className="w-full py-1.5 px-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 transition-all text-yellow-900 font-semibold text-[11px] flex items-center justify-center gap-1.5">
                          <Crown className="w-3 h-3" />
                          Passer Premium — Messages illimités
                        </button>
                      </Link>
                    )}
                  </div>
                )}
                {!isMinimized && userIsPremium && (
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-yellow-200">
                    <Crown className="w-3 h-3" />
                    <span>Premium · Messages illimités</span>
                  </div>
                )}
              </div>

              {/* Corps du chat */}
              {!isMinimized && (
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50 to-white">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-end gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.role === "assistant" && SOPHIE_AVATAR}
                        <div
                          className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-br-sm"
                              : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Indicateur de frappe */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-end gap-2 justify-start"
                      >
                        {SOPHIE_AVATAR}
                        <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                          <div className="flex gap-1 items-center h-4">
                            {[0, 1, 2].map(i => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-purple-400 rounded-full"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggestions rapides */}
                  {messages.length === 1 && (
                    <div className="px-4 pb-3 flex gap-2 flex-wrap border-t border-gray-100 pt-3">
                      {quickReplies.map((reply, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleSend(reply.query)}
                          className="flex items-center gap-1.5 text-[11px] bg-purple-50 text-purple-700 border border-purple-100 px-3 py-1.5 rounded-full hover:bg-purple-100 hover:border-purple-200 transition-all font-medium"
                        >
                          <span>{reply.icon}</span>
                          <span>{reply.text}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
                    {isAtLimit ? (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                        <AlertCircle className="w-4 h-4 text-amber-600 mx-auto mb-1.5" />
                        <p className="text-xs font-semibold text-amber-900 mb-0.5">Limite atteinte</p>
                        <p className="text-[11px] text-amber-700 mb-2">
                          {FREE_MESSAGE_LIMIT} messages gratuits utilisés ce mois.
                        </p>
                        <Link to={createPageUrl("Pricing")}>
                          <button className="w-full py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity">
                            <Crown className="w-3.5 h-3.5" />
                            Passer Premium
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-1.5 border border-gray-200 focus-within:border-purple-400 focus-within:bg-white transition-all">
                        <Input
                          ref={inputRef}
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Posez votre question..."
                          disabled={isLoading || isCheckingLimit}
                          className="flex-1 border-0 bg-transparent p-0 h-8 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <motion.button
                          onClick={() => handleSend()}
                          disabled={!input.trim() || isLoading || isCheckingLimit}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-purple-500/20"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    )}
                    <p className="text-center text-[10px] text-gray-400 mt-1.5">
                      Sophie · IA FrancePrep Academy
                    </p>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
