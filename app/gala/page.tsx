 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const categories = [
  { number: "01", title: "Business & Entrepreneurship", short: "Builders", description: "Celebrating women building businesses, creating employment, and transforming ideas into impact." },
  { number: "02", title: "Leadership & Public Service", short: "Leaders", description: "Honouring women leading institutions, communities, organisations, and public initiatives." },
  { number: "03", title: "Education & Academia", short: "Knowledge", description: "Recognising educators, researchers, scholars, and women advancing knowledge." },
  { number: "04", title: "Health & Medicine", short: "Care", description: "Celebrating women improving lives through healthcare, medicine, research, and wellness." },
  { number: "05", title: "Sports", short: "Champions", description: "Honouring athletes, coaches, sports leaders, and women transforming the sporting world." },
  { number: "06", title: "Arts, Culture & Entertainment", short: "Creators", description: "Recognising women preserving culture while making their mark through creativity and entertainment." },
  { number: "07", title: "Faith & Community Service", short: "Service", description: "Celebrating women whose faith, service, and compassion strengthen communities." },
  { number: "08", title: "Agriculture & Innovation", short: "Innovators", description: "Honouring women creating solutions and opportunities through agriculture, technology, and innovation." },
  { number: "09", title: "Media & Communications", short: "Voices", description: "Recognising women shaping conversations through journalism, media, communication, and storytelling." },
  { number: "10", title: "Humanitarian & Social Impact", short: "Change", description: "Celebrating women creating meaningful change through humanitarian work and social initiatives." },
  { number: "11", title: "Young Leadership", short: "Next", description: "Honouring young Kalenjin women demonstrating exceptional leadership and influence." },
  { number: "12", title: "Emerging Excellence", short: "Rising", description: "Recognising women whose remarkable potential and achievements are beginning to gain wider visibility." },
];

const experience = [
  { number: "01", title: "Arrival", text: "A memorable opening moment that sets the tone for an evening dedicated to women." },
  { number: "02", title: "Stories", text: "Journeys, achievements, courage, and service take centre stage." },
  { number: "03", title: "Recognition", text: "Exceptional contributions are brought into the light and celebrated." },
  { number: "04", title: "Connection", text: "Women, partners, leaders, and supporters come together across generations." },
  { number: "05", title: "Inspiration", text: "The evening becomes a reminder of what is possible when women rise together." },
];

const principles = [
  ["Recognition", "We make exceptional work visible."],
  ["Connection", "We turn celebration into relationships and opportunity."],
  ["Legacy", "We honour today's women while inspiring tomorrow's."],
  ["Unity", "We create one room for a global sisterhood."],
];

const galaHighlights = [
  ["01", "The Red Carpet", "An arrival designed to feel worthy of every woman whose work brought her to this room."],
  ["02", "The Main Stage", "Stories, voices, performances, and recognition come together in one unforgettable sequence."],
  ["03", "The Honours", "Trailblazing women are placed at the centre of the evening and celebrated for meaningful impact."],
  ["04", "The Afterglow", "The night continues through new relationships, collaborations, mentorship, and possibilities beyond the gala."],
];

const recognitionStandards = [
  ["Impact", "Her work creates meaningful positive change in people, organisations, communities, or society."],
  ["Leadership", "She leads with courage, purpose, integrity, and a commitment to bringing others forward."],
  ["Excellence", "Her achievements demonstrate exceptional effort, growth, creativity, or professional contribution."],
  ["Service", "She uses her gifts, experience, or resources to strengthen the lives of others."],
  ["Inspiration", "Her journey gives another woman or girl permission to believe that more is possible."],
  ["Legacy", "Her contribution leaves something stronger for the generation coming after her."],
];

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="gala-countdown-box rounded-[1.4rem] border border-white/10 bg-white/[0.055] px-4 py-6 text-center backdrop-blur-xl sm:px-6">
      <div className="font-serif text-4xl font-bold text-[#d6ad68] sm:text-6xl">{String(value).padStart(2, "0")}</div>
      <div className="mt-2 text-[9px] uppercase tracking-[0.35em] text-white/35">{label}</div>
    </div>
  );
}

export default function GalaPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openExperience, setOpenExperience] = useState(0);
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    const target = new Date("2026-12-26T00:00:00").getTime();
    const update = () => {
      const difference = target - Date.now();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const visibleCategories = useMemo(
    () => (showAllCategories ? categories : categories.slice(0, 6)),
    [showAllCategories]
  );

  const activeCategory = categories[selectedCategory];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f2e9] text-[#0b211b]">
      <style>{`
        .gala-grid{background-image:linear-gradient(rgba(214,173,104,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(214,173,104,.055) 1px,transparent 1px);background-size:46px 46px}
        .gala-orbit{animation:galaOrbit 18s linear infinite}
        .gala-orbit-reverse{animation:galaOrbit 26s linear infinite reverse}
        .gala-float{animation:galaFloat 7s ease-in-out infinite}
        .gala-pulse{animation:galaPulse 2.8s ease-in-out infinite}
        .gala-shimmer{background-size:200% 100%;animation:galaShimmer 5s linear infinite}
        .gala-card{transition:transform .45s ease,border-color .45s ease,box-shadow .45s ease,background .45s ease}
        .gala-number{transition:transform .45s ease,color .45s ease}
        .gala-card:hover .gala-number{transform:translateX(4px);color:#d6ad68}
        .gala-sweep{animation:galaSweep 6s ease-in-out infinite}
        .gala-star{animation:galaStar 3s ease-in-out infinite}
        @keyframes galaSweep{0%,100%{transform:translateX(-115%);opacity:0}18%{opacity:.7}55%{opacity:.7}100%{transform:translateX(115%);opacity:0}}
        @keyframes galaStar{0%,100%{opacity:.25;transform:scale(.7)}50%{opacity:1;transform:scale(1.25)}}
        .gala-card:hover{transform:translateY(-8px);border-color:rgba(214,173,104,.5);box-shadow:0 28px 80px rgba(4,17,13,.12)}
        @keyframes galaOrbit{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes galaFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes galaPulse{0%,100%{opacity:.35;transform:scale(.92)}50%{opacity:1;transform:scale(1.08)}}
        @keyframes galaShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        @media(prefers-reduced-motion:reduce){.gala-orbit,.gala-orbit-reverse,.gala-float,.gala-pulse,.gala-shimmer,.gala-sweep,.gala-star{animation:none}.gala-card{transition:none}}
      `}</style>

      {/* NAVIGATION */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061710]/92 text-white backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/" className="leading-none">
            <div className="font-serif text-2xl font-bold tracking-wide text-[#d6ad68]">Chebomuren</div>
            <div className="mt-1 text-[8px] uppercase tracking-[0.42em] text-white/45">Global</div>
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            <Link href="/about" className="text-sm text-white/65 transition hover:text-[#d6ad68]">About</Link>
            <Link href="/gala" className="text-sm font-semibold text-[#d6ad68]">Gala</Link>
            <Link href="/women" className="text-sm text-white/65 transition hover:text-[#d6ad68]">Women</Link>
            <Link href="/global" className="text-sm text-white/65 transition hover:text-[#d6ad68]">Global</Link>
            <Link href="/nominate" className="text-sm text-white/65 transition hover:text-[#d6ad68]">Nominate</Link>
            <Link href="/contact" className="text-sm text-white/65 transition hover:text-[#d6ad68]">Contact</Link>
          </div>
          <Link href="/join" className="hidden rounded-full bg-[#d6ad68] px-6 py-3 text-sm font-bold text-[#0b211b] transition hover:-translate-y-1 hover:bg-[#e8c987] md:block">Join the Movement</Link>
        </div>
        <div className="flex gap-5 overflow-x-auto border-t border-white/5 px-5 py-3 md:hidden">
          {[["/about","About"],["/gala","Gala"],["/women","Women"],["/global","Global"],["/nominate","Nominate"],["/join","Join"]].map(([href,label]) => (
            <Link key={href} href={href} className={`whitespace-nowrap text-[10px] uppercase tracking-[0.2em] ${href === "/gala" ? "text-[#d6ad68]" : "text-white/55"}`}>{label}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#061710] pt-28 text-white">
        <div className="absolute inset-0 gala-grid opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_34%,rgba(214,173,104,.2),transparent_28%),radial-gradient(circle_at_12%_80%,rgba(31,90,74,.34),transparent_30%)]" />
        <div className="absolute -right-52 top-10 h-[650px] w-[650px] rounded-full border border-[#d6ad68]/10 gala-orbit" />
        <div className="absolute -right-32 top-28 h-[430px] w-[430px] rounded-full border border-[#d6ad68]/10 gala-orbit-reverse" />
        <div className="absolute left-[8%] top-[30%] h-2 w-2 rounded-full bg-[#d6ad68] gala-pulse" />
        <div className="absolute left-[18%] top-[70%] h-1.5 w-1.5 rounded-full bg-[#e8c987] gala-pulse" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <div className="hero-reveal inline-flex items-center gap-3 rounded-full border border-[#d6ad68]/30 bg-[#d6ad68]/10 px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-[#d6ad68] gala-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#e8c987]">26 December 2026 · The Gala</span>
            </div>
            <p className="hero-reveal hero-delay-1 mt-8 text-[10px] uppercase tracking-[0.45em] text-white/35">Chebomuren Global presents</p>
            <h1 className="hero-reveal hero-delay-2 mt-5 font-serif text-6xl font-bold leading-[.88] sm:text-7xl lg:text-[104px]">
              Honouring
              <br />
              <span className="gala-shimmer bg-gradient-to-r from-[#d6ad68] via-[#f2dba5] to-[#bd8d45] bg-clip-text text-transparent">Our Women.</span>
            </h1>
            <p className="hero-reveal hero-delay-3 mt-8 max-w-2xl text-lg leading-8 text-white/55">
              An extraordinary celebration of Kalenjin women whose courage, leadership, excellence, and service are shaping families, communities, industries, and the world.
            </p>
            <div className="hero-reveal hero-delay-4 mt-9 flex flex-wrap gap-3">
              <Link href="/nominate" className="premium-button rounded-full bg-[#d6ad68] px-8 py-4 font-bold text-[#0b211b]">Nominate a Woman →</Link>
              <Link href="/contact" className="rounded-full border border-white/15 px-8 py-4 font-bold text-white transition hover:border-[#d6ad68]/50 hover:bg-white/5">Partner With Us</Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
              <div><p className="font-serif text-2xl text-[#d6ad68]">12</p><p className="mt-1 text-[8px] uppercase tracking-[.2em] text-white/35">Categories</p></div>
              <div className="border-x border-white/10 px-5"><p className="font-serif text-2xl text-[#d6ad68]">1</p><p className="mt-1 text-[8px] uppercase tracking-[.2em] text-white/35">Global stage</p></div>
              <div className="pl-5"><p className="font-serif text-2xl text-[#d6ad68]">∞</p><p className="mt-1 text-[8px] uppercase tracking-[.2em] text-white/35">Possibilities</p></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-[#d6ad68]/20 bg-white/[.045] p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative h-[520px] overflow-hidden rounded-[1.8rem] sm:h-[620px]">
                <Image src="/images/gala-1.jpg.webp" alt="Chebomuren Global gala celebration" fill priority className="object-cover transition duration-1000 hover:scale-105" sizes="(max-width: 1024px) 100vw, 45vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061710] via-[#061710]/15 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-[#061710]/70 p-6 backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-[.35em] text-[#d6ad68]">The theme</p>
                  <p className="mt-3 font-serif text-3xl leading-tight text-white">Honouring Our Women.<br />Inspiring Our Future.</p>
                </div>
              </div>
              <div className="absolute right-7 top-7 rounded-full border border-[#d6ad68]/30 bg-[#061710]/70 px-4 py-2 text-[9px] font-bold tracking-[.25em] text-[#e8c987] backdrop-blur-xl">CG · 2026</div>
            </div>
            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-[#d6ad68]/20 bg-[#102d24]/90 px-5 py-4 backdrop-blur-xl sm:block gala-float">
              <p className="text-[8px] uppercase tracking-[.25em] text-white/35">A night for</p>
              <p className="mt-1 font-serif text-xl text-[#e8c987]">Women. Stories. Legacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="relative overflow-hidden bg-[#0b211b] px-5 py-20 text-white lg:px-10 lg:py-24">
        <div className="absolute inset-0 gala-grid opacity-40" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[.4em] text-[#d6ad68]">The countdown is on</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Until we celebrate.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/40">The clock is moving toward 26 December 2026 — a day dedicated to the women whose stories deserve to be seen.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <CountdownBox value={timeLeft.days} label="Days" />
            <CountdownBox value={timeLeft.hours} label="Hours" />
            <CountdownBox value={timeLeft.minutes} label="Minutes" />
            <CountdownBox value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative overflow-hidden px-5 py-28 lg:px-10 lg:py-36">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1f5a4a]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[.4em] text-[#86652f]">Why this night matters</p>
            <h2 className="mt-5 font-serif text-5xl leading-[.98] sm:text-6xl lg:text-7xl">More than<br />an award.<br /><span className="text-[#1f5a4a]">A legacy.</span></h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-black/60">The Honouring the Kalenjin Women Gala is a prestigious celebration designed to shine a light on women who are making extraordinary contributions in their fields and communities.</p>
            <p className="mt-6 text-xl leading-9 text-black/60">It is a moment to recognise achievements, celebrate journeys, create connections, and inspire future generations of Kalenjin women.</p>
            <div className="mt-9 border-l-2 border-[#d6ad68] pl-6"><p className="font-serif text-2xl leading-9 text-[#1f5a4a]">“Honouring Our Women. Inspiring Our Future.”</p></div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="bg-[#e9e3d6] px-5 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div><p className="text-[9px] uppercase tracking-[.4em] text-[#86652f]">The heart of the gala</p><h2 className="mt-4 font-serif text-5xl sm:text-6xl">Recognition with purpose.</h2></div>
            <p className="max-w-md text-sm leading-7 text-black/45">The celebration is built around four ideas that make recognition meaningful long after the evening ends.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {principles.map(([title,text], index) => (
              <div key={title} className="gala-card rounded-[1.8rem] border border-black/8 bg-white/65 p-7">
                <div className="flex items-center justify-between"><span className="text-[9px] font-bold tracking-[.25em] text-[#86652f]">0{index+1}</span><span className="text-[#bd8d45]">✦</span></div>
                <h3 className="mt-14 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-black/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#061710] px-5 py-28 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-[9px] uppercase tracking-[.4em] text-[#d6ad68]">The experience</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">An evening<br /><span className="text-[#d6ad68]">to remember.</span></h2></div>
          <div className="mt-16 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div className="space-y-2">
              {experience.map((item,index)=>(
                <button key={item.number} onClick={()=>setOpenExperience(index)} className={`w-full rounded-2xl border p-5 text-left transition ${openExperience===index ? "border-[#d6ad68]/45 bg-white/[.08]" : "border-white/8 bg-white/[.025] hover:bg-white/[.05]"}`}>
                  <div className="flex items-center gap-5"><span className="text-[10px] tracking-[.2em] text-[#d6ad68]">{item.number}</span><span className={`font-serif text-xl ${openExperience===index ? "text-white" : "text-white/55"}`}>{item.title}</span><span className="ml-auto text-white/25">{openExperience===index ? "−" : "+"}</span></div>
                </button>
              ))}
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#102d24] p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#d6ad68]/15 gala-orbit" />
              <div className="relative flex h-full flex-col justify-between">
                <div><p className="text-[9px] uppercase tracking-[.35em] text-[#d6ad68]">Moment {experience[openExperience].number}</p><h3 className="mt-5 font-serif text-4xl sm:text-5xl">{experience[openExperience].title}</h3><p className="mt-6 max-w-xl text-lg leading-8 text-white/50">{experience[openExperience].text}</p></div>
                <div className="mt-10 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#d6ad68] gala-pulse" /><span className="text-[9px] uppercase tracking-[.3em] text-white/35">Designed around the woman</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-5 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-[9px] uppercase tracking-[.4em] text-[#86652f]">Recognition categories</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">Excellence<br /><span className="text-[#1f5a4a]">in every field.</span></h2><p className="mt-6 text-lg leading-8 text-black/45">Every woman has a different journey. These categories honour excellence across diverse areas of life and leadership.</p></div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((category,index)=>(
              <button key={category.number} onClick={()=>setSelectedCategory(categories.findIndex(c=>c.number===category.number))} className={`gala-card rounded-[1.8rem] border p-7 text-left ${selectedCategory===categories.findIndex(c=>c.number===category.number) ? "border-[#d6ad68]/60 bg-[#0b211b] text-white" : "border-black/8 bg-white"}`}>
                <div className="flex items-center justify-between"><span className={`text-[9px] tracking-[.25em] ${selectedCategory===categories.findIndex(c=>c.number===category.number) ? "text-[#d6ad68]" : "text-[#86652f]"}`}>{category.number}</span><span className={selectedCategory===categories.findIndex(c=>c.number===category.number) ? "text-[#d6ad68]" : "text-[#bd8d45]"}>✦</span></div>
                <p className={`mt-9 text-[9px] uppercase tracking-[.25em] ${selectedCategory===categories.findIndex(c=>c.number===category.number) ? "text-white/35" : "text-black/30"}`}>{category.short}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{category.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${selectedCategory===categories.findIndex(c=>c.number===category.number) ? "text-white/45" : "text-black/45"}`}>{category.description}</p>
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-6 rounded-[2rem] border border-[#d6ad68]/25 bg-[#e9e3d6] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div><p className="text-[9px] uppercase tracking-[.3em] text-[#86652f]">Selected category</p><h3 className="mt-2 font-serif text-3xl">{activeCategory.title}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-black/45">{activeCategory.description}</p></div>
            <button onClick={()=>setShowAllCategories(!showAllCategories)} className="shrink-0 rounded-full bg-[#0b211b] px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-1">{showAllCategories ? "Show fewer categories" : "Explore all 12 categories"} →</button>
          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="relative overflow-hidden bg-[#102d24] px-5 py-28 text-white lg:px-10 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(214,173,104,.14),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(31,90,74,.4),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10">
            <Image src="/images/gala-2.jpg.webp" alt="Women celebrating together" fill className="object-cover transition duration-1000 hover:scale-105" sizes="(max-width: 1024px) 100vw, 60vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061710]/80 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7"><p className="text-[9px] uppercase tracking-[.35em] text-[#d6ad68]">One celebration</p><p className="mt-2 font-serif text-3xl">Many journeys. One sisterhood.</p></div>
          </div>
          <div className="lg:pl-8"><p className="text-[9px] uppercase tracking-[.4em] text-[#d6ad68]">A global moment</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">When one woman is honoured, <span className="text-[#d6ad68]">we all rise.</span></h2><p className="mt-7 text-lg leading-8 text-white/45">The gala is not only about the women receiving recognition. It is about every woman who sees what is possible and every girl who learns that her future can be bigger than her circumstances.</p><Link href="/women" className="mt-9 inline-flex rounded-full border border-[#d6ad68]/40 px-7 py-4 font-bold text-[#e8c987] transition hover:bg-[#d6ad68]/10">Meet the women →</Link></div>
        </div>
      </section>

      {/* THE NIGHT */}
      <section className="relative overflow-hidden bg-[#061710] px-5 py-28 text-white lg:px-10 lg:py-36">
        <div className="absolute inset-0 gala-grid opacity-25" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#d6ad68]/10" />
        <div className="absolute left-1/2 top-0 h-[760px] w-[760px] -translate-x-1/2 rounded-full border border-[#d6ad68]/5" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[.4em] text-[#d6ad68]">Inside the celebration</p>
              <h2 className="mt-5 font-serif text-5xl leading-[.95] sm:text-6xl lg:text-7xl">
                Not just an event.
                <br />
                <span className="text-[#d6ad68]">An experience.</span>
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/40">
              From the first arrival to the final conversation, every part of the
              evening is designed to place women, their journeys, and their
              possibilities at the centre.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {galaHighlights.map(([number, title, description]) => (
              <article
                key={number}
                className="gala-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] p-7 sm:p-9"
              >
                <div className="gala-sweep absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#d6ad68]/10 to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="gala-number font-serif text-4xl text-[#d6ad68]">{number}</span>
                    <span className="gala-star h-2 w-2 rounded-full bg-[#d6ad68]" />
                  </div>
                  <h3 className="mt-14 font-serif text-3xl">{title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION STANDARD */}
      <section className="bg-[#f6f2e9] px-5 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[.4em] text-[#86652f]">What recognition stands for</p>
              <h2 className="mt-5 font-serif text-5xl leading-[.95] sm:text-6xl lg:text-7xl">
                We celebrate
                <br />
                <span className="text-[#1f5a4a]">substance.</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-black/45">
                Recognition is most powerful when it reflects work that has
                touched lives, opened doors, challenged limits, or created a
                stronger path for others.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {recognitionStandards.map(([title, description], index) => (
                <article
                  key={title}
                  className="gala-card rounded-[1.7rem] border border-black/8 bg-white/65 p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-[.25em] text-[#bd8d45]">
                      0{index + 1}
                    </span>
                    <span className="text-[#1f5a4a]">✦</span>
                  </div>
                  <h3 className="mt-9 font-serif text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/45">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION JOURNEY */}
      <section className="px-5 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
            <div><p className="text-[9px] uppercase tracking-[.4em] text-[#86652f]">The recognition journey</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">From a story<br /><span className="text-[#1f5a4a]">to a legacy.</span></h2><p className="mt-6 text-lg leading-8 text-black/45">A nomination is more than a form. It is a decision to make someone's contribution visible.</p></div>
            <div className="relative">
              <div className="absolute bottom-8 left-5 top-8 w-px bg-[#d6ad68]/40" />
              {[['01','Nominate','Put forward a woman whose contribution deserves recognition.'],['02','Discover','Her work, journey, leadership, and impact come into focus.'],['03','Celebrate','Her achievement becomes part of a wider celebration of Kalenjin women.'],['04','Inspire','Her story creates possibility for women and girls coming next.']].map(([number,title,text])=>(
                <div key={number} className="relative flex gap-7 pb-9 last:pb-0"><div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d6ad68]/50 bg-[#f6f2e9] text-[9px] font-bold text-[#86652f]">{number}</div><div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-black/45">{text}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT IDENTITY */}
      <section className="bg-[#0b211b] px-5 py-16 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-[2rem] border border-[#d6ad68]/20 bg-white/[.035] p-7 sm:grid-cols-3 sm:p-9">
            <div>
              <p className="text-[8px] uppercase tracking-[.35em] text-[#d6ad68]">The date</p>
              <p className="mt-3 font-serif text-2xl">26 December 2026</p>
            </div>
            <div className="border-white/10 sm:border-l sm:pl-7">
              <p className="text-[8px] uppercase tracking-[.35em] text-[#d6ad68]">The theme</p>
              <p className="mt-3 font-serif text-2xl">Honouring Our Women.</p>
            </div>
            <div className="border-white/10 sm:border-l sm:pl-7">
              <p className="text-[8px] uppercase tracking-[.35em] text-[#d6ad68]">The promise</p>
              <p className="mt-3 font-serif text-2xl text-[#e8c987]">Inspiring Our Future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALA DETAILS */}
      <section className="bg-[#e9e3d6] px-5 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.8rem] bg-[#0b211b] p-8 text-white"><p className="text-[9px] uppercase tracking-[.3em] text-[#d6ad68]">Date</p><p className="mt-5 font-serif text-4xl">26 December</p><p className="mt-2 text-sm text-white/40">2026</p></div>
            <div className="rounded-[1.8rem] border border-black/8 bg-white/60 p-8"><p className="text-[9px] uppercase tracking-[.3em] text-[#86652f]">Theme</p><p className="mt-5 font-serif text-3xl leading-tight">Honouring Our Women.<br />Inspiring Our Future.</p></div>
            <div className="rounded-[1.8rem] border border-[#d6ad68]/35 bg-white/60 p-8"><p className="text-[9px] uppercase tracking-[.3em] text-[#86652f]">Focus</p><p className="mt-5 font-serif text-3xl leading-tight">Excellence.<br />Leadership. Legacy.</p></div>
          </div>
        </div>
      </section>

      {/* NOMINATE */}
      <section className="relative overflow-hidden bg-[#0b211b] px-5 py-32 text-white lg:px-10 lg:py-40">
        <div className="absolute inset-0 gala-grid opacity-25" /><div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-[#d6ad68]/10 gala-orbit" />
        <div className="relative mx-auto max-w-5xl text-center"><p className="text-[9px] uppercase tracking-[.4em] text-[#d6ad68]">Know an exceptional woman?</p><h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl lg:text-8xl">Her story deserves<br /><span className="text-[#d6ad68]">to be heard.</span></h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/45">Nominate a trailblazing Kalenjin woman whose work, leadership, courage, or service is creating positive change.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><Link href="/nominate" className="premium-button rounded-full bg-[#d6ad68] px-9 py-4 font-bold text-[#0b211b]">Nominate a Trailblazer →</Link><Link href="/join" className="rounded-full border border-white/15 px-9 py-4 font-bold text-white transition hover:bg-white/5">Join the Movement</Link></div></div>
      </section>

      {/* PARTNERS */}
      <section className="px-5 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-[#d6ad68]/25 bg-[#e9e3d6] p-8 sm:p-12 lg:p-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><p className="text-[9px] uppercase tracking-[.4em] text-[#86652f]">Partner with us</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">Help us honour<br /><span className="text-[#1f5a4a]">extraordinary women.</span></h2></div><div><p className="text-lg leading-8 text-black/50">Organisations, businesses, brands, institutions, and individuals can partner with Chebomuren Global to support this celebration and help amplify women's stories.</p><Link href="/contact" className="premium-button mt-8 inline-flex rounded-full bg-[#0b211b] px-8 py-4 font-bold text-white">Become a Partner →</Link></div></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#d6ad68] px-5 py-28 lg:px-10 lg:py-36">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#0b211b]/10" /><div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-[#0b211b]/10" />
        <div className="relative mx-auto max-w-5xl text-center"><p className="text-[9px] font-bold uppercase tracking-[.4em] text-[#183d32]">26 December 2026</p><h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl lg:text-8xl">Honouring Our Women.<br />Inspiring Our Future.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#183d32]/65">Be part of a historic celebration of Kalenjin women from Kenya and around the world.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><Link href="/nominate" className="rounded-full bg-[#0b211b] px-8 py-4 font-bold text-white transition hover:-translate-y-1">Nominate</Link><Link href="/join" className="rounded-full border border-[#0b211b]/25 px-8 py-4 font-bold text-[#0b211b] transition hover:bg-white/20">Join Chebomuren Global</Link></div></div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#04110d] px-5 py-14 text-white lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"><div className="lg:col-span-2"><Link href="/" className="font-serif text-3xl text-[#d6ad68]">Chebomuren Global</Link><p className="mt-4 max-w-md text-sm leading-7 text-white/35">Celebrating Kalenjin Women. Inspiring Our Future.</p><p className="mt-6 text-[9px] uppercase tracking-[.35em] text-white/20">A global movement for women, stories, connection, and legacy.</p></div><div><p className="text-[9px] uppercase tracking-[.3em] text-[#d6ad68]">Explore</p><div className="mt-5 space-y-3 text-sm text-white/40"><Link href="/" className="block hover:text-white">Home</Link><Link href="/about" className="block hover:text-white">About</Link><Link href="/gala" className="block hover:text-white">Gala</Link><Link href="/women" className="block hover:text-white">Women</Link><Link href="/global" className="block hover:text-white">Global</Link></div></div><div><p className="text-[9px] uppercase tracking-[.3em] text-[#d6ad68]">Connect</p><div className="mt-5 space-y-3 text-sm text-white/40"><Link href="/join" className="block hover:text-white">Join Us</Link><Link href="/nominate" className="block hover:text-white">Nominate</Link><Link href="/contact" className="block hover:text-white">Contact</Link></div></div></div><div className="mt-12 border-t border-white/8 pt-7 text-xs text-white/20">© 2026 Chebomuren Global. All rights reserved.</div></div></footer>
    </main>
  );
}
