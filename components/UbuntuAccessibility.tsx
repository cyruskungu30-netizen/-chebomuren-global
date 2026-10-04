"use client";

import { useEffect, useState } from "react";

export default function UbuntuAccessibility() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const savedMotion =
      window.localStorage.getItem("ubuntu-reduced-motion") === "true";

    const savedContrast =
      window.localStorage.getItem("ubuntu-high-contrast") === "true";

    setReducedMotion(savedMotion);
    setHighContrast(savedContrast);

    document.documentElement.classList.toggle(
      "ubuntu-reduced-motion",
      savedMotion
    );

    document.documentElement.classList.toggle(
      "ubuntu-high-contrast",
      savedContrast
    );
  }, []);

  function toggleMotion() {
    const next = !reducedMotion;

    setReducedMotion(next);

    window.localStorage.setItem(
      "ubuntu-reduced-motion",
      String(next)
    );

    document.documentElement.classList.toggle(
      "ubuntu-reduced-motion",
      next
    );
  }

  function toggleContrast() {
    const next = !highContrast;

    setHighContrast(next);

    window.localStorage.setItem(
      "ubuntu-high-contrast",
      String(next)
    );

    document.documentElement.classList.toggle(
      "ubuntu-high-contrast",
      next
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setPanelOpen((value) => !value)}
        className="fixed bottom-5 left-5 z-[90] flex h-11 w-11 items-center justify-center border border-[#17110d]/20 bg-[#f7f1e6]/90 text-xs text-[#17110d] shadow-lg backdrop-blur-md transition hover:border-[#a98448]"
        aria-label="Accessibility settings"
        aria-expanded={panelOpen}
      >
        ◉
      </button>

      {panelOpen && (
        <div className="fixed bottom-20 left-5 z-[90] w-[280px] border border-[#17110d]/15 bg-[#f7f1e6] p-5 text-[#17110d] shadow-2xl">
          <div className="mb-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#92713d]">
              Accessibility
            </p>

            <p className="mt-2 font-[var(--font-ubuntu-serif)] text-2xl">
              Your experience
            </p>
          </div>

          <button
            type="button"
            onClick={toggleMotion}
            className="flex w-full items-center justify-between border-t border-[#17110d]/10 py-4 text-left"
          >
            <span>
              <span className="block text-xs font-medium">
                Reduced motion
              </span>

              <span className="mt-1 block text-[9px] text-[#75675a]">
                {reducedMotion ? "Enabled" : "Disabled"}
              </span>
            </span>

            <span
              className={`h-5 w-9 rounded-full border p-0.5 ${
                reducedMotion
                  ? "border-[#92713d] bg-[#92713d]"
                  : "border-[#17110d]/20"
              }`}
            >
              <span
                className={`block h-4 w-4 rounded-full bg-[#17110d] transition-transform ${
                  reducedMotion ? "translate-x-4 bg-white" : ""
                }`}
              />
            </span>
          </button>

          <button
            type="button"
            onClick={toggleContrast}
            className="flex w-full items-center justify-between border-t border-[#17110d]/10 py-4 text-left"
          >
            <span>
              <span className="block text-xs font-medium">
                Higher contrast
              </span>

              <span className="mt-1 block text-[9px] text-[#75675a]">
                {highContrast ? "Enabled" : "Disabled"}
              </span>
            </span>

            <span
              className={`h-5 w-9 rounded-full border p-0.5 ${
                highContrast
                  ? "border-[#92713d] bg-[#92713d]"
                  : "border-[#17110d]/20"
              }`}
            >
              <span
                className={`block h-4 w-4 rounded-full bg-[#17110d] transition-transform ${
                  highContrast ? "translate-x-4 bg-white" : ""
                }`}
              />
            </span>
          </button>

          <p className="mt-4 border-t border-[#17110d]/10 pt-4 text-[9px] leading-5 text-[#75675a]">
            Your preferences are stored locally on this device.
          </p>
        </div>
      )}
    </>
  );
}