import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { me } from "@/api/auth";
import { supabase } from "@/api/supabaseClient";
import { UserProfile, Enrollment } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Home, 
  BookOpen, 
  Trophy, 
  BarChart3, 
  MessageSquare, 
  Users, 
  User, 
  CreditCard,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function DashboardSidebar({ currentPage }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // Utiliser me() pour obtenir le profil avec is_premium
    const userData = await me();
    setUser(userData);
    
    // Charger le profil depuis la base de donnÃ©es pour Ãªtre sÃ»r
    if (userData?.id) {
      const { data: profileData } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userData.id)
        .single();
      
      if (profileData) {
        setProfile(profileData);
        console.log('DashboardSidebar - Profile loaded, is_premium:', profileData.is_premium);
      } else {
        // Fallback: utiliser les donnÃ©es de me()
        setProfile(userData);
      }
    }

    const userEnrollments = await Enrollment.filter({ user_email: userData.email });
    setEnrollments(userEnrollments);
  };

  // Utiliser is_premium au lieu de subscription_plan
  const userIsPremium = isPremium(profile);
  const plan = userIsPremium ? 'premium' : 'gratuit';
  const avgProgress = enrollments.length > 0 
    ? enrollments.reduce((sum, e) => sum + e.progress_percentage, 0) / enrollments.length 
    : 0;

  const menuItems = [
    { icon: Home, label: "Tableau de bord", page: "Dashboard", color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: BookOpen, label: "Mes Cours", page: "Courses", color: "text-purple-600", bgColor: "bg-purple-50" },
    { icon: Trophy, label: "Certificats", page: "Certificates", color: "text-yellow-600", bgColor: "bg-yellow-50" },
    { icon: MessageSquare, label: "CommunautÃ©", page: "Community", color: "text-green-600", bgColor: "bg-green-50" },
    { icon: Users, label: "Professeurs", page: "Teachers", color: "text-pink-600", bgColor: "bg-pink-50" },
    { icon: User, label: "Mon Profil", page: "Profile", color: "text-indigo-600", bgColor: "bg-indigo-50" },
  ];

  return (
    <div 
      className={`${
        isCollapsed ? 'w-0 sm:w-20' : 'w-full sm:w-64 lg:w-72'
      } bg-white border-r border-gray-200 min-h-screen sticky top-16 shadow-lg transition-all duration-300 flex flex-col overflow-hidden`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-white border-2 border-gray-200 rounded-full p-1.5 hover:bg-gray-100 transition-colors z-50 shadow-lg"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        )}
      </button>

      <div className="p-4 flex-1">
        {/* User Section */}
        {!isCollapsed && user && (
          <div className="mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  {user.full_name?.[0] || user.email?.[0] || "U"}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                  {Math.floor(1 + enrollments.length / 3)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 truncate text-sm">
                  {user.full_name || user.email.split('@')[0]}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <Badge className={`${
                    plan === 'premium' 
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  } text-xs`}>
                    {plan === 'premium' ? 'â­ Premium' : 'ðŸŽ“ Gratuit'}
                  </Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">
                    Niv. {Math.floor(1 + enrollments.length / 3)}
                  </Badge>
                </div>
              </div>
            </div>

            {/* XP & Progress */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-700">Points XP</span>
                  <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {(enrollments.filter(e => e.completed).length * 100) + Math.floor(avgProgress * 10)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                      style={{ width: `${(enrollments.length % 3) * 33.33}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {enrollments.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-600">Progression</span>
                    <span className="text-xs font-bold text-indigo-600">{Math.round(avgProgress)}%</span>
                  </div>
                  <Progress value={avgProgress} className="h-2" />
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>{enrollments.length} cours</span>
                    <span>ðŸ”¥ {Math.min(7, enrollments.length)}j sÃ©rie</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {isCollapsed && user && (
          <div className="mb-6 pb-6 border-b border-gray-200 flex justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {user.full_name?.[0] || user.email?.[0] || "U"}
            </div>
          </div>
        )}

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = currentPage === item.page;
            return (
              <Link key={index} to={createPageUrl(item.page)}>
                <div
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all cursor-pointer group ${
                    isActive
                      ? `${item.bgColor} ${item.color} font-semibold shadow-md`
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  title={isCollapsed ? item.label : ''}
                >
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? item.color : ''}`} />
                  {!isCollapsed && (
                    <span className="text-sm">{item.label}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Premium Banner */}
      {plan !== 'premium' && !isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-4 rounded-2xl shadow-xl text-white">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5" />
              <h3 className="font-bold text-sm">Passer Premium</h3>
            </div>
            <p className="text-xs text-white/90 mb-3">
              DÃ©bloquez 60+ cours et l'IA illimitÃ©e
            </p>
            <Link to={createPageUrl("Pricing")}>
              <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 text-xs font-bold py-2 shadow-lg">
                âš¡ DÃ©couvrir
              </Button>
            </Link>
          </div>
        </div>
      )}

      {isCollapsed && plan !== 'premium' && (
        <div className="p-2 border-t border-gray-200 flex justify-center">
          <Link to={createPageUrl("Pricing")}>
            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-lg">
              <Zap className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}