 "use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "ubuntu-couture-wishlist";

type WishlistContextValue = {
  wishlist: string[];
  isSaved: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
  wishlistCount: number;
};

const WishlistContext =
  createContext<WishlistContextValue | undefined>(undefined);

type WishlistProviderProps = {
  children: ReactNode;
};

export default function WishlistProvider({
  children,
}: WishlistProviderProps) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const parsed: unknown = JSON.parse(stored);

        if (Array.isArray(parsed)) {
          const validIds = parsed.filter(
            (item): item is string => typeof item === "string",
          );

          setWishlist(Array.from(new Set(validIds)));
        }
      }
    } catch {
      setWishlist([]);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(wishlist),
      );
    } catch {
      // Local storage may be unavailable in restricted environments.
    }
  }, [wishlist, hydrated]);

  const isSaved = useCallback(
    (productId: string) => {
      return wishlist.includes(productId);
    },
    [wishlist],
  );

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((current) => {
      if (current.includes(productId)) {
        return current.filter((id) => id !== productId);
      }

      return [...current, productId];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((current) =>
      current.filter((id) => id !== productId),
    );
  }, []);

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  const value = useMemo<WishlistContextValue>(
    () => ({
      wishlist,
      isSaved,
      toggleWishlist,
      removeFromWishlist,
      clearWishlist,
      wishlistCount: wishlist.length,
    }),
    [
      wishlist,
      isSaved,
      toggleWishlist,
      removeFromWishlist,
      clearWishlist,
    ],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextValue {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider.",
    );
  }

  return context;
}