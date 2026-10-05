 import Link from "next/link";

const terms = [
  {
    number: "01",
    title: "Website Use",
    text: "Content on this website is presented for information, inspiration, and exploration of Ubuntu Couture House and its collections.",
  },
  {
    number: "02",
    title: "Collections",
    text: "Product availability, materials, colours, measurements, and designs may vary. Private enquiries are subject to confirmation by the House.",
  },
  {
    number: "03",
    title: "Intellectual Property",
    text: "Images, photography, text, branding, logos, designs, and other original content belong to Ubuntu Couture House or their respective rights holders and may not be reproduced without permission.",
  },
  {
    number: "04",
    title: "Private Enquiries",
    text: "Submitting an enquiry does not automatically create a purchase agreement or guarantee product availability. A member of the House will confirm relevant details directly.",
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
            These terms outline the general conditions governing use of the
            Ubuntu Couture House website and enquiries made through the House.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.27fr_0.73fr] lg:gap-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#95713a]">
              House Terms
            </p>

            <p className="mt-5 max-w-[220px] text-xs leading-6 text-[#75695d]">
              Please review these general conditions before using the website
              or submitting an enquiry.
            </p>

            <div className="mt-7 h-px w-10 bg-[#a17b3c]" />
          </aside>

          <article>
            <p className="mb-12 max-w-3xl text-lg leading-9 text-[#51483e] sm:text-xl">
              Ubuntu Couture House is built around craftsmanship, heritage and
              meaningful personal expression. These terms provide the general
              framework for engaging with the House online.
            </p>

            <div className="border-t border-[#17110d]/10">
              {terms.map((term) => (
                <section
                  key={term.number}
                  className="border-b border-[#17110d]/10 py-10 sm:py-12"
                >
                  <div className="grid gap-6 sm:grid-cols-[70px_1fr] sm:gap-8">
                    <span className="pt-1 text-[8px] font-medium tracking-[0.3em] text-[#95713a]">
                      {term.number}
                    </span>

                    <div>
                      <h2 className="ubuntu-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-[0.95] tracking-[-0.02em]">
                        {term.title}
                      </h2>

                      <p className="mt-6 max-w-3xl text-sm leading-8 text-[#75695d] sm:text-[15px]">
                        {term.text}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-l border-[#a17b3c] bg-[#eee4d3] px-6 py-7 sm:px-8">
              <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#95713a]">
                Questions
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#75695d]">
                If you have questions about these terms or a private enquiry,
                please contact Ubuntu Couture House directly.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex border-b border-[#a17b3c] pb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-[#76572a] transition-colors duration-300 hover:border-[#17110d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
              >
                Contact The House →
              </Link>
            </div>

            <Link
              href="/"
              className="mt-12 inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-[#c9a45d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
            >
              Return Home
            </Link>
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
          </nav>
        </div>
      </section>
    </main>
  );
}