 "use client";

import Image from "next/image";
import Link from "next/link";

import { useWishlist } from "@/components/WishlistProvider";
import { getProduct } from "@/lib/collections";

export default function UbuntuWishlist() {
  const {
    wishlist,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  const products = wishlist
    .map((slug) => getProduct(slug))
    .filter(
      (product): product is NonNullable<typeof product> =>
        Boolean(product)
    );

  return (
    <section className="min-h-[75vh] bg-[#f7f1e6] px-5 pb-24 pt-36 text-[#17110d] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1500px]">

        <div className="max-w-4xl">
          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#92713d]">
            Private Selection
          </p>

          <h1 className="mt-6 font-[var(--font-ubuntu-serif)] text-6xl font-light leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-[8rem]">
            Pieces worth
            <br />
            <span className="italic text-[#a98448]">
              remembering.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#65584d]">
            Save creations that speak to you and return to them when
            you are ready.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="mt-20 border-y border-[#17110d]/10 py-24 text-center">

            <p className="font-[var(--font-ubuntu-serif)] text-4xl font-light sm:text-5xl">
              Your private selection is empty.
            </p>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#65584d]">
              Explore the collections and save the pieces that feel
              like part of your story.
            </p>

            <Link
              href="/collections/catalogue"
              className="mt-8 inline-flex bg-[#17110d] px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e6] transition hover:bg-[#a98448]"
            >
              Explore Collections
            </Link>

          </div>
        ) : (
          <>
            <div className="mt-14 flex items-center justify-between border-b border-[#17110d]/10 pb-5">

              <p className="text-[9px] uppercase tracking-[0.25em] text-[#806b52]">
                {products.length}{" "}
                {products.length === 1
                  ? "saved creation"
                  : "saved creations"}
              </p>

              <button
                type="button"
                onClick={clearWishlist}
                className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92713d] underline underline-offset-4 transition hover:text-[#17110d]"
              >
                Clear selection
              </button>

            </div>

            <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

              {products.map((product) => (
                <article key={product.slug}>

                  <Link
                    href={`/collections/${product.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#e9dfd0]">

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      />

                    </div>
                  </Link>

                  <div className="border-b border-[#17110d]/10 py-5">

                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#92713d]">
                      {product.category}
                    </p>

                    <div className="mt-2 flex items-start justify-between gap-4">

                      <Link
                        href={`/collections/${product.slug}`}
                        className="font-[var(--font-ubuntu-serif)] text-2xl font-light transition hover:text-[#a98448]"
                      >
                        {product.name}
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromWishlist(product.slug)
                        }
                        className="shrink-0 text-[9px] uppercase tracking-[0.18em] text-[#806b52] transition hover:text-[#17110d]"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </article>
              ))}

            </div>

            <div className="mt-20 grid gap-8 border-t border-[#17110d]/10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-[9px] uppercase tracking-[0.28em] text-[#92713d]">
                  Ready when you are
                </p>

                <h2 className="mt-4 max-w-3xl font-[var(--font-ubuntu-serif)] text-4xl font-light sm:text-5xl">
                  Turn your private selection into a conversation.
                </h2>

              </div>

              <Link
                href="/appointments"
                className="w-fit bg-[#17110d] px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e6] transition hover:bg-[#a98448]"
              >
                Book a Private Appointment
              </Link>

            </div>
          </>
        )}

      </div>
    </section>
  );
}