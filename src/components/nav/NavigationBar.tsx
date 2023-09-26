"use client"

import React from 'react'
import DarkLightToogle from '../theme/DarkLightToogle'
import Link from 'next/link'
import Router, { useParams, useRouter, usePathname } from 'next/navigation'
import NavLink from './NavLink'

const NavigationBar = () => {
  const pathName = usePathname()

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className={`hover:underline hover:text-zinc-500`}>
            Erick Cestari
          </Link>
        </div>
        <ul className="flex space-x-4 text-black dark:text-white">
          <li>
            <NavLink href="/" pathName={pathName} name="Home" />
          </li>
          <li>
            <NavLink href="/projects" pathName={pathName} name="Projects" />
          </li>
          <li>
            <NavLink href="/blog" pathName={pathName} name="Blog" />
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