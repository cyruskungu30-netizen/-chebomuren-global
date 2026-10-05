 "use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    window.setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 450);
  }

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section
        aria-labelledby="contact-heading"
        className="relative isolate overflow-hidden bg-[#17110d] text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(213,179,106,0.18),transparent_32%),radial-gradient(circle_at_12%_85%,rgba(255,255,255,0.035),transparent_28%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#17110d] via-[#241a12] to-[#0b0806]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:72px_72px]"
        />

        <div className="relative mx-auto flex min-h-[64vh] max-w-[1500px] items-end px-6 pb-16 pt-36 sm:px-10 lg:px-14 lg:pb-24">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-12 bg-[#d5b36a] sm:w-14"
              />

              <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#d5b36a]">
                Contact The House
              </p>
            </div>

            <h1
              id="contact-heading"
              className="ubuntu-serif mt-7 text-[3.75rem] leading-[0.85] tracking-[-0.055em] sm:text-8xl lg:text-[8rem]"
            >
              Let&apos;s begin
              <br />
              <span className="italic text-[#d5b36a]">
                a conversation.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-8 text-white/45">
              Questions, collaborations, private appointments or a creation
              you would like to know more about — the house welcomes your
              conversation.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-introduction"
        className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              Ubuntu Couture House
            </p>

            <h2
              id="contact-introduction"
              className="ubuntu-serif mt-6 text-5xl leading-[0.9] tracking-[-0.035em] md:text-6xl"
            >
              We would love
              <br />
              <span className="italic text-[#a17c3f]">
                to hear from you.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-8 text-[#716559]">
              Have a question about collections, availability, custom orders,
              collaborations or private appointments? Send us a message and
              we&apos;ll respond as soon as possible.
            </p>

            <div className="mt-10 border-t border-black/10 pt-8">
              <div className="space-y-7">
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#95713a]">
                    Collections
                  </p>

                  <Link
                    href="/collections/catalogue"
                    className="mt-2 inline-flex text-sm transition-colors hover:text-[#a17c3f] focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                  >
                    Explore The House
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>

                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#95713a]">
                    Private Service
                  </p>

                  <Link
                    href="/appointments"
                    className="mt-2 inline-flex text-sm transition-colors hover:text-[#a17c3f] focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                  >
                    Request A Consultation
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>

                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#95713a]">
                    Philosophy
                  </p>

                  <p className="ubuntu-serif mt-2 text-xl italic">
                    I am because we are.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-[#eee4d3] p-6 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 border border-black/[0.06] sm:inset-6"
            />

            <div className="relative">
              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-labelledby="contact-form-heading"
                  className="space-y-7"
                >
                  <div className="pb-2">
                    <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
                      Enquiries
                    </p>

                    <h2
                      id="contact-form-heading"
                      className="ubuntu-serif mt-4 text-4xl leading-none tracking-[-0.025em] md:text-5xl"
                    >
                      Contact Ubuntu.
                    </h2>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-[#75695d]">
                      Tell us what you have in mind and the house will guide
                      you from there.
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      name="name"
                      autoComplete="name"
                      required
                    />

                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <Field
                    label="Subject"
                    name="subject"
                    autoComplete="off"
                    required
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-[8px] font-medium uppercase tracking-[0.25em] text-[#75695d]"
                    >
                      Message
                      <span
                        aria-hidden="true"
                        className="ml-1 text-[#a17c3f]"
                      >
                        *
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      required
                      placeholder="How can we assist you?"
                      className="w-full resize-none border-b border-[#17110d]/20 bg-transparent px-0 py-4 text-sm leading-7 outline-none placeholder:text-[#8d8175] transition-colors focus:border-[#a17c3f] focus:ring-0"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex min-h-[56px] w-full items-center justify-center bg-[#17110d] px-8 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#dfc27c] transition-colors hover:bg-[#a98448] hover:text-[#17110d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee4d3] disabled:cursor-wait disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>

                  <p className="text-center text-[8px] uppercase tracking-[0.18em] text-[#8a7b6a]">
                    Your message is treated with discretion.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#e9dfcf] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
            Ubuntu Philosophy
          </p>

          <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] tracking-[-0.035em] md:text-7xl">
            I am because
            <br />
            <span className="italic text-[#a17c3f]">we are.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#716559]">
            Every conversation is a meeting point between heritage, identity,
            craftsmanship and the woman who carries the story forward.
          </p>

          <Link
            href="/collections/catalogue"
            className="mt-9 inline-flex min-h-[48px] items-center justify-center border border-[#17110d] px-8 py-4 text-[8px] font-medium uppercase tracking-[0.3em] transition-colors hover:bg-[#17110d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e9dfcf]"
          >
            Explore The Collections
          </Link>
        </div>
      </section>
    </main>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[560px] flex-col items-center justify-center px-4 text-center"
    >
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-[#a17c3f]/30 text-2xl text-[#a17c3f]"
      >
        ✓
      </span>

      <p className="mt-7 text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
        Message Received
      </p>

      <h2 className="ubuntu-serif mt-5 text-5xl leading-none">
        Thank you.
      </h2>

      <p className="mx-auto mt-7 max-w-md text-sm leading-8 text-[#716559]">
        Your message has been received. Ubuntu Couture House will be in touch
        as soon as possible.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-9 min-h-[48px] border border-[#17110d] px-8 py-4 text-[8px] font-medium uppercase tracking-[0.3em] transition-colors hover:bg-[#17110d] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee4d3]"
      >
        Send Another Message
      </button>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const inputId = useId();

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-3 block text-[8px] font-medium uppercase tracking-[0.25em] text-[#75695d]"
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-[#a17c3f]">
            *
          </span>
        ) : null}
      </label>

      <input
        id={inputId}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border-b border-[#17110d]/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors focus:border-[#a17c3f] focus:ring-0"
      />
    </div>
  );
}