import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import ar from './ar.json';
import en from './en.json';
import fr from './fr.json';
import hi from './hi.json';
import kr from './kr.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en: en,
    ar: ar,
    fr: fr,
    hi: hi,
    kr: kr,
  },
});

export default i18next;
