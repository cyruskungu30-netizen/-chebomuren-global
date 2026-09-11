 "use client";

import { useEffect, useState } from "react";

type Value = {
  title: string;
  icon: string;
  text: string;
};

type Activity = {
  number: string;
  title: string;
  text: string;
};

const values: Value[] = [
  {
    title: "Unity",
    icon: "✦",
    text: "We are stronger when we stand together, support one another, and celebrate our shared identity.",
  },
  {
    title: "Empowerment",
    icon: "◈",
    text: "We encourage women to believe in themselves, use their voices, and pursue their ambitions.",
  },
  {
    title: "Recognition",
    icon: "♛",
    text: "We honour the achievements, sacrifices, leadership, and contributions of Kalenjin women everywhere.",
  },
  {
    title: "Inclusion",
    icon: "◎",
    text: "We welcome Kalenjin women from every background, profession, generation, and country.",
  },
  {
    title: "Integrity",
    icon: "◇",
    text: "We lead with honesty, respect, responsibility, and sincerity.",
  },
  {
    title: "Legacy",
    icon: "∞",
    text: "We celebrate the women who came before us and create opportunities for those who will come after us.",
  },
];

const activities: Activity[] = [
  {
    number: "01",
    title: "Celebrate",
    text: "We celebrate Kalenjin women whose work, courage, leadership, and service are creating positive change.",
  },
  {
    number: "02",
    title: "Recognise",
    text: "We acknowledge women making meaningful contributions in their families, communities, professions, and countries.",
  },
  {
    number: "03",
    title: "Connect",
    text: "We bring women together across borders to build relationships, exchange ideas, and create opportunities.",
  },
  {
    number: "04",
    title: "Empower",
    text: "We encourage women to develop confidence, skills, leadership, businesses, and aspirations.",
  },
  {
    number: "05",
    title: "Inspire",
    text: "We share stories of resilience, excellence, achievement, and transformation to inspire future generations.",
  },
  {
    number: "06",
    title: "Build",
    text: "We create a global network that supports collaboration, mentorship, advocacy, and collective progress.",
  },
];

const categories = [
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

const locations = [
  ["🇰🇪", "Kenya"],
  ["🌍", "Africa"],
  ["🇬🇧", "United Kingdom"],
  ["🇺🇸", "United States"],
  ["🇦🇺", "Australia"],
  ["🌎", "Worldwide"],
];

const spotlight = [
  {
    category: "Leadership",
    image: "/images/women-1.jpg",
  },
  {
    category: "Entrepreneurship",
    image: "/images/women-2.jpg",
  },
  {
    category: "Community Impact",
    image: "/images/women-3.jpg",
  },
  {
    category: "Young Leadership",
    image: "/images/women-4.jpg",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-12-26T00:00:00").getTime();

    const updateCountdown = () => {
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

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f3eb] text-[#241817]">

      {/* NAVIGATION */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#190a0f]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a href="#home" className="leading-none">
            <div className="font-serif text-2xl font-bold tracking-wide text-[#e8bd72]">
              Chebomuren
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.4em] text-white/50">
              Global
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm text-white/70 transition hover:text-[#e8bd72]">
              About
            </a>

            <a href="#purpose" className="text-sm text-white/70 transition hover:text-[#e8bd72]">
              Purpose
            </a>

            <a href="#what-we-do" className="text-sm text-white/70 transition hover:text-[#e8bd72]">
              What We Do
            </a>

            <a href="#gala" className="text-sm text-white/70 transition hover:text-[#e8bd72]">
              Gala
            </a>

            <a href="#contact" className="text-sm text-white/70 transition hover:text-[#e8bd72]">
              Contact
            </a>
          </div>

          <a
            href="#join"
            className="hidden rounded-full bg-[#d5a85c] px-6 py-3 text-sm font-bold text-[#241817] transition hover:-translate-y-1 hover:bg-[#edca8c] md:block"
          >
            Join the Movement
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#190a0f] px-6 py-7 md:hidden">
            <div className="flex flex-col gap-6">

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-white/80"
              >
                About
              </a>

              <a
                href="#purpose"
                onClick={() => setMenuOpen(false)}
                className="text-white/80"
              >
                Purpose
              </a>

              <a
                href="#what-we-do"
                onClick={() => setMenuOpen(false)}
                className="text-white/80"
              >
                What We Do
              </a>

              <a
                href="#gala"
                onClick={() => setMenuOpen(false)}
                className="text-white/80"
              >
                Gala
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-white/80"
              >
                Contact
              </a>

              <a
                href="#join"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#d5a85c] px-6 py-3 text-center font-bold text-[#241817]"
              >
                Join the Movement
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#250e16]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(213,168,92,0.25),transparent_35%)]" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#d5a85c]/10" />

        <div className="absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-[#7b394b]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-2 lg:px-10">

          <div className="text-white">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d5a85c]/30 bg-white/5 px-5 py-2.5 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8bd72]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e8bd72]">
                A Global Women&apos;s Movement
              </span>
            </div>

            <h1 className="font-serif text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-[92px]">
              Celebrating
              <br />
              <span className="text-[#e8bd72]">Kalenjin</span>
              <br />
              Women.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              Chebomuren Global is a worldwide movement created to celebrate
              Kalenjin women who are making a difference in their families,
              communities, professions, and countries.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#join"
                className="rounded-full bg-[#d5a85c] px-7 py-4 font-bold text-[#241817] shadow-lg transition hover:-translate-y-1 hover:bg-[#edca8c]"
              >
                Join Our Global Sisterhood →
              </a>

              <a
                href="#nominate"
                className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#e8bd72] hover:text-[#e8bd72]"
              >
                Nominate a Woman
              </a>

            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/35">
              <span>Unity</span>
              <span>•</span>
              <span>Empowerment</span>
              <span>•</span>
              <span>Legacy</span>
            </div>

          </div>

          {/* HERO IMAGE SPACE */}

          <div className="relative hidden h-[620px] lg:block">

            <div className="absolute right-8 top-8 h-[520px] w-[410px] rotate-3 rounded-[12rem_12rem_2rem_2rem] border border-[#d5a85c]/30 bg-gradient-to-br from-[#713746] via-[#3a1822] to-[#190a0f] shadow-2xl" />

            <div className="absolute right-16 top-16 h-[520px] w-[410px] -rotate-3 overflow-hidden rounded-[12rem_12rem_2rem_2rem] border border-white/10 bg-[#32151e]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,168,92,0.16),transparent_45%)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                <div className="text-8xl">👑</div>

                <p className="mt-6 font-serif text-3xl text-[#e8bd72]">
                  Her Story.
                </p>

                <p className="font-serif text-3xl text-white">
                  Her Legacy.
                </p>

                <p className="mt-5 text-[10px] uppercase tracking-[0.4em] text-white/30">
                  Hero Photo Coming Soon
                </p>

              </div>

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-[#e8bd72]">
                  Chebomuren Global
                </p>

                <p className="mt-2 font-serif text-xl text-white">
                  Celebrating women. Inspiring generations.
                </p>
              </div>

            </div>

          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center text-white/30">
          <div className="text-[9px] uppercase tracking-[0.4em]">
            Explore
          </div>

          <div className="mt-2 animate-bounce">↓</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#a77a32]">
                About Chebomuren Global
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-tight lg:text-7xl">
                A sisterhood
                <br />
                <span className="text-[#6f3542]">
                  without borders.
                </span>
              </h2>

            </div>

            <div className="text-lg leading-8 text-black/60">

              <p>
                Chebomuren Global is a women&apos;s group and global platform
                dedicated to celebrating the achievements, strength,
                resilience, and contributions of Kalenjin women across the
                world.
              </p>

              <p className="mt-6">
                From Kenya to Australia, the United States, the United
                Kingdom, Africa, and beyond, Kalenjin women are trailblazing
                in business, leadership, education, health, sports, faith,
                the arts, public service, community development, and many
                other fields.
              </p>

              <p className="mt-8 font-serif text-2xl italic text-[#6f3542]">
                “Every Kalenjin woman has a story, a purpose, and the power
                to inspire change.”
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section
        id="purpose"
        className="relative overflow-hidden bg-[#241017] px-6 py-28 text-white lg:px-10"
      >
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#d5a85c]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.35em] text-[#e8bd72]">
            Our Purpose
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight lg:text-7xl">
            Recognition creates encouragement.
            <br />

            <span className="text-white/80">
              Connection creates opportunity.
            </span>

            <br />

            <span className="text-[#e8bd72]">
              Unity creates lasting impact.
            </span>
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Recognition",
                text: "We shine a light on women whose journeys deserve to be seen and celebrated.",
              },
              {
                number: "02",
                title: "Connection",
                text: "We create relationships across borders that can become opportunities and lifelong partnerships.",
              },
              {
                number: "03",
                title: "Unity",
                text: "We believe collective strength can create lasting change for generations.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#d5a85c]/40 hover:bg-white/[0.07]"
              >

                <div className="text-sm text-[#e8bd72]">
                  {item.number}
                </div>

                <h3 className="mt-8 font-serif text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GLOBAL SISTERHOOD */}
      <section className="overflow-hidden bg-[#f1e7da] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                One Global Sisterhood
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                From Kenya
                <br />
                <span className="text-[#6f3542]">
                  to the world.
                </span>
              </h2>

            </div>

            <p className="max-w-xl text-lg leading-8 text-black/55">
              Kalenjin women are building businesses, leading organisations,
              raising families, serving communities, and creating change
              across continents.
            </p>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

            {locations.map(([emoji, location]) => (
              <div
                key={location}
                className="rounded-2xl border border-[#d8c7b4] bg-white/60 p-6 text-center transition duration-500 hover:-translate-y-2 hover:bg-[#241017] hover:text-white"
              >

                <div className="text-3xl">
                  {emoji}
                </div>

                <div className="mt-3 text-sm font-semibold">
                  {location}
                </div>

              </div>
            ))}

          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["∞", "Possibilities", "Women supporting women"],
              ["1", "Purpose", "One united global sisterhood"],
              ["🌍", "Global", "Connections without borders"],
              ["2026", "Our Journey", "Building the future together"],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-[#241017] p-8 text-white"
              >

                <div className="font-serif text-5xl text-[#e8bd72]">
                  {number}
                </div>

                <h3 className="mt-6 font-serif text-2xl">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        id="what-we-do"
        className="px-6 py-28 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
              Our Work
            </p>

            <h2 className="mt-5 font-serif text-5xl lg:text-7xl">
              Turning sisterhood
              <br />
              <span className="text-[#6f3542]">
                into action.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {activities.map((activity) => (
              <div
                key={activity.number}
                className="group rounded-3xl border border-[#e6dbcf] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm text-[#a77a32]">
                    {activity.number}
                  </span>

                  <span className="text-xl text-[#d5a85c] transition group-hover:rotate-45">
                    ✦
                  </span>

                </div>

                <h3 className="mt-10 font-serif text-3xl">
                  {activity.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {activity.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        id="values"
        className="bg-[#f1e7da] px-6 py-28 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
              What Guides Us
            </p>

            <h2 className="mt-5 font-serif text-5xl lg:text-7xl">
              Our Values
            </h2>

          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-3xl border border-[#dccdbd] bg-white/70 p-8 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f2e3cd] font-serif text-2xl text-[#8b6326] transition group-hover:bg-[#d5a85c] group-hover:text-[#241817]">
                  {value.icon}
                </div>

                <h3 className="mt-8 font-serif text-3xl">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-black/50">
                  {value.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WOMEN SPOTLIGHT */}
      <section className="bg-white px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Women Who Inspire
              </p>

              <h2 className="mt-5 font-serif text-5xl lg:text-7xl">
                Her story matters.
              </h2>

            </div>

            <p className="max-w-md text-black/50">
              We celebrate women whose courage, leadership, service, and
              excellence continue to inspire generations.
            </p>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {spotlight.map((woman, index) => (
              <div
                key={woman.category}
                className="group overflow-hidden rounded-3xl bg-[#241017]"
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-br from-[#743a49] via-[#3b1723] to-[#16090d]" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                    <div className="text-6xl transition duration-500 group-hover:scale-125">
                      👑
                    </div>

                    <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-white/30">
                      Photo {index + 1} Coming Soon
                    </p>

                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#e8bd72]">
                      {woman.category}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl">
                      Trailblazing Woman
                    </h3>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GALA */}
      <section
        id="gala"
        className="relative overflow-hidden bg-[#d5a85c] px-6 py-28 lg:px-10"
      >

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[70px] border-white/10" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#4d2924]">
                The Signature Event
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[0.9] text-[#241817] lg:text-[82px]">
                Honouring
                <br />
                the Kalenjin
                <br />
                Women Gala
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#3d2822]/70">
                A signature Chebomuren Global celebration honouring Kalenjin
                women who are making an impact at home and abroad.
              </p>

              <div className="mt-10 inline-block rounded-2xl bg-[#241017] px-7 py-5 text-white">

                <p className="text-[10px] uppercase tracking-[0.3em] text-[#e8bd72]">
                  Gala Date
                </p>

                <p className="mt-2 font-serif text-3xl">
                  26 December 2026
                </p>

              </div>

            </div>

            <div>

              <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#4d2924]">
                The Countdown
              </p>

              <div className="grid grid-cols-4 gap-3">

                {[
                  ["Days", timeLeft.days],
                  ["Hours", timeLeft.hours],
                  ["Minutes", timeLeft.minutes],
                  ["Seconds", timeLeft.seconds],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-white/70 p-4 text-center backdrop-blur sm:p-6"
                  >

                    <div className="font-serif text-3xl font-bold sm:text-5xl">
                      {String(value).padStart(2, "0")}
                    </div>

                    <div className="mt-2 text-[8px] uppercase tracking-[0.2em] text-black/45 sm:text-[10px]">
                      {label}
                    </div>

                  </div>
                ))}

              </div>

              <div className="mt-8 rounded-3xl bg-[#241017] p-7 text-white">

                <p className="text-xs uppercase tracking-[0.25em] text-[#e8bd72]">
                  Event Theme
                </p>

                <p className="mt-3 font-serif text-3xl">
                  Honouring Our Women.
                </p>

                <p className="font-serif text-3xl text-[#e8bd72]">
                  Inspiring Our Future.
                </p>

              </div>

              <a
                href="#nominate"
                className="mt-5 block rounded-full bg-[#241017] px-8 py-5 text-center font-bold text-white transition hover:-translate-y-1"
              >
                Nominate a Trailblazing Woman →
              </a>

            </div>

          </div>

          <div className="mt-20">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4d2924]">
              Recognition Categories
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[#6b4a29]/20 bg-white/30 px-5 py-3 text-sm font-medium"
                >
                  {category}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* NOMINATION */}
      <section
        id="nominate"
        className="bg-[#f8f3eb] px-6 py-28 lg:px-10"
      >

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
            Recognition Matters
          </p>

          <h2 className="mt-5 font-serif text-5xl lg:text-7xl">
            Know a trailblazing woman?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/55">
            Do you know a Kalenjin woman whose courage, work, leadership,
            or service deserves recognition?
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-12 rounded-[2rem] bg-white p-7 text-left shadow-xl sm:p-10"
          >

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                placeholder="Your name"
                required
                className="rounded-xl border border-black/10 bg-[#faf8f5] px-5 py-4 outline-none transition focus:border-[#d5a85c]"
              />

              <input
                type="email"
                placeholder="Your email"
                required
                className="rounded-xl border border-black/10 bg-[#faf8f5] px-5 py-4 outline-none transition focus:border-[#d5a85c]"
              />

              <input
                type="text"
                placeholder="Name of the woman you are nominating"
                required
                className="rounded-xl border border-black/10 bg-[#faf8f5] px-5 py-4 outline-none transition focus:border-[#d5a85c] md:col-span-2"
              />

              <select
                required
                defaultValue=""
                className="rounded-xl border border-black/10 bg-[#faf8f5] px-5 py-4 outline-none md:col-span-2"
              >
                <option value="" disabled>
                  Select recognition category
                </option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Tell us why she deserves recognition..."
                required
                className="min-h-44 rounded-xl border border-black/10 bg-[#faf8f5] px-5 py-4 outline-none transition focus:border-[#d5a85c] md:col-span-2"
              />

            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#241017] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#4b202c]"
            >
              Submit Nomination →
            </button>

            <p className="mt-4 text-center text-xs text-black/35">
              Nomination submissions will be connected to the official
              Chebomuren Global system.
            </p>

          </form>
        </div>
      </section>

      {/* STORY VIDEO */}
      <section className="relative overflow-hidden bg-[#16090d] px-6 py-28 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#e8bd72]">
                Our Story
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                Powerful women.
                <br />
                Powerful stories.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/50">
                Every woman carries a story of courage, sacrifice,
                achievement, and hope. Chebomuren Global exists to make
                those stories seen, heard, and celebrated.
              </p>

            </div>

            <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#713746] to-[#241017]">

              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <button
                  type="button"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d5a85c] pl-1 text-2xl text-[#241817] shadow-2xl transition hover:scale-110"
                  aria-label="Play Chebomuren Global video"
                >
                  ▶
                </button>

                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Video Coming Soon
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* JOIN */}
      <section
        id="join"
        className="bg-[#241017] px-6 py-32 text-white lg:px-10"
      >

        <div className="mx-auto max-w-7xl text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#e8bd72]">
            You Belong Here
          </p>

          <h2 className="mt-6 font-serif text-6xl leading-[0.95] lg:text-[90px]">
            Join the
            <br />
            <span className="text-[#e8bd72]">
              Sisterhood.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Connect with Kalenjin women around the world, participate in
            events and initiatives, share your story, and create
            opportunities for collaboration.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button
              type="button"
              className="rounded-full bg-[#d5a85c] px-9 py-5 font-bold text-[#241817] transition hover:-translate-y-1 hover:bg-[#edca8c]"
            >
              Join Chebomuren Global →
            </button>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-9 py-5 font-semibold transition hover:border-[#e8bd72] hover:text-[#e8bd72]"
            >
              Partner With Us
            </a>

          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {["Connect", "Collaborate", "Learn", "Inspire"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="text-[#e8bd72]">✦</span>

                <p className="mt-2 text-sm text-white/60">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#d5a85c] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#4d2924]">
            Stay Connected
          </p>

          <h2 className="mt-5 font-serif text-5xl lg:text-6xl">
            Stories. Opportunities. Sisterhood.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#3d2822]/60">
            Stay connected with Chebomuren Global and receive updates about
            events, women&apos;s stories, opportunities, and initiatives.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >

            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 rounded-full border-0 bg-white px-6 py-4 outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-[#241017] px-8 py-4 font-bold text-white transition hover:scale-105"
            >
              Subscribe →
            </button>

          </form>

        </div>
      </section>

      {/* MESSAGE */}
      <section className="px-6 py-32 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f1e2ce] text-2xl text-[#a77a32]">
            ✦
          </div>

          <h2 className="mt-8 font-serif text-5xl leading-tight lg:text-7xl">
            You are worthy.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-black/55">
            Your voice matters. Your dreams matter. Your journey matters.
            Whether your achievements are recognised publicly or built
            quietly through years of courage, sacrifice, and determination,
            your contribution has value.
          </p>

          <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl italic text-[#6f3542]">
            “Together, we celebrate our past, strengthen our present,
            and inspire our future.”
          </p>

        </div>
      </section>

      {/* GET INVOLVED */}
      <section
        id="contact"
        className="bg-[#eadfd2] px-6 py-28 lg:px-10"
      >

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-[#8b6326]">
              Get Involved
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
              Let&apos;s build something
              <br />
              <span className="text-[#6f3542]">
                meaningful together.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/50">
              There are many ways to support the Chebomuren Global movement.
              Join our network, nominate a woman, volunteer your skills,
              partner with us, or help us create opportunities for future
              generations.
            </p>

          </div>

          <div className="space-y-3">

            {[
              "Partner With Us",
              "Volunteer With Us",
              "Attend the Gala",
              "Share Your Story",
              "Support Our Programmes",
              "Contact Chebomuren Global",
            ].map((item) => (
              <a
                key={item}
                href="#contact"
                className="flex items-center justify-between rounded-2xl bg-white p-6 transition duration-300 hover:translate-x-2 hover:shadow-lg"
              >

                <span className="font-semibold">
                  {item}
                </span>

                <span className="text-xl text-[#a77a32]">
                  →
                </span>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="bg-white px-6 py-24 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#a77a32]">
              Contact
            </p>

            <h3 className="mt-4 font-serif text-3xl">
              Chebomuren Global
            </h3>

            <p className="mt-4 text-sm leading-7 text-black/50">
              Celebrating Kalenjin Women Around the World.
            </p>

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-black/35">
              Email
            </p>

            <p className="mt-4 text-black/60">
              Email address coming soon
            </p>

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-black/35">
              Location
            </p>

            <p className="mt-4 text-black/60">
              Global
            </p>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#16090d] px-6 py-14 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div className="lg:col-span-2">

              <div className="font-serif text-3xl text-[#e8bd72]">
                Chebomuren Global
              </div>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                Celebrating Kalenjin Women. Inspiring Our Future.
              </p>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#e8bd72]">
                Explore
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/40">

                <a className="block hover:text-white" href="#about">
                  About
                </a>

                <a className="block hover:text-white" href="#purpose">
                  Purpose
                </a>

                <a className="block hover:text-white" href="#what-we-do">
                  What We Do
                </a>

                <a className="block hover:text-white" href="#gala">
                  Gala
                </a>

              </div>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#e8bd72]">
                Connect
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/40">

                <a href="#join" className="block hover:text-white">
                  Join the Movement
                </a>

                <a href="#nominate" className="block hover:text-white">
                  Nominate a Woman
                </a>

                <a href="#contact" className="block hover:text-white">
                  Contact
                </a>

              </div>

            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-xs text-white/25">
            © 2026 Chebomuren Global. All rights reserved.
          </div>

        </div>
      </footer>

      {/* FLOATING CONTACT */}
      <a
        href="#contact"
        aria-label="Contact Chebomuren Global"
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#d5a85c] text-2xl text-[#241817] shadow-2xl transition duration-300 hover:scale-110"
      >
        💬
      </a>

    </main>
  );
}