 import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campaign",
  description:
    "Discover the Ubuntu Couture House campaign — heritage, identity, courage, and contemporary African luxury.",
};

const campaignImages = [
  {
    src: "/images/hero-couture-yellow.jpeg",
    alt: "Ubuntu Couture House couture",
  },
  {
    src: "/images/ubuntu-global-lookbook.jpeg",
    alt: "Ubuntu Couture House global lookbook",
  },
  {
    src: "/images/rare-gem-neckpiece.jpeg",
    alt: "Ubuntu Couture House rare gem jewellery",
  },
  {
    src: "/images/royal-headpiece-gold.jpeg",
    alt: "Ubuntu Couture House royal headpiece",
  },
];

export default function CampaignPage() {
  return (
    <main className="bg-[#f7f1e6] text-[#17110d]">
      <section className="relative min-h-[85vh] overflow-hidden bg-[#17110d] text-white">
        <Image
          src="/images/hero-couture-yellow.jpeg"
          alt="Ubuntu Couture House campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-[1500px] items-end px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#d8b66a]">
              The Campaign
            </p>

            <h1 className="mt-6 max-w-6xl font-[var(--font-ubuntu-serif)] text-6xl font-light leading-[0.85] sm:text-8xl lg:text-[10rem]">
              Wear
              <br />
              <span className="italic text-[#dfc27c]">
                your story.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/65">
              A visual expression of heritage, courage, identity, and
              contemporary African luxury.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#92713d]">
            The idea
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl font-[var(--font-ubuntu-serif)] text-5xl font-light leading-[0.95] sm:text-6xl lg:text-8xl">
            Heritage is not behind us.
            <br />
            <span className="italic">It moves with us.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#65584d]">
            Ubuntu Couture House transforms heritage into contemporary
            expressions of confidence, individuality, dignity, and
            leadership.
          </p>
        </div>
      </section>

      <section className="grid gap-2 bg-[#17110d] p-2 sm:grid-cols-2">
        {campaignImages.map((image, index) => (
          <div
            key={image.src}
            className={`relative overflow-hidden ${
              index === 0
                ? "aspect-[4/5] sm:row-span-2 sm:aspect-auto"
                : "aspect-[4/5]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-[1.035]"
            />
          </div>
        ))}
      </section>

      <section className="bg-[#17110d] px-5 pb-24 text-[#f7f1e6] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#c9a45d]">
              Enter the collection
            </p>

            <h2 className="mt-4 font-[var(--font-ubuntu-serif)] text-4xl font-light sm:text-5xl">
              Make the story yours.
            </h2>
          </div>

          <Link
            href="/collections/catalogue"
            className="border border-[#c9a45d] px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#c9a45d] hover:text-[#17110d]"
          >
            Explore Collections
          </Link>
        </div>
      </section>
    </main>
  );
}