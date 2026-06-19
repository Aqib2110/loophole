"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

const faqs: Item[] = [
  {
    q: "What does 'live analysis' actually mean?",
    a: "Loophole runs a private LLM over your active note every few seconds. It surfaces decisions, contradictions, risks, missing data and one recommended next action — in a panel beside your text. You stay in the writer's seat; the analysis just keeps up.",
  },
  {
    q: "Is my data used to train models?",
    a: "No. Your notes are encrypted at rest, never used for training, and you can hard-delete a workspace at any time. We are SOC 2 Type I (in progress) and self-hostable on the Studio plan.",
  },
  {
    q: "Why is this better than ChatGPT + Notion?",
    a: "ChatGPT forgets. Notion doesn't think. Loophole is built around one job — being the trusted thinking partner for a solo founder. It remembers every decision you made in March and pings you when your Tuesday note contradicts it.",
  },
  {
    q: "What models do you use?",
    a: "A mix of frontier (GPT-class & Claude) for synthesis and small open-source models for live, low-latency analysis. On Studio you can bring your own API key.",
  },
  {
    q: "Does it work offline?",
    a: "Capture works fully offline on web + mobile. Analysis syncs the moment you reconnect.",
  },
  {
    q: "Is there really a free forever plan?",
    a: "Yes. 50 AI analyses per month, unlimited notes, 7-day history. No credit card. We'd rather you fall in love before you pay.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((curr) => (curr === i ? null : i));

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 md:py-32 border-t border-zinc-900/80 bg-zinc-950/40"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <p className="font-mono uppercase tracking-[0.22em] text-xs text-accent mb-4">
            // 04 — FAQ
          </p>
          <h2
            data-testid="faq-heading"
            className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-balance"
          >
            The honest answers
            <br />
            <span className="text-zinc-500">
              to the questions you&rsquo;d ask.
            </span>
          </h2>
        </div>

        <div className="w-full divide-y divide-zinc-800">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                data-testid={`faq-item-${i}`}
                data-state={open ? "open" : "closed"}
              >
                <button
                  data-testid={`faq-trigger-${i}`}
                  aria-expanded={open}
                  onClick={() => toggle(i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left text-base md:text-lg font-display font-semibold text-zinc-50 hover:text-accent transition-colors"
                >
                  <span>{item.q}</span>
                  <span
                    className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all ${
                      open
                        ? "rotate-45 border-accent text-accent"
                        : "group-hover:border-zinc-600"
                    }`}
                  >
                    <Plus size={14} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      data-testid={`faq-content-${i}`}
                      className="pb-6 pr-12 text-zinc-400 leading-relaxed text-[15px] max-w-3xl"
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
