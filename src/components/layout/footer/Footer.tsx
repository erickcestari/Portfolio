"use client"

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div
      className="relative flex items-center justify-center pb-3 px-3 text-center"
    >
      © 2023 Erick Cestari. {t('allRights')}.
    </div>
  );
};

export default Footer;
