 "use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Woman = {
  name: string;
  field: string;
  location: string;
  initials: string;
  image: string;
  story: string;
  impact: string;
  tags: string[];
  year: string;
  featured?: boolean;
};

const women: Woman[] = [
  {
    name: "Trailblazing Woman",
    field: "Business & Entrepreneurship",
    location: "Kenya",
    initials: "TW",
    image: "/images/woman-leader.jpg.webp",
    story:
      "A placeholder profile for a woman whose courage, leadership, and enterprise are creating meaningful opportunity.",
    impact: "Building opportunity through enterprise, mentorship, and bold leadership.",
    tags: ["Founder", "Mentor", "Enterprise"],
    year: "2026",
    featured: true,
  },
  {
    name: "Trailblazing Woman",
    field: "Leadership & Public Service",
    location: "Kenya",
    initials: "TW",
    image: "/images/leader.jpg.webp",
    story:
      "A placeholder profile celebrating leadership, public service, and a commitment to community transformation.",
    impact: "Serving communities and opening doors for the next generation of leaders.",
    tags: ["Leadership", "Service", "Community"],
    year: "2026",
  },
  {
    name: "Trailblazing Woman",
    field: "Education & Academia",
    location: "United Kingdom",
    initials: "TW",
    image: "/images/women-1.jpg.webp",
    story:
      "A placeholder profile celebrating excellence in education, knowledge, research, and lifelong learning.",
    impact: "Turning knowledge into confidence, opportunity, and generational change.",
    tags: ["Education", "Research", "Mentorship"],
    year: "2026",
  },
  {
    name: "Trailblazing Woman",
    field: "Health & Medicine",
    location: "United States",
    initials: "TW",
    image: "/images/heritage-1.jpg.webp",
    story:
      "A placeholder profile celebrating a woman improving lives through healthcare, compassion, and service.",
    impact: "Advancing wellbeing while making care more human and accessible.",
    tags: ["Health", "Care", "Impact"],
    year: "2026",
  },
  {
    name: "Trailblazing Woman",
    field: "Sports",
    location: "Kenya",
    initials: "TW",
    image: "/images/gala-1.jpg.webp",
    story:
      "A placeholder profile celebrating excellence, discipline, resilience, and achievement in sport.",
    impact: "Showing young women what discipline, courage, and consistency can make possible.",
    tags: ["Sport", "Discipline", "Inspiration"],
    year: "2026",
  },
  {
    name: "Trailblazing Woman",
    field: "Arts & Culture",
    location: "Australia",
    initials: "TW",
    image: "/images/culture-1.jpg.webp",
    story:
      "A placeholder profile celebrating creativity, culture, heritage, and artistic expression.",
    impact: "Carrying culture forward while giving creativity a global voice.",
    tags: ["Culture", "Arts", "Heritage"],
    year: "2026",
  },
  {
    name: "Trailblazing Woman",
    field: "Faith & Community",
    location: "Kenya",
    initials: "TW",
    image: "/images/community-1.jpg.webp",
    story:
      "A placeholder profile celebrating compassion, faith, community service, and care for others.",
    impact: "Strengthening communities through compassion, service, and collective action.",
    tags: ["Faith", "Service", "Unity"],
    year: "2026",
  },
  {
    name: "Trailblazing Woman",
    field: "Innovation",
    location: "Canada",
    initials: "TW",
    image: "/images/culture-2.jpg.webp",
    story:
      "A placeholder profile celebrating innovation, problem-solving, and solutions that create opportunity.",
    impact: "Turning ideas into practical solutions and new possibilities.",
    tags: ["Innovation", "Technology", "Future"],
    year: "2026",
  },
];

const categories = [
  "All",
  "Business & Entrepreneurship",
  "Leadership & Public Service",
  "Education & Academia",
  "Health & Medicine",
  "Sports",
  "Arts & Culture",
  "Faith & Community",
  "Innovation",
];

const regions = [
  { name: "Kenya", x: "49%", y: "57%", count: "04" },
  { name: "United Kingdom", x: "43%", y: "34%", count: "01" },
  { name: "United States", x: "23%", y: "45%", count: "01" },
  { name: "Canada", x: "21%", y: "31%", count: "01" },
  { name: "Australia", x: "78%", y: "72%", count: "01" },
];

const recognitionStats = [
  { value: "08", label: "Spotlight profiles", detail: "Stories currently showcased" },
  { value: "08", label: "Fields represented", detail: "From enterprise to innovation" },
  { value: "05", label: "Global regions", detail: "A sisterhood without borders" },
  { value: "∞", label: "Potential", detail: "Every story can inspire another" },
];

const recognitionSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We look for women whose work, courage, service, or leadership creates meaningful change.",
  },
  {
    number: "02",
    title: "Recognise",
    text: "We place remarkable journeys in the spotlight so excellence is seen, valued, and remembered.",
  },
  {
    number: "03",
    title: "Connect",
    text: "Recognition becomes a bridge to relationships, collaboration, mentorship, and opportunity.",
  },
  {
    number: "04",
    title: "Inspire",
    text: "One visible story can give another woman permission to believe in what is possible.",
  },
];

const legacyPrinciples = [
  "Celebrate achievements without limiting what achievement can look like.",
  "Make room for women at every stage of the journey.",
  "Honour both visible success and quiet service.",
  "Create connections that can become collaborations.",
  "Keep culture, heritage, and identity close to the future.",
  "Make the next generation part of the story.",
];

export default function WomenPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");
  const [selectedWoman, setSelectedWoman] = useState<Woman | null>(null);
  const [sortMode, setSortMode] = useState("Featured");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filteredWomen = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    const result = women.filter((woman) => {
      const categoryMatch =
        activeCategory === "All" || woman.field === activeCategory;
      const regionMatch =
        activeRegion === "All" || woman.location === activeRegion;
      const searchMatch =
        !normalized ||
        [woman.name, woman.field, woman.location, woman.story, ...woman.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalized);

      return categoryMatch && regionMatch && searchMatch;
    });

    if (sortMode === "A–Z") {
      return [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortMode === "Field") {
      return [...result].sort((a, b) => a.field.localeCompare(b.field));
    }

    return [...result].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
    );
  }, [activeCategory, activeRegion, query, sortMode]);

  const featuredWoman = women.find((woman) => woman.featured) ?? women[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f2e9] text-[#0b211b]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .women-page {
          --forest: #061710;
          --forest-2: #0b2b22;
          --forest-3: #173a30;
          --sage: #789581;
          --gold: #d6ad68;
          --gold-dark: #bd8d45;
          --cream: #f6f2e9;
          --ink: #0b211b;
        }

        .women-noise {
          position: relative;
        }

        .women-noise::after {
          content: "";
          pointer-events: none;
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.32'/%3E%3C/svg%3E");
          mix-blend-mode: soft-light;
        }

        .women-grid {
          background-image:
            linear-gradient(rgba(11, 33, 27, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11, 33, 27, 0.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .hero-orb {
          animation: womenFloat 9s ease-in-out infinite;
        }

        .hero-orb-two {
          animation: womenFloatTwo 12s ease-in-out infinite;
        }

        .globe-spin {
          animation: globeSpin 26s linear infinite;
        }

        .globe-pulse {
          animation: globePulse 2.4s ease-in-out infinite;
        }

        .signal-pulse {
          animation: signalPulse 1.8s ease-in-out infinite;
        }

        .shine-sweep {
          position: relative;
          overflow: hidden;
        }

        .shine-sweep::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-120%);
          background: linear-gradient(
            105deg,
            transparent 25%,
            rgba(255, 255, 255, 0.16) 48%,
            transparent 70%
          );
          animation: shineSweep 6s ease-in-out infinite;
        }

        .portrait-card {
          transition:
            transform 500ms cubic-bezier(.2,.8,.2,1),
            box-shadow 500ms ease,
            border-color 500ms ease;
        }

        .portrait-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(6, 23, 16, 0.15);
          border-color: rgba(189, 141, 69, 0.5);
        }

        .portrait-image {
          transition: transform 900ms cubic-bezier(.2,.8,.2,1);
        }

        .portrait-card:hover .portrait-image {
          transform: scale(1.08);
        }

        .magnetic-button {
          transition:
            transform 250ms ease,
            box-shadow 250ms ease,
            background 250ms ease;
        }

        .magnetic-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(6, 23, 16, 0.16);
        }

        .timeline-line {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(214, 173, 104, 0.7),
            transparent
          );
        }

        @keyframes womenFloat {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(20px, -28px, 0) rotate(8deg); }
        }

        @keyframes womenFloatTwo {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-25px, 25px, 0); }
        }

        @keyframes globeSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes globePulse {
          0%, 100% { transform: scale(.92); opacity: .5; }
          50% { transform: scale(1.12); opacity: 1; }
        }

        @keyframes signalPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(214,173,104,.42); }
          50% { box-shadow: 0 0 0 12px rgba(214,173,104,0); }
        }

        @keyframes shineSweep {
          0%, 55%, 100% { transform: translateX(-120%); }
          75% { transform: translateX(120%); }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .hero-orb,
          .hero-orb-two,
          .globe-spin,
          .globe-pulse,
          .signal-pulse,
          .shine-sweep::after {
            animation: none !important;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className="fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-[#061710]/90 text-white backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/" className="group leading-none">
            <div className="font-serif text-2xl font-bold tracking-wide text-[#d6ad68] transition group-hover:text-white">
              Chebomuren
            </div>
            <div className="mt-1 text-[8px] uppercase tracking-[0.48em] text-white/45">
              Global
            </div>
          </Link>

          <div className="hidden items-center gap-7 xl:flex">
            {[
              ["/about", "About"],
              ["/gala", "Gala"],
              ["/women", "Women"],
              ["/stories", "Stories"],
              ["/nominate", "Nominate"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition ${
                  label === "Women"
                    ? "text-[#d6ad68]"
                    : "text-white/65 hover:text-[#d6ad68]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/join"
              className="magnetic-button hidden rounded-full bg-[#d6ad68] px-6 py-3 text-xs font-bold text-[#061710] sm:block"
            >
              Join the Movement
            </Link>
            <Link
              href="/nominate"
              className="rounded-full border border-white/15 px-4 py-3 text-xs font-semibold text-white/80 transition hover:border-[#d6ad68]/50 hover:text-[#d6ad68]"
            >
              Nominate
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="women-page women-noise relative min-h-[88vh] overflow-hidden bg-[#061710] pt-24 text-white">
        <div className="absolute inset-0 women-grid opacity-[0.08]" />
        <div className="absolute left-[-12%] top-[-18%] h-[650px] w-[650px] rounded-full bg-[#1f5a4a]/30 blur-[110px]" />
        <div className="hero-orb absolute right-[-10%] top-[5%] h-[540px] w-[540px] rounded-full border border-[#d6ad68]/15" />
        <div className="hero-orb-two absolute bottom-[-24%] left-[28%] h-[420px] w-[420px] rounded-full bg-[#d6ad68]/10 blur-[100px]" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-[1500px] items-end px-5 pb-20 pt-20 lg:px-10 lg:pb-28">
          <div className="grid w-full gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.42em] text-[#d6ad68]">
                <span className="h-px w-12 bg-[#d6ad68]" />
                The Legacy Wall
              </div>

              <h1 className="max-w-6xl font-serif text-[clamp(4.4rem,10vw,10rem)] font-semibold leading-[0.78] tracking-[-0.055em]">
                Women who
                <br />
                <span className="text-[#d6ad68]">move the world.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                Meet the women whose courage, excellence, leadership, service,
                creativity, and vision are shaping communities and inspiring
                generations across borders.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#directory"
                  className="magnetic-button rounded-full bg-[#d6ad68] px-7 py-4 text-sm font-bold text-[#061710]"
                >
                  Explore the Women ↓
                </a>
                <Link
                  href="/nominate"
                  className="magnetic-button rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white"
                >
                  Put a Woman in the Spotlight
                </Link>
              </div>
            </div>

            <div className="relative lg:pb-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Global sisterhood
                  </span>
                  <span className="flex items-center gap-2 text-[10px] text-[#d6ad68]">
                    <span className="signal-pulse h-2 w-2 rounded-full bg-[#d6ad68]" />
                    LIVE
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {recognitionStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-black/10 p-5"
                    >
                      <div className="font-serif text-4xl text-[#d6ad68]">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-xs font-semibold text-white/80">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-[10px] leading-5 text-white/35">
                        {stat.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/25 lg:flex">
          Scroll to discover
          <span className="h-px w-16 bg-white/20" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="women-grid px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#86652f]">
                More than a directory
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                We do not just
                <br />
                <span className="text-[#1f5a4a]">show faces.</span>
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-9 text-black/55">
                We preserve journeys. We make excellence visible. We create
                connections. We give young women stories they can point to and
                say, “If she can, perhaps I can too.”
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Visibility", "Connection", "Opportunity", "Legacy"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#0b211b]/10 bg-white/60 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#0b211b]/55"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHT */}
      <section className="px-5 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="overflow-hidden rounded-[2.5rem] bg-[#0b2b22] text-white shadow-2xl shadow-[#061710]/10">
            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <button
                type="button"
                onClick={() => setSelectedWoman(featuredWoman)}
                className="shine-sweep group relative min-h-[520px] overflow-hidden text-left"
              >
                <img
                  src={featuredWoman.image}
                  alt=""
                  className="portrait-image absolute inset-0 h-full w-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-[#061710]/20 to-transparent" />
                <div className="absolute inset-0 bg-[#1f5a4a]/20 mix-blend-multiply" />
                <div className="absolute left-7 top-7 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] backdrop-blur">
                  Featured Woman
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#d6ad68]">
                    Woman of Impact · {featuredWoman.year}
                  </div>
                  <div className="mt-3 font-serif text-4xl sm:text-5xl">
                    {featuredWoman.name}
                  </div>
                </div>
              </button>

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#d6ad68]">
                  Spotlight
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
                  A story worth
                  <br />
                  <span className="text-[#d6ad68]">remembering.</span>
                </h2>
                <p className="mt-6 text-sm leading-7 text-white/50">
                  {featuredWoman.story}
                </p>
                <p className="mt-5 border-l border-[#d6ad68]/50 pl-4 text-sm leading-7 text-white/65">
                  {featuredWoman.impact}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredWoman.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedWoman(featuredWoman)}
                  className="magnetic-button mt-9 w-fit rounded-full bg-[#d6ad68] px-7 py-4 text-xs font-bold text-[#061710]"
                >
                  Enter Her Story →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section className="overflow-hidden bg-[#061710] px-5 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#d6ad68]">
                One people · many places
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
                Her story has
                <br />
                <span className="text-[#d6ad68]">no border.</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/45">
                The Kalenjin woman is not defined by a postcode. Our movement
                connects stories, talent, culture, leadership, and possibility
                wherever women are building lives.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {["All", ...regions.map((region) => region.name)].map(
                  (region) => (
                    <button
                      key={region}
                      type="button"
                      onClick={() => setActiveRegion(region)}
                      className={`rounded-full border px-4 py-2.5 text-[9px] uppercase tracking-[0.16em] transition ${
                        activeRegion === region
                          ? "border-[#d6ad68] bg-[#d6ad68] text-[#061710]"
                          : "border-white/10 text-white/45 hover:border-[#d6ad68]/50 hover:text-white"
                      }`}
                    >
                      {region}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[650px]">
              <div className="absolute inset-[10%] rounded-full border border-[#d6ad68]/10" />
              <div className="absolute inset-[18%] rounded-full border border-[#d6ad68]/10" />
              <div className="absolute inset-[27%] rounded-full border border-[#d6ad68]/10" />

              <div className="globe-spin absolute inset-[9%] rounded-full border border-[#d6ad68]/25">
                <div className="absolute inset-[7%] rounded-full border-x border-[#d6ad68]/15" />
                <div className="absolute inset-[19%] rounded-full border-x border-[#d6ad68]/15" />
                <div className="absolute inset-[31%] rounded-full border-x border-[#d6ad68]/15" />
                <div className="absolute inset-[43%] rounded-full border-x border-[#d6ad68]/15" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d6ad68]/10" />
              </div>

              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6ad68]/10 blur-xl" />

              {regions.map((region) => {
                const active =
                  activeRegion === "All" || activeRegion === region.name;

                return (
                  <button
                    key={region.name}
                    type="button"
                    onClick={() => setActiveRegion(region.name)}
                    style={{ left: region.x, top: region.y }}
                    className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 transition ${
                      active ? "opacity-100" : "opacity-25"
                    }`}
                  >
                    <span className="relative block">
                      <span
                        className={`globe-pulse absolute -inset-3 rounded-full bg-[#d6ad68]/20 ${
                          active ? "block" : "hidden"
                        }`}
                      />
                      <span className="relative block h-3 w-3 rounded-full bg-[#d6ad68] shadow-[0_0_25px_rgba(214,173,104,.7)]" />
                    </span>
                    <span className="mt-2 block whitespace-nowrap rounded-full border border-white/10 bg-[#061710]/80 px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-white/65 backdrop-blur">
                      {region.name} · {region.count}
                    </span>
                  </button>
                );
              })}

              <svg
                className="absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 600 600"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M294 342 C255 315 185 275 138 270"
                  stroke="#d6ad68"
                  strokeDasharray="5 8"
                />
                <path
                  d="M294 342 C283 275 274 224 258 186"
                  stroke="#d6ad68"
                  strokeDasharray="5 8"
                />
                <path
                  d="M294 342 C345 304 402 273 468 251"
                  stroke="#d6ad68"
                  strokeDasharray="5 8"
                />
                <path
                  d="M294 342 C380 385 445 420 478 430"
                  stroke="#d6ad68"
                  strokeDasharray="5 8"
                />
              </svg>

              <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center">
                <div className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                  Connected by
                </div>
                <div className="mt-2 font-serif text-2xl text-[#d6ad68]">
                  Sisterhood
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="directory" className="women-grid px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#86652f]">
                The directory
              </p>
              <h2 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
                Trailblazers.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/45">
                Explore the women currently showcased by field, location, and
                story. As the movement grows, this wall grows with it.
              </p>
            </div>

            <div className="text-left lg:text-right">
              <div className="font-serif text-4xl">{filteredWomen.length}</div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-black/35">
                Stories matching your view
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-black/10 bg-white/60 p-4 shadow-sm backdrop-blur">
            <div className="grid gap-3 lg:grid-cols-[1.2fr_auto_auto]">
              <label className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4">
                <span className="text-black/30">⌕</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search women, fields, places or keywords..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-black/30"
                />
              </label>

              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value)}
                className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-xs font-semibold outline-none"
                aria-label="Sort women"
              >
                <option>Featured</option>
                <option>A–Z</option>
                <option>Field</option>
              </select>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                  setActiveRegion("All");
                  setSortMode("Featured");
                }}
                className="rounded-2xl border border-black/10 bg-[#0b211b] px-5 py-4 text-xs font-bold text-white transition hover:bg-[#1f5a4a]"
              >
                Reset View
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(showAllCategories ? categories : categories.slice(0, 5)).map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2.5 text-[9px] font-semibold transition ${
                      activeCategory === category
                        ? "border-[#0b211b] bg-[#0b211b] text-white"
                        : "border-black/10 bg-white text-black/50 hover:border-[#bd8d45] hover:text-[#0b211b]"
                    }`}
                  >
                    {category}
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={() => setShowAllCategories((value) => !value)}
                className="rounded-full border border-[#bd8d45]/30 px-4 py-2.5 text-[9px] font-semibold text-[#86652f]"
              >
                {showAllCategories ? "Show Less" : `+ ${categories.length - 5} More`}
              </button>
            </div>
          </div>

          {filteredWomen.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {filteredWomen.map((woman, index) => (
                <article
                  key={`${woman.field}-${index}`}
                  className="portrait-card overflow-hidden rounded-[2rem] border border-black/10 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedWoman(woman)}
                    className="block w-full text-left"
                  >
                    <div className="relative h-[350px] overflow-hidden bg-[#173a30]">
                      <img
                        src={woman.image}
                        alt=""
                        className="portrait-image h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full bg-[#d6ad68] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#061710]">
                        {woman.location}
                      </div>
                      {woman.featured && (
                        <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-[#061710]/60 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
                          Spotlight
                        </div>
                      )}
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="text-[9px] uppercase tracking-[0.2em] text-[#d6ad68]">
                          {woman.year} · {woman.field}
                        </div>
                        <div className="mt-2 font-serif text-3xl text-white">
                          {woman.name}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm leading-7 text-black/45">
                        {woman.story}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {woman.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#f6f2e9] px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-black/45"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1f5a4a]">
                        View story →
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f2e9] font-serif text-2xl">
                ?
              </div>
              <h3 className="mt-6 font-serif text-3xl">
                No stories match this view.
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-black/45">
                Try another category, region, or search phrase — or become the
                reason a new story appears here.
              </p>
              <Link
                href="/nominate"
                className="magnetic-button mt-7 inline-flex rounded-full bg-[#0b211b] px-7 py-4 text-xs font-bold text-white"
              >
                Nominate a Woman →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* RECOGNITION PROCESS */}
      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#86652f]">
              How recognition becomes impact
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
              A spotlight can
              <br />
              become a <span className="text-[#1f5a4a]">bridge.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2 xl:grid-cols-4">
            {recognitionSteps.map((step) => (
              <div key={step.number} className="bg-white p-8 sm:p-10">
                <div className="font-serif text-4xl text-[#bd8d45]">
                  {step.number}
                </div>
                <h3 className="mt-12 font-serif text-3xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/45">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY WALL */}
      <section className="bg-[#e9e3d6] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#86652f]">
                The legacy principle
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
                What we leave
                <br />
                <span className="text-[#1f5a4a]">behind matters.</span>
              </h2>
              <p className="mt-7 max-w-lg text-base leading-8 text-black/50">
                The strongest legacy is not only what a woman achieves. It is
                what becomes possible for others because she chose to act.
              </p>

              <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white">
                {legacyPrinciples.map((principle, index) => (
                  <div
                    key={principle}
                    className="flex gap-5 border-b border-black/10 p-5 last:border-b-0"
                  >
                    <span className="font-serif text-lg text-[#bd8d45]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-6 text-black/55">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[2.5rem] bg-[#061710] text-white">
              <img
                src="/images/heritage-2.jpg.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-[#061710]/55 to-[#061710]/10" />
              <div className="absolute inset-0 bg-[#1f5a4a]/20 mix-blend-multiply" />

              <div className="absolute left-7 top-7 right-7 flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[9px] uppercase tracking-[0.2em] backdrop-blur">
                  Legacy Wall
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#d6ad68]">
                  01 / 08
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="font-serif text-5xl leading-none sm:text-6xl">
                  “Her success is not the end of the story.
                </div>
                <div className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                  It is the beginning of a road another woman may one day walk
                  with more confidence, more knowledge, and fewer barriers.
                </div>
                <div className="mt-8 h-px w-full bg-white/10">
                  <div className="h-px w-1/3 bg-[#d6ad68]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative overflow-hidden bg-[#0b2b22] px-5 py-28 text-white lg:px-10 lg:py-36">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6ad68]/10" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="font-serif text-7xl leading-none text-[#d6ad68]">“</div>
          <blockquote className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
            Every Kalenjin woman has a story, a purpose, and the power to
            inspire change.
          </blockquote>
          <div className="mx-auto mt-10 h-px w-16 bg-[#d6ad68]" />
          <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-white/30">
            Chebomuren Global
          </p>
        </div>
      </section>

      {/* NOMINATION */}
      <section className="women-grid px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#bd8d45]/20 bg-[#fdfbf6] p-8 sm:p-12 lg:p-20">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d6ad68]/15 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#86652f]">
                  Know a trailblazer?
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-[0.9] sm:text-6xl lg:text-8xl">
                  Put her story
                  <br />
                  <span className="text-[#1f5a4a]">in the spotlight.</span>
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-black/50">
                  Nominate a Kalenjin woman who is creating positive change,
                  inspiring others, leading with purpose, building something
                  meaningful, serving her community, or breaking barriers.
                </p>
                <Link
                  href="/nominate"
                  className="magnetic-button mt-8 inline-flex rounded-full bg-[#0b211b] px-8 py-4 text-xs font-bold text-white"
                >
                  Nominate a Trailblazer →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="bg-[#d6ad68] px-5 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#4d3920]">
                Your place is here
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
                Your journey could inspire someone.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#3d3020]/65">
                Businesswoman, professional, student, mother, leader, creative,
                athlete, farmer, community worker, entrepreneur, or change-maker
                — there is a place for you in this movement.
              </p>
            </div>

            <Link
              href="/join"
              className="magnetic-button inline-flex w-fit rounded-full bg-[#061710] px-8 py-5 text-xs font-bold text-white"
            >
              Join the Movement →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#04110d] px-5 py-14 text-white lg:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.7fr_.8fr]">
            <div>
              <Link href="/" className="font-serif text-3xl text-[#d6ad68]">
                Chebomuren Global
              </Link>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/35">
                Celebrating Kalenjin Women. Inspiring Our Future.
              </p>
              <p className="mt-8 text-[9px] uppercase tracking-[0.28em] text-white/20">
                One sisterhood · many stories · one future
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#d6ad68]">
                Explore
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/40">
                <Link className="block hover:text-white" href="/">
                  Home
                </Link>
                <Link className="block hover:text-white" href="/about">
                  About
                </Link>
                <Link className="block hover:text-white" href="/women">
                  Women
                </Link>
                <Link className="block hover:text-white" href="/stories">
                  Stories
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#d6ad68]">
                Participate
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/40">
                <Link className="block hover:text-white" href="/join">
                  Join Us
                </Link>
                <Link className="block hover:text-white" href="/nominate">
                  Nominate
                </Link>
                <Link className="block hover:text-white" href="/gala">
                  Gala
                </Link>
                <Link className="block hover:text-white" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#d6ad68]">
                The promise
              </p>
              <p className="mt-5 text-sm leading-7 text-white/35">
                Recognition creates encouragement. Connection creates
                opportunity. Unity creates lasting impact.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-[9px] uppercase tracking-[0.2em] text-white/20 sm:flex-row">
            <span>© 2026 Chebomuren Global. All rights reserved.</span>
            <span>Celebrating Kalenjin Women · Inspiring Our Future</span>
          </div>
        </div>
      </footer>

      {/* STORY MODAL */}
      {selectedWoman && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020a07]/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedWoman.name} story`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedWoman(null);
          }}
        >
          <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] bg-[#f6f2e9] shadow-2xl">
            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
              <div className="relative min-h-[360px] bg-[#173a30] lg:min-h-[620px]">
                <img
                  src={selectedWoman.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedWoman(null)}
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-black/60"
                  aria-label="Close story"
                >
                  ×
                </button>
                <div className="absolute bottom-7 left-7 right-7 text-white">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#d6ad68]">
                    {selectedWoman.field}
                  </div>
                  <h3 className="mt-3 font-serif text-4xl">
                    {selectedWoman.name}
                  </h3>
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#0b211b] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                    {selectedWoman.location}
                  </span>
                  <span className="rounded-full border border-black/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black/45">
                    Spotlight {selectedWoman.year}
                  </span>
                </div>

                <p className="mt-10 text-[10px] uppercase tracking-[0.32em] text-[#86652f]">
                  Her journey
                </p>
                <p className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                  Every journey deserves to be seen, valued, and remembered.
                </p>
                <p className="mt-6 text-base leading-8 text-black/55">
                  {selectedWoman.story}
                </p>

                <div className="mt-8 rounded-2xl border border-[#bd8d45]/20 bg-white p-6">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#86652f]">
                    Impact
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/55">
                    {selectedWoman.impact}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {selectedWoman.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#e9e3d6] px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-black/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/nominate"
                    onClick={() => setSelectedWoman(null)}
                    className="magnetic-button rounded-full bg-[#0b211b] px-6 py-4 text-xs font-bold text-white"
                  >
                    Nominate Another Woman →
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedWoman(null)}
                    className="rounded-full border border-black/10 px-6 py-4 text-xs font-semibold text-black/55"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
