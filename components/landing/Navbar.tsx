"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-zinc-950/70 border-b border-zinc-800/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 sm:h-20 flex items-center justify-between">
        <a
          data-testid="navbar-logo"
          href="#top"
          className="flex items-center gap-2 group"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-accent">
            <span className="absolute inset-0 rounded-md bg-accent blur-md opacity-50 group-hover:opacity-80 transition" />
            <span className="relative font-display font-black text-ink text-sm leading-none">
              L
            </span>
          </span>
          <span className="font-display font-bold tracking-tight text-lg">
            Loophole
          </span>
          <span className="ml-2 hidden md:inline-block text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500 border border-zinc-800 rounded-full px-2 py-0.5">
            beta · v0.9
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            data-testid="nav-login"
            className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Log in
          </a>
          <a
            href="#cta"
            data-testid="nav-cta-button"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-ink font-semibold text-sm rounded-full px-4 py-2 transition-colors"
          >
            Start free
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-zinc-800 text-zinc-300"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden border-t border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl px-6 py-6 space-y-4"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base text-zinc-300 hover:text-accent transition-colors"
              data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            data-testid="mobile-cta-button"
            className="block text-center bg-accent text-ink font-semibold rounded-full px-4 py-3"
          >
            Start free
          </a>
        </div>
      )}
    </header>
  );
}
