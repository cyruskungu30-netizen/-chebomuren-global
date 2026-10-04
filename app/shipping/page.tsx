 import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="ubuntu-legal-page">
      <div className="ubuntu-legal-hero">
        <span className="ubuntu-eyebrow">Legal</span>

        <h1>
          Terms &
          <br />
          <em>Conditions</em>
        </h1>
      </div>

      <article className="ubuntu-legal-content">
        <p className="ubuntu-legal-intro">
          These terms outline the general conditions governing use of the
          Ubuntu Couture House website and enquiries made through the House.
        </p>

        <section>
          <span>01</span>

          <div>
            <h2>Website Use</h2>

            <p>
              Content on this website is presented for information,
              inspiration, and exploration of Ubuntu Couture House and its
              collections.
            </p>
          </div>
        </section>

        <section>
          <span>02</span>

          <div>
            <h2>Collections</h2>

            <p>
              Product availability, materials, colours, measurements, and
              designs may vary. Private enquiries are subject to
              confirmation by the House.
            </p>
          </div>
        </section>

        <section>
          <span>03</span>

          <div>
            <h2>Intellectual Property</h2>

            <p>
              Images, photography, text, branding, logos, designs, and
              other original content belong to Ubuntu Couture House or their
              respective rights holders and may not be reproduced without
              permission.
            </p>
          </div>
        </section>

        <section>
          <span>04</span>

          <div>
            <h2>Private Enquiries</h2>

            <p>
              Submitting an enquiry does not automatically create a purchase
              agreement or guarantee product availability. A member of the
              House will confirm relevant details directly.
            </p>
          </div>
        </section>

        <Link
          href="/"
          className="ubuntu-button ubuntu-button-dark"
        >
          Return Home
        </Link>
      </article>
    </main>
  );
}