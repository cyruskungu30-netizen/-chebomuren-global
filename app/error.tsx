"use client";

import { useEffect } from "react";

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
    <main className="flex min-h-[75vh] items-center justify-center bg-[#17110d] px-6 py-24 text-[#f7f1e6]">
      <div className="w-full max-w-2xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c8aa6b]">
          Ubuntu Couture House
        </p>

        <h1 className="mt-7 font-[var(--font-ubuntu-serif)] text-5xl font-light sm:text-7xl">
          Something interrupted the experience.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">
          Please try again. If the problem continues, return to the house and
          continue exploring.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-9 border border-[#c8aa6b] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#c8aa6b] hover:text-[#17110d]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}