 import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

export default function NominatePage() {
  return (
    <UbuntuShell>

      <section className="bg-[#eee4d3] px-6 py-32 lg:px-12 lg:py-44">

        <div className="mx-auto max-w-[1000px] text-center">

          <p className="text-[9px] uppercase tracking-[0.45em] text-[#967333]">
            Recognition
          </p>

          <h1 className="ubuntu-serif mt-7 text-6xl md:text-[8rem]">
            Honour a
            <br />
            <span className="italic text-[#a17b3b]">
              woman of impact.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#706257]">
            Ubuntu believes in celebrating women whose courage, leadership,
            creativity and service create opportunities for others.
          </p>

          <Link
            href="/contact"
            className="luxury-button luxury-button-dark mt-10"
          >
            Make An Enquiry
          </Link>

        </div>

      </section>

    </UbuntuShell>
  );
}