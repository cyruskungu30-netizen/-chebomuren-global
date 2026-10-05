 const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ubuntu-couture-house.vercel.app";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ubuntu Couture House",
  url: siteUrl,
  description:
    "African Elegance and Luxury Reimagined. Couture fashion, contemporary jewellery, rare gems, reimagined Maasai beadwork, and royal headpieces.",
  slogan: "African Elegance and Luxury Reimagined.",
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ubuntu Couture House",
  url: siteUrl,
  description:
    "African luxury fashion and heritage-inspired contemporary design.",
};

export default function UbuntuStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  );
}