import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * TS-Λ3 // i18n SUBSTRATE [v3.0.5]
 * Path: src/i18n.ts
 * Mission: Hardened Localisation & Greeting Latch
 */

const resources = {
  en: {
    translation: {
      visualizer: {
        status: "MOTHERSHIP ARCHITECTURE STATE: ACTIVE",
        l1: { title: "L1: COMMAND PLANE", subtitle: "Foundation & Control" },
        l2: { title: "L2: GOVERNANCE", subtitle: "Governance Matrix" },
        l3: { title: "L3: LABS", subtitle: "Intent & Formulation" },
        l4: { title: "L4: THE FORGE", subtitle: "Active Execution" }
      },
      ollie: {
        placeholder: "WHAT IS THE MISSION?",
        greeting: "HOW CAN I ADD BALANCE TO YOUR WORK LIFE TODAY?"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;