import Link from "next/link";

const sections = [
  {
    href: "/projects",
    title: "Projects",
    description: "Write-ups on what I've built and how I built it.",
  },
  {
    href: "/about",
    title: "About",
    description: "Who I am, what I work with, and where I've been.",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="font-mono text-sm text-accent">hello, world</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m A.
        </h1>
        <p className="max-w-prose text-lg leading-relaxed text-muted">
          I&apos;m an illustrator studying computer engineering. Orbit is my
          portfolio, my creative playground, and the place where I document how
          I build things. It&apos;s a permanent work in progress.
        </p>
      </section>

      <section aria-labelledby="explore-heading">
        <h2 id="explore-heading" className="sr-only">
          Explore
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {sections.map((section) => (
            <li key={section.href}>
              <Link
                href={section.href}
                className="block h-full rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="text-lg font-medium">
                  {section.title} <span aria-hidden="true">→</span>
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {section.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
