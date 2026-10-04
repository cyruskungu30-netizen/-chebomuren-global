 "use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
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
  value: string | null
): CollectionCategory | "All" {
  if (!value) {
    return "All";
  }

  const normalized = value.toLowerCase();

  if (normalized === "couture") {
    return "Couture Fashion";
  }

  if (normalized === "jewellery") {
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
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e9dfd0]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4">
          <span className="border border-white/50 bg-black/20 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        <div className="absolute bottom-5 right-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f1e6] text-[#17110d]">
            →
          </span>
        </div>
      </div>

      <div className="border-b border-[#17110d]/10 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-[var(--font-ubuntu-serif)] text-2xl font-light">
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
    searchParams.get("category")
  );

  const [category, setCategory] = useState<
    CollectionCategory | "All"
  >(queryCategory);

  const [search, setSearch] = useState("");

  const products = useMemo(() => {
    const allProducts = getAllProducts();

    return allProducts.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category;

      const searchValue = search.trim().toLowerCase();

      const matchesSearch =
        !searchValue ||
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.description
          .toLowerCase()
          .includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col gap-8 border-b border-[#17110d]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92713d]">
              Discover the house
            </p>

            <h2 className="mt-4 font-[var(--font-ubuntu-serif)] text-5xl font-light leading-none sm:text-6xl">
              The collections
            </h2>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search the collection..."
              className="w-full border-b border-[#17110d]/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#17110d]/35 focus:border-[#92713d]"
              aria-label="Search collections"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => {
            const selected = category === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setCategory(item.value)}
                className={`shrink-0 border px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  selected
                    ? "border-[#17110d] bg-[#17110d] text-[#f7f1e6]"
                    : "border-[#17110d]/15 text-[#17110d] hover:border-[#92713d]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#806b52]">
            {products.length}{" "}
            {products.length === 1 ? "creation" : "creations"}
          </p>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92713d] underline underline-offset-4"
            >
              Clear search
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
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-7 border border-[#17110d] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] transition hover:bg-[#17110d] hover:text-[#f7f1e6]"
            >
              View everything
            </button>
          </div>
        )}

        <div className="mt-20 border-t border-[#17110d]/10 pt-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#92713d]">
                Private service
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
              className="w-fit border border-[#17110d] bg-[#17110d] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f7f1e6] transition hover:bg-[#a98448]"
            >
              Book a private appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}