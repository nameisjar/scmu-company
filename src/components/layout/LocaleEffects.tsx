"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCommonCopy } from "@/i18n/copy";
import { localeFromPathname } from "@/i18n/config";

export function LocaleEffects() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = localeFromPathname(pathname);

  useEffect(() => {
    const preferred = localStorage.getItem("scmu-language");
    if (pathname === "/" && preferred === "en") {
      router.replace("/en");
      return;
    }
    document.documentElement.lang = locale;
    localStorage.setItem("scmu-language", locale);
  }, [locale, pathname, router]);

  return <a className="skip-link" href="#main-content">{getCommonCopy(locale).skip}</a>;
}
