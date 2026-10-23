// Shared by the server-rendered header and the client-side NavLinks.
// It lives in its own plain module because values exported from a
// "use client" file can't be used directly by server components.
export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];
