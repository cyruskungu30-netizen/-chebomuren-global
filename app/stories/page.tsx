 "use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Story = {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  excerpt: string;
  lesson: string;
  tags: string[];
  featured?: boolean;
};

const stories: Story[] = [
  {
    title: "The Courage to Begin",
    category: "Entrepreneurship",
    location: "Kenya",
    year: "2026",
    image: "/images/woman-leader.jpg.webp",
    excerpt:
      "Every meaningful journey begins before anyone knows how the story will end.",
    lesson:
      "Courage is not the absence of uncertainty. Sometimes it is simply choosing to begin anyway.",
    tags: ["Courage", "Business", "Leadership"],
    featured: true,
  },
  {
    title: "A Seat at the Table",
    category: "Leadership",
    location: "Kenya",
    year: "2026",
    image: "/images/leader.jpg.webp",
    excerpt:
      "Leadership becomes powerful when it creates room for other voices to rise.",
    lesson:
      "The strongest leaders do not only open doors for themselves. They leave doors open behind them.",
    tags: ["Leadership", "Service", "Voice"],
  },
  {
    title: "Knowledge Changes Generations",
    category: "Education",
    location: "United Kingdom",
    year: "2026",
    image: "/images/women-1.jpg.webp",
    excerpt:
      "A woman who learns can change her own path. A woman who teaches can change many paths.",
    lesson:
      "Education is more than achievement. It is a bridge between possibility and reality.",
    tags: ["Education", "Mentorship", "Legacy"],
  },
  {
    title: "Care Is Also Leadership",
    category: "Health",
    location: "United States",
    year: "2026",
    image: "/images/heritage-1.jpg.webp",
    excerpt:
      "Some of the most powerful leadership happens quietly, one life and one family at a time.",
    lesson:
      "Compassion is not weakness. It is a form of strength that leaves people better than it found them.",
    tags: ["Health", "Care", "Impact"],
  },
  {
    title: "Discipline Has a Voice",
    category: "Sports",
    location: "Kenya",
    year: "2026",
    image: "/images/gala-1.jpg.webp",
    excerpt:
      "Behind every visible victory are ordinary days when nobody was watching.",
    lesson:
      "Consistency turns potential into performance and dreams into something tangible.",
    tags: ["Sport", "Discipline", "Excellence"],
  },
  {
    title: "Culture Carries Memory",
    category: "Arts & Culture",
    location: "Australia",
    year: "2026",
    image: "/images/culture-1.jpg.webp",
    excerpt:
      "Culture survives when people choose to carry it forward with pride and imagination.",
    lesson:
      "Heritage does not have to live in the past. It can become material for the future.",
    tags: ["Culture", "Heritage", "Creativity"],
  },
  {
    title: "The Work Nobody Sees",
    category: "Community",
    location: "Kenya",
    year: "2026",
    image: "/images/community-1.jpg.webp",
    excerpt:
      "Quiet service rarely makes headlines, but communities are often built by it.",
    lesson:
      "Impact should not be measured only by applause. Sometimes the greatest work is simply making life better.",
    tags: ["Community", "Faith", "Service"],
  },
  {
    title: "An Idea Becomes a Door",
    category: "Innovation",
    location: "Canada",
    year: "2026",
    image: "/images/culture-2.jpg.webp",
    excerpt:
      "Innovation starts when someone looks at a problem and refuses to accept that it must stay that way.",
    lesson:
      "The future belongs to people willing to imagine a better answer and then build it.",
    tags: ["Innovation", "Technology", "Future"],
  },
];

const categories = [
  "All",
  "Entrepreneurship",
  "Leadership",
  "Education",
  "Health",
  "Sports",
  "Arts & Culture",
  "Community",
  "Innovation",
];

const storyPrinciples = [
  ["01", "A story creates visibility", "When a woman sees herself represented, possibility becomes easier to imagine."],
  ["02", "A story creates connection", "Shared experiences can turn strangers into collaborators, mentors, friends, and sisters."],
  ["03", "A story creates courage", "Someone else’s journey can become the encouragement needed to take the next step."],
  ["04", "A story creates legacy", "What we document today can give tomorrow’s generation a map, a mirror, and a reason to dream."],
];

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const featured = stories.find((story) => story.featured) ?? stories[0];

  const filteredStories = useMemo(() => {
    const q = query.trim().toLowerCase();

    return stories.filter((story) => {
      const categoryMatch =
        activeCategory === "All" || story.category === activeCategory;
      const searchMatch =
        !q ||
        [story.title, story.category, story.location, story.excerpt, story.lesson, ...story.tags]
          .join(" ")
          .toLowerCase()
          .includes(q);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  const currentStory = stories[storyIndex];

  return (
    <main className="stories-page min-h-screen overflow-x-hidden bg-[#f6f2e9] text-[#0b211b]">
      <style jsx global>{`
        html { scroll-behavior: smooth; }

        .stories-page {
          --forest: #061710;
          --forest2: #0b2b22;
          --green: #1f5a4a;
          --gold: #d6ad68;
          --gold2: #bd8d45;
          --cream: #f6f2e9;
        }

        .story-grid {
          background-image:
            linear-gradient(rgba(11,33,27,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,33,27,.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .hero-glow {
          animation: storyFloat 10s ease-in-out infinite;
        }

        .story-image {
          transition: transform 800ms cubic-bezier(.2,.8,.2,1);
        }

        .story-card {
          transition: transform .5s ease, box-shadow .5s ease, border-color .5s ease;
        }

        .story-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 28px 70px rgba(6,23,16,.14);
          border-color: rgba(189,141,69,.5);
        }

        .story-card:hover .story-image {
          transform: scale(1.07);
        }

        .story-line {
          animation: storyLine 4s ease-in-out infinite;
        }

        .story-dot {
          animation: storyPulse 2.2s ease-in-out infinite;
        }

        .reading-progress {
          transition: width .35s ease;
        }

        @keyframes storyFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-25px,25px) scale(1.05); }
        }

        @keyframes storyLine {
          0%,100% { transform: scaleX(.5); opacity:.3; transform-origin:left; }
          50% { transform: scaleX(1); opacity:1; transform-origin:left; }
        }

        @keyframes storyPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(214,173,104,.35); }
          50% { box-shadow:0 0 0 12px rgba(214,173,104,0); }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior:auto; }
          .hero-glow,.story-line,.story-dot { animation:none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-[#061710]/90 text-white backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/" className="group">
            <div className="font-serif text-2xl font-bold tracking-wide text-[#d6ad68] group-hover:text-white">
              Chebomuren
            </div>
            <div className="mt-1 text-[8px] uppercase tracking-[.48em] text-white/40">
              Global
            </div>
          </Link>

          <div className="hidden items-center gap-7 xl:flex">
            {[
              ["/about", "About"],
              ["/gala", "Gala"],
              ["/women", "Women"],
              ["/stories", "Stories"],
              ["/nominate", "Nominate"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition ${
                  label === "Stories"
                    ? "text-[#d6ad68]"
                    : "text-white/60 hover:text-[#d6ad68]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-3">
            <Link
              href="/join"
              className="hidden rounded-full bg-[#d6ad68] px-6 py-3 text-xs font-bold text-[#061710] transition hover:-translate-y-1 sm:block"
            >
              Join the Movement
            </Link>
            <Link
              href="/nominate"
              className="rounded-full border border-white/15 px-4 py-3 text-xs font-semibold text-white/80 hover:border-[#d6ad68]/60 hover:text-[#d6ad68]"
            >
              Nominate
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#061710] pt-24 text-white">
        <div className="absolute inset-0 story-grid opacity-[.08]" />
        <div className="hero-glow absolute -right-[10%] top-[5%] h-[620px] w-[620px] rounded-full border border-[#d6ad68]/15" />
        <div className="absolute -left-[15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#1f5a4a]/25 blur-[120px]" />
        <div className="absolute bottom-[-25%] right-[25%] h-[400px] w-[400px] rounded-full bg-[#d6ad68]/10 blur-[100px]" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-[1500px] items-end px-5 pb-20 lg:px-10 lg:pb-28">
          <div className="grid w-full gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4 text-[10px] uppercase tracking-[.42em] text-[#d6ad68]">
                <span className="h-px w-12 bg-[#d6ad68]" />
                Her Story
              </div>

              <h1 className="max-w-6xl font-serif text-[clamp(4.5rem,10vw,10rem)] font-semibold leading-[.78] tracking-[-.055em]">
                Stories that
                <br />
                <span className="text-[#d6ad68]">move us.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                Behind every achievement is a journey. Behind every journey is
                a woman who chose to keep moving.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#stories"
                  className="rounded-full bg-[#d6ad68] px-7 py-4 text-sm font-bold text-[#061710] transition hover:-translate-y-1"
                >
                  Read the Stories ↓
                </a>
                <Link
                  href="/nominate"
                  className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d6ad68]/50"
                >
                  Tell Us Her Story
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
              <div className="text-[9px] uppercase tracking-[.3em] text-white/35">
                The power of a story
              </div>
              <div className="mt-8 font-serif text-5xl leading-none text-[#d6ad68]">
                01
              </div>
              <p className="mt-5 font-serif text-3xl leading-tight">
                “Someone else’s courage can become the beginning of yours.”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="story-dot h-2.5 w-2.5 rounded-full bg-[#d6ad68]" />
                <span className="text-[9px] uppercase tracking-[.25em] text-white/30">
                  Chebomuren Global
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="story-grid px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[.38em] text-[#86652f]">
                Why stories matter
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[.92] sm:text-6xl lg:text-7xl">
                A story is
                <br />
                <span className="text-[#1f5a4a]">a bridge.</span>
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg leading-9 text-black/55">
                We tell stories because numbers can show achievement, but
                stories show the human being behind it: the sacrifice, the
                doubt, the courage, the people who helped, the doors that were
                opened, and the doors she is now opening for someone else.
              </p>
              <div className="story-line mt-10 h-px w-full bg-gradient-to-r from-[#bd8d45] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="px-5 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#0b2b22] text-white lg:grid-cols-[1.05fr_.95fr]">
            <button
              type="button"
              onClick={() => setSelectedStory(featured)}
              className="group relative min-h-[570px] overflow-hidden text-left"
            >
              <img
                src={featured.image}
                alt=""
                className="story-image absolute inset-0 h-full w-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-[#061710]/25 to-transparent" />
              <div className="absolute left-7 top-7 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[9px] uppercase tracking-[.2em] backdrop-blur">
                Featured Story
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-[9px] uppercase tracking-[.25em] text-[#d6ad68]">
                  {featured.category} · {featured.location}
                </div>
                <h2 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">
                  {featured.title}
                </h2>
              </div>
            </button>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="text-[10px] uppercase tracking-[.35em] text-[#d6ad68]">
                The story behind the story
              </p>
              <p className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
                {featured.excerpt}
              </p>
              <p className="mt-7 border-l border-[#d6ad68]/50 pl-5 text-sm leading-7 text-white/50">
                {featured.lesson}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[.16em] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSelectedStory(featured)}
                className="mt-9 w-fit rounded-full bg-[#d6ad68] px-7 py-4 text-xs font-bold text-[#061710] transition hover:-translate-y-1"
              >
                Enter the Story →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STORY PRINCIPLES */}
      <section className="bg-[#e9e3d6] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[.38em] text-[#86652f]">
              The Chebomuren approach
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[.94] sm:text-6xl">
              We tell stories
              <br />
              <span className="text-[#1f5a4a]">with purpose.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2 xl:grid-cols-4">
            {storyPrinciples.map(([number, title, text]) => (
              <article key={number} className="bg-white p-8 sm:p-10">
                <div className="font-serif text-4xl text-[#bd8d45]">{number}</div>
                <h3 className="mt-12 font-serif text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STORY REEL */}
      <section className="bg-[#061710] px-5 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[.38em] text-[#d6ad68]">
                The Story Reel
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[.94] sm:text-6xl">
                Many journeys.
                <br />
                <span className="text-[#d6ad68]">One sisterhood.</span>
              </h2>
            </div>
            <div className="text-[9px] uppercase tracking-[.25em] text-white/25">
              {String(storyIndex + 1).padStart(2, "0")} /{" "}
              {String(stories.length).padStart(2, "0")}
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <button
              type="button"
              onClick={() => setSelectedStory(currentStory)}
              className="group relative min-h-[500px] overflow-hidden rounded-[2.5rem] text-left"
            >
              <img
                src={currentStory.image}
                alt=""
                className="story-image absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-[9px] uppercase tracking-[.25em] text-[#d6ad68]">
                  {currentStory.category} · {currentStory.location}
                </div>
                <h3 className="mt-3 font-serif text-4xl sm:text-5xl">
                  {currentStory.title}
                </h3>
              </div>
            </button>

            <div>
              <div className="text-6xl font-serif text-[#d6ad68]">“</div>
              <p className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                {currentStory.excerpt}
              </p>
              <p className="mt-7 text-sm leading-7 text-white/45">
                {currentStory.lesson}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {currentStory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[.16em] text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex gap-2">
                {stories.map((story, index) => (
                  <button
                    key={story.title}
                    type="button"
                    onClick={() => setStoryIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === storyIndex
                        ? "w-12 bg-[#d6ad68]"
                        : "w-5 bg-white/15 hover:bg-white/30"
                    }`}
                    aria-label={`Show story ${index + 1}`}
                  />
                ))}
              </div>

              <div className="mt-9 flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setStoryIndex((storyIndex - 1 + stories.length) % stories.length)
                  }
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-[#d6ad68]/50 hover:text-[#d6ad68]"
                  aria-label="Previous story"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setStoryIndex((storyIndex + 1) % stories.length)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-[#d6ad68]/50 hover:text-[#d6ad68]"
                  aria-label="Next story"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStory(currentStory)}
                  className="ml-2 rounded-full bg-[#d6ad68] px-6 py-3 text-xs font-bold text-[#061710]"
                >
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="stories" className="story-grid px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[.38em] text-[#86652f]">
                The archive
              </p>
              <h2 className="mt-4 font-serif text-5xl sm:text-6xl">
                Stories of becoming.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/45">
                Explore stories of courage, leadership, culture, service,
                creativity, resilience, and possibility.
              </p>
            </div>
            <div className="font-serif text-4xl">
              {filteredStories.length}
              <div className="mt-1 text-[9px] font-sans uppercase tracking-[.25em] text-black/30">
                stories in view
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-black/10 bg-white/65 p-4">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
              <label className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4">
                <span className="text-black/30">⌕</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search stories, themes, places or keywords..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-black/30"
                />
              </label>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                className="rounded-2xl bg-[#0b211b] px-6 py-4 text-xs font-bold text-white hover:bg-[#1f5a4a]"
              >
                Reset
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(showAll ? categories : categories.slice(0, 5)).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2.5 text-[9px] font-semibold transition ${
                    activeCategory === category
                      ? "border-[#0b211b] bg-[#0b211b] text-white"
                      : "border-black/10 bg-white text-black/45 hover:border-[#bd8d45]"
                  }`}
                >
                  {category}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                className="rounded-full border border-[#bd8d45]/30 px-4 py-2.5 text-[9px] font-semibold text-[#86652f]"
              >
                {showAll ? "Show Less" : "+ More"}
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredStories.map((story) => (
              <article
                key={story.title}
                className="story-card overflow-hidden rounded-[2rem] border border-black/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setSelectedStory(story)}
                  className="w-full text-left"
                >
                  <div className="relative h-[330px] overflow-hidden bg-[#173a30]">
                    <img
                      src={story.image}
                      alt=""
                      className="story-image h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-[#d6ad68] px-3 py-2 text-[8px] font-bold uppercase tracking-[.15em] text-[#061710]">
                      {story.location}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="text-[8px] uppercase tracking-[.2em] text-[#d6ad68]">
                        {story.category} · {story.year}
                      </div>
                      <h3 className="mt-2 font-serif text-3xl leading-none">
                        {story.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-7 text-black/45">
                      {story.excerpt}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f6f2e9] px-3 py-1.5 text-[8px] uppercase tracking-[.15em] text-black/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 text-[9px] font-bold uppercase tracking-[.2em] text-[#1f5a4a]">
                      Open story →
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-16 text-center">
              <h3 className="font-serif text-3xl">No story found.</h3>
              <p className="mt-3 text-sm text-black/45">
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* TELL YOUR STORY */}
      <section className="relative overflow-hidden bg-[#d6ad68] px-5 py-24 lg:px-10 lg:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="relative mx-auto max-w-[1300px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.38em] text-[#4d3920]">
                Your story belongs here
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[.9] sm:text-6xl lg:text-8xl">
                Someone may be
                <br />
                waiting to hear it.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[#3d3020]/65">
                Your journey does not have to be perfect to be powerful. Share
                a story of growth, courage, leadership, culture, service,
                resilience, or possibility — and help another woman know she is
                not alone.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/nominate"
                  className="rounded-full bg-[#061710] px-7 py-4 text-xs font-bold text-white transition hover:-translate-y-1"
                >
                  Nominate Her Story →
                </Link>
                <Link
                  href="/join"
                  className="rounded-full border border-[#061710]/20 px-7 py-4 text-xs font-bold text-[#061710]"
                >
                  Join the Sisterhood
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="bg-[#0b2b22] px-5 py-28 text-center text-white lg:px-10 lg:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="text-6xl font-serif text-[#d6ad68]">“</div>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
            Tell her story.
            <br />
            Celebrate her journey.
            <br />
            <span className="text-[#d6ad68]">Inspire the next.</span>
          </h2>
          <div className="mx-auto mt-10 h-px w-16 bg-[#d6ad68]" />
          <p className="mt-5 text-[9px] uppercase tracking-[.35em] text-white/25">
            Celebrating Kalenjin Women · Inspiring Our Future
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#04110d] px-5 py-14 text-white lg:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.7fr_.8fr]">
            <div>
              <Link href="/" className="font-serif text-3xl text-[#d6ad68]">
                Chebomuren Global
              </Link>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/35">
                Celebrating Kalenjin Women. Inspiring Our Future.
              </p>
              <p className="mt-7 text-[9px] uppercase tracking-[.28em] text-white/20">
                Every story matters.
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[.25em] text-[#d6ad68]">
                Explore
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/40">
                <Link href="/" className="block hover:text-white">Home</Link>
                <Link href="/about" className="block hover:text-white">About</Link>
                <Link href="/women" className="block hover:text-white">Women</Link>
                <Link href="/stories" className="block hover:text-white">Stories</Link>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[.25em] text-[#d6ad68]">
                Participate
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/40">
                <Link href="/join" className="block hover:text-white">Join Us</Link>
                <Link href="/nominate" className="block hover:text-white">Nominate</Link>
                <Link href="/gala" className="block hover:text-white">Gala</Link>
                <Link href="/contact" className="block hover:text-white">Contact</Link>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[.25em] text-[#d6ad68]">
                The promise
              </p>
              <p className="mt-5 text-sm leading-7 text-white/35">
                Recognition creates encouragement. Connection creates
                opportunity. Unity creates lasting impact.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-[9px] uppercase tracking-[.2em] text-white/20">
            © 2026 Chebomuren Global. All rights reserved.
          </div>
        </div>
      </footer>

      {/* STORY READER MODAL */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020a07]/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={selectedStory.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedStory(null);
          }}
        >
          <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] bg-[#f6f2e9] shadow-2xl">
            <div className="relative">
              <div className="relative h-[300px] overflow-hidden sm:h-[420px]">
                <img
                  src={selectedStory.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedStory(null)}
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur"
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="absolute bottom-7 left-7 right-7 text-white">
                  <div className="text-[9px] uppercase tracking-[.25em] text-[#d6ad68]">
                    {selectedStory.category} · {selectedStory.location} · {selectedStory.year}
                  </div>
                  <h2 className="mt-3 font-serif text-4xl sm:text-6xl">
                    {selectedStory.title}
                  </h2>
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-14">
                <div className="h-1 overflow-hidden rounded-full bg-black/5">
                  <div className="reading-progress h-full w-[68%] bg-[#d6ad68]" />
                </div>

                <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
                  <article>
                    <p className="text-[10px] uppercase tracking-[.3em] text-[#86652f]">
                      Her journey
                    </p>
                    <p className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                      {selectedStory.excerpt}
                    </p>
                    <p className="mt-7 text-base leading-8 text-black/55">
                      {selectedStory.lesson}
                    </p>
                    <p className="mt-6 text-base leading-8 text-black/55">
                      This story is part of the growing Chebomuren Global
                      archive — a living collection of journeys that celebrate
                      courage, excellence, culture, service, leadership, and
                      possibility.
                    </p>
                  </article>

                  <aside className="h-fit rounded-[2rem] border border-[#bd8d45]/20 bg-white p-7">
                    <div className="text-[9px] uppercase tracking-[.25em] text-[#86652f]">
                      Story themes
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {selectedStory.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#e9e3d6] px-4 py-2 text-[9px] uppercase tracking-[.15em] text-black/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-black/10 pt-7">
                      <div className="text-[9px] uppercase tracking-[.2em] text-black/30">
                        The takeaway
                      </div>
                      <p className="mt-3 font-serif text-2xl leading-tight">
                        One story can become another woman’s permission to
                        begin.
                      </p>
                    </div>
                  </aside>
                </div>

                <div className="mt-12 flex flex-wrap gap-3">
                  <Link
                    href="/nominate"
                    onClick={() => setSelectedStory(null)}
                    className="rounded-full bg-[#0b211b] px-7 py-4 text-xs font-bold text-white"
                  >
                    Nominate a Story →
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedStory(null)}
                    className="rounded-full border border-black/10 px-7 py-4 text-xs font-semibold text-black/50"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
