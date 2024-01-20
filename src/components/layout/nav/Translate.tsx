import { LanguageDropDown } from "./LanguageDropDown";
import { getLanguages } from "@/utils/getLanguages";

interface TranslateProps {
  currentLanguage: string
  dic: DictionaryType
}

const Translate = (translateProps: TranslateProps) => {
  const { currentLanguage, dic } = translateProps
  const languagesMap = getLanguages(dic);

  return (
        <LanguageDropDown languagesMap={languagesMap} activeLang={currentLanguage}/>
  );
};

export default Translate;