import { Language } from "@/types/Language"

export const getLanguages = (dic: DictionaryType) => {

  const languages: Map<Language, string> = new Map();

  languages.set('en', dic.en);
  languages.set('pt', dic.pt);

  return languages
}