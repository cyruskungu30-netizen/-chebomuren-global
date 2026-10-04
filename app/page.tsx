 "use client";

import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Couture Fashion",
    category: "couture",
    image: "/images/hero-couture-yellow.jpeg",
    text: "Modern silhouettes with heritage soul—crafted for confidence and identity.",
  },
  {
    title: "Contemporary Jewellery",
    category: "jewellery",
    image: "/images/cow-horn-jewellery.jpeg",
    text: "Sculptural statement designs transforming natural materials into luxury.",
  },
  {
    title: "Rare Gems",
    category: "rare-gems",
    image: "/images/rare-gem-neckpiece.jpeg",
    text: "Natural beauty selected with intention—symbols of rarity and strength.",
  },
  {
    title: "Maasai Beadwork",
    category: "beadwork",
    image: "/images/maasai-jewellery-editorial.jpeg",
    text: "Living heritage reinterpreted through contemporary design.",
  },
  {
    title: "Royal Headpieces",
    category: "headpieces",
    image: "/images/royal-headpiece-gold.jpeg",
    text: "Designed to celebrate presence, dignity, leadership and African majesty.",
  },
];

const values = [
  {
    number: "01",
    title: "Heritage",
    text: "East African heritage carried forward through contemporary luxury.",
  },
  {
    number: "02",
    title: "Courage",
    text: "A mother's journey of resilience becomes part of the house's foundation.",
  },
  {
    number: "03",
    title: "Identity",
    text: "Pieces designed to reflect who you are and who you are becoming.",
  },
  {
    number: "04",
    title: "Legacy",
    text: "A mother and daughter's shared vision transformed into something enduring.",
  },
];

const journalStories = [
  {
    title: "A Mother's Courage. A Daughter's Vision.",
    image: "/images/ubuntu-brand-portrait.jpeg",
    href: "/global-story",
  },
  {
    title: "Where Heritage Becomes Art",
    image: "/images/maasai-jewellery-editorial.jpeg",
    href: "/craftsmanship",
  },
  {
    title: "African Elegance, Reimagined",
    image: "/images/hero-couture-yellow.jpeg",
    href: "/collections/catalogue",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f1e6] text-[#17110d]">
      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative min-h-[100svh] overflow-hidden bg-[#17110d] text-white">
        <Image
          src="/images/hero-couture-yellow.jpeg"
          alt="Ubuntu Couture House couture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17110d]/90 via-[#17110d]/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-black/10" />

        <div className="absolute right-[7%] top-[25%] hidden lg:block">
          <div className="relative h-64 w-64 animate-[spin_24s_linear_infinite] rounded-full border border-[#d7b86f]/20">
            <div className="absolute inset-5 rounded-full border border-[#d7b86f]/10" />
            <div className="absolute inset-12 rounded-full border border-[#d7b86f]/10" />

            <span className="absolute left-1/2 top-[-3px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#e1c47d] shadow-[0_0_20px_#e1c47d]" />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1750px] items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-[#d8b66a]" />

              <p className="text-[8px] uppercase tracking-[0.5em] text-[#dfc27c]">
                Ubuntu Couture House
              </p>
            </div>

            <h1 className="ubuntu-serif mt-8 text-[16vw] leading-[0.76] tracking-[-0.055em] sm:text-[13vw] lg:text-[145px]">
              African
              <br />
              <span className="italic text-[#dfc27c]">
                Elegance
              </span>
              <br />
              <span className="text-white/95">
                Reimagined.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
              A mother&apos;s journey from a small village in Kenya to
              international recognition—and a daughter&apos;s journey from
              Atlanta to the world of sport—have come together to create a
              house of heritage, courage and purpose.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/collections/catalogue"
                className="inline-flex min-h-[54px] items-center justify-center bg-[#c9a45d] px-8 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#17110d] transition duration-500 hover:bg-white"
              >
                Shop New Arrivals →
              </Link>

              <Link
                href="#story"
                className="inline-flex min-h-[54px] items-center justify-center border border-white/25 px-8 text-[8px] uppercase tracking-[0.3em] text-white transition duration-500 hover:border-[#d8b66a] hover:bg-white/10"
              >
                Explore The Story
              </Link>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-5">
              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                  Philosophy
                </p>

                <p className="ubuntu-serif mt-2 text-lg italic text-[#d8b66a]">
                  Ubuntu
                </p>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                  Heritage
                </p>

                <p className="mt-2 text-sm text-white/75">
                  East Africa
                </p>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                  House
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Couture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-7 hidden -rotate-90 origin-right lg:block">
          <span className="text-[8px] uppercase tracking-[0.5em] text-white/30">
            Scroll to discover the house
          </span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MANIFESTO */}
      {/* ========================================================= */}

      <section className="relative bg-[#17110d] px-6 py-28 text-white md:py-40 lg:px-12">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-[8px] uppercase tracking-[0.5em] text-[#c9a45d]">
            The Ubuntu Philosophy
          </p>

          <h2 className="ubuntu-serif mt-8 text-5xl leading-[0.9] sm:text-6xl md:text-8xl">
            I am
            <br />
            <span className="italic text-[#dfc27c]">
              because we are.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-2xl text-sm leading-8 text-white/40">
            Ubuntu Couture House believes luxury becomes more powerful when it
            carries meaning. Every creation connects the individual to
            something larger—family, community, culture and legacy.
          </p>
        </div>

        <div className="absolute left-1/2 top-1/2 hidden h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a45d]/5 md:block" />
      </section>

      {/* ========================================================= */}
      {/* HOUSE NUMBERS */}
      {/* ========================================================= */}

      <section className="bg-[#e9dfcf] px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-4">
          {[
            {
              number: "5",
              label: "Signature Collections",
            },
            {
              number: "2",
              label: "Generations",
            },
            {
              number: "1",
              label: "Shared Vision",
            },
            {
              number: "100%",
              label: "Meaning",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border-l border-[#9d7736]/30 pl-6"
            >
              <p className="ubuntu-serif text-5xl text-[#94713a]">
                {item.number}
              </p>

              <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-[#766858]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* COLLECTIONS */}
      {/* ========================================================= */}

      <section className="bg-[#f7f1e6] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1550px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#96743d]">
                The Collections
              </p>

              <h2 className="ubuntu-serif mt-5 text-5xl leading-[0.9] md:text-7xl">
                Discover
                <br />
                <span className="italic text-[#a27d3f]">
                  the house.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#75695c]">
              Couture, jewellery, rare gems, beadwork and royal headpieces
              created where East African heritage meets contemporary luxury.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {collections.map((collection, index) => (
              <Link
                key={collection.category}
                href={`/collections/catalogue?category=${collection.category}`}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#d4c8b7]">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition duration-[1400ms] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <span className="absolute left-5 top-5 text-[8px] tracking-[0.25em] text-white/70">
                    0{index + 1}
                  </span>

                  <div className="absolute bottom-6 left-5 right-5">
                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#dfc27c]">
                      {collection.category}
                    </p>

                    <h3 className="ubuntu-serif mt-3 text-3xl text-white">
                      {collection.title}
                    </h3>

                    <span className="mt-4 inline-block text-[8px] uppercase tracking-[0.25em] text-white/65">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STORY */}
      {/* ========================================================= */}

      <section
        id="story"
        className="relative overflow-hidden bg-[#17110d] text-white"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[650px]">
            <Image
              src="/images/ubuntu-brand-portrait.jpeg"
              alt="Ubuntu Couture House story"
              fill
              sizes="50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-transparent lg:bg-gradient-to-r" />

            <div className="absolute bottom-8 left-7">
              <p className="text-[8px] uppercase tracking-[0.4em] text-[#d8b66a]">
                The House Story
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-7 py-24 md:px-14 lg:px-20">
            <p className="text-[8px] uppercase tracking-[0.4em] text-[#c9a45d]">
              Two Journeys. One Legacy.
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] md:text-7xl">
              A mother&apos;s
              <br />
              <span className="italic text-[#d8b66a]">
                courage.
              </span>
              <br />
              A daughter&apos;s vision.
            </h2>

            <p className="mt-9 max-w-xl text-sm leading-8 text-white/45">
              Ubuntu Couture House is a mother-and-daughter vision rooted in
              courage, heritage and purpose—built from lived experience,
              international recognition and a shared commitment to empowerment.
            </p>

            <Link
              href="/global-story"
              className="mt-9 inline-flex w-fit border border-[#c9a45d]/50 px-7 py-4 text-[8px] uppercase tracking-[0.3em] text-[#d8b66a] transition duration-500 hover:bg-[#c9a45d] hover:text-[#17110d]"
            >
              Enter The Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MEANING */}
      {/* ========================================================= */}

      <section className="bg-[#e9dfcf] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              Meaning Behind Every Creation
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] md:text-7xl">
              Materials become
              <br />
              <span className="italic text-[#9c763b]">
                meaning.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Cow Horn",
                description:
                  "Earth, resilience and transformation become sculptural forms.",
                image: "/images/cow-horn-jewellery.jpeg",
              },
              {
                title: "Rare Gems",
                description:
                  "Natural rarity becomes a symbol of strength and individuality.",
                image: "/images/rare-gem-neckpiece.jpeg",
              },
              {
                title: "Maasai Beadwork",
                description:
                  "Community, colour and living heritage translated into modern luxury.",
                image: "/images/maasai-jewellery-editorial.jpeg",
              },
              {
                title: "Royal Headpieces",
                description:
                  "Dignity and leadership expressed through extraordinary adornment.",
                image: "/images/royal-headpiece-gold.jpeg",
              },
            ].map((material, index) => (
              <Link
                key={material.title}
                href="/craftsmanship"
                className="group relative min-h-[480px] overflow-hidden"
              >
                <Image
                  src={material.image}
                  alt={material.title}
                  fill
                  sizes="25vw"
                  className="object-cover transition duration-[1200ms] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-[8px] uppercase tracking-[0.35em] text-[#dfc17a]">
                    0{index + 1}
                  </p>

                  <h3 className="ubuntu-serif mt-3 text-3xl">
                    {material.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {material.description}
                  </p>

                  <span className="mt-5 inline-block text-[8px] uppercase tracking-[0.25em] text-[#dfc17a]">
                    Discover Craftsmanship →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LOOKBOOK */}
      {/* ========================================================= */}

      <section className="relative min-h-[78vh] overflow-hidden bg-[#17110d]">
        <Image
          src="/images/ubuntu-global-lookbook.jpeg"
          alt="Ubuntu Couture House global lookbook"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-transparent" />

        <div className="relative flex min-h-[78vh] items-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#d8b66a]">
              East Africa → The World
            </p>

            <h2 className="ubuntu-serif mt-6 max-w-5xl text-6xl leading-[0.84] text-white sm:text-8xl lg:text-[105px]">
              Personal history
              <br />
              becomes
              <br />
              <span className="italic text-[#dfc27c]">
                art.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* JOURNEY */}
      {/* ========================================================= */}

      <section className="bg-[#f7f1e6] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                The Journey
              </p>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] md:text-7xl">
                From
                <br />
                <span className="italic text-[#a17c3f]">
                  courage
                </span>
                <br />
                to creation.
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-8 text-[#716559]">
                The house is not only a collection of objects. It is the
                continuation of a story across generations.
              </p>
            </div>

            <div className="grid overflow-hidden bg-[#1a140f] md:grid-cols-2">
              <div className="relative min-h-[520px]">
                <Image
                  src="/images/elders-path-lookbook.jpeg"
                  alt="Ubuntu heritage journey"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between p-8 text-white md:p-12">
                <div>
                  <span className="text-[90px] font-serif leading-none text-white/5">
                    01
                  </span>

                  <p className="mt-[-20px] text-[8px] uppercase tracking-[0.4em] text-[#d7b76f]">
                    Chapter
                  </p>

                  <h3 className="ubuntu-serif mt-6 text-4xl md:text-5xl">
                    The Village
                  </h3>

                  <p className="mt-7 text-sm leading-8 text-white/45">
                    A beginning rooted in community, tradition and the belief
                    that circumstances do not have to define destiny.
                  </p>
                </div>

                <Link
                  href="/global-story"
                  className="mt-12 inline-flex w-fit border-b border-[#d7b76f] pb-2 text-[8px] uppercase tracking-[0.3em] text-[#d7b76f]"
                >
                  Follow The Journey →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VALUES */}
      {/* ========================================================= */}

      <section className="bg-[#17110d] px-6 py-28 text-white lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16">
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#c9a45d]">
              What We Stand For
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] md:text-7xl">
              The values
              <br />
              behind the
              <br />
              <span className="italic text-[#d8b66a]">
                house.
              </span>
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="border-b border-r border-white/10 p-8 sm:p-12"
              >
                <span className="text-[8px] tracking-[0.3em] text-[#d8b66a]">
                  {value.number}
                </span>

                <h3 className="ubuntu-serif mt-10 text-4xl">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-8 text-white/40">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EDITORIAL */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#17110d] px-6 py-28 text-white lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#c9a45d]">
                House Editorial
              </p>

              <h2 className="ubuntu-serif mt-5 text-5xl md:text-7xl">
                Wear your
                <br />
                <span className="italic text-[#d8b66a]">
                  story.
                </span>
              </h2>
            </div>

            <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/25 md:block">
              UB / 001
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-12">
            <div className="relative min-h-[550px] overflow-hidden md:col-span-7">
              <Image
                src="/images/ubuntu-global-lookbook.jpeg"
                alt="Ubuntu editorial"
                fill
                sizes="60vw"
                className="object-cover transition duration-[1500ms] hover:scale-105"
              />
            </div>

            <div className="grid gap-4 md:col-span-5">
              <div className="relative min-h-[260px] overflow-hidden">
                <Image
                  src="/images/headpiece-blue.jpeg"
                  alt="Ubuntu blue royal headpiece"
                  fill
                  sizes="40vw"
                  className="object-cover transition duration-[1500ms] hover:scale-105"
                />
              </div>

              <div className="relative min-h-[260px] overflow-hidden">
                <Image
                  src="/images/heritage-floral-headpiece.jpeg"
                  alt="Ubuntu heritage headpiece"
                  fill
                  sizes="40vw"
                  className="object-cover transition duration-[1500ms] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* JOURNAL */}
      {/* ========================================================= */}

      <section className="bg-[#f7f1e6] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1450px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                The Ubuntu Journal
              </p>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] md:text-7xl">
                Stories
                <br />
                <span className="italic text-[#a17c3f]">
                  worth wearing.
                </span>
              </h2>
            </div>

            <Link
              href="/journal"
              className="w-fit border-b border-[#a17b3c] pb-2 text-[8px] uppercase tracking-[0.3em] text-[#76572a]"
            >
              Visit The Journal →
            </Link>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {journalStories.map((story, index) => (
              <Link
                key={story.title}
                href={story.href}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#d8ccba]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-[1400ms] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 text-[8px] tracking-[0.25em] text-white/70">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="ubuntu-serif mt-6 text-3xl leading-[0.95] transition group-hover:text-[#95713a]">
                  {story.title}
                </h3>

                <span className="mt-5 inline-block text-[8px] uppercase tracking-[0.25em] text-[#76572a]">
                  Read Story →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#c9a45d] px-6 py-28 lg:px-12 lg:py-36">
        <div className="absolute right-[-10%] top-[-50%] h-[700px] w-[700px] rounded-full border border-black/10" />

        <div className="relative mx-auto max-w-[1300px]">
          <p className="text-[8px] uppercase tracking-[0.45em] text-black/50">
            The Final Invitation
          </p>

          <h2 className="ubuntu-serif mt-6 max-w-5xl text-6xl leading-[0.85] text-[#17110d] md:text-[100px]">
            Wear your
            <br />
            <span className="italic">
              story.
            </span>
          </h2>

          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end">
            <p className="max-w-xl text-sm leading-8 text-black/55">
              Discover pieces created to reflect who you are, where you come
              from and who you are becoming.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/collections/catalogue"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] uppercase tracking-[0.35em] text-[#dfc27c] transition hover:bg-white hover:text-[#17110d]"
              >
                Explore Collections
              </Link>

              <Link
                href="/appointments"
                className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] uppercase tracking-[0.35em] text-[#17110d] transition hover:bg-[#17110d] hover:text-white"
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