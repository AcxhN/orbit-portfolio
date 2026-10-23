"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-5 text-sm">
      {navItems.map((item) => {
        // "/projects/some-post" should still highlight "Projects".
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "text-foreground underline decoration-accent decoration-2 underline-offset-8"
                  : "text-muted hover:text-foreground"
              }
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
