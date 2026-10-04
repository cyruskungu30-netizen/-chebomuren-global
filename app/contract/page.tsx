 import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

export default function ContractPage() {
  return (
    <UbuntuShell>

      <section className="min-h-screen bg-[#17110d] px-6 pb-24 pt-40 text-white lg:px-12">

        <div className="mx-auto flex min-h-[70vh] max-w-[1100px] flex-col items-center justify-center text-center">

          <p className="text-[9px] uppercase tracking-[0.45em] text-[#e2c785]">
            Ubuntu Couture House
          </p>

          <h1 className="ubuntu-serif mt-7 text-6xl md:text-[8rem]">

            Crafted with

            <br />

            <span className="italic text-[#c9a45d]">
              intention.
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/50">
            From couture fashion to sculptural jewellery and royal headpieces,
            every creation begins with heritage and ends with a story.
          </p>

          <Link
            href="/contact"
            className="luxury-button mt-10 text-white"
          >
            Contact The House
          </Link>

        </div>

      </section>

    </UbuntuShell>
  );
}