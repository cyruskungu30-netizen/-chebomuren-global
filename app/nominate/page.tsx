 import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

const recognitionPillars = [
  {
    number: "01",
    title: "Courage",
    text: "Women who move forward with conviction, even when the path demands resilience.",
  },
  {
    number: "02",
    title: "Leadership",
    text: "Women whose influence creates direction, opportunity and meaningful change for others.",
  },
  {
    number: "03",
    title: "Creativity",
    text: "Women whose imagination, talent and vision give new expression to African identity.",
  },
  {
    number: "04",
    title: "Service",
    text: "Women who use their gifts, knowledge and position to uplift the people around them.",
  },
];

export default function NominatePage() {
  return (
    <UbuntuShell>
      <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
        <section className="relative overflow-hidden bg-[#17110d] px-6 pb-24 pt-36 text-white sm:px-10 lg:px-12 lg:pb-32 lg:pt-48">
          <div
            aria-hidden="true"
            className="absolute right-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full border border-[#c9a45d]/10"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-16rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full border border-[#c9a45d]/10"
          />

          <div className="relative mx-auto max-w-[1250px]">
            <div className="max-w-5xl">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-[#c9a45d]"
                />

                <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#d8b66a]">
                  Recognition
                </p>
              </div>

              <h1 className="ubuntu-serif mt-8 text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.045em]">
                Honour a
                <br />
                <span className="italic text-[#d8b66a]">
                  woman of impact.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl border-l border-white/15 pl-6 text-sm leading-8 text-white/55 md:text-base">
                Ubuntu believes in celebrating women whose courage, leadership,
                creativity and service create opportunities for others.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#967333]">
                The Ubuntu Recognition
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3rem,5vw,5.5rem)] leading-[0.88] tracking-[-0.035em]">
                Celebrate
                <br />
                <span className="italic text-[#a17b3b]">her story.</span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-9 text-[#51483e]">
                Some women change lives quietly. Others create movements. Some
                lead from the front, while others build foundations for the
                people who come after them.
              </p>

              <p className="mt-7 text-sm leading-8 text-[#75695d]">
                This recognition is an invitation to bring those stories
                forward—to honour women whose work, character and contribution
                reflect the spirit of Ubuntu.
              </p>

              <div className="mt-8 h-px w-14 bg-[#a17b3b]" />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="recognition-pillars"
          className="bg-[#eee4d3] px-6 py-20 sm:px-10 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-[1250px]">
            <div className="mb-14 max-w-3xl">
              <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#967333]">
                What We Honour
              </p>

              <h2
                id="recognition-pillars"
                className="ubuntu-serif mt-6 text-[clamp(3rem,5vw,5.5rem)] leading-[0.88] tracking-[-0.035em]"
              >
                Four expressions
                <br />
                of <span className="italic text-[#a17b3b]">impact.</span>
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 md:grid-cols-2">
              {recognitionPillars.map((pillar) => (
                <article
                  key={pillar.number}
                  className="min-h-[260px] border-b border-r border-black/10 p-7 sm:p-10"
                >
                  <span className="text-[8px] font-medium tracking-[0.3em] text-[#967333]">
                    {pillar.number}
                  </span>

                  <h3 className="ubuntu-serif mt-14 text-4xl leading-none sm:text-5xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#75695d]">
                    {pillar.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#17110d] px-6 py-24 text-white sm:px-10 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
              Begin The Conversation
            </p>

            <h2 className="ubuntu-serif mt-7 text-[clamp(3.5rem,7vw,7rem)] leading-[0.84] tracking-[-0.04em]">
              Tell us about
              <br />
              <span className="italic text-[#d8b66a]">her impact.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/45">
              Share the story of a woman whose courage, leadership, creativity
              or service deserves to be recognised.
            </p>

            <Link
              href="/contact"
              className="luxury-button luxury-button-dark mt-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b66a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d]"
            >
              Make An Enquiry
            </Link>
          </div>
        </section>
      </main>
    </UbuntuShell>
  );
}