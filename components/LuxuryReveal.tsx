"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "fade";

type LuxuryRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  once?: boolean;
  className?: string;
};

export default function LuxuryReveal({
  children,
  delay = 0,
  duration = 900,
  direction = "up",
  once = true,
  className = "",
}: LuxuryRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setVisible(true);

            if (once) {
              observer.unobserve(element);
            }

          } else if (!once) {
            setVisible(false);
          }

        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const transform = {
    up: visible
      ? "translate3d(0,0,0)"
      : "translate3d(0,70px,0)",

    down: visible
      ? "translate3d(0,0,0)"
      : "translate3d(0,-70px,0)",

    left: visible
      ? "translate3d(0,0,0)"
      : "translate3d(-70px,0,0)",

    right: visible
      ? "translate3d(0,0,0)"
      : "translate3d(70px,0,0)",

    scale: visible
      ? "scale(1)"
      : "scale(.92)",

    fade: "none",
  }[direction];

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform,
        transitionProperty:
          "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction:
          "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}