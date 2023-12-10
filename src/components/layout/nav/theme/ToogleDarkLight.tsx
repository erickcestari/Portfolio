"use client"

import { useLoaded } from '@/hooks/useLoaded'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

const ToogleDarkLight = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const loaded = useLoaded();

  const isDark = theme == "dark" || theme == "system" && systemTheme == "dark"

  useEffect(() => {
    
  }, [isDark, theme, systemTheme])
  return (
    <div>
      {loaded && isDark ? (
        <div className='w-6 h-6 rounded-full cursor-pointer' onClick={() => setTheme('ligth')}>
          <SunIcon className='w-6 h-6 text-yellow-500' />
        </div>
      ) : (
        <div className='w-6 h-6 rounded-full cursor-pointer' onClick={() => setTheme('dark')} >
          <MoonIcon className='w-6 h-6 text-zinc-800' />
        </div>
      )}
    </div>
  )
}

export default ToogleDarkLight