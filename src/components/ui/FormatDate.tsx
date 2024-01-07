import { formatDate } from "@/utils/formatDate"

interface DateFormatProps {
  date: string
  language: string
}

function FormatDate({ date, language }: DateFormatProps) {
  return (
    <div>{formatDate(date, language)}</div>
  )
}

export default FormatDate