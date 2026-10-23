// A tiny store for the "lite mode" preference, saved in localStorage.
// localStorage can throw (private browsing, blocked storage), so every access
// is wrapped in try/catch and the setting still works for the current visit.

const STORAGE_KEY = "orbit:lite-mode";
const listeners = new Set<() => void>();
let liteMode: boolean | null = null; // null = not read from storage yet

function readStorage(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function getLiteMode(): boolean {
  if (liteMode === null) liteMode = readStorage();
  return liteMode;
}

export function setLiteMode(on: boolean) {
  liteMode = on;
  try {
    window.localStorage.setItem(STORAGE_KEY, String(on));
  } catch {
    // Storage unavailable: keep the in-memory value only.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeToLiteMode(listener: () => void) {
  listeners.add(listener);

  // Stay in sync when the setting changes in another tab.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    liteMode = event.newValue === "true";
    listener();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}
