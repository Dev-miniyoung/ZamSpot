import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lang from './lang.json';

const resource = {
  ko: {
    translation: lang,
  },
};

i18n.use(initReactI18next).init({
  lng: 'ko',
  resources: resource,
  fallbackLng: 'ko',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
