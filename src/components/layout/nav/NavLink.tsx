"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
  currentLocale: string;
  closeMenu?: () => void
  full?: boolean
}

const NavLink = (props: NavLinkProps) => {
  const { href, name, currentLocale, closeMenu, full } = props;
  const pathName = usePathname();
  const hrefWithLocale = `/${currentLocale}${href}`

  return (
    <Link href={hrefWithLocale} onClick={() => closeMenu && closeMenu()} className={`transition-colors hover:opacity-60 ${full && "w-full"} ${pathName === hrefWithLocale && "opacity-60"}`}>
      <p className="text-lg">
        {name}
      </p>
    </Link>
  );
};

export default NavLink;
