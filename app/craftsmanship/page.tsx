 // app/craftsmanship/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

const craftStories = [
  {
    number: "01",
    title: "Couture Fashion",
    eyebrow: "THE SILHOUETTE",
    image: "/images/hero-couture-yellow.jpeg",
    text: "Modern silhouettes with heritage soul, created to express confidence, identity and movement.",
  },
  {
    number: "02",
    title: "Cow Horn Jewellery",
    eyebrow: "EARTH & TRANSFORMATION",
    image: "/images/cow-horn-jewellery.jpeg",
    text: "Ethically sourced cow horn is transformed into sculptural jewellery that carries the strength of the earth.",
  },
  {
    number: "03",
    title: "Rare Gems",
    eyebrow: "NATURAL BEAUTY",
    image: "/images/rare-gem-neckpiece.jpeg",
    text: "Rare natural stones are selected with intention for their character, beauty, strength and individuality.",
  },
  {
    number: "04",
    title: "Maasai Beadwork",
    eyebrow: "LIVING HERITAGE",
    image: "/images/maasai-jewellery-editorial.jpeg",
    text: "Traditional beadwork becomes a contemporary expression while honouring artistry, community and cultural heritage.",
  },
  {
    number: "05",
    title: "Royal Headpieces",
    eyebrow: "DIGNITY & LEADERSHIP",
    image: "/images/royal-headpiece-gold.jpeg",
    text: "Statement headpieces celebrate African majesty, presence, dignity, leadership and the power of women.",
  },
];

const principles = [
  {
    number: "01",
    title: "Heritage",
    text: "We honour East African heritage by carrying its visual language into contemporary luxury.",
  },
  {
    number: "02",
    title: "Intention",
    text: "Materials and forms are selected with meaning rather than simply decoration.",
  },
  {
    number: "03",
    title: "Transformation",
    text: "Natural materials become refined expressions of modern identity and elegance.",
  },
  {
    number: "04",
    title: "Story",
    text: "Every creation is designed to communicate something about the woman who wears it.",
  },
];

export default function CraftsmanshipPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      {/* HERO */}
      <section className="relative min-h-[82vh] overflow-hidden bg-[#17110d] text-white">
        <Image
          src="/images/ubuntu-global-lookbook.jpeg"
          alt="Ubuntu Couture House craftsmanship"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17110d] via-[#17110d]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-[#17110d]/20" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-[1600px] items-end px-6 pb-20 pt-40 sm:px-10 lg:px-14 lg:pb-28">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-[#d8b66a]" />

              <p className="text-[8px] uppercase tracking-[0.5em] text-[#dfc27c]">
                Craftsmanship
              </p>
            </div>

            <h1 className="ubuntu-serif mt-7 text-6xl leading-[0.84] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[110px]">
              Where heritage
              <br />
              becomes
              <br />
              <span className="italic text-[#dfc27c]">art.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
              Ubuntu Couture House brings together natural materials,
              cultural artistry and contemporary design to create pieces
              with meaning.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-black/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              The Philosophy Of Making
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
              Craft is not
              <br />
              decoration.
              <br />
              <span className="italic text-[#a17c3f]">
                It is meaning.
              </span>
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-[#51483e] sm:text-xl">
              Every creation begins with a relationship between material,
              heritage and identity.
            </p>

            <p className="mt-7 text-sm leading-8 text-[#75695d]">
              From couture silhouettes to sculptural jewellery, rare gems,
              reimagined Maasai beadwork and royal headpieces, the house
              seeks to transform heritage into contemporary luxury without
              losing the story that gives each piece its meaning.
            </p>

            <div className="mt-10 border-l border-[#b18b45] pl-6">
              <p className="ubuntu-serif text-3xl italic text-[#96723a]">
                Wear your story.
              </p>

              <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-[#8b7c6c]">
                Ubuntu Couture House
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFT STORIES */}
      <section className="bg-[#17110d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 max-w-4xl">
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#c9a45d]">
              The Making Of The House
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
              Five expressions.
              <br />
              <span className="italic text-[#d8b66a]">
                One heritage.
              </span>
            </h2>
          </div>

          <div className="space-y-24">
            {craftStories.map((story, index) => (
              <article
                key={story.number}
                className="grid gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div
                  className={[
                    "relative aspect-[4/5] overflow-hidden bg-[#211913]",
                    index % 2 === 1 ? "lg:order-2" : "",
                  ].join(" ")}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-[1600ms] hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute left-6 right-6 top-6 flex items-start justify-between">
                    <span className="border border-white/20 bg-black/10 px-4 py-2 text-[8px] uppercase tracking-[0.3em] backdrop-blur">
                      {story.eyebrow}
                    </span>

                    <span className="ubuntu-serif text-6xl text-white/25">
                      {story.number}
                    </span>
                  </div>
                </div>

                <div
                  className={[
                    "max-w-xl",
                    index % 2 === 1
                      ? "lg:order-1 lg:pl-8"
                      : "lg:pl-8",
                  ].join(" ")}
                >
                  <p className="text-[8px] uppercase tracking-[0.4em] text-[#d8b66a]">
                    {story.eyebrow}
                  </p>

                  <h3 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-6xl">
                    {story.title}
                  </h3>

                  <p className="mt-7 text-sm leading-8 text-white/50">
                    {story.text}
                  </p>

                  <div className="mt-8 h-px w-20 bg-[#c9a45d]" />

                  <p className="mt-6 text-[8px] uppercase tracking-[0.28em] text-white/25">
                    Ubuntu Couture House
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-[#e9dfcf] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                Materials With Meaning
              </p>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
                The language
                <br />
                of
                <br />
                <span className="italic text-[#a17c3f]">
                  materials.
                </span>
              </h2>
            </div>

            <div className="grid gap-px bg-black/10 sm:grid-cols-2">
              {[
                {
                  title: "Cow Horn",
                  text: "Resilience, earth and transformation.",
                },
                {
                  title: "Rare Gems",
                  text: "Rarity, strength and natural beauty.",
                },
                {
                  title: "Maasai Beads",
                  text: "Community, artistry and living heritage.",
                },
                {
                  title: "Textiles",
                  text: "Movement, identity and contemporary expression.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="bg-[#e9dfcf] p-8 sm:p-10"
                >
                  <span className="text-[8px] tracking-[0.3em] text-[#a17b3c]">
                    0{index + 1}
                  </span>

                  <h3 className="ubuntu-serif mt-7 text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#75695d]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#f7f1e6] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              Our Craft Principles
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl sm:text-7xl">
              Made with
              <br />
              <span className="italic text-[#a17c3f]">
                intention.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-black/10 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="border-b border-r border-black/10 p-8 sm:p-12"
              >
                <span className="text-[8px] tracking-[0.3em] text-[#a17b3c]">
                  {principle.number}
                </span>

                <h3 className="ubuntu-serif mt-8 text-4xl">
                  {principle.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-8 text-[#75695d]">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT DETAIL */}
      <section className="relative overflow-hidden bg-[#211913] text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[650px]">
            <Image
              src="/images/elders-path-lookbook.jpeg"
              alt="Ubuntu heritage craftsmanship"
              fill
              sizes="50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-center px-7 py-24 sm:px-12 lg:px-20">
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#d8b66a]">
              Heritage Into The Future
            </p>

            <h2 className="ubuntu-serif mt-7 text-5xl leading-[0.9] sm:text-7xl">
              Tradition
              <br />
              does not have
              <br />
              to remain
              <br />
              <span className="italic text-[#d8b66a]">
                in the past.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/45">
              Ubuntu Couture House reinterprets heritage through a modern
              luxury lens. The intention is not to erase tradition, but to
              create new ways for it to live, evolve and be experienced.
            </p>

            <Link
              href="/collections/catalogue"
              className="mt-9 inline-flex w-fit border border-[#c9a45d]/50 px-7 py-4 text-[8px] uppercase tracking-[0.3em] text-[#d8b66a] transition hover:bg-[#c9a45d] hover:text-[#17110d]"
            >
              Explore The Collections →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#c9a45d] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[8px] uppercase tracking-[0.45em] text-black/50">
            Ubuntu Couture House
          </p>

          <h2 className="ubuntu-serif mt-7 max-w-6xl text-6xl leading-[0.86] tracking-[-0.04em] md:text-8xl lg:text-[105px]">
            Heritage.
            <br />
            Craft.
            <br />
            <span className="italic">
              Identity.
            </span>
          </h2>

          <div className="mt-10 flex flex-col gap-6 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-black/55">
              Pieces designed to reflect who you are and who you are becoming.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/collections/catalogue"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] uppercase tracking-[0.3em] text-[#dfc27c] transition hover:bg-white hover:text-[#17110d]"
              >
                Explore Collections
              </Link>

              <Link
                href="/appointments"
                className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] uppercase tracking-[0.3em] text-[#17110d] transition hover:bg-[#17110d] hover:text-white"
              >
                Private Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}