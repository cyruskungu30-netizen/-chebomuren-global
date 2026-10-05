 "use client";

import { useEffect } from "react";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (
    type: string,
    listener: EventListenerOrEventListenerObject,
  ) => void;
  removeEventListener?: (
    type: string,
    listener: EventListenerOrEventListenerObject,
  ) => void;
};

type PerformanceNavigator = Navigator & {
  connection?: NetworkInformation;
  deviceMemory?: number;
};

function updatePerformanceMode() {
  const root = document.documentElement;
  const connection = (navigator as PerformanceNavigator).connection;

  root.classList.toggle("ubuntu-data-saver", Boolean(connection?.saveData));

  root.classList.toggle(
    "ubuntu-slow-network",
    connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g",
  );
}

export default function Performance() {
  useEffect(() => {
    updatePerformanceMode();

    const connection = (navigator as PerformanceNavigator).connection;

    const handleConnectionChange = () => {
      updatePerformanceMode();
    };

    connection?.addEventListener?.("change", handleConnectionChange);

    const images = document.querySelectorAll<HTMLImageElement>("img");

    images.forEach((image) => {
      if (!image.hasAttribute("decoding")) {
        image.setAttribute("decoding", "async");
      }

      if (!image.hasAttribute("loading") && !image.hasAttribute("fetchpriority")) {
        image.setAttribute("loading", "lazy");
      }
    });

    return () => {
      connection?.removeEventListener?.("change", handleConnectionChange);

      document.documentElement.classList.remove(
        "ubuntu-data-saver",
        "ubuntu-slow-network",
      );
    };
  }, []);

  return null;
}