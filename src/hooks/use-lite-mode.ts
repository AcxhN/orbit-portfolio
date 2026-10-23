"use client";

import { useSyncExternalStore } from "react";
import { getLiteMode, setLiteMode, subscribeToLiteMode } from "@/lib/lite-mode-store";

// Returns [isLiteMode, setLiteMode]. On the server (and during the first
// render in the browser) it's false, since the server can't see localStorage.
export function useLiteMode(): [boolean, (on: boolean) => void] {
  const liteMode = useSyncExternalStore(subscribeToLiteMode, getLiteMode, () => false);
  return [liteMode, setLiteMode];
}
