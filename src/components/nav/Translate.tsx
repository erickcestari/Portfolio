"use client"

import React, { useState } from 'react';
import { LanguageIcon } from "@heroicons/react/24/solid";
import { useTranslation, initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import enTranslation from "@/translations/en.json"
import ptTranslation from '@/translations/pt.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Idioma padrão
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
  });

const Translate = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className='flex w-20'>
      <div
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
        <p>{t('language')}</p>
      </div>
    </div>
  );
};

export default Translate;