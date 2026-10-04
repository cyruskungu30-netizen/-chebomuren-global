 "use client";

import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    number: "01",
    category: "THE HOUSE",
    title: "A Mother's Courage. A Daughter's Vision.",
    excerpt:
      "Two journeys across continents come together through Ubuntu Couture House—a story of courage, heritage, purpose and legacy.",
    image: "/images/ubuntu-brand-portrait.jpeg",
    href: "/global-story",
    featured: true,
  },
  {
    number: "02",
    category: "HERITAGE",
    title: "The Meaning Behind Every Creation",
    excerpt:
      "From cow horn and rare gems to Maasai beadwork and royal headpieces, discover the stories carried by each material.",
    image: "/images/maasai-jewellery-editorial.jpeg",
    href: "/craftsmanship",
  },
  {
    number: "03",
    category: "COUTURE",
    title: "African Elegance, Reimagined",
    excerpt:
      "Contemporary silhouettes meet the spirit of East African heritage in a collection created for confidence and identity.",
    image: "/images/hero-couture-yellow.jpeg",
    href: "/collections/catalogue?category=couture",
  },
  {
    number: "04",
    category: "JEWELLERY",
    title: "Earth & Transformation",
    excerpt:
      "Ethically sourced cow horn becomes sculptural jewellery—an expression of resilience, transformation and natural beauty.",
    image: "/images/cow-horn-jewellery.jpeg",
    href: "/collections/catalogue?category=jewellery",
  },
  {
    number: "05",
    category: "RARE GEMS",
    title: "The Beauty of Rarity",
    excerpt:
      "Natural beauty selected with intention, each rare gem carrying its own character, strength and quiet presence.",
    image: "/images/rare-gem-neckpiece.jpeg",
    href: "/collections/catalogue?category=rare-gems",
  },
  {
    number: "06",
    category: "ROYAL HERITAGE",
    title: "The Power of the Headpiece",
    excerpt:
      "Inspired by dignity, leadership and African majesty, royal headpieces transform presence into statement.",
    image: "/images/royal-headpiece-gold.jpeg",
    href: "/collections/catalogue?category=headpieces",
  },
];

const journalNotes = [
  {
    number: "01",
    title: "Heritage",
    text: "Living heritage is not static. It can evolve while retaining the values and stories that gave it meaning.",
  },
  {
    number: "02",
    title: "Identity",
    text: "Luxury becomes personal when what you wear reflects where you come from and who you are becoming.",
  },
  {
    number: "03",
    title: "Legacy",
    text: "A house is more than its creations. It is the story, courage and purpose passed from one generation to another.",
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      {/* HERO */}

      <section className="relative min-h-[78vh] overflow-hidden bg-[#17110d] text-white">
        <Image
          src="/images/ubuntu-global-lookbook.jpeg"
          alt="Ubuntu Couture House journal"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17110d] via-[#17110d]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-[#17110d]/20" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-[1600px] items-end px-6 pb-20 pt-40 sm:px-10 lg:px-14 lg:pb-28">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-[#d8b66a]" />

              <p className="text-[8px] uppercase tracking-[0.5em] text-[#dfc27c]">
                The Ubuntu Journal
              </p>
            </div>

            <h1 className="ubuntu-serif mt-7 text-7xl leading-[0.82] tracking-[-0.04em] sm:text-8xl lg:text-[120px]">
              Stories
              <br />
              <span className="italic text-[#dfc27c]">worth wearing.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
              Reflections on heritage, craftsmanship, identity, courage and
              the people behind Ubuntu Couture House.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="border-b border-black/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              From The House
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
              Fashion
              <br />
              becomes
              <br />
              <span className="italic text-[#a17c3f]">story.</span>
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-[#51483e] sm:text-xl">
              Ubuntu Couture House exists at the intersection of heritage,
              contemporary luxury and personal expression.
            </p>

            <p className="mt-7 text-sm leading-8 text-[#75695d]">
              The Ubuntu Journal explores the ideas behind the house—the
              journeys that shaped it, the materials that inspire it, and
              the meaning carried by the pieces created for women who honour
              their roots while moving confidently into the future.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                Featured Story
              </p>

              <h2 className="ubuntu-serif mt-5 text-5xl sm:text-6xl">
                The story behind
                <br />
                <span className="italic text-[#a17c3f]">the house.</span>
              </h2>
            </div>

            <Link
              href="/global-story"
              className="w-fit border-b border-[#a17c3f] pb-2 text-[8px] uppercase tracking-[0.3em] text-[#76572a] transition hover:text-[#17110d]"
            >
              Read The Full Story →
            </Link>
          </div>

          <Link
            href="/global-story"
            className="group relative block aspect-[16/8] overflow-hidden bg-[#211913]"
          >
            <Image
              src="/images/ubuntu-brand-portrait.jpeg"
              alt="Ubuntu Couture House story"
              fill
              sizes="100vw"
              className="object-cover object-center transition duration-[1600ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#17110d]/85 via-[#17110d]/35 to-transparent" />

            <div className="absolute inset-0 flex items-end p-7 sm:p-12 lg:p-16">
              <div className="max-w-3xl text-white">
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#d8b66a]">
                  A Shared Passion Becomes A House Of Heritage
                </p>

                <h3 className="ubuntu-serif mt-5 text-4xl leading-[0.92] sm:text-6xl lg:text-7xl">
                  A Mother&apos;s Courage.
                  <br />
                  A Daughter&apos;s Vision.
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
                  Their journeys now come together through Ubuntu Couture
                  House.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* STORIES GRID */}

      <section className="bg-[#e9dfcf] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14">
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              Stories From Ubuntu
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
              Explore the
              <br />
              <span className="italic text-[#a17c3f]">journal.</span>
            </h2>
          </div>

          <div className="grid gap-x-7 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {stories.slice(1).map((story) => (
              <article key={story.number} className="group">
                <Link href={story.href}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#d8ccba]">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-[1400ms] group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />

                    <span className="absolute left-5 top-5 border border-white/25 bg-black/10 px-4 py-2 text-[8px] uppercase tracking-[0.25em] text-white backdrop-blur">
                      {story.category}
                    </span>

                    <span className="absolute bottom-5 right-5 ubuntu-serif text-5xl text-white/30">
                      {story.number}
                    </span>
                  </div>

                  <div className="pt-6">
                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#95713a]">
                      {story.category}
                    </p>

                    <h3 className="ubuntu-serif mt-4 text-3xl leading-[0.95] transition group-hover:text-[#95713a]">
                      {story.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#75695d]">
                      {story.excerpt}
                    </p>

                    <span className="mt-6 inline-block border-b border-[#b08a47] pb-1 text-[8px] uppercase tracking-[0.25em] text-[#76572a]">
                      Read Story →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL NOTES */}

      <section className="bg-[#17110d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#c9a45d]">
                Notes From The House
              </p>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
                What
                <br />
                <span className="italic text-[#d8b66a]">
                  Ubuntu means.
                </span>
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {journalNotes.map((note) => (
                <div
                  key={note.number}
                  className="grid gap-5 py-9 sm:grid-cols-[80px_0.7fr_1fr] sm:items-start"
                >
                  <span className="text-[8px] tracking-[0.3em] text-[#c9a45d]">
                    {note.number}
                  </span>

                  <h3 className="ubuntu-serif text-3xl">
                    {note.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/45">
                    {note.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              Discover The House
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl sm:text-7xl">
              Wear your
              <br />
              <span className="italic text-[#a17c3f]">story.</span>
            </h2>
          </div>

          <div className="mt-14 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Couture", "couture"],
              ["Jewellery", "jewellery"],
              ["Rare Gems", "rare-gems"],
              ["Beadwork", "beadwork"],
              ["Headpieces", "headpieces"],
            ].map(([label, category], index) => (
              <Link
                key={category}
                href={`/collections/catalogue?category=${category}`}
                className="group border-b border-r border-black/10 p-7 transition hover:bg-[#17110d] hover:text-white sm:p-8"
              >
                <span className="text-[8px] tracking-[0.25em] text-[#a17b3c] group-hover:text-[#d8b66a]">
                  0{index + 1}
                </span>

                <h3 className="ubuntu-serif mt-12 text-2xl">
                  {label}
                </h3>

                <span className="mt-7 block text-[8px] uppercase tracking-[0.25em] text-[#75695d] transition group-hover:text-white/50">
                  Explore →
                </span>
              </Link>
            ))}
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
            Every piece
            <br />
            carries
            <br />
            <span className="italic">a story.</span>
          </h2>

          <div className="mt-10 flex flex-col gap-6 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-black/55">
              Discover the collections and find the piece that speaks to your
              own journey.
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