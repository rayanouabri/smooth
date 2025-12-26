import React, { useState, useEffect } from "react";
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
  Video as VideoIcon
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Learn() {
  const { t } = useLanguage();
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [canAccess, setCanAccess] = useState(false);
  const navigate = useNavigate();
  
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');
  const lessonId = urlParams.get('lessonId');
  const queryClient = useQueryClient();

  useEffect(() => {
    loadUserAndEnrollment();
  }, [courseId]);

  const loadUserAndEnrollment = async () => {
    try {
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
          console.log('Learn - Profile loaded, is_premium:', profile.is_premium);
        } else {
          // Fallback: utiliser les données de me()
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

    // Vérifier is_premium au lieu de subscription_plan
    const isPremium = userProfile?.is_premium === true || userProfile?.subscription_status === 'active';
    
    console.log('Learn - checkAccess:', {
      coursePrice: course.price,
      isPremium: isPremium,
      userProfile: userProfile,
      is_premium: userProfile?.is_premium,
      subscription_status: userProfile?.subscription_status
    });
    
    if (isPremium) {
      setCanAccess(true);
    } else {
      setCanAccess(false);
    }
  };

  const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: async () => {
      try {
        const filteredLessons = await Lesson.filter({ course_id: courseId }, 'order');
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
      try {
        const lessonData = await Lesson.filter({ id: lessonId });
        return lessonData[0];
      } catch (error) {
        console.error("Error loading lesson:", error);
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

  const handleLessonClick = (lessonId) => {
    navigate(createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${lessonId}`);
  };

  if (courseLoading || lessonsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-900 mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">{t('learn.loadingCourse')}</p>
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
              {t('learn.courseNotFound')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('learn.courseNotFoundDesc')}
            </p>
            <Link to={createPageUrl("Courses")}>
              <Button className="w-full bg-blue-900 hover:bg-blue-800">
                {t('learn.backToCourses')}
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
              {t('learn.noLessons')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('learn.noLessonsDesc')}
            </p>
            <Link to={createPageUrl("Courses")}>
              <Button className="w-full bg-blue-900 hover:bg-blue-800">
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-900 mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">{t('learn.loadingLesson')}</p>
        </div>
      </div>
    );
  }

  if (!canAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('learn.accessRestricted')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('learn.accessRestrictedDesc')}
            </p>
            <div className="space-y-3">
              <Link to={createPageUrl("Pricing")}>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  {t('learn.discoverSubscriptions')}
                </Button>
              </Link>
              <Link to={createPageUrl("Courses")}>
                <Button variant="outline" className="w-full">
                  {t('learn.backToCourses')}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Get lesson content - support multiple formats
  const lessonContent = currentLesson.content_text || currentLesson.content || '';
  const hasContent = lessonContent.trim().length > 0 || currentLesson.content_url;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col lg:flex-row overflow-x-hidden">
      {/* Sidebar - Modern Design - Mobile Optimized */}
      <div className="w-full lg:w-80 bg-white border-r border-gray-200 overflow-y-auto lg:block shadow-lg max-h-[40vh] lg:max-h-screen">
        <div className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`}>
            <h2 className="text-lg font-bold hover:underline line-clamp-2 mb-4">
              {course.title}
            </h2>
          </Link>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-blue-100">{t('learn.overallProgress')}</span>
              <span className="font-bold text-lg">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2.5 bg-white/20" />
            <p className="text-xs text-blue-100 mt-2">
              {enrollment.completed_lessons?.length || 0} / {lessons.length} {t('learn.lessonsCompleted')}
            </p>
          </div>
        </div>

        <div className="p-4">
          {Object.entries(lessonsByModule).sort(([a], [b]) => Number(a) - Number(b)).map(([moduleNum, moduleLessons]) => (
            <div key={moduleNum} className="mb-6">
              <div className="font-bold text-gray-900 mb-3 flex items-center space-x-2 text-sm uppercase tracking-wide">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>{t('learn.module')} {moduleNum}</span>
              </div>
              <div className="space-y-2">
                {moduleLessons.map((lesson, idx) => {
                  const isCurrentLesson = lesson.id === lessonId;
                  const isLessonCompleted = enrollment.completed_lessons?.includes(lesson.id);
                  
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all ${
                        isCurrentLesson 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-[1.02]' 
                          : isLessonCompleted
                          ? 'bg-green-50 hover:bg-green-100 border-2 border-green-200'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent hover:border-blue-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <div className={`flex-shrink-0 ${
                            isCurrentLesson ? 'text-white' : 
                            isLessonCompleted ? 'text-green-600' : 'text-gray-400'
                          }`}>
                            {lesson.content_type === "video" && <VideoIcon className="w-4 h-4" />}
                            {lesson.content_type === "text" && <FileText className="w-4 h-4" />}
                            {lesson.content_type === "quiz" && <CheckCircle className="w-4 h-4" />}
                            {!lesson.content_type && <BookOpen className="w-4 h-4" />}
                          </div>
                          <span className={`text-sm font-medium truncate ${
                            isCurrentLesson ? 'text-white' : 
                            isLessonCompleted ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {lesson.title || `${t('learn.lesson')} ${idx + 1}`}
                          </span>
                        </div>
                        {isLessonCompleted && !isCurrentLesson && (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        )}
                      </div>
                      {lesson.duration_minutes && (
                        <div className={`text-xs mt-2 ml-7 flex items-center gap-1 ${
                          isCurrentLesson ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          <Clock className="w-3 h-3" />
                          {lesson.duration_minutes} min
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Modern Design - Mobile Optimized */}
      <div className="flex-1 overflow-y-auto min-w-0">
        <div className="max-w-5xl mx-auto p-3 sm:p-4 lg:p-6 xl:p-10">
          {/* Back Button */}
          <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`}>
            <Button variant="ghost" className="mb-4 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('learn.backToCourse')}
            </Button>
          </Link>

          {/* Progress Card - Enhanced */}
          <Card className="mb-6 border-2 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{t('learn.overallProgress')}</h3>
                    <p className="text-sm text-gray-600">{Math.round(progressPercentage)}% complété</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    {Math.round(progressPercentage)}%
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {enrollment.completed_lessons?.length || 0} / {lessons.length} {t('common.lessons')}
                  </p>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-4 bg-white shadow-inner" />
            </CardContent>
          </Card>

          {/* Lesson Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <Badge className="text-base px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                <BookOpen className="w-4 h-4 mr-2" />
                {t('learn.module')} {currentLesson.module_number || 1} - {t('learn.lesson')} {currentLesson.lesson_number || currentIndex + 1}
              </Badge>
              {isCompleted && (
                <Badge className="bg-green-500 text-white text-base px-4 py-2 border-0">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {t('learn.completed')}
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              {currentLesson.title || t('learn.lessonWithoutTitle')}
            </h1>
            {currentLesson.description && (
              <p className="text-xl text-gray-600 mt-2">
                {currentLesson.description}
              </p>
            )}
          </div>

          {/* Lesson Content */}
          <Card className="mb-6 border-2 shadow-2xl">
            <CardContent className="p-0">
              {/* Video Content */}
              {currentLesson.content_type === "video" && currentLesson.content_url && (
                <div className="aspect-video bg-gray-900 relative">
                  <iframe
                    src={currentLesson.content_url}
                    className="w-full h-full rounded-t-lg"
                    allowFullScreen
                    title={currentLesson.title}
                  />
                </div>
              )}

              {/* Text/Markdown Content */}
              {hasContent && (
                <div className="p-8 md:p-12 bg-white">
                  <div className="prose prose-lg max-w-none">
                    {lessonContent.trim() ? (
                      <ReactMarkdown
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4 text-gray-900" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-3 mt-6 text-gray-900" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-2 mt-4 text-gray-900" {...props} />,
                          p: ({node, ...props}) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                          li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                          code: ({node, ...props}) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600" {...props} />,
                          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600" {...props} />,
                          a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                        }}
                      >
                        {lessonContent}
                      </ReactMarkdown>
                    ) : (
                      <div className="text-center py-12">
                        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">{t('learn.contentInPreparationDesc')}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* PDF Content */}
              {currentLesson.content_type === "pdf" && currentLesson.content_url && (
                <div className="p-12 text-center bg-gray-50">
                  <FileText className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{t('learn.pdfDocument')}</h3>
                  <p className="text-gray-600 mb-6">{t('learn.pdfDocumentDesc')}</p>
                  <a href={currentLesson.content_url} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Download className="w-5 h-5 mr-2" />
                      {t('learn.downloadDocument')}
                    </Button>
                  </a>
                </div>
              )}

              {/* No Content Fallback */}
              {!hasContent && currentLesson.content_type !== "video" && currentLesson.content_type !== "pdf" && (
                <div className="p-12 text-center bg-gradient-to-br from-blue-50 to-purple-50">
                  <BookOpen className="w-20 h-20 text-blue-400 mx-auto mb-4 opacity-50" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-700">{t('learn.contentInPreparation')}</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {t('learn.contentInPreparationDesc')}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-6 gap-3 sm:gap-4 px-2 sm:px-0">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={!prevLesson}
              size="lg"
              className="flex-1 sm:max-w-xs w-full sm:w-auto"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              {t('learn.previousLesson')}
            </Button>

            {!isCompleted && (
              <Button
                onClick={() => markCompleteMutation.mutate()}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold flex-1 sm:flex-none"
                size="lg"
                disabled={markCompleteMutation.isPending}
              >
                {markCompleteMutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t('learn.saving')}
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {t('learn.markAsCompleted')}
                  </>
                )}
              </Button>
            )}

            <Button
              onClick={handleNext}
              disabled={!nextLesson}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold flex-1 sm:max-w-xs w-full sm:w-auto"
              size="lg"
            >
              {t('learn.nextLesson')}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Completion Certificate */}
          {progressPercentage === 100 && !enrollment.certificate_issued && (
            <Card className="bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 border-4 border-yellow-400 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="text-9xl">🎉🎊🎉🎊🎉🎊🎉🎊🎉</div>
              </div>
              <CardContent className="p-12 text-center relative">
                <div className="mb-6">
                  <Award className="w-24 h-24 text-yellow-500 mx-auto animate-bounce" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  🎉 {t('learn.congratulations')} 🎉
                </h3>
                <p className="text-xl text-gray-700 mb-3">
                  {t('learn.courseCompleted')}
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  {t('learn.downloadCertificate')}
                </p>
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 hover:shadow-2xl text-white font-bold text-lg px-8 py-6">
                  <Award className="w-6 h-6 mr-2" />
                  {t('learn.downloadMyCertificate')}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
