 "use client";

import Link from "next/link";

import { useWishlist } from "@/components/WishlistProvider";

export default function UbuntuUtilityBar() {
  const { wishlistCount } = useWishlist();

  return (
    <div className="hidden border-b border-[#17110d]/10 bg-[#f7f1e6] lg:block">
      <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between px-6 text-[8px] uppercase tracking-[0.25em] text-[#75695d] lg:px-10">
        <p aria-label="Ubuntu Couture House motto">
          African Elegance and Luxury Reimagined
        </p>

        <nav
          className="flex items-center gap-6"
          aria-label="Utility navigation"
        >
          <Link
            href="/appointments"
            className="transition-colors duration-300 hover:text-[#92713d] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#f7f1e6]"
          >
            Private Appointments
          </Link>

          <Link
            href="/wishlist"
            aria-label={
              wishlistCount > 0
                ? `Private Selection, ${wishlistCount} saved items`
                : "Private Selection"
            }
            className="transition-colors duration-300 hover:text-[#92713d] focus:outline-none focus:ring-2 focus:ring-[#c9a45d] focus:ring-offset-2 focus:ring-offset-[#f7f1e6]"
          >
            Private Selection
            {wishlistCount > 0 && (
              <span
                className="ml-2 text-[#92713d]"
                aria-hidden="true"
              >
                ({wishlistCount})
              </span>
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
}