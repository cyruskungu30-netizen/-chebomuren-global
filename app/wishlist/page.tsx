 "use client";

import Link from "next/link";
import Image from "next/image";

type WishlistItem = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
};

const featuredPieces: WishlistItem[] = [
  {
    id: "heritage-silhouette",
    name: "The Heritage Silhouette",
    category: "Couture Fashion",
    image: "/images/couture-brown-front.jpeg",
    description:
      "A refined couture silhouette carrying the spirit of East African heritage.",
  },
  {
    id: "earth-transformation",
    name: "Earth & Transformation",
    category: "Contemporary Jewellery",
    image: "/images/cow-horn-jewellery.jpeg",
    description:
      "Sculptural jewellery created from ethically sourced cow horn.",
  },
  {
    id: "rare-gem",
    name: "The Rare Gem",
    category: "Rare Gems",
    image: "/images/rare-gem-neckpiece.jpeg",
    description:
      "A natural statement selected for rarity, character and quiet strength.",
  },
  {
    id: "royal-statement",
    name: "The Royal Statement",
    category: "Royal Headpieces",
    image: "/images/royal-headpiece-gold.jpeg",
    description:
      "A statement headpiece inspired by dignity, leadership and African majesty.",
  },
];

const meaning = [
  {
    title: "Fashion",
    text: "Confidence, identity and self-expression.",
  },
  {
    title: "Rare Gems",
    text: "Rarity, strength and natural beauty.",
  },
  {
    title: "Cow Horn",
    text: "Resilience, earth and transformation.",
  },
  {
    title: "Beadwork",
    text: "Community, artistry and living heritage.",
  },
];

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#17110d] px-5 pb-24 pt-36 text-white sm:px-8 sm:pt-40 lg:px-14 lg:pb-32 lg:pt-48">
        <div
          aria-hidden="true"
          className="absolute -right-48 -top-64 h-[680px] w-[680px] rounded-full border border-[#c9a45d]/10"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-72 left-[-18rem] h-[620px] w-[620px] rounded-full border border-[#c9a45d]/10"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#d8b66a] sm:w-14"
            />

            <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#dfc27c]">
              Private Selection
            </p>
          </div>

          <h1 className="ubuntu-serif mt-8 max-w-6xl text-[clamp(4rem,10vw,9rem)] leading-[0.8] tracking-[-0.055em]">
            Pieces worth
            <br />
            <span className="italic text-[#dfc27c]">remembering.</span>
          </h1>

          <div className="mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl border-l border-white/15 pl-6 text-sm leading-8 text-white/50 md:text-base">
              Keep the pieces that speak to you close. Your private selection
              is a place to return to creations that reflect your story,
              heritage and sense of self.
            </p>

            <div className="hidden border-l border-white/10 pl-8 lg:block">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Selection
              </p>
              <p className="mt-2 text-sm text-[#dfc27c]">Private &amp; Personal</p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1250px]">
          <div className="flex flex-col gap-7 border-b border-[#17110d]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                Your Selection
              </p>

              <h2 className="ubuntu-serif mt-5 text-[clamp(3rem,6vw,5.5rem)] leading-[0.84] tracking-[-0.035em]">
                Private
                <br />
                <span className="italic text-[#a17c3f]">selection.</span>
              </h2>
            </div>

            <div className="flex items-center gap-4 sm:pb-2">
              <span className="h-px w-8 bg-[#a17b3c]" />
              <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#75695d]">
                0 Pieces Saved
              </span>
            </div>
          </div>

          <div className="relative py-24 text-center sm:py-28">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a17b3c]/10 sm:block"
            />

            <div className="relative mx-auto flex h-20 w-20 items-center justify-center border border-[#b08a47]/50">
              <span className="ubuntu-serif text-3xl text-[#a17b3c]">U</span>
            </div>

            <h3 className="ubuntu-serif mt-8 text-[clamp(2.2rem,4vw,3.5rem)] leading-none">
              Your selection is waiting.
            </h3>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#75695d]">
              Explore the collections and save pieces that speak to your
              personal story.
            </p>

            <Link
              href="/collections/catalogue"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-[#c9a45d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
            >
              Explore Collections
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DISCOVER */}
      <section className="bg-[#e9dfcf] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col gap-8 border-b border-[#17110d]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                Discover The House
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3rem,6vw,6.5rem)] leading-[0.82] tracking-[-0.04em]">
                Begin your
                <br />
                <span className="italic text-[#a17c3f]">collection.</span>
              </h2>
            </div>

            <Link
              href="/collections/catalogue"
              className="w-fit border-b border-[#a17b3c] pb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-[#76572a] transition-colors duration-300 hover:border-[#17110d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
            >
              View All Collections
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPieces.map((piece, index) => (
              <Link
                key={piece.id}
                href={`/collections/${piece.id}`}
                className="group block focus-visible:outline-none"
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#d8ccba]">
                    <Image
                      src={piece.image}
                      alt={piece.name}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100"
                    />

                    <span className="absolute left-5 top-5 border border-white/25 bg-black/15 px-3 py-2 text-[7px] font-medium uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                      {piece.category}
                    </span>

                    <span className="absolute bottom-5 right-5 border-b border-white/40 pb-1 text-[8px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 group-hover:text-[#dfc27c]">
                      View
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </span>
                  </div>

                  <div className="pt-6">
                    <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#95713a]">
                      {piece.category}
                    </p>

                    <h3 className="ubuntu-serif mt-3 text-[clamp(1.6rem,2.2vw,2rem)] leading-none transition-colors duration-300 group-hover:text-[#95713a]">
                      {piece.name}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-[#75695d]">
                      {piece.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="bg-[#17110d] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-24">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                The Meaning
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3rem,6vw,6.5rem)] leading-[0.82] tracking-[-0.04em]">
                It&apos;s more
                <br />
                than what
                <br />
                <span className="italic text-[#d8b66a]">you wear.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-9 text-white/60 md:text-xl">
                Each piece carries a message — so you don&apos;t simply wear
                it. You live it. The selection becomes part of the story you
                choose to tell.
              </p>

              <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
                {meaning.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#17110d] p-7 transition-colors duration-300 hover:bg-[#211913] sm:p-9"
                  >
                    <span
                      aria-hidden="true"
                      className="mb-7 block h-px w-8 bg-[#a17b3c]"
                    />

                    <h3 className="ubuntu-serif text-2xl">{item.title}</h3>

                    <p className="mt-3 max-w-xs text-sm leading-7 text-white/40">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE SERVICE */}
      <section className="bg-[#c9a45d] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-black/40 sm:w-14"
            />

            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/55">
              Private Service
            </p>
          </div>

          <h2 className="ubuntu-serif mt-8 max-w-6xl text-[clamp(3.7rem,8vw,8.5rem)] leading-[0.8] tracking-[-0.055em]">
            Your story
            <br />
            deserves
            <br />
            <span className="italic">something personal.</span>
          </h2>

          <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-black/55 md:text-base">
              Request a private appointment to explore selected pieces,
              discuss a special acquisition or begin a conversation around a
              custom creation.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointments"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-white hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
              >
                Private Appointment
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
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