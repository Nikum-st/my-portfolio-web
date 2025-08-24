"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useNavigation = () => {
  const [isNavigating, setIsNavigating] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  const startNavigation = () => {
    setIsNavigating(true);
  };

  return { isNavigating, startNavigation };
};
