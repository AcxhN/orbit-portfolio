# 03 — Site layout: header, footer, dark theme

## What I did

- Rewrote `src/app/layout.tsx` so every page gets a **skip link**, the header,
  a `<main>` content area, and the footer.
- Added `SiteHeader`, `NavLinks`, and `SiteFooter` components in `src/components/`.
- Replaced the template colors with a small dark palette in `src/app/globals.css`.
- Deleted the unused template SVGs in `public/`.

## Key concepts

### Layouts

`layout.tsx` is a special App Router file. Whatever it renders wraps every page in
its folder and all subfolders, and `{children}` is where the page goes. The *root*
layout (`src/app/layout.tsx`) must render `<html>` and `<body>`. When you click a link,
Next.js swaps only the page; the layout stays mounted, so the header doesn't flicker.

`metadata.title.template: "%s · Orbit"` means a page that sets `title: "About"` gets
the browser-tab title "About · Orbit".

### Server components vs client components

This is the most important idea in the App Router.

- **Server components** (the default) run only on the server/at build time. Their
  code is never sent to the browser, so they cost visitors nothing in download size.
  They can't use interactivity (`useState`, `onClick`) or browser APIs (`window`, `localStorage`).
- **Client components** start with the line `"use client"`. They're rendered to HTML
  on the server too, but their JavaScript is also sent to the browser so they can be
  interactive ("hydration" means React attaching that interactivity to the HTML).

Rule of thumb: keep things server components; make only the small interactive leaf a
client component. Here `SiteHeader` is a server component and only `NavLinks` is a
client one, because it needs `usePathname()` (the current URL) to highlight the active link.

**A bug I hit (worth remembering):** I first exported the `navItems` array from the
`"use client"` file and imported it into the server header. The build failed. Anything
exported from a client file reaches server components as a *reference* (good for rendering
`<NavLinks />`), not as the actual array, so `.map()` on it fails. The fix was to move
the array to a plain module, `src/lib/nav.ts`, which both sides can import.

### Suspense around NavLinks

`<Suspense fallback={...}>` says "if this part isn't ready yet, show the fallback".
This project has **Cache Components** turned on (`cacheComponents: true` in
`next.config.ts`, a create-next-app default in Next 16). With it, Next.js prerenders a
static "shell" of each page at build time. For pages whose URL isn't fully known at
build time, `usePathname()` can't answer yet, so the fallback (plain links, no
highlight) goes into the shell and the real `NavLinks` replaces it in the browser.

### Tailwind CSS

Tailwind is a CSS framework where you style things with small utility classes right in
the markup: `px-5` = horizontal padding, `text-sm` = small text, `sm:px-6` = "from the
`sm` breakpoint (640px) up, use more padding". You rarely write separate CSS files.

Tailwind v4 is configured in CSS. The `@theme` block in `globals.css` defines our
colors, and each `--color-NAME` becomes classes like `text-NAME`, `bg-NAME`, `border-NAME`.
So `text-muted`, `bg-surface`, and `decoration-accent` are our own colors.

### Accessibility choices

- **Semantic HTML**: `<header>`, `<nav aria-label="Main">`, `<main>`, `<footer>`. Screen
  readers use these as landmarks to jump around.
- **Skip link**: invisible until you press Tab on a fresh page; jumps past the nav.
- **`aria-current="page"`** on the active nav link tells screen readers which page you're on.
- **Focus ring**: `:focus-visible` in `globals.css` draws a gold outline when navigating
  by keyboard (not on mouse clicks).
- **Contrast**: the muted gray `#a3a8b8` on the background `#0b0d12` is about 8:1;
  WCAG AA asks for at least 4.5:1 for body text.
- **Responsive**: content is capped at `max-w-3xl` (48rem) and the header wraps
  (`flex-wrap`) on narrow phones.

## Files involved

- `src/app/layout.tsx`, `src/app/globals.css`
- `src/components/site-header.tsx`, `src/components/nav-links.tsx`, `src/components/site-footer.tsx`
- `src/lib/nav.ts`

## Try it yourself

1. Change `--color-accent` in `globals.css` to another color (e.g. `#7dd3fc`) and watch
   the logo star, focus ring, and active-link underline all change together.
2. Run `npm run dev`, load the site, and press Tab once. The "Skip to content" link appears.
