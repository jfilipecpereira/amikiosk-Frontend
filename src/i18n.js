import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import { initReactI18next } from "react-i18next"

i18n.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: "http://localhost:5000/api/Language/{{lng}}",
			allowMultiLoading: true,
			crossDomain: true,
		},
		fallbackLng: "pt",
		debug: true,

		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
