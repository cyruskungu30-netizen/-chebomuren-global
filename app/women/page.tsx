"use client";

import Link from "next/link";
import { useState } from "react";

const women = [
  {
    name: "Trailblazing Woman",
    field: "Business & Entrepreneurship",
    location: "Kenya",
    initials: "TW",
    featured: true,
    story:
      "A placeholder profile for a woman whose leadership, courage, and work are creating meaningful change.",
  },
  {
    name: "Trailblazing Woman",
    field: "Leadership & Public Service",
    location: "Kenya",
    initials: "TW",
    featured: false,
    story:
      "A placeholder profile celebrating leadership and service to the community.",
  },
  {
    name: "Trailblazing Woman",
    field: "Education & Academia",
    location: "United Kingdom",
    initials: "TW",
    featured: false,
    story:
      "A placeholder profile celebrating excellence in education and knowledge.",
  },
  {
    name: "Trailblazing Woman",
    field: "Health & Medicine",
    location: "United States",
    initials: "TW",
    featured: false,
    story:
      "A placeholder profile celebrating a woman improving lives through healthcare.",
  },
  {
    name: "Trailblazing Woman",
    field: "Sports",
    location: "Kenya",
    initials: "TW",
    featured: false,
    story:
      "A placeholder profile celebrating excellence, discipline, and achievement in sports.",
  },
  {
    name: "Trailblazing Woman",
    field: "Arts & Culture",
    location: "Australia",
    initials: "TW",
    featured: false,
    story:
      "A placeholder profile celebrating creativity, culture, and artistic expression.",
  },
  {
    name: "Trailblazing Woman",
    field: "Faith & Community",
    location: "Kenya",
    initials: "TW",
    featured: false,
    story:
      "A placeholder profile celebrating compassion, faith, and community service.",
  },
  {
    name: "Trailblazing Woman",
    field: "Innovation",
    location: "Canada",
    initials: "TW",
    featured: false,
    story:
      "A placeholder profile celebrating innovation and solutions that create opportunities.",
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

export default function WomenPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWomen =
    activeCategory === "All"
      ? women
      : women.filter((woman) => woman.field === activeCategory);

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
              className="text-sm text-white/70 transition hover:text-[#e8bd72]"
            >
              Gala
            </Link>

            <Link
              href="/women"
              className="text-sm text-[#e8bd72]"
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

      <section className="relative overflow-hidden bg-[#190a0f] pt-28 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(213,168,92,0.18),transparent_35%)]" />

        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#d5a85c]/10" />

        <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#6f3542]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">

          <div className="max-w-5xl">

            <p className="hero-reveal text-xs uppercase tracking-[0.4em] text-[#e8bd72]">
              The Women
            </p>

            <h1 className="hero-reveal hero-delay-1 mt-6 font-serif text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-[100px]">
              Women who
              <br />
              <span className="text-[#e8bd72]">
                inspire us.
              </span>
            </h1>

            <p className="hero-reveal hero-delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/55">
              Meet the women whose courage, excellence, leadership, and
              service are shaping communities and inspiring generations
              across the world.
            </p>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Our Spotlight
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-6xl">
                Every woman
                <br />
                has a story.
              </h2>

            </div>

            <p className="max-w-2xl text-lg leading-8 text-black/55">
              Behind every achievement is a journey. Chebomuren Global
              provides a platform to celebrate Kalenjin women who are
              breaking barriers, creating opportunities, serving others,
              and leaving a meaningful legacy.
            </p>

          </div>

        </div>
      </section>

      {/* FEATURED WOMAN */}

      <section className="px-6 pb-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] bg-[#241017] text-white">

            <div className="grid lg:grid-cols-2">

              {/* PHOTO PLACEHOLDER */}

              <div className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-[#6f3542] via-[#3b1c25] to-[#190a0f]">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(232,189,114,0.25),transparent_30%)]" />

                <div className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8bd72]/30">

                  <div className="flex h-52 w-52 items-center justify-center rounded-full border border-[#e8bd72]/20 bg-white/5">

                    <span className="font-serif text-6xl text-[#e8bd72]">
                      TW
                    </span>

                  </div>

                </div>

                <div className="absolute bottom-8 left-8 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-xs text-white/60 backdrop-blur">
                  Featured Woman
                </div>

              </div>

              {/* FEATURED CONTENT */}

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

                <p className="text-xs uppercase tracking-[0.35em] text-[#e8bd72]">
                  Woman of Impact
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight">
                  Trailblazing
                  <br />
                  <span className="text-[#e8bd72]">
                    Woman
                  </span>
                </h2>

                <p className="mt-4 text-sm text-white/40">
                  Business & Entrepreneurship · Kenya
                </p>

                <p className="mt-7 text-lg leading-8 text-white/55">
                  A placeholder profile for a remarkable Kalenjin woman whose
                  work, leadership, courage, and dedication are creating
                  positive change.
                </p>

                <div className="mt-9">

                  <button
                    type="button"
                    className="premium-button rounded-full bg-[#d5a85c] px-7 py-4 font-bold text-[#241017]"
                  >
                    Read Her Story →
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CATEGORY FILTER */}

      <section className="border-y border-black/10 bg-[#eadfd2] px-6 py-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-3 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "border-[#241017] bg-[#241017] text-white"
                    : "border-black/10 bg-white/50 text-black/55 hover:border-[#d5a85c] hover:text-[#241017]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* WOMEN GRID */}

      <section className="px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                The Directory
              </p>

              <h2 className="mt-4 font-serif text-5xl lg:text-6xl">
                Trailblazers
              </h2>

            </div>

            <p className="text-sm text-black/40">
              {filteredWomen.length} women showcased
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {filteredWomen.map((woman, index) => (

              <article
                key={`${woman.field}-${index}`}
                className="premium-card group overflow-hidden rounded-3xl border border-black/10 bg-white"
              >

                {/* IMAGE */}

                <div className="image-zoom relative h-72 bg-gradient-to-br from-[#6f3542] via-[#3b1c25] to-[#190a0f]">

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(232,189,114,0.18),transparent_35%)]" />

                  <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8bd72]/30">

                    <span className="font-serif text-3xl text-[#e8bd72]">
                      {woman.initials}
                    </span>

                  </div>

                  <div className="absolute left-5 top-5 rounded-full bg-[#d5a85c] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#241017]">
                    {woman.location}
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-6">

                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#a77a32]">
                    {woman.field}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl">
                    {woman.name}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-black/45">
                    {woman.story}
                  </p>

                  <button
                    type="button"
                    className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#6f3542] transition hover:text-[#a77a32]"
                  >
                    View Story →
                  </button>

                </div>

              </article>

            ))}

          </div>

          {filteredWomen.length === 0 && (

            <div className="rounded-3xl border border-black/10 bg-white p-16 text-center">

              <p className="font-serif text-3xl">
                No women found in this category yet.
              </p>

              <p className="mt-3 text-black/45">
                Be the first to nominate an exceptional woman.
              </p>

              <Link
                href="/nominate"
                className="premium-button mt-7 inline-flex rounded-full bg-[#241017] px-7 py-4 font-bold text-white"
              >
                Nominate a Woman →
              </Link>

            </div>

          )}

        </div>
      </section>

      {/* QUOTE */}

      <section className="bg-[#241017] px-6 py-28 text-white lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <div className="text-5xl text-[#d5a85c]">
            “
          </div>

          <blockquote className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Every Kalenjin woman has a story, a purpose, and the power to
            inspire change.
          </blockquote>

          <div className="mx-auto mt-10 h-px w-16 bg-[#d5a85c]" />

          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/35">
            Chebomuren Global
          </p>

        </div>

      </section>

      {/* NOMINATION CTA */}

      <section className="bg-[#d5a85c] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#4d2924]">
            Know a Trailblazer?
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
            Put her story
            <br />
            in the spotlight.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#3d2822]/60">
            Nominate a Kalenjin woman who is creating positive change,
            inspiring others, leading with purpose, or breaking barriers.
          </p>

          <Link
            href="/nominate"
            className="premium-button mt-9 inline-flex rounded-full bg-[#241017] px-8 py-4 font-bold text-white"
          >
            Nominate a Trailblazer →
          </Link>

        </div>

      </section>

      {/* JOIN CTA */}

      <section className="bg-[#f8f3eb] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Your Place Is Here
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-6xl">
                Your journey could
                <br />
                inspire someone.
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-black/55">
                Whether you are a businesswoman, professional, student,
                mother, leader, creative, athlete, farmer, community worker,
                entrepreneur, or change-maker, there is a place for you in
                this movement.
              </p>

              <Link
                href="/join"
                className="premium-button mt-8 inline-flex rounded-full bg-[#241017] px-8 py-4 font-bold text-white"
              >
                Join the Movement →
              </Link>

            </div>

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