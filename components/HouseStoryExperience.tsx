"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Chapter = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  location: string;
  image: string;
  quote: string;
  text: string;
};

const chapters: Chapter[] = [
  {
    id: "kenya",
    number: "01",
    eyebrow: "THE ROOTS",
    title: "Where the story began",
    location: "Kenya",
    image: "/images/elders-path-lookbook.jpeg",
    quote: "Every legacy begins somewhere.",
    text: "Born in a small village in Kenya, her life was shaped by community, tradition, resilience, and a belief that circumstances do not have to define the limits of a dream.",
  },
  {
    id: "australia",
    number: "02",
    eyebrow: "THE JOURNEY",
    title: "A life rebuilt with courage",
    location: "Australia",
    image: "/images/ubuntu-brand-portrait.jpeg",
    quote: "The journey changed. The courage remained.",
    text: "Her move to Australia opened a new chapter of leadership and community service, creating opportunities for others while carrying the values and heritage of her beginnings.",
  },
  {
    id: "recovery",
    number: "03",
    eyebrow: "RESILIENCE",
    title: "The chapter that changed everything",
    location: "Australia",
    image: "/images/ubuntu-global-lookbook.jpeg",
    quote: "Sometimes strength is simply choosing to begin again.",
    text: "A devastating stroke changed everything. Recovery became a powerful demonstration of determination as she worked to reclaim independence step by step.",
  },
  {
    id: "advocacy",
    number: "04",
    eyebrow: "THE MISSION",
    title: "From survival to service",
    location: "International",
    image: "/images/maasai-jewellery-editorial.jpeg",
    quote: "A personal story can become a source of hope for others.",
    text: "Her experience became a platform for advocacy for women, girls, families, migrants, and people with disability, extending her story far beyond herself.",
  },
  {
    id: "daughter",
    number: "05",
    eyebrow: "THE NEXT GENERATION",
    title: "A daughter carries the story forward",
    location: "Atlanta → South Australia",
    image: "/images/ubuntu-brand-board.jpeg",
    quote: "Her mother's strength became part of her own language.",
    text: "Born in Atlanta and raised in South Australia, her daughter grew up carrying her mother's strength alongside a deep connection to African heritage.",
  },
  {
    id: "world",
    number: "06",
    eyebrow: "THE WORLD",
    title: "Sport becomes storytelling",
    location: "Global",
    image: "/images/hero-couture-yellow.jpeg",
    quote: "Every platform can tell a story.",
    text: "Through tennis, journalism, Formula 1, FIFA, professional tennis, and youth advocacy, the daughter developed a global voice and a platform for meaningful storytelling.",
  },
  {
    id: "house",
    number: "07",
    eyebrow: "THE HOUSE",
    title: "Ubuntu Couture House",
    location: "East Africa → The World",
    image: "/images/royal-headpiece-gold.jpeg",
    quote: "I am because we are.",
    text: "Their journeys now converge through Ubuntu Couture House—a house where African heritage, contemporary luxury, identity, courage, and legacy become wearable.",
  },
];

export default function HouseStoryExperience() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const touchStart = useRef<number | null>(null);
  const progressTimer = useRef<number | null>(null);

  const chapter = chapters[active];

  const chapterPercent = useMemo(
    () => ((active + 1) / chapters.length) * 100,
    [active],
  );

  const goTo = useCallback(
    (index: number, moveDirection: "next" | "previous" = "next") => {
      setDirection(moveDirection);

      if (index < 0) {
        setActive(chapters.length - 1);
      } else if (index >= chapters.length) {
        setActive(0);
      } else {
        setActive(index);
      }

      setProgress(0);
    },
    [],
  );

  const next = useCallback(() => {
    goTo(active + 1, "next");
  }, [active, goTo]);

  const previous = useCallback(() => {
    goTo(active - 1, "previous");
  }, [active, goTo]);

  useEffect(() => {
    if (!playing || expanded) return;

    setProgress(0);

    const started = Date.now();
    const duration = 9000;

    const tick = () => {
      const elapsed = Date.now() - started;
      const value = Math.min((elapsed / duration) * 100, 100);

      setProgress(value);

      if (value >= 100) {
        next();
      } else {
        progressTimer.current = window.requestAnimationFrame(tick);
      }
    };

    progressTimer.current = window.requestAnimationFrame(tick);

    return () => {
      if (progressTimer.current !== null) {
        window.cancelAnimationFrame(progressTimer.current);
      }
    };
  }, [active, expanded, next, playing]);

  useEffect(() => {
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();

      if (event.key === " ") {
        event.preventDefault();
        setPlaying((value) => !value);
      }

      if (event.key === "Escape") {
        setExpanded(false);
      }
    };

    window.addEventListener("keydown", keyboard);

    return () => window.removeEventListener("keydown", keyboard);
  }, [next, previous]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStart.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStart.current === null) return;

    const end = event.changedTouches[0]?.clientX ?? touchStart.current;
    const distance = touchStart.current - end;

    if (Math.abs(distance) > 60) {
      if (distance > 0) {
        next();
      } else {
        previous();
      }
    }

    touchStart.current = null;
  };

  return (
    <>
      <section
        className="relative overflow-hidden bg-[#120e0b] text-white"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#d5b36a]" />

                <span className="text-[9px] uppercase tracking-[0.5em] text-[#d5b36a]">
                  The House Story
                </span>
              </div>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                Seven chapters.
                <br />
                <span className="italic text-[#d5b36a]">
                  One legacy.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previous}
                className="flex h-12 w-12 items-center justify-center border border-white/10 text-white/50 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                className="h-12 border border-white/10 px-5 text-[8px] uppercase tracking-[0.3em] text-white/50 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
              >
                {playing ? "Pause" : "Play"}
              </button>

              <button
                type="button"
                onClick={next}
                className="flex h-12 w-12 items-center justify-center border border-white/10 text-white/50 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
              >
                →
              </button>
            </div>
          </div>

          <div className="mb-10 hidden lg:block">
            <div className="relative h-px bg-white/10">
              <div
                className="absolute left-0 top-0 h-px bg-[#d5b36a] transition-all duration-500"
                style={{ width: `${chapterPercent}%` }}
              />
            </div>

            <div className="mt-6 grid grid-cols-7 gap-4">
              {chapters.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => goTo(index)}
                  className="group text-left"
                >
                  <span
                    className={`mb-4 block h-2.5 w-2.5 rounded-full border transition ${
                      active === index
                        ? "border-[#d5b36a] bg-[#d5b36a]"
                        : "border-white/25 group-hover:border-[#d5b36a]"
                    }`}
                  />

                  <span
                    className={`block text-[8px] uppercase tracking-[0.22em] ${
                      active === index
                        ? "text-[#d5b36a]"
                        : "text-white/30 group-hover:text-white/60"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`mt-2 block text-[9px] ${
                      active === index
                        ? "text-white/80"
                        : "text-white/25 group-hover:text-white/50"
                    }`}
                  >
                    {item.eyebrow}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 overflow-x-auto lg:hidden">
            <div className="flex min-w-max gap-2">
              {chapters.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => goTo(index)}
                  className={`border px-4 py-3 text-[8px] uppercase tracking-[0.25em] ${
                    active === index
                      ? "border-[#d5b36a] bg-[#d5b36a] text-[#120e0b]"
                      : "border-white/10 text-white/35"
                  }`}
                >
                  {item.number} · {item.eyebrow}
                </button>
              ))}
            </div>
          </div>

          <div className="grid overflow-hidden border border-white/10 bg-[#1c1612] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[620px] overflow-hidden sm:min-h-[720px] lg:min-h-[800px]">
              {chapters.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    active === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                  <div className="absolute left-6 right-6 top-6 flex justify-between sm:left-10 sm:right-10 sm:top-10">
                    <span className="border border-white/15 bg-black/10 px-4 py-2 text-[8px] uppercase tracking-[0.3em] backdrop-blur">
                      {item.location}
                    </span>

                    <span className="ubuntu-serif text-6xl text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                    <p className="text-[8px] uppercase tracking-[0.4em] text-[#d5b36a]">
                      {item.eyebrow}
                    </p>

                    <p className="ubuntu-serif mt-4 max-w-3xl text-3xl leading-none sm:text-5xl lg:text-6xl">
                      “{item.quote}”
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col justify-between p-7 sm:p-10 lg:p-14 ${
                direction === "next"
                  ? "animate-[fadeIn_0.8s_ease]"
                  : "animate-[fadeIn_0.8s_ease]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-[#d5b36a]">
                    {chapter.eyebrow}
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    {chapter.number} / 07
                  </span>
                </div>

                <h3 className="ubuntu-serif mt-8 text-4xl leading-[0.92] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  {chapter.title}
                </h3>

                <div className="mt-8 h-px w-16 bg-[#d5b36a]" />

                <p className="mt-8 text-sm leading-8 text-white/55">
                  {chapter.text}
                </p>
              </div>

              <div className="mt-14">
                <div className="mb-3 flex justify-between">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    Chapter progress
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#d5b36a]">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="h-px bg-white/10">
                  <div
                    className="h-px bg-[#d5b36a] transition-none"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    className="border border-white/10 px-5 py-4 text-[8px] uppercase tracking-[0.3em] text-white/45 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
                  >
                    ← Previous
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="border border-[#d5b36a] px-5 py-4 text-[8px] uppercase tracking-[0.3em] text-[#d5b36a] transition hover:bg-[#d5b36a] hover:text-[#120e0b]"
                  >
                    Next Chapter →
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="mt-3 w-full border border-white/10 py-4 text-[8px] uppercase tracking-[0.35em] text-white/30 transition hover:border-white/25 hover:text-white/70"
                >
                  Open Cinematic Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {expanded && (
        <div className="fixed inset-0 z-[999] bg-black text-white">
          <div className="absolute inset-0">
            <Image
              src={chapter.image}
              alt={chapter.title}
              fill
              sizes="100vw"
              className="object-cover opacity-55"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/40" />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
              <div>
                <p className="text-[9px] uppercase tracking-[0.45em] text-[#d5b36a]">
                  Ubuntu Couture House
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Cinematic House Story
                </p>
              </div>

              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="flex h-12 w-12 items-center justify-center border border-white/15 text-xl text-white/50 hover:border-[#d5b36a] hover:text-[#d5b36a]"
              >
                ×
              </button>
            </div>

            <div className="flex flex-1 items-end px-6 pb-12 sm:px-10 lg:px-14 lg:pb-16">
              <div className="mx-auto w-full max-w-7xl">
                <p className="text-[9px] uppercase tracking-[0.45em] text-[#d5b36a]">
                  {chapter.eyebrow}
                </p>

                <h2 className="ubuntu-serif mt-5 max-w-6xl text-5xl leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[8rem]">
                  {chapter.title}
                </h2>

                <p className="ubuntu-serif mt-7 max-w-5xl text-2xl italic leading-tight text-white/65 sm:text-4xl lg:text-5xl">
                  “{chapter.quote}”
                </p>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50">
                  {chapter.text}
                </p>

                <div className="mt-9 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    className="border border-white/15 px-6 py-4 text-[8px] uppercase tracking-[0.3em] text-white/50 hover:border-[#d5b36a] hover:text-[#d5b36a]"
                  >
                    ← Previous
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlaying((value) => !value)}
                    className="border border-white/15 px-6 py-4 text-[8px] uppercase tracking-[0.3em] text-white/50 hover:border-[#d5b36a] hover:text-[#d5b36a]"
                  >
                    {playing ? "Pause" : "Play"}
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="border border-[#d5b36a] px-6 py-4 text-[8px] uppercase tracking-[0.3em] text-[#d5b36a] hover:bg-[#d5b36a] hover:text-black"
                  >
                    Next Chapter →
                  </button>
                </div>
              </div>
            </div>

            <div className="px-6 pb-5 sm:px-10 lg:px-14">
              <div className="mx-auto max-w-7xl">
                <div className="mb-3 flex justify-between">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    {chapter.number} / 07
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#d5b36a]">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="h-px bg-white/10">
                  <div
                    className="h-px bg-[#d5b36a]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}