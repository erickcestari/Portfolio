import { Tooltip } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

interface ContactsProps {
  title: string
  url: string
  src: string
}

const Contacts = (props: ContactsProps) => {
  const { title, url, src } = props
  return (
    <Tooltip title={title}>
      <Link href={url} className="inline-block" target="_blank">
        <Image src={src} className="" width={36} height={36} alt={`${title} icon`} />
      </Link>
    </Tooltip>
  )
}

export default Contacts