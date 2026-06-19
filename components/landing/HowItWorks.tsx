type Step = {
  n: string;
  title: string;
  body: string;
  tag: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Brain-dump like a maniac.",
    body: "Type, paste, voice-memo, or drag screenshots in. No structure required — Loophole prefers messy.",
    tag: "Capture",
  },
  {
    n: "02",
    title: "Watch it think back.",
    body: "Our analysis engine runs in real-time. Decisions, contradictions, risks, drafts and TODOs appear in a sidebar — never blocking your flow.",
    tag: "Analyse",
  },
  {
    n: "03",
    title: "Wake up to clarity.",
    body: "Every morning at 6am, Loophole hands you a 1-page brief: what shifted, what's overdue, what you should kill, what you should ship.",
    tag: "Compound",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-testid="how-it-works-section"
      className="relative py-24 md:py-32 border-t border-zinc-900/80 bg-zinc-950/40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono uppercase tracking-[0.22em] text-xs text-accent mb-4">
              // 02 — How it works
            </p>
            <h2
              data-testid="how-heading"
              className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-balance"
            >
              Three steps.
              <br />
              <span className="text-zinc-500">Zero ceremony.</span>
            </h2>
            <p className="mt-6 text-zinc-400 max-w-md">
              Most &ldquo;AI note apps&rdquo; make you set up tags, folders,
              templates. Loophole works the moment you start typing.
            </p>
          </div>

          <ol className="lg:col-span-8 space-y-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                data-testid={`step-${s.n}`}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all p-6 md:p-8 flex items-start gap-6"
              >
                <div className="shrink-0">
                  <div className="font-display font-black tracking-tighter text-5xl md:text-6xl text-zinc-800 group-hover:text-accent transition-colors">
                    {s.n}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-zinc-500">
                      {s.tag}
                    </span>
                    <span className="h-px w-8 bg-zinc-800" />
                  </div>
                  <h3 className="font-display font-bold tracking-tight text-2xl md:text-3xl text-zinc-50">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-zinc-400 leading-relaxed max-w-2xl">
                    {s.body}
                  </p>
                </div>

                {i !== steps.length - 1 && (
                  <span className="absolute left-10 -bottom-2 hidden md:block h-4 w-px bg-zinc-800" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
