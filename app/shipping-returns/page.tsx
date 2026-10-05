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

const orderingSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Explore the collections and discover pieces that reflect your personal style.",
  },
  {
    number: "02",
    title: "Enquire",
    text: "Contact the house for availability, details or a private consultation.",
  },
  {
    number: "03",
    title: "Confirm",
    text: "Receive the relevant details before your purchase or commission is confirmed.",
  },
  {
    number: "04",
    title: "Receive",
    text: "Your piece is prepared and delivered according to the agreed arrangements.",
  },
];

export default function ShippingReturnsPage() {
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
              Client Information
            </p>
          </div>

          <h1 className="ubuntu-serif mt-8 max-w-6xl text-[clamp(4rem,9vw,8.5rem)] leading-[0.8] tracking-[-0.05em]">
            Shipping &
            <br />
            <span className="italic text-[#dfc27c]">Returns.</span>
          </h1>

          <p className="mt-9 max-w-2xl border-l border-white/15 pl-6 text-sm leading-8 text-white/55 md:text-base">
            Important information about delivery, returns, exchanges and
            specially commissioned pieces from Ubuntu Couture House.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.27fr_0.73fr] lg:gap-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-[#95713a]">
              Client Information
            </p>

            <div className="mt-6">
              <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#17110d]/40">
                Last Updated
              </p>

              <p className="mt-2 text-sm text-[#75695d]">October 2026</p>
            </div>

            <div className="mt-7 h-px w-10 bg-[#a17b3c]" />

            <p className="mt-6 max-w-[220px] text-xs leading-6 text-[#75695d]">
              Please review these arrangements before placing an order or
              requesting a return.
            </p>
          </aside>

          <div>
            <div className="border-t border-black/10">
              {sections.map((section) => (
                <section
                  key={section.number}
                  className="border-b border-black/10 py-10 sm:py-12"
                >
                  <div className="grid gap-6 sm:grid-cols-[70px_0.7fr_1.3fr] sm:gap-8">
                    <span className="pt-1 text-[8px] font-medium tracking-[0.3em] text-[#a17b3c]">
                      {section.number}
                    </span>

                    <h2 className="ubuntu-serif text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.02em]">
                      {section.title}
                    </h2>

                    <p className="max-w-2xl text-sm leading-8 text-[#75695d]">
                      {section.content}
                    </p>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 border-l border-[#b08a47] bg-[#eee4d3] px-6 py-7 sm:px-8">
              <p className="ubuntu-serif text-[clamp(1.8rem,3vw,2.5rem)] italic leading-[1.05] text-[#96723a]">
                Every piece deserves to be handled with care.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#75695d]">
                If you have a question about delivery, returns or a specific
                creation, please speak with the house before placing or
                returning an order.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex border-b border-[#a17b3c] pb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-[#76572a] transition-colors duration-300 hover:border-[#17110d] hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a17b3c] focus-visible:ring-offset-4"
              >
                Contact The House →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfcf] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#95713a]">
              Before You Order
            </p>

            <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.86] tracking-[-0.035em]">
              Choose
              <br />
              <span className="italic text-[#a17c3f]">intentionally.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#75695d]">
              Every Ubuntu creation is approached with attention to material,
              craftsmanship and the individual experience of the client.
            </p>
          </div>

          <div>
            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {orderingSteps.map((step) => (
                <article
                  key={step.number}
                  className="min-h-[245px] border-b border-r border-black/10 p-7 sm:p-8"
                >
                  <p className="text-[8px] font-medium tracking-[0.25em] text-[#95713a]">
                    {step.number}
                  </p>

                  <h3 className="ubuntu-serif mt-12 text-3xl leading-none">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#75695d]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c9a45d] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/50">
            Ubuntu Couture House
          </p>

          <h2 className="ubuntu-serif mt-7 max-w-6xl text-[clamp(4rem,8vw,8rem)] leading-[0.84] tracking-[-0.045em]">
            Find something
            <br />
            <span className="italic">worth keeping.</span>
          </h2>

          <div className="mt-12 flex flex-col gap-3 border-t border-black/15 pt-8 sm:flex-row">
            <Link
              href="/collections/catalogue"
              className="inline-flex min-h-[52px] items-center justify-center bg-[#17110d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#dfc27c] transition-colors duration-300 hover:bg-white hover:text-[#17110d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
            >
              Explore Collections
            </Link>

            <Link
              href="/appointments"
              className="inline-flex min-h-[52px] items-center justify-center border border-[#17110d]/30 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#17110d] transition-colors duration-300 hover:bg-[#17110d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c9a45d]"
            >
              Private Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}