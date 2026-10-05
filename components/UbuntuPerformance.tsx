 "use client";

import { useEffect } from "react";

type NetworkConnection = {
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
  connection?: NetworkConnection;
};

function updateNetworkState() {
  const root = document.documentElement;
  const connection = (navigator as PerformanceNavigator).connection;

  root.classList.toggle(
    "ubuntu-data-saver",
    Boolean(connection?.saveData),
  );

  root.classList.toggle(
    "ubuntu-slow-network",
    connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g",
  );
}

export default function UbuntuPerformance() {
  useEffect(() => {
    const root = document.documentElement;
    const connection = (navigator as PerformanceNavigator).connection;

    updateNetworkState();

    const handleConnectionChange = () => {
      updateNetworkState();
    };

    const handleLoad = () => {
      root.classList.add("ubuntu-page-ready");
    };

    connection?.addEventListener?.("change", handleConnectionChange);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      connection?.removeEventListener?.(
        "change",
        handleConnectionChange,
      );

      window.removeEventListener("load", handleLoad);

      root.classList.remove(
        "ubuntu-data-saver",
        "ubuntu-slow-network",
      );
    };
  }, []);

  return null;
}