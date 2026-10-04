"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type LuxuryImageRevealProps = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  href?: string;
};

export default function LuxuryImageReveal({
  src,
  alt,
  eyebrow,
  title,
  description,
  href,
}: LuxuryImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const content = (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-[#e6dac9] transition-all duration-[1200ms] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />

        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
          {eyebrow && (
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#d8bc7f]">
              {eyebrow}
            </p>
          )}

          {title && (
            <h3 className="mt-3 font-[var(--font-ubuntu-serif)] text-3xl font-light sm:text-4xl">
              {title}
            </h3>
          )}

          {description && (
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">
              {description}
            </p>
          )}

          {href && (
            <span className="mt-5 inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white">
              Discover
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} className="block">
      {content}
    </a>
  );
}