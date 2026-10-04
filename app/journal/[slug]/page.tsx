 import type { Metadata } from "next";
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
      title: "Journal",
    };
  }

  return {
    title: article.title,
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
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#15100c]">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#15100c] via-[#15100c]/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#15100c]/65 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <Link
            href="/journal"
            className="mb-8 inline-flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-[#d8bd82]"
          >
            <span>←</span>
            Back To Journal
          </Link>

          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#d8bd82]">
              <span>{article.category}</span>

              <span className="h-px w-6 bg-[#d8bd82]" />

              <span>{article.date}</span>

              <span className="h-px w-6 bg-[#d8bd82]" />

              <span>{article.readTime}</span>
            </div>

            <h1 className="mt-6 font-[var(--font-ubuntu-serif)] text-5xl font-medium leading-[0.88] tracking-[-0.04em] text-[#f7f1e6] sm:text-7xl lg:text-[7.5rem]">
              {article.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#f7f1e6]/70">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#9a7840]">
              From The Journal
            </p>

            <div className="mt-6 border-t border-[#15100c]/10 pt-5">
              <p className="font-[var(--font-ubuntu-serif)] text-2xl leading-none">
                {article.category}
              </p>

              <p className="mt-3 text-xs leading-6 text-[#15100c]/45">
                Ubuntu Couture House explores heritage, craftsmanship,
                identity, women, and the evolving language of African luxury.
              </p>
            </div>
          </aside>

          <article>
            <div className="border-b border-[#15100c]/10 pb-10">
              <p className="font-[var(--font-ubuntu-serif)] text-3xl italic leading-tight sm:text-4xl">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-10">
              {article.content.map((paragraph, index) => (
                <p
                  key={`${article.slug}-${index}`}
                  className={`max-w-3xl text-base leading-8 text-[#15100c]/65 ${
                    index === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-[var(--font-ubuntu-serif)] first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-[#9a7840]"
                      : ""
                  } ${index > 0 ? "mt-7" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14 border-y border-[#15100c]/10 py-8">
              <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#9a7840]">
                Ubuntu Philosophy
              </p>

              <p className="mt-4 font-[var(--font-ubuntu-serif)] text-3xl italic">
                “I am because we are.”
              </p>
            </div>
          </article>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-[#eee5d7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9a7840]">
                  Continue Reading
                </p>

                <h2 className="mt-4 font-[var(--font-ubuntu-serif)] text-5xl leading-none">
                  More from the
                  <span className="italic"> Journal.</span>
                </h2>
              </div>

              <Link
                href="/journal"
                className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#15100c] transition-colors hover:text-[#9a7840]"
              >
                View All Stories
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/journal/${related.slug}`}
                  className="group"
                >
                  <article>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd2c1]">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                        loading="lazy"
                      />

                      <div className="absolute left-4 top-4">
                        <span className="border border-white/40 bg-black/15 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                          {related.category}
                        </span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#15100c]/40">
                        {related.date} · {related.readTime}
                      </p>

                      <h3 className="mt-3 font-[var(--font-ubuntu-serif)] text-3xl leading-none transition-colors duration-300 group-hover:text-[#9a7840]">
                        {related.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#15100c]/55">
                        {related.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#15100c] px-5 py-24 text-center text-[#f7f1e6] sm:px-8 lg:py-32">
        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d8bd82]">
          Ubuntu Couture House
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl font-[var(--font-ubuntu-serif)] text-5xl leading-[0.88] sm:text-6xl lg:text-8xl">
          Wear your
          <span className="italic"> story.</span>
        </h2>

        <Link
          href="/collections/catalogue"
          className="mt-9 inline-flex min-h-12 items-center justify-center border border-[#d8bd82]/60 px-8 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#d8bd82] transition-all duration-300 hover:bg-[#d8bd82] hover:text-[#15100c]"
        >
          Explore The Collections
        </Link>
      </section>
    </main>
  );
}