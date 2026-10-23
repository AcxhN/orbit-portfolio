import Link from "next/link";
import { Suspense } from "react";
import { LiteModeToggle } from "@/components/lite-mode-toggle";
import { NavLinks } from "@/components/nav-links";
import { navItems } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-6">
        <Link href="/" className="font-mono text-lg font-semibold tracking-tight">
          <span aria-hidden="true" className="text-accent">
            ✦{" "}
          </span>
          orbit
        </Link>
        <div className="flex items-center gap-5">
          <nav aria-label="Main">
            {/*
              NavLinks reads the current URL to highlight the active page.
              Suspense lets Next.js prerender the page with plain links first
              (the fallback) if the URL isn't known yet at build time.
            */}
            <Suspense fallback={<PlainNavLinks />}>
              <NavLinks />
            </Suspense>
          </nav>
          <LiteModeToggle />
        </div>
      </div>
    </header>
  );
}

function PlainNavLinks() {
  return (
    <ul className="flex gap-5 text-sm">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="text-muted hover:text-foreground">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
