 import Image from "next/image";
import UbuntuShell from "@/components/UbuntuShell";

export default function GalaPage() {
  return (
    <UbuntuShell>

      <section className="bg-[#17110d] px-6 pb-24 pt-40 text-white lg:px-12 lg:pb-36">

        <div className="mx-auto max-w-[1200px] text-center">

          <p className="text-[9px] uppercase tracking-[0.45em] text-[#e2c785]">
            Special Events
          </p>

          <h1 className="ubuntu-serif mt-7 text-6xl md:text-[8rem]">
            The Ubuntu
            <br />
            <span className="italic text-[#c9a45d]">
              Gala.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/50">
            A celebration of African elegance, women, heritage, artistry and
            the power of legacy.
          </p>

        </div>

      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-36">

        <div className="mx-auto max-w-[1400px]">

          <div className="luxury-image relative aspect-[16/9]">

            <Image
              src="/images/hero-couture-yellow.jpeg"
              alt="Ubuntu Couture House gala"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </section>

    </UbuntuShell>
  );
}