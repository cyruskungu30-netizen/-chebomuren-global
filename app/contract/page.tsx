 import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

const PRINCIPLES = [
  {
    number: "01",
    title: "Heritage",
    text: "We honour the cultures, stories, and craftsmanship that shape every creation.",
  },
  {
    number: "02",
    title: "Intention",
    text: "Every material, silhouette, and detail is considered before it becomes part of the whole.",
  },
  {
    number: "03",
    title: "Craft",
    text: "We value patient hands, refined technique, and the beauty found in exceptional making.",
  },
];

export default function ContractPage() {
  return (
    <UbuntuShell>
      <main className="bg-[#f7f1e6] text-[#17110d]">
        <section className="relative min-h-screen overflow-hidden bg-[#17110d] px-6 pb-24 pt-40 text-white lg:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rounded-full border border-[#c9a45d]/20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-36 h-[360px] w-[360px] rounded-full border border-[#c9a45d]/10"
          />

          <div className="relative mx-auto flex min-h-[72vh] max-w-[1180px] flex-col justify-center">
            <div className="max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#c9a45d]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#e2c785]">
                  Ubuntu Couture House
                </p>
              </div>

              <h1 className="ubuntu-serif mt-8 max-w-5xl text-[clamp(4rem,9vw,9rem)] leading-[0.88] tracking-[-0.045em]">
                Crafted with
                <br />
                <span className="italic text-[#c9a45d]">intention.</span>
              </h1>

              <div className="mt-10 flex max-w-3xl flex-col gap-8 border-l border-white/15 pl-6 md:flex-row md:items-start md:gap-12 md:pl-8">
                <p className="max-w-2xl text-sm leading-8 text-white/55 md:text-base">
                  From couture fashion to sculptural jewellery and royal
                  headpieces, every creation begins with heritage and ends with
                  a story.
                </p>

                <div className="hidden shrink-0 pt-1 md:block">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                    Our philosophy
                  </p>
                  <p className="ubuntu-serif mt-3 text-xl text-white/80">
                    Wear the story.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="luxury-button inline-flex min-h-12 items-center justify-center text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2c785] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17110d]"
                >
                  Contact The House
                </Link>

                <Link
                  href="/collections"
                  className="inline-flex min-h-12 items-center justify-center border border-white/20 px-7 text-[10px] font-medium uppercase tracking-[0.28em] text-white/75 transition-colors duration-300 hover:border-[#c9a45d]/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2c785] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17110d]"
                >
                  Explore Collections
                </Link>
              </div>
            </div>

            <div className="mt-20 grid max-w-4xl grid-cols-1 border-t border-white/10 sm:grid-cols-3">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:px-7 first:sm:pl-0 last:sm:border-r-0 last:sm:pr-0"
                >
                  <p className="text-[9px] tracking-[0.25em] text-[#c9a45d]">
                    {principle.number}
                  </p>

                  <h2 className="ubuntu-serif mt-4 text-2xl">
                    {principle.title}
                  </h2>

                  <p className="mt-3 max-w-xs text-xs leading-6 text-white/40">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#92713d]">
                The House
              </p>

              <h2 className="ubuntu-serif mt-5 text-4xl leading-tight sm:text-5xl">
                More than a garment.
                <br />
                <span className="italic text-[#92713d]">A legacy.</span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm leading-8 text-[#17110d]/65 sm:text-base">
                Ubuntu Couture House creates pieces designed to carry meaning.
                Our work brings together contemporary luxury and the visual
                language of African heritage, creating objects that feel
                personal, enduring, and unmistakably their own.
              </p>

              <div className="mt-10 h-px w-full bg-[#17110d]/10" />

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#17110d]/40">
                  Couture · Jewellery · Headpieces
                </p>

                <Link
                  href="/contact"
                  className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#92713d] underline decoration-[#92713d]/40 underline-offset-8 transition-colors hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#92713d]"
                >
                  Begin a conversation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </UbuntuShell>
  );
}