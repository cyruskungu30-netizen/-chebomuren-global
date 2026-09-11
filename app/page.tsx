  "use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";

type Region = {
  id: string;
  name: string;
  flag: string;
  description: string;
  x: string;
  y: string;
};

type GalleryItem = {
  image: string;
  title: string;
  category: string;
};

const regions: Region[] = [
  {
    id: "kenya",
    name: "Kenya",
    flag: "🇰🇪",
    description:
      "Our roots. Our heritage. The heart from which the global sisterhood grows.",
    x: "50%",
    y: "48%",
  },
  {
    id: "africa",
    name: "Africa",
    flag: "🌍",
    description:
      "Women building communities, businesses, families and futures across Africa.",
    x: "54%",
    y: "64%",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    description:
      "Kalenjin women creating professional, family and community impact across the UK.",
    x: "43%",
    y: "25%",
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    description:
      "Women breaking barriers, building careers and creating opportunities across America.",
    x: "22%",
    y: "39%",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    description:
      "A growing community connected by identity, ambition and sisterhood.",
    x: "27%",
    y: "24%",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    description:
      "Women carrying culture forward while creating new possibilities for future generations.",
    x: "78%",
    y: "72%",
  },
];

const gallery: GalleryItem[] = [
  {
    image: "/images/hero.jpg.webp",
    title: "Our Heritage",
    category: "Culture",
  },
  {
    image: "/images/culture-1.jpg.webp",
    title: "Celebrating Culture",
    category: "Heritage",
  },
  {
    image: "/images/culture-2.jpg.webp",
    title: "Generations",
    category: "Identity",
  },
  {
    image: "/images/heritage-1.jpg.webp",
    title: "Our Roots",
    category: "Legacy",
  },
  {
    image: "/images/heritage-2.jpg.webp",
    title: "Identity",
    category: "Heritage",
  },
  {
    image: "/images/community-1.jpg.webp",
    title: "Community",
    category: "Sisterhood",
  },
  {
    image: "/images/gala-1.jpg.webp",
    title: "The Gala",
    category: "Celebration",
  },
  {
    image: "/images/gala-2.jpg.webp",
    title: "Honouring Women",
    category: "Recognition",
  },
];

const women = [
  {
    image: "/images/leader.jpg.webp",
    category: "Leadership",
    title: "Women Who Lead",
    text: "Creating change through courage, vision and purpose.",
  },
  {
    image: "/images/woman-leader.jpg.webp",
    category: "Excellence",
    title: "Women Who Inspire",
    text: "Turning personal journeys into inspiration for others.",
  },
  {
    image: "/images/community-1.jpg.webp",
    category: "Community",
    title: "Women Who Serve",
    text: "Building stronger communities through service and compassion.",
  },
  {
    image: "/images/women-1.jpg.webp",
    category: "Legacy",
    title: "Women Who Build",
    text: "Creating opportunities that can outlive a single generation.",
  },
];

const galaCategories = [
  "Business & Entrepreneurship",
  "Leadership & Public Service",
  "Education & Academia",
  "Health & Medicine",
  "Sports",
  "Arts, Culture & Entertainment",
  "Faith & Community Service",
  "Agriculture & Innovation",
  "Media & Communications",
  "Humanitarian & Social Impact",
  "Young Leadership",
  "Emerging Excellence",
];

const paths = [
  {
    number: "01",
    icon: "👑",
    title: "Celebrate",
    text: "Recognise the women whose journeys deserve to be seen.",
    href: "/women",
  },
  {
    number: "02",
    icon: "✨",
    title: "Connect",
    text: "Build relationships with Kalenjin women across the world.",
    href: "/join",
  },
  {
    number: "03",
    icon: "🌱",
    title: "Grow",
    text: "Learn, collaborate and create opportunities together.",
    href: "/join",
  },
  {
    number: "04",
    icon: "🔥",
    title: "Inspire",
    text: "Turn your story into a source of courage for another woman.",
    href: "/stories",
  },
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] h-[2px] bg-transparent">
      <div
        className="h-full origin-left bg-[#e8bd72] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function FloatingOrb({
  size,
  top,
  left,
  delay,
}: {
  size: string;
  top: string;
  left: string;
  delay: string;
}) {
  return (
    <div
      className="pointer-events-none absolute rounded-full border border-[#e8bd72]/10"
      style={{
        width: size,
        height: size,
        top,
        left,
        animation: `float 8s ease-in-out ${delay} infinite`,
      }}
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("kenya");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const activeRegion =
    regions.find((region) => region.id === selectedRegion) ?? regions[0];

  useEffect(() => {
    const target = new Date("2026-12-26T00:00:00").getTime();

    const update = () => {
      const difference = target - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    update();

    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const closeLightbox = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", closeLightbox);

    return () => window.removeEventListener("keydown", closeLightbox);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const handleMouseMove = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setMouse({ x, y });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f3eb] text-[#241817]">
      <ScrollProgress />

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav
        className="fixed left-0 right-0 top-0 z-[90] border-b border-white/10 bg-[#15080c]/75 text-white backdrop-blur-2xl"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-7 lg:px-12">
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8bd72]/30 bg-[#e8bd72]/10 text-lg text-[#e8bd72] transition duration-500 group-hover:rotate-12 group-hover:scale-110">
              ✦
            </div>

            <div>
              <div className="font-serif text-xl font-bold tracking-wide text-[#e8bd72]">
                Chebomuren
              </div>

              <div className="mt-0.5 text-[8px] uppercase tracking-[0.45em] text-white/40">
                Global
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-7 xl:flex">
            <a
              href="#about"
              className="nav-link text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#e8bd72]"
            >
              About
            </a>

            <a
              href="#sisterhood"
              className="nav-link text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#e8bd72]"
            >
              Sisterhood
            </a>

            <a
              href="/women"
              className="nav-link text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#e8bd72]"
            >
              Women
            </a>

            <a
              href="#her-story"
              className="nav-link text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#e8bd72]"
            >
              Her Story
            </a>

            <a
              href="#stories"
              className="nav-link text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#e8bd72]"
            >
              Stories
            </a>

            <a
              href="#gala"
              className="nav-link text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#e8bd72]"
            >
              Gala
            </a>

            <a
              href="/contact"
              className="nav-link text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#e8bd72]"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/nominate"
              className="hidden rounded-full border border-[#e8bd72]/40 px-5 py-2.5 text-xs font-bold text-[#e8bd72] transition hover:bg-[#e8bd72] hover:text-[#241817] sm:block"
            >
              Nominate
            </a>

            <a
              href="/join"
              className="hidden rounded-full bg-[#d5a85c] px-5 py-2.5 text-xs font-bold text-[#241817] transition hover:-translate-y-0.5 hover:bg-[#edca8c] sm:block"
            >
              Join
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#15080c] px-6 py-7 md:hidden">
            <div className="flex flex-col gap-2">
              {[
                ["About", "#about"],
                ["Global Sisterhood", "#sisterhood"],
                ["Trailblazing Women", "/women"],
                ["Her Story", "#her-story"],
                ["Stories", "#stories"],
                ["Gallery", "#gallery"],
                ["Gala", "#gala"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 text-sm text-white/75 transition hover:bg-white/5 hover:text-[#e8bd72]"
                >
                  {label}
                </a>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href="/nominate"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-[#e8bd72]/30 px-5 py-4 text-center text-sm font-bold text-[#e8bd72]"
                >
                  Nominate
                </a>

                <a
                  href="/join"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-[#d5a85c] px-5 py-4 text-center text-sm font-bold text-[#241817]"
                >
                  Join
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* =========================================================
          HERO — THE DIGITAL ENTRANCE
      ========================================================= */}

      <section
        id="home"
        onMouseMove={handleMouseMove}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#12070b] text-white"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero.jpg.webp"
          aria-hidden="true"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#12070b_0%,rgba(18,7,11,0.94)_35%,rgba(18,7,11,0.52)_70%,#12070b_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(213,168,92,0.18),transparent_30%)]" />

        <FloatingOrb
          size="520px"
          top="8%"
          left="65%"
          delay="0s"
        />

        <FloatingOrb
          size="260px"
          top="58%"
          left="80%"
          delay="-3s"
        />

        <div
          className="pointer-events-none absolute right-[8%] top-[23%] hidden h-3 w-3 rounded-full bg-[#e8bd72] shadow-[0_0_40px_15px_rgba(232,189,114,0.25)] lg:block"
          style={{
            transform: `translate(${mouse.x * 25}px, ${mouse.y * 25}px)`,
          }}
        />

        <div
          className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-14 px-6 pb-20 pt-36 sm:px-10 lg:grid-cols-[1fr_0.85fr] lg:px-16"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#e8bd72]/30 bg-white/[0.04] px-5 py-2.5 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8bd72] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e8bd72]" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#e8bd72]">
                A Global Women&apos;s Movement
              </span>
            </div>

            <h1 className="max-w-5xl font-serif text-[clamp(4rem,9vw,9.5rem)] font-bold leading-[0.8] tracking-[-0.05em]">
              Her story.
              <br />

              <span className="text-[#e8bd72]">Her voice.</span>
              <br />

              <span className="text-white/90">Her legacy.</span>
            </h1>

            <div className="mt-9 max-w-2xl">
              <p className="text-lg leading-8 text-white/55 sm:text-xl">
                Chebomuren Global is a worldwide movement celebrating,
                connecting and empowering Kalenjin women — across generations,
                professions, communities and continents.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/join"
                className="group rounded-full bg-[#d5a85c] px-7 py-4 text-sm font-bold text-[#241817] shadow-[0_20px_60px_rgba(213,168,92,0.16)] transition duration-500 hover:-translate-y-1 hover:bg-[#edca8c]"
              >
                <span>Enter the Sisterhood</span>
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/nominate"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur transition duration-500 hover:border-[#e8bd72]/50 hover:text-[#e8bd72]"
              >
                Nominate Her
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-5 text-[9px] uppercase tracking-[0.35em] text-white/30">
              <span>Unity</span>
              <span className="text-[#e8bd72]">✦</span>
              <span>Recognition</span>
              <span className="text-[#e8bd72]">✦</span>
              <span>Empowerment</span>
              <span className="text-[#e8bd72]">✦</span>
              <span>Legacy</span>
            </div>
          </div>

          {/* HERO PORTRAIT */}
          <div className="relative mx-auto hidden w-full max-w-[540px] lg:block">
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px) rotate(${mouse.x * 1.5}deg)`,
              }}
            >
              <div className="absolute -inset-8 rounded-[50%] border border-[#e8bd72]/10" />
              <div className="absolute -inset-16 rounded-[50%] border border-[#e8bd72]/5" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_8%_8%] border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/hero.jpg.webp"
                  alt="Kalenjin cultural heritage"
                  fill
                  priority
                  sizes="540px"
                  className="object-cover transition duration-[2000ms] hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#12070b] via-transparent to-black/10" />

                <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-xl">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.35em] text-[#e8bd72]">
                        Chebomuren Global
                      </p>

                      <p className="mt-2 font-serif text-2xl">
                        Celebrating women.
                      </p>

                      <p className="font-serif text-2xl text-[#e8bd72]">
                        Inspiring generations.
                      </p>
                    </div>

                    <div className="text-4xl">👑</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-14 top-16 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                One identity
              </p>
              <p className="mt-1 font-serif text-lg text-[#e8bd72]">
                Many journeys
              </p>
            </div>

            <div className="absolute -right-8 bottom-20 rounded-2xl border border-[#e8bd72]/20 bg-[#241017]/80 px-5 py-4 backdrop-blur-xl">
              <p className="text-[8px] uppercase tracking-[0.3em] text-[#e8bd72]">
                Global
              </p>
              <p className="mt-1 text-sm font-semibold">
                Without borders.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#manifesto"
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/30 transition hover:text-[#e8bd72]"
        >
          <span className="text-[8px] uppercase tracking-[0.4em]">
            Discover
          </span>

          <span className="animate-bounce text-xl">↓</span>
        </a>
      </section>

      {/* =========================================================
          MANIFESTO
      ========================================================= */}

      <section
        id="manifesto"
        className="relative overflow-hidden bg-[#f8f3eb] px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#a77a32]">
                The Chebomuren Manifesto
              </p>

              <div className="mt-7 h-px w-20 bg-[#d5a85c]" />
            </div>

            <div>
              <h2 className="font-serif text-[clamp(3rem,6vw,7rem)] leading-[0.95] tracking-[-0.035em]">
                We believe
                <br />
                <span className="text-[#6f3542]">every woman</span>
                <br />
                has something
                <br />
                <span className="text-[#a77a32]">worth celebrating.</span>
              </h2>

              <p className="mt-10 max-w-3xl text-lg leading-8 text-black/50">
                Some stories are written in boardrooms. Some are built in
                classrooms. Some are carried through families, communities,
                businesses, farms, hospitals, churches, stadiums and creative
                spaces.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/50">
                Some victories are public. Others happen quietly, through
                years of sacrifice, courage and determination.
              </p>

              <p className="mt-8 max-w-3xl font-serif text-2xl italic text-[#6f3542]">
                “Every Kalenjin woman has a story, a purpose, and the power to
                inspire change.”
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full border border-[#d5a85c]/20" />
      </section>

      {/* =========================================================
          THE THREE PROMISES
      ========================================================= */}

      <section className="bg-[#241017] px-6 py-28 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8bd72]">
              Why We Exist
            </p>

            <h2 className="mt-6 font-serif text-[clamp(3rem,6vw,7rem)] leading-[0.9]">
              Recognition.
              <br />
              Connection.
              <br />
              <span className="text-[#e8bd72]">Unity.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Recognition",
                text: "We shine a light on women whose journeys deserve to be seen, heard and celebrated.",
              },
              {
                number: "02",
                title: "Connection",
                text: "We create relationships across borders that can become opportunities, partnerships and lifelong friendships.",
              },
              {
                number: "03",
                title: "Unity",
                text: "We believe collective strength can create meaningful change that reaches beyond one woman and into generations.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group bg-[#241017] p-8 transition duration-500 hover:bg-[#32151e] sm:p-10 lg:p-12"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#e8bd72]">
                    {item.number}
                  </span>

                  <span className="text-white/20 transition duration-500 group-hover:rotate-45 group-hover:text-[#e8bd72]">
                    ✦
                  </span>
                </div>

                <h3 className="mt-16 font-serif text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL SISTERHOOD — INTERACTIVE CONSTELLATION
      ========================================================= */}

      <section
        id="sisterhood"
        className="relative overflow-hidden bg-[#0e080a] px-6 py-32 text-white sm:px-10 lg:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,168,92,0.11),transparent_32%)]" />

        <div className="relative mx-auto max-w-[1450px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8bd72]">
                The Global Sisterhood
              </p>

              <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.85]">
                One
                <br />
                sisterhood.
                <br />
                <span className="text-[#e8bd72]">Many worlds.</span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/45">
                Kalenjin women are building lives, careers, families,
                organisations and communities across continents. Our
                connection does not stop at borders.
              </p>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d5a85c] text-xl text-[#241817]">
                    {activeRegion.flag}
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                      {activeRegion.name}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {activeRegion.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedRegion(region.id)}
                    className={`rounded-full border px-4 py-2.5 text-xs transition ${
                      selectedRegion === region.id
                        ? "border-[#e8bd72] bg-[#e8bd72] text-[#241817]"
                        : "border-white/10 bg-white/[0.03] text-white/50 hover:border-[#e8bd72]/40 hover:text-white"
                    }`}
                  >
                    {region.flag} {region.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CONSTELLATION */}
            <div className="relative mx-auto aspect-square w-full max-w-[720px]">
              <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8bd72]/10" />

              <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8bd72]/10" />

              <div className="absolute left-1/2 top-1/2 h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8bd72]/15" />

              <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8bd72]/30 bg-[#241017] shadow-[0_0_80px_rgba(213,168,92,0.15)]">
                <div className="text-center">
                  <div className="text-3xl">👑</div>

                  <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.3em] text-[#e8bd72]">
                    Chebomuren
                  </p>

                  <p className="text-[7px] uppercase tracking-[0.3em] text-white/30">
                    Global
                  </p>
                </div>
              </div>

              {/* connection lines */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[75%] -translate-x-1/2 rotate-[12deg] bg-gradient-to-r from-transparent via-[#e8bd72]/20 to-transparent" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -rotate-[30deg] bg-gradient-to-r from-transparent via-[#e8bd72]/20 to-transparent" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 rotate-[72deg] bg-gradient-to-r from-transparent via-[#e8bd72]/20 to-transparent" />

              {regions.map((region) => {
                const selected = selectedRegion === region.id;

                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedRegion(region.id)}
                    aria-label={`Explore ${region.name}`}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: region.x,
                      top: region.y,
                    }}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border text-xl transition duration-500 sm:h-16 sm:w-16 ${
                        selected
                          ? "scale-125 border-[#e8bd72] bg-[#d5a85c] text-[#241817] shadow-[0_0_50px_rgba(213,168,92,0.35)]"
                          : "border-white/15 bg-white/[0.05] backdrop-blur hover:scale-110 hover:border-[#e8bd72]/50"
                      }`}
                    >
                      {region.flag}
                    </div>

                    <div
                      className={`mt-2 text-[8px] uppercase tracking-[0.2em] ${
                        selected ? "text-[#e8bd72]" : "text-white/30"
                      }`}
                    >
                      {region.name}
                    </div>
                  </button>
                );
              })}

              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute h-1 w-1 animate-pulse rounded-full bg-[#e8bd72]/40"
                  style={{
                    left: `${8 + ((index * 37) % 84)}%`,
                    top: `${7 + ((index * 53) % 84)}%`,
                    animationDelay: `${index * 0.35}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PATHS
      ========================================================= */}

      <section className="bg-[#f1e7da] px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a77a32]">
                Your Place In The Movement
              </p>

              <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9]">
                There is a place
                <br />
                <span className="text-[#6f3542]">for your story.</span>
              </h2>
            </div>

            <p className="max-w-md text-lg leading-7 text-black/45">
              Whether you lead, create, serve, study, build, nurture or
              inspire — you belong here.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => (
              <a
                key={path.number}
                href={path.href}
                className="group relative overflow-hidden rounded-[2rem] border border-[#d8c7b4] bg-white p-7 transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#a77a32]">
                    {path.number}
                  </span>

                  <span className="text-3xl transition duration-500 group-hover:scale-125">
                    {path.icon}
                  </span>
                </div>

                <h3 className="mt-16 font-serif text-3xl">
                  {path.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/45">
                  {path.text}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#6f3542]">
                  Explore
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </div>

                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#d5a85c]/10 transition duration-700 group-hover:scale-150" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR WORK
      ========================================================= */}

      <section
        id="about"
        className="bg-white px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem]">
                <Image
                  src="/images/culture-1.jpg.webp"
                  alt="Kalenjin culture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-[1200ms] hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#16090d]/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                    Our Identity
                  </p>

                  <p className="mt-2 font-serif text-3xl text-white">
                    Rooted in heritage.
                    <br />
                    <span className="text-[#e8bd72]">
                      Built for tomorrow.
                    </span>
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 hidden rounded-3xl bg-[#241017] p-7 text-white shadow-2xl sm:block">
                <div className="font-serif text-5xl text-[#e8bd72]">
                  ∞
                </div>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                  Possibilities
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a77a32]">
                What We Do
              </p>

              <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.9]">
                Turning
                <br />
                sisterhood
                <br />
                <span className="text-[#6f3542]">into action.</span>
              </h2>

              <div className="mt-10 space-y-7">
                {[
                  ["Celebrate", "We celebrate achievement, courage, leadership and contribution."],
                  ["Recognise", "We make meaningful journeys visible and give excellence a platform."],
                  ["Connect", "We create relationships that can become opportunities and partnerships."],
                  ["Empower", "We encourage confidence, growth, leadership and ambition."],
                  ["Inspire", "We share stories that can give another woman courage to keep going."],
                  ["Build", "We are building a global network designed to last beyond one generation."],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className="group flex gap-5 border-b border-black/10 pb-6"
                  >
                    <span className="pt-1 text-xs text-[#a77a32]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-serif text-2xl transition group-hover:text-[#6f3542]">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-black/45">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WOMEN — EDITORIAL SHOWCASE
      ========================================================= */}

      <section className="bg-[#eadfd2] px-6 py-32 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a77a32]">
                Women Who Inspire
              </p>

              <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.85]">
                The women
                <br />
                <span className="text-[#6f3542]">are the movement.</span>
              </h2>
            </div>

            <a
              href="/women"
              className="inline-flex w-fit rounded-full border border-[#241017] px-7 py-4 text-sm font-bold transition hover:bg-[#241017] hover:text-white"
            >
              Meet More Women →
            </a>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {women.map((woman, index) => (
              <a
                key={woman.category}
                href="/women"
                className={`group relative overflow-hidden rounded-[2rem] bg-[#241017] ${
                  index === 1 ? "lg:translate-y-12" : ""
                }`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={woman.image}
                    alt={woman.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#12070b] via-transparent to-transparent" />

                  <div className="absolute left-0 right-0 top-0 flex justify-between p-5">
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/60 backdrop-blur">
                      {woman.category}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                      ↗
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-serif text-2xl">{woman.title}</p>

                    <p className="mt-2 text-xs leading-5 text-white/50">
                      {woman.text}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          SHE IS CHEBOMUREN — CINEMATIC IDENTITY EXPERIENCE
      ========================================================= */}

      <section
        id="her-story"
        className="she-is-chebomuren relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#080406] text-white"
      >
        <Image
          src="/images/women-1.jpg.webp"
          alt="Kalenjin women"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center scale-105"
        />

        <div className="absolute inset-0 -z-10 bg-[#080406]/65" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080406_0%,rgba(8,4,6,0.82)_30%,rgba(8,4,6,0.38)_65%,#080406_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(232,189,114,0.22),transparent_28%)]" />

        <div className="absolute left-[8%] top-[15%] h-40 w-40 rounded-full border border-[#e8bd72]/10 animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute right-[8%] top-[20%] h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute bottom-[8%] left-[45%] h-72 w-72 rounded-full border border-[#e8bd72]/10" />

        {[
          ["8%", "20%", "0s"],
          ["18%", "72%", "-2s"],
          ["38%", "12%", "-4s"],
          ["67%", "18%", "-1s"],
          ["82%", "65%", "-3s"],
          ["92%", "32%", "-5s"],
          ["57%", "82%", "-2.5s"],
          ["28%", "42%", "-1.5s"],
        ].map(([top, left, delay], index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-[#e8bd72] shadow-[0_0_18px_5px_rgba(232,189,114,0.25)] animate-[float_7s_ease-in-out_infinite]"
            style={{ top, left, animationDelay: delay }}
          />
        ))}

        <div className="relative mx-auto grid w-full max-w-[1450px] items-center px-6 py-28 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-16 bg-[#e8bd72]" />
              <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-[#e8bd72]">
                The woman behind the movement
              </p>
            </div>

            <div className="space-y-1 font-serif text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.045em]">
              {[
                "A mother.",
                "A student.",
                "A founder.",
                "A leader.",
                "A creator.",
                "A daughter.",
                "A woman with a dream.",
              ].map((line, index) => (
                <p
                  key={line}
                  className={`cinematic-line ${
                    index === 6 ? "text-[#e8bd72]" : "text-white/80"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-12 max-w-xl border-l border-[#e8bd72]/40 pl-6">
              <p className="text-base leading-7 text-white/50 sm:text-lg">
                Different journeys. Different dreams. Different destinations.
                But one shared identity connects us.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/nominate"
                className="group rounded-full bg-[#d5a85c] px-7 py-4 text-sm font-bold text-[#241817] shadow-[0_20px_70px_rgba(213,168,92,0.18)] transition duration-500 hover:-translate-y-1 hover:bg-[#edca8c]"
              >
                Tell Us Her Story
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/stories"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition duration-500 hover:border-[#e8bd72]/50 hover:text-[#e8bd72]"
              >
                Explore Her Stories
              </a>
            </div>
          </div>

          <div className="relative mt-16 hidden h-[620px] lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[510px] w-[390px] overflow-hidden rounded-[48%_48%_10%_10%] border border-white/15 shadow-[0_40px_140px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/women-1.jpg.webp"
                  alt="Kalenjin woman representing the Chebomuren sisterhood"
                  fill
                  sizes="390px"
                  className="object-cover object-center transition duration-[2500ms] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-transparent to-black/10" />
              </div>

              <div className="absolute -left-4 top-16 rounded-3xl border border-white/10 bg-black/35 px-6 py-5 backdrop-blur-xl">
                <p className="text-[8px] uppercase tracking-[0.35em] text-white/35">
                  One identity
                </p>
                <p className="mt-2 font-serif text-xl text-[#e8bd72]">
                  Many journeys.
                </p>
              </div>

              <div className="absolute -right-3 bottom-20 rounded-3xl border border-[#e8bd72]/20 bg-[#241017]/80 px-6 py-5 backdrop-blur-xl">
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#e8bd72]">
                  Chebomuren
                </p>
                <p className="mt-2 font-serif text-xl">
                  Her story matters.
                </p>
              </div>

              <div className="absolute -bottom-5 left-1/2 flex h-28 w-28 -translate-x-1/2 items-center justify-center rounded-full border border-[#e8bd72]/30 bg-[#12070b]/80 text-center shadow-[0_0_70px_rgba(232,189,114,0.12)] backdrop-blur-xl">
                <div>
                  <div className="text-2xl text-[#e8bd72]">✦</div>
                  <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-white/40">
                    Global
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="mx-auto h-12 w-px bg-gradient-to-b from-[#e8bd72] to-transparent" />
          <p className="mt-3 text-[8px] uppercase tracking-[0.45em] text-white/30">
            Keep discovering
          </p>
        </div>
      </section>

      {/* =========================================================
          IMPACT / LEGACY
      ========================================================= */}

      <section className="bg-[#190a0f] px-6 py-28 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8bd72]">
                The Bigger Picture
              </p>

              <h2 className="mt-6 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9]">
                What happens
                <br />
                when women
                <br />
                <span className="text-[#e8bd72]">stand together?</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-white/45">
                Ideas become partnerships. Stories become inspiration.
                Recognition becomes confidence. Connection becomes opportunity.
                And one generation can open doors for the next.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["12", "Gala Categories", "Honouring excellence across diverse fields."],
              ["1", "Shared Purpose", "One sisterhood connected by identity."],
              ["2026", "A New Chapter", "Building the next chapter together."],
              ["∞", "Possibilities", "Because the future has no ceiling."],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#e8bd72]/30"
              >
                <div className="font-serif text-5xl text-[#e8bd72]">
                  {number}
                </div>

                <h3 className="mt-7 font-serif text-2xl">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}

      <section
        id="gallery"
        className="bg-[#f8f3eb] px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a77a32]">
                The Visual Archive
              </p>

              <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.85]">
                Moments
                <br />
                that <span className="text-[#6f3542]">matter.</span>
              </h2>
            </div>

            <p className="text-lg leading-7 text-black/45">
              Heritage. Celebration. Community. Connection. Every image
              becomes part of the story we are building together.
            </p>
          </div>

          <div className="mt-16 grid auto-rows-[210px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:auto-rows-[240px]">
            {gallery.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden rounded-[1.75rem] text-left ${
                  index === 0
                    ? "sm:col-span-2 sm:row-span-2"
                    : index === 3
                      ? "md:row-span-2"
                      : ""
                }`}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-[#e8bd72]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/20 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  ↗
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CINEMATIC STORY
      ========================================================= */}

      <section
        id="stories"
        className="relative overflow-hidden bg-[#10070a] px-6 py-32 text-white sm:px-10 lg:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(111,53,66,0.22),transparent_40%)]" />

        <div className="relative mx-auto max-w-[1450px]">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8bd72]">
                Her Story
              </p>

              <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.85]">
                Powerful
                <br />
                women.
                <br />
                <span className="text-[#e8bd72]">Powerful stories.</span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/45">
                Every woman carries a story of courage, sacrifice,
                achievement and hope. We want those stories to be seen, heard
                and remembered.
              </p>

              <a
                href="/stories"
                className="mt-9 inline-flex rounded-full border border-white/15 px-7 py-4 text-sm font-bold transition hover:border-[#e8bd72] hover:text-[#e8bd72]"
              >
                Enter Her Stories →
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-2xl">
              <video
                className="aspect-video w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/images/hero.jpg.webp"
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />

                Your browser does not support the video element.
              </video>

              <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[8px] uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl">
                Chebomuren Global
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALA — LUXURY EVENT EXPERIENCE
      ========================================================= */}

      <section
        id="gala"
        className="relative overflow-hidden bg-[#d5a85c] px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border-[80px] border-white/10" />

        <div className="relative mx-auto max-w-[1450px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4d2924]">
                The Signature Event
              </p>

              <h2 className="mt-7 font-serif text-[clamp(4rem,7vw,8.5rem)] leading-[0.8] tracking-[-0.04em] text-[#241817]">
                Honouring
                <br />
                the Kalenjin
                <br />
                Women Gala.
              </h2>

              <p className="mt-9 max-w-xl text-lg leading-8 text-[#3d2822]/65">
                An unforgettable celebration honouring Kalenjin women whose
                courage, excellence, leadership and service are creating
                impact.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-[#241017] px-6 py-5 text-white shadow-xl">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-[#e8bd72]">
                    Date
                  </p>

                  <p className="mt-2 font-serif text-2xl">
                    26 December 2026
                  </p>
                </div>

                <div className="rounded-2xl border border-[#241017]/20 bg-white/30 px-6 py-5">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-[#4d2924]">
                    Theme
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#241817]">
                    Honouring Our Women.
                  </p>
                </div>
              </div>

              <a
                href="/gala"
                className="mt-8 inline-flex rounded-full bg-[#241017] px-8 py-5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#4b202c]"
              >
                Discover the Gala →
              </a>
            </div>

            <div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {[
                  ["Days", timeLeft.days],
                  ["Hours", timeLeft.hours],
                  ["Minutes", timeLeft.minutes],
                  ["Seconds", timeLeft.seconds],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-white/65 p-4 text-center backdrop-blur sm:p-6"
                  >
                    <div className="font-serif text-3xl font-bold text-[#241817] sm:text-5xl">
                      {String(value).padStart(2, "0")}
                    </div>

                    <div className="mt-2 text-[7px] uppercase tracking-[0.2em] text-black/40 sm:text-[9px]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/gala-2.jpg.webp"
                  alt="Kalenjin Women Gala"
                  width={1000}
                  height={700}
                  className="h-[360px] w-full object-cover transition duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#241017]/70 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-[#e8bd72]">
                    2026
                  </p>

                  <p className="mt-2 font-serif text-3xl text-white">
                    Honouring Our Women.
                  </p>

                  <p className="font-serif text-3xl text-[#e8bd72]">
                    Inspiring Our Future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#4d2924]">
              Recognition Categories
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {galaCategories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[#4d2924]/20 bg-white/25 px-4 py-2.5 text-xs font-medium text-[#241817]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NOMINATE
      ========================================================= */}

      <section className="bg-[#f8f3eb] px-6 py-32 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#a77a32]">
              Recognition Starts With You
            </p>

            <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.85]">
              Know a woman
              <br />
              who deserves
              <br />
              <span className="text-[#6f3542]">to be seen?</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/50">
              Nominate a Kalenjin woman whose leadership, work, courage,
              service, achievement or story deserves recognition.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/nominate"
                className="rounded-full bg-[#241017] px-8 py-5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#4b202c]"
              >
                Nominate Her →
              </a>

              <a
                href="/women"
                className="rounded-full border border-[#241017] px-8 py-5 text-sm font-bold transition hover:bg-[#241017] hover:text-white"
              >
                See the Women
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] bg-[#241017]">
            <Image
              src="/images/woman-leader.jpg.webp"
              alt="Woman leader"
              width={900}
              height={1100}
              className="h-[580px] w-full object-cover opacity-90 transition duration-[1200ms] hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#12070b] via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-black/20 p-7 text-white backdrop-blur-xl">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                Her impact matters
              </p>

              <p className="mt-3 font-serif text-3xl">
                Celebrate the woman who inspires you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOIN — BIG EMOTIONAL CTA
      ========================================================= */}

      <section
        id="join"
        className="relative overflow-hidden bg-[#241017] px-6 py-36 text-white sm:px-10 lg:px-16"
      >
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8bd72]/5" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8bd72]/5" />

        <div className="relative mx-auto max-w-[1200px] text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#e8bd72]">
            You Belong Here
          </p>

          <h2 className="mt-7 font-serif text-[clamp(4.5rem,9vw,10rem)] leading-[0.78] tracking-[-0.05em]">
            Your story
            <br />
            <span className="text-[#e8bd72]">belongs here.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/45">
            Join Kalenjin women around the world. Connect. Collaborate.
            Learn. Inspire. Build something that can last beyond us.
          </p>

          <div className="mt-11 flex flex-wrap justify-center gap-3">
            <a
              href="/join"
              className="rounded-full bg-[#d5a85c] px-9 py-5 text-sm font-bold text-[#241817] transition hover:-translate-y-1 hover:bg-[#edca8c]"
            >
              Join Chebomuren Global →
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/15 px-9 py-5 text-sm font-bold text-white transition hover:border-[#e8bd72] hover:text-[#e8bd72]"
            >
              Partner With Us
            </a>
          </div>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {["Connect", "Collaborate", "Learn", "Inspire"].map(
              (item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="font-serif text-3xl text-[#e8bd72]">
                    0{index + 1}
                  </div>

                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/45">
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}

      <section className="bg-[#e8bd72] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4d2924]">
            Stay Connected
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
            Stories. Opportunities.
            <br />
            Sisterhood.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-black/50">
            Stay connected with Chebomuren Global for women&apos;s stories,
            events, opportunities and future initiatives.
          </p>

          {newsletterSent ? (
            <div className="mx-auto mt-9 max-w-xl rounded-2xl bg-[#241017] px-6 py-5 text-white">
              <div className="text-[#e8bd72]">✓</div>

              <p className="mt-2 font-semibold">
                You&apos;re connected.
              </p>

              <p className="mt-1 text-sm text-white/45">
                Thank you for joining the Chebomuren Global conversation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();

                if (!newsletterEmail.trim()) return;

                setNewsletterSent(true);
              }}
              className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                required
                value={newsletterEmail}
                onChange={(event) =>
                  setNewsletterEmail(event.target.value)
                }
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-full border-0 bg-white px-6 py-4 text-[#241817] outline-none ring-0 placeholder:text-black/30 focus:ring-2 focus:ring-[#241017]/20"
              />

              <button
                type="submit"
                className="rounded-full bg-[#241017] px-8 py-4 font-bold text-white transition hover:scale-105"
              >
                Stay Connected →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================
          FINAL MESSAGE
      ========================================================= */}

      <section className="relative overflow-hidden bg-white px-6 py-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f1e2ce] text-2xl text-[#a77a32]">
            ✦
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#a77a32]">
            A Message To Every Woman
          </p>

          <h2 className="mt-7 font-serif text-[clamp(4rem,8vw,9rem)] leading-[0.8]">
            You are
            <br />
            <span className="text-[#6f3542]">worthy.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-black/50">
            Your voice matters. Your dreams matter. Your journey matters.
            Whether your achievements are recognised publicly or built
            quietly through years of courage, sacrifice and determination,
            your contribution has value.
          </p>

          <p className="mx-auto mt-10 max-w-3xl font-serif text-2xl italic text-[#6f3542]">
            “Together, we celebrate our past, strengthen our present, and
            inspire our future.”
          </p>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section className="bg-[#eadfd2] px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b6326]">
                Get Involved
              </p>

              <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7rem)] leading-[0.85]">
                Let&apos;s create
                <br />
                something
                <br />
                <span className="text-[#6f3542]">meaningful.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/45">
                There are many ways to support Chebomuren Global — join the
                network, nominate a woman, share your story, volunteer,
                partner or help build opportunities for future generations.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex rounded-full bg-[#241017] px-8 py-5 text-sm font-bold text-white transition hover:-translate-y-1"
              >
                Contact Chebomuren Global →
              </a>
            </div>

            <div className="space-y-3">
              {[
                ["🤝", "Partner With Us", "/contact"],
                ["🌱", "Volunteer With Us", "/contact"],
                ["🏆", "Attend the Gala", "/gala"],
                ["🎙️", "Share Your Story", "/stories"],
                ["👑", "Nominate a Woman", "/nominate"],
                ["🌍", "Join the Movement", "/join"],
              ].map(([icon, title, href]) => (
                <a
                  key={title}
                  href={href}
                  className="group flex items-center justify-between rounded-2xl bg-white p-5 transition duration-300 hover:translate-x-2 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{icon}</span>

                    <span className="font-semibold">{title}</span>
                  </div>

                  <span className="text-xl text-[#a77a32] transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#10070a] px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.6fr_0.6fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e8bd72]/30 bg-[#e8bd72]/10 text-xl text-[#e8bd72]">
                  ✦
                </div>

                <div>
                  <div className="font-serif text-2xl text-[#e8bd72]">
                    Chebomuren
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.4em] text-white/30">
                    Global
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/35">
                Celebrating Kalenjin Women. Inspiring Our Future.
              </p>

              <p className="mt-3 max-w-lg text-sm leading-7 text-white/25">
                A global sisterhood celebrating achievement, creating
                connection, encouraging empowerment and building legacy.
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                Explore
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/35">
                <a className="block hover:text-white" href="/about">
                  About
                </a>

                <a className="block hover:text-white" href="/women">
                  Women
                </a>

                <a className="block hover:text-white" href="/stories">
                  Stories
                </a>

                <a className="block hover:text-white" href="/gala">
                  Gala
                </a>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                Participate
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/35">
                <a className="block hover:text-white" href="/join">
                  Join
                </a>

                <a className="block hover:text-white" href="/nominate">
                  Nominate
                </a>

                <a className="block hover:text-white" href="/contact">
                  Partner
                </a>

                <a className="block hover:text-white" href="/contact">
                  Volunteer
                </a>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                Contact
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/35">
                <p>Email coming soon</p>

                <p>Global</p>

                <a
                  href="/contact"
                  className="inline-block text-[#e8bd72] hover:text-white"
                >
                  Contact Us →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-[10px] uppercase tracking-[0.15em] text-white/20 sm:flex-row">
            <span>© 2026 Chebomuren Global. All rights reserved.</span>

            <span>Celebrating women. Inspiring our future.</span>
          </div>
        </div>
      </footer>

      {/* =========================================================
          FLOATING ACTION
      ========================================================= */}

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="/nominate"
          aria-label="Nominate a woman"
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#241017]/10 bg-white text-lg shadow-2xl transition duration-300 hover:scale-110"
        >
          <span className="transition group-hover:scale-125">👑</span>
        </a>

        <a
          href="/contact"
          aria-label="Contact Chebomuren Global"
          className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#d5a85c] text-xl text-[#241817] shadow-2xl transition duration-300 hover:scale-110 hover:bg-[#edca8c]"
        >
          <span className="transition group-hover:rotate-12">✦</span>
        </a>
      </div>

      {/* =========================================================
          IMAGE LIGHTBOX
      ========================================================= */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#080406]/95 p-5 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-white/20"
            aria-label="Close image viewer"
          >
            ✕
          </button>

          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[68vh] w-full overflow-hidden rounded-[2rem]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-5 text-center text-white">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 font-serif text-3xl">
                {selectedImage.title}
              </h3>

              <p className="mt-2 text-xs text-white/30">
                Press ESC or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          INLINE ANIMATION CSS
      ========================================================= */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        ::selection {
          background: #d5a85c;
          color: #241817;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        .she-is-chebomuren {
          isolation: isolate;
        }

        .cinematic-line {
          opacity: 0;
          transform: translateY(24px);
          animation: cinematicReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .cinematic-line:nth-child(1) { animation-delay: 120ms; }
        .cinematic-line:nth-child(2) { animation-delay: 220ms; }
        .cinematic-line:nth-child(3) { animation-delay: 320ms; }
        .cinematic-line:nth-child(4) { animation-delay: 420ms; }
        .cinematic-line:nth-child(5) { animation-delay: 520ms; }
        .cinematic-line:nth-child(6) { animation-delay: 620ms; }
        .cinematic-line:nth-child(7) { animation-delay: 760ms; }

        @keyframes cinematicReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        a:focus-visible,
        button:focus-visible,
        input:focus-visible {
          outline: 2px solid #e8bd72;
          outline-offset: 4px;
        }
      `}</style>
    </main>
  );
}