// Système de traduction simple pour FrancePrepAcademy

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      courses: "Cours",
      teachers: "Cours particuliers",
      dashboard: "Dashboard",
      community: "Communauté",
      pricing: "Tarifs"
    },
    common: {
      login: "Connexion",
      signup: "S'inscrire",
      logout: "Déconnexion",
      start: "Commencer",
      free: "Gratuit",
      premium: "Premium",
      lessons: "leçons",
      hours: "h",
      rating: "Note"
    }
  },
  en: {
    nav: {
      home: "Home",
      courses: "Courses",
      teachers: "Private Lessons",
      dashboard: "Dashboard",
      community: "Community",
      pricing: "Pricing"
    },
    common: {
      login: "Login",
      signup: "Sign up",
      logout: "Logout",
      start: "Start",
      free: "Free",
      premium: "Premium",
      lessons: "lessons",
      hours: "h",
      rating: "Rating"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      courses: "Cursos",
      teachers: "Clases particulares",
      dashboard: "Panel",
      community: "Comunidad",
      pricing: "Precios"
    },
    common: {
      login: "Iniciar sesión",
      signup: "Registrarse",
      logout: "Cerrar sesión",
      start: "Comenzar",
      free: "Gratis",
      premium: "Premium",
      lessons: "lecciones",
      hours: "h",
      rating: "Calificación"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      courses: "الدورات",
      teachers: "دروس خاصة",
      dashboard: "لوحة التحكم",
      community: "المجتمع",
      pricing: "الأسعار"
    },
    common: {
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      logout: "تسجيل الخروج",
      start: "ابدأ",
      free: "مجاني",
      premium: "مميز",
      lessons: "دروس",
      hours: "ساعة",
      rating: "التقييم"
    }
  },
  zh: {
    nav: {
      home: "首页",
      courses: "课程",
      teachers: "私教",
      dashboard: "仪表板",
      community: "社区",
      pricing: "价格"
    },
    common: {
      login: "登录",
      signup: "注册",
      logout: "退出",
      start: "开始",
      free: "免费",
      premium: "高级",
      lessons: "课程",
      hours: "小时",
      rating: "评分"
    }
  },
  pt: {
    nav: {
      home: "Início",
      courses: "Cursos",
      teachers: "Aulas particulares",
      dashboard: "Painel",
      community: "Comunidade",
      pricing: "Preços"
    },
    common: {
      login: "Entrar",
      signup: "Cadastrar",
      logout: "Sair",
      start: "Começar",
      free: "Grátis",
      premium: "Premium",
      lessons: "lições",
      hours: "h",
      rating: "Avaliação"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      courses: "Курсы",
      teachers: "Частные уроки",
      dashboard: "Панель",
      community: "Сообщество",
      pricing: "Цены"
    },
    common: {
      login: "Войти",
      signup: "Регистрация",
      logout: "Выход",
      start: "Начать",
      free: "Бесплатно",
      premium: "Премиум",
      lessons: "уроки",
      hours: "ч",
      rating: "Рейтинг"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      courses: "Kurse",
      teachers: "Privatunterricht",
      dashboard: "Dashboard",
      community: "Community",
      pricing: "Preise"
    },
    common: {
      login: "Anmelden",
      signup: "Registrieren",
      logout: "Abmelden",
      start: "Starten",
      free: "Kostenlos",
      premium: "Premium",
      lessons: "Lektionen",
      hours: "h",
      rating: "Bewertung"
    }
  },
  it: {
    nav: {
      home: "Home",
      courses: "Corsi",
      teachers: "Lezioni private",
      dashboard: "Dashboard",
      community: "Comunità",
      pricing: "Prezzi"
    },
    common: {
      login: "Accedi",
      signup: "Registrati",
      logout: "Esci",
      start: "Inizia",
      free: "Gratis",
      premium: "Premium",
      lessons: "lezioni",
      hours: "h",
      rating: "Valutazione"
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      courses: "コース",
      teachers: "プライベートレッスン",
      dashboard: "ダッシュボード",
      community: "コミュニティ",
      pricing: "価格"
    },
    common: {
      login: "ログイン",
      signup: "登録",
      logout: "ログアウト",
      start: "始める",
      free: "無料",
      premium: "プレミアム",
      lessons: "レッスン",
      hours: "時間",
      rating: "評価"
    }
  },
  ko: {
    nav: {
      home: "홈",
      courses: "과정",
      teachers: "개인 레슨",
      dashboard: "대시보드",
      community: "커뮤니티",
      pricing: "가격"
    },
    common: {
      login: "로그인",
      signup: "가입",
      logout: "로그아웃",
      start: "시작",
      free: "무료",
      premium: "프리미엄",
      lessons: "레슨",
      hours: "시간",
      rating: "평점"
    }
  },
  hi: {
    nav: {
      home: "होम",
      courses: "कोर्स",
      teachers: "निजी पाठ",
      dashboard: "डैशबोर्ड",
      community: "समुदाय",
      pricing: "मूल्य निर्धारण"
    },
    common: {
      login: "लॉगिन",
      signup: "साइन अप",
      logout: "लॉगआउट",
      start: "शुरू करें",
      free: "मुफ्त",
      premium: "प्रीमियम",
      lessons: "पाठ",
      hours: "घंटे",
      rating: "रेटिंग"
    }
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      courses: "Kurslar",
      teachers: "Özel Dersler",
      dashboard: "Kontrol Paneli",
      community: "Topluluk",
      pricing: "Fiyatlar"
    },
    common: {
      login: "Giriş Yap",
      signup: "Kayıt Ol",
      logout: "Çıkış Yap",
      start: "Başla",
      free: "Ücretsiz",
      premium: "Premium",
      lessons: "dersler",
      hours: "saat",
      rating: "Değerlendirme"
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      courses: "Khóa học",
      teachers: "Dạy kèm",
      dashboard: "Bảng điều khiển",
      community: "Cộng đồng",
      pricing: "Giá"
    },
    common: {
      login: "Đăng nhập",
      signup: "Đăng ký",
      logout: "Đăng xuất",
      start: "Bắt đầu",
      free: "Miễn phí",
      premium: "Premium",
      lessons: "bài học",
      hours: "giờ",
      rating: "Đánh giá"
    }
  },
  pl: {
    nav: {
      home: "Strona główna",
      courses: "Kursy",
      teachers: "Lekcje prywatne",
      dashboard: "Panel",
      community: "Społeczność",
      pricing: "Ceny"
    },
    common: {
      login: "Zaloguj się",
      signup: "Zarejestruj się",
      logout: "Wyloguj się",
      start: "Rozpocznij",
      free: "Darmowe",
      premium: "Premium",
      lessons: "lekcje",
      hours: "h",
      rating: "Ocena"
    }
  }
};

export const getTranslation = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang] || translations.fr;
  for (const k of keys) {
    value = value?.[k];
    if (!value) return key;
  }
  return value || key;
};

export const getAvailableLanguages = () => {
  return Object.keys(translations);
};

export default translations;

