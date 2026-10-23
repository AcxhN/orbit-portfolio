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

0. Environment setup, scaffold, live deploy ← **current**
1. Content skeleton: plain 2D pages (home, projects, MDX write-ups, about), no 3D
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

## Teaching mode

The owner is learning this stack. Briefly explain what you're doing and why, define
new terms the first time they appear, and prefer simple, readable code over clever code.
