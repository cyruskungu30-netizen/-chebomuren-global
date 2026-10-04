import type { Metadata } from "next";
import Link from "next/link";

import LuxuryImageReveal from "@/components/LuxuryImageReveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the visual world of Ubuntu Couture House through couture fashion, jewellery, rare gems, beadwork, and royal headpieces.",
};

const gallery = [
  {
    src: "/images/hero-couture-yellow.jpeg",
    alt: "Ubuntu couture fashion",
    eyebrow: "Couture",
    title: "African elegance",
    description:
      "Modern silhouettes shaped by heritage and confidence.",
    href: "/collections/catalogue?category=couture",
  },
  {
    src: "/images/cow-horn-jewellery.jpeg",
    alt: "Cow horn jewellery",
    eyebrow: "Jewellery",
    title: "Earth transformed",
    description:
      "Natural materials reimagined as sculptural luxury.",
    href: "/collections/catalogue?category=jewellery",
  },
  {
    src: "/images/rare-gem-neckpiece.jpeg",
    alt: "Rare gemstone jewellery",
    eyebrow: "Rare Gems",
    title: "Rare by nature",
    description:
      "Natural beauty selected as a symbol of strength.",
    href: "/collections/catalogue?category=rare-gems",
  },
  {
    src: "/images/maasai-jewellery-editorial.jpeg",
    alt: "Maasai inspired jewellery",
    eyebrow: "Beadwork",
    title: "Living heritage",
    description:
      "Traditional artistry translated into contemporary expression.",
    href: "/collections/catalogue?category=beadwork",
  },
  {
    src: "/images/royal-headpiece-gold.jpeg",
    alt: "Gold royal headpiece",
    eyebrow: "Headpieces",
    title: "Royal presence",
    description:
      "Dignity, leadership, and African majesty.",
    href: "/collections/catalogue?category=headpieces",
  },
  {
    src: "/images/ubuntu-global-lookbook.jpeg",
    alt: "Ubuntu Couture House lookbook",
    eyebrow: "Lookbook",
    title: "Wear your story",
    description:
      "A visual language of heritage, identity, and becoming.",
    href: "/campaign",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#f7f1e6] text-[#17110d]">
      <section className="px-5 pb-16 pt-40 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#92713d]">
            The Visual Archive
          </p>

          <h1 className="mt-6 max-w-5xl font-[var(--font-ubuntu-serif)] text-6xl font-light leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-[9rem]">
            Beauty,
            <br />
            captured.
          </h1>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-2xl text-sm leading-7 text-[#63574c] sm:text-base sm:leading-8">
              A curated visual journey through the materials, silhouettes,
              craftsmanship, and stories that define Ubuntu Couture House.
            </p>

            <Link
              href="/collections/catalogue"
              className="w-fit border border-[#17110d] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#17110d] hover:text-[#f7f1e6]"
            >
              Shop the collections
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-2">
          {gallery.map((item) => (
            <LuxuryImageReveal
              key={item.src}
              {...item}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#17110d] px-5 py-24 text-[#f7f1e6] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#c8aa6b]">
            Ubuntu Couture House
          </p>

          <h2 className="mt-7 font-[var(--font-ubuntu-serif)] text-5xl font-light leading-none sm:text-6xl lg:text-8xl">
            Every image carries a story.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
            Explore the house, discover the collections, and find the pieces
            that speak to your own story.
          </p>
        </div>
      </section>
    </main>
  );
}