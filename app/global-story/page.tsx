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
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section className="relative min-h-[84vh] overflow-hidden bg-[#17110d] text-white">
        <Image
          src="/images/ubuntu-global-lookbook.jpeg"
          alt="Ubuntu Couture House journal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[1800ms] hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-[#17110d]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110d] via-[#17110d]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-[#17110d]/15" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto flex min-h-[84vh] max-w-[1600px] items-end px-6 pb-16 pt-40 sm:px-10 lg:px-14 lg:pb-24">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-[#d8b66a]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.5em] text-[#dfc27c]">
                The Ubuntu Journal
              </p>
            </div>

            <h1 className="ubuntu-serif mt-8 text-[clamp(4.3rem,9vw,9.5rem)] leading-[0.82] tracking-[-0.045em]">
              Stories
              <br />
              <span className="italic text-[#dfc27c]">worth wearing.</span>
            </h1>

            <p className="mt-10 max-w-2xl border-l border-white/20 pl-6 text-sm leading-8 text-white/55 md:text-base">
              Reflections on heritage, craftsmanship, identity, courage and
              the people behind Ubuntu Couture House.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[8px] uppercase tracking-[0.3em] text-white/30">
              <span>Heritage</span>
              <span>Identity</span>
              <span>Couture</span>
              <span>Craft</span>
              <span>Legacy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              From The House
            </p>

            <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
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

            <p className="mt-8 text-sm leading-8 text-[#75695d]">
              The Ubuntu Journal explores the ideas behind the house—the
              journeys that shaped it, the materials that inspire it, and the
              meaning carried by the pieces created for women who honour their
              roots while moving confidently into the future.
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

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col gap-6 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                Featured Story
              </p>

              <h2 className="ubuntu-serif mt-5 text-[clamp(3rem,5vw,5rem)] leading-[0.9] tracking-[-0.03em]">
                The story behind
                <br />
                <span className="italic text-[#a17c3f]">the house.</span>
              </h2>
            </div>

            <Link
              href="/global-story"
              className="w-fit border-b border-[#a17c3f] pb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-[#76572a] transition-colors duration-300 hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f]"
            >
              Read The Full Story
            </Link>
          </div>

          <Link
            href="/global-story"
            className="group relative block aspect-[16/8] overflow-hidden bg-[#211913] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f1e6]"
          >
            <Image
              src="/images/ubuntu-brand-portrait.jpeg"
              alt="Ubuntu Couture House story"
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-[1600ms] group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#17110d]/90 via-[#17110d]/40 to-transparent" />

            <div className="absolute inset-0 flex items-end p-7 sm:p-12 lg:p-16">
              <div className="max-w-3xl text-white">
                <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#d8b66a]">
                  A Shared Passion Becomes A House Of Heritage
                </p>

                <h3 className="ubuntu-serif mt-5 text-[clamp(3rem,5.5vw,6.5rem)] leading-[0.88] tracking-[-0.035em]">
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

      <section className="bg-[#e9dfcf] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 max-w-4xl">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              Stories From Ubuntu
            </p>

            <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
              Explore the
              <br />
              <span className="italic text-[#a17c3f]">journal.</span>
            </h2>
          </div>

          <div className="grid gap-x-7 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {stories.slice(1).map((story, index) => (
              <article
                key={story.number}
                className={[
                  "group",
                  index === 1 ? "lg:mt-20" : "",
                  index === 3 ? "md:mt-20 lg:mt-0" : "",
                ].join(" ")}
              >
                <Link
                  href={story.href}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#92713d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e9dfcf]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#d8ccba]">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.045]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />

                    <span className="absolute left-5 top-5 border border-white/25 bg-black/10 px-4 py-2 text-[8px] font-medium uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                      {story.category}
                    </span>

                    <span className="absolute bottom-5 right-5 ubuntu-serif text-5xl leading-none text-white/30">
                      {story.number}
                    </span>
                  </div>

                  <div className="pt-6">
                    <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#95713a]">
                      {story.category}
                    </p>

                    <h3 className="ubuntu-serif mt-4 text-[clamp(2rem,3vw,2.7rem)] leading-[0.94] transition-colors duration-300 group-hover:text-[#95713a]">
                      {story.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#75695d]">
                      {story.excerpt}
                    </p>

                    <span className="mt-6 inline-block border-b border-[#b08a47] pb-1 text-[8px] font-medium uppercase tracking-[0.25em] text-[#76572a]">
                      Read Story
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17110d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                Notes From The House
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
                What
                <br />
                <span className="italic text-[#d8b66a]">
                  Ubuntu means.
                </span>
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {journalNotes.map((note) => (
                <article
                  key={note.number}
                  className="grid gap-5 py-9 sm:grid-cols-[80px_0.7fr_1fr] sm:items-start"
                >
                  <span className="text-[8px] font-medium tracking-[0.3em] text-[#c9a45d]">
                    {note.number}
                  </span>

                  <h3 className="ubuntu-serif text-3xl">{note.title}</h3>

                  <p className="text-sm leading-7 text-white/45">
                    {note.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              Discover The House
            </p>

            <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88]">
              Wear your
              <br />
              <span className="italic text-[#a17c3f]">story.</span>
            </h2>
          </div>

          <div className="mt-14 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map(([label, category], index) => (
              <Link
                key={category}
                href={`/collections/catalogue?category=${category}`}
                className="group border-b border-r border-black/10 p-7 transition-colors duration-300 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#92713d] focus-visible:ring-inset sm:p-8"
              >
                <span className="text-[8px] font-medium tracking-[0.25em] text-[#a17b3c] group-hover:text-[#d8b66a]">
                  0{index + 1}
                </span>

                <h3 className="ubuntu-serif mt-12 text-2xl">{label}</h3>

                <span className="mt-7 block text-[8px] font-medium uppercase tracking-[0.25em] text-[#75695d] transition-colors group-hover:text-white/50">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#c9a45d] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/50">
            Ubuntu Couture House
          </p>

          <h2 className="ubuntu-serif mt-7 max-w-6xl text-[clamp(4rem,8vw,8.5rem)] leading-[0.84] tracking-[-0.05em]">
            Every piece
            <br />
            carries
            <br />
            <span className="italic">a story.</span>
          </h2>

          <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-black/55">
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