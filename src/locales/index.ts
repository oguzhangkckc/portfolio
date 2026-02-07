import de from './de'
import en from './en'
import tr from './tr'

export const locales = {
  EN: en,
  TR: tr,
  DE: de,
} as const

export type LocaleKey = keyof typeof locales
