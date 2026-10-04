 "use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section className="relative overflow-hidden bg-[#17110d] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(213,179,106,0.2),transparent_35%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#17110d] via-[#241a12] to-[#0b0806]" />
        </div>

        <div className="relative mx-auto flex min-h-[60vh] max-w-[1500px] items-end px-6 pb-16 pt-40 sm:px-10 lg:px-14 lg:pb-24">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-[#d5b36a]" />

              <p className="text-[8px] uppercase tracking-[0.5em] text-[#d5b36a]">
                Contact The House
              </p>
            </div>

            <h1 className="ubuntu-serif mt-7 text-6xl leading-[0.85] tracking-[-0.055em] sm:text-8xl lg:text-[8rem]">
              Let&apos;s begin
              <br />
              <span className="italic text-[#d5b36a]">a conversation.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] md:text-6xl">
              We would love
              <br />
              <span className="italic text-[#a17c3f]">to hear from you.</span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-[#716559]">
              Have a question about collections, availability, custom orders,
              collaborations or private appointments? Send us a message and
              we&apos;ll respond as soon as possible.
            </p>

            <div className="mt-10 space-y-7 border-t border-black/10 pt-8">
              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-[#95713a]">
                  Collections
                </p>
                <Link
                  href="/collections/catalogue"
                  className="mt-2 block text-sm transition hover:text-[#a17c3f]"
                >
                  Explore The House →
                </Link>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-[#95713a]">
                  Private Service
                </p>
                <Link
                  href="/appointments"
                  className="mt-2 block text-sm transition hover:text-[#a17c3f]"
                >
                  Request A Consultation →
                </Link>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-[#95713a]">
                  Philosophy
                </p>
                <p className="ubuntu-serif mt-2 text-xl italic">
                  I am because we are.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#eee4d3] p-6 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                <span className="text-5xl text-[#a17c3f]">✓</span>

                <p className="mt-7 text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                  Message Received
                </p>

                <h2 className="ubuntu-serif mt-5 text-5xl">
                  Thank you.
                </h2>

                <p className="mx-auto mt-7 max-w-md text-sm leading-8 text-[#716559]">
                  Your message has been received. Ubuntu Couture House will be
                  in touch as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-9 border border-[#17110d] px-8 py-4 text-[8px] uppercase tracking-[0.3em] transition hover:bg-[#17110d] hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                    Enquiries
                  </p>

                  <h2 className="ubuntu-serif mt-4 text-4xl md:text-5xl">
                    Contact Ubuntu.
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email Address" name="email" type="email" required />
                </div>

                <Field label="Subject" name="subject" required />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[8px] uppercase tracking-[0.25em] text-[#75695d]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder="How can we assist you?"
                    className="w-full resize-none border-b border-[#17110d]/20 bg-transparent px-0 py-4 text-sm leading-7 outline-none placeholder:text-[#8d8175] focus:border-[#a17c3f]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex min-h-[56px] w-full items-center justify-center bg-[#17110d] px-8 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#dfc27c] transition hover:bg-[#a98448] hover:text-[#17110d]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[8px] uppercase tracking-[0.25em] text-[#75695d]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-[#17110d]/20 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-[#a17c3f]"
      />
    </div>
  );
}