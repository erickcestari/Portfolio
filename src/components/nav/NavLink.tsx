import Link from "next/link"

interface NavLinkProps {
  href: string
  pathName: string
  name: string
}
const NavLink = (props: NavLinkProps) => {
  const { href, pathName, name } = props

  console.log(pathName, href)

  return (
    <Link href={href} className={`hover:underline hover:text-zinc-500 ${pathName === href && "text-blue-700 hover:text-blue-500"}`}>
      {name}
    </Link>
  )
}

export default NavLink