"use client"

import { LanguageIcon } from "@heroicons/react/24/solid";

const Translate = () => {
  const toggleLanguage = () => {

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
        <p>{'language'}</p>
      </button>
    </div>
  );
};

export default Translate;