import type { MDXComponents } from "mdx/types";

// Required by @next/mdx. Components listed here are available in every .mdx
// file without importing them, and can also replace plain markdown elements
// (e.g. `h2: MyHeading`). Typography is handled by the `prose` classes on the
// write-up page, so nothing is overridden yet.
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
