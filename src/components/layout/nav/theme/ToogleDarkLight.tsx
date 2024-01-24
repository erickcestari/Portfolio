"use client"

import { useLoaded } from '@/hooks/useLoaded'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const ToogleDarkLight = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const loaded = useLoaded();

  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");

  useEffect(() => {
    
  }, [isDark, theme, systemTheme]);

  const handleClick = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div>
      {loaded && (
        <motion.div
          className='w-6 h-6 rounded-full cursor-pointer'
          onClick={handleClick}
          whileHover={{ rotate: 45 }}
        >
          {isDark ? (
            <SunIcon className='w-6 h-6 text-yellow-500' />
          ) : (
            <MoonIcon className='w-6 h-6 text-zinc-800' />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ToogleDarkLight;