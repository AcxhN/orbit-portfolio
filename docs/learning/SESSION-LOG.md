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

## Failed / blocked

- **Vercel deploy: waiting on you** (browser login). Not attempted, as you asked.
  Steps are in `02-github.md`. Until then Phase 0's "live deploy" isn't done.

## Notes

- Node is installed through nvm (`~/.nvm`, Node v24.22.1). Claude Code's sandbox hides
  your home folder, so I ran node/npm/git/gh commands outside the sandbox.
- `npm install` reported "5 high severity vulnerabilities" in dev dependencies straight
  from the template. I did **not** run `npm audit fix --force`, because it can install
  breaking major versions. Worth looking at with `npm audit` later.
- npm warned that `unrs-resolver` has an install script not yet approved
  (`npm install-scripts approve unrs-resolver`). Build and lint work without it.

## Open questions for you

_(see below as they come up)_
