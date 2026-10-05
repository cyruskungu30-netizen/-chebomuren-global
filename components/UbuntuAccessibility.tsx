 "use client";

import { useEffect, useId, useState } from "react";

const REDUCED_MOTION_KEY = "ubuntu-reduced-motion";
const HIGH_CONTRAST_KEY = "ubuntu-high-contrast";

export default function UbuntuAccessibility() {
  const [open, setOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const titleId = useId();

  useEffect(() => {
    try {
      const motion =
        window.localStorage.getItem(REDUCED_MOTION_KEY) === "true";

      const contrast =
        window.localStorage.getItem(HIGH_CONTRAST_KEY) === "true";

      setReducedMotion(motion);
      setHighContrast(contrast);

      document.documentElement.classList.toggle(
        "ubuntu-reduced-motion",
        motion,
      );

      document.documentElement.classList.toggle(
        "ubuntu-high-contrast",
        contrast,
      );
    } catch {
      // Storage may be unavailable.
    }
  }, []);

  const toggleMotion = () => {
    const next = !reducedMotion;

    setReducedMotion(next);

    document.documentElement.classList.toggle(
      "ubuntu-reduced-motion",
      next,
    );

    try {
      window.localStorage.setItem(
        REDUCED_MOTION_KEY,
        String(next),
      );
    } catch {
      // Ignore storage errors.
    }
  };

  const toggleContrast = () => {
    const next = !highContrast;

    setHighContrast(next);

    document.documentElement.classList.toggle(
      "ubuntu-high-contrast",
      next,
    );

    try {
      window.localStorage.setItem(
        HIGH_CONTRAST_KEY,
        String(next),
      );
    } catch {
      // Ignore storage errors.
    }
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[180] bg-transparent"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <section
          role="dialog"
          aria-labelledby={titleId}
          className="
            fixed
            bottom-[88px]
            left-4
            z-[190]
            w-[min(350px,calc(100vw-32px))]
            overflow-hidden
            border
            border-[#b89452]/35
            bg-[#f7f1e6]
            text-[#17110d]
            shadow-[0_25px_80px_rgba(23,17,13,0.32)]
            sm:left-6
            sm:w-[350px]
          "
        >
          <div className="h-[3px] w-full bg-[#c9a45d]" />

          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-5 border-b border-[#17110d]/10 pb-5">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.42em] text-[#9a7438]">
                  Accessibility
                </p>

                <h2
                  id={titleId}
                  className="mt-3 font-[var(--font-ubuntu-serif)] text-[25px] leading-none tracking-[-0.02em]"
                >
                  Your experience
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close accessibility settings"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-[#17110d]/15
                  bg-[#f7f1e6]
                  text-sm
                  text-[#17110d]
                  transition
                  hover:border-[#a17c3f]
                  hover:bg-[#e9dfcf]
                  focus-visible:outline-2
                  focus-visible:outline-[#a17c3f]
                  focus-visible:outline-offset-3
                "
              >
                ×
              </button>
            </div>

            <div className="divide-y divide-[#17110d]/10">
              <AccessibilityToggle
                label="Reduced motion"
                description={reducedMotion ? "Enabled" : "Disabled"}
                checked={reducedMotion}
                onChange={toggleMotion}
              />

              <AccessibilityToggle
                label="Higher contrast"
                description={highContrast ? "Enabled" : "Disabled"}
                checked={highContrast}
                onChange={toggleContrast}
              />
            </div>

            <div className="border-t border-[#17110d]/10 pt-4">
              <p className="text-[8px] leading-5 text-[#75695d]">
                Your preferences are stored locally on this device.
              </p>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={
          open
            ? "Close accessibility settings"
            : "Open accessibility settings"
        }
        aria-expanded={open}
        className="
          fixed
          bottom-5
          left-4
          z-[200]
          flex
          h-12
          w-12
          items-center
          justify-center
          border
          border-[#c9a45d]
          bg-[#f7f1e6]
          shadow-[0_12px_35px_rgba(23,17,13,0.25)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#c9a45d]
          focus-visible:outline-2
          focus-visible:outline-[#dfc27c]
          focus-visible:outline-offset-4
          sm:left-6
        "
      >
        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-[#c9a45d]
            bg-[#17110d]
            font-serif
            text-xs
            text-[#f7f1e6]
          "
        >
          A
        </span>
      </button>
    </>
  );
}

function AccessibilityToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-6 py-5">
      <div>
        <p className="text-[11px] font-medium text-[#17110d]">
          {label}
        </p>

        <p className="mt-1 text-[9px] text-[#75695d]">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`${label}: ${checked ? "enabled" : "disabled"}`}
        onClick={onChange}
        className={`
          relative
          h-7
          w-12
          shrink-0
          rounded-full
          border
          transition-all
          duration-300
          focus-visible:outline-2
          focus-visible:outline-[#a17c3f]
          focus-visible:outline-offset-3
          ${
            checked
              ? "border-[#9b7539] bg-[#c9a45d]"
              : "border-[#b9aa94] bg-[#eee5d7]"
          }
        `}
      >
        <span
          className={`
            absolute
            top-1
            h-5
            w-5
            rounded-full
            shadow-[0_2px_6px_rgba(23,17,13,0.2)]
            transition-all
            duration-300
            ${
              checked
                ? "translate-x-6 bg-[#17110d]"
                : "translate-x-1 bg-[#9b8d78]"
            }
          `}
        />
      </button>
    </div>
  );
}