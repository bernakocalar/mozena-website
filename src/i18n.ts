// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    resources: {
      tr: { translation: translationTR },
      en: { translation: translationEN },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
