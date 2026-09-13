 "use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const faqs = [
  {
    question: "What is Chebomuren Global?",
    answer:
      "Chebomuren Global is a worldwide movement celebrating, connecting, and empowering Kalenjin women.",
  },
  {
    question: "Who can join the movement?",
    answer:
      "Kalenjin women from every generation, profession, country, and background are welcome to become part of the sisterhood.",
  },
  {
    question: "How can I nominate a woman?",
    answer:
      "You can nominate an exceptional Kalenjin woman through our online nomination form.",
  },
  {
    question: "How can my organisation partner with Chebomuren Global?",
    answer:
      "Businesses, organisations, institutions, and individuals can contact us to discuss sponsorships, partnerships, events, and programmes.",
  },
  {
    question: "Where is Chebomuren Global based?",
    answer:
      "Chebomuren Global is a global movement connecting Kalenjin women across Kenya and the world.",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f2e9] text-[#0b211b]">

      {/* NAVIGATION */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061710]/90 text-white backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <Link href="/" className="leading-none">

            <div className="font-serif text-2xl font-bold tracking-wide text-[#d6ad68]">
              Chebomuren
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.4em] text-white/50">
              Global
            </div>

          </Link>

          <div className="hidden items-center gap-8 md:flex">

            <Link
              href="/about"
              className="text-sm text-white/70 transition hover:text-[#d6ad68]"
            >
              About
            </Link>

            <Link
              href="/gala"
              className="text-sm text-white/70 transition hover:text-[#d6ad68]"
            >
              Gala
            </Link>

            <Link
              href="/women"
              className="text-sm text-white/70 transition hover:text-[#d6ad68]"
            >
              Women
            </Link>

            <Link
              href="/nominate"
              className="text-sm text-white/70 transition hover:text-[#d6ad68]"
            >
              Nominate
            </Link>

            <Link
              href="/contact"
              className="text-sm text-[#d6ad68]"
            >
              Contact
            </Link>

          </div>

          <Link
            href="/join"
            className="hidden rounded-full bg-[#bd8d45] px-6 py-3 text-sm font-bold text-[#0b211b] transition hover:-translate-y-1 hover:bg-[#edca8c] md:block"
          >
            Join the Movement
          </Link>

        </div>
      </nav>

      {/* HERO */}

      <section className="relative min-h-[78vh] overflow-hidden bg-[#061710] pt-28 text-white">

        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(214,173,104,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(214,173,104,0.06)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="pointer-events-none absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#d6ad68] shadow-[0_0_30px_8px_rgba(214,173,104,0.35)] animate-pulse" />
        <div className="pointer-events-none absolute right-[16%] top-[34%] h-1.5 w-1.5 rounded-full bg-[#8fc7ae] shadow-[0_0_25px_7px_rgba(143,199,174,0.3)] animate-pulse" />
        <div className="pointer-events-none absolute bottom-[16%] right-[28%] h-1 w-1 rounded-full bg-[#d6ad68] shadow-[0_0_20px_6px_rgba(214,173,104,0.3)] animate-pulse" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(213,168,92,0.2),transparent_35%)]" />

        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#bd8d45]/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#1f5a4a]/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 py-28 lg:px-10">

          <div className="max-w-5xl">

            <p className="hero-reveal text-xs uppercase tracking-[0.4em] text-[#d6ad68]">
              Let&apos;s Connect
            </p>

            <h1 className="hero-reveal hero-delay-1 mt-6 font-serif text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-[100px]">
              Start a
              <br />
              <span className="text-[#d6ad68]">
                conversation.
              </span>
            </h1>

            <p className="hero-reveal hero-delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/55">
              Whether you want to join the movement, nominate a woman,
              partner with us, support our work, or simply say hello,
              we would love to hear from you.
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT DETAILS */}

      <section className="px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="premium-card rounded-3xl border border-black/10 bg-white p-7">

              <div className="text-2xl text-[#bd8d45]">
                ✉
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#86652f]">
                Email
              </p>

              <p className="mt-3 font-serif text-xl">
                hello@chebomuren.global
              </p>

              <p className="mt-2 text-sm text-black/40">
                General enquiries
              </p>

            </div>

            <div className="premium-card rounded-3xl border border-black/10 bg-white p-7">

              <div className="text-2xl text-[#bd8d45]">
                ☎
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#86652f]">
                Phone
              </p>

              <p className="mt-3 font-serif text-xl">
                +254 700 000 000
              </p>

              <p className="mt-2 text-sm text-black/40">
                General enquiries
              </p>

            </div>

            <div className="premium-card rounded-3xl border border-black/10 bg-white p-7">

              <div className="text-2xl text-[#bd8d45]">
                ◎
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#86652f]">
                Location
              </p>

              <p className="mt-3 font-serif text-xl">
                Worldwide
              </p>

              <p className="mt-2 text-sm text-black/40">
                Connecting globally
              </p>

            </div>

            <div className="premium-card rounded-3xl border border-black/10 bg-white p-7">

              <div className="text-2xl text-[#bd8d45]">
                ✦
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#86652f]">
                Social
              </p>

              <div className="mt-3 flex gap-4 text-sm font-semibold">

                <span className="hover:text-[#1f5a4a]">
                  Facebook
                </span>

                <span className="hover:text-[#1f5a4a]">
                  Instagram
                </span>

              </div>

              <p className="mt-2 text-sm text-black/40">
                Follow our journey
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="bg-[#e9e3d6] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.4fr]">

            {/* LEFT */}

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#86652f]">
                Send Us A Message
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                We&apos;re
                <br />
                listening.
              </h2>

              <p className="mt-7 max-w-md text-lg leading-8 text-black/50">
                Have a question, idea, partnership proposal, or something
                you would like to share with us?
              </p>

              <div className="mt-10 border-l-2 border-[#bd8d45] pl-6">

                <p className="font-serif text-2xl leading-9 text-[#1f5a4a]">
                  &quot;Together, we celebrate our past, strengthen our
                  present, and inspire our future.&quot;
                </p>

              </div>

            </div>

            {/* FORM */}

            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_30px_80px_rgba(36,16,23,0.08)] sm:p-10 lg:p-12">

              {sent ? (

                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#bd8d45] text-3xl">
                    ✓
                  </div>

                  <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#86652f]">
                    Message Sent
                  </p>

                  <h2 className="mt-5 font-serif text-5xl">
                    Thank you.
                  </h2>

                  <p className="mt-5 max-w-lg text-lg leading-8 text-black/50">
                    Your message has been received. Once the backend is
                    connected, this form will deliver messages directly to
                    the Chebomuren Global team.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="premium-button mt-8 rounded-full bg-[#241017] px-8 py-4 font-bold text-white"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="premium-input"
                      />

                    </div>

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

                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

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

                    <div>

                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Subject *
                      </label>

                      <select
                        id="subject"
                        name="subject"
                        required
                        defaultValue=""
                        className="premium-input"
                      >

                        <option value="" disabled>
                          What is this about?
                        </option>

                        <option value="general">
                          General Enquiry
                        </option>

                        <option value="membership">
                          Membership
                        </option>

                        <option value="nomination">
                          Nomination
                        </option>

                        <option value="gala">
                          Gala
                        </option>

                        <option value="partnership">
                          Partnership
                        </option>

                        <option value="sponsorship">
                          Sponsorship
                        </option>

                        <option value="media">
                          Media & Communications
                        </option>

                        <option value="other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>

                  <div>

                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={8}
                      placeholder="Tell us how we can help..."
                      className="premium-input resize-none"
                    />

                  </div>

                  <button
                    type="submit"
                    className="premium-button w-full rounded-full bg-[#241017] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white"
                  >
                    Send Message →
                  </button>

                  <p className="text-center text-xs text-black/30">
                    We&apos;ll treat your information with care.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>
      </section>

      {/* PARTNERSHIPS */}

      <section className="bg-[#241017] px-6 py-28 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#d6ad68]">
                Partnerships
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                Let&apos;s create
                <br />
                <span className="text-[#d6ad68]">
                  impact together.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-white/50">
                We welcome organisations, businesses, institutions, brands,
                foundations, and individuals who believe in celebrating and
                empowering Kalenjin women.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Gala Sponsorship",
                  "Programme Partnerships",
                  "Community Initiatives",
                  "Media Partnerships",
                  "Corporate Partnerships",
                  "Women Empowerment",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/60"
                  >
                    <span className="mr-3 text-[#d6ad68]">
                      ✦
                    </span>
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-[#86652f]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 font-serif text-5xl lg:text-7xl">
              Questions?
            </h2>

          </div>

          <div className="mt-14 space-y-4">

            {faqs.map((faq, index) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-black/10 bg-white p-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl">

                  <span>
                    <span className="mr-4 text-sm text-[#86652f]">
                      0{index + 1}
                    </span>

                    {faq.question}
                  </span>

                  <span className="text-2xl text-[#bd8d45] transition group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-5 max-w-3xl pl-10 text-sm leading-7 text-black/50">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-[#bd8d45] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#183d32]">
            Stay Connected
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
            Your voice belongs
            <br />
            in this movement.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#173a30]/60">
            Join a global sisterhood celebrating Kalenjin women and
            inspiring the generations that follow.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/join"
              className="premium-button rounded-full bg-[#241017] px-8 py-4 font-bold text-white"
            >
              Join the Movement →
            </Link>

            <Link
              href="/nominate"
              className="rounded-full border border-[#183d32]/30 px-8 py-4 font-bold text-[#241017] transition hover:bg-white/30"
            >
              Nominate a Woman
            </Link>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#04110d] px-6 py-14 text-white lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            <div className="lg:col-span-2">

              <Link
                href="/"
                className="font-serif text-3xl text-[#d6ad68]"
              >
                Chebomuren Global
              </Link>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                Celebrating Kalenjin Women. Inspiring Our Future.
              </p>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#d6ad68]">
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

              <p className="text-xs uppercase tracking-[0.25em] text-[#d6ad68]">
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