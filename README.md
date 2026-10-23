# Orbit

My personal website: part portfolio, part creative playground, and a documentation hub
with write-ups on each project and how I built it. I'm a computer engineering student,
and Orbit is a permanent work in progress.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and MDX. A 3D galaxy home
(React Three Fiber) is planned, but a plain 2D version of every page always works,
with a lite mode and support for reduced motion.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

- `src/app/`: pages (folders are URLs)
- `src/content/projects/`: write-ups as `.mdx` files
- `src/data/about.ts`: About page content
- `docs/learning/`: notes on how the site was built
