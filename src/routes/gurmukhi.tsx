import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Panel } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/gurmukhi")({
  head: () => ({
    meta: [
      { title: "Gurmukhi — Learn the Script of Punjabi and Gurbani" },
      {
        name: "description",
        content:
          "An introduction to the Gurmukhi script: the 35 akhar, vowels and matras, numbers, pronunciation, and a path toward reading Gurbani.",
      },
      { property: "og:title", content: "Gurmukhi — The Script of Gurbani" },
      {
        property: "og:description",
        content: "Learn the letters Guru Angad standardised, and how they carry Punjabi and Sikh scripture.",
      },
    ],
  }),
  component: GurmukhiPage,
});

const akhar: [string, string][] = [
  ["ੳ", "ura"], ["ਅ", "aira"], ["ੲ", "iri"], ["ਸ", "sassa"], ["ਹ", "haha"],
  ["ਕ", "kakka"], ["ਖ", "khakha"], ["ਗ", "gagga"], ["ਘ", "ghagha"], ["ਙ", "nganga"],
  ["ਚ", "chacha"], ["ਛ", "chhachha"], ["ਜ", "jajja"], ["ਝ", "jhajha"], ["ਞ", "njanja"],
  ["ਟ", "tainka"], ["ਠ", "thattha"], ["ਡ", "dadda"], ["ਢ", "dhadha"], ["ਣ", "nanna"],
  ["ਤ", "tatta"], ["ਥ", "thattha"], ["ਦ", "dadda"], ["ਧ", "dhadha"], ["ਨ", "nanna"],
  ["ਪ", "pappa"], ["ਫ", "phapha"], ["ਬ", "babba"], ["ਭ", "bhabha"], ["ਮ", "mamma"],
  ["ਯ", "yayya"], ["ਰ", "rara"], ["ਲ", "lalla"], ["ਵ", "vava"], ["ੜ", "rarra"],
];

const numbers: [string, string][] = [
  ["੦", "0"], ["੧", "1"], ["੨", "2"], ["੩", "3"], ["੪", "4"],
  ["੫", "5"], ["੬", "6"], ["੭", "7"], ["੮", "8"], ["੯", "9"],
];

const words: [string, string, string][] = [
  ["ਸਤਿ", "sat", "truth"],
  ["ਨਾਮ", "naam", "the Name"],
  ["ਗੁਰੂ", "guru", "teacher, light-giver"],
  ["ਸੇਵਾ", "seva", "service"],
  ["ਸੰਗਤ", "sangat", "congregation"],
  ["ਲੰਗਰ", "langar", "community kitchen"],
  ["ਹੁਕਮ", "hukam", "divine order"],
  ["ਪੰਥ", "panth", "path, community"],
];

function GurmukhiPage() {
  const [selected, setSelected] = useState(0);
  const letter = akhar[selected]!;

  return (
    <PageShell
      eyebrow="Language"
      title="Gurmukhi"
      gurmukhi="ਗੁਰਮੁਖੀ"
      lede="'From the mouth of the Guru.' Guru Angad standardised this script so that Punjabi speech and the Gurus' compositions could be written without depending on scholarly languages controlled by elites."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
        <div>
          <h2 className="text-2xl">The 35 akhar</h2>
          <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-7">
            {akhar.map(([ch, name], i) => (
              <button
                key={name + i}
                onClick={() => setSelected(i)}
                className={`surface-panel rounded-lg py-4 transition-colors ${
                  i === selected ? "border-primary/70" : "hover:border-accent/50"
                }`}
                aria-label={name}
              >
                <span className="gurmukhi block text-2xl">{ch}</span>
                <span className="mt-1 block text-[11px] text-muted-foreground">{name}</span>
              </button>
            ))}
          </div>

          <h2 className="mt-12 text-2xl">Numbers</h2>
          <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-10">
            {numbers.map(([g, n]) => (
              <Panel key={n} className="p-3 text-center">
                <span className="gurmukhi block text-xl">{g}</span>
                <span className="text-xs text-muted-foreground">{n}</span>
              </Panel>
            ))}
          </div>

          <h2 className="mt-12 text-2xl">First vocabulary</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {words.map(([g, t, m]) => (
              <Panel key={t} className="flex items-baseline gap-3 p-4">
                <span className="gurmukhi text-2xl text-accent">{g}</span>
                <span className="font-display">{t}</span>
                <span className="ml-auto text-sm text-muted-foreground">{m}</span>
              </Panel>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Panel className="text-center">
            <span className="gurmukhi animate-onkar block text-8xl">{letter[0]}</span>
            <p className="font-display mt-4 text-2xl">{letter[1]}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Letter {selected + 1} of 35. Gurmukhi is written left to right, hanging from a top line, with
              vowel marks (matras) attached above, below and beside the consonant.
            </p>
          </Panel>
          <Panel className="mt-4">
            <p className="text-xs tracking-[0.2em] text-primary uppercase">Learning path</p>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>1 · Letters and sounds</li>
              <li>2 · Matras and syllables</li>
              <li>3 · Reading simple words</li>
              <li>4 · Sikh terminology</li>
              <li>5 · Reading Gurbani with transliteration</li>
              <li>6 · Reading Gurbani unaided</li>
            </ol>
          </Panel>
        </aside>
      </div>
    </PageShell>
  );
}
