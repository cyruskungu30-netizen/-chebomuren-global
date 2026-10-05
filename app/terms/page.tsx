 import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Acceptance Of These Terms",
    content:
      "By accessing or using the Ubuntu Couture House website, you agree to comply with these Terms & Conditions. If you do not agree with these terms, please do not use the website.",
  },
  {
    number: "02",
    title: "About The Website",
    content:
      "Ubuntu Couture House provides information about its fashion, jewellery, rare gems, beadwork, headpieces, private services and related activities through this website.",
  },
  {
    number: "03",
    title: "Product Information",
    content:
      "We make reasonable efforts to present collection information, descriptions and imagery accurately. Colours, textures, dimensions and appearance may vary depending on materials, photography and display settings.",
  },
  {
    number: "04",
    title: "Availability",
    content:
      "Collection pieces may be limited, unique or available only by private enquiry. Displaying a piece on the website does not necessarily guarantee its availability for immediate purchase.",
  },
  {
    number: "05",
    title: "Private Appointments",
    content:
      "Appointment requests submitted through the website are requests only and are subject to confirmation and availability. A submitted request does not by itself constitute a confirmed appointment.",
  },
  {
    number: "06",
    title: "Custom Orders",
    content:
      "Custom creations may require separate discussions regarding design, materials, timing, pricing and approval. Specific conditions for a custom order will be communicated before any commitment is made.",
  },
  {
    number: "07",
    title: "Intellectual Property",
    content:
      "Website content, including photographs, text, branding, logos, designs, graphics and other original materials, belongs to Ubuntu Couture House or its respective rights holders unless otherwise stated.",
    additional:
      "Content may not be reproduced, distributed, modified or used commercially without appropriate permission.",
  },
  {
    number: "08",
    title: "Website Use",
    content:
      "You agree not to misuse the website, attempt to gain unauthorised access, interfere with its operation or use its content for unlawful purposes.",
  },
  {
    number: "09",
    title: "External Links",
    content:
      "The website may contain links to third-party websites or social platforms. Ubuntu Couture House is not responsible for the content, availability or policies of external websites.",
  },
  {
    number: "10",
    title: "Website Availability",
    content:
      "We aim to keep the website available and functioning properly, but uninterrupted access cannot be guaranteed. Maintenance, technical issues, updates or circumstances outside our control may occasionally affect availability.",
  },
  {
    number: "11",
    title: "Limitation Of Liability",
    content:
      "To the extent permitted by applicable law, Ubuntu Couture House is not responsible for losses arising from use of the website, reliance on website information or temporary inability to access the website.",
  },
  {
    number: "12",
    title: "Changes To These Terms",
    content:
      "These Terms & Conditions may be updated when necessary. Any updated version will be published on this page and will apply from the date indicated in the updated policy.",
  },
  {
    number: "13",
    title: "Governing Law",
    content:
      "These terms are intended to operate subject to applicable laws and regulations. Any specific legal or jurisdictional terms applicable to a particular transaction or service will be communicated separately where required.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section className="relative overflow-hidden bg-[#17110d] px-5 pb-24 pt-36 text-white sm:px-8 lg:px-14 lg:pb-32 lg:pt-48">
        <div
          aria-hidden="true"
          className="absolute right-[-12rem] top-[-14rem] h-[36rem] w-[36rem] rounded-full border border-[#c9a45d]/10"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-16rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full border border-[#c9a45d]/10"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#d8b66a] sm:w-14"
            />

            <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#dfc27c]">
              Legal
            </p>
          </div>

          <h1 className="ubuntu-serif mt-8 max-w-6xl text-[clamp(4rem,9vw,8.5rem)] leading-[0.8] tracking-[-0.05em]">
            Terms &
            <br />
            <span className="italic text-[#dfc27c]">Conditions.</span>
          </h1>

          <p className="mt-9 max-w-2xl border-l border-white/15 pl-6 text-sm leading-8 text-white/55 md:text-base">
            These terms describe the general conditions that apply when you
            access or use the Ubuntu Couture House website and its services.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.27fr_0.73fr] lg:gap-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#95713a]">
              Legal Information
            </p>

            <div className="mt-6">
              <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#17110d]/40">
                Last Updated
              </p>

              <p className="mt-2 text-sm text-[#75695d]">October 2026</p>
            </div>

            <div className="mt-7 h-px w-10 bg-[#a17b3c]" />

            <p className="mt-6 max-w-[220px] text-xs leading-6 text-[#75695d]">
              Please review these terms before using the website, requesting a
              private appointment or enquiring about a creation.
            </p>
          </aside>

          <article>
            <p className="mb-12 max-w-3xl text-lg leading-9 text-[#51483e] sm:text-xl">
              Ubuntu Couture House is built around craftsmanship, heritage and
              meaningful personal expression. These terms provide the general
              framework for engaging with the House online.
            </p>

            <div className="border-t border-[#17110d]/10">
              {sections.map((section) => (
                <section
                  key={section.number}
                  className="border-b border-[#17110d]/10 py-10 sm:py-12"
                >
                  <div className="grid gap-6 sm:grid-cols-[70px_1fr] sm:gap-8">
                    <span className="pt-1 text-[8px] font-medium tracking-[0.3em] text-[#95713a]">
                      {section.number}
                    </span>

                    <div>
                      <h2 className="ubuntu-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-[0.95] tracking-[-0.02em]">
                        {section.title}
                      </h2>

                      <p className="mt-6 max-w-3xl text-sm leading-8 text-[#75695d] sm:text-[15px]">
                        {section.content}
                      </p>

                      {section.additional && (
                        <p className="mt-5 max-w-3xl text-sm leading-8 text-[#75695d] sm:text-[15px]">
                          {section.additional}
                        </p>
                      )}
                    </div>
                  </div>
                </section>
              ))}

              <section className="py-10 sm:py-12">
                <div className="grid gap-6 sm:grid-cols-[70px_1fr] sm:gap-8">
                  <span className="pt-1 text-[8px] font-medium tracking-[0.3em] text-[#95713a]">
                    14
                  </span>

                  <div>
                    <h2 className="ubuntu-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-[0.95] tracking-[-0.02em]">
                      Contact
                    </h2>

                    <p className="mt-6 max-w-3xl text-sm leading-8 text-[#75695d] sm:text-[15px]">
                      If you have questions about these Terms &amp; Conditions,
                      please contact Ubuntu Couture House.
                    </p>

                    <Link
                      href="/contact"
                      className="mt-7 inline-flex border-b border-[#a17b3c] pb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-[#76572a] transition-colors duration-300 hover:border-[#17110d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
                    >
                      Contact The House →
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-12 border-l border-[#a17b3c] bg-[#eee4d3] px-6 py-7 sm:px-8">
              <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#95713a]">
                Please Note
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#75695d]">
                These general terms are intended to describe website use and
                related enquiries. Specific arrangements for a purchase,
                appointment or commissioned creation may be communicated
                separately where applicable.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-[#c9a45d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
              >
                Return Home
              </Link>

              <Link
                href="/collections/catalogue"
                className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/20 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:border-[#17110d] hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
              >
                Explore Collections
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#c9a45d] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-black/50">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-5 text-[clamp(2.8rem,5vw,5rem)] leading-[0.88] tracking-[-0.03em]">
              African Elegance.
              <br />
              Luxury Reimagined.
            </h2>
          </div>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap gap-x-6 gap-y-4"
          >
            <Link
              href="/privacy"
              className="border-b border-transparent pb-1 text-[8px] font-medium uppercase tracking-[0.25em] text-black/60 transition-colors duration-300 hover:border-black/50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="border-b border-transparent pb-1 text-[8px] font-medium uppercase tracking-[0.25em] text-black/60 transition-colors duration-300 hover:border-black/50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
            >
              Contact
            </Link>

            <Link
              href="/collections/catalogue"
              className="border-b border-transparent pb-1 text-[8px] font-medium uppercase tracking-[0.25em] text-black/60 transition-colors duration-300 hover:border-black/50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
            >
              Collections
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}