import Image from "next/image";
import Link from "next/link";

export function Brand({ href = "/", homeLabel = "Beranda" }: { href?: string; homeLabel?: string }) {
  return (
    <Link className="brand" href={href} aria-label={`PT. SCMU — PT. Sarana Cipta Mandiri Utama — ${homeLabel}`}>
      <Image
        className="brand__logo"
        src="/logo/scmu-mark.png"
        alt=""
        width={96}
        height={96}
        sizes="(max-width: 620px) 48px, 68px"
      />
      <span className="brand__wordmark">
        <span className="brand__acronym">PT. SCMU</span>
        <span className="brand__legal-name">PT. Sarana Cipta Mandiri Utama</span>
      </span>
    </Link>
  );
}
