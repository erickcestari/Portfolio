'use client'

import { Bars3Icon } from '@heroicons/react/20/solid'
import React, { useEffect, useRef, useState } from 'react'
import NavLink from '../nav/NavLink'
import Translate from '../nav/Translate'
import ToogleDarkLight from '../nav/theme/ToogleDarkLight'
import { motion } from 'framer-motion'

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
        <Bars3Icon className="w-8 stroke-2" />
      </button>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
        >
          <motion.div
            layout
            initial={{ opacity: 0, x:15}}
            animate={{ opacity: 1, x:0}}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute top-0 right-0 w-56 p-4 rounded-md z-10 space-y-3 dark:bg-zinc-700 bg-neutral-300"
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
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu