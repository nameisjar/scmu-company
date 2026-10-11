import type { Locale } from "./config";

const copy = {
  id: {
    skip: "Lewati ke konten utama",
    mainNavigation: "Navigasi utama",
    mobileNavigation: "Navigasi mobile",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    language: "Bahasa",
    languageLabel: "Pilih bahasa",
    indonesian: "Bahasa Indonesia",
    english: "English",
    photo: "Foto",
    navigation: "Navigasi",
    services: "Layanan",
    contact: "Kontak",
    allRights: "All Rights Reserved.",
    footerModes: "Pengiriman darat · udara · laut · sungai · multimoda",
  },
  en: {
    skip: "Skip to main content",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    languageLabel: "Choose language",
    indonesian: "Bahasa Indonesia",
    english: "English",
    photo: "Photo",
    navigation: "Navigation",
    services: "Services",
    contact: "Contact",
    allRights: "All Rights Reserved.",
    footerModes: "Road · air · sea · river · multimodal shipping",
  },
} as const;

export const getCommonCopy = (locale: Locale) => copy[locale];

