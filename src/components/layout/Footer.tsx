import Link from "next/link";
import { ScmuChatIcon, ScmuLocationIcon, ScmuMailIcon } from "@/components/icons/ScmuIcons";
import { company, navigation } from "@/data/company";
import { services } from "@/data/services";
import { Container } from "../ui/Container";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="footer anchor-section" id="footer">
      <Container className="footer__grid">
        <div className="footer__about">
          <Brand />
          <p>{company.description}</p>
        </div>
        <div>
          <h2>Navigasi</h2>
          <ul>
            {navigation.slice(1).map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Layanan</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/layanan/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Kontak</h2>
          <ul className="footer__contact">
            <li><ScmuChatIcon aria-hidden="true" />{company.phone || "Nomor resmi belum diisi"}</li>
            <li><ScmuMailIcon aria-hidden="true" />{company.email || "Email resmi belum diisi"}</li>
            <li><ScmuLocationIcon aria-hidden="true" />{company.address || "Alamat resmi belum diisi"}</li>
          </ul>
        </div>
      </Container>
      <div className="footer__legal">
        <Container className="footer__bottom">
          <p>© {new Date().getFullYear()} PT. SCMU. All Rights Reserved.</p>
          <p>Pengiriman darat · udara · laut · sungai · multimoda</p>
        </Container>
      </div>
    </footer>
  );
}
