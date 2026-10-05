 "use client";

import { FormEvent, useId, useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function UbuntuContactPanel() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();
  const successTitleId = useId();

  function updateField(
    field: keyof ContactForm,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setForm(initialForm);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <section
        className="bg-[#f7f1e6] px-5 py-20 text-[#15100c] sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby={successTitleId}
        aria-live="polite"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#9a7840]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-[#9a7840]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          </div>

          <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9a7840]">
            Message Received
          </p>

          <h2
            id={successTitleId}
            className="mt-5 font-[var(--font-ubuntu-serif)] text-5xl leading-[0.9] sm:text-6xl"
          >
            Thank you for
            <br />
            <span className="italic">reaching out.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#15100c]/60">
            Your message has been received by Ubuntu Couture House. We look
            forward to connecting with you about your enquiry.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-9 inline-flex min-h-12 items-center justify-center border border-[#15100c] bg-[#15100c] px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e6] transition-all duration-300 hover:border-[#9a7840] hover:bg-[#9a7840] hover:text-[#15100c] focus:outline-none focus:ring-2 focus:ring-[#9a7840] focus:ring-offset-2"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-[#f7f1e6] px-5 py-20 text-[#15100c] sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="contact-panel-title"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9a7840]">
            Private Enquiries
          </p>

          <h2
            id="contact-panel-title"
            className="mt-5 font-[var(--font-ubuntu-serif)] text-5xl leading-[0.9] tracking-[-0.03em] sm:text-6xl"
          >
            Let&apos;s begin
            <br />
            <span className="italic">a conversation.</span>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#15100c]/60">
            Have a question about collections, availability, custom orders,
            collaborations, or private experiences? Send us a message and our
            team will respond as soon as possible.
          </p>

          <div className="mt-12 border-t border-[#15100c]/10 pt-7">
            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/40">
              Ubuntu Couture House
            </p>

            <p className="mt-3 font-[var(--font-ubuntu-serif)] text-2xl">
              African Elegance
              <br />
              and Luxury Reimagined.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-t border-[#15100c]/10 pt-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label
                htmlFor={nameId}
                className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/50"
              >
                Full Name
              </label>

              <input
                id={nameId}
                type="text"
                name="name"
                value={form.name}
                onChange={(event) =>
                  updateField("name", event.target.value)
                }
                placeholder="Your full name"
                required
                autoComplete="name"
                className="h-14 w-full border-b border-[#15100c]/20 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#15100c]/30 focus:border-[#9a7840] focus:ring-0"
              />
            </div>

            <div>
              <label
                htmlFor={emailId}
                className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/50"
              >
                Email Address
              </label>

              <input
                id={emailId}
                type="email"
                name="email"
                value={form.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="h-14 w-full border-b border-[#15100c]/20 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#15100c]/30 focus:border-[#9a7840] focus:ring-0"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor={subjectId}
                className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/50"
              >
                Subject
              </label>

              <input
                id={subjectId}
                type="text"
                name="subject"
                value={form.subject}
                onChange={(event) =>
                  updateField("subject", event.target.value)
                }
                placeholder="What would you like to discuss?"
                required
                className="h-14 w-full border-b border-[#15100c]/20 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#15100c]/30 focus:border-[#9a7840] focus:ring-0"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor={messageId}
                className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/50"
              >
                Message
              </label>

              <textarea
                id={messageId}
                name="message"
                value={form.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                placeholder="Tell us about your enquiry..."
                required
                rows={7}
                className="w-full resize-none border-b border-[#15100c]/20 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition-colors placeholder:text-[#15100c]/30 focus:border-[#9a7840] focus:ring-0"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[10px] leading-5 text-[#15100c]/40">
              By submitting this form, you are requesting contact from
              Ubuntu Couture House regarding your enquiry.
            </p>

            <button
              type="submit"
              className="inline-flex min-h-12 shrink-0 items-center justify-center border border-[#15100c] bg-[#15100c] px-9 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#f7f1e6] transition-all duration-300 hover:border-[#9a7840] hover:bg-[#9a7840] hover:text-[#15100c] focus:outline-none focus:ring-2 focus:ring-[#9a7840] focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}