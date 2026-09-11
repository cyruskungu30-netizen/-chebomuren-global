 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  title: string;
  category: string;
  className: string;
};

const gallery: GalleryImage[] = [
  {
    src: "/images/hero.jpg.webp",
    title: "Our Heritage",
    category: "Culture",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/culture-1.jpg.webp",
    title: "Celebrating Culture",
    category: "Heritage",
    className: "",
  },
  {
    src: "/images/culture-2.jpg.webp",
    title: "Generations",
    category: "Culture",
    className: "",
  },
  {
    src: "/images/heritage-1.jpg.webp",
    title: "Our Roots",
    category: "Heritage",
    className: "md:row-span-2",
  },
  {
    src: "/images/heritage-2.jpg.webp",
    title: "Identity & Legacy",
    category: "Heritage",
    className: "",
  },
  {
    src: "/images/community-1.jpg.webp",
    title: "Community",
    category: "Sisterhood",
    className: "",
  },
  {
    src: "/images/gala-1.jpg.webp",
    title: "The Gala",
    category: "Celebration",
    className: "",
  },
  {
    src: "/images/gala-2.jpg.webp",
    title: "Honouring Women",
    category: "Recognition",
    className: "",
  },
];

export default function PhotoGallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selected]);

  return (
    <>
      <section
        id="gallery"
        className="bg-[#f8f3eb] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#a77a32]">
                Our World
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
                Moments worth
                <br />
                <span className="text-[#6f3542]">remembering.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/50">
              Culture, connection, celebration and the women who make the
              Chebomuren Global story meaningful.
            </p>
          </div>

          <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:auto-rows-[240px]">
            {gallery.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelected(image)}
                className={`group relative overflow-hidden rounded-[1.75rem] text-left ${image.className}`}
                aria-label={`Open ${image.title} image`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e8bd72]">
                    {image.category}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">
                    {image.title}
                  </h3>
                </div>

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  ↗
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090507]/95 p-5 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white/20"
            aria-label="Close image viewer"
          >
            ✕
          </button>

          <div
            className="relative max-h-[90vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full overflow-hidden rounded-[2rem]">
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-5 text-center text-white">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#e8bd72]">
                {selected.category}
              </p>

              <h3 className="mt-2 font-serif text-3xl">
                {selected.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}