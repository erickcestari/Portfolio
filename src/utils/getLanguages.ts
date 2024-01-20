import { Language } from "@/types/Language"

export const getLanguages = (dic: DictionaryType) => {

  const languages: Map<Language, string> = new Map();

  languages.set('en', 'English');
  languages.set('pt', 'Português');

  return languages
}