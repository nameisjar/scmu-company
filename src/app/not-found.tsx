import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return <main className="not-found"><Container><p className="section-label">404</p><h1>Halaman tidak ditemukan.</h1><p>Alamat yang Anda buka tidak tersedia.</p><ButtonLink href="/">Kembali ke Beranda</ButtonLink></Container></main>;
}
