"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const campaigns = [
  {
    id: "01",
    season: "The Heritage Collection",
    title: "Born from heritage.",
    subtitle: "Designed for the woman becoming.",
    description:
      "A visual expression of East African heritage translated into contemporary couture, sculptural jewellery, rare gems, beadwork, and royal headpieces.",
    image: "/images/hero-couture-yellow.jpeg",
    secondary: "/images/couture-brown-front.jpeg",
  },
  {
    id: "02",
    season: "Earth & Form",
    title: "Nature becomes art.",
    subtitle: "Sculptural luxury with an African soul.",
    description:
      "Cow horn, natural textures, rare stones, and organic forms are transformed into statement pieces designed for modern individuality.",
    image: "/images/cow-horn-jewellery.jpeg",
    secondary: "/images/rare-gem-neckpiece.jpeg",
  },
  {
    id: "03",
    season: "Royal Presence",
    title: "Wear your presence.",
    subtitle: "Dignity. Leadership. Majesty.",
    description:
      "Royal headpieces reinterpret African majesty through contemporary form, creating pieces that celebrate confidence, leadership, and feminine power.",
    image: "/images/royal-headpiece-gold.jpeg",
    secondary: "/images/headpiece-blue.jpeg",
  },
  {
    id: "04",
    season: "Living Heritage",
    title: "Tradition, reimagined.",
    subtitle: "A living language of identity.",
    description:
      "Maasai beadwork and East African visual language meet modern luxury, creating designs that honour community while moving confidently into the future.",
    image: "/images/maasai-jewellery-editorial.jpeg",
    secondary: "/images/heritage-floral-headpiece.jpeg",
  },
];

export default function LuxuryCampaign() {
  const [active, setActive] = useState(0);

  const campaign = campaigns[active];

  return (
    <section className="overflow-hidden bg-[#f7f1e6] text-[#17110d]">
      <div className="mx-auto max-w-[1600px]">
        <div className="border-b border-[#17110d]/10 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#92713d]">
                Ubuntu Campaigns
              </p>

              <h2 className="mt-6 max-w-xl font-[var(--font-ubuntu-serif)] text-5xl font-light leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
                A house told
                <br />
                through image.
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <p className="text-sm leading-7 text-[#62564c] sm:text-base sm:leading-8">
                Enter the visual world of Ubuntu Couture House—where heritage,
                craftsmanship, identity, and modern African luxury become
                editorial stories.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.42fr_1fr]">
          <aside className="border-b border-[#17110d]/10 lg:border-b-0 lg:border-r">
            <div className="sticky top-24">
              <div className="px-5 py-7 sm:px-8 lg:px-10">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#92713d]">
                  Campaign archive
                </p>
              </div>

              <div>
                {campaigns.map((item, index) => {
                  const selected = index === active;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`group flex w-full items-center border-t border-[#17110d]/10 px-5 py-6 text-left transition-all duration-500 sm:px-8 lg:px-10 ${
                        selected
                          ? "bg-[#17110d] text-[#f7f1e6]"
                          : "hover:bg-[#ebe1d2]"
                      }`}
                    >
                      <span
                        className={`mr-5 text-[10px] tracking-[0.2em] ${
                          selected
                            ? "text-[#c8aa6b]"
                            : "text-[#92713d]"
                        }`}
                      >
                        {item.id}
                      </span>

                      <span className="flex-1">
                        <span className="block font-[var(--font-ubuntu-serif)] text-2xl font-light">
                          {item.season}
                        </span>

                        <span
                          className={`mt-1 block text-[9px] uppercase tracking-[0.2em] ${
                            selected
                              ? "text-white/45"
                              : "text-[#17110d]/40"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </span>

                      <span
                        className={`text-lg transition-transform duration-300 ${
                          selected
                            ? "translate-x-0"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="relative min-h-[700px] bg-[#17110d] text-[#f7f1e6] lg:min-h-[820px]">
            <div
              key={campaign.id}
              className="absolute inset-0 animate-[campaignFade_700ms_ease-out]"
            >
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#100c09] via-[#100c09]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#100c09]/40 to-transparent" />
            </div>

            <div className="absolute right-5 top-5 z-10 hidden h-36 w-28 overflow-hidden border border-white/30 sm:block sm:right-8 sm:top-8">
              <Image
                src={campaign.secondary}
                alt={`${campaign.title} detail`}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>

            <div className="absolute left-5 top-6 z-10 sm:left-8 sm:top-8">
              <span className="border border-[#d6bb82]/60 px-4 py-2 text-[9px] uppercase tracking-[0.28em] text-[#e5ce9d]">
                Editorial campaign
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10 lg:p-14">
              <div className="max-w-3xl">
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c8aa6b]">
                  {campaign.season}
                </p>

                <h3 className="font-[var(--font-ubuntu-serif)] text-5xl font-light leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
                  {campaign.title}
                </h3>

                <p className="mt-5 font-[var(--font-ubuntu-serif)] text-xl italic text-[#dfd2bf] sm:text-2xl">
                  {campaign.subtitle}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d8cec1] sm:text-base sm:leading-8">
                  {campaign.description}
                </p>

                <Link
                  href="/collections/catalogue"
                  className="group mt-8 inline-flex items-center gap-5 border border-[#c8aa6b]/70 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:bg-[#c8aa6b] hover:text-[#17110d]"
                >
                  Explore the collection
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 sm:flex lg:right-10">
              {campaigns.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`View campaign ${item.id}`}
                  onClick={() => setActive(index)}
                  className={`h-px transition-all duration-500 ${
                    index === active
                      ? "w-12 bg-[#d8bd82]"
                      : "w-5 bg-white/40 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid border-t border-[#17110d]/10 sm:grid-cols-3">
          <div className="border-b border-[#17110d]/10 px-6 py-8 sm:border-b-0 sm:border-r lg:px-10">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#92713d]">
              Vision
            </p>
            <p className="mt-3 font-[var(--font-ubuntu-serif)] text-2xl">
              African elegance, reimagined.
            </p>
          </div>

          <div className="border-b border-[#17110d]/10 px-6 py-8 sm:border-b-0 sm:border-r lg:px-10">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#92713d]">
              Craft
            </p>
            <p className="mt-3 font-[var(--font-ubuntu-serif)] text-2xl">
              Materials with meaning.
            </p>
          </div>

          <div className="px-6 py-8 lg:px-10">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#92713d]">
              Identity
            </p>
            <p className="mt-3 font-[var(--font-ubuntu-serif)] text-2xl">
              Wear your story.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes campaignFade {
          from {
            opacity: 0;
            transform: scale(1.035);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}