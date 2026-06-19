import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none  absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-accent opacity-[0.08] blur-[120px]" />
      <div className="grain-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center gap-3 mb-7 animate-fade-up">
          <span className="inline-flex h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          <span
            data-testid="hero-eyebrow"
            className="font-mono uppercase tracking-[0.22em] text-xs text-zinc-400"
          >
            Live · v0.9 beta open
          </span>
        </div>

        <h1
          data-testid="hero-headline"
          className="font-display font-black tracking-tighter leading-[0.95] text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] max-w-5xl text-balance break-words animate-fade-up"
          style={{ animationDelay: "60ms" }}
        >
          A 24/7 live analysis{" "}
          <span className="relative inline-block">
            <span className="relative z-10">notepad</span>
            <span className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/60 -skew-x-6 z-0" />
          </span>{" "}
          <br className="hidden sm:block" />
          built for solo entrepreneurs.
        </h1>

        <p
          data-testid="hero-subhead"
          className="mt-7 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed animate-fade-up"
          style={{ animationDelay: "140ms" }}
        >
          Loophole is your second brain that actually thinks. Drop in messy
          notes, voice memos, screenshots — your AI co-founder analyses them
          in real-time and ships back decisions, drafts, and next steps
          before your coffee gets cold.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          <a
            href="#cta"
            data-testid="hero-primary-cta"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-ink font-bold rounded-full px-6 py-3.5 text-sm md:text-base transition-colors"
          >
            Start journaling free
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#how-it-works"
            data-testid="hero-secondary-cta"
            className="inline-flex items-center gap-2 bg-transparent border border-zinc-700 hover:border-zinc-400 text-zinc-50 rounded-full px-6 py-3.5 text-sm md:text-base transition-colors"
          >
            <Play size={14} className="text-accent" fill="#D4FF00" />
            Watch 90-sec demo
          </a>
        </div>

        <div
          className="mt-7 flex items-center gap-4 text-xs text-zinc-500 font-mono uppercase tracking-[0.18em] animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <span>No credit card</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span>Free forever plan</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span>Encrypted at rest</span>
        </div>

        <div
          className="relative mt-16 md:mt-24 animate-fade-up"
          style={{ animationDelay: "420ms" }}
          data-testid="hero-app-preview"
        >
          <div className="absolute -inset-x-12 -inset-y-8 bg-accent/10 blur-3xl rounded-[40px] pointer-events-none" />
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-900/80 bg-zinc-950">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-800" />
                <span className="h-3 w-3 rounded-full bg-zinc-800" />
                <span className="h-3 w-3 rounded-full bg-zinc-800" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                loophole.app / scratchpad
              </span>
              <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                LIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-3 p-6 md:p-8 border-r border-zinc-900/80 min-h-[320px]">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
                  Tue · 09:42 · Free-write
                </p>
                <div className="space-y-3 text-zinc-200 text-[15px] leading-relaxed font-body">
                  <p>
                    Stuck on pricing. Pro tier is too close to free. Three
                    customers churned saying &ldquo;I don&rsquo;t see the
                    upgrade&rdquo;.
                  </p>
                  <p>
                    Idea — squeeze advanced AI agents into Pro only. Bump
                    price to $24. Keep free generous on writing, kill it on{" "}
                    <span className="bg-accent/20 text-accent px-1 rounded">
                      analysis
                    </span>
                    .
                  </p>
                  <p className="text-zinc-400">
                    Need to draft the migration email for the 412 existing Pro
                    users without freaking them out
                    <span className="inline-block w-[2px] h-4 bg-accent ml-1 animate-blink" />
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 p-6 md:p-8 bg-zinc-950/60 space-y-5">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    Live analysis
                  </span>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Decision
                  </p>
                  <p className="text-sm text-zinc-100 leading-relaxed">
                    Raise Pro to <b className="text-accent">$24/mo</b>. Move
                    Live Analysis behind the paywall. Grandfather existing 412
                    users for 6 months.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Drafted for you
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
                    &ldquo;Hey Sam — wanted to give you a heads up before
                    anyone else. We&rsquo;re sharpening Pro around live AI
                    analysis…&rdquo;
                  </p>
                  <button
                    data-testid="hero-preview-open-email"
                    className="mt-3 text-xs font-semibold text-accent hover:underline"
                  >
                    Open email →
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {["Risk", "ARR Δ", "Conf."].map((label, i) => (
                    <div
                      key={label}
                      className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2"
                    >
                      <p className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">
                        {label}
                      </p>
                      <p className="text-sm font-display font-bold text-zinc-50">
                        {["Low", "+38%", "92%"][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
