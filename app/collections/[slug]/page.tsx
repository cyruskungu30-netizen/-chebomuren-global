 import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import WishlistButton from "@/components/WishlistButton";
import {
  getAllProducts,
  getProduct,
} from "@/lib/collections";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Creation Not Found | Ubuntu Couture House",
      description:
        "The requested Ubuntu Couture House creation could not be found.",
    };
  }

  return {
    title: `${product.name} | Ubuntu Couture House`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Ubuntu Couture House`,
      description: product.description,
      type: "website",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1500,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = getAllProducts()
    .filter(
      (item) =>
        item.category === product.category &&
        item.slug !== product.slug,
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section className="px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1500px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[8px] font-medium uppercase tracking-[0.22em] text-[#92713d] sm:text-[9px]"
          >
            <Link
              href="/collections/catalogue"
              className="transition-colors hover:text-[#17110d] focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
            >
              Collections
            </Link>

            <span aria-hidden="true" className="text-[#17110d]/25">
              /
            </span>

            <span>{product.category}</span>

            <span aria-hidden="true" className="text-[#17110d]/25">
              /
            </span>

            <span
              aria-current="page"
              className="max-w-[240px] truncate text-[#17110d]/45"
            >
              {product.name}
            </span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
            <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
              {product.images.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`group relative overflow-hidden bg-[#e9dfd0] ${
                    index === 0
                      ? "aspect-[4/5] sm:col-span-2"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} — view ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 65vw"
                        : "(max-width: 640px) 100vw, 32vw"
                    }
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                  />
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#a17c3f]"
                />

                <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#92713d] sm:text-[9px]">
                  {product.category}
                </p>
              </div>

              <h1 className="ubuntu-serif mt-5 text-[3.25rem] font-light leading-[0.88] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                {product.name}
              </h1>

              <p className="ubuntu-serif mt-5 text-xl italic leading-7 text-[#806b52]">
                {product.subtitle}
              </p>

              <div
                aria-hidden="true"
                className="my-8 h-px bg-[#17110d]/10"
              />

              <p className="max-w-xl text-sm leading-8 text-[#62564b]">
                {product.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <WishlistButton product={product} />

                <Link
                  href={`/contact?subject=${encodeURIComponent(
                    product.name,
                  )}`}
                  className="flex min-h-[52px] items-center justify-center border border-[#17110d] px-6 text-[8px] font-semibold uppercase tracking-[0.22em] transition-colors hover:bg-[#17110d] hover:text-[#f7f1e6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f1e6]"
                >
                  Private Enquiry
                </Link>
              </div>

              <Link
                href="/appointments"
                className="mt-3 flex min-h-[54px] w-full items-center justify-center bg-[#17110d] px-6 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#f7f1e6] transition-colors hover:bg-[#a98448] hover:text-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a98448] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f1e6]"
              >
                Book a Private Consultation
              </Link>

              <div className="mt-12 border-y border-[#17110d]/10">
                <DetailBlock
                  title="Materials"
                  items={product.materials}
                />

                <DetailBlock
                  title="Inspiration"
                  text={product.inspiration}
                />

                <DetailBlock
                  title="Craftsmanship"
                  text={product.craftsmanship}
                />

                <DetailBlock
                  title="Origin"
                  text={product.origin}
                />

                <DetailBlock
                  title="Styling"
                  text={product.styling}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="border-t border-[#17110d]/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#92713d] sm:text-[9px]">
                  Continue Exploring
                </p>

                <h2
                  id="related-heading"
                  className="ubuntu-serif mt-4 max-w-3xl text-4xl font-light leading-[0.95] tracking-[-0.025em] sm:text-5xl"
                >
                  From the same collection
                </h2>
              </div>

              <Link
                href="/collections/catalogue"
                className="w-fit text-[8px] font-semibold uppercase tracking-[0.22em] text-[#92713d] underline decoration-[#92713d]/40 underline-offset-4 transition-colors hover:text-[#17110d] hover:decoration-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4"
              >
                View all collections
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/collections/${item.slug}`}
                  className="group block focus:outline-none"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e9dfd0]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <span className="absolute left-5 top-5 text-[8px] font-medium tracking-[0.22em] text-white/0 transition-colors duration-500 group-hover:text-white/80">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="border-b border-[#17110d]/10 py-5 transition-colors group-hover:border-[#a17c3f]/50">
                    <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-[#92713d]">
                      {item.category}
                    </p>

                    <h3 className="ubuntu-serif mt-2 text-2xl font-light">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function DetailBlock({
  title,
  text,
  items,
}: {
  title: string;
  text?: string;
  items?: string[];
}) {
  return (
    <details className="group border-b border-[#17110d]/10 last:border-b-0">
      <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#a17c3f] [&::-webkit-details-marker]:hidden">
        <span className="text-[8px] font-semibold uppercase tracking-[0.24em]">
          {title}
        </span>

        <span
          aria-hidden="true"
          className="text-lg font-light leading-none text-[#92713d] transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="pb-6 text-sm leading-7 text-[#65584d]">
        {items ? (
          <ul className="space-y-2.5">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="pt-[1px] text-[#92713d]"
                >
                  —
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </details>
  );
}