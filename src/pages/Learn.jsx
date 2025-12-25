import React, { useState, useEffect } from "react";
import { me as getCurrentUser } from "@/api/auth";
import { UserProfile, Enrollment, Course, Lesson } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Play,
  FileText,
  BookOpen,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

export default function Learn() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [canAccess, setCanAccess] = useState(false);
  
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');
  const lessonId = urlParams.get('lessonId');
  const queryClient = useQueryClient();

  useEffect(() => {
    loadUserAndEnrollment();
  }, [courseId]);

  const loadUserAndEnrollment = async () => {
    const userData = await getCurrentUser();
    setUser(userData);
    
    // Load profile
    const profiles = await UserProfile.filter({ user_email: userData.email });
    if (profiles.length > 0) {
      setUserProfile(profiles[0]);
    }
    
    const enrollments = await Enrollment.filter({
      user_email: userData.email,
      course_id: courseId
    });
    if (enrollments.length > 0) {
      setEnrollment(enrollments[0]);
    }
  };

  const { data: course, isLoading: courseLoading } = useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      const courses = await Course.filter({ id: courseId });
      return courses[0];
    },
    enabled: !!courseId,
  });

  // Check access when course and profile are loaded
  useEffect(() => {
    if (course && userProfile !== null) {
      checkAccess();
    } else if (course && !userProfile) {
      // If no profile exists, create default one
      if (course.price === 0) {
        setCanAccess(true);
      } else {
        setCanAccess(false);
      }
    }
  }, [course, userProfile]);

  const checkAccess = () => {
    if (course.price === 0) {
      setCanAccess(true);
      return;
    }

    const plan = userProfile?.subscription_plan || 'gratuit';
    
    switch(plan) {
      case 'gratuit':
        setCanAccess(false);
        break;
      case 'decouverte':
      case 'premium':
      case 'intensif':
        setCanAccess(true);
        break;
      default:
        setCanAccess(false);
    }
  };

  const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: async () => {
      try {
        // Utiliser filter directement au lieu de all() puis filter
        const filteredLessons = await Lesson.filter({ course_id: courseId }, 'order');
        // S'assurer que les leçons sont triées par order
        return filteredLessons.sort((a, b) => {
          const orderA = a.order || 0;
          const orderB = b.order || 0;
          return orderA - orderB;
        });
      } catch (error) {
        console.error("Erreur lors du chargement des leçons:", error);
        return [];
      }
    },
    enabled: !!courseId,
  });

  const { data: currentLesson, isLoading: lessonLoading } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: async () => {
      const lessonData = await Lesson.filter({ id: lessonId });
      return lessonData[0];
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

  const lessonsByModule = lessons.reduce((acc, lesson) => {
    const module = lesson.module_number || 1;
    if (!acc[module]) acc[module] = [];
    acc[module].push(lesson);
    return acc;
  }, {});

  const handleNext = () => {
    if (nextLesson) {
      window.location.href = createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${nextLesson.id}`;
    }
  };

  const handlePrev = () => {
    if (prevLesson) {
      window.location.href = createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${prevLesson.id}`;
    }
  };

  if (courseLoading || lessonsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-900 mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Chargement du cours...</p>
          <p className="text-sm text-gray-500 mt-2">Préparation de votre contenu</p>
        </div>
      </div>
    );
  }

  if (!course || !enrollment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cours introuvable
            </h2>
            <p className="text-gray-600 mb-6">
              Ce cours n'existe pas ou vous n'êtes pas inscrit.
            </p>
            <Link to={createPageUrl("Courses")}>
              <Button className="w-full bg-blue-900 hover:bg-blue-800">
                Retour aux cours
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (lessons.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Aucune leçon disponible
            </h2>
            <p className="text-gray-600 mb-6">
              Ce cours n'a pas encore de contenu. Revenez bientôt !
            </p>
            <Link to={createPageUrl("Courses")}>
              <Button className="w-full bg-blue-900 hover:bg-blue-800">
                Retour aux cours
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (lessonLoading || !currentLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-900 mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Chargement de la leçon...</p>
        </div>
      </div>
    );
  }

  // Access denied
  if (!canAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Accès restreint
            </h2>
            <p className="text-gray-600 mb-6">
              Ce cours nécessite un abonnement Premium ou supérieur pour être consulté.
            </p>
            <div className="space-y-3">
              <Link to={createPageUrl("Pricing")}>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Découvrir nos abonnements
                </Button>
              </Link>
              <Link to={createPageUrl("Courses")}>
                <Button variant="outline" className="w-full">
                  Retour aux cours
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto hidden lg:block">
        <div className="p-6 border-b border-gray-200">
          <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`}>
            <h2 className="text-lg font-bold text-gray-900 hover:text-blue-900 line-clamp-2">
              {course.title}
            </h2>
          </Link>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progression</span>
              <span className="font-semibold">{Math.round(enrollment.progress_percentage)}%</span>
            </div>
            <Progress value={enrollment.progress_percentage} className="h-2" />
          </div>
        </div>

        <div className="p-4">
          {Object.entries(lessonsByModule).map(([moduleNum, moduleLessons]) => (
            <div key={moduleNum} className="mb-6">
              <div className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Module {moduleNum}</span>
              </div>
              <div className="space-y-1">
                {moduleLessons.map((lesson) => {
                  const isCurrentLesson = lesson.id === lessonId;
                  const isLessonCompleted = enrollment.completed_lessons?.includes(lesson.id);
                  
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => {
                        window.location.href = createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${lesson.id}`;
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        isCurrentLesson 
                          ? 'bg-blue-50 border-2 border-blue-900' 
                          : 'hover:bg-gray-50 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 flex-1">
                          {lesson.content_type === "video" && <Play className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                          {lesson.content_type === "text" && <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                          {lesson.content_type === "quiz" && <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                          <span className={`text-sm ${isCurrentLesson ? 'font-semibold text-blue-900' : 'text-gray-700'}`}>
                            {lesson.title}
                          </span>
                        </div>
                        {isLessonCompleted && (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 ml-6">
                        {lesson.duration_minutes} min
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          {/* Progress Bar */}
          <div className="mb-6 bg-white rounded-xl p-4 shadow-lg border-2 border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Progression du cours</h3>
                  <p className="text-sm text-gray-600">{Math.round(enrollment.progress_percentage)}% complété</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                {Math.round(enrollment.progress_percentage)}%
              </div>
            </div>
            <Progress value={enrollment.progress_percentage} className="h-3" />
            <p className="text-xs text-gray-500 mt-2">
              {enrollment.completed_lessons?.length || 0} / {lessons.length} leçons terminées
            </p>
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <Badge className="text-base px-4 py-2">
                📚 Module {currentLesson.module_number} - Leçon {currentLesson.lesson_number}
              </Badge>
              {isCompleted && (
                <Badge className="bg-green-500 text-base px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  ✓ Complété
                </Badge>
              )}
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              {currentLesson.title}
            </h1>
          </div>

          {/* Content */}
          <Card className="mb-6">
            <CardContent className="p-0">
              {currentLesson.content_type === "video" && (
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  {currentLesson.content_url ? (
                    <iframe
                      src={currentLesson.content_url}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  ) : (
                    <div className="text-white text-center">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Vidéo de démonstration</p>
                    </div>
                  )}
                </div>
              )}
              
              {currentLesson.content_text && (
                <div className="p-8">
                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: currentLesson.content_text.replace(/\n/g, '<br/>') }} />
                  </div>
                </div>
              )}

              {currentLesson.content_type === "pdf" && currentLesson.content_url && (
                <div className="p-8 text-center">
                  <FileText className="w-16 h-16 text-blue-900 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Document PDF</h3>
                  <a href={currentLesson.content_url} target="_blank" rel="noopener noreferrer">
                    <Button>Télécharger le document</Button>
                  </a>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={!prevLesson}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Précédent
            </Button>

            {!isCompleted && (
              <Button
                onClick={() => markCompleteMutation.mutate()}
                className="bg-green-600 hover:bg-green-700"
                disabled={markCompleteMutation.isPending}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Marquer comme complété
              </Button>
            )}

            <Button
              onClick={handleNext}
              disabled={!nextLesson}
              className="bg-blue-900 hover:bg-blue-800"
            >
              Suivant
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Certificate with Confetti */}
          {enrollment.progress_percentage === 100 && !enrollment.certificate_issued && (
            <Card className="bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 border-4 border-yellow-300 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="text-9xl">🎉🎊🎉🎊🎉🎊🎉🎊🎉</div>
              </div>
              <CardContent className="p-10 text-center relative">
                <div className="mb-6">
                  <Award className="w-24 h-24 text-yellow-500 mx-auto animate-bounce" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  🎉 Félicitations ! 🎉
                </h3>
                <p className="text-xl text-gray-700 mb-3">
                  Vous avez terminé ce cours avec succès !
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Vous pouvez maintenant télécharger votre certificat de complétion
                </p>
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 hover:shadow-2xl text-white font-bold text-lg px-8 py-6">
                  <Award className="w-6 h-6 mr-2" />
                  Télécharger mon certificat
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}