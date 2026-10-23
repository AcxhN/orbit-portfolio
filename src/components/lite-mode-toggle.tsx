"use client";

import { useEffect } from "react";
import { useLiteMode } from "@/hooks/use-lite-mode";

export function LiteModeToggle() {
  const [liteMode, setLiteMode] = useLiteMode();

  // Mirror the setting onto <html data-lite="true|false"> so CSS can react to it
  // (see globals.css, which switches off animations in lite mode).
  useEffect(() => {
    document.documentElement.dataset.lite = String(liteMode);
  }, [liteMode]);

  return (
    <button
      type="button"
      aria-pressed={liteMode}
      onClick={() => setLiteMode(!liteMode)}
      title="Lite mode turns off animations and heavy effects"
      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted hover:text-foreground aria-pressed:border-accent aria-pressed:text-accent"
    >
      lite {liteMode ? "on" : "off"}
    </button>
  );
}
