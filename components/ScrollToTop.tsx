 "use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Return to top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      style={{
        position: "fixed",
        right: "96px",
        bottom: "24px",
        zIndex: 9999,
      }}
      className="
        group
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-[#c9a45d]
        bg-[#17110d]
        text-[#dfc27c]
        shadow-[0_12px_35px_rgba(23,17,13,0.35)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#dfc27c]
        hover:bg-[#c9a45d]
        hover:text-[#17110d]
        focus-visible:outline-2
        focus-visible:outline-[#dfc27c]
        focus-visible:outline-offset-4
        max-[640px]:right-[84px]
        max-[640px]:bottom-[18px]
      "
    >
      <span
        className="
          absolute
          inset-[5px]
          rounded-full
          border
          border-[#c9a45d]/25
          transition-all
          duration-500
          group-hover:rotate-180
          group-hover:border-[#17110d]/30
        "
        aria-hidden="true"
      />

      <span
        className="
          relative
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-[#c9a45d]/40
          transition-all
          duration-500
          group-hover:border-[#17110d]/40
        "
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M6.5 11.5 12 5l5.5 6.5" />
        </svg>
      </span>
    </button>
  );
}