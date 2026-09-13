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


const storyScenes = [
  {
    image: "/images/women-1.jpg.webp",
    kicker: "THE WOMAN",
    title: "She carries more than a name.",
    text: "She carries the courage of those before her and the possibility of those who come after.",
    quote: "Her journey is part of our story.",
  },
  {
    image: "/images/leader.jpg.webp",
    kicker: "THE LEADER",
    title: "She turns courage into direction.",
    text: "In boardrooms, classrooms, communities and homes, she creates space for others to rise.",
    quote: "When she rises, possibility rises with her.",
  },
  {
    image: "/images/woman-leader.jpg.webp",
    kicker: "THE VISIONARY",
    title: "She sees beyond the moment.",
    text: "Her dreams are not only about where she can go, but about the doors she can open for another woman.",
    quote: "A dream becomes a legacy when it makes room for others.",
  },
  {
    image: "/images/community-1.jpg.webp",
    kicker: "THE SISTER",
    title: "She does not walk alone.",
    text: "Connection turns individual strength into collective power — across families, communities and continents.",
    quote: "Together, we become more than the sum of our journeys.",
  },
  {
    image: "/images/culture-2.jpg.webp",
    kicker: "THE LEGACY",
    title: "She carries tomorrow with her.",
    text: "Culture, wisdom and ambition move forward through women who choose to build something that lasts.",
    quote: "What she builds today can inspire generations tomorrow.",
  },
];


const legacyWomen = [
  {
    name: "The Woman Who Leads",
    field: "Leadership",
    image: "/images/leader.jpg.webp",
    statement: "She creates direction where others see uncertainty.",
    impact: "She leads with courage, purpose and a willingness to make room for others.",
  },
  {
    name: "The Woman Who Builds",
    field: "Community",
    image: "/images/community-1.jpg.webp",
    statement: "She turns connection into something that lasts.",
    impact: "She strengthens families, communities and relationships through service and compassion.",
  },
  {
    name: "The Woman Who Inspires",
    field: "Excellence",
    image: "/images/woman-leader.jpg.webp",
    statement: "Her journey becomes permission for another woman to dream bigger.",
    impact: "She transforms personal achievement into encouragement for the generation coming behind her.",
  },
  {
    name: "The Woman Who Carries Culture",
    field: "Heritage",
    image: "/images/culture-2.jpg.webp",
    statement: "She carries yesterday into tomorrow without losing herself.",
    impact: "She keeps identity, wisdom and heritage alive while creating space for a changing future.",
  },
];

const lightChoices = [
  { icon: "💡", title: "Knowledge", text: "I will pass knowledge forward." },
  { icon: "❤️", title: "Courage", text: "I will remind another woman she can." },
  { icon: "🌱", title: "Opportunity", text: "I will open a door for someone else." },
  { icon: "👑", title: "Leadership", text: "I will lead with purpose and integrity." },
  { icon: "🤝", title: "Community", text: "I will strengthen the women around me." },
  { icon: "✨", title: "Inspiration", text: "I will leave hope wherever I go." },
];

const voiceLines = [
  {
    title: "Her voice.",
    text: "Every Kalenjin woman has a story, a purpose, and the power to inspire change.",
  },
  {
    title: "Her story.",
    text: "Different journeys can still become one powerful story of courage, connection and possibility.",
  },
  {
    title: "Her future.",
    text: "When women connect, achievement becomes opportunity and legacy becomes something we build together.",
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
  const [storyIndex, setStoryIndex] = useState(0);
  const [storyPlaying, setStoryPlaying] = useState(true);
  const [legacyIndex, setLegacyIndex] = useState(0);
  const [lightChoice, setLightChoice] = useState<number | null>(null);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [voicePlaying, setVoicePlaying] = useState(false);
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

  useEffect(() => {
    if (!storyPlaying) return;

    const storyTimer = window.setInterval(() => {
      setStoryIndex((current) => (current + 1) % storyScenes.length);
    }, 5600);

    return () => window.clearInterval(storyTimer);
  }, [storyPlaying]);

  useEffect(() => {
    if (!voicePlaying || typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(voiceLines[voiceIndex].text);
    utterance.rate = 0.88;
    utterance.pitch = 1.02;
    utterance.volume = 1;
    utterance.onend = () => {
      setVoiceIndex((current) => (current + 1) % voiceLines.length);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [voicePlaying, voiceIndex]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleVoiceToggle = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (voicePlaying) {
        window.speechSynthesis.cancel();
        setVoicePlaying(false);
      } else {
        setVoicePlaying(true);
      }
    }
  };

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
              href="#legacy-wall"
              className="nav-link text-xs uppercase tracking-[0.18em] text-white/60 transition hover:text-[#e8bd72]"
            >
              Legacy
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
                ["Legacy Wall", "#legacy-wall"],
                ["Hear Her Voice", "#hear-her-voice"],
                ["Leave Your Light", "#leave-your-light"],
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

            {/* GLOBAL NETWORK GLOBE */}
            <div className="relative mx-auto aspect-square w-full max-w-[720px]">
              <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(232,189,114,0.22),transparent_25%),radial-gradient(circle_at_center,#32151e_0%,#16090d_52%,#080406_100%)] shadow-[0_0_120px_rgba(213,168,92,0.12)]" />

              <div className="global-globe absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8bd72]/25" />
              <div className="global-globe global-globe-reverse absolute left-1/2 top-1/2 aspect-[0.48] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#e8bd72]/15" />
              <div className="global-globe global-globe-tilt absolute left-1/2 top-1/2 aspect-[0.48] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-[72%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#e8bd72]/20 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[72%] w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-gradient-to-b from-transparent via-[#e8bd72]/15 to-transparent" />

              <svg
                className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {regions.map((region, index) => (
                  <line
                    key={region.id}
                    x1="50"
                    y1="50"
                    x2={region.x.replace("%", "")}
                    y2={region.y.replace("%", "")}
                    stroke="#e8bd72"
                    strokeOpacity={selectedRegion === region.id ? "0.65" : "0.14"}
                    strokeWidth={selectedRegion === region.id ? "0.35" : "0.18"}
                    strokeDasharray="1.2 1.2"
                    className={selectedRegion === region.id ? "network-line-active" : ""}
                    style={{ animationDelay: `${index * 0.4}s` }}
                  />
                ))}
              </svg>

              <div className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8bd72]/40 bg-[#241017]/90 shadow-[0_0_80px_rgba(213,168,92,0.22)] backdrop-blur-xl">
                <div className="absolute inset-[-12px] rounded-full border border-[#e8bd72]/15 animate-[pulse_3s_ease-in-out_infinite]" />
                <div className="text-center">
                  <div className="text-3xl">👑</div>
                  <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.3em] text-[#e8bd72]">
                    Chebomuren
                  </p>
                  <p className="text-[7px] uppercase tracking-[0.3em] text-white/30">
                    One sisterhood
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-[8%] z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.28em] text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e8bd72] shadow-[0_0_12px_3px_rgba(232,189,114,0.45)]" />
                  Global signal live
                </span>
              </div>

              {regions.map((region) => {
                const selected = selectedRegion === region.id;

                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedRegion(region.id)}
                    aria-label={`Explore ${region.name}`}
                    className="absolute z-40 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: region.x, top: region.y }}
                  >
                    <span
                      className={`absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e8bd72]/30 ${selected ? "animate-ping" : "opacity-0"}`}
                    />
                    <span
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full border text-xl transition duration-500 sm:h-16 sm:w-16 ${
                        selected
                          ? "scale-125 border-[#e8bd72] bg-[#d5a85c] text-[#241817] shadow-[0_0_55px_rgba(213,168,92,0.4)]"
                          : "border-white/15 bg-white/[0.05] backdrop-blur hover:scale-110 hover:border-[#e8bd72]/50"
                      }`}
                    >
                      {region.flag}
                    </span>
                    <span
                      className={`mt-2 block text-[8px] uppercase tracking-[0.2em] ${
                        selected ? "text-[#e8bd72]" : "text-white/30"
                      }`}
                    >
                      {region.name}
                    </span>
                  </button>
                );
              })}

              {Array.from({ length: 28 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute h-1 w-1 rounded-full bg-[#e8bd72]/40 animate-[twinkle_3.5s_ease-in-out_infinite]"
                  style={{
                    left: `${6 + ((index * 29) % 88)}%`,
                    top: `${5 + ((index * 47) % 88)}%`,
                    animationDelay: `${index * 0.18}s`,
                  }}
                />
              ))}

              <div className="absolute bottom-[4%] left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/35 px-5 py-2.5 text-[8px] uppercase tracking-[0.28em] text-white/35 backdrop-blur-xl">
                <span className="text-[#e8bd72]">{regions.length}</span> connected regions · one identity
              </div>
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
          HER STORY — CINEMATIC STORY REEL
      ========================================================= */}

      <section
        id="her-story"
        className="her-story-reel relative overflow-hidden bg-[#080406] px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-36"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(232,189,114,0.14),transparent_25%),radial-gradient(circle_at_15%_85%,rgba(111,53,66,0.18),transparent_30%)]" />
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full border border-[#e8bd72]/10 animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1450px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-14 bg-[#e8bd72]" />
                <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-[#e8bd72]">
                  Her Story · Her Voice · Her Legacy
                </p>
              </div>

              <h2 className="max-w-5xl font-serif text-[clamp(3.5rem,7vw,8rem)] leading-[0.82] tracking-[-0.045em]">
                Every woman
                <br />
                <span className="text-[#e8bd72]">is a story.</span>
              </h2>
            </div>

            <div className="max-w-sm lg:pb-2">
              <p className="text-sm leading-7 text-white/40">
                Press play. Explore the many faces of courage, leadership,
                connection and legacy that make the sisterhood extraordinary.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="relative min-h-[560px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#14090d]">
              <div className="absolute inset-0">
                <Image
                  key={storyScenes[storyIndex].image}
                  src={storyScenes[storyIndex].image}
                  alt={storyScenes[storyIndex].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="story-image object-cover object-center"
                  priority={storyIndex === 0}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-[#080406]/15 to-black/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_15%,rgba(8,4,6,0.32)_75%)]" />

              <div className="absolute left-7 top-7 flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-2.5 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e8bd72]" />
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/55">
                  Story {String(storyIndex + 1).padStart(2, "0")} / {String(storyScenes.length).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-6">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.35em] text-[#e8bd72]">
                    {storyScenes[storyIndex].kicker}
                  </p>
                  <p className="mt-2 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
                    {storyScenes[storyIndex].quote}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setStoryPlaying((playing) => !playing)}
                  className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/35 text-[#e8bd72] backdrop-blur-xl transition hover:scale-110 hover:border-[#e8bd72]/50 sm:flex"
                  aria-label={storyPlaying ? "Pause story reel" : "Play story reel"}
                >
                  {storyPlaying ? "Ⅱ" : "▶"}
                </button>
              </div>
            </div>

            <div className="flex flex-col rounded-[3rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-9 lg:p-11">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#e8bd72]">
                  {storyScenes[storyIndex].kicker}
                </span>
                <span className="font-serif text-2xl text-white/20">
                  {String(storyIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-12 flex-1">
                <h3 className="max-w-xl font-serif text-[clamp(2.7rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
                  {storyScenes[storyIndex].title}
                </h3>

                <p className="mt-8 max-w-lg text-base leading-8 text-white/45 sm:text-lg">
                  {storyScenes[storyIndex].text}
                </p>

                <div className="mt-10 border-l border-[#e8bd72]/35 pl-5">
                  <p className="font-serif text-xl text-white/75">
                    “{storyScenes[storyIndex].quote}”
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <div className="mb-5 flex items-center justify-between text-[8px] uppercase tracking-[0.28em] text-white/25">
                  <span>Explore her dimensions</span>
                  <button
                    type="button"
                    onClick={() => setStoryPlaying((playing) => !playing)}
                    className="text-[#e8bd72] transition hover:text-white sm:hidden"
                  >
                    {storyPlaying ? "Pause" : "Play"}
                  </button>
                </div>

                <div className="flex gap-2">
                  {storyScenes.map((scene, index) => (
                    <button
                      key={scene.kicker}
                      type="button"
                      onClick={() => {
                        setStoryIndex(index);
                        setStoryPlaying(false);
                      }}
                      className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                      aria-label={`Show ${scene.kicker} story`}
                    >
                      <span
                        className={`absolute inset-y-0 left-0 rounded-full bg-[#e8bd72] transition-all duration-500 ${
                          index === storyIndex ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/nominate"
                    className="group rounded-full bg-[#d5a85c] px-7 py-4 text-sm font-bold text-[#241817] shadow-[0_20px_70px_rgba(213,168,92,0.16)] transition hover:-translate-y-1 hover:bg-[#edca8c]"
                  >
                    Tell Her Story
                    <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="/stories"
                    className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white/75 transition hover:border-[#e8bd72]/50 hover:text-[#e8bd72]"
                  >
                    Explore Stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEGACY WALL — INTERACTIVE RECOGNITION
      ========================================================= */}

      <section
        id="legacy-wall"
        className="relative overflow-hidden bg-[#12070b] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,189,114,0.12),transparent_26%),radial-gradient(circle_at_80%_80%,rgba(111,53,66,0.2),transparent_30%)]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full border border-[#e8bd72]/10" />

        <div className="relative mx-auto max-w-[1450px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8bd72]">
                The Legacy Wall
              </p>
              <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7.5rem)] leading-[0.82] tracking-[-0.045em]">
                She changed
                <br />
                <span className="text-[#e8bd72]">something.</span>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/45">
                Every achievement creates a ripple. Every woman who opens a door makes the path wider for the woman behind her.
              </p>
            </div>

            <div className="flex items-center justify-between gap-6 lg:pb-2">
              <p className="max-w-md text-sm leading-7 text-white/35">
                Explore the kinds of women we celebrate — leaders, builders, visionaries and culture carriers.
              </p>
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#e8bd72]/30 bg-[#e8bd72]/10 text-[#e8bd72] sm:flex">
                ✦
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {legacyWomen.map((woman, index) => (
                <button
                  key={woman.name}
                  type="button"
                  onClick={() => setLegacyIndex(index)}
                  className={`group relative overflow-hidden rounded-[1.8rem] border text-left transition duration-700 ${
                    legacyIndex === index
                      ? "border-[#e8bd72]/70 bg-[#e8bd72]/10"
                      : "border-white/10 bg-white/[0.03] hover:border-[#e8bd72]/30"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={woman.image}
                      alt={woman.name}
                      fill
                      sizes="(max-width: 1024px) 25vw, 30vw"
                      className={`object-cover transition duration-1000 ${legacyIndex === index ? "scale-110" : "group-hover:scale-105"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[8px] uppercase tracking-[0.25em] text-[#e8bd72]">{woman.field}</p>
                      <p className="mt-1 font-serif text-lg text-white">{woman.name}</p>
                    </div>
                    {legacyIndex === index && (
                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#e8bd72] text-xs text-[#241817]">
                        ✦
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="relative min-h-[540px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#1a0a10]">
              <Image
                key={legacyWomen[legacyIndex].image}
                src={legacyWomen[legacyIndex].image}
                alt={legacyWomen[legacyIndex].name}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="legacy-feature-image object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-[#080406]/35 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(232,189,114,0.16),transparent_30%)]" />

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[8px] uppercase tracking-[0.3em] text-white/55 backdrop-blur-xl">
                  {String(legacyIndex + 1).padStart(2, "0")} / {String(legacyWomen.length).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-[#e8bd72]/30 bg-[#e8bd72]/10 px-4 py-2 text-[8px] uppercase tracking-[0.25em] text-[#e8bd72] backdrop-blur-xl">
                  {legacyWomen[legacyIndex].field}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#e8bd72]">{legacyWomen[legacyIndex].field}</p>
                <h3 className="mt-4 max-w-3xl font-serif text-[clamp(2.8rem,5vw,5.8rem)] leading-[0.86]">
                  {legacyWomen[legacyIndex].statement}
                </h3>
                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                  {legacyWomen[legacyIndex].impact}
                </p>
                <a
                  href="/nominate"
                  className="mt-8 inline-flex rounded-full bg-[#d5a85c] px-6 py-4 text-sm font-bold text-[#241817] transition hover:-translate-y-1 hover:bg-[#edca8c]"
                >
                  Put Her On The Wall →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HEAR HER VOICE — BROWSER VOICE EXPERIENCE
      ========================================================= */}

      <section
        id="hear-her-voice"
        className="relative overflow-hidden bg-[#eadfd2] px-6 py-32 sm:px-10 lg:px-16 lg:py-40"
      >
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_15%_25%,rgba(213,168,92,0.24),transparent_25%),radial-gradient(circle_at_85%_75%,rgba(111,53,66,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1450px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b6326]">Hear Her Voice</p>
              <h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,7.5rem)] leading-[0.82] tracking-[-0.045em]">
                A story is
                <br />
                <span className="text-[#6f3542]">meant to be heard.</span>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-black/45">
                Press play and let the browser speak a rotating Chebomuren message. No extra app, no new page — just her voice carrying the movement forward.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {voiceLines.map((line, index) => (
                  <button
                    key={line.title}
                    type="button"
                    onClick={() => {
                      if (voicePlaying && typeof window !== "undefined" && "speechSynthesis" in window) {
                        window.speechSynthesis.cancel();
                      }
                      setVoiceIndex(index);
                      setVoicePlaying(true);
                    }}
                    className={`rounded-full border px-4 py-2.5 text-xs transition ${
                      voiceIndex === index
                        ? "border-[#6f3542] bg-[#6f3542] text-white"
                        : "border-black/10 bg-white/40 text-black/50 hover:border-[#6f3542]/40 hover:text-[#6f3542]"
                    }`}
                  >
                    {line.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-[#241017] p-7 text-white shadow-[0_35px_100px_rgba(36,16,23,0.16)] sm:p-10 lg:p-14">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#e8bd72]/15" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/5" />

              <div className="relative">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-[#e8bd72]">Chebomuren Audio Letter</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${voicePlaying ? "animate-pulse bg-[#e8bd72]" : "bg-white/20"}`} />
                </div>

                <div className="mt-14 grid grid-cols-18 items-end gap-1.5 sm:gap-2" aria-hidden="true">
                  {Array.from({ length: 36 }).map((_, index) => (
                    <span
                      key={index}
                      className={`voice-bar ${voicePlaying ? "voice-bar-active" : ""}`}
                      style={{ animationDelay: `${index * 55}ms`, height: `${18 + ((index * 17) % 62)}px` }}
                    />
                  ))}
                </div>

                <p className="mt-12 text-[9px] uppercase tracking-[0.3em] text-white/30">{voiceLines[voiceIndex].title}</p>
                <h3 className="mt-4 max-w-3xl font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.9]">
                  {voiceLines[voiceIndex].text}
                </h3>

                <button
                  type="button"
                  onClick={handleVoiceToggle}
                  className="mt-10 flex items-center gap-4 rounded-full bg-[#d5a85c] px-7 py-4 font-bold text-[#241817] transition hover:-translate-y-1 hover:bg-[#edca8c]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#241817]/10">
                    {voicePlaying ? "❚❚" : "▶"}
                  </span>
                  {voicePlaying ? "Pause Her Voice" : "Hear Her Voice"}
                </button>

                <p className="mt-5 max-w-lg text-[10px] leading-5 text-white/25">
                  Uses your device&apos;s built-in browser voice. If speech synthesis is unavailable, the visual experience still works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEAVE YOUR LIGHT — PARTICIPATION EXPERIENCE
      ========================================================= */}

      <section
        id="leave-your-light"
        className="relative overflow-hidden bg-[#080406] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,189,114,0.14),transparent_30%)]" />
        <div className="absolute inset-0 light-grid opacity-40" />

        <div className="relative mx-auto max-w-[1450px] text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#e8bd72]">Leave Your Light</p>
          <h2 className="mx-auto mt-6 max-w-6xl font-serif text-[clamp(3.5rem,7vw,8rem)] leading-[0.82] tracking-[-0.05em]">
            What will you leave
            <br />
            <span className="text-[#e8bd72]">for the next woman?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/40">
            Choose the light you want to carry. Your choice becomes part of this living digital sisterhood.
          </p>

          <div className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lightChoices.map((choice, index) => (
              <button
                key={choice.title}
                type="button"
                onClick={() => setLightChoice(index)}
                className={`group relative overflow-hidden rounded-[1.8rem] border p-6 text-left transition duration-500 ${
                  lightChoice === index
                    ? "border-[#e8bd72]/80 bg-[#e8bd72]/10 shadow-[0_0_60px_rgba(232,189,114,0.12)]"
                    : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-[#e8bd72]/35 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl transition duration-500 group-hover:scale-125">{choice.icon}</span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl">{choice.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/35">{choice.text}</p>
              </button>
            ))}
          </div>

          <div className="relative mx-auto mt-16 flex min-h-[360px] max-w-5xl items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-[#11070b]">
            {Array.from({ length: 42 }).map((_, index) => {
              const angle = (index / 42) * Math.PI * 2;
              const radius = 90 + ((index * 37) % 150);
              const left = 50 + Math.cos(angle) * (radius / 4.5);
              const top = 50 + Math.sin(angle) * (radius / 4.5);
              return (
                <span
                  key={index}
                  className={`light-particle absolute h-1.5 w-1.5 rounded-full ${lightChoice !== null && index % 3 === lightChoice % 3 ? "light-particle-bright" : ""}`}
                  style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${index * 90}ms` }}
                />
              );
            })}

            {lightChoice !== null && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="light-burst absolute h-40 w-40 rounded-full border border-[#e8bd72]/60" />
                <div className="light-burst absolute h-56 w-56 rounded-full border border-[#e8bd72]/25" style={{ animationDelay: "180ms" }} />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#e8bd72] text-4xl text-[#241817] shadow-[0_0_100px_rgba(232,189,114,0.6)]">
                  {lightChoices[lightChoice].icon}
                </div>
              </div>
            )}

            <div className="relative z-10 max-w-xl px-6">
              {lightChoice === null ? (
                <>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#e8bd72]/20 bg-[#e8bd72]/5 text-3xl text-[#e8bd72] shadow-[0_0_80px_rgba(232,189,114,0.08)]">
                    ✦
                  </div>
                  <p className="mt-7 font-serif text-3xl sm:text-4xl">Choose your light.</p>
                  <p className="mt-3 text-sm leading-6 text-white/30">Then watch it join the sisterhood.</p>
                </>
              ) : (
                <>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#e8bd72]">Your light is part of the movement</p>
                  <p className="mt-5 font-serif text-4xl sm:text-5xl">{lightChoices[lightChoice].title}.</p>
                  <p className="mt-4 text-sm leading-7 text-white/40">{lightChoices[lightChoice].text} Together, we leave something brighter for the woman who comes next.</p>
                  <button
                    type="button"
                    onClick={() => setLightChoice(null)}
                    className="mt-7 rounded-full border border-white/15 px-5 py-3 text-xs text-white/60 transition hover:border-[#e8bd72]/40 hover:text-[#e8bd72]"
                  >
                    Choose another light
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/20">
            <span>One woman</span>
            <span className="text-[#e8bd72]">✦</span>
            <span>One light</span>
            <span className="text-[#e8bd72]">✦</span>
            <span>One future</span>
          </div>
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

        .global-globe {
          animation: globeSpin 18s linear infinite;
          transform-style: preserve-3d;
        }

        .global-globe-reverse {
          animation-direction: reverse;
          animation-duration: 23s;
          transform: translate(-50%, -50%) rotate(20deg);
        }

        .global-globe-tilt {
          animation-duration: 30s;
          transform: translate(-50%, -50%) rotate(-28deg);
        }

        .network-line-active {
          animation: networkSignal 1.8s ease-in-out infinite;
        }

        .story-image {
          animation: storyImageIn 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes globeSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes networkSignal {
          0%, 100% { stroke-opacity: 0.2; stroke-dashoffset: 0; }
          50% { stroke-opacity: 0.9; stroke-dashoffset: -5; }
        }

        @keyframes storyImageIn {
          from { opacity: 0; transform: scale(1.08); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.18; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.8); }
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

        .legacy-feature-image {
          animation: legacyImageIn 850ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes legacyImageIn {
          from {
            opacity: 0;
            transform: scale(1.08);
            filter: saturate(0.75);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: saturate(1);
          }
        }

        .voice-bar {
          display: block;
          width: 100%;
          min-height: 8px;
          border-radius: 999px;
          background: rgba(232, 189, 114, 0.18);
          transform-origin: bottom;
        }

        .voice-bar-active {
          animation: voiceWave 900ms ease-in-out infinite alternate;
        }

        @keyframes voiceWave {
          from { transform: scaleY(0.35); opacity: 0.35; }
          to { transform: scaleY(1); opacity: 1; }
        }

        .light-grid {
          background-image:
            linear-gradient(rgba(232, 189, 114, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 189, 114, 0.045) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: radial-gradient(circle at center, black, transparent 75%);
        }

        .light-particle {
          background: rgba(232, 189, 114, 0.28);
          box-shadow: 0 0 10px rgba(232, 189, 114, 0.12);
          animation: lightFloat 4.5s ease-in-out infinite;
        }

        .light-particle-bright {
          background: rgba(232, 189, 114, 0.95);
          box-shadow: 0 0 18px rgba(232, 189, 114, 0.75);
        }

        @keyframes lightFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(0.7); opacity: 0.25; }
          50% { transform: translate3d(0, -14px, 0) scale(1.35); opacity: 0.95; }
        }

        .light-burst {
          animation: lightBurst 2.2s ease-out infinite;
        }

        @keyframes lightBurst {
          0% { transform: scale(0.5); opacity: 0; }
          30% { opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
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