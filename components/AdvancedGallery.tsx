 "use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const current = images[active];

  const previousImage = () => {
    setActive((value) => (value - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setActive((value) => (value + 1) % images.length);
  };

  useEffect(() => {
    if (!lightbox) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setLightbox(false);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox, images.length]);

  useEffect(() => {
    if (active >= images.length && images.length > 0) {
      setActive(0);
    }
  }, [active, images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[112px_1fr]">
        <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible">
          {images.map((image, index) => {
            const isActive = active === index;

            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View image ${index + 1}: ${image.alt}`}
                aria-current={isActive ? "true" : undefined}
                className={`group relative h-24 w-20 shrink-0 overflow-hidden border bg-[#e9dfd0] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a98448] focus:ring-offset-2 lg:h-28 lg:w-[110px] ${
                  isActive
                    ? "border-[#a98448]"
                    : "border-transparent opacity-60 hover:border-[#a98448]/50 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="110px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {isActive && (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-[#c9a45d]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#e9dfd0] focus:outline-none focus:ring-2 focus:ring-[#a98448] focus:ring-offset-4"
            aria-label={`Open ${title} gallery. Current image ${active + 1} of ${images.length}`}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              priority={active === 0}
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover transition duration-1000 group-hover:scale-[1.025]"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70"
              aria-hidden="true"
            />

            <span className="absolute bottom-5 right-5 border border-white/50 bg-black/25 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition group-hover:border-[#dfc27c] group-hover:bg-black/40">
              View Full Image
            </span>
          </button>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#806b52]">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousImage}
                className="flex h-10 w-10 items-center justify-center border border-[#17110d]/15 text-lg text-[#17110d] transition hover:border-[#a98448] hover:bg-[#a98448] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a98448] focus:ring-offset-2"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="flex h-10 w-10 items-center justify-center border border-[#17110d]/15 text-lg text-[#17110d] transition hover:border-[#a98448] hover:bg-[#a98448] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a98448] focus:ring-offset-2"
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
          aria-labelledby={titleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setLightbox(false);
            }
          }}
        >
          <h2 id={titleId} className="sr-only">
            {title} image gallery
          </h2>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center border border-white/30 text-xl text-white transition hover:border-[#c8aa6b] hover:bg-[#c8aa6b] hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] focus:ring-offset-2 focus:ring-offset-[#090705]"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={previousImage}
            className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-xl text-white transition hover:border-[#c8aa6b] hover:bg-[#c8aa6b] hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] sm:left-7"
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="relative h-[78vh] w-full max-w-6xl">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-xl text-white transition hover:border-[#c8aa6b] hover:bg-[#c8aa6b] hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] sm:right-7"
            aria-label="Next image"
          >
            →
          </button>

          <div className="absolute bottom-5 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 text-center text-white sm:bottom-7">
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