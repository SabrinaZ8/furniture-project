import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"
import enTranslations from "./locales/en.json";
import ptTranslations from "./locales/pt.json";

i18n
  .use(Backend) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      pt: { translation: ptTranslations },
    },
    lng: "en", 
    fallbackLng: "pt", 
    interpolation: { escapeValue: false }, 
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
  });

export default i18n;