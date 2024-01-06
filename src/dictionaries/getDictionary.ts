import 'server-only';

type DictionaryLoader<T> = () => Promise<T>;

const dictionaries: Record<string, DictionaryLoader<DictionaryType>> = {
  en: () => import('./locales/en.json').then((module) => module.default),
  pt: () => import('./locales/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => dictionaries[locale]();