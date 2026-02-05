export const languages = {
  fr: "Francais",
  en: "English",
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = "fr"

export const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "A propos",
    "nav.contact": "Contact",
    "nav.language": "EN",

    // Hero
    "hero.title": "Bienvenue sur Amawe",
    "hero.subtitle": "Votre site arrive bientot",

    // Footer
    "footer.rights": "Tous droits reserves",

    // SEO
    "seo.title": "Amawe",
    "seo.description": "Amawe — Site officiel",

    // Common
    "common.loading": "Chargement...",
    "common.error": "Une erreur est survenue",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.language": "FR",

    // Hero
    "hero.title": "Welcome to Amawe",
    "hero.subtitle": "Your site is coming soon",

    // Footer
    "footer.rights": "All rights reserved",

    // SEO
    "seo.title": "Amawe",
    "seo.description": "Amawe — Official website",

    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
  },
} as const
