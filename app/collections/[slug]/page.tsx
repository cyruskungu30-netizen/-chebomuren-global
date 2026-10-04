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
      title: "Creation Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
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
        item.slug !== product.slug
    )
    .slice(0, 3);

  return (
    <main className="bg-[#f7f1e6] text-[#17110d]">
      <section className="px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#92713d]">
            <Link
              href="/collections/catalogue"
              className="transition hover:text-[#17110d]"
            >
              Collections
            </Link>

            <span>/</span>

            <span>{product.category}</span>

            <span>/</span>

            <span className="text-[#17110d]/45">
              {product.name}
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="grid gap-4 sm:grid-cols-2">
              {product.images.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`relative overflow-hidden bg-[#e9dfd0] ${
                    index === 0
                      ? "aspect-[4/5] sm:col-span-2"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} — view ${
                      index + 1
                    }`}
                    fill
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 65vw"
                        : "(max-width: 640px) 100vw, 32vw"
                    }
                    className="object-cover transition duration-700 hover:scale-[1.025]"
                  />
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#92713d]">
                {product.category}
              </p>

              <h1 className="mt-5 font-[var(--font-ubuntu-serif)] text-5xl font-light leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                {product.name}
              </h1>

              <p className="mt-5 font-[var(--font-ubuntu-serif)] text-xl italic text-[#806b52]">
                {product.subtitle}
              </p>

              <div className="my-8 h-px bg-[#17110d]/10" />

              <p className="text-sm leading-8 text-[#62564b]">
                {product.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WishlistButton product={product} />

                <Link
                  href={`/contact?subject=${encodeURIComponent(
                    product.name
                  )}`}
                  className="flex min-h-[52px] flex-1 items-center justify-center border border-[#17110d] px-6 text-[9px] font-semibold uppercase tracking-[0.2em] transition hover:bg-[#17110d] hover:text-[#f7f1e6]"
                >
                  Private Enquiry
                </Link>
              </div>

              <Link
                href="/appointments"
                className="mt-3 flex min-h-[52px] w-full items-center justify-center bg-[#17110d] px-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f7f1e6] transition hover:bg-[#a98448]"
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
        <section className="border-t border-[#17110d]/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#92713d]">
                  Continue exploring
                </p>

                <h2 className="mt-4 font-[var(--font-ubuntu-serif)] text-5xl font-light leading-none">
                  From the same collection
                </h2>
              </div>

              <Link
                href="/collections/catalogue"
                className="w-fit text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92713d] underline underline-offset-4"
              >
                View all collections
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/collections/${item.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e9dfd0]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="border-b border-[#17110d]/10 py-5">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#92713d]">
                      {item.category}
                    </p>

                    <h3 className="mt-2 font-[var(--font-ubuntu-serif)] text-2xl font-light">
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
      <summary className="flex cursor-pointer list-none items-center justify-between py-5">
        <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
          {title}
        </span>

        <span className="font-light text-[#92713d] transition group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="pb-6 text-sm leading-7 text-[#65584d]">
        {items ? (
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3"
              >
                <span className="text-[#92713d]">
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
