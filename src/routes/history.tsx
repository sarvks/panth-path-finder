import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, Panel, SourceTag } from "@/components/site/SiteChrome";
import { timeline } from "@/data/sikhism";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Sikh History — 1469 to the Present" },
      {
        name: "description",
        content:
          "A layered timeline of Sikh history: the Gurus, scripture, Khalsa, Misls, the Sikh Empire, colonial Punjab, Partition, 1984 and the global Panth.",
      },
      { property: "og:title", content: "Sikh History — 1469 to the Present" },
      {
        property: "og:description",
        content: "Five and a half centuries, layered by theme, with sourcing labelled throughout.",
      },
    ],
  }),
  component: HistoryPage,
});

const layers = ["Gurus", "Scripture", "Punjab", "Khalsa", "Empire", "Modern"] as const;

function HistoryPage() {
  const [active, setActive] = useState<string[]>([...layers]);
  const events = useMemo(
    () => timeline.filter((e) => active.includes(e.layer)).sort((a, b) => a.sort - b.sort),
    [active],
  );

  const toggle = (l: string) =>
    setActive((prev) => (prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]));

  return (
    <PageShell
      eyebrow="Timeline"
      title="Sikh history"
      gurmukhi="ਇਤਿਹਾਸ"
      lede="Switch layers on and off to read the same centuries through different threads. Politically contested periods are labelled as such and described in neutral language."
    >
      <div className="flex flex-wrap gap-2">
        {layers.map((l) => (
          <button
            key={l}
            onClick={() => toggle(l)}
            aria-pressed={active.includes(l)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active.includes(l)
                ? "border-primary/70 bg-secondary text-foreground"
                : "border-border text-muted-foreground"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="relative mt-10 border-l border-border pl-6">
        {events.map((e) => (
          <article key={`${e.year}-${e.title}`} className="relative mb-8">
            <span className="absolute -left-[31px] top-3 size-3 rounded-full bg-accent" />
            <Panel>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="font-display text-xl text-primary">{e.year}</span>
                <h2 className="text-xl">{e.title}</h2>
                <span className="ml-auto flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{e.layer}</span>
                  <SourceTag label={e.label} />
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{e.body}</p>
            </Panel>
          </article>
        ))}
        {events.length === 0 && (
          <p className="text-muted-foreground">Select at least one layer to see events.</p>
        )}
      </div>
    </PageShell>
  );
}
