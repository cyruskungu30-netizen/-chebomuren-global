 "use client";

import { useId, useState } from "react";

export default function UbuntuNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const emailId = useId();
  const statusId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      className="ubuntu-newsletter"
      aria-labelledby={`${emailId}-title`}
    >
      <div className="ubuntu-newsletter-inner">
        <div
          className="ubuntu-newsletter-symbol"
          aria-hidden="true"
        >
          U
        </div>

        <span className="ubuntu-eyebrow">
          The Ubuntu Journal
        </span>

        <h2 id={`${emailId}-title`}>
          Stories of heritage.
          <br />
          <em>Stories of becoming.</em>
        </h2>

        <p>
          Join our private journal for new collections, editorial stories,
          cultural discoveries, and invitations from the House.
        </p>

        {submitted ? (
          <div
            id={statusId}
            className="ubuntu-newsletter-success"
            role="status"
            aria-live="polite"
          >
            <span aria-hidden="true">✓</span>
            <span>You are now part of the Ubuntu Journal.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="ubuntu-newsletter-form"
            aria-label="Subscribe to the Ubuntu Journal"
          >
            <label htmlFor={emailId} className="sr-only">
              Email address
            </label>

            <input
              id={emailId}
              required
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              autoComplete="email"
              inputMode="email"
              spellCheck={false}
              aria-describedby={`${emailId}-note`}
              className="focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#f7f1e6]"
            />

            <button
              type="submit"
              className="focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#f7f1e6]"
            >
              Subscribe
              <span aria-hidden="true">↗</span>
            </button>
          </form>
        )}

        <small id={`${emailId}-note`}>
          By subscribing, you agree to receive communications from Ubuntu
          Couture House.
        </small>
      </div>
    </section>
  );
}