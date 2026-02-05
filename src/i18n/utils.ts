import { translations, defaultLang, type Language } from "./translations"

/**
 * Get the current language from a URL path.
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/")
  if (lang in translations) return lang as Language
  return defaultLang
}

/**
 * Get a translation function for the given language.
 */
export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key]
  }
}

/**
 * Get the localized path for a given URL.
 */
export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path
  return `/${lang}${path}`
}

/**
 * Get the alternate language.
 */
export function getAlternateLang(lang: Language): Language {
  return lang === "fr" ? "en" : "fr"
}
