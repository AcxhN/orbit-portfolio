import type { Metadata } from "next";
import { profile, skillGroups, timeline } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: profile.tagline,
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-lg text-muted">{profile.tagline}</p>
      </header>

      <section aria-labelledby="bio-heading" className="space-y-4">
        <h2 id="bio-heading" className="text-xl font-medium">
          Bio
        </h2>
        {profile.bio.map((paragraph) => (
          <p key={paragraph} className="max-w-prose leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      <section aria-labelledby="skills-heading" className="space-y-4">
        <h2 id="skills-heading" className="text-xl font-medium">
          Skills
        </h2>
        <dl className="grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <dt className="font-mono text-sm text-accent">{group.category}</dt>
              <dd className="mt-2">
                <ul className="space-y-1">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="timeline-heading" className="space-y-4">
        <h2 id="timeline-heading" className="text-xl font-medium">
          Timeline
        </h2>
        <ol className="space-y-6 border-l border-border pl-6">
          {timeline.map((entry) => (
            <li key={`${entry.year}-${entry.title}`}>
              <p className="font-mono text-sm text-accent">{entry.year}</p>
              <h3 className="font-medium">{entry.title}</h3>
              <p className="text-muted">{entry.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
