"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type AdvancedGalleryProps = {
  images: GalleryImage[];
  title: string;
};

export default function AdvancedGallery({
  images,
  title,
}: AdvancedGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const current = images[active];

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(false);
      }

      if (event.key === "ArrowRight") {
        setActive((value) => (value + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActive(
          (value) => (value - 1 + images.length) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox, images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[110px_1fr]">
        <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View image ${index + 1}`}
              aria-current={active === index}
              className={`relative h-24 w-20 shrink-0 overflow-hidden border transition-all duration-300 lg:h-28 lg:w-[110px] ${
                active === index
                  ? "border-[#a98448]"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="110px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#e9dfd0]"
            aria-label={`Open ${title} gallery`}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              priority={active === 0}
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover transition duration-700 group-hover:scale-[1.035]"
            />

            <span className="absolute bottom-5 right-5 border border-white/60 bg-black/20 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              View full image
            </span>
          </button>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#806b52]">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setActive(
                    (value) =>
                      (value - 1 + images.length) % images.length
                  )
                }
                className="flex h-10 w-10 items-center justify-center border border-[#17110d]/15 text-lg transition hover:border-[#a98448] hover:bg-[#a98448] hover:text-white"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() =>
                  setActive(
                    (value) => (value + 1) % images.length
                  )
                }
                className="flex h-10 w-10 items-center justify-center border border-[#17110d]/15 text-lg transition hover:border-[#a98448] hover:bg-[#a98448] hover:text-white"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#090705]/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setLightbox(false);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/30 text-xl text-white transition hover:border-[#c8aa6b] hover:bg-[#c8aa6b] hover:text-[#17110d]"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={() =>
              setActive(
                (value) =>
                  (value - 1 + images.length) % images.length
              )
            }
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-xl text-white transition hover:border-[#c8aa6b] hover:bg-[#c8aa6b] hover:text-[#17110d] sm:left-7"
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="relative h-[82vh] w-full max-w-6xl">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={() =>
              setActive(
                (value) => (value + 1) % images.length
              )
            }
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-xl text-white transition hover:border-[#c8aa6b] hover:bg-[#c8aa6b] hover:text-[#17110d] sm:right-7"
            aria-label="Next image"
          >
            →
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="font-[var(--font-ubuntu-serif)] text-xl">
              {title}
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/50">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}