import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/langar")({
  head: () => ({
    meta: [
      { title: "Langar and Seva — The Sikh Community Kitchen" },
      {
        name: "description",
        content:
          "Langar: origins with Guru Nanak and Guru Amar Das, pangat and equality, the flow from grain to shared meal, seva and global disaster relief.",
      },
      { property: "og:title", content: "Langar and Seva" },
      {
        property: "og:description",
        content: "Equality served on the floor: how the Sikh community kitchen works and why it exists.",
      },
    ],
  }),
  component: LangarPage,
});

const flow = ["Grain", "Kitchen", "Volunteers", "Meal", "Pangat", "Sangat"];

const seva = [
  ["Langar", "Cooking, serving, washing — the most common form of seva."],
  ["Cleaning", "Sweeping and washing floors and shoes, deliberately unglamorous."],
  ["Medical aid", "Clinics, eye camps and blood donation drives run by gurdwaras."],
  ["Disaster relief", "Sikh volunteer kitchens have served in floods, earthquakes and refugee crises worldwide."],
  ["Teaching", "Gurmukhi, kirtan and history classes for children and adults."],
  ["Environmental service", "Tree planting, river cleaning and sarovar maintenance."],
];

function LangarPage() {
  return (
    <PageShell
      eyebrow="Practice"
      title="Langar"
      gurmukhi="ਲੰਗਰ"
      lede="A free kitchen open to anyone, where everyone sits on the floor in the same row. Guru Amar Das made eating in pangat a condition of meeting him — including, tradition holds, for emperors."
    >
      <Panel>
        <div className="flex flex-wrap items-center gap-3">
          {flow.map((f, i) => (
            <div key={f} className="flex items-center gap-3">
              <span
                className="animate-rise rounded-full border border-primary/50 px-4 py-2 text-sm"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {f}
              </span>
              {i < flow.length - 1 && <span className="text-accent">→</span>}
            </div>
          ))}
        </div>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Nothing in the chain is paid for by the person eating, and nothing is means-tested. Food is
          vegetarian so that no one's dietary rules exclude them from the row.
        </p>
      </Panel>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Panel>
          <h2 className="text-2xl">Why it matters theologically</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            In a caste order regulated by who may cook for, serve and eat beside whom, a shared kitchen is
            not hospitality — it is a direct refusal of ritual hierarchy. Langar makes the doctrine of
            equality something a body does, not something a mind assents to.
          </p>
        </Panel>
        <Panel>
          <h2 className="text-2xl">At scale</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The langar at Harmandir Sahib serves on the order of a hundred thousand meals a day, more on
            festivals, run largely by volunteers. Sikh relief organisations have adapted the same logistics
            to disaster zones and food insecurity in many countries.
          </p>
        </Panel>
      </div>

      <h2 className="mt-14 text-3xl">Seva</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {seva.map(([t, d]) => (
          <Panel key={t} className="p-5">
            <p className="font-display text-lg">{t}</p>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </Panel>
        ))}
      </div>

      <Panel className="mt-10">
        <h2 className="text-2xl">Your first visit to a gurdwara</h2>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Cover your head — scarves are provided at the entrance.</li>
          <li>Remove shoes and wash your hands before entering the darbar hall.</li>
          <li>Anyone may enter, of any religion or none. No fee, no registration.</li>
          <li>Sit on the floor; avoid pointing your feet toward the Guru Granth Sahib.</li>
          <li>Bowing is customary but not required of visitors.</li>
          <li>Stay for langar — declining politely is fine, but you are genuinely welcome.</li>
          <li>Photography is often restricted inside the darbar hall; ask first.</li>
          <li>Alcohol, tobacco and intoxicants do not enter the premises.</li>
        </ul>
      </Panel>
    </PageShell>
  );
}
