"use client"

import { LanguageIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";

interface TranslateProps {
  currentLanguage: string
}

const Translate = (translateProps: TranslateProps) => {
  const {currentLanguage} = translateProps
  const router = useRouter()
  const pathName = usePathname()

  const toggleLanguage = () => {
    const nextLanguage = currentLanguage == 'English' ? 'pt' : 'en'
    const nextPath = pathName.replace('pt', nextLanguage).replace('en', nextLanguage)

    router.push(nextPath)
  };

  return (
    <div className='flex w-20'>
      <button
        className='flex select-none hover:text-zinc-500 cursor-pointer'
        onClick={toggleLanguage}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            toggleLanguage();
          }
        }}
        tabIndex={0}
      >
        <LanguageIcon
          className="w-6 h-6"
        />
        <p>{currentLanguage}</p>
      </button>
    </div>
  );
};

export default Translate;