"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ForceRefresh = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);
  return null;
};
