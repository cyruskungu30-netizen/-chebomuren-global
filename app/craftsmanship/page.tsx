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

const materials = [
  {
    number: "01",
    title: "Cow Horn",
    text: "Resilience, earth and transformation.",
  },
  {
    number: "02",
    title: "Rare Gems",
    text: "Rarity, strength and natural beauty.",
  },
  {
    number: "03",
    title: "Maasai Beads",
    text: "Community, artistry and living heritage.",
  },
  {
    number: "04",
    title: "Textiles",
    text: "Movement, identity and contemporary expression.",
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
      <section className="relative min-h-[88vh] overflow-hidden bg-[#17110d] text-white">
        <Image
          src="/images/ubuntu-global-lookbook.jpeg"
          alt="Ubuntu Couture House craftsmanship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55 transition-transform duration-[1800ms] hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-[#17110d]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110d] via-[#17110d]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-[#17110d]/15" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1600px] items-end px-6 pb-16 pt-40 sm:px-10 lg:px-14 lg:pb-24">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-[#d8b66a]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.5em] text-[#dfc27c]">
                Craftsmanship
              </p>
            </div>

            <h1 className="ubuntu-serif mt-8 text-[clamp(4.2rem,10vw,9.5rem)] leading-[0.83] tracking-[-0.045em]">
              Where heritage
              <br />
              becomes
              <br />
              <span className="italic text-[#dfc27c]">art.</span>
            </h1>

            <div className="mt-10 max-w-3xl border-l border-white/20 pl-6 lg:pl-8">
              <p className="max-w-2xl text-sm leading-8 text-white/55 md:text-base">
                Ubuntu Couture House brings together natural materials,
                cultural artistry and contemporary design to create pieces
                with meaning.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[8px] uppercase tracking-[0.3em] text-white/35">
              <span>Couture</span>
              <span>Jewellery</span>
              <span>Beadwork</span>
              <span>Headpieces</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              The Philosophy Of Making
            </p>

            <h2 className="ubuntu-serif mt-6 text-[clamp(3.4rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
              Craft is not
              <br />
              decoration.
              <br />
              <span className="italic text-[#a17c3f]">It is meaning.</span>
            </h2>
          </div>

          <div className="max-w-3xl self-end">
            <p className="text-lg leading-9 text-[#51483e] sm:text-xl">
              Every creation begins with a relationship between material,
              heritage and identity.
            </p>

            <p className="mt-8 text-sm leading-8 text-[#75695d]">
              From couture silhouettes to sculptural jewellery, rare gems,
              reimagined Maasai beadwork and royal headpieces, the house seeks
              to transform heritage into contemporary luxury without losing the
              story that gives each piece its meaning.
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

      <section className="bg-[#17110d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                The Making Of The House
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,7vw,7rem)] leading-[0.88] tracking-[-0.04em]">
                Five expressions.
                <br />
                <span className="italic text-[#d8b66a]">One heritage.</span>
              </h2>
            </div>

            <p className="max-w-xs text-xs leading-7 text-white/35 lg:pb-2">
              Distinct disciplines, connected by one philosophy: meaningful
              design rooted in heritage.
            </p>
          </div>

          <div className="space-y-28 lg:space-y-36">
            {craftStories.map((story, index) => (
              <article
                key={story.number}
                className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                <div
                  className={[
                    "group relative aspect-[4/5] overflow-hidden bg-[#211913]",
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1",
                  ].join(" ")}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                  <div className="absolute left-6 right-6 top-6 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8">
                    <span className="border border-white/20 bg-black/10 px-4 py-2 text-[8px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
                      {story.eyebrow}
                    </span>

                    <span className="ubuntu-serif text-6xl leading-none text-white/25">
                      {story.number}
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                    <span className="h-px w-16 bg-[#d8b66a]" />
                    <span className="text-[8px] uppercase tracking-[0.28em] text-white/40">
                      Ubuntu Couture
                    </span>
                  </div>
                </div>

                <div
                  className={[
                    "max-w-xl",
                    index % 2 === 1
                      ? "lg:order-1 lg:pr-8"
                      : "lg:order-2 lg:pl-8",
                  ].join(" ")}
                >
                  <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#d8b66a]">
                    {story.eyebrow}
                  </p>

                  <div className="mt-5 h-px w-16 bg-[#c9a45d]" />

                  <h3 className="ubuntu-serif mt-7 text-[clamp(3rem,5vw,5rem)] leading-[0.9] tracking-[-0.03em]">
                    {story.title}
                  </h3>

                  <p className="mt-7 max-w-lg text-sm leading-8 text-white/50">
                    {story.text}
                  </p>

                  <p className="mt-8 text-[8px] uppercase tracking-[0.28em] text-white/25">
                    Expression {story.number} / 05
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfcf] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                Materials With Meaning
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
                The language
                <br />
                of
                <br />
                <span className="italic text-[#a17c3f]">materials.</span>
              </h2>
            </div>

            <div className="grid gap-px self-start bg-black/10 sm:grid-cols-2">
              {materials.map((item) => (
                <div
                  key={item.title}
                  className="group bg-[#e9dfcf] p-8 transition-colors duration-300 hover:bg-[#ded1bd] sm:p-10"
                >
                  <span className="text-[8px] font-medium tracking-[0.3em] text-[#a17b3c]">
                    {item.number}
                  </span>

                  <h3 className="ubuntu-serif mt-8 text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-[#75695d]">
                    {item.text}
                  </p>

                  <div className="mt-8 h-px w-8 bg-[#a17b3c] transition-all duration-300 group-hover:w-14" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1e6] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              Our Craft Principles
            </p>

            <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
              Made with
              <br />
              <span className="italic text-[#a17c3f]">intention.</span>
            </h2>
          </div>

          <div className="grid border-l border-t border-black/10 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="group border-b border-r border-black/10 p-8 transition-colors duration-300 hover:bg-[#efe7d9] sm:p-12"
              >
                <span className="text-[8px] font-medium tracking-[0.3em] text-[#a17b3c]">
                  {principle.number}
                </span>

                <h3 className="ubuntu-serif mt-8 text-4xl">
                  {principle.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-8 text-[#75695d]">
                  {principle.text}
                </p>

                <div className="mt-8 h-px w-8 bg-[#a17b3c] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#211913] text-white">
        <div className="grid lg:grid-cols-2">
          <div className="group relative min-h-[560px] lg:min-h-[720px]">
            <Image
              src="/images/elders-path-lookbook.jpeg"
              alt="Ubuntu heritage craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 text-[8px] uppercase tracking-[0.3em] text-white/40">
              Heritage / Continuity
            </div>
          </div>

          <div className="flex flex-col justify-center px-7 py-24 sm:px-12 lg:px-20">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#d8b66a]">
              Heritage Into The Future
            </p>

            <h2 className="ubuntu-serif mt-7 text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.86] tracking-[-0.04em]">
              Tradition
              <br />
              does not have
              <br />
              to remain
              <br />
              <span className="italic text-[#d8b66a]">in the past.</span>
            </h2>

            <p className="mt-9 max-w-xl text-sm leading-8 text-white/45">
              Ubuntu Couture House reinterprets heritage through a modern
              luxury lens. The intention is not to erase tradition, but to
              create new ways for it to live, evolve and be experienced.
            </p>

            <Link
              href="/collections/catalogue"
              className="mt-10 inline-flex min-h-[52px] w-fit items-center border border-[#c9a45d]/50 px-7 text-[8px] font-medium uppercase tracking-[0.3em] text-[#d8b66a] transition-colors duration-300 hover:border-[#c9a45d] hover:bg-[#c9a45d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b66a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#211913]"
            >
              Explore The Collections
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#c9a45d] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/50">
            Ubuntu Couture House
          </p>

          <h2 className="ubuntu-serif mt-7 max-w-6xl text-[clamp(4rem,9vw,8.5rem)] leading-[0.84] tracking-[-0.05em]">
            Heritage.
            <br />
            Craft.
            <br />
            <span className="italic">Identity.</span>
          </h2>

          <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-black/55">
              Pieces designed to reflect who you are and who you are becoming.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/collections/catalogue"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-white hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
              >
                Explore Collections
              </Link>

              <Link
                href="/appointments"
                className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
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