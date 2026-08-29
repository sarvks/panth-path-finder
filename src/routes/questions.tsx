import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Panel } from "@/components/site/SiteChrome";
import { questions } from "@/data/sikhism";

export const Route = createFileRoute("/questions")({
  head: () => ({
    meta: [
      { title: "Questions and Misconceptions About Sikhism" },
      {
        name: "description",
        content:
          "Nuanced answers to common questions: is Sikhism a branch of Hinduism, do Sikhs worship the Guru Granth Sahib, why uncut hair, what is the kirpan, Sikh versus Khalsa.",
      },
      { property: "og:title", content: "Questions and Misconceptions About Sikhism" },
      {
        property: "og:description",
        content: "Careful answers to the questions people actually ask — no one-line declarations.",
      },
    ],
  }),
  component: QuestionsPage,
});

function QuestionsPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell
      eyebrow="Questions"
      title="Myths and misconceptions"
      gurmukhi="ਸਵਾਲ"
      lede="Most misunderstandings about Sikhism come from compressing it into a neighbouring tradition. These answers stay nuanced rather than tidy."
    >
      <div className="grid gap-3">
        {questions.map((q, i) => (
          <Panel key={q.q} className="p-0">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-display text-lg">{q.q}</span>
              <span className="text-primary">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <p className="animate-rise border-t border-border/60 p-5 leading-relaxed text-muted-foreground">
                {q.a}
              </p>
            )}
          </Panel>
        ))}
      </div>

      <Panel className="mt-10 border-primary/40">
        <h2 className="text-2xl">Ask Sikhism</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          A guided research interface is planned: questions answered from this site's curated, cited
          knowledge base, with every answer showing its sources and saying plainly when confidence is low.
          It will never generate Gurbani quotations.
        </p>
      </Panel>
    </PageShell>
  );
}
