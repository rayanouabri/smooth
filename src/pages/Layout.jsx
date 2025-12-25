
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { isAuthenticated as checkAuthStatus, me, logout, redirectToLogin } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Layout({ children, currentPageName }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    checkAuth();
    // Recharger le statut utilisateur périodiquement pour détecter les changements de premium
    const interval = setInterval(() => {
      if (isAuthenticated) {
        checkAuth();
      }
    }, 30000); // Toutes les 30 secondes
    
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const checkAuth = async () => {
    const authenticated = await checkAuthStatus();
    setIsAuthenticated(authenticated);
    if (authenticated) {
      try {
        // Utiliser me() qui récupère automatiquement le profil avec is_premium
        const userData = await me();
        console.log('Layout - User data:', userData);
        console.log('Layout - is_premium:', userData?.is_premium);
        if (userData) {
          setUser(userData);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
    { code: "pl", name: "Polski", flag: "🇵🇱" },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  const navLinks = [
    { name: t('nav.home'), page: "Home" },
    { name: t('nav.courses'), page: "Courses" },
    { name: t('nav.teachers'), page: "Teachers" },
    { name: t('nav.dashboard'), page: "Dashboard" },
    { name: t('nav.community'), page: "Community" },
    { name: t('nav.pricing'), page: "Pricing" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-2 md:gap-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
              <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-cyan-500 flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">FrancePrepAcademy</span>
            </Link>

            {/* Desktop Navigation - Full Menu */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {navLinks.map((link) => {
                // Si c'est Dashboard et pas connecté, rediriger vers login
                const handleClick = async (e) => {
                  if (link.page === "Dashboard") {
                    const authenticated = await checkAuthStatus();
                    if (!authenticated) {
                      e.preventDefault();
                      redirectToLogin('/Dashboard');
                    }
                  }
                };
                
                return (
                  <Link key={link.page} to={createPageUrl(link.page)} onClick={handleClick}>
                    <Button
                      variant={currentPageName === link.page ? "default" : "ghost"}
                      className={currentPageName === link.page ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 text-sm font-semibold" : "text-gray-700 hover:text-blue-900 hover:bg-blue-50 text-sm font-medium"}
                      size="sm"
                    >
                      {link.name}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Tablet Navigation - Simplified */}
            <div className="hidden md:flex lg:hidden items-center space-x-1 flex-1 justify-center">
              {navLinks.slice(0, 3).map((link) => (
                <Link key={link.page} to={createPageUrl(link.page)}>
                  <Button
                    variant={currentPageName === link.page ? "default" : "ghost"}
                    className={currentPageName === link.page ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs" : "text-gray-700 text-xs"}
                    size="sm"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Right Section: Language + Auth */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Language Selector - Visible on all screens */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1.5 px-2 sm:px-3">
                    <span className="text-lg sm:text-xl">{currentLang.flag}</span>
                    <span className="hidden sm:inline text-sm font-medium">{currentLang.code.toUpperCase()}</span>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 max-h-96 overflow-y-auto">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="cursor-pointer flex items-center gap-2 py-2.5"
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {lang.code === language && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Auth Buttons */}
              {isAuthenticated ? (
                <>
                  <Link to={createPageUrl("Dashboard")}>
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg" size="sm">
                      🎓 {t('common.mySpace')}
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center space-x-2 relative">
                        <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {user?.full_name?.[0] || user?.email?.[0] || "U"}
                        </div>
                        {user?.is_premium && (
                          <Badge className="absolute -right-2 -top-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-0 text-[10px]">
                            Premium
                          </Badge>
                        )}
                        <ChevronDown className="w-3 h-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to={createPageUrl("Dashboard")} className="w-full cursor-pointer">
                          Tableau de bord
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to={createPageUrl("Profile")} className="w-full cursor-pointer text-gray-900">
                          Mon profil
                        </Link>
                      </DropdownMenuItem>
                      {user?.is_premium && (
                        <DropdownMenuItem asChild>
                          <Link to={createPageUrl("Profile") + '?tab=subscription'} className="w-full cursor-pointer text-gray-900">
                            Gérer mon abonnement
                          </Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                        Déconnexion
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => redirectToLogin(window.location.href)}
                  >
                    Connexion
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold"
                    onClick={() => redirectToLogin(window.location.href)}
                  >
                    Commencer
                  </Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.page} to={createPageUrl(link.page)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
                {isAuthenticated ? (
                  <>
                    <Link to={createPageUrl("Dashboard")}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Tableau de bord
                      </Button>
                    </Link>
                    <Link to={createPageUrl("Profile")}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Mon profil
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleLogout();
                      }}
                    >
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <Button
                    className="bg-blue-900 hover:bg-blue-800"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      redirectToLogin(window.location.href);
                    }}
                  >
                    Commencer gratuitement
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="text-lg font-bold">FrancePrepAcademy</span>
              </div>
              <p className="text-gray-400 text-sm">
                Votre partenaire pour réussir votre installation et vos études en France.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Formation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl("Courses")} className="hover:text-white">Catalogue de cours</Link></li>
                <li><Link to={createPageUrl("Teachers")} className="hover:text-white">Nos professeurs</Link></li>
                <li><Link to={createPageUrl("Pricing")} className="hover:text-white">Tarifs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Communauté</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl("Community")} className="hover:text-white">Forum</Link></li>
                <li><a href="#" className="hover:text-white">Témoignages</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><Link to={createPageUrl("CGU")} className="hover:text-white">CGU</Link></li>
                <li><Link to={createPageUrl("CGV")} className="hover:text-white">CGV</Link></li>
                <li><Link to={createPageUrl("PrivacyPolicy")} className="hover:text-white">Confidentialité</Link></li>
                <li><a href="#" className="hover:text-white">Mentions légales</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 FrancePrepAcademy. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
