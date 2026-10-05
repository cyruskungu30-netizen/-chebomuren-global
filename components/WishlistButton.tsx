 "use client";

import { useId } from "react";

import { useWishlist } from "@/components/WishlistProvider";
import type { CollectionProduct } from "@/lib/collections";

type WishlistButtonProps = {
  product: CollectionProduct;
};

export default function WishlistButton({
  product,
}: WishlistButtonProps) {
  const { isSaved, toggleWishlist } = useWishlist();
  const saved = isSaved(product.slug);
  const labelId = useId();

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(product.slug)}
      aria-pressed={saved}
      aria-label={
        saved
          ? `Remove ${product.name} from Private Selection`
          : `Save ${product.name} to Private Selection`
      }
      className={[
        "group flex min-h-[52px] flex-1 items-center justify-center border px-6 text-[9px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#f7f1e6]",
        saved
          ? "border-[#17110d] bg-[#17110d] text-[#f7f1e6] hover:bg-[#2a211b]"
          : "border-[#17110d] text-[#17110d] hover:bg-[#17110d] hover:text-[#f7f1e6]",
      ].join(" ")}
    >
      <span
        id={labelId}
        aria-hidden="true"
        className={[
          "mr-3 text-base leading-none transition-transform duration-300",
          saved
            ? "text-[#c9a45d]"
            : "text-[#a98448] group-hover:scale-110",
        ].join(" ")}
      >
        {saved ? "♥" : "♡"}
      </span>

      <span>
        {saved
          ? "Saved to Private Selection"
          : "Save to Private Selection"}
      </span>
    </button>
  );
}