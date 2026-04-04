import React, { useState, useEffect, useCallback } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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

function getInitialLang() {
  try {
    // 1. localStorage first (fastest, most reliable)
    const saved = localStorage.getItem('fpa_lang');
    if (saved && languages.find(l => l.code === saved)) return saved;
    // 2. fallback: googtrans cookie
    const cookie = document.cookie.split('; ').find(r => r.startsWith('googtrans='));
    if (cookie) {
      const lang = cookie.split('/').pop();
      if (lang && lang !== 'fr' && languages.find(l => l.code === lang)) return lang;
    }
  } catch {}
  return 'fr';
}

function triggerGoogleTranslate(langCode) {
  // Method 1: set cookie then trigger via select element
  const setGoogCookie = (lang) => {
    const domains = ['', '.franceprepacademy.fr', window.location.hostname];
    domains.forEach(domain => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;${domain ? ' domain=' + domain + ';' : ''}`;
    });
    if (lang !== 'fr') {
      document.cookie = `googtrans=/fr/${lang}; path=/`;
      if (window.location.hostname.includes('franceprepacademy')) {
        document.cookie = `googtrans=/fr/${lang}; path=/; domain=.franceprepacademy.fr`;
      }
    }
  };

  setGoogCookie(langCode);
  localStorage.setItem('fpa_lang', langCode);

  if (langCode === 'fr') {
    window.location.reload();
    return;
  }

  // Try to trigger via Google Translate select element (most reliable)
  const trySelect = () => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
      return true;
    }
    return false;
  };

  if (!trySelect()) {
    // Google Translate not ready yet, wait and retry
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (trySelect() || attempts > 20) {
        clearInterval(interval);
        if (attempts > 20) {
          // Fallback: reload with cookie set
          window.location.reload();
        }
      }
    }, 200);
  }
}

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState(getInitialLang);
  const [isOpen, setIsOpen] = useState(false);

  // Suppress Google Translate UI
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
    setTimeout(() => clearInterval(interval), 8000);
    return () => clearInterval(interval);
  }, []);

  // On mount: if a language was saved, apply it after GT loads
  useEffect(() => {
    const saved = localStorage.getItem('fpa_lang');
    if (saved && saved !== 'fr') {
      // GT may not be ready — wait for it then apply
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        const select = document.querySelector('.goog-te-combo');
        if (select && select.value !== saved) {
          select.value = saved;
          select.dispatchEvent(new Event('change'));
          clearInterval(interval);
        } else if (attempts > 30 || (select && select.value === saved)) {
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  const changeLanguage = useCallback((langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    triggerGoogleTranslate(langCode);
  }, []);

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
