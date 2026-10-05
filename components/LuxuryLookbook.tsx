 "use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type LookbookItem = {
  id: number;
  title: string;
  category: string;
  collection: string;
  image: string;
  description: string;
  material: string;
  meaning: string;
  location: string;
};

const looks: LookbookItem[] = [
  {
    id: 1,
    title: "The Couture Statement",
    category: "Couture Fashion",
    collection: "The Heritage Collection",
    image: "/images/hero-couture-yellow.jpeg",
    description:
      "A commanding couture silhouette inspired by African ceremony, femininity and the confidence of a woman who knows her story.",
    material: "Lace · Heritage Textile · Couture Structure",
    meaning: "Confidence, identity and presence.",
    location: "Ubuntu Couture House",
  },
  {
    id: 2,
    title: "The Modern Heritage",
    category: "Couture Fashion",
    collection: "The Heritage Collection",
    image: "/images/couture-brown-front.jpeg",
    description:
      "A sculpted silhouette where contemporary tailoring meets the visual language of East African heritage.",
    material: "Luxury Textile · Cow-Horn Detail · Hand Finishing",
    meaning: "Heritage transformed into modern elegance.",
    location: "East Africa",
  },
  {
    id: 3,
    title: "The Back Story",
    category: "Couture Fashion",
    collection: "The Heritage Collection",
    image: "/images/couture-brown-back.jpeg",
    description:
      "A dramatic rear silhouette revealing the craftsmanship and storytelling hidden beyond the first impression.",
    material: "Couture Textile · Heritage Trim · Hand Detail",
    meaning: "Every story has another side.",
    location: "Ubuntu Couture House",
  },
  {
    id: 4,
    title: "The Horn",
    category: "Contemporary Jewellery",
    collection: "Ubuntu Adornment",
    image: "/images/cow-horn-jewellery.jpeg",
    description:
      "Ethically sourced cow horn is transformed into sculptural jewellery that celebrates earth, resilience and transformation.",
    material: "Cow Horn · Gold-Tone Metal · Hand Finishing",
    meaning: "Resilience, earth and transformation.",
    location: "Kenya",
  },
  {
    id: 5,
    title: "The Beaded Story",
    category: "Maasai Beadwork",
    collection: "Living Heritage",
    image: "/images/maasai-jewellery-editorial.jpeg",
    description:
      "Contemporary jewellery inspired by the colour, geometry and community symbolism of East African beadwork.",
    material: "Glass Beads · Metal · Traditional Craft",
    meaning: "Community, artistry and living heritage.",
    location: "East Africa",
  },
  {
    id: 6,
    title: "The Rare Gem",
    category: "Rare Gems",
    collection: "Natural Rarity",
    image: "/images/rare-gem-neckpiece.jpeg",
    description:
      "A statement piece centred on the natural beauty and individuality of rare stones.",
    material: "Rare Gemstone · Metal · Hand Crafted Detail",
    meaning: "Rarity, strength and natural beauty.",
    location: "East Africa",
  },
  {
    id: 7,
    title: "The Royal Crown",
    category: "Royal Headpieces",
    collection: "African Majesty",
    image: "/images/royal-headpiece-gold.jpeg",
    description:
      "A ceremonial headpiece created to celebrate dignity, leadership and the presence of African women.",
    material: "Metal · Beads · Textile · Feather",
    meaning: "Dignity, leadership and majesty.",
    location: "Ubuntu Couture House",
  },
  {
    id: 8,
    title: "The Heritage Bloom",
    category: "Royal Headpieces",
    collection: "African Majesty",
    image: "/images/heritage-floral-headpiece.jpeg",
    description:
      "A softer expression of royal adornment combining florals, feathers and heritage-inspired detail.",
    material: "Textile · Feather · Beadwork · Floral Detail",
    meaning: "Grace, beauty and cultural memory.",
    location: "Ubuntu Couture House",
  },
  {
    id: 9,
    title: "The Blue Crown",
    category: "Royal Headpieces",
    collection: "African Majesty",
    image: "/images/headpiece-blue.jpeg",
    description:
      "A sculptural headpiece where traditional visual language meets contemporary millinery.",
    material: "Woven Fibre · Beads · Textile · Natural Elements",
    meaning: "Individuality and presence.",
    location: "East Africa",
  },
];

export default function LuxuryLookbook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [liked, setLiked] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dialogTitleId = useId();
  const lookbookTitleId = useId();

  const active = looks[activeIndex];
  const minimumSwipeDistance = 50;

  const clearTransitionTimer = useCallback(() => {
    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }
  }, []);

  const changeLook = useCallback(
    (nextIndex: number, duration = 250) => {
      if (transitioning || nextIndex === activeIndex) {
        return;
      }

      clearTransitionTimer();
      setTransitioning(true);

      transitionTimerRef.current = setTimeout(() => {
        setActiveIndex(nextIndex);
        setTransitioning(false);
        transitionTimerRef.current = null;
      }, duration);
    },
    [activeIndex, clearTransitionTimer, transitioning],
  );

  const next = useCallback(() => {
    const nextIndex = (activeIndex + 1) % looks.length;
    changeLook(nextIndex);
  }, [activeIndex, changeLook]);

  const previous = useCallback(() => {
    const previousIndex =
      activeIndex === 0 ? looks.length - 1 : activeIndex - 1;

    changeLook(previousIndex);
  }, [activeIndex, changeLook]);

  const selectLook = (index: number) => {
    changeLook(index, 200);
  };

  const toggleLike = () => {
    setLiked((current) =>
      current.includes(active.id)
        ? current.filter((id) => id !== active.id)
        : [...current, active.id],
    );
  };

  const shareLook = async () => {
    if (typeof window === "undefined") {
      return;
    }

    const shareData = {
      title: `${active.title} — Ubuntu Couture House`,
      text: `Discover ${active.title} from Ubuntu Couture House.`,
      url: window.location.href,
    };

    try {
      if (
        typeof navigator !== "undefined" &&
        typeof navigator.share === "function"
      ) {
        await navigator.share(shareData);
        return;
      }

      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function"
      ) {
        await navigator.clipboard.writeText(window.location.href);

        if (copyTimerRef.current) {
          clearTimeout(copyTimerRef.current);
        }

        setCopied(true);

        copyTimerRef.current = setTimeout(() => {
          setCopied(false);
          copyTimerRef.current = null;
        }, 2000);
      }
    } catch {
      // Sharing was cancelled or unavailable.
    }
  };

  useEffect(() => {
    return () => {
      clearTransitionTimer();

      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, [clearTransitionTimer]);

  useEffect(() => {
    if (!open) {
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
        setOpen(false);
        setZoomed(false);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
        return;
      }

      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoomed(true);
        return;
      }

      if (event.key === "-") {
        event.preventDefault();
        setZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, next, previous]);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0]?.clientX ?? null);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    setTouchEnd(event.targetTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) {
      return;
    }

    const distance = touchStart - touchEnd;

    setTouchStart(null);
    setTouchEnd(null);

    if (Math.abs(distance) < minimumSwipeDistance) {
      return;
    }

    if (distance > 0) {
      next();
    } else {
      previous();
    }
  };

  return (
    <section
      id="lookbook"
      aria-labelledby={lookbookTitleId}
      className="relative overflow-hidden bg-[#15100c] px-6 py-28 text-white lg:px-12 lg:py-40"
    >
      <div
        className="pointer-events-none absolute left-[-20%] top-[-20%] h-[700px] w-[700px] rounded-full border border-[#c9a45d]/5"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[-30%] right-[-15%] h-[800px] w-[800px] rounded-full border border-[#c9a45d]/5"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span
                className="h-px w-12 bg-[#c9a45d]"
                aria-hidden="true"
              />

              <p className="text-[8px] uppercase tracking-[0.5em] text-[#d9bb76]">
                The Ubuntu Lookbook
              </p>
            </div>

            <h2
              id={lookbookTitleId}
              className="ubuntu-serif mt-7 text-5xl leading-[0.9] sm:text-6xl md:text-8xl"
            >
              Wear the
              <br />
              <span className="italic text-[#d9bb76]">story.</span>
            </h2>
          </div>

          <p className="text-sm leading-8 text-white/40">
            Enter the visual world of Ubuntu Couture House. Explore couture,
            jewellery, rare gems and royal adornment — each piece created with
            heritage and meaning.
          </p>
        </div>

        <div
          className="mt-16 grid overflow-hidden border border-white/10 bg-[#1d1610] lg:grid-cols-[1.2fr_0.8fr]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative min-h-[580px] overflow-hidden bg-[#221a13] md:min-h-[700px]">
            <button
              type="button"
              onClick={() => setZoomed((current) => !current)}
              aria-label={zoomed ? "Zoom out image" : "Zoom image"}
              aria-pressed={zoomed}
              className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:border-[#d9bb76] hover:text-[#d9bb76] focus:outline-none focus:ring-2 focus:ring-[#d9bb76] focus:ring-offset-2 focus:ring-offset-[#15100c]"
            >
              {zoomed ? "−" : "+"}
            </button>

            <div
              className={[
                "absolute inset-0 transition-all duration-700",
                transitioning
                  ? "scale-[1.04] opacity-0"
                  : "scale-100 opacity-100",
              ].join(" ")}
            >
              <Image
                key={active.image}
                src={active.image}
                alt={active.title}
                fill
                priority={activeIndex === 0}
                className={[
                  "object-cover transition duration-[1400ms]",
                  zoomed
                    ? "scale-125 cursor-zoom-out"
                    : "scale-100 cursor-zoom-in",
                ].join(" ")}
                onClick={() => setZoomed((current) => !current)}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div className="absolute bottom-7 left-7">
              <p className="text-[8px] uppercase tracking-[0.4em] text-[#dfc17a]">
                {active.category}
              </p>

              <h3 className="ubuntu-serif mt-3 text-4xl md:text-5xl">
                {active.title}
              </h3>
            </div>

            <div className="absolute left-7 top-7 text-[8px] uppercase tracking-[0.35em] text-white/45">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-2 text-[#c9a45d]">/</span>
              {String(looks.length).padStart(2, "0")}
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
            <div>
              <div className="flex items-center justify-between gap-5">
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#c9a45d]">
                  {active.collection}
                </p>

                <span className="text-[8px] text-white/20">
                  UB / {String(active.id).padStart(3, "0")}
                </span>
              </div>

              <div
                className="my-8 h-px w-full bg-white/10"
                aria-hidden="true"
              />

              <p className="text-sm leading-8 text-white/50">
                {active.description}
              </p>

              <div className="mt-10 border-y border-white/10 py-6">
                <p className="text-[8px] uppercase tracking-[0.35em] text-white/25">
                  Material
                </p>

                <p className="mt-3 text-sm text-white/70">
                  {active.material}
                </p>
              </div>

              <div className="mt-8">
                <p className="text-[8px] uppercase tracking-[0.35em] text-white/25">
                  Meaning
                </p>

                <p className="ubuntu-serif mt-3 text-2xl italic text-[#d9bb76]">
                  {active.meaning}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#c9a45d]"
                  aria-hidden="true"
                />

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                  {active.location}
                </span>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous look"
                  disabled={transitioning}
                  className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/60 transition hover:border-[#c9a45d] hover:text-[#c9a45d] disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#17110d]"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next look"
                  disabled={transitioning}
                  className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/60 transition hover:border-[#c9a45d] hover:text-[#c9a45d] disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#17110d]"
                >
                  →
                </button>

                <button
                  type="button"
                  onClick={toggleLike}
                  aria-label={
                    liked.includes(active.id)
                      ? `Remove ${active.title} from wishlist`
                      : `Add ${active.title} to wishlist`
                  }
                  aria-pressed={liked.includes(active.id)}
                  className={[
                    "ml-auto flex h-12 min-w-12 items-center justify-center border px-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#17110d]",
                    liked.includes(active.id)
                      ? "border-[#c9a45d] text-[#d9bb76]"
                      : "border-white/15 text-white/50 hover:border-[#c9a45d]",
                  ].join(" ")}
                >
                  {liked.includes(active.id) ? "♥" : "♡"}
                </button>

                <button
                  type="button"
                  onClick={shareLook}
                  className="flex h-12 min-w-12 items-center justify-center border border-white/15 px-4 text-[9px] uppercase tracking-[0.2em] text-white/50 transition hover:border-[#c9a45d] hover:text-[#c9a45d] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#17110d]"
                >
                  {copied ? "Copied" : "Share"}
                </button>
              </div>

              <Link
                href="/contact"
                className="mt-3 flex min-h-[52px] items-center justify-center bg-[#c9a45d] px-6 text-[8px] uppercase tracking-[0.35em] text-[#17110d] transition hover:bg-[#dfc27c] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#17110d]"
              >
                Private Enquiry
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-6 flex gap-3 overflow-x-auto pb-3"
          role="tablist"
          aria-label="Lookbook selections"
        >
          {looks.map((look, index) => {
            const selected = activeIndex === index;

            return (
              <button
                key={look.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`View ${look.title}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectLook(index)}
                className={[
                  "group relative h-24 min-w-20 overflow-hidden border transition duration-500 focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#15100c] md:h-28 md:min-w-24",
                  selected
                    ? "border-[#c9a45d]"
                    : "border-white/10 opacity-50 hover:opacity-100",
                ].join(" ")}
              >
                <Image
                  src={look.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="100px"
                />

                <div
                  className="absolute inset-0 bg-black/20"
                  aria-hidden="true"
                />

                <span className="absolute bottom-2 left-2 text-[7px] tracking-[0.2em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            Swipe on mobile · Use ← → on desktop
          </p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-[8px] uppercase tracking-[0.35em] text-[#c9a45d] transition hover:text-[#dfc27c] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#15100c]"
          >
            Open Full Lookbook →
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[300] bg-[#0e0b08]"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-5 py-5 md:px-8">
            <div>
              <p
                id={dialogTitleId}
                className="text-[8px] uppercase tracking-[0.45em] text-[#c9a45d]"
              >
                Ubuntu Couture House
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-white/25">
                Full Lookbook
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                setOpen(false);
                setZoomed(false);
              }}
              aria-label="Close full lookbook"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-xl text-white transition hover:border-[#c9a45d] hover:text-[#c9a45d] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#0e0b08]"
            >
              ×
            </button>
          </div>

          <div className="flex h-full flex-col lg:flex-row">
            <div className="relative flex min-h-[58vh] flex-1 items-center justify-center overflow-hidden bg-black lg:min-h-full">
              <Image
                key={active.image}
                src={active.image}
                alt={active.title}
                fill
                priority
                className={[
                  "object-contain transition duration-1000",
                  zoomed ? "scale-125" : "scale-100",
                ].join(" ")}
                sizes="(max-width: 1024px) 100vw, 75vw"
              />

              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,.55)_100%)]"
                aria-hidden="true"
              />

              <button
                type="button"
                onClick={previous}
                aria-label="Previous look"
                disabled={transitioning}
                className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/20 text-xl text-white/70 backdrop-blur transition hover:border-[#c9a45d] hover:text-[#c9a45d] disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-black md:left-8"
              >
                ←
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next look"
                disabled={transitioning}
                className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/20 text-xl text-white/70 backdrop-blur transition hover:border-[#c9a45d] hover:text-[#c9a45d] disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-black md:right-8"
              >
                →
              </button>

              <button
                type="button"
                onClick={() => setZoomed((current) => !current)}
                aria-label={zoomed ? "Zoom out" : "Zoom in"}
                aria-pressed={zoomed}
                className="absolute bottom-5 left-1/2 z-20 flex h-11 -translate-x-1/2 items-center justify-center border border-white/20 bg-black/30 px-5 text-[8px] uppercase tracking-[0.25em] text-white/70 backdrop-blur transition hover:border-[#c9a45d] hover:text-[#c9a45d] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-black"
              >
                {zoomed ? "Zoom Out" : "Zoom In"}
              </button>
            </div>

            <aside className="relative flex w-full flex-col justify-between overflow-y-auto bg-[#17110d] p-7 text-white md:p-10 lg:w-[420px] lg:p-12">
              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#c9a45d]">
                  {active.category}
                </p>

                <h2 className="ubuntu-serif mt-5 text-4xl leading-[0.95] md:text-5xl">
                  {active.title}
                </h2>

                <div
                  className="my-7 h-px w-14 bg-[#c9a45d]"
                  aria-hidden="true"
                />

                <p className="text-sm leading-8 text-white/45">
                  {active.description}
                </p>

                <div className="mt-8 space-y-5">
                  <div>
                    <p className="text-[7px] uppercase tracking-[0.35em] text-white/20">
                      Collection
                    </p>

                    <p className="mt-2 text-sm text-white/65">
                      {active.collection}
                    </p>
                  </div>

                  <div>
                    <p className="text-[7px] uppercase tracking-[0.35em] text-white/20">
                      Materials
                    </p>

                    <p className="mt-2 text-sm text-white/65">
                      {active.material}
                    </p>
                  </div>

                  <div>
                    <p className="text-[7px] uppercase tracking-[0.35em] text-white/20">
                      Meaning
                    </p>

                    <p className="ubuntu-serif mt-2 text-xl italic text-[#d9bb76]">
                      {active.meaning}
                    </p>
                  </div>

                  <div>
                    <p className="text-[7px] uppercase tracking-[0.35em] text-white/20">
                      Location
                    </p>

                    <p className="mt-2 text-sm text-white/65">
                      {active.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    Look
                  </span>

                  <span className="text-[8px] text-[#c9a45d]">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(looks.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="mb-5 h-px bg-white/10">
                  <div
                    className="h-full bg-[#c9a45d] transition-all duration-700"
                    style={{
                      width: `${((activeIndex + 1) / looks.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={toggleLike}
                    aria-pressed={liked.includes(active.id)}
                    className="border border-white/10 px-4 py-4 text-[8px] uppercase tracking-[0.25em] text-white/50 transition hover:border-[#c9a45d] hover:text-[#c9a45d] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#17110d]"
                  >
                    {liked.includes(active.id)
                      ? "♥ Saved"
                      : "♡ Wishlist"}
                  </button>

                  <button
                    type="button"
                    onClick={shareLook}
                    className="border border-white/10 px-4 py-4 text-[8px] uppercase tracking-[0.25em] text-white/50 transition hover:border-[#c9a45d] hover:text-[#c9a45d] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#17110d]"
                  >
                    {copied ? "Copied" : "Share"}
                  </button>
                </div>

                <Link
                  href="/contact"
                  onClick={() => {
                    setOpen(false);
                    setZoomed(false);
                  }}
                  className="mt-2 flex min-h-[52px] items-center justify-center bg-[#c9a45d] px-6 text-[8px] uppercase tracking-[0.35em] text-[#17110d] transition hover:bg-[#dfc27c] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#17110d]"
                >
                  Enquire Privately
                </Link>
              </div>
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}