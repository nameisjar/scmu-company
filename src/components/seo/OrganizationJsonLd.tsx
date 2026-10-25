import { company, offices } from "@/data/company";

const siteUrl = company.siteUrl.replace(/\/+$/, "");

const officeSchemas = offices.map((office) => ({
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#office-${office.id}`,
  name: `${company.name} — ${office.label}`,
  url: `${siteUrl}/kontak`,
  image: `${siteUrl}/logo/scmu-mark.png`,
  telephone: office.phone,
  hasMap: office.mapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: office.address,
    addressLocality: office.city,
    addressCountry: "ID",
  },
  parentOrganization: { "@id": `${siteUrl}/#organization` },
}));

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      alternateName: "PT. SCMU",
      url: siteUrl,
      logo: `${siteUrl}/logo/scmu-mark.png`,
      email: company.email,
      telephone: company.phone,
      description: company.description,
      address: officeSchemas[0].address,
      department: officeSchemas.map((office) => ({ "@id": office["@id"] })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "PT. SCMU",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: ["id-ID", "en"],
    },
    ...officeSchemas,
  ],
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
