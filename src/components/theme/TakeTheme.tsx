"use client"

import { useEffect } from "react"

const TakeTheme = () => {

  useEffect(() => {
    const userTheme = localStorage.getItem('theme') ?? 'light'
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    const themeCheck = () => {
      if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    themeCheck()
  }, [])
  return (
    <></>
  )
}

export default TakeTheme