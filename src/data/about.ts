// Single source of truth for "about me" content. The plain About page renders
// it today; the Phase 3 terminal (`whoami`, `skills`, `timeline`) will render
// the same data, so edit it here and both versions stay in sync.
// Everything below is placeholder content: replace it with your own.

export type Profile = {
  name: string;
  handle: string; // shown as the terminal user, e.g. "a@orbit"
  tagline: string;
  location: string;
  bio: string[]; // one string per paragraph
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export const profile: Profile = {
  name: "A",
  handle: "a",
  tagline: "Illustrator studying computer engineering.",
  location: "Earth",
  bio: [
    "I draw, and I build things with code. Orbit is where those two halves meet.",
    "Placeholder bio: a couple of sentences about what you study, what you make, and what you're curious about right now.",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Art",
    skills: ["Illustration", "Inking", "Digital painting", "Blender"],
  },
  {
    category: "Code",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Engineering",
    skills: ["C", "Embedded systems", "Digital logic"],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    title: "Started building Orbit",
    description: "Learning the modern web stack by building my own site.",
  },
  {
    year: "20XX",
    title: "Started computer engineering",
    description: "Placeholder: your program and school.",
  },
  {
    year: "20XX",
    title: "Started drawing seriously",
    description: "Placeholder: when and how illustration became your thing.",
  },
];
