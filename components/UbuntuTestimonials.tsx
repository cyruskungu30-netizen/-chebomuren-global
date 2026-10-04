"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="ubuntu-testimonials">
      <div className="ubuntu-testimonials-decoration">
        <span>U</span>
      </div>

      <div className="ubuntu-testimonials-inner">
        <span className="ubuntu-eyebrow">From The House</span>

        <blockquote key={active}>
          “{testimonial.quote}”
        </blockquote>

        <div className="ubuntu-testimonial-author">
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>

        <div className="ubuntu-testimonial-controls">
          {testimonials.map((item, index) => (
            <button
              key={item.role}
              type="button"
              aria-label={`View statement ${index + 1}`}
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}