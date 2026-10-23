import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TagList } from "@/components/tag-list";
import { formatDate, getProject, getProjectSlugs } from "@/lib/projects";

// Prerender one page per .mdx file at build time.
export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return { title: project.meta.title, description: project.meta.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const { meta, Content } = project;

  return (
    <article className="space-y-8">
      <header className="space-y-3 border-b border-border pb-6">
        <Link href="/projects" className="text-sm text-muted hover:text-foreground">
          <span aria-hidden="true">←</span> All projects
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {meta.title}
        </h1>
        <time dateTime={meta.date} className="block text-sm text-muted">
          {formatDate(meta.date)}
        </time>
        <TagList tags={meta.tags} />
      </header>

      {/* `prose` (from @tailwindcss/typography) styles the markdown's plain HTML. */}
      <div className="prose prose-invert max-w-none prose-a:text-accent prose-code:before:content-none prose-code:after:content-none">
        <Content />
      </div>
    </article>
  );
}
