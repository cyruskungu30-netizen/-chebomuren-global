 export default function Loading() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f7f1e6] text-[#17110d]">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#a98448]">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#a98448]" />
        </div>

        <p className="mt-7 font-[var(--font-ubuntu-serif)] text-3xl font-light">
          Ubuntu
        </p>

        <p className="mt-2 text-[8px] uppercase tracking-[0.35em] text-[#92713d]">
          Entering the house
        </p>
      </div>
    </main>
  );
}