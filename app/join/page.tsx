 import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

export default function JoinPage() {
  return (
    <UbuntuShell>

      <section className="min-h-screen bg-[#17110d] px-6 pb-24 pt-40 text-white lg:px-12 lg:pb-36">

        <div className="mx-auto flex min-h-[70vh] max-w-[1100px] flex-col items-center justify-center text-center">

          <p className="text-[9px] uppercase tracking-[0.45em] text-[#e2c785]">
            Enter The House
          </p>

          <h1 className="ubuntu-serif mt-7 text-6xl md:text-[9rem]">
            Join the
            <br />
            <span className="italic text-[#c9a45d]">
              Ubuntu world.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/50">
            Stay close to new collections, private appointments, stories and
            special Ubuntu Couture House experiences.
          </p>

          <Link
            href="/contact"
            className="luxury-button mt-10 text-white"
          >
            Begin A Conversation
          </Link>

        </div>

      </section>

    </UbuntuShell>
  );
}