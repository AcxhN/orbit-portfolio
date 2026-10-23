# 00 — Scaffolding the project

## What I did

I ran **create-next-app** in the (empty) project folder:

```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
```

Then I renamed the package to `orbit` (`npm pkg set name=orbit`), ran
`npm run build` and `npm run lint` to check that everything works, and made the first commit.

## Why

create-next-app is the official "starter kit" generator for Next.js. Doing it by hand
would mean wiring together a dozen config files. The generator gives you a known-good
starting point that the Next.js team maintains.

## New terms

- **Node.js**: a program that runs JavaScript outside the browser. Every tool we
  use (Next.js, the build, the linter) is a Node program.
- **npm**: Node's package manager. It downloads libraries ("packages") into
  `node_modules/` and records them in `package.json`.
- **npx**: runs a package's command without installing it permanently.
  `npx create-next-app@latest` means "download the latest create-next-app and run it once".
- **Next.js**: a framework built on top of React. React gives you components;
  Next.js adds routing (URLs → pages), a build system, a dev server, server rendering,
  and image/font optimisation.
- **React**: a library for building UIs out of *components*, which are functions that
  return HTML-like markup (JSX).
- **TypeScript**: JavaScript plus *types*. You can say "this variable is a string"
  and the editor/compiler catches mistakes before you run anything. Files end in
  `.ts` / `.tsx` (`.tsx` = TypeScript + JSX markup).
- **Lint / ESLint**: a tool that reads your code and flags likely bugs and style
  problems. `npm run lint` runs it.
- **Build**: `npm run build` turns the source into optimised files ready to deploy.
  If the build passes, TypeScript found no type errors and every page rendered.

## The create-next-app options explained

| Flag | Meaning |
| --- | --- |
| `.` | Create the project in the current folder instead of a new one. |
| `--ts` | Use TypeScript instead of plain JavaScript. |
| `--tailwind` | Install and configure Tailwind CSS (see note 04). |
| `--eslint` | Install and configure ESLint. |
| `--app` | Use the **App Router** (the modern Next.js routing system, explained below). |
| `--src-dir` | Put the app code inside `src/` so it's separate from config files. |
| `--import-alias "@/*"` | Lets you write `import X from "@/components/X"` instead of `../../components/X`. `@/` means "the `src/` folder". |
| `--use-npm` | Use npm (other options are pnpm, yarn, bun). |
| `--yes` | Accept the defaults for every remaining question. |

## The App Router (in one paragraph)

In the App Router, **folders are URLs**. `src/app/page.tsx` is the page at `/`.
`src/app/about/page.tsx` would be `/about`. A file named `layout.tsx` wraps every
page below it, which is where shared things like the header and footer go.
We'll use this heavily in Phase 1.

## Files involved

- `package.json`: the project's name, its scripts (`dev`, `build`, `start`, `lint`),
  and its dependencies.
- `package-lock.json`: the *exact* versions npm installed. Commit it so every machine
  installs the same thing.
- `next.config.ts`: Next.js settings.
- `tsconfig.json`: TypeScript settings. `"strict": true` is on, which is good.
- `eslint.config.mjs`: lint rules (Next's recommended set).
- `src/app/layout.tsx`: the root layout that wraps every page.
- `src/app/page.tsx`: the home page.
- `src/app/globals.css`: global styles; it imports Tailwind.
- `AGENTS.md`: written by Next.js itself. It tells AI coding agents that this
  version of Next.js (16.x) may differ from what they remember and to read the docs in
  `node_modules/next/dist/docs/`. Handy, and it's why I checked those docs before writing MDX code.
- `.gitignore`: files git should ignore (`node_modules`, `.next` build output, `.env` secrets).

## Try it yourself

1. Run `npm run dev`, open http://localhost:3000, then edit the text in
   `src/app/page.tsx` and save. The browser updates instantly (this is "hot reload").
2. Open `package.json` and look at `"scripts"`. `npm run <name>` runs any of them.
   Try `npm run lint`.
