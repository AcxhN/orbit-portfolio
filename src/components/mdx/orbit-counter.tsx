"use client";

import { useState } from "react";
import { useReducedEffects } from "@/hooks/use-reduced-effects";

const ORBIT_RADIUS = 36;
const MAX_MOONS = 8;

// A tiny interactive demo for MDX write-ups: a planet you can add moons to.
export function OrbitCounter() {
  const [moons, setMoons] = useState(1);
  const reducedEffects = useReducedEffects();

  return (
    <div className="not-prose my-8 flex flex-col items-center gap-6 rounded-lg border border-border bg-surface p-6 sm:flex-row">
      <svg
        viewBox="-50 -50 100 100"
        className="size-32 shrink-0"
        role="img"
        aria-label={`A planet with ${moons} ${moons === 1 ? "moon" : "moons"}`}
      >
        <circle r={ORBIT_RADIUS} fill="none" stroke="var(--color-border)" strokeDasharray="2 3" />
        <circle r="12" fill="var(--color-accent)" />
        <g
          className={reducedEffects ? undefined : "animate-[spin_12s_linear_infinite]"}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          {/* Invisible ring so the group's box is centered on the planet. */}
          <circle r={ORBIT_RADIUS} fill="none" />
          {Array.from({ length: moons }, (_, i) => {
            const angle = (i / moons) * 2 * Math.PI;
            return (
              <circle
                key={i}
                cx={ORBIT_RADIUS * Math.cos(angle)}
                cy={ORBIT_RADIUS * Math.sin(angle)}
                r="4"
                fill="var(--color-foreground)"
              />
            );
          })}
        </g>
      </svg>

      <div className="space-y-3 text-center sm:text-left">
        <p aria-live="polite">
          This planet has <strong>{moons}</strong> {moons === 1 ? "moon" : "moons"}.
        </p>
        <div className="flex justify-center gap-3 sm:justify-start">
          <button
            type="button"
            onClick={() => setMoons(moons + 1)}
            disabled={moons >= MAX_MOONS}
            className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-background disabled:opacity-50"
          >
            Add a moon
          </button>
          <button
            type="button"
            onClick={() => setMoons(1)}
            className="rounded-md border border-border px-3 py-1.5 text-sm"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
