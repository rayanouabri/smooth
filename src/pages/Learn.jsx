import React, { useState, useEffect, useRef, useMemo } from "react";
import { me } from "@/api/auth";
import { supabase } from "@/api/supabaseClient";
import { UserProfile, Enrollment, Course, Lesson } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import {
  ChevronLeft, ChevronRight, CheckCircle, Play, FileText, BookOpen,
  Award, Clock, ArrowLeft, Download, Send, X, Sparkles, Bot,
  Loader2, Lightbulb, PanelLeftClose, PanelLeftOpen, GraduationCap,
  Target, MessageSquare, ListChecks, HelpCircle, Zap, Brain,
  ChevronDown, ChevronUp, AlignLeft, Eye, Video
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { isPremium } from "@/utils/premium";
import { InvokeLLM } from "@/api/integrations";
import { motion, AnimatePresence } from "framer-motion";

// ---- Convert YouTube watch URLs to embed URLs ----
function toYouTubeEmbed(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    // Already an embed URL
    if (u.pathname.startsWith('/embed/')) return url;
    // youtube.com/watch?v=XXX
    if (u.hostname.includes('youtube.com') && u.searchParams.has('v')) {
      const videoId = u.searchParams.get('v');
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
    // youtu.be/XXX
    if (u.hostname === 'youtu.be') {
      const videoId = u.pathname.slice(1);
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
  } catch (e) {}
  return url;
}

// ---- Content renderer: splits text and iframes so videos render properly ----
function LessonContentRenderer({ content }) {
  const iframeRegex = /<iframe[\s\S]*?<\/iframe>/gi;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = iframeRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: content.slice(lastIndex, match.index) });
    }
    const srcMatch = match[0].match(/src=["']([^"']+)["']/);
    const titleMatch = match[0].match(/title=["']([^"']+)["']/);
    if (srcMatch) {
      parts.push({ type: "video", src: toYouTubeEmbed(srcMatch[1]), title: titleMatch?.[1] || "Vidéo" });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < content.length) {
    parts.push({ type: "text", value: content.slice(lastIndex) });
  }
  if (parts.length === 0) {
    parts.push({ type: "text", value: content });
  }

  return (
    <div className="space-y-8">
      {parts.map((part, i) => {
        if (part.type === "video") {
          return (
            <div key={i} className="my-8">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-black">
                <div className="aspect-video relative">
                  <iframe
                    src={part.src}
                    title={part.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              {part.title && part.title !== "Vidéo" && (
                <p className="text-center text-sm text-gray-400 mt-3 flex items-center justify-center gap-1.5">
                  <Play className="w-3.5 h-3.5" /> {part.title}
                </p>
              )}
            </div>
          );
        }
        const trimmed = part.value.trim();
        if (!trimmed) return null;
        return (
          <article key={i} className="prose prose-gray prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-extrabold
            prose-h1:text-3xl prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-gray-100
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-[1.85] prose-p:text-[15.5px] prose-p:mb-5
            prose-li:text-gray-600 prose-li:leading-relaxed
            prose-strong:text-gray-900
            prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-purple-400 prose-blockquote:bg-purple-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
            prose-code:text-purple-700 prose-code:bg-purple-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
            prose-img:rounded-xl prose-img:shadow-md
            prose-table:border-collapse prose-th:bg-purple-50 prose-th:text-purple-900 prose-th:font-bold prose-th:text-sm prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-purple-200
            prose-td:text-sm prose-td:px-4 prose-td:py-2.5 prose-td:border prose-td:border-gray-200
          ">
            <ReactMarkdown
              components={{
                h2: ({node, children, ...props}) => (
                  <h2 {...props} className="flex items-center gap-3 text-2xl mt-10 mb-4 font-extrabold text-gray-900">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 inline-flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4.5 h-4.5 text-purple-600" />
                    </span>
                    {children}
                  </h2>
                ),
                h3: ({node, children, ...props}) => (
                  <h3 {...props} className="text-xl mt-8 mb-3 font-extrabold text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-6 rounded-full bg-purple-400 flex-shrink-0" />
                    {children}
                  </h3>
                ),
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-3 marker:text-purple-500 marker:font-bold" {...props} />,
                ul: ({node, ...props}) => <ul className="list-none pl-0 mb-6 space-y-2.5" {...props} />,
                li: ({node, children, ordered, ...props}) => {
                  const isUnordered = !ordered;
                  if (isUnordered) {
                    return (
                      <li className="flex items-start gap-3 text-gray-600 leading-relaxed" {...props}>
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 mt-2 flex-shrink-0" />
                        <span>{children}</span>
                      </li>
                    );
                  }
                  return <li className="text-gray-600 leading-relaxed pl-2" {...props}>{children}</li>;
                },
                blockquote: ({node, children, ...props}) => (
                  <blockquote {...props} className="border-l-4 border-purple-400 bg-purple-50/60 rounded-r-xl py-3 px-5 my-6 not-italic">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700 text-[15px] leading-relaxed">{children}</div>
                    </div>
                  </blockquote>
                ),
                table: ({node, children, ...props}) => (
                  <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full" {...props}>{children}</table>
                  </div>
                ),
              }}
            >
              {trimmed}
            </ReactMarkdown>
          </article>
        );
      })}
    </div>
  );
}

// ---- Lesson AI Assistant ----
function LessonAssistant({ currentLesson, courseName, allLessons, lessonIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  const messagesEndRef = useRef(null);

  const lessonContent = currentLesson?.content || '';

  useEffect(() => {
    setMessages([]);
    setActiveAction(null);
  }, [currentLesson?.id]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: "assistant",
        content: `Je suis là pour t'aider avec "${currentLesson?.title || 'cette leçon'}". Tu peux me poser une question ou utiliser les raccourcis ci-dessous.`
      }]);
    }
  }, [isOpen, currentLesson?.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickActions = [
    { id: "summary", label: "Résume cette leçon", icon: AlignLeft, prompt: `Resume cette lecon en 5 points cles maximum, de maniere claire et concise. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "quiz", label: "Teste mes connaissances", icon: HelpCircle, prompt: `A partir du contenu de cette lecon, genere 3 questions QCM (avec 4 choix et la bonne reponse indiquee) pour tester la comprehension de l'etudiant. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "explain", label: "Explique simplement", icon: Lightbulb, prompt: `Explique le contenu de cette lecon comme si tu parlais a quelqu'un qui decouvre completement le sujet. Utilise des analogies simples et des exemples concrets du quotidien. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "next", label: "Que dois-je retenir ?", icon: ListChecks, prompt: `A partir de cette lecon, donne les 3-5 choses essentielles a retenir absolument, et un conseil pratique pour appliquer ces connaissances dans la vie reelle en France. Contenu : ${lessonContent.substring(0, 4000)}` },
  ];

  const handleAction = async (action) => {
    setActiveAction(action.id);
    setMessages(prev => [...prev, { role: "user", content: action.label }]);
    setIsLoading(true);
    try {
      const response = await InvokeLLM({
        prompt: `Tu es un assistant pedagogique bienveillant de FrancePrepAcademy. L'etudiant suit le cours "${courseName}", lecon "${currentLesson?.title || ''}".
REGLES : Reponds en francais, sois clair, concis et utile. Utilise des emojis pertinents.
${action.prompt}`,
        add_context_from_internet: false
      });
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Désolé, je n'ai pas pu répondre. Réessaie." }]);
    } finally { setIsLoading(false); setActiveAction(null); }
  };

  const handleSend = async () => {
    const msg = input.trim();
    if (!msg || isLoading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: msg }]);
    setIsLoading(true);
    try {
      const response = await InvokeLLM({
        prompt: `Tu es un assistant pedagogique de FrancePrepAcademy. Cours : "${courseName}", lecon : "${currentLesson?.title}".
CONTENU DE LA LECON : ${lessonContent.substring(0, 3000)}
REGLES : Reponds en francais, sois pedagogique, concis (3-5 phrases), donne des exemples concrets si possible.
Question : ${msg}`,
        add_context_from_internet: false
      });
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Désolé, réessaie." }]);
    } finally { setIsLoading(false); }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 z-40 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg shadow-purple-500/25 flex items-center justify-center transition-all group-hover:shadow-xl group-hover:scale-105">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-4 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)]"
            style={{ height: "min(550px, calc(100vh - 2rem))" }}
          >
            <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl border border-purple-200/50 bg-white">
              <div className="bg-gradient-to-r from-violet-600 to-purple-700 text-white px-4 py-3 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><Brain className="w-4 h-4" /></div>
                    <div>
                      <p className="text-sm font-bold leading-tight">Aide à la leçon</p>
                      <p className="text-[10px] text-purple-200 truncate max-w-[200px]">{currentLesson?.title}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-lg hover:bg-white/20 flex items-center justify-center"><X className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="px-3 py-2.5 border-b border-gray-100 flex gap-1.5 overflow-x-auto scrollbar-none flex-shrink-0">
                {quickActions.map(a => (
                  <button
                    key={a.id}
                    onClick={() => handleAction(a)}
                    disabled={isLoading}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all border flex-shrink-0 ${
                      activeAction === a.id
                        ? 'bg-purple-100 text-purple-700 border-purple-200'
                        : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200'
                    }`}
                  >
                    <a.icon className="w-3 h-3" />{a.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0 bg-gradient-to-b from-purple-50/30 to-white">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Brain className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className={`max-w-[80%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-sm"
                        : "bg-white text-gray-700 border border-gray-100 shadow-sm rounded-tl-sm"
                    }`}>
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0"><Brain className="w-3 h-3 text-white" /></div>
                    <div className="bg-white px-3 py-2.5 rounded-xl border border-gray-100 shadow-sm rounded-tl-sm">
                      <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" /><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} /><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} /></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                    placeholder="Pose ta question sur cette leçon..."
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-400 focus:ring-1 focus:ring-purple-100 outline-none text-sm"
                    disabled={isLoading}
                  />
                  <button onClick={handleSend} disabled={!input.trim() || isLoading} className="w-9 h-9 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white flex items-center justify-center disabled:opacity-40 flex-shrink-0"><Send className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Learn() {
  const { t } = useLanguage();
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [canAccess, setCanAccess] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');
  const lessonId = urlParams.get('lessonId');
  const queryClient = useQueryClient();

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const el = contentRef.current;
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight - window.innerHeight;
      const scrolled = -rect.top + 200;
      const pct = Math.min(100, Math.max(0, (scrolled / total) * 100));
      setReadingProgress(pct);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { loadUserAndEnrollment(); }, [courseId]);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadUserAndEnrollment = async () => {
    try {
      const userData = await me();
      setUser(userData);
      if (userData?.id) {
        const { data: profile } = await supabase.from('user_profiles').select('*').eq('id', userData.id).single();
        setUserProfile(profile || userData);
      }
      const enrollments = await Enrollment.filter({ user_email: userData.email, course_id: courseId });
      if (enrollments.length > 0) setEnrollment(enrollments[0]);
    } catch (error) { console.error("Error loading user:", error); }
  };

  const { data: course, isLoading: courseLoading, isError: courseError } = useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      if (!courseId) return null;
      const courses = await Course.filter({ id: courseId });
      return courses?.[0] || null;
    },
    enabled: !!courseId, retry: 2,
  });

  useEffect(() => {
    if (course && userProfile !== null) {
      if (!course.is_premium) { setCanAccess(true); return; }
      setCanAccess(isPremium(userProfile));
    } else if (course && !userProfile) {
      setCanAccess(!course.is_premium);
    }
  }, [course, userProfile]);

  const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: async () => {
      const l = await Lesson.filter({ course_id: courseId }, 'order');
      return l.sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    enabled: !!courseId,
  });

  const { data: currentLesson, isLoading: lessonLoading } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: async () => { const d = await Lesson.filter({ id: lessonId }); return d[0]; },
    enabled: !!lessonId,
  });

  const markCompleteMutation = useMutation({
    mutationFn: async () => {
      const cl = [...(enrollment.completed_lessons || [])];
      if (!cl.includes(lessonId)) cl.push(lessonId);
      const pct = (cl.length / lessons.length) * 100;
      return Enrollment.update(enrollment.id, { completed_lessons: cl, progress_percentage: pct, last_accessed: new Date().toISOString(), completed: pct === 100 });
    },
    onSuccess: (u) => { setEnrollment(u); queryClient.invalidateQueries({ queryKey: ['enrollments'] }); },
  });

  const currentIndex = lessons.findIndex(l => l.id === lessonId);
  const nextLesson = lessons[currentIndex + 1];
  const prevLesson = lessons[currentIndex - 1];
  const isCompleted = enrollment?.completed_lessons?.includes(lessonId);
  const progressPercentage = enrollment?.progress_percentage || 0;
  const completedCount = enrollment?.completed_lessons?.length || 0;

  const lessonsByModule = lessons.reduce((acc, lesson) => {
    const m = lesson.module_number || 1;
    if (!acc[m]) acc[m] = [];
    acc[m].push(lesson);
    return acc;
  }, {});

  const handleNav = (lid) => {
    navigate(createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${lid}`);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Content & video from correct DB fields
  const lessonContent = currentLesson?.content || '';
  const videoUrl = currentLesson?.video_url;
  const embedUrl = toYouTubeEmbed(videoUrl);
  const wordCount = lessonContent.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // -- Guard states --
  if (courseLoading || lessonsLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="text-center"><div className="relative w-16 h-16 mx-auto mb-4"><div className="absolute inset-0 rounded-full border-4 border-purple-100" /><div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" /><BookOpen className="absolute inset-0 m-auto w-7 h-7 text-purple-600" /></div><p className="text-gray-700 font-semibold">{t('learn.loadingCourse')}</p></div>
    </div>
  );

  if ((courseError && !courseLoading) || (!course && !courseLoading)) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-red-50"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" /><h2 className="text-xl font-bold text-gray-900 mb-2">{t('learn.courseNotFound')}</h2><Link to={createPageUrl("Courses")}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">{t('learn.backToCourses')}</Button></Link></CardContent></Card></div>
  );

  if (course && !enrollment) return (
    <div className="min-h-screen flex items-center justify-center p-4"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><GraduationCap className="w-12 h-12 text-purple-300 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">Inscription requise</h2><Link to={createPageUrl("CourseDetail") + `?id=${courseId}`}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">Voir le cours</Button></Link></CardContent></Card></div>
  );

  if (lessons.length === 0) return (
    <div className="min-h-screen flex items-center justify-center p-4"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">{t('learn.noLessons')}</h2><Link to={createPageUrl("Courses")}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">{t('learn.backToCourses')}</Button></Link></CardContent></Card></div>
  );

  if (lessonLoading || !currentLesson) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50"><div className="text-center"><div className="relative w-12 h-12 mx-auto mb-3"><div className="absolute inset-0 rounded-full border-4 border-purple-100" /><div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" /></div><p className="text-gray-600">{t('learn.loadingLesson')}</p></div></div>
  );

  if (!canAccess) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-amber-50"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><Award className="w-12 h-12 text-amber-500 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">{t('learn.accessRestricted')}</h2><p className="text-gray-500 mb-6">{t('learn.accessRestrictedDesc')}</p><Link to={createPageUrl("Pricing")}><Button className="w-full bg-amber-500 hover:bg-amber-600 rounded-xl h-11">{t('learn.discoverSubscriptions')}</Button></Link></CardContent></Card></div>
  );

  const hasContent = lessonContent.trim().length > 0;
  const hasVideo = !!embedUrl;

  return (
    <div className="min-h-screen bg-gray-50/80 flex flex-col lg:flex-row overflow-x-hidden">
      {/* ===== READING PROGRESS BAR ===== */}
      <div className="fixed top-14 sm:top-16 left-0 right-0 z-30">
        <div className="h-[3px] bg-gray-200/60">
          <motion.div
            className="h-full rounded-r-full relative"
            style={{
              width: `${readingProgress}%`,
              background: 'linear-gradient(90deg, #7c3aed, #a855f7, #d946ef)',
            }}
            initial={false}
            animate={{ width: `${readingProgress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-r-full" style={{
              background: 'linear-gradient(90deg, #7c3aed, #a855f7, #d946ef)',
              filter: 'blur(4px)',
              opacity: 0.5,
            }} />
          </motion.div>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden fixed top-[72px] left-3 z-30 w-10 h-10 rounded-xl bg-white shadow-lg border border-gray-200 flex items-center justify-center">
        {sidebarOpen ? <PanelLeftClose className="w-5 h-5 text-gray-600" /> : <PanelLeftOpen className="w-5 h-5 text-gray-600" />}
      </button>

      {sidebarOpen && <div className="lg:hidden fixed inset-0 bg-black/30 z-20 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />}

      {/* ===== SIDEBAR ===== */}
      <aside className={`fixed lg:sticky top-0 left-0 z-20 h-screen bg-white border-r border-gray-100 overflow-y-auto transition-all duration-300 shadow-lg lg:shadow-none ${sidebarOpen ? 'w-[300px] lg:w-72 translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:min-w-0 lg:overflow-hidden lg:border-0 lg:p-0'}`}>
        {/* Sidebar header with course info */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
          <div className="p-4 pb-3">
            <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`} className="block group">
              <div className="flex items-center gap-2 text-purple-200 text-[10px] font-medium mb-1 group-hover:text-white transition-colors">
                <ArrowLeft className="w-3 h-3" />
                Retour au cours
              </div>
              <h2 className="text-sm font-bold group-hover:underline line-clamp-2 leading-snug">{course.title}</h2>
            </Link>
          </div>
          {/* Course progress */}
          <div className="mx-4 mb-4 bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-purple-200 font-medium">Progression du cours</span>
              <span className="text-lg font-extrabold tabular-nums">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #34d399, #10b981, #059669)' }}
                initial={false}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-purple-200">{completedCount} / {lessons.length} leçons</span>
              {progressPercentage === 100 && <Badge className="bg-emerald-500/30 text-emerald-200 border-0 text-[9px] px-1.5 py-0">Terminé !</Badge>}
            </div>
          </div>
        </div>

        {/* Lesson list */}
        <div className="p-2 pb-8">
          {Object.entries(lessonsByModule).sort(([a], [b]) => Number(a) - Number(b)).map(([moduleNum, mLessons]) => (
            <div key={moduleNum} className="mb-2">
              <div className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center">
                  <BookOpen className="w-3 h-3 text-purple-500" />
                </div>
                <span>Module {moduleNum}</span>
              </div>
              <div className="space-y-0.5">
                {mLessons.map((lesson, idx) => {
                  const isCurrent = lesson.id === lessonId;
                  const done = enrollment?.completed_lessons?.includes(lesson.id);
                  return (
                    <button key={lesson.id} onClick={() => handleNav(lesson.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all text-sm group ${
                        isCurrent ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-purple-500/20'
                        : done ? 'bg-emerald-50/80 hover:bg-emerald-100/80'
                        : 'hover:bg-gray-50'
                      }`}>
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isCurrent ? 'bg-white/20'
                          : done ? 'bg-emerald-100'
                          : 'bg-gray-100 group-hover:bg-purple-100'
                        }`}>
                          {done && !isCurrent ? <CheckCircle className="w-4 h-4 text-emerald-600" /> :
                            lesson.video_url ? <Play className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400 group-hover:text-purple-500'}`} /> :
                            <FileText className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400 group-hover:text-purple-500'}`} />
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-[13px] font-medium truncate block leading-snug ${
                            isCurrent ? 'text-white' : done ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                            {lesson.title || `Leçon ${idx + 1}`}
                          </span>
                          {lesson.duration_minutes && (
                            <span className={`text-[10px] flex items-center gap-0.5 mt-0.5 ${isCurrent ? 'text-purple-200' : 'text-gray-400'}`}>
                              <Clock className="w-2.5 h-2.5" />{lesson.duration_minutes} min
                            </span>
                          )}
                        </div>
                        {isCurrent && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 min-w-0" ref={contentRef}>
        {/* Lesson hero header */}
        <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
          </div>

          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-8 relative">
            <div className="flex items-center justify-between mb-4">
              <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`}>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 -ml-2 gap-1.5">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Retour</span>
                </Button>
              </Link>
              <div className="flex items-center gap-3 text-xs text-purple-200">
                {lessonContent.trim() && (
                  <>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />~{readingTime} min</span>
                    {hasVideo && (
                      <>
                        <span className="text-purple-400">·</span>
                        <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5" />Vidéo</span>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <Badge className="bg-white/15 text-white border-0 text-xs font-semibold px-2.5 py-0.5 backdrop-blur-sm">
                Module {currentLesson.module_number || 1}
              </Badge>
              <Badge className="bg-white/10 text-white/80 border-0 text-xs px-2.5 py-0.5">
                Leçon {currentIndex + 1}/{lessons.length}
              </Badge>
              {currentLesson.duration_minutes && (
                <Badge className="bg-white/10 text-white/80 border-0 text-xs gap-1 px-2.5 py-0.5">
                  <Clock className="w-3 h-3" />{currentLesson.duration_minutes} min
                </Badge>
              )}
              {isCompleted && (
                <Badge className="bg-emerald-500/20 text-emerald-200 border-0 text-xs gap-1 px-2.5 py-0.5">
                  <CheckCircle className="w-3 h-3" />Terminée
                </Badge>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
              {currentLesson.title || t('learn.lessonWithoutTitle')}
            </h1>
            {currentLesson.description && (
              <p className="text-base text-purple-200 mt-2 leading-relaxed max-w-2xl">{currentLesson.description}</p>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-6 lg:py-10">
          {/* ===== VIDEO PLAYER ===== */}
          {hasVideo && (
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-black">
                <div className="aspect-video relative">
                  <iframe
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    loading="lazy"
                    title={currentLesson.title}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ===== LESSON CONTENT ===== */}
          {hasContent && (
            <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden mb-8">
              <CardContent className="p-0">
                <div className="px-6 sm:px-10 lg:px-14 py-8 sm:py-10">
                  <LessonContentRenderer content={lessonContent} />
                </div>
              </CardContent>
            </Card>
          )}

          {/* No content at all */}
          {!hasContent && !hasVideo && (
            <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden mb-8">
              <CardContent className="p-16 text-center">
                <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400">{t('learn.contentInPreparation')}</h3>
              </CardContent>
            </Card>
          )}

          {/* ===== LESSON NAVIGATION ===== */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
            <Button
              variant="outline"
              onClick={() => prevLesson && handleNav(prevLesson.id)}
              disabled={!prevLesson}
              className="h-12 rounded-xl gap-2 text-gray-600 border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="truncate max-w-[150px]">{prevLesson ? prevLesson.title : t('learn.previousLesson')}</span>
            </Button>

            <div className="flex gap-3 justify-center">
              {!isCompleted ? (
                <Button
                  onClick={() => markCompleteMutation.mutate()}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold h-12 rounded-xl px-6 gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:shadow-xl"
                  disabled={markCompleteMutation.isPending}
                >
                  {markCompleteMutation.isPending
                    ? <><Loader2 className="w-4 h-4 animate-spin" />{t('learn.saving')}</>
                    : <><CheckCircle className="w-5 h-5" />{t('learn.markAsCompleted')}</>
                  }
                </Button>
              ) : (
                <div className="flex items-center gap-2 px-5 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200">
                  <CheckCircle className="w-5 h-5" />
                  Leçon terminée
                </div>
              )}
            </div>

            <Button
              onClick={() => nextLesson && handleNav(nextLesson.id)}
              disabled={!nextLesson}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold h-12 rounded-xl gap-2 shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl"
            >
              <span className="truncate max-w-[150px]">{nextLesson ? nextLesson.title : t('learn.nextLesson')}</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* ===== COURSE COMPLETION CARD ===== */}
          {progressPercentage === 100 && !enrollment.certificate_issued && (
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{t('learn.congratulations')}</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">{t('learn.downloadCertificate')}</p>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold h-13 px-8 rounded-xl gap-2 shadow-lg">
                  <Award className="w-5 h-5" />{t('learn.downloadMyCertificate')}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* AI Assistant */}
      <LessonAssistant
        currentLesson={currentLesson}
        courseName={course?.title || ''}
        allLessons={lessons}
        lessonIndex={currentIndex}
      />
    </div>
  );
}
