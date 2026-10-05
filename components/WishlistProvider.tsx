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

function normalizeWishlist(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const validIds = value.filter(
    (item): item is string =>
      typeof item === "string" && item.trim().length > 0,
  );

  return Array.from(new Set(validIds));
}

export default function WishlistProvider({
  children,
}: WishlistProviderProps) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        setWishlist([]);
        return;
      }

      const parsed: unknown = JSON.parse(stored);
      setWishlist(normalizeWishlist(parsed));
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
      // Local storage may be unavailable or restricted.
    }
  }, [wishlist, hydrated]);

  const isSaved = useCallback(
    (productId: string) => {
      return wishlist.includes(productId);
    },
    [wishlist],
  );

  const toggleWishlist = useCallback((productId: string) => {
    const normalizedId = productId.trim();

    if (!normalizedId) {
      return;
    }

    setWishlist((current) => {
      if (current.includes(normalizedId)) {
        return current.filter((id) => id !== normalizedId);
      }

      return [...current, normalizedId];
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