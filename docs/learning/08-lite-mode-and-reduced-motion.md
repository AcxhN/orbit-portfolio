# 08 — Lite mode and reduced motion

## What I did

- **Lite mode toggle**: a "lite on/off" button in the header. The choice is saved in
  `localStorage` (every access wrapped in `try/catch`) and mirrored onto
  `<html data-lite="true|false">`.
- **`usePrefersReducedMotion()`**: a hook that's `true` when the visitor's system
  setting asks for less motion.
- **`useReducedEffects()`**: combines the two. Any animated or heavy feature should ask
  this one question. `OrbitCounter` now uses it to stop spinning.
- A CSS **safety net** in `globals.css` disables all animations and transitions when
  either setting is on, even for components that forget to check the hook.

Nothing heavy exists yet, but having this wired up *now* means Phase 2's 3D galaxy can
just call `useReducedEffects()` and show the plain page instead.

## New terms

- **localStorage**: a small key/value store in the browser that survives page reloads.
  It can throw an error (some private-browsing modes, blocked cookies/site data), which
  is why it's wrapped in `try/catch`. If it fails, the toggle still works for the current
  visit; it just isn't remembered.
- **`try { … } catch { … }`**: "attempt this; if it throws an error, do this instead of crashing".
- **`prefers-reduced-motion`**: an OS-level accessibility setting (e.g. Windows
  "Animation effects" off, macOS "Reduce motion"). Motion can cause nausea or dizziness
  for some people, so the site respects it automatically.
- **Hook**: a function whose name starts with `use` that lets a component tap into React
  features (state, effects, external data). You can write your own by combining other hooks,
  which is exactly what `useReducedEffects` does.
- **`useSyncExternalStore`**: React's built-in way to read a value that lives *outside*
  React (localStorage, a media query) and re-render when it changes. You give it three things:
  1. `subscribe`: how to get notified of changes,
  2. `getSnapshot`: how to read the current value in the browser,
  3. `getServerSnapshot`: what to assume on the server, which can't see the visitor's browser (we say `false`).
  
  Using it instead of `useState` + `useEffect` avoids a "hydration mismatch", where the
  server HTML and the first browser render disagree. (The linter in this project actually
  flags the `useState` + `useEffect` pattern.)
- **`useEffect`**: runs code *after* React updates the screen, which is the place to touch
  things outside React. Here it writes `data-lite` onto `<html>`.
- **`aria-pressed`**: tells screen readers the button is a toggle and whether it's on.
  Tailwind's `aria-pressed:` prefix styles the "on" state from the same attribute.

## A known limitation

The `data-lite` attribute is set after the page's JavaScript loads, so on a reload with
lite mode on there's a split second where animations *could* run. With nothing heavy on
the site, it doesn't matter. In Phase 2 the 3D scene will only load *after* checking
`useReducedEffects()`, so it'll never flash. If needed later, a tiny inline script in
the `<head>` can set the attribute before first paint.

## Files involved

- `src/lib/lite-mode-store.ts`: the store (read/write/subscribe)
- `src/hooks/use-lite-mode.ts`, `src/hooks/use-prefers-reduced-motion.ts`, `src/hooks/use-reduced-effects.ts`
- `src/components/lite-mode-toggle.tsx`, `src/components/site-header.tsx`
- `src/app/globals.css` (the safety-net rules), `src/components/mdx/orbit-counter.tsx`

## Try it yourself

1. Open the Part 0 write-up, then click "lite off" in the header. The planet stops
   spinning. Reload: it remembers. In DevTools (F12) → Application → Local Storage you'll
   see the `orbit:lite-mode` key.
2. Turn on your OS's reduce-motion setting (Windows: Settings → Accessibility → Visual
   effects → Animation effects off) and reload. The planet stays still even with lite mode off.
