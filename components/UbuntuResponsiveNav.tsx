 "use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "The House", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Campaign", href: "/campaign" },
  { label: "Journal", href: "/journal" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function UbuntuResponsiveNav() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-5 top-5 z-[100] flex h-12 w-12 items-center justify-center border border-white/30 bg-[#17110d]/80 text-white backdrop-blur-md transition-colors duration-300 hover:border-[#c8aa6b] hover:text-[#c8aa6b] focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] focus:ring-offset-2 focus:ring-offset-[#17110d] lg:hidden"
        aria-label="Open navigation"
        aria-expanded={open}
        aria-controls="ubuntu-mobile-navigation"
      >
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-3/4 bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>

      {open && (
        <div
          id="ubuntu-mobile-navigation"
          className="fixed inset-0 z-[150] bg-[#17110d] text-[#f7f1e6] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8">
            <Link
              href="/"
              onClick={closeMenu}
              className="font-[var(--font-ubuntu-serif)] text-2xl tracking-wide focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] focus:ring-offset-2 focus:ring-offset-[#17110d]"
            >
              UBUNTU
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-2xl transition-colors duration-300 hover:border-[#c8aa6b] hover:text-[#c8aa6b] focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] focus:ring-offset-2 focus:ring-offset-[#17110d]"
              aria-label="Close navigation"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav
            className="flex h-[calc(100vh-82px)] flex-col justify-center overflow-y-auto px-7 py-10 sm:px-12"
            aria-label="Mobile primary navigation"
          >
            <div className="space-y-2">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center gap-5 border-b border-white/10 py-4 transition-colors duration-300 hover:border-[#c8aa6b]/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#c8aa6b]"
                >
                  <span className="text-[9px] tracking-[0.25em] text-[#c8aa6b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-[var(--font-ubuntu-serif)] text-4xl font-light transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href="/appointments"
                onClick={closeMenu}
                className="border border-[#c8aa6b] px-5 py-4 text-center text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-[#c8aa6b] hover:text-[#17110d] focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] focus:ring-offset-2 focus:ring-offset-[#17110d]"
              >
                Private Appointment
              </Link>

              <Link
                href="/wishlist"
                onClick={closeMenu}
                className="border border-white/20 px-5 py-4 text-center text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:border-[#c8aa6b] hover:text-[#c8aa6b] focus:outline-none focus:ring-2 focus:ring-[#c8aa6b] focus:ring-offset-2 focus:ring-offset-[#17110d]"
              >
                Private Selection
              </Link>
            </div>

            <div className="mt-12">
              <p className="font-[var(--font-ubuntu-serif)] text-xl italic text-white/70">
                “I am because we are.”
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/35">
                Ubuntu Couture House
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}