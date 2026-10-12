"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScmuChatIcon, ScmuClockIcon, ScmuLocationIcon, ScmuMailIcon } from "@/components/icons/ScmuIcons";
import { company, companyEn, navigation, navigationEn, offices } from "@/data/company";
import { services, servicesEn } from "@/data/services";
import { getCommonCopy } from "@/i18n/copy";
import { localeFromPathname } from "@/i18n/config";
import { Container } from "../ui/Container";
import { Brand } from "./Brand";

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = getCommonCopy(locale);
  const localizedCompany = locale === "en" ? companyEn : company;
  const localizedNavigation = locale === "en" ? navigationEn : navigation;
  const localizedServices = locale === "en" ? servicesEn : services;
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <footer className="footer anchor-section" id="footer">
      <Container className="footer__grid">
        <div className="footer__about">
          <Brand href={homeHref} homeLabel={locale === "en" ? "Home" : "Beranda"} />
          <p>{localizedCompany.footerDescription}</p>
        </div>
        <div>
          <h2>{copy.navigation}</h2>
          <ul>
            {localizedNavigation.slice(1).map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{copy.services}</h2>
          <ul>
            {localizedServices.map((service) => (
              <li key={service.slug}>
                <Link href={`${locale === "en" ? "/en" : ""}/layanan#${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{copy.contact}</h2>
          <ul className="footer__contact">
            <li><ScmuChatIcon aria-hidden="true" />{company.phone || "Nomor resmi belum diisi"}</li>
            <li><ScmuMailIcon aria-hidden="true" />{company.email || "Email resmi belum diisi"}</li>
            {offices.map((office) => (
              <li className="footer__office" key={office.id}>
                <ScmuLocationIcon aria-hidden="true" />
                <a className="footer__office-link" href={office.mapsUrl} target="_blank" rel="noreferrer">
                  <strong>{locale === "en" ? office.typeEn : office.type}</strong>
                  <span>{office.address}</span>
                </a>
              </li>
            ))}
            <li><ScmuClockIcon aria-hidden="true" />{localizedCompany.operationalHours}</li>
          </ul>
        </div>
      </Container>
      <div className="footer__legal">
        <Container className="footer__bottom">
          <p>© {new Date().getFullYear()} PT. SCMU. {copy.allRights}</p>
          <p>{copy.footerModes}</p>
        </Container>
      </div>
    </footer>
  );
}
