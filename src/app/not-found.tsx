import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">
        Lost in space
      </h1>
      <p className="text-muted">This page drifted out of orbit.</p>
      <Link href="/" className="inline-block text-accent underline underline-offset-4">
        Back home
      </Link>
    </div>
  );
}
