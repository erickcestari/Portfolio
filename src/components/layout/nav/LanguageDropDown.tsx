"use client"

import * as React from "react"
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation"
import { LanguageIcon } from "@heroicons/react/24/outline"

interface LanguageDropDownProps {
  langs: string[]
  activeLang: string
}

export function LanguageDropDown({ activeLang, langs }: LanguageDropDownProps) {
  const [language, setLanguage] = React.useState(activeLang)
  const pathName = usePathname()
  const router = useRouter()

  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang)
    const nextPath = pathName.replace('pt', lang).replace('en', lang)

    router.push(nextPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <LanguageIcon
            className="w-6 h-6"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 cursor-default">
        <DropdownMenuLabel>Panel Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={handleChangeLanguage}>
          {langs.map(lang => <DropdownMenuRadioItem key={lang} value={lang}>{lang}</DropdownMenuRadioItem>)}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}