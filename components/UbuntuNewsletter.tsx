 "use client";

import { useState } from "react";

export default function UbuntuNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="ubuntu-newsletter">
      <div className="ubuntu-newsletter-inner">
        <div className="ubuntu-newsletter-symbol">U</div>

        <span className="ubuntu-eyebrow">The Ubuntu Journal</span>

        <h2>
          Stories of heritage.
          <br />
          <em>Stories of becoming.</em>
        </h2>

        <p>
          Join our private journal for new collections, editorial stories,
          cultural discoveries, and invitations from the House.
        </p>

        {submitted ? (
          <div className="ubuntu-newsletter-success">
            <span>✓</span>
            You are now part of the Ubuntu Journal.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="ubuntu-newsletter-form"
          >
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
            />

            <button type="submit">
              Subscribe
              <span>↗</span>
            </button>
          </form>
        )}

        <small>
          By subscribing, you agree to receive communications from Ubuntu
          Couture House.
        </small>
      </div>
    </section>
  );
}