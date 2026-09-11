 "use client";

import { useState } from "react";

type Region = {
  id: string;
  flag: string;
  name: string;
  description: string;
  position: string;
};

const regions: Region[] = [
  {
    id: "kenya",
    flag: "🇰🇪",
    name: "Kenya",
    description:
      "Our roots, heritage, stories, leadership and the heart of the Chebomuren Global sisterhood.",
    position: "left-[42%] top-[48%]",
  },
  {
    id: "africa",
    flag: "🌍",
    name: "Africa",
    description:
      "Kalenjin women contributing to business, education, leadership, health and community development.",
    position: "left-[51%] top-[61%]",
  },
  {
    id: "uk",
    flag: "🇬🇧",
    name: "United Kingdom",
    description:
      "Women building careers, families, businesses and professional networks across the UK.",
    position: "left-[39%] top-[25%]",
  },
  {
    id: "usa",
    flag: "🇺🇸",
    name: "United States",
    description:
      "A growing community of women creating impact across professional and entrepreneurial spaces.",
    position: "left-[20%] top-[37%]",
  },
  {
    id: "canada",
    flag: "🇨🇦",
    name: "Canada",
    description:
      "Connecting Kalenjin women through friendship, professional networks and shared identity.",
    position: "left-[24%] top-[21%]",
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Australia",
    description:
      "Women carrying culture forward while creating new opportunities for future generations.",
    position: "left-[77%] top-[69%]",
  },
];

export default function GlobalSisterhood() {
  const [selected, setSelected] = useState("kenya");

  const activeRegion =
    regions.find((region) => region.id === selected) ?? regions[0];

  return (
    <section
      id="global-sisterhood"
      className="relative overflow-hidden bg-[#f1e7da] px-6 py-28 lg:px-10"
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d5a85c]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#6f3542]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#a77a32]">
              One Global Sisterhood
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-[#241817] sm:text-6xl lg:text-7xl">
              From Kenya
              <br />
              <span className="text-[#6f3542]">to the world.</span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              Kalenjin women are building businesses, leading organisations,
              raising families, serving communities and creating change across
              continents.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-[#241017] p-6 text-white">
                <div className="font-serif text-4xl text-[#e8bd72]">∞</div>
                <p className="mt-3 font-semibold">Possibilities</p>
                <p className="mt-1 text-sm text-white/45">
                  Women supporting women.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6">
                <div className="font-serif text-4xl text-[#6f3542]">1</div>
                <p className="mt-3 font-semibold">Shared Purpose</p>
                <p className="mt-1 text-sm text-black/45">
                  One united sisterhood.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-[#d6c4b1] bg-white/60 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#241017] text-xl">
                  {activeRegion.flag}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a77a32]">
                    Selected Region
                  </p>

                  <h3 className="mt-1 font-serif text-2xl">
                    {activeRegion.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/50">
                    {activeRegion.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-[#190a0f] p-6 shadow-2xl sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,168,92,0.16),transparent_42%)]" />

            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d5a85c]/20" />

            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d5a85c]/25" />

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8bd72]/40 bg-[#241017] text-center shadow-2xl">
              <div>
                <div className="text-3xl">👑</div>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.25em] text-[#e8bd72]">
                  Chebomuren
                </p>
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Global
                </p>
              </div>
            </div>

            <div className="absolute inset-0">
              {regions.map((region) => {
                const isActive = region.id === selected;

                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelected(region.id)}
                    aria-label={`Select ${region.name}`}
                    aria-pressed={isActive}
                    className={`absolute ${region.position} z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition duration-300 ${
                      isActive ? "scale-110" : "hover:scale-110"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full border text-xl shadow-xl backdrop-blur ${
                        isActive
                          ? "border-[#e8bd72] bg-[#d5a85c] text-[#241817]"
                          : "border-white/20 bg-white/10 text-white"
                      }`}
                    >
                      {region.flag}
                    </span>

                    <span
                      className={`mt-2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.18em] ${
                        isActive ? "text-[#e8bd72]" : "text-white/50"
                      }`}
                    >
                      {region.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8bd72]">
                    Connected Across Borders
                  </p>

                  <p className="mt-2 font-serif text-xl text-white">
                    One identity. Many journeys.
                  </p>
                </div>

                <div className="text-2xl">🌍</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {regions.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelected(region.id)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                selected === region.id
                  ? "border-[#241017] bg-[#241017] text-white"
                  : "border-[#cdbba8] bg-white/60 text-[#241817] hover:border-[#a77a32]"
              }`}
            >
              {region.flag} {region.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}