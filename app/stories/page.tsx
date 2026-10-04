 import Image from "next/image";
import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

export default function StoriesPage() {
  return (
    <UbuntuShell>

      <section className="bg-[#17110d] px-6 pb-24 pt-40 text-white lg:px-12 lg:pb-36">

        <div className="mx-auto max-w-[1200px]">

          <p className="text-[9px] uppercase tracking-[0.45em] text-[#e2c785]">
            The Journal
          </p>

          <h1 className="ubuntu-serif mt-7 text-6xl md:text-[9rem]">
            Stories
            <br />
            <span className="italic text-[#c9a45d]">
              in every thread.
            </span>
          </h1>

        </div>

      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-36">

        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-2">

          <article className="luxury-card bg-[#eee4d3]">

            <div className="luxury-image relative aspect-[4/5]">

              <Image
                src="/images/elders-path-lookbook.jpeg"
                alt="The Elders Path"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-8">

              <p className="text-[8px] uppercase tracking-[0.3em] text-[#967333]">
                Heritage
              </p>

              <h2 className="ubuntu-serif mt-4 text-4xl">
                The Elder&apos;s Path
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#706257]">
                Discover the meaning behind heritage, leadership and the
                stories carried across generations.
              </p>

            </div>

          </article>

          <article className="luxury-card bg-[#eee4d3]">

            <div className="luxury-image relative aspect-[4/5]">

              <Image
                src="/images/ubuntu-brand-board.jpeg"
                alt="Ubuntu Couture House"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-8">

              <p className="text-[8px] uppercase tracking-[0.3em] text-[#967333]">
                The House
              </p>

              <h2 className="ubuntu-serif mt-4 text-4xl">
                A New Language of Luxury
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#706257]">
                Where African heritage meets contemporary fashion,
                craftsmanship and global luxury.
              </p>

            </div>

          </article>

        </div>

      </section>

      <section className="bg-[#c9a45d] px-6 py-24 text-center">

        <h2 className="ubuntu-serif text-5xl md:text-7xl">
          Every piece carries a story.
        </h2>

        <Link
          href="/collections"
          className="luxury-button luxury-button-dark mt-9"
        >
          Discover The Pieces
        </Link>

      </section>

    </UbuntuShell>
  );
}