 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Collection = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  secondaryImage: string;
  number: string;
  material: string;
};

const collections: Collection[] = [
  {
    id: "couture",
    title: "Couture Fashion",
    category: "Fashion",
    description:
      "Modern silhouettes with heritage soul, crafted for confidence, identity and unmistakable presence.",
    image: "/images/couture-brown-front.jpeg",
    secondaryImage: "/images/couture-brown-back.jpeg",
    number: "01",
    material: "Silk · Textile · Heritage Trim",
  },
  {
    id: "jewellery",
    title: "Contemporary Jewellery",
    category: "Jewellery",
    description:
      "Sculptural statement pieces transforming natural materials and East African design language into modern luxury.",
    image: "/images/maasai-jewellery-editorial.jpeg",
    secondaryImage: "/images/cow-horn-jewellery.jpeg",
    number: "02",
    material: "Cow Horn · Metal · Beadwork",
  },
  {
    id: "gems",
    title: "Rare Gems",
    category: "Gems",
    description:
      "Natural beauty selected with intention — symbols of rarity, strength, resilience and timeless value.",
    image: "/images/rare-gem-neckpiece.jpeg",
    secondaryImage: "/images/cow-horn-jewellery.jpeg",
    number: "03",
    material: "Natural Stone · Gold · Rare Gems",
  },
  {
    id: "beadwork",
    title: "Reimagined Maasai Beadwork",
    category: "Heritage",
    description:
      "Living heritage translated into contemporary design while honouring the artistry and symbolism of East Africa.",
    image: "/images/maasai-jewellery-editorial.jpeg",
    secondaryImage: "/images/ubuntu-brand-board.jpeg",
    number: "04",
    material: "Glass Beads · Metal · Heritage Craft",
  },
  {
    id: "headpieces",
    title: "Royal Headpieces",
    category: "Headpieces",
    description:
      "Designed to celebrate presence, dignity and leadership — modern expressions of African majesty.",
    image: "/images/royal-headpiece-gold.jpeg",
    secondaryImage: "/images/heritage-floral-headpiece.jpeg",
    number: "05",
    material: "Feathers · Beads · Textile · Metal",
  },
];

const filters = [
  "All",
  "Fashion",
  "Jewellery",
  "Gems",
  "Heritage",
  "Headpieces",
];

export default function CollectionShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<Collection | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const filteredCollections = useMemo(() => {
    if (activeFilter === "All") {
      return collections;
    }

    return collections.filter(
      (collection) => collection.category === activeFilter,
    );
  }, [activeFilter]);

  useEffect(() => {
    if (!selected) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#f7f1e6] px-6 py-24 text-[#17110d] lg:px-12 lg:py-36"
      aria-labelledby="collections-title"
    >
      <div
        className="pointer-events-none absolute right-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full border border-[#b18b45]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[500px] w-[500px] rounded-full bg-[#c9a45d]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1550px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_450px] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span
                className="h-px w-12 bg-[#b18b45]"
                aria-hidden="true"
              />

              <p className="text-[8px] uppercase tracking-[0.45em] text-[#927039]">
                The Collections
              </p>
            </div>

            <h2
              id="collections-title"
              className="ubuntu-serif mt-7 text-5xl leading-[0.95] sm:text-6xl lg:text-8xl"
            >
              Heritage,
              <br />
              <span className="italic text-[#a17b3c]">
                made modern.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-[#706357]">
              Ubuntu Couture House brings together couture fashion,
              contemporary jewellery, rare gems, reimagined Maasai
              beadwork and royal headpieces — each creation carrying
              a story of heritage, courage and identity.
            </p>
          </div>
        </div>

        <div
          className="mt-16 flex gap-2 overflow-x-auto border-y border-black/10 py-5"
          role="tablist"
          aria-label="Collection categories"
        >
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(filter)}
                className={[
                  "whitespace-nowrap px-5 py-3 text-[8px] uppercase tracking-[0.3em] transition duration-500",
                  "focus:outline-none focus:ring-2 focus:ring-[#a17b3c] focus:ring-offset-2 focus:ring-offset-[#f7f1e6]",
                  active
                    ? "bg-[#19130e] text-[#e1c783]"
                    : "text-[#786c5e] hover:bg-black/5 hover:text-[#19130e]",
                ].join(" ")}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {filteredCollections.map((collection, index) => (
            <article
              key={collection.id}
              className={[
                "group",
                index === 0 ? "lg:col-span-2" : "",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={() => setSelected(collection)}
                aria-label={`View ${collection.title} collection`}
                className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-[#a17b3c] focus:ring-offset-4"
              >
                <div
                  className={[
                    "luxury-image relative overflow-hidden bg-[#e9dfcf]",
                    index === 0
                      ? "aspect-[16/10]"
                      : "aspect-[4/5]",
                  ].join(" ")}
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 1024px) 50vw, 33vw"
                    }
                    priority={index === 0}
                  />

                  <div
                    className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <Image
                      src={collection.secondaryImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes={
                        index === 0
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 1024px) 50vw, 33vw"
                      }
                    />
                  </div>

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/10 text-[9px] text-white backdrop-blur-md"
                    aria-hidden="true"
                  >
                    {collection.number}
                  </div>

                  <div
                    className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/10 text-xl text-white backdrop-blur-md transition duration-500 group-hover:rotate-90"
                    aria-hidden="true"
                  >
                    +
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="text-[8px] uppercase tracking-[0.4em] text-[#e2c785]">
                      {collection.category}
                    </p>

                    <h3 className="ubuntu-serif mt-3 text-3xl md:text-4xl">
                      {collection.title}
                    </h3>
                  </div>
                </div>
              </button>

              <div className="mt-5">
                <p className="max-w-xl text-sm leading-7 text-[#75695d]">
                  {collection.description}
                </p>

                <p className="mt-4 text-[8px] uppercase tracking-[0.3em] text-[#9c7940]">
                  {collection.material}
                </p>
              </div>
            </article>
          ))}
        </div>

        {filteredCollections.length === 0 && (
          <div className="border-y border-black/10 py-24 text-center">
            <p className="ubuntu-serif text-4xl">
              No collections found.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="mt-7 border border-[#19130e] px-7 py-4 text-[8px] uppercase tracking-[0.3em] transition hover:bg-[#19130e] hover:text-[#f7f1e6] focus:outline-none focus:ring-2 focus:ring-[#a17b3c] focus:ring-offset-2"
            >
              View all collections
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-[#110d09]/90 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="collection-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelected(null);
            }
          }}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden bg-[#f7f1e6]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close collection"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-black/20 bg-[#f7f1e6]/90 text-xl text-[#1d1711] backdrop-blur transition hover:border-[#9b773d] hover:bg-[#9b773d] focus:outline-none focus:ring-2 focus:ring-[#9b773d] focus:ring-offset-2"
            >
              ×
            </button>

            <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-2">
              <div className="luxury-image relative min-h-[500px] lg:min-h-[700px]">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#9b773d]">
                  Collection {selected.number}
                </p>

                <h3
                  id="collection-modal-title"
                  className="ubuntu-serif mt-5 text-5xl leading-none md:text-6xl"
                >
                  {selected.title}
                </h3>

                <div
                  className="my-8 h-px w-20 bg-[#b18b45]"
                  aria-hidden="true"
                />

                <p className="text-base leading-8 text-[#6d6256]">
                  {selected.description}
                </p>

                <div className="mt-10 border-y border-black/10 py-6">
                  <p className="text-[8px] uppercase tracking-[0.35em] text-[#96743d]">
                    Materials
                  </p>

                  <p className="mt-3 text-sm text-[#4d443b]">
                    {selected.material}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href={`/contact?collection=${encodeURIComponent(selected.title)}`}
                    className="luxury-button luxury-button-dark focus:outline-none focus:ring-2 focus:ring-[#a17b3c] focus:ring-offset-2"
                  >
                    Private Enquiry
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="border border-black/15 px-7 py-4 text-[8px] uppercase tracking-[0.3em] text-[#5d5145] transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a17b3c] focus:ring-offset-2"
                  >
                    Continue Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}