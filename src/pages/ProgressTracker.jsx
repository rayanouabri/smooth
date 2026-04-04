import React from "react";
import { Link } from "react-router-dom";
import { Enrollment, Course } from "@/api/entities";
import { useQuery } from "@tanstack/react-query";
import { useUserProfile } from "@/hooks/useUserProfile";
import SEO from "@/components/SEO";
import DashboardSidebar from "../components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  TrendingUp, BookOpen, Clock, Target, Award,
  BarChart3, Zap, Trophy, CheckCircle, Play, Loader2
} from "lucide-react";
import { createPageUrl } from "../utils";
import ChatBot from "../components/ChatBot";

export default function ProgressTracker() {
  const { user, isLoading: isLoadingUser } = useUserProfile();

  const { data: enrollments = [], isLoading: isLoadingEnrollments } = useQuery({
    queryKey: ['enrollments-progress', user?.email],
    queryFn: () => {
      if (!user?.email) return [];
      return Enrollment.filter({ user_email: user.email }, '-last_accessed');
    },
    enabled: !!user?.email,
  });

  const { data: courses = [] } = useQuery({
    queryKey: ['courses-progress', enrollments.map(e => e.course_id).join(',')],
    queryFn: async () => {
      if (enrollments.length === 0) return [];
      try {
        const allCourses = await Course.all();
        return allCourses.filter(c => enrollments.some(e => e.course_id === c.id));
      } catch {
        return [];
      }
    },
    enabled: enrollments.length > 0,
    staleTime: 60000,
  });

  const getCourse = (enrollment) => courses.find(c => c.id === enrollment.course_id);

  const completedEnrollments = enrollments.filter(e => e.completed);
  const inProgressEnrollments = enrollments.filter(e => !e.completed && e.progress_percentage > 0);
  const notStartedEnrollments = enrollments.filter(e => !e.completed && (!e.progress_percentage || e.progress_percentage === 0));
  const avgProgress = enrollments.length > 0
    ? enrollments.reduce((s, e) => s + (e.progress_percentage || 0), 0) / enrollments.length
    : 0;
  const totalTime = enrollments.reduce((s, e) => s + (e.time_spent_minutes || 0), 0);

  const isLoading = isLoadingUser || isLoadingEnrollments;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-indigo-600 mx-auto mb-3" />
          <p className="text-gray-600">Chargement de votre progression...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center">
          <p className="text-gray-600 mb-4">Connectez-vous pour voir votre progression</p>
          <Button onClick={() => window.location.href = '/login'}>Se connecter</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-50">
      <SEO
        title="Ma progression - FrancePrepAcademy"
        description="Suivez votre progression et vos statistiques d'apprentissage."
        canonical="/progresstracker"
        noindex={true}
      />
      <DashboardSidebar currentPage="ProgressTracker" />

      <div className="flex-1 min-w-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900 to-emerald-800 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-1">Ma progression</h1>
          <p className="text-teal-200">Suivez vos statistiques et votre parcours d'apprentissage</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-5 text-center">
              <BookOpen className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{enrollments.length}</div>
              <p className="text-xs text-gray-600">Cours inscrits</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{completedEnrollments.length}</div>
              <p className="text-xs text-gray-600">Cours terminés</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <BarChart3 className="w-6 h-6 text-teal-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{Math.round(avgProgress)}%</div>
              <p className="text-xs text-gray-600">Progression moyenne</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {totalTime >= 60 ? `${Math.round(totalTime / 60)}h` : `${totalTime}min`}
              </div>
              <p className="text-xs text-gray-600">Temps d'étude</p>
            </CardContent>
          </Card>
        </div>

        {/* Overall progress */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Progression globale</h3>
              <span className="text-2xl font-bold text-indigo-600">{Math.round(avgProgress)}%</span>
            </div>
            <ProgressBar value={avgProgress} className="h-3 mb-3" />
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1"><Play className="w-3.5 h-3.5 text-blue-500" /> {inProgressEnrollments.length} en cours</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> {completedEnrollments.length} terminés</span>
              <span className="flex items-center gap-1"><Target className="w-3.5 h-3.5 text-gray-400" /> {notStartedEnrollments.length} non commencés</span>
            </div>
          </CardContent>
        </Card>

        {/* Courses in progress */}
        {inProgressEnrollments.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-blue-600" />
              En cours ({inProgressEnrollments.length})
            </h2>
            <div className="space-y-3">
              {inProgressEnrollments.map(enrollment => {
                const course = getCourse(enrollment);
                if (!course) return null;
                return (
                  <Card key={enrollment.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={course.thumbnail_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100"}
                          alt={course.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{course.title}</h4>
                          <div className="flex items-center gap-2 mt-1 mb-2">
                            <ProgressBar value={enrollment.progress_percentage || 0} className="h-2 flex-1" />
                            <span className="text-sm font-semibold text-indigo-600 flex-shrink-0">
                              {Math.round(enrollment.progress_percentage || 0)}%
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">
                            Dernier accès : {new Date(enrollment.last_accessed).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <Link to={createPageUrl("CourseDetail") + `?id=${course.id}`}>
                          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                            Continuer
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Completed */}
        {completedEnrollments.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Terminés ({completedEnrollments.length})
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {completedEnrollments.map(enrollment => {
                const course = getCourse(enrollment);
                if (!course) return null;
                return (
                  <Card key={enrollment.id} className="bg-green-50 border-green-200">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate text-sm">{course.title}</h4>
                        <p className="text-xs text-gray-600">
                          Terminé le {new Date(enrollment.last_accessed).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <Badge className="bg-green-600 text-white text-xs">100%</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty state */}
        {enrollments.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun cours suivi</h3>
              <p className="text-gray-600 mb-6">Inscrivez-vous à des cours pour commencer à suivre votre progression</p>
              <Link to={createPageUrl("Courses")}>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Explorer les cours
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>

      <ChatBot />
      </div>
    </div>
  );
}
