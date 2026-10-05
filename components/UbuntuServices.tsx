 "use client";

import Image from "next/image";
import { useId, useState } from "react";

const services = [
  {
    number: "01",
    title: "Private Viewing",
    subtitle: "A private encounter with the House",
    description:
      "Explore selected couture, jewellery, rare gems, beadwork, and headpieces through a personalised private viewing.",
    image: "/images/ubuntu-global-lookbook.jpeg",
  },
  {
    number: "02",
    title: "Bespoke Couture",
    subtitle: "Created around your story",
    description:
      "Collaborate with Ubuntu Couture House to develop a distinctive piece shaped by your personality, heritage, occasion, and vision.",
    image: "/images/couture-brown-front.jpeg",
  },
  {
    number: "03",
    title: "Jewellery Curation",
    subtitle: "Objects with meaning",
    description:
      "Discover sculptural jewellery created from natural materials, rare gems, ethically sourced cow horn, and East African inspiration.",
    image: "/images/cow-horn-jewellery.jpeg",
  },
  {
    number: "04",
    title: "Royal Headpieces",
    subtitle: "Make your presence unforgettable",
    description:
      "Select a statement headpiece designed to express dignity, leadership, African majesty, and individuality.",
    image: "/images/royal-headpiece-gold.jpeg",
  },
];

export default function UbuntuServices() {
  const [active, setActive] = useState(0);
  const headingId = useId();
  const service = services[active];

  return (
    <section
      className="ubuntu-services"
      aria-labelledby={headingId}
    >
      <div className="ubuntu-services-heading">
        <div>
          <span className="ubuntu-eyebrow">The Ubuntu Experience</span>

          <h2 id={headingId}>
            More than
            <br />
            <em>fashion.</em>
          </h2>
        </div>

        <p>
          Every interaction with the House is designed to feel personal,
          intentional, and deeply connected to the story behind each creation.
        </p>
      </div>

      <div className="ubuntu-services-layout">
        <div
          className="ubuntu-services-list"
          role="tablist"
          aria-label="Ubuntu private services"
        >
          {services.map((item, index) => {
            const isActive = index === active;
            const tabId = `ubuntu-service-tab-${item.number}`;
            const panelId = `ubuntu-service-panel-${item.number}`;

            return (
              <button
                key={item.number}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                className={`ubuntu-service-row ${
                  isActive ? "is-active" : ""
                }`}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                    event.preventDefault();

                    const nextIndex =
                      (index + 1) % services.length;

                    setActive(nextIndex);

                    requestAnimationFrame(() => {
                      document
                        .getElementById(
                          `ubuntu-service-tab-${services[nextIndex].number}`,
                        )
                        ?.focus();
                    });
                  }

                  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                    event.preventDefault();

                    const previousIndex =
                      (index - 1 + services.length) % services.length;

                    setActive(previousIndex);

                    requestAnimationFrame(() => {
                      document
                        .getElementById(
                          `ubuntu-service-tab-${services[previousIndex].number}`,
                        )
                        ?.focus();
                    });
                  }

                  if (event.key === "Home") {
                    event.preventDefault();
                    setActive(0);

                    requestAnimationFrame(() => {
                      document
                        .getElementById(
                          `ubuntu-service-tab-${services[0].number}`,
                        )
                        ?.focus();
                    });
                  }

                  if (event.key === "End") {
                    event.preventDefault();

                    const lastIndex = services.length - 1;
                    setActive(lastIndex);

                    requestAnimationFrame(() => {
                      document
                        .getElementById(
                          `ubuntu-service-tab-${services[lastIndex].number}`,
                        )
                        ?.focus();
                    });
                  }
                }}
              >
                <span>{item.number}</span>

                <div>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>

                <i aria-hidden="true">
                  {isActive ? "−" : "+"}
                </i>
              </button>
            );
          })}
        </div>

        <div
          id={`ubuntu-service-panel-${service.number}`}
          className="ubuntu-services-visual"
          role="tabpanel"
          aria-labelledby={`ubuntu-service-tab-${service.number}`}
        >
          <div className="ubuntu-services-image">
            <Image
              key={service.image}
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              priority={active === 0}
            />
          </div>

          <div className="ubuntu-services-caption">
            <span>{service.number}</span>

            <div>
              <strong>{service.title}</strong>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}