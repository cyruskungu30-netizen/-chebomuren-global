 import Image from "next/image";
import UbuntuShell from "@/components/UbuntuShell";

export default function GlobalPage() {
  return (
    <UbuntuShell>

      <section className="relative min-h-[80vh] bg-[#17110d]">

        <Image
          src="/images/ubuntu-global-lookbook.jpeg"
          alt="Ubuntu Couture House global vision"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-[80vh] items-end px-6 pb-20 lg:px-12">

          <div className="mx-auto w-full max-w-[1500px]">

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#e2c785]">
              Global Appeal
            </p>

            <h1 className="ubuntu-serif mt-6 text-6xl text-white md:text-[9rem]">

              Cultural Soul.

              <br />

              <span className="italic text-[#c9a45d]">
                Global Vision.
              </span>

            </h1>

          </div>

        </div>

      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-36">

        <div className="mx-auto max-w-[1100px] text-center">

          <p className="text-sm leading-9 text-[#706257]">
            Ubuntu Couture House carries East African heritage into a global
            conversation about beauty, identity, craftsmanship and modern
            luxury.
          </p>

        </div>

      </section>

    </UbuntuShell>
  );
}