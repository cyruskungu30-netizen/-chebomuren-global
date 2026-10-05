 "use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function AppointmentsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section className="relative overflow-hidden bg-[#17110d] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(213,179,106,0.18),transparent_35%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#17110d] via-[#201710] to-[#0b0806]" />
        </div>

        <div className="relative mx-auto flex min-h-[68vh] max-w-[1500px] items-end px-6 pb-20 pt-40 sm:px-10 lg:px-14 lg:pb-28">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-[#d5b36a]" />
              <p className="text-[8px] uppercase tracking-[0.5em] text-[#d5b36a]">
                Private Service
              </p>
            </div>

            <h1 className="ubuntu-serif mt-7 text-6xl leading-[0.84] tracking-[-0.055em] sm:text-8xl lg:text-[9rem]">
              Your Ubuntu
              <br />
              <span className="italic text-[#d5b36a]">journey.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-8 text-white/50 md:text-base">
              Request a private consultation to discover available pieces,
              discuss custom orders, or explore a creation selected especially
              for you.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              The Private Experience
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] md:text-7xl">
              A conversation
              <br />
              <span className="italic text-[#a17c3f]">
                before a creation.
              </span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-[#716559]">
              Ubuntu Couture House welcomes personal conversations around our
              collections, availability, styling, custom commissions and
              special occasions.
            </p>

            <div className="mt-10 space-y-6 border-t border-black/10 pt-7">
              {[
                [
                  "01",
                  "Discover",
                  "Explore the house and find pieces that speak to you.",
                ],
                [
                  "02",
                  "Discuss",
                  "Tell us what you are looking for and how we can assist.",
                ],
                [
                  "03",
                  "Create",
                  "Together, discover a piece that carries your story.",
                ],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-5">
                  <span className="pt-1 text-[8px] tracking-[0.25em] text-[#a17c3f]">
                    {number}
                  </span>

                  <div>
                    <h3 className="ubuntu-serif text-2xl">{title}</h3>

                    <p className="mt-2 text-sm leading-7 text-[#75695d]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#eee4d3] p-6 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                <span className="text-5xl text-[#a17c3f]">✓</span>

                <p className="mt-7 text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                  Request Received
                </p>

                <h2 className="ubuntu-serif mt-5 text-5xl leading-none">
                  Thank you.
                </h2>

                <p className="mx-auto mt-7 max-w-md text-sm leading-8 text-[#716559]">
                  Your private consultation request has been received. The
                  Ubuntu Couture House team will be in touch.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-9 min-h-[52px] rounded-md border border-[#17110d] px-8 py-4 text-[8px] font-semibold uppercase tracking-[0.3em] transition duration-500 hover:-translate-y-0.5 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f] focus-visible:ring-offset-2"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
                    Private Consultation
                  </p>

                  <h2 className="ubuntu-serif mt-4 text-4xl leading-none md:text-5xl">
                    Begin the conversation.
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                  />
                </div>

                <Field label="Phone Number" name="phone" type="tel" />

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-3 block text-[8px] uppercase tracking-[0.25em] text-[#75695d]"
                  >
                    Area Of Interest
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    className="w-full border-b border-[#17110d]/20 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-[#a17c3f]"
                  >
                    <option value="" disabled>
                      Select an area
                    </option>

                    <option value="couture">Couture Fashion</option>
                    <option value="jewellery">
                      Contemporary Jewellery
                    </option>
                    <option value="rare-gems">Rare Gems</option>
                    <option value="beadwork">Maasai Beadwork</option>
                    <option value="headpieces">Royal Headpieces</option>
                    <option value="custom">Custom Creation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="preferredDate"
                    className="mb-3 block text-[8px] uppercase tracking-[0.25em] text-[#75695d]"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    className="w-full border-b border-[#17110d]/20 bg-transparent px-0 py-4 text-sm outline-none transition focus:border-[#a17c3f]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[8px] uppercase tracking-[0.25em] text-[#75695d]"
                  >
                    Tell Us More
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us what you are looking for..."
                    className="w-full resize-none border-b border-[#17110d]/20 bg-transparent px-0 py-4 text-sm leading-7 outline-none placeholder:text-[#8d8175] focus:border-[#a17c3f]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex min-h-[56px] w-full items-center justify-center rounded-md bg-[#17110d] px-8 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#dfc27c] transition duration-500 hover:-translate-y-0.5 hover:bg-[#a98448] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f] focus-visible:ring-offset-2"
                >
                  Request Private Consultation
                </button>

                <p className="text-center text-[8px] uppercase tracking-[0.18em] text-[#8a7b6a]">
                  Your information is treated with discretion.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#e9dfcf] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
            Ubuntu Philosophy
          </p>

          <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] md:text-7xl">
            I am because
            <br />
            <span className="italic text-[#a17c3f]">we are.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#716559]">
            Every private conversation is an opportunity to connect heritage,
            identity, craftsmanship and the person who will carry the piece
            forward.
          </p>

          <Link
            href="/collections/catalogue"
            className="mt-9 inline-flex min-h-[52px] items-center justify-center rounded-md border border-[#17110d] bg-[#e9dfcf] px-8 py-4 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#17110d] transition duration-500 hover:-translate-y-0.5 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17c3f] focus-visible:ring-offset-2"
          >
            Explore The Collections
          </Link>
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