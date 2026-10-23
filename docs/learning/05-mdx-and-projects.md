# 05 — MDX setup and the Projects index

## What I did

- Installed `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx`, and
  `@tailwindcss/typography`.
- Wrapped the Next config with `createMDX()` in `next.config.ts`.
- Added `src/mdx-components.tsx` (required by `@next/mdx` in the App Router).
- Write-ups live in `src/content/projects/*.mdx`. Each exports its metadata:

  ```mdx
  export const metadata = {
    title: "Building Orbit, Part 0: Setup",
    date: "2026-10-22",
    summary: "…",
    tags: ["orbit", "nextjs"],
  };

  The actual write-up in **markdown**…
  ```

- `src/lib/projects.ts` finds the files, loads them, checks the metadata, and sorts newest first.
- `/projects` lists all write-ups; `/projects/[slug]` renders one.
- Added a custom 404 page (`src/app/not-found.tsx`).

## New terms

- **Markdown**: plain-text formatting. `# Heading`, `**bold**`, `- list item`,
  `[link](https://…)`.
- **MDX**: Markdown that can also contain JSX, so you can drop a React component into the
  middle of a write-up, like `<OrbitCounter />` (see note 06). Later this is how 3D model
  viewers or before/after sliders can live inside write-ups.
- **Frontmatter**: metadata at the top of a content file. Many blogs use a YAML block
  between `---` lines. `@next/mdx` doesn't support that out of the box, but it does
  support JavaScript `export`s, so we use `export const metadata = {…}`. It serves the
  same purpose without an extra plugin.
- **Slug**: the URL-friendly name of a page. Here it's the file name:
  `building-orbit-part-0-setup.mdx` → `/projects/building-orbit-part-0-setup`.
- **Dynamic route**: a folder name in square brackets, `[slug]`, matches any value.
  The page receives it through `params`.
- **`generateStaticParams`**: tells Next.js which slugs exist, so it can build each
  write-up into static HTML at build time. That makes them instant to load.
- **`async` / `await`**: some operations (like loading a file) take time. `await` waits
  for the result. Server components can be `async`, but client components can't.
- **Typography plugin / `prose`**: markdown becomes bare HTML (`<h2>`, `<p>`, `<ul>`).
  The `prose prose-invert` classes give all of it nice default styling for a dark background.

## How the pieces connect

1. `getProjectSlugs()` lists `.mdx` files with Node's `fs` (file system) module.
   This only runs on the server/at build time.
2. `getProject(slug)` does `await import(\`@/content/projects/${slug}.mdx\`)`. The
   module's `default` export is the rendered write-up (a React component), and
   `metadata` is the object you exported.
3. `checkMeta()` validates the metadata. TypeScript can't see inside `.mdx` files, so
   a typo like `tittle` would otherwise silently show "undefined". Now the build fails
   with a message telling you which file and what's expected.

## Next.js 16 / Cache Components gotchas (for future me)

- `export const dynamicParams = false` is **not allowed** with Cache Components. Unknown
  slugs are handled by calling `notFound()` when `getProject()` returns `null`.
- `generateStaticParams` must return **at least one** slug, so the projects folder must never be empty.
- Visiting an unknown slug shows the 404 page (with a `noindex` tag so search engines
  skip it), but the HTTP status is **200**, not 404. That's because the page streams:
  the static shell is already sent before the code discovers the slug doesn't exist.
  It's documented Next.js behavior and harmless for visitors.

## Files involved

- `next.config.ts`, `src/mdx-components.tsx`, `src/app/globals.css` (the `@plugin` line)
- `src/lib/projects.ts`
- `src/app/projects/page.tsx`, `src/app/projects/[slug]/page.tsx`
- `src/components/tag-list.tsx`, `src/app/not-found.tsx`
- `src/content/projects/*.mdx`

## Try it yourself

1. Copy `building-orbit-part-0-setup.mdx` to `hello.mdx`, change its title and date,
   run `npm run dev`, and open `/projects`. Your new post appears (sorted by date).
2. In your copy, delete the `summary` line and run `npm run build`. Read the error
   message from `checkMeta`, then put it back.
