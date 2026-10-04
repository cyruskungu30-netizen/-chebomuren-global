"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-5 top-5 z-[100] flex h-12 w-12 items-center justify-center border border-white/30 bg-[#17110d]/80 text-white backdrop-blur-md lg:hidden"
        aria-label="Open navigation"
      >
        <span className="flex w-5 flex-col gap-1.5">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-3/4 bg-current" />
          <span className="h-px w-full bg-current" />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[150] bg-[#17110d] text-[#f7f1e6] lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-[var(--font-ubuntu-serif)] text-2xl tracking-wide"
            >
              UBUNTU
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-2xl"
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>

          <nav className="flex h-[calc(100vh-82px)] flex-col justify-center px-7 sm:px-12">
            <div className="space-y-2">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-5 border-b border-white/10 py-4"
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

            <div className="mt-10 grid grid-cols-2 gap-3">
              <Link
                href="/appointments"
                onClick={() => setOpen(false)}
                className="border border-[#c8aa6b] px-5 py-4 text-center text-[9px] font-semibold uppercase tracking-[0.2em]"
              >
                Private Appointment
              </Link>

              <Link
                href="/wishlist"
                onClick={() => setOpen(false)}
                className="border border-white/20 px-5 py-4 text-center text-[9px] font-semibold uppercase tracking-[0.2em]"
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