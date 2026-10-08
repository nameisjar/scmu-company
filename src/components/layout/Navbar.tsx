"use client";

import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { company, navigation } from "@/data/company";
import { Brand } from "./Brand";
import { Container } from "../ui/Container";

const HOME_SCROLL_KEY = "scmu-scroll-home-top";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setDesktopOpen(null);
    setMobileOpen(null);

    if (pathname !== "/" || sessionStorage.getItem(HOME_SCROLL_KEY) !== "1") return;

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
  }, [pathname]);

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const isChildActive = (href: string) => {
    const childPath = href.split("#")[0];
    return childPath !== "/" && pathname === childPath;
  };

  const closeMobileNavigation = () => {
    setOpen(false);
    setMobileOpen(null);
  };

  const handleDirectLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setDesktopOpen(null);
    closeMobileNavigation();

    if (href === "/" && pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      href === "/" &&
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
          <Brand />
          <div className="utility-bar__details">
            {company.email ? (
              <a href={`mailto:${company.email}`}><Mail aria-hidden="true" />{company.email}</a>
            ) : (
              <span className="utility-bar__placeholder"><Mail aria-hidden="true" /><span>info@scmu.co.id</span></span>
            )}
            {company.whatsapp ? (
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer"><Phone aria-hidden="true" />{company.phone || company.whatsapp}</a>
            ) : (
              <span className="utility-bar__placeholder"><Phone aria-hidden="true" /><span>+62 812 3456 7890</span></span>
            )}
          </div>
        </Container>
      </div>
      <header className="site-header">
        <Container className="navbar">
          <div className="navbar__mobile-brand"><Brand /></div>
          <nav className="desktop-nav" aria-label="Navigasi utama" ref={desktopNavRef}>
            {navigation.map((item) => {
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
                  scroll={item.href === "/" ? false : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={(event) => handleDirectLinkClick(event, item.href)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            className="mobile-menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </Container>
        <div className={`mobile-nav-wrap${open ? " is-open" : ""}`} id="mobile-navigation">
          <nav className="mobile-nav container" aria-label="Navigasi mobile">
            {navigation.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    className="mobile-nav__link"
                    key={item.href}
                    href={item.href}
                    scroll={item.href === "/" ? false : undefined}
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
          </nav>
        </div>
      </header>
    </>
  );
}
