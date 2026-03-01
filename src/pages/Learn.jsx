import React, { useState, useEffect, useRef } from "react";
import { me } from "@/api/auth";
import { supabase } from "@/api/supabaseClient";
import { UserProfile, Enrollment, Course, Lesson } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ReactMarkdown from "react-markdown";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Play,
  FileText,
  BookOpen,
  Award,
  Clock,
  ArrowLeft,
  ExternalLink,
  Download,
  Video as VideoIcon,
  MessageCircle,
  Send,
  X,
  Sparkles,
  Bot,
  ChevronDown,
  ChevronUp,
  Loader2,
  Lightbulb,
  PanelLeftClose,
  PanelLeftOpen,
  GraduationCap,
  Target
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { isPremium } from "@/utils/premium";
import { InvokeLLM } from "@/api/integrations";
import { motion, AnimatePresence } from "framer-motion";

function LessonAIChat({ currentLesson, courseName, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: "assistant",
        content: `Salut ! Je suis ton assistant pour cette lecon. Pose-moi toutes tes questions sur "${currentLesson?.title || 'cette lecon'}" et je t'aiderai a comprendre.`
      }]);
    }
  }, [isOpen, currentLesson]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const lessonContent = currentLesson?.content_text || currentLesson?.content || '';
      const response = await InvokeLLM({
        prompt: `Tu es un assistant pedagogique de FrancePrepAcademy. L'etudiant suit le cours "${courseName}" et est sur la lecon "${currentLesson?.title || ''}".

CONTENU DE LA LECON :
${lessonContent.substring(0, 3000)}

REGLES :
- Reponds en francais de maniere claire et bienveillante
- Reste concentre sur le contenu de la lecon
- Donne des exemples concrets quand possible
- Si la question est hors sujet, redirige poliment vers le contenu de la lecon
- Utilise un ton amical et encourageant
- Sois concis (3-5 phrases max)

Question de l'etudiant : ${userMessage}`,
        add_context_from_internet: false
      });

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Desole, je n'ai pas pu traiter ta question. Reessaie dans quelques instants."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 group"
          >
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 shadow-xl shadow-purple-500/30 flex items-center justify-center transition-all group-hover:shadow-2xl group-hover:shadow-purple-500/40 group-hover:scale-105">
                <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
              <div className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Poser une question
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* AI Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)] flex flex-col"
            style={{ height: "min(520px, calc(100vh - 2rem))" }}
          >
            <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl border border-purple-200/50 bg-white">
              {/* Header */}
              <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white p-4 flex-shrink-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Assistant IA</h3>
                      <p className="text-[11px] text-purple-200 truncate max-w-[180px]">
                        {currentLesson?.title || "Aide en direct"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-purple-50/50 to-white min-h-0">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    <div className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-md"
                        : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-md"
                    }`}>
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl border border-gray-100 shadow-sm rounded-tl-md">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick suggestions */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                  {["Explique-moi ce sujet simplement", "Donne-moi un exemple concret", "Quels sont les points cles ?"].map((q, i) => (
                    <button
                      key={i}
                      onClick={() => { setInput(q); }}
                      className="text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full hover:bg-purple-100 transition-colors border border-purple-100"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                    placeholder="Pose ta question..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-sm transition-all"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-40 disabled:hover:shadow-none flex-shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
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
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');
  const lessonId = urlParams.get('lessonId');
  const queryClient = useQueryClient();

  useEffect(() => {
    loadUserAndEnrollment();
  }, [courseId]);

  // Auto-collapse sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
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
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', userData.id)
          .single();

        if (profile) {
          setUserProfile(profile);
        } else {
          setUserProfile(userData);
        }
      }

      const enrollments = await Enrollment.filter({
        user_email: userData.email,
        course_id: courseId
      });
      if (enrollments.length > 0) {
        setEnrollment(enrollments[0]);
      }
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  const { data: course, isLoading: courseLoading, isError: courseError } = useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      if (!courseId) return null;
      const courses = await Course.filter({ id: courseId });
      if (!courses || courses.length === 0) return null;
      return courses[0];
    },
    enabled: !!courseId,
    retry: 2,
    retryDelay: 1000,
    throwOnError: false,
  });

  useEffect(() => {
    if (course && userProfile !== null) {
      checkAccess();
    } else if (course && !userProfile) {
      setCanAccess(!course.is_premium);
    }
  }, [course, userProfile]);

  const checkAccess = () => {
    if (!course.is_premium) {
      setCanAccess(true);
      return;
    }
    const userIsPremium = isPremium(userProfile);
    setCanAccess(userIsPremium);
  };

  const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: async () => {
      try {
        const filteredLessons = await Lesson.filter({ course_id: courseId }, 'order');
        return filteredLessons.sort((a, b) => (a.order || 0) - (b.order || 0));
      } catch (error) {
        return [];
      }
    },
    enabled: !!courseId,
  });

  const { data: currentLesson, isLoading: lessonLoading } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: async () => {
      try {
        const lessonData = await Lesson.filter({ id: lessonId });
        return lessonData[0];
      } catch (error) {
        return null;
      }
    },
    enabled: !!lessonId,
  });

  const markCompleteMutation = useMutation({
    mutationFn: async () => {
      const completedLessons = enrollment.completed_lessons || [];
      if (!completedLessons.includes(lessonId)) {
        completedLessons.push(lessonId);
      }
      const progressPercentage = (completedLessons.length / lessons.length) * 100;
      const completed = progressPercentage === 100;

      return Enrollment.update(enrollment.id, {
        completed_lessons: completedLessons,
        progress_percentage: progressPercentage,
        last_accessed: new Date().toISOString(),
        completed: completed
      });
    },
    onSuccess: (updatedEnrollment) => {
      setEnrollment(updatedEnrollment);
      queryClient.invalidateQueries({ queryKey: ['enrollments'] });
    },
  });

  const currentIndex = lessons.findIndex(l => l.id === lessonId);
  const nextLesson = lessons[currentIndex + 1];
  const prevLesson = lessons[currentIndex - 1];
  const isCompleted = enrollment?.completed_lessons?.includes(lessonId);
  const progressPercentage = enrollment?.progress_percentage || 0;

  const lessonsByModule = lessons.reduce((acc, lesson) => {
    const module = lesson.module_number || 1;
    if (!acc[module]) acc[module] = [];
    acc[module].push(lesson);
    return acc;
  }, {});

  const handleNext = () => {
    if (nextLesson) {
      navigate(createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${nextLesson.id}`);
    }
  };

  const handlePrev = () => {
    if (prevLesson) {
      navigate(createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${prevLesson.id}`);
    }
  };

  const handleLessonClick = (lid) => {
    navigate(createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${lid}`);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  // --- Loading / Error / Guard states ---
  if (courseLoading || lessonsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-purple-100" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" />
            <BookOpen className="absolute inset-0 m-auto w-8 h-8 text-purple-600" />
          </div>
          <p className="text-lg font-semibold text-gray-700">{t('learn.loadingCourse')}</p>
          <p className="text-sm text-gray-400 mt-1">Preparation de votre contenu...</p>
        </div>
      </div>
    );
  }

  if (courseError && !courseLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-red-50 p-4">
        <Card className="max-w-md w-full border-0 shadow-2xl">
          <CardContent className="p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
              <X className="w-10 h-10 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Erreur de chargement</h2>
            <p className="text-gray-500 mb-8">Impossible de charger ce cours. Veuillez reessayer plus tard.</p>
            <Link to={createPageUrl("Courses")}>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 h-12 text-base rounded-xl">
                {t('learn.backToCourses')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!course && !courseLoading && !courseError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <Card className="max-w-md w-full border-0 shadow-2xl">
          <CardContent className="p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-50 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('learn.courseNotFound')}</h2>
            <p className="text-gray-500 mb-8">{t('learn.courseNotFoundDesc')}</p>
            <Link to={createPageUrl("Courses")}>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 h-12 text-base rounded-xl">
                {t('learn.backToCourses')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (course && !enrollment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-purple-50 p-4">
        <Card className="max-w-md w-full border-0 shadow-2xl">
          <CardContent className="p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-purple-50 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Inscription requise</h2>
            <p className="text-gray-500 mb-8">Vous devez vous inscrire a ce cours pour y acceder.</p>
            <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`}>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 h-12 text-base rounded-xl">
                Voir les details du cours
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (lessons.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <Card className="max-w-md w-full border-0 shadow-2xl">
          <CardContent className="p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <FileText className="w-10 h-10 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('learn.noLessons')}</h2>
            <p className="text-gray-500 mb-8">{t('learn.noLessonsDesc')}</p>
            <Link to={createPageUrl("Courses")}>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 h-12 text-base rounded-xl">
                {t('learn.backToCourses')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (lessonLoading || !currentLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-purple-100" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" />
          </div>
          <p className="text-lg font-semibold text-gray-700">{t('learn.loadingLesson')}</p>
        </div>
      </div>
    );
  }

  if (!canAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-amber-50 p-4">
        <Card className="max-w-md w-full border-0 shadow-2xl">
          <CardContent className="p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-amber-50 flex items-center justify-center">
              <Award className="w-10 h-10 text-amber-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('learn.accessRestricted')}</h2>
            <p className="text-gray-500 mb-8">{t('learn.accessRestrictedDesc')}</p>
            <div className="space-y-3">
              <Link to={createPageUrl("Pricing")}>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 h-12 text-base rounded-xl text-white">
                  {t('learn.discoverSubscriptions')}
                </Button>
              </Link>
              <Link to={createPageUrl("Courses")}>
                <Button variant="outline" className="w-full h-12 text-base rounded-xl">
                  {t('learn.backToCourses')}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const lessonContent = currentLesson.content_text || currentLesson.content || '';
  const hasContent = lessonContent.trim().length > 0 || currentLesson.content_url;
  const completedCount = enrollment?.completed_lessons?.length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/30 flex flex-col lg:flex-row overflow-x-hidden">

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-[72px] left-3 z-30 w-10 h-10 rounded-xl bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        {sidebarOpen ? <PanelLeftClose className="w-5 h-5 text-gray-600" /> : <PanelLeftOpen className="w-5 h-5 text-gray-600" />}
      </button>

      {/* Sidebar Overlay on mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-20 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-20 h-screen
        w-[300px] lg:w-80
        bg-white/95 backdrop-blur-xl border-r border-gray-200/80
        overflow-y-auto
        transition-transform duration-300 ease-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:min-w-0 lg:overflow-hidden lg:border-0'}
        scrollbar-thin
      `}>
        {/* Sidebar Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white p-5">
          <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`} className="block group">
            <h2 className="text-base font-bold group-hover:underline line-clamp-2 mb-4 leading-snug">
              {course.title}
            </h2>
          </Link>

          {/* Progress */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-purple-100 text-xs font-medium">{t('learn.overallProgress')}</span>
              <span className="font-bold text-lg tabular-nums">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-green-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-[11px] text-purple-200 mt-2">
              {completedCount} / {lessons.length} {t('learn.lessonsCompleted')}
            </p>
          </div>
        </div>

        {/* Lesson List */}
        <div className="p-3">
          {Object.entries(lessonsByModule).sort(([a], [b]) => Number(a) - Number(b)).map(([moduleNum, moduleLessons]) => (
            <div key={moduleNum} className="mb-4">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-3 h-3 text-purple-600" />
                </div>
                <span>{t('learn.module')} {moduleNum}</span>
              </div>
              <div className="space-y-1">
                {moduleLessons.map((lesson, idx) => {
                  const isCurrent = lesson.id === lessonId;
                  const isLessonDone = enrollment.completed_lessons?.includes(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                        isCurrent
                          ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-purple-500/20'
                          : isLessonDone
                          ? 'bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60'
                          : 'hover:bg-gray-50 border border-transparent hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isCurrent ? 'bg-white/20' :
                          isLessonDone ? 'bg-emerald-100' : 'bg-gray-100 group-hover:bg-gray-200'
                        }`}>
                          {isLessonDone && !isCurrent ? (
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <>
                              {lesson.content_type === "video" && <Play className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400'}`} />}
                              {lesson.content_type === "text" && <FileText className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400'}`} />}
                              {lesson.content_type === "quiz" && <Target className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400'}`} />}
                              {!lesson.content_type && <BookOpen className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400'}`} />}
                            </>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-sm font-medium truncate block ${
                            isCurrent ? 'text-white' :
                            isLessonDone ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                            {lesson.title || `${t('learn.lesson')} ${idx + 1}`}
                          </span>
                          {lesson.duration_minutes && (
                            <span className={`text-[11px] flex items-center gap-1 mt-0.5 ${
                              isCurrent ? 'text-purple-200' : 'text-gray-400'
                            }`}>
                              <Clock className="w-3 h-3" />
                              {lesson.duration_minutes} min
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* AI Agent Promo */}
        <div className="p-3 mt-2">
          <Link to={createPageUrl("AIAgent")}>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-purple-200/60 rounded-xl p-4 hover:shadow-md transition-all group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Assistant IA</p>
                  <p className="text-[11px] text-gray-500">Roadmap personnalisee</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-8">

          {/* Breadcrumb + Back */}
          <div className="flex items-center gap-3 mb-6">
            <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`}>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 -ml-2 gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{t('learn.backToCourse')}</span>
              </Button>
            </Link>
          </div>

          {/* Lesson Header */}
          <div className="mb-8">
            <div className="flex items-center flex-wrap gap-2 mb-4">
              <Badge className="bg-purple-100 text-purple-700 border-0 font-semibold px-3 py-1">
                {t('learn.module')} {currentLesson.module_number || 1}
              </Badge>
              <Badge variant="outline" className="text-gray-500 font-medium px-3 py-1">
                {t('learn.lesson')} {currentLesson.lesson_number || currentIndex + 1}
              </Badge>
              {currentLesson.duration_minutes && (
                <Badge variant="outline" className="text-gray-400 font-medium px-3 py-1 gap-1">
                  <Clock className="w-3 h-3" />
                  {currentLesson.duration_minutes} min
                </Badge>
              )}
              {isCompleted && (
                <Badge className="bg-emerald-100 text-emerald-700 border-0 font-semibold px-3 py-1 gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {t('learn.completed')}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 leading-tight tracking-tight">
              {currentLesson.title || t('learn.lessonWithoutTitle')}
            </h1>
            {currentLesson.description && (
              <p className="text-lg text-gray-500 mt-3 leading-relaxed max-w-2xl">
                {currentLesson.description}
              </p>
            )}
          </div>

          {/* Mini Progress Bar */}
          <div className="mb-8 bg-white rounded-2xl border border-gray-200/80 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">{t('learn.overallProgress')}</span>
              <span className="text-sm font-bold text-purple-600 tabular-nums">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-700"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {completedCount} / {lessons.length} {t('common.lessons')} {t('learn.lessonsCompleted')}
            </p>
          </div>

          {/* Lesson Content Card */}
          <div className="mb-8">
            <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Video Content */}
                {currentLesson.content_type === "video" && currentLesson.content_url && (
                  <div className="aspect-video bg-gray-950 relative">
                    <iframe
                      src={currentLesson.content_url}
                      className="w-full h-full"
                      allowFullScreen
                      title={currentLesson.title}
                    />
                  </div>
                )}

                {/* Text/Markdown Content */}
                {hasContent && (
                  <div className="p-6 sm:p-8 lg:p-12">
                    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-purple-600 prose-strong:text-gray-900 prose-code:text-purple-600 prose-code:bg-purple-50 prose-blockquote:border-purple-400">
                      {lessonContent.trim() ? (
                        <ReactMarkdown
                          components={{
                            h1: ({node, ...props}) => <h1 className="text-3xl font-extrabold mb-6 text-gray-900 border-b border-gray-100 pb-4" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-4 mt-10 text-gray-900" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-3 mt-8 text-gray-800" {...props} />,
                            p: ({node, ...props}) => <p className="mb-4 text-gray-600 leading-[1.8] text-[15px]" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
                            li: ({node, ...props}) => <li className="text-gray-600 leading-relaxed" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                            code: ({node, ...props}) => <code className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-sm font-mono" {...props} />,
                            blockquote: ({node, ...props}) => (
                              <blockquote className="border-l-4 border-purple-400 pl-5 py-2 my-6 bg-purple-50/50 rounded-r-xl" {...props} />
                            ),
                            a: ({node, ...props}) => <a className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 underline-offset-2" target="_blank" rel="noopener noreferrer" {...props} />,
                          }}
                        >
                          {lessonContent}
                        </ReactMarkdown>
                      ) : (
                        <div className="text-center py-16">
                          <FileText className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                          <p className="text-gray-400">{t('learn.contentInPreparationDesc')}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* PDF Content */}
                {currentLesson.content_type === "pdf" && currentLesson.content_url && (
                  <div className="p-12 text-center bg-gradient-to-br from-purple-50 to-indigo-50">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <FileText className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{t('learn.pdfDocument')}</h3>
                    <p className="text-gray-500 mb-8">{t('learn.pdfDocumentDesc')}</p>
                    <a href={currentLesson.content_url} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 h-12 px-8 rounded-xl">
                        <Download className="w-5 h-5 mr-2" />
                        {t('learn.downloadDocument')}
                      </Button>
                    </a>
                  </div>
                )}

                {/* No Content Fallback */}
                {!hasContent && currentLesson.content_type !== "video" && currentLesson.content_type !== "pdf" && (
                  <div className="p-16 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-purple-50 flex items-center justify-center">
                      <BookOpen className="w-10 h-10 text-purple-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-700">{t('learn.contentInPreparation')}</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      {t('learn.contentInPreparationDesc')}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-8 gap-3">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={!prevLesson}
              className="h-12 rounded-xl border-gray-200 hover:border-gray-300 gap-2 text-gray-600"
            >
              <ChevronLeft className="w-4 h-4" />
              {t('learn.previousLesson')}
            </Button>

            <div className="flex gap-3 flex-1 sm:flex-none justify-center">
              {!isCompleted && (
                <Button
                  onClick={() => markCompleteMutation.mutate()}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold h-12 rounded-xl px-6 gap-2 shadow-lg shadow-emerald-500/20"
                  disabled={markCompleteMutation.isPending}
                >
                  {markCompleteMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t('learn.saving')}
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {t('learn.markAsCompleted')}
                    </>
                  )}
                </Button>
              )}
            </div>

            <Button
              onClick={handleNext}
              disabled={!nextLesson}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold h-12 rounded-xl gap-2 shadow-lg shadow-purple-500/20"
            >
              {t('learn.nextLesson')}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Completion Certificate */}
          {progressPercentage === 100 && !enrollment.certificate_issued && (
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNTk1MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4SDI0djEyaDEyVjE4ek0xMiAwSDB2MTJoMTJWMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
              <CardContent className="p-8 sm:p-12 text-center relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl shadow-orange-500/30 animate-bounce">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                  {t('learn.congratulations')}
                </h3>
                <p className="text-lg text-gray-600 mb-2">{t('learn.courseCompleted')}</p>
                <p className="text-gray-500 mb-8">{t('learn.downloadCertificate')}</p>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl shadow-orange-500/30 gap-2">
                  <Award className="w-6 h-6" />
                  {t('learn.downloadMyCertificate')}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* AI Chat Component */}
      <LessonAIChat
        currentLesson={currentLesson}
        courseName={course?.title || ''}
        user={user}
      />
    </div>
  );
}
