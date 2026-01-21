import React, { useState, useEffect } from "react";
import { isAuthenticated as checkAuthStatus, me, redirectToLogin } from "@/api/auth";
import { supabase } from "@/api/supabaseClient";
import { UserProfile, Course, Lesson, Enrollment } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  CheckCircle,
  Play,
  FileText,
  Award,
  Globe,
  Lock,
  Unlock,
  Zap,
  Target
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import ChatBot from "../components/ChatBot";
import { isPremium } from "@/utils/premium";

export default function CourseDetail() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [canAccess, setCanAccess] = useState(false);
  const navigate = useNavigate();
  
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id');
  const queryClient = useQueryClient();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const authenticated = await checkAuthStatus();
    setIsAuthenticated(authenticated);
    if (authenticated) {
      // Utiliser me() pour obtenir le profil avec is_premium
      const userData = await me();
      setUser(userData);
      
      // Charger le profil depuis la base de données pour être sûr
      if (userData?.id) {
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', userData.id)
          .single();
        
        if (profile) {
          setUserProfile(profile);
          console.log('CourseDetail - Profile loaded, is_premium:', profile.is_premium);
        } else {
          // Fallback: utiliser les données de me()
          setUserProfile(userData);
        }
      }
    }
  };

  const { data: course, isLoading, isError, error } = useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      if (!courseId) return null;
      const courses = await Course.filter({ id: courseId });
      if (!courses || courses.length === 0) {
        return null; // Retourner null au lieu de undefined pour éviter les erreurs
      }
      return courses[0];
    },
    enabled: !!courseId,
    retry: 2,
    retryDelay: 1000,
    // Ne pas afficher d'erreur pendant le chargement initial
    throwOnError: false,
  });

  const { data: lessons = [] } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: () => Lesson.filter({ course_id: courseId }, 'order'),
    enabled: !!courseId,
  });

  useEffect(() => {
    if (user && courseId && course) {
      checkEnrollment();
      checkCourseAccess();
    }
  }, [user, courseId, course, userProfile]);

  const checkEnrollment = async () => {
    const enrollments = await Enrollment.filter({
      user_email: user.email,
      course_id: courseId
    });
    if (enrollments.length > 0) {
      setEnrollment(enrollments[0]);
    }
  };

  const checkCourseAccess = () => {
    // Si le cours n'est pas premium, il est accessible à tous
    if (!course.is_premium) {
      setCanAccess(true);
      return;
    }

    // Si le cours est premium, vérifier si l'utilisateur a un abonnement Premium
    const userIsPremium = isPremium(userProfile);
    
    console.log('CourseDetail - checkCourseAccess:', {
      courseIsPremium: course.is_premium,
      isPremium: isPremium,
      userProfile: userProfile,
      is_premium: userProfile?.is_premium,
      subscription_status: userProfile?.subscription_status
    });
    
    if (userIsPremium) {
      setCanAccess(true);
    } else {
      setCanAccess(false);
    }
  };

  const enrollMutation = useMutation({
    mutationFn: () => Enrollment.create({
      user_email: user.email,
      course_id: courseId,
      progress_percentage: 0,
      completed_lessons: [],
      last_accessed: new Date().toISOString(),
      time_spent_minutes: 0,
      completed: false,
      certificate_issued: false
    }),
    onSuccess: (newEnrollment) => {
      setEnrollment(newEnrollment);
      queryClient.invalidateQueries({ queryKey: ['enrollments'] });
      if (lessons[0]) {
        navigate(createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${lessons[0].id}`);
      }
    },
  });

  const categoryLabels = {
    preparation_academique: "Préparation Académique",
    integration_administrative: "Intégration Administrative",
    culture_codes_sociaux: "Culture & Codes Sociaux",
    insertion_professionnelle: "Insertion Professionnelle",
    formations_professionnelles: "Formations Professionnelles"
  };

  const levelLabels = {
    debutant: "Débutant",
    intermediaire: "Intermédiaire",
    avance: "Avancé"
  };

  const lessonsByModule = lessons.reduce((acc, lesson) => {
    const module = lesson.module_number || 1;
    if (!acc[module]) acc[module] = [];
    acc[module].push(lesson);
    return acc;
  }, {});

  // Afficher le chargement uniquement si on est vraiment en train de charger
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-900 mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Chargement du cours...</p>
          <p className="text-sm text-gray-500 mt-2">Veuillez patienter</p>
        </div>
      </div>
    );
  }

  // Afficher une erreur seulement si la requête a échoué ET qu'on n'est plus en chargement
  if (isError && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center max-w-md px-4">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Erreur de chargement</h2>
          <p className="text-gray-600 mb-6">
            Impossible de charger ce cours. Veuillez réessayer plus tard.
          </p>
          <Link to={createPageUrl("Courses")}>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Retour aux cours
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Si le cours n'existe pas (mais pas d'erreur de requête)
  if (!course && !isLoading && !isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center max-w-md px-4">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cours introuvable</h2>
          <p className="text-gray-600 mb-6">
            Ce cours n'existe pas ou n'est plus disponible.
          </p>
          <Link to={createPageUrl("Courses")}>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Retour aux cours
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200')] opacity-10 bg-cover"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-0 backdrop-blur-md">
              {categoryLabels[course.category]}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              {course.short_description}
            </p>

            <div className="flex flex-wrap gap-6 text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{course.duration_hours}h de contenu</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">{course.total_lessons} leçons</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Target className="w-5 h-5" />
                <span className="font-semibold">{levelLabels[course.level]}</span>
              </div>
              {course.rating > 0 && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  <span className="font-bold">{course.rating.toFixed(1)}</span>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    Description du cours
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* What You'll Learn */}
            {course.objectives && course.objectives.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="border-2 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      Ce que vous apprendrez
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.objectives.map((objective, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                          className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
                        >
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{objective}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Curriculum with Accordions */}
            {Object.keys(lessonsByModule).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-2 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      Programme détaillé
                    </h2>
                    <Accordion type="multiple" className="space-y-4">
                      {Object.entries(lessonsByModule).map(([moduleNum, moduleLessons], idx) => (
                        <AccordionItem 
                          key={moduleNum} 
                          value={moduleNum}
                          className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                            <div className="flex items-center justify-between w-full pr-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                  {moduleNum}
                                </div>
                                <div>
                                  <div className="font-bold text-lg text-gray-900">
                                    Module {moduleNum}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {moduleLessons.length} leçons • {moduleLessons.reduce((sum, l) => sum + (l.duration_minutes || 0), 0)} min
                                  </div>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="space-y-2 mt-4">
                              {moduleLessons.map((lesson, lessonIdx) => (
                                <div
                                  key={lesson.id}
                                  className="flex items-center justify-between p-4 hover:bg-blue-50 rounded-lg transition-colors border border-gray-100"
                                >
                                  <div className="flex items-center gap-3 flex-1">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                      {lesson.content_type === "video" && <Play className="w-5 h-5 text-blue-600" />}
                                      {lesson.content_type === "text" && <FileText className="w-5 h-5 text-purple-600" />}
                                      {lesson.content_type === "quiz" && <CheckCircle className="w-5 h-5 text-green-600" />}
                                      {lesson.content_type === "pdf" && <FileText className="w-5 h-5 text-orange-600" />}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold text-gray-900 flex items-center gap-2">
                                        {lesson.title}
                                        {lesson.is_free && (
                                          <Badge className="bg-green-500 text-white text-xs">Aperçu gratuit</Badge>
                                        )}
                                      </div>
                                      <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                                        <Clock className="w-3 h-3" />
                                        {lesson.duration_minutes || 10} minutes
                                      </div>
                                    </div>
                                  </div>
                                  {enrollment?.completed_lessons?.includes(lesson.id) && (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Prerequisites */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-2 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-orange-600" />
                      Prérequis
                    </h2>
                    <ul className="space-y-3">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-orange-600 font-bold text-xs">{index + 1}</span>
                          </div>
                          <span className="text-gray-700 text-lg">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Enrollment Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="border-4 border-indigo-200 shadow-2xl overflow-hidden">
                  {course.video_intro_url && (
                    <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer">
                      <Play className="w-20 h-20 text-white opacity-75 group-hover:scale-125 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-4 right-4 bg-red-500 text-white animate-pulse">
                        Aperçu vidéo
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      {!course.is_premium ? (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl px-6 py-3 shadow-xl">
                          ✓ 100% GRATUIT
                        </Badge>
                      ) : (
                        <div>
                          <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xl px-6 py-3 shadow-xl mb-2">
                            ⭐ PREMIUM
                          </Badge>
                          <p className="text-sm text-gray-500 mt-2">Abonnement Premium requis</p>
                          <p className="text-xs text-gray-400 mt-1">Pas de paiement par cours</p>
                        </div>
                      )}
                    </div>

                    {enrollment && (
                      <div className="mb-6 bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-700">Votre progression</span>
                          <span className="text-lg font-bold text-blue-600">
                            {Math.round(enrollment.progress_percentage)}%
                          </span>
                        </div>
                        <Progress value={enrollment.progress_percentage} className="h-3" />
                      </div>
                    )}

                    {isAuthenticated ? (
                      enrollment ? (
                        canAccess ? (
                          <Link to={createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${lessons[0]?.id}`}>
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 text-lg shadow-xl" size="lg">
                              <Play className="w-5 h-5 mr-2" />
                              Continuer le cours
                            </Button>
                          </Link>
                        ) : (
                          <div>
                            <Button className="w-full bg-gray-300 cursor-not-allowed text-gray-600 py-6" size="lg" disabled>
                              <Lock className="w-5 h-5 mr-2" />
                              Cours verrouillé
                            </Button>
                            <p className="text-sm text-red-600 text-center mt-3 font-semibold">
                              ⚠️ Abonnement Premium requis
                            </p>
                            <Link to={createPageUrl("Pricing")}>
                              <Button variant="outline" className="w-full mt-3 border-2 border-orange-300 text-orange-600 hover:bg-orange-50 font-bold">
                                <Zap className="w-4 h-4 mr-2" />
                                Débloquer avec Premium
                              </Button>
                            </Link>
                          </div>
                        )
                      ) : canAccess ? (
                        <Button
                          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-6 text-lg shadow-xl"
                          size="lg"
                          onClick={() => enrollMutation.mutate()}
                          disabled={enrollMutation.isPending}
                        >
                          {enrollMutation.isPending ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Inscription...
                            </>
                          ) : (
                            <>
                              <Unlock className="w-5 h-5 mr-2" />
                              S'inscrire gratuitement
                            </>
                          )}
                        </Button>
                      ) : (
                        <div>
                          <Button className="w-full bg-gray-300 cursor-not-allowed text-gray-600 py-6" size="lg" disabled>
                            <Lock className="w-5 h-5 mr-2" />
                            Abonnement requis
                          </Button>
                          <Link to={createPageUrl("Pricing")}>
                            <Button className="w-full mt-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4">
                              <Zap className="w-4 h-4 mr-2" />
                              Passer Premium
                            </Button>
                          </Link>
                        </div>
                      )
                    ) : (
                      <Button
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-6 text-lg shadow-xl"
                        size="lg"
                        onClick={() => redirectToLogin(window.location.href)}
                      >
                        Se connecter pour commencer
                      </Button>
                    )}

                    <div className="mt-6 space-y-3">
                      {[
                        { icon: CheckCircle, text: "Accès à vie au contenu" },
                        { icon: Award, text: "Certificat de complétion" },
                        { icon: Users, text: "Accès au forum communautaire" },
                        { icon: Zap, text: "Mises à jour gratuites" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-700">
                          <item.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Course Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="border-2 shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">📊 Statistiques du cours</h3>
                    <div className="space-y-4">
                      {course.rating > 0 && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm text-gray-700">Note moyenne</span>
                          </div>
                          <span className="font-bold text-yellow-600">{course.rating.toFixed(1)}/5</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-gray-700">Taux de satisfaction</span>
                        </div>
                        <span className="font-bold text-green-600">97%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-700">Contenu actualisé</span>
                        </div>
                        <span className="font-bold text-blue-600">2025</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}
