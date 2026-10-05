 "use client";

import Image from "next/image";

const destinations = [
  {
    city: "Nairobi",
    country: "Kenya",
    description:
      "Where heritage meets contemporary African design.",
  },
  {
    city: "Dar es Salaam",
    country: "Tanzania",
    description:
      "Natural materials shaped into modern luxury.",
  },
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    description:
      "A region rich in craftsmanship and rare beauty.",
  },
  {
    city: "Kigali",
    country: "Rwanda",
    description:
      "Modern African elegance with a refined spirit.",
  },
  {
    city: "London",
    country: "United Kingdom",
    description:
      "African heritage entering the global luxury conversation.",
  },
  {
    city: "Atlanta",
    country: "United States",
    description:
      "A global generation carrying African identity forward.",
  },
];

export default function GlobalSisterhood() {
  return (
    <section
      className="relative overflow-hidden bg-[#17110d] px-6 py-24 text-white lg:px-12 lg:py-36"
      aria-labelledby="global-sisterhood-title"
    >
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-[#c9a45d]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-56 -left-40 h-[600px] w-[600px] rounded-full border border-[#c9a45d]/[0.06]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span
                className="h-px w-12 bg-[#c9a45d]"
                aria-hidden="true"
              />

              <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#e2c785]">
                Ubuntu Around The World
              </p>
            </div>

            <h2
              id="global-sisterhood-title"
              className="ubuntu-serif mt-7 text-5xl leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              One heritage.
              <br />
              <span className="italic text-[#c9a45d]">
                Many horizons.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-8 text-white/50">
              Ubuntu Couture House carries the spirit of East Africa
              into a world where heritage, craftsmanship and modern
              luxury meet.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span
                className="h-px w-16 bg-white/15"
                aria-hidden="true"
              />

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                From Africa, outward
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden border border-white/10">
          <div className="luxury-image relative aspect-[16/7] min-h-[280px]">
            <Image
              src="/images/ubuntu-global-lookbook.jpeg"
              alt="Ubuntu Couture House global lookbook"
              fill
              priority
              sizes="100vw"
              className="object-cover transition duration-[1600ms] hover:scale-[1.025]"
            />

            <div
              className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/35"
              aria-hidden="true"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <p className="max-w-xl font-[var(--font-ubuntu-serif)] text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                African identity does not stop at a border.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <article
              key={destination.city}
              className="group relative bg-[#17110d] p-8 transition duration-500 hover:bg-[#241b15] sm:p-9"
            >
              <div className="flex items-start justify-between gap-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#c9a45d]">
                  {destination.country}
                </p>

                <span
                  className="text-[8px] tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-[#c9a45d]/60"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
              </div>

              <h3 className="ubuntu-serif mt-5 text-3xl leading-none sm:text-4xl">
                {destination.city}
              </h3>

              <div
                className="mt-6 h-px w-10 bg-[#c9a45d]/40 transition-all duration-500 group-hover:w-16 group-hover:bg-[#c9a45d]"
                aria-hidden="true"
              />

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/40 transition-colors duration-500 group-hover:text-white/55">
                {destination.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[8px] uppercase tracking-[0.35em] text-[#c9a45d]">
              A shared language
            </p>

            <p className="mt-4 max-w-3xl font-[var(--font-ubuntu-serif)] text-3xl leading-tight text-white/90 sm:text-4xl">
              Heritage travels with us — through craft, identity,
              creativity and the people who carry it forward.
            </p>
          </div>

          <div
            className="hidden h-20 w-20 items-center justify-center border border-[#c9a45d]/30 md:flex"
            aria-hidden="true"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#c9a45d]">
              Ubuntu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}