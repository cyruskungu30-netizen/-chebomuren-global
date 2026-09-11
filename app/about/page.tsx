"use client";

import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Unity",
    text: "We are stronger when we stand together, support one another, and celebrate our shared identity.",
  },
  {
    number: "02",
    title: "Empowerment",
    text: "We encourage women to believe in themselves, use their voices, and pursue their ambitions.",
  },
  {
    number: "03",
    title: "Recognition",
    text: "We honour the achievements, sacrifices, leadership, and contributions of Kalenjin women everywhere.",
  },
  {
    number: "04",
    title: "Inclusion",
    text: "We welcome Kalenjin women from every background, profession, generation, and country.",
  },
  {
    number: "05",
    title: "Integrity",
    text: "We lead with honesty, respect, responsibility, and sincerity.",
  },
  {
    number: "06",
    title: "Legacy",
    text: "We celebrate the women who came before us and create opportunities for those who will come after us.",
  },
];

export default function AboutPage() {
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
              className="text-sm text-[#e8bd72]"
            >
              About
            </Link>

            <Link
              href="/gala"
              className="text-sm text-white/70 transition hover:text-[#e8bd72]"
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

      <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#241017] pt-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(213,168,92,0.2),transparent_35%)]" />

        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#d5a85c]/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#6f3542]/20 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">

          <div className="max-w-5xl">

            <p className="hero-reveal text-xs font-bold uppercase tracking-[0.4em] text-[#e8bd72]">
              About Chebomuren Global
            </p>

            <h1 className="hero-reveal hero-delay-1 mt-7 font-serif text-6xl font-bold leading-[0.9] text-white sm:text-7xl lg:text-[100px]">
              A movement
              <br />
              <span className="text-[#e8bd72]">
                built on women.
              </span>
            </h1>

            <p className="hero-reveal hero-delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Chebomuren Global is a worldwide movement created to celebrate,
              connect, and empower Kalenjin women who are making a difference
              across families, communities, professions, and countries.
            </p>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Who We Are
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                Seen.
                <br />
                Heard.
                <br />
                <span className="text-[#6f3542]">
                  Celebrated.
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

              <p className="mt-6">
                We provide a space where women can be seen, heard, supported,
                connected, and celebrated.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* PURPOSE */}

      <section className="bg-[#eadfd2] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Our Purpose
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                Recognition
                <br />
                creates
                <br />
                <span className="text-[#6f3542]">
                  encouragement.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-black/60">
                Our purpose is to celebrate Kalenjin women who are
                trailblazing around the world.
              </p>

              <p className="mt-6 text-lg leading-8 text-black/50">
                We believe recognition creates encouragement, connection
                creates opportunity, and unity creates lasting impact.
              </p>

              <p className="mt-6 text-lg leading-8 text-black/50">
                By highlighting the journeys and achievements of Kalenjin
                women, we inspire the next generation to pursue their dreams
                with confidence and purpose.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* MISSION */}

      <section className="bg-[#241017] px-6 py-28 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <p className="text-xs uppercase tracking-[0.35em] text-[#e8bd72]">
              Our Mission
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
              Empower Kalenjin women
              <br />
              <span className="text-[#e8bd72]">
                to do more.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/55">
              Our mission is to empower Kalenjin women to do more and to
              remind every woman that she is worthy.
            </p>

          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Celebrate women's achievements",
              "Create opportunities for connection",
              "Encourage leadership and confidence",
              "Support women pursuing their goals",
              "Inspire young women and future generations",
              "Build a united global sisterhood",
              "Promote visibility of Kalenjin women",
            ].map((item, index) => (
              <div
                key={item}
                className="premium-card rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >

                <div className="text-xs text-[#e8bd72]">
                  0{index + 1}
                </div>

                <p className="mt-5 font-serif text-xl">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VISION */}

      <section className="px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] bg-[#d5a85c] p-8 sm:p-12 lg:p-20">

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#4d2924]">
              Our Vision
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-5xl leading-tight lg:text-7xl">
              A united global community where every Kalenjin woman knows
              her value, understands her potential, and has the opportunity
              to thrive.
            </h2>

          </div>

        </div>
      </section>

      {/* VALUES */}

      <section className="bg-[#f1e7da] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
              What Guides Us
            </p>

            <h2 className="mt-5 font-serif text-5xl lg:text-7xl">
              Our Values
            </h2>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.number}
                className="premium-card rounded-3xl border border-[#d9c9b8] bg-white/70 p-8"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm text-[#a77a32]">
                    {value.number}
                  </span>

                  <span className="text-xl text-[#d5a85c]">
                    ✦
                  </span>

                </div>

                <h3 className="mt-10 font-serif text-3xl">
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

      {/* GLOBAL */}

      <section className="bg-[#190a0f] px-6 py-28 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#e8bd72]">
                Our Reach
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                One identity.
                <br />
                <span className="text-[#e8bd72]">
                  Many destinations.
                </span>
              </h2>

            </div>

            <p className="text-lg leading-8 text-white/50">
              Wherever Kalenjin women are building, leading, serving,
              creating, and inspiring, Chebomuren Global believes they
              belong to one global sisterhood.
            </p>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

            {[
              ["🇰🇪", "Kenya"],
              ["🌍", "Africa"],
              ["🇬🇧", "United Kingdom"],
              ["🇺🇸", "United States"],
              ["🇦🇺", "Australia"],
              ["🌎", "Worldwide"],
            ].map(([emoji, location]) => (
              <div
                key={location}
                className="premium-card rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
              >

                <div className="text-3xl">
                  {emoji}
                </div>

                <p className="mt-3 text-sm text-white/60">
                  {location}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="bg-[#d5a85c] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#4d2924]">
            You Belong Here
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
            Your story matters.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#3d2822]/60">
            Chebomuren Global exists to remind every Kalenjin woman that
            she has a place, a purpose, and a powerful contribution to make.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/join"
              className="premium-button rounded-full bg-[#241017] px-8 py-4 font-bold text-white"
            >
              Join the Sisterhood →
            </Link>

            <Link
              href="/nominate"
              className="rounded-full border border-[#4d2924]/30 px-8 py-4 font-bold text-[#241017] transition hover:bg-white/30"
            >
              Nominate a Woman
            </Link>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#16090d] px-6 py-14 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div className="lg:col-span-2">

              <Link href="/" className="font-serif text-3xl text-[#e8bd72]">
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

                <Link className="block hover:text-white" href="/">
                  Home
                </Link>

                <Link className="block hover:text-white" href="/about">
                  About
                </Link>

                <Link className="block hover:text-white" href="/gala">
                  Gala
                </Link>

                <Link className="block hover:text-white" href="/women">
                  Women
                </Link>

              </div>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#e8bd72]">
                Connect
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/40">

                <Link className="block hover:text-white" href="/join">
                  Join Us
                </Link>

                <Link className="block hover:text-white" href="/nominate">
                  Nominate
                </Link>

                <Link className="block hover:text-white" href="/contact">
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