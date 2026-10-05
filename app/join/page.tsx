 import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

const HOUSE_ACCESS = [
  {
    number: "01",
    title: "New Collections",
    text: "Discover new couture, jewellery and signature creations as they enter the House.",
  },
  {
    number: "02",
    title: "Private Appointments",
    text: "Experience Ubuntu Couture House through a more personal and considered consultation.",
  },
  {
    number: "03",
    title: "House Stories",
    text: "Follow the heritage, craftsmanship, people and ideas that shape the Ubuntu world.",
  },
  {
    number: "04",
    title: "Special Experiences",
    text: "Stay connected to selected events, presentations and moments from the House.",
  },
];

export default function JoinPage() {
  return (
    <UbuntuShell>
      <main className="bg-[#17110d] text-white">
        <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-40 lg:px-12 lg:pb-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "78px 78px",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-16 h-[620px] w-[620px] rounded-full border border-[#c9a45d]/15"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-40 h-[420px] w-[420px] rounded-full border border-[#c9a45d]/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-260px] left-[-260px] h-[620px] w-[620px] rounded-full border border-white/[0.05]"
          />

          <div className="relative mx-auto flex min-h-[72vh] max-w-[1250px] flex-col justify-center">
            <div className="max-w-6xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-[#c9a45d]" />

                <p className="text-[9px] font-medium uppercase tracking-[0.48em] text-[#e2c785]">
                  Enter The House
                </p>
              </div>

              <h1 className="ubuntu-serif mt-8 text-[clamp(4.2rem,9vw,9rem)] leading-[0.84] tracking-[-0.05em]">
                Join the
                <br />
                <span className="italic text-[#c9a45d]">
                  Ubuntu world.
                </span>
              </h1>

              <div className="mt-10 grid max-w-4xl gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-2xl text-sm leading-8 text-white/50 md:text-base">
                  Stay close to new collections, private appointments, stories
                  and special Ubuntu Couture House experiences.
                </p>

                <p className="hidden text-right text-[8px] uppercase leading-6 tracking-[0.3em] text-white/25 md:block">
                  Heritage
                  <br />
                  Craft
                  <br />
                  Identity
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center bg-[#c9a45d] px-8 text-[9px] font-medium uppercase tracking-[0.28em] text-[#17110d] transition-colors duration-300 hover:bg-[#dfc27c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2c785] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17110d]"
                >
                  Begin A Conversation
                </Link>

                <Link
                  href="/collections/catalogue"
                  className="inline-flex min-h-[52px] items-center justify-center border border-white/20 px-8 text-[9px] font-medium uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:border-[#c9a45d] hover:text-[#e2c785] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2c785] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17110d]"
                >
                  Explore The House
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-12 max-w-[1250px]">
            <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {HOUSE_ACCESS.map((item) => (
                <article
                  key={item.number}
                  className="group border-b border-r border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.025] sm:p-8"
                >
                  <span className="text-[8px] font-medium tracking-[0.3em] text-[#c9a45d]">
                    {item.number}
                  </span>

                  <h2 className="ubuntu-serif mt-8 text-2xl leading-tight">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-xs leading-6 text-white/35">
                    {item.text}
                  </p>

                  <div className="mt-8 h-px w-7 bg-[#c9a45d] transition-all duration-300 group-hover:w-12" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#211913] px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                Stay Close
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.88] tracking-[-0.04em]">
                Enter a world
                <br />
                shaped by
                <br />
                <span className="italic text-[#d8b66a]">story.</span>
              </h2>
            </div>

            <div className="max-w-2xl self-end">
              <p className="text-lg leading-9 text-white/60 sm:text-xl">
                Ubuntu is more than what we create. It is the connection
                between heritage, identity, artistry and the people who carry
                those stories forward.
              </p>

              <p className="mt-7 text-sm leading-8 text-white/40">
                Whether you are discovering the House for the first time,
                exploring a collection or seeking a private experience, your
                journey begins with a conversation.
              </p>

              <div className="mt-10 border-l border-[#c9a45d] pl-6">
                <p className="ubuntu-serif text-3xl italic text-[#d8b66a]">
                  Wear your story.
                </p>

                <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Ubuntu Couture House
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#c9a45d] px-6 py-24 text-[#17110d] sm:px-10 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1250px]">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/50">
              Your Invitation
            </p>

            <h2 className="ubuntu-serif mt-7 max-w-6xl text-[clamp(4rem,8vw,8rem)] leading-[0.84] tracking-[-0.05em]">
              Your place in
              <br />
              <span className="italic">the story.</span>
            </h2>

            <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-sm leading-8 text-black/55">
                Connect with Ubuntu Couture House and discover a world where
                heritage meets contemporary luxury.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-white hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
                >
                  Contact The House
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