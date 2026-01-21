
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

export default function Layout({ children, currentPageName }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    checkAuth();
    // Recharger le statut utilisateur pÃ©riodiquement pour dÃ©tecter les changements de premium
    const interval = setInterval(() => {
      if (isAuthenticated) {
        checkAuth();
      }
    }, 10000); // Toutes les 10 secondes (plus rapide pour dÃ©tecter les changements de premium)
    
    // Ã‰couter les Ã©vÃ©nements de navigation depuis PaymentSuccess
    const handleFocus = () => {
      if (isAuthenticated) {
        checkAuth();
      }
    };
    
    window.addEventListener('focus', handleFocus);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [isAuthenticated]);

  const checkAuth = async () => {
    const authenticated = await checkAuthStatus();
    setIsAuthenticated(authenticated);
    if (authenticated) {
      try {
        // Utiliser me() qui rÃ©cupÃ¨re automatiquement le profil avec is_premium
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

  const navLinks = [
    { name: "Accueil", page: "Home" },
    { name: "Cours", page: "Courses" },
    { name: "Cours particuliers", page: "Teachers" },
    { name: "Dashboard", page: "Dashboard" },
    // Éviter les soucis d'encodage lors de certains déploiements (UTF-8 mal interprété)
    { name: "Communaut\u00e9", page: "Community" },
    { name: "Tarifs", page: "Pricing" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 gap-1 sm:gap-2 md:gap-4 overflow-x-auto">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
              <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-cyan-500 flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">FrancePrepAcademy</span>
            </Link>

            {/* Desktop Navigation - Full Menu */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center min-w-0">
              {navLinks.map((link) => {
                // Si c'est Dashboard et pas connectÃ©, rediriger vers login
                const handleClick = async (e) => {
                  if (link.page === "Dashboard") {
                    const authenticated = await checkAuthStatus();
                    if (!authenticated) {
                      e.preventDefault();
                      redirectToLogin('/dashboard');
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

            {/* Right Section: Auth */}
            <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 flex-shrink-0 ml-auto">
              {/* Auth Buttons */}
              {isAuthenticated ? (
                <>
                  <Link to={createPageUrl("Dashboard")} className="hidden md:inline-block">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg text-xs sm:text-sm px-2 sm:px-3" size="sm">
                      {"\uD83C\uDF93"} Mon Espace
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center space-x-1 sm:space-x-1.5 relative px-1.5 sm:px-2">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                          {user?.full_name?.[0] || user?.email?.[0] || "U"}
                        </div>
                        {user?.is_premium && (
                          <Badge className="absolute -right-1 -top-1 sm:-right-2 sm:-top-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-1 sm:px-2 py-0 text-[9px] sm:text-[10px]">
                            Premium
                          </Badge>
                        )}
                        <ChevronDown className="w-3 h-3 flex-shrink-0 hidden sm:block" />
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
                            {"G\u00e9rer mon abonnement"}
                          </Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                        {"D\u00e9connexion"}
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
                    className="text-xs sm:text-sm px-2 sm:px-3 hidden xs:inline-flex"
                  >
                    Connexion
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold text-xs sm:text-sm px-2 sm:px-3"
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

          {/* Mobile menu - Design amÃ©liorÃ© */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-50 overflow-y-auto shadow-2xl">
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link key={link.page} to={createPageUrl(link.page)}>
                    <Button
                      variant={currentPageName === link.page ? "default" : "ghost"}
                      className={`w-full justify-start h-12 text-base ${
                        currentPageName === link.page 
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" 
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
                <div className="border-t border-gray-200 my-4 pt-4">
                  {isAuthenticated ? (
                    <>
                      <Link to={createPageUrl("Dashboard")}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-12 text-base hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          ðŸ“Š Tableau de bord
                        </Button>
                      </Link>
                      <Link to={createPageUrl("Profile")}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-12 text-base hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          ðŸ‘¤ Mon profil
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-12 text-base hover:bg-red-50 text-red-600"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleLogout();
                        }}
                      >
                        ðŸšª DÃ©connexion
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white h-12 text-base font-semibold shadow-lg"
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
                Votre partenaire pour rÃ©ussir votre installation et vos Ã©tudes en France.
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
              <h3 className="font-semibold mb-4">{"Communaut\u00e9"}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl("Community")} className="hover:text-white">Forum</Link></li>
                <li><a href="#" className="hover:text-white">{"T\u00e9moignages"}</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl("Contact")} className="hover:text-white">Centre d'aide</Link></li>
                <li><Link to={createPageUrl("Contact")} className="hover:text-white">Contact</Link></li>
                <li><Link to={createPageUrl("CGV")} className="hover:text-white">CGV</Link></li>
                <li><Link to={createPageUrl("PrivacyPolicy")} className="hover:text-white">{"Confidentialit\u00e9"}</Link></li>
                <li><Link to={createPageUrl("Contact")} className="hover:text-white">{"Mentions l\u00e9gales"}</Link></li>
              </ul>
            </div>
            </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 FrancePrepAcademy. {"Tous droits r\u00e9serv\u00e9s."}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
