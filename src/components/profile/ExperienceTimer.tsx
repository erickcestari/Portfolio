"use client"

import React, { useEffect, useState } from "react";
import { formatExperience } from "@/utils/formatExperience";

interface ExperienceTimerProps {
  startDate: Date;
  locale: string;
  valueToReplace: string;
}

const ExperienceTimer = ({ startDate, locale, valueToReplace }: ExperienceTimerProps) => {
  const [dateFormatted, setDateFormatted] = useState("");

  useEffect(() => {
    const updateExperience = () => {
      setDateFormatted(formatExperience(startDate, locale));
    };

    updateExperience();
    const interval = setInterval(updateExperience, 1000);

    return () => clearInterval(interval);
  }, [startDate, locale]);

  return <span>{valueToReplace.replace("{experience}", dateFormatted) || formatExperience(startDate, locale)}</span>;
};

export default ExperienceTimer;