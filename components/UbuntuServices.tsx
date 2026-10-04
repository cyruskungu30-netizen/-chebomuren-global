"use client";

import { useState } from "react";

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

  const service = services[active];

  return (
    <section className="ubuntu-services">
      <div className="ubuntu-services-heading">
        <div>
          <span className="ubuntu-eyebrow">The Ubuntu Experience</span>

          <h2>
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
        <div className="ubuntu-services-list">
          {services.map((item, index) => {
            const isActive = index === active;

            return (
              <button
                key={item.number}
                type="button"
                className={`ubuntu-service-row ${
                  isActive ? "is-active" : ""
                }`}
                onClick={() => setActive(index)}
              >
                <span>{item.number}</span>

                <div>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>

                <i>{isActive ? "−" : "+"}</i>
              </button>
            );
          })}
        </div>

        <div className="ubuntu-services-visual">
          <div className="ubuntu-services-image">
            <img
              key={service.image}
              src={service.image}
              alt={service.title}
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