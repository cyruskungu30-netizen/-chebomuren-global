"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
  {
    number: "01",
    title: "Business & Entrepreneurship",
    description:
      "Celebrating women building businesses, creating employment, and transforming ideas into impact.",
  },
  {
    number: "02",
    title: "Leadership & Public Service",
    description:
      "Honouring women leading institutions, communities, organisations, and public initiatives.",
  },
  {
    number: "03",
    title: "Education & Academia",
    description:
      "Recognising educators, researchers, scholars, and women advancing knowledge.",
  },
  {
    number: "04",
    title: "Health & Medicine",
    description:
      "Celebrating women improving lives through healthcare, medicine, research, and wellness.",
  },
  {
    number: "05",
    title: "Sports",
    description:
      "Honouring athletes, coaches, sports leaders, and women transforming the sporting world.",
  },
  {
    number: "06",
    title: "Arts, Culture & Entertainment",
    description:
      "Recognising women preserving culture while making their mark through creativity and entertainment.",
  },
  {
    number: "07",
    title: "Faith & Community Service",
    description:
      "Celebrating women whose faith, service, and compassion strengthen communities.",
  },
  {
    number: "08",
    title: "Agriculture & Innovation",
    description:
      "Honouring women creating solutions and opportunities through agriculture, technology, and innovation.",
  },
  {
    number: "09",
    title: "Media & Communications",
    description:
      "Recognising women shaping conversations through journalism, media, communication, and storytelling.",
  },
  {
    number: "10",
    title: "Humanitarian & Social Impact",
    description:
      "Celebrating women creating meaningful change through humanitarian work and social initiatives.",
  },
  {
    number: "11",
    title: "Young Leadership",
    description:
      "Honouring young Kalenjin women demonstrating exceptional leadership and influence.",
  },
  {
    number: "12",
    title: "Emerging Excellence",
    description:
      "Recognising women whose remarkable potential and achievements are beginning to gain wider visibility.",
  },
];

function CountdownBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-6 text-center backdrop-blur-md">
      <div className="font-serif text-4xl font-bold text-[#e8bd72] sm:text-5xl">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </div>
    </div>
  );
}

export default function GalaPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-12-26T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

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
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f3eb] text-[#241817]">

      {/* NAVIGATION */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#190a0f]/90 text-white backdrop-blur-xl">

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
              className="text-sm text-white/70 transition hover:text-[#e8bd72]"
            >
              About
            </Link>

            <Link
              href="/gala"
              className="text-sm text-[#e8bd72]"
            >
              Gala
            </Link>

            <Link
              href="/women"
              className="text-sm text-white/70 transition hover:text-[#e8bd72]"
            >
              Women
            </Link>

            <Link
              href="/nominate"
              className="text-sm text-white/70 transition hover:text-[#e8bd72]"
            >
              Nominate
            </Link>

            <Link
              href="/contact"
              className="text-sm text-white/70 transition hover:text-[#e8bd72]"
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

      {/* HERO */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#190a0f] pt-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(213,168,92,0.2),transparent_35%)]" />

        <div className="absolute -right-48 top-20 h-[600px] w-[600px] rounded-full border border-[#d5a85c]/10" />

        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#6f3542]/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">

          <div>

            <div className="hero-reveal inline-flex items-center gap-3 rounded-full border border-[#d5a85c]/30 bg-[#d5a85c]/10 px-5 py-3">

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8bd72]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e8bd72]">
                26 December 2026
              </span>

            </div>

            <p className="hero-reveal hero-delay-1 mt-8 text-xs uppercase tracking-[0.4em] text-white/40">
              Chebomuren Global presents
            </p>

            <h1 className="hero-reveal hero-delay-2 mt-5 font-serif text-6xl font-bold leading-[0.9] text-white sm:text-7xl lg:text-[92px]">
              Honouring
              <br />
              <span className="text-[#e8bd72]">
                Our Women.
              </span>
            </h1>

            <p className="hero-reveal hero-delay-3 mt-7 max-w-xl text-lg leading-8 text-white/55">
              An extraordinary celebration of Kalenjin women whose
              courage, leadership, excellence, and service are shaping
              families, communities, industries, and the world.
            </p>

            <div className="hero-reveal hero-delay-4 mt-9 flex flex-wrap gap-4">

              <Link
                href="/nominate"
                className="premium-button rounded-full bg-[#d5a85c] px-8 py-4 font-bold text-[#241017]"
              >
                Nominate a Woman →
              </Link>

              <Link
                href="/join"
                className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Get Involved
              </Link>

            </div>

          </div>

          {/* EVENT CARD */}

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            <div className="soft-glow relative overflow-hidden rounded-[2rem] border border-[#d5a85c]/20 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-10">

              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#d5a85c]/10 blur-3xl" />

              <div className="relative">

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      The Gala
                    </p>

                    <h2 className="mt-3 font-serif text-3xl text-white">
                      2026
                    </h2>

                  </div>

                  <div className="rounded-full border border-[#d5a85c]/30 px-4 py-2 text-xs text-[#e8bd72]">
                    CG
                  </div>

                </div>

                <div className="my-10 h-px bg-white/10" />

                <p className="text-sm uppercase tracking-[0.25em] text-[#e8bd72]">
                  Theme
                </p>

                <p className="mt-3 font-serif text-3xl leading-tight text-white">
                  Honouring Our Women.
                  <br />
                  Inspiring Our Future.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                      Date
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white">
                      26 December
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.05] p-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                      Year
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white">
                      2026
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* COUNTDOWN */}

      <section className="bg-[#241017] px-6 pb-28 text-white lg:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              The countdown is on
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Until we celebrate
            </h2>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

            <CountdownBox
              value={timeLeft.days}
              label="Days"
            />

            <CountdownBox
              value={timeLeft.hours}
              label="Hours"
            />

            <CountdownBox
              value={timeLeft.minutes}
              label="Minutes"
            />

            <CountdownBox
              value={timeLeft.seconds}
              label="Seconds"
            />

          </div>

        </div>

      </section>

      {/* ABOUT THE GALA */}

      <section className="px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                About The Celebration
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                More than
                <br />
                an award.
                <br />
                <span className="text-[#6f3542]">
                  A celebration.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-black/60">
                The Honouring the Kalenjin Women Gala is a prestigious
                celebration designed to shine a light on women who are
                making extraordinary contributions in their fields and
                communities.
              </p>

              <p className="mt-6 text-lg leading-8 text-black/60">
                It is a moment to recognise achievements, celebrate
                journeys, create connections, and inspire future generations
                of Kalenjin women.
              </p>

              <p className="mt-6 font-serif text-2xl leading-9 text-[#6f3542]">
                "Honouring Our Women. Inspiring Our Future."
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="bg-[#eadfd2] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
              The Experience
            </p>

            <h2 className="mt-5 font-serif text-5xl lg:text-7xl">
              An evening to remember.
            </h2>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "Red Carpet", "A glamorous arrival celebrating women in style."],
              ["02", "Recognition", "Honouring exceptional women and their achievements."],
              ["03", "Connection", "Creating meaningful relationships and new opportunities."],
              ["04", "Inspiration", "Stories that remind us what is possible."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="premium-card rounded-3xl bg-white/70 p-8"
              >

                <span className="text-sm text-[#a77a32]">
                  {number}
                </span>

                <h3 className="mt-12 font-serif text-2xl">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/50">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="bg-[#f8f3eb] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
              Recognition Categories
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
              Celebrating excellence
              <br />
              <span className="text-[#6f3542]">
                in every field.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/50">
              Every woman has a different journey. These categories honour
              excellence across diverse areas of life and leadership.
            </p>

          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => (
              <div
                key={category.number}
                className="premium-card group rounded-3xl border border-black/10 bg-white p-7"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs text-[#a77a32]">
                    {category.number}
                  </span>

                  <span className="text-[#d5a85c] transition group-hover:rotate-45">
                    ✦
                  </span>

                </div>

                <h3 className="mt-10 font-serif text-2xl leading-tight">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/45">
                  {category.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* NOMINATE */}

      <section className="relative overflow-hidden bg-[#241017] px-6 py-32 text-white lg:px-10">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d5a85c]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#e8bd72]">
            Know an exceptional woman?
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight lg:text-7xl">
            Her story deserves
            <br />
            to be heard.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50">
            Nominate a trailblazing Kalenjin woman whose work, leadership,
            courage, or service is creating positive change.
          </p>

          <div className="mt-10">

            <Link
              href="/nominate"
              className="premium-button inline-flex rounded-full bg-[#d5a85c] px-9 py-4 font-bold text-[#241017]"
            >
              Nominate a Trailblazer →
            </Link>

          </div>

        </div>

      </section>

      {/* SPONSOR */}

      <section className="px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] border border-[#d9c9b8] bg-[#eadfd2] p-8 sm:p-12 lg:p-20">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                  Partner With Us
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-6xl">
                  Help us honour
                  <br />
                  <span className="text-[#6f3542]">
                    extraordinary women.
                  </span>
                </h2>

              </div>

              <div>

                <p className="text-lg leading-8 text-black/55">
                  Organisations, businesses, brands, institutions, and
                  individuals can partner with Chebomuren Global to make
                  this celebration possible.
                </p>

                <Link
                  href="/contact"
                  className="premium-button mt-8 inline-flex rounded-full bg-[#241017] px-8 py-4 font-bold text-white"
                >
                  Become a Partner →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="bg-[#d5a85c] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#4d2924]">
            December 26, 2026
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
            Honouring Our Women.
            <br />
            Inspiring Our Future.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#3d2822]/60">
            Be part of a historic celebration of Kalenjin women from Kenya
            and around the world.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/nominate"
              className="premium-button rounded-full bg-[#241017] px-8 py-4 font-bold text-white"
            >
              Nominate
            </Link>

            <Link
              href="/join"
              className="rounded-full border border-[#4d2924]/30 px-8 py-4 font-bold text-[#241017] transition hover:bg-white/30"
            >
              Join Chebomuren Global
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

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