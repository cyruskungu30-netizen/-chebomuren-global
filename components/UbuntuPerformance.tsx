"use client";

import { useEffect } from "react";

export default function UbuntuPerformance() {
  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
        };
      }
    ).connection;

    const root = document.documentElement;

    if (connection?.saveData) {
      root.classList.add("ubuntu-data-saver");
    }

    if (
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g"
    ) {
      root.classList.add("ubuntu-slow-network");
    }

    const handleLoad = () => {
      root.classList.add("ubuntu-page-ready");
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, {
        once: true,
      });
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return null;
}