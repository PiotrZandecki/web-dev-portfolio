"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const hasHash = window.location.hash.length > 0;

    if (hasHash) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });
  }, [pathname]);

  return null;
}
