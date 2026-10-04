 import Link from "next/link";

import UbuntuSocialLinks from "@/components/UbuntuSocialLinks";

const collections = [
  ["Couture Fashion", "couture"],
  ["Contemporary Jewellery", "jewellery"],
  ["Rare Gems", "rare-gems"],
  ["Maasai Beadwork", "beadwork"],
  ["Royal Headpieces", "headpieces"],
];

export default function UbuntuFooter() {
  return (
    <footer className="bg-[#17110d] text-[#f7f1e6]">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr]">

          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#c9a45d]">
              Ubuntu Couture House
            </p>

            <h2 className="mt-6 max-w-xl font-[var(--font-ubuntu-serif)] text-5xl font-light leading-[0.9] sm:text-6xl">
              African Elegance and Luxury Reimagined.
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              A Mother’s Courage. A Daughter’s Vision.
              <br />
              One Heritage. One Legacy.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-[8px] uppercase tracking-[0.28em] text-white/30">
                Follow the house
              </p>

              <UbuntuSocialLinks dark />
            </div>
          </div>

          <div>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#c9a45d]">
              The House
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {[
                ["About", "/about"],
                ["Craftsmanship", "/craftsmanship"],
                ["Our Story", "/global-story"],
                ["Journal", "/journal"],
                ["Gallery", "/gallery"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/60 transition hover:text-[#c9a45d]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#c9a45d]">
              Collections
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {collections.map(
                ([label, category]) => (
                  <Link
                    key={category}
                    href={`/collections/catalogue?category=${category}`}
                    className="text-sm text-white/60 transition hover:text-[#c9a45d]"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#c9a45d]">
              Private Service
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/appointments"
                className="text-sm text-white/60 transition hover:text-[#c9a45d]"
              >
                Private Appointments
              </Link>

              <Link
                href="/wishlist"
                className="text-sm text-white/60 transition hover:text-[#c9a45d]"
              >
                Private Selection
              </Link>

              <Link
                href="/contact"
                className="text-sm text-white/60 transition hover:text-[#c9a45d]"
              >
                Contact
              </Link>

              <Link
                href="/shipping"
                className="text-sm text-white/60 transition hover:text-[#c9a45d]"
              >
                Shipping & Returns
              </Link>

              <Link
                href="/privacy"
                className="text-sm text-white/60 transition hover:text-[#c9a45d]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-white/60 transition hover:text-[#c9a45d]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-[8px] uppercase tracking-[0.18em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Ubuntu Couture House
            </p>

            <p>
              African Elegance and Luxury Reimagined.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}