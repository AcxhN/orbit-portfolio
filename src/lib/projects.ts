import fs from "node:fs";
import path from "node:path";
import type { MDXContent } from "mdx/types";

// Every write-up is an .mdx file in this folder. The file name is the URL slug:
// src/content/projects/my-post.mdx  →  /projects/my-post
const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

// The fields each .mdx file must export as `export const metadata = { ... }`.
export type ProjectMeta = {
  title: string;
  date: string; // ISO format, e.g. "2026-10-22"
  summary: string;
  tags: string[];
};

export type Project = {
  slug: string;
  meta: ProjectMeta;
  Content: MDXContent;
};

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

// Returns the write-up, or null if there's no .mdx file with that slug.
export async function getProject(slug: string): Promise<Project | null> {
  let mdxModule: { default: MDXContent; metadata?: unknown };
  try {
    mdxModule = await import(`@/content/projects/${slug}.mdx`);
  } catch {
    return null;
  }

  return {
    slug,
    meta: checkMeta(slug, mdxModule.metadata),
    Content: mdxModule.default,
  };
}

// All write-ups, newest first.
export async function getAllProjects(): Promise<Project[]> {
  const projects = await Promise.all(getProjectSlugs().map(getProject));
  return projects
    .filter((project) => project !== null)
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// MDX exports aren't type-checked, so check the metadata at build time and
// fail with a clear message if a field is missing.
function checkMeta(slug: string, meta: unknown): ProjectMeta {
  const m = (meta ?? {}) as Partial<ProjectMeta>;
  const ok =
    typeof m.title === "string" &&
    typeof m.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(m.date) &&
    typeof m.summary === "string" &&
    Array.isArray(m.tags);
  if (!ok) {
    throw new Error(
      `${slug}.mdx needs: export const metadata = { title, date: "YYYY-MM-DD", summary, tags: [] }`,
    );
  }
  return m as ProjectMeta;
}
