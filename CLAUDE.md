# Orbit

@AGENTS.md

## Vision

Orbit is the owner's personal website: part portfolio, part creative playground, part
documentation hub (write-ups on each project and how it was built), and a permanent
work in progress. The owner is an illustrator studying computer engineering, so the
site mixes software and illustration.

Long-term (not yet): a scroll-navigated 3D galaxy home where each planet is a site
section; a terminal-style About page (`whoami`, skills, timeline, `neofetch`, easter
eggs) that later unlocks a walkable WASD 3D room via `cd ~/room`; a hand-inked
non-photorealistic style (ink outlines, cross-hatching, toon shading, paper grain)
centred on a star driven by GitHub commit activity; hand-painted planet textures and
Blender `.glb` models.

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS
- MDX (via `@next/mdx`) for write-ups
- React Three Fiber + drei: later phases only, **not installed yet**
- Git / GitHub (`orbit-portfolio`), Vercel for hosting

## Phases

0. Environment setup, scaffold, live deploy: **done except the Vercel deploy**, which
   the owner connects in the browser
1. Content skeleton: plain 2D pages (home, projects, MDX write-ups, about), no 3D ← **done**
   (content is still placeholder; owner fills in name, bio, timeline)
2. Galaxy home
3. Terminal About Me
4. Signature hand-inked style + commit-driven star
5. Fun layer (music widget, easter eggs, walkable room, comet guestbook, ship's log, Ctrl+K palette, …)

## Non-negotiables

- A plain 2D version of all content must always work.
- Lite mode toggle; respect `prefers-reduced-motion`; mobile fallback.
- Keep a performance budget. A recruiter on a phone should be able to read about
  the owner instantly.
- Large source files (`.blend`, `.psd`, `.kra`, `.procreate`) never go in the repo.

## Conventions

- TypeScript strict mode.
- Small, focused components.
- Commit often with clear messages.
- Commit messages follow the Angular convention: `type(scope): summary`, where type is
  feat, fix, docs, style, refactor, test, or chore (e.g. `feat(projects): add write-up`).
  Commits before `docs(claude): adopt Angular commit convention` predate this rule and
  are left as-is (no history rewrites).
- Run `npm run build` and `npm run lint` before committing.
- Keep this CLAUDE.md updated as the project evolves.
- Learning notes live in `docs/learning/` (numbered, one per step) plus
  `docs/learning/SESSION-LOG.md`.

## Folder structure

```
src/
  app/                      # App Router: folders are URLs
    layout.tsx              # root layout: skip link, header, <main>, footer
    page.tsx                # / (home)
    not-found.tsx           # 404
    globals.css             # Tailwind import, @theme color tokens, motion safety net
    projects/page.tsx       # /projects index (lists write-ups)
    projects/[slug]/page.tsx  # one write-up
    about/page.tsx          # /about (plain 2D)
  components/               # site-header, nav-links, site-footer, tag-list, lite-mode-toggle
    mdx/                    # components meant for embedding in MDX (orbit-counter)
  content/projects/*.mdx    # write-ups; file name = URL slug
  data/about.ts             # typed profile/skills/timeline (shared with future terminal)
  hooks/                    # use-lite-mode, use-prefers-reduced-motion, use-reduced-effects
  lib/                      # nav items, projects loader, lite-mode store
  mdx-components.tsx        # required by @next/mdx
docs/learning/              # numbered learning notes + SESSION-LOG.md
```

## Decisions and gotchas

- **Next.js 16 with Cache Components** (`cacheComponents: true`, the create-next-app
  default). Consequences:
  - Client components that read the URL (`usePathname`) in shared layouts are wrapped
    in `<Suspense>` with a plain fallback (see `site-header.tsx`).
  - `export const dynamicParams` is not allowed; unknown slugs call `notFound()`.
  - `generateStaticParams` must return at least one item, so `src/content/projects/`
    must never be empty.
  - Unknown slugs render the 404 page with HTTP 200 (streaming). Documented behavior.
- **Write-up metadata** is an MDX export (`export const metadata = { title, date, summary, tags }`),
  not YAML frontmatter, so no extra plugin. `src/lib/projects.ts` validates it at build time.
- Values (not components) can't be imported from a `"use client"` module into a server
  component. Shared constants live in plain modules under `src/lib/`.
- **Lite mode / reduced motion**: anything animated or heavy must check
  `useReducedEffects()` (lite mode OR `prefers-reduced-motion`). `globals.css` also
  disables all animations/transitions in either case as a safety net.
- Read external values (localStorage, media queries) with `useSyncExternalStore`, not
  `useState` + `useEffect` (lint flags the latter).
- Typography for write-ups: `@tailwindcss/typography` (`prose prose-invert`).
- Dark theme only for now; colors are tokens in `globals.css` `@theme`.
- Node comes from nvm in `~/.nvm`; Claude Code's sandbox hides the home folder, so
  node/npm commands need to run outside the sandbox.

## Teaching mode

The owner is learning this stack. Briefly explain what you're doing and why, define
new terms the first time they appear, and prefer simple, readable code over clever code.
