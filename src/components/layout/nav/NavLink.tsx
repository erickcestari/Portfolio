"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"

interface NavLinkProps {
  href: string
  name: string
}

const NavLink = (props: NavLinkProps) => {
  const {t} = useTranslation()
  const { href, name } = props
  const pathName = usePathname()
  return (
    <Link href={href} className={`dark:hover:text-zinc-400 hover:text-zinc-600  ${pathName === href && "dark:text-zinc-500 text-zinc-700"}`}>
      <p className="text-lg">
        {t(name)}
      </p>
    </Link>
  )
}

export default NavLink