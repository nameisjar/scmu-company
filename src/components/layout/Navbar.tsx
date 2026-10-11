"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { ScmuMailIcon } from "@/components/icons/ScmuIcons";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { company, navigation } from "@/data/company";
import { navigationEn } from "@/data/company";
import { getCommonCopy } from "@/i18n/copy";
import { localeFromPathname, switchLocaleHref } from "@/i18n/config";
import { Brand } from "./Brand";
import { Container } from "../ui/Container";

const HOME_SCROLL_KEY = "scmu-scroll-home-top";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState("");
  const desktopNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = getCommonCopy(locale);
  const localizedNavigation = locale === "en" ? navigationEn : navigation;
  const homeHref = locale === "en" ? "/en" : "/";

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
    setDesktopOpen(null);
    setMobileOpen(null);

    if (pathname !== homeHref || sessionStorage.getItem(HOME_SCROLL_KEY) !== "1") return;

    sessionStorage.removeItem(HOME_SCROLL_KEY);
    let secondFrame: number | undefined;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, [pathname, homeHref]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setDesktopOpen(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopOpen(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isChildActive = (href: string) => {
    const [childPath, childHash] = href.split("#");
    if (pathname !== childPath) return false;
    return childHash ? currentHash === `#${childHash}` : true;
  };

  const hasActiveChild = localizedNavigation.some((item) =>
    item.children?.some((child) => isChildActive(child.href)),
  );

  const isActive = (href: string) =>
    href === homeHref
      ? pathname === homeHref && !hasActiveChild
      : pathname === href || pathname.startsWith(`${href}/`);

  const closeMobileNavigation = () => {
    setOpen(false);
    setMobileOpen(null);
  };

  const rememberLanguage = (nextLocale: "id" | "en") => {
    localStorage.setItem("scmu-language", nextLocale);
    setDesktopOpen(null);
    closeMobileNavigation();
  };

  const handleDirectLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setDesktopOpen(null);
    closeMobileNavigation();

    if (href === homeHref && pathname === homeHref) {
      event.preventDefault();
      window.history.replaceState(null, "", homeHref);
      setCurrentHash("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      href === homeHref &&
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      sessionStorage.setItem(HOME_SCROLL_KEY, "1");
    }
  };

  return (
    <>
      <div className="utility-bar">
        <Container className="utility-bar__inner">
          <Brand href={homeHref} homeLabel={locale === "en" ? "Home" : "Beranda"} />
          <div className="utility-bar__details">
            {company.email ? (
              <a href={`mailto:${company.email}`}><span className="utility-bar__contact-icon"><ScmuMailIcon aria-hidden="true" /></span>{company.email}</a>
            ) : (
              <span className="utility-bar__placeholder"><span className="utility-bar__contact-icon"><ScmuMailIcon aria-hidden="true" /></span><span>info@scmu.co.id</span></span>
            )}
            {company.whatsapp ? (
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer"><span className="utility-bar__contact-icon utility-bar__contact-icon--whatsapp"><WhatsAppIcon /></span>{company.phone || company.whatsapp}</a>
            ) : (
              <span className="utility-bar__placeholder"><span className="utility-bar__contact-icon utility-bar__contact-icon--whatsapp"><WhatsAppIcon /></span><span>+62 812 3456 7890</span></span>
            )}
          </div>
        </Container>
      </div>
      <header className="site-header">
        <Container className="navbar">
          <div className="navbar__mobile-brand"><Brand href={homeHref} homeLabel={locale === "en" ? "Home" : "Beranda"} /></div>
          <nav className="desktop-nav" aria-label={copy.mainNavigation} ref={desktopNavRef}>
            {localizedNavigation.map((item) => {
              const active = isActive(item.href) || item.children?.some((child) => isChildActive(child.href));

              if (item.children) {
                const expanded = desktopOpen === item.label;

                return (
                  <div
                    className={`nav-dropdown${expanded ? " is-open" : ""}`}
                    key={item.label}
                    onMouseEnter={() => setDesktopOpen(item.label)}
                    onMouseLeave={() => setDesktopOpen(null)}
                  >
                    <button
                      className="nav-dropdown__trigger"
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`desktop-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setDesktopOpen(expanded ? null : item.label)}
                      onFocus={() => setDesktopOpen(item.label)}
                    >
                      {item.label}<ChevronDown aria-hidden="true" />
                    </button>
                    <div
                      className="nav-dropdown__menu"
                      id={`desktop-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          aria-current={isChildActive(child.href) ? "page" : undefined}
                          onClick={() => setDesktopOpen(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  className="desktop-nav__link"
                  key={item.href}
                  href={item.href}
                  scroll={item.href === homeHref ? false : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={(event) => handleDirectLinkClick(event, item.href)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div
              className={`language-switcher${desktopOpen === "language" ? " is-open" : ""}`}
              onMouseEnter={() => setDesktopOpen("language")}
              onMouseLeave={() => setDesktopOpen(null)}
            >
              <button
                type="button"
                className="language-switcher__trigger"
                aria-label={copy.languageLabel}
                aria-expanded={desktopOpen === "language"}
                onClick={() => setDesktopOpen(desktopOpen === "language" ? null : "language")}
                onFocus={() => setDesktopOpen("language")}
              >
                <span className={`language-flag language-flag--${locale}`} aria-hidden="true" />
                <span>{locale === "en" ? copy.english : copy.language}</span>
                <ChevronDown aria-hidden="true" />
              </button>
              <div className="language-switcher__menu">
                <Link href={switchLocaleHref(`${pathname}${currentHash}`, "id")} aria-current={locale === "id" ? "true" : undefined} onClick={() => rememberLanguage("id")}>
                  <span className="language-flag language-flag--id" aria-hidden="true" />{copy.indonesian}
                </Link>
                <Link href={switchLocaleHref(`${pathname}${currentHash}`, "en")} aria-current={locale === "en" ? "true" : undefined} onClick={() => rememberLanguage("en")}>
                  <span className="language-flag language-flag--en" aria-hidden="true" />{copy.english}
                </Link>
              </div>
            </div>
          </nav>
          <button
            className="mobile-menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </Container>
        <div className={`mobile-nav-wrap${open ? " is-open" : ""}`} id="mobile-navigation">
          <nav className="mobile-nav container" aria-label={copy.mobileNavigation}>
            {localizedNavigation.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    className="mobile-nav__link"
                    key={item.href}
                    href={item.href}
                    scroll={item.href === homeHref ? false : undefined}
                    onClick={(event) => handleDirectLinkClick(event, item.href)}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = mobileOpen === item.label;
              const submenuId = `mobile-${item.label.toLowerCase().replaceAll(" ", "-")}`;

              return (
                <div className={`mobile-nav__group${expanded ? " is-open" : ""}`} key={item.label}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={submenuId}
                    onClick={() => setMobileOpen(expanded ? null : item.label)}
                  >
                    {item.label}<ChevronDown aria-hidden="true" />
                  </button>
                  <div className="mobile-nav__submenu-wrap" id={submenuId}>
                    <div className="mobile-nav__submenu">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={closeMobileNavigation}>{child.label}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mobile-language-switcher" aria-label={copy.languageLabel}>
              <span>{copy.language}</span>
              <div>
                <Link href={switchLocaleHref(`${pathname}${currentHash}`, "id")} aria-current={locale === "id" ? "true" : undefined} onClick={() => rememberLanguage("id")}>
                  <span className="language-flag language-flag--id" aria-hidden="true" />ID
                </Link>
                <Link href={switchLocaleHref(`${pathname}${currentHash}`, "en")} aria-current={locale === "en" ? "true" : undefined} onClick={() => rememberLanguage("en")}>
                  <span className="language-flag language-flag--en" aria-hidden="true" />EN
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
