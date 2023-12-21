"use client"

import { formatDate } from "@/utils/formatDate"
import { useTranslation } from "react-i18next"

interface DateFormatProps {
  date: string
}

function FormatDate({ date }: DateFormatProps) {
  const { i18n } = useTranslation()
  return (
    <div>{formatDate(date, i18n.language)}</div>
  )
}

export default FormatDate