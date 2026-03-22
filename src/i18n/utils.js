import en from './en.json';
import fr from './fr.json';

export function getLangFromUrl(url) {
  const lang = url.pathname.split('/')[1];
  return lang === 'fr' ? 'fr' : 'en'; // default to en
}

export function useTranslations(lang) {
  const dict = lang === 'fr' ? fr : en;

  return function t(key) {
    return dict[key];
  };
}
// Detect language from URL
export function getLangFromUrl(url) {
  const lang = url.pathname.split('/')[1];
  return lang === 'fr' ? 'fr' : 'en';
}

// 🔥 NEW: Get translations
export function getTranslations(lang = 'en') {
  return lang === 'fr' ? fr : en;
}
