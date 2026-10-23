# Session log

Running record of the unattended build session (2026-10-22).

## Done

- **Step 1 — Scaffold.** create-next-app (Next.js 16.4.2, React 19.3, Tailwind 4,
  TypeScript, ESLint, App Router, `src/`, `@/*` alias). Package renamed to `orbit`.
  Build and lint pass.
- **Step 2 — CLAUDE.md.** Project briefing for Claude Code (imports Next's
  AGENTS.md). Art source formats added to `.gitignore`.
- **Step 3 — GitHub.** Public repo https://github.com/AcxhN/orbit-portfolio, `main` pushed.
- **Step 4a — Layout.** Header/nav (active link), footer, skip link, dark theme tokens.
- **Step 4b — Home page.** Intro with placeholder name "A" and section cards.
- **Step 4c — MDX + Projects.** `@next/mdx`, write-ups in `src/content/projects/`
  with `export const metadata`, `/projects` index, `/projects/[slug]`, custom 404.
- **Convention change (your request).** From here on, commits follow the Angular
  convention `type(scope): summary`, recorded in CLAUDE.md. The 7 earlier commits keep
  their old messages (no history rewrites).
- **Step 4d — First write-up.** "Building Orbit, Part 0: Setup" with the embedded
  `OrbitCounter` component (verified rendering on a production server).
- **Step 4e — About page.** Bio/skills/timeline from typed `src/data/about.ts`
  (placeholders), ready to be reused by the Phase 3 terminal.
- **Step 4f — Lite mode + reduced motion.** Header toggle (localStorage in try/catch),
  `usePrefersReducedMotion`, combined `useReducedEffects`, CSS safety net.
- **Step 4g — CLAUDE.md.** Phase 1 marked done; folder structure and decisions recorded.
  Everything pushed to GitHub. **Stopped here, before Phase 2, as instructed.**

## Failed / blocked

- **Vercel deploy: waiting on you** (browser login). Not attempted, as you asked.
  Steps are in `02-github.md`. Until then Phase 0's "live deploy" isn't done.

## Notes

- Node is installed through nvm (`~/.nvm`, Node v24.22.1). Claude Code's sandbox hides
  your home folder, so I ran node/npm/git/gh commands outside the sandbox.
- `npm install` reported "5 high severity vulnerabilities" in dev dependencies straight
  from the template. I did **not** run `npm audit fix --force`, because it can install
  breaking major versions. Worth looking at with `npm audit` later.
- Unknown `/projects/<slug>` URLs show the 404 page but return HTTP 200 (streaming +
  Cache Components; documented Next behavior, page has `noindex`). See `05-mdx-and-projects.md`.
- npm warned that `unrs-resolver` has an install script not yet approved
  (`npm install-scripts approve unrs-resolver`). Build and lint work without it.

## Open questions for you

1. **Vercel**: connect the repo at https://vercel.com/new (steps in `02-github.md`).
   That's the last piece of Phase 0.
2. **Your name and content**: the site says "A" everywhere. Update `profile` in
   `src/data/about.ts` and the heading in `src/app/page.tsx`. The bio, skills, and timeline
   are placeholders.
3. **Social/contact links**: none yet (GitHub, email, art accounts?). Where should they go?
   Footer, About, or both?
4. **README.md** is still the create-next-app boilerplate. Want a short Orbit README?
5. **npm audit**: 5 "high" warnings from the template's dev tooling. Fine to look at
   together; I avoided `npm audit fix --force` because it can break things.
6. **Light theme**: the site is dark-only by design for now. Want a light option later?
7. The Part 0 write-up is written as you (first person). Please read it and rewrite
   anything that doesn't sound like you.
