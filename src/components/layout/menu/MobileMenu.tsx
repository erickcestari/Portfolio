'use client'

import { Bars3Icon } from '@heroicons/react/20/solid'
import React, { useEffect, useRef, useState } from 'react'
import NavLink from '../nav/NavLink'
import Translate from '../nav/Translate'
import ToogleDarkLight from '../nav/theme/ToogleDarkLight'
import { SheetTrigger, Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet'

interface MobileMenuProps {
  dic: DictionaryType
}

const MobileMenu = (mobileMenuProps: MobileMenuProps) => {
  const { dic } = mobileMenuProps
  const [status, setStatus] = useState(false)

  return (
    <div className="flex justify-end flex-row md:hidden">
      <Sheet open={status} onOpenChange={(val) => setStatus(val)}>
        <SheetTrigger aria-label='Open Mobile Menu'><Bars3Icon className="w-8 stroke-2" /></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div className='flex flex-col justify-start items-start gap-2'>
              <NavLink href="/" name="Erick Cestari" currentLocale={dic.locale} full closeMenu={() => setStatus(false)} />
              <NavLink href="/projects" name={dic.menu.projects} currentLocale={dic.locale} full closeMenu={() => setStatus(false)} />
              <NavLink href="/blog" name="Blog" currentLocale={dic.locale} full closeMenu={() => setStatus(false)} />
            </div>
            <div className='flex items-center justify-between'>
              <ToogleDarkLight />
              <Translate currentLanguage={dic.locale} dic={dic} />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileMenu