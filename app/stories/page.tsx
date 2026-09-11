"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type LocationData = {
  id: string;
  country: string;
  region: string;
  flag: string;
  x: number;
  y: number;
  women: number;
  description: string;
  highlights: string[];
};

const locations: LocationData[] = [
  {
    id: "kenya",
    country: "Kenya",
    region: "East Africa",
    flag: "🇰🇪",
    x: 52,
    y: 55,
    women: 2840,
    description:
      "The heart of the movement, connecting generations of Kalenjin women across communities and counties.",
    highlights: [
      "Community leadership",
      "Business & entrepreneurship",
      "Education",
      "Culture & heritage",
    ],
  },
  {
    id: "uganda",
    country: "Uganda",
    region: "East Africa",
    flag: "🇺🇬",
    x: 48,
    y: 57,
    women: 380,
    description:
      "A growing community of Kalenjin women building relationships and opportunities across borders.",
    highlights: [
      "Professional networks",
      "Women empowerment",
      "Community",
    ],
  },
  {
    id: "tanzania",
    country: "Tanzania",
    region: "East Africa",
    flag: "🇹🇿",
    x: 53,
    y: 64,
    women: 260,
    description:
      "Women connecting through entrepreneurship, leadership, family, and community.",
    highlights: [
      "Entrepreneurship",
      "Leadership",
      "Community service",
    ],
  },
  {
    id: "south-africa",
    country: "South Africa",
    region: "Southern Africa",
    flag: "🇿🇦",
    x: 46,
    y: 79,
    women: 310,
    description:
      "A vibrant diaspora community contributing to professional and social impact.",
    highlights: [
      "Professional growth",
      "Networking",
      "Social impact",
    ],
  },
  {
    id: "uk",
    country: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    x: 43,
    y: 29,
    women: 540,
    description:
      "A growing international community of Kalenjin women across professions and generations.",
    highlights: [
      "Professional networks",
      "Mentorship",
      "Leadership",
      "Business",
    ],
  },
  {
    id: "usa",
    country: "United States",
    region: "North America",
    flag: "🇺🇸",
    x: 21,
    y: 39,
    women: 690,
    description:
      "Women building careers, businesses, families, and communities while maintaining a strong connection to home.",
    highlights: [
      "Business",
      "Technology",
      "Education",
      "Community",
    ],
  },
  {
    id: "canada",
    country: "Canada",
    region: "North America",
    flag: "🇨🇦",
    x: 23,
    y: 25,
    women: 260,
    description:
      "A growing network creating meaningful connections among Kalenjin women in Canada.",
    highlights: [
      "Networking",
      "Education",
      "Professional growth",
    ],
  },
  {
    id: "australia",
    country: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    x: 87,
    y: 70,
    women: 420,
    description:
      "Kalenjin women creating new communities while carrying culture and identity forward.",
    highlights: [
      "Culture",
      "Professional networks",
      "Young women",
    ],
  },
  {
    id: "uae",
    country: "UAE",
    region: "Middle East",
    flag: "🇦🇪",
    x: 61,
    y: 45,
    women: 220,
    description:
      "Women connecting through business, careers, family, and international opportunities.",
    highlights: [
      "Business",
      "Networking",
      "Entrepreneurship",
    ],
  },
];

const connections = [
  ["kenya", "uganda"],
  ["kenya", "tanzania"],
  ["kenya", "south-africa"],
  ["kenya", "uk"],
  ["kenya", "usa"],
  ["kenya", "canada"],
  ["kenya", "australia"],
  ["kenya", "uae"],
  ["uk", "usa"],
  ["usa", "canada"],
  ["uk", "australia"],
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function ConnectionLine({
  from,
  to,
  active,
}: {
  from: LocationData;
  to: LocationData;
  active: boolean;
}) {
  const x1 = from.x;
  const y1 = from.y;
  const x2 = to.x;
  const y2 = to.y;

  const dx = x2 - x1;
  const dy = y2 - y1;

  const curve = Math.max(5, Math.min(18, Math.abs(dx) * 0.12));

  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - curve;

  return (
    <path
      d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
      fill="none"
      stroke={
        active
          ? "rgba(232,189,114,0.9)"
          : "rgba(232,189,114,0.20)"
      }
      strokeWidth={active ? "0.35" : "0.18"}
      strokeDasharray={active ? "1 1" : "0"}
      className={active ? "global-active-line" : ""}
    />
  );
}

export default function GlobalPage() {
  const [selectedId, setSelectedId] = useState("kenya");
  const [autoRotate, setAutoRotate] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const selected = locations.find(
    (location) => location.id === selectedId
  );

  const totalWomen = useMemo(
    () =>
      locations.reduce(
        (total, location) => total + location.women,
        0
      ),
    []
  );

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setSelectedId((current) => {
        const currentIndex = locations.findIndex(
          (location) => location.id === current
        );

        const nextIndex =
          currentIndex === locations.length - 1
            ? 0
            : currentIndex + 1;

        return locations[nextIndex].id;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [autoRotate]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#190a0f] text-white">

      {/* ========================================================= */}
      {/* NAVIGATION */}
      {/* ========================================================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#190a0f]/85 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <Link href="/" className="leading-none">

            <div className="font-serif text-2xl font-bold tracking-wide text-[#e8bd72]">
              Chebomuren
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.4em] text-white/50">
              Global
            </div>

          </Link>

          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="/about"
              className="text-sm text-white/65 transition hover:text-[#e8bd72]"
            >
              About
            </Link>

            <Link
              href="/gala"
              className="text-sm text-white/65 transition hover:text-[#e8bd72]"
            >
              Gala
            </Link>

            <Link
              href="/women"
              className="text-sm text-white/65 transition hover:text-[#e8bd72]"
            >
              Women
            </Link>

            <Link
              href="/global"
              className="text-sm text-[#e8bd72]"
            >
              Global
            </Link>

            <Link
              href="/nominate"
              className="text-sm text-white/65 transition hover:text-[#e8bd72]"
            >
              Nominate
            </Link>

            <Link
              href="/contact"
              className="text-sm text-white/65 transition hover:text-[#e8bd72]"
            >
              Contact
            </Link>

          </div>

          <Link
            href="/join"
            className="hidden rounded-full bg-[#d5a85c] px-6 py-3 text-sm font-bold text-[#241817] transition hover:-translate-y-1 hover:bg-[#edca8c] md:block"
          >
            Join the Movement
          </Link>

        </div>
      </nav>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden pt-28">

        {/* Ambient background */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(213,168,92,0.14),transparent_35%)]" />

        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#6f3542]/20 blur-3xl" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#d5a85c]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-24">

          <div className="mx-auto max-w-5xl text-center">

            <div className="hero-reveal inline-flex items-center gap-3 rounded-full border border-[#d5a85c]/25 bg-[#d5a85c]/10 px-5 py-3">

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8bd72]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8bd72]">
                One Sisterhood · One World
              </span>

            </div>

            <h1 className="hero-reveal hero-delay-1 mt-8 font-serif text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-[105px]">
              Kalenjin women
              <br />
              <span className="text-[#e8bd72]">
                without borders.
              </span>
            </h1>

            <p className="hero-reveal hero-delay-2 mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/50">
              From Kenya to every corner of the world, our sisterhood is
              creating connections, opening doors, sharing stories, and
              inspiring the future.
            </p>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* GLOBAL MAP EXPERIENCE */}
      {/* ========================================================= */}

      <section className="relative px-4 pb-24 sm:px-6 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#211017] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">

            {/* MAP HEADER */}

            <div className="border-b border-white/10 px-6 py-7 sm:px-10">

              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#e8bd72]">
                    Global Sisterhood Network
                  </p>

                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                    Connected across continents.
                  </h2>

                </div>

                <button
                  type="button"
                  onClick={() => setAutoRotate((value) => !value)}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs text-white/60 transition hover:border-[#d5a85c]/40 hover:text-[#e8bd72]"
                >
                  {autoRotate
                    ? "Pause locations"
                    : "Play locations"}
                </button>

              </div>

            </div>

            {/* MAP */}

            <div className="relative aspect-[16/10] min-h-[430px] overflow-hidden bg-[#160b10] sm:min-h-[520px]">

              {/* Grid */}

              <div className="absolute inset-0 opacity-[0.08]">

                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(232,189,114,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,189,114,0.5) 1px, transparent 1px)",
                    backgroundSize: "8% 12%",
                  }}
                />

              </div>

              {/* Decorative globe rings */}

              <div className="absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#d5a85c]/10" />

              <div className="absolute left-1/2 top-1/2 h-[65%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#d5a85c]/5" />

              <div className="absolute left-1/2 top-1/2 h-[50%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#d5a85c]/5" />

              {/* Continents — abstract visual shapes */}

              <div className="absolute left-[14%] top-[25%] h-[22%] w-[15%] rotate-[-15deg] rounded-[48%_52%_40%_60%] bg-white/[0.025] blur-[1px]" />

              <div className="absolute left-[38%] top-[18%] h-[24%] w-[10%] rotate-[15deg] rounded-[55%_45%_50%_50%] bg-white/[0.035]" />

              <div className="absolute left-[47%] top-[42%] h-[32%] w-[13%] rotate-[20deg] rounded-[55%_45%_45%_55%] bg-white/[0.035]" />

              <div className="absolute right-[16%] top-[53%] h-[24%] w-[18%] rotate-[-20deg] rounded-[50%] bg-white/[0.025]" />

              {/* SVG connection layer */}

              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >

                {connections.map(([fromId, toId]) => {

                  const from = locations.find(
                    (location) => location.id === fromId
                  );

                  const to = locations.find(
                    (location) => location.id === toId
                  );

                  if (!from || !to) return null;

                  const active =
                    selectedId === from.id ||
                    selectedId === to.id;

                  return (
                    <ConnectionLine
                      key={`${from.id}-${to.id}`}
                      from={from}
                      to={to}
                      active={active}
                    />
                  );
                })}

              </svg>

              {/* LOCATION NODES */}

              {locations.map((location) => {

                const isSelected =
                  selectedId === location.id;

                return (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => {
                      setSelectedId(location.id);
                      setAutoRotate(false);
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                    style={{
                      left: `${location.x}%`,
                      top: `${location.y}%`,
                    }}
                    aria-label={`View ${location.country}`}
                  >

                    {/* Pulse */}

                    <span
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d5a85c]/30 ${
                        isSelected
                          ? "h-16 w-16 animate-ping"
                          : "h-9 w-9"
                      }`}
                    />

                    {/* Glow */}

                    <span
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d5a85c]/20 blur-xl ${
                        isSelected
                          ? "h-16 w-16"
                          : "h-8 w-8"
                      }`}
                    />

                    {/* Node */}

                    <span
                      className={`relative flex items-center justify-center rounded-full border transition-all duration-500 ${
                        isSelected
                          ? "h-9 w-9 border-[#f3dfba] bg-[#d5a85c] shadow-[0_0_30px_rgba(213,168,92,0.65)]"
                          : "h-5 w-5 border-[#d5a85c]/60 bg-[#6f3542]"
                      }`}
                    >

                      {isSelected && (
                        <span className="h-2 w-2 rounded-full bg-[#241017]" />
                      )}

                    </span>

                    {/* Label */}

                    <span
                      className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] backdrop-blur-md transition-all ${
                        isSelected
                          ? "border-[#d5a85c]/40 bg-[#241017]/90 text-[#e8bd72]"
                          : "border-white/5 bg-black/30 text-white/35"
                      }`}
                    >
                      {location.flag} {location.country}
                    </span>

                  </button>
                );
              })}

              {/* Map corner text */}

              <div className="absolute bottom-6 left-6 hidden text-[9px] uppercase tracking-[0.3em] text-white/20 sm:block">
                CHEBOMUREN GLOBAL · WORLDWIDE
              </div>

              <div className="absolute bottom-6 right-6 hidden text-[9px] uppercase tracking-[0.3em] text-white/20 sm:block">
                LIVE NETWORK
              </div>

            </div>

            {/* LOCATION DETAIL */}

            <div className="border-t border-white/10 bg-[#190a0f] p-6 sm:p-10">

              {selected && (

                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="text-4xl">
                        {selected.flag}
                      </span>

                      <div>

                        <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                          Selected community
                        </p>

                        <h3 className="mt-1 font-serif text-3xl">
                          {selected.country}
                        </h3>

                      </div>

                    </div>

                    <p className="mt-5 max-w-2xl leading-7 text-white/45">
                      {selected.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {selected.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.12em] text-white/45"
                        >
                          {highlight}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="rounded-3xl border border-[#d5a85c]/20 bg-[#d5a85c]/[0.05] px-8 py-7 text-center">

                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      Community
                    </p>

                    <p className="mt-2 font-serif text-4xl text-[#e8bd72]">
                      {formatNumber(selected.women)}
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      women connected
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* STATS */}
      {/* ========================================================= */}

      <section className="border-y border-white/10 bg-[#241017]">

        <div className="mx-auto grid max-w-7xl md:grid-cols-4">

          <div className="border-b border-white/10 p-8 text-center md:border-b-0 md:border-r">

            <p className="font-serif text-4xl text-[#e8bd72]">
              {formatNumber(totalWomen)}+
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Women in network
            </p>

          </div>

          <div className="border-b border-white/10 p-8 text-center md:border-b-0 md:border-r">

            <p className="font-serif text-4xl text-[#e8bd72]">
              {locations.length}+
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Global communities
            </p>

          </div>

          <div className="border-b border-white/10 p-8 text-center md:border-b-0 md:border-r">

            <p className="font-serif text-4xl text-[#e8bd72]">
              01
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Global sisterhood
            </p>

          </div>

          <div className="p-8 text-center">

            <p className="font-serif text-4xl text-[#e8bd72]">
              ∞
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Possibilities
            </p>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* WHY GLOBAL CONNECTION MATTERS */}
      {/* ========================================================= */}

      <section className="bg-[#f8f3eb] px-6 py-28 text-[#241817] lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Why It Matters
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                Distance should
                <br />
                never divide
                <br />
                <span className="text-[#6f3542]">
                  sisterhood.
                </span>
              </h2>

            </div>

            <p className="text-lg leading-8 text-black/50">
              Our world is increasingly connected. A woman in Nairobi can
              inspire a woman in London. A businesswoman in Melbourne can
              create an opportunity for a young woman in Kenya. A story from
              the United States can inspire a generation back home.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Connection",
                text: "Meet women with shared experiences, ambitions, identities, and dreams.",
              },
              {
                number: "02",
                title: "Opportunity",
                text: "Turn relationships into collaborations, mentorships, partnerships, and new possibilities.",
              },
              {
                number: "03",
                title: "Legacy",
                text: "Carry our stories forward and create a stronger foundation for future generations.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="premium-card rounded-3xl border border-black/10 bg-white p-8"
              >

                <span className="text-xs text-[#a77a32]">
                  {item.number}
                </span>

                <h3 className="mt-12 font-serif text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-black/45">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* GLOBAL LOCATIONS */}
      {/* ========================================================= */}

      <section className="bg-[#eadfd2] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Where We Connect
              </p>

              <h2 className="mt-5 font-serif text-5xl lg:text-7xl">
                Around the world.
              </h2>

            </div>

            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="rounded-full border border-black/15 px-6 py-3 text-xs font-bold transition hover:border-[#d5a85c]"
            >
              {showAll ? "Show less" : "Explore communities"}
            </button>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {(showAll ? locations : locations.slice(0, 6)).map(
              (location) => (

                <button
                  key={location.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(location.id);
                    window.scrollTo({
                      top: 420,
                      behavior: "smooth",
                    });
                  }}
                  className={`premium-card rounded-3xl border p-6 text-left transition ${
                    selectedId === location.id
                      ? "border-[#d5a85c] bg-white"
                      : "border-black/10 bg-white/60"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-3xl">
                      {location.flag}
                    </span>

                    <span className="text-xs text-[#a77a32]">
                      {formatNumber(location.women)}
                    </span>

                  </div>

                  <h3 className="mt-7 font-serif text-2xl">
                    {location.country}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-black/30">
                    {location.region}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-black/45">
                    {location.description}
                  </p>

                  <div className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#6f3542]">
                    View community →
                  </div>

                </button>

              )
            )}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* JOIN GLOBAL MOVEMENT */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#d5a85c] px-6 py-32 text-[#241017] lg:px-10">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#241017]/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#4d2924]">
            Your Place Is Here
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight lg:text-7xl">
            The world is big.
            <br />
            Sisterhood makes it smaller.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#3d2822]/60">
            Wherever you are in the world, there is a Kalenjin woman
            somewhere who can learn from you, support you, collaborate with
            you, or be inspired by your story.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/join"
              className="premium-button rounded-full bg-[#241017] px-9 py-4 font-bold text-white"
            >
              Join the Global Sisterhood →
            </Link>

            <Link
              href="/women"
              className="rounded-full border border-[#241017]/20 px-9 py-4 font-bold transition hover:bg-white/20"
            >
              Meet the Women
            </Link>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="bg-[#16090d] px-6 py-14 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div className="lg:col-span-2">

              <Link
                href="/"
                className="font-serif text-3xl text-[#e8bd72]"
              >
                Chebomuren Global
              </Link>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                Celebrating Kalenjin Women. Inspiring Our Future.
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/30">
                A global movement connecting Kalenjin women across
                generations, professions, communities, and countries.
              </p>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#e8bd72]">
                Explore
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/40">

                <Link
                  href="/"
                  className="block transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="block transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/gala"
                  className="block transition hover:text-white"
                >
                  Gala
                </Link>

                <Link
                  href="/women"
                  className="block transition hover:text-white"
                >
                  Women
                </Link>

                <Link
                  href="/global"
                  className="block transition hover:text-white"
                >
                  Global Sisterhood
                </Link>

              </div>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#e8bd72]">
                Connect
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/40">

                <Link
                  href="/join"
                  className="block transition hover:text-white"
                >
                  Join Us
                </Link>

                <Link
                  href="/nominate"
                  className="block transition hover:text-white"
                >
                  Nominate
                </Link>

                <Link
                  href="/contact"
                  className="block transition hover:text-white"
                >
                  Contact
                </Link>

              </div>

            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-xs text-white/25">
            © 2026 Chebomuren Global. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}