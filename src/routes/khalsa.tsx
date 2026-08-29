import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/khalsa")({
  head: () => ({
    meta: [
      { title: "The Khalsa — 1699, Amrit, the Five Ks and Rehat" },
      {
        name: "description",
        content:
          "The founding of the Khalsa at Anandpur Sahib in 1699: the Panj Pyare, Amrit Sanchar, Singh and Kaur, the Five Ks, Rehat and modern practice.",
      },
      { property: "og:title", content: "The Khalsa" },
      {
        property: "og:description",
        content: "Vaisakhi 1699 and the discipline that gave Sikh identity a visible form.",
      },
    ],
  }),
  component: KhalsaPage,
});

const fiveKs = [
  ["Kes", "ਕੇਸ", "Uncut hair — acceptance of the form given, kept with care under the dastaar."],
  ["Kangha", "ਕੰਘਾ", "A wooden comb — order and cleanliness against unkempt renunciation."],
  ["Kara", "ਕੜਾ", "A steel bracelet — a restraint on the hand, a reminder before acting."],
  ["Kachera", "ਕਛਹਿਰਾ", "A cotton undergarment — modesty, restraint and readiness."],
  ["Kirpan", "ਕਿਰਪਾਨ", "A sword — the obligation to defend the defenceless, never to intimidate."],
];

function KhalsaPage() {
  return (
    <PageShell
      eyebrow="Khalsa"
      title="Vaisakhi 1699"
      gurmukhi="ਖ਼ਾਲਸਾ"
      lede="At Anandpur Sahib, Guru Gobind Singh called for heads, initiated five volunteers from different castes and regions, and then asked them to initiate him. Hierarchy was inverted at the moment of founding."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel>
          <h2 className="text-2xl">The Panj Pyare</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The Five Beloved came from Lahore, Hastinapur, Dwarka, Jagannath Puri and Bidar, and from
            castes ranked far apart. They received Amrit together from one bowl, took the name Singh, and
            became the body through which initiation continues to this day.
          </p>
        </Panel>
        <Panel>
          <h2 className="text-2xl">Amrit Sanchar</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Initiation is administered by five initiated Sikhs in the presence of the Guru Granth Sahib.
            Amrit is prepared with water and patase, stirred with a khanda while five banis are recited.
            The initiate accepts the Rehat, the Five Ks and the names Singh or Kaur.
          </p>
        </Panel>
      </div>

      <h2 className="mt-14 text-3xl">The Five Ks</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {fiveKs.map(([n, g, d]) => (
          <Panel key={n} className="p-5">
            <p className="gurmukhi text-2xl text-accent">{g}</p>
            <p className="font-display mt-2 text-lg">{n}</p>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Panel>
          <h2 className="text-2xl">Singh and Kaur</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Shared names replaced caste surnames, which in Punjab announced a person's rank the moment they
            were spoken. Kaur, taken by women, is not a husband's name — it marks independent standing, an
            unusual provision in the seventeenth century.
          </p>
        </Panel>
        <Panel>
          <h2 className="text-2xl">Initiation and identity today</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Amritdhari Sikhs are initiated and keep the full Rehat; Keshdhari Sikhs keep uncut hair without
            formal initiation; Sahajdhari Sikhs follow the Gurus without the outward form. Communities
            differ on where the boundaries of identity lie, and the debate is itself part of modern Sikh
            history.
          </p>
        </Panel>
      </div>
    </PageShell>
  );
}
