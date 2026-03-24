import i18next from 'i18next';
import LanguageDetector from 'i18next-browser';
import LanguageBackend from 'i18next-http-backend';

const i18ning = i18next
  .use(LanguageBackend)
  .use(LanguageDetector)
  .init({
    fallbacLng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/',
    }
  })

export default i18ning