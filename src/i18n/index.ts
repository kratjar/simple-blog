import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './translations/en.json'

const resources = {
  en,
}

export default i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  debug: false,

  ns: ['common'],
  defaultNS: 'common',

  interpolation: {
    escapeValue: false,
  },
})
