import { Language } from "@/types/Language"

export const getLanguages = () => {

  const languages: Map<Language, string> = new Map();

  languages.set('en', 'English');
  languages.set('pt', 'Portuguese');

  return languages
}