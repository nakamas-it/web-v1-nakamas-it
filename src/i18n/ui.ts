export const defaultLang = 'en' as const;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.school': 'School',
    'nav.engineRoom': 'Engine Room',
    'footer.tagline': 'there is no place like 127.0.0.1',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.school': 'School',
    'nav.engineRoom': 'Engine Room',
    'footer.tagline': 'there is no place like 127.0.0.1',
  },
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ((ui[lang] as Record<string, string>)[key]) ?? ui[defaultLang][key];
  };
}
