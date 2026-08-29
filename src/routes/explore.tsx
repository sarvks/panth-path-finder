import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Panel } from "@/components/site/SiteChrome";
import { knowledgeMap } from "@/data/sikhism";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — The Sikhism Knowledge Map" },
      {
        name: "description",
        content:
          "Zoom into the branches of Sikh knowledge: foundations, philosophy, scripture, the Guru tradition, Khalsa, history, practice, language and culture.",
      },
      { property: "og:title", content: "Explore — The Sikhism Knowledge Map" },
      {
        property: "og:description",
        content: "A branching map of Sikh thought, history and practice. Every node opens another path.",
      },
    ],
  }),
  component: ExplorePage,
});

function ExplorePage() {
  const [active, setActive] = useState(0);
  const branch = knowledgeMap[active] ?? knowledgeMap[0]!;

  return (
    <PageShell
      eyebrow="Knowledge map"
      title="Explore"
      gurmukhi="ਖੋਜ"
      lede="Sikh knowledge is not a folder tree. Choose a branch; each node links onward to concepts, people, places, scripture and events."
    >
      <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
        <nav className="flex flex-wrap gap-2 lg:flex-col">
          {knowledgeMap.map((b, i) => (
            <button
              key={b.title}
              onClick={() => setActive(i)}
              className={`rounded-md border px-4 py-2 text-left text-sm transition-colors ${
                i === active
                  ? "border-primary/70 bg-secondary text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {b.title}
            </button>
          ))}
        </nav>

        <div>
          <Panel>
            <h2 className="text-3xl">{branch.title}</h2>
            <p className="mt-3 text-muted-foreground">{branch.blurb}</p>
            <svg viewBox="0 0 600 220" className="mt-8 h-52 w-full" role="img" aria-label={`${branch.title} branch diagram`}>
              <circle cx="60" cy="110" r="8" fill="var(--primary)" />
              {branch.nodes.map((n, i) => {
                const y = 24 + (i * 172) / Math.max(branch.nodes.length - 1, 1);
                return (
                  <g key={n}>
                    <path
                      className="animate-draw"
                      d={`M68 110 C 200 110, 260 ${y}, 340 ${y}`}
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth="1.5"
                    />
                    <circle cx="344" cy={y} r="3.5" fill="var(--accent)" />
                    <text x="356" y={y + 4} fill="var(--muted-foreground)" fontSize="12">
                      {n}
                    </text>
                  </g>
                );
              })}
            </svg>
            <Link
              to={branch.to}
              className="mt-4 inline-block rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground"
            >
              Open {branch.title} →
            </Link>
          </Panel>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {branch.nodes.map((n) => (
              <Panel key={n} className="p-4 text-sm text-muted-foreground">
                {n}
              </Panel>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
