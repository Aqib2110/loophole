import type { LucideIcon } from "lucide-react";
import {
  Radar,
  Mic,
  GitBranch,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

type Feature = {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  body: string;
  span: string;
  big?: boolean;
};

const features: Feature[] = [
  {
    id: "live-analysis",
    icon: Radar,
    label: "Live analysis",
    title: "Your notes get smarter as you type.",
    body: "Every keystroke is parsed by a private LLM. Surfacing risks, contradictions, missing data and the *one* next action — without you asking.",
    span: "md:col-span-7",
    big: true,
  },
  {
    id: "voice",
    icon: Mic,
    label: "Voice & mobile",
    title: "Capture in the wild.",
    body: "Walking, driving, showering. Drop a 90-second voice memo, get back a structured journal entry within seconds.",
    span: "md:col-span-5",
  },
  {
    id: "frameworks",
    icon: Workflow,
    label: "Built-in frameworks",
    title: "Lenny, Ravikant, ICE, JTBD.",
    body: "Apply battle-tested founder frameworks to any note. Instant pros/cons, scoring, and recommended next steps.",
    span: "md:col-span-5",
  },
  {
    id: "knowledge",
    icon: GitBranch,
    label: "Connected memory",
    title: "One brain. Searchable forever.",
    body: "Loophole quietly links every note, decision and metric across your business — so 'I thought about this in March' is a one-line query away.",
    span: "md:col-span-7",
  },
  {
    id: "agent",
    icon: Sparkles,
    label: "Always-on agent",
    title: "24/7 watchful eye.",
    body: "Loophole reviews your week at 6am Monday and tells you exactly where you slipped, repeated yourself, or buried the lede.",
    span: "md:col-span-4",
  },
  {
    id: "private",
    icon: ShieldCheck,
    label: "Private by default",
    title: "Your thoughts. Encrypted.",
    body: "End-to-end encrypted at rest. SOC 2 in progress. We don't train on your notes. Ever.",
    span: "md:col-span-4",
  },
  {
    id: "metrics",
    icon: Radar,
    label: "Self-aware metrics",
    title: "Mood, MRR & momentum.",
    body: "Track founder-energy alongside revenue. The only journal that correlates your mental state to your ship rate.",
    span: "md:col-span-4",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="font-mono uppercase tracking-[0.22em] text-xs text-accent mb-4">
            // 01 — Features
          </p>
          <h2
            data-testid="features-heading"
            className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-balance"
          >
            Not a notes app.
            <br />
            <span className="text-zinc-500">A co-founder that listens.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
            Loophole turns the loneliest part of building solo — talking to
            yourself — into your sharpest unfair advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.id}
                data-testid={`feature-card-${f.id}`}
                className={`group relative ${f.span} rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300 overflow-hidden`}
              >
                <div className="p-7 md:p-8 h-full flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-accent">
                      <Icon size={16} />
                    </span>
                    <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-zinc-500">
                      {f.label}
                    </span>
                  </div>
                  <h3
                    className={`font-display font-bold tracking-tight text-zinc-50 ${
                      f.big
                        ? "text-2xl md:text-3xl lg:text-4xl"
                        : "text-xl md:text-2xl"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-[15px] max-w-md">
                    {f.body}
                  </p>

                  {f.big && (
                    <div className="mt-auto pt-4">
                      <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 font-mono text-[12px] text-zinc-400 leading-relaxed">
                        <p>
                          <span className="text-zinc-600">$</span> analyzing…{" "}
                          <span className="text-accent">3 risks</span>,{" "}
                          <span className="text-accent">1 contradiction</span>,{" "}
                          <span className="text-accent">2 actions</span>
                        </p>
                        <p className="mt-1">
                          <span className="text-zinc-600">→</span> Buried lede:
                          the churn complaints are about pricing, not the
                          product.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
