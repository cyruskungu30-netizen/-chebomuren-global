"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const roles = [
  "Businesswoman",
  "Professional",
  "Student",
  "Mother",
  "Leader",
  "Creative",
  "Athlete",
  "Farmer",
  "Community Worker",
  "Entrepreneur",
  "Change-maker",
  "Other",
];

const interests = [
  "Networking",
  "Business",
  "Leadership",
  "Mentorship",
  "Education",
  "Community Service",
  "Women Empowerment",
  "Culture & Heritage",
  "Events",
  "Young Women",
  "Partnerships",
  "Personal Growth",
];

const countries = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "South Africa",
  "Other",
];

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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

      <section className="relative min-h-[85vh] overflow-hidden bg-[#190a0f] pt-28 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(213,168,92,0.2),transparent_35%)]" />

        <div className="absolute -right-48 -top-40 h-[600px] w-[600px] rounded-full border border-[#d5a85c]/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#6f3542]/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-24 lg:px-10">

          <div className="max-w-5xl">

            <p className="hero-reveal text-xs uppercase tracking-[0.4em] text-[#e8bd72]">
              Join Chebomuren Global
            </p>

            <h1 className="hero-reveal hero-delay-1 mt-6 font-serif text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-[100px]">
              Your place in
              <br />
              <span className="text-[#e8bd72]">
                the sisterhood.
              </span>
            </h1>

            <p className="hero-reveal hero-delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/55">
              Connect with Kalenjin women around the world, share your
              journey, discover opportunities, build relationships, and
              become part of a movement shaping our future.
            </p>

            <div className="hero-reveal hero-delay-3 mt-9 flex flex-wrap gap-4">

              <a
                href="#membership"
                className="premium-button rounded-full bg-[#d5a85c] px-8 py-4 font-bold text-[#241017]"
              >
                Become a Member ↓
              </a>

              <Link
                href="/about"
                className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Discover Our Mission
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* WHY JOIN */}

      <section className="px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Why Join?
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                Connection
                <br />
                creates
                <br />
                <span className="text-[#6f3542]">
                  opportunity.
                </span>
              </h2>

            </div>

            <p className="max-w-2xl text-lg leading-8 text-black/55">
              Chebomuren Global is more than a network. It is a growing
              sisterhood where women can connect, collaborate, support one
              another, and create meaningful opportunities across borders.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Connect",
                "Build meaningful relationships with Kalenjin women worldwide.",
              ],
              [
                "02",
                "Discover",
                "Find opportunities, ideas, collaborations, and new perspectives.",
              ],
              [
                "03",
                "Grow",
                "Learn from other women and develop your personal and professional journey.",
              ],
              [
                "04",
                "Inspire",
                "Share your experience and become an inspiration to another woman.",
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="premium-card rounded-3xl border border-black/10 bg-white p-7"
              >

                <span className="text-xs text-[#a77a32]">
                  {number}
                </span>

                <h3 className="mt-10 font-serif text-2xl">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/45">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* MEMBERSHIP FORM */}

      <section
        id="membership"
        className="bg-[#eadfd2] px-6 py-24 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:items-start">

            {/* FORM INTRO */}

            <div className="lg:sticky lg:top-32">

              <p className="text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                Become Part of It
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-6xl">
                Tell us
                <br />
                <span className="text-[#6f3542]">
                  about you.
                </span>
              </h2>

              <p className="mt-6 leading-7 text-black/50">
                Complete the form and take your place in the Chebomuren
                Global sisterhood.
              </p>

              <div className="mt-10 rounded-3xl bg-[#241017] p-7 text-white">

                <p className="text-xs uppercase tracking-[0.25em] text-[#e8bd72]">
                  Remember
                </p>

                <p className="mt-5 font-serif text-2xl leading-9">
                  You are worthy.
                  <br />
                  Your voice matters.
                  <br />
                  Your dreams matter.
                </p>

              </div>

            </div>

            {/* FORM */}

            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_30px_80px_rgba(36,16,23,0.08)] sm:p-10 lg:p-12">

              {submitted ? (

                <div className="flex min-h-[600px] flex-col items-center justify-center text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d5a85c] text-3xl text-[#241017]">
                    ✓
                  </div>

                  <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#a77a32]">
                    Welcome to the Movement
                  </p>

                  <h2 className="mt-5 font-serif text-5xl">
                    You belong here.
                  </h2>

                  <p className="mt-5 max-w-xl text-lg leading-8 text-black/50">
                    Thank you for joining Chebomuren Global. Your membership
                    information will eventually be securely connected to our
                    global sisterhood platform.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">

                    <Link
                      href="/women"
                      className="premium-button rounded-full bg-[#241017] px-7 py-4 font-bold text-white"
                    >
                      Meet the Women →
                    </Link>

                    <Link
                      href="/gala"
                      className="rounded-full border border-black/10 px-7 py-4 font-bold transition hover:border-[#d5a85c]"
                    >
                      Explore the Gala
                    </Link>

                  </div>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >

                  {/* PERSONAL DETAILS */}

                  <div>

                    <div className="flex items-center gap-4">

                      <span className="text-xs text-[#a77a32]">
                        01
                      </span>

                      <div className="h-px flex-1 bg-black/10" />

                    </div>

                    <h3 className="mt-6 font-serif text-3xl">
                      Personal details
                    </h3>

                    <p className="mt-2 text-sm text-black/40">
                      Tell us who you are.
                    </p>

                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-semibold"
                      >
                        First Name *
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="First name"
                        className="premium-input"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Last Name *
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Last name"
                        className="premium-input"
                      />

                    </div>

                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="premium-input"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+254..."
                        className="premium-input"
                      />

                    </div>

                  </div>

                  {/* LOCATION */}

                  <div>

                    <div className="flex items-center gap-4">

                      <span className="text-xs text-[#a77a32]">
                        02
                      </span>

                      <div className="h-px flex-1 bg-black/10" />

                    </div>

                    <h3 className="mt-6 font-serif text-3xl">
                      Where are you?
                    </h3>

                    <p className="mt-2 text-sm text-black/40">
                      Our sisterhood reaches across borders.
                    </p>

                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label
                        htmlFor="country"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Country *
                      </label>

                      <select
                        id="country"
                        name="country"
                        required
                        defaultValue=""
                        className="premium-input"
                      >

                        <option value="" disabled>
                          Select your country
                        </option>

                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}

                      </select>

                    </div>

                    <div>

                      <label
                        htmlFor="city"
                        className="mb-2 block text-sm font-semibold"
                      >
                        City / Town
                      </label>

                      <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="e.g. Nairobi"
                        className="premium-input"
                      />

                    </div>

                  </div>

                  {/* PROFESSION */}

                  <div>

                    <div className="flex items-center gap-4">

                      <span className="text-xs text-[#a77a32]">
                        03
                      </span>

                      <div className="h-px flex-1 bg-black/10" />

                    </div>

                    <h3 className="mt-6 font-serif text-3xl">
                      Your journey
                    </h3>

                    <p className="mt-2 text-sm text-black/40">
                      Tell us how you identify professionally and personally.
                    </p>

                  </div>

                  <div>

                    <label
                      htmlFor="profession"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Profession / Occupation *
                    </label>

                    <input
                      id="profession"
                      name="profession"
                      type="text"
                      required
                      placeholder="e.g. Software Developer"
                      className="premium-input"
                    />

                  </div>

                  <div>

                    <label className="mb-3 block text-sm font-semibold">
                      Which describes you? *
                    </label>

                    <div className="grid gap-3 sm:grid-cols-2">

                      {roles.map((role) => (

                        <label
                          key={role}
                          className="group flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 bg-[#faf8f5] p-4 transition hover:border-[#d5a85c]"
                        >

                          <input
                            type="radio"
                            name="role"
                            value={role}
                            required
                            className="h-4 w-4 accent-[#241017]"
                          />

                          <span className="text-sm text-black/60 group-hover:text-[#241017]">
                            {role}
                          </span>

                        </label>

                      ))}

                    </div>

                  </div>

                  {/* INTERESTS */}

                  <div>

                    <div className="flex items-center gap-4">

                      <span className="text-xs text-[#a77a32]">
                        04
                      </span>

                      <div className="h-px flex-1 bg-black/10" />

                    </div>

                    <h3 className="mt-6 font-serif text-3xl">
                      Your interests
                    </h3>

                    <p className="mt-2 text-sm text-black/40">
                      What would you like to connect around?
                    </p>

                  </div>

                  <div>

                    <label className="mb-3 block text-sm font-semibold">
                      Select your interests
                    </label>

                    <div className="grid gap-3 sm:grid-cols-2">

                      {interests.map((interest) => (

                        <label
                          key={interest}
                          className="group flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 bg-[#faf8f5] p-4 transition hover:border-[#d5a85c]"
                        >

                          <input
                            type="checkbox"
                            name="interests"
                            value={interest}
                            className="h-4 w-4 accent-[#241017]"
                          />

                          <span className="text-sm text-black/60 group-hover:text-[#241017]">
                            {interest}
                          </span>

                        </label>

                      ))}

                    </div>

                  </div>

                  {/* ABOUT YOU */}

                  <div>

                    <div className="flex items-center gap-4">

                      <span className="text-xs text-[#a77a32]">
                        05
                      </span>

                      <div className="h-px flex-1 bg-black/10" />

                    </div>

                    <h3 className="mt-6 font-serif text-3xl">
                      Your story
                    </h3>

                    <p className="mt-2 text-sm text-black/40">
                      Share a little about yourself.
                    </p>

                  </div>

                  <div>

                    <label
                      htmlFor="bio"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Tell us about yourself
                    </label>

                    <textarea
                      id="bio"
                      name="bio"
                      rows={6}
                      placeholder="Tell us about your journey, interests, achievements, dreams, or what you hope to contribute..."
                      className="premium-input resize-none"
                    />

                  </div>

                  {/* INVOLVEMENT */}

                  <div>

                    <label
                      htmlFor="involvement"
                      className="mb-2 block text-sm font-semibold"
                    >
                      How would you like to contribute?
                    </label>

                    <select
                      id="involvement"
                      name="involvement"
                      defaultValue=""
                      className="premium-input"
                    >

                      <option value="" disabled>
                        Select an option
                      </option>

                      <option value="networking">
                        Networking & Connections
                      </option>

                      <option value="mentorship">
                        Mentorship
                      </option>

                      <option value="volunteering">
                        Volunteering
                      </option>

                      <option value="events">
                        Events & Programmes
                      </option>

                      <option value="partnerships">
                        Partnerships
                      </option>

                      <option value="storytelling">
                        Sharing My Story
                      </option>

                      <option value="support">
                        Supporting Other Women
                      </option>

                      <option value="all">
                        Open to Everything
                      </option>

                    </select>

                  </div>

                  {/* CONSENT */}

                  <div className="rounded-2xl border border-black/10 bg-[#f8f3eb] p-5">

                    <label className="flex cursor-pointer gap-4">

                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-5 w-5 accent-[#241017]"
                      />

                      <span className="text-sm leading-6 text-black/55">
                        I would like to join Chebomuren Global and be part of
                        the global Kalenjin women&apos;s sisterhood. *
                      </span>

                    </label>

                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="premium-button w-full rounded-full bg-[#241017] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white"
                  >
                    Join Chebomuren Global →
                  </button>

                  <p className="text-center text-xs leading-5 text-black/35">
                    Membership functionality will be connected to the
                    Chebomuren Global backend in the next development phase.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* OUR PROMISE */}

      <section className="bg-[#241017] px-6 py-28 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#e8bd72]">
                Our Promise
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                No woman
                <br />
                stands alone.
              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-white/55">
                We believe that when women support women, possibilities
                become greater.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/40">
                Together, we celebrate our past, strengthen our present, and
                inspire our future.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                {[
                  "Celebrate",
                  "Connect",
                  "Empower",
                  "Inspire",
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#e8bd72]"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-[#d5a85c] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#4d2924]">
            The Movement Is Growing
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
            Find your place.
            <br />
            Make your impact.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#3d2822]/60">
            There is room for your voice, your experience, your ideas, and
            your dreams.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#membership"
              className="premium-button rounded-full bg-[#241017] px-8 py-4 font-bold text-white"
            >
              Join the Sisterhood ↑
            </a>

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