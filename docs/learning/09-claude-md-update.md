# 09 — Updating CLAUDE.md at the end of Phase 1

## What I did

Updated `CLAUDE.md`:

- **Phases**: Phase 0 is done except the Vercel deploy (yours to connect); Phase 1 is done
  with placeholder content.
- **Folder structure**: a map of where everything lives.
- **Decisions and gotchas**: the non-obvious choices from this session, mostly the
  Next.js 16 "Cache Components" rules (see notes 03 and 05), how write-up metadata works,
  and the rule that animated/heavy features must check `useReducedEffects()`.
- **Commit convention** (added earlier at your request): Angular-style `type(scope): summary`.

## Why

CLAUDE.md is the memory that carries across Claude Code sessions. Recording decisions
*and the reasons for them* stops a future session from "fixing" something that was
deliberate (for example, re-adding `dynamicParams`, which would break the build).

## The commit convention in brief

`type(scope): summary`, for example `feat(about): add About page backed by typed profile data`.

| type | use it for |
| --- | --- |
| `feat` | a new feature visitors can see/use |
| `fix` | a bug fix |
| `docs` | documentation only (notes, CLAUDE.md, README) |
| `style` | formatting only, no behavior change |
| `refactor` | restructuring code without changing behavior |
| `test` | adding or changing tests |
| `chore` | maintenance: dependencies, config, .gitignore |

The `scope` (in parentheses) names the area: `projects`, `about`, `layout`, `learning`…

## Files involved

- `CLAUDE.md`

## Try it yourself

1. Run `git log --oneline` and spot where the commit style switches to the Angular
   convention.
2. Make your next change (e.g. putting your real name in `src/data/about.ts`) and commit
   it yourself: `git add -A && git commit -m "feat(about): add real bio"` then `git push`.
