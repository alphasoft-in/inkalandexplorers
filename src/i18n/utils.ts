import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  
  // For Astro i18n with prefixDefaultLocale: false
  const [firstSegment] = url.pathname.split('/').filter(Boolean);
  if (firstSegment in ui) return firstSegment as keyof typeof ui;
  
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
