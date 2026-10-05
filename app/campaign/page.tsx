 import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campaign | Ubuntu Couture House",
  description:
    "Discover the Ubuntu Couture House campaign — heritage, identity, courage, and contemporary African luxury.",
};

const campaignImages = [
  {
    src: "/images/hero-couture-yellow.jpeg",
    alt: "Ubuntu Couture House couture campaign portrait",
    label: "The House",
  },
  {
    src: "/images/ubuntu-global-lookbook.jpeg",
    alt: "Ubuntu Couture House global couture lookbook",
    label: "The World",
  },
  {
    src: "/images/rare-gem-neckpiece.jpeg",
    alt: "Ubuntu Couture House rare gem jewellery",
    label: "The Craft",
  },
  {
    src: "/images/royal-headpiece-gold.jpeg",
    alt: "Ubuntu Couture House royal gold headpiece",
    label: "The Crown",
  },
];

export default function CampaignPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section
        aria-labelledby="campaign-heading"
        className="relative isolate min-h-[88vh] overflow-hidden bg-[#17110d] text-white"
      >
        <Image
          src="/images/hero-couture-yellow.jpeg"
          alt="Ubuntu Couture House campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/48"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-[#17110d]/15 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-white/10"
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1500px] items-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28">
          <div className="w-full">
            <div className="mb-7 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-12 bg-[#d8b66a] sm:w-16"
              />

              <p className="text-[8px] font-medium uppercase tracking-[0.48em] text-[#d8b66a]">
                The Campaign
              </p>
            </div>

            <h1
              id="campaign-heading"
              className="ubuntu-serif max-w-6xl text-[4.4rem] font-light leading-[0.82] tracking-[-0.055em] sm:text-8xl lg:text-[10rem]"
            >
              Wear
              <br />
              <span className="italic text-[#dfc27c]">your story.</span>
            </h1>

            <div className="mt-9 flex max-w-3xl flex-col gap-7 sm:flex-row sm:items-end sm:gap-12">
              <p className="max-w-2xl text-sm leading-8 text-white/65 md:text-base">
                A visual expression of heritage, courage, identity, and
                contemporary African luxury.
              </p>

              <p className="shrink-0 text-[8px] font-medium uppercase tracking-[0.3em] text-white/35">
                Ubuntu Couture House
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="campaign-idea"
        className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-[8px] font-medium uppercase tracking-[0.42em] text-[#92713d]">
            The Idea
          </p>

          <h2
            id="campaign-idea"
            className="ubuntu-serif mx-auto mt-7 max-w-5xl text-5xl font-light leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          >
            Heritage is not behind us.
            <br />
            <span className="italic text-[#a17c3f]">
              It moves with us.
            </span>
          </h2>

          <div className="mx-auto mt-9 h-px w-10 bg-[#a17c3f]/50" />

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#65584d]">
            Ubuntu Couture House transforms heritage into contemporary
            expressions of confidence, individuality, dignity, and
            leadership.
          </p>
        </div>
      </section>

      <section
        aria-label="Campaign imagery"
        className="bg-[#17110d] p-2 sm:p-3"
      >
        <div className="grid gap-2 sm:grid-cols-2">
          {campaignImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden ${
                index === 0
                  ? "aspect-[4/5] sm:row-span-2 sm:aspect-auto sm:min-h-[800px]"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80"
              />

              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
                <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-white/80">
                  {image.label}
                </span>

                <span className="text-[8px] tracking-[0.25em] text-white/45">
                  0{index + 1}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#17110d] px-5 pb-24 text-[#f7f1e6] sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1200px] border-t border-white/10 pt-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#c9a45d]">
                Enter the Collection
              </p>

              <h2 className="ubuntu-serif mt-5 max-w-2xl text-4xl font-light leading-[0.95] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                Make the story yours.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
                Discover pieces created where heritage, craftsmanship and
                contemporary expression meet.
              </p>
            </div>

            <Link
              href="/collections/catalogue"
              className="inline-flex min-h-[52px] items-center justify-center border border-[#c9a45d] px-8 py-4 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#dfc27c] transition-colors hover:bg-[#c9a45d] hover:text-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17110d]"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}