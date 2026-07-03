import type { Translation } from './types';
import { es } from './es';
import { en } from './en';
import { zh } from './zh';

export type Locale = 'es' | 'en' | 'zh';

export const locales: Locale[] = ['es', 'en', 'zh'];
export const defaultLocale: Locale = 'es';

const dictionaries: Record<Locale, Translation> = { es, en, zh };

/** Devuelve el diccionario completo de un idioma. */
export function useTranslations(locale: Locale): Translation {
  return dictionaries[locale];
}

/** Ruta raíz de un idioma ('/', '/en/', '/zh/'). */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

/** Atributo lang del documento por idioma. */
export const htmlLang: Record<Locale, string> = {
  es: 'es',
  en: 'en',
  zh: 'zh-Hans',
};

/** Metadatos del selector de idioma (código visible + bandera de flag-icons). */
export const localeMeta: Record<Locale, { code: string; flag: string; label: string }> = {
  es: { code: 'ES', flag: 'es', label: 'Español' },
  en: { code: 'EN', flag: 'gb', label: 'English' },
  zh: { code: 'ZH', flag: 'cn', label: '简体中文' },
};
