 import Image from "next/image";
import Link from "next/link";

import UbuntuShell from "@/components/UbuntuShell";
import LuxuryReveal from "@/components/LuxuryReveal";

const collections = [
  {
    number: "01",
    title: "Couture Fashion",
    subtitle: "Silhouette · Identity · Presence",
    description:
      "Modern silhouettes with heritage soul. Ubuntu Couture fashion is designed for women who want their clothing to communicate confidence, identity and distinction before they say a word.",
    image: "/images/couture-brown-front.jpeg",
    secondary: "/images/couture-brown-back.jpeg",
    quote: "Dress the story you want the world to remember.",
  },
  {
    number: "02",
    title: "Contemporary Jewellery",
    subtitle: "Sculpture · Heritage · Expression",
    description:
      "Jewellery becomes architecture. Natural materials, metal, beads and sculptural forms come together to create statement pieces inspired by East African heritage.",
    image: "/images/maasai-jewellery-editorial.jpeg",
    secondary: "/images/cow-horn-jewellery.jpeg",
    quote: "Adornment becomes language.",
  },
  {
    number: "03",
    title: "Rare Gems",
    subtitle: "Rarity · Strength · Natural Beauty",
    description:
      "Natural beauty selected with intention. Rare stones and gems are presented as symbols of resilience, strength and the extraordinary character of the woman who wears them.",
    image: "/images/rare-gem-neckpiece.jpeg",
    secondary: "/images/cow-horn-jewellery.jpeg",
    quote: "Rare by nature. Meaningful by design.",
  },
  {
    number: "04",
    title: "Reimagined Maasai Beadwork",
    subtitle: "Living Heritage · Craft · Culture",
    description:
      "Traditional beadwork is translated into contemporary luxury. Colour, geometry and craftsmanship become a bridge between generations.",
    image: "/images/maasai-jewellery-editorial.jpeg",
    secondary: "/images/ubuntu-brand-board.jpeg",
    quote: "Heritage does not have to stand still.",
  },
  {
    number: "05",
    title: "Royal Headpieces",
    subtitle: "Dignity · Leadership · Majesty",
    description:
      "Royal headpieces inspired by African majesty and the symbolism of leadership. Created for moments when presence is part of the message.",
    image: "/images/royal-headpiece-gold.jpeg",
    secondary: "/images/heritage-floral-headpiece.jpeg",
    quote: "Enter the room as though your story matters.",
  },
];

export default function CollectionsPage() {
  return (
    <UbuntuShell>
      <main className="overflow-hidden">
        <section
          aria-labelledby="collections-heading"
          className="relative flex min-h-[90vh] items-end bg-[#17110d] px-6 pb-20 pt-40 text-white lg:px-12 lg:pb-28"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/ubuntu-global-lookbook.jpeg"
              alt="Ubuntu Couture House collection"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-45"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-[#17110d]/55 to-black/10"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#17110d]/35 via-transparent to-transparent"
            />
          </div>

          <div className="relative mx-auto w-full max-w-[1500px]">
            <LuxuryReveal>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#e0c27d]">
                Ubuntu Couture House
              </p>
            </LuxuryReveal>

            <LuxuryReveal delay={120}>
              <h1
                id="collections-heading"
                className="ubuntu-serif mt-7 max-w-6xl text-[4rem] leading-[0.84] tracking-[-0.055em] sm:text-7xl lg:text-[110px]"
              >
                The
                <br />
                <span className="italic text-[#d6b66c]">Collections.</span>
              </h1>
            </LuxuryReveal>

            <LuxuryReveal delay={220}>
              <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/15 pt-7 md:flex-row md:items-end">
                <p className="max-w-2xl text-sm leading-8 text-white/55">
                  Couture fashion, contemporary jewellery, rare gems,
                  reimagined Maasai beadwork and royal headpieces — created
                  where African heritage meets modern luxury.
                </p>

                <div className="text-[8px] font-medium uppercase tracking-[0.35em] text-white/30">
                  Designed in East Africa
                  <br />
                  Loved everywhere
                </div>
              </div>
            </LuxuryReveal>
          </div>
        </section>

        <section className="bg-[#f7f1e6] px-6 py-28 lg:px-12 lg:py-40">
          <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-2 lg:items-center">
            <LuxuryReveal direction="left">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#9a773c]">
                  A House Of Meaning
                </p>

                <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.92] tracking-[-0.035em] md:text-7xl">
                  Not simply
                  <br />
                  <span className="italic text-[#a17c3e]">
                    something to wear.
                  </span>
                </h2>
              </div>
            </LuxuryReveal>

            <LuxuryReveal direction="right" delay={150}>
              <div className="space-y-6 text-sm leading-8 text-[#716559]">
                <p>
                  Ubuntu Couture House is for women who carry stories, honour
                  their roots and walk confidently into the future.
                </p>

                <p>
                  Every collection transforms cultural memory into contemporary
                  expression. The result is fashion and jewellery that feels
                  personal rather than simply decorative.
                </p>

                <p className="ubuntu-serif text-2xl italic text-[#9a773c]">
                  “I am because we are.”
                </p>
              </div>
            </LuxuryReveal>
          </div>
        </section>

        <section aria-label="Ubuntu Couture House collections" className="bg-[#e9dfcf]">
          {collections.map((collection, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={collection.number}
                className="grid border-t border-black/10 lg:grid-cols-2"
              >
                <LuxuryReveal
                  direction={reverse ? "right" : "left"}
                  className={reverse ? "lg:order-2" : ""}
                >
                  <div className="group relative min-h-[600px] overflow-hidden lg:min-h-[760px]">
                    <Image
                      src={collection.image}
                      alt={`${collection.title} — Ubuntu Couture House`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                    />

                    <div className="absolute left-7 top-7 border border-white/30 bg-black/15 px-4 py-3 text-[8px] font-medium tracking-[0.3em] text-white backdrop-blur-sm">
                      {collection.number}
                    </div>

                    <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-5 text-white">
                      <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/65">
                        {collection.subtitle.split(" · ")[0]}
                      </span>

                      <span className="text-[8px] uppercase tracking-[0.25em] text-white/45">
                        Ubuntu House
                      </span>
                    </div>
                  </div>
                </LuxuryReveal>

                <LuxuryReveal
                  direction={reverse ? "left" : "right"}
                  delay={120}
                  className={reverse ? "lg:order-1" : ""}
                >
                  <div className="flex min-h-[600px] flex-col justify-center px-7 py-20 md:px-14 lg:min-h-[760px] lg:px-20">
                    <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#9b773d]">
                      {collection.subtitle}
                    </p>

                    <h2 className="ubuntu-serif mt-6 max-w-xl text-5xl leading-[0.92] tracking-[-0.035em] md:text-7xl">
                      {collection.title}
                    </h2>

                    <div
                      aria-hidden="true"
                      className="my-9 h-px w-16 bg-[#b28b47]"
                    />

                    <p className="max-w-xl text-sm leading-8 text-[#716357]">
                      {collection.description}
                    </p>

                    <p className="ubuntu-serif mt-9 max-w-lg text-2xl leading-8 italic text-[#8f6d37]">
                      “{collection.quote}”
                    </p>

                    <div className="mt-10">
                      <Link
                        href={`/contact?collection=${encodeURIComponent(
                          collection.title,
                        )}`}
                        className="luxury-button luxury-button-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e9dfcf]"
                      >
                        Enquire About This Collection
                      </Link>
                    </div>
                  </div>
                </LuxuryReveal>
              </article>
            );
          })}
        </section>

        <section
          aria-labelledby="philosophy-heading"
          className="relative overflow-hidden bg-[#17110d] px-6 py-32 text-white lg:px-12 lg:py-48"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a45d]/10 md:block"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a45d]/[0.035] lg:block"
          />

          <div className="relative mx-auto max-w-5xl text-center">
            <LuxuryReveal>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                Ubuntu Philosophy
              </p>

              <h2
                id="philosophy-heading"
                className="ubuntu-serif mt-8 text-6xl leading-[0.88] tracking-[-0.045em] md:text-[100px]"
              >
                I am
                <br />
                <span className="italic text-[#d9bb75]">
                  because we are.
                </span>
              </h2>

              <p className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-white/40">
                Every creation is a reminder that identity is never isolated.
                It is inherited, carried, transformed and passed forward.
              </p>
            </LuxuryReveal>

            <LuxuryReveal delay={200}>
              <Link
                href="/contact"
                className="luxury-button mt-10 border-[#c9a45d]/50 text-[#d9bb75] hover:bg-[#c9a45d] hover:text-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d]"
              >
                Begin Your Ubuntu Story
              </Link>
            </LuxuryReveal>
          </div>
        </section>
      </main>
    </UbuntuShell>
  );
}