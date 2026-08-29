import { createFileRoute, Link } from "@tanstack/react-router";
import { knowledgeMap, concepts, gurus } from "@/data/sikhism";
import { Panel } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sikhism — An Interactive Knowledge Universe" },
      {
        name: "description",
        content:
          "Explore Sikhism: the ten Gurus, Guru Granth Sahib, philosophy, Khalsa, history, Punjab, language and the global Panth — sourced and clearly labelled.",
      },
      { property: "og:title", content: "Sikhism — An Interactive Knowledge Universe" },
      {
        property: "og:description",
        content:
          "From Ik Oankar to the global Panth: scripture, history, philosophy, music and culture in one explorable map.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  "One Reality",
  "Naam",
  "Hukam",
  "Seva",
  "Simran",
  "Equality",
  "Justice",
  "Compassion",
  "Courage",
  "Community",
];

const doors = [
  { to: "/start", title: "Start Here", note: "For complete beginners" },
  { to: "/explore", title: "Explore", note: "Free-form discovery" },
  { to: "/scripture", title: "Scripture", note: "Guru Granth Sahib and beyond" },
  { to: "/history", title: "History", note: "1469 to the present" },
  { to: "/gurus", title: "People", note: "The Gurus and after" },
  { to: "/gurmukhi", title: "Language", note: "Gurmukhi and Punjabi" },
  { to: "/langar", title: "Practice", note: "Langar, seva, gurdwara" },
  { to: "/questions", title: "Questions", note: "Honest, nuanced answers" },
];

function Home() {
  const day = new Date().getUTCDate();
  const daily = {
    concept: concepts[day % concepts.length]!,
    guru: gurus[day % gurus.length]!,
  };

  return (
    <main>
      <section className="hero-dawn relative overflow-hidden">
        <div
          aria-hidden
          className="animate-drift absolute -top-32 -right-24 size-[34rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-saffron)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
          <p className="gurmukhi animate-onkar text-7xl text-primary md:text-8xl">ੴ</p>
          <h1 className="animate-rise mt-8 text-6xl leading-[0.95] tracking-tight md:text-[8rem]">
            SIKHISM
          </h1>
          <p className="animate-rise mt-4 text-sm tracking-[0.4em] text-accent uppercase">
            Ik Oankar — one Reality
          </p>
          <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A path taught by ten Gurus and held in a living scripture: remembrance of one Reality,
            honest work, and a table where everyone sits in the same row. Enter anywhere — every idea
            opens another path.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/start"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start Here
            </Link>
            <Link
              to="/explore"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Explore the knowledge map
            </Link>
          </div>
          <ul className="mt-16 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {pillars.map((p, i) => (
              <li
                key={p}
                className="animate-rise border-l border-border pl-3"
                style={{ animationDelay: `${120 * i}ms` }}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl md:text-4xl">Eight doors in</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {doors.map((d) => (
            <Link key={d.to} to={d.to} className="group">
              <Panel className="h-full transition-colors group-hover:border-primary/60">
                <p className="font-display text-xl">{d.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
                <span className="mt-6 block text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Enter →
                </span>
              </Panel>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <h2 className="text-3xl md:text-4xl">The knowledge map</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Branches, not folders. Each node connects to concepts, people, places, scripture and events.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {knowledgeMap.map((b) => (
            <Link key={b.title} to={b.to} className="group">
              <Panel className="h-full transition-colors group-hover:border-accent/60">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-2xl">{b.title}</p>
                  <span className="text-sm text-primary">→</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{b.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.nodes.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </Panel>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl md:text-4xl">Discover Sikhism today</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Panel>
            <p className="text-xs tracking-[0.25em] text-primary uppercase">Concept</p>
            <p className="gurmukhi mt-4 text-3xl text-accent">{daily.concept.gurmukhi}</p>
            <p className="font-display mt-2 text-2xl">{daily.concept.term}</p>
            <p className="mt-3 text-muted-foreground">{daily.concept.body}</p>
            <Link to="/philosophy" className="mt-5 inline-block text-sm text-primary">
              More philosophy →
            </Link>
          </Panel>
          <Panel>
            <p className="text-xs tracking-[0.25em] text-primary uppercase">Guru</p>
            <p className="gurmukhi mt-4 text-3xl text-accent">{daily.guru.gurmukhi}</p>
            <p className="font-display mt-2 text-2xl">{daily.guru.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{daily.guru.years}</p>
            <p className="mt-3 text-muted-foreground">{daily.guru.summary}</p>
            <Link
              to="/gurus/$slug"
              params={{ slug: daily.guru.slug }}
              className="mt-5 inline-block text-sm text-primary"
            >
              Read the profile →
            </Link>
          </Panel>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="font-display text-3xl leading-snug md:text-5xl">
          One Reality. Many lives.
          <br />
          <span className="text-gradient-saffron">Truthful living.</span>
          <br />
          Service without hierarchy.
          <br />
          Courage without hatred.
          <br />
          Humanity without caste.
        </p>
        <Link
          to="/explore"
          className="mt-10 inline-block rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground"
        >
          Explore Sikhism →
        </Link>
      </section>
    </main>
  );
}
