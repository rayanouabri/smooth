import React, { useState, useEffect } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'fr', name: 'Fran\u00e7ais', flag: '\uD83C\uDDEB\uD83C\uDDF7', short: 'FR' },
  { code: 'en', name: 'English', flag: '\uD83C\uDDEC\uD83C\uDDE7', short: 'EN' },
  { code: 'es', name: 'Espa\u00f1ol', flag: '\uD83C\uDDEA\uD83C\uDDF8', short: 'ES' },
  { code: 'ar', name: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', flag: '\uD83C\uDDF8\uD83C\uDDE6', short: 'AR' },
  { code: 'zh-CN', name: '\u4E2D\u6587', flag: '\uD83C\uDDE8\uD83C\uDDF3', short: 'ZH' },
  { code: 'pt', name: 'Portugu\u00eas', flag: '\uD83C\uDDE7\uD83C\uDDF7', short: 'PT' },
  { code: 'de', name: 'Deutsch', flag: '\uD83C\uDDE9\uD83C\uDDEA', short: 'DE' },
  { code: 'it', name: 'Italiano', flag: '\uD83C\uDDEE\uD83C\uDDF9', short: 'IT' },
  { code: 'ru', name: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439', flag: '\uD83C\uDDF7\uD83C\uDDFA', short: 'RU' },
  { code: 'tr', name: 'T\u00fcrk\u00e7e', flag: '\uD83C\uDDF9\uD83C\uDDF7', short: 'TR' },
  { code: 'ja', name: '\u65E5\u672C\u8A9E', flag: '\uD83C\uDDEF\uD83C\uDDF5', short: 'JA' },
  { code: 'ko', name: '\uD55C\uAD6D\uC5B4', flag: '\uD83C\uDDF0\uD83C\uDDF7', short: 'KO' },
];

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('fr');
  const [isOpen, setIsOpen] = useState(false);

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

    const domains = ['', '.franceprepacademy.fr', window.location.hostname];
    domains.forEach(domain => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;${domain ? ' domain=' + domain + ';' : ''}`;
    });

    if (langCode === 'fr') {
      window.location.reload();
      return;
    }

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
          className="gap-1.5 px-2 sm:px-3 h-9 text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-xl transition-all"
        >
          <span className="text-lg leading-none">{currentLanguage.flag}</span>
          <span className="hidden sm:inline text-xs font-semibold text-gray-600">
            {currentLanguage.short}
          </span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-2 z-[9999]"
        sideOffset={8}
      >
        <div className="px-3 py-2 mb-1">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-gray-400" />
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Langue / Language</p>
          </div>
        </div>
        <div className="max-h-[320px] overflow-y-auto scrollbar-thin">
          {languages.map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all my-0.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="text-2xl leading-none flex-shrink-0">{lang.flag}</span>
                <span className={`font-medium flex-1 text-sm ${isActive ? 'text-purple-700' : ''}`}>
                  {lang.name}
                </span>
                {isActive && (
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
