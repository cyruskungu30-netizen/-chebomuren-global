 "use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const headingId = useId();

  const closeGallery = () => {
    setSelected(null);
  };

  const showPrevious = () => {
    setSelected((current) => {
      if (current === null) {
        return null;
      }

      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelected((current) => {
      if (current === null) {
        return null;
      }

      return (current + 1) % images.length;
    });
  };

  useEffect(() => {
    if (selected === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <>
      <section
        aria-labelledby={headingId}
        className="bg-[#f8f3e9] px-6 py-24 text-[#17110d] lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#967333]">
                The Ubuntu Edit
              </p>

              <h2
                id={headingId}
                className="ubuntu-serif mt-5 text-5xl leading-[0.92] md:text-7xl"
              >
                Wearable
                <br />
                <span className="italic text-[#a17b3b]">stories.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-8 text-[#76695d]">
              A visual exploration of craftsmanship, heritage and contemporary
              African luxury.
            </p>
          </div>

          <div className="grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`View ${image.title} — ${image.category}`}
                className="group block w-full text-left focus:outline-none focus:ring-2 focus:ring-[#a17b3b] focus:ring-offset-4 focus:ring-offset-[#f8f3e9]"
              >
                <div className="luxury-image relative aspect-[4/5] overflow-hidden bg-[#eee4d3]">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.045]"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-75 transition duration-500 group-hover:opacity-95"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="text-[8px] uppercase tracking-[0.35em] text-[#e2c785]">
                      {image.category}
                    </p>

                    <h3 className="ubuntu-serif mt-2 text-2xl leading-tight transition-transform duration-500 group-hover:-translate-y-1">
                      {image.title}
                    </h3>

                    <span className="mt-4 inline-flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-white/0 transition-all duration-500 group-hover:text-white/80">
                      View piece
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  <span
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/20 text-lg text-white backdrop-blur transition duration-300 group-hover:border-[#e2c785] group-hover:text-[#e2c785]"
                    aria-hidden="true"
                  >
                    +
                  </span>

                  <span
                    className="absolute left-5 top-5 text-[8px] uppercase tracking-[0.25em] text-white/55"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#090705]/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${images[selected].title} gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeGallery();
            }
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeGallery}
            className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center border border-white/25 text-2xl text-white transition hover:border-[#e2c785] hover:bg-[#e2c785] hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#e2c785] focus:ring-offset-2 focus:ring-offset-[#090705]"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/20 text-xl text-white transition hover:border-[#e2c785] hover:bg-[#e2c785] hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#e2c785] focus:ring-offset-2 focus:ring-offset-[#090705] sm:left-7"
            aria-label="Previous image"
          >
            ←
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/20 text-xl text-white transition hover:border-[#e2c785] hover:bg-[#e2c785] hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#e2c785] focus:ring-offset-2 focus:ring-offset-[#090705] sm:right-7"
            aria-label="Next image"
          >
            →
          </button>

          <div
            className="relative h-[82vh] w-full max-w-6xl overflow-hidden"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />

            <div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-7 pt-24 text-white sm:p-10 sm:pt-32"
              aria-hidden="true"
            />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10 sm:right-10">
              <p className="text-[8px] uppercase tracking-[0.35em] text-[#e2c785]">
                {images[selected].category}
              </p>

              <h3 className="ubuntu-serif mt-2 text-3xl md:text-4xl">
                {images[selected].title}
              </h3>

              <p className="mt-3 text-[8px] uppercase tracking-[0.25em] text-white/45">
                {String(selected + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}