const logos = [
  "Indie Hackers",
  "Product Hunt",
  "Hacker News",
  "Y Combinator",
  "Microacquire",
  "Founder Pad",
  "Solo OS",
  "MicroSaaS Idea",
];

export default function LogoMarquee() {
  const list = [...logos, ...logos];
  return (
    <section
      data-testid="logo-marquee"
      className="relative py-12 md:py-16 border-y border-zinc-900/80 bg-zinc-950/40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-center font-mono uppercase tracking-[0.22em] text-[11px] text-zinc-500 mb-8">
          Trusted by 7,400+ solo founders shipping in public
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max gap-14 animate-ticker">
            {list.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display font-bold text-xl md:text-2xl text-zinc-600 hover:text-zinc-300 transition-colors whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
