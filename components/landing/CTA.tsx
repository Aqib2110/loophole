import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      data-testid="cta-section"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 md:p-16">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent opacity-[0.12] blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

          <div className="relative">
            <p className="font-mono uppercase tracking-[0.22em] text-xs text-accent mb-4">
              // Ready when you are
            </p>
            <h2
              data-testid="cta-heading"
              className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-balance max-w-3xl"
            >
              Stop journaling into the void.
              <br />
              <span className="text-zinc-500">
                Start journaling with a brain.
              </span>
            </h2>
            <p className="mt-6 text-zinc-400 text-lg max-w-2xl">
              Free forever. No credit card. Cancel the moment you stop loving
              it (you won&rsquo;t).
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                data-testid="cta-primary-button"
                className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-ink font-bold rounded-full px-7 py-4 text-base transition-colors"
              >
                Start journaling free
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#"
                data-testid="cta-secondary-button"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-zinc-700 hover:border-zinc-400 text-zinc-50 rounded-full px-7 py-4 text-base transition-colors"
              >
                Book a 15-min walkthrough
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono uppercase tracking-[0.18em] text-[11px] text-zinc-500">
              <span>★ 4.9 on Product Hunt</span>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <span>7,400+ active founders</span>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <span>$0 — $59 / mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
