import type { Metadata } from "next";
import Link from "next/link";
import { TagList } from "@/components/tag-list";
import { formatDate, getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Write-ups on what I've built and how I built it.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted">
          Write-ups on what I&apos;ve built and how I built it.
        </p>
      </header>

      <ul className="space-y-8">
        {projects.map(({ slug, meta }) => (
          <li key={slug}>
            <article className="space-y-2">
              <h2 className="text-xl font-medium">
                <Link
                  href={`/projects/${slug}`}
                  className="hover:text-accent hover:underline hover:underline-offset-4"
                >
                  {meta.title}
                </Link>
              </h2>
              <time dateTime={meta.date} className="block text-sm text-muted">
                {formatDate(meta.date)}
              </time>
              <p className="leading-relaxed">{meta.summary}</p>
              <TagList tags={meta.tags} />
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
