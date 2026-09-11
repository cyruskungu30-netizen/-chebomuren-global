 "use client";

import { useEffect, useState } from "react";

const impactItems = [
  {
    value: 12,
    suffix: "",
    label: "Gala Recognition Categories",
    description: "Different fields where Kalenjin women are creating impact.",
  },
  {
    value: 1,
    suffix: "",
    label: "Shared Purpose",
    description: "A global sisterhood connected by identity and possibility.",
  },
  {
    value: 2026,
    suffix: "",
    label: "A New Chapter",
    description: "Building a stronger platform for women and future generations.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Belonging",
    description: "Every woman deserves to know that her story matters.",
  },
];

function AnimatedNumber({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const duration = 1100;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      start = Math.floor(value * eased);
      setDisplay(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [active, value]);

  return (
    <>
      {display.toLocaleString()}
      {suffix}
    </>
  );
}

export default function ImpactSection() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive(true);
    }, 250);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#190a0f] px-6 py-28 text-white lg:px-10">
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#6f3542]/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d5a85c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#e8bd72]">
            Our Growing Vision
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            More than a movement.
            <br />
            <span className="text-[#e8bd72]">A legacy in motion.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            Chebomuren Global is creating a platform where recognition,
            connection and empowerment can grow into opportunities for women
            and generations to come.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item, index) => (
            <div
              key={item.label}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#e8bd72]/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  0{index + 1}
                </span>

                <span className="text-[#e8bd72] transition duration-500 group-hover:rotate-45">
                  ✦
                </span>
              </div>

              <div className="mt-12 font-serif text-5xl text-[#e8bd72] sm:text-6xl">
                <AnimatedNumber
                  value={item.value}
                  suffix={item.suffix}
                  active={active}
                />
              </div>

              <h3 className="mt-5 font-serif text-2xl">{item.label}</h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}