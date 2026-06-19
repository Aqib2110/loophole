"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

type Tier = {
  id: "scratch" | "pro" | "studio";
  name: string;
  price: number;
  suffix: string;
  desc: string;
  features: string[];
  cta: string;
  highlight: boolean;
};

const tiers = (yearly: boolean): Tier[] => [
  {
    id: "scratch",
    name: "Scratchpad",
    price: 0,
    suffix: "forever",
    desc: "For when you just need to start writing again.",
    features: [
      "Unlimited notes",
      "Basic AI analysis (50 runs/mo)",
      "Web + mobile capture",
      "7-day note history",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    id: "pro",
    name: "Operator",
    price: yearly ? 19 : 24,
    suffix: yearly ? "/mo · billed yearly" : "/mo",
    desc: "For solo founders who think in writing every day.",
    features: [
      "Live analysis (unlimited)",
      "Voice + screenshot capture",
      "Frameworks: ICE, JTBD, Lenny's bar",
      "Morning brief at 6am",
      "Connected memory across all notes",
      "Priority models (GPT-class)",
    ],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    id: "studio",
    name: "Studio",
    price: yearly ? 49 : 59,
    suffix: yearly ? "/mo · billed yearly" : "/mo",
    desc: "For multi-product solopreneurs running 2+ bets.",
    features: [
      "Everything in Operator",
      "Separate workspaces (up to 5)",
      "Bring-your-own-API-key option",
      "Custom agents & frameworks",
      "API access",
      "1-on-1 onboarding call",
    ],
    cta: "Talk to founder",
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  const data = tiers(yearly);

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="font-mono uppercase tracking-[0.22em] text-xs text-accent mb-4">
            // 03 — Pricing
          </p>
          <h2
            data-testid="pricing-heading"
            className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-balance"
          >
            Priced like a coffee.
            <br />
            <span className="text-zinc-500">Works like a co-founder.</span>
          </h2>
        </div>

        <div className="flex items-center gap-3 mb-10">
          <button
            data-testid="billing-monthly"
            onClick={() => setYearly(false)}
            className={`text-sm rounded-full px-4 py-2 transition-colors ${
              !yearly
                ? "bg-zinc-50 text-zinc-950 font-semibold"
                : "text-zinc-400 hover:text-zinc-50"
            }`}
          >
            Monthly
          </button>
          <button
            data-testid="billing-yearly"
            onClick={() => setYearly(true)}
            className={`inline-flex items-center gap-2 text-sm rounded-full px-4 py-2 transition-colors ${
              yearly
                ? "bg-zinc-50 text-zinc-950 font-semibold"
                : "text-zinc-400 hover:text-zinc-50"
            }`}
          >
            Yearly
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent bg-accent/10 border border-accent/40 rounded-full px-2 py-0.5">
              save 20%
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {data.map((t) => (
            <article
              key={t.id}
              data-testid={`pricing-card-${t.id}`}
              className={`relative rounded-2xl p-7 md:p-8 flex flex-col ${
                t.highlight
                  ? "border border-accent/60 bg-zinc-900/70 accent-glow"
                  : "border border-zinc-800 bg-zinc-900/40"
              }`}
            >
              {t.highlight && (
                <span
                  data-testid="popular-badge"
                  className="absolute -top-3 left-7 inline-flex items-center gap-1.5 bg-accent text-ink font-mono uppercase tracking-[0.18em] text-[10px] font-bold rounded-full px-3 py-1"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                  Most popular
                </span>
              )}
              <h3 className="font-display font-bold text-zinc-50 text-2xl">
                {t.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 min-h-[40px]">{t.desc}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display font-black tracking-tighter text-5xl md:text-6xl text-zinc-50">
                  ${t.price}
                </span>
                <span className="pb-2 text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
                  {t.suffix}
                </span>
              </div>

              <a
                href="#cta"
                data-testid={`pricing-cta-${t.id}`}
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  t.highlight
                    ? "bg-accent hover:bg-accent-hover text-ink"
                    : "border border-zinc-700 hover:border-zinc-400 text-zinc-50"
                }`}
              >
                {t.cta}
                <ArrowRight size={16} />
              </a>

              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span
                      className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        t.highlight
                          ? "bg-accent text-ink"
                          : "bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">
          Cancel anytime · 30-day refund · No surprise charges
        </p>
      </div>
    </section>
  );
}
