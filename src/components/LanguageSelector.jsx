import React, { useState, useEffect } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

// Use real flag images since emoji flags DON'T RENDER on Windows
const languages = [
  { code: 'fr', name: 'Français', short: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'en', name: 'English', short: 'EN', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'es', name: 'Español', short: 'ES', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'ar', name: 'العربية', short: 'AR', flag: 'https://flagcdn.com/w40/sa.png' },
  { code: 'zh-CN', name: '中文', short: 'ZH', flag: 'https://flagcdn.com/w40/cn.png' },
  { code: 'pt', name: 'Português', short: 'PT', flag: 'https://flagcdn.com/w40/br.png' },
  { code: 'de', name: 'Deutsch', short: 'DE', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'it', name: 'Italiano', short: 'IT', flag: 'https://flagcdn.com/w40/it.png' },
  { code: 'ru', name: 'Русский', short: 'RU', flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'tr', name: 'Türkçe', short: 'TR', flag: 'https://flagcdn.com/w40/tr.png' },
  { code: 'ja', name: '日本語', short: 'JA', flag: 'https://flagcdn.com/w40/jp.png' },
  { code: 'ko', name: '한국어', short: 'KO', flag: 'https://flagcdn.com/w40/kr.png' },
];

function FlagImg({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`inline-block object-cover rounded-sm ${className}`}
      loading="lazy"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  );
}

// Read language synchronously BEFORE first render — avoids flash of wrong flag.
// useEffect fires after paint, so we use a lazy initializer instead.
function getInitialLang() {
  try {
    const saved = localStorage.getItem('selectedLanguage');
    if (saved && languages.find(l => l.code === saved)) return saved;

    // Fallback: parse googtrans cookie (format: /fr/en)
    const value = `; ${document.cookie}`;
    const parts = value.split('; googtrans=');
    if (parts.length === 2) {
      const cookieVal = parts.pop().split(';').shift();
      if (cookieVal) {
        const lang = cookieVal.split('/').pop();
        if (lang && lang !== 'fr' && languages.find(l => l.code === lang)) {
          localStorage.setItem('selectedLanguage', lang);
          return lang;
        }
      }
    }
  } catch {}
  return 'fr';
}

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState(getInitialLang);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
    localStorage.setItem('selectedLanguage', langCode);
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
          className="gap-2 px-2.5 sm:px-3 min-h-[44px] h-9 sm:h-9 text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-xl transition-all"
          aria-label="Change language"
        >
          <FlagImg src={currentLanguage.flag} alt={currentLanguage.name} className="w-6 h-4" />
          <span className="text-xs font-semibold text-gray-600">
            {currentLanguage.short}
          </span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-1.5 z-[9999]"
        sideOffset={8}
      >
        <div className="px-3 py-2 mb-1 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-gray-400" />
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Langue / Language</p>
          </div>
        </div>
        <div className="max-h-[340px] overflow-y-auto">
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
                <FlagImg src={lang.flag} alt={lang.name} className="w-7 h-5" />
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
