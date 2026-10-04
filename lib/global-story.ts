export type GlobalStoryChapter = {
  id: string;
  number: string;
  place: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  coordinates: {
    x: number;
    y: number;
  };
};

export const globalStory: GlobalStoryChapter[] = [
  {
    id: "kenya",
    number: "01",
    place: "Kenya",
    title: "Where the Story Begins",
    subtitle: "Roots. Community. Resilience.",
    description:
      "Born in a small village in Kenya, a mother's journey began with community, tradition, resilience, and dreams that reached far beyond her circumstances.",
    image: "/images/ubuntu-brand-portrait.jpeg",
    accent: "Heritage",
    coordinates: {
      x: 54,
      y: 55,
    },
  },
  {
    id: "australia",
    number: "02",
    place: "Australia",
    title: "Courage Becomes Purpose",
    subtitle: "A new home. A greater mission.",
    description:
      "A move to Australia became the beginning of a remarkable chapter of leadership, community service, advocacy, and opportunity.",
    image: "/images/elders-path-lookbook.jpeg",
    accent: "Courage",
    coordinates: {
      x: 83,
      y: 72,
    },
  },
  {
    id: "atlanta",
    number: "03",
    place: "Atlanta",
    title: "A Daughter's Beginning",
    subtitle: "Heritage carried forward.",
    description:
      "Born in Atlanta, Georgia, a daughter inherited her mother's strength while beginning a journey shaped by African heritage, sport, education, and storytelling.",
    image: "/images/ubuntu-global-lookbook.jpeg",
    accent: "Legacy",
    coordinates: {
      x: 23,
      y: 34,
    },
  },
  {
    id: "international",
    number: "04",
    place: "The World",
    title: "Heritage Without Borders",
    subtitle: "From lived experience to global recognition.",
    description:
      "Leadership, advocacy, sport, journalism, and international recognition brought two journeys together across continents.",
    image: "/images/hero-couture-yellow.jpeg",
    accent: "Vision",
    coordinates: {
      x: 50,
      y: 44,
    },
  },
];

export const globalStoryIntro = {
  eyebrow: "Ubuntu Around The World",
  title: "One heritage. Many horizons.",
  description:
    "Ubuntu Couture House carries a story that crosses continents. From a small village in Kenya to Australia, from Atlanta to the international world of sport and advocacy, two generations have transformed lived experience into a shared vision of heritage, courage, and purpose.",
};