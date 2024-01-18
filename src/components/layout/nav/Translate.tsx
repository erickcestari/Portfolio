import { LanguageDropDown } from "./LanguageDropDown";
import { getLanguages } from "@/utils/getLanguages";

interface TranslateProps {
  currentLanguage: string
}

const Translate = (translateProps: TranslateProps) => {
  const { currentLanguage } = translateProps

  const languagesMap = getLanguages();
  const languageKeys = Array.from(languagesMap.keys());

  return (
    <div className='flex w-20'>
        <LanguageDropDown langs={languageKeys} activeLang={currentLanguage}/>
    </div>
  );
};

export default Translate;