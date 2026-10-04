 "use client";

import { useWishlist } from "@/components/WishlistProvider";
import type { CollectionProduct } from "@/lib/collections";

type WishlistButtonProps = {
  product: CollectionProduct;
};

export default function WishlistButton({
  product,
}: WishlistButtonProps) {
  const {
    isSaved,
    toggleWishlist,
  } = useWishlist();

  const saved = isSaved(product.slug);

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(product.slug)}
      aria-pressed={saved}
      className={[
        "flex min-h-[52px] flex-1 items-center justify-center border px-6 text-[9px] font-semibold uppercase tracking-[0.2em] transition",
        saved
          ? "border-[#17110d] bg-[#17110d] text-[#f7f1e6]"
          : "border-[#17110d] text-[#17110d] hover:bg-[#17110d] hover:text-[#f7f1e6]",
      ].join(" ")}
    >
      <span className="mr-3 text-[#a98448]">
        {saved ? "♥" : "♡"}
      </span>

      {saved
        ? "Saved to Private Selection"
        : "Save to Private Selection"}
    </button>
  );
}