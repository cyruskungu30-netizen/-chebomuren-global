 // components/UbuntuFooter.tsx

"use client";

import Link from "next/link";

import UbuntuSocialLinks from "@/components/UbuntuSocialLinks";

const collections = [
  {
    label: "Couture Fashion",
    href: "/collections/catalogue?category=couture",
  },
  {
    label: "Contemporary Jewellery",
    href: "/collections/catalogue?category=jewellery",
  },
  {
    label: "Rare Gems",
    href: "/collections/catalogue?category=rare-gems",
  },
  {
    label: "Maasai Beadwork",
    href: "/collections/catalogue?category=beadwork",
  },
  {
    label: "Royal Headpieces",
    href: "/collections/catalogue?category=headpieces",
  },
];

const houseLinks = [
  { label: "About", href: "/about" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "Our Story", href: "/global-story" },
  { label: "Journal", href: "/journal" },
  { label: "Gallery", href: "/gallery" },
];

const serviceLinks = [
  { label: "Private Appointments", href: "/appointments" },
  { label: "Private Selection", href: "/wishlist" },
  { label: "Contact", href: "/contact" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function UbuntuFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#17110d] text-[#f7f1e6]">
      <div className="relative mx-auto max-w-[1700px] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.45fr_0.8fr_1fr_0.9fr] lg:gap-12 xl:gap-20">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.5em] text-[#c9a45d]">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-7 max-w-xl text-5xl leading-[0.88] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              African Elegance
              <br />
              and Luxury
              <br />
              <span className="italic text-[#d8b66a]">
                Reimagined.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
              A house where East African heritage, contemporary elegance,
              craftsmanship and personal identity come together.
            </p>

            <div className="mt-10">
              <p className="mb-4 text-[8px] font-semibold uppercase tracking-[0.4em] text-white/35">
                Visit & Contact The House
              </p>

              <div className="flex max-w-xl flex-col gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=4th+Floor%2C+Lenana+Rd%2C+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[54px] items-center gap-4 rounded-full border border-white/15 bg-white/[0.025] px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a45d]/70 hover:bg-[#c9a45d]/10 focus-visible:outline-2 focus-visible:outline-[#c9a45d] focus-visible:outline-offset-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9a45d]/40 text-[#c9a45d] group-hover:bg-[#c9a45d] group-hover:text-[#17110d]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-[7px] uppercase tracking-[0.25em] text-[#c9a45d]">
                      Location
                    </span>

                    <span className="mt-1 block text-xs text-white/70 group-hover:text-white">
                      4th Floor, Lenana Rd, Nairobi
                    </span>
                  </span>

                  <span className="ml-auto text-[#c9a45d]">→</span>
                </a>

                <a
                  href="mailto:info@ubuntocouture.com"
                  className="group flex min-h-[54px] items-center gap-4 rounded-full border border-white/15 bg-white/[0.025] px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a45d]/70 hover:bg-[#c9a45d]/10 focus-visible:outline-2 focus-visible:outline-[#c9a45d] focus-visible:outline-offset-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9a45d]/40 text-[#c9a45d] group-hover:bg-[#c9a45d] group-hover:text-[#17110d]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-[7px] uppercase tracking-[0.25em] text-[#c9a45d]">
                      Email
                    </span>

                    <span className="mt-1 block text-xs text-white/70 group-hover:text-white">
                      info@ubuntocouture.com
                    </span>
                  </span>

                  <span className="ml-auto text-[#c9a45d]">→</span>
                </a>

                <a
                  href="tel:+254792817272"
                  className="group flex min-h-[54px] items-center gap-4 rounded-full border border-white/15 bg-white/[0.025] px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a45d]/70 hover:bg-[#c9a45d]/10 focus-visible:outline-2 focus-visible:outline-[#c9a45d] focus-visible:outline-offset-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9a45d]/40 text-[#c9a45d] group-hover:bg-[#c9a45d] group-hover:text-[#17110d]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      aria-hidden="true"
                    >
                      <path d="M6.5 3.5 9 3l2 5-2.5 1.7a15 15 0 0 0 5.8 5.8L16 13l5 2 .5 2.5c.2 1-.5 2-1.5 2.3-1.2.3-2.5.4-3.8.1A17.5 17.5 0 0 1 4.1 8.7c-.3-1.3-.2-2.6.1-3.8.3-1 .9-1.5 2.3-1.4Z" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-[7px] uppercase tracking-[0.25em] text-[#c9a45d]">
                      Phone
                    </span>

                    <span className="mt-1 block text-xs text-white/70 group-hover:text-white">
                      +254 792 817 272
                    </span>
                  </span>

                  <span className="ml-auto text-[#c9a45d]">→</span>
                </a>

                <a
                  href="https://wa.me/254792817272?text=Hello%20Ubuntu%20Couture%20House"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[54px] items-center gap-4 rounded-full border border-[#25D366]/35 bg-[#25D366]/[0.035] px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]/10 focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#25D366]/50 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white">
                    <span className="text-sm" aria-hidden="true">
                      ◉
                    </span>
                  </span>

                  <span>
                    <span className="block text-[7px] uppercase tracking-[0.25em] text-[#25D366]">
                      WhatsApp
                    </span>

                    <span className="mt-1 block text-xs text-white/70 group-hover:text-white">
                      +254 792 817 272
                    </span>
                  </span>

                  <span className="ml-auto text-[#25D366]">→</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#c9a45d]">
              The House
            </p>

            <nav className="mt-7 flex flex-col gap-5" aria-label="The House">
              {houseLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-[#d8b66a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#c9a45d]">
              Collections
            </p>

            <nav
              className="mt-7 flex flex-col gap-5"
              aria-label="Collections"
            >
              {collections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-[#d8b66a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#c9a45d]">
              Private Service
            </p>

            <nav
              className="mt-7 flex flex-col gap-5"
              aria-label="Private Service"
            >
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-[#d8b66a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[8px] uppercase tracking-[0.35em] text-white/30">
                Follow The House
              </p>

              <UbuntuSocialLinks dark />
            </div>

            <div className="flex flex-wrap gap-6 text-[8px] uppercase tracking-[0.22em] text-white/30">
              <Link href="/privacy" className="hover:text-[#c9a45d]">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-[#c9a45d]">
                Terms & Conditions
              </Link>

              <Link href="/contact" className="hover:text-[#c9a45d]">
                Contact
              </Link>

              <Link
                href="/collections/catalogue"
                className="hover:text-[#c9a45d]"
              >
                Collections
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-[7px] uppercase tracking-[0.28em] text-white/20 sm:flex sm:justify-between">
            <p>© {new Date().getFullYear()} Ubuntu Couture House</p>
            <p className="mt-3 sm:mt-0">
              African Elegance · Luxury Reimagined
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}