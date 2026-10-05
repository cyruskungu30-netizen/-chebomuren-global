 export type JournalCategory =
  | "Heritage"
  | "Craftsmanship"
  | "Women & Legacy"
  | "African Luxury";

export type JournalArticle = {
  slug: string;
  category: JournalCategory;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "the-language-of-african-luxury",
    category: "African Luxury",
    title: "The Language of African Luxury",
    excerpt:
      "A reflection on how heritage, identity, craftsmanship, and modern design are shaping a new expression of African luxury.",
    date: "October 2026",
    readTime: "5 min read",
    image: "/images/ubuntu-global-lookbook.jpeg",
    featured: true,
    content: [
      "African luxury is not simply about what is beautiful. It is about what carries meaning.",
      "Across generations, African communities have used clothing, jewellery, beadwork, natural materials, colour, and adornment to communicate identity, belonging, celebration, dignity, and status.",
      "Ubuntu Couture House approaches luxury through this same understanding. Heritage is not treated as something fixed in the past. It becomes a foundation from which contemporary design can grow.",
      "The result is a language where couture silhouettes can exist alongside natural materials, sculptural jewellery, rare gems, reimagined beadwork, and royal headpieces.",
      "This is African elegance and luxury reimagined—not by removing heritage, but by allowing it to move confidently into the future.",
    ],
  },
  {
    slug: "the-art-of-cow-horn-jewellery",
    category: "Craftsmanship",
    title: "The Art of Cow Horn Jewellery",
    excerpt:
      "Discover how an organic natural material becomes sculptural contemporary jewellery with a connection to earth and transformation.",
    date: "October 2026",
    readTime: "4 min read",
    image: "/images/cow-horn-jewellery.jpeg",
    content: [
      "Cow horn carries a visual language that feels immediately connected to the earth. Its organic shape, natural variation, and tactile character make every piece different.",
      "At Ubuntu Couture House, ethically sourced cow horn is reimagined through contemporary jewellery design.",
      "The material becomes more than an accessory. It becomes a study in transformation—how something rooted in nature can be refined into a modern statement while retaining its original character.",
      "Its meaning is equally important. Cow horn represents resilience, earth, transformation, and the ability to become something new without losing where it came from.",
      "That balance between origin and reinvention is central to the Ubuntu Couture House philosophy.",
    ],
  },
  {
    slug: "maasai-beadwork-reimagined",
    category: "Heritage",
    title: "Maasai Beadwork Reimagined",
    excerpt:
      "Living heritage meets contemporary design in a new interpretation of beadwork, community, artistry, and identity.",
    date: "October 2026",
    readTime: "5 min read",
    image: "/images/maasai-jewellery-editorial.jpeg",
    content: [
      "Maasai beadwork carries stories of community, identity, artistry, and cultural continuity.",
      "Its colours, patterns, forms, and craftsmanship communicate more than decoration. They form part of a living visual language.",
      "Ubuntu Couture House approaches this heritage with respect while exploring how its visual energy can exist within contemporary luxury.",
      "The goal is not to erase tradition or reproduce it without thought. It is to create a dialogue between heritage and the modern woman.",
      "Through contemporary jewellery and styling, beadwork becomes part of a broader story about identity, confidence, community, and the movement of African heritage across generations.",
    ],
  },
  {
    slug: "the-power-of-the-headpiece",
    category: "African Luxury",
    title: "The Power of the Headpiece",
    excerpt:
      "Why the headpiece can become more than adornment—a symbol of dignity, leadership, presence, and African majesty.",
    date: "October 2026",
    readTime: "4 min read",
    image: "/images/royal-headpiece-gold.jpeg",
    content: [
      "A headpiece changes presence.",
      "Across cultures and generations, crowns, ceremonial adornments, and headpieces have communicated dignity, leadership, celebration, identity, and power.",
      "Ubuntu Couture House reimagines this language through contemporary royal headpieces designed for women who want to express their presence with intention.",
      "Gold, sculptural forms, colour, floral references, and dramatic proportions become part of a modern visual vocabulary.",
      "The headpiece is therefore not simply an accessory. It becomes a statement: I know who I am, I know where I come from, and I am prepared to be seen.",
    ],
  },
  {
    slug: "a-mothers-courage-a-daughters-vision",
    category: "Women & Legacy",
    title: "A Mother’s Courage. A Daughter’s Vision.",
    excerpt:
      "Two journeys across generations come together through heritage, resilience, sport, storytelling, and a shared commitment to purpose.",
    date: "October 2026",
    readTime: "7 min read",
    image: "/images/ubuntu-brand-portrait.jpeg",
    featured: true,
    content: [
      "Ubuntu Couture House is rooted in a mother-and-daughter story.",
      "A mother's journey began in a small village in Kenya, shaped by community, tradition, resilience, and dreams that reached beyond the circumstances around her.",
      "Her journey eventually led to Australia, leadership, community service, advocacy, international recognition, and an extraordinary recovery after a devastating stroke.",
      "Her daughter was born in Atlanta, Georgia, raised in South Australia, educated in Miami, and shaped by both African heritage and an international outlook.",
      "Sport became an important part of her journey. As a tennis player and later a sports journalist covering Formula 1, FIFA, and professional tennis, she discovered the power of storytelling.",
      "Her work as an international youth ambassador brought another dimension to that story, including advocacy against FGM and for the rights, safety, and future of girls.",
      "Ubuntu Couture House brings these journeys together through a shared belief that heritage can become strength, identity can become expression, and personal history can become art.",
    ],
  },
  {
    slug: "rare-gems-symbols-of-strength",
    category: "Craftsmanship",
    title: "Rare Gems: Symbols of Strength",
    excerpt:
      "Natural gemstones become powerful symbols of rarity, resilience, strength, and the extraordinary beauty found in nature.",
    date: "October 2026",
    readTime: "4 min read",
    image: "/images/rare-gem-neckpiece.jpeg",
    content: [
      "There is something powerful about a natural gemstone: no two stones tell exactly the same story.",
      "Their colour, texture, formation, and character are shaped by time and the forces of nature.",
      "Ubuntu Couture House sees this individuality as a natural connection to the woman who wears the piece.",
      "Rare gems are selected with intention—not simply because they are beautiful, but because they can become symbols of rarity, strength, resilience, and natural beauty.",
      "The gemstone becomes part of a larger philosophy: true luxury does not need to be identical. It can be distinctive, imperfect, personal, and deeply meaningful.",
    ],
  },
];

const articlesBySlug = new Map(
  journalArticles.map((article) => [article.slug, article]),
);

export function getJournalArticle(
  slug: string,
): JournalArticle | undefined {
  return articlesBySlug.get(slug);
}

export function getFeaturedJournalArticles(): JournalArticle[] {
  return journalArticles.filter((article) => article.featured === true);
}

export function getJournalArticlesByCategory(
  category: JournalCategory,
): JournalArticle[] {
  return journalArticles.filter(
    (article) => article.category === category,
  );
}

export function getAllJournalArticles(): JournalArticle[] {
  return [...journalArticles];
}