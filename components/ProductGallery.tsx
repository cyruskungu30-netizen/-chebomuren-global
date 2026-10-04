"use client";

import AdvancedGallery from "@/components/AdvancedGallery";

type ProductGalleryProps = {
  product: {
    name: string;
    images: string[];
  };
};

export default function ProductGallery({
  product,
}: ProductGalleryProps) {
  const images = product.images.map((src, index) => ({
    src,
    alt: `${product.name} — view ${index + 1}`,
  }));

  return (
    <AdvancedGallery
      images={images}
      title={product.name}
    />
  );
}