import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'
import { initi18NextType } from '@/types/i18n'

const initI18next = async ({lng, ns}: initi18NextType) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function useTranslation(lng:string, ns: string | undefined = undefined, options: {keyPrefix?: string} = {} ) {
  const i18nextInstance = await initI18next({lng, ns})
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18nextInstance
  }
}