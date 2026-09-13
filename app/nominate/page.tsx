 "use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const categories = [
  "Business & Entrepreneurship",
  "Leadership & Public Service",
  "Education & Academia",
  "Health & Medicine",
  "Sports",
  "Arts, Culture & Entertainment",
  "Faith & Community Service",
  "Agriculture & Innovation",
  "Media & Communications",
  "Humanitarian & Social Impact",
  "Young Leadership",
  "Emerging Excellence",
];

const countries = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "South Africa",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Other",
];

const reasons = [
  "She creates positive change",
  "She inspires other women",
  "She leads with purpose",
  "She has achieved remarkable success",
  "She serves her community",
  "She is breaking barriers",
  "She opens doors for others",
];

const steps = [
  ["01", "The nominee", "Tell us who she is."],
  ["02", "Her impact", "Show us what she is changing."],
  ["03", "Her story", "Help us understand her journey."],
  ["04", "Your nomination", "Review and submit her story."],
];

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">
        <span>Nomination journey</span>
        <span>Step {current} of 4</span>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full rounded-full bg-[#b98b4b] transition-all duration-500"
          style={{ width: `${current * 25}%` }}
        />
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  placeholder,
  required = false,
  type = "text",
}: {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#102c24]">
        {label} {required && <span className="text-[#b98b4b]">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#173d31]/10 bg-[#fbfaf6] px-5 py-4 text-sm text-[#102c24] outline-none transition placeholder:text-black/30 focus:border-[#b98b4b] focus:ring-4 focus:ring-[#b98b4b]/10"
      />
    </div>
  );
}

function TextArea({
  label,
  id,
  placeholder,
  required = false,
  rows = 6,
}: {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#102c24]">
        {label} {required && <span className="text-[#b98b4b]">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-[#173d31]/10 bg-[#fbfaf6] px-5 py-4 text-sm leading-7 text-[#102c24] outline-none transition placeholder:text-black/30 focus:border-[#b98b4b] focus:ring-4 focus:ring-[#b98b4b]/10"
      />
    </div>
  );
}

export default function NominatePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [reason, setReason] = useState("");
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const stepTitle = useMemo(
    () => steps[step - 1]?.[1] ?? "The nominee",
    [step]
  );

  const toggleReason = (item: string) => {
    setSelectedReasons((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  };

  const nextStep = () => setStep((current) => Math.min(4, current + 1));
  const previousStep = () => setStep((current) => Math.max(1, current - 1));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f2e9] text-[#102c24]">
      <style jsx global>{`
        .nominate-grid {
          background-image:
            linear-gradient(rgba(185, 139, 75, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185, 139, 75, 0.055) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .nominate-orbit {
          animation: nominateOrbit 18s linear infinite;
        }

        .nominate-orbit-reverse {
          animation: nominateOrbitReverse 24s linear infinite;
        }

        .nominate-pulse {
          animation: nominatePulse 2.6s ease-in-out infinite;
        }

        .nominate-float {
          animation: nominateFloat 6s ease-in-out infinite;
        }

        .nominate-card {
          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease,
            background 0.4s ease;
        }

        .nominate-card:hover {
          transform: translateY(-7px);
          border-color: rgba(185, 139, 75, 0.45);
          box-shadow: 0 25px 70px rgba(6, 23, 16, 0.12);
        }

        .nominate-image {
          transition: transform 0.7s ease;
        }

        .nominate-image:hover {
          transform: scale(1.04);
        }

        @keyframes nominateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes nominateOrbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes nominatePulse {
          0%, 100% { transform: scale(0.95); opacity: 0.55; }
          50% { transform: scale(1.08); opacity: 1; }
        }

        @keyframes nominateFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .nominate-orbit,
          .nominate-orbit-reverse,
          .nominate-pulse,
          .nominate-float {
            animation: none !important;
          }

          .nominate-card,
          .nominate-image {
            transition: none !important;
          }
        }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061710]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="leading-none">
            <div className="font-serif text-2xl font-bold tracking-wide text-[#d6ad68]">
              Chebomuren
            </div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.4em] text-white/45">
              Global
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <Link href="/about" className="text-sm text-white/65 transition hover:text-[#d6ad68]">About</Link>
            <Link href="/gala" className="text-sm text-white/65 transition hover:text-[#d6ad68]">Gala</Link>
            <Link href="/women" className="text-sm text-white/65 transition hover:text-[#d6ad68]">Women</Link>
            <Link href="/global" className="text-sm text-white/65 transition hover:text-[#d6ad68]">Global</Link>
            <Link href="/nominate" className="text-sm text-[#d6ad68]">Nominate</Link>
            <Link href="/contact" className="text-sm text-white/65 transition hover:text-[#d6ad68]">Contact</Link>
          </div>

          <Link
            href="/join"
            className="hidden rounded-full bg-[#d6ad68] px-6 py-3 text-sm font-bold text-[#092017] transition hover:-translate-y-1 hover:bg-[#e8c987] md:block"
          >
            Join the Movement
          </Link>
        </div>

        <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-2 md:hidden">
          {[
            ["/about", "About"],
            ["/gala", "Gala"],
            ["/women", "Women"],
            ["/global", "Global"],
            ["/nominate", "Nominate"],
            ["/join", "Join"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[11px] ${
                href === "/nominate"
                  ? "bg-[#d6ad68] font-bold text-[#092017]"
                  : "bg-white/5 text-white/60"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#061710] pt-32 text-white">
        <div className="nominate-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(214,173,104,0.2),transparent_32%)]" />
        <div className="absolute -left-48 -top-48 h-[620px] w-[620px] rounded-full border border-[#d6ad68]/10" />
        <div className="absolute -bottom-56 -right-48 h-[620px] w-[620px] rounded-full bg-[#1f5a4a]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-36">
          <div>
            <p className="hero-reveal text-xs font-bold uppercase tracking-[0.42em] text-[#d6ad68]">
              Nominate a Trailblazer
            </p>

            <h1 className="hero-reveal hero-delay-1 mt-7 max-w-5xl font-serif text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-[100px]">
              Put her
              <br />
              <span className="text-[#d6ad68]">story in light.</span>
            </h1>

            <p className="hero-reveal hero-delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/55">
              Know a Kalenjin woman whose courage, leadership, excellence,
              service, or vision is creating positive change? Give her story
              the recognition it deserves.
            </p>

            <div className="hero-reveal hero-delay-3 mt-9 flex flex-wrap gap-4">
              <a
                href="#nomination-form"
                className="rounded-full bg-[#d6ad68] px-8 py-4 font-bold text-[#092017] transition hover:-translate-y-1 hover:bg-[#e8c987]"
              >
                Start Her Nomination ↓
              </a>
              <Link
                href="/gala"
                className="rounded-full border border-white/15 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Explore the Gala
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["12", "Recognition categories"],
                ["01", "Powerful story"],
                ["∞", "Future impact"],
              ].map(([number, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <div className="font-serif text-2xl text-[#d6ad68]">{number}</div>
                  <div className="mt-2 text-[9px] uppercase tracking-[0.15em] text-white/35">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[430px] w-full max-w-[430px]">
            <div className="nominate-orbit absolute inset-8 rounded-full border border-[#d6ad68]/15" />
            <div className="nominate-orbit-reverse absolute inset-20 rounded-full border border-[#d6ad68]/20" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(214,173,104,0.16),transparent_58%)]" />

            <div className="nominate-float absolute left-1/2 top-1/2 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6ad68]/25 bg-white/[0.04] shadow-[0_0_100px_rgba(214,173,104,0.08)] backdrop-blur-xl">
              <div className="nominate-pulse flex h-40 w-40 items-center justify-center rounded-full border border-[#d6ad68]/35 bg-[#0b211b]">
                <div className="text-center">
                  <div className="text-4xl text-[#d6ad68]">✦</div>
                  <div className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/45">Her story</div>
                </div>
              </div>
            </div>

            {[
              ["COURAGE", "top-3 left-1/2 -translate-x-1/2"],
              ["LEADERSHIP", "right-0 top-1/2 -translate-y-1/2"],
              ["SERVICE", "bottom-5 left-1/2 -translate-x-1/2"],
              ["LEGACY", "left-0 top-1/2 -translate-y-1/2"],
            ].map(([label, position]) => (
              <div
                key={label}
                className={`absolute ${position} rounded-full border border-[#d6ad68]/20 bg-[#0b211b]/80 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-[#d6ad68] backdrop-blur`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f6f2e9] px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {steps.map(([number, title, description], index) => (
            <div
              key={number}
              className={`rounded-2xl border p-5 transition ${
                step === index + 1
                  ? "border-[#b98b4b]/50 bg-white shadow-sm"
                  : "border-black/10 bg-white/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#b98b4b]">{number}</span>
                <span className="h-px flex-1 bg-black/10" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-black/45">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#86652f]">
              Why Her?
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
              Recognition
              <br />
              can become
              <br />
              <span className="text-[#1f5a4a]">momentum.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "She leads", "She creates direction, builds confidence, and brings people forward."],
              ["02", "She serves", "Her work makes life better for people, families, or communities."],
              ["03", "She breaks barriers", "She has challenged limits and opened possibilities for others."],
              ["04", "She leaves legacy", "Her contribution has the power to outlive the moment."],
            ].map(([number, title, text]) => (
              <div key={number} className="nominate-card rounded-3xl border border-black/10 bg-white p-7">
                <span className="text-xs text-[#b98b4b]">{number}</span>
                <h3 className="mt-9 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b211b] px-6 py-28 text-white lg:px-10">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#d6ad68]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d6ad68]">
              The Recognition Standard
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
              We are looking for
              <br />
              <span className="text-[#d6ad68]">impact, not perfection.</span>
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="text-lg leading-8 text-white/60">
              A trailblazer does not have to have a perfect journey. She may
              simply be a woman who kept going, created change, lifted others,
              challenged expectations, or made a difference where it mattered.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Courage", "Excellence", "Service", "Leadership", "Vision", "Impact"].map((item) => (
                <span key={item} className="rounded-full border border-[#d6ad68]/20 bg-[#d6ad68]/10 px-4 py-2 text-xs text-[#d6ad68]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="nomination-form" className="nominate-grid bg-[#eee8dc] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#86652f]">
              Nomination Portal
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
              Tell us about
              <br />
              <span className="text-[#1f5a4a]">{stepTitle.toLowerCase()}.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/50">
              Take your time. The strongest nominations help us understand
              the woman behind the achievement and the people touched by her work.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <aside className="lg:sticky lg:top-32">
              <div className="overflow-hidden rounded-[2rem] bg-[#0b211b] text-white">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/gala-1.jpg.webp"
                    alt="Chebomuren Global celebration"
                    className="nominate-image h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b211b] via-[#0b211b]/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#d6ad68]">Chebomuren Global</p>
                    <p className="mt-2 font-serif text-2xl">Honouring women. Inspiring our future.</p>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">You are helping</p>
                  <div className="mt-6 space-y-5">
                    {[
                      ["01", "Celebrate", "Give achievement visibility."],
                      ["02", "Encourage", "Show another woman what is possible."],
                      ["03", "Connect", "Bring her story into a wider sisterhood."],
                      ["04", "Inspire", "Help create a legacy for the next generation."],
                    ].map(([number, title, text]) => (
                      <div key={number} className="flex gap-4">
                        <span className="text-xs text-[#d6ad68]">{number}</span>
                        <div>
                          <p className="font-serif text-lg">{title}</p>
                          <p className="mt-1 text-xs leading-5 text-white/35">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_30px_90px_rgba(6,23,16,0.09)] sm:p-10 lg:p-12">
              {submitted ? (
                <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#d6ad68] text-4xl text-[#092017] shadow-[0_20px_60px_rgba(185,139,75,0.25)]">
                    ✓
                  </div>
                  <p className="mt-9 text-xs font-bold uppercase tracking-[0.35em] text-[#86652f]">
                    Nomination received
                  </p>
                  <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-6xl">
                    Her story
                    <br />
                    <span className="text-[#1f5a4a]">has been heard.</span>
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-black/50">
                    Thank you for putting an exceptional Kalenjin woman in the
                    spotlight. In the next development phase, this form will
                    connect securely to the Chebomuren Global nomination system.
                  </p>
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link href="/gala" className="rounded-full bg-[#0b211b] px-8 py-4 font-bold text-white">
                      Explore the Gala →
                    </Link>
                    <Link href="/women" className="rounded-full border border-black/10 px-8 py-4 font-bold text-[#102c24]">
                      Meet the Women
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <ProgressBar current={step} />

                  {step === 1 && (
                    <div className="space-y-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-[#b98b4b]">01 / The nominee</p>
                        <h3 className="mt-3 font-serif text-3xl">Who are you nominating?</h3>
                        <p className="mt-2 text-sm text-black/40">
                          Start with the woman at the centre of this story.
                        </p>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="First name" id="nomineeFirstName" placeholder="Her first name" required />
                        <Field label="Last name" id="nomineeLastName" placeholder="Her last name" required />
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Email address" id="nomineeEmail" placeholder="Her email address" type="email" />
                        <Field label="Phone number" id="nomineePhone" placeholder="+254..." type="tel" />
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label htmlFor="category" className="mb-2 block text-sm font-semibold">
                            Recognition category <span className="text-[#b98b4b]">*</span>
                          </label>
                          <select
                            id="category"
                            name="category"
                            required
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                            className="w-full rounded-2xl border border-[#173d31]/10 bg-[#fbfaf6] px-5 py-4 text-sm outline-none focus:border-[#b98b4b]"
                          >
                            <option value="" disabled>Select a category</option>
                            {categories.map((item) => <option key={item}>{item}</option>)}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="country" className="mb-2 block text-sm font-semibold">
                            Country <span className="text-[#b98b4b]">*</span>
                          </label>
                          <select
                            id="country"
                            name="country"
                            required
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                            className="w-full rounded-2xl border border-[#173d31]/10 bg-[#fbfaf6] px-5 py-4 text-sm outline-none focus:border-[#b98b4b]"
                          >
                            <option value="" disabled>Select a country</option>
                            {countries.map((item) => <option key={item}>{item}</option>)}
                          </select>
                        </div>
                      </div>

                      <Field label="City / Town" id="nomineeCity" placeholder="e.g. Nairobi, Eldoret, London..." />
                      <Field label="Profession / Organisation" id="nomineeProfession" placeholder="What does she do?" required />

                      <div className="rounded-2xl border border-[#b98b4b]/20 bg-[#b98b4b]/5 p-5">
                        <p className="text-sm font-semibold text-[#102c24]">A powerful nomination starts with context.</p>
                        <p className="mt-2 text-sm leading-6 text-black/45">
                          Tell us enough to understand who she is, where she works,
                          and the field in which she is creating impact.
                        </p>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-[#b98b4b]">02 / Her impact</p>
                        <h3 className="mt-3 font-serif text-3xl">What is she changing?</h3>
                        <p className="mt-2 text-sm text-black/40">
                          Specific examples make a nomination powerful.
                        </p>
                      </div>

                      <TextArea
                        label="What has she achieved?"
                        id="achievements"
                        required
                        placeholder="Describe her major achievements, milestones, projects, businesses, leadership roles, awards, or contributions..."
                        rows={8}
                      />

                      <TextArea
                        label="What difference has her work made?"
                        id="impact"
                        required
                        placeholder="Tell us who has benefited from her work and what changed because of her..."
                        rows={8}
                      />

                      <div>
                        <p className="mb-3 text-sm font-semibold">Why does she deserve recognition?</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {reasons.map((item) => {
                            const selectedReason = selectedReasons.includes(item);
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => toggleReason(item)}
                                className={`rounded-2xl border p-4 text-left text-sm transition ${
                                  selectedReason
                                    ? "border-[#b98b4b] bg-[#b98b4b]/10 text-[#102c24]"
                                    : "border-black/10 bg-[#fbfaf6] text-black/55 hover:border-[#b98b4b]"
                                }`}
                              >
                                <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px]">
                                  {selectedReason ? "✓" : ""}
                                </span>
                                {item}
                              </button>
                            );
                          })}
                        </div>
                        <input
                          type="hidden"
                          name="recognitionReasons"
                          value={selectedReasons.join(", ")}
                        />
                      </div>

                      <div>
                        <label htmlFor="scale" className="mb-2 block text-sm font-semibold">
                          What scale is her impact?
                        </label>
                        <select
                          id="scale"
                          name="scale"
                          className="w-full rounded-2xl border border-[#173d31]/10 bg-[#fbfaf6] px-5 py-4 text-sm outline-none focus:border-[#b98b4b]"
                        >
                          <option value="">Select one</option>
                          <option>Family / Personal</option>
                          <option>Community</option>
                          <option>County / Regional</option>
                          <option>National</option>
                          <option>International / Global</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-[#b98b4b]">03 / Her story</p>
                        <h3 className="mt-3 font-serif text-3xl">Help us meet the woman.</h3>
                        <p className="mt-2 text-sm text-black/40">
                          Achievements matter. So does the journey behind them.
                        </p>
                      </div>

                      <TextArea
                        label="Tell her story"
                        id="story"
                        required
                        placeholder="Share her journey, challenges, turning points, courage, values, and the moments that shaped who she has become..."
                        rows={10}
                      />

                      <TextArea
                        label="What makes her inspiring?"
                        id="inspiration"
                        required
                        placeholder="What do people learn, feel, or become when they encounter her work or leadership?"
                        rows={7}
                      />

                      <TextArea
                        label="What legacy is she creating?"
                        id="legacy"
                        placeholder="How is she creating opportunities, opening doors, preserving culture, mentoring others, or inspiring the next generation?"
                        rows={7}
                      />

                      <div>
                        <label htmlFor="nominatorRelationship" className="mb-2 block text-sm font-semibold">
                          Your relationship to her
                        </label>
                        <select
                          id="nominatorRelationship"
                          name="nominatorRelationship"
                          className="w-full rounded-2xl border border-[#173d31]/10 bg-[#fbfaf6] px-5 py-4 text-sm outline-none focus:border-[#b98b4b]"
                        >
                          <option value="">Select relationship</option>
                          <option>Friend</option>
                          <option>Family member</option>
                          <option>Colleague</option>
                          <option>Mentor / Mentee</option>
                          <option>Community member</option>
                          <option>Professional connection</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-[#b98b4b]">04 / Your nomination</p>
                        <h3 className="mt-3 font-serif text-3xl">Almost there.</h3>
                        <p className="mt-2 text-sm text-black/40">
                          Add your details so the nomination can be connected to you.
                        </p>
                      </div>

                      <div className="rounded-3xl bg-[#0b211b] p-7 text-white">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#d6ad68]">You are nominating</p>
                        <p className="mt-4 font-serif text-3xl">
                          A trailblazing Kalenjin woman
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white/45">
                          Your nomination will celebrate her contribution and help
                          create a culture where Kalenjin women are seen, heard, and recognised.
                        </p>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Your first name" id="nominatorFirstName" placeholder="Your first name" required />
                        <Field label="Your last name" id="nominatorLastName" placeholder="Your last name" required />
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Your email" id="nominatorEmail" placeholder="you@example.com" type="email" required />
                        <Field label="Your phone" id="nominatorPhone" placeholder="+254..." type="tel" />
                      </div>

                      <TextArea
                        label="Anything else we should know?"
                        id="additionalInformation"
                        placeholder="Add supporting context, links, references, or anything else that helps us understand why she should be recognised..."
                        rows={6}
                      />

                      <div className="rounded-2xl border border-black/10 bg-[#f6f2e9] p-5">
                        <label className="flex cursor-pointer gap-4">
                          <input
                            type="checkbox"
                            name="consent"
                            required
                            className="mt-1 h-5 w-5 accent-[#0b211b]"
                          />
                          <span className="text-sm leading-6 text-black/55">
                            I confirm that the information provided is accurate to
                            the best of my knowledge and I am happy for Chebomuren
                            Global to review this nomination. *
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="mt-12 flex flex-col-reverse gap-3 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={previousStep}
                        className="rounded-full border border-black/10 px-7 py-4 text-sm font-bold text-[#102c24] transition hover:border-[#b98b4b]"
                      >
                        ← Back
                      </button>
                    ) : (
                      <Link
                        href="/women"
                        className="rounded-full border border-black/10 px-7 py-4 text-sm font-bold text-[#102c24] transition hover:border-[#b98b4b]"
                      >
                        View the Women
                      </Link>
                    )}

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="rounded-full bg-[#0b211b] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
                      >
                        Continue to {steps[step][1]} →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="rounded-full bg-[#b98b4b] px-8 py-4 text-sm font-bold text-[#092017] transition hover:-translate-y-1 hover:bg-[#d6ad68]"
                      >
                        Submit Her Nomination ✦
                      </button>
                    )}
                  </div>

                  <p className="mt-5 text-center text-[11px] leading-5 text-black/30">
                    This is currently a frontend nomination experience. Secure
                    backend submission will be connected in the next development phase.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f2e9] px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#86652f]">A nomination can start something</p>
            <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
              One story can
              <br />
              <span className="text-[#1f5a4a]">inspire thousands.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Visibility", "Her work becomes easier to see."],
              ["02", "Encouragement", "Her journey reminds another woman to keep going."],
              ["03", "Legacy", "Her contribution becomes part of a bigger story."],
            ].map(([number, title, text]) => (
              <div key={number} className="nominate-card rounded-3xl border border-black/10 bg-white p-7">
                <span className="text-xs text-[#b98b4b]">{number}</span>
                <h3 className="mt-9 font-serif text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d6ad68] px-6 py-28 lg:px-10">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#173d31]">Honouring Our Women. Inspiring Our Future.</p>
          <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
            Know another woman
            <br />
            who belongs in the spotlight?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#173d31]/65">
            Start her nomination today. Recognition is one way we tell women
            that their work matters and their story belongs.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/join" className="rounded-full bg-[#0b211b] px-8 py-4 font-bold text-white">
              Join the Sisterhood →
            </Link>
            <Link href="/gala" className="rounded-full border border-[#173d31]/25 px-8 py-4 font-bold text-[#173d31] transition hover:bg-white/20">
              Explore Gala
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#04110d] px-6 py-14 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="font-serif text-3xl text-[#d6ad68]">
                Chebomuren Global
              </Link>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/35">
                Celebrating Kalenjin Women. Inspiring Our Future.
              </p>
              <p className="mt-5 max-w-md text-xs leading-6 text-white/25">
                A global movement celebrating women whose courage, leadership,
                excellence, service, and vision are shaping our future.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#d6ad68]">Explore</p>
              <div className="mt-5 space-y-3 text-sm text-white/40">
                <Link className="block transition hover:text-white" href="/">Home</Link>
                <Link className="block transition hover:text-white" href="/about">About</Link>
                <Link className="block transition hover:text-white" href="/gala">Gala</Link>
                <Link className="block transition hover:text-white" href="/women">Women</Link>
                <Link className="block transition hover:text-white" href="/global">Global</Link>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#d6ad68]">Connect</p>
              <div className="mt-5 space-y-3 text-sm text-white/40">
                <Link className="block transition hover:text-white" href="/join">Join Us</Link>
                <Link className="block transition hover:text-white" href="/nominate">Nominate</Link>
                <Link className="block transition hover:text-white" href="/contact">Contact</Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-xs text-white/20">
            © 2026 Chebomuren Global. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
