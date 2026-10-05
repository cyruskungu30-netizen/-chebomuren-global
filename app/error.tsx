 "use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#17110d] px-5 py-24 text-[#f7f1e6] sm:px-8">
      <div
        aria-hidden="true"
        className="absolute -right-48 -top-56 h-[650px] w-[650px] rounded-full border border-[#c9a45d]/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-72 -left-56 h-[600px] w-[600px] rounded-full border border-[#c9a45d]/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="relative w-full max-w-[1000px]">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-20">
          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#211913]">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="ubuntu-serif text-[18rem] leading-none text-[#c9a45d]/10">
                  U
                </span>
              </div>

              <div className="absolute inset-x-8 bottom-8 border-t border-white/10 pt-5">
                <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-white/30">
                  Ubuntu Couture House
                </p>
                <p className="mt-2 text-xs text-[#dfc27c]/70">
                  A temporary interruption
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#d8b66a] sm:w-14"
              />

              <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#dfc27c]">
                Ubuntu Couture House
              </p>
            </div>

            <p className="mt-8 text-[8px] font-medium uppercase tracking-[0.35em] text-white/30">
              Something went wrong
            </p>

            <h1 className="ubuntu-serif mt-5 max-w-3xl text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.82] tracking-[-0.045em]">
              Something interrupted
              <br />
              <span className="italic text-[#dfc27c]">the experience.</span>
            </h1>

            <p className="mt-8 max-w-xl border-l border-white/10 pl-6 text-sm leading-8 text-white/50 md:text-base">
              Please try again. If the interruption continues, return to the
              House and continue exploring our collections.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => reset()}
                className="inline-flex min-h-[52px] items-center justify-center bg-[#c9a45d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:bg-[#dfc27c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfc27c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d]"
              >
                Try Again
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </button>

              <Link
                href="/"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/20 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-white/75 transition-colors duration-300 hover:border-[#c9a45d] hover:text-[#dfc27c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfc27c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#17110d]"
              >
                Return To The House
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-5 border-t border-white/10 pt-6">
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                Error
              </span>

              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#a17b3c]/60"
              />

              <span className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                Please refresh the experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}