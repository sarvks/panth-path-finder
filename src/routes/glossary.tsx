import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, Panel } from "@/components/site/SiteChrome";
import { glossary, concepts } from "@/data/sikhism";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Sikh Glossary — Terms in Gurmukhi and English" },
      {
        name: "description",
        content:
          "A searchable glossary of Sikh terms: Akal Purakh, Amrit, Ardas, Gurbani, Gurdwara, Hukam, Kaur, Khalsa, Langar, Naam, Panth, Rehat, Seva and more.",
      },
      { property: "og:title", content: "Sikh Glossary" },
      {
        property: "og:description",
        content: "Sikh vocabulary in Gurmukhi and English, defined plainly and cross-linked.",
      },
    ],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  const [q, setQ] = useState("");
  const entries = useMemo(() => {
    const merged = [
      ...glossary,
      ...concepts.map((c) => ({ term: c.term, gurmukhi: c.gurmukhi, def: c.short })),
    ].sort((a, b) => a.term.localeCompare(b.term));
    const needle = q.trim().toLowerCase();
    return needle
      ? merged.filter(
          (e) => e.term.toLowerCase().includes(needle) || e.def.toLowerCase().includes(needle),
        )
      : merged;
  }, [q]);

  return (
    <PageShell
      eyebrow="Reference"
      title="Glossary"
      gurmukhi="ਸ਼ਬਦਾਵਲੀ"
      lede="Sikh vocabulary carries meanings that English translations flatten. Search by term or by definition; transliteration spellings vary widely."
    >
      <label className="block max-w-md">
        <span className="sr-only">Search glossary</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search terms — hukam, kirpan, sangat…"
          className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </label>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((e) => (
          <Panel key={e.term} className="p-5">
            <div className="flex items-baseline gap-3">
              <span className="gurmukhi text-xl text-accent">{e.gurmukhi}</span>
              <span className="font-display text-lg">{e.term}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{e.def}</p>
          </Panel>
        ))}
      </div>
      {entries.length === 0 && (
        <p className="mt-8 text-muted-foreground">No entries match “{q}”.</p>
      )}
    </PageShell>
  );
}
