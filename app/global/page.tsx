 import Image from "next/image";
import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

const PILLARS = [
  {
    number: "01",
    title: "Heritage",
    text: "East African cultural language remains at the heart of every expression.",
  },
  {
    number: "02",
    title: "Identity",
    text: "Luxury becomes personal when design carries meaning, memory, and presence.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    text: "Natural materials and cultural artistry are refined through contemporary design.",
  },
  {
    number: "04",
    title: "Global Vision",
    text: "A distinctly African point of view belongs confidently in the global luxury conversation.",
  },
];

export default function GlobalPage() {
  return (
    <UbuntuShell>
      <main className="bg-[#f7f1e6] text-[#17110d]">
        <section className="relative min-h-[88vh] overflow-hidden bg-[#17110d] text-white">
          <Image
            src="/images/ubuntu-global-lookbook.jpeg"
            alt="Ubuntu Couture House global vision"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-[1800ms] hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-[#17110d]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17110d] via-[#17110d]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17110d] via-transparent to-[#17110d]/10" />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10 flex min-h-[88vh] items-end px-6 pb-16 pt-40 lg:px-12 lg:pb-24">
            <div className="mx-auto w-full max-w-[1500px]">
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-[#d8b66a]" />

                <p className="text-[9px] font-medium uppercase tracking-[0.48em] text-[#e2c785]">
                  Global Appeal
                </p>
              </div>

              <h1 className="ubuntu-serif mt-8 max-w-6xl text-[clamp(4rem,9vw,9rem)] leading-[0.84] tracking-[-0.045em]">
                Cultural Soul.
                <br />
                <span className="italic text-[#c9a45d]">
                  Global Vision.
                </span>
              </h1>

              <div className="mt-10 max-w-2xl border-l border-white/20 pl-6 lg:pl-8">
                <p className="text-sm leading-8 text-white/50 md:text-base">
                  A distinctly African point of view, carried with confidence
                  into the global language of contemporary luxury.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:px-10 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1250px] gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                The Global Perspective
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
                Rooted
                <br />
                here.
                <br />
                <span className="italic text-[#a17c3f]">Seen everywhere.</span>
              </h2>
            </div>

            <div className="max-w-3xl self-end">
              <p className="text-lg leading-9 text-[#51483e] sm:text-xl">
                Ubuntu Couture House carries East African heritage into a
                global conversation about beauty, identity, craftsmanship and
                modern luxury.
              </p>

              <p className="mt-8 text-sm leading-8 text-[#75695d]">
                The vision is not to dilute heritage in order to make it
                universal. It is to allow a strong cultural identity to stand
                confidently on its own terms — refined, contemporary and
                relevant beyond borders.
              </p>

              <div className="mt-10 border-l border-[#b18b45] pl-6">
                <p className="ubuntu-serif text-3xl italic text-[#96723a]">
                  From our roots to the world.
                </p>

                <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-[#8b7c6c]">
                  Ubuntu Couture House
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#211913] px-6 py-24 text-white sm:px-10 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1250px]">
            <div className="mb-16 max-w-4xl">
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                What Carries Forward
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.87] tracking-[-0.04em]">
                One identity.
                <br />
                <span className="italic text-[#d8b66a]">
                  Many possibilities.
                </span>
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 md:grid-cols-2">
              {PILLARS.map((pillar) => (
                <article
                  key={pillar.number}
                  className="group border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.025] sm:p-12"
                >
                  <span className="text-[8px] font-medium tracking-[0.3em] text-[#c9a45d]">
                    {pillar.number}
                  </span>

                  <h3 className="ubuntu-serif mt-8 text-4xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-8 text-white/40">
                    {pillar.text}
                  </p>

                  <div className="mt-8 h-px w-8 bg-[#c9a45d] transition-all duration-300 group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e9dfcf] px-6 py-24 sm:px-10 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#211913]">
              <Image
                src="/images/elders-path-lookbook.jpeg"
                alt="Ubuntu heritage and global vision"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17110d]/55 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/50">
                  Heritage / Future
                </p>

                <span className="h-px w-12 bg-[#d8b66a]" />
              </div>
            </div>

            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                Heritage Into The Future
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.04em]">
                The world can
                <br />
                meet us
                <br />
                <span className="italic text-[#a17c3f]">as we are.</span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-[#75695d]">
                Ubuntu Couture House creates a bridge between the richness of
                East African heritage and the expectations of modern luxury.
                The result is not imitation, but an original point of view
                shaped by culture.
              </p>

              <Link
                href="/collections"
                className="mt-9 inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-[#c9a45d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e9dfcf]"
              >
                Discover The Collections
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#c9a45d] px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1250px]">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/50">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-7 max-w-6xl text-[clamp(4rem,8vw,8rem)] leading-[0.84] tracking-[-0.05em]">
              Rooted in
              <br />
              <span className="italic">heritage.</span>
            </h2>

            <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-sm leading-8 text-black/55">
                A contemporary African luxury house with a vision that reaches
                beyond borders.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/collections/catalogue"
                  className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-white hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
                >
                  Explore Collections
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
                >
                  Contact The House
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </UbuntuShell>
  );
}