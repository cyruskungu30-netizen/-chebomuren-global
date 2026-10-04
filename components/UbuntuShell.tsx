 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import UbuntuSocialLinks from "@/components/UbuntuSocialLinks";
import { useWishlist } from "@/components/WishlistProvider";

const collectionLinks = [
  {
    label: "Couture Fashion",
    category: "couture",
  },
  {
    label: "Contemporary Jewellery",
    category: "jewellery",
  },
  {
    label: "Rare Gems",
    category: "rare-gems",
  },
  {
    label: "Maasai Beadwork",
    category: "beadwork",
  },
  {
    label: "Royal Headpieces",
    category: "headpieces",
  },
];

const navigation = [
  ["Home", "/"],
  ["The House", "/about"],
  ["Collections", "/collections/catalogue"],
  ["Craftsmanship", "/craftsmanship"],
  ["Journal", "/journal"],
  ["Our Story", "/global-story"],
  ["Contact", "/contact"],
];

export default function UbuntuShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const value =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, value)));
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyboard = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f1e6] text-[#17110d]">

      {/* TOP CONSTANT BRAND BAR */}

      <div className="fixed left-0 right-0 top-0 z-[120] h-[3px] bg-[#c9a45d]">
        <div
          className="h-full origin-left bg-[#8d6a32]"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* CONSTANT HEADER */}

      <header className="fixed left-0 right-0 top-[3px] z-[110] border-b border-[#17110d]/10 bg-[#f7f1e6] shadow-[0_8px_35px_rgba(23,17,13,0.07)]">

        <div className="mx-auto flex min-h-[78px] max-w-[1700px] items-center justify-between gap-5 px-4 sm:px-7 lg:px-10">

          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#92713d] font-[var(--font-ubuntu-serif)] text-sm">
              UB
            </span>

            <span className="hidden sm:block">
              <span className="block font-[var(--font-ubuntu-serif)] text-xl leading-none">
                Ubuntu
              </span>

              <span className="mt-1 block text-[7px] uppercase tracking-[0.34em] text-[#75695d]">
                Couture House
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center justify-center gap-5 xl:flex 2xl:gap-8">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="group relative whitespace-nowrap py-3 text-[8px] font-medium uppercase tracking-[0.2em] text-[#51483e] transition duration-300 hover:text-[#a27d3c]"
              >
                {label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#b28b47] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}

          <div className="hidden shrink-0 items-center gap-2 lg:flex">

            <Link
              href="/wishlist"
              className="flex min-h-10 items-center border border-[#17110d]/15 px-3 text-[8px] uppercase tracking-[0.16em] transition hover:border-[#c9a45d]"
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
              className="ubuntu-header-button flex min-h-10 items-center justify-center bg-[#17110d] px-4 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#f7f1e6] transition hover:bg-[#c9a45d] hover:text-[#17110d] xl:px-5"
            >
              Private Appointment
            </Link>

          </div>

          {/* TABLET / MOBILE MENU */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 border border-[#17110d]/15 bg-transparent lg:hidden"
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

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-[105] bg-[#17110d] text-[#f7f1e6] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28 sm:px-10">

          <div className="flex items-start justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.35em] text-[#c9a45d]">
                Ubuntu Couture House
              </p>

              <h2 className="mt-4 font-[var(--font-ubuntu-serif)] text-4xl font-light leading-none">
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
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-2xl"
            >
              ×
            </button>
          </div>

          <nav className="mt-10">
            {navigation.map(
              ([label, href], index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-t border-white/10 py-5"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[8px] tracking-[0.2em] text-[#c9a45d]">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="font-[var(--font-ubuntu-serif)] text-2xl">
                      {label}
                    </span>
                  </span>

                  <span className="text-[#c9a45d]">
                    →
                  </span>
                </Link>
              )
            )}
          </nav>

          <div className="mt-8">
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/35">
              Collections
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {collectionLinks.map((item) => (
                <Link
                  key={item.category}
                  href={`/collections/catalogue?category=${item.category}`}
                  onClick={closeMenu}
                  className="border border-white/10 px-4 py-4 text-[8px] uppercase tracking-[0.15em] text-white/65 transition hover:border-[#c9a45d] hover:text-[#c9a45d]"
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
              className="flex min-h-12 items-center justify-center border border-white/20 px-5 text-[8px] uppercase tracking-[0.18em]"
            >
              Private Selection
              {wishlistCount > 0 &&
                ` (${wishlistCount})`}
            </Link>

            <Link
              href="/appointments"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center bg-[#c9a45d] px-5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#17110d]"
            >
              Private Appointment
            </Link>
          </div>

          <div className="mt-auto border-t border-white/10 pt-7">
            <p className="mb-4 text-[8px] uppercase tracking-[0.25em] text-white/35">
              Follow the house
            </p>

            <UbuntuSocialLinks dark />
          </div>
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative min-h-screen">
        {children}
      </div>

      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/?text=Hello%20Ubuntu%20Couture%20House"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Ubuntu Couture House on WhatsApp"
        title="WhatsApp"
        className="ubuntu-whatsapp fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#17110d] text-white shadow-[0_15px_40px_rgba(23,17,13,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9a45d] hover:text-[#17110d]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.1 1.6 5.9L.1 23.9l6.3-1.7c1.7.9 3.6 1.4 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3ZM12.1 21.5c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.3-4.4 9.7-9.8 9.7Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.4.6 1.9.8.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z" />
        </svg>
      </a>
    </div>
  );
}