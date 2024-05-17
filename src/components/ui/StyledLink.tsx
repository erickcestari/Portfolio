import Link from 'next/link'
import React from 'react'

interface StyledLinkProps {
  children: React.ReactNode
  href: string
  blank?: boolean
}

const StyledLink = ({ children, href, blank }: StyledLinkProps) => {
  return (
    <Link href={href} target={blank ? "_blank" : ""} className="text-blue-500 font-bold underline hover:text-blue-300">
      {children}
    </Link>
  )
}

export default StyledLink