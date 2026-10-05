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

const categories = [
  ["Couture", "couture"],
  ["Jewellery", "jewellery"],
  ["Rare Gems", "rare-gems"],
  ["Beadwork", "beadwork"],
  ["Headpieces", "headpieces"],
] as const;

export default function JournalPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f1e6] text-[#17110d]">
      <section
        aria-labelledby="journal-title"
        className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#17110d] text-white"
      >
        <Image
          src="/images/ubuntu-global-lookbook.jpeg"
          alt="Ubuntu Couture House editorial lookbook"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55 transition-transform duration-[1800ms] hover:scale-[1.015]"
        />

        <div className="absolute inset-0 bg-[#17110d]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110d] via-[#17110d]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-[#17110d]/20" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-[1600px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-14 lg:pb-28">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#d8b66a] sm:w-14"
              />

              <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#dfc27c]">
                The Ubuntu Journal
              </p>
            </div>

            <h1
              id="journal-title"
              className="ubuntu-serif mt-7 max-w-5xl text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.045em]"
            >
              Stories
              <br />
              <span className="italic text-[#dfc27c]">worth wearing.</span>
            </h1>

            <p className="mt-9 max-w-2xl border-l border-white/15 pl-5 text-sm leading-8 text-white/60 md:text-base">
              Reflections on heritage, craftsmanship, identity, courage and
              the people behind Ubuntu Couture House.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="journal-intro-title"
        className="border-b border-black/10 px-5 py-20 sm:px-8 lg:px-14 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              From The House
            </p>

            <h2
              id="journal-intro-title"
              className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.86] tracking-[-0.035em]"
            >
              Fashion
              <br />
              becomes
              <br />
              <span className="italic text-[#a17c3f]">story.</span>
            </h2>
          </div>

          <div className="max-w-3xl self-end">
            <p className="text-lg leading-9 text-[#51483e] sm:text-xl">
              Ubuntu Couture House exists at the intersection of heritage,
              contemporary luxury and personal expression.
            </p>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#75695d]">
              The Ubuntu Journal explores the ideas behind the house—the
              journeys that shaped it, the materials that inspire it, and the
              meaning carried by the pieces created for women who honour their
              roots while moving confidently into the future.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="featured-story-title"
        className="px-5 py-20 sm:px-8 lg:px-14 lg:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col gap-7 border-b border-black/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                Featured Story
              </p>

              <h2
                id="featured-story-title"
                className="ubuntu-serif mt-5 text-[clamp(3rem,5vw,5.5rem)] leading-[0.88] tracking-[-0.035em]"
              >
                The story behind
                <br />
                <span className="italic text-[#a17c3f]">the house.</span>
              </h2>
            </div>

            <Link
              href="/global-story"
              className="w-fit border-b border-[#a17c3f] pb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-[#76572a] transition-colors duration-300 hover:border-[#17110d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f] focus-visible:ring-offset-4"
            >
              Read The Full Story →
            </Link>
          </div>

          <Link
            href="/global-story"
            aria-label="Read the story of Ubuntu Couture House"
            className="group relative block aspect-[16/9] overflow-hidden bg-[#211913] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45d] focus-visible:ring-offset-4"
          >
            <Image
              src="/images/ubuntu-brand-portrait.jpeg"
              alt="Portrait from the Ubuntu Couture House story"
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#17110d]/90 via-[#17110d]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17110d]/60 via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-16">
              <div className="max-w-3xl text-white">
                <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#d8b66a]">
                  A Shared Passion Becomes A House Of Heritage
                </p>

                <h3 className="ubuntu-serif mt-5 text-[clamp(2.8rem,5vw,6.5rem)] leading-[0.88] tracking-[-0.03em]">
                  A Mother&apos;s Courage.
                  <br />
                  A Daughter&apos;s Vision.
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                  Their journeys now come together through Ubuntu Couture
                  House.
                </p>

                <span className="mt-8 inline-flex border-b border-[#d8b66a] pb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-[#dfc27c]">
                  Enter The Story
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="stories-title"
        className="bg-[#e9dfcf] px-5 py-20 sm:px-8 lg:px-14 lg:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 max-w-3xl">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              Stories From Ubuntu
            </p>

            <h2
              id="stories-title"
              className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.86] tracking-[-0.035em]"
            >
              Explore the
              <br />
              <span className="italic text-[#a17c3f]">journal.</span>
            </h2>
          </div>

          <div className="grid gap-x-7 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {stories.slice(1).map((story, index) => (
              <article
                key={story.number}
                className={[
                  "group",
                  index === 1 ? "lg:mt-20" : "",
                  index === 3 ? "lg:-mt-10" : "",
                ].join(" ")}
              >
                <Link
                  href={story.href}
                  aria-label={`Read: ${story.title}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95713a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e9dfcf]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#d8ccba]">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />

                    <span className="absolute left-5 top-5 border border-white/30 bg-black/15 px-4 py-2 text-[8px] font-medium uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                      {story.category}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-5 ubuntu-serif text-5xl text-white/30"
                    >
                      {story.number}
                    </span>
                  </div>

                  <div className="pt-6">
                    <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#95713a]">
                      {story.category}
                    </p>

                    <h3 className="ubuntu-serif mt-4 text-[clamp(2rem,3vw,2.8rem)] leading-[0.92] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#95713a]">
                      {story.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-[#75695d]">
                      {story.excerpt}
                    </p>

                    <span className="mt-6 inline-block border-b border-[#b08a47] pb-1 text-[8px] font-medium uppercase tracking-[0.25em] text-[#76572a]">
                      Read Story →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="ubuntu-notes-title"
        className="bg-[#17110d] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-36"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                Notes From The House
              </p>

              <h2
                id="ubuntu-notes-title"
                className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.86] tracking-[-0.035em]"
              >
                What
                <br />
                <span className="italic text-[#d8b66a]">Ubuntu means.</span>
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {journalNotes.map((note) => (
                <article
                  key={note.number}
                  className="grid gap-5 py-9 sm:grid-cols-[70px_0.7fr_1fr] sm:items-start"
                >
                  <span className="text-[8px] font-medium tracking-[0.3em] text-[#c9a45d]">
                    {note.number}
                  </span>

                  <h3 className="ubuntu-serif text-3xl leading-none">
                    {note.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-7 text-white/50">
                    {note.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="categories-title"
        className="px-5 py-20 sm:px-8 lg:px-14 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              Discover The House
            </p>

            <h2
              id="categories-title"
              className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.86] tracking-[-0.035em]"
            >
              Wear your
              <br />
              <span className="italic text-[#a17c3f]">story.</span>
            </h2>
          </div>

          <nav
            aria-label="Journal collection categories"
            className="mt-14 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-5"
          >
            {categories.map(([label, category], index) => (
              <Link
                key={category}
                href={`/collections/catalogue?category=${category}`}
                className="group min-h-[190px] border-b border-r border-black/10 p-7 transition-colors duration-500 hover:bg-[#17110d] hover:text-white focus-visible:bg-[#17110d] focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c9a45d] sm:p-8"
              >
                <span className="text-[8px] font-medium tracking-[0.25em] text-[#a17b3c] transition-colors group-hover:text-[#d8b66a] group-focus-visible:text-[#d8b66a]">
                  0{index + 1}
                </span>

                <h3 className="ubuntu-serif mt-12 text-2xl leading-none">
                  {label}
                </h3>

                <span className="mt-7 block text-[8px] font-medium uppercase tracking-[0.25em] text-[#75695d] transition-colors group-hover:text-white/55 group-focus-visible:text-white/55">
                  Explore →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-[#c9a45d] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/55">
            Ubuntu Couture House
          </p>

          <h2 className="ubuntu-serif mt-7 max-w-6xl text-[clamp(4rem,8vw,8rem)] leading-[0.84] tracking-[-0.045em]">
            Every piece
            <br />
            carries
            <br />
            <span className="italic">a story.</span>
          </h2>

          <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-black/60">
              Discover the collections and find the piece that speaks to your
              own journey.
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
                className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/35 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
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