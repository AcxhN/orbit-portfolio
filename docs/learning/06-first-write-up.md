# 06 — The first write-up and an embedded component

## What I did

- Wrote "Building Orbit, Part 0: Setup" in
  `src/content/projects/building-orbit-part-0-setup.mdx`. It covers WSL, nvm/Node,
  git/gh, Claude Code, create-next-app, CLAUDE.md, GitHub, and Vercel in plain language.
  It's written in first person as you, so edit it freely to match your voice.
- Built `OrbitCounter` (`src/components/mdx/orbit-counter.tsx`): a planet you can add
  moons to (up to 8), embedded in the middle of the write-up.

## How embedding works

At the top of the `.mdx` file:

```mdx
import { OrbitCounter } from "@/components/mdx/orbit-counter";
```

…and then anywhere in the text, on its own line:

```mdx
<OrbitCounter />
```

The MDX compiler turns the whole file into a React component, so a component tag in
the middle is just more JSX.

## Concepts in the component

- **`"use client"`**: it needs a click handler and state, so it must be a client
  component. The write-up page around it stays a server component; only this widget's
  JavaScript is sent to the browser. This pattern is called an "island" of interactivity.
- **`useState`**: `const [moons, setMoons] = useState(1)` creates a value React
  remembers between renders. Calling `setMoons(…)` changes it and React re-draws the component.
- **SVG**: vector graphics written as markup (`<circle r="12" />`). The moons' positions
  come from a bit of trigonometry: they're spaced evenly around the circle using `cos`/`sin`.
- **`motion-safe:`**: a Tailwind prefix meaning "only when the user hasn't asked for
  reduced motion". The spin animation simply doesn't run for people with that OS setting.
- **`not-prose`**: opts the widget out of the typography styles that the article text uses.
- **Accessibility**: the SVG has `role="img"` and an `aria-label` that updates with the
  moon count, and the sentence uses `aria-live="polite"` so screen readers announce changes.
  The "Add a moon" button is `disabled` at the max.

## Files involved

- `src/content/projects/building-orbit-part-0-setup.mdx`
- `src/components/mdx/orbit-counter.tsx`

## Try it yourself

1. Change `MAX_MOONS` to 12 or the spin duration in `animate-[spin_12s_linear_infinite]`
   to `4s`, then reload the write-up in `npm run dev`.
2. Add a paragraph with a markdown link and a bullet list to the write-up and see how
   the `prose` styles render them.
