import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Panel, SourceTag } from "@/components/site/SiteChrome";
import { gurus } from "@/data/sikhism";

export const Route = createFileRoute("/gurus/")({
  head: () => ({
    meta: [
      { title: "The Ten Sikh Gurus — Lives, Teachings and Institutions" },
      {
        name: "description",
        content:
          "Profiles of the ten Sikh Gurus from Guru Nanak to Guru Gobind Singh: chronology, teachings, institutions, places and legacy.",
      },
      { property: "og:title", content: "The Ten Sikh Gurus" },
      {
        property: "og:description",
        content: "240 years, ten Gurus, one office — and the scripture that inherited it.",
      },
    ],
  }),
  component: GurusIndex,
});

function GurusIndex() {
  return (
    <PageShell
      eyebrow="Guru tradition"
      title="The Ten Gurus"
      gurmukhi="ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ"
      lede="One office held by ten people across 240 years, then conferred permanently on the Guru Granth Sahib. Each life reshaped the community's institutions."
    >
      <div className="relative border-l border-border pl-6">
        {gurus.map((g) => (
          <article key={g.slug} className="relative mb-10">
            <span className="absolute -left-[31px] top-2 size-3 rounded-full bg-primary" />
            <Link to="/gurus/$slug" params={{ slug: g.slug }} className="group block">
              <Panel className="transition-colors group-hover:border-primary/60">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="font-display text-primary">{String(g.order).padStart(2, "0")}</span>
                  <h2 className="text-2xl">{g.name}</h2>
                  <span className="gurmukhi text-accent">{g.gurmukhi}</span>
                  <span className="text-sm text-muted-foreground">{g.years}</span>
                  <span className="ml-auto">
                    <SourceTag label={g.label} />
                  </span>
                </div>
                <p className="mt-1 text-sm tracking-wide text-accent/80 uppercase">{g.epithet}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{g.summary}</p>
              </Panel>
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
