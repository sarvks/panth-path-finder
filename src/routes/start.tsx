import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Panel } from "@/components/site/SiteChrome";
import { concepts } from "@/data/sikhism";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Start Here — A Beginner's Guide to Sikhism" },
      {
        name: "description",
        content:
          "A clear beginner's introduction to Sikhism: who is a Sikh, Ik Oankar, the Gurus, the Khalsa, langar, the gurdwara and Sikh identity today.",
      },
      { property: "og:title", content: "Start Here — A Beginner's Guide to Sikhism" },
      {
        property: "og:description",
        content: "From zero knowledge to a working understanding of Sikh belief, practice and history.",
      },
    ],
  }),
  component: StartPage,
});

const steps = [
  {
    h: "What is Sikhism?",
    p: "A religion that began in fifteenth-century Punjab with Guru Nanak and developed through ten Gurus over roughly 240 years. It teaches one formless Reality present in all creation, and a life of remembrance, honest earning and sharing — lived in society, not apart from it.",
  },
  {
    h: "Who is a Sikh?",
    p: "'Sikh' means learner. In common usage it names someone who believes in one Reality, the ten Gurus, the Guru Granth Sahib and the teachings of the Gurus, and who follows no other religion. Practice varies widely: some are initiated into the Khalsa, many are not.",
  },
  {
    h: "Where did it begin?",
    p: "In the Punjab, a region of five rivers now divided between India and Pakistan, in a setting shaped by Hindu devotional movements, Islamic and Sufi thought, and the politics of the Delhi Sultanate and then the Mughal Empire.",
  },
  {
    h: "What is a Guru?",
    p: "In Sikh usage, the Guru is the one who reveals — the light that dispels ignorance. Ten human Gurus carried this office, after which Guru Gobind Singh vested it permanently in the scripture, the Guru Granth Sahib, and in the collective Panth.",
  },
  {
    h: "How do Sikhs practise?",
    p: "Daily Nitnem prayers, simran, kirtan in sangat, seva, and langar. The gurdwara is the shared centre, but the tradition insists that the real test is honest work, family life and treatment of others.",
  },
  {
    h: "What is the Khalsa?",
    p: "The initiated collective founded by Guru Gobind Singh in 1699 — with Amrit initiation, the names Singh and Kaur, the Five Ks and the Rehat code. It gives Sikh identity a visible, disciplined form.",
  },
  {
    h: "Why turbans and uncut hair?",
    p: "The dastaar and kes express dignity, commitment and identity in public. They are not disguises or ornaments; for many Sikhs they are a covenant kept at real social cost, including in countries where they attract discrimination.",
  },
  {
    h: "Sikh identity today",
    p: "Around 25–30 million Sikhs live worldwide. Punjab remains the historical heart, but Sikh communities are established across Britain, Canada, the United States, Australia, East Africa and Southeast Asia, with distinct local histories.",
  },
];

function StartPage() {
  return (
    <PageShell
      eyebrow="Beginner's guide"
      title="Start here"
      gurmukhi="ਸਿੱਖੀ ਦੀ ਸ਼ੁਰੂਆਤ"
      lede="Eight short steps from no knowledge to a working understanding. Nothing here assumes you belong to any religion."
    >
      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.h}>
            <Panel className="h-full">
              <span className="font-display text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-2xl">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>
            </Panel>
          </li>
        ))}
      </ol>

      <h2 className="mt-16 text-3xl">Twelve words worth knowing</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {concepts.slice(0, 12).map((c) => (
          <Panel key={c.slug} className="p-5">
            <div className="flex items-baseline gap-3">
              <span className="gurmukhi text-xl text-accent">{c.gurmukhi}</span>
              <span className="font-display text-lg">{c.term}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link to="/gurus" className="rounded-md bg-primary px-6 py-3 text-sm text-primary-foreground">
          Meet the ten Gurus →
        </Link>
        <Link to="/questions" className="rounded-md border border-border px-6 py-3 text-sm">
          Common questions
        </Link>
      </div>
    </PageShell>
  );
}
