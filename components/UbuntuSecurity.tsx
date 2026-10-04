"use client";

import { useEffect } from "react";

export default function UbuntuSecurity() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.closest("[data-protected-image='true']")) {
        event.preventDefault();
      }
    };

    const handleDragStart = (event: DragEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.tagName === "IMG" ||
        target?.closest("[data-protected-image='true']")
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener(
        "contextmenu",
        handleContextMenu
      );

      document.removeEventListener(
        "dragstart",
        handleDragStart
      );
    };
  }, []);

  return null;
}