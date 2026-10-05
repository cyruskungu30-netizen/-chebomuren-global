 "use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#17110d] px-6 py-28 text-[#f7f1e6]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,164,93,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,164,93,.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a45d]/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-[8px] font-semibold uppercase tracking-[0.55em] text-[#d8b66a]">
          Ubuntu Couture House
        </p>

        <p
          className="ubuntu-serif mt-5 text-[150px] leading-none tracking-[-0.08em] text-[#c9a45d]/20 sm:text-[200px]"
          aria-hidden="true"
        >
          404
        </p>

        <h1 className="ubuntu-serif -mt-8 text-5xl leading-none sm:text-7xl">
          This story has moved.
        </h1>

        <div className="mx-auto mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#c9a45d]/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c9a45d]" />
          <span className="h-px w-10 bg-[#c9a45d]/60" />
        </div>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/55">
          The page you are looking for is no longer here. Return to the house
          and continue exploring Ubuntu Couture House.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-[52px] items-center justify-center border border-[#c9a45d] bg-[#c9a45d] px-8 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#17110d] transition hover:bg-[#dfc27c]"
          >
            Return Home
          </Link>

          <Link
            href="/collections/catalogue"
            className="inline-flex min-h-[52px] items-center justify-center border border-white/25 px-8 text-[8px] font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#c9a45d] hover:bg-[#c9a45d] hover:text-[#17110d]"
          >
            Explore Collections
          </Link>
        </div>

        <p className="ubuntu-serif mt-16 text-2xl italic text-white/25">
          “I am because we are.”
        </p>
      </div>
    </main>
  );
}