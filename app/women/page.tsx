 import Image from "next/image";
import UbuntuShell from "@/components/UbuntuShell";

export default function WomenPage() {
  return (
    <UbuntuShell>

      <section className="bg-[#17110d] px-6 pb-24 pt-40 text-white lg:px-12 lg:pb-36">

        <div className="mx-auto max-w-[1200px]">

          <p className="text-[9px] uppercase tracking-[0.45em] text-[#e2c785]">
            The Woman
          </p>

          <h1 className="ubuntu-serif mt-7 text-6xl md:text-[9rem]">
            For women
            <br />
            <span className="italic text-[#c9a45d]">
              becoming.
            </span>
          </h1>

        </div>

      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-36">

        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">

          <div className="luxury-image relative aspect-[4/5]">

            <Image
              src="/images/couture-brown-front.jpeg"
              alt="Ubuntu woman"
              fill
              className="object-cover"
            />

          </div>

          <div className="flex items-center">

            <div>

              <p className="text-sm leading-9 text-[#706257]">
                Ubuntu Couture House is created for women who carry stories,
                honour their roots and walk confidently into the future.
              </p>

              <p className="mt-7 text-sm leading-9 text-[#706257]">
                Every creation is designed to become part of that journey:
                confidence, identity, resilience, beauty and purpose.
              </p>

            </div>

          </div>

        </div>

      </section>

    </UbuntuShell>
  );
}