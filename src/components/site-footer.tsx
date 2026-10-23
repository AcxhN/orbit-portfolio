export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-muted sm:px-6">
        <p>Orbit is a permanent work in progress.</p>
        <a
          href="https://github.com/AcxhN/orbit-portfolio"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Source on GitHub
        </a>
      </div>
    </footer>
  );
}
