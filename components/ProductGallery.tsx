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

  if (images.length === 0) {
    return (
      <div
        className="flex aspect-[4/5] items-center justify-center border border-[#17110d]/10 bg-[#e9dfd0] text-center"
        role="status"
      >
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#92713d]">
            Ubuntu Couture House
          </p>
          <p className="mt-3 font-[var(--font-ubuntu-serif)] text-2xl text-[#17110d]">
            Image coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <AdvancedGallery
      images={images}
      title={product.name}
    />
  );
}