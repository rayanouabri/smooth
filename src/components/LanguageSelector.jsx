import React, { useState, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
];

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('fr');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Détecter la langue depuis le cookie
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

    // Cacher tout UI Google Translate après chargement
    const hideGoogleUI = () => {
      const elements = document.querySelectorAll('.goog-te-banner-frame, .skiptranslate, #goog-gt-tt, .goog-te-balloon-frame');
      elements.forEach(el => {
        if (el) el.style.display = 'none';
      });
      document.body.style.top = '0';
    };

    hideGoogleUI();
    const interval = setInterval(hideGoogleUI, 500);
    setTimeout(() => clearInterval(interval), 5000);

    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    
    // Supprimer les anciens cookies
    const domains = ['', '.franceprepacademy.fr', window.location.hostname];
    domains.forEach(domain => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;${domain ? ' domain=' + domain + ';' : ''}`;
    });

    if (langCode === 'fr') {
      window.location.reload();
      return;
    }

    // Définir les nouveaux cookies
    document.cookie = `googtrans=/fr/${langCode}; path=/`;
    if (window.location.hostname.includes('franceprepacademy')) {
      document.cookie = `googtrans=/fr/${langCode}; path=/; domain=.franceprepacademy.fr`;
    }
    
    window.location.reload();
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-1.5 px-2 sm:px-3 h-9 text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200"
        >
          <span className="text-base sm:text-lg">{currentLanguage.flag}</span>
          <span className="hidden md:inline text-sm font-medium">
            {currentLanguage.name}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-52 bg-white border border-gray-200 shadow-xl rounded-xl p-1.5 z-[9999]"
        sideOffset={8}
      >
        <div className="px-2 py-1.5 mb-1 border-b border-gray-100">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Choisir la langue</p>
        </div>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
              currentLang === lang.code 
                ? 'bg-indigo-50 text-indigo-700' 
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="font-medium flex-1">{lang.name}</span>
            {currentLang === lang.code && (
              <Check className="w-4 h-4 text-indigo-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}