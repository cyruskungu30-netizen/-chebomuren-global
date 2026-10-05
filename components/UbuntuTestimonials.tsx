 "use client";

import { useEffect, useId, useState } from "react";

const testimonials = [
  {
    quote:
      "Ubuntu represents the beauty of knowing where you come from while having the courage to become everything you were meant to be.",
    name: "The Ubuntu House",
    role: "Our Philosophy",
  },
  {
    quote:
      "Every creation should feel personal. It should carry something of the person who wears it and something of the story from which it came.",
    name: "Ubuntu Couture House",
    role: "The House",
  },
  {
    quote:
      "Heritage does not belong in the past. It can be carried forward, transformed, and expressed through contemporary elegance.",
    name: "Ubuntu Couture House",
    role: "Our Vision",
  },
];

export default function UbuntuTestimonials() {
  const [active, setActive] = useState(0);
  const headingId = useId();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section
      className="ubuntu-testimonials"
      aria-labelledby={headingId}
      aria-live="polite"
    >
      <div
        className="ubuntu-testimonials-decoration"
        aria-hidden="true"
      >
        <span>U</span>
      </div>

      <div className="ubuntu-testimonials-inner">
        <span
          id={headingId}
          className="ubuntu-eyebrow"
        >
          From The House
        </span>

        <blockquote
          key={active}
          className="transition-opacity duration-500"
        >
          “{testimonial.quote}”
        </blockquote>

        <div className="ubuntu-testimonial-author">
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>

        <div
          className="ubuntu-testimonial-controls"
          role="tablist"
          aria-label="House statements"
        >
          {testimonials.map((item, index) => {
            const isActive = index === active;

            return (
              <button
                key={item.role}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`View statement ${index + 1}: ${item.role}`}
                tabIndex={isActive ? 0 : -1}
                className={isActive ? "is-active" : ""}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (
                    event.key === "ArrowRight" ||
                    event.key === "ArrowDown"
                  ) {
                    event.preventDefault();

                    const nextIndex =
                      (index + 1) % testimonials.length;

                    setActive(nextIndex);

                    requestAnimationFrame(() => {
                      document
                        .querySelector<HTMLButtonElement>(
                          `[aria-label="View statement ${nextIndex + 1}: ${testimonials[nextIndex].role}"]`,
                        )
                        ?.focus();
                    });
                  }

                  if (
                    event.key === "ArrowLeft" ||
                    event.key === "ArrowUp"
                  ) {
                    event.preventDefault();

                    const previousIndex =
                      (index - 1 + testimonials.length) %
                      testimonials.length;

                    setActive(previousIndex);

                    requestAnimationFrame(() => {
                      document
                        .querySelector<HTMLButtonElement>(
                          `[aria-label="View statement ${previousIndex + 1}: ${testimonials[previousIndex].role}"]`,
                        )
                        ?.focus();
                    });
                  }

                  if (event.key === "Home") {
                    event.preventDefault();
                    setActive(0);
                  }

                  if (event.key === "End") {
                    event.preventDefault();
                    setActive(testimonials.length - 1);
                  }
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}