# Guide : Traduction Automatique du Site

## Option Recommandée : Google Translate Widget

C'est la solution **gratuite, automatique et sans bugs** car elle fonctionne au niveau du navigateur.

### Étape 1 : Ajouter le script dans `index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FrancePrep Academy</title>
  
  <!-- Google Translate -->
  <meta name="google-translate-customization" content="customization-id" />
</head>
<body>
  <div id="root"></div>
  
  <!-- Widget Google Translate -->
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,es,ar,zh-CN,pt,de,it,ru,ja,ko',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
    }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

### Étape 2 : Ajouter le conteneur dans le Layout

Dans `src/pages/Layout.jsx`, ajouter le sélecteur de langue :

```jsx
// Dans le header ou navbar
<div id="google_translate_element" className="translate-widget"></div>
```

### Étape 3 : Styliser le widget (optionnel)

Dans `src/index.css` :

```css
/* Personnaliser le widget Google Translate */
.goog-te-gadget {
  font-family: inherit !important;
}

.goog-te-gadget-simple {
  background-color: transparent !important;
  border: 1px solid #e5e7eb !important;
  border-radius: 8px !important;
  padding: 8px 12px !important;
}

.goog-te-menu-value span {
  color: #374151 !important;
}

/* Cacher la barre de traduction Google */
.goog-te-banner-frame {
  display: none !important;
}

body {
  top: 0 !important;
}
```

---

## Alternative : Composant React personnalisé

Si tu veux un contrôle total, voici un composant React :

### Créer `src/components/LanguageSelector.jsx`

```jsx
import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
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
];

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState('fr');

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    
    // Utiliser Google Translate API
    const frame = document.querySelector('.goog-te-menu-frame');
    if (frame) {
      const items = frame.contentDocument.querySelectorAll('.goog-te-menu2-item');
      items.forEach(item => {
        if (item.innerText.toLowerCase().includes(langCode)) {
          item.click();
        }
      });
    }
    
    // Alternative: changer le cookie Google Translate
    document.cookie = `googtrans=/fr/${langCode}; path=/`;
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">
            {languages.find(l => l.code === currentLang)?.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="gap-2 cursor-pointer"
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Intégrer dans le Layout

```jsx
import LanguageSelector from '@/components/LanguageSelector';

// Dans la navbar
<div className="flex items-center gap-4">
  <LanguageSelector />
  {/* autres éléments */}
</div>
```

---

## Option Pro : Weglot (Payant mais excellent)

Si tu veux une solution professionnelle :

1. Créer un compte sur [weglot.com](https://weglot.com)
2. Obtenir une clé API
3. Ajouter dans `index.html` :

```html
<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
<script>
  Weglot.initialize({
    api_key: 'YOUR_API_KEY'
  });
</script>
```

**Avantages :**
- Traduction de meilleure qualité
- Éditeur visuel pour corriger les traductions
- SEO multilingue automatique
- Pas de bugs d'affichage

**Inconvénient :** Payant (~15€/mois pour commencer)

---

## Recommandation finale

Pour ton cas, je recommande **Google Translate Widget** car :

1. ✅ **Gratuit** à vie
2. ✅ **Automatique** - traduit tout le contenu
3. ✅ **Sans bugs** - fonctionne au niveau navigateur
4. ✅ **Pas de maintenance** - Google gère tout
5. ✅ **10+ langues** disponibles

Les inconvénients mineurs :
- Design moins personnalisable
- Petite bannière Google (masquable avec CSS)

---

## Implémentation rapide (5 minutes)

Modifie simplement `index.html` à la racine :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FrancePrep Academy</title>
</head>
<body>
  <!-- Sélecteur de langue (sera positionné par CSS) -->
  <div id="google_translate_element" style="position: fixed; top: 10px; right: 10px; z-index: 9999;"></div>
  
  <div id="root"></div>
  
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,es,ar,zh-CN,pt,de,it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
  </script>
  <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

C'est tout ! Le site sera traduisible en 7 langues automatiquement.
