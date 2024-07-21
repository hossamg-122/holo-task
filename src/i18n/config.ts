import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation from './locales/en.json'

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: false,
  resources: {
    en: {
      translation
    }
  }
})
