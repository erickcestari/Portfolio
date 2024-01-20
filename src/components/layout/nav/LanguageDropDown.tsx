"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageIcon } from "@heroicons/react/24/outline"
import { usePathname, useRouter } from "next/navigation"
import { Language } from "@/types/Language"

interface LanguageDropDownProps {
  languagesMap: Map<Language, string>
  activeLang: string
}

export function LanguageDropDown({ activeLang, languagesMap }: LanguageDropDownProps) {
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
        <DropdownMenuRadioGroup value={language} onValueChange={handleChangeLanguage}>
          {Array.from(languagesMap.keys()).map(lang => <DropdownMenuRadioItem key={lang} value={lang}>{languagesMap.get(lang)}</DropdownMenuRadioItem>)}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}