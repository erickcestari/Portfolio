import React from 'react'
import DarkLightToogle from './DarkLightToogle'

const NavigationBar = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-10 p-4">
      <div className="container mx-auto flex justify-end items-center">
        <ul className="flex space-x-4 text-black dark:text-white">
          <li>
            <a href="/" className=" hover:underline hover:text-zinc-500">
              Home
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:underline hover:text-zinc-500">
              Blog
            </a>
          </li>
          <li>
            <DarkLightToogle />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar