import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Panel, SourceTag } from "@/components/site/SiteChrome";
import { gurus } from "@/data/sikhism";

export const Route = createFileRoute("/gurus/$slug")({
  loader: ({ params }) => {
    const guru = gurus.find((g) => g.slug === params.slug);
    if (!guru) throw notFound();
    return { guru };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { guru } = loaderData;
    const description = `${guru.name} (${guru.years}): teachings, institutions, places and legacy in Sikh history.`;
    return {
      meta: [
        { title: `${guru.name} — Sikh Guru ${guru.order}` },
        { name: "description", content: description },
        { property: "og:title", content: `${guru.name} — Sikh Guru ${guru.order}` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: GuruDetail,
});

function GuruDetail() {
  const { guru } = Route.useLoaderData();
  const prev = gurus.find((g) => g.order === guru.order - 1);
  const next = gurus.find((g) => g.order === guru.order + 1);

  return (
    <PageShell
      eyebrow={`Guru ${guru.order} · ${guru.epithet}`}
      title={guru.name}
      gurmukhi={guru.gurmukhi}
      lede={guru.summary}
    >
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <SourceTag label={guru.label} />
        <span className="text-sm text-muted-foreground">Lifespan {guru.years}</span>
        <span className="text-sm text-muted-foreground">Guruship {guru.guruship}</span>
        <span className="text-sm text-muted-foreground">~4 min read</span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Panel>
          <h2 className="text-xl">Teachings</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {guru.teachings.map((t) => (
              <li key={t} className="border-l border-primary/50 pl-3">
                {t}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <h2 className="text-xl">Institutions</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {guru.institutions.map((t) => (
              <li key={t} className="border-l border-accent/50 pl-3">
                {t}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <h2 className="text-xl">Places</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {guru.places.map((t) => (
              <li key={t} className="border-l border-border pl-3">
                {t}
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="mt-6">
        <h2 className="text-xl">Legacy</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{guru.legacy}</p>
      </Panel>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Where community narrative and documented history differ — particularly in janamsakhi material —
        this site labels them separately rather than blending them.
      </p>

      <nav className="mt-12 flex justify-between gap-4 text-sm">
        {prev ? (
          <Link to="/gurus/$slug" params={{ slug: prev.slug }} className="text-primary">
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/gurus/$slug" params={{ slug: next.slug }} className="text-primary">
            {next.name} →
          </Link>
        ) : (
          <Link to="/khalsa" className="text-primary">
            The Khalsa →
          </Link>
        )}
      </nav>
    </PageShell>
  );
}
