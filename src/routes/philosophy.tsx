import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Panel } from "@/components/site/SiteChrome";
import { concepts } from "@/data/sikhism";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Sikh Philosophy — Naam, Hukam, Haumai and Liberation" },
      {
        name: "description",
        content:
          "A concept library of Sikh thought: Ik Oankar, Naam, Hukam, Haumai, Maya, Jivan Mukti, Miri-Piri, Sant-Sipahi and how they connect.",
      },
      { property: "og:title", content: "Sikh Philosophy" },
      {
        property: "og:description",
        content: "The core concepts of Sikh thought, and the links between them.",
      },
    ],
  }),
  component: PhilosophyPage,
});

function PhilosophyPage() {
  const [openSlug, setOpenSlug] = useState(concepts[0]!.slug);
  const open = concepts.find((c) => c.slug === openSlug) ?? concepts[0]!;

  return (
    <PageShell
      eyebrow="Philosophy"
      title="A concept library"
      gurmukhi="ਦਰਸ਼ਨ"
      lede="Sikh thought is worked out in poetry rather than treatises. These concepts recur throughout the Guru Granth Sahib and hold each other up — select one to follow its threads."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
        <div className="grid gap-3 sm:grid-cols-2">
          {concepts.map((c) => (
            <button
              key={c.slug}
              onClick={() => setOpenSlug(c.slug)}
              className={`surface-panel rounded-xl p-5 text-left transition-colors ${
                c.slug === openSlug ? "border-primary/70" : "hover:border-accent/50"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="gurmukhi text-xl text-accent">{c.gurmukhi}</span>
                <span className="font-display text-lg">{c.term}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
            </button>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Panel>
            <span className="gurmukhi text-4xl text-primary">{open.gurmukhi}</span>
            <h2 className="mt-3 text-3xl">{open.term}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{open.body}</p>
            <p className="mt-6 text-xs tracking-[0.2em] text-primary uppercase">Connects to</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {open.related.map((r) => {
                const target = concepts.find((c) => c.slug === r);
                return target ? (
                  <button
                    key={r}
                    onClick={() => setOpenSlug(r)}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  >
                    {target.term}
                  </button>
                ) : (
                  <span
                    key={r}
                    className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {r}
                  </span>
                );
              })}
            </div>
          </Panel>
        </aside>
      </div>

      <Panel className="mt-12">
        <h2 className="text-2xl">On comparison</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Sikh vocabulary overlaps with Hindu, Islamic, Sufi, Bhakti and Nath traditions, and comparison is
          academically useful. It becomes distorting when it treats Sikh thought as derivative — a synthesis
          assembled from neighbours. The Gurus engaged those traditions critically and arrived at their own
          positions on the divine, the self, ritual, caste and social order.
        </p>
      </Panel>
    </PageShell>
  );
}
