 "use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "/images/couture-brown-front.jpeg",
    title: "The Heritage Silhouette",
    category: "Couture",
  },
  {
    src: "/images/maasai-jewellery-editorial.jpeg",
    title: "Living Heritage",
    category: "Jewellery",
  },
  {
    src: "/images/royal-headpiece-gold.jpeg",
    title: "African Majesty",
    category: "Headpieces",
  },
  {
    src: "/images/rare-gem-neckpiece.jpeg",
    title: "Rare Strength",
    category: "Rare Gems",
  },
  {
    src: "/images/cow-horn-jewellery.jpeg",
    title: "Earth Reimagined",
    category: "Natural Materials",
  },
  {
    src: "/images/heritage-floral-headpiece.jpeg",
    title: "Heritage Bloom",
    category: "Headpieces",
  },
];

export default function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section className="bg-[#f8f3e9] px-6 py-24 lg:px-12 lg:py-36">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#967333]">
                The Ubuntu Edit
              </p>

              <h2 className="ubuntu-serif mt-5 text-5xl md:text-7xl">
                Wearable
                <br />
                <span className="italic text-[#a17b3b]">
                  stories.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-8 text-[#76695d]">
              A visual exploration of craftsmanship, heritage and contemporary
              African luxury.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {images.map((image, index) => (

              <button
                key={image.src}
                type="button"
                onClick={() => setSelected(index)}
                className="group text-left"
              >

                <div className="luxury-image relative aspect-[4/5] overflow-hidden bg-[#eee4d3]">

                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                    <p className="text-[8px] uppercase tracking-[0.35em] text-[#e2c785]">
                      {image.category}
                    </p>

                    <h3 className="ubuntu-serif mt-2 text-2xl">
                      {image.title}
                    </h3>

                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/20 text-white backdrop-blur">
                    +
                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>

      {selected !== null && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5"
          onClick={() => setSelected(null)}
        >

          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-white/20 text-2xl text-white transition hover:border-[#e2c785] hover:text-[#e2c785]"
            aria-label="Close gallery"
          >
            ×
          </button>

          <div
            className="relative h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={images[selected].src}
              alt={images[selected].title}
              fill
              className="object-contain"
              sizes="100vw"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24 text-white">

              <p className="text-[8px] uppercase tracking-[0.35em] text-[#e2c785]">
                {images[selected].category}
              </p>

              <h3 className="ubuntu-serif mt-2 text-3xl md:text-4xl">
                {images[selected].title}
              </h3>

            </div>

          </div>

        </div>

      )}

    </>
  );
}