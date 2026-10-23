# 04 — Home page

## What I did

Replaced `src/app/page.tsx` with a short intro ("Hi, I'm A.", a placeholder for your
name) and two cards linking to Projects and About.

## Why it's built this way

- The cards come from a small `sections` array mapped into `<li>` elements. To add a
  section later, add an object to the array; there's no markup to copy.
- It's a **server component** (no `"use client"`), because nothing on it is interactive.
  Visitors download zero JavaScript for this content, which is what makes it fast on a phone.
- In Phase 2 the 3D galaxy will sit *on top of* this. This plain version stays as the
  fallback (lite mode, reduced motion, weak devices).

## New terms

- **JSX**: the HTML-like syntax inside `.tsx` files. Differences from HTML:
  `className` instead of `class`, `{expression}` to insert JavaScript values, and some
  characters need escaping, so you'll see `I&apos;m` for an apostrophe (the linter enforces this).
- **`.map()`**: turns an array into an array of elements. React needs a unique
  `key` on each one (here, the link `href`) to track which is which.
- **`<Link>`** (from `next/link`): like `<a>`, but navigates inside the app without a
  full page reload, and preloads the target page in the background.
- **`sr-only`**: a Tailwind class that hides something visually but keeps it for
  screen readers. The "Explore" heading gives the card list a name for screen-reader users.

## Files involved

- `src/app/page.tsx`

## Try it yourself

1. Replace "A" with your name and rewrite the intro paragraph in your own voice.
2. Add a third card to the `sections` array (e.g. `{ href: "/projects", title: "Notes", ... }`)
   and watch the grid reflow. On a wide screen it's 2 columns (`sm:grid-cols-2`), on a phone 1.
