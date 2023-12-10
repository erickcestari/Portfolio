'use client'

import { Bars4Icon } from '@heroicons/react/20/solid'
import React, { useEffect, useRef, useState } from 'react'
import NavLink from '../nav/NavLink'
import Translate from '../nav/Translate'
import ToogleDarkLight from '../nav/theme/ToogleDarkLight'

const MobileMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="flex justify-end flex-row md:hidden">
      <button
        className="lg:hidden px-2 flex items-center"
        onClick={toggleMenu}
      >
        <Bars4Icon className="w-8" />
      </button>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"

        >
          <div
            className="absolute top-0 right-0 w-56 p-4 z-10 space-y-3 dark:bg-zinc-700 bg-neutral-300"
            ref={menuRef}
          >
            <div onClick={closeMenu} className='flex flex-col space-y-3'>
              <NavLink href="/" name="Erick Cestari" />
              <NavLink href="/projects" name="Projects" />
              <NavLink href="/blog" name="Blog" />
            </div>
            <div className='flex items-center justify-between'>
              <ToogleDarkLight />
              <Translate />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu