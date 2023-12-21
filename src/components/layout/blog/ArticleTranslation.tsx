"use client"

import { articles } from '@/mdx-database/articles'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ArticleTranslation = () => {
  const { t } = useTranslation()
  return (
    <>
      <h2 className="text-2xl">Σ {t('article')}s</h2>
      <span className="text-lg">{articles?.length} {articles?.length > 1 ? t('article') + 's' : t('article')}</span>
    </>
  )
}

export default ArticleTranslation