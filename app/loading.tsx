 export default function Loading() {
  return (
    <main
      className="flex min-h-[80vh] items-center justify-center bg-[#f7f1e6] px-6 text-[#17110d]"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading Ubuntu Couture House"
    >
      <div className="flex flex-col items-center text-center">
        <div
          className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#a98448]"
          aria-hidden="true"
        >
          <span className="absolute inset-1 rounded-full border border-[#c9a45d]/30 animate-[spin_4s_linear_infinite]" />
          <span className="h-2 w-2 rounded-full bg-[#a98448] animate-pulse" />
        </div>

        <p className="mt-8 font-[var(--font-ubuntu-serif)] text-4xl font-light tracking-[-0.02em]">
          Ubuntu
        </p>

        <div className="mt-4 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-8 bg-[#a98448]/50" />
          <span className="h-1 w-1 rounded-full bg-[#a98448]" />
          <span className="h-px w-8 bg-[#a98448]/50" />
        </div>

        <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.4em] text-[#92713d]">
          Entering the House
        </p>
      </div>
    </main>
  );
}