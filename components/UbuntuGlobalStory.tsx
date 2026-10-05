 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

const chapters = [
  {
    id: "kenya",
    number: "01",
    place: "Kenya",
    accent: "Roots",
    title: "Where the story begins.",
    subtitle: "Roots. Community. Resilience.",
    description:
      "Born in a small village in Kenya, a mother's journey began with community, tradition, resilience, and dreams that reached far beyond her circumstances.",
    image: "/images/ubuntu-brand-portrait.jpeg",
  },
  {
    id: "australia",
    number: "02",
    place: "Australia",
    accent: "Courage",
    title: "Courage becomes purpose.",
    subtitle: "A new home. A greater mission.",
    description:
      "A move to Australia became the beginning of a remarkable chapter of leadership, community service, advocacy, and opportunity.",
    image: "/images/elders-path-lookbook.jpeg",
  },
  {
    id: "atlanta",
    number: "03",
    place: "Atlanta",
    accent: "Legacy",
    title: "A daughter's beginning.",
    subtitle: "Heritage carried forward.",
    description:
      "Born in Atlanta, Georgia, a daughter inherited her mother's strength while beginning a journey shaped by African heritage, sport, education, and storytelling.",
    image: "/images/ubuntu-global-lookbook.jpeg",
  },
  {
    id: "world",
    number: "04",
    place: "The World",
    accent: "Vision",
    title: "Heritage without borders.",
    subtitle: "Two journeys. One house.",
    description:
      "Leadership, advocacy, sport, journalism, and international recognition brought two journeys together across continents.",
    image: "/images/hero-couture-yellow.jpeg",
  },
];

export default function UbuntuGlobalStory() {
  const [active, setActive] = useState(0);
  const headingId = useId();
  const panelId = useId();

  const chapter = chapters[active];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((current) => (current + 1) % chapters.length);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive(
          (current) =>
            (current - 1 + chapters.length) % chapters.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <section
      className="overflow-hidden bg-[#100c09] px-5 py-24 text-[#f7f1e6] sm:px-8 lg:px-12 lg:py-32"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 max-w-4xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa6b]">
            Ubuntu Around The World
          </p>

          <h2
            id={headingId}
            className="mt-6 font-[var(--font-ubuntu-serif)] text-5xl font-light leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-8xl"
          >
            One heritage.
            <br />
            Many horizons.
          </h2>

          <p className="mt-7 max-w-3xl text-sm leading-7 text-[#d9d0c3] sm:text-base sm:leading-8">
            From Kenya to Australia, Atlanta to the international world of
            sport and advocacy, discover the journeys that came together to
            create Ubuntu Couture House.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border border-white/10 bg-white/[0.025]">
            <div className="border-b border-white/10 px-6 py-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#9e8960]">
                The journey
              </p>
            </div>

            <div role="tablist" aria-label="Ubuntu global story chapters">
              {chapters.map((item, index) => {
                const selected = index === active;
                const tabId = `global-story-tab-${item.id}`;
                const currentPanelId = `${panelId}-${item.id}`;

                return (
                  <button
                    key={item.id}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={currentPanelId}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(index)}
                    className={`group flex w-full items-center gap-4 border-b border-white/10 px-6 py-6 text-left transition duration-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#c8aa6b] ${
                      selected
                        ? "bg-[#c8aa6b]/10"
                        : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`text-[10px] tracking-[0.2em] ${
                        selected
                          ? "text-[#c8aa6b]"
                          : "text-white/30"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span className="flex-1">
                      <span
                        className={`block font-[var(--font-ubuntu-serif)] text-2xl ${
                          selected ? "text-white" : "text-white/55"
                        }`}
                      >
                        {item.place}
                      </span>

                      <span className="mt-1 block text-[8px] uppercase tracking-[0.22em] text-white/30">
                        {item.accent}
                      </span>
                    </span>

                    <span
                      className={`text-xl transition-transform duration-300 ${
                        selected
                          ? "translate-x-0 text-[#c8aa6b]"
                          : "text-white/20 group-hover:translate-x-1"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="px-6 py-8">
              <p className="font-[var(--font-ubuntu-serif)] text-xl italic text-[#d9d0c3]">
                “I am because we are.”
              </p>

              <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/30">
                Ubuntu
              </p>
            </div>
          </div>

          <div
            id={`${panelId}-${chapter.id}`}
            role="tabpanel"
            aria-labelledby={`global-story-tab-${chapter.id}`}
            className="relative min-h-[620px] overflow-hidden"
          >
            <Image
              key={chapter.image}
              src={chapter.image}
              alt={chapter.title}
              fill
              priority={active === 0}
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover transition duration-700"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-[#100c09] via-[#100c09]/20 to-transparent"
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 bg-gradient-to-r from-[#100c09]/45 to-transparent"
              aria-hidden="true"
            />

            <div className="absolute left-6 top-6">
              <span className="border border-[#c8aa6b]/60 px-4 py-2 text-[8px] uppercase tracking-[0.28em] text-[#e1c98f]">
                {chapter.accent}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-12">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#c8aa6b]">
                {chapter.number} / {chapter.place}
              </p>

              <h3 className="mt-3 max-w-3xl font-[var(--font-ubuntu-serif)] text-4xl font-light leading-none sm:text-5xl lg:text-7xl">
                {chapter.title}
              </h3>

              <p className="mt-4 font-[var(--font-ubuntu-serif)] text-xl italic text-[#dfd2bf]">
                {chapter.subtitle}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d8cec1]">
                {chapter.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-[var(--font-ubuntu-serif)] text-3xl font-light">
              Discover the house behind the story.
            </p>

            <p className="mt-2 text-xs text-white/40">
              Heritage transformed into contemporary luxury.
            </p>
          </div>

          <Link
            href="/about"
            className="w-fit border border-[#c8aa6b]/60 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#c8aa6b] hover:text-[#100c09] focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] focus:ring-offset-2 focus:ring-offset-[#100c09]"
          >
            Explore the story →
          </Link>
        </div>
      </div>
    </section>
  );
}