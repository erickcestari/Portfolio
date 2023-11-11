"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  name: string
}

const NavLink = (props: NavLinkProps) => {
  const { href, name } = props
  const pathName = usePathname()
  return (
    <Link href={href} className={`hover:text-blue-500 ${pathName === href && "text-blue-700"}`}>
      <p className="text-lg">
        {name}
      </p>
    </Link>
  )
}

export default NavLink