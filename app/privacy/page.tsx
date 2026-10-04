 import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section className="bg-[#17110d] px-6 pb-24 pt-40 text-white sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-[#d8b66a]" />

            <p className="text-[8px] uppercase tracking-[0.5em] text-[#dfc27c]">
              Legal
            </p>
          </div>

          <h1 className="ubuntu-serif mt-8 max-w-6xl text-7xl leading-[0.8] tracking-[-0.05em] sm:text-8xl lg:text-[115px]">
            Privacy
            <br />
            <span className="italic text-[#dfc27c]">
              Policy.
            </span>
          </h1>

          <p className="mt-9 max-w-2xl text-sm leading-8 text-white/50">
            Your privacy matters to Ubuntu Couture House. This policy explains
            how information may be collected, used and protected when you
            interact with our website.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-[8px] uppercase tracking-[0.35em] text-[#95713a]">
            Last Updated
          </p>

          <p className="mt-3 text-sm text-[#75695d]">
            October 2026
          </p>

          <div className="mt-16 space-y-14">
            <section>
              <h2 className="ubuntu-serif text-4xl">
                01. Information We Collect
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                When you contact Ubuntu Couture House, request a private
                appointment, enquire about a collection or otherwise interact
                with our website, you may provide information such as your
                name, email address, phone number, appointment preferences and
                the contents of your message.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                02. How We Use Information
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                Information provided to us may be used to respond to enquiries,
                process appointment requests, communicate about collections,
                assist with custom orders and improve the experience provided
                by Ubuntu Couture House.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                03. Communication
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                If you provide contact information when making an enquiry, we
                may use it to respond to that specific request. We do not
                intend to use your information for unrelated communication
                without an appropriate basis or your consent where required.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                04. Website Information
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                Our website may use standard technical information and
                analytics technologies to help maintain, secure and improve
                the website. Such information may include browser, device,
                usage and general website interaction data.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                05. Third-Party Services
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                Certain website functions may rely on third-party services,
                such as hosting, analytics, communication or social media
                platforms. Those services may process information according to
                their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                06. Data Security
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                We take reasonable steps to protect information submitted
                through the website. However, no online transmission or storage
                system can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                07. Your Choices
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                You may contact Ubuntu Couture House regarding information you
                have provided to us and request appropriate access, correction
                or deletion where applicable under relevant privacy laws.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                08. Children&apos;s Privacy
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                Our website is intended for general audiences and is not
                specifically directed toward children. We do not knowingly
                seek to collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                09. Changes To This Policy
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                This privacy policy may be updated from time to time to reflect
                changes to our website, services or legal obligations. The
                updated version will be published on this page.
              </p>
            </section>

            <section>
              <h2 className="ubuntu-serif text-4xl">
                10. Contact Us
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#75695d]">
                If you have questions about this Privacy Policy or how your
                information is handled, please contact Ubuntu Couture House.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex border-b border-[#a17b3c] pb-2 text-[8px] uppercase tracking-[0.3em] text-[#76572a]"
              >
                Contact The House →
              </Link>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-[#c9a45d] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[8px] uppercase tracking-[0.4em] text-black/50">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-5 text-5xl leading-[0.9] sm:text-6xl">
              A Mother&apos;s Courage.
              <br />
              A Daughter&apos;s Vision.
            </h2>
          </div>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/terms"
              className="text-[8px] uppercase tracking-[0.25em] text-black/60 hover:text-black"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/contact"
              className="text-[8px] uppercase tracking-[0.25em] text-black/60 hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}