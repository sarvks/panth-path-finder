import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import type { SourceLabel } from "@/data/sikhism";
import { labelBlurb } from "@/data/sikhism";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/start", label: "Start Here" },
  { to: "/explore", label: "Explore" },
  { to: "/gurus", label: "Gurus" },
  { to: "/scripture", label: "Scripture" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/khalsa", label: "Khalsa" },
  { to: "/history", label: "History" },
  { to: "/langar", label: "Langar" },
  { to: "/gurmukhi", label: "Gurmukhi" },
  { to: "/questions", label: "Questions" },
  { to: "/glossary", label: "Glossary" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="gurmukhi text-2xl text-primary">ੴ</span>
          <span className="font-display text-lg tracking-tight">Sikhism</span>
        </Link>
        <nav className="ml-auto hidden flex-wrap items-center gap-x-5 gap-y-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="ml-auto rounded-md border border-border p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {open && (
        <nav className="grid grid-cols-2 gap-2 border-t border-border/60 px-5 py-4 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="gurmukhi text-3xl text-primary/80">ੴ</div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          An independent educational project. Scripture, traditional accounts, documented history and
          scholarly interpretation are labelled separately throughout. Quotations from Gurbani are never
          generated; passages are added only with cited provenance.
        </p>
      </div>
    </footer>
  );
}

export function SourceTag({ label }: { label: SourceLabel }) {
  const tone: Record<SourceLabel, string> = {
    Scriptural: "border-primary/50 text-primary",
    "Traditional Account": "border-accent/50 text-accent",
    "Historical Evidence": "border-chart-4/60 text-chart-4",
    "Scholarly Interpretation": "border-chart-3/60 text-chart-3",
    Contested: "border-destructive/60 text-destructive",
  };
  return (
    <span
      title={labelBlurb[label]}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase",
        tone[label],
      )}
    >
      {label}
    </span>
  );
}

export function PageShell({
  eyebrow,
  title,
  gurmukhi,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  gurmukhi?: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-7xl px-5 pt-14">
      <header className="animate-rise max-w-3xl">
        {eyebrow && (
          <p className="text-xs tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
        )}
        <h1 className="mt-4 text-4xl leading-tight md:text-6xl">{title}</h1>
        {gurmukhi && <p className="gurmukhi mt-3 text-2xl text-accent/80">{gurmukhi}</p>}
        {lede && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lede}</p>}
      </header>
      <div className="rule-gold my-10 h-px" />
      {children}
    </main>
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("surface-panel rounded-xl p-6", className)}>{children}</div>
  );
}
