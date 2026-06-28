"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function RouteScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hasHash = window.location.hash.length > 0;

    if (hasHash) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, searchParams]);

  return null;
}
