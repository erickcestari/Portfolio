"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
  currentLocale: string;
}

const NavLink = (props: NavLinkProps) => {
  const { href, name, currentLocale } = props;
  const pathName = usePathname();
  const hrefWithLocale = `/${currentLocale}${href}`

  return (
    <Link href={hrefWithLocale} className={`dark:hover:text-zinc-400 hover:text-zinc-600  ${pathName === hrefWithLocale && "dark:text-zinc-500 text-zinc-700"}`}>
      <p className="text-lg">
        {name}
      </p>
    </Link>
  );
};

export default NavLink;
