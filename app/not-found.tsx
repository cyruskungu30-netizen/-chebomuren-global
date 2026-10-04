 import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#17110d] px-6 py-24 text-[#f7f1e6]">
      <div className="w-full max-w-3xl text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#c9a45d]">
          Ubuntu Couture House
        </p>

        <p className="mt-8 font-[var(--font-ubuntu-serif)] text-8xl font-light leading-none text-[#c9a45d]/40 sm:text-[12rem]">
          404
        </p>

        <h1 className="mt-4 font-[var(--font-ubuntu-serif)] text-5xl font-light sm:text-6xl">
          This story has moved.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/55">
          The page you are looking for is no longer here. Return to the
          house and continue exploring Ubuntu Couture House.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-[#c9a45d] px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#17110d] transition hover:bg-[#f0d59b]"
          >
            Return Home
          </Link>

          <Link
            href="/collections/catalogue"
            className="border border-white/25 px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] transition hover:border-[#c9a45d] hover:text-[#c9a45d]"
          >
            Explore Collections
          </Link>
        </div>

        <p className="mt-12 font-[var(--font-ubuntu-serif)] text-xl italic text-white/40">
          “I am because we are.”
        </p>
      </div>
    </main>
  );
}