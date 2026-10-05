 // components/UbuntuShell.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import UbuntuSocialLinks from "@/components/UbuntuSocialLinks";
import { useWishlist } from "@/components/WishlistProvider";

const CONTACT = {
  address: "4th Floor, Lenana Rd, Nairobi",
  email: "info@ubuntocouture.com",
  phone: "+254792817272",
  whatsapp: "254792817272",
};

const collectionLinks = [
  { label: "Couture Fashion", category: "couture" },
  { label: "Contemporary Jewellery", category: "jewellery" },
  { label: "Rare Gems", category: "rare-gems" },
  { label: "Maasai Beadwork", category: "beadwork" },
  { label: "Royal Headpieces", category: "headpieces" },
];

const navigation = [
  ["Home", "/"],
  ["The House", "/about"],
  ["Collections", "/collections/catalogue"],
  ["Craftsmanship", "/craftsmanship"],
  ["Journal", "/journal"],
  ["Our Story", "/global-story"],
  ["Contact", "/contact"],
] as const;

type UbuntuShellProps = {
  children: React.ReactNode;
};

export default function UbuntuShell({
  children,
}: UbuntuShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        scrollable > 0
          ? Math.min(
              100,
              Math.max(0, (window.scrollY / scrollable) * 100),
            )
          : 0,
      );
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f1e6] text-[#17110d]">
      <div
        className="fixed left-0 right-0 top-0 z-[140] h-[2px] bg-[#c9a45d]"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#80602d] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed left-0 right-0 top-[2px] z-[130] border-b border-[#17110d]/10 bg-[#f7f1e6]/96 shadow-[0_10px_35px_rgba(23,17,13,0.08)] backdrop-blur-md">
        <div className="mx-auto flex min-h-[88px] max-w-[1750px] items-center gap-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Ubuntu Couture House home"
            className="group flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#c9a45d] focus-visible:outline-offset-4"
          >
            <div className="relative flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-[3px] bg-[#100b08] shadow-[0_8px_28px_rgba(23,17,13,0.18)] ring-1 ring-[#c9a45d]/35 transition-all duration-500 group-hover:ring-[#c9a45d]/80">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,164,93,0.22),transparent_62%)]"
                aria-hidden="true"
              />

              <Image
                src="/images/ubuntu-couture-logo.png"
                alt="Ubuntu Couture House"
                width={500}
                height={500}
                priority
                sizes="76px"
                className="relative z-10 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <span
                className="absolute inset-1 border border-[#c9a45d]/20"
                aria-hidden="true"
              />
            </div>

            <div className="hidden min-w-0 sm:block">
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[#c9a45d]" />

                <span className="text-[7px] font-bold uppercase tracking-[0.34em] text-[#92713d]">
                  The House
                </span>
              </div>

              <p className="mt-2 max-w-[185px] font-[var(--font-ubuntu-serif)] text-[14px] leading-[1.1] text-[#17110d]">
                Where heritage
                <br />
                becomes couture.
              </p>

              <p className="mt-2 text-[6px] font-medium uppercase tracking-[0.25em] text-[#75695d]">
                Identity · Craft · Legacy
              </p>
            </div>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-7"
          >
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="group relative whitespace-nowrap py-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#2a211b] transition-colors duration-300 hover:text-[#967039] focus-visible:outline-2 focus-visible:outline-[#a17c3f] focus-visible:outline-offset-4 2xl:text-[9px]"
              >
                {label}

                <span
                  className="absolute bottom-[2px] left-0 h-px w-0 bg-[#a17c3f] transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <Link
              href="/wishlist"
              className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full border border-[#92713d] bg-transparent px-4 text-[8px] font-bold uppercase tracking-[0.15em] text-[#17110d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eee3d1] focus-visible:outline-2 focus-visible:outline-[#a17c3f] focus-visible:outline-offset-4 lg:px-5"
            >
              Selection

              {wishlistCount > 0 && (
                <span className="ml-2 text-[#92713d]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/appointments"
              className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full border border-[#17110d] bg-[#17110d] px-4 text-[8px] font-bold uppercase tracking-[0.14em] text-[#f7f1e6] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a45d] hover:bg-[#c9a45d] hover:text-[#17110d] focus-visible:outline-2 focus-visible:outline-[#c9a45d] focus-visible:outline-offset-4 lg:px-5"
            >
              Private Appointment
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="ml-auto flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[#17110d]/20 lg:hidden focus-visible:outline-2 focus-visible:outline-[#a17c3f] focus-visible:outline-offset-4"
          >
            <span
              className={`h-px w-5 bg-[#17110d] transition ${
                menuOpen
                  ? "translate-y-[4px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-px w-5 bg-[#17110d] transition ${
                menuOpen
                  ? "-translate-y-[2px] -rotate-45"
                  : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[125] bg-[#17110d] text-[#f7f1e6] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28 sm:px-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#c9a45d]">
                Ubuntu Couture House
              </p>

              <h2 className="mt-4 font-[var(--font-ubuntu-serif)] text-4xl leading-none">
                African elegance.
                <br />
                <span className="italic text-[#d8b66a]">
                  Reimagined.
                </span>
              </h2>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-2xl focus-visible:outline-2 focus-visible:outline-[#d8b66a]"
            >
              ×
            </button>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="mt-10"
          >
            {navigation.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="flex items-center justify-between border-t border-white/10 py-5 focus-visible:outline-2 focus-visible:outline-[#d8b66a]"
              >
                <span className="flex items-center gap-4">
                  <span className="text-[8px] font-bold tracking-[0.2em] text-[#c9a45d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-bold uppercase tracking-[0.16em]">
                    {label}
                  </span>
                </span>

                <span
                  className="text-[#c9a45d]"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 border-t border-white/10 pt-7">
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/35">
              The House
            </p>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <a
                href={`tel:${CONTACT.phone}`}
                onClick={closeMenu}
                className="block transition hover:text-[#c9a45d]"
              >
                {CONTACT.phone}
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                onClick={closeMenu}
                className="block transition hover:text-[#c9a45d]"
              >
                {CONTACT.email}
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=4th+Floor%2C+Lenana+Rd%2C+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block transition hover:text-[#c9a45d]"
              >
                {CONTACT.address}
              </a>

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#c9a45d]/50 px-5 py-3 text-[8px] font-bold uppercase tracking-[0.22em] text-[#c9a45d] transition hover:bg-[#c9a45d] hover:text-[#17110d]"
              >
                WhatsApp The House →
              </a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/35">
              Collections
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {collectionLinks.map((item) => (
                <Link
                  key={item.category}
                  href={`/collections/catalogue?category=${item.category}`}
                  onClick={closeMenu}
                  className="rounded-full border border-white/10 px-4 py-4 text-[8px] font-bold uppercase tracking-[0.15em] text-white/65 transition hover:border-[#c9a45d] hover:text-[#c9a45d]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            <Link
              href="/wishlist"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 text-[8px] font-bold uppercase tracking-[0.18em]"
            >
              Private Selection
              {wishlistCount > 0 &&
                ` (${wishlistCount})`}
            </Link>

            <Link
              href="/appointments"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-full border border-[#c9a45d] bg-[#c9a45d] px-5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#17110d]"
            >
              Private Appointment
            </Link>
          </div>

          <div className="mt-auto border-t border-white/10 pt-7">
            <p className="mb-4 text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
              Follow the house
            </p>

            <UbuntuSocialLinks dark />
          </div>
        </div>
      </div>

      <main className="relative min-h-screen">
        {children}
      </main>

      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%20Ubuntu%20Couture%20House`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Ubuntu Couture House on WhatsApp"
        title="WhatsApp Ubuntu Couture House"
        className="fixed bottom-6 right-6 z-[150] flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366] text-white shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-4"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.1 1.6 5.9L.1 23.9l6.3-1.7c1.7.9 3.6 1.4 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3ZM12.1 21.5c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.3-4.4 9.7-9.8 9.7Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.4.6 1.9.8.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z" />
        </svg>
      </a>
    </div>
  );
}