 import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllJournalArticles,
  getJournalArticle,
} from "@/lib/journal";

type JournalArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllJournalArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: JournalArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    return {
      title: "Journal | Ubuntu Couture House",
    };
  }

  return {
    title: `${article.title} | Ubuntu Couture House`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Ubuntu Couture House`,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 900,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: JournalArticlePageProps) {
  const { slug } = await params;

  const article = getJournalArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getAllJournalArticles()
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.category === article.category,
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#15100c]">
      <section className="relative flex min-h-[84vh] items-end overflow-hidden bg-[#15100c] text-white">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[1800ms] hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-[#15100c]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15100c] via-[#15100c]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15100c]/70 via-transparent to-transparent" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <Link
            href="/journal"
            className="mb-9 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-[8px] font-medium uppercase tracking-[0.28em] text-white/60 transition-colors duration-300 hover:border-[#d8bd82] hover:text-[#d8bd82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bd82] focus-visible:ring-offset-4 focus-visible:ring-offset-[#15100c]"
          >
            <span aria-hidden="true">←</span>
            Back To Journal
          </Link>

          <div className="max-w-6xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[8px] font-medium uppercase tracking-[0.28em] text-[#d8bd82]">
              <span>{article.category}</span>
              <span aria-hidden="true" className="h-px w-6 bg-[#d8bd82]" />
              <span>{article.date}</span>
              <span aria-hidden="true" className="h-px w-6 bg-[#d8bd82]" />
              <span>{article.readTime}</span>
            </div>

            <h1 className="ubuntu-serif mt-7 max-w-6xl text-[clamp(3.8rem,8vw,8rem)] leading-[0.84] tracking-[-0.045em]">
              {article.title}
            </h1>

            <p className="mt-9 max-w-2xl border-l border-white/20 pl-6 text-sm leading-8 text-white/65 md:text-base">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-24">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#9a7840]">
              From The Journal
            </p>

            <div className="mt-6 border-t border-[#15100c]/10 pt-6">
              <p className="ubuntu-serif text-3xl leading-none">
                {article.category}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[8px] uppercase tracking-[0.25em] text-[#15100c]/35">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>

              <p className="mt-5 text-xs leading-6 text-[#15100c]/45">
                Ubuntu Couture House explores heritage, craftsmanship,
                identity, women, and the evolving language of African luxury.
              </p>

              <div className="mt-7 h-px w-10 bg-[#9a7840]" />
            </div>
          </aside>

          <article>
            <div className="border-b border-[#15100c]/10 pb-10">
              <p className="ubuntu-serif max-w-4xl text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] italic">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-10">
              {article.content.map((paragraph, index) => (
                <p
                  key={`${article.slug}-${index}`}
                  className={[
                    "max-w-3xl text-base leading-8 text-[#15100c]/65 sm:text-[17px] sm:leading-9",
                    index === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-[var(--font-ubuntu-serif)] first-letter:text-7xl first-letter:leading-[0.75] first-letter:text-[#9a7840]"
                      : "",
                    index > 0 ? "mt-8" : "",
                  ].join(" ")}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 border-y border-[#15100c]/10 py-9">
              <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#9a7840]">
                Ubuntu Philosophy
              </p>

              <p className="ubuntu-serif mt-4 text-3xl italic sm:text-4xl">
                “I am because we are.”
              </p>
            </div>
          </article>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-[#eee5d7] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 flex flex-col gap-6 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#9a7840]">
                  Continue Reading
                </p>

                <h2 className="ubuntu-serif mt-5 text-[clamp(3rem,5vw,5rem)] leading-[0.88] tracking-[-0.035em]">
                  More from the
                  <br />
                  <span className="italic">Journal.</span>
                </h2>
              </div>

              <Link
                href="/journal"
                className="w-fit border-b border-[#9a7840] pb-2 text-[8px] font-medium uppercase tracking-[0.25em] text-[#15100c] transition-colors duration-300 hover:text-[#9a7840] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a7840]"
              >
                View All Stories
              </Link>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related, index) => (
                <Link
                  key={related.slug}
                  href={`/journal/${related.slug}`}
                  className={[
                    "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a7840] focus-visible:ring-offset-4 focus-visible:ring-offset-[#eee5d7]",
                    index === 1 ? "lg:mt-16" : "",
                  ].join(" ")}
                >
                  <article>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd2c1]">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 border border-white/35 bg-black/15 px-3 py-2 text-[8px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {related.category}
                      </span>
                    </div>

                    <div className="pt-6">
                      <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#15100c]/40">
                        {related.date} · {related.readTime}
                      </p>

                      <h3 className="ubuntu-serif mt-4 text-[clamp(2rem,3vw,2.7rem)] leading-[0.92] transition-colors duration-300 group-hover:text-[#9a7840]">
                        {related.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#15100c]/55">
                        {related.excerpt}
                      </p>

                      <span className="mt-6 inline-block border-b border-[#9a7840] pb-1 text-[8px] font-medium uppercase tracking-[0.25em] text-[#76572a]">
                        Read Story
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#15100c] px-5 py-24 text-[#f7f1e6] sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#d8bd82]">
              Ubuntu Couture House
            </p>

            <h2 className="ubuntu-serif mx-auto mt-6 max-w-5xl text-[clamp(3.8rem,7vw,7rem)] leading-[0.86] tracking-[-0.04em]">
              Wear your
              <br />
              <span className="italic text-[#d8bd82]">story.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/40">
              Discover the collections and find the piece that speaks to your
              own journey.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/collections/catalogue"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#c9a45d] px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-[#15100c] transition-colors duration-300 hover:bg-[#dfc27c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bd82] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100c]"
              >
                Explore The Collections
              </Link>

              <Link
                href="/journal"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/20 px-8 text-[8px] font-medium uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 hover:border-[#d8bd82] hover:text-[#d8bd82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8bd82] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100c]"
              >
                Back To Journal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}