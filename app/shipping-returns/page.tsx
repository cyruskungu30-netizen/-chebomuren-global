import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Shipping",
    content:
      "Shipping arrangements depend on the nature, availability and destination of the selected piece. Specific shipping details, delivery timelines and applicable charges will be communicated before an order is confirmed.",
  },
  {
    number: "02",
    title: "Processing",
    content:
      "Ready-to-ship pieces may be prepared within the timeframe communicated at the time of purchase. Custom or made-to-order creations may require additional time depending on design, materials and craftsmanship.",
  },
  {
    number: "03",
    title: "International Orders",
    content:
      "International deliveries may be subject to customs requirements, import duties, taxes or other charges imposed by the destination country. Any such charges are the responsibility of the recipient unless otherwise agreed.",
  },
  {
    number: "04",
    title: "Delivery",
    content:
      "Delivery timelines are estimates and may be affected by customs, courier delays, weather, public holidays or circumstances outside the control of Ubuntu Couture House.",
  },
  {
    number: "05",
    title: "Returns",
    content:
      "Because many Ubuntu Couture House pieces may be limited, unique, made-to-order or prepared specifically for a client, return eligibility may vary by piece. Please contact us before returning any item so that the appropriate process can be confirmed.",
  },
  {
    number: "06",
    title: "Custom & Personalised Pieces",
    content:
      "Custom, personalised or specially commissioned pieces may not be eligible for return once production has begun, except where required by applicable consumer law or where a specific agreement provides otherwise.",
  },
  {
    number: "07",
    title: "Damaged Or Incorrect Items",
    content:
      "If an item arrives damaged or differs materially from the confirmed order, please contact Ubuntu Couture House as soon as possible with your order details and supporting photographs so the matter can be reviewed.",
  },
  {
    number: "08",
    title: "Condition Of Returned Items",
    content:
      "Where a return is approved, the piece should be returned in its original condition with any original packaging, documentation and accessories where applicable.",
  },
  {
    number: "09",
    title: "Refunds",
    content:
      "Where a refund is approved, the applicable refund method and timing will be communicated when the return is reviewed. Processing times may vary depending on the original payment method and financial institution.",
  },
  {
    number: "10",
    title: "Exchanges",
    content:
      "Exchanges are subject to availability and may not be possible for unique, limited, custom or personalised pieces. Please contact the house before sending an item back.",
  },
];

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
      <section className="bg-[#17110d] px-6 pb-24 pt-40 text-white sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-[#d8b66a]" />

            <p className="text-[8px] uppercase tracking-[0.5em] text-[#dfc27c]">
              Client Information
            </p>
          </div>

          <h1 className="ubuntu-serif mt-8 max-w-6xl text-7xl leading-[0.8] tracking-[-0.05em] sm:text-8xl lg:text-[115px]">
            Shipping &
            <br />
            <span className="italic text-[#dfc27c]">
              Returns.
            </span>
          </h1>

          <p className="mt-9 max-w-2xl text-sm leading-8 text-white/50">
            Important information about delivery, returns, exchanges and
            specially commissioned pieces from Ubuntu Couture House.
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

          <div className="mt-16 space-y-0 border-t border-black/10">
            {sections.map((section) => (
              <section
                key={section.number}
                className="grid gap-6 border-b border-black/10 py-10 sm:grid-cols-[80px_0.7fr_1.3fr]"
              >
                <span className="text-[8px] tracking-[0.3em] text-[#a17b3c]">
                  {section.number}
                </span>

                <h2 className="ubuntu-serif text-3xl leading-[0.95]">
                  {section.title}
                </h2>

                <p className="text-sm leading-8 text-[#75695d]">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 border-l border-[#b08a47] pl-6">
            <p className="ubuntu-serif text-3xl italic text-[#96723a]">
              Every piece deserves to be handled with care.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#75695d]">
              If you have a question about delivery, returns or a specific
              creation, please speak with the house before placing or
              returning an order.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex border-b border-[#a17b3c] pb-2 text-[8px] uppercase tracking-[0.3em] text-[#76572a]"
            >
              Contact The House →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfcf] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[8px] uppercase tracking-[0.45em] text-[#95713a]">
              Before You Order
            </p>

            <h2 className="ubuntu-serif mt-6 text-5xl leading-[0.9] sm:text-7xl">
              Choose
              <br />
              <span className="italic text-[#a17c3f]">
                intentionally.
              </span>
            </h2>
          </div>

          <div>
            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              <div className="border-b border-r border-black/10 p-8">
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#95713a]">
                  01
                </p>

                <h3 className="ubuntu-serif mt-7 text-3xl">
                  Discover
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#75695d]">
                  Explore the collections and discover pieces that reflect
                  your personal style.
                </p>
              </div>

              <div className="border-b border-r border-black/10 p-8">
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#95713a]">
                  02
                </p>

                <h3 className="ubuntu-serif mt-7 text-3xl">
                  Enquire
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#75695d]">
                  Contact the house for availability, details or a private
                  consultation.
                </p>
              </div>

              <div className="border-b border-r border-black/10 p-8">
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#95713a]">
                  03
                </p>

                <h3 className="ubuntu-serif mt-7 text-3xl">
                  Confirm
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#75695d]">
                  Receive the relevant details before your purchase or
                  commission is confirmed.
                </p>
              </div>

              <div className="border-b border-r border-black/10 p-8">
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#95713a]">
                  04
                </p>

                <h3 className="ubuntu-serif mt-7 text-3xl">
                  Receive
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#75695d]">
                  Your piece is prepared and delivered according to the
                  agreed arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c9a45d] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[8px] uppercase tracking-[0.45em] text-black/50">
            Ubuntu Couture House
          </p>

          <h2 className="ubuntu-serif mt-7 max-w-6xl text-6xl leading-[0.84] tracking-[-0.04em] sm:text-8xl lg:text-[105px]">
            Find something
            <br />
            <span className="italic">
              worth keeping.
            </span>
          </h2>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/collections/catalogue"
              className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] uppercase tracking-[0.3em] text-[#dfc27c] transition hover:bg-white hover:text-[#17110d]"
            >
              Explore Collections
            </Link>

            <Link
              href="/appointments"
              className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] uppercase tracking-[0.3em] text-[#17110d] transition hover:bg-[#17110d] hover:text-white"
            >
              Private Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}