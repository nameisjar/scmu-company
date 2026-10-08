import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="PT. SCMU — Beranda">
      <Image
        className="brand__logo"
        src="/logo/scmu-logo.png"
        alt=""
        width={64}
        height={64}
        priority
        sizes="64px"
      />
      <span className="brand__text">PT. SCMU</span>
    </Link>
  );
}
