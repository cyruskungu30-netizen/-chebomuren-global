 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  getAllProducts,
  type CollectionCategory,
  type CollectionProduct,
} from "@/lib/collections";

const categories: {
  value: CollectionCategory | "All";
  label: string;
}[] = [
  {
    value: "All",
    label: "All Collections",
  },
  {
    value: "Couture Fashion",
    label: "Couture Fashion",
  },
  {
    value: "Contemporary Jewellery",
    label: "Jewellery",
  },
  {
    value: "Rare Gems",
    label: "Rare Gems",
  },
  {
    value: "Maasai Beadwork",
    label: "Beadwork",
  },
  {
    value: "Royal Headpieces",
    label: "Headpieces",
  },
];

function categoryFromQuery(
  value: string | null,
): CollectionCategory | "All" {
  if (!value) {
    return "All";
  }

  const normalized = value.toLowerCase().trim();

  if (normalized === "couture") {
    return "Couture Fashion";
  }

  if (normalized === "jewellery" || normalized === "jewelry") {
    return "Contemporary Jewellery";
  }

  if (
    normalized === "rare-gems" ||
    normalized === "rare gems"
  ) {
    return "Rare Gems";
  }

  if (
    normalized === "beadwork" ||
    normalized === "maasai-beadwork"
  ) {
    return "Maasai Beadwork";
  }

  if (
    normalized === "headpieces" ||
    normalized === "royal-headpieces"
  ) {
    return "Royal Headpieces";
  }

  return "All";
}

function ProductCard({
  product,
}: {
  product: CollectionProduct;
}) {
  return (
    <Link
      href={`/collections/${product.slug}`}
      className="group block focus:outline-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e9dfd0]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-[1000ms] ease-out group-hover:scale-[1.045]"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />

        <div className="absolute left-4 top-4">
          <span className="border border-white/50 bg-black/25 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        <div className="absolute bottom-5 right-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span
            className="flex h-11 w-11 items-center justify-center bg-[#f7f1e6] text-[#17110d]"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>

      <div className="border-b border-[#17110d]/10 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-[var(--font-ubuntu-serif)] text-2xl font-light transition-colors duration-300 group-hover:text-[#92713d]">
              {product.name}
            </h3>

            <p className="mt-2 max-w-md text-xs leading-5 text-[#806b52]">
              {product.description}
            </p>
          </div>

          <span className="shrink-0 text-[9px] uppercase tracking-[0.18em] text-[#8b7557]">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CollectionBrowser() {
  const searchParams = useSearchParams();

  const queryCategory = categoryFromQuery(
    searchParams.get("category"),
  );

  const [category, setCategory] = useState<
    CollectionCategory | "All"
  >(queryCategory);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setCategory(queryCategory);
  }, [queryCategory]);

  const products = useMemo(() => {
    const allProducts = getAllProducts();
    const searchValue = search.trim().toLowerCase();

    return allProducts.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch =
        !searchValue ||
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  function clearFilters() {
    setSearch("");
    setCategory("All");
  }

  return (
    <section
      className="bg-[#f7f1e6] px-5 py-20 text-[#17110d] sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="collection-browser-title"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col gap-8 border-b border-[#17110d]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92713d]">
              Discover the House
            </p>

            <h2
              id="collection-browser-title"
              className="mt-4 font-[var(--font-ubuntu-serif)] text-5xl font-light leading-none sm:text-6xl"
            >
              The collections
            </h2>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <label htmlFor="collection-search" className="sr-only">
              Search collections
            </label>

            <input
              id="collection-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search the collection..."
              autoComplete="off"
              className="w-full border-b border-[#17110d]/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#17110d]/35 focus:border-[#92713d] focus:ring-0"
              aria-label="Search collections"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#806b52] transition hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#92713d]"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Collection categories"
        >
          {categories.map((item) => {
            const selected = category === item.value;

            return (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setCategory(item.value)}
                className={`shrink-0 border px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#92713d] focus:ring-offset-2 ${
                  selected
                    ? "border-[#17110d] bg-[#17110d] text-[#f7f1e6]"
                    : "border-[#17110d]/15 text-[#17110d] hover:border-[#92713d] hover:text-[#92713d]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-between gap-5">
          <p
            className="text-[9px] uppercase tracking-[0.25em] text-[#806b52]"
            aria-live="polite"
          >
            {products.length}{" "}
            {products.length === 1 ? "creation" : "creations"}
          </p>

          {(search || category !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92713d] underline underline-offset-4 transition hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#92713d]"
            >
              Clear filters
            </button>
          )}
        </div>

        {products.length > 0 ? (
          <div className="mt-7 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="border border-[#17110d]/10 px-6 py-24 text-center">
            <p className="font-[var(--font-ubuntu-serif)] text-4xl font-light">
              No creations found.
            </p>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#6c5e50]">
              Try another search or explore another part of the
              collection.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-7 border border-[#17110d] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] transition hover:bg-[#17110d] hover:text-[#f7f1e6] focus:outline-none focus:ring-2 focus:ring-[#92713d] focus:ring-offset-2"
            >
              View Everything
            </button>
          </div>
        )}

        <div className="mt-20 border-t border-[#17110d]/10 pt-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#92713d]">
                Private Service
              </p>

              <h3 className="mt-4 max-w-3xl font-[var(--font-ubuntu-serif)] text-4xl font-light leading-none sm:text-5xl">
                Looking for something made especially for you?
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#65584d]">
                Speak privately with Ubuntu Couture House about bespoke
                couture, jewellery curation, rare gems, or a royal
                headpiece.
              </p>
            </div>

            <Link
              href="/appointments"
              className="inline-flex min-h-12 w-fit items-center justify-center border border-[#17110d] bg-[#17110d] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f7f1e6] transition hover:border-[#a98448] hover:bg-[#a98448] focus:outline-none focus:ring-2 focus:ring-[#a98448] focus:ring-offset-2"
            >
              Book a Private Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}