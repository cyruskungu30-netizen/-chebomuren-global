 "use client";

import { useState } from "react";

const appointmentTypes = [
  "Private Collection Viewing",
  "Custom Couture Consultation",
  "Jewellery Consultation",
  "Headpiece Consultation",
  "International Enquiry",
];

export default function PrivateAppointment() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="ubuntu-appointment-section" id="appointment">
      <div className="ubuntu-appointment-glow" />

      <div className="ubuntu-container ubuntu-appointment-grid">
        <div className="ubuntu-appointment-copy">
          <span className="ubuntu-eyebrow">Private Client Services</span>

          <h2>
            Enter the
            <br />
            <em>world of Ubuntu.</em>
          </h2>

          <p>
            Discover selected pieces, bespoke creations, and private
            consultations designed around your story, your style, and your
            occasion.
          </p>

          <div className="ubuntu-appointment-details">
            <div>
              <span>01</span>
              <strong>Private Viewing</strong>
              <p>Explore selected pieces in an intimate setting.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Bespoke Creation</strong>
              <p>Work with the House to create something uniquely yours.</p>
            </div>

            <div>
              <span>03</span>
              <strong>International Enquiries</strong>
              <p>Our House welcomes clients from around the world.</p>
            </div>
          </div>
        </div>

        <div className="ubuntu-appointment-card">
          {submitted ? (
            <div className="ubuntu-success-state">
              <div className="ubuntu-success-mark">✓</div>

              <span className="ubuntu-eyebrow">Enquiry Received</span>

              <h3>
                Thank you for
                <br />
                <em>contacting the House.</em>
              </h3>

              <p>
                Your private enquiry has been received. A member of Ubuntu
                Couture House will be in touch shortly.
              </p>

              <button
                type="button"
                className="ubuntu-button ubuntu-button-dark"
                onClick={() => setSubmitted(false)}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="ubuntu-appointment-form"
            >
              <div className="ubuntu-form-heading">
                <span className="ubuntu-eyebrow">Private Enquiry</span>

                <h3>
                  Begin your
                  <br />
                  <em>Ubuntu journey.</em>
                </h3>
              </div>

              <label>
                <span>Full Name</span>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your full name"
                />
              </label>

              <label>
                <span>Email Address</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>

              <label>
                <span>Enquiry Type</span>

                <select required name="type" defaultValue="">
                  <option value="" disabled>
                    Select an enquiry
                  </option>

                  {appointmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Message</span>

                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us what you are looking for..."
                />
              </label>

              <button
                type="submit"
                className="ubuntu-button ubuntu-button-dark ubuntu-button-full"
              >
                Send Private Enquiry
                <span>↗</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}