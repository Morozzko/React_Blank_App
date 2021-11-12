import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './locales/ru.json'
import en from './locales/en.json'

export type LanguageType = 'en' | 'ru'

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  debug: process.env.NODE_ENV === 'development',
  resources: {
    en: {
      translation: en as Record<string, unknown>,
    },
    ru: {
      translation: ru as Record<string, unknown>,
    },
  },
})

export default i18n
