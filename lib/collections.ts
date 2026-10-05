 export type CollectionCategory =
  | "Couture Fashion"
  | "Contemporary Jewellery"
  | "Rare Gems"
  | "Maasai Beadwork"
  | "Royal Headpieces";

export type CollectionProduct = {
  slug: string;
  name: string;
  category: CollectionCategory;
  subtitle: string;
  description: string;
  image: string;
  images: string[];
  materials: string[];
  inspiration: string;
  craftsmanship: string;
  origin: string;
  styling: string;
  featured?: boolean;
};

const products: CollectionProduct[] = [
  {
    slug: "golden-heritage-couture",
    name: "Golden Heritage Couture",
    category: "Couture Fashion",
    subtitle: "A statement silhouette shaped by African elegance.",
    description:
      "A commanding couture expression blending modern structure with the soul of East African heritage.",
    image: "/images/hero-couture-yellow.jpeg",
    images: [
      "/images/hero-couture-yellow.jpeg",
      "/images/couture-brown-front.jpeg",
      "/images/couture-brown-back.jpeg",
    ],
    materials: [
      "Luxury couture fabric",
      "Hand-finished detailing",
      "Statement embellishment",
    ],
    inspiration:
      "Inspired by African confidence, movement, identity, and the strength of women who carry their stories forward.",
    craftsmanship:
      "Developed around a sculptural silhouette with careful attention to proportion, movement, texture, and statement finishing.",
    origin:
      "Inspired by East African heritage and contemporary international fashion.",
    styling:
      "Designed as a statement occasion piece, styled with minimal jewellery or a dramatic headpiece.",
    featured: true,
  },
  {
    slug: "heritage-couture-brown",
    name: "Heritage Couture",
    category: "Couture Fashion",
    subtitle: "Modern tailoring with heritage soul.",
    description:
      "A refined couture silhouette designed for confidence, identity, and expressive elegance.",
    image: "/images/couture-brown-front.jpeg",
    images: [
      "/images/couture-brown-front.jpeg",
      "/images/couture-brown-back.jpeg",
    ],
    materials: [
      "Premium fashion fabric",
      "Structured tailoring",
      "Hand-finished details",
    ],
    inspiration:
      "The relationship between contemporary fashion and the visual language of East African heritage.",
    craftsmanship:
      "Built around clean lines, controlled volume, and an editorial silhouette.",
    origin:
      "Ubuntu Couture House, inspired by East African heritage.",
    styling:
      "Pair with sculptural jewellery and understated heels for a refined editorial look.",
    featured: true,
  },
  {
    slug: "heritage-couture-back",
    name: "Heritage Couture — Rear",
    category: "Couture Fashion",
    subtitle: "A silhouette designed from every angle.",
    description:
      "A couture expression where structure, movement, and proportion remain powerful from front to back.",
    image: "/images/couture-brown-back.jpeg",
    images: [
      "/images/couture-brown-back.jpeg",
      "/images/couture-brown-front.jpeg",
    ],
    materials: [
      "Premium couture textile",
      "Structured finishing",
      "Tailored construction",
    ],
    inspiration:
      "The belief that luxury should be experienced from every angle.",
    craftsmanship:
      "Attention to the rear silhouette, finishing, drape, and movement creates a complete editorial form.",
    origin:
      "Inspired by East African identity and international couture.",
    styling:
      "Ideal for formal entrances, evening events, and editorial styling.",
  },
  {
    slug: "earth-sculpture",
    name: "Earth Sculpture",
    category: "Contemporary Jewellery",
    subtitle: "Natural material transformed into modern luxury.",
    description:
      "Sculptural jewellery inspired by earth, resilience, transformation, and the organic character of cow horn.",
    image: "/images/cow-horn-jewellery.jpeg",
    images: [
      "/images/cow-horn-jewellery.jpeg",
      "/images/maasai-jewellery-editorial.jpeg",
    ],
    materials: [
      "Ethically sourced cow horn",
      "Natural materials",
      "Hand-finished components",
    ],
    inspiration:
      "Cow horn becomes a visual language for resilience, earth, transformation, and renewal.",
    craftsmanship:
      "Natural forms are shaped, refined, polished, and transformed into contemporary sculptural jewellery.",
    origin: "Inspired by East African material culture.",
    styling:
      "Wear as a focal piece with a clean silhouette to let the natural form lead.",
    featured: true,
  },
  {
    slug: "maasai-dialogue",
    name: "Maasai Dialogue",
    category: "Maasai Beadwork",
    subtitle: "Living heritage reinterpreted through contemporary design.",
    description:
      "A modern jewellery expression inspired by Maasai beadwork, colour, community, and living heritage.",
    image: "/images/maasai-jewellery-editorial.jpeg",
    images: [
      "/images/maasai-jewellery-editorial.jpeg",
      "/images/cow-horn-jewellery.jpeg",
    ],
    materials: [
      "Maasai-inspired beadwork",
      "Natural materials",
      "Contemporary jewellery components",
    ],
    inspiration:
      "Inspired by the artistry, symbolism, colour, and community expressed through Maasai beadwork.",
    craftsmanship:
      "Traditional visual language is carefully translated into a contemporary luxury context.",
    origin: "Inspired by East African heritage.",
    styling:
      "Pair with monochrome or neutral fashion for a striking heritage-led statement.",
    featured: true,
  },
  {
    slug: "rare-gem-heritage",
    name: "Rare Gem Heritage",
    category: "Rare Gems",
    subtitle: "Natural rarity shaped into a symbol of strength.",
    description:
      "A distinctive gemstone expression celebrating natural beauty, individuality, resilience, and strength.",
    image: "/images/rare-gem-neckpiece.jpeg",
    images: [
      "/images/rare-gem-neckpiece.jpeg",
      "/images/cow-horn-jewellery.jpeg",
    ],
    materials: [
      "Natural gemstones",
      "Luxury jewellery components",
      "Hand-finished details",
    ],
    inspiration:
      "Rare gems become symbols of individuality, strength, natural beauty, and resilience.",
    craftsmanship:
      "Selected materials are composed to allow natural character and rarity to remain central to the design.",
    origin: "Inspired by rare natural beauty across East Africa.",
    styling:
      "Designed to become the centrepiece of an evening or formal look.",
    featured: true,
  },
  {
    slug: "royal-gold-crown",
    name: "Royal Gold Crown",
    category: "Royal Headpieces",
    subtitle: "Dignity, leadership, and African majesty.",
    description:
      "A commanding headpiece inspired by royal presence, leadership, dignity, and the power of women.",
    image: "/images/royal-headpiece-gold.jpeg",
    images: [
      "/images/royal-headpiece-gold.jpeg",
      "/images/headpiece-blue.jpeg",
    ],
    materials: [
      "Statement metalwork",
      "Decorative elements",
      "Hand-finished detailing",
    ],
    inspiration:
      "Inspired by African majesty and the symbolism of women who lead with dignity and courage.",
    craftsmanship:
      "Built as a sculptural statement with emphasis on balance, presence, and ceremonial character.",
    origin: "Inspired by African royal and ceremonial aesthetics.",
    styling:
      "Designed for couture events, ceremonies, editorial shoots, and moments of extraordinary presence.",
    featured: true,
  },
  {
    slug: "floral-heritage-crown",
    name: "Floral Heritage Crown",
    category: "Royal Headpieces",
    subtitle: "Botanical elegance with African character.",
    description:
      "A sculptural headpiece blending floral inspiration with the visual language of African luxury.",
    image: "/images/heritage-floral-headpiece.jpeg",
    images: [
      "/images/heritage-floral-headpiece.jpeg",
      "/images/royal-headpiece-gold.jpeg",
    ],
    materials: [
      "Decorative sculptural elements",
      "Floral-inspired detailing",
      "Hand-finished components",
    ],
    inspiration:
      "Inspired by nature, femininity, ceremony, dignity, and African visual storytelling.",
    craftsmanship:
      "Layered sculptural details create a dramatic silhouette while maintaining an elegant sense of balance.",
    origin:
      "Inspired by African ceremonial aesthetics and natural forms.",
    styling:
      "Pair with clean couture silhouettes for a powerful editorial finish.",
  },
  {
    slug: "blue-majesty",
    name: "Blue Majesty",
    category: "Royal Headpieces",
    subtitle: "A contemporary expression of royal presence.",
    description:
      "A dramatic blue headpiece designed to transform presence into a statement of dignity and leadership.",
    image: "/images/headpiece-blue.jpeg",
    images: [
      "/images/headpiece-blue.jpeg",
      "/images/heritage-floral-headpiece.jpeg",
    ],
    materials: [
      "Statement decorative elements",
      "Sculptural construction",
      "Hand-finished details",
    ],
    inspiration:
      "Inspired by confidence, ceremony, leadership, and the visual power of colour.",
    craftsmanship:
      "A sculptural construction designed to frame the wearer and create a memorable silhouette.",
    origin: "Inspired by contemporary African luxury.",
    styling:
      "Best styled as the defining element of an evening or editorial look.",
    featured: true,
  },
  {
    slug: "global-heritage-look",
    name: "Global Heritage Look",
    category: "Couture Fashion",
    subtitle: "East African heritage with an international point of view.",
    description:
      "A fashion expression connecting African heritage with contemporary global luxury.",
    image: "/images/ubuntu-global-lookbook.jpeg",
    images: [
      "/images/ubuntu-global-lookbook.jpeg",
      "/images/ubuntu-brand-board.jpeg",
    ],
    materials: [
      "Luxury fashion textiles",
      "Editorial detailing",
      "Statement finishing",
    ],
    inspiration:
      "Inspired by the movement of African identity across borders and generations.",
    craftsmanship:
      "Contemporary proportions meet heritage-inspired storytelling to create an internationally minded silhouette.",
    origin: "Ubuntu Couture House.",
    styling:
      "Designed for fashion-forward occasions, travel, editorial shoots, and statement appearances.",
  },
];

const productsBySlug = new Map(
  products.map((product) => [product.slug, product]),
);

export function getProduct(
  slug: string,
): CollectionProduct | undefined {
  return productsBySlug.get(slug);
}

export function getFeaturedProducts(): CollectionProduct[] {
  return products.filter((product) => product.featured === true);
}

export function getProductsByCollection(
  category: CollectionCategory,
): CollectionProduct[] {
  return products.filter((product) => product.category === category);
}

export function getProductsByCategory(
  category: CollectionCategory,
): CollectionProduct[] {
  return getProductsByCollection(category);
}

export function getAllProducts(): CollectionProduct[] {
  return [...products];
}