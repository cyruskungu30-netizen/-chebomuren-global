"use client";

import { useEffect } from "react";

export default function Performance() {
  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
        };
      }
    ).connection;

    if (connection?.saveData) {
      document.documentElement.classList.add(
        "ubuntu-data-saver"
      );
    }

    if (
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g"
    ) {
      document.documentElement.classList.add(
        "ubuntu-slow-network"
      );
    }

    const images = document.querySelectorAll("img");

    images.forEach((image) => {
      if (!image.hasAttribute("decoding")) {
        image.setAttribute("decoding", "async");
      }
    });
  }, []);

  return null;
}