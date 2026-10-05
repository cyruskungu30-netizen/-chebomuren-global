 import Image from "next/image";
import Link from "next/link";
import UbuntuShell from "@/components/UbuntuShell";

const stories = [
  {
    number: "01",
    category: "HERITAGE",
    title: "The Elder's Path",
    description:
      "Discover the meaning behind heritage, leadership and the stories carried across generations.",
    image: "/images/elders-path-lookbook.jpeg",
    href: "/journal/the-elders-path",
  },
  {
    number: "02",
    category: "THE HOUSE",
    title: "A New Language of Luxury",
    description:
      "Where African heritage meets contemporary fashion, craftsmanship and global luxury.",
    image: "/images/ubuntu-brand-board.jpeg",
    href: "/journal/a-new-language-of-luxury",
  },
];

export default function StoriesPage() {
  return (
    <UbuntuShell>
      <main className="min-h-screen bg-[#f7f1e6] text-[#17110d]">
        <section className="relative overflow-hidden bg-[#17110d] px-5 pb-24 pt-36 text-white sm:px-8 lg:px-14 lg:pb-36 lg:pt-48">
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

              <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#e2c785]">
                The Journal
              </p>
            </div>

            <h1 className="ubuntu-serif mt-8 max-w-6xl text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.045em]">
              Stories
              <br />
              <span className="italic text-[#c9a45d]">
                in every thread.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl border-l border-white/15 pl-6 text-sm leading-8 text-white/55 md:text-base">
              A closer look at the heritage, people, ideas and craftsmanship
              that shape Ubuntu Couture House.
            </p>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-36">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-14 max-w-3xl">
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#967333]">
                From The House
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.86] tracking-[-0.035em]">
                Stories worth
                <br />
                <span className="italic text-[#a17b3b]">remembering.</span>
              </h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
              {stories.map((story, index) => (
                <article
                  key={story.number}
                  className={index === 1 ? "lg:mt-20" : ""}
                >
                  <Link
                    href={story.href}
                    aria-label={`Read ${story.title}`}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#967333] focus-visible:ring-offset-4"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#eee4d3]">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.045]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#17110d]/65 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 border border-white/30 bg-black/15 px-4 py-2 backdrop-blur-sm">
                        <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white">
                          {story.category}
                        </span>
                      </div>

                      <span className="absolute bottom-5 right-6 ubuntu-serif text-6xl leading-none text-white/25">
                        {story.number}
                      </span>

                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 text-white">
                        <span className="border-b border-[#d8b66a] pb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-[#e2c785]">
                          Read Story
                        </span>

                        <span
                          aria-hidden="true"
                          className="text-lg text-white/70 transition-transform duration-500 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                    </div>

                    <div className="border-b border-black/10 pb-8 pt-7">
                      <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#967333]">
                        {story.category}
                      </p>

                      <h2 className="ubuntu-serif mt-4 max-w-xl text-[clamp(2.3rem,4vw,4rem)] leading-[0.9] tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#967333]">
                        {story.title}
                      </h2>

                      <p className="mt-5 max-w-xl text-sm leading-8 text-[#706257]">
                        {story.description}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#17110d] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-[#c9a45d]">
                The Philosophy
              </p>

              <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,6vw,6rem)] leading-[0.86] tracking-[-0.035em]">
                More than
                <br />
                <span className="italic text-[#d8b66a]">fashion.</span>
              </h2>
            </div>

            <div className="border-t border-white/10 pt-8 lg:max-w-2xl">
              <p className="text-base leading-8 text-white/55 sm:text-lg sm:leading-9">
                Every creation carries an idea, a memory or a connection to
                something greater than itself. The journal gives those stories
                space to be seen, understood and remembered.
              </p>

              <div className="mt-8 h-px w-12 bg-[#c9a45d]" />
            </div>
          </div>
        </section>

        <section className="bg-[#c9a45d] px-5 py-20 text-center sm:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="text-[8px] font-medium uppercase tracking-[0.45em] text-black/50">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mt-6 text-[clamp(3.5rem,7vw,7rem)] leading-[0.86] tracking-[-0.04em]">
              Every piece
              <br />
              <span className="italic">carries a story.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-black/55">
              Discover the collections and find the piece that speaks to your
              own journey.
            </p>

            <Link
              href="/collections"
              className="luxury-button luxury-button-dark mt-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17110d] focus-visible:ring-offset-4 focus-visible:ring-offset-[#c9a45d]"
            >
              Discover The Pieces
            </Link>
          </div>
        </section>
      </main>
    </UbuntuShell>
  );
}