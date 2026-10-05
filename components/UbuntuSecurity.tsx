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

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (
        (event.ctrlKey || event.metaKey) &&
        ["s", "u"].includes(key)
      ) {
        event.preventDefault();
      }

      if (
        event.ctrlKey &&
        event.shiftKey &&
        ["i", "j"].includes(key)
      ) {
        event.preventDefault();
      }

      if (key === "f12") {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}