import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { me, isAuthenticated } from "@/api/auth";
import { supabase } from "@/api/supabaseClient";
import { UserProfile, Enrollment, Course } from "@/api/entities";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp,
  Play,
  CheckCircle,
  Calendar,
  Target,
  MessageSquare,
  Download,
  BarChart3,
  Zap,
  Trophy,
  Flame,
  Users
} from "lucide-react";
import { createPageUrl } from "../utils";
import CourseCard from "../components/CourseCard";
import ChatBot from "../components/ChatBot";
import DashboardSidebar from "../components/DashboardSidebar";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
    // Recharger le profil quand on revient sur la page (après paiement)
    const handleFocus = () => {
      loadUser();
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const loadUser = async () => {
    try {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        // Rediriger vers login, puis vers Dashboard après connexion
        navigate('/login?redirect=/Dashboard');
        return;
      }

      // Utiliser me() pour obtenir le profil avec is_premium
      const userData = await me();
      if (!userData) {
        navigate('/login?redirect=/Dashboard');
        return;
      }
      
      setUser(userData);
      
      // Charger le profil depuis la base de données pour être sûr
      if (userData?.id) {
        try {
          const { data: profileData } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', userData.id)
            .single();
          
          if (profileData) {
            setProfile(profileData);
            console.log('Dashboard - Profile loaded, is_premium:', profileData.is_premium);
          } else {
            // Fallback: utiliser les données de me()
            setProfile(userData);
          }
        } catch (profileError) {
          console.error("Erreur lors du chargement du profil:", profileError);
          // Fallback: utiliser les données de me()
          setProfile(userData);
        }
      }
    } catch (error) {
      console.error("Erreur lors du chargement de l'utilisateur:", error);
      navigate('/login?redirect=/Dashboard');
    }
  };

  const { data: enrollments = [] } = useQuery({
    queryKey: ['enrollments', user?.email],
    queryFn: () => {
      if (!user?.email) return [];
      return Enrollment.filter({ user_email: user.email }, '-last_accessed');
    },
    enabled: !!user && !!user.email,
  });

  const { data: courses = [] } = useQuery({
    queryKey: ['enrolled-courses', enrollments.map(e => e.course_id).join(',')],
    queryFn: async () => {
      const courseIds = enrollments.map(e => e.course_id);
      if (courseIds.length === 0) return [];
      try {
        const allCourses = await Course.all();
        return allCourses.filter(c => courseIds.includes(c.id));
      } catch (error) {
        console.error("Erreur lors du chargement des cours:", error);
        return [];
      }
    },
    enabled: enrollments.length > 0,
    staleTime: 60000,
  });

  const { data: allCourses = [] } = useQuery({
    queryKey: ['all-courses'],
    queryFn: async () => {
      try {
        return await Course.filter({ is_published: true });
      } catch (error) {
        console.error("Erreur lors du chargement de tous les cours:", error);
        return [];
      }
    },
    staleTime: 120000,
  });

  const inProgressEnrollments = enrollments.filter(e => !e.completed && e.progress_percentage > 0);
  const completedEnrollments = enrollments.filter(e => e.completed);
  const totalTimeSpent = enrollments.reduce((sum, e) => sum + (e.time_spent_minutes || 0), 0);
  const avgProgress = enrollments.length > 0 
    ? enrollments.reduce((sum, e) => sum + e.progress_percentage, 0) / enrollments.length 
    : 0;

  const getCourseForEnrollment = (enrollment) => {
    return courses.find(c => c.id === enrollment.course_id);
  };

  // Utiliser is_premium au lieu de subscription_plan
  const isPremium = profile?.is_premium === true || profile?.subscription_status === 'active';
  const plan = isPremium ? 'premium' : 'gratuit';

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <DashboardSidebar currentPage="Dashboard" />
      
      <div className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge className="mb-3 bg-orange-500 border-0">
                  {plan === 'premium' ? '⭐ Premium' : '🎓 Gratuit'}
                </Badge>
                <h1 className="text-4xl font-bold mb-2">
                  Bienvenue, {user.full_name || user.email?.split('@')[0]} ! 👋
                </h1>
                <p className="text-blue-100 text-lg">
                  Continuez votre parcours vers la réussite
                </p>
              </motion.div>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Link to={createPageUrl("Profile")}>
                <Button variant="outline" className="border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold">
                  Mon profil
                </Button>
              </Link>
              {plan === 'gratuit' && (
                <Link to={createPageUrl("Pricing")}>
                  <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold shadow-lg">
                    ⚡ Passer Premium
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gamification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: BookOpen,
              label: "Cours suivis",
              value: enrollments.length,
              color: "from-blue-500 to-cyan-500",
              badge: "🎯 Explorer"
            },
            {
              icon: Flame,
              label: "Série active",
              value: `${Math.min(7, enrollments.length)} jours`,
              color: "from-orange-500 to-red-500",
              badge: "🔥 Continue!"
            },
            {
              icon: Trophy,
              label: "Badges gagnés",
              value: completedEnrollments.length + Math.floor(avgProgress / 25),
              color: "from-yellow-500 to-orange-500",
              badge: "⭐ Top!"
            },
            {
              icon: Zap,
              label: "Points XP",
              value: (completedEnrollments.length * 100) + Math.floor(avgProgress * 10),
              color: "from-purple-500 to-pink-500",
              badge: "🚀 Level " + Math.floor(1 + enrollments.length / 3)
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 hover:shadow-2xl transition-all group hover:scale-105">
                <CardContent className="p-5">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
                  <Badge className="text-xs bg-gray-100 text-gray-700 border-0">
                    {stat.badge}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Level Progress */}
        <Card className="mb-8 border-2 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  {Math.floor(1 + enrollments.length / 3)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Niveau {Math.floor(1 + enrollments.length / 3)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {enrollments.length % 3 === 0 ? "Félicitations ! Niveau suivant débloqué 🎉" : `${3 - (enrollments.length % 3)} cours pour passer au niveau ${Math.floor(2 + enrollments.length / 3)}`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {(completedEnrollments.length * 100) + Math.floor(avgProgress * 10)}
                </div>
                <div className="text-xs text-gray-600">Points XP</div>
              </div>
            </div>
            <Progress value={(enrollments.length % 3) * 33.33} className="h-3" />
          </CardContent>
        </Card>

        {/* Overall Progress */}
        <Card className="mb-12 border-2 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Progression globale
                </h3>
                <p className="text-gray-600">
                  Vous progressez à un excellent rythme ! 🚀
                </p>
              </div>
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                {Math.round(avgProgress)}%
              </div>
            </div>
            <Progress value={avgProgress} className="h-4" />
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>{enrollments.length} cours actifs</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>{completedEnrollments.length} objectifs atteints</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="courses" className="mb-12">
          <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
            <TabsTrigger value="courses">📚 Mes Cours</TabsTrigger>
            <TabsTrigger value="certificates">🏆 Certificats</TabsTrigger>
            <TabsTrigger value="discover">🔍 Découvrir</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            {/* Continue Learning */}
            {inProgressEnrollments.length > 0 ? (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Play className="w-6 h-6 mr-2 text-blue-600" />
                  Continuer l'apprentissage
                </h2>
                <div className="space-y-4">
                  {inProgressEnrollments.map((enrollment) => {
                    const course = getCourseForEnrollment(enrollment);
                    if (!course) return null;
                    
                    return (
                      <motion.div
                        key={enrollment.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <Card className="border-2 hover:border-blue-300 hover:shadow-xl transition-all">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                              <img
                                src={course.thumbnail_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200"}
                                alt={course.title}
                                className="w-full md:w-32 h-32 object-cover rounded-lg flex-shrink-0"
                              />
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                  {course.title}
                                </h3>
                                <div className="mb-4">
                                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                                    <span>Progression</span>
                                    <span className="font-semibold text-lg text-blue-600">
                                      {Math.round(enrollment.progress_percentage || 0)}%
                                    </span>
                                  </div>
                                  <Progress value={enrollment.progress_percentage || 0} className="h-3" />
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                  <div className="text-sm text-gray-500 flex items-center">
                                    <Calendar className="w-4 h-4 inline mr-1" />
                                    Dernier accès: {new Date(enrollment.last_accessed).toLocaleDateString('fr-FR')}
                                  </div>
                                  <Link to={createPageUrl("CourseDetail") + `?id=${course.id}`}>
                                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                      <Play className="w-4 h-4 mr-2" />
                                      Continuer
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Card className="mb-12 bg-gradient-to-br from-orange-50 to-pink-50 border-2">
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Commencez votre premier cours !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Des centaines de cours vous attendent pour transformer votre vie en France
                  </p>
                  <Link to={createPageUrl("Courses")}>
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                      Explorer les cours
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="certificates">
            {completedEnrollments.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedEnrollments.map((enrollment) => {
                  const course = getCourseForEnrollment(enrollment);
                  if (!course) return null;
                  
                  return (
                    <Card key={enrollment.id} className="border-2 hover:shadow-xl transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Award className="w-12 h-12 text-yellow-500" />
                          <Badge className="bg-green-500">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Complété
                          </Badge>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Terminé le {new Date(enrollment.last_accessed).toLocaleDateString('fr-FR')}
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger le certificat
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2">
                <CardContent className="p-12 text-center">
                  <Award className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Pas encore de certificat
                  </h3>
                  <p className="text-gray-600">
                    Terminez vos cours pour obtenir vos certificats de complétion !
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="discover">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Cours recommandés pour vous
              </h2>
              <p className="text-gray-600">
                Explorez notre catalogue de formations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {allCourses.slice(0, 6).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to={createPageUrl("Courses")}>
                <Button size="lg" variant="outline">
                  Voir tous les cours
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 hover:shadow-xl transition-all cursor-pointer" onClick={() => window.location.href = createPageUrl("Community")}>
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Communauté</h3>
              <p className="text-sm text-gray-600">Rejoignez la discussion</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all cursor-pointer" onClick={() => window.location.href = createPageUrl("Teachers")}>
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Cours particulier</h3>
              <p className="text-sm text-gray-600">Demandez un professeur</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all cursor-pointer" onClick={() => window.location.href = createPageUrl("Profile")}>
            <CardContent className="p-6 text-center">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Mon profil</h3>
              <p className="text-sm text-gray-600">Gérez vos informations</p>
            </CardContent>
          </Card>
        </div>
      </div>

        <ChatBot />
      </div>
    </div>
  );
}
