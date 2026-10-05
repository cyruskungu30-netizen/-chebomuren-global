 import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    text: "When you contact Ubuntu Couture House, request a private appointment, enquire about a collection or otherwise interact with our website, you may provide information such as your name, email address, phone number, appointment preferences and the contents of your message.",
  },
  {
    number: "02",
    title: "How We Use Information",
    text: "Information provided to us may be used to respond to enquiries, process appointment requests, communicate about collections, assist with custom orders and improve the experience provided by Ubuntu Couture House.",
  },
  {
    number: "03",
    title: "Communication",
    text: "If you provide contact information when making an enquiry, we may use it to respond to that specific request. We do not intend to use your information for unrelated communication without an appropriate basis or your consent where required.",
  },
  {
    number: "04",
    title: "Website Information",
    text: "Our website may use standard technical information and analytics technologies to help maintain, secure and improve the website. Such information may include browser, device, usage and general website interaction data.",
  },
  {
    number: "05",
    title: "Third-Party Services",
    text: "Certain website functions may rely on third-party services, such as hosting, analytics, communication or social media platforms. Those services may process information according to their own privacy policies.",
  },
  {
    number: "06",
    title: "Data Security",
    text: "We take reasonable steps to protect information submitted through the website. However, no online transmission or storage system can be guaranteed to be completely secure.",
  },
  {
    number: "07",
    title: "Your Choices",
    text: "You may contact Ubuntu Couture House regarding information you have provided to us and request appropriate access, correction or deletion where applicable under relevant privacy laws.",
  },
  {
    number: "08",
    title: "Children's Privacy",
    text: "Our website is intended for general audiences and is not specifically directed toward children. We do not knowingly seek to collect personal information from children.",
  },
  {
    number: "09",
    title: "Changes To This Policy",
    text: "This privacy policy may be updated from time to time to reflect changes to our website, services or legal obligations. The updated version will be published on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section className="relative overflow-hidden bg-[#17110d] px-5 pb-24 pt-36 text-white sm:px-8 lg:px-14 lg:pb-32 lg:pt-48">
        <div
          aria-hidden="true"
          className="absolute right-[-12rem] top-[-14rem] h-[36rem] w-[36rem] rounded-full border border-[#c9a45d]/10"
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
            Privacy
            <br />
            <span className="italic text-[#dfc27c]">Policy.</span>
          </h1>

          <p className="mt-9 max-w-2xl border-l border-white/15 pl-6 text-sm leading-8 text-white/55 md:text-base">
            Your privacy matters to Ubuntu Couture House. This policy explains
            how information may be collected, used and protected when you
            interact with our website.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[8px] font-medium uppercase tracking-[0.28em] text-white/35">
            <span>Last Updated</span>
            <span className="text-[#d8b66a]">October 2026</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.27fr_0.73fr] lg:gap-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#95713a]">
              Legal Information
            </p>

            <p className="mt-5 max-w-[220px] text-xs leading-6 text-[#75695d]">
              This page outlines how information may be handled when you use
              the Ubuntu Couture House website.
            </p>

            <div className="mt-7 h-px w-10 bg-[#a17b3c]" />
          </aside>

          <div>
            <div className="space-y-0 border-t border-[#17110d]/10">
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

                      <p className="mt-6 max-w-3xl text-sm leading-8 text-[#75695d] sm:text-[15px] sm:leading-8">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </section>
              ))}

              <section className="py-10 sm:py-12">
                <div className="grid gap-6 sm:grid-cols-[70px_1fr] sm:gap-8">
                  <span className="pt-1 text-[8px] font-medium tracking-[0.3em] text-[#95713a]">
                    10
                  </span>

                  <div>
                    <h2 className="ubuntu-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-[0.95] tracking-[-0.02em]">
                      Contact Us
                    </h2>

                    <p className="mt-6 max-w-3xl text-sm leading-8 text-[#75695d] sm:text-[15px] sm:leading-8">
                      If you have questions about this Privacy Policy or how
                      your information is handled, please contact Ubuntu
                      Couture House.
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
                Important
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#75695d]">
                This policy describes the intended handling of information
                through the website. Specific legal rights and obligations may
                depend on applicable privacy and data-protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c9a45d] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-black/50">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-5 text-[clamp(2.8rem,5vw,5rem)] leading-[0.88] tracking-[-0.03em]">
              A Mother&apos;s Courage.
              <br />
              A Daughter&apos;s Vision.
            </h2>
          </div>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap gap-x-6 gap-y-4"
          >
            <Link
              href="/terms"
              className="border-b border-transparent pb-1 text-[8px] font-medium uppercase tracking-[0.25em] text-black/60 transition-colors duration-300 hover:border-black/50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
            >
              Terms &amp; Conditions
            </Link>

            <Link
              href="/contact"
              className="border-b border-transparent pb-1 text-[8px] font-medium uppercase tracking-[0.25em] text-black/60 transition-colors duration-300 hover:border-black/50 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}