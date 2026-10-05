 import Image from "next/image";
import Link from "next/link";

const meanings = [
  {
    number: "01",
    title: "Confidence",
    description:
      "Fashion designed to help women enter every room with presence and self-expression.",
  },
  {
    number: "02",
    title: "Resilience",
    description:
      "Natural materials and rare gems become symbols of strength, transformation and endurance.",
  },
  {
    number: "03",
    title: "Heritage",
    description:
      "Maasai beadwork and East African traditions are reinterpreted without losing their soul.",
  },
  {
    number: "04",
    title: "Leadership",
    description:
      "Royal headpieces celebrate dignity, power and the presence of African women.",
  },
];

export default function ImpactSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#eee4d3] text-[#17110d]"
      aria-labelledby="impact-title"
    >
      <div className="grid lg:grid-cols-2">
        <div className="luxury-image relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:min-h-[820px]">
          <Image
            src="/images/ubuntu-brand-portrait.jpeg"
            alt="Ubuntu Couture House"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-[1400ms] hover:scale-[1.025]"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
            aria-hidden="true"
          />

          <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10">
            <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/75">
              Ubuntu Couture House
            </p>

            <div className="mt-3 h-px w-12 bg-[#e2c785]" />
          </div>
        </div>

        <div className="flex flex-col justify-center px-7 py-24 sm:px-10 lg:px-20 lg:py-32">
          <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#967333]">
            Meaning Behind Every Creation
          </p>

          <h2
            id="impact-title"
            className="ubuntu-serif mt-6 text-5xl leading-[0.92] tracking-[-0.035em] md:text-7xl"
          >
            You don&apos;t just
            <br />
            wear it.
            <br />
            <span className="italic text-[#a17b3b]">
              You live it.
            </span>
          </h2>

          <div className="mt-12 border-t border-black/10">
            {meanings.map((meaning) => (
              <article
                key={meaning.number}
                className="group border-b border-black/10 py-7 transition-colors duration-300 hover:bg-black/[0.025]"
              >
                <div className="flex gap-6 sm:gap-8">
                  <span
                    className="pt-1 text-[8px] font-semibold tracking-[0.25em] text-[#967333]"
                    aria-hidden="true"
                  >
                    {meaning.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="ubuntu-serif text-2xl transition-colors duration-300 group-hover:text-[#967333] sm:text-3xl">
                      {meaning.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#706257]">
                      {meaning.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/collections"
              className="luxury-button luxury-button-dark focus:outline-none focus:ring-2 focus:ring-[#967333] focus:ring-offset-2 focus:ring-offset-[#eee4d3]"
            >
              Explore The Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}