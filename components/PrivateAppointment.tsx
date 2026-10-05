 "use client";

import { useId, useState } from "react";

const appointmentTypes = [
  "Private Collection Viewing",
  "Custom Couture Consultation",
  "Jewellery Consultation",
  "Headpiece Consultation",
  "International Enquiry",
];

export default function PrivateAppointment() {
  const [submitted, setSubmitted] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const typeId = useId();
  const messageId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="ubuntu-appointment-section"
      id="appointment"
      aria-labelledby="private-appointment-title"
    >
      <div className="ubuntu-appointment-glow" aria-hidden="true" />

      <div className="ubuntu-container ubuntu-appointment-grid">
        <div className="ubuntu-appointment-copy">
          <span className="ubuntu-eyebrow">Private Client Services</span>

          <h2 id="private-appointment-title">
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
              <span aria-hidden="true">01</span>
              <strong>Private Viewing</strong>
              <p>Explore selected pieces in an intimate setting.</p>
            </div>

            <div>
              <span aria-hidden="true">02</span>
              <strong>Bespoke Creation</strong>
              <p>Work with the House to create something uniquely yours.</p>
            </div>

            <div>
              <span aria-hidden="true">03</span>
              <strong>International Enquiries</strong>
              <p>Our House welcomes clients from around the world.</p>
            </div>
          </div>
        </div>

        <div className="ubuntu-appointment-card">
          {submitted ? (
            <div
              className="ubuntu-success-state"
              role="status"
              aria-live="polite"
            >
              <div
                className="ubuntu-success-mark"
                aria-hidden="true"
              >
                ✓
              </div>

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
              noValidate={false}
            >
              <div className="ubuntu-form-heading">
                <span className="ubuntu-eyebrow">Private Enquiry</span>

                <h3>
                  Begin your
                  <br />
                  <em>Ubuntu journey.</em>
                </h3>
              </div>

              <label htmlFor={nameId}>
                <span>Full Name</span>
                <input
                  id={nameId}
                  required
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </label>

              <label htmlFor={emailId}>
                <span>Email Address</span>
                <input
                  id={emailId}
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>

              <label htmlFor={typeId}>
                <span>Enquiry Type</span>

                <select
                  id={typeId}
                  required
                  name="type"
                  defaultValue=""
                >
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

              <label htmlFor={messageId}>
                <span>Message</span>

                <textarea
                  id={messageId}
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
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}