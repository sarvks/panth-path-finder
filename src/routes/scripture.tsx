import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SourceTag } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/scripture")({
  head: () => ({
    meta: [
      { title: "Guru Granth Sahib and Sikh Scripture" },
      {
        name: "description",
        content:
          "The Guru Granth Sahib: compilation, structure, 1430 angs, ragas, Bhagat Bani and themes — plus Dasam Granth, Janamsakhis and Rehat literature.",
      },
      { property: "og:title", content: "Guru Granth Sahib and Sikh Scripture" },
      {
        property: "og:description",
        content: "How Sikh scripture was compiled, how it is organised musically, and who speaks within it.",
      },
    ],
  }),
  component: ScripturePage,
});

const facts = [
  { k: "1430", v: "Angs (pages) in the standard printed edition" },
  { k: "31", v: "Principal ragas organising the text" },
  { k: "6", v: "Gurus whose compositions are included" },
  { k: "15", v: "Bhagats, from varied castes and faiths" },
  { k: "11", v: "Bhatt poets" },
  { k: "1604", v: "Adi Granth compiled by Guru Arjan" },
];

const themes = [
  ["Naam", "Presence held in attention"],
  ["Hukam", "The order one aligns with"],
  ["Haumai", "The self that separates"],
  ["Liberation", "Freedom while living"],
  ["Equality", "No caste before the divine"],
  ["Separation & Union", "The longing of viraha"],
  ["Death", "Impermanence without despair"],
  ["Justice", "Truth over power"],
];

const otherTexts = [
  {
    t: "Dasam Granth",
    d: "A collection associated with Guru Gobind Singh, containing devotional, narrative and mythological material. Authorship of specific sections is debated by scholars and within the community.",
    l: "Contested" as const,
  },
  {
    t: "Janamsakhis",
    d: "Narrative life-accounts of Guru Nanak compiled from the seventeenth century onward. Devotionally central; historically they must be read critically alongside other evidence.",
    l: "Traditional Account" as const,
  },
  {
    t: "Varan of Bhai Gurdas",
    d: "Early exposition of Sikh teaching, traditionally described as a key to the Guru Granth Sahib. Not part of the scriptural canon.",
    l: "Historical Evidence" as const,
  },
  {
    t: "Rehatnamas",
    d: "Codes of Khalsa conduct of varying date and authority, culminating in the modern Sikh Rehat Maryada.",
    l: "Scholarly Interpretation" as const,
  },
  {
    t: "Gurbilas & Prakash literature",
    d: "Later historical-poetic works such as Suraj Prakash and Panth Prakash — valuable, but written long after the events they narrate.",
    l: "Scholarly Interpretation" as const,
  },
];

function ScripturePage() {
  return (
    <PageShell
      eyebrow="Scripture"
      title="Guru Granth Sahib"
      gurmukhi="ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ"
      lede="Not a book about the Guru but the Guru itself: a scripture of poetry set to music, compiled by Guru Arjan in 1604 and given permanent Guruship in 1708."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((f) => (
          <Panel key={f.k} className="p-5">
            <p className="font-display text-4xl text-primary">{f.k}</p>
            <p className="mt-1 text-sm text-muted-foreground">{f.v}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Panel>
          <h2 className="text-2xl">How it is organised</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            After the opening Japji Sahib, the scripture is arranged not by author or topic but by raga —
            the musical mode in which each composition is to be sung. Within a raga, compositions are
            ordered by poetic form and then by author. The organising logic is musical and devotional:
            meaning is meant to arrive through sound.
          </p>
        </Panel>
        <Panel>
          <h2 className="text-2xl">Who speaks in it</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Alongside six Gurus, the scripture includes Bhagats such as Kabir, Ravidas, Namdev, Farid and
            Dhanna — figures of different castes and religious backgrounds, including Muslims and those
            excluded as untouchable. Their inclusion is a theological statement about who may speak truth.
          </p>
        </Panel>
      </div>

      <h2 className="mt-14 text-3xl">Major themes</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {themes.map(([t, d]) => (
          <Panel key={t} className="p-5">
            <p className="font-display text-lg">{t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </Panel>
        ))}
      </div>

      <Panel className="mt-12 border-primary/40">
        <h2 className="text-2xl">On quotations</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          This site does not paraphrase Gurbani as if it were quotation. Scriptural passages are added only
          with the ang reference, the Gurmukhi original, an attributed translation and its translator —
          provenance shown every time. Where a translation is disputed, alternatives are shown side by side.
        </p>
      </Panel>

      <h2 className="mt-14 text-3xl">Other Sikh texts</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {otherTexts.map((o) => (
          <Panel key={o.t}>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl">{o.t}</h3>
              <SourceTag label={o.l} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.d}</p>
          </Panel>
        ))}
      </div>
    </PageShell>
  );
}
