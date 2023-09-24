"use client"

import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

const DarkLightToogle = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDark(localStorage.getItem('theme') === 'dark')
  }, [isDark])

  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
      return
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    setIsDark(true)
  }

  return (
    <div
      className='flex w-6 h-6 rounded-full items-center cursor-pointer'
      onClick={themeSwitch}
    >
      {isDark === null ? <div className='w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700' /> : (
        isDark ? (
          <div className='w-6 h-6 rounded-full '>
            <SunIcon className='w-6 h-6 text-yellow-500' />
          </div>
        ) : (
          <div className='w-6 h-6 rounded-full' >
            <MoonIcon className='w-6 h-6 text-zinc-500' />
          </div>
        )
      )}
    </div>
  )
}

export default DarkLightToogle