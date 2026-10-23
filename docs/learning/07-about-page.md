# 07 — About page backed by typed data

## What I did

- `src/data/about.ts` holds your profile, skill groups, and timeline as typed data
  (all placeholders for now).
- `src/app/about/page.tsx` renders that data as a plain page with Bio, Skills, and
  Timeline sections.

## Why separate data from the page

In Phase 3, About becomes a terminal where you type `whoami`, `skills`, `timeline`.
If the content lived inside the page's markup, you'd have to write it twice and keep both
copies in sync. Instead, both the plain page and the terminal will **import the same
data** and just display it differently. This is called separating *content* from *presentation*.
It also keeps the plain 2D version working no matter what happens to the fancy one.

## New terms

- **`type`**: a TypeScript description of a data shape. `TimelineEntry` says every entry
  has a `year`, `title`, and `description`, all strings. If you forget a field or misspell
  one, the editor underlines it in red and `npm run build` fails, so mistakes get caught before visitors see them.
- **`SkillGroup[]`**: the `[]` means "an array of SkillGroup".
- **`<dl>` / `<dt>` / `<dd>`**: an HTML "description list" (term + details), which is the
  semantically correct element for "category → skills".
- **`<ol>`**: an *ordered* list. The timeline's order matters, so it's `ol` rather than `ul`.
- **`aria-labelledby`**: names each `<section>` after its heading so screen readers
  can list the page's regions.

## Files involved

- `src/data/about.ts`
- `src/app/about/page.tsx`

## Try it yourself

1. Replace the placeholders in `src/data/about.ts` with your real bio and timeline.
2. Add a `links` field to `Profile` (e.g. `links: { label: string; href: string }[]`).
   TypeScript will immediately complain that `profile` is missing it. Fill it in, then
   render the links on the About page.
