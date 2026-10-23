"use client";

import { useLiteMode } from "@/hooks/use-lite-mode";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

// The one check heavy or animated features should use: true if the visitor
// turned on lite mode OR their system prefers reduced motion. In Phase 2 the
// 3D galaxy will check this and show the plain 2D page instead.
export function useReducedEffects(): boolean {
  const [liteMode] = useLiteMode();
  const prefersReducedMotion = usePrefersReducedMotion();
  return liteMode || prefersReducedMotion;
}
