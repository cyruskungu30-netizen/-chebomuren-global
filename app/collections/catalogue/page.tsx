 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  price: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    id: "couture-brown",
    name: "The Heritage Silhouette",
    category: "couture",
    categoryLabel: "Couture Fashion",
    description:
      "A refined silhouette carrying the spirit of East African heritage into contemporary luxury.",
    image: "/images/couture-brown-front.jpeg",
    price: "Private Collection",
    featured: true,
  },
  {
    id: "couture-brown-back",
    name: "The Heritage Back",
    category: "couture",
    categoryLabel: "Couture Fashion",
    description:
      "A statement couture expression designed around confidence, movement and identity.",
    image: "/images/couture-brown-back.jpeg",
    price: "Private Collection",
  },
  {
    id: "cow-horn",
    name: "Earth & Transformation",
    category: "jewellery",
    categoryLabel: "Contemporary Jewellery",
    description:
      "Ethically sourced cow horn transformed into sculptural contemporary adornment.",
    image: "/images/cow-horn-jewellery.jpeg",
    price: "Private Collection",
    featured: true,
  },
  {
    id: "rare-gem",
    name: "The Rare Gem",
    category: "rare-gems",
    categoryLabel: "Rare Gems",
    description:
      "A natural statement selected for its rarity, character and quiet strength.",
    image: "/images/rare-gem-neckpiece.jpeg",
    price: "Private Collection",
    featured: true,
  },
  {
    id: "maasai",
    name: "Living Heritage",
    category: "beadwork",
    categoryLabel: "Maasai Beadwork",
    description:
      "Reimagined Maasai beadwork translated into contemporary luxury.",
    image: "/images/maasai-jewellery-editorial.jpeg",
    price: "Private Collection",
  },
  {
    id: "royal-gold",
    name: "The Royal Statement",
    category: "headpieces",
    categoryLabel: "Royal Headpieces",
    description:
      "A headpiece inspired by dignity, leadership and African majesty.",
    image: "/images/royal-headpiece-gold.jpeg",
    price: "Private Collection",
    featured: true,
  },
  {
    id: "royal-blue",
    name: "The Blue Crown",
    category: "headpieces",
    categoryLabel: "Royal Headpieces",
    description:
      "An extraordinary expression of presence, elegance and leadership.",
    image: "/images/headpiece-blue.jpeg",
    price: "Private Collection",
  },
  {
    id: "floral-headpiece",
    name: "Heritage Bloom",
    category: "headpieces",
    categoryLabel: "Royal Headpieces",
    description:
      "Floral heritage translated into an elevated contemporary headpiece.",
    image: "/images/heritage-floral-headpiece.jpeg",
    price: "Private Collection",
  },
];

const filters = [
  { label: "All Pieces", value: "all" },
  { label: "Couture Fashion", value: "couture" },
  { label: "Contemporary Jewellery", value: "jewellery" },
  { label: "Rare Gems", value: "rare-gems" },
  { label: "Maasai Beadwork", value: "beadwork" },
  { label: "Royal Headpieces", value: "headpieces" },
];

export default function CataloguePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (
      category &&
      filters.some((filter) => filter.value === category)
    ) {
      setActiveFilter(category);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeFilter === "all" || product.category === activeFilter;

      const featuredMatch = !featuredOnly || product.featured;

      return categoryMatch && featuredMatch;
    });
  }, [activeFilter, featuredOnly]);

  const clearFilters = () => {
    setActiveFilter("all");
    setFeaturedOnly(false);
  };

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section
        aria-labelledby="catalogue-heading"
        className="relative isolate overflow-hidden bg-[#17110d] text-white"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/ubuntu-global-lookbook.jpeg"
            alt="Ubuntu Couture House collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-65"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#17110d] via-[#17110d]/70 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-[#17110d]/20"
          />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-[1600px] items-end px-6 pb-16 pt-36 md:px-10 lg:px-14 lg:pb-24">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-14 bg-[#d8b66a]"
              />

              <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#dfc27c]">
                The Collections
              </p>
            </div>

            <h1
              id="catalogue-heading"
              className="ubuntu-serif text-[4rem] leading-[0.84] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[110px]"
            >
              Wear your
              <br />
              <span className="italic text-[#dfc27c]">story.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
              Couture fashion, contemporary jewellery, rare gems, reimagined
              Maasai beadwork and royal headpieces — created to carry heritage
              into the future.
            </p>

            <div className="mt-10 flex items-center gap-4 text-[8px] uppercase tracking-[0.28em] text-white/35">
              <span>Eight selected pieces</span>
              <span aria-hidden="true" className="h-px w-8 bg-white/20" />
              <span>Private collection</span>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="heritage-heading"
        className="border-b border-black/10 bg-[#f7f1e6] px-6 py-20 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              The Heritage Collection
            </p>

            <h2
              id="heritage-heading"
              className="ubuntu-serif mt-5 text-5xl leading-[0.9] tracking-[-0.035em] md:text-7xl"
            >
              A house of
              <br />
              <span className="italic text-[#a17c3f]">meaning.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-[#716559]">
            Ubuntu Couture House is for women who carry stories, honour their
            roots, and walk confidently into the future. Every creation brings
            together East African heritage, contemporary elegance and the
            belief that what we wear can become part of who we are.
          </p>
        </div>
      </section>

      <section
        aria-label="Collection filters"
        className="sticky top-[81px] z-40 border-b border-black/10 bg-[#f7f1e6]/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1600px] items-center gap-3 overflow-x-auto px-6 py-4 [scrollbar-width:none] lg:px-12 [&::-webkit-scrollbar]:hidden">
          {filters.map((filter) => {
            const active = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveFilter(filter.value)}
                className={[
                  "min-h-[42px] shrink-0 border px-5 py-3 text-[8px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f] focus-visible:ring-offset-2",
                  active
                    ? "border-[#17110d] bg-[#17110d] text-[#f7f1e6]"
                    : "border-black/10 text-[#75695d] hover:border-[#b18b45] hover:text-[#17110d]",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}

          <button
            type="button"
            aria-pressed={featuredOnly}
            onClick={() => setFeaturedOnly((current) => !current)}
            className={[
              "ml-auto min-h-[42px] shrink-0 border px-5 py-3 text-[8px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f] focus-visible:ring-offset-2",
              featuredOnly
                ? "border-[#b18b45] bg-[#c9a45d] text-[#17110d]"
                : "border-black/10 text-[#75695d] hover:border-[#b18b45] hover:text-[#17110d]",
            ].join(" ")}
          >
            Featured
          </button>
        </div>
      </section>

      <section
        aria-labelledby="selection-heading"
        className="px-6 py-20 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#95713a]">
                Selected Pieces
              </p>

              <h2
                id="selection-heading"
                className="ubuntu-serif mt-4 text-4xl tracking-[-0.025em] md:text-5xl"
              >
                The House Selection
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <p
                aria-live="polite"
                className="hidden text-[8px] uppercase tracking-[0.25em] text-[#8b7c6c] sm:block"
              >
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "piece" : "pieces"}
              </p>

              {(activeFilter !== "all" || featuredOnly) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#92713d] underline underline-offset-4 transition-colors hover:text-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article key={product.id} className="group">
                  <Link
                    href={`/collections/${product.id}`}
                    aria-label={`View ${product.name}`}
                    className="block focus:outline-none"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#e9dfcf]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      />

                      {product.featured && (
                        <span className="absolute left-5 top-5 border border-white/25 bg-[#17110d]/75 px-3 py-2 text-[7px] font-medium uppercase tracking-[0.25em] text-[#dfc27c] backdrop-blur-sm">
                          House Selection
                        </span>
                      )}

                      <span className="absolute bottom-5 right-5 translate-y-2 border border-white/30 bg-[#17110d]/80 px-4 py-3 text-[7px] font-medium uppercase tracking-[0.25em] text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        Discover Piece
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>

                  <div className="pt-5">
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <p className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#98753c]">
                          {product.categoryLabel}
                        </p>

                        <Link
                          href={`/collections/${product.id}`}
                          className="ubuntu-serif mt-2 block text-2xl transition-colors hover:text-[#a27d3f] focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                        >
                          {product.name}
                        </Link>
                      </div>

                      <span className="shrink-0 pt-1 text-right text-[7px] uppercase tracking-[0.15em] text-[#8a7b6a]">
                        {product.price}
                      </span>
                    </div>

                    <p className="mt-4 max-w-md text-sm leading-7 text-[#75695d]">
                      {product.description}
                    </p>

                    <Link
                      href={`/appointments?piece=${product.id}`}
                      className="mt-5 inline-flex border-b border-[#b18b45]/50 pb-2 text-[7px] font-medium uppercase tracking-[0.25em] text-[#80602e] transition-colors hover:border-[#17110d] hover:text-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4"
                    >
                      Enquire Privately
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-black/10 px-8 py-24 text-center">
              <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#95713a]">
                The House
              </p>

              <h3 className="ubuntu-serif mt-5 text-4xl">
                No pieces in this selection.
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#75695d]">
                Try another category or return to the complete house
                selection.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-7 min-h-[48px] border border-[#17110d] px-7 py-4 text-[8px] font-medium uppercase tracking-[0.25em] transition-colors hover:bg-[#17110d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2"
              >
                View All Pieces
              </button>
            </div>
          )}
        </div>
      </section>

      <section
        aria-labelledby="meaning-heading"
        className="relative overflow-hidden bg-[#17110d] text-white"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[560px] lg:min-h-[680px]">
            <Image
              src="/images/elders-path-lookbook.jpeg"
              alt="Ubuntu Couture House heritage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-transparent"
            />
          </div>

          <div className="flex flex-col justify-center px-7 py-20 md:px-14 lg:px-20 lg:py-28">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
              More Than Fashion
            </p>

            <h2
              id="meaning-heading"
              className="ubuntu-serif mt-6 text-5xl leading-[0.9] tracking-[-0.035em] md:text-7xl"
            >
              Every piece
              <br />
              carries a
              <br />
              <span className="italic text-[#d8b66a]">message.</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/45">
              Fashion represents confidence and self-expression. Gems
              represent rarity and strength. Cow horn represents resilience
              and transformation. Maasai beadwork represents community and
              living heritage. Royal headpieces represent dignity, leadership
              and the power of women.
            </p>

            <Link
              href="/craftsmanship"
              className="mt-9 inline-flex min-h-[48px] w-fit items-center border border-[#c9a45d]/50 px-7 py-4 text-[8px] font-medium uppercase tracking-[0.3em] text-[#d8b66a] transition-colors hover:bg-[#c9a45d] hover:text-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17110d]"
            >
              Discover Our Craftsmanship
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="private-service-heading"
        className="bg-[#e9dfcf] px-6 py-24 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
            Private Service
          </p>

          <h2
            id="private-service-heading"
            className="ubuntu-serif mt-6 text-5xl leading-[0.9] tracking-[-0.035em] md:text-7xl"
          >
            Discover your
            <br />
            <span className="italic text-[#a17c3f]">Ubuntu piece.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#716559]">
            For availability, custom orders and private collection enquiries,
            our house welcomes personal conversations.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/appointments"
              className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors hover:bg-[#c9a45d] hover:text-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e9dfcf]"
            >
              Request A Private Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/20 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors hover:border-[#17110d] hover:bg-[#17110d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e9dfcf]"
            >
              Contact The House
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}