  // app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type StoryChapter = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  secondaryImage: string;
  quote: string;
  paragraphs: string[];
  tags: string[];
};

const chapters: StoryChapter[] = [
  {
    id: "origins",
    number: "01",
    eyebrow: "THE BEGINNING",
    title: "A Mother's Journey of Courage",
    subtitle: "A story that began in a small village in Kenya.",
    location: "Kenya",
    image: "/images/ubuntu-brand-portrait.jpeg",
    secondaryImage: "/images/elders-path-lookbook.jpeg",
    quote:
      "Courage begins when circumstances tell you to stop—and you choose to continue.",
    paragraphs: [
      "Born in a small village in Kenya, a life shaped by community, tradition, resilience, and determination became the beginning of a remarkable journey.",
      "She was raised with a deep connection to community and tradition, while carrying dreams that reached beyond the circumstances around her.",
      "Her journey eventually took her to Australia, where she rose through leadership and community service while creating opportunities for others.",
    ],
    tags: ["Kenya", "Heritage", "Community", "Courage"],
  },
  {
    id: "recovery",
    number: "02",
    eyebrow: "THE TURNING POINT",
    title: "When Survival Became Strength",
    subtitle: "A devastating stroke changed everything.",
    location: "Australia",
    image: "/images/elders-path-lookbook.jpeg",
    secondaryImage: "/images/ubuntu-brand-portrait.jpeg",
    quote: "What was meant to become an ending became another beginning.",
    paragraphs: [
      "A devastating stroke changed everything. Recovery demanded extraordinary courage and a determination to reclaim independence step by step.",
      "When many believed she might never walk, speak, read, or write again, she faced recovery with extraordinary courage.",
      "Step by step, she reclaimed independence and transformed survival into advocacy, service, and hope.",
    ],
    tags: ["Recovery", "Resilience", "Hope", "Strength"],
  },
  {
    id: "advocacy",
    number: "03",
    eyebrow: "THE MISSION",
    title: "A Life Turned Toward Others",
    subtitle: "Personal recovery became a wider mission.",
    location: "International",
    image: "/images/ubuntu-global-lookbook.jpeg",
    secondaryImage: "/images/maasai-jewellery-editorial.jpeg",
    quote:
      "Strength becomes meaningful when it creates room for someone else to rise.",
    paragraphs: [
      "Her journey became larger than her own recovery. She became an advocate for women, girls, families, migrants, and people with disability.",
      "Her work received international recognition across London, New York, Singapore, and Australia.",
      "She received the highest honour awarded to an Australian civilian, bestowed by King Charles.",
      "Her advocacy also included protecting girls from female genital mutilation, with advocacy helping save more than 5,000 girls.",
    ],
    tags: ["Women", "Girls", "Advocacy", "Leadership"],
  },
  {
    id: "daughter",
    number: "04",
    eyebrow: "THE NEXT CHAPTER",
    title: "A Daughter's Journey Through Sport",
    subtitle: "From Atlanta to South Australia.",
    location: "Atlanta → South Australia",
    image: "/images/ubuntu-brand-board.jpeg",
    secondaryImage: "/images/hero-couture-yellow.jpeg",
    quote: "Her mother's strength became part of her own language.",
    paragraphs: [
      "Born in Atlanta, Georgia, and raised in South Australia, the daughter grew up carrying the strength of her mother and the richness of her African heritage.",
      "Her education in Miami and her experience as an accomplished tennis player developed discipline, focus, confidence, and an international outlook.",
      "Sport became more than competition. It became a doorway into storytelling and a platform through which she could connect people, cultures, and ideas.",
    ],
    tags: ["Atlanta", "Miami", "Tennis", "Heritage"],
  },
  {
    id: "storytelling",
    number: "05",
    eyebrow: "THE VOICE",
    title: "From The Court To The World",
    subtitle: "Sport became a platform for storytelling.",
    location: "Global",
    image: "/images/hero-couture-yellow.jpeg",
    secondaryImage: "/images/couture-brown-front.jpeg",
    quote: "Every platform can become a place to tell a better story.",
    paragraphs: [
      "Her journey expanded into sports journalism, covering Formula 1, FIFA, and professional tennis.",
      "Through international sport, she discovered the power of storytelling—the ability to bring people into experiences they might never otherwise encounter.",
      "Her work also developed into international youth advocacy, speaking against female genital mutilation and advocating for the rights, safety, and future of girls.",
    ],
    tags: ["Formula 1", "FIFA", "Tennis", "Journalism"],
  },
  {
    id: "ubuntu",
    number: "06",
    eyebrow: "THE HOUSE",
    title: "A Shared Passion Becomes A House Of Heritage",
    subtitle: "Two journeys converge through Ubuntu Couture House.",
    location: "East Africa → The World",
    image: "/images/maasai-jewellery-editorial.jpeg",
    secondaryImage: "/images/royal-headpiece-gold.jpeg",
    quote: "I am because we are.",
    paragraphs: [
      "Their journeys now come together through Ubuntu Couture House.",
      "The house brings together couture fashion, contemporary fashion jewellery, rare gems from Kenya, Tanzania, Ethiopia, Rwanda, and Burundi, ethically sourced cow horn jewellery, reimagined Maasai beadwork, and royal headpieces inspired by dignity, leadership, and African majesty.",
      "Every creation honours East African heritage while expressing modern elegance, allowing heritage to become wearable and personal history to become art.",
    ],
    tags: ["Ubuntu", "East Africa", "Couture", "Legacy"],
  },
];

const milestones = [
  {
    number: "01",
    title: "A Village In Kenya",
    description:
      "The story begins with community, tradition, resilience, and dreams that reached beyond circumstances.",
  },
  {
    number: "02",
    title: "A New Chapter In Australia",
    description:
      "Leadership and community service created new opportunities while carrying heritage across continents.",
  },
  {
    number: "03",
    title: "The Stroke",
    description:
      "A devastating moment became a profound chapter of recovery, determination, and courage.",
  },
  {
    number: "04",
    title: "Advocacy",
    description:
      "Recovery became service to women, girls, families, migrants, and people with disability.",
  },
  {
    number: "05",
    title: "A Daughter Is Born",
    description:
      "Atlanta became the beginning of another journey carrying the strength and heritage of the generation before.",
  },
  {
    number: "06",
    title: "Sport & Storytelling",
    description:
      "Tennis, journalism, international sport, and youth advocacy created a new platform for the story.",
  },
  {
    number: "07",
    title: "Ubuntu Couture House",
    description:
      "Mother and daughter bring their journeys together through heritage, fashion, jewellery, and purpose.",
  },
];

const values = [
  {
    number: "01",
    title: "Courage",
    statement: "We honour the courage required to begin again.",
  },
  {
    number: "02",
    title: "Heritage",
    statement: "We carry heritage forward rather than leaving it behind.",
  },
  {
    number: "03",
    title: "Identity",
    statement: "We create pieces that allow women to express who they are.",
  },
  {
    number: "04",
    title: "Community",
    statement: "We believe individual beauty becomes greater through connection.",
  },
  {
    number: "05",
    title: "Purpose",
    statement: "We believe luxury can carry meaning beyond appearance.",
  },
];

const creations = [
  {
    title: "Couture Fashion",
    description:
      "Modern silhouettes with heritage soul—crafted for confidence and identity.",
    image: "/images/hero-couture-yellow.jpeg",
  },
  {
    title: "Contemporary Jewellery",
    description:
      "Sculptural statement designs transforming natural materials into luxury.",
    image: "/images/cow-horn-jewellery.jpeg",
  },
  {
    title: "Rare Gems",
    description:
      "Natural beauty selected with intention—symbols of resilience and strength.",
    image: "/images/rare-gem-neckpiece.jpeg",
  },
  {
    title: "Reimagined Maasai Beadwork",
    description:
      "Living heritage reinterpreted through contemporary design.",
    image: "/images/maasai-jewellery-editorial.jpeg",
  },
  {
    title: "Royal Headpieces",
    description:
      "Designed to celebrate presence, dignity, and leadership.",
    image: "/images/royal-headpiece-gold.jpeg",
  },
];

const recognition = [
  "London",
  "New York",
  "Singapore",
  "Australia",
];

export default function AboutPage() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isStoryMode, setIsStoryMode] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [activeCreation, setActiveCreation] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const chapter = chapters[activeChapter];

  const storyProgress = useMemo(
    () => ((activeChapter + 1) / chapters.length) * 100,
    [activeChapter],
  );

  const nextChapter = useCallback(() => {
    setActiveChapter((current) =>
      current >= chapters.length - 1 ? 0 : current + 1,
    );
  }, []);

  const previousChapter = useCallback(() => {
    setActiveChapter((current) =>
      current <= 0 ? chapters.length - 1 : current - 1,
    );
  }, []);

  const selectChapter = (index: number) => {
    setActiveChapter(index);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying || isStoryMode) return;

    const timer = window.setInterval(() => {
      setActiveChapter((current) =>
        current >= chapters.length - 1 ? 0 : current + 1,
      );
    }, 9000);

    return () => window.clearInterval(timer);
  }, [isPlaying, isStoryMode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextChapter();
      if (event.key === "ArrowLeft") previousChapter();

      if (event.key === "Escape") {
        setIsStoryMode(false);
      }

      if (event.key === " ") {
        if (isStoryMode) {
          event.preventDefault();
          setIsPlaying((current) => !current);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isStoryMode, nextChapter, previousChapter]);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStart(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStart === null) return;

    const end = event.changedTouches[0]?.clientX ?? touchStart;
    const distance = touchStart - end;

    if (Math.abs(distance) > 60) {
      if (distance > 0) {
        nextChapter();
      } else {
        previousChapter();
      }
    }

    setTouchStart(null);
  };

  return (
    <>
      <main className="min-h-screen bg-[#f4efe7] text-[#191613]">
        {/* =========================================================
            CINEMATIC HERO
        ========================================================== */}
        <section className="relative min-h-[100svh] overflow-hidden bg-[#120e0b] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/ubuntu-brand-portrait.jpeg"
              alt="Ubuntu Couture House"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-60"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,7,5,0.94)_0%,rgba(10,7,5,0.7)_42%,rgba(10,7,5,0.12)_100%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,7,5,0.9)_0%,transparent_45%,rgba(10,7,5,0.3)_100%)]" />
          </div>

          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-[15%] top-[25%] h-px w-[30vw] bg-gradient-to-r from-transparent via-[#d5b36a] to-transparent" />
            <div className="absolute right-[10%] top-[60%] h-px w-[20vw] bg-gradient-to-r from-transparent via-[#d5b36a] to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] items-end px-6 pb-20 pt-40 sm:px-10 lg:px-16 lg:pb-24">
            <div className="max-w-6xl">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#d5b36a]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.5em] text-[#d5b36a]">
                  The House / Our Story
                </span>
              </div>

              <h1 className="ubuntu-serif text-[3.6rem] leading-[0.86] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9.5rem]">
                A story of
                <br />
                <span className="italic text-[#d5b36a]">courage.</span>
              </h1>

              <div className="mt-9 grid max-w-4xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Ubuntu Couture House is a mother-and-daughter vision rooted
                  in courage, heritage, and purpose—built from lived
                  experience, international recognition, and a shared
                  commitment to empowerment.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("story-engine")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="luxury-button w-fit"
                >
                  Enter The Story
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-5 lg:flex">
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/30">
              Scroll
            </span>
            <span className="h-16 w-px bg-gradient-to-b from-[#d5b36a] to-transparent" />
          </div>
        </section>

        {/* =========================================================
            INTRODUCTION
        ========================================================== */}
        <section className="border-b border-black/10 bg-[#f4efe7] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#9b7637]">
                Ubuntu Couture House
              </p>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.96] tracking-[-0.04em] sm:text-7xl">
                Two journeys.
                <br />
                <span className="italic text-[#9b7637]">
                  One enduring legacy.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/60 sm:text-xl sm:leading-9">
                Ubuntu Couture House is a mother-and-daughter vision rooted in
                courage, heritage, and purpose—built from lived experience,
                international recognition, and a shared commitment to
                empowerment.
              </p>

              <div className="mt-10 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-4">
                {[
                  ["01", "Mother"],
                  ["02", "Daughter"],
                  ["03", "Heritage"],
                  ["04", "Legacy"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="border-b border-r border-black/10 p-5 sm:p-6"
                  >
                    <span className="text-[8px] tracking-[0.25em] text-[#9b7637]">
                      {number}
                    </span>

                    <p className="ubuntu-serif mt-3 text-xl">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STORY ENGINE
        ========================================================== */}
        <section
          id="story-engine"
          className="relative overflow-hidden bg-[#17120f] text-white"
        >
          <div className="mx-auto max-w-[1550px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d5b36a]" />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#d5b36a]">
                    The Journey
                  </p>
                </div>

                <h2 className="ubuntu-serif mt-5 text-5xl leading-none tracking-[-0.04em] sm:text-7xl">
                  Chapter by chapter.
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previousChapter}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
                  aria-label="Previous chapter"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() => setIsPlaying((current) => !current)}
                  className="border border-white/10 px-5 py-3 text-[8px] uppercase tracking-[0.35em] text-white/55 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
                >
                  {isPlaying ? "Pause Story" : "Play Story"}
                </button>

                <button
                  type="button"
                  onClick={nextChapter}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
                  aria-label="Next chapter"
                >
                  →
                </button>
              </div>
            </div>

            {/* Desktop timeline */}
            <div className="relative mb-12 hidden lg:block">
              <div className="absolute left-0 right-0 top-[9px] h-px bg-white/10" />

              <div
                className="absolute left-0 top-[9px] h-px bg-[#d5b36a] transition-all duration-700"
                style={{ width: `${storyProgress}%` }}
              />

              <div className="relative grid grid-cols-6 gap-5">
                {chapters.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectChapter(index)}
                    className="group text-left"
                  >
                    <span
                      className={`relative z-10 mb-5 flex h-[19px] w-[19px] items-center justify-center rounded-full border transition-all ${
                        index <= activeChapter
                          ? "border-[#d5b36a] bg-[#d5b36a]"
                          : "border-white/20 bg-[#17120f]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          index <= activeChapter
                            ? "bg-[#17120f]"
                            : "bg-white/20"
                        }`}
                      />
                    </span>

                    <span
                      className={`block text-[8px] uppercase tracking-[0.25em] transition ${
                        index === activeChapter
                          ? "text-[#d5b36a]"
                          : "text-white/30 group-hover:text-white/60"
                      }`}
                    >
                      {item.number} / {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile chapter selector */}
            <div className="mb-6 overflow-x-auto lg:hidden">
              <div className="flex min-w-max gap-2">
                {chapters.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectChapter(index)}
                    className={`border px-4 py-3 text-[8px] uppercase tracking-[0.25em] transition ${
                      index === activeChapter
                        ? "border-[#d5b36a] bg-[#d5b36a] text-[#17120f]"
                        : "border-white/10 text-white/40"
                    }`}
                  >
                    {item.number} · {item.title}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="overflow-hidden border border-white/10 bg-[#211a15]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
                {/* Story image */}
                <div className="relative min-h-[600px] overflow-hidden sm:min-h-[700px] lg:min-h-[760px]">
                  {chapters.map((item, index) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-all duration-[1200ms] ${
                        index === activeChapter
                          ? "scale-100 opacity-100"
                          : "pointer-events-none scale-[1.06] opacity-0"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.2)_100%)]" />

                      <div className="absolute left-6 right-6 top-6 flex items-start justify-between sm:left-10 sm:right-10 sm:top-10">
                        <span className="border border-white/20 bg-black/10 px-4 py-2 text-[8px] uppercase tracking-[0.3em] backdrop-blur-md">
                          {item.location}
                        </span>

                        <span className="ubuntu-serif text-5xl text-white/30 sm:text-7xl">
                          {item.number}
                        </span>
                      </div>

                      <div className="absolute bottom-8 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                        <p className="text-[8px] uppercase tracking-[0.4em] text-[#d5b36a]">
                          {item.eyebrow}
                        </p>

                        <p className="ubuntu-serif mt-4 max-w-3xl text-3xl leading-[0.98] sm:text-5xl lg:text-6xl">
                          “{item.quote}”
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Story copy */}
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-[8px] uppercase tracking-[0.4em] text-[#d5b36a]">
                        {chapter.eyebrow}
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                        {chapter.number} / 06
                      </p>
                    </div>

                    <h3 className="ubuntu-serif mt-7 text-4xl leading-[0.94] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                      {chapter.title}
                    </h3>

                    <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/30">
                      {chapter.subtitle}
                    </p>

                    <div className="mt-9 space-y-5">
                      {chapter.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-white/55"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-wrap gap-2">
                      {chapter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white/35"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-14">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                        Story progression
                      </span>

                      <span className="text-[8px] uppercase tracking-[0.3em] text-[#d5b36a]">
                        {String(activeChapter + 1).padStart(2, "0")} / 06
                      </span>
                    </div>

                    <div className="h-px bg-white/10">
                      <div
                        className="h-px bg-[#d5b36a] transition-all duration-700"
                        style={{ width: `${storyProgress}%` }}
                      />
                    </div>

                    <div className="mt-7 flex gap-2">
                      <button
                        type="button"
                        onClick={previousChapter}
                        className="flex h-12 w-12 items-center justify-center border border-white/10 text-white/45 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
                        aria-label="Previous chapter"
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={nextChapter}
                        className="flex h-12 flex-1 items-center justify-center border border-[#d5b36a] text-[8px] uppercase tracking-[0.35em] text-[#d5b36a] transition hover:bg-[#d5b36a] hover:text-[#17120f]"
                      >
                        Next Chapter →
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsStoryMode(true)}
                      className="mt-3 w-full border border-white/10 py-3 text-[8px] uppercase tracking-[0.35em] text-white/30 transition hover:border-white/25 hover:text-white/70"
                    >
                      Enter Full Story View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            JOURNEY MILESTONES
        ========================================================== */}
        <section className="bg-[#e8dfd2] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#9b7637]">
                  The Timeline
                </p>

                <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.95] sm:text-7xl">
                  From one
                  <br />
                  beginning
                  <br />
                  <span className="italic text-[#9b7637]">
                    to another.
                  </span>
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-7 text-black/50">
                  Every chapter built the foundation for the next. Every
                  transition carried something forward.
                </p>
              </div>

              <div className="relative border-l border-black/10">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.number}
                    className="group relative border-b border-black/10 py-8 pl-8 first:pt-0 last:border-b-0 sm:pl-12"
                  >
                    <span className="absolute -left-[5px] top-10 h-2.5 w-2.5 rounded-full border border-[#9b7637] bg-[#e8dfd2] transition group-hover:bg-[#9b7637] first:top-0" />

                    <div className="grid gap-4 sm:grid-cols-[80px_0.8fr_1fr]">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[#9b7637]">
                        {milestone.number}
                      </span>

                      <h3 className="ubuntu-serif text-2xl sm:text-3xl">
                        {milestone.title}
                      </h3>

                      <p className="text-sm leading-7 text-black/50">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTERNATIONAL RECOGNITION
        ========================================================== */}
        <section className="bg-[#f4efe7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#9b7637]">
                  International Recognition
                </p>

                <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.95] sm:text-7xl">
                  A journey
                  <br />
                  that crossed
                  <br />
                  <span className="italic text-[#9b7637]">borders.</span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
                  Her work received international recognition across London,
                  New York, Singapore, and Australia, extending a story that
                  began in a small village in Kenya onto an international
                  stage.
                </p>

                <div className="mt-12 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-4">
                  {recognition.map((city, index) => (
                    <div
                      key={city}
                      className="border-b border-r border-black/10 p-7 sm:p-9"
                    >
                      <span className="text-[8px] tracking-[0.3em] text-[#9b7637]">
                        0{index + 1}
                      </span>

                      <p className="ubuntu-serif mt-4 text-2xl sm:text-3xl">
                        {city}
                      </p>

                      <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-black/30">
                        International
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MOTHER / DAUGHTER
        ========================================================== */}
        <section className="bg-[#17120f] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#d5b36a]">
                Mother & Daughter
              </p>

              <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                One generation
                <br />
                <span className="italic text-[#d5b36a]">
                  inspires another.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="group relative min-h-[650px] overflow-hidden border border-white/10 bg-black">
                <Image
                  src="/images/ubuntu-brand-portrait.jpeg"
                  alt="Ubuntu Couture House mother and heritage story"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-[1800ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute left-7 right-7 top-7 flex justify-between sm:left-10 sm:right-10 sm:top-10">
                  <span className="border border-white/15 px-3 py-2 text-[8px] uppercase tracking-[0.3em] text-white/60">
                    Chapter I
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                    Her Mother
                  </span>
                </div>

                <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">
                  <p className="text-[8px] uppercase tracking-[0.4em] text-[#d5b36a]">
                    Courage
                  </p>

                  <h3 className="ubuntu-serif mt-4 text-4xl leading-none sm:text-5xl">
                    Courage became a legacy.
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                    From Kenya to Australia, through recovery, advocacy,
                    leadership, and international recognition, her journey
                    became a foundation for what came next.
                  </p>
                </div>
              </article>

              <article className="group relative min-h-[650px] overflow-hidden border border-white/10 bg-black">
                <Image
                  src="/images/ubuntu-global-lookbook.jpeg"
                  alt="Ubuntu Couture House contemporary heritage story"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-[1800ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute left-7 right-7 top-7 flex justify-between sm:left-10 sm:right-10 sm:top-10">
                  <span className="border border-white/15 px-3 py-2 text-[8px] uppercase tracking-[0.3em] text-white/60">
                    Chapter II
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                    Her Daughter
                  </span>
                </div>

                <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">
                  <p className="text-[8px] uppercase tracking-[0.4em] text-[#d5b36a]">
                    Vision
                  </p>

                  <h3 className="ubuntu-serif mt-4 text-4xl leading-none sm:text-5xl">
                    Vision became a voice.
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                    From Atlanta to South Australia, through tennis, journalism
                    and youth advocacy, the next chapter carried the story
                    forward into a new generation.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            VALUES
        ========================================================== */}
        <section className="bg-[#f4efe7] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#9b7637]">
                  What We Carry
                </p>

                <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.95] sm:text-7xl">
                  The values
                  <br />
                  behind
                  <br />
                  <span className="italic text-[#9b7637]">
                    the house.
                  </span>
                </h2>
              </div>

              <div>
                <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
                  {values.map((value, index) => (
                    <button
                      type="button"
                      key={value.number}
                      onClick={() => setActiveValue(index)}
                      className={`group min-h-[190px] border-b border-r border-black/10 p-7 text-left transition sm:p-9 ${
                        activeValue === index
                          ? "bg-[#17120f] text-white"
                          : "hover:bg-[#e8dfd2]"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className={`text-[8px] tracking-[0.3em] ${
                            activeValue === index
                              ? "text-[#d5b36a]"
                              : "text-[#9b7637]"
                          }`}
                        >
                          {value.number}
                        </span>

                        <span
                          className={`text-xl transition-transform ${
                            activeValue === index
                              ? "translate-x-1 text-[#d5b36a]"
                              : "text-black/20"
                          }`}
                        >
                          →
                        </span>
                      </div>

                      <h3 className="ubuntu-serif mt-10 text-3xl">
                        {value.title}
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-6 ${
                          activeValue === index
                            ? "text-white/50"
                            : "text-black/40"
                        }`}
                      >
                        {value.statement}
                      </p>
                    </button>
                  ))}

                  <div className="hidden min-h-[190px] border-b border-r border-black/10 p-9 sm:block">
                    <p className="text-[8px] uppercase tracking-[0.3em] text-black/25">
                      Our philosophy
                    </p>

                    <p className="ubuntu-serif mt-10 text-4xl italic text-[#9b7637]">
                      I am because we are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MEANING
        ========================================================== */}
        <section className="bg-[#211a15] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#d5b36a]">
                  Meaning Behind Every Creation
                </p>

                <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.94] sm:text-7xl">
                  You don't just
                  <br />
                  wear it.
                  <br />
                  <span className="italic text-[#d5b36a]">
                    You live it.
                  </span>
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
                  Each piece carries a message—so you don't just wear it. You
                  live it.
                </p>

                <div className="mt-10 border-l border-[#d5b36a]/40 pl-5">
                  <p className="text-sm leading-7 text-white/55">
                    Fashion represents confidence and self-expression. Gems
                    represent rarity, strength, and natural beauty. Cow horn
                    represents resilience, earth, and transformation. Maasai
                    beadwork represents community, artistry, and living
                    heritage. Royal headpieces represent dignity, leadership,
                    and the power of women.
                  </p>
                </div>
              </div>

              <div>
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                  <Image
                    src={creations[activeCreation].image}
                    alt={creations[activeCreation].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">
                    <p className="text-[8px] uppercase tracking-[0.35em] text-[#d5b36a]">
                      0{activeCreation + 1}
                    </p>

                    <h3 className="ubuntu-serif mt-3 text-4xl sm:text-5xl">
                      {creations[activeCreation].title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                      {creations[activeCreation].description}
                    </p>
                  </div>
                </div>

                <div className="grid border-l border-t border-white/10 sm:grid-cols-5">
                  {creations.map((creation, index) => (
                    <button
                      type="button"
                      key={creation.title}
                      onClick={() => setActiveCreation(index)}
                      className={`border-b border-r border-white/10 p-4 text-left transition sm:p-5 ${
                        activeCreation === index
                          ? "bg-[#d5b36a] text-[#17120f]"
                          : "text-white/40 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="block text-[7px] tracking-[0.3em]">
                        0{index + 1}
                      </span>

                      <span className="mt-3 block text-[10px] leading-4">
                        {creation.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            UBUNTU PHILOSOPHY
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#d8c39a] px-6 py-28 text-[#17120f] sm:px-10 lg:px-16 lg:py-44">
          <div className="pointer-events-none absolute -right-44 -top-44 h-[600px] w-[600px] rounded-full border border-black/10" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-[330px] w-[330px] rounded-full border border-black/10" />
          <div className="pointer-events-none absolute bottom-[-250px] left-[-200px] h-[500px] w-[500px] rounded-full border border-black/10" />

          <div className="relative mx-auto max-w-6xl text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.55em]">
              The Philosophy
            </p>

            <h2 className="ubuntu-serif mt-8 text-[5rem] leading-none tracking-[-0.07em] sm:text-9xl lg:text-[13rem]">
              Ubuntu
            </h2>

            <div className="mx-auto mt-8 h-px w-20 bg-black/30" />

            <p className="ubuntu-serif mt-8 text-3xl italic sm:text-5xl">
              “I am because we are.”
            </p>

            <p className="mx-auto mt-9 max-w-2xl text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
              Ubuntu Couture House carries this philosophy into every creation:
              identity is connected to community, heritage gives meaning to
              modern expression, and individual strength becomes more powerful
              when it contributes to something greater.
            </p>
          </div>
        </section>

        {/* =========================================================
            THE HOUSE
        ========================================================== */}
        <section className="bg-[#f4efe7] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/heritage-floral-headpiece.jpeg"
                  alt="Ubuntu Couture House heritage headpiece"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <p className="text-[8px] uppercase tracking-[0.4em] text-white/70">
                    Ubuntu Couture House
                  </p>

                  <p className="ubuntu-serif mt-3 text-3xl text-white">
                    Heritage, reimagined.
                  </p>
                </div>
              </div>

              <div className="lg:pl-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#9b7637]">
                  A Shared Passion
                </p>

                <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.93] tracking-[-0.04em] sm:text-7xl">
                  A shared passion
                  <br />
                  becomes a
                  <br />
                  <span className="italic text-[#9b7637]">
                    house of heritage.
                  </span>
                </h2>

                <div className="mt-9 space-y-5 text-sm leading-7 text-black/55">
                  <p>
                    Their journeys now come together through Ubuntu Couture
                    House.
                  </p>

                  <p>
                    The house brings together couture fashion, contemporary
                    fashion jewellery, rare gems from Kenya, Tanzania,
                    Ethiopia, Rwanda, and Burundi, ethically sourced cow horn
                    jewellery, reimagined Maasai beadwork, and royal
                    headpieces inspired by dignity, leadership, and African
                    majesty.
                  </p>

                  <p>
                    Every creation honours East African heritage while
                    expressing modern elegance, so heritage becomes wearable
                    and personal history becomes art.
                  </p>
                </div>

                <div className="mt-10">
                  <Link href="/collections" className="luxury-button">
                    Explore The Collections
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CREATION CATEGORIES
        ========================================================== */}
        <section className="bg-[#e8dfd2] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#9b7637]">
                  The Language Of The House
                </p>

                <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.94] sm:text-7xl">
                  Every creation
                  <br />
                  carries a
                  <br />
                  <span className="italic text-[#9b7637]">message.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-black/45">
                Couture, jewellery, gems, beadwork, and headpieces come
                together as different expressions of one philosophy.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {creations.map((creation, index) => (
                <Link
                  href="/collections"
                  key={creation.title}
                  className="group relative min-h-[470px] overflow-hidden bg-black"
                >
                  <Image
                    src={creation.image}
                    alt={creation.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition duration-[1400ms] group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />

                  <div className="absolute left-5 right-5 top-5 flex justify-between">
                    <span className="text-[8px] tracking-[0.3em] text-white/50">
                      0{index + 1}
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/35">
                      Explore
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-5 right-5">
                    <h3 className="ubuntu-serif text-2xl leading-none text-white">
                      {creation.title}
                    </h3>

                    <p className="mt-3 max-h-0 overflow-hidden text-[11px] leading-5 text-white/60 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                      {creation.description}
                    </p>

                    <span className="mt-4 block text-[8px] uppercase tracking-[0.3em] text-[#d5b36a]">
                      Discover →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="relative min-h-[75vh] overflow-hidden bg-[#120e0b] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/royal-headpiece-gold.jpeg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-45"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,5,0.9),rgba(8,6,5,0.45),rgba(8,6,5,0.72))]" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-6xl items-center justify-center px-6 py-24 text-center sm:px-10">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.55em] text-[#d5b36a]">
                Become Part Of The Story
              </p>

              <h2 className="ubuntu-serif mt-8 text-6xl leading-[0.88] tracking-[-0.055em] sm:text-8xl lg:text-[9rem]">
                Wear your
                <br />
                <span className="italic text-[#d5b36a]">story.</span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Discover pieces created to honour heritage, celebrate identity,
                and carry the spirit of Ubuntu into the future.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/collections" className="luxury-button">
                  Shop Ubuntu Couture House
                </Link>

                <Link
                  href="/contact"
                  className="luxury-button luxury-button-outline"
                >
                  Private Enquiries
                </Link>
              </div>

              <p className="mt-12 text-[9px] uppercase tracking-[0.45em] text-white/25">
                African Elegance and Luxury Reimagined
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FULL SCREEN STORY MODE
      ========================================================== */}
      {isStoryMode && (
        <div
          className="fixed inset-0 z-[999] bg-[#0b0806] text-white"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0">
            {chapters.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === activeChapter
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-105 opacity-0"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === activeChapter}
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/25" />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#d5b36a]">
                  Ubuntu Couture House
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/30">
                  The House Story
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsStoryMode(false)}
                className="flex h-12 w-12 items-center justify-center border border-white/15 text-xl text-white/60 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
                aria-label="Close full story"
              >
                ×
              </button>
            </header>

            <div className="flex flex-1 items-end px-6 pb-12 sm:px-10 lg:px-14 lg:pb-16">
              <div className="w-full">
                <div className="mx-auto max-w-7xl">
                  <div className="max-w-6xl">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#d5b36a]" />

                      <p className="text-[8px] uppercase tracking-[0.4em] text-[#d5b36a]">
                        {chapter.eyebrow}
                      </p>
                    </div>

                    <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[8rem]">
                      {chapter.title}
                    </h2>

                    <p className="ubuntu-serif mt-7 max-w-4xl text-2xl italic leading-tight text-white/65 sm:text-4xl lg:text-5xl">
                      “{chapter.quote}”
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {chapter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/15 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={previousChapter}
                        className="border border-white/15 px-6 py-4 text-[8px] uppercase tracking-[0.3em] text-white/50 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
                      >
                        ← Previous
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsPlaying((current) => !current)}
                        className="border border-white/15 px-6 py-4 text-[8px] uppercase tracking-[0.3em] text-white/50 transition hover:border-[#d5b36a] hover:text-[#d5b36a]"
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button>

                      <button
                        type="button"
                        onClick={nextChapter}
                        className="border border-[#d5b36a] px-6 py-4 text-[8px] uppercase tracking-[0.3em] text-[#d5b36a] transition hover:bg-[#d5b36a] hover:text-[#0b0806]"
                      >
                        Next Chapter →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="px-6 pb-5 sm:px-10 lg:px-14">
              <div className="mx-auto max-w-7xl">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    {chapter.number} / 06
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#d5b36a]">
                    {Math.round(storyProgress)}%
                  </span>
                </div>

                <div className="h-px bg-white/10">
                  <div
                    className="h-px bg-[#d5b36a] transition-all duration-700"
                    style={{ width: `${storyProgress}%` }}
                  />
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}