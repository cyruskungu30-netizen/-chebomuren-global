 "use client";

import Image from "next/image";

const destinations = [
  {
    city: "Nairobi",
    country: "Kenya",
    description: "Where heritage meets contemporary African design.",
  },
  {
    city: "Dar es Salaam",
    country: "Tanzania",
    description: "Natural materials shaped into modern luxury.",
  },
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    description: "A region rich in craftsmanship and rare beauty.",
  },
  {
    city: "Kigali",
    country: "Rwanda",
    description: "Modern African elegance with a refined spirit.",
  },
  {
    city: "London",
    country: "United Kingdom",
    description: "African heritage entering the global luxury conversation.",
  },
  {
    city: "Atlanta",
    country: "United States",
    description: "A global generation carrying African identity forward.",
  },
];

export default function GlobalSisterhood() {
  return (
    <section className="overflow-hidden bg-[#17110d] px-6 py-24 text-white lg:px-12 lg:py-36">

      <div className="mx-auto max-w-[1500px]">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

          <div>

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#e2c785]">
              Ubuntu Around The World
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-none md:text-8xl">

              One heritage.

              <br />

              <span className="italic text-[#c9a45d]">
                Many horizons.
              </span>

            </h2>

          </div>

          <p className="max-w-xl text-sm leading-8 text-white/45">
            Ubuntu Couture House carries the spirit of East Africa into a
            world where heritage, craftsmanship and modern luxury meet.
          </p>

        </div>

        <div className="relative mt-16 overflow-hidden border border-white/10">

          <div className="luxury-image relative aspect-[16/7]">

            <Image
              src="/images/ubuntu-global-lookbook.jpeg"
              alt="Ubuntu Couture House global lookbook"
              fill
              className="object-cover"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/30" />

          </div>

        </div>

        <div className="mt-5 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination) => (

            <div
              key={destination.city}
              className="bg-[#17110d] p-8 transition duration-500 hover:bg-[#241b15]"
            >

              <p className="text-[8px] uppercase tracking-[0.35em] text-[#c9a45d]">
                {destination.country}
              </p>

              <h3 className="ubuntu-serif mt-3 text-3xl">
                {destination.city}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                {destination.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}