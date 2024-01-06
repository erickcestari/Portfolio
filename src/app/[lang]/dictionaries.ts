import 'server-only';

type DictionaryLoader<T> = () => Promise<T>;

const dictionaries: Record<string, DictionaryLoader<any>> = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  pt: () => import('../../dictionaries/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => dictionaries[locale]();