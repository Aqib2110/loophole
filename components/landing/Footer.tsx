import { Github, Twitter, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Manifesto", "Blog", "Press kit", "Contact"],
  },
  {
    title: "Resources",
    links: ["Solo founder guide", "Frameworks", "Templates", "API", "Security"],
  },
];

const socials = [
  { Icon: Twitter, label: "twitter" },
  { Icon: Github, label: "github" },
  { Icon: Linkedin, label: "linkedin" },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-zinc-900/80 pt-20 pb-10"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a
              href="#top"
              data-testid="footer-logo"
              className="flex items-center gap-2"
            >
              <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-accent">
                <span className="font-display font-black text-ink text-sm leading-none">
                  L
                </span>
              </span>
              <span className="font-display font-bold tracking-tight text-lg">
                Loophole
              </span>
            </a>
            <p className="mt-5 text-zinc-400 max-w-sm leading-relaxed">
              The 24/7 live-analysis notepad for solo entrepreneurs. Made by
              two solo founders in Bangalore &amp; Lisbon.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`footer-social-${label}`}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 hover:text-accent hover:border-zinc-600 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="font-mono uppercase tracking-[0.22em] text-[10px] text-zinc-500 mb-4">
                  {c.title}
                </p>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        data-testid={`footer-link-${l
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                        className="text-sm text-zinc-300 hover:text-accent transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-900/80 pt-10">
          <p
            aria-hidden
            className="font-display font-black tracking-tighter text-[18vw] leading-[0.85] text-zinc-900 select-none pointer-events-none"
          >
            loophole.
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-zinc-500 font-mono uppercase tracking-[0.18em]">
          <span>© {new Date().getFullYear()} Loophole Labs · v0.9.2</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              DPA
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
