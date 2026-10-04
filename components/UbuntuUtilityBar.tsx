 "use client";

import Link from "next/link";

import { useWishlist } from "@/components/WishlistProvider";

export default function UbuntuUtilityBar() {
  const { wishlistCount } = useWishlist();

  return (
    <div className="hidden border-b border-[#17110d]/10 bg-[#f7f1e6] lg:block">
      <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between px-6 text-[8px] uppercase tracking-[0.25em] text-[#75695d] lg:px-10">
        <p>
          African Elegance and Luxury Reimagined
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/appointments"
            className="transition hover:text-[#92713d]"
          >
            Private Appointments
          </Link>

          <Link
            href="/wishlist"
            className="transition hover:text-[#92713d]"
          >
            Private Selection
            {wishlistCount > 0 && (
              <span className="ml-2 text-[#92713d]">
                ({wishlistCount})
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}