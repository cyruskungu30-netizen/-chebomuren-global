 import type { Metadata } from "next";
import Link from "next/link";

import LuxuryImageReveal from "@/components/LuxuryImageReveal";

export const metadata: Metadata = {
  title: "Gallery | Ubuntu Couture House",
  description:
    "Explore the visual archive of Ubuntu Couture House through couture fashion, jewellery, rare gems, beadwork, and royal headpieces.",
};

const gallery = [
  {
    src: "/images/hero-couture-yellow.jpeg",
    alt: "Ubuntu couture fashion",
    eyebrow: "Couture",
    title: "African elegance",
    description:
      "Modern silhouettes shaped by heritage, confidence, movement, and identity.",
    href: "/collections/catalogue?category=couture",
  },
  {
    src: "/images/cow-horn-jewellery.jpeg",
    alt: "Sculptural cow horn jewellery",
    eyebrow: "Jewellery",
    title: "Earth transformed",
    description:
      "Natural materials reimagined into sculptural expressions of contemporary luxury.",
    href: "/collections/catalogue?category=jewellery",
  },
  {
    src: "/images/rare-gem-neckpiece.jpeg",
    alt: "Rare gemstone neckpiece",
    eyebrow: "Rare Gems",
    title: "Rare by nature",
    description:
      "Natural beauty selected for its character, strength, individuality, and presence.",
    href: "/collections/catalogue?category=rare-gems",
  },
  {
    src: "/images/maasai-jewellery-editorial.jpeg",
    alt: "Maasai beadwork jewellery",
    eyebrow: "Beadwork",
    title: "Living heritage",
    description:
      "Traditional artistry translated into a contemporary expression while respecting its roots.",
    href: "/collections/catalogue?category=beadwork",
  },
  {
    src: "/images/royal-headpiece-gold.jpeg",
    alt: "Gold royal headpiece",
    eyebrow: "Headpieces",
    title: "Royal presence",
    description:
      "Dignity, leadership, identity, and African majesty expressed through statement design.",
    href: "/collections/catalogue?category=headpieces",
  },
  {
    src: "/images/ubuntu-global-lookbook.jpeg",
    alt: "Ubuntu Couture House global lookbook",
    eyebrow: "Lookbook",
    title: "Wear your story",
    description:
      "A visual language shaped by heritage, identity, memory, and becoming.",
    href: "/campaign",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#f7f1e6] text-[#17110d]">
      <section className="relative overflow-hidden px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-180px] top-20 h-[500px] w-[500px] rounded-full border border-[#17110d]/[0.06]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-80px] top-40 h-[300px] w-[300px] rounded-full border border-[#17110d]/[0.05]"
        />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#92713d]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.42em] text-[#92713d]">
              The Visual Archive
            </p>
          </div>

          <h1 className="ubuntu-serif mt-7 max-w-6xl text-[clamp(4.3rem,9vw,9rem)] leading-[0.84] tracking-[-0.05em]">
            Beauty,
            <br />
            <span className="italic text-[#92713d]">captured.</span>
          </h1>

          <div className="mt-10 grid gap-8 border-t border-[#17110d]/10 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-sm leading-8 text-[#63574c] sm:text-base">
              A curated visual journey through the materials, silhouettes,
              craftsmanship, and stories that define Ubuntu Couture House.
            </p>

            <Link
              href="/collections/catalogue"
              className="inline-flex min-h-[50px] w-fit items-center justify-center border border-[#17110d] px-7 text-[9px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-[#17110d] hover:text-[#f7f1e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f1e6]"
            >
              Shop The Collections
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex items-end justify-between border-b border-[#17110d]/10 pb-5">
            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#17110d]/45">
              Selected Works
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.25em] text-[#17110d]/30 sm:block">
              06 Expressions
            </p>
          </div>

          <div className="grid gap-x-5 gap-y-16 md:grid-cols-2 md:gap-y-24">
            {gallery.map((item, index) => (
              <div
                key={item.src}
                className={index % 3 === 1 ? "md:mt-24" : ""}
              >
                <LuxuryImageReveal {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#211913] px-6 py-24 text-[#f7f1e6] sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#c8aa6b]">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-7 text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.88] tracking-[-0.04em]">
              Every image
              <br />
              carries a
              <br />
              <span className="italic text-[#c8aa6b]">story.</span>
            </h2>
          </div>

          <div className="border-l border-white/10 pl-7 lg:pb-2">
            <p className="max-w-xl text-sm leading-8 text-white/50 sm:text-base">
              Explore the House, discover the collections, and find the pieces
              that speak to your own story.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/collections/catalogue"
                className="inline-flex min-h-[50px] items-center justify-center bg-[#c9a45d] px-7 text-[9px] font-medium uppercase tracking-[0.25em] text-[#17110d] transition-colors duration-300 hover:bg-[#dfc27c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8aa6b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#211913]"
              >
                Explore Collections
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center justify-center border border-white/20 px-7 text-[9px] font-medium uppercase tracking-[0.25em] text-white/75 transition-colors duration-300 hover:border-[#c9a45d] hover:text-[#dfc27c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8aa6b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#211913]"
              >
                Contact The House
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}