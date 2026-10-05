 import Image from "next/image";
import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

const EVENT_DETAILS = [
  {
    number: "01",
    title: "African Elegance",
    text: "An evening shaped by couture, jewellery, beauty and the visual language of African luxury.",
  },
  {
    number: "02",
    title: "Women & Legacy",
    text: "A celebration of women whose presence, creativity and leadership continue to shape generations.",
  },
  {
    number: "03",
    title: "Artistry",
    text: "Craft, design and cultural expression brought together through an immersive House experience.",
  },
];

export default function GalaPage() {
  return (
    <UbuntuShell>
      <main className="bg-[#f7f1e6] text-[#17110d]">
        <section className="relative overflow-hidden bg-[#17110d] px-6 pb-24 pt-40 text-white lg:px-12 lg:pb-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "76px 76px",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-16 h-[500px] w-[500px] rounded-full border border-[#c9a45d]/20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-40 h-[340px] w-[340px] rounded-full border border-[#c9a45d]/10"
          />

          <div className="relative mx-auto max-w-[1250px]">
            <div className="grid min-h-[62vh] items-end gap-12 lg:grid-cols-[1fr_0.35fr]">
              <div className="text-left">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#c9a45d]" />

                  <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#e2c785]">
                    Special Events
                  </p>
                </div>

                <h1 className="ubuntu-serif mt-8 text-[clamp(4.5rem,10vw,9rem)] leading-[0.84] tracking-[-0.045em]">
                  The Ubuntu
                  <br />
                  <span className="italic text-[#c9a45d]">Gala.</span>
                </h1>

                <p className="mt-10 max-w-2xl border-l border-white/15 pl-6 text-sm leading-8 text-white/50 md:text-base">
                  A celebration of African elegance, women, heritage, artistry
                  and the power of legacy.
                </p>
              </div>

              <div className="hidden border-l border-white/10 pl-8 lg:block">
                <p className="text-[8px] uppercase tracking-[0.35em] text-white/30">
                  An Ubuntu Couture House Event
                </p>

                <p className="ubuntu-serif mt-5 text-3xl leading-tight text-white/75">
                  Where culture
                  <br />
                  meets couture.
                </p>

                <div className="mt-8 h-px w-12 bg-[#c9a45d]" />
              </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-7">
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-[8px] uppercase tracking-[0.3em] text-white/30">
                <span>Couture</span>
                <span>Heritage</span>
                <span>Artistry</span>
                <span>Women</span>
                <span>Legacy</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="group relative aspect-[16/9] overflow-hidden bg-[#211913]">
              <Image
                src="/images/hero-couture-yellow.jpeg"
                alt="Ubuntu Couture House gala"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1400px"
                className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17110d]/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[8px] uppercase tracking-[0.35em] text-white/60">
                  Ubuntu Couture House
                </p>

                <span className="h-px w-12 bg-[#d8b66a]" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#e9dfcf] px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1250px]">
            <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                  The Evening
                </p>

                <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
                  An evening
                  <br />
                  of
                  <br />
                  <span className="italic text-[#a17c3f]">meaning.</span>
                </h2>
              </div>

              <div className="max-w-2xl self-end">
                <p className="text-lg leading-9 text-[#51483e] sm:text-xl">
                  The Ubuntu Gala brings together fashion, heritage, artistry
                  and the women whose stories continue to shape the future.
                </p>

                <p className="mt-7 text-sm leading-8 text-[#75695d]">
                  More than a celebration, the gala is an expression of the
                  House philosophy — that luxury becomes more powerful when it
                  carries identity, memory and purpose.
                </p>
              </div>
            </div>

            <div className="mt-20 grid border-l border-t border-black/10 md:grid-cols-3">
              {EVENT_DETAILS.map((item) => (
                <article
                  key={item.number}
                  className="group border-b border-r border-black/10 bg-[#e9dfcf] p-8 transition-colors duration-300 hover:bg-[#dfd3c0] sm:p-10"
                >
                  <span className="text-[8px] font-medium tracking-[0.3em] text-[#a17b3c]">
                    {item.number}
                  </span>

                  <h3 className="ubuntu-serif mt-8 text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#75695d]">
                    {item.text}
                  </p>

                  <div className="mt-8 h-px w-8 bg-[#a17b3c] transition-all duration-300 group-hover:w-14" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#17110d] px-6 py-24 text-white sm:px-10 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                The Spirit Of Ubuntu
              </p>

              <h2 className="ubuntu-serif mt-7 text-[clamp(3.5rem,7vw,7rem)] leading-[0.86] tracking-[-0.04em]">
                Beauty carries
                <br />
                <span className="italic text-[#d8b66a]">memory.</span>
              </h2>
            </div>

            <div className="border-l border-white/10 pl-7 lg:pb-2">
              <p className="text-sm leading-8 text-white/45">
                Every gathering is an opportunity to honour where we come from,
                celebrate where we are, and imagine where we are going.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-[52px] items-center justify-center border border-[#c9a45d]/50 px-7 text-[8px] font-medium uppercase tracking-[0.3em] text-[#d8b66a] transition-colors duration-300 hover:border-[#c9a45d] hover:bg-[#c9a45d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b66a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17110d]"
              >
                Contact The House
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#c9a45d] px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1250px]">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/50">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-7 max-w-5xl text-[clamp(4rem,8vw,8rem)] leading-[0.84] tracking-[-0.05em]">
              A night of
              <br />
              <span className="italic">African elegance.</span>
            </h2>

            <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-sm leading-8 text-black/55">
                An expression of heritage, artistry, women and the enduring
                power of legacy.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/collections/catalogue"
                  className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-white hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
                >
                  Explore Collections
                </Link>

                <Link
                  href="/appointments"
                  className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
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