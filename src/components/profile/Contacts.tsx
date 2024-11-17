import { Tooltip } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

interface ContactsProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string
  url: string
  src: string
  width?: number
  height?: number
}

const Contacts = (props: ContactsProps) => {
  const { title, url, src, width, height } = props
  return (
    <Tooltip title={title} arrow>
      <Link href={url} className="inline-block" target="_blank">
        <Image src={src} className="dark:invert" width={width ?? 36} height={height ?? 36} alt={`${title} icon`} />
      </Link>
    </Tooltip>
  )
}

export default Contacts