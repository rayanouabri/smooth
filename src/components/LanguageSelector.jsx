import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'fr', name: 'Fran\u00e7ais', flag: '\uD83C\uDDEB\uD83C\uDDF7' },
  { code: 'en', name: 'English', flag: '\uD83C\uDDEC\uD83C\uDDE7' },
  { code: 'es', name: 'Espa\u00f1ol', flag: '\uD83C\uDDEA\uD83C\uDDF8' },
  { code: 'ar', name: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', flag: '\uD83C\uDDF8\uD83C\uDDE6' },
  { code: 'zh-CN', name: '\u4E2D\u6587', flag: '\uD83C\uDDE8\uD83C\uDDF3' },
  { code: 'pt', name: 'Portugu\u00eas', flag: '\uD83C\uDDE7\uD83C\uDDF7' },
  { code: 'de', name: 'Deutsch', flag: '\uD83C\uDDE9\uD83C\uDDEA' },
  { code: 'it', name: 'Italiano', flag: '\uD83C\uDDEE\uD83C\uDDF9' },
  { code: 'ru', name: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439', flag: '\uD83C\uDDF7\uD83C\uDDFA' },
];

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('fr');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    const googtrans = getCookie('googtrans');
    if (googtrans) {
      const lang = googtrans.split('/').pop();
      if (lang && lang !== 'fr') {
        setCurrentLang(lang);
      }
    }
    setIsLoaded(true);
  }, []);

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    
    if (langCode === 'fr') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.franceprepacademy.fr';
      window.location.reload();
      return;
    }

    document.cookie = `googtrans=/fr/${langCode}; path=/`;
    document.cookie = `googtrans=/fr/${langCode}; path=/; domain=.franceprepacademy.fr`;
    window.location.reload();
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  if (!isLoaded) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-blue-400 shadow-sm"
        >
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden sm:inline text-sm font-medium text-gray-700">
            {currentLanguage.name}
          </span>
          <Globe className="w-4 h-4 text-gray-500 sm:hidden" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl p-1"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
              currentLang === lang.code 
                ? 'bg-blue-50 text-blue-700' 
                : 'hover:bg-gray-50'
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
            {currentLang === lang.code && (
              <span className="ml-auto text-blue-500">\u2713</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}