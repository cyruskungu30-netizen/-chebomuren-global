 "use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type AppointmentType =
  | "Private Viewing"
  | "Bespoke Couture"
  | "Jewellery Curation"
  | "Headpiece Consultation";

type AppointmentForm = {
  service: AppointmentType | "";
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const appointmentTypes: {
  value: AppointmentType;
  label: string;
  description: string;
}[] = [
  {
    value: "Private Viewing",
    label: "Private Viewing",
    description:
      "Discover selected pieces from the Ubuntu Couture House collections in a private setting.",
  },
  {
    value: "Bespoke Couture",
    label: "Bespoke Couture",
    description:
      "Discuss a personalised couture vision shaped around your story, occasion, and identity.",
  },
  {
    value: "Jewellery Curation",
    label: "Jewellery Curation",
    description:
      "Explore contemporary jewellery, rare gems, cow horn pieces, and heritage-inspired designs.",
  },
  {
    value: "Headpiece Consultation",
    label: "Headpiece Consultation",
    description:
      "Find a statement headpiece designed to express dignity, presence, and individuality.",
  },
];

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function AppointmentExperience() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState<AppointmentForm>({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  function updateField<K extends keyof AppointmentForm>(
    field: K,
    value: AppointmentForm[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function nextStep() {
    setStep((current) => Math.min(current + 1, 4));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="border-y border-[#15100c]/10 bg-[#f7f1e6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
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
            Request Received
          </p>

          <h2 className="mt-5 font-[var(--font-ubuntu-serif)] text-5xl leading-[0.9] sm:text-6xl">
            Your private
            <br />
            <span className="italic">experience awaits.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#15100c]/60">
            Thank you, {form.name || "for your enquiry"}. Your request for a{" "}
            {form.service.toLowerCase()} on {form.date} at {form.time} has
            been recorded for this experience.
          </p>

          <div className="mx-auto mt-10 max-w-md border-y border-[#15100c]/10 py-6 text-left">
            <div className="flex justify-between gap-6 py-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#15100c]/45">
                Experience
              </span>

              <span className="text-right text-sm">
                {form.service}
              </span>
            </div>

            <div className="flex justify-between gap-6 py-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#15100c]/45">
                Date
              </span>

              <span className="text-right text-sm">
                {form.date}
              </span>
            </div>

            <div className="flex justify-between gap-6 py-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#15100c]/45">
                Time
              </span>

              <span className="text-right text-sm">
                {form.time}
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/collections/catalogue"
              className="inline-flex min-h-12 items-center justify-center border border-[#15100c] bg-[#15100c] px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e6] transition-all duration-300 hover:border-[#9a7840] hover:bg-[#9a7840] hover:text-[#15100c]"
            >
              Explore Collections
            </Link>

            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center border border-[#15100c]/20 px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#15100c] transition-all duration-300 hover:border-[#9a7840] hover:text-[#9a7840]"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f1e6] px-5 py-16 text-[#15100c] sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex items-center justify-between gap-5">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9a7840]">
              Private Experience
            </p>

            <p className="mt-2 font-[var(--font-ubuntu-serif)] text-2xl">
              {step === 1 && "Choose your experience"}
              {step === 2 && "Choose your preferred time"}
              {step === 3 && "Tell us about you"}
              {step === 4 && "Review your request"}
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/40">
              Step
            </p>

            <p className="mt-1 font-[var(--font-ubuntu-serif)] text-2xl">
              0{step}
              <span className="text-[#15100c]/25"> / 04</span>
            </p>
          </div>
        </div>

        <div className="mb-12 h-px bg-[#15100c]/10">
          <div
            className="h-px bg-[#9a7840] transition-all duration-700"
            style={{
              width: `${step * 25}%`,
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <div className="grid gap-4 md:grid-cols-2">
                {appointmentTypes.map((appointment) => {
                  const selected =
                    form.service === appointment.value;

                  return (
                    <button
                      key={appointment.value}
                      type="button"
                      onClick={() =>
                        updateField("service", appointment.value)
                      }
                      className={`group border p-7 text-left transition-all duration-300 ${
                        selected
                          ? "border-[#9a7840] bg-[#15100c] text-[#f7f1e6]"
                          : "border-[#15100c]/10 bg-transparent hover:border-[#9a7840]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p
                            className={`text-[8px] font-semibold uppercase tracking-[0.25em] ${
                              selected
                                ? "text-[#d8bd82]"
                                : "text-[#9a7840]"
                            }`}
                          >
                            Private Experience
                          </p>

                          <h3 className="mt-4 font-[var(--font-ubuntu-serif)] text-3xl">
                            {appointment.label}
                          </h3>

                          <p
                            className={`mt-4 max-w-md text-sm leading-6 ${
                              selected
                                ? "text-white/60"
                                : "text-[#15100c]/55"
                            }`}
                          >
                            {appointment.description}
                          </p>
                        </div>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center border ${
                            selected
                              ? "border-[#d8bd82] text-[#d8bd82]"
                              : "border-[#15100c]/15 text-transparent"
                          }`}
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!form.service}
                  className="min-h-12 border border-[#15100c] bg-[#15100c] px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e6] transition-all duration-300 hover:border-[#9a7840] hover:bg-[#9a7840] hover:text-[#15100c] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <label
                    htmlFor="appointment-date"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/55"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="appointment-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(event) =>
                      updateField("date", event.target.value)
                    }
                    required
                    className="h-14 w-full border border-[#15100c]/15 bg-transparent px-4 text-sm outline-none transition-colors focus:border-[#9a7840]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="appointment-time"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/55"
                  >
                    Preferred Time
                  </label>

                  <select
                    id="appointment-time"
                    value={form.time}
                    onChange={(event) =>
                      updateField("time", event.target.value)
                    }
                    required
                    className="h-14 w-full border border-[#15100c]/15 bg-[#f7f1e6] px-4 text-sm outline-none transition-colors focus:border-[#9a7840]"
                  >
                    <option value="">Select a time</option>

                    {times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-10 border border-[#15100c]/10 p-6">
                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#9a7840]">
                  Selected Experience
                </p>

                <p className="mt-3 font-[var(--font-ubuntu-serif)] text-3xl">
                  {form.service}
                </p>

                <p className="mt-2 text-sm text-[#15100c]/50">
                  We will use your preferred date and time as the starting
                  point for your private experience.
                </p>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={previousStep}
                  className="min-h-12 border border-[#15100c]/15 px-8 text-[9px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:border-[#9a7840] hover:text-[#9a7840]"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!form.date || !form.time}
                  className="min-h-12 border border-[#15100c] bg-[#15100c] px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e6] transition-all duration-300 hover:border-[#9a7840] hover:bg-[#9a7840] hover:text-[#15100c] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="appointment-name"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/55"
                  >
                    Full Name
                  </label>

                  <input
                    id="appointment-name"
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    required
                    placeholder="Your full name"
                    className="h-14 w-full border-b border-[#15100c]/20 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#15100c]/30 focus:border-[#9a7840]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="appointment-email"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/55"
                  >
                    Email Address
                  </label>

                  <input
                    id="appointment-email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    required
                    placeholder="you@example.com"
                    className="h-14 w-full border-b border-[#15100c]/20 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#15100c]/30 focus:border-[#9a7840]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="appointment-phone"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/55"
                  >
                    Phone Number
                  </label>

                  <input
                    id="appointment-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="+254 ..."
                    className="h-14 w-full border-b border-[#15100c]/20 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#15100c]/30 focus:border-[#9a7840]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="appointment-notes"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#15100c]/55"
                  >
                    Notes
                  </label>

                  <input
                    id="appointment-notes"
                    type="text"
                    value={form.notes}
                    onChange={(event) =>
                      updateField("notes", event.target.value)
                    }
                    placeholder="Tell us anything important..."
                    className="h-14 w-full border-b border-[#15100c]/20 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#15100c]/30 focus:border-[#9a7840]"
                  />
                </div>
              </div>

              <div className="mt-10 border border-[#15100c]/10 bg-[#eee5d7] p-6">
                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#9a7840]">
                  Privacy
                </p>

                <p className="mt-3 text-sm leading-6 text-[#15100c]/55">
                  Your details are used only to respond to this private
                  appointment request.
                </p>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={previousStep}
                  className="min-h-12 border border-[#15100c]/15 px-8 text-[9px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:border-[#9a7840] hover:text-[#9a7840]"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!form.name || !form.email}
                  className="min-h-12 border border-[#15100c] bg-[#15100c] px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e6] transition-all duration-300 hover:border-[#9a7840] hover:bg-[#9a7840] hover:text-[#15100c] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Review Request
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="bg-[#15100c] p-8 text-[#f7f1e6] sm:p-10">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#d8bd82]">
                    Your Experience
                  </p>

                  <h3 className="mt-5 font-[var(--font-ubuntu-serif)] text-4xl leading-none">
                    {form.service}
                  </h3>

                  <div className="mt-10 space-y-6">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/40">
                        Date
                      </p>

                      <p className="mt-2 text-sm">
                        {form.date}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/40">
                        Time
                      </p>

                      <p className="mt-2 text-sm">
                        {form.time}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/40">
                        Guest
                      </p>

                      <p className="mt-2 text-sm">
                        {form.name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-[#15100c]/10 p-8 sm:p-10">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#9a7840]">
                    Contact Details
                  </p>

                  <div className="mt-7 space-y-5">
                    <div className="border-b border-[#15100c]/10 pb-4">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#15100c]/40">
                        Name
                      </p>

                      <p className="mt-2 text-sm">
                        {form.name}
                      </p>
                    </div>

                    <div className="border-b border-[#15100c]/10 pb-4">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#15100c]/40">
                        Email
                      </p>

                      <p className="mt-2 break-all text-sm">
                        {form.email}
                      </p>
                    </div>

                    <div className="border-b border-[#15100c]/10 pb-4">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#15100c]/40">
                        Phone
                      </p>

                      <p className="mt-2 text-sm">
                        {form.phone || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#15100c]/40">
                        Notes
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#15100c]/65">
                        {form.notes || "No additional notes."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={previousStep}
                  className="min-h-12 border border-[#15100c]/15 px-8 text-[9px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:border-[#9a7840] hover:text-[#9a7840]"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="min-h-12 border border-[#15100c] bg-[#15100c] px-9 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e6] transition-all duration-300 hover:border-[#9a7840] hover:bg-[#9a7840] hover:text-[#15100c]"
                >
                  Request Private Experience
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}