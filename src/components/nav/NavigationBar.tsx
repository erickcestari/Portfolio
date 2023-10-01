"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DarkLightToogle from './theme/DarkLightToogle'
import NavLink from './NavLink'
import Translate from './Translate'

const NavigationBar = () => {
  const pathName = usePathname()

  return (
    <nav className="backdrop-blur-md fixed top-0 left-0 right-0 z-10 p-4">
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
          <li>
            <Translate />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar