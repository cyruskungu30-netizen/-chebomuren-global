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

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      {/* HERO */}

      <section className="relative overflow-hidden bg-[#17110d] px-6 pb-24 pt-40 text-white sm:px-10 lg:px-16 lg:pb-32">
        <div className="absolute right-[-10%] top-[-45%] h-[700px] w-[700px] rounded-full border border-[#c9a45d]/10" />

        <div className="absolute right-[8%] top-[-20%] h-[500px] w-[500px] rounded-full border border-[#c9a45d]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-[#d8b66a]" />

            <p className="text-[8px] uppercase tracking-[0.5em] text-[#dfc27c]">
              Private Selection
            </p>
          </div>

          <h1 className="ubuntu-serif mt-8 max-w-6xl text-7xl leading-[0.8] tracking-[-0.05em] sm:text-8xl lg:text-[120px]">
            Pieces worth
            <br />
            <span className="italic text-[#dfc27c]">
              remembering.
            </span>
          </h1>

          <p className="mt-9 max-w-2xl text-sm leading-8 text-white/50 md:text-base">
            Keep the pieces that speak to you close. Your private selection is
            a place to return to the creations that reflect your story.
          </p>
        </div>
      </section>

      {/* EMPTY / COLLECTION */}

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                Your Selection
              </p>

              <h2 className="ubuntu-serif mt-5 text-5xl leading-[0.9] sm:text-6xl">
                Private
                <br />
                <span className="italic text-[#a17c3f]">
                  selection.
                </span>
              </h2>
            </div>

            <span className="text-[8px] uppercase tracking-[0.25em] text-[#75695d]">
              0 Pieces Saved
            </span>
          </div>

          <div className="py-24 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#b08a47]/50">
              <span className="ubuntu-serif text-3xl text-[#a17b3c]">
                U
              </span>
            </div>

            <h3 className="ubuntu-serif mt-8 text-4xl">
              Your selection is waiting.
            </h3>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#75695d]">
              Explore the collections and save pieces that speak to your
              personal story.
            </p>

            <Link
              href="/collections/catalogue"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] uppercase tracking-[0.3em] text-[#dfc27c] transition hover:bg-[#c9a45d] hover:text-[#17110d]"
            >
              Explore Collections →
            </Link>
          </div>
        </div>
      </section>

      {/* DISCOVER */}

      <section className="bg-[#e9dfcf] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                Discover The House
              </p>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
                Begin your
                <br />
                <span className="italic text-[#a17c3f]">
                  collection.
                </span>
              </h2>
            </div>

            <Link
              href="/collections/catalogue"
              className="w-fit border-b border-[#a17b3c] pb-2 text-[8px] uppercase tracking-[0.3em] text-[#76572a]"
            >
              View All Collections →
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPieces.map((piece) => (
              <Link
                key={piece.id}
                href={`/collections/${piece.id}`}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#d8ccba]">
                  <Image
                    src={piece.image}
                    alt={piece.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-[1400ms] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70" />

                  <span className="absolute left-5 top-5 border border-white/25 bg-black/10 px-3 py-2 text-[7px] uppercase tracking-[0.25em] text-white backdrop-blur">
                    {piece.category}
                  </span>

                  <span className="absolute bottom-5 right-5 text-[8px] uppercase tracking-[0.2em] text-white/70">
                    View →
                  </span>
                </div>

                <div className="pt-6">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-[#95713a]">
                    {piece.category}
                  </p>

                  <h3 className="ubuntu-serif mt-3 text-2xl transition group-hover:text-[#95713a]">
                    {piece.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#75695d]">
                    {piece.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="bg-[#17110d] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#c9a45d]">
                The Meaning
              </p>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
                It&apos;s more
                <br />
                than what
                <br />
                <span className="italic text-[#d8b66a]">
                  you wear.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-white/60">
                Each piece carries a message—so you don&apos;t just wear it.
                You live it.
              </p>

              <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
                {[
                  ["Fashion", "Confidence & self-expression."],
                  ["Gems", "Rarity, strength & natural beauty."],
                  ["Cow Horn", "Resilience, earth & transformation."],
                  ["Beadwork", "Community, artistry & living heritage."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="bg-[#17110d] p-7 sm:p-9"
                  >
                    <h3 className="ubuntu-serif text-2xl">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/40">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE SERVICE */}

      <section className="bg-[#c9a45d] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[8px] uppercase tracking-[0.45em] text-black/50">
            Private Service
          </p>

          <h2 className="ubuntu-serif mt-7 max-w-6xl text-6xl leading-[0.84] tracking-[-0.04em] sm:text-8xl lg:text-[105px]">
            Your story
            <br />
            deserves
            <br />
            <span className="italic">
              something personal.
            </span>
          </h2>

          <div className="mt-10 flex flex-col gap-6 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-8 text-black/55">
              Request a private appointment to explore selected pieces or
              discuss a custom creation.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointments"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] uppercase tracking-[0.3em] text-[#dfc27c] transition hover:bg-white hover:text-[#17110d]"
              >
                Private Appointment
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] uppercase tracking-[0.3em] text-[#17110d] transition hover:bg-[#17110d] hover:text-white"
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