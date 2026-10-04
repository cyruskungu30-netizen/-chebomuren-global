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
    <section className="bg-[#eee4d3]">

      <div className="grid lg:grid-cols-2">

        <div className="luxury-image relative min-h-[700px]">

          <Image
            src="/images/ubuntu-brand-portrait.jpeg"
            alt="Ubuntu Couture House"
            fill
            className="object-cover"
            sizes="50vw"
          />

        </div>

        <div className="px-7 py-24 lg:px-20 lg:py-32">

          <p className="text-[9px] uppercase tracking-[0.4em] text-[#967333]">
            Meaning Behind Every Creation
          </p>

          <h2 className="ubuntu-serif mt-6 text-5xl leading-none md:text-7xl">

            You don&apos;t just

            <br />

            wear it.

            <br />

            <span className="italic text-[#a17b3b]">
              You live it.
            </span>

          </h2>

          <div className="mt-12">

            {meanings.map((meaning) => (

              <div
                key={meaning.number}
                className="border-t border-black/10 py-7"
              >

                <div className="flex gap-7">

                  <span className="text-[8px] tracking-[0.25em] text-[#967333]">
                    {meaning.number}
                  </span>

                  <div>

                    <h3 className="ubuntu-serif text-2xl">
                      {meaning.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#706257]">
                      {meaning.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <Link
            href="/collections"
            className="luxury-button luxury-button-dark mt-8"
          >
            Explore The Collections
          </Link>

        </div>

      </div>

    </section>
  );
}