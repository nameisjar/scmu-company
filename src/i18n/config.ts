export type Locale = "id" | "en";

export const isEnglishPath = (pathname: string) =>
  pathname === "/en" || pathname.startsWith("/en/");

export const localeFromPathname = (pathname: string): Locale =>
  isEnglishPath(pathname) ? "en" : "id";

export const localizeHref = (href: string, locale: Locale) => {
  if (/^(https?:|mailto:|tel:)/.test(href)) return href;

  const [path, hash] = href.split("#");
  const normalizedPath = path || "/";
  const withoutLocale = normalizedPath.replace(/^\/en(?=\/|$)/, "") || "/";
  const localizedPath = locale === "en"
    ? withoutLocale === "/" ? "/en" : `/en${withoutLocale}`
    : withoutLocale;

  return hash ? `${localizedPath}#${hash}` : localizedPath;
};

export const switchLocaleHref = (pathname: string, locale: Locale) =>
  localizeHref(pathname, locale);

