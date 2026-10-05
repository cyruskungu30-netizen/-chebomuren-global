 import Image from "next/image";
import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

const pillars = [
  {
    number: "01",
    title: "Identity",
    text: "Creations that honour the woman you are and the heritage that shaped you.",
  },
  {
    number: "02",
    title: "Confidence",
    text: "Pieces designed to make presence felt without asking for permission.",
  },
  {
    number: "03",
    title: "Resilience",
    text: "A visual language inspired by strength, endurance and the women who came before.",
  },
  {
    number: "04",
    title: "Becoming",
    text: "Luxury for every chapter of growth, ambition, reinvention and purpose.",
  },
];

export default function WomenPage() {
  return (
    <UbuntuShell>
      <main className="bg-[#f7f1e6] text-[#17110d]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#17110d] px-5 pb-24 pt-36 text-white sm:px-8 lg:px-14 lg:pb-36 lg:pt-48">
          <div
            aria-hidden="true"
            className="absolute -right-40 -top-56 h-[650px] w-[650px] rounded-full border border-[#c9a45d]/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-72 left-[-18rem] h-[620px] w-[620px] rounded-full border border-[#c9a45d]/10"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
              backgroundSize: "96px 96px",
            }}
          />

          <div className="relative mx-auto max-w-[1400px]">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#d8b66a] sm:w-14"
              />

              <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#e2c785]">
                The Woman
              </p>
            </div>

            <h1 className="ubuntu-serif mt-8 max-w-6xl text-[clamp(4rem,10vw,9rem)] leading-[0.8] tracking-[-0.055em]">
              For women
              <br />
              <span className="italic text-[#c9a45d]">becoming.</span>
            </h1>

            <div className="mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-2xl border-l border-white/15 pl-6 text-sm leading-8 text-white/50 md:text-base">
                A celebration of women who carry stories, honour their roots
                and move with confidence toward what comes next.
              </p>

              <div className="hidden border-l border-white/10 pl-8 lg:block">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Ubuntu Couture House
                </p>
                <p className="mt-2 text-sm text-[#dfc27c]">
                  Identity · Strength · Purpose
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ded2c0]">
              <Image
                src="/images/couture-brown-front.jpeg"
                alt="Ubuntu Couture woman wearing a refined heritage-inspired couture piece"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
              />

              <div className="absolute bottom-6 left-6">
                <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-white/80">
                  Ubuntu Couture House
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                The Woman We Dress
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3rem,6vw,6rem)] leading-[0.84] tracking-[-0.04em]">
                Rooted.
                <br />
                <span className="italic text-[#a17c3f]">Unapologetic.</span>
              </h2>

              <div className="mt-9 max-w-xl border-t border-[#17110d]/10 pt-8">
                <p className="text-sm leading-8 text-[#706257] md:text-base">
                  Ubuntu Couture House is created for women who carry stories,
                  honour their roots and walk confidently into the future.
                </p>

                <p className="mt-7 text-sm leading-8 text-[#706257] md:text-base">
                  Every creation is designed to become part of that journey:
                  confidence, identity, resilience, beauty and purpose.
                </p>
              </div>

              <Link
                href="/collections/catalogue"
                className="mt-9 inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-[#c9a45d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
              >
                Explore The Collection
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="bg-[#e9dfcf] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                  Her Journey
                </p>

                <h2 className="ubuntu-serif mt-6 text-[clamp(3rem,6vw,6rem)] leading-[0.84] tracking-[-0.04em]">
                  Every chapter
                  <br />
                  <span className="italic text-[#a17c3f]">
                    deserves beauty.
                  </span>
                </h2>
              </div>

              <div className="grid gap-px bg-[#17110d]/10 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <article
                    key={pillar.number}
                    className="bg-[#e9dfcf] p-7 transition-colors duration-300 hover:bg-[#ded2c0] sm:p-9"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-medium tracking-[0.3em] text-[#95713a]">
                        {pillar.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-[#a17b3c]"
                      />
                    </div>

                    <h3 className="ubuntu-serif mt-12 text-3xl leading-none">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#706257]">
                      {pillar.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-[#17110d] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-36">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                  Our Philosophy
                </p>

                <h2 className="ubuntu-serif mt-6 text-[clamp(3.2rem,7vw,7rem)] leading-[0.8] tracking-[-0.045em]">
                  She does
                  <br />
                  not follow
                  <br />
                  <span className="italic text-[#d8b66a]">the room.</span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-lg leading-9 text-white/60 md:text-xl">
                  She brings her own story into it. Our work is made for women
                  whose presence comes from knowing who they are, where they
                  come from and what they are becoming.
                </p>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="max-w-xl text-sm leading-8 text-white/40">
                    From couture and jewellery to rare gems and ceremonial
                    headpieces, every creation is an invitation to express
                    identity with intention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#c9a45d] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-black/40 sm:w-14"
              />

              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/55">
                For Her
              </p>
            </div>

            <h2 className="ubuntu-serif mt-8 max-w-6xl text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.8] tracking-[-0.055em]">
              Wear your
              <br />
              story with
              <br />
              <span className="italic">intention.</span>
            </h2>

            <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-sm leading-8 text-black/55 md:text-base">
                Discover pieces created to honour your presence, your heritage
                and the woman you are becoming.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/collections/catalogue"
                  className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-white hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
                >
                  Explore Collections
                </Link>

                <Link
                  href="/appointments"
                  className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
                >
                  Private Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </UbuntuShell>
  );
}