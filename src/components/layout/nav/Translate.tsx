import { LanguageDropDown } from "./LanguageDropDown";
import { getLanguages } from "@/utils/getLanguages";

interface TranslateProps {
  currentLanguage: string
  dic: DictionaryType
}

const Translate = (translateProps: TranslateProps) => {
  const { currentLanguage } = translateProps
  const languagesMap = getLanguages();

  return (
    <LanguageDropDown languagesMap={languagesMap} activeLang={currentLanguage} />
  );
};

export default Translate;