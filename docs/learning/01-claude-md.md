# 01 — CLAUDE.md and .gitignore

## What I did

- Created `CLAUDE.md` in the project root with the vision, stack, phase plan,
  non-negotiables, conventions, and a "Teaching mode" section.
- Added `*.blend`, `*.blend1` (Blender's automatic backup file), `*.psd`, `*.kra`, and
  `*.procreate` to `.gitignore`.

## Why

- **CLAUDE.md** is a file Claude Code reads automatically at the start of every
  session in this folder. It's the project's "briefing document": anything written
  there, the AI knows without you repeating it. Keeping it current means future
  sessions start with the right context (which phase we're in, what not to do).
- The line `@AGENTS.md` at the top is an **import**. It pulls in the
  `AGENTS.md` file that Next.js generated, so Claude also sees Next's warning to check
  the bundled docs. One source of truth, no copy-pasting.
- **.gitignore** lists file patterns git should pretend don't exist. Art source files
  are huge (hundreds of MB) and binary, so git can't diff them usefully, and GitHub
  rejects files over 100 MB. Exported assets (`.png`, `.webp`, `.glb`) are fine to
  commit; the working files stay on your machine or in cloud storage.

## New terms

- **Glob pattern**: `*.psd` means "any file ending in .psd, in any folder".
- **Binary file**: a file that isn't plain text (images, 3D scenes). Git stores a full
  copy of every version, so big binaries bloat the repo forever. That's why they
  must be ignored *before* they're ever committed.

## Files involved

- `CLAUDE.md`
- `.gitignore`

## Try it yourself

1. Create an empty file `test.psd` in the project and run `git status`. It won't be
   listed, because git is ignoring it. Delete it afterwards.
2. Add a line of your own to the Conventions section of `CLAUDE.md` (e.g. a naming
   rule you like) and start a new Claude Code session. It will follow it.
